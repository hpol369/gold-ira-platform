import { MetadataRoute } from "next";
import { audienceSlugs } from "@/config/audiences";
import { getCompanySlugs } from "@/data/companies";
import { getProviderSlugs, getAccountTypeSlugs } from "@/data/rollovers";
import { getAllScenarioSlugs } from "@/data/scenarios";
import { getAllAssetSlugs } from "@/data/assets";
import { US_STATES } from "@/lib/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://richdadretirement.com";

  // ============================================
  // CORE PAGES
  // ============================================
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
    "/resources",
    "/quiz",
    "/scams",
    "/investigative-hub",
    "/rich-dad-strategy",
    "/scenarios",
    "/best-gold-ira-for",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  // ============================================
  // LEGAL/POLICY PAGES
  // ============================================
  const legalPages = [
    "/privacy-policy",
    "/editorial-policy",
    "/terms-of-service",
    "/thank-you",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  // ============================================
  // AUTHOR PAGES
  // ============================================
  const authorPages = [
    "/author/thomas-richardson",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // ============================================
  // TOOLS PAGES
  // ============================================
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

  // ============================================
  // GUIDE PAGES
  // ============================================
  const guidePages = [
    "/guide/gold-ira-guide",
    "/guide/gold-ira-fees",
    "/guide/gold-ira-for-seniors",
    "/guide/gold-ira-minimum-investment",
    "/guide/401k-to-gold-rollover",
    "/guide/403b-to-gold-ira-rollover",
    "/guide/457b-to-gold-ira-rollover",
    "/guide/tsp-to-gold-ira-rollover",
    "/guide/protect-401k-from-crash",
    "/guide/what-to-do-with-old-401k",
    "/guide/401k-alternatives",
    "/guide/silver-ira-guide",
    "/guide/wealth-preservation-strategies",
    "/guide/noble-gold-fees",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ============================================
  // LEARN PAGES
  // ============================================
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
    "/learn/sequence-of-returns-risk",
    "/learn/self-directed-ira-gold",
    "/learn/stock-market-crash-protection",
    "/learn/indirect-vs-direct-rollover",
    "/learn/how-much-gold-in-portfolio",
    "/learn/retirement-planning-mistakes",
    "/learn/why-is-gold-valuable",
    "/learn/safe-haven-investments",
    "/learn/precious-metals-ira-rules",
    "/learn/stock-market-alternatives",
    "/learn/recession-proof-investments",
    "/learn/gold-price-prediction-2026",
    "/learn/gold-bullion-vs-gold-coins",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // WHY GOLD PAGES
  // ============================================
  const whyGoldPages = [
    "/why-gold/physical-gold-vs-paper",
    "/why-gold/central-banks-buying-gold",
    "/why-gold/inflation-protection",
    "/why-gold/gold-vs-stocks",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // RICH DAD STRATEGY PAGES
  // ============================================
  const richDadPages = [
    "/rich-dad-strategy/robert-kiyosaki-gold",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // REVIEW PAGES (Static)
  // ============================================
  const reviewStaticPages = [
    // Main company reviews
    "/reviews/augusta-precious-metals",
    "/reviews/goldco",
    "/reviews/american-hartford-gold",
    "/reviews/birch-gold",
    "/reviews/noble-gold",
    "/reviews/advantage-gold",
    "/reviews/patriot-gold-group",
    "/reviews/oxford-gold-group",
    "/reviews/lear-capital",
    "/reviews/regal-assets",
    "/reviews/orion-metal-exchange",
    "/reviews/american-bullion",
    "/reviews/rosland-capital",
    "/reviews/priority-gold",
    "/reviews/us-money-reserve",
    "/reviews/blanchard-gold",
    "/reviews/monetary-gold",
    "/reviews/money-metals-exchange",
    // Complaints & lawsuit pages
    "/reviews/us-money-reserve-complaints",
    "/reviews/rosland-capital-lawsuit",
    "/reviews/augusta-precious-metals-lawsuit",
    "/reviews/american-hartford-gold-complaints",
    "/reviews/advantage-gold-complaints",
    "/reviews/goldco-lawsuit-facts",
    "/reviews/lear-capital-complaints",
    "/reviews/regal-assets-lawsuit",
    "/reviews/birch-gold-complaints",
    "/reviews/noble-gold-legit",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // REVIEW PAGES (Dynamic from companies data)
  // ============================================
  const companySlugs = getCompanySlugs();
  const reviewDynamicPages = companySlugs.map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // COMPARE PAGES (Static)
  // ============================================
  const compareStaticPages = [
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

  // ============================================
  // GOLD VS [ASSET] COMPARISON PAGES
  // ============================================
  const assetSlugs = getAllAssetSlugs();
  const assetComparePages = assetSlugs.map((slug) => ({
    url: `${baseUrl}/compare/gold-vs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ============================================
  // ROLLOVER ACCOUNT TYPE PAGES
  // ============================================
  const accountTypeSlugs = getAccountTypeSlugs();
  const rolloverAccountPages = accountTypeSlugs.map((slug) => ({
    url: `${baseUrl}/rollover/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // ROLLOVER PROVIDER PAGES
  // ============================================
  const providerSlugs = getProviderSlugs();
  const rolloverProviderPages = providerSlugs.map((slug) => ({
    url: `${baseUrl}/rollover/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // BEST GOLD IRA FOR [AUDIENCE] PAGES
  // ============================================
  const audiencePages = audienceSlugs.map((slug) => ({
    url: `${baseUrl}/best-gold-ira-for/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // SCENARIO PAGES
  // ============================================
  const scenarioSlugs = getAllScenarioSlugs();
  const scenarioPages = scenarioSlugs.map((slug) => ({
    url: `${baseUrl}/scenarios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ============================================
  // LOCAL STATE PAGES
  // ============================================
  const statePages = US_STATES.map((state) => ({
    url: `${baseUrl}/local/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // ============================================
  // COMBINE ALL PAGES
  // ============================================
  // Deduplicate by URL to handle any overlaps
  const allPages = [
    ...corePages,
    ...legalPages,
    ...authorPages,
    ...toolsPages,
    ...guidePages,
    ...learnPages,
    ...whyGoldPages,
    ...richDadPages,
    ...reviewStaticPages,
    ...reviewDynamicPages,
    ...compareStaticPages,
    ...assetComparePages,
    ...rolloverAccountPages,
    ...rolloverProviderPages,
    ...audiencePages,
    ...scenarioPages,
    ...statePages,
  ];

  // Deduplicate by URL
  const urlSet = new Set<string>();
  const dedupedPages = allPages.filter((page) => {
    if (urlSet.has(page.url)) {
      return false;
    }
    urlSet.add(page.url);
    return true;
  });

  return dedupedPages;
}
