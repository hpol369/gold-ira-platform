import { MetadataRoute } from "next";
import { audienceSlugs } from "@/config/audiences";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://richdadretirement.com";

  // Core pages
  const corePages = [
    "",
    "/best-gold-ira-companies",
    "/reviews",
    "/compare",
    "/rollover",
    "/why-gold",
    "/what-is-a-gold-ira",
    "/gold-ira-rules",
    "/get-started",
    "/academy",
    "/faq",
    "/glossary",
    "/tools",
    "/about-us",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  // Tools pages
  const toolsPages = [
    "/tools/crash-simulator",
    "/tools/rmd-calculator",
    "/tools/fees-comparison",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Guide pages
  const guidePages = [
    "/guide/gold-ira-guide",
    "/guide/gold-ira-fees",
    "/guide/gold-ira-for-seniors",
    "/guide/gold-ira-minimum-investment",
    "/guide/401k-to-gold-rollover",
    "/guide/403b-to-gold-ira-rollover",
    "/guide/tsp-to-gold-ira-rollover",
    "/guide/protect-401k-from-crash",
    "/guide/what-to-do-with-old-401k",
    "/guide/401k-alternatives",
    "/guide/silver-ira-guide",
    "/guide/wealth-preservation-strategies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Learn pages
  const learnPages = [
    "/learn/gold-ira-benefits",
    "/learn/gold-ira-tax-rules",
    "/learn/gold-ira-scams",
    "/learn/ira-approved-gold-coins",
    "/learn/are-gold-iras-safe",
    "/learn/home-storage-gold-ira",
    "/learn/platinum-ira",
    "/learn/checkbook-ira-rules",
    "/learn/is-my-money-safe-in-bank",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Review pages
  const reviewPages = [
    "/reviews/augusta-precious-metals",
    "/reviews/goldco",
    "/reviews/american-hartford-gold",
    "/reviews/birch-gold-group",
    "/reviews/noble-gold",
    "/reviews/advantage-gold",
    "/reviews/patriot-gold-group",
    "/reviews/oxford-gold-group",
    "/reviews/lear-capital",
    "/reviews/regal-assets",
    "/reviews/orion-metal-exchange",
    "/reviews/preserve-gold",
    "/reviews/american-bullion",
    "/reviews/rosland-capital",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Rollover pages
  const rolloverPages = [
    "/rollover/401k",
    "/rollover/403b",
    "/rollover/457b",
    "/rollover/tsp",
    "/rollover/roth",
    "/rollover/sep",
    "/rollover/simple",
    "/rollover/traditional",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Best Gold IRA For audience pages
  const audiencePages = audienceSlugs.map((slug) => ({
    url: `${baseUrl}/best-gold-ira-for/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Compare pages
  const comparePages = [
    "/compare/augusta-vs-goldco",
    "/compare/augusta-vs-noble-gold",
    "/compare/goldco-vs-american-hartford-gold",
    "/compare/goldco-vs-lear-capital",
    "/compare/noble-gold-vs-birch-gold",
    "/compare/lear-capital-vs-noble-gold",
    "/compare/american-hartford-vs-oxford-gold",
    "/compare/gold-ira-vs-physical-gold",
    "/compare/gold-ira-vs-401k",
    "/compare/gold-ira-vs-traditional-ira",
    "/compare/gold-ira-vs-roth-ira",
    "/compare/gold-ira-vs-gold-etf",
    "/compare/gold-ira-vs-crypto",
    "/compare/gold-vs-silver-ira",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Scenario pages
  const scenarioPages = [
    "/scenarios/bank-failure",
    "/scenarios/dollar-collapse",
    "/scenarios/hyperinflation",
    "/scenarios/market-crash",
    "/scenarios/recession",
    "/scenarios/stock-crash",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Best For hub
  const bestForPages = [
    "/best-gold-ira-for",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...corePages,
    ...toolsPages,
    ...guidePages,
    ...learnPages,
    ...reviewPages,
    ...rolloverPages,
    ...audiencePages,
    ...comparePages,
    ...scenarioPages,
    ...bestForPages,
  ];
}
