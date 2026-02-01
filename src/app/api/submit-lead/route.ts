// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/notifications";
import { insertLead, updateLeadStatus, Lead } from "@/lib/supabase";

// Augusta Zapier webhook - stored in env for security
const AUGUSTA_WEBHOOK_URL = process.env.AUGUSTA_WEBHOOK_URL!;
const AFFILIATE_ID = process.env.AUGUSTA_AFFILIATE_ID || "5129";

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentAmount?: string;
  source?: string;
}

async function sendLeadNotification(lead: Lead, isNew: boolean = true, location?: string) {
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

  const locationLine = location ? `\n🌍 <b>Location:</b> ${location}` : "";
  const ipLine = lead.ip_address && lead.ip_address !== "unknown" ? `\n🔗 <b>IP:</b> ${lead.ip_address}` : "";

  const message = `🎯 <b>${isNew ? "NEW LEAD CAPTURED" : "LEAD SENT TO AUGUSTA"}</b>

👤 <b>Name:</b> ${lead.first_name} ${lead.last_name || ""}
📧 <b>Email:</b> ${lead.email}
📱 <b>Phone:</b> <a href="tel:${lead.phone.replace(/\D/g, '')}">${lead.phone}</a>
📍 <b>Source:</b> ${lead.source || "unknown"}${locationLine}${ipLine}
🕐 <b>Time:</b> ${timestamp}

${isNew ? "💾 <i>Saved to database</i>" : "✅ <i>Submitted to Augusta - they will call!</i>"}`;

  await sendTelegramNotification(message, true); // urgent = true
}

async function submitToAugusta(lead: Lead): Promise<boolean> {
  const payload = {
    firstname: lead.first_name,
    lastname: lead.last_name || "",
    phone: lead.phone,
    email: lead.email,
    affiliate_id: AFFILIATE_ID,
  };

  try {
    console.log("[AUGUSTA] Submitting to webhook:", lead.email);
    const augustaResponse = await fetch(AUGUSTA_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("[AUGUSTA] Response status:", augustaResponse.status);

    if (augustaResponse.ok) {
      console.log("[AUGUSTA] ✅ Lead submitted successfully:", lead.email);
      return true;
    } else {
      const errorText = await augustaResponse.text();
      console.error("[AUGUSTA] ❌ Submission failed:", errorText);
      return false;
    }
  } catch (error) {
    console.error("[AUGUSTA] Submit error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get request metadata
    const userAgent = request.headers.get("user-agent") || "Mozilla/5.0";
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Get location from Vercel geo headers
    const country = request.headers.get("x-vercel-ip-country") || "";
    const city = request.headers.get("x-vercel-ip-city") || "";
    const region = request.headers.get("x-vercel-ip-country-region") || "";
    let location = "";
    if (city && region && country) {
      location = `${decodeURIComponent(city)}, ${region}, ${country}`;
    } else if (city && country) {
      location = `${decodeURIComponent(city)}, ${country}`;
    } else if (country) {
      location = country;
    }

    // 1. Insert lead into Supabase
    const leadData: Omit<Lead, "id" | "created_at"> = {
      first_name: body.firstName,
      last_name: body.lastName || "",
      email: body.email,
      phone: body.phone,
      source: body.source || "unknown",
      ip_address: ip,
      user_agent: userAgent,
      status: "new",
    };

    const lead = await insertLead(leadData);

    if (!lead) {
      console.error("[LEAD] Failed to insert into Supabase");
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    // 2. Send Telegram notification (new lead captured) - must await in serverless!
    console.log("[LEAD] Sending Telegram notification for lead:", lead.email);
    try {
      await sendLeadNotification(lead, true, location);
      console.log("[LEAD] Telegram notification completed");
    } catch (err) {
      console.error("[TELEGRAM ERROR]", err);
    }

    // 3. Submit to Augusta via Zapier webhook
    const augustaSuccess = await submitToAugusta(lead);

    if (augustaSuccess) {
      // Update status and send success notification
      await updateLeadStatus(lead.id!, "sent_to_augusta", {
        augusta_submitted_at: new Date().toISOString(),
        notes: "Auto-submitted to Augusta via webhook",
      });

      // Send second notification confirming Augusta submission
      try {
        await sendLeadNotification(lead, false, location);
      } catch (err) {
        console.error("[TELEGRAM ERROR]", err);
      }
    } else {
      // Keep as new, flag for manual review
      await updateLeadStatus(lead.id!, "new", {
        notes: "Augusta webhook failed - needs manual upload",
      });
    }

    return NextResponse.json({
      success: true,
      message: augustaSuccess ? "Lead submitted to Augusta" : "Lead captured - Augusta submission pending",
      leadId: lead.id,
      augustaSubmitted: augustaSuccess,
    });

  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId, notes, investmentAmount, percentageToProtect } = body;

    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Missing leadId" },
        { status: 400 }
      );
    }

    // Determine what to append to notes
    let noteAppend = "\n[ENRICHMENT DATA]";
    if (investmentAmount) noteAppend += `\nInvestment Amount: ${investmentAmount}`;
    if (percentageToProtect) noteAppend += `\n% To Protect: ${percentageToProtect}`;
    if (notes) noteAppend += `\nUser Notes: ${notes}`;

    // Here we would ideally fetch the current notes first to append, but for speed we'll just use a Supabase RPC or just overwrite if we accept that risk.
    // Actually, we can just update. But wait, if we overwrite 'notes', we lose previous auto-notes.
    // We should fetch first? Or rely on the fact that usually 'notes' is empty or system generated.
    // Let's safe-guard by using `updateLead` directly. Supabase doesn't support 'append' easily without SQL function.
    // We will assume 'notes' field is the place.

    // To be safe: just send the new data as text to the notes field.
    // Ideally we import getLeadById but it wasn't exported? It was.
    const { getLeadById, updateLead } = await import("@/lib/supabase");

    const currentLead = await getLeadById(leadId);
    let finalNotes = currentLead?.notes || "";
    finalNotes += noteAppend;

    const success = await updateLead(leadId, { notes: finalNotes });

    if (success) {
      return NextResponse.json({ success: true, message: "Lead enriched" });
    } else {
      return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
    }

  } catch (error) {
    console.error("Lead update error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
