// Living Lead Notification - One message that evolves with the lead lifecycle
import { Lead } from "@/lib/supabase";
import { sendTelegramNotification, editTelegramMessage } from "@/lib/notifications";
import { formatCurrency, getSavingsLabel, getHotLeadIndicator } from "@/lib/deal-calculator";

// Detect traffic source and return emoji + label
function getTrafficSourceDisplay(source: string): { emoji: string; label: string } {
  const sourceLower = source.toLowerCase();

  if (sourceLower.includes("youtube")) return { emoji: "🎬", label: "YouTube" };
  if (sourceLower.includes("google") || sourceLower.includes("organic")) return { emoji: "🔍", label: "Google" };
  if (sourceLower.includes("facebook") || sourceLower.includes("fb")) return { emoji: "📘", label: "Facebook" };
  if (sourceLower.includes("instagram") || sourceLower.includes("ig")) return { emoji: "📸", label: "Instagram" };
  if (sourceLower.includes("tiktok")) return { emoji: "🎵", label: "TikTok" };
  if (sourceLower.includes("twitter") || sourceLower.includes("x.com")) return { emoji: "🐦", label: "Twitter/X" };
  if (sourceLower.includes("email") || sourceLower.includes("newsletter")) return { emoji: "📧", label: "Email" };
  if (sourceLower.includes("quiz")) return { emoji: "📝", label: "Quiz" };
  if (sourceLower.includes("lp-") || sourceLower.includes("landing")) return { emoji: "📄", label: "Landing Page" };

  return { emoji: "🌐", label: source || "Direct" };
}

// Get status line based on lead status
function getStatusLine(lead: Lead): string {
  const status = lead.status;

  if (status === "converted") {
    return "💰 <b>TRADE COMPLETE</b>\n🎉🎉🎉 COMMISSION EARNED! 🎉🎉🎉";
  }

  if (status === "qualified") {
    return "✅ <b>QUALIFIED AT AUGUSTA</b>\n💵💵 +$200 GUARANTEED! 💵💵";
  }

  if (status === "sent_to_augusta") {
    // Check if we have enrichment data
    if (lead.total_retirement_savings && lead.percentage_to_protect) {
      return "📤 <b>Sent to Augusta</b>";
    }
    return "📤 <b>Sent to Augusta</b>\n⏳ <i>Waiting for enrichment...</i>";
  }

  // New lead
  return "⏳ <i>Waiting for enrichment...</i>";
}

// Build the complete notification message
export function buildLeadNotification(lead: Lead, location?: string): string {
  const trafficSource = getTrafficSourceDisplay(lead.source || "unknown");
  const timestamp = lead.created_at
    ? new Date(lead.created_at).toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })
    : new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

  const lines: string[] = [];

  // Header
  lines.push(`🎯 <b>LEAD: ${lead.first_name} ${lead.last_name || ""}</b>`);
  lines.push("");

  // Contact info
  lines.push(`📱 <a href="tel:${lead.phone.replace(/\D/g, '')}">${lead.phone}</a>`);
  lines.push(`📧 ${lead.email}`);
  lines.push(`${trafficSource.emoji} ${trafficSource.label}`);

  // Location if available
  if (location) {
    lines.push(`🌍 ${location}`);
  }

  lines.push(`🕐 ${timestamp}`);

  // Enrichment data if available
  if (lead.total_retirement_savings && lead.percentage_to_protect) {
    lines.push("");
    const savingsLabel = getSavingsLabel(lead.total_retirement_savings);
    lines.push(`💵 <b>Savings:</b> ${savingsLabel}`);
    lines.push(`📊 <b>Protect:</b> ${lead.percentage_to_protect}%`);

    if (lead.potential_deal_min && lead.potential_deal_max) {
      const dealRange = `${formatCurrency(lead.potential_deal_min)} - ${formatCurrency(lead.potential_deal_max)}`;
      lines.push(`💎 <b>Deal:</b> ${dealRange}`);

      // Hot lead indicator
      const hotIndicator = getHotLeadIndicator(lead.potential_deal_max);
      if (hotIndicator) {
        lines.push("");
        lines.push(hotIndicator);
      }
    }
  }

  // Status
  lines.push("");
  lines.push(getStatusLine(lead));

  return lines.join("\n");
}

// Send or edit the lead notification
export async function updateLeadNotification(
  lead: Lead,
  location?: string
): Promise<number | null> {
  const message = buildLeadNotification(lead, location);

  // Determine if urgent (qualified, converted, or high value)
  const isUrgent: boolean =
    lead.status === "qualified" ||
    lead.status === "converted" ||
    (lead.potential_deal_max !== undefined && lead.potential_deal_max >= 100000);

  // If we have a message_id, edit it. Otherwise send new.
  if (lead.telegram_message_id) {
    console.log("[TELEGRAM] Editing message:", lead.telegram_message_id);
    await editTelegramMessage(lead.telegram_message_id, message);
    return lead.telegram_message_id;
  } else {
    console.log("[TELEGRAM] Sending new notification");
    return await sendTelegramNotification(message, isUrgent);
  }
}
