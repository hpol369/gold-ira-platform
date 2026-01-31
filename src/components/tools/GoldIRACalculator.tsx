"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Percent,
  Shield,
  BarChart3,
  LineChart,
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react";

// Format currency helper functions
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

// Historical data for backtesting (annual returns 2000-2024)
const historicalData = {
  // S&P 500 annual returns
  stocks: [
    -9.1, -11.9, -22.1, 28.7, 10.9, 4.9, 15.8, 5.5, -37.0, 26.5, 15.1, 2.1,
    16.0, 32.4, 13.7, 1.4, 12.0, 21.8, -4.4, 31.5, 18.4, 28.7, -18.1, 26.3,
    25.0,
  ],
  // Gold annual returns
  gold: [
    -5.4, 2.5, 24.7, 19.6, 5.2, 18.2, 23.2, 31.4, 5.5, 24.0, 29.5, 10.1, 7.0,
    -28.3, -1.5, -10.4, 8.6, 13.1, -1.6, 18.3, 24.6, -3.6, -0.3, 13.1, 27.2,
  ],
  years: [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024,
  ],
};

// Calculate standard deviation
function calculateStdDev(values: number[]): number {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const squaredDiffs = values.map((v) => Math.pow(v - mean, 2));
  return Math.sqrt(squaredDiffs.reduce((a, b) => a + b, 0) / values.length);
}

// Calculate Sharpe ratio (simplified, assuming 3% risk-free rate)
function calculateSharpeRatio(returns: number[]): number {
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const stdDev = calculateStdDev(returns);
  const riskFreeRate = 3;
  return stdDev > 0 ? (avgReturn - riskFreeRate) / stdDev : 0;
}

// Calculate max drawdown
function calculateMaxDrawdown(returns: number[]): number {
  let peak = 100;
  let maxDrawdown = 0;
  let currentValue = 100;

  for (const ret of returns) {
    currentValue = currentValue * (1 + ret / 100);
    if (currentValue > peak) {
      peak = currentValue;
    }
    const drawdown = ((peak - currentValue) / peak) * 100;
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }
  }
  return maxDrawdown;
}

