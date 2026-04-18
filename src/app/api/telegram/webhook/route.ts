import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { updateLeadNotification } from "@/lib/lead-notification";

/**
 * Telegram Bot Webhook — handles inline keyboard button callbacks
 * Set webhook: https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://richdadretirement.com/api/telegram/webhook
 *
 * Callback data format: "lead_connected:<email>" | "lead_no_answer:<email>" | "lead_callback:<email>"
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const callback = body.callback_query;

    if (!callback?.data) {
      return NextResponse.json({ ok: true });
    }

    const [action, email] = callback.data.split(":");

    if (!email) {
      return answerCallback(callback.id, "Invalid button data");
    }

    // Find the lead
    const { data: lead } = await supabase
      .from("leads")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (!lead) {
      return answerCallback(callback.id, "Lead not found");
    }

    switch (action) {
      case "lead_connected": {
        await supabase
          .from("leads")
          .update({ status: "contacted", notes: "Confirmed connected via Telegram button" })
          .eq("id", lead.id);

        // Skip push emails (steps 3-4)
        await supabase
          .from("email_sequence_queue")
          .update({ status: "skipped" })
          .eq("email", email)
          .eq("sequence", "high-intent")
          .eq("status", "pending")
          .in("step", [3, 4]);

        lead.status = "contacted";
        await updateLeadNotification(lead);

        return answerCallback(callback.id, "✅ Lead marked as connected! Emails 4-5 skipped.");
      }

      case "lead_no_answer": {
        // Keep status, emails continue
        await supabase
          .from("leads")
          .update({ notes: "No answer — nurture continues (Telegram button)" })
          .eq("id", lead.id);

        return answerCallback(callback.id, "📞 Noted — nurture emails will continue.");
      }

      case "lead_callback": {
        // Pause nurture for 48 hours by pushing send times forward
        const fortyEightHours = 48 * 60 * 60 * 1000;
        const { data: pendingEmails } = await supabase
          .from("email_sequence_queue")
          .select("id, next_send_at")
          .eq("email", email)
          .eq("status", "pending");

        if (pendingEmails) {
          for (const entry of pendingEmails) {
            const currentTime = new Date(entry.next_send_at).getTime();
            const newTime = new Date(Math.max(currentTime, Date.now()) + fortyEightHours);
            await supabase
              .from("email_sequence_queue")
              .update({ next_send_at: newTime.toISOString() })
              .eq("id", entry.id);
          }
        }

        await supabase
          .from("leads")
          .update({ notes: "Callback scheduled — emails paused 48h (Telegram button)" })
          .eq("id", lead.id);

        return answerCallback(callback.id, "🔄 Emails paused for 48 hours.");
      }

      default:
        return answerCallback(callback.id, "Unknown action");
    }
  } catch (error) {
    console.error("[TELEGRAM-WEBHOOK] Error:", error);
    return NextResponse.json({ ok: true });
  }
}

async function answerCallback(callbackQueryId: string, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (token) {
    await fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text,
        show_alert: true,
      }),
    });
  }
  return NextResponse.json({ ok: true });
}
