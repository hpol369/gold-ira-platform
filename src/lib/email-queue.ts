// Email sequence queue management
// Enrolls subscribers in sequences, processes pending sends, handles unsubscribes

import { supabase } from "./supabase";
import { sendEmail, isResendConfigured } from "./resend";
import { SEQUENCES, getNextSendTime } from "./email-sequences";
import { sendTelegramNotification } from "./notifications";

interface QueueEntry {
  id: string;
  email: string;
  sequence: string;
  step: number;
  status: string;
  next_send_at: string;
  sent_at: string | null;
  created_at: string;
  unsubscribed_at: string | null;
  source: string | null;
  first_name: string | null;
}

/**
 * Enroll an email in a sequence
 * Queues all emails in the sequence with their scheduled send times
 */
export async function enrollInSequence(
  email: string,
  sequenceId: string,
  source?: string,
  firstName?: string
): Promise<boolean> {
  const sequence = SEQUENCES[sequenceId];
  if (!sequence) {
    console.error(`[EMAIL_QUEUE] Unknown sequence: ${sequenceId}`);
    return false;
  }

  // Check if already enrolled in this sequence
  const { data: existing } = await supabase
    .from("email_sequence_queue")
    .select("id")
    .eq("email", email)
    .eq("sequence", sequenceId)
    .limit(1);

  if (existing && existing.length > 0) {
    console.log(`[EMAIL_QUEUE] ${email} already enrolled in ${sequenceId}`);
    return true; // Already enrolled, not an error
  }

  // Queue all emails in the sequence
  const entries = sequence.emails.map((seqEmail) => ({
    email,
    sequence: sequenceId,
    step: seqEmail.step,
    status: "pending",
    next_send_at: getNextSendTime(seqEmail.delayDays).toISOString(),
    source: source || null,
    first_name: firstName || null,
  }));

  const { error } = await supabase
    .from("email_sequence_queue")
    .insert(entries);

  if (error) {
    console.error("[EMAIL_QUEUE] Enrollment error:", error);
    return false;
  }

  console.log(`[EMAIL_QUEUE] ${email} enrolled in ${sequenceId} (${entries.length} emails queued)`);

  // Send the first email immediately if delay is 0
  const firstEmail = sequence.emails[0];
  if (firstEmail && firstEmail.delayDays === 0) {
    await processQueueEntry(email, sequenceId, 0, firstName || undefined);
  }

  return true;
}

/**
 * Process a single queue entry — send the email and update status
 */
async function processQueueEntry(
  email: string,
  sequenceId: string,
  step: number,
  firstName?: string
): Promise<boolean> {
  const sequence = SEQUENCES[sequenceId];
  if (!sequence) return false;

  const seqEmail = sequence.emails.find((e) => e.step === step);
  if (!seqEmail) return false;

  if (!isResendConfigured()) {
    console.log(`[EMAIL_QUEUE] Resend not configured, skipping send to ${email}`);
    return false;
  }

  // Build and send the email
  const html = seqEmail.buildHtml(email, firstName);
  const result = await sendEmail({
    to: email,
    subject: seqEmail.subject,
    html,
    tags: [
      { name: "sequence", value: sequenceId },
      { name: "step", value: String(step) },
    ],
  });

  if (result) {
    // Mark as sent
    await supabase
      .from("email_sequence_queue")
      .update({
        status: "sent",
        sent_at: new Date().toISOString(),
      })
      .eq("email", email)
      .eq("sequence", sequenceId)
      .eq("step", step);

    console.log(`[EMAIL_QUEUE] Sent ${sequenceId} step ${step} to ${email}`);
    return true;
  }

  return false;
}

/**
 * Process all pending emails that are due
 * Called by the cron job
 */
