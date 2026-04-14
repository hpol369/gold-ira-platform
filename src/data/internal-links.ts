/**
 * Internal Linking Architecture
 *
 * Hub pages are pillar content that link to all related spoke pages.
 * Spoke pages link back to their hub + cross-link to 2-3 related spokes.
 *
 * This data drives the RelatedContent component rendered on every page.
 */

export interface InternalLink {
  url: string;
  title: string;
  description?: string;
}

export interface HubConfig {
  hub: InternalLink;
  spokes: InternalLink[];
}

export const LINK_HUBS: Record<string, HubConfig> = {
  "gold-ira": {
    hub: { url: "/what-is-a-gold-ira", title: "What Is a Gold IRA?" },
    spokes: [
      { url: "/gold-ira-rules", title: "Gold IRA Rules & Regulations" },
      { url: "/learn/gold-ira-tax-rules", title: "Gold IRA Tax Rules" },
      { url: "/learn/gold-ira-benefits", title: "Gold IRA Benefits" },
      { url: "/learn/gold-ira-scams", title: "Gold IRA Scams to Avoid" },
      { url: "/learn/home-storage-gold-ira", title: "Home Storage Gold IRA" },
      { url: "/learn/ira-approved-gold-coins", title: "IRA-Approved Gold Coins" },
      { url: "/learn/gold-bullion-vs-gold-coins", title: "Gold Bullion vs Gold Coins" },
      { url: "/guide/gold-ira-guide", title: "How to Open a Gold IRA" },
      { url: "/learn/how-much-gold-in-portfolio", title: "How Much Gold in Your Portfolio" },
      { url: "/learn/gold-price-prediction-2026", title: "Gold Price Prediction 2026" },
    ],
  },
  "reviews": {
    hub: { url: "/best-gold-ira-companies", title: "Best Gold IRA Companies" },
    spokes: [
      { url: "/reviews/augusta-precious-metals", title: "Augusta Precious Metals Review" },
      { url: "/reviews/goldco", title: "Goldco Review" },
      { url: "/reviews/noble-gold", title: "Noble Gold Review" },
      { url: "/reviews/american-hartford-gold", title: "American Hartford Gold Review" },
      { url: "/reviews/birch-gold", title: "Birch Gold Review" },
      { url: "/compare", title: "Compare Gold IRA Companies" },
    ],
  },
  "rollover": {
    hub: { url: "/rollover", title: "Gold IRA Rollover Guide" },
    spokes: [
      { url: "/guide/gold-ira-rollover-guide", title: "How to Rollover to Gold IRA" },
      { url: "/learn/indirect-vs-direct-rollover", title: "Indirect vs Direct Rollover" },
      { url: "/rollover/401k", title: "401k to Gold IRA Rollover" },
      { url: "/rollover/tsp", title: "TSP to Gold IRA Rollover" },
      { url: "/rollover/roth-ira", title: "Roth IRA Gold Rollover" },
    ],
  },
  "silver": {
    hub: { url: "/silver-ira", title: "Silver IRA Guide" },
    spokes: [
      { url: "/best-silver-ira-companies", title: "Best Silver IRA Companies" },
      { url: "/silver-price", title: "Silver Price Predictions" },
      { url: "/silver-products", title: "Silver Products Guide" },
      { url: "/learn/is-silver-a-good-investment", title: "Is Silver a Good Investment?" },
      { url: "/learn/silver-coins-vs-bars", title: "Silver Coins vs Bars" },
      { url: "/silver-retirement", title: "Silver Retirement Planning" },
    ],
  },
  "retirement-protection": {
    hub: { url: "/why-gold", title: "Why Gold for Retirement" },
    spokes: [
      { url: "/learn/recession-proof-investments", title: "Recession-Proof Investments" },
      { url: "/learn/safe-haven-investments", title: "Safe Haven Investments" },
      { url: "/learn/stock-market-crash-protection", title: "Stock Market Crash Protection" },
      { url: "/learn/stock-market-alternatives", title: "Stock Market Alternatives" },
      { url: "/learn/why-401k-losing-money", title: "Why Is My 401k Losing Money?" },
      { url: "/learn/is-my-money-safe-in-bank", title: "Is My Money Safe in the Bank?" },
      { url: "/learn/is-401k-fdic-insured", title: "Is 401k FDIC Insured?" },
      { url: "/learn/sequence-of-returns-risk", title: "Sequence of Returns Risk" },
      { url: "/scenarios", title: "Economic Crisis Scenarios" },
    ],
  },
  "self-directed": {
    hub: { url: "/self-directed-ira", title: "Self-Directed IRA Guide" },
    spokes: [
      { url: "/self-directed-ira/prohibited-transactions", title: "Prohibited Transactions" },
      { url: "/self-directed-ira/custodian-comparison", title: "SDIRA Custodian Comparison" },
      { url: "/self-directed-ira/alternative-assets", title: "Alternative Assets Guide" },
      { url: "/self-directed-ira/llc-structure", title: "SDIRA LLC Structure" },
      { url: "/learn/self-directed-ira-gold", title: "Self-Directed IRA Gold" },
      { url: "/learn/self-directed-roth-ira", title: "Self-Directed Roth IRA" },
      { url: "/learn/checkbook-ira", title: "Checkbook IRA" },
      { url: "/learn/checkbook-ira-rules", title: "Checkbook IRA Rules" },
    ],
  },
  "solo-401k": {
    hub: { url: "/solo-401k", title: "Solo 401k Guide" },
    spokes: [
      { url: "/learn/solo-401k-contribution-limits", title: "Solo 401k Contribution Limits" },
      { url: "/learn/solo-401k-providers", title: "Solo 401k Providers" },
      { url: "/learn/solo-401k-vs-sep-ira", title: "Solo 401k vs SEP IRA" },
      { url: "/learn/robs-401k-rules", title: "ROBS 401k Rules" },
    ],
  },
  "real-estate-ira": {
    hub: { url: "/real-estate-ira", title: "Real Estate IRA Guide" },
    spokes: [
      { url: "/real-estate-ira/ubit-rules", title: "UBIT Rules for IRA Real Estate" },
      { url: "/real-estate-ira/rental-property-rules", title: "Rental Property IRA Rules" },
      { url: "/real-estate-ira/non-recourse-loans", title: "Non-Recourse IRA Loans" },
      { url: "/learn/real-estate-ira-rules", title: "Real Estate IRA Rules" },
      { url: "/learn/real-estate-ira-custodians", title: "Real Estate IRA Custodians" },
      { url: "/learn/buy-rental-property-with-ira", title: "Buy Rental Property with IRA" },
    ],
  },
  "robs-401k": {
    hub: { url: "/robs-401k", title: "ROBS 401k Guide" },
    spokes: [
      { url: "/robs-401k/qualification-rules", title: "ROBS Qualification Rules" },
      { url: "/robs-401k/vs-sba-loan", title: "ROBS vs SBA Loan" },
      { url: "/robs-401k/success-rates", title: "ROBS Success Rates" },
      { url: "/learn/robs-401k-rules", title: "ROBS 401k Rules" },
    ],
  },
  "crypto": {
    hub: { url: "/crypto-ira", title: "Crypto IRA Guide" },
    spokes: [
      { url: "/crypto-ira/best-companies", title: "Best Crypto IRA Companies 2026" },
      { url: "/crypto-ira/tax-rules", title: "Crypto IRA Tax Rules" },
      { url: "/crypto-ira/bitcoin-vs-gold-ira", title: "Bitcoin IRA vs Gold IRA" },
      { url: "/best-crypto-ira-companies", title: "Best Crypto IRA Companies" },
      { url: "/learn/bitcoin-ira", title: "Bitcoin IRA" },
    ],
  },
  "tools": {
    hub: { url: "/tools", title: "Retirement Calculators" },
    spokes: [
      { url: "/tools/retirement-calculator", title: "Retirement Calculator" },
      { url: "/tools/rmd-calculator", title: "RMD Calculator" },
      { url: "/tools/gold-ira-calculator", title: "Gold IRA Calculator" },
      { url: "/tools/gold-allocation-calculator", title: "Gold Allocation Calculator" },
      { url: "/tools/social-security-calculator", title: "Social Security Calculator" },
      { url: "/tools/fire-calculator", title: "FIRE Calculator" },
    ],
  },
  "retirement-planning": {
    hub: { url: "/is-enough-to-retire", title: "Is $X Enough to Retire?" },
    spokes: [
      { url: "/learn/too-late-to-save-retirement", title: "Is It Too Late to Save for Retirement?" },
      { url: "/learn/retirement-planning-mistakes", title: "Retirement Planning Mistakes" },
      { url: "/learn/sequence-of-returns-risk", title: "Sequence of Returns Risk" },
      { url: "/learn/are-gold-iras-safe", title: "Are Gold IRAs Safe?" },
      { url: "/learn/why-is-gold-valuable", title: "Why Is Gold Valuable?" },
      { url: "/learn/precious-metals-ira-rules", title: "Precious Metals IRA Rules" },
      { url: "/tools/retirement-calculator", title: "Retirement Calculator" },
    ],
  },
  "federal-retirement": {
    hub: { url: "/federal-retirement", title: "Federal Employee Retirement Guide" },
    spokes: [
      { url: "/federal-retirement/fers-pension-and-gold", title: "FERS Pension + Gold IRA" },
      { url: "/federal-retirement/tsp-to-gold-diversification", title: "TSP to Gold Diversification" },
      { url: "/federal-retirement/fehb-retirement-healthcare", title: "FEHB Healthcare in Retirement" },
      { url: "/federal-retirement/social-security-fairness-act", title: "Social Security Fairness Act" },
      { url: "/federal-retirement/military-tsp-rollover", title: "Military TSP Rollover" },
      { url: "/guide/tsp-to-gold-ira-rollover", title: "TSP to Gold IRA Rollover Steps" },
      { url: "/guide/457b-to-gold-ira-rollover", title: "457(b) Rollover Guide" },
    ],
  },
  "retirement-adequacy": {
    hub: { url: "/is-enough-to-retire", title: "Is Your Savings Enough to Retire?" },
    spokes: [
      { url: "/is-enough-to-retire/retire-with-300k-at-55", title: "Retire with $300K at 55" },
      { url: "/is-enough-to-retire/retire-with-400k-at-60", title: "Retire with $400K at 60" },
      { url: "/is-enough-to-retire/retire-with-500k-at-62", title: "Retire with $500K at 62" },
      { url: "/is-enough-to-retire/retire-with-600k-at-65", title: "Retire with $600K at 65" },
      { url: "/is-enough-to-retire/retire-with-750k", title: "Retire with $750K" },
      { url: "/is-enough-to-retire/retire-with-800k", title: "Retire with $800K" },
      { url: "/is-enough-to-retire/retire-with-1-million", title: "Retire with $1 Million" },
    ],
  },
  "widow-guide": {
    hub: { url: "/widow-guide", title: "Widow's Financial Guide" },
    spokes: [
      { url: "/widow-guide/first-steps-after-spouse-dies", title: "First Steps After Losing a Spouse" },
      { url: "/widow-guide/social-security-survivor-benefits", title: "Social Security Survivor Benefits" },
      { url: "/widow-guide/divorced-spouse-social-security", title: "Divorced Spouse Social Security" },
    ],
  },
  "medicaid-planning": {
    hub: { url: "/medicaid-planning", title: "Medicaid Planning Guide" },
    spokes: [
      { url: "/medicaid-planning/irrevocable-trust-nursing-home", title: "Irrevocable Trust Nursing Home Protection" },
      { url: "/medicaid-planning/medicaid-estate-recovery", title: "Medicaid Estate Recovery" },
      { url: "/medicaid-planning/medicaid-penalty-period", title: "Medicaid Penalty Period" },
    ],
  },
  "grandchildren": {
    hub: { url: "/grandchildren", title: "Legacy Planning for Grandchildren" },
    spokes: [
      { url: "/grandchildren/529-plan-grandparents", title: "529 Plans for Grandparents" },
      { url: "/grandchildren/trust-fund-for-grandchildren", title: "Trust Fund for Grandchildren" },
      { url: "/grandchildren/leaving-money-to-grandchildren", title: "Leaving Money to Grandchildren" },
    ],
  },
  "senior-protection": {
    hub: { url: "/senior-protection", title: "Senior Financial Protection" },
    spokes: [
      { url: "/senior-protection/grandparent-scam-calls", title: "Grandparent Scam: How to Protect Yourself" },
      { url: "/senior-protection/dementia-and-giving-money-away", title: "Dementia & Giving Money Away" },
    ],
  },
  "silver-squeeze": {
    hub: { url: "/silver-squeeze", title: "Silver Squeeze Explained" },
    spokes: [
      { url: "/silver-squeeze/silver-supply-deficit", title: "Silver Supply Deficit" },
      { url: "/silver-squeeze/comex-silver-inventory", title: "COMEX Silver Inventory" },
      { url: "/silver-squeeze/banks-shorting-silver", title: "Banks Shorting Silver" },
      { url: "/silver-squeeze/silver-manipulation", title: "Silver Manipulation" },
      { url: "/silver-squeeze/silver-short-interest", title: "Silver Short Interest" },
      { url: "/silver-squeeze/silver-shortage", title: "Silver Shortage" },
      { url: "/silver-squeeze/paper-silver-vs-physical", title: "Paper Silver vs Physical" },
      { url: "/silver-squeeze/silver-backwardation", title: "Silver Backwardation" },
    ],
  },
  "silver-coin-values": {
    hub: { url: "/silver-coin-values", title: "Silver Coin Values Guide" },
    spokes: [
      { url: "/silver-coin-values/morgan-dollar", title: "Morgan Dollar Values" },
      { url: "/silver-coin-values/peace-dollar", title: "Peace Dollar Values" },
      { url: "/silver-coin-values/walking-liberty-half", title: "Walking Liberty Half Dollar" },
      { url: "/silver-coin-values/silver-dimes", title: "Silver Dime Values" },
      { url: "/silver-coin-values/silver-quarters", title: "Silver Quarter Values" },
      { url: "/silver-coin-values/war-nickels", title: "War Nickel Values" },
      { url: "/silver-coin-values/junk-silver", title: "Junk Silver Guide" },
      { url: "/silver-coin-values/melt-value-calculator", title: "Silver Melt Value Calculator" },
    ],
  },
  "silver-dealer-reviews": {
    hub: { url: "/silver-dealer-reviews", title: "Silver Dealer Reviews" },
    spokes: [
      { url: "/silver-dealer-reviews/jm-bullion", title: "JM Bullion Review" },
      { url: "/silver-dealer-reviews/apmex", title: "APMEX Review" },
      { url: "/silver-dealer-reviews/sd-bullion", title: "SD Bullion Review" },
      { url: "/silver-dealer-reviews/money-metals-exchange", title: "Money Metals Exchange Review" },
      { url: "/silver-dealer-reviews/hero-bullion", title: "Hero Bullion Review" },
      { url: "/silver-dealer-reviews/bold-precious-metals", title: "BOLD Precious Metals Review" },
      { url: "/silver-dealer-reviews/comparison", title: "Silver Dealer Comparison" },
    ],
  },
  "buy-sell-silver": {
    hub: { url: "/buy-sell-silver", title: "How to Buy & Sell Silver" },
    spokes: [
      { url: "/buy-sell-silver/stacking-beginners", title: "Silver Stacking for Beginners" },
      { url: "/buy-sell-silver/best-coins-to-buy", title: "Best Silver Coins to Buy" },
      { url: "/buy-sell-silver/coins-vs-bars", title: "Silver Coins vs Bars" },
      { url: "/buy-sell-silver/how-to-sell-coins", title: "How to Sell Silver Coins" },
      { url: "/buy-sell-silver/best-place-to-sell", title: "Best Place to Sell Silver" },
      { url: "/buy-sell-silver/when-to-sell", title: "When to Sell Silver" },
      { url: "/buy-sell-silver/spot-fake-silver", title: "How to Spot Fake Silver" },
      { url: "/buy-sell-silver/silver-testing", title: "Silver Testing Methods" },
    ],
  },
  "silver-retirement": {
    hub: { url: "/silver-retirement", title: "Silver Retirement Planning" },
    spokes: [
      { url: "/silver-retirement/how-much-silver", title: "How Much Silver to Own" },
      { url: "/silver-retirement/ira-approved-coins", title: "IRA-Approved Silver Coins" },
      { url: "/silver-retirement/ira-approved-bars", title: "IRA-Approved Silver Bars" },
      { url: "/silver-retirement/transfer-ira-to-silver", title: "Transfer IRA to Silver" },
      { url: "/silver-retirement/rmd-rules", title: "Silver IRA RMD Rules" },
      { url: "/silver-retirement/silver-vs-bonds", title: "Silver vs Bonds for Retirement" },
      { url: "/silver-retirement/inheritance-planning", title: "Silver Inheritance Planning" },
      { url: "/silver-retirement/silver-for-grandchildren", title: "Silver for Grandchildren" },
    ],
  },
  "silver-products": {
    hub: { url: "/silver-products", title: "Silver Products Guide" },
    spokes: [
      { url: "/silver-products/constitutional-silver", title: "Constitutional Silver" },
      { url: "/silver-products/generic-rounds", title: "Generic Silver Rounds" },
      { url: "/silver-products/monster-box", title: "Silver Monster Box" },
      { url: "/silver-products/1000-oz-bar", title: "1000 oz Silver Bar" },
      { url: "/silver-products/kilo-bar", title: "Silver Kilo Bar" },
      { url: "/silver-products/fractional", title: "Fractional Silver" },
      { url: "/silver-products/pslv-vs-slv", title: "PSLV vs SLV" },
      { url: "/silver-products/90-percent-coins", title: "90% Silver Coins" },
    ],
  },
  "silver-experts": {
    hub: { url: "/silver-experts", title: "Silver Market Experts" },
    spokes: [
      { url: "/silver-experts/mike-maloney", title: "Mike Maloney on Silver" },
      { url: "/silver-experts/david-morgan", title: "David Morgan on Silver" },
      { url: "/silver-experts/rick-rule", title: "Rick Rule on Silver" },
      { url: "/silver-experts/eric-sprott", title: "Eric Sprott on Silver" },
      { url: "/silver-experts/ted-butler", title: "Ted Butler on Silver" },
      { url: "/silver-experts/andy-schectman", title: "Andy Schectman on Silver" },
    ],
  },
  "gold-stocks": {
    hub: { url: "/gold-stocks", title: "Gold Stocks Guide" },
    spokes: [
      { url: "/gold-stocks/best-gold-stocks", title: "Best Gold Stocks" },
      { url: "/gold-stocks/gold-stocks-to-buy", title: "Gold Stocks to Buy" },
      { url: "/gold-stocks/gold-mining-stocks-vs-physical-gold", title: "Gold Mining Stocks vs Physical Gold" },
    ],
  },
  "guides": {
    hub: { url: "/guide", title: "Gold IRA Guides" },
    spokes: [
      { url: "/guide/gold-ira-guide", title: "How to Open a Gold IRA" },
      { url: "/guide/401k-to-gold-rollover", title: "401k to Gold Rollover Guide" },
      { url: "/guide/gold-ira-fees", title: "Gold IRA Fees Explained" },
      { url: "/guide/gold-ira-for-seniors", title: "Gold IRA for Seniors" },
      { url: "/guide/gold-ira-minimum-investment", title: "Gold IRA Minimum Investment" },
      { url: "/guide/protect-401k-from-crash", title: "Protect 401k from Market Crash" },
      { url: "/guide/wealth-preservation-strategies", title: "Wealth Preservation Strategies" },
      { url: "/guide/what-to-do-with-old-401k", title: "What to Do with Old 401k" },
    ],
  },
  "scenarios": {
    hub: { url: "/scenarios", title: "Economic Crisis Scenarios" },
    spokes: [
      { url: "/scenarios/dollar-collapse", title: "Dollar Collapse Scenario" },
      { url: "/scenarios/hyperinflation", title: "Hyperinflation Scenario" },
      { url: "/scenarios/bank-failure", title: "Bank Failure Scenario" },
      { url: "/scenarios/stock-market-crash", title: "Stock Market Crash Scenario" },
      { url: "/scenarios/pension-crisis", title: "Pension Crisis Scenario" },
      { url: "/scenarios/great-depression-2", title: "Great Depression 2.0 Scenario" },
      { url: "/scenarios/cbdc-control", title: "CBDC Control Scenario" },
      { url: "/scenarios/is-vanguard-safe", title: "Is Vanguard Safe?" },
    ],
  },
  "best-gold-ira-for": {
    hub: { url: "/best-gold-ira-for", title: "Best Gold IRA for Your Situation" },
    spokes: [
      { url: "/best-gold-ira-for/high-net-worth", title: "Best Gold IRA for High Net Worth" },
      { url: "/best-gold-ira-for/self-employed", title: "Best Gold IRA for Self-Employed" },
      { url: "/best-gold-ira-for/federal-employees", title: "Best Gold IRA for Federal Employees" },
      { url: "/best-gold-ira-for/small-business-owners", title: "Best Gold IRA for Small Business Owners" },
      { url: "/best-gold-ira-for/union-workers", title: "Best Gold IRA for Union Workers" },
      { url: "/best-gold-ira-for/police-officers", title: "Best Gold IRA for Police Officers" },
      { url: "/best-gold-ira-for/age-55", title: "Best Gold IRA at Age 55" },
      { url: "/best-gold-ira-for/age-65", title: "Best Gold IRA at Age 65" },
    ],
  },
  "compare": {
    hub: { url: "/compare", title: "Compare Gold IRA Companies" },
    spokes: [
      { url: "/compare/augusta-vs-goldco", title: "Augusta vs Goldco" },
      { url: "/compare/gold-ira-vs-401k", title: "Gold IRA vs 401k" },
      { url: "/compare/gold-ira-vs-physical-gold", title: "Gold IRA vs Physical Gold" },
      { url: "/compare/gold-etf-vs-physical-gold", title: "Gold ETF vs Physical Gold" },
      { url: "/compare/gold-vs-silver-ira", title: "Gold vs Silver IRA" },
      { url: "/compare/gold-ira-vs-roth-ira", title: "Gold IRA vs Roth IRA" },
    ],
  },
  "inheritance": {
    hub: { url: "/learn/inheriting-ira-from-parent", title: "Inheriting an IRA from a Parent" },
    spokes: [
      { url: "/learn/inheriting-401k-from-parent", title: "Inheriting a 401k from a Parent" },
      { url: "/learn/inheritance-financial-advisor", title: "Inheritance Financial Advisor" },
      { url: "/learn/10-year-rule-inherited-ira-explained", title: "10-Year Rule for Inherited IRAs" },
      { url: "/learn/what-to-do-with-small-inherited-ira", title: "What to Do with a Small Inherited IRA" },
      { url: "/learn/what-to-do-with-50k-inheritance", title: "What to Do with $50K Inheritance" },
      { url: "/learn/what-to-do-with-150k-inheritance", title: "What to Do with $150K Inheritance" },
      { url: "/learn/what-to-do-with-300k-inheritance", title: "What to Do with $300K Inheritance" },
    ],
  },
  "gold-ira-rollover": {
    hub: { url: "/gold-ira-rollover", title: "Gold IRA Rollover Guide" },
    spokes: [
      { url: "/guide/401k-to-gold-rollover", title: "401(k) to Gold IRA Rollover" },
      { url: "/guide/tsp-to-gold-ira-rollover", title: "TSP to Gold IRA Rollover" },
      { url: "/guide/403b-to-gold-ira-rollover", title: "403(b) to Gold IRA Rollover" },
      { url: "/guide/457b-to-gold-ira-rollover", title: "457(b) to Gold IRA Rollover" },
      { url: "/guide/transfer-401k-to-gold", title: "Transfer 401(k) to Gold" },
      { url: "/guide/401k-to-gold-without-penalty", title: "Rollover Without Penalty" },
    ],
  },
  "gold-investment": {
    hub: { url: "/is-gold-a-good-investment", title: "Is Gold a Good Investment?" },
    spokes: [
      { url: "/gold-ira-pros-and-cons", title: "Gold IRA Pros and Cons" },
      { url: "/is-a-gold-ira-a-good-idea", title: "Is a Gold IRA a Good Idea?" },
      { url: "/how-does-a-gold-ira-work", title: "How Does a Gold IRA Work?" },
      { url: "/why-gold", title: "Why Gold for Retirement" },
      { url: "/learn/why-is-gold-valuable", title: "Why Is Gold Valuable?" },
      { url: "/gold-ira-statistics", title: "Gold IRA Statistics 2026" },
    ],
  },
  "research": {
    hub: { url: "/gold-ira-industry-report-2026", title: "Gold IRA Industry Report 2026" },
    spokes: [
      { url: "/best-gold-ira-companies", title: "Best Gold IRA Companies" },
      { url: "/gold-ira-statistics", title: "Gold IRA Statistics 2026" },
      { url: "/guide/gold-ira-fees", title: "Gold IRA Fees Explained" },
      { url: "/why-gold", title: "Why Gold for Retirement" },
      { url: "/compare", title: "Compare Gold IRA Companies" },
    ],
  },
};

/**
 * Get related links for a given page URL.
 * Returns: hub link + 3-5 most relevant spoke links (excluding self).
 */
export function getRelatedLinks(currentUrl: string, maxLinks: number = 5): InternalLink[] {
  const related: InternalLink[] = [];

  for (const hubConfig of Object.values(LINK_HUBS)) {
    const isHub = hubConfig.hub.url === currentUrl;
    const isSpoke = hubConfig.spokes.some(s => s.url === currentUrl);

    if (isHub) {
      // Hub page: show top spokes
      related.push(...hubConfig.spokes.slice(0, maxLinks));
      break;
    }

    if (isSpoke) {
      // Spoke page: show hub + other spokes (excluding self)
      related.push(hubConfig.hub);
      related.push(
        ...hubConfig.spokes
          .filter(s => s.url !== currentUrl)
          .slice(0, maxLinks - 1)
      );
      break;
    }
  }

  return related.slice(0, maxLinks);
}
