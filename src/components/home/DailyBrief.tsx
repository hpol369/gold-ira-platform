"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Newspaper,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import type { DailyBriefData, SpotPrice } from "@/app/api/daily-brief/route";
import Link from "next/link";

function PriceCard({ data }: { data: SpotPrice }) {
  const isPositive = data.change > 0;
  const isNegative = data.change < 0;

  const metalLabels: Record<string, string> = {
    gold: "Gold",
    silver: "Silver",
    platinum: "Platinum",
  };

  const metalColors: Record<string, string> = {
    gold: "amber",
    silver: "slate",
    platinum: "blue",
  };

  const color = metalColors[data.metal];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex-1 min-w-[140px] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-600 font-bold text-sm uppercase tracking-wider">
          {metalLabels[data.metal]}
        </span>
        {isPositive && <TrendingUp className="h-4 w-4 text-green-600" />}
        {isNegative && <TrendingDown className="h-4 w-4 text-[#B22234]" />}
        {!isPositive && !isNegative && <Minus className="h-4 w-4 text-slate-400" />}
      </div>
      <div className="text-2xl md:text-3xl font-serif font-black text-[#000080] mb-1">
        ${data.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
      <div
        className={`text-sm font-bold ${isPositive ? "text-green-600" : isNegative ? "text-[#B22234]" : "text-slate-500"
          }`}
      >
        {isPositive ? "+" : ""}
        {data.change.toFixed(2)} ({isPositive ? "+" : ""}
        {data.changePercent.toFixed(2)}%)
      </div>
    </div>
  );
}

function HeadlineItem({
  headline,
  index,
}: {
  headline: { title: string; summary: string; source?: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#000080]/10 flex items-center justify-center text-[#000080] font-bold text-sm mt-0.5">
        {index + 1}
      </div>
      <div className="flex-1">
        <h4 className="text-[#000080] font-bold text-base mb-1 hover:text-[#B22234] transition-colors cursor-pointer">
          {headline.title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          {headline.summary}
        </p>
        {headline.source && (
          <span className="text-slate-400 text-xs mt-1.5 inline-block font-semibold">
            Source: {headline.source}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function DailyBrief() {
  const [data, setData] = useState<DailyBriefData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBrief() {
      try {
        const res = await fetch("/api/daily-brief");
        if (!res.ok) throw new Error("Failed to fetch");
        const briefData = await res.json();
        setData(briefData);
        setError(null);
      } catch {
        setError("Unable to load market data");
      } finally {
        setLoading(false);
      }
    }

    fetchBrief();

    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchBrief, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const sentimentColors: Record<string, string> = {
    bullish: "text-green-600 bg-green-50 border-green-200",
    bearish: "text-[#B22234] bg-red-50 border-red-200",
    neutral: "text-slate-600 bg-slate-50 border-slate-200",
  };

  const sentimentLabels: Record<string, string> = {
    bullish: "Bullish",
    bearish: "Bearish",
    neutral: "Neutral",
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 border-b border-slate-200 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="h-5 w-5 text-[#B22234]" />
                <span className="text-[#B22234] font-bold text-sm uppercase tracking-wide">
                  Daily Market Brief
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-[#000080]">
                Today&apos;s Precious Metals Snapshot
              </h2>
            </div>
            {data && (
              <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${sentimentColors[data.marketSentiment]}`}>
                <span className="text-sm font-bold text-slate-700">Market Sentiment:</span>
                <span className="font-black text-sm uppercase">
                  {sentimentLabels[data.marketSentiment]}
                </span>
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="h-10 w-10 text-[#000080] animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12 text-slate-500 font-medium">{error}</div>
          ) : data ? (
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Spot Prices */}
              <div className="bg-[#000080] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                {/* Texture */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

                <h3 className="text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-amber-700" />
                  Live Spot Prices
                </h3>

                <div className="flex flex-col gap-4 relative z-10">
                  {data.spotPrices.map((price) => (
                    <PriceCard key={price.metal} data={price} />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-blue-200 text-xs font-medium relative z-10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live prices • Auto-updates every 5 min
                </div>
              </div>

              {/* Headlines */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#000080] mb-6 flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-slate-400" />
                  Key Market Developments
                </h3>
                <div className="space-y-6">
                  {data.headlines.map((headline, index) => (
                    <HeadlineItem
                      key={index}
                      headline={headline}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-slate-600 font-medium sm:text-lg">
              Understanding market trends helps you make informed decisions about
              protecting your retirement.
            </p>
            <Link
              href="/why-gold"
              className="inline-flex items-center gap-2 text-[#000080] hover:text-[#B22234] font-bold transition-colors whitespace-nowrap"
            >
              Learn Why Gold Matters
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
