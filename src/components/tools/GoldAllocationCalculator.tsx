"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Target,
  DollarSign,
  Calendar,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Info,
  PieChart,
  Scale,
  Flame,
  Coins,
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

type RiskTolerance = "conservative" | "moderate" | "aggressive";
type InvestmentGoal = "preservation" | "balanced" | "growth";

interface AllocationResult {
  goldPercentage: number;
  stocksPercentage: number;
  bondsPercentage: number;
  cashPercentage: number;
  explanation: string[];
  riskLevel: string;
}

export function GoldAllocationCalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(55);
  const [yearsToRetirement, setYearsToRetirement] = useState<number>(10);
  const [riskTolerance, setRiskTolerance] = useState<RiskTolerance>("moderate");
  const [portfolioValue, setPortfolioValue] = useState<number>(500000);
  const [investmentGoal, setInvestmentGoal] = useState<InvestmentGoal>("balanced");
  const [inflationConcern, setInflationConcern] = useState<number>(6);
  const [crashConcern, setCrashConcern] = useState<number>(7);

  // Calculations
  const calculations = useMemo((): AllocationResult => {
    // Base gold allocation based on risk tolerance
    let baseGold = 0;
    switch (riskTolerance) {
      case "conservative":
        baseGold = 12;
        break;
      case "moderate":
        baseGold = 10;
        break;
      case "aggressive":
        baseGold = 7;
        break;
    }

    // Adjust for age (older = more gold for protection)
    const ageAdjustment = Math.max(0, Math.min(3, (currentAge - 50) * 0.15));

    // Adjust for years to retirement (closer = more gold)
    const retirementAdjustment = Math.max(0, Math.min(2, (15 - yearsToRetirement) * 0.2));

    // Adjust for investment goal
    let goalAdjustment = 0;
    switch (investmentGoal) {
      case "preservation":
        goalAdjustment = 3;
        break;
      case "balanced":
        goalAdjustment = 0;
        break;
      case "growth":
        goalAdjustment = -2;
        break;
    }

    // Adjust for inflation concern (higher concern = more gold)
    const inflationAdjustment = (inflationConcern - 5) * 0.4;

    // Adjust for crash concern (higher concern = more gold)
    const crashAdjustment = (crashConcern - 5) * 0.3;

    // Calculate final gold percentage (capped between 5-20%)
    let goldPercentage = baseGold + ageAdjustment + retirementAdjustment + goalAdjustment + inflationAdjustment + crashAdjustment;
    goldPercentage = Math.max(5, Math.min(20, goldPercentage));
    goldPercentage = Math.round(goldPercentage * 10) / 10;

    // Calculate other allocations based on risk tolerance and age
    let stocksBase = 0;
    let bondsBase = 0;

    // Classic age-based rule with risk adjustment
    const baseStocks = Math.max(20, 110 - currentAge);

    switch (riskTolerance) {
      case "conservative":
        stocksBase = baseStocks - 15;
        break;
      case "moderate":
        stocksBase = baseStocks;
        break;
      case "aggressive":
        stocksBase = baseStocks + 10;
        break;
    }

    // Remaining allocation
    const remaining = 100 - goldPercentage;
    const stocksPercentage = Math.round(Math.min(stocksBase, remaining * 0.7));
    const bondsPercentage = Math.round((remaining - stocksPercentage) * 0.85);
    const cashPercentage = Math.round(remaining - stocksPercentage - bondsPercentage);

    // Generate explanation
    const explanation: string[] = [];

    if (currentAge >= 60) {
      explanation.push("Your age suggests prioritizing capital preservation with a higher gold allocation.");
    } else if (currentAge >= 50) {
      explanation.push("Approaching retirement age, a moderate gold allocation provides protection while maintaining growth potential.");
    } else {
      explanation.push("With more years until retirement, you can balance growth with strategic gold exposure.");
    }

    if (yearsToRetirement <= 5) {
      explanation.push("With retirement approaching, gold helps protect against sequence-of-returns risk.");
    } else if (yearsToRetirement <= 10) {
      explanation.push("A decade until retirement calls for balanced protection and growth opportunities.");
    }

    if (inflationConcern >= 7) {
      explanation.push("Your high inflation concern supports a larger gold allocation, as gold historically preserves purchasing power.");
    }

    if (crashConcern >= 7) {
      explanation.push("Gold's low correlation to stocks provides portfolio insurance during market downturns.");
    }

    if (investmentGoal === "preservation") {
      explanation.push("Your wealth preservation focus aligns well with gold's store-of-value characteristics.");
    } else if (investmentGoal === "growth") {
      explanation.push("While focused on growth, a strategic gold position provides diversification benefits.");
    }

    // Risk level description
    let riskLevel = "";
    if (goldPercentage >= 15) {
      riskLevel = "Conservative-Defensive";
    } else if (goldPercentage >= 10) {
      riskLevel = "Balanced-Protective";
    } else {
      riskLevel = "Growth-Oriented";
    }

    return {
      goldPercentage,
      stocksPercentage,
      bondsPercentage,
      cashPercentage,
      explanation,
      riskLevel,
    };
  }, [currentAge, yearsToRetirement, riskTolerance, portfolioValue, investmentGoal, inflationConcern, crashConcern]);

  // Famous portfolio comparisons
  const rayDalioAllWeather = { gold: 7.5, stocks: 30, bonds: 55, cash: 7.5 };
  const harryBrownePermanent = { gold: 25, stocks: 25, bonds: 25, cash: 25 };

  // Calculate dollar amounts
  const goldAmount = portfolioValue * (calculations.goldPercentage / 100);
  const stocksAmount = portfolioValue * (calculations.stocksPercentage / 100);
  const bondsAmount = portfolioValue * (calculations.bondsPercentage / 100);
  const cashAmount = portfolioValue * (calculations.cashPercentage / 100);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#B22234]/10 text-[#B22234] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#B22234]/30">
          <Coins className="h-4 w-4" />
          Portfolio Optimization Tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
          Gold Allocation Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate your optimal gold percentage based on your age, risk tolerance, and investment goals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="25"
                  max="80"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>25</span>
                  <span>50</span>
                  <span>80</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Years to Retirement: {yearsToRetirement}
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={yearsToRetirement}
                  onChange={(e) => setYearsToRetirement(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Retiring Now</span>
                  <span>20 years</span>
                  <span>40 years</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Portfolio Value
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
          </div>

          {/* Risk Tolerance */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Scale className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Risk Tolerance</h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {(["conservative", "moderate", "aggressive"] as RiskTolerance[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setRiskTolerance(level)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-all capitalize ${
                    riskTolerance === level
                      ? "bg-[#B22234] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              {riskTolerance === "conservative" && "Prioritize capital preservation over growth"}
              {riskTolerance === "moderate" && "Balance between growth and protection"}
              {riskTolerance === "aggressive" && "Prioritize growth with higher volatility tolerance"}
            </p>
          </div>

          {/* Investment Goal */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Investment Goal</h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setInvestmentGoal("preservation")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all flex flex-col items-center gap-1 ${
                  investmentGoal === "preservation"
                    ? "bg-[#B22234] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Shield className="h-4 w-4" />
                Preservation
              </button>
              <button
                onClick={() => setInvestmentGoal("balanced")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all flex flex-col items-center gap-1 ${
                  investmentGoal === "balanced"
                    ? "bg-[#B22234] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Scale className="h-4 w-4" />
                Balanced
              </button>
              <button
                onClick={() => setInvestmentGoal("growth")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all flex flex-col items-center gap-1 ${
                  investmentGoal === "growth"
                    ? "bg-[#B22234] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                Growth
              </button>
            </div>
          </div>

          {/* Concern Levels */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-lg border border-red-500/30">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold">Concern Levels</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-400" />
                  Inflation Concern: {inflationConcern}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={inflationConcern}
                  onChange={(e) => setInflationConcern(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Low Concern</span>
                  <span>High Concern</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
                  Market Crash Concern: {crashConcern}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={crashConcern}
                  onChange={(e) => setCrashConcern(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Low Concern</span>
                  <span>High Concern</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Your Recommended Allocation */}
          <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
            <div className="flex items-center gap-3 mb-4">
              <Coins className="h-10 w-10 text-[#B22234]" />
              <div>
                <h3 className="text-sm text-slate-500">Recommended Gold Allocation</h3>
                <div className="text-4xl font-bold text-[#B22234]">
                  {calculations.goldPercentage}%
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm bg-slate-50 rounded-lg p-4 mt-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Gold Value</span>
                <span className="font-semibold text-[#B22234]">
                  {formatFullCurrency(goldAmount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Risk Profile</span>
                <span className="font-semibold text-slate-900">
                  {calculations.riskLevel}
                </span>
              </div>
            </div>
          </div>

          {/* Pie Chart Visualization */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <PieChart className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Portfolio Breakdown</h3>
            </div>

            <div className="flex items-center justify-center mb-6">
              {/* CSS Pie Chart */}
              <div
                className="relative w-48 h-48 rounded-full"
                style={{
                  background: `conic-gradient(
                    #f59e0b 0% ${calculations.goldPercentage}%,
                    #3b82f6 ${calculations.goldPercentage}% ${calculations.goldPercentage + calculations.stocksPercentage}%,
                    #10b981 ${calculations.goldPercentage + calculations.stocksPercentage}% ${calculations.goldPercentage + calculations.stocksPercentage + calculations.bondsPercentage}%,
                    #6b7280 ${calculations.goldPercentage + calculations.stocksPercentage + calculations.bondsPercentage}% 100%
                  )`,
                }}
              >
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#B22234]">{calculations.goldPercentage}%</div>
                    <div className="text-xs text-slate-500">Gold</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-3">
                <div className="w-4 h-4 rounded bg-amber-500" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#B22234]">Gold {calculations.goldPercentage}%</div>
                  <div className="text-xs text-slate-500">{formatCurrency(goldAmount)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-3">
                <div className="w-4 h-4 rounded bg-blue-500" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-blue-600">Stocks {calculations.stocksPercentage}%</div>
                  <div className="text-xs text-slate-500">{formatCurrency(stocksAmount)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-3">
                <div className="w-4 h-4 rounded bg-emerald-500" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-emerald-400">Bonds {calculations.bondsPercentage}%</div>
                  <div className="text-xs text-slate-500">{formatCurrency(bondsAmount)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-3">
                <div className="w-4 h-4 rounded bg-gray-500" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-400">Cash {calculations.cashPercentage}%</div>
                  <div className="text-xs text-slate-500">{formatCurrency(cashAmount)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Why This Allocation?</h3>
            </div>

            <ul className="space-y-3">
              {calculations.explanation.map((reason, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison with Famous Portfolios */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-5 w-5 text-purple-700" />
              <h3 className="text-lg font-semibold">Compare to Famous Portfolios</h3>
            </div>

            <div className="space-y-4">
              {/* Ray Dalio */}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">Ray Dalio&apos;s All-Weather</h4>
                    <p className="text-xs text-slate-500">Designed to perform in any economic environment</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#B22234]">{rayDalioAllWeather.gold}%</div>
                    <div className="text-xs text-slate-500">Gold</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-500" style={{ width: `${rayDalioAllWeather.gold}%` }} />
                    <div className="h-full bg-blue-500" style={{ width: `${rayDalioAllWeather.stocks}%` }} />
                    <div className="h-full bg-emerald-500" style={{ width: `${rayDalioAllWeather.bonds}%` }} />
                    <div className="h-full bg-gray-500" style={{ width: `${rayDalioAllWeather.cash}%` }} />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Your gold: {calculations.goldPercentage}%</span>
                  <span className={calculations.goldPercentage >= rayDalioAllWeather.gold ? "text-green-600" : "text-[#B22234]"}>
                    {calculations.goldPercentage >= rayDalioAllWeather.gold
                      ? `+${(calculations.goldPercentage - rayDalioAllWeather.gold).toFixed(1)}% more`
                      : `${(rayDalioAllWeather.gold - calculations.goldPercentage).toFixed(1)}% less`}
                  </span>
                </div>
              </div>

              {/* Harry Browne */}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">Harry Browne&apos;s Permanent Portfolio</h4>
                    <p className="text-xs text-slate-500">Equal parts for maximum crisis protection</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#B22234]">{harryBrownePermanent.gold}%</div>
                    <div className="text-xs text-slate-500">Gold</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-500" style={{ width: `${harryBrownePermanent.gold}%` }} />
                    <div className="h-full bg-blue-500" style={{ width: `${harryBrownePermanent.stocks}%` }} />
                    <div className="h-full bg-emerald-500" style={{ width: `${harryBrownePermanent.bonds}%` }} />
                    <div className="h-full bg-gray-500" style={{ width: `${harryBrownePermanent.cash}%` }} />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Your gold: {calculations.goldPercentage}%</span>
                  <span className={calculations.goldPercentage >= harryBrownePermanent.gold ? "text-green-600" : "text-[#B22234]"}>
                    {calculations.goldPercentage >= harryBrownePermanent.gold
                      ? `+${(calculations.goldPercentage - harryBrownePermanent.gold).toFixed(1)}% more`
                      : `${(harryBrownePermanent.gold - calculations.goldPercentage).toFixed(1)}% less`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Get Your Personalized Gold Allocation</h2>
          </div>

          <p className="text-slate-500 mb-6">
            While this calculator provides general guidance, your optimal gold allocation depends on your complete financial picture.
            Speak with a Gold IRA specialist who can analyze your specific situation and help you implement the right strategy.
          </p>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="gold-allocation-calculator"
            subheadline="Get your personalized gold allocation - speak with an expert who can analyze your complete retirement picture and recommend the right strategy for your goals."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Gold Allocation</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Why Include Gold in Your Portfolio?</h3>
            <p className="text-slate-500 mb-4">
              Gold serves multiple purposes in a retirement portfolio: it acts as a hedge against inflation,
              provides protection during market crashes, and offers true diversification since it&apos;s not correlated
              with stocks or bonds.
            </p>
            <p className="text-slate-500">
              Most financial experts recommend holding 5-15% of your portfolio in gold, though this varies based
              on individual circumstances. The key is finding the right balance for your specific situation.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Factors Affecting Optimal Allocation</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Age:</strong> Closer to retirement typically warrants more protection</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Risk Tolerance:</strong> Conservative investors may prefer higher gold allocations</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Economic Outlook:</strong> Concerns about inflation or market volatility support higher gold exposure</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Other Assets:</strong> Real estate, pensions, and Social Security affect how much portfolio protection you need</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Historical Performance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#B22234] mb-2">During 2008 Financial Crisis</h4>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>S&P 500: -37%</li>
                  <li>Gold: +5.5%</li>
                  <li>Bonds: +5.2%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#B22234] mb-2">During 2020 COVID Crash</h4>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>S&P 500: -34% (Feb-Mar)</li>
                  <li>Gold: +3.5% (Feb-Mar)</li>
                  <li>Full Year Gold: +25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
