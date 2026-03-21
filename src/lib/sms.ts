// SMS service for high-intent lead confirmation
// Uses Twilio to send a single SMS right after form submission
// Goal: maximize chance the lead picks up Augusta's call
//
// ENV VARS REQUIRED:
//   TWILIO_ACCOUNT_SID — Twilio Account SID
//   TWILIO_AUTH_TOKEN  — Twilio Auth Token
//   TWILIO_PHONE_NUMBER — Your Twilio phone number (E.164 format: +1XXXXXXXXXX)

import twilio from "twilio";

let client: twilio.Twilio | null = null;

function getTwilioClient(): twilio.Twilio | null {
  if (client) return client;

  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;

  if (!sid || !token) {
    console.log("[SMS] Twilio not configured — skipping SMS");
    return null;
  }

  client = twilio(sid, token);
  return client;
}

export function isTwilioConfigured(): boolean {
  return !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER);
}

/**
 * Format a 10-digit phone to E.164 for Twilio
 */
function toE164(phone: string): string {
  const digits = phone.replace(/\D/g, "").slice(-10);
  return `+1${digits}`;
}

/**
 * Send the high-intent confirmation SMS
 * Sent ~2 minutes after form submission
 * Tells them to expect the call + save the number
 */
export async function sendHighIntentSMS(
  phone: string,
  firstName?: string,
): Promise<boolean> {
  const twilioClient = getTwilioClient();
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!twilioClient || !fromNumber) {
    console.log("[SMS] Twilio not configured, skipping SMS to", phone);
    return false;
  }

  const name = firstName || "there";

  // Keep under 160 chars for single SMS (no splitting)
  const message =
    `Hey ${name}, it's Rich Dad Retirement. Your Gold IRA specialist from Augusta will call within 24hrs — 15 min, no pressure. Save this number so you don't miss it!`;

  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: fromNumber,
      to: toE164(phone),
    });

    console.log(`[SMS] Sent to ${phone}, SID: ${result.sid}`);
    return true;
  } catch (err) {
    console.error("[SMS] Send failed:", err);
    return false;
  }
}

/**
 * Send a "missed call" follow-up SMS
 * Triggered by Day 3 check-in if lead hasn't connected
 */
export async function sendMissedCallSMS(
  phone: string,
  firstName?: string,
): Promise<boolean> {
  const twilioClient = getTwilioClient();
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!twilioClient || !fromNumber) return false;

  const name = firstName || "there";
  const message =
    `Hey ${name}, looks like you & Augusta haven't connected yet. Call them free at 844-405-3908 (Gold IRA education team). 15 min, zero obligation.`;

  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: fromNumber,
      to: toE164(phone),
    });

    console.log(`[SMS] Missed-call follow-up sent to ${phone}, SID: ${result.sid}`);
    return true;
  } catch (err) {
    console.error("[SMS] Missed-call SMS failed:", err);
    return false;
  }
}
