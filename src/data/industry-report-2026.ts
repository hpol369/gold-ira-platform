/**
 * Gold IRA Industry Report 2026 - Original Research Data
 * richdadretirement.com
 *
 * Every statistic includes its source and date.
 * This file is the single source of truth for all report pages and components.
 */

// ---------------------------------------------------------------------------
// 1. GOLD PERFORMANCE DURING US RECESSIONS
// ---------------------------------------------------------------------------

export interface RecessionGoldData {
  recession: string;
  startDate: string;
  endDate: string;
  goldAtStart: number;       // $/oz approximate
  goldAtEnd: number;         // $/oz approximate
  goldChange: string;        // percentage
  gold2YearsAfter: number;   // $/oz approximate, 2 years after recession end
  gold2YrChange: string;     // change from recession start to 2 years after end
  sp500PeakToTrough: string; // S&P 500 decline during the recession period
  source: string;
}

export const recessionGoldData: RecessionGoldData[] = [
  {
    recession: "1973-1975 Oil Embargo Recession",
    startDate: "Nov 1973",
    endDate: "Mar 1975",
    goldAtStart: 106,
    goldAtEnd: 185,
    goldChange: "+74%",
    gold2YearsAfter: 135,
    gold2YrChange: "+27%",
    sp500PeakToTrough: "-48%",
    source: "MacroTrends historical gold prices; NBER recession dates; BLS",
  },
  {
    recession: "1980 Recession",
    startDate: "Jan 1980",
    endDate: "Jul 1980",
    goldAtStart: 675,
    goldAtEnd: 644,
    goldChange: "-5%",
    gold2YearsAfter: 447,
    gold2YrChange: "-34%",
    sp500PeakToTrough: "-17%",
    source: "MacroTrends historical gold prices; NBER recession dates",
  },
  {
    recession: "1981-1982 Recession",
    startDate: "Jul 1981",
    endDate: "Nov 1982",
    goldAtStart: 409,
    goldAtEnd: 417,
    goldChange: "+2%",
    gold2YearsAfter: 341,
    gold2YrChange: "-17%",
    sp500PeakToTrough: "-27%",
    source: "MacroTrends historical gold prices; NBER recession dates",
  },
  {
    recession: "1990-1991 Recession",
    startDate: "Jul 1990",
    endDate: "Mar 1991",
    goldAtStart: 362,
    goldAtEnd: 363,
    goldChange: "0%",
    gold2YearsAfter: 345,
    gold2YrChange: "-5%",
    sp500PeakToTrough: "-20%",
    source: "MacroTrends historical gold prices; NBER recession dates",
  },
  {
    recession: "2001 Dot-Com Recession",
    startDate: "Mar 2001",
    endDate: "Nov 2001",
    goldAtStart: 263,
    goldAtEnd: 276,
    goldChange: "+5%",
    gold2YearsAfter: 416,
    gold2YrChange: "+58%",
    sp500PeakToTrough: "-49%",
    source: "MacroTrends historical gold prices; NBER recession dates",
  },
  {
    recession: "2007-2009 Great Recession",
    startDate: "Dec 2007",
    endDate: "Jun 2009",
    goldAtStart: 834,
    goldAtEnd: 934,
    goldChange: "+12%",
    gold2YearsAfter: 1506,
    gold2YrChange: "+81%",
    sp500PeakToTrough: "-57%",
    source: "BLS 'Gold prices during and after the Great Recession'; MacroTrends; NBER",
  },
  {
    recession: "2020 COVID-19 Recession",
    startDate: "Feb 2020",
    endDate: "Apr 2020",
    goldAtStart: 1575,
    goldAtEnd: 1694,
    goldChange: "+8%",
    gold2YearsAfter: 1897,
    gold2YrChange: "+20%",
    sp500PeakToTrough: "-34%",
    source: "MacroTrends historical gold prices; NBER recession dates",
  },
];

// ---------------------------------------------------------------------------
// 2. GOLD vs S&P 500 BY DECADE (total returns, approximate)
// ---------------------------------------------------------------------------

export interface DecadeComparison {
  decade: string;
  goldCAGR: string;          // compound annual growth rate
  sp500CAGR: string;
  winner: "Gold" | "S&P 500" | "Tie";
  context: string;
  source: string;
}

