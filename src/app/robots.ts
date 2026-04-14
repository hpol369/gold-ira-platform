import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          // Thin/templated content — blocked for crawl budget efficiency
          "/local/",           // 500+ city + 50 state pages (templated)
          "/best-gold-ira-for/", // 26 audience pages (templated)
          "/news/",            // 1,230+ AI-generated articles (noindexed)
        ],
      },
    ],
    sitemap: "https://www.richdadretirement.com/sitemap.xml",
  };
}
