// Shared Augusta submission logic
import { Lead } from "@/lib/supabase";

const AUGUSTA_WEBHOOK_URL = process.env.AUGUSTA_WEBHOOK_URL!;
const AFFILIATE_ID = process.env.AUGUSTA_AFFILIATE_ID || "5129";

export async function submitToAugusta(lead: Lead): Promise<boolean> {
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
    affiliate_id: AFFILIATE_ID,
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
    const augustaResponse = await fetch(AUGUSTA_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

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
    console.error("[AUGUSTA] Submit error:", error);
    return false;
  }
}
