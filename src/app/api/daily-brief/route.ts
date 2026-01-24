import { NextResponse } from "next/server";

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

// Mock data - will be replaced with real API calls / AI generation
function getMockBriefData(): DailyBriefData {
  const today = new Date().toISOString().split("T")[0];

  return {
    date: today,
    spotPrices: [
      {
        metal: "gold",
        price: 2418.50,
        change: 12.30,
        changePercent: 0.51,
      },
      {
        metal: "silver",
        price: 28.42,
        change: 0.38,
        changePercent: 1.35,
      },
      {
        metal: "platinum",
        price: 978.00,
        change: -5.20,
        changePercent: -0.53,
      },
    ],
    headlines: [
      {
        title: "Central Banks Continue Gold Accumulation",
        summary: "China and India added 45 tons to reserves in December, marking 18 consecutive months of net buying by central banks worldwide.",
        source: "World Gold Council",
      },
      {
        title: "Fed Signals Rate Cuts May Come Slower",
        summary: "Federal Reserve minutes suggest inflation concerns could delay expected rate cuts, supporting gold's safe-haven appeal.",
        source: "Federal Reserve",
      },
      {
        title: "Dollar Index Weakens Against Major Currencies",
        summary: "The DXY fell 0.4% as investors rotate into hard assets amid growing debt ceiling concerns.",
        source: "Market Watch",
      },
    ],
    marketSentiment: "bullish",
    generatedAt: new Date().toISOString(),
  };
}

// Cache the brief data (regenerate once per hour)
let cachedBrief: DailyBriefData | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET() {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedBrief && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedBrief);
  }

  // Generate new brief
  // TODO: Replace with real data fetching:
  // 1. Fetch spot prices from metals API (e.g., goldapi.io, metals.live)
  // 2. Fetch headlines from RSS feeds (Kitco, Bloomberg)
  // 3. Use AI to generate summary brief

  const briefData = getMockBriefData();

  // Cache the result
  cachedBrief = briefData;
  cacheTimestamp = now;

  return NextResponse.json(briefData);
}
