import { MetadataRoute } from "next";

/**
 * SITEMAP — QUALITY-ONLY VERSION
 *
 * Google Recovery Plan Phase 1: Reduced from ~2,100 URLs to ~350 high-quality pages.
 *
 * REMOVED (noindexed or thin content):
 * - All 1,230+ news articles (AI-generated, noindexed)
 * - All 500+ city pages (templated, noindexed)
 * - All 50 state pages (thin, noindexed)
 * - All 26 audience pages (templated, noindexed)
 * - All 272 dynamic company comparison permutations (kept only curated static comparisons)
 * - News index page, local index page, audience index page
 *
 * KEPT:
 * - Core pages, legal, author pages
 * - 44 calculator tools (genuinely useful, unique)
 * - 22 guide pages (substantive content)
 * - ~37 curated learn articles (static, high-quality)
 * - Company reviews (unique content per company)
 * - Curated comparison pages (static, high-quality)
 * - Silver hub pages (substantive)
 * - Rollover account type pages (substantive)
 * - Content hub sub-pages
 * - Special topic hubs (widow guide, medicaid, etc.)
 */
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
    "/gold-ira-rollover",
    "/is-gold-a-good-investment",
    "/gold-ira-pros-and-cons",
    "/how-does-a-gold-ira-work",
    "/is-a-gold-ira-a-good-idea",
    "/gold-ira-statistics",
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
    "/learn",
    "/is-enough-to-retire",
    "/audit",
    "/gold-ira-industry-report-2026",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-22'),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  // ============================================
  // LEGAL/POLICY PAGES
  // ============================================
  const legalPages = [
    "/privacy-policy",
    "/editorial-policy",
    "/editorial-standards",
    "/editorial-board",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-01-15'),
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
    lastModified: new Date('2026-03-01'),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // ============================================
  // TOOLS PAGES (genuinely useful calculators — keep all)
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
    "/tools/fire-calculator",
    "/tools/gold-allocation-calculator",
    "/tools/gold-ira-calculator",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-02-01'),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ============================================
  // GUIDE PAGES (substantive, keep all)
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
    "/guide/silver-stacking",
    "/guide/wealth-preservation-strategies",
    "/guide/noble-gold-fees",
    "/guide/birch-gold-fees",
    "/guide/transfer-401k-to-gold",
    "/guide/convert-401k-to-gold",
    "/guide/move-401k-to-gold",
    "/guide/can-i-buy-gold-with-401k",
    "/guide/401k-to-gold-without-penalty",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ============================================
  // LEARN PAGES (curated, high-quality static articles only)
  // Dynamic cluster articles REMOVED — too many thin keyword variants
  // ============================================
  const learnPages = [
    "/learn/are-gold-iras-safe",
    "/learn/bitcoin-ira",
    "/learn/buy-rental-property-with-ira",
    "/learn/checkbook-ira",
    "/learn/checkbook-ira-rules",
    "/learn/gold-bullion-vs-gold-coins",
    "/learn/gold-ira-benefits",
    "/learn/gold-ira-scams",
    "/learn/gold-ira-tax-rules",
    "/learn/gold-price-prediction-2026",
    "/learn/home-storage-gold-ira",
    "/learn/how-much-gold-in-portfolio",
    "/learn/indirect-vs-direct-rollover",
    "/learn/ira-approved-gold-coins",
    "/learn/is-401k-fdic-insured",
    "/learn/is-my-money-safe-in-bank",
    "/learn/is-silver-a-good-investment",
    "/learn/platinum-ira",
    "/learn/precious-metals-ira-rules",
    "/learn/real-estate-ira-custodians",
    "/learn/real-estate-ira-rules",
    "/learn/recession-proof-investments",
    "/learn/retirement-planning-mistakes",
    "/learn/robs-401k-rules",
    "/learn/safe-haven-investments",
    "/learn/self-directed-ira-gold",
    "/learn/self-directed-roth-ira",
    "/learn/sequence-of-returns-risk",
    "/learn/silver-coins-vs-bars",
    "/learn/solo-401k-contribution-limits",
    "/learn/solo-401k-providers",
    "/learn/solo-401k-vs-sep-ira",
    "/learn/stock-market-alternatives",
    "/learn/stock-market-crash-protection",
    "/learn/too-late-to-save-retirement",
    "/learn/why-401k-losing-money",
    "/learn/why-is-gold-valuable",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-20'),
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
    lastModified: new Date('2026-03-15'),
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
    lastModified: new Date('2026-03-15'),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // HUB SUB-PAGES
  // ============================================
  const hubSubPages = [
    "/self-directed-ira/prohibited-transactions",
    "/self-directed-ira/custodian-comparison",
    "/self-directed-ira/alternative-assets",
    "/self-directed-ira/llc-structure",
    "/crypto-ira/best-companies",
    "/crypto-ira/tax-rules",
    "/crypto-ira/bitcoin-vs-gold-ira",
    "/real-estate-ira/ubit-rules",
    "/real-estate-ira/rental-property-rules",
    "/real-estate-ira/non-recourse-loans",
    "/robs-401k/qualification-rules",
    "/robs-401k/vs-sba-loan",
    "/robs-401k/success-rates",
    "/compare/gold-ira-vs-annuity",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ============================================
  // REVIEW PAGES (unique content per company — keep)
  // ============================================
  const reviewPages = [
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
    "/reviews/itrustcapital",
    "/reviews/alto-ira",
    "/reviews/rocket-dollar",
    "/reviews/guidant-financial",
    "/reviews/benetrends",
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
    "/reviews/equity-trust",
    "/reviews/kingdom-trust",
    "/reviews/millennium-trust",
    "/reviews/preferred-trust",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // COMPARE PAGES (curated only — NO dynamic permutations)
  // ============================================
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
    "/compare/gold-stocks-vs-gold-ira",
    "/compare/gold-etf-vs-physical-gold",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-01'),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ============================================
  // ROLLOVER ACCOUNT TYPE PAGES (keep — substantive)
  // Provider-specific pages REMOVED (too many permutations)
  // ============================================
  const rolloverPages = [
    "/rollover/401k-to-gold-ira",
    "/rollover/403b-to-gold-ira",
    "/rollover/457b-to-gold-ira",
    "/rollover/tsp-to-gold-ira",
    "/rollover/pension-to-gold-ira",
    "/rollover/sep-ira-to-gold-ira",
    "/rollover/simple-ira-to-gold-ira",
    "/rollover/traditional-ira-to-gold-ira",
    "/rollover/roth-ira-to-gold-ira",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-01'),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // SCENARIO PAGES
  // ============================================
  const scenarioPages = [
    "/scenarios/currency-crisis",
    "/scenarios/bank-bail-in",
    "/scenarios/pension-crisis",
    "/scenarios/hyperinflation",
    "/scenarios/stock-market-crash",
    "/scenarios/social-security-collapse",
    "/scenarios/dollar-collapse",
    "/scenarios/stagflation",
    "/scenarios/debt-ceiling-crisis",
    "/scenarios/cyber-attack-financial",
    "/scenarios/supply-chain-collapse",
    "/scenarios/housing-crash-2",
    "/scenarios/bond-market-crash",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-02-01'),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ============================================
  // SPECIAL TOPIC HUBS (substantive niche content)
  // ============================================
  const specialTopicPages = [
    "/widow-guide",
    "/medicaid-planning",
    "/grandchildren",
    "/senior-protection",
    "/federal-retirement",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ============================================
  // SILVER HUB PAGES (keep hub pages + key sub-pages)
  // ============================================
  const silverPages = [
    // Silver Squeeze Hub
    "/silver-squeeze",
    "/silver-squeeze/buy-physical-silver-guide",
    "/silver-squeeze/silver-supply-deficit",
    "/silver-squeeze/comex-silver-inventory",
    "/silver-squeeze/silver-short-interest",
    "/silver-squeeze/silver-manipulation",
    "/silver-squeeze/banks-shorting-silver",
    "/silver-squeeze/silver-backwardation",
    "/silver-squeeze/paper-silver-vs-physical",
    "/silver-squeeze/silver-stacking-guide",
    "/silver-squeeze/silver-shortage",
    "/silver-squeeze/silver-undervalued",
    "/silver-squeeze/silver-to-gold-ratio-calculator",
    // Silver IRA Hub
    "/silver-ira",
    "/silver-ira/rules",
    "/silver-ira/rollover",
    "/silver-ira/approved-coins",
    "/silver-ira/best-company",
    "/silver-ira/companies",
    "/silver-ira/convert-401k-to-silver",
    "/silver-ira/custodian",
    "/silver-ira/reviews",
    "/silver-ira/vs-gold-ira",
    // Silver Price Hub
    "/silver-price",
    "/silver-price/prediction-2026",
    "/silver-price/all-time-high",
    "/silver-price/forecast-2026",
    "/silver-price/forecast-5-years",
    "/silver-price/why-silver-is-cheap",
    "/silver-price/will-silver-hit-50",
    "/silver-price/will-silver-hit-100",
    // Silver Products
    "/silver-products",
    "/silver-products/1000-oz-bar",
    "/silver-products/90-percent-coins",
    "/silver-products/constitutional-silver",
    "/silver-products/good-delivery",
    "/silver-products/kilo-bar",
    "/silver-products/krugerrand",
    "/silver-products/perth-mint",
    "/silver-products/pslv-vs-slv",
    // Silver Experts
    "/silver-experts",
    "/silver-experts/mike-maloney",
    "/silver-experts/david-morgan",
    "/silver-experts/andy-schectman",
    "/silver-experts/rick-rule",
    "/silver-experts/eric-sprott",
    "/silver-experts/ted-butler",
    // Silver Coin Values
    "/silver-coin-values",
    "/silver-coin-values/morgan-dollar",
    "/silver-coin-values/walking-liberty-half",
    "/silver-coin-values/silver-dimes",
    "/silver-coin-values/peace-dollar",
    "/silver-coin-values/silver-quarters",
    "/silver-coin-values/war-nickels",
    "/silver-coin-values/junk-silver",
    "/silver-coin-values/melt-value-calculator",
    // Silver Dealer Reviews
    "/silver-dealer-reviews",
    "/silver-dealer-reviews/apmex",
    "/silver-dealer-reviews/jm-bullion",
    "/silver-dealer-reviews/sd-bullion",
    "/silver-dealer-reviews/money-metals-exchange",
    "/silver-dealer-reviews/hero-bullion",
    "/silver-dealer-reviews/bold-precious-metals",
    "/silver-dealer-reviews/comparison",
    // Buy/Sell Silver
    "/buy-sell-silver",
    "/buy-sell-silver/best-place-to-sell",
    "/buy-sell-silver/best-coins-to-buy",
    "/buy-sell-silver/how-to-sell-coins",
    "/buy-sell-silver/cleaning-coins",
    "/buy-sell-silver/spot-fake-silver",
    "/buy-sell-silver/silver-testing",
    "/buy-sell-silver/when-to-sell",
    "/buy-sell-silver/coins-vs-bars",
    "/buy-sell-silver/stacking-beginners",
    // Silver Retirement
    "/silver-retirement",
    "/silver-retirement/transfer-ira-to-silver",
    "/silver-retirement/ira-approved-bars",
    "/silver-retirement/ira-approved-coins",
    "/silver-retirement/how-much-silver",
    "/silver-retirement/silver-vs-bonds",
    "/silver-retirement/silver-for-grandchildren",
    "/silver-retirement/inheritance-planning",
    "/silver-retirement/rmd-rules",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // GOLD & SILVER STOCKS HUBS
  // ============================================
  const stocksPages = [
    "/gold-stocks",
    "/gold-stocks/best-gold-stocks",
    "/gold-stocks/gold-stocks-to-buy",
    "/gold-stocks/gold-mining-stocks-vs-physical-gold",
    "/silver-stocks",
    "/silver-stocks/best-silver-stocks",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-15'),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // COMBINE ALL PAGES
  // ============================================
  const allPages = [
    ...corePages,
    ...legalPages,
    ...authorPages,
    ...toolsPages,
    ...guidePages,
    ...learnPages,
    ...whyGoldPages,
    ...richDadPages,
    ...hubSubPages,
    ...reviewPages,
    ...comparePages,
    ...rolloverPages,
    ...scenarioPages,
    ...specialTopicPages,
    ...silverPages,
    ...stocksPages,
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
