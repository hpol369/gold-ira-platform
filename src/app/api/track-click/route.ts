// src/app/api/track-click/route.ts
// Track affiliate link clicks and send Telegram notifications

import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/notifications";

type TrafficType = "organic" | "paid" | "direct";

// Detect traffic type from referer and explicit parameter
function detectTrafficType(referer: string, explicitType?: string): TrafficType {
  // Explicit type takes precedence
  if (explicitType === "paid") return "paid";
  if (explicitType === "organic") return "organic";

  // Detect from referer
  if (!referer || referer === "direct") return "direct";

  const refererLower = referer.toLowerCase();

  // Google Ads indicators
  if (
    refererLower.includes("gclid") ||
    refererLower.includes("googleadservices") ||
    refererLower.includes("googlesyndication")
  ) {
    return "paid";
  }

  // Organic search indicators
  if (
    refererLower.includes("google.com") ||
    refererLower.includes("bing.com") ||
    refererLower.includes("duckduckgo.com") ||
    refererLower.includes("yahoo.com")
  ) {
    return "organic";
  }

  // Default to direct for unknown sources
  return "direct";
}

async function sendClickNotification(data: {
  company: string;
  source: string;
  device: string;
  timestamp: string;
  referer: string;
  trafficType: TrafficType;
  campaign?: string;
  location?: string;
  clickId?: string;
}) {
  // Traffic type indicators
  const trafficIndicators: Record<TrafficType, { emoji: string; label: string }> = {
    paid: { emoji: "💰", label: "PAID CLICK" },
    organic: { emoji: "🟢", label: "ORGANIC CLICK" },
    direct: { emoji: "🔗", label: "DIRECT CLICK" },
  };

  const indicator = trafficIndicators[data.trafficType];
  const campaignLine = data.campaign ? `\n🎯 <b>Campaign:</b> ${data.campaign}` : "";
  const locationLine = data.location ? `\n🌍 <b>Location:</b> ${data.location}` : "";
  const clickIdLine = data.clickId ? `\n🔑 <b>Click ID:</b> ${data.clickId}` : "";

  const message = `${indicator.emoji} <b>${indicator.label} - ${data.company.toUpperCase()}</b>

📍 <b>Source:</b> ${data.source}${clickIdLine}
${data.device}${locationLine}
🕐 ${data.timestamp}${campaignLine}

💰 <i>Lead incoming...</i>`;

  // Use shared notification function (uses same env vars as other notifications)
  await sendTelegramNotification(message, false);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const destination = searchParams.get("url");
  const source = searchParams.get("source") || "unknown";
  const company = searchParams.get("company") || "augusta";
  const traffic = searchParams.get("traffic") || undefined;
  const campaign = searchParams.get("campaign") || undefined;
  const clickId = searchParams.get("click_id") || undefined;

  if (!destination) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  // Get visitor info
  const userAgent = request.headers.get("user-agent") || "";
  const referer = request.headers.get("referer") || "direct";
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);
  const device = isMobile ? "📱 Mobile" : "💻 Desktop";

  // Get location from Vercel geo headers
  const country = request.headers.get("x-vercel-ip-country") || "";
  const city = request.headers.get("x-vercel-ip-city") || "";
  const region = request.headers.get("x-vercel-ip-country-region") || "";

  // Build location string
  let location = "";
  if (city && region && country) {
    location = `${city}, ${region}, ${country}`;
  } else if (city && country) {
    location = `${city}, ${country}`;
  } else if (country) {
    location = country;
  }

  // Detect traffic type
  const trafficType = detectTrafficType(referer, traffic);

  // Send notification (async, don't block redirect)
  sendClickNotification({ company, source, device, timestamp, referer, trafficType, campaign, location, clickId });

  // Log
  console.log(`[CLICK] ${trafficType.toUpperCase()} | ${company} | ${source} | ${device}`);

  // Redirect
  return NextResponse.redirect(destination, { status: 302 });
}
