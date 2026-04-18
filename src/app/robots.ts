import { MetadataRoute } from "next";

/**
 * robots.txt
 *
 * SCALED CONTENT ABUSE RECOVERY NOTE (Apr 2026):
 * /news/ is NOT disallowed — this is deliberate. The 1,392 surviving news
 * articles serve `noindex`, and the 1,242 deleted slugs serve 410 Gone via
 * middleware.ts. If we Disallow /news/ here, Googlebot cannot fetch those
 * URLs to SEE the noindex/410 signals, and the URLs stay stuck in the index
 * indefinitely as "Blocked by robots.txt" — which blocks deindexing and
 * keeps the scaled-content flag active. Let Google crawl → process noindex
 * + 410 → drop cleanly. Re-add to disallow ONLY after GSC confirms the full
 * /news/ surface has dropped from the index (typically 6–12 weeks).
 *
 * The same principle applies to /local/, /best-gold-ira-for/, and
 * /compare/gold-vs/ — but those were noindex from day one (never indexed
 * at scale), so keeping them disallowed to save crawl budget is fine.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/preview/",
          "/lp/",                // Landing pages (noindex)
          "/local/",             // 500+ city + 50 state pages (noindex from launch)
          "/best-gold-ira-for/", // 26 audience pages (noindex from launch)
          "/author/",            // Redirect-only page
          "/compare/gold-vs/",   // Dynamic asset comparisons (noindex from launch)
          // "/news/" INTENTIONALLY NOT disallowed — see note above.
        ],
      },
    ],
    sitemap: "https://www.richdadretirement.com/sitemap.xml",
  };
}
