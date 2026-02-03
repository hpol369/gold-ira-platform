// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification, editTelegramMessage } from "@/lib/notifications";
import { insertLead, updateLeadStatus, updateLead, Lead } from "@/lib/supabase";

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

// Detect traffic source and return emoji + label
function getTrafficSourceDisplay(source: string): { emoji: string; label: string } {
  const sourceLower = source.toLowerCase();

  if (sourceLower.includes("youtube")) {
    return { emoji: "🎬", label: "YouTube" };
  }
  if (sourceLower.includes("google") || sourceLower.includes("organic")) {
    return { emoji: "🔍", label: "Google Search" };
  }
  if (sourceLower.includes("facebook") || sourceLower.includes("fb")) {
    return { emoji: "📘", label: "Facebook" };
  }
  if (sourceLower.includes("instagram") || sourceLower.includes("ig")) {
    return { emoji: "📸", label: "Instagram" };
  }
  if (sourceLower.includes("tiktok")) {
    return { emoji: "🎵", label: "TikTok" };
  }
  if (sourceLower.includes("twitter") || sourceLower.includes("x.com")) {
    return { emoji: "🐦", label: "Twitter/X" };
  }
  if (sourceLower.includes("email") || sourceLower.includes("newsletter")) {
    return { emoji: "📧", label: "Email" };
  }
  if (sourceLower.includes("quiz")) {
    return { emoji: "📝", label: "Quiz" };
  }
  if (sourceLower.includes("lp-") || sourceLower.includes("landing")) {
    return { emoji: "📄", label: "Landing Page" };
  }

  return { emoji: "🌐", label: source || "Direct" };
}

async function sendLeadNotification(lead: Lead, isNew: boolean = true, location?: string): Promise<number | null> {
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const trafficSource = getTrafficSourceDisplay(lead.source || "unknown");

  const locationLine = location ? `\n🌍 <b>Location:</b> ${location}` : "";
  const ipLine = lead.ip_address && lead.ip_address !== "unknown" ? `\n🔗 <b>IP:</b> ${lead.ip_address}` : "";

  const message = `🎯 <b>${isNew ? "NEW LEAD CAPTURED" : "LEAD SENT TO AUGUSTA"}</b>

👤 <b>Name:</b> ${lead.first_name} ${lead.last_name || ""}
📧 <b>Email:</b> ${lead.email}
📱 <b>Phone:</b> <a href="tel:${lead.phone.replace(/\D/g, '')}">${lead.phone}</a>
${trafficSource.emoji} <b>Source:</b> ${trafficSource.label}${locationLine}${ipLine}
🕐 <b>Time:</b> ${timestamp}

${isNew ? "⏳ <i>Waiting for enrichment...</i>" : "✅ <i>Submitted to Augusta - they will call!</i>"}`;

  return await sendTelegramNotification(message, true); // urgent = true, returns message_id
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
    let telegramMessageId: number | null = null;
    try {
      telegramMessageId = await sendLeadNotification(lead, true, location);
      console.log("[LEAD] Telegram notification completed, message_id:", telegramMessageId);

      // Save message_id for later editing when enrichment comes in
      if (telegramMessageId && lead.id) {
        await updateLead(lead.id, { telegram_message_id: telegramMessageId });
      }
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
    const { leadId, totalRetirementSavings, percentageToProtect } = body;

    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Missing leadId" },
        { status: 400 }
      );
    }

    // Import utilities
    const { getLeadById, updateLead: updateLeadDb } = await import("@/lib/supabase");
    const { calculatePotentialDeal, formatCurrency, getSavingsLabel, getHotLeadIndicator } = await import("@/lib/deal-calculator");

    // Get lead first to access telegram_message_id
    const lead = await getLeadById(leadId);
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    // Calculate deal potential
    const deal = calculatePotentialDeal(totalRetirementSavings, percentageToProtect);

    // Update lead with dedicated columns
    const success = await updateLeadDb(leadId, {
      total_retirement_savings: totalRetirementSavings,
      percentage_to_protect: percentageToProtect,
      potential_deal_min: deal.min,
      potential_deal_max: deal.max,
      is_qualified: true, // All enrichment completers are qualified (no under_50k option)
    });

    if (!success) {
      return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
    }

    // Edit existing Telegram message or send new one
    if (totalRetirementSavings && percentageToProtect) {
      const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });
      const trafficSource = getTrafficSourceDisplay(lead.source || "unknown");
      const savingsLabel = getSavingsLabel(totalRetirementSavings);
      const dealRange = `${formatCurrency(deal.min)} - ${formatCurrency(deal.max)}`;
      const hotIndicator = getHotLeadIndicator(deal.max);

      // Build updated message with all info
      const updatedMessage = `🎯 <b>NEW LEAD CAPTURED</b>

👤 <b>Name:</b> ${lead.first_name} ${lead.last_name || ""}
📧 <b>Email:</b> ${lead.email}
📱 <b>Phone:</b> <a href="tel:${lead.phone.replace(/\D/g, '')}">${lead.phone}</a>
${trafficSource.emoji} <b>Source:</b> ${trafficSource.label}
🕐 <b>Time:</b> ${timestamp}

💵 <b>Savings:</b> ${savingsLabel}
📊 <b>% to Protect:</b> ${percentageToProtect}%
💎 <b>Potential Deal:</b> ${dealRange}

✅ <b>QUALIFIED</b>${hotIndicator ? `\n${hotIndicator}` : ""}`;

      // Try to edit existing message, fall back to new message
      if (lead.telegram_message_id) {
        console.log("[TELEGRAM] Editing message:", lead.telegram_message_id);
        await editTelegramMessage(lead.telegram_message_id, updatedMessage);
      } else {
        console.log("[TELEGRAM] No message_id found, sending new message");
        await sendTelegramNotification(updatedMessage, deal.max >= 100000);
      }
    }

    return NextResponse.json({ success: true, message: "Lead enriched" });

  } catch (error) {
    console.error("Lead update error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