export const decadeComparisons: DecadeComparison[] = [
  {
    decade: "1970s (1971-1979)",
    goldCAGR: "+30.7%",
    sp500CAGR: "+5.9%",
    winner: "Gold",
    context: "Nixon ended gold standard 1971; oil crises; stagflation",
    source: "Monetary Metals; MacroTrends gold price vs stock market 100-year chart",
  },
  {
    decade: "1980s",
    goldCAGR: "-3.2%",
    sp500CAGR: "+17.5%",
    winner: "S&P 500",
    context: "Volcker rate hikes crushed inflation; bull market in equities",
    source: "Monetary Metals; MacroTrends gold price vs stock market 100-year chart",
  },
  {
    decade: "1990s",
    goldCAGR: "-2.6%",
    sp500CAGR: "+18.2%",
    winner: "S&P 500",
    context: "Tech boom; strong dollar; low inflation; dot-com mania",
    source: "Monetary Metals; MacroTrends gold price vs stock market 100-year chart",
  },
  {
    decade: "2000s",
    goldCAGR: "+15.4%",
    sp500CAGR: "-0.9%",
    winner: "Gold",
    context: "Dot-com crash; 9/11; housing bubble; Great Recession",
    source: "Monetary Metals; VT Markets gold vs S&P 500 2026 comparison",
  },
  {
    decade: "2010s",
    goldCAGR: "+3.3%",
    sp500CAGR: "+13.6%",
    winner: "S&P 500",
    context: "QE-fueled bull market; low rates; low inflation",
    source: "Monetary Metals; MacroTrends gold price vs stock market 100-year chart",
  },
  {
    decade: "2020s (2020-2025)",
    goldCAGR: "+13.8%",
    sp500CAGR: "+13.1%",
    winner: "Gold",
    context: "COVID stimulus; inflation surge; central bank buying; geopolitical tensions",
    source: "MacroTrends; World Gold Council demand trends full year 2025",
  },
];

// ---------------------------------------------------------------------------
// 3. GOLD DURING 5 WORST STOCK MARKET CRASHES
// ---------------------------------------------------------------------------

export interface CrashData {
  event: string;
  dates: string;
  sp500Drop: string;
  goldChange: string;
  goldAsHedge: boolean;    // true if gold outperformed during the crash
  notes: string;
  source: string;
}

export const worstCrashes: CrashData[] = [
  {
    event: "1973-1974 Bear Market",
    dates: "Jan 1973 - Oct 1974",
    sp500Drop: "-48%",
    goldChange: "+139%",
    goldAsHedge: true,
    notes: "Oil embargo and stagflation made gold the standout asset of the decade",
    source: "MacroTrends; Hero Bullion recession analysis; SD Bullion historical prices",
  },
  {
    event: "Black Monday 1987",
    dates: "Oct 19, 1987 (single day)",
    sp500Drop: "-20.4%",
    goldChange: "+4% (day), then -6% next day",
    goldAsHedge: false,
    notes: "Gold spiked then reversed as margin calls forced liquidation; short-lived crisis",
    source: "Carson Wealth market commentary; BullionVault analysis",
  },
  {
    event: "Dot-Com Crash",
    dates: "Mar 2000 - Oct 2002",
    sp500Drop: "-49%",
    goldChange: "-8%",
    goldAsHedge: false,
    notes: "Gold sentiment was terrible in the late 1990s; it began its multi-year rally in 2001",
    source: "MacroTrends; Metals Edge 20-year performance comparison",
  },
  {
    event: "2008 Financial Crisis",
    dates: "Oct 2007 - Mar 2009",
    sp500Drop: "-57%",
    goldChange: "+25% (full year 2008)",
    goldAsHedge: true,
    notes: "Gold dipped 28% mid-crisis as funds liquidated, then recovered and hit $1,900 by 2011",
    source: "BLS 'Gold prices during and after the Great Recession'; GoldSilver.com",
  },
  {
    event: "COVID-19 Crash",
    dates: "Feb 19 - Mar 23, 2020",
    sp500Drop: "-34%",
    goldChange: "+25% (Feb-Aug 2020)",
    goldAsHedge: true,
    notes: "Gold briefly dipped, then hit $2,072 all-time high by Aug 2020; fastest recovery",
    source: "MacroTrends; World Gold Council; NBER",
  },
];

// ---------------------------------------------------------------------------
// 4. IRA INDUSTRY STATISTICS
// ---------------------------------------------------------------------------

export interface IRAStats {
  metric: string;
  value: string;
  date: string;
  source: string;
}

