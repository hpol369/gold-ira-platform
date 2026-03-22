import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";
import { buildWeeklyDigest, getWeeklyDigestSubject } from "@/lib/weekly-digest";

export const dynamic = "force-dynamic";
export const maxDuration = 300; // 5 minutes for batch sending

/**
 * Weekly Digest Cron Job
 *
 * Runs every Monday at 10 AM ET (14:00 UTC).
 * Sends to all active subscribers who DON'T have pending sequence emails.
 * This keeps us in their inbox forever with genuine value.
 *
 * Vercel cron config in vercel.json:
 * { "path": "/api/cron/weekly-digest", "schedule": "0 14 * * 1" }
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const isVercelCron = request.headers.get("x-vercel-cron");
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev && !isVercelCron && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Get all active subscribers
    const { data: subscribers, error: subError } = await supabase
      .from("email_subscribers")
      .select("email")
      .eq("status", "active");

    if (subError || !subscribers) {
      console.error("[WEEKLY-DIGEST] Failed to fetch subscribers:", subError);
      return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
    }

    // 2. Get emails that have pending sequence emails (exclude them — they're in a nurture flow)
    const { data: pendingQueue } = await supabase
      .from("email_sequence_queue")
      .select("email")
      .eq("status", "pending");

    const emailsInActiveSequence = new Set(
      (pendingQueue || []).map((q: { email: string }) => q.email)
    );

    // 3. Filter to only subscribers NOT in an active sequence
    const digestRecipients = subscribers.filter(
      (s: { email: string }) => !emailsInActiveSequence.has(s.email)
    );

    if (digestRecipients.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No eligible recipients — all subscribers are in active sequences",
        sent: 0,
        skipped: subscribers.length,
      });
    }

    // 4. TODO: Fetch live gold price from API (for now use recent price)
    const goldPrice = "$5,350"; // Will be replaced with live data

    // 5. Send in batches
    const subject = getWeeklyDigestSubject(goldPrice);
    let sent = 0;
    let failed = 0;
    const BATCH_SIZE = 50;
    const DELAY_MS = 200;

    // Dynamic import to avoid loading Resend unless needed
    const { sendEmail } = await import("@/lib/resend");

    for (let i = 0; i < digestRecipients.length; i++) {
      const recipient = digestRecipients[i];

      try {
        const html = buildWeeklyDigest(recipient.email, goldPrice);

        await sendEmail({
          to: recipient.email,
          subject,
          html,
          tags: [
            { name: "type", value: "weekly-digest" },
            { name: "week", value: String(new Date().getFullYear()) + "-W" + String(Math.ceil((Date.now() - new Date(new Date().getFullYear(), 0, 1).getTime()) / 604800000)) },
          ],
        });

        sent++;
      } catch (err) {
        console.error(`[WEEKLY-DIGEST] Failed to send to ${recipient.email}:`, err);
        failed++;
      }

      // Rate limiting
      if ((i + 1) % BATCH_SIZE === 0) {
        await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
      }
    }

    // 6. Send Telegram summary
    try {
      await sendTelegramNotification(
        [
          "📧 <b>Weekly Digest Sent</b>",
          "",
          `✅ Sent: ${sent}`,
          `❌ Failed: ${failed}`,
          `⏭️ Skipped (in sequence): ${subscribers.length - digestRecipients.length}`,
          `📊 Total subscribers: ${subscribers.length}`,
          `🕐 ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
        ].join("\n"),
        false
      );
    } catch {
      console.error("[WEEKLY-DIGEST] Telegram notification failed");
    }

    return NextResponse.json({
      success: true,
      sent,
      failed,
      skippedInSequence: subscribers.length - digestRecipients.length,
      totalSubscribers: subscribers.length,
    });
  } catch (error) {
    console.error("[WEEKLY-DIGEST ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
