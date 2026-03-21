// Living Lead Notification - One message that evolves with the lead lifecycle
import { Lead } from "@/lib/supabase";
import { sendTelegramNotification, sendTelegramWithButtons, editTelegramMessages } from "@/lib/notifications";
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

  if (status === "declined_call") {
    return "❌ <b>DECLINED CALL</b> — 📧 Added to nurture list";
  }

  if (status === "sent_to_augusta") {
    return "📤 <b>Sent to Augusta</b> ✅ Wants to be called";
  }

  // New lead — waiting for confirmation step
  return "⏳ <i>Waiting for call confirmation...</i>";
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

  // Qualification funnel data
  if (lead.savings_tier) {
    lines.push("");
    const tierLabels: Record<string, string> = {
      "augusta-white-glove": "🏆 AUGUSTA WHITE GLOVE",
      "augusta-private": "⭐ AUGUSTA PRIVATE CLIENT",
      "augusta-standard": "✅ AUGUSTA STANDARD",
      "secondary": "🔄 SECONDARY (Goldco/AHG)",
      "starter": "🌱 STARTER (Noble Gold)",
    };
    const tierLabel = lead.qualification_tier ? (tierLabels[lead.qualification_tier] || lead.qualification_tier) : "";
    lines.push(`💰 <b>Savings:</b> ${lead.savings_tier}`);
    if (lead.concern) lines.push(`⚠️ <b>Concern:</b> ${lead.concern}`);
    if (tierLabel) lines.push(`🎯 <b>Tier:</b> ${tierLabel}`);
    if (lead.routed_to) lines.push(`➡️ <b>Routed to:</b> ${lead.routed_to}`);
  }

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
// Returns JSON string of message IDs: {"chatId": messageId, ...}
export async function updateLeadNotification(
  lead: Lead,
  location?: string
): Promise<string | null> {
  const message = buildLeadNotification(lead, location);

  // Determine if urgent (qualified, converted, or high value)
  const isUrgent: boolean =
    lead.status === "qualified" ||
    lead.status === "converted" ||
    (lead.potential_deal_max !== undefined && lead.potential_deal_max >= 100000);

  // If we have message_ids stored, edit them
  if (lead.telegram_message_ids) {
    try {
      const messageIds = JSON.parse(lead.telegram_message_ids) as Record<string, number>;
      console.log("[TELEGRAM] Editing messages in all chats:", messageIds);
      await editTelegramMessages(messageIds, message);
      return lead.telegram_message_ids;
    } catch (e) {
      console.error("[TELEGRAM] Failed to parse message_ids:", e);
    }
  }

  // Otherwise send new messages to all chats
  console.log("[TELEGRAM] Sending new notification to all chats");

  // For $50k+ leads sent to Augusta, add inline status buttons
  const isHighIntent = lead.status === "sent_to_augusta" ||
    (lead.savings_tier && ["500k-plus", "500k+", "250k-500k", "100k-250k", "50k-100k"].includes(
      lead.savings_tier.replace(/[$\s]/g, "").toLowerCase()
    ));

  if (isHighIntent && lead.email) {
    const buttons = [
      [
        { text: "✅ Connected", callback_data: `lead_connected:${lead.email}` },
        { text: "❌ No Answer", callback_data: `lead_no_answer:${lead.email}` },
      ],
      [
        { text: "🔄 Callback Scheduled", callback_data: `lead_callback:${lead.email}` },
      ],
    ];

    const messageIds = await sendTelegramWithButtons(message, buttons, isUrgent);
    if (messageIds) {
      return JSON.stringify(messageIds);
    }
    return null;
  }

  const messageIds = await sendTelegramNotification(message, isUrgent);

  if (messageIds) {
    return JSON.stringify(messageIds);
  }

  return null;
}
