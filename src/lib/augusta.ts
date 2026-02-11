// Shared Augusta submission logic
import { Lead } from "@/lib/supabase";

const AUGUSTA_WEBHOOK_URL = process.env.AUGUSTA_WEBHOOK_URL!;
const AFFILIATE_ID = process.env.AUGUSTA_AFFILIATE_ID || "5129";

export async function submitToAugusta(lead: Lead): Promise<boolean> {
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