export const iraIndustryStats: IRAStats[] = [
  {
    metric: "Total US IRA Assets",
    value: "$19.2 trillion",
    date: "Q4 2025",
    source: "Investment Company Institute, Quarterly Retirement Market Data, Q4 2025",
  },
  {
    metric: "Total US Retirement Assets",
    value: "$45.8 trillion",
    date: "Q2 2025",
    source: "Investment Company Institute via Yahoo Finance, Sep 2025",
  },
  {
    metric: "IRA Share of US Retirement Market",
    value: "39%",
    date: "Year-end 2024",
    source: "ICI 2025 Investment Company Fact Book, Chapter 8",
  },
  {
    metric: "IRA Assets Invested in Mutual Funds",
    value: "$7.4 trillion (38%)",
    date: "Q4 2025",
    source: "Investment Company Institute, Quarterly Retirement Market Data, Q4 2025",
  },
  {
    metric: "Households Without Retirement Savings",
    value: "54%",
    date: "2022 (latest survey)",
    source: "Federal Reserve Survey of Consumer Finances 2022",
  },
  {
    metric: "Americans Investing in Gold via Retirement Accounts",
    value: "~10%",
    date: "2020 survey",
    source: "Gold IRA Companies survey data, cited by multiple industry sources",
  },
];

// Average IRA balance by age group (Fidelity Q4 2024 data)
export interface IRABalanceByAge {
  ageGroup: string;
  generation: string;
  averageIRABalance: string;
  source: string;
  date: string;
}

export const iraBalancesByAge: IRABalanceByAge[] = [
  { ageGroup: "13-28", generation: "Gen Z", averageIRABalance: "$6,672", source: "Fidelity Investments", date: "Q4 2024" },
  { ageGroup: "29-44", generation: "Millennial", averageIRABalance: "$25,109", source: "Fidelity Investments", date: "Q4 2024" },
  { ageGroup: "45-60", generation: "Gen X", averageIRABalance: "$103,952", source: "Fidelity Investments", date: "Q4 2024" },
  { ageGroup: "61-88", generation: "Baby Boomer", averageIRABalance: "$257,002", source: "Fidelity Investments", date: "Q4 2024" },
];

// Federal Reserve Survey of Consumer Finances - overall retirement savings
export interface RetirementSavingsByAge {
  ageGroup: string;
  averageSavings: string;
  medianSavings: string;
  source: string;
  date: string;
}

export const retirementSavingsByAge: RetirementSavingsByAge[] = [
  { ageGroup: "35-44", averageSavings: "$141,520", medianSavings: "$45,000", source: "Federal Reserve Survey of Consumer Finances", date: "2022" },
  { ageGroup: "45-54", averageSavings: "$313,220", medianSavings: "$115,000", source: "Federal Reserve Survey of Consumer Finances", date: "2022" },
  { ageGroup: "55-64", averageSavings: "$537,560", medianSavings: "$185,000", source: "Federal Reserve Survey of Consumer Finances", date: "2022" },
];

// IRA contribution limits history
export interface ContributionLimit {
  year: number;
  under50: number;
  over50: number;     // includes catch-up
  catchUp: number;
  source: string;
}

export const contributionLimitsHistory: ContributionLimit[] = [
  { year: 2020, under50: 6000, over50: 7000, catchUp: 1000, source: "IRS.gov" },
  { year: 2021, under50: 6000, over50: 7000, catchUp: 1000, source: "IRS.gov" },
  { year: 2022, under50: 6000, over50: 7000, catchUp: 1000, source: "IRS.gov" },
  { year: 2023, under50: 6500, over50: 7500, catchUp: 1000, source: "IRS.gov" },
  { year: 2024, under50: 7000, over50: 8000, catchUp: 1000, source: "IRS.gov" },
  { year: 2025, under50: 7000, over50: 8000, catchUp: 1000, source: "IRS.gov" },
  { year: 2026, under50: 7000, over50: 8000, catchUp: 1000, source: "IRS.gov; Fidelity" },
];

// Self-directed IRA market data
export interface SDIRAMarketData {
  metric: string;
  value: string;
  date: string;
  source: string;
}

