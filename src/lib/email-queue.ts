// Email sequence queue management — V2.1
// Enrolls subscribers in sequences, processes pending sends, handles unsubscribes
// NEW: sequence upgrades, status-aware sending, metadata support

import { supabase } from "./supabase";
import { sendEmail, isResendConfigured } from "./resend";
import { SEQUENCES, getNextSendTime } from "./email-sequences";
import { sendTelegramNotification } from "./notifications";
import { sendCallReminderSMS, isTwilioConfigured } from "./sms";

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
  metadata: Record<string, unknown> | null;
}

/**
 * Enroll an email in a sequence
 * Queues all emails in the sequence with their scheduled send times
 */
export async function enrollInSequence(
  email: string,
  sequenceId: string,
  source?: string,
  firstName?: string,
  metadata?: Record<string, unknown>
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
    ...(metadata ? { metadata } : {}),
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
    await processQueueEntry(email, sequenceId, 0, firstName || undefined, metadata);
  }

  return true;
}

/**
 * Upgrade a lead from one sequence to another
 * Cancels pending emails in old sequence, enrolls in new one
 * Used when: guide-nurture reader submits lead form → enters high-intent/mid/starter
 */
export async function upgradeSequence(
  email: string,
  newSequenceId: string,
  source?: string,
  firstName?: string,
  metadata?: Record<string, unknown>
): Promise<boolean> {
  // Cancel all pending emails in ALL current sequences for this email
  const { error: cancelError } = await supabase
    .from("email_sequence_queue")
    .update({ status: "upgraded" })
    .eq("email", email)
    .eq("status", "pending");

  if (cancelError) {
    console.error("[EMAIL_QUEUE] Cancel error during upgrade:", cancelError);
    // Continue anyway — enrollment is more important
  }

  console.log(`[EMAIL_QUEUE] Upgrading ${email} to ${newSequenceId}`);

  // Enroll in the new sequence
  return enrollInSequence(email, newSequenceId, source, firstName, metadata);
}

/**
 * Check if an email has an active (pending) sequence
 */
export async function checkActiveSequence(email: string): Promise<string | null> {
  const { data } = await supabase
    .from("email_sequence_queue")
    .select("sequence")
    .eq("email", email)
    .eq("status", "pending")
    .limit(1);

  return data && data.length > 0 ? data[0].sequence : null;
}

/**
 * Process a single queue entry — send the email and update status
 */
async function processQueueEntry(
  email: string,
  sequenceId: string,
  step: number,
  firstName?: string,
  metadata?: Record<string, unknown>
): Promise<boolean> {
  const sequence = SEQUENCES[sequenceId];
  if (!sequence) return false;

  const seqEmail = sequence.emails.find((e) => e.step === step);
  if (!seqEmail) return false;

  // Status-aware: skip if lead is connected and email is marked skipIfConnected
  if (seqEmail.skipIfConnected) {
    const { data: lead } = await supabase
      .from("leads")
      .select("status")
      .eq("email", email)
      .maybeSingle();

    if (lead?.status === "contacted" || lead?.status === "qualified" || lead?.status === "converted") {
      console.log(`[EMAIL_QUEUE] Skipping ${sequenceId} step ${step} for ${email} (status: ${lead.status})`);
      await supabase
        .from("email_sequence_queue")
        .update({ status: "skipped" })
        .eq("email", email)
        .eq("sequence", sequenceId)
        .eq("step", step);
      return true; // Not a failure, just skipped
    }
  }

  if (!isResendConfigured()) {
    console.log(`[EMAIL_QUEUE] Resend not configured, skipping send to ${email}`);
    return false;
  }

  // Build and send the email — resolve {{firstName}} in subject
  const subject = seqEmail.subject.replace("{{firstName}}", firstName || "Hey");
  const html = seqEmail.buildHtml(email, firstName, metadata || undefined);
  const result = await sendEmail({
    to: email,
    subject,
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

    // After sending high-intent step 2 ("morning of" reminder), also send SMS
    if (sequenceId === "high-intent" && step === 2 && isTwilioConfigured()) {
      try {
        const { data: lead } = await supabase
          .from("leads")
          .select("phone, first_name, status")
          .eq("email", email)
          .maybeSingle();

        if (
          lead?.phone &&
          !["contacted", "qualified", "converted"].includes(lead.status ?? "")
        ) {
          const smsSent = await sendCallReminderSMS(lead.phone, lead.first_name || firstName);
          console.log(`[EMAIL_QUEUE] Call-reminder SMS ${smsSent ? "sent" : "skipped"} for ${email}`);
        }
      } catch (smsErr) {
        console.error("[EMAIL_QUEUE] SMS reminder failed (non-blocking):", smsErr);
      }
    }

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

    // Check subscriber status — skip paused or unsubscribed
    const { data: subscriber } = await supabase
      .from("email_subscribers")
      .select("status, paused_until")
      .eq("email", entry.email)
      .maybeSingle();

    if (subscriber) {
      // Fully unsubscribed
      if (subscriber.status === "unsubscribed") {
        stats.skipped++;
        continue;
      }

      // Paused — check if pause has expired
      if (subscriber.status === "paused" && subscriber.paused_until) {
        const pausedUntil = new Date(subscriber.paused_until);
        if (pausedUntil > new Date()) {
          stats.skipped++;
          continue; // Still paused
        }
        // Pause expired — reactivate and continue sending
        await supabase
          .from("email_subscribers")
          .update({ status: "active", paused_until: null })
          .eq("email", entry.email);
      }

      // Newsletter-only — skip sequence emails (they're not newsletter)
      if (subscriber.status === "newsletter-only") {
        stats.skipped++;
        continue;
      }
    }

    const success = await processQueueEntry(
      entry.email,
      entry.sequence,
      entry.step,
      entry.first_name || undefined,
      entry.metadata || undefined
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
