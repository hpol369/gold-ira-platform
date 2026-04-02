// src/app/api/track-click/route.ts
// Track affiliate link clicks

import { NextRequest, NextResponse } from "next/server";

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

  // Log
  console.log(`[CLICK] ${trafficType.toUpperCase()} | ${company} | ${source} | ${device}`);

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
