// Resend email client for transactional + nurture emails
// Uses Resend SDK for reliable delivery with domain verification

import { Resend } from "resend";

// Lazy singleton — initialized on first use (serverless-safe)
let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("[RESEND] RESEND_API_KEY not configured");
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

const FROM_EMAIL = () =>
  process.env.RESEND_FROM_EMAIL || "Rich Dad Retirement <hello@richdadretirement.com>";

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  tags?: { name: string; value: string }[];
}

/**
 * Send a single email via Resend
 */
export async function sendEmail(options: SendEmailOptions): Promise<{ id: string } | null> {
  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL(),
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo || "hello@richdadretirement.com",
      tags: options.tags,
    });

    if (error) {
      console.error("[RESEND] Send error:", error);
      return null;
    }

    console.log("[RESEND] Email sent:", data?.id, "to:", options.to);
    return data;
  } catch (err) {
    console.error("[RESEND] Exception:", err);
    return null;
  }
}

/**
 * Check if Resend is configured
 */
export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}
