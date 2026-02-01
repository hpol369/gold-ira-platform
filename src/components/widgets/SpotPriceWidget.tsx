"use client";

import { useState, useEffect } from "react";

interface SpotPrice {
  metal: "gold" | "silver" | "platinum" | "palladium";
  price: number;
  change24h: number;
  changePercent24h: number;
}

interface SpotPriceWidgetProps {
  metal?: "gold" | "silver";
  showTitle?: boolean;
}

export function SpotPriceWidget({ metal = "gold", showTitle = true }: SpotPriceWidgetProps) {
  const [price, setPrice] = useState<SpotPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await fetch("/api/spot-prices");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        const metalPrice = data.prices?.find((p: SpotPrice) => p.metal === metal);

        if (metalPrice) {
          setPrice(metalPrice);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();

    // Refresh every 5 minutes
    const interval = setInterval(fetchPrice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [metal]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const metalLabel = metal === "gold" ? "Gold" : "Silver";
  const isPositive = price ? price.change24h >= 0 : true;

  if (loading) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        {showTitle && <h3 className="text-lg font-bold text-[#000080] mb-4">{metalLabel} Price Today</h3>}
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-slate-200 rounded w-24"></div>
        </div>
      </div>
    );
  }

  if (error || !price) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        {showTitle && <h3 className="text-lg font-bold text-[#000080] mb-4">{metalLabel} Price Today</h3>}
        <p className="text-slate-500 text-sm">Price data unavailable</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      {showTitle && <h3 className="text-lg font-bold text-[#000080] mb-4">{metalLabel} Price Today</h3>}
      <div className="text-3xl font-black text-[#B22234] mb-2">
        {formatCurrency(price.price)}
      </div>
      <div className={`text-sm font-bold ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? "+" : ""}{formatCurrency(price.change24h)} ({isPositive ? "+" : ""}{price.changePercent24h.toFixed(2)}%)
      </div>
      <p className="text-xs text-slate-400 mt-3 font-medium">
        Updated hourly. For informational purposes only.
      </p>
    </div>
  );
}
