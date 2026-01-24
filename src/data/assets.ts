// src/data/assets.ts
// Asset data for programmatic "[X] vs Gold" comparison pages

export interface Asset {
  ticker: string;
  name: string;
  slug: string;
  category: "stock" | "index" | "crypto" | "commodity" | "currency" | "other";
  description: string;
  // Historical performance (annualized returns)
  returns: {
    year1: number;
    year5: number;
    year10: number;
    year20: number;
  };
  // Risk metrics
  volatility: number; // Standard deviation
  maxDrawdown: number; // Worst peak-to-trough decline
  // Inflation correlation (-1 to 1)
  inflationCorrelation: number;
  // Key facts
  facts: string[];
}

// Gold baseline for comparison
export const GOLD_BASELINE: Asset = {
  ticker: "GOLD",
  name: "Physical Gold",
  slug: "gold",
  category: "commodity",
  description: "Physical gold bullion, the ultimate store of value for 5,000 years.",
  returns: {
    year1: 13.2,
    year5: 10.8,
    year10: 8.4,
    year20: 9.2,
  },
  volatility: 15.2,
  maxDrawdown: -44,
  inflationCorrelation: 0.68,
  facts: [
    "Zero counterparty risk",
    "Cannot be printed or devalued",
    "Recognized globally as money",
    "Central banks hold 35,000+ tonnes",
  ],
};

