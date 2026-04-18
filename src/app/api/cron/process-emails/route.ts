import { NextResponse } from "next/server";
import { processEmailQueue, enrollInSequence, getQueueStats } from "@/lib/email-queue";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";
import { retryFailedAugustaSubmissions } from "@/lib/augusta-retry";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const isVercelCron = request.headers.get("x-vercel-cron");
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev && !isVercelCron && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Process pending email queue
    const result = await processEmailQueue();

    // 2. Retry failed Augusta submissions (exponential backoff, max 5 tries,
    //    Telegram alert on exhaustion). Bounded internally to 50 leads/run.
    const augustaRetry = await retryFailedAugustaSubmissions();

    // 3. Weekly re-engage enrollment (Sundays only, avoids over-enrollment)
    const today = new Date();
    let reEngaged = 0;
    if (today.getUTCDay() === 0) {
      reEngaged = await enrollReEngageLeads();
    }

    return NextResponse.json({
      success: true,
      ...result,
      augustaRetry,
      reEngaged,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[CRON] Email queue processing failed:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/** Dashboard: return queue stats */
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const stats = await getQueueStats();
    return NextResponse.json({
      success: true,
      stats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[CRON] Stats query failed:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * Find leads where all sequence emails are complete and last email was 30+ days ago.
 * Enroll them in the re-engage sequence.
 */
async function enrollReEngageLeads(): Promise<number> {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    // Find emails that:
    // 1. Have NO pending entries (all emails sent/completed)
    // 2. Were NOT already in re-engage
    // 3. Last email was sent 30+ days ago
    // 4. Not unsubscribed
    const { data: candidates, error } = await supabase
      .from("email_sequence_queue")
      .select("email, first_name, sequence, status, sent_at")
      .neq("sequence", "re-engage")
      .eq("status", "sent")
      .lte("sent_at", thirtyDaysAgo)
      .order("sent_at", { ascending: false });

    if (error || !candidates) {
      console.error("[RE-ENGAGE] Query error:", error);
      return 0;
    }

    // Group by email, find those with NO pending emails
    const emailMap = new Map<string, { firstName: string | null; hasPending: boolean }>();

    for (const row of candidates) {
      if (!emailMap.has(row.email)) {
        emailMap.set(row.email, { firstName: row.first_name, hasPending: false });
      }
    }

    // Check for pending entries for these emails
    const emails = Array.from(emailMap.keys());
    if (emails.length === 0) return 0;

    const { data: pendingCheck } = await supabase
      .from("email_sequence_queue")
      .select("email")
      .in("email", emails.slice(0, 100)) // Limit batch size
      .eq("status", "pending");

    const emailsWithPending = new Set((pendingCheck || []).map((r) => r.email));

    // Also check who's already in re-engage
    const { data: alreadyReEngaged } = await supabase
      .from("email_sequence_queue")
      .select("email")
      .in("email", emails.slice(0, 100))
      .eq("sequence", "re-engage");

    const emailsAlreadyReEngaged = new Set((alreadyReEngaged || []).map((r) => r.email));

    // Check unsubscribed in email_subscribers table
    const { data: unsubscribed } = await supabase
      .from("email_subscribers")
      .select("email")
      .in("email", emails.slice(0, 100))
      .eq("status", "unsubscribed");

    const emailsUnsubscribed = new Set((unsubscribed || []).map((r) => r.email));

    // Also check queue-level unsubscribes (belt-and-suspenders: covers webhook bounces
    // where subscriber table update may have failed)
    const { data: queueUnsubscribed } = await supabase
      .from("email_sequence_queue")
      .select("email")
      .in("email", emails.slice(0, 100))
      .eq("status", "unsubscribed");

    for (const row of queueUnsubscribed || []) {
      emailsUnsubscribed.add(row.email);
    }

    let enrolled = 0;
    for (const [email, info] of emailMap) {
      if (emailsWithPending.has(email)) continue;
      if (emailsAlreadyReEngaged.has(email)) continue;
      if (emailsUnsubscribed.has(email)) continue;

      await enrollInSequence(email, "re-engage", "re-engagement-cron", info.firstName || undefined);
      enrolled++;

      if (enrolled >= 20) break; // Cap at 20 per run to avoid overload
    }

    if (enrolled > 0) {
      await sendTelegramNotification(
        `🔄 <b>Re-Engage Cron</b>\n\nEnrolled ${enrolled} cold leads in re-engage sequence.`,
        false
      );
    }

    return enrolled;
  } catch (error) {
    console.error("[RE-ENGAGE] Error:", error);
    return 0;
  }
}
