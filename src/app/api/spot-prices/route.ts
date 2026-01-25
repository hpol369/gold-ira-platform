import { NextResponse } from "next/server";

// Types for spot prices
export interface SpotPrice {
  metal: "gold" | "silver" | "platinum" | "palladium";
  price: number;
  currency: string;
  change24h: number;
  changePercent24h: number;
  high24h: number;
  low24h: number;
  lastUpdated: string;
}

export interface SpotPricesResponse {
  prices: SpotPrice[];
  source: string;
  timestamp: string;
}

// Cache for 5 minutes
let cachedPrices: SpotPricesResponse | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch from free metals API
async function fetchLivePrices(): Promise<SpotPrice[]> {
  try {
    // Using metals.live free API (no key required)
    const response = await fetch("https://api.metals.live/v1/spot", {
      headers: { "Accept": "application/json" },
      next: { revalidate: 300 } // Cache for 5 min
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    // metals.live returns array of [gold, silver, platinum, palladium]
    const metals: ("gold" | "silver" | "platinum" | "palladium")[] = ["gold", "silver", "platinum", "palladium"];

    return data.map((item: { price: number; change: number; high: number; low: number }, index: number) => ({
      metal: metals[index],
      price: item.price,
      currency: "USD",
      change24h: item.change || 0,
      changePercent24h: item.price > 0 ? ((item.change || 0) / item.price) * 100 : 0,
      high24h: item.high || item.price,
      low24h: item.low || item.price,
      lastUpdated: new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching live prices:", error);
    // Return fallback prices if API fails
    return getFallbackPrices();
  }
}

// Fallback prices (updated manually as backup)
function getFallbackPrices(): SpotPrice[] {
  const now = new Date().toISOString();
  return [
    {
      metal: "gold",
      price: 2415.50,
      currency: "USD",
      change24h: 8.30,
      changePercent24h: 0.34,
      high24h: 2425.00,
      low24h: 2405.00,
      lastUpdated: now,
    },
    {
      metal: "silver",
      price: 28.45,
      currency: "USD",
      change24h: 0.25,
      changePercent24h: 0.89,
      high24h: 28.80,
      low24h: 28.10,
      lastUpdated: now,
    },
    {
      metal: "platinum",
      price: 985.00,
      currency: "USD",
      change24h: -5.00,
      changePercent24h: -0.51,
      high24h: 995.00,
      low24h: 980.00,
      lastUpdated: now,
    },
    {
      metal: "palladium",
      price: 1025.00,
      currency: "USD",
      change24h: 12.00,
      changePercent24h: 1.18,
      high24h: 1035.00,
      low24h: 1010.00,
      lastUpdated: now,
    },
  ];
}

export async function GET() {
  const now = Date.now();

  // Return cached if valid
  if (cachedPrices && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedPrices);
  }

  // Fetch fresh prices
  const prices = await fetchLivePrices();

  const response: SpotPricesResponse = {
    prices,
    source: "metals.live",
    timestamp: new Date().toISOString(),
  };

  // Cache
  cachedPrices = response;
  cacheTimestamp = now;

  return NextResponse.json(response);
}
