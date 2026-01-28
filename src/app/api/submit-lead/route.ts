// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/notifications";
import { insertLead, updateLeadStatus, Lead } from "@/lib/supabase";

const AUGUSTA_FORM_URL = "https://www.augustapreciousmetals.com/instant-download-thank-you-high/";

// Your affiliate tracking IDs
const AFFILIATE_PARAMS = {
  aff_id: "5129",
  apmtrkr_cid: "1696",
};

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

async function submitToAugusta(lead: Lead, userAgent: string): Promise<boolean> {
  const formData = new URLSearchParams({
    first_name: lead.first_name,
    last_name: lead.last_name || "",
    email: lead.email,
    phone_number: lead.phone,
    ...AFFILIATE_PARAMS,
    optin_page: lead.source || "richdadretirement.com/get-started",
  });

  try {
    const augustaResponse = await fetch(AUGUSTA_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": userAgent,
        "Origin": "https://learn.augustapreciousmetals.com",
        "Referer": "https://learn.augustapreciousmetals.com/apm-aff-lp-1-v3",
      },
      body: formData.toString(),
      redirect: "manual",
    });

    // Log full response for debugging
    const responseText = await augustaResponse.text();
    console.log("[AUGUSTA] Status:", augustaResponse.status);
    console.log("[AUGUSTA] Headers:", Object.fromEntries(augustaResponse.headers.entries()));
    console.log("[AUGUSTA] Body (first 500 chars):", responseText.slice(0, 500));

    // Augusta typically redirects on success (302/303)
    return augustaResponse.status >= 200 && augustaResponse.status < 400;
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

    // 2. Send Telegram notification (new lead captured)
    sendLeadNotification(lead, true).catch(err =>
      console.error("[TELEGRAM ERROR]", err)
    );

    // 3. Augusta submission DISABLED - waiting for correct endpoint from Frieda
    // TODO: Re-enable once Augusta confirms the correct API endpoint
    // const augustaSuccess = await submitToAugusta(lead, userAgent);

    console.log("[AUGUSTA DISABLED] Lead saved to Supabase for manual upload:", lead.email);

    // Update status to indicate manual upload needed
    await updateLeadStatus(lead.id!, "new", {
      notes: "Augusta auto-submit disabled - upload manually to Augusta dashboard",
    });

    return NextResponse.json({
      success: true,
      message: "Lead captured - pending manual upload to Augusta",
      leadId: lead.id,
    });

  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
