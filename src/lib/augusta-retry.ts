// src/lib/augusta-retry.ts
// Retry queue for Augusta submissions that failed at capture time.
//
// When /api/submit-lead fails to forward to the Augusta Zapier webhook
// (network error, timeout, Zapier outage, missing env), the lead is left
// in status='new' with augusta_failed_at set. This module's
// retryFailedAugustaSubmissions() is invoked by the daily cron at
// /api/cron/process-emails to attempt redelivery with exponential backoff.
//
// After MAX_RETRIES failures we stop trying and fire a Telegram alert
// flagging the lead for manual upload — failing silently here would cost
// real revenue.

import { supabase, updateLead, updateLeadStatus, type Lead } from "@/lib/supabase";
import { submitToAugusta } from "@/lib/augusta";
import { updateLeadNotification } from "@/lib/lead-notification";
import { sendTelegramNotification } from "@/lib/notifications";

const MAX_RETRIES = 5;

// Exponential backoff in minutes since the last attempt:
// retry 1 → 5 min, 2 → 30 min, 3 → 2 hr, 4 → 6 hr, 5 → 24 hr
const BACKOFF_MINUTES = [5, 30, 120, 360, 1440];

export interface RetryResult {
  scanned: number;
  retried: number;
  recovered: number;
  exhausted: number;
}

export async function retryFailedAugustaSubmissions(): Promise<RetryResult> {
  const stats: RetryResult = { scanned: 0, retried: 0, recovered: 0, exhausted: 0 };

  // Pick up leads that failed Augusta forwarding and aren't already exhausted.
  // Backoff filtering happens in JS — keeps the SQL simple and lets us
  // adjust the schedule without a migration.
  const { data: failedLeads, error } = await supabase
    .from("leads")
    .select("*")
    .eq("status", "new")
    .not("augusta_failed_at", "is", null)
    .lt("augusta_retry_count", MAX_RETRIES)
    .order("augusta_failed_at", { ascending: true })
    .limit(50);

  if (error) {
    console.error("[AUGUSTA-RETRY] Query error:", error);
    return stats;
  }

  if (!failedLeads || failedLeads.length === 0) {
    return stats;
  }

  const now = Date.now();

  for (const row of failedLeads as Lead[]) {
    stats.scanned++;
    const retryCount = row.augusta_retry_count ?? 0;
    const lastAttempt = row.augusta_last_attempt_at
      ? new Date(row.augusta_last_attempt_at).getTime()
      : new Date(row.augusta_failed_at!).getTime();
    const waitMinutes = BACKOFF_MINUTES[Math.min(retryCount, BACKOFF_MINUTES.length - 1)];
    const dueAt = lastAttempt + waitMinutes * 60 * 1000;

    if (now < dueAt) continue; // not due yet — try again on next cron tick

    stats.retried++;
    console.log(
      `[AUGUSTA-RETRY] Retrying lead ${row.id} (attempt ${retryCount + 1}/${MAX_RETRIES}): ${row.email}`
    );

    const success = await submitToAugusta(row);
    const nowIso = new Date().toISOString();

    if (success) {
      stats.recovered++;
      await updateLeadStatus(row.id!, "sent_to_augusta", {
        augusta_submitted_at: nowIso,
        augusta_last_attempt_at: nowIso,
        augusta_retry_count: retryCount + 1,
      });

      // Refresh the Telegram message so the team sees the lead recovered
      try {
        await updateLeadNotification({ ...row, status: "sent_to_augusta" });
      } catch (err) {
        console.error("[AUGUSTA-RETRY] Telegram update failed:", err);
      }
      continue;
    }

    // Still failing — bump counter and decide whether to escalate
    const newCount = retryCount + 1;
    const exhausted = newCount >= MAX_RETRIES;
    await updateLead(row.id!, {
      augusta_retry_count: newCount,
      augusta_last_attempt_at: nowIso,
      // Preserve original failed_at for backoff math; only update if missing
      ...(row.augusta_failed_at ? {} : { augusta_failed_at: nowIso }),
    });

    if (exhausted) {
      stats.exhausted++;
      try {
        await sendTelegramNotification(
          [
            "🚨 ACTION REQUIRED: Augusta submission exhausted retries",
            `Lead: ${row.first_name} ${row.last_name || ""}`.trim(),
            `Email: ${row.email}`,
            `Phone: ${row.phone || "(none)"}`,
            `Source: ${row.source}`,
            `Lead ID: ${row.id}`,
            `Last error left in notes: ${row.notes || "(none)"}`,
            "",
            "→ Upload manually to Augusta and update lead status in DB.",
          ].join("\n"),
          true
        );
      } catch (err) {
        console.error("[AUGUSTA-RETRY] Telegram alert failed:", err);
      }
    }
  }

  if (stats.scanned > 0) {
    console.log(
      `[AUGUSTA-RETRY] scanned=${stats.scanned} retried=${stats.retried} recovered=${stats.recovered} exhausted=${stats.exhausted}`
    );
  }
  return stats;
}