export const sdiraMarketData: SDIRAMarketData[] = [
  {
    metric: "Equity Trust AUC (largest SDIRA custodian)",
    value: "$70 billion",
    date: "2025",
    source: "Equity Trust Company website",
  },
  {
    metric: "Pacific Premier Trust AUM",
    value: "$18 billion",
    date: "2025",
    source: "Pacific Premier Trust website",
  },
  {
    metric: "Average Gold IRA Investment Size",
    value: "$100,000",
    date: "2024",
    source: "Major Gold IRA provider reports, cited by GoldIRACompanies.us.com",
  },
  {
    metric: "Average Gold IRA Investment Size (prior year)",
    value: "$35,000",
    date: "2023",
    source: "Major Gold IRA provider reports, cited by GoldIRACompanies.us.com",
  },
];

// ---------------------------------------------------------------------------
// 5. GOLD IRA FEE ANALYSIS
// ---------------------------------------------------------------------------

export interface FeeRange {
  feeType: string;
  low: string;
  typical: string;
  high: string;
  notes: string;
  source: string;
}

export const goldIRAFees: FeeRange[] = [
  {
    feeType: "Account Setup Fee",
    low: "$0",
    typical: "$50",
    high: "$100",
    notes: "Some companies waive this for accounts over $50k. American Hartford Gold charges $0.",
    source: "CNBC Select best gold IRA companies Apr 2026; Yahoo Finance gold IRA fees",
  },
  {
    feeType: "Annual Administration Fee",
    low: "$75",
    typical: "$100-$150",
    high: "$300",
    notes: "American Hartford Gold charges $75 for accounts under $100k, $125 for larger accounts",
    source: "CNBC Select; Brighton Gold learn gold IRA costs 2026; Yahoo Finance",
  },
  {
    feeType: "Annual Storage Fee (Segregated)",
    low: "$100",
    typical: "$150",
    high: "$300",
    notes: "Segregated means your metals stored separately from others",
    source: "Brighton Gold 2026 fee breakdown; National Gold Group gold IRA guide",
  },
  {
    feeType: "Annual Storage Fee (Commingled)",
    low: "$100",
    typical: "$125",
    high: "$250",
    notes: "Commingled means your metals stored alongside other investors",
    source: "Brighton Gold 2026 fee breakdown; National Gold Group gold IRA guide",
  },
  {
    feeType: "Total Estimated Annual Cost",
    low: "$200",
    typical: "$250-$300",
    high: "$400+",
    notes: "Admin + storage combined; does not include dealer spreads",
    source: "Yahoo Finance gold IRA fees 2026; Brighton Gold 2026 fee breakdown",
  },
  {
    feeType: "Minimum Investment",
    low: "$2,000",
    typical: "$10,000-$25,000",
    high: "$50,000",
    notes: "Augusta requires $50k minimum; most companies $10k-$25k",
    source: "CNBC Select; Money.com 7 Best Gold IRA Companies Mar 2026",
  },
  {
    feeType: "Dealer Spread (Markup on Metals)",
    low: "3%",
    typical: "5%",
    high: "6%+",
    notes: "On $50k purchase, a 5% spread = $2,500 that metals must appreciate to break even",
    source: "Brighton Gold 2026 fee breakdown; Clute Journals gold IRA fee analysis",
  },
];

// ---------------------------------------------------------------------------
// 6. CONSUMER COMPLAINT & ENFORCEMENT DATA
// ---------------------------------------------------------------------------

export interface CompanyComplaintData {
  company: string;
  bbbRating: string;
  bbbComplaints3yr: string;
  notes: string;
  source: string;
  date: string;
}

export const companyComplaintData: CompanyComplaintData[] = [
  {
    company: "Augusta Precious Metals",
    bbbRating: "A+",
    bbbComplaints3yr: "0",
    notes: "Zero complaints filed since founding. Industry outlier.",
    source: "BBB.org Augusta Precious Metals profile",
    date: "As of early 2026",
  },
  {
    company: "Goldco",
    bbbRating: "A+",
    bbbComplaints3yr: "See BBB profile",
    notes: "AAA rating from Business Consumer Alliance. Strong TrustPilot reviews.",
    source: "BBB.org Goldco profile; Rare Metal Blog review",
    date: "As of early 2026",
  },
  {
    company: "American Hartford Gold",
    bbbRating: "A+",
    bbbComplaints3yr: "See BBB profile",
    notes: "Some documented disputes involving pricing discrepancies on calls.",
    source: "BBB.org American Hartford Gold complaints page",
    date: "As of early 2026",
  },
  {
    company: "Birch Gold Group",
    bbbRating: "A+",
    bbbComplaints3yr: "See BBB profile",
    notes: "Generally strong reviews across BBB and BCA.",
    source: "BBB.org Birch Gold Group profile",
    date: "As of early 2026",
  },
  {
    company: "Noble Gold Investments",
    bbbRating: "A+",
    bbbComplaints3yr: "See BBB profile",
    notes: "Positive ratings across BBB and BCA.",
    source: "BBB.org Noble Gold Investments profile",
    date: "As of early 2026",
  },
];

