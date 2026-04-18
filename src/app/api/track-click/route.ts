// src/app/api/track-click/route.ts
// Track affiliate link clicks and send Telegram notifications

import { NextRequest, NextResponse } from "next/server";
import { sendTelegramNotification } from "@/lib/notifications";

type TrafficType = "organic" | "paid" | "direct";

// --- Rate limiting & bot detection for click notifications ---
const clickRateLimitMap = new Map<string, { count: number; resetAt: number }>();
const CLICK_RATE_LIMIT = 3; // Max notifications per IP per window
const CLICK_RATE_WINDOW = 60 * 60 * 1000; // 1 hour

// Deduplicate click IDs (prevent double-clicks)
const recentClickIds = new Map<string, number>();
const CLICK_ID_TTL = 5 * 60 * 1000; // 5 minutes

// Known bot user-agents
const BOT_PATTERNS = /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|headlesschrome|phantom|selenium|puppeteer|curl|wget|python-requests|go-http-client|java\/|libwww|scrapy|httpclient/i;

function shouldNotify(ip: string, userAgent: string, clickId?: string): boolean {
  // 1. Bot detection
  if (BOT_PATTERNS.test(userAgent) || !userAgent) {
    return false;
  }

  // 2. Click ID deduplication
  if (clickId) {
    const now = Date.now();
    const seen = recentClickIds.get(clickId);
    if (seen && now - seen < CLICK_ID_TTL) {
      return false;
    }
    recentClickIds.set(clickId, now);
    // Cleanup old entries periodically
    if (recentClickIds.size > 5000) {
      for (const [id, ts] of recentClickIds) {
        if (now - ts > CLICK_ID_TTL) recentClickIds.delete(id);
      }
    }
  }

  // 3. IP rate limiting
  const now = Date.now();
  const entry = clickRateLimitMap.get(ip);
  if (entry) {
    if (now > entry.resetAt) {
      clickRateLimitMap.set(ip, { count: 1, resetAt: now + CLICK_RATE_WINDOW });
      return true;
    }
    entry.count++;
    if (entry.count > CLICK_RATE_LIMIT) {
      return false;
    }
    return true;
  }
  clickRateLimitMap.set(ip, { count: 1, resetAt: now + CLICK_RATE_WINDOW });

  // Cleanup old entries
  if (clickRateLimitMap.size > 10000) {
    for (const [key, val] of clickRateLimitMap) {
      if (now > val.resetAt) clickRateLimitMap.delete(key);
    }
  }

  return true;
}

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

  // Validate redirect URL - only allow known domains and internal paths
  const ALLOWED_DOMAINS = [
    "augustapreciousmetals.com",
    "learn.augustapreciousmetals.com",
    "noblegoldinvestments.com",
    "goldco.com",
    "birchgold.com",
    "americanhartfordgold.com",
    "richdadretirement.com",
    "www.richdadretirement.com",
  ];

  if (!destination.startsWith("/")) {
    try {
      const destUrl = new URL(destination);
      const isAllowed = ALLOWED_DOMAINS.some(domain =>
        destUrl.hostname === domain || destUrl.hostname.endsWith("." + domain)
      );
      if (!isAllowed || !["http:", "https:"].includes(destUrl.protocol)) {
        console.warn(`[CLICK] Blocked redirect to disallowed URL: ${destination}`);
        return NextResponse.json({ error: "Invalid redirect URL" }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }
  }

  // Get visitor info
  const userAgent = request.headers.get("user-agent") || "";
  const referer = request.headers.get("referer") || "direct";
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
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

  // Only send notification if not a bot, not rate-limited, and not a duplicate click
  if (shouldNotify(ip, userAgent, clickId)) {
    sendClickNotification({ company, source, device, timestamp, referer, trafficType, campaign, location, clickId });
  }

  // Log (always, for debugging)
  console.log(`[CLICK] ${trafficType.toUpperCase()} | ${company} | ${source} | ${device} | IP: ${ip}`);

  // Convert relative URLs to absolute (NextResponse.redirect requires absolute URLs)
  let redirectUrl = destination;
  if (destination.startsWith("/")) {
    // Internal link - construct absolute URL from request
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    const host = request.headers.get("host") || "richdadretirement.com";
    redirectUrl = `${protocol}://${host}${destination}`;
    console.log(`[CLICK] Internal redirect: ${redirectUrl}`);
  }

  // Redirect
  return NextResponse.redirect(redirectUrl, { status: 302 });
}
