"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ReferenceLine,
  Label,
} from "recharts";
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  History,
  Info,
  ChevronRight,
  Scale,
  Coins,
  Target,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// Historical silver-to-gold ratio data (mock data 1970-2026)
const historicalRatioData = [
  { year: 1970, ratio: 17, event: null },
  { year: 1971, ratio: 23, event: null },
  { year: 1972, ratio: 31, event: null },
  { year: 1973, ratio: 36, event: null },
  { year: 1974, ratio: 39, event: null },
  { year: 1975, ratio: 42, event: null },
  { year: 1976, ratio: 34, event: null },
  { year: 1977, ratio: 31, event: null },
  { year: 1978, ratio: 36, event: null },
  { year: 1979, ratio: 25, event: null },
  { year: 1980, ratio: 17, event: "Hunt Brothers Squeeze" },
  { year: 1981, ratio: 42, event: null },
  { year: 1982, ratio: 49, event: null },
  { year: 1983, ratio: 44, event: null },
  { year: 1984, ratio: 55, event: null },
  { year: 1985, ratio: 53, event: null },
  { year: 1986, ratio: 68, event: null },
  { year: 1987, ratio: 65, event: null },
  { year: 1988, ratio: 66, event: null },
  { year: 1989, ratio: 72, event: null },
  { year: 1990, ratio: 82, event: null },
  { year: 1991, ratio: 90, event: "Gulf War Peak" },
  { year: 1992, ratio: 85, event: null },
  { year: 1993, ratio: 76, event: null },
  { year: 1994, ratio: 76, event: null },
  { year: 1995, ratio: 77, event: null },
  { year: 1996, ratio: 72, event: null },
  { year: 1997, ratio: 58, event: null },
  { year: 1998, ratio: 55, event: null },
  { year: 1999, ratio: 52, event: null },
  { year: 2000, ratio: 57, event: null },
  { year: 2001, ratio: 61, event: null },
  { year: 2002, ratio: 63, event: null },
  { year: 2003, ratio: 73, event: null },
  { year: 2004, ratio: 66, event: null },
  { year: 2005, ratio: 60, event: null },
  { year: 2006, ratio: 52, event: null },
  { year: 2007, ratio: 51, event: null },
  { year: 2008, ratio: 80, event: "Financial Crisis" },
  { year: 2009, ratio: 65, event: null },
  { year: 2010, ratio: 62, event: null },
  { year: 2011, ratio: 32, event: "2011 Silver Peak ($49)" },
  { year: 2012, ratio: 55, event: null },
  { year: 2013, ratio: 60, event: null },
  { year: 2014, ratio: 66, event: null },
  { year: 2015, ratio: 75, event: null },
  { year: 2016, ratio: 72, event: null },
  { year: 2017, ratio: 74, event: null },
  { year: 2018, ratio: 80, event: null },
  { year: 2019, ratio: 86, event: null },
  { year: 2020, ratio: 125, event: "COVID Spike (Record High)" },
  { year: 2021, ratio: 72, event: null },
  { year: 2022, ratio: 83, event: null },
  { year: 2023, ratio: 82, event: null },
  { year: 2024, ratio: 86, event: null },
  { year: 2025, ratio: 84, event: null },
  { year: 2026, ratio: 85, event: "Current" },
];

// Key events for chart annotations
const keyEvents = [
  { year: 1980, ratio: 17, label: "Hunt Brothers" },
  { year: 2011, ratio: 32, label: "2011 Peak" },
  { year: 2020, ratio: 125, label: "COVID Spike" },
];

// Custom tooltip for the chart
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; payload: { event: string | null } }>;
  label?: string;
}) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-lg">
        <p className="text-white font-semibold">{label}</p>
        <p className="text-amber-400">
          Ratio: <span className="font-bold">{payload[0].value}:1</span>
        </p>
        {payload[0].payload.event && (
          <p className="text-slate-400 text-sm mt-1">
            {payload[0].payload.event}
          </p>
        )}
      </div>
    );
  }
  return null;
}

