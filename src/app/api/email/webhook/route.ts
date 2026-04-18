// Resend webhook handler for bounce/complaint/delivery events
// Docs: https://resend.com/docs/dashboard/webhooks/introduction
//
// Handles:
//   email.bounced    -> auto-unsubscribe in both tables
//   email.complained -> auto-unsubscribe + Telegram alert
//   email.delivered  -> log only
//   *                -> acknowledge with 200

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";

export const dynamic = "force-dynamic";

// Resend webhook event shapes we care about
interface ResendWebhookEvent {
  type: string;
  created_at: string;
  data: {
    email_id?: string;
    from?: string;
    to?: string[];
    subject?: string;
    created_at?: string;
    // Bounce-specific
    bounce?: {
      message?: string;
      type?: string; // "hard" | "soft"
    };
    // Complaint-specific
    complaint?: {
      message?: string;
      complaint_type?: string;
    };
  };
}

export async function POST(request: NextRequest) {
  // --- Verify webhook authenticity ---
  // Resend signs webhooks with a shared secret via the "svix-signature" header.
  // For simplicity we check a shared secret in the Authorization header.
  // If RESEND_WEBHOOK_SECRET is set, we validate; otherwise we accept (dev mode).
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  if (webhookSecret) {
    const authHeader = request.headers.get("authorization");
    const svixId = request.headers.get("svix-id");

    // Accept either Bearer token or presence of svix headers (Resend's default signing)
    const isAuthorized =
      authHeader === `Bearer ${webhookSecret}` || !!svixId;

    if (!isAuthorized) {
      console.error("[EMAIL_WEBHOOK] Unauthorized request");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let event: ResendWebhookEvent;
  try {
    event = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventType = event.type;
  const recipients = event.data?.to || [];

  console.log(`[EMAIL_WEBHOOK] Received event: ${eventType} for ${recipients.join(", ")}`);

  switch (eventType) {
    case "email.bounced": {
      for (const email of recipients) {
        await handleBounce(email, event);
      }
      break;
    }

    case "email.complained": {
      for (const email of recipients) {
        await handleComplaint(email, event);
      }
      break;
    }

    case "email.delivered": {
      console.log(
        `[EMAIL_WEBHOOK] Delivered: ${recipients.join(", ")} | subject: ${event.data?.subject || "unknown"}`
      );
      break;
    }

    default: {
      // email.sent, email.opened, email.clicked, email.delivery_delayed, etc.
      console.log(`[EMAIL_WEBHOOK] Unhandled event type: ${eventType}`);
      break;
    }
  }

  return NextResponse.json({ received: true });
}

/**
 * Handle bounce: unsubscribe the email from both tables to prevent future sends
 */
async function handleBounce(email: string, event: ResendWebhookEvent): Promise<void> {
  const normalizedEmail = email.toLowerCase();
  const bounceType = event.data?.bounce?.type || "unknown";
  const bounceMessage = event.data?.bounce?.message || "";
  const now = new Date().toISOString();

  console.log(`[EMAIL_WEBHOOK] Bounce (${bounceType}): ${normalizedEmail} — ${bounceMessage}`);

  // 1. Mark all pending queue entries as unsubscribed
  const { error: queueError } = await supabase
    .from("email_sequence_queue")
    .update({
      status: "unsubscribed",
      unsubscribed_at: now,
    })
    .eq("email", normalizedEmail)
    .eq("status", "pending");

  if (queueError) {
    console.error("[EMAIL_WEBHOOK] Queue unsubscribe error:", queueError);
  }

  // 2. Mark subscriber as unsubscribed
  const { error: subError } = await supabase
    .from("email_subscribers")
    .update({ status: "unsubscribed" })
    .eq("email", normalizedEmail);

  if (subError) {
    console.error("[EMAIL_WEBHOOK] Subscriber unsubscribe error:", subError);
  }

  console.log(`[EMAIL_WEBHOOK] Bounced email auto-unsubscribed: ${normalizedEmail}`);
}

/**
 * Handle complaint (spam report): unsubscribe + alert via Telegram
 */
async function handleComplaint(email: string, event: ResendWebhookEvent): Promise<void> {
  const normalizedEmail = email.toLowerCase();
  const complaintType = event.data?.complaint?.complaint_type || "unknown";
  const complaintMessage = event.data?.complaint?.message || "";
  const now = new Date().toISOString();

  console.log(`[EMAIL_WEBHOOK] Complaint (${complaintType}): ${normalizedEmail} — ${complaintMessage}`);

  // 1. Mark all pending queue entries as unsubscribed
  const { error: queueError } = await supabase
    .from("email_sequence_queue")
    .update({
      status: "unsubscribed",
      unsubscribed_at: now,
    })
    .eq("email", normalizedEmail)
    .eq("status", "pending");

  if (queueError) {
    console.error("[EMAIL_WEBHOOK] Queue unsubscribe error:", queueError);
  }

  // 2. Mark subscriber as unsubscribed
  const { error: subError } = await supabase
    .from("email_subscribers")
    .update({ status: "unsubscribed" })
    .eq("email", normalizedEmail);

  if (subError) {
    console.error("[EMAIL_WEBHOOK] Subscriber unsubscribe error:", subError);
  }

  // 3. Send Telegram alert — complaints are serious (affect sender reputation)
  try {
    await sendTelegramNotification(
      [
        `<b>SPAM COMPLAINT</b>`,
        ``,
        `<b>Email:</b> ${normalizedEmail}`,
        `<b>Type:</b> ${complaintType}`,
        `<b>Subject:</b> ${event.data?.subject || "unknown"}`,
        complaintMessage ? `<b>Message:</b> ${complaintMessage}` : "",
        ``,
        `Auto-unsubscribed from all sequences.`,
        `Review sending practices if complaints increase.`,
      ]
        .filter(Boolean)
        .join("\n"),
      true // urgent — complaints impact deliverability
    );
  } catch (err) {
    console.error("[EMAIL_WEBHOOK] Telegram alert failed:", err);
  }

  console.log(`[EMAIL_WEBHOOK] Complaint auto-unsubscribed + alerted: ${normalizedEmail}`);
}
