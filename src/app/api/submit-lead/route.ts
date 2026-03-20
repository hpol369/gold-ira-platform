// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { insertLead, updateLeadStatus, updateLead, getLeadById, getLeadByEmail, Lead } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";
import { calculatePotentialDeal } from "@/lib/deal-calculator";
import { submitToAugusta } from "@/lib/augusta";
import { enrollInSequence } from "@/lib/email-queue";
import { getSequenceForTier } from "@/lib/email-sequences";

// Simple rate limiting (per IP, resets on deploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10; // max submissions per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 254;
}

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "").slice(-10);
}

function isValidPhone(phone: string): boolean {
  const digits = normalizePhone(phone);
  return digits.length === 10 && /^[2-9]/.test(digits);
}

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentAmount?: string;
  source?: string;
  skipAugusta?: boolean;
  // Qualification funnel fields
  savingsTier?: string;
  concern?: string;
  qualificationTier?: string;
  routedTo?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone (must be 10 digits US number)
    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number - must be 10 digit US number" },
        { status: 400 }
      );
    }

    // Sanitize inputs (strip HTML/script tags)
    body.firstName = body.firstName.replace(/<[^>]*>/g, "").trim().slice(0, 100);
    body.lastName = (body.lastName || "").replace(/<[^>]*>/g, "").trim().slice(0, 100);
    body.email = body.email.trim().toLowerCase().slice(0, 254);
    body.phone = normalizePhone(body.phone);

    // Deduplication: check if email already exists
    const existingLead = await getLeadByEmail(body.email);
    if (existingLead) {
      console.log("[LEAD] Duplicate email detected:", body.email);
      // Return success to user but don't create duplicate
      return NextResponse.json({
        success: true,
        message: "Lead received",
        leadId: existingLead.id,
        augustaSubmitted: existingLead.status === "sent_to_augusta",
      });
    }

    // Get request metadata
    const userAgent = request.headers.get("user-agent") || "Mozilla/5.0";

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
      // Qualification funnel fields (columns must exist in Supabase)
      ...(body.savingsTier && { savings_tier: body.savingsTier }),
      ...(body.concern && { concern: body.concern }),
      ...(body.qualificationTier && { qualification_tier: body.qualificationTier }),
      ...(body.routedTo && { routed_to: body.routedTo }),
    };

    const lead = await insertLead(leadData);

    if (!lead) {
      console.error("[LEAD] Failed to insert into Supabase");
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    // 2. Enroll in email nurture sequence based on savings tier
    if (body.savingsTier) {
      try {
        const sequenceId = getSequenceForTier(body.savingsTier);
        await enrollInSequence(lead.email, sequenceId, body.source, body.firstName);
        console.log(`[LEAD] Enrolled ${lead.email} in sequence: ${sequenceId}`);
      } catch (err) {
        console.error("[LEAD] Sequence enrollment failed:", err);
      }
    }

    // 3. Send initial Telegram notification
    console.log("[LEAD] Sending Telegram notification for lead:", lead.email);
    try {
      const messageId = await updateLeadNotification(lead, location);
      console.log("[LEAD] Telegram notification sent, message_id:", messageId);

      // Save message_ids for later updates (JSON: {"chatId": messageId, ...})
      if (messageId && lead.id) {
        await updateLead(lead.id, { telegram_message_ids: messageId });
        lead.telegram_message_ids = messageId;
      }
    } catch (err) {
      console.error("[TELEGRAM ERROR]", err);
    }

    // 4. Submit to Augusta via Zapier webhook (unless skipAugusta is true)
    if (body.skipAugusta) {
      // New confirmation flow: save lead but don't send to Augusta yet
      return NextResponse.json({
        success: true,
        message: "Lead captured — awaiting confirmation",
        leadId: lead.id,
        augustaSubmitted: false,
      });
    }

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
    const { leadId, action, totalRetirementSavings, percentageToProtect, notes } = body;

    if (!leadId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(leadId)) {
      return NextResponse.json(
        { success: false, error: "Missing or invalid leadId" },
        { status: 400 }
      );
    }

    // Get lead first
    const lead = await getLeadById(leadId);
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    // Handle decline_call action
    if (action === "decline_call") {
      await updateLeadStatus(leadId, "declined_call");
      lead.status = "declined_call";

      try {
        await updateLeadNotification(lead);
      } catch (err) {
        console.error("[TELEGRAM ERROR]", err);
      }

      return NextResponse.json({ success: true, message: "Lead declined call" });
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
