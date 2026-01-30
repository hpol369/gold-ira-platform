// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/notifications";
import { insertLead, updateLeadStatus, Lead } from "@/lib/supabase";

// Augusta Zapier webhook (from Meghana)
const AUGUSTA_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23459703/ug0phj9/";
const AFFILIATE_ID = "5129";

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentAmount?: string;
  source?: string;
}

async function sendLeadNotification(lead: Lead, isNew: boolean = true) {
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

  const message = `🎯 <b>${isNew ? "NEW LEAD CAPTURED" : "LEAD SENT TO AUGUSTA"}</b>

👤 <b>Name:</b> ${lead.first_name} ${lead.last_name || ""}
📧 <b>Email:</b> ${lead.email}
📱 <b>Phone:</b> ${lead.phone}
📍 <b>Source:</b> ${lead.source || "unknown"}
🕐 <b>Time:</b> ${timestamp}
🆔 <b>Lead ID:</b> ${lead.id?.slice(0, 8)}...

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
      await sendLeadNotification(lead, true);
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
        await sendLeadNotification(lead, false);
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
