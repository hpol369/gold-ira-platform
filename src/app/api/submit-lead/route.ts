// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { insertLead, updateLeadStatus, updateLead, getLeadById, Lead } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";
import { calculatePotentialDeal } from "@/lib/deal-calculator";

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
      headers: { "Content-Type": "application/json" },
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

    // 2. Send initial Telegram notification
    console.log("[LEAD] Sending Telegram notification for lead:", lead.email);
    try {
      const messageId = await updateLeadNotification(lead, location);
      console.log("[LEAD] Telegram notification sent, message_id:", messageId);

      // Save message_id for later updates
      if (messageId && lead.id) {
        await updateLead(lead.id, { telegram_message_id: messageId });
        lead.telegram_message_id = messageId;
      }
    } catch (err) {
      console.error("[TELEGRAM ERROR]", err);
    }

    // 3. Submit to Augusta via Zapier webhook
    const augustaSuccess = await submitToAugusta(lead);

    if (augustaSuccess) {
      // Update status
      await updateLeadStatus(lead.id!, "sent_to_augusta", {
        augusta_submitted_at: new Date().toISOString(),
      });
      lead.status = "sent_to_augusta";

      // Update the same Telegram message with new status
      try {
        await updateLeadNotification(lead, location);
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
    const { leadId, totalRetirementSavings, percentageToProtect, notes } = body;

    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Missing leadId" },
        { status: 400 }
      );
    }

    // Get lead first
    const lead = await getLeadById(leadId);
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    // Calculate deal potential (default to 100% if no percentage provided)
    const effectivePercentage = percentageToProtect || "100";
    const deal = calculatePotentialDeal(totalRetirementSavings, effectivePercentage);

    // Build update object
    const updateData: Partial<Lead> = {
      is_qualified: true,
    };

    if (totalRetirementSavings) {
      updateData.total_retirement_savings = totalRetirementSavings;
      updateData.percentage_to_protect = effectivePercentage;
      updateData.potential_deal_min = deal.min;
      updateData.potential_deal_max = deal.max;
    }

    if (notes) {
      // Append to existing notes if any
      updateData.notes = lead.notes ? `${lead.notes} | ${notes}` : notes;
    }

    // Update lead with enrichment data
    const success = await updateLead(leadId, updateData);

    if (!success) {
      return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
    }

    // Update lead object for notification
    if (totalRetirementSavings) {
      lead.total_retirement_savings = totalRetirementSavings;
      lead.percentage_to_protect = effectivePercentage;
      lead.potential_deal_min = deal.min;
      lead.potential_deal_max = deal.max;
    }
    lead.is_qualified = true;
    if (notes) {
      lead.notes = updateData.notes;
    }

    // Update the Telegram notification with enrichment data
    if (totalRetirementSavings) {
      try {
        await updateLeadNotification(lead);
      } catch (err) {
        console.error("[TELEGRAM ERROR]", err);
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
