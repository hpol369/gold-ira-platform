import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";
import { sendTelegramNotification } from "@/lib/notifications";
import { sendEmail, isResendConfigured } from "@/lib/resend";
import { emailLayout, p } from "@/lib/email-templates";

const SITE_URL = "https://richdadretirement.com";

/**
 * Generate a confirmation token from email + secret
 * Used for double opt-in verification
 */
function generateConfirmToken(email: string): string {
  const secret = process.env.CRON_SECRET || "fallback-secret";
  return crypto
    .createHash("sha256")
    .update(email + secret)
    .digest("hex")
    .slice(0, 32);
}

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanSource = (source || "unknown").replace(/<[^>]*>/g, "").trim().slice(0, 100);

    // Upsert to Supabase with confirmed_at = null (unconfirmed)
    const { error } = await supabase
      .from("email_subscribers")
      .upsert(
        { email: cleanEmail, source: cleanSource, confirmed_at: null },
        { onConflict: "email", ignoreDuplicates: true }
      );

    if (error) {
      console.error("[NEWSLETTER] Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Database error" },
        { status: 500 }
      );
    }

    // Send confirmation email (double opt-in)
    if (isResendConfigured()) {
      const token = generateConfirmToken(cleanEmail);
      const confirmUrl = `${SITE_URL}/api/email/confirm?token=${token}&email=${encodeURIComponent(cleanEmail)}`;

      const html = emailLayout({
        preheader: "Please confirm your subscription to The Sovereign Weekly",
        body: [
          p("Thanks for signing up for <strong>The Sovereign Weekly</strong> — your weekly guide to protecting retirement savings with gold, silver, and smart IRA strategies."),
          p("Please confirm your email address by clicking the button below:"),
        ].join(""),
        ctaText: "Confirm My Subscription",
        ctaUrl: confirmUrl,
        email: cleanEmail,
        sequence: "confirmation",
      });

      try {
        await sendEmail({
          to: cleanEmail,
          subject: "Confirm your subscription to Rich Dad Retirement",
          html,
          tags: [
            { name: "type", value: "double-opt-in" },
            { name: "source", value: cleanSource },
          ],
        });
      } catch (err) {
        console.error("[NEWSLETTER] Confirmation email failed:", err);
      }
    }

    // Send Telegram notification
    try {
      await sendTelegramNotification(
        [
          "\u{1F4E7} <b>New Email Subscriber (pending confirmation)</b>",
          "",
          `\u{1F4E9} ${cleanEmail}`,
          `\u{1F4C4} Source: ${cleanSource}`,
          `\u{1F550} ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
        ].join("\n"),
        false
      );
    } catch {
      console.error("[NEWSLETTER] Telegram notification failed");
    }

    console.log(`[NEWSLETTER] Subscriber (pending): ${cleanEmail} from ${cleanSource}`);

    return NextResponse.json({
      success: true,
      message: "Confirmation email sent. Please check your inbox.",
    });
  } catch (error) {
    console.error("[NEWSLETTER ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