export const assets: Asset[] = [
  // Major Indices
  {
    ticker: "SPY",
    name: "S&P 500",
    slug: "sp500",
    category: "index",
    description: "The benchmark index tracking 500 largest US companies. Paper wealth tied to corporate earnings and Fed policy.",
    returns: { year1: 24.2, year5: 14.8, year10: 12.1, year20: 9.8 },
    volatility: 18.5,
    maxDrawdown: -56,
    inflationCorrelation: -0.12,
    facts: [
      "Lost 56% in 2008 financial crisis",
      "Heavily dependent on Fed stimulus",
      "Top 10 stocks = 30% of index",
      "Dividends taxed as income",
    ],
  },
  {
    ticker: "QQQ",
    name: "Nasdaq 100",
    slug: "nasdaq",
    category: "index",
    description: "Tech-heavy index dominated by growth stocks. High returns but extreme volatility.",
    returns: { year1: 28.5, year5: 18.2, year10: 17.8, year20: 11.2 },
    volatility: 24.3,
    maxDrawdown: -82,
    inflationCorrelation: -0.18,
    facts: [
      "Lost 82% in dot-com crash",
      "7 companies = 50% of index",
      "Zero dividends from many holdings",
      "Extreme concentration risk",
    ],
  },
  {
    ticker: "DJI",
    name: "Dow Jones",
    slug: "dow-jones",
    category: "index",
    description: "The oldest US stock index, tracking 30 blue-chip industrial companies.",
    returns: { year1: 16.8, year5: 11.2, year10: 10.8, year20: 8.4 },
    volatility: 16.8,
    maxDrawdown: -54,
    inflationCorrelation: -0.08,
    facts: [
      "Only 30 companies",
      "Price-weighted (flawed methodology)",
      "Lost 54% in 2008-2009",
      "Excludes most tech growth",
    ],
  },

  // Big Tech Stocks
  {
    ticker: "AAPL",
    name: "Apple",
    slug: "apple",
    category: "stock",
    description: "World's largest company by market cap. Consumer electronics giant dependent on iPhone sales.",
    returns: { year1: 32.4, year5: 28.6, year10: 26.2, year20: 42.1 },
    volatility: 28.4,
    maxDrawdown: -82,
    inflationCorrelation: -0.15,
    facts: [
      "Lost 82% in 2000-2003",
      "iPhone = 52% of revenue",
      "China = 19% of sales (geopolitical risk)",
      "Subject to tech regulation",
    ],
  },
  {
    ticker: "TSLA",
    name: "Tesla",
    slug: "tesla",
    category: "stock",
    description: "Electric vehicle maker with extreme volatility. Cult following but unpredictable earnings.",
    returns: { year1: -8.2, year5: 48.2, year10: 42.8, year20: 0 },
    volatility: 62.4,
    maxDrawdown: -73,
    inflationCorrelation: -0.22,
    facts: [
      "Lost 73% in 2022 alone",
      "CEO tweets move the stock",
      "Competition intensifying globally",
      "Valuation assumes perfection",
    ],
  },
  {
    ticker: "AMZN",
    name: "Amazon",
    slug: "amazon",
    category: "stock",
    description: "E-commerce and cloud computing giant. Dominates retail but faces antitrust scrutiny.",
    returns: { year1: 18.4, year5: 12.8, year10: 28.4, year20: 32.6 },
    volatility: 32.1,
    maxDrawdown: -94,
    inflationCorrelation: -0.14,
    facts: [
      "Lost 94% in dot-com crash",
      "AWS subsidizes retail losses",
      "Antitrust investigations ongoing",
      "Labor costs rising sharply",
    ],
  },
  {
    ticker: "GOOGL",
    name: "Google (Alphabet)",
    slug: "google",
    category: "stock",
    description: "Search and advertising monopoly. Prints money but faces existential AI disruption threat.",
    returns: { year1: 22.6, year5: 18.4, year10: 19.2, year20: 24.8 },
    volatility: 26.8,
    maxDrawdown: -65,
    inflationCorrelation: -0.11,
    facts: [
      "80% revenue from advertising",
      "AI could disrupt search model",
      "DOJ antitrust lawsuit active",
      "Lost 65% in 2008",
    ],
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    slug: "microsoft",
    category: "stock",
    description: "Software giant with cloud dominance. Stable but expensive at current valuations.",
    returns: { year1: 28.2, year5: 24.6, year10: 26.8, year20: 14.2 },
    volatility: 24.2,
    maxDrawdown: -72,
    inflationCorrelation: -0.09,
    facts: [
      "Lost 72% after dot-com bubble",
      "Azure growth slowing",
      "Activist investor pressure",
      "Gaming division struggles",
    ],
  },
  {
    ticker: "NVDA",
    name: "NVIDIA",
    slug: "nvidia",
    category: "stock",
    description: "AI chip darling with explosive growth. Priced for perfection in a cyclical industry.",
    returns: { year1: 122.4, year5: 68.2, year10: 58.4, year20: 32.8 },
    volatility: 52.6,
    maxDrawdown: -84,
    inflationCorrelation: -0.18,
    facts: [
      "Lost 84% in 2008",
      "Semiconductors are deeply cyclical",
      "China export restrictions",
      "Competition from AMD, Intel",
    ],
  },
  {
    ticker: "META",
    name: "Meta (Facebook)",
    slug: "meta",
    category: "stock",
    description: "Social media giant betting everything on the metaverse. User growth stalling.",
    returns: { year1: 68.4, year5: 8.2, year10: 18.6, year20: 0 },
    volatility: 42.8,
    maxDrawdown: -77,
    inflationCorrelation: -0.16,
    facts: [
      "Lost 77% in 2022",
      "Metaverse burning $15B/year",
      "Young users fleeing platform",
      "Apple privacy changes hurt ads",
    ],
  },

  // Cryptocurrencies
  {
    ticker: "BTC",
    name: "Bitcoin",
    slug: "bitcoin",
    category: "crypto",
    description: "Digital gold narrative, but with extreme volatility and regulatory uncertainty.",
    returns: { year1: 52.4, year5: 42.8, year10: 68.2, year20: 0 },
    volatility: 78.4,
    maxDrawdown: -83,
    inflationCorrelation: 0.12,
    facts: [
      "Lost 83% in 2022",
      "Not legal tender in most countries",
      "Quantum computing threat",
      "Energy consumption criticized",
    ],
  },
  {
    ticker: "ETH",
    name: "Ethereum",
    slug: "ethereum",
    category: "crypto",
    description: "Smart contract platform powering DeFi. Technically complex with scaling challenges.",
    returns: { year1: 38.2, year5: 52.6, year10: 0, year20: 0 },
    volatility: 92.4,
    maxDrawdown: -94,
    inflationCorrelation: 0.08,
    facts: [
      "Lost 94% in 2018",
      "Gas fees spike unpredictably",
      "Competitors gaining ground",
      "SEC may classify as security",
    ],
  },

  // Traditional Safe Havens
  {
    ticker: "SLV",
    name: "Silver",
    slug: "silver",
    category: "commodity",
    description: "Gold's volatile cousin with industrial demand. Poor man's gold with bigger swings.",
    returns: { year1: 18.2, year5: 8.4, year10: 4.2, year20: 6.8 },
    volatility: 32.4,
    maxDrawdown: -72,
    inflationCorrelation: 0.52,
    facts: [
      "More volatile than gold",
      "Industrial demand = economic sensitivity",
      "Smaller market, easier to manipulate",
      "Storage costs higher per dollar",
    ],
  },
  {
    ticker: "TLT",
    name: "Treasury Bonds (20+ Year)",
    slug: "treasury-bonds",
    category: "other",
    description: "Long-term US government bonds. Supposed safe haven that lost 50% in 2022.",
    returns: { year1: -12.4, year5: -4.8, year10: 0.8, year20: 3.2 },
    volatility: 18.6,
    maxDrawdown: -53,
    inflationCorrelation: -0.42,
    facts: [
      "Lost 53% from 2020-2023",
      "Negative real yields for years",
      "US debt exceeds $34 trillion",
      "Fed policy destroys value",
    ],
  },
  {
    ticker: "USD",
    name: "US Dollar (Cash)",
    slug: "us-dollar-cash",
    category: "currency",
    description: "The world's reserve currency, losing purchasing power every year to inflation.",
    returns: { year1: -3.5, year5: -3.2, year10: -2.8, year20: -2.4 },
    volatility: 0,
    maxDrawdown: 0,
    inflationCorrelation: -1.0,
    facts: [
      "Lost 96% of value since 1913",
      "Guaranteed loss to inflation",
      "FDIC insurance caps at $250k",
      "Bank failures increasing",
    ],
  },

  // Real Estate
  {
    ticker: "VNQ",
    name: "Real Estate (REITs)",
    slug: "real-estate",
    category: "other",
    description: "Real estate investment trusts. Illiquid, leveraged, and interest rate sensitive.",
    returns: { year1: 8.4, year5: 4.2, year10: 6.8, year20: 8.2 },
    volatility: 22.4,
    maxDrawdown: -72,
    inflationCorrelation: 0.28,
    facts: [
      "Lost 72% in 2008",
      "Commercial RE in crisis",
      "Rising rates crush valuations",
      "Illiquid in a crisis",
    ],
  },

  // International
  {
    ticker: "EFA",
    name: "International Stocks",
    slug: "international-stocks",
    category: "index",
    description: "Developed market stocks outside the US. Diversification that hasn't paid off.",
    returns: { year1: 12.4, year5: 6.8, year10: 4.2, year20: 5.8 },
    volatility: 18.2,
    maxDrawdown: -62,
    inflationCorrelation: -0.08,
    facts: [
      "Underperformed US for 15 years",
      "Currency risk adds volatility",
      "Europe stagnating economically",
      "Japan in permanent deflation",
    ],
  },
  {
    ticker: "EEM",
    name: "Emerging Markets",
    slug: "emerging-markets",
    category: "index",
    description: "Stocks from developing nations. High risk with disappointing returns.",
    returns: { year1: 8.2, year5: 2.4, year10: 2.8, year20: 6.2 },
    volatility: 24.8,
    maxDrawdown: -65,
    inflationCorrelation: 0.04,
    facts: [
      "China = 30% of index",
      "Political instability risk",
      "Currency collapses common",
      "Accounting standards questionable",
    ],
  },

  // 401k/IRA specific
  {
    ticker: "401K",
    name: "Traditional 401(k)",
    slug: "401k",
    category: "other",
    description: "Tax-deferred retirement account typically invested in stocks and bonds. Subject to market risk and RMDs.",
    returns: { year1: 12.4, year5: 8.2, year10: 7.8, year20: 6.8 },
    volatility: 14.2,
    maxDrawdown: -48,
    inflationCorrelation: -0.18,
    facts: [
      "Taxed at withdrawal (unknown future rates)",
      "Required Minimum Distributions at 73",
      "Limited investment options",
      "Penalties for early withdrawal",
    ],
  },
  {
    ticker: "IRA",
    name: "Traditional IRA",
    slug: "traditional-ira",
    category: "other",
    description: "Individual retirement account with tax-deferred growth. Same risks as 401(k) with more flexibility.",
    returns: { year1: 12.4, year5: 8.2, year10: 7.8, year20: 6.8 },
    volatility: 14.2,
    maxDrawdown: -48,
    inflationCorrelation: -0.18,
    facts: [
      "Contribution limits ($7,000/year)",
      "Income limits for deductions",
      "RMDs required at 73",
      "Can rollover to Gold IRA",
    ],
  },
];

