// src/app/api/track-click/route.ts
// Track affiliate link clicks and send Telegram notifications

import { NextRequest, NextResponse } from "next/server";

async function sendClickNotification(data: {
  company: string;
  source: string;
  device: string;
  timestamp: string;
  referer: string;
}) {
  // Read env vars inside function (required for Vercel serverless)
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("[CLICK] Telegram not configured");
    return;
  }

  const message = `🖱️ <b>Affiliate Click</b>

🏢 <b>Company:</b> ${data.company.toUpperCase()}
📄 <b>Page:</b> ${data.source}
${data.device}

🕐 ${data.timestamp}
🔗 ${data.referer}

💰 <i>Lead incoming...</i>`;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
        disable_notification: true, // Silent - don't spam for every click
      }),
    });
  } catch (error) {
    console.error("[CLICK] Telegram error:", error);
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
  const userAgent = request.headers.get("user-agent") || "";
  const referer = request.headers.get("referer") || "direct";
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);
  const device = isMobile ? "📱 Mobile" : "💻 Desktop";

  // Send notification (async, don't block redirect)
  sendClickNotification({ company, source, device, timestamp, referer });

  // Log
  console.log(`[CLICK] ${company} | ${source} | ${device}`);

  // Redirect
  return NextResponse.redirect(destination, { status: 302 });
}
