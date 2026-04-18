import { NextResponse, type NextRequest } from "next/server";
import { DELETED_NEWS_SLUGS } from "@/data/deleted-news-slugs";

/**
 * Edge middleware — Google Scaled Content Abuse recovery.
 *
 * On 2026-03-21 we deleted 1,242 thin AI-generated news articles. They were
 * left as 404s, which Google treats as "maybe coming back" and keeps crawling
 * for weeks. For scaled-content-abuse cleanup, 410 Gone is the correct signal:
 * "permanently removed, drop it now." Google deindexes 410s faster than 404s.
 *
 * We serve a tiny HTML body so Googlebot doesn't treat it as a connection
 * error and so social/direct traffic gets a useful page rather than a blank.
 *
 * NOTE: robots.txt must NOT disallow /news/ or Google can't fetch the 410.
 * See src/app/robots.ts — /news/ was removed from disallow as part of this fix.
 */

const GONE_BODY = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex, follow">
  <title>Article removed — Rich Dad Retirement</title>
  <link rel="canonical" href="https://www.richdadretirement.com/">
</head>
<body>
  <h1>This article has been permanently removed.</h1>
  <p>As part of an editorial quality review, this article is no longer available.</p>
  <p>Try one of our main resources instead:</p>
  <ul>
    <li><a href="https://www.richdadretirement.com/">Home</a></li>
    <li><a href="https://www.richdadretirement.com/best-gold-ira-companies">Best Gold IRA Companies</a></li>
    <li><a href="https://www.richdadretirement.com/gold-ira-rollover">Gold IRA Rollover Guide</a></li>
    <li><a href="https://www.richdadretirement.com/learn">Learning Center</a></li>
  </ul>
</body>
</html>`;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only act on /news/<slug> — not /news (index) or nested paths
  if (!pathname.startsWith("/news/")) return NextResponse.next();

  const slug = pathname.slice("/news/".length).replace(/\/$/, "");
  if (!slug || slug.includes("/")) return NextResponse.next();

  if (DELETED_NEWS_SLUGS.has(slug)) {
    return new NextResponse(GONE_BODY, {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        // Short cache at the edge so Google re-validates quickly once deindexed
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }

  return NextResponse.next();
}

// Only run middleware on /news/* — avoids overhead on every request
export const config = {
  matcher: ["/news/:slug*"],
};
