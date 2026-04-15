// src/app/api/submit-lead/route.ts
// Stores lead in Supabase, sends Telegram notification, and submits to Augusta

import { NextRequest, NextResponse } from "next/server";
import { insertLead, updateLeadStatus, updateLead, getLeadById, getLeadByEmail, Lead } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";
import { calculatePotentialDeal } from "@/lib/deal-calculator";
import { submitToAugusta } from "@/lib/augusta";
import { enrollInSequence, upgradeSequence, checkActiveSequence } from "@/lib/email-queue";
import { getSequenceForContext } from "@/lib/email-sequences";
import { sendHighIntentSMS, isTwilioConfigured } from "@/lib/sms";
import { checkRateLimit, getRequestIdentifier, rateLimitedResponse } from "@/lib/rate-limit";

// Rate limit: 10 lead submissions per hour per IP. Backed by Vercel KV so
// the counter is shared across serverless instances (the prior in-memory
// Map was bypassed by hitting cold instances).
const RATE_LIMIT = 10;
const RATE_WINDOW_SEC = 60 * 60;

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
  abVariant?: string;
  // Metal preference (gold, silver, both, or undefined for legacy leads)
  metalPreference?: "gold" | "silver" | "both";
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (KV-backed, shared across Vercel instances)
    const ip = getRequestIdentifier(request);
    const rl = await checkRateLimit(ip, {
      bucket: "submit-lead",
      max: RATE_LIMIT,
      windowSec: RATE_WINDOW_SEC,
    });
    if (!rl.ok) {
      return rateLimitedResponse(rl, RATE_LIMIT);
    }

    const body: LeadData = await request.json();

    // Validate required fields (phone is optional for sub-$50k leads)
    if (!body.firstName || !body.email) {
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

    // Validate phone only if provided (required for Augusta $50k+ leads, optional for others)
    if (body.phone && body.phone.trim()) {
      if (!isValidPhone(body.phone)) {
        return NextResponse.json(
          { success: false, error: "Invalid phone number - must be 10 digit US number" },
          { status: 400 }
        );
      }
    }

    // Sanitize inputs (strip HTML/script tags)
    body.firstName = body.firstName.replace(/<[^>]*>/g, "").trim().slice(0, 100);
    body.lastName = (body.lastName || "").replace(/<[^>]*>/g, "").trim().slice(0, 100);
    body.email = body.email.trim().toLowerCase().slice(0, 254);
    body.phone = body.phone ? normalizePhone(body.phone) : "";

    // Deduplication: check if email already exists
    const existingLead = await getLeadByEmail(body.email);
    if (existingLead) {
      // If already sent to Augusta, truly a duplicate — don't resubmit
      if (existingLead.status === "sent_to_augusta" || existingLead.status === "contacted" || existingLead.status === "qualified" || existingLead.status === "converted") {
        console.log("[LEAD] Already processed:", body.email, existingLead.status);
        return NextResponse.json({
          success: true,
          message: "Lead received",
          leadId: existingLead.id,
          augustaSubmitted: true,
        });
      }

      // Guide-downloader or newsletter sub upgrading to full lead — enrich and continue
      console.log("[LEAD] Upgrading existing lead:", body.email, existingLead.status);
      const enrichUpdates: Partial<Lead> = {};
      if (body.phone && !existingLead.phone) enrichUpdates.phone = normalizePhone(body.phone);
      if (body.lastName && !existingLead.last_name) enrichUpdates.last_name = body.lastName;
      if (body.savingsTier) enrichUpdates.savings_tier = body.savingsTier;
      if (body.concern) enrichUpdates.concern = body.concern;
      if (body.qualificationTier) enrichUpdates.qualification_tier = body.qualificationTier;
      if (body.routedTo) enrichUpdates.routed_to = body.routedTo;
      if (body.source) enrichUpdates.source = body.source;
      if (body.metalPreference) enrichUpdates.metal_preference = body.metalPreference;

      if (Object.keys(enrichUpdates).length > 0) {
        await updateLead(existingLead.id!, enrichUpdates);
        Object.assign(existingLead, enrichUpdates);
      }

      // Upgrade their email sequence
      try {
        const { upgradeSequence } = await import("@/lib/email-queue");
        const { getSequenceForContext } = await import("@/lib/email-sequences");
        const sequenceId = getSequenceForContext("lead-form", body.savingsTier);
        await upgradeSequence(body.email, sequenceId, body.source, body.firstName);
        console.log(`[LEAD] Upgraded ${body.email} sequence to ${sequenceId}`);
      } catch (err) {
        console.error("[LEAD] Sequence upgrade failed:", err);
      }

      // Submit to Augusta if high-intent and not already submitted
      if (!body.skipAugusta && existingLead.phone) {
        const augustaSuccess = await submitToAugusta(existingLead);
        if (augustaSuccess) {
          await updateLeadStatus(existingLead.id!, "sent_to_augusta", {
            augusta_submitted_at: new Date().toISOString(),
          });
        }
        return NextResponse.json({
          success: true,
          message: augustaSuccess ? "Lead submitted to Augusta" : "Lead captured - Augusta submission pending",
          leadId: existingLead.id,
          augustaSubmitted: augustaSuccess,
        });
      }

      return NextResponse.json({
        success: true,
        message: "Lead updated",
        leadId: existingLead.id,
        augustaSubmitted: false,
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
      ...(body.abVariant && { ab_variant: body.abVariant }),
      ...(body.metalPreference && { metal_preference: body.metalPreference }),
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
    //    V2.1: Uses getSequenceForContext, handles sequence upgrades
    //    (e.g., guide-nurture reader submits lead form → upgrades to high-intent)
    try {
      const sequenceId = getSequenceForContext("lead-form", body.savingsTier);
      const metadata = {
        ...(body.savingsTier && { savings_tier: body.savingsTier }),
        ...(body.concern && { concern: body.concern }),
        ...(body.qualificationTier && { qualification_tier: body.qualificationTier }),
        ...(body.routedTo && { routed_to: body.routedTo }),
      };

      // Check if already in a sequence (e.g., guide-nurture) and upgrade
      const activeSequence = await checkActiveSequence(lead.email);
      if (activeSequence && activeSequence !== sequenceId) {
        await upgradeSequence(lead.email, sequenceId, body.source, body.firstName, metadata);
        console.log(`[LEAD] Upgraded ${lead.email} from ${activeSequence} to ${sequenceId}`);
      } else {
        await enrollInSequence(lead.email, sequenceId, body.source, body.firstName, metadata);
        console.log(`[LEAD] Enrolled ${lead.email} in sequence: ${sequenceId}`);
      }
    } catch (err) {
      console.error("[LEAD] Sequence enrollment failed:", err);
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

    // 4. Send SMS confirmation for high-intent leads (they gave us their phone)
    if (lead.phone && isTwilioConfigured()) {
      const sequenceId = getSequenceForContext("lead-form", body.savingsTier);
      if (sequenceId === "high-intent") {
        try {
          await sendHighIntentSMS(lead.phone, body.firstName);
          console.log("[LEAD] High-intent SMS sent to", lead.phone);
        } catch (err) {
          console.error("[SMS] Failed for lead:", lead.email, err);
          // Non-critical — don't fail the lead submission
        }
      }
    }

    // 5. Submit to Augusta via Zapier webhook (unless skipAugusta is true)
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
      // Mark for the retry cron — augusta-retry.ts picks these up, retries
      // with exponential backoff, and alerts via Telegram after MAX_RETRIES.
      const nowIso = new Date().toISOString();
      await updateLeadStatus(lead.id!, "new", {
        notes: "Augusta webhook failed at capture — retry queue scheduled",
        augusta_failed_at: nowIso,
        augusta_last_attempt_at: nowIso,
        augusta_retry_count: 1,
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
    const { leadId, email, action, totalRetirementSavings, percentageToProtect, notes } = body;

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

    // Caller must know the email the lead was created with. Prevents random
    // actors from marking arbitrary leads as qualified or overwriting notes.
    if (!email || typeof email !== "string" || email.trim().toLowerCase() !== lead.email) {
      console.warn(`[PATCH-LEAD] Email mismatch for lead ${leadId} from ${request.headers.get("x-forwarded-for")}`);
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 403 }
      );
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
