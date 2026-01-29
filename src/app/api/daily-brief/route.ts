import { NextResponse } from "next/server";
import type { SpotPricesResponse } from "../spot-prices/route";

// Types for the Daily Brief
export interface SpotPrice {
  metal: "gold" | "silver" | "platinum";
  price: number;
  change: number;
  changePercent: number;
}

export interface BriefHeadline {
  title: string;
  summary: string;
  source?: string;
}

export interface DailyBriefData {
  date: string;
  spotPrices: SpotPrice[];
  headlines: BriefHeadline[];
  marketSentiment: "bullish" | "bearish" | "neutral";
  generatedAt: string;
}

// Fetch real spot prices
async function fetchSpotPrices(): Promise<SpotPrice[]> {
  try {
    // Use internal API route
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/spot-prices`, {
      next: { revalidate: 300 }
    });

    if (!response.ok) throw new Error("Failed to fetch");

    const data: SpotPricesResponse = await response.json();

    return data.prices
      .filter(p => ["gold", "silver", "platinum"].includes(p.metal))
      .map(p => ({
        metal: p.metal as "gold" | "silver" | "platinum",
        price: p.price,
        change: p.change24h,
        changePercent: p.changePercent24h,
      }));
  } catch {
    // Fallback to basic prices (updated Jan 2026)
    return [
      { metal: "gold", price: 5350.00, change: 45.00, changePercent: 0.85 },
      { metal: "silver", price: 114.00, change: 2.10, changePercent: 1.88 },
      { metal: "platinum", price: 985.00, change: -5.00, changePercent: -0.51 },
    ];
  }
}

// Get market headlines (curated - can be enhanced with RSS/AI later)
function getMarketHeadlines(): BriefHeadline[] {
  // Rotating headlines based on day of week for freshness
  const headlines: BriefHeadline[][] = [
    [
      {
        title: "Central Banks Continue Gold Accumulation",
        summary: "Global central banks added over 1,000 tons of gold to reserves in 2024, marking the third consecutive year of record buying.",
        source: "World Gold Council",
      },
      {
        title: "Inflation Remains Above Fed Target",
        summary: "Core PCE inflation held steady at 2.8%, keeping pressure on the Federal Reserve and supporting gold's inflation-hedge appeal.",
        source: "Bureau of Economic Analysis",
      },
      {
        title: "Dollar Weakness Supports Precious Metals",
        summary: "The Dollar Index (DXY) continues to trend lower as investors diversify into hard assets amid fiscal concerns.",
        source: "Reuters",
      },
    ],
    [
      {
        title: "Gold ETFs See Continued Inflows",
        summary: "Global gold-backed ETFs recorded their 8th consecutive month of net inflows as institutional investors increase allocations.",
        source: "World Gold Council",
      },
      {
        title: "Geopolitical Tensions Boost Safe Haven Demand",
        summary: "Ongoing conflicts and trade uncertainties continue to drive investor interest in physical precious metals.",
        source: "Bloomberg",
      },
      {
        title: "Silver Industrial Demand Hits Record",
        summary: "Solar panel and electronics manufacturing pushed silver industrial demand to all-time highs, tightening supply.",
        source: "Silver Institute",
      },
    ],
  ];

  const dayIndex = new Date().getDay() % headlines.length;
  return headlines[dayIndex];
}

// Determine market sentiment based on price changes
function getMarketSentiment(prices: SpotPrice[]): "bullish" | "bearish" | "neutral" {
  const goldPrice = prices.find(p => p.metal === "gold");
  if (!goldPrice) return "neutral";

  if (goldPrice.changePercent > 0.5) return "bullish";
  if (goldPrice.changePercent < -0.5) return "bearish";
  return "neutral";
}

// Cache the brief data (regenerate every 15 minutes)
let cachedBrief: DailyBriefData | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

export async function GET() {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedBrief && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedBrief);
  }

  // Fetch real spot prices
  const spotPrices = await fetchSpotPrices();
  const headlines = getMarketHeadlines();
  const sentiment = getMarketSentiment(spotPrices);

  const briefData: DailyBriefData = {
    date: new Date().toISOString().split("T")[0],
    spotPrices,
    headlines,
    marketSentiment: sentiment,
    generatedAt: new Date().toISOString(),
  };

  // Cache the result
  cachedBrief = briefData;
  cacheTimestamp = now;

  return NextResponse.json(briefData);
}