export interface EnforcementAction {
  target: string;
  agency: string;
  year: number;
  penalty: string;
  victimCount: string;
  summary: string;
  source: string;
}

export const enforcementActions: EnforcementAction[] = [
  {
    target: "Red Rock Secured LLC",
    agency: "CFTC + SEC + State regulators",
    year: 2024,
    penalty: "$56 million",
    victimCount: "950+",
    summary: "Convinced retirees to buy premium coins at massive markups. Sold $69M of coins worth only $30M. Targeted conservative investors over 59.5.",
    source: "CFTC Press Release 8898-24; Holland & Knight analysis Oct 2023",
  },
  {
    target: "Safeguard Metals LLC",
    agency: "CFTC + 30 state regulators",
    year: 2025,
    penalty: "$51 million",
    victimCount: "450+",
    summary: "Defrauded elderly customers by selling silver coins at heavily inflated undisclosed markups.",
    source: "CFTC Press Release 9139-25",
  },
];

// Common complaint categories across the industry
export const commonComplaintCategories = [
  { category: "Inflated Premiums / Hidden Markups", frequency: "Most common", description: "Dealers selling coins at 30-100% above spot without clear disclosure" },
  { category: "Pricing Discrepancies", frequency: "Common", description: "Verbal quoted price differs from final invoice" },
  { category: "High-Pressure Sales Tactics", frequency: "Common", description: "Urgency-based selling, fear tactics about market collapse" },
  { category: "Difficulty Liquidating", frequency: "Moderate", description: "Buyback prices significantly below purchase price" },
  { category: "Slow Processing Times", frequency: "Moderate", description: "Rollovers or distributions taking longer than promised" },
  { category: "Misleading Return Claims", frequency: "Moderate", description: "Projecting past returns as guaranteed future performance" },
] as const;

// ---------------------------------------------------------------------------
// 7. GOLD SUPPLY & DEMAND (World Gold Council)
// ---------------------------------------------------------------------------

export interface GoldSupplyDemand {
  metric: string;
  value: string;
  unit: string;
  year: number;
  source: string;
}

export const goldSupplyDemand: GoldSupplyDemand[] = [
  // Above-ground supply breakdown (end-2024)
  {
    metric: "Total Above-Ground Gold",
    value: "216,265",
    unit: "tonnes",
    year: 2024,
    source: "World Gold Council, 'The Cube', end-2024 estimate",
  },
  {
    metric: "Jewellery",
    value: "97,149",
    unit: "tonnes (45%)",
    year: 2024,
    source: "World Gold Council, end-2024 estimate",
  },
  {
    metric: "Bars, Coins & ETFs",
    value: "48,634",
    unit: "tonnes (22%)",
    year: 2024,
    source: "World Gold Council, end-2024 estimate",
  },
  {
    metric: "Central Banks & Official Reserves",
    value: "37,755",
    unit: "tonnes (17%)",
    year: 2024,
    source: "World Gold Council, end-2024 estimate",
  },
  {
    metric: "Industrial / Technology / Other",
    value: "32,727",
    unit: "tonnes (15%)",
    year: 2024,
    source: "World Gold Council, end-2024 estimate",
  },
  {
    metric: "Below-Ground Mineable Reserves",
    value: "~54,770",
    unit: "tonnes",
    year: 2024,
    source: "World Gold Council end-2024; USGS cites ~64,000 tonnes",
  },

  // 2025 full-year demand
  {
    metric: "Total Gold Demand (incl. OTC)",
    value: "5,000+",
    unit: "tonnes",
    year: 2025,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },
  {
    metric: "Total Gold Demand Value",
    value: "$555 billion",
    unit: "USD",
    year: 2025,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },
  {
    metric: "Central Bank Purchases",
    value: "863",
    unit: "tonnes",
    year: 2025,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },
  {
    metric: "Bar & Coin Demand",
    value: "1,374",
    unit: "tonnes (12-year high)",
    year: 2025,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },
  {
    metric: "Gold ETF Holdings Growth",
    value: "801",
    unit: "tonnes added (2nd strongest year ever)",
    year: 2025,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },
  {
    metric: "Central Banks Planning to Increase Gold",
    value: "43%",
    unit: "of central banks surveyed",
    year: 2025,
    source: "World Gold Council Central Bank Gold Reserves Survey 2025",
  },
  {
    metric: "All-Time Gold Price Highs in 2025",
    value: "53",
    unit: "new records set",
    year: 2025,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },

  // Historical central bank buying for context
  {
    metric: "Central Bank Purchases",
    value: "1,045",
    unit: "tonnes",
    year: 2024,
    source: "World Gold Council, Gold Demand Trends Full Year 2024",
  },
  {
    metric: "Central Bank Purchases (record year)",
    value: "1,136",
    unit: "tonnes",
    year: 2022,
    source: "World Gold Council",
  },
  {
    metric: "Central Bank Purchases (annual avg 2010-2021)",
    value: "473",
    unit: "tonnes",
    year: 2021,
    source: "World Gold Council, Gold Demand Trends Full Year 2025",
  },
  {
    metric: "Top Central Bank Buyer 2025: Poland",
    value: "102",
    unit: "tonnes",
    year: 2025,
    source: "World Gold Council, Central Banks section, Full Year 2025",
  },
];

