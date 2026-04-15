import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";
import { enrollInSequence } from "@/lib/email-queue";
import { sendTelegramNotification } from "@/lib/notifications";

const SITE_URL = "https://richdadretirement.com";

/**
 * Verify a confirmation token matches the email
 */
function verifyConfirmToken(email: string, token: string): boolean {
  const secret = process.env.CRON_SECRET || "fallback-secret";
  const expected = crypto
    .createHash("sha256")
    .update(email + secret)
    .digest("hex")
    .slice(0, 32);
  return token === expected;
}

/**
 * GET /api/email/confirm?token=xxx&email=xxx
 * Confirms email subscription via double opt-in, then enrolls in content-nurture sequence
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    // Validate params
    if (!token || !email) {
      return buildHtmlResponse(
        "Missing Parameters",
        "Invalid confirmation link. Please try subscribing again.",
        false
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Verify token
    if (!verifyConfirmToken(cleanEmail, token)) {
      return buildHtmlResponse(
        "Invalid Link",
        "This confirmation link is invalid or expired. Please try subscribing again.",
        false
      );
    }

    // Check if subscriber exists
    const { data: subscriber, error: fetchError } = await supabase
      .from("email_subscribers")
      .select("email, confirmed_at, source")
      .eq("email", cleanEmail)
      .maybeSingle();

    if (fetchError || !subscriber) {
      return buildHtmlResponse(
        "Not Found",
        "We could not find your subscription. Please try signing up again.",
        false
      );
    }

    // Already confirmed
    if (subscriber.confirmed_at) {
      return NextResponse.redirect(`${SITE_URL}/?confirmed=1`, { status: 302 });
    }

    // Confirm the subscription
    const { error: updateError } = await supabase
      .from("email_subscribers")
      .update({ confirmed_at: new Date().toISOString() })
      .eq("email", cleanEmail);

    if (updateError) {
      console.error("[CONFIRM] Update error:", updateError);
      return buildHtmlResponse(
        "Error",
        "Something went wrong. Please try again later.",
        false
      );
    }

    // Enroll in content nurture sequence (topic-aware, 13 emails over 60 days)
    const cleanSource = subscriber.source || "unknown";
    const topicSlug = cleanSource.startsWith("/learn/")
      ? cleanSource.replace("/learn/", "")
      : cleanSource.startsWith("/")
        ? cleanSource.replace(/^\//, "").replace(/\//g, "-")
        : cleanSource;

    try {
      await enrollInSequence(
        cleanEmail,
        "content-nurture",
        cleanSource,
        undefined, // firstName not captured in newsletter
        { topicSlug } // metadata for topic-specific email content
      );
    } catch (err) {
      console.error("[CONFIRM] Sequence enrollment failed:", err);
      // Fallback to legacy sequence if content-nurture doesn't exist yet
      try {
        await enrollInSequence(cleanEmail, "newsletter-welcome", cleanSource);
      } catch {
        console.error("[CONFIRM] Fallback enrollment also failed");
      }
    }

    // Send Telegram notification
    try {
      await sendTelegramNotification(
        [
          "\u2705 <b>Email Confirmed!</b>",
          "",
          `\u{1F4E9} ${cleanEmail}`,
          `\u{1F4C4} Source: ${cleanSource}`,
          `\u{1F550} ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
        ].join("\n"),
        false
      );
    } catch {
      console.error("[CONFIRM] Telegram notification failed");
    }

    console.log(`[CONFIRM] Email confirmed: ${cleanEmail}`);

    // Redirect to homepage with confirmation param
    return NextResponse.redirect(`${SITE_URL}/?confirmed=1`, { status: 302 });
  } catch (error) {
    console.error("[CONFIRM ERROR]", error);
    return buildHtmlResponse(
      "Error",
      "Something went wrong. Please try again later.",
      false
    );
  }
}

/**
 * Build a simple branded HTML response for error states
 */
function buildHtmlResponse(title: string, message: string, success: boolean): NextResponse {
  const bgColor = success ? "#ecfdf5" : "#fef2f2";
  const textColor = success ? "#065f46" : "#991b1b";
  const iconColor = success ? "#10b981" : "#ef4444";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Rich Dad Retirement</title>
  <style>
    body { margin:0; padding:0; background:#f1f5f9; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; }
    .card { background:#fff; border-radius:16px; padding:48px; max-width:480px; text-align:center; box-shadow:0 4px 24px rgba(0,0,0,0.08); }
    .icon { width:64px; height:64px; border-radius:50%; background:${bgColor}; display:flex; align-items:center; justify-content:center; margin:0 auto 24px; font-size:28px; }
    h1 { color:#000080; font-size:24px; margin:0 0 12px; }
    p { color:${textColor}; font-size:16px; line-height:1.6; margin:0 0 24px; }
    a { display:inline-block; padding:12px 32px; background:#B22234; color:#fff; text-decoration:none; border-radius:8px; font-weight:600; }
    a:hover { background:#8b1c2a; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon" style="color:${iconColor}">${success ? "\u2713" : "\u2717"}</div>
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="${SITE_URL}">Go to Rich Dad Retirement</a>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    status: success ? 200 : 400,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