// Get asset by slug
export function getAssetBySlug(slug: string): Asset | undefined {
  return assets.find((a) => a.slug === slug);
}

// Get all asset slugs for static generation
export function getAllAssetSlugs(): string[] {
  return assets.map((a) => a.slug);
}

// Calculate comparison metrics
export function calculateComparison(asset: Asset) {
  const gold = GOLD_BASELINE;

  return {
    returnsDiff: {
      year1: asset.returns.year1 - gold.returns.year1,
      year5: asset.returns.year5 - gold.returns.year5,
      year10: asset.returns.year10 - gold.returns.year10,
      year20: asset.returns.year20 - gold.returns.year20,
    },
    volatilityDiff: asset.volatility - gold.volatility,
    drawdownDiff: asset.maxDrawdown - gold.maxDrawdown,
    inflationProtection: gold.inflationCorrelation - asset.inflationCorrelation,
    // Overall score (gold-favoring for lead gen)
    goldAdvantage: calculateGoldAdvantage(asset),
  };
}

function calculateGoldAdvantage(asset: Asset): number {
  const gold = GOLD_BASELINE;
  let score = 50; // Start neutral

  // Volatility (lower is better for retirees)
  if (gold.volatility < asset.volatility) score += 10;

  // Max drawdown (smaller loss is better)
  if (gold.maxDrawdown > asset.maxDrawdown) score += 15;

  // Inflation correlation (higher is better)
  if (gold.inflationCorrelation > asset.inflationCorrelation) score += 15;

  // Long-term stability
  if (gold.returns.year20 > 0 && asset.returns.year20 < gold.returns.year20) score += 10;

  return Math.min(95, Math.max(30, score)); // Keep between 30-95
}
