// src/app/api/track-click/route.ts
// Track affiliate link clicks and send Telegram notifications

import { NextRequest, NextResponse } from "next/server";

// Telegram config - set these in your .env.local
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramNotification(message: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("Telegram not configured, skipping notification");
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const destination = searchParams.get("url");
  const source = searchParams.get("source") || "unknown";
  const company = searchParams.get("company") || "augusta";

  if (!destination) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  // Get visitor info
  const userAgent = request.headers.get("user-agent") || "unknown";
  const referer = request.headers.get("referer") || "direct";
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

  // Detect device type
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);
  const deviceType = isMobile ? "📱 Mobile" : "💻 Desktop";

  // Format Telegram message
  const message = `
🔔 <b>Affiliate Click!</b>

🏢 <b>Company:</b> ${company.toUpperCase()}
📄 <b>Source Page:</b> ${source}
${deviceType}

🕐 <b>Time:</b> ${timestamp}
🔗 <b>Referrer:</b> ${referer}

💰 <i>Potential lead incoming...</i>
`.trim();

  // Send Telegram notification (async, don't wait)
  sendTelegramNotification(message);

  // Log to console for debugging
  console.log(`[CLICK] ${company} | ${source} | ${deviceType} | ${timestamp}`);

  // Redirect to destination
  return NextResponse.redirect(destination, { status: 302 });
}
