import { MetadataRoute } from "next";
import { audienceSlugs } from "@/config/audiences";
import { getCompanySlugs } from "@/data/companies";
import { getProviderSlugs, getAccountTypeSlugs } from "@/data/rollovers";
import { getAllScenarioSlugs } from "@/data/scenarios";
import { getAllAssetSlugs } from "@/data/assets";
import { US_STATES } from "@/lib/states";
import { getAllNewsSlugs } from "@/lib/news";
import { getAllLearnArticleSlugs } from "@/data/learn-articles";
import { getAllWidowGuideArticleSlugs } from "@/data/widow-guide";
import { getAllMedicaidArticleSlugs } from "@/data/medicaid-planning";
import { getAllGrandchildrenArticleSlugs } from "@/data/grandchildren";
import { getAllSeniorProtectionArticleSlugs } from "@/data/senior-protection";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.richdadretirement.com";

  // ============================================
  // CORE PAGES
  // ============================================
  const corePages = [
    "",
    "/best-gold-ira-companies",
    "/best-silver-ira-companies",
    "/best-crypto-ira-companies",
    "/crypto-ira",
    "/self-directed-ira",
    "/robs-401k",
    "/real-estate-ira",
    "/solo-401k",
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
    "/news",
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
    "/tools/401k-risk-analyzer",
    "/tools/72t-calculator",
    "/tools/barista-fire-calculator",
    "/tools/calpers-pension-calculator",
    "/tools/calpers-retirement-calculator",
    "/tools/calstrs-calculator",
    "/tools/charitable-remainder-trust-calculator",
    "/tools/coast-fire-calculator",
    "/tools/crash-simulator",
    "/tools/fat-fire-calculator",
    "/tools/fees-comparison",
    "/tools/fers-annuity-calculator",
    "/tools/fers-calculator",
    "/tools/fers-supplement-calculator",
    "/tools/fire-number-calculator",
    "/tools/hecm-calculator",
    "/tools/inheritance-calculator",
    "/tools/inherited-ira-rmd-calculator",
    "/tools/lean-fire-calculator",
    "/tools/medicaid-calculator",
    "/tools/money-longevity-calculator",
    "/tools/monte-carlo-retirement-simulator",
    "/tools/nua-calculator",
    "/tools/pension-present-value-calculator",
    "/tools/pension-vs-lump-sum-calculator",
    "/tools/railroad-retirement-calculator",
    "/tools/railroad-tier-1-calculator",
    "/tools/retirement-calculator",
    "/tools/retirement-longevity-calculator",
    "/tools/retirement-spending-calculator",
    "/tools/reverse-mortgage-calculator",
    "/tools/rmd-calculator",
    "/tools/roth-conversion-calculator",
    "/tools/sequence-of-returns-calculator",
    "/tools/social-security-break-even-calculator",
    "/tools/social-security-calculator",
    "/tools/solo-401k-calculator",
    "/tools/tsp-calculator",
    "/tools/wep-calculator",
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
    "/guide/ira-approved-silver",
    "/guide/silver-ira-rollover",
    "/guide/silver-ira-rules",
    "/guide/silver-stacking",
    "/guide/wealth-preservation-strategies",
    "/guide/noble-gold-fees",
    "/guide/birch-gold-fees",
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
    "/learn/is-silver-a-good-investment",
    "/learn/silver-coins-vs-bars",
    "/learn/bitcoin-ira",
    "/learn/checkbook-ira",
    "/learn/self-directed-roth-ira",
    "/learn/robs-401k-rules",
    "/learn/real-estate-ira-custodians",
    "/learn/real-estate-ira-rules",
    "/learn/buy-rental-property-with-ira",
    "/learn/solo-401k-contribution-limits",
    "/learn/solo-401k-vs-sep-ira",
    "/learn/solo-401k-providers",
    "/learn/why-401k-losing-money",
    "/learn/is-401k-fdic-insured",
    "/learn/too-late-to-save-retirement",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // LEARN ARTICLE PAGES (Dynamic from data)
  // ============================================
  const learnArticleSlugs = getAllLearnArticleSlugs();
  const learnArticlePages = learnArticleSlugs.map((slug) => ({
    url: `${baseUrl}/learn/${slug}`,
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
    // Crypto IRA reviews
    "/reviews/itrustcapital",
    "/reviews/alto-ira",
    // Self-Directed IRA reviews
    "/reviews/rocket-dollar",
    // ROBS 401k reviews
    "/reviews/guidant-financial",
    "/reviews/benetrends",
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
    "/compare/goldco-vs-augusta",
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
  // NEWS ARTICLE PAGES
  // ============================================
  const newsSlugs = getAllNewsSlugs();
  const newsPages = newsSlugs.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  // ============================================
  // WIDOW'S GUIDE PAGES
  // ============================================
  const widowGuideSlugs = getAllWidowGuideArticleSlugs();
  const widowGuidePages = [
    // Hub page
    {
      url: `${baseUrl}/widow-guide`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Article pages
    ...widowGuideSlugs.map((slug) => ({
      url: `${baseUrl}/widow-guide/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ============================================
  // MEDICAID PLANNING PAGES
  // ============================================
  const medicaidSlugs = getAllMedicaidArticleSlugs();
  const medicaidPages = [
    // Hub page
    {
      url: `${baseUrl}/medicaid-planning`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Article pages
    ...medicaidSlugs.map((slug) => ({
      url: `${baseUrl}/medicaid-planning/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ============================================
  // GRANDCHILDREN LEGACY PAGES
  // ============================================
  const grandchildrenSlugs = getAllGrandchildrenArticleSlugs();
  const grandchildrenPages = [
    // Hub page
    {
      url: `${baseUrl}/grandchildren`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Article pages
    ...grandchildrenSlugs.map((slug) => ({
      url: `${baseUrl}/grandchildren/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ============================================
  // SENIOR PROTECTION PAGES
  // ============================================
  const seniorProtectionSlugs = getAllSeniorProtectionArticleSlugs();
  const seniorProtectionPages = [
    // Hub page
    {
      url: `${baseUrl}/senior-protection`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Article pages
    ...seniorProtectionSlugs.map((slug) => ({
      url: `${baseUrl}/senior-protection/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

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
    ...learnArticlePages,
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
    ...newsPages,
    ...widowGuidePages,
    ...medicaidPages,
    ...grandchildrenPages,
    ...seniorProtectionPages,
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
