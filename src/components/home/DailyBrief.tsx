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

function PriceCard({ data }: { data: SpotPrice }) {
  const isPositive = data.change > 0;
  const isNegative = data.change < 0;

  const metalLabels = {
    gold: "Gold",
    silver: "Silver",
    platinum: "Platinum",
  };

  const metalColors = {
    gold: "amber",
    silver: "slate",
    platinum: "blue",
  };

  const color = metalColors[data.metal];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex-1 min-w-[140px]">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-${color}-400 font-semibold text-sm`}>
          {metalLabels[data.metal]}
        </span>
        {isPositive && <TrendingUp className="h-4 w-4 text-green-400" />}
        {isNegative && <TrendingDown className="h-4 w-4 text-red-400" />}
        {!isPositive && !isNegative && <Minus className="h-4 w-4 text-slate-400" />}
      </div>
      <div className="text-xl md:text-2xl font-bold text-white">
        ${data.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
      <div
        className={`text-sm font-medium ${
          isPositive ? "text-green-400" : isNegative ? "text-red-400" : "text-slate-400"
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
      className="flex gap-4 items-start"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
        {index + 1}
      </div>
      <div className="flex-1">
        <h4 className="text-white font-semibold text-sm md:text-base mb-1">
          {headline.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          {headline.summary}
        </p>
        {headline.source && (
          <span className="text-slate-500 text-xs mt-1 inline-block">
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
      } catch {
        setError("Unable to load market data");
      } finally {
        setLoading(false);
      }
    }

    fetchBrief();
  }, []);

  const sentimentColors = {
    bullish: "text-green-400",
    bearish: "text-red-400",
    neutral: "text-slate-400",
  };

  const sentimentLabels = {
    bullish: "Bullish",
    bearish: "Bearish",
    neutral: "Neutral",
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-800/50 to-slate-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="h-5 w-5 text-amber-400" />
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">
                  Daily Market Brief
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Today&apos;s Precious Metals Snapshot
              </h2>
            </div>
            {data && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-400">Market Sentiment:</span>
                <span
                  className={`font-bold ${sentimentColors[data.marketSentiment]}`}
                >
                  {sentimentLabels[data.marketSentiment]}
                </span>
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="h-8 w-8 text-amber-400 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12 text-slate-400">{error}</div>
          ) : data ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Spot Prices */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Live Spot Prices
                </h3>
                <div className="flex flex-wrap gap-4">
                  {data.spotPrices.map((price) => (
                    <PriceCard key={price.metal} data={price} />
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-4">
                  Prices updated hourly. Last update:{" "}
                  {new Date(data.generatedAt).toLocaleTimeString()}
                </p>
              </div>

              {/* Headlines */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Key Market Developments
                </h3>
                <div className="space-y-4">
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
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              Understanding market trends helps you make informed decisions about
              protecting your retirement.
            </p>
            <a
              href="/why-gold"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
            >
              Learn Why Gold Matters
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
