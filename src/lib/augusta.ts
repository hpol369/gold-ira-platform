// Shared Augusta submission logic
import { Lead } from "@/lib/supabase";

const AFFILIATE_ID_DEFAULT = "5129";

function getWebhookUrl(): string | null {
  // Read at call time (not module load) — matches the lazy pattern used in
  // supabase.ts. Keeps the build working when env is absent at page-data
  // collection and surfaces a clear error at request time rather than a
  // cryptic "fetch(undefined)" failure.
  return process.env.AUGUSTA_WEBHOOK_URL || null;
}

export async function submitToAugusta(lead: Lead): Promise<boolean> {
  const webhookUrl = getWebhookUrl();
  if (!webhookUrl) {
    console.error("[AUGUSTA] AUGUSTA_WEBHOOK_URL is not set — lead NOT forwarded:", lead.email);
    return false;
  }

  const affiliateId = process.env.AUGUSTA_AFFILIATE_ID || AFFILIATE_ID_DEFAULT;

  // Build human-readable notes for the specialist
  const notesParts: string[] = [];
  if (lead.metal_preference) notesParts.push(`Metal Interest: ${lead.metal_preference === "both" ? "Gold & Silver" : lead.metal_preference === "silver" ? "Silver" : "Gold"}`);
  if (lead.savings_tier) notesParts.push(`Savings: ${lead.savings_tier}`);
  if (lead.concern) notesParts.push(`Concern: ${lead.concern}`);
  if (lead.source) notesParts.push(`Source: ${lead.source}`);
  if (lead.qualification_tier) notesParts.push(`Tier: ${lead.qualification_tier}`);
  notesParts.push("Guide sent via email. From richdadretirement.com.");

  const payload = {
    firstname: lead.first_name,
    lastname: lead.last_name || "",
    phone: lead.phone,
    email: lead.email,
    affiliate_id: affiliateId,
    // Enrichment fields for Augusta specialist context
    savings_tier: lead.savings_tier || "",
    primary_concern: lead.concern || "",
    source_page: lead.source || "",
    qualification_tier: lead.qualification_tier || "",
    metal_preference: lead.metal_preference || "gold",
    lead_notes: notesParts.join(". "),
  };

  try {
    console.log("[AUGUSTA] Submitting to webhook:", lead.email);
    // Bound the request so a hanging Zapier doesn't block the API route
    // past Vercel's function timeout. 8s gives plenty of room while keeping
    // the caller responsive.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    let augustaResponse: Response;
    try {
      augustaResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    console.log("[AUGUSTA] Response status:", augustaResponse.status);

    const responseBody = await augustaResponse.text();
    console.log("[AUGUSTA] Response body:", responseBody);

    if (augustaResponse.ok) {
      console.log("[AUGUSTA] ✅ Lead submitted successfully:", lead.email);
      return true;
    } else {
      console.error("[AUGUSTA] ❌ Submission failed:", responseBody);
      return false;
    }
  } catch (error) {
    const isAbort = error instanceof Error && error.name === "AbortError";
    console.error(`[AUGUSTA] Submit error${isAbort ? " (timeout)" : ""}:`, error);
    return false;
  }
}
