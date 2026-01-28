"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  AlertTriangle,
  Shield,
  CheckCircle2,
  Info,
  BarChart3,
  ArrowRight,
  ArrowUpDown,
} from "lucide-react";

// Format currency
function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value.toLocaleString()}`;
}

function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

interface YearData {
  year: number;
  bullThenBear: number;
  bearThenBull: number;
  bullReturn: number;
  bearReturn: number;
}

export function SequenceOfReturnsCalculator() {
  // Inputs
  const [portfolioValue, setPortfolioValue] = useState<number>(1000000);
  const [withdrawalAmount, setWithdrawalAmount] = useState<number>(50000);
  const [withdrawalType, setWithdrawalType] = useState<"amount" | "percentage">("amount");
  const [withdrawalPercentage, setWithdrawalPercentage] = useState<number>(5);
  const [bullReturn, setBullReturn] = useState<number>(15);
  const [bearReturn, setBearReturn] = useState<number>(-5);
  const [retirementYears, setRetirementYears] = useState<number>(20);
  const [bullYears, setBullYears] = useState<number>(10);

  // Calculations
  const calculations = useMemo(() => {
    const bearYears = retirementYears - bullYears;
    const actualWithdrawal = withdrawalType === "amount"
      ? withdrawalAmount
      : portfolioValue * (withdrawalPercentage / 100);

    // Calculate average return
    const avgReturn = ((bullReturn * bullYears) + (bearReturn * bearYears)) / retirementYears;

    // Generate year-by-year data for both scenarios
    const yearData: YearData[] = [];
    let bullThenBearBalance = portfolioValue;
    let bearThenBullBalance = portfolioValue;

    for (let year = 1; year <= retirementYears; year++) {
      // Bull-then-Bear scenario: First bullYears at bullReturn, then bearYears at bearReturn
      const bullThenBearReturn = year <= bullYears ? bullReturn : bearReturn;
      bullThenBearBalance = bullThenBearBalance * (1 + bullThenBearReturn / 100) - actualWithdrawal;
      bullThenBearBalance = Math.max(0, bullThenBearBalance);

      // Bear-then-Bull scenario: First bearYears at bearReturn, then bullYears at bullReturn
      const bearThenBullReturn = year <= bearYears ? bearReturn : bullReturn;
      bearThenBullBalance = bearThenBullBalance * (1 + bearThenBullReturn / 100) - actualWithdrawal;
      bearThenBullBalance = Math.max(0, bearThenBullBalance);

      yearData.push({
        year,
        bullThenBear: bullThenBearBalance,
        bearThenBull: bearThenBullBalance,
        bullReturn: bullThenBearReturn,
        bearReturn: bearThenBullReturn,
      });
    }

    // Final values
    const finalBullThenBear = yearData[yearData.length - 1]?.bullThenBear || 0;
    const finalBearThenBull = yearData[yearData.length - 1]?.bearThenBull || 0;

    // Difference
    const difference = finalBullThenBear - finalBearThenBull;
    const percentDifference = finalBearThenBull > 0
      ? ((finalBullThenBear - finalBearThenBull) / finalBearThenBull) * 100
      : finalBullThenBear > 0 ? 100 : 0;

    // Year portfolio depletes (if applicable)
    const bullThenBearDepletionYear = yearData.findIndex(y => y.bullThenBear <= 0) + 1 || null;
    const bearThenBullDepletionYear = yearData.findIndex(y => y.bearThenBull <= 0) + 1 || null;

    // Total withdrawals
    const totalWithdrawals = actualWithdrawal * retirementYears;

    return {
      yearData,
      avgReturn,
      actualWithdrawal,
      finalBullThenBear,
      finalBearThenBull,
      difference,
      percentDifference,
      bullThenBearDepletionYear,
      bearThenBullDepletionYear,
      totalWithdrawals,
      bearYears,
    };
  }, [
    portfolioValue,
    withdrawalAmount,
    withdrawalType,
    withdrawalPercentage,
    bullReturn,
    bearReturn,
    retirementYears,
    bullYears,
  ]);

  // Find max value for chart scaling
  const maxChartValue = Math.max(
    portfolioValue,
    ...calculations.yearData.map(y => Math.max(y.bullThenBear, y.bearThenBull))
  );

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
          <ArrowUpDown className="h-4 w-4" />
          Zero Competition Keyword
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          Sequence of Returns Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          See why WHEN you get returns matters as much as the returns themselves. The same average return can lead to vastly different outcomes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Portfolio Value */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <DollarSign className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Starting Portfolio</h3>
            </div>

            <div>
              <label className="text-sm text-slate-500 mb-2 block">
                Portfolio Value at Retirement
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="number"
                  value={portfolioValue}
                  onChange={(e) => setPortfolioValue(Number(e.target.value))}
                  className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                  min="0"
                  step="50000"
                />
              </div>
            </div>
          </div>

          {/* Withdrawal Settings */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Annual Withdrawal</h3>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setWithdrawalType("amount")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    withdrawalType === "amount"
                      ? "bg-[#B22234] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Fixed Amount
                </button>
                <button
                  onClick={() => setWithdrawalType("percentage")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    withdrawalType === "percentage"
                      ? "bg-[#B22234] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Percentage
                </button>
              </div>

              {withdrawalType === "amount" ? (
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Annual Withdrawal Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={withdrawalAmount}
                      onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
                      className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                      min="0"
                      step="5000"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Withdrawal Rate: {withdrawalPercentage}%
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="0.5"
                    value={withdrawalPercentage}
                    onChange={(e) => setWithdrawalPercentage(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>2%</span>
                    <span>4% (Safe)</span>
                    <span>10%</span>
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Retirement Length: {retirementYears} years
                </label>
                <input
                  type="range"
                  min="10"
                  max="40"
                  value={retirementYears}
                  onChange={(e) => {
                    const newYears = Number(e.target.value);
                    setRetirementYears(newYears);
                    setBullYears(Math.min(bullYears, newYears - 1));
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>
            </div>
          </div>

          {/* Return Scenarios */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Return Scenarios</h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    Bull Return: {bullReturn}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="1"
                    value={bullReturn}
                    onChange={(e) => setBullReturn(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-red-600" />
                    Bear Return: {bearReturn}%
                  </label>
                  <input
                    type="range"
                    min="-20"
                    max="5"
                    step="1"
                    value={bearReturn}
                    onChange={(e) => setBearReturn(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Bull Years First: {bullYears} years (then {calculations.bearYears} bear years)
                </label>
                <input
                  type="range"
                  min="1"
                  max={retirementYears - 1}
                  value={bullYears}
                  onChange={(e) => setBullYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Average Annual Return</span>
                  <span className="text-xl font-bold text-[#B22234]">
                    {calculations.avgReturn.toFixed(1)}%
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Both scenarios have this exact same average return
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Key Comparison */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[#B22234]" />
              Sequence Matters: Final Portfolio Values
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <TrendingUp className="h-4 w-4" />
                  Bull Then Bear
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {calculations.bullThenBearDepletionYear
                    ? `Depleted Year ${calculations.bullThenBearDepletionYear}`
                    : formatCurrency(calculations.finalBullThenBear)}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Good returns early, bad returns later
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-red-600 mb-2">
                  <TrendingDown className="h-4 w-4" />
                  Bear Then Bull
                </div>
                <div className="text-2xl font-bold text-red-600">
                  {calculations.bearThenBullDepletionYear
                    ? `Depleted Year ${calculations.bearThenBullDepletionYear}`
                    : formatCurrency(calculations.finalBearThenBull)}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Bad returns early, good returns later
                </p>
              </div>
            </div>

            <div className={`rounded-lg p-4 ${
              calculations.difference > 0
                ? "bg-green-500/10 border border-green-500/30"
                : "bg-red-500/10 border border-red-500/30"
            }`}>
              <div className="text-center">
                <div className="text-sm text-slate-500 mb-1">Difference</div>
                <div className={`text-3xl font-bold ${
                  calculations.difference > 0 ? "text-green-600" : "text-red-600"
                }`}>
                  {formatCurrency(Math.abs(calculations.difference))}
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  {calculations.percentDifference > 0
                    ? `${calculations.percentDifference.toFixed(0)}% more with good returns early`
                    : "Early losses devastate long-term wealth"}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Chart */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Portfolio Value Over Time
            </h3>

            <div className="relative h-64 mb-4">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-slate-500">
                <span>{formatCurrency(maxChartValue)}</span>
                <span>{formatCurrency(maxChartValue * 0.5)}</span>
                <span>$0</span>
              </div>

              {/* Chart area */}
              <div className="ml-16 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-slate-200" />
                  ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-0 flex items-end justify-between gap-1">
                  {calculations.yearData.filter((_, i) => i % Math.ceil(retirementYears / 10) === 0 || i === retirementYears - 1).map((data) => (
                    <div key={data.year} className="flex-1 flex gap-0.5">
                      <div
                        className="flex-1 bg-green-500/50 rounded-t"
                        style={{ height: `${(data.bullThenBear / maxChartValue) * 100}%` }}
                        title={`Year ${data.year}: ${formatCurrency(data.bullThenBear)}`}
                      />
                      <div
                        className="flex-1 bg-red-500/50 rounded-t"
                        style={{ height: `${(data.bearThenBull / maxChartValue) * 100}%` }}
                        title={`Year ${data.year}: ${formatCurrency(data.bearThenBull)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500/50 rounded" />
                <span className="text-slate-500">Bull Then Bear</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500/50 rounded" />
                <span className="text-slate-500">Bear Then Bull</span>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4">Scenario Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500">Initial Portfolio</span>
                <span className="font-semibold">{formatFullCurrency(portfolioValue)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500">Annual Withdrawal</span>
                <span className="font-semibold">{formatFullCurrency(calculations.actualWithdrawal)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500">Total Withdrawals ({retirementYears} years)</span>
                <span className="font-semibold">{formatFullCurrency(calculations.totalWithdrawals)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="text-slate-500">Average Return (Same for Both)</span>
                <span className="font-semibold text-[#B22234]">{calculations.avgReturn.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-16">
        {/* Key Insight Alert */}
        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-[#B22234] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-[#B22234] mb-2">
                Key Insight: Gold Reduces Sequence Risk
              </h3>
              <p className="text-slate-600 mb-4">
                Gold&apos;s low correlation to stocks means it often rises when stocks fall. During the 2008 crisis,
                gold gained 5.5% while stocks lost 37%. A 10-15% gold allocation can protect your portfolio
                from devastating early losses that compound over decades.
              </p>
              <p className="text-slate-600 text-sm">
                This &quot;portfolio insurance&quot; is particularly valuable in early retirement when sequence of returns
                risk is highest.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">What is Sequence of Returns Risk?</h2>
          </div>

          <div className="space-y-6 text-slate-600">
            <p>
              Sequence of returns risk is one of the most misunderstood threats to retirement security.
              It demonstrates that <strong className="text-slate-900">when</strong> you receive investment returns
              matters just as much as the returns themselves.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Bull-Then-Bear Scenario
                </h4>
                <p className="text-sm text-slate-500">
                  Strong returns early grow your portfolio significantly. Even when bad years come later,
                  you&apos;re withdrawing from a much larger base. Your wealth survives.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  Bear-Then-Bull Scenario
                </h4>
                <p className="text-sm text-slate-500">
                  Poor returns early shrink your portfolio while you&apos;re still withdrawing. By the time
                  good years arrive, you&apos;re growing a much smaller base. Your wealth suffers.
                </p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                The Real-World Example
              </h4>
              <p className="text-sm text-slate-600">
                Two retirees with identical portfolios and identical 30-year average returns can end up
                with vastly different outcomes. One might have $2 million left; the other might run out
                of money in year 20. The only difference? When the good and bad years occurred.
              </p>
            </div>
          </div>
        </div>

        {/* Protection Strategies */}
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-6 w-6 text-[#B22234]" />
            How to Protect Against Sequence Risk
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Gold Allocation (10-15%)</h4>
                  <p className="text-sm text-slate-500">
                    Gold often moves opposite to stocks during crashes, providing a buffer against
                    early sequence risk.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Cash Reserve (1-2 Years)</h4>
                  <p className="text-sm text-slate-500">
                    Maintain enough cash to avoid selling stocks during downturns.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Flexible Withdrawal Strategy</h4>
                  <p className="text-sm text-slate-500">
                    Reduce withdrawals by 10-20% during market downturns to preserve capital.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Bond Ladder</h4>
                  <p className="text-sm text-slate-500">
                    Guaranteed income from bonds can cover essential expenses regardless of stock performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Lower Initial Withdrawal Rate</h4>
                  <p className="text-sm text-slate-500">
                    Starting at 3.5% instead of 4% provides a significant buffer against poor early returns.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Part-Time Income</h4>
                  <p className="text-sm text-slate-500">
                    Even modest income in early retirement reduces reliance on portfolio withdrawals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Bridge CTA */}
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protect Your Retirement from Sequence Risk</h2>
          </div>

          <p className="text-slate-500 mb-6">
            A Gold IRA provides crucial protection during the vulnerable early years of retirement.
            When stocks crash, gold typically holds its value or rises, giving you a stable asset
            to draw from instead of selling stocks at a loss.
          </p>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="sequence-of-returns-calculator"
            subheadline="Protect your retirement from devastating early losses. Augusta Precious Metals can help you add gold to your IRA as insurance against sequence of returns risk."
          />
        </div>
      </div>
    </Container>
  );
}