export default function SilverToGoldRatioCalculatorPage() {
  // Calculator inputs
  const [goldPrice, setGoldPrice] = useState<number>(2650);
  const [silverPrice, setSilverPrice] = useState<number>(31);

  // Calculate outputs
  const calculations = useMemo(() => {
    const currentRatio = goldPrice / silverPrice;

    // Historical averages
    const longTermAverage = 47;
    const twentyYearAverage = 65;
    const currentAverage = 85;

    // Target ratio calculations
    const silverAt50Ratio = goldPrice / 50;
    const silverAt30Ratio = goldPrice / 30;
    const silverAtLongTermAvg = goldPrice / longTermAverage;

    // Percentage changes from current
    const gainAt50Ratio = ((silverAt50Ratio - silverPrice) / silverPrice) * 100;
    const gainAt30Ratio = ((silverAt30Ratio - silverPrice) / silverPrice) * 100;
    const gainAtLongTermAvg =
      ((silverAtLongTermAvg - silverPrice) / silverPrice) * 100;

    // Ratio comparison to averages
    const vsLongTermAvg = ((currentRatio - longTermAverage) / longTermAverage) * 100;
    const vs20YearAvg = ((currentRatio - twentyYearAverage) / twentyYearAverage) * 100;

    return {
      currentRatio: Math.round(currentRatio * 10) / 10,
      longTermAverage,
      twentyYearAverage,
      currentAverage,
      silverAt50Ratio: Math.round(silverAt50Ratio * 100) / 100,
      silverAt30Ratio: Math.round(silverAt30Ratio * 100) / 100,
      silverAtLongTermAvg: Math.round(silverAtLongTermAvg * 100) / 100,
      gainAt50Ratio: Math.round(gainAt50Ratio),
      gainAt30Ratio: Math.round(gainAt30Ratio),
      gainAtLongTermAvg: Math.round(gainAtLongTermAvg),
      vsLongTermAvg: Math.round(vsLongTermAvg),
      vs20YearAvg: Math.round(vs20YearAvg),
    };
  }, [goldPrice, silverPrice]);

  // Schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Silver to Gold Ratio Calculator",
    description:
      "Calculate the silver to gold ratio and analyze historical data. See what silver would be worth if the ratio normalizes to historical averages.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Live silver to gold ratio calculation",
      "Historical ratio comparison",
      "Target price projections",
      "Interactive historical chart (1970-2026)",
      "Key event annotations",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />

      <main className="pt-8 pb-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/silver-squeeze"
              className="hover:text-amber-400 transition-colors"
            >
              Silver Squeeze
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Silver to Gold Ratio Calculator</span>
          </nav>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-500/30">
              <Scale className="h-4 w-4" />
              Precious Metals Analysis Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-amber-200 to-slate-200 bg-clip-text text-transparent">
              Silver to Gold Ratio Calculator
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Calculate the current silver-to-gold ratio and compare it to
              historical averages. Discover potential upside if the ratio
              normalizes.
            </p>
          </div>

          {/* Main Calculator Grid */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Calculator Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <Calculator className="h-5 w-5 text-amber-400" />
                  </div>
                  <h2 className="text-xl font-semibold">Price Inputs</h2>
                </div>

                <div className="space-y-6">
                  {/* Gold Price Input */}
                  <div>
                    <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <Coins className="h-4 w-4 text-amber-400" />
                      Gold Price (USD/oz)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                      <input
                        type="number"
                        value={goldPrice}
                        onChange={(e) => setGoldPrice(Number(e.target.value))}
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-10 py-3 text-white text-lg focus:outline-none focus:border-amber-500 transition-colors"
                        min="0"
                        step="10"
                      />
                    </div>
                  </div>

                  {/* Silver Price Input */}
                  <div>
                    <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <Coins className="h-4 w-4 text-slate-400" />
                      Silver Price (USD/oz)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                      <input
                        type="number"
                        value={silverPrice}
                        onChange={(e) => setSilverPrice(Number(e.target.value))}
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-10 py-3 text-white text-lg focus:outline-none focus:border-amber-500 transition-colors"
                        min="0"
                        step="0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Current Ratio Display */}
                <div className="mt-8 p-6 bg-gradient-to-br from-amber-500/20 to-yellow-500/10 rounded-xl border border-amber-500/30">
                  <div className="text-center">
                    <p className="text-sm text-slate-400 mb-2">
                      Current Silver-to-Gold Ratio
                    </p>
                    <div className="text-5xl font-bold text-amber-400 mb-2">
                      {calculations.currentRatio}:1
                    </div>
                    <p className="text-sm text-slate-400">
                      ${goldPrice.toLocaleString()} gold / $
                      {silverPrice.toLocaleString()} silver
                    </p>
                  </div>
                </div>
              </div>

              {/* Historical Comparison Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <History className="h-5 w-5 text-purple-400" />
                  </div>
                  <h2 className="text-xl font-semibold">
                    Historical Comparison
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Long-term Average */}
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <p className="font-medium">Long-term Average</p>
                      <p className="text-sm text-slate-400">
                        Since 1900 (120+ years)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-200">
                        {calculations.longTermAverage}:1
                      </p>
                      <p
                        className={`text-sm ${calculations.vsLongTermAvg > 0 ? "text-red-400" : "text-green-400"}`}
                      >
                        {calculations.vsLongTermAvg > 0 ? "+" : ""}
                        {calculations.vsLongTermAvg}% vs current
                      </p>
                    </div>
                  </div>

                  {/* 20-Year Average */}
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <p className="font-medium">20-Year Average</p>
                      <p className="text-sm text-slate-400">2004-2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-200">
                        {calculations.twentyYearAverage}:1
                      </p>
                      <p
                        className={`text-sm ${calculations.vs20YearAvg > 0 ? "text-red-400" : "text-green-400"}`}
                      >
                        {calculations.vs20YearAvg > 0 ? "+" : ""}
                        {calculations.vs20YearAvg}% vs current
                      </p>
                    </div>
                  </div>

                  {/* Current Average */}
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <p className="font-medium">Recent Average</p>
                      <p className="text-sm text-slate-400">
                        2020-2026 range
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-200">
                        ~{calculations.currentAverage}:1
                      </p>
                      <p className="text-sm text-slate-400">
                        Near current level
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insight Box */}
                <div className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-300">
                      <p className="font-semibold text-amber-400 mb-1">
                        Ratio Analysis
                      </p>
                      <p>
                        The current ratio of {calculations.currentRatio}:1 is{" "}
                        {calculations.vsLongTermAvg > 0
                          ? "significantly above"
                          : "below"}{" "}
                        the long-term average, suggesting silver may be{" "}
                        {calculations.vsLongTermAvg > 0
                          ? "undervalued"
                          : "fairly valued"}{" "}
                        relative to gold.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Target Price Projections */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                    <Target className="h-5 w-5 text-green-400" />
                  </div>
                  <h2 className="text-xl font-semibold">
                    If the Ratio Normalizes...
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* 50:1 Scenario */}
                  <div className="p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl border border-green-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        <span className="font-semibold">
                          If ratio returns to 50:1
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        Conservative
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-400">
                          Silver would be worth
                        </p>
                        <p className="text-2xl font-bold text-green-400">
                          ${calculations.silverAt50Ratio.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Potential gain</p>
                        <p className="text-2xl font-bold text-green-400">
                          +{calculations.gainAt50Ratio}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Long-term Average Scenario */}
                  <div className="p-5 bg-gradient-to-r from-amber-500/10 to-yellow-500/5 rounded-xl border border-amber-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-amber-400" />
                        <span className="font-semibold">
                          If ratio returns to {calculations.longTermAverage}:1
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        Historical Avg
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-400">
                          Silver would be worth
                        </p>
                        <p className="text-2xl font-bold text-amber-400">
                          ${calculations.silverAtLongTermAvg.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Potential gain</p>
                        <p className="text-2xl font-bold text-amber-400">
                          +{calculations.gainAtLongTermAvg}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 30:1 Scenario */}
                  <div className="p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-xl border border-purple-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                        <span className="font-semibold">
                          If ratio returns to 30:1
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        Bullish
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-400">
                          Silver would be worth
                        </p>
                        <p className="text-2xl font-bold text-purple-400">
                          ${calculations.silverAt30Ratio.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Potential gain</p>
                        <p className="text-2xl font-bold text-purple-400">
                          +{calculations.gainAt30Ratio}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-slate-500 mt-4">
                  * Projections assume gold price remains at $
                  {goldPrice.toLocaleString()}. Actual returns depend on market
                  conditions.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold">Key Ratio Facts</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>
                      All-time low: <strong>14:1</strong> (1980, Hunt Brothers
                      squeeze)
                    </span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>
                      All-time high: <strong>125:1</strong> (March 2020, COVID
                      panic)
                    </span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>
                      Natural occurrence in Earth&apos;s crust:{" "}
                      <strong>~17:1</strong>
                    </span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>
                      US Coinage Act of 1792: <strong>15:1</strong> (legal
                      ratio)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Historical Chart Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <TrendingDown className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Silver-to-Gold Ratio Historical Chart
                  </h2>
                  <p className="text-sm text-slate-400">1970-2026</p>
                </div>
              </div>

              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={historicalRatioData}
                    margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorRatio"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#f59e0b"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor="#f59e0b"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="year"
                      stroke="#64748b"
                      fontSize={12}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#64748b"
                      fontSize={12}
                      tickLine={false}
                      domain={[0, 140]}
                      tickFormatter={(value) => `${value}:1`}
                    />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#334155"
                    />
                    <Tooltip content={<CustomTooltip />} />

                    {/* Reference lines for averages */}
                    <ReferenceLine
                      y={47}
                      stroke="#22c55e"
                      strokeDasharray="5 5"
                    >
                      <Label
                        value="Long-term Avg (47:1)"
                        position="right"
                        fill="#22c55e"
                        fontSize={11}
                      />
                    </ReferenceLine>
                    <ReferenceLine
                      y={65}
                      stroke="#3b82f6"
                      strokeDasharray="5 5"
                    >
                      <Label
                        value="20-Year Avg (65:1)"
                        position="right"
                        fill="#3b82f6"
                        fontSize={11}
                      />
                    </ReferenceLine>

                    <Area
                      type="monotone"
                      dataKey="ratio"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorRatio)"
                      name="Ratio"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Event Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {keyEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg text-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-slate-400">{event.year}:</span>
                    <span className="text-white font-medium">
                      {event.label}
                    </span>
                    <span className="text-amber-400">({event.ratio}:1)</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-center text-slate-500 mt-4">
                Source: Historical data compiled from various sources. Data is
                approximate and for educational purposes only.
              </p>
            </div>
          </div>

          {/* Lead Capture CTA */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 rounded-2xl p-8 md:p-10 border border-amber-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(212,175,55,0.1)]">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-500/30">
                  <Coins className="h-4 w-4" />
                  Investment Opportunity
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Want to Buy Silver Before the Ratio Normalizes?
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                  If the silver-to-gold ratio returns to historical levels, silver
                  could see significant upside. Learn how to add physical silver
                  to your IRA with tax advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/quiz"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold py-4 px-6 rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Take Our Precious Metals Quiz
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/learn/silver-ira"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-4 px-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Read Our Silver IRA Guide
                  <BookOpen className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Understanding the Silver-to-Gold Ratio
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* What Is It */}
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-amber-400" />
                    What Is the Silver-to-Gold Ratio?
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    The silver-to-gold ratio measures how many ounces of silver
                    it takes to buy one ounce of gold. Simply divide the gold
                    price by the silver price.
                  </p>
                  <p className="text-slate-400 text-sm">
                    A ratio of 80:1 means you need 80 ounces of silver to equal
                    the value of one ounce of gold. Historically, this ratio has
                    averaged around 47:1 over the past century.
                  </p>
                </div>

                {/* Historical Significance */}
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <History className="h-5 w-5 text-purple-400" />
                    Historical Significance
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Throughout history, governments set fixed ratios for
                    silver-to-gold. The US Coinage Act of 1792 established a
                    legal ratio of 15:1, reflecting silver&apos;s importance as
                    money.
                  </p>
                  <p className="text-slate-400 text-sm">
                    In nature, silver is approximately 17 times more abundant
                    than gold in the Earth&apos;s crust, suggesting a
                    &ldquo;natural&rdquo; ratio near this level.
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    Why the Ratio Matters for Investors
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Many investors use the ratio to determine relative value
                    between gold and silver. When the ratio is high (above 80),
                    silver is considered undervalued relative to gold.
                  </p>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        High ratio: Consider buying silver over gold
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Low ratio: Consider buying gold over silver</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Mean reversion: Ratio tends to return to averages</span>
                    </li>
                  </ul>
                </div>

                {/* Expert Opinions */}
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                    Expert Opinions on &ldquo;Fair Value&rdquo;
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Precious metals analysts have varying views on the
                    &ldquo;fair&rdquo; silver-to-gold ratio:
                  </p>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-amber-400 font-bold">47:1</span>
                      <span>- 100-year historical average</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 font-bold">17:1</span>
                      <span>- Natural geological ratio</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 font-bold">50-60:1</span>
                      <span>- Most analyst consensus range</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 font-bold">16:1</span>
                      <span>- Historical monetary ratio</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-white/10 mb-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Why is the ratio so high right now?
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The ratio has been elevated since 2018 due to several
                      factors: silver&apos;s industrial demand volatility, gold&apos;s
                      safe-haven premium during economic uncertainty, and
                      reduced silver investment demand compared to gold ETFs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">
                      What causes the ratio to change?
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The ratio fluctuates based on: supply and demand for each
                      metal, industrial usage (silver has more industrial
                      applications), investment demand, currency movements, and
                      overall economic conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">
                      Should I invest based on the ratio alone?
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The ratio is one tool among many for precious metals
                      analysis. Consider your overall investment goals, risk
                      tolerance, and portfolio diversification needs before
                      making investment decisions based on the ratio.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-400 mb-2">
                      How can I invest in silver through an IRA?
                    </h4>
                    <p className="text-slate-400 text-sm">
                      A Precious Metals IRA (or Silver IRA) allows you to hold
                      physical silver coins and bars in a tax-advantaged
                      retirement account. You can transfer existing IRA or
                      401(k) funds without triggering taxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <AugustaCTA
              variant="footer"
              headline="Ready to Add Silver to Your Portfolio?"
              subheadline="Augusta Precious Metals offers both gold and silver IRA options. Get a free consultation to learn about diversifying your retirement with precious metals."
              linkContext="default"
              trackSource="silver-gold-ratio-calculator"
            />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