export async function processEmailQueue(): Promise<{
  processed: number;
  sent: number;
  failed: number;
  skipped: number;
}> {
  const stats = { processed: 0, sent: 0, failed: 0, skipped: 0 };

  // Get all pending entries that are due
  const { data: pendingEntries, error } = await supabase
    .from("email_sequence_queue")
    .select("*")
    .eq("status", "pending")
    .lte("next_send_at", new Date().toISOString())
    .is("unsubscribed_at", null)
    .order("next_send_at", { ascending: true })
    .limit(50); // Process 50 at a time to avoid timeouts

  if (error) {
    console.error("[EMAIL_QUEUE] Query error:", error);
    return stats;
  }

  if (!pendingEntries || pendingEntries.length === 0) {
    console.log("[EMAIL_QUEUE] No pending emails to process");
    return stats;
  }

  console.log(`[EMAIL_QUEUE] Processing ${pendingEntries.length} pending emails`);

  for (const entry of pendingEntries as QueueEntry[]) {
    stats.processed++;

    // Skip if unsubscribed
    if (entry.unsubscribed_at) {
      stats.skipped++;
      continue;
    }

    const success = await processQueueEntry(
      entry.email,
      entry.sequence,
      entry.step,
      entry.first_name || undefined
    );

    if (success) {
      stats.sent++;
    } else {
      stats.failed++;
      // Mark as failed after attempt
      await supabase
        .from("email_sequence_queue")
        .update({ status: "failed" })
        .eq("id", entry.id);
    }

    // Small delay between sends to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // Send summary to Telegram if any were processed
  if (stats.sent > 0 || stats.failed > 0) {
    try {
      await sendTelegramNotification(
        [
          "📧 <b>Email Sequence Cron Report</b>",
          "",
          `✅ Sent: ${stats.sent}`,
          `❌ Failed: ${stats.failed}`,
          `⏭️ Skipped: ${stats.skipped}`,
          `📊 Total processed: ${stats.processed}`,
          `🕐 ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
        ].join("\n"),
        false
      );
    } catch {
      console.error("[EMAIL_QUEUE] Telegram summary failed");
    }
  }

  return stats;
}

/**
 * Unsubscribe an email from a specific sequence or all sequences
 */
export async function unsubscribeEmail(
  email: string,
  sequenceId?: string
): Promise<boolean> {
  const now = new Date().toISOString();

  let query = supabase
    .from("email_sequence_queue")
    .update({
      status: "unsubscribed",
      unsubscribed_at: now,
    })
    .eq("email", email)
    .eq("status", "pending");

  if (sequenceId && sequenceId !== "all") {
    query = query.eq("sequence", sequenceId);
  }

  const { error } = await query;

  if (error) {
    console.error("[EMAIL_QUEUE] Unsubscribe error:", error);
    return false;
  }

  console.log(`[EMAIL_QUEUE] ${email} unsubscribed from ${sequenceId || "all"}`);

  // Also update email_subscribers table
  await supabase
    .from("email_subscribers")
    .update({ status: "unsubscribed" })
    .eq("email", email);

  return true;
}

/**
 * Get queue stats for dashboard
 */
export async function getQueueStats(): Promise<{
  total: number;
  pending: number;
  sent: number;
  failed: number;
  unsubscribed: number;
  bySequence: Record<string, { pending: number; sent: number }>;
}> {
  const { data, error } = await supabase
    .from("email_sequence_queue")
    .select("status, sequence");

  if (error || !data) {
    return { total: 0, pending: 0, sent: 0, failed: 0, unsubscribed: 0, bySequence: {} };
  }

  const stats = {
    total: data.length,
    pending: 0,
    sent: 0,
    failed: 0,
    unsubscribed: 0,
    bySequence: {} as Record<string, { pending: number; sent: number }>,
  };

  for (const row of data) {
    if (row.status === "pending") stats.pending++;
    else if (row.status === "sent") stats.sent++;
    else if (row.status === "failed") stats.failed++;
    else if (row.status === "unsubscribed") stats.unsubscribed++;

    if (!stats.bySequence[row.sequence]) {
      stats.bySequence[row.sequence] = { pending: 0, sent: 0 };
    }
    if (row.status === "pending") stats.bySequence[row.sequence].pending++;
    if (row.status === "sent") stats.bySequence[row.sequence].sent++;
  }

  return stats;
}
