import { NextRequest, NextResponse } from "next/server";
import { trackSourceClick } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  // Get visitor info
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  const referer = request.headers.get("referer") || "direct";

  // Vercel geo headers
  const country = request.headers.get("x-vercel-ip-country") || undefined;
  const city = request.headers.get("x-vercel-ip-city") || undefined;

  // Get optional campaign parameter (e.g., /youtube?v=video-name)
  const campaign = request.nextUrl.searchParams.get("v") || undefined;

  // Detect device
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);
  const device = isMobile ? "mobile" : "desktop";

  // Track click in database (don't await to keep redirect fast)
  trackSourceClick({
    source: "youtube",
    campaign,
    ip_address: ip,
    user_agent: userAgent,
    device,
    country,
    city,
    referer,
  }).catch(console.error);

  // Redirect to homepage with UTM params
  const redirectUrl = new URL("/", request.url);
  redirectUrl.searchParams.set("utm_source", "youtube");
  redirectUrl.searchParams.set("utm_medium", "video");
  if (campaign) {
    redirectUrl.searchParams.set("utm_campaign", campaign);
  }

  return NextResponse.redirect(redirectUrl, { status: 302 });
}