export function GoldIRACalculator() {
  // Input state
  const [currentSavings, setCurrentSavings] = useState<number>(250000);
  const [goldAllocation, setGoldAllocation] = useState<number>(15);
  const [yearsToRetirement, setYearsToRetirement] = useState<number>(15);
  const [expectedStockReturn, setExpectedStockReturn] = useState<number>(7);
  const [expectedGoldReturn, setExpectedGoldReturn] = useState<number>(5);
  const [inflationRate, setInflationRate] = useState<number>(3);

  // Calculations
  const calculations = useMemo(() => {
    const stocksAllocation = 100 - goldAllocation;

    // Project future value WITHOUT gold (100% stocks)
    const futureValueWithoutGold =
      currentSavings * Math.pow(1 + expectedStockReturn / 100, yearsToRetirement);

    // Project future value WITH gold allocation
    const stocksPortion = currentSavings * (stocksAllocation / 100);
    const goldPortion = currentSavings * (goldAllocation / 100);

    const futureStocks =
      stocksPortion * Math.pow(1 + expectedStockReturn / 100, yearsToRetirement);
    const futureGold =
      goldPortion * Math.pow(1 + expectedGoldReturn / 100, yearsToRetirement);
    const futureValueWithGold = futureStocks + futureGold;

    // Inflation-adjusted values
    const inflationMultiplier = Math.pow(1 + inflationRate / 100, yearsToRetirement);
    const realValueWithoutGold = futureValueWithoutGold / inflationMultiplier;
    const realValueWithGold = futureValueWithGold / inflationMultiplier;

    // Historical backtest (2000-2024)
    const backtestReturns = {
      withoutGold: historicalData.stocks,
      withGold: historicalData.stocks.map(
        (stockReturn, i) =>
          (stockReturn * stocksAllocation + historicalData.gold[i] * goldAllocation) /
          100
      ),
    };

    // Calculate cumulative growth for backtest
    let cumulativeWithoutGold = 100;
    let cumulativeWithGold = 100;
    const backtestGrowth = {
      withoutGold: [100],
      withGold: [100],
    };

    historicalData.stocks.forEach((stockReturn, i) => {
      cumulativeWithoutGold *= 1 + stockReturn / 100;
      const blendedReturn =
        (stockReturn * stocksAllocation + historicalData.gold[i] * goldAllocation) / 100;
      cumulativeWithGold *= 1 + blendedReturn / 100;
      backtestGrowth.withoutGold.push(cumulativeWithoutGold);
      backtestGrowth.withGold.push(cumulativeWithGold);
    });

    // Calculate risk metrics
    const volatilityWithoutGold = calculateStdDev(historicalData.stocks);
    const volatilityWithGold = calculateStdDev(backtestReturns.withGold);
    const volatilityReduction =
      ((volatilityWithoutGold - volatilityWithGold) / volatilityWithoutGold) * 100;

    const avgReturnWithoutGold =
      historicalData.stocks.reduce((a, b) => a + b, 0) / historicalData.stocks.length;
    const avgReturnWithGold =
      backtestReturns.withGold.reduce((a, b) => a + b, 0) /
      backtestReturns.withGold.length;

    const sharpeWithoutGold = calculateSharpeRatio(historicalData.stocks);
    const sharpeWithGold = calculateSharpeRatio(backtestReturns.withGold);

    const maxDrawdownWithoutGold = calculateMaxDrawdown(historicalData.stocks);
    const maxDrawdownWithGold = calculateMaxDrawdown(backtestReturns.withGold);

    // Final backtest values (starting from currentSavings in 2000)
    const backtestFinalWithoutGold =
      currentSavings * (backtestGrowth.withoutGold[backtestGrowth.withoutGold.length - 1] / 100);
    const backtestFinalWithGold =
      currentSavings * (backtestGrowth.withGold[backtestGrowth.withGold.length - 1] / 100);

    return {
      futureValueWithoutGold,
      futureValueWithGold,
      realValueWithoutGold,
      realValueWithGold,
      difference: futureValueWithGold - futureValueWithoutGold,
      volatilityWithoutGold,
      volatilityWithGold,
      volatilityReduction,
      avgReturnWithoutGold,
      avgReturnWithGold,
      sharpeWithoutGold,
      sharpeWithGold,
      maxDrawdownWithoutGold,
      maxDrawdownWithGold,
      backtestGrowth,
      backtestFinalWithoutGold,
      backtestFinalWithGold,
      stocksAllocation,
    };
  }, [
    currentSavings,
    goldAllocation,
    yearsToRetirement,
    expectedStockReturn,
    expectedGoldReturn,
    inflationRate,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#B22234]/10 text-[#B22234] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#B22234]/30">
          <Calculator className="h-4 w-4" />
          Gold IRA Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Gold IRA Investment Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          See how adding gold to your retirement portfolio could protect and grow
          your savings. Compare projections with real historical data.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Portfolio Inputs */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <DollarSign className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Your Retirement Portfolio</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Retirement Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Gold Allocation:{" "}
                  <span className="text-[#B22234] font-bold">{goldAllocation}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="25"
                  value={goldAllocation}
                  onChange={(e) => setGoldAllocation(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5% (Conservative)</span>
                  <span>15% (Moderate)</span>
                  <span>25% (Aggressive)</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Years to Retirement: {yearsToRetirement}
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={yearsToRetirement}
                  onChange={(e) => setYearsToRetirement(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>
            </div>
          </div>

          {/* Return Assumptions */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Return Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Stock Return: {expectedStockReturn}%
                </label>
                <input
                  type="range"
                  min="4"
                  max="12"
                  step="0.5"
                  value={expectedStockReturn}
                  onChange={(e) => setExpectedStockReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>4%</span>
                  <span>Historical avg ~7%</span>
                  <span>12%</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Gold Return: {expectedGoldReturn}%
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={expectedGoldReturn}
                  onChange={(e) => setExpectedGoldReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>2%</span>
                  <span>Historical avg ~5%</span>
                  <span>10%</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Inflation Rate: {inflationRate}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Side-by-Side Comparison */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">
                Projected Portfolio in {yearsToRetirement} Years
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Without Gold */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                  <TrendingDown className="h-4 w-4" />
                  100% Stocks
                </div>
                <div className="text-2xl font-bold text-[#000080] mb-1">
                  {formatCurrency(calculations.futureValueWithoutGold)}
                </div>
                <div className="text-sm text-slate-500">
                  Real value: {formatCurrency(calculations.realValueWithoutGold)}
                </div>
              </div>

              {/* With Gold */}
              <div className="bg-[#B22234]/10 rounded-xl p-4 border border-[#B22234]/30">
                <div className="flex items-center gap-2 text-[#B22234] text-sm mb-2">
                  <Shield className="h-4 w-4" />
                  {calculations.stocksAllocation}% Stocks + {goldAllocation}% Gold
                </div>
                <div className="text-2xl font-bold text-[#000080] mb-1">
                  {formatCurrency(calculations.futureValueWithGold)}
                </div>
                <div className="text-sm text-slate-500">
                  Real value: {formatCurrency(calculations.realValueWithGold)}
                </div>
              </div>
            </div>

            {/* Difference indicator */}
            <div
              className={`text-center p-3 rounded-lg ${
                calculations.difference >= 0
                  ? "bg-green-500/10 border border-green-500/30"
                  : "bg-[#B22234]/10 border border-[#B22234]/30"
              }`}
            >
              <div className="text-sm text-slate-500 mb-1">
                {calculations.difference >= 0
                  ? "With gold, you could have"
                  : "Trade-off for stability"}
              </div>
              <div
                className={`text-xl font-bold ${
                  calculations.difference >= 0 ? "text-green-600" : "text-[#B22234]"
                }`}
              >
                {calculations.difference >= 0 ? "+" : ""}
                {formatFullCurrency(calculations.difference)}
              </div>
            </div>
          </div>

          {/* Volatility & Risk Metrics */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Shield className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">
                Risk Analysis (Based on 2000-2024 Data)
              </h3>
            </div>

            <div className="space-y-4">
              {/* Volatility Reduction */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <div>
                  <div className="text-slate-600 text-sm">Volatility (Std Dev)</div>
                  <div className="text-xs text-slate-500">Lower is smoother ride</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500 line-through text-sm">
                    {calculations.volatilityWithoutGold.toFixed(1)}%
                  </div>
                  <div className="text-green-600 font-semibold">
                    {calculations.volatilityWithGold.toFixed(1)}%{" "}
                    <span className="text-xs">
                      (-{calculations.volatilityReduction.toFixed(0)}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Max Drawdown */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <div>
                  <div className="text-slate-600 text-sm">Max Drawdown</div>
                  <div className="text-xs text-slate-500">Worst peak-to-trough loss</div>
                </div>
                <div className="text-right">
                  <div className="text-red-600 line-through text-sm">
                    -{calculations.maxDrawdownWithoutGold.toFixed(1)}%
                  </div>
                  <div className="text-green-600 font-semibold">
                    -{calculations.maxDrawdownWithGold.toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Sharpe Ratio */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <div>
                  <div className="text-slate-600 text-sm">Sharpe Ratio</div>
                  <div className="text-xs text-slate-500">
                    Risk-adjusted returns (higher is better)
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-slate-600 text-sm">
                    {calculations.sharpeWithoutGold.toFixed(2)}
                  </div>
                  <div
                    className={`font-semibold ${
                      calculations.sharpeWithGold >= calculations.sharpeWithoutGold
                        ? "text-green-600"
                        : "text-[#B22234]"
                    }`}
                  >
                    {calculations.sharpeWithGold.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Average Return */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-slate-600 text-sm">Avg Annual Return</div>
                  <div className="text-xs text-slate-500">Historical 2000-2024</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-600 text-sm">
                    {calculations.avgReturnWithoutGold.toFixed(1)}%
                  </div>
                  <div className="text-slate-900 font-semibold">
                    {calculations.avgReturnWithGold.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Backtest */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <LineChart className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold">Historical Backtest (2000-2024)</h3>
            </div>

            <div className="mb-4 p-4 bg-slate-50 rounded-lg">
              <div className="text-sm text-slate-500 mb-2">
                If you invested {formatFullCurrency(currentSavings)} in 2000:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">100% Stocks</div>
                  <div className="text-lg font-bold text-slate-900">
                    {formatCurrency(calculations.backtestFinalWithoutGold)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#B22234] mb-1">
                    {calculations.stocksAllocation}% Stocks + {goldAllocation}% Gold
                  </div>
                  <div className="text-lg font-bold text-[#B22234]">
                    {formatCurrency(calculations.backtestFinalWithGold)}
                  </div>
                </div>
              </div>
            </div>

            {/* Simple bar chart representation */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-20 text-xs text-slate-500">2008 Crisis</div>
                <div className="flex-1 flex gap-1">
                  <div
                    className="h-4 bg-red-500 rounded"
                    style={{
                      width: `${Math.abs(historicalData.stocks[8]) * 1.5}%`,
                    }}
                  />
                  <div className="text-xs text-red-600">-37%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 text-xs text-slate-500">Gold 2008</div>
                <div className="flex-1 flex gap-1">
                  <div
                    className="h-4 bg-amber-500 rounded"
                    style={{
                      width: `${Math.abs(historicalData.gold[8]) * 1.5}%`,
                    }}
                  />
                  <div className="text-xs text-[#B22234]">+5.5%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 text-xs text-slate-500">2022 Drop</div>
                <div className="flex-1 flex gap-1">
                  <div
                    className="h-4 bg-red-500 rounded"
                    style={{
                      width: `${Math.abs(historicalData.stocks[22]) * 1.5}%`,
                    }}
                  />
                  <div className="text-xs text-red-600">-18%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 text-xs text-slate-500">Gold 2022</div>
                <div className="flex-1 flex gap-1">
                  <div
                    className="h-4 bg-slate-600 rounded"
                    style={{ width: "2%" }}
                  />
                  <div className="text-xs text-slate-500">-0.3%</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-600">
                  During the 2008 crisis, a {goldAllocation}% gold allocation would have
                  reduced losses by approximately{" "}
                  <span className="text-green-600 font-semibold">
                    {(
                      (37 - (37 * (100 - goldAllocation) - 5.5 * goldAllocation) / 100) *
                      (goldAllocation / 100)
                    ).toFixed(0)}
                    %
                  </span>{" "}
                  compared to a pure stock portfolio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Augusta CTA */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">See How Gold Could Protect Your Retirement</h2>
          </div>
          <p className="text-slate-500 mb-6 max-w-2xl">
            The numbers above show how gold can act as a &quot;bridge&quot; during market
            volatility - providing stability when stocks decline. Augusta Precious Metals
            can help you understand if a Gold IRA is right for your situation.
          </p>
          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="gold-ira-calculator"
            subheadline="Learn how gold could protect your retirement savings. No pressure, no pushy sales - just education from the #1 rated Gold IRA company."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Gold IRA Investments</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              What is a Gold IRA?
            </h3>
            <p className="text-slate-500 mb-4">
              A Gold IRA (Individual Retirement Account) is a self-directed retirement
              account that allows you to hold physical gold, silver, platinum, or palladium
              as part of your retirement savings. Unlike traditional IRAs that hold paper
              assets like stocks and bonds, a Gold IRA holds actual precious metals stored
              in an IRS-approved depository.
            </p>
            <p className="text-slate-500">
              Gold IRAs offer the same tax advantages as traditional IRAs - contributions
              may be tax-deductible, and growth is tax-deferred until withdrawal. You can
              also do a tax-free rollover from an existing 401(k) or IRA.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[#B22234]" />
              Why Consider Gold in Your Portfolio?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-green-600 font-semibold mb-2">
                  Potential Benefits
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Portfolio diversification beyond paper assets
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Historically negative correlation with stocks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Hedge against inflation and currency devaluation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Physical asset with intrinsic value
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-[#B22234] font-semibold mb-2">
                  Important Considerations
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                    Gold doesn&apos;t pay dividends or interest
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                    Storage and insurance fees apply
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                    May underperform stocks in bull markets
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#B22234] flex-shrink-0 mt-0.5" />
                    Not FDIC insured (but physically secured)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Percent className="h-5 w-5 text-purple-700" />
              How Much Gold Should You Own?
            </h3>
            <p className="text-slate-500 mb-4">
              Financial advisors typically recommend allocating between 5% to 25% of your
              portfolio to gold, depending on your risk tolerance and investment goals.
              Here&apos;s a general guideline:
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-100 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">5-10%</div>
                <div className="text-xs text-slate-500">Conservative</div>
                <div className="text-xs text-slate-500 mt-1">
                  Basic diversification
                </div>
              </div>
              <div className="bg-[#B22234]/10 rounded-lg p-4 text-center border border-[#B22234]/30">
                <div className="text-2xl font-bold text-[#B22234] mb-1">10-15%</div>
                <div className="text-xs text-slate-500">Moderate</div>
                <div className="text-xs text-slate-500 mt-1">
                  Balanced protection
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-700 mb-1">15-25%</div>
                <div className="text-xs text-slate-500">Aggressive</div>
                <div className="text-xs text-slate-500 mt-1">
                  Max crisis protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-center text-slate-500 text-sm">
          * This calculator is for educational purposes only. Historical performance does
          not guarantee future results. Gold prices can be volatile and may decrease in
          value. Please consult with a qualified financial advisor before making
          investment decisions.
        </p>
      </div>
    </Container>
  );
}
