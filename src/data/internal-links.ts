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
      { url: "/learn/self-directed-ira-gold", title: "Self-Directed IRA Gold" },
      { url: "/learn/self-directed-roth-ira", title: "Self-Directed Roth IRA" },
      { url: "/learn/checkbook-ira", title: "Checkbook IRA" },
      { url: "/learn/checkbook-ira-rules", title: "Checkbook IRA Rules" },
      { url: "/learn/buy-rental-property-with-ira", title: "Buy Rental Property with IRA" },
      { url: "/learn/real-estate-ira-rules", title: "Real Estate IRA Rules" },
      { url: "/learn/real-estate-ira-custodians", title: "Real Estate IRA Custodians" },
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
  "crypto": {
    hub: { url: "/crypto-ira", title: "Crypto IRA Guide" },
    spokes: [
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
