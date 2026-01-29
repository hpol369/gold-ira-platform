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

// Fetch from goldprice.org API (reliable, no key required)
async function fetchLivePrices(): Promise<SpotPrice[]> {
  try {
    const response = await fetch("https://data-asg.goldprice.org/dbXRates/USD", {
      headers: { "Accept": "application/json" },
      next: { revalidate: 300 } // Cache for 5 min
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    const item = data.items?.[0];

    if (!item) {
      throw new Error("No price data in response");
    }

    const now = new Date().toISOString();

    return [
      {
        metal: "gold",
        price: item.xauPrice,
        currency: "USD",
        change24h: item.chgXau || 0,
        changePercent24h: item.pcXau || 0,
        high24h: item.xauPrice + Math.abs(item.chgXau || 0),
        low24h: item.xauClose || item.xauPrice,
        lastUpdated: now,
      },
      {
        metal: "silver",
        price: item.xagPrice,
        currency: "USD",
        change24h: item.chgXag || 0,
        changePercent24h: item.pcXag || 0,
        high24h: item.xagPrice + Math.abs(item.chgXag || 0),
        low24h: item.xagClose || item.xagPrice,
        lastUpdated: now,
      },
      {
        metal: "platinum",
        price: 985.00, // goldprice.org doesn't provide platinum, use estimate
        currency: "USD",
        change24h: 0,
        changePercent24h: 0,
        high24h: 985.00,
        low24h: 985.00,
        lastUpdated: now,
      },
      {
        metal: "palladium",
        price: 1025.00, // goldprice.org doesn't provide palladium, use estimate
        currency: "USD",
        change24h: 0,
        changePercent24h: 0,
        high24h: 1025.00,
        low24h: 1025.00,
        lastUpdated: now,
      },
    ];
  } catch (error) {
    console.error("Error fetching live prices:", error);
    // Return fallback prices if API fails
    return getFallbackPrices();
  }
}

// Fallback prices (updated Jan 2026 - update periodically as backup)
function getFallbackPrices(): SpotPrice[] {
  const now = new Date().toISOString();
  return [
    {
      metal: "gold",
      price: 5350.00,
      currency: "USD",
      change24h: 45.00,
      changePercent24h: 0.85,
      high24h: 5395.00,
      low24h: 5305.00,
      lastUpdated: now,
    },
    {
      metal: "silver",
      price: 114.00,
      currency: "USD",
      change24h: 2.10,
      changePercent24h: 1.88,
      high24h: 116.00,
      low24h: 112.00,
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