// ---------------------------------------------------------------------------
// 8. KEY INSIGHTS (ORIGINAL ANALYSIS)
// ---------------------------------------------------------------------------

export const originalInsights = [
  {
    insight: "Gold outperformed the S&P 500 during 5 of 7 US recessions since 1973",
    dataPoints: "Positive gold returns in 1973-75, 1981-82, 2001, 2007-09, and 2020 recessions",
    significance: "Strongest outperformance during credit/systemic crises, weakest during rate-driven contractions",
  },
  {
    insight: "Gold IRA average investment tripled from $35k (2023) to $100k (2024)",
    dataPoints: "Major provider reported data; coincides with gold hitting all-time highs",
    significance: "Wealthier investors are allocating more to physical gold in retirement accounts",
  },
  {
    insight: "Central banks bought 2,944 tonnes of gold in 2022-2024 -- more than the previous 6 years combined",
    dataPoints: "2022: 1,136t; 2023: 1,050t; 2024: 1,045t vs 2016-2021 avg ~473t/yr",
    significance: "De-dollarization trend is structural, not transient",
  },
  {
    insight: "Gold IRA annual fees ($200-$400) represent 0.2-0.4% on a $100k account",
    dataPoints: "Setup $50, admin $100-150, storage $100-150 annually",
    significance: "Comparable to many actively managed mutual fund expense ratios",
  },
  {
    insight: "CFTC fined two precious metals companies $107M combined in 2024-2025",
    dataPoints: "Red Rock Secured $56M (2024); Safeguard Metals $51M (2025)",
    significance: "Regulatory enforcement is increasing; both cases targeted elderly investors",
  },
  {
    insight: "Gold set 53 all-time price highs in 2025 alone",
    dataPoints: "Total demand exceeded 5,000t and $555B in value for the first time",
    significance: "Driven by central bank buying, ETF inflows, and geopolitical uncertainty",
  },
] as const;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------

export const reportMetadata = {
  title: "Gold IRA Industry Report 2026",
  subtitle: "Original Research & Analysis by Rich Dad Retirement",
  publishDate: "2026-04-14",
  lastUpdated: "2026-04-14",
  author: "Rich Dad Retirement Research Team",
  url: "https://richdadretirement.com/gold-ira-industry-report-2026",
  dataSources: [
    "World Gold Council - Gold Demand Trends (Full Year 2024 & 2025)",
    "Investment Company Institute - Quarterly Retirement Market Data (Q4 2025)",
    "ICI 2025 Investment Company Fact Book",
    "Federal Reserve Survey of Consumer Finances (2022)",
    "IRS.gov - Retirement Topics: IRA Contribution Limits",
    "NBER - US Business Cycle Dates",
    "Bureau of Labor Statistics - Gold Prices During and After the Great Recession",
    "MacroTrends - Historical Gold Prices & S&P 500 100-Year Chart",
    "CFTC Enforcement Press Releases (2024, 2025)",
    "Better Business Bureau company profiles",
    "Fidelity Investments - IRA Balance Data (Q4 2024)",
    "USGS - Mineral Commodity Summaries",
  ],
} as const;
