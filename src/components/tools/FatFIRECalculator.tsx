"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Crown,
  DollarSign,
  Calendar,
  TrendingUp,
  Shield,
  Sparkles,
  Home,
  Plane,
  Car,
  UtensilsCrossed,
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

export function FatFIRECalculator() {
  // Inputs
  const [annualSpending, setAnnualSpending] = useState<number>(200000);
  const [currentSavings, setCurrentSavings] = useState<number>(500000);
  const [currentAge, setCurrentAge] = useState<number>(40);
  const [targetAge, setTargetAge] = useState<number>(50);
  const [currentIncome, setCurrentIncome] = useState<number>(250000);
  const [savingsRate, setSavingsRate] = useState<number>(40);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(3.5);

  // Calculations
  const calculations = useMemo(() => {
    const yearsToFIRE = Math.max(0, targetAge - currentAge);

    // Fat FIRE number (using conservative withdrawal rate for luxury spending)
    const fatFIREnumber = annualSpending * (100 / withdrawalRate);

    // Amount still needed
    const amountNeeded = Math.max(0, fatFIREnumber - currentSavings);

    // Annual savings based on income and rate
    const annualSavings = (currentIncome * savingsRate) / 100;

    // Future value calculation with annual contributions
    let projectedSavings = currentSavings;
    for (let i = 0; i < yearsToFIRE; i++) {
      projectedSavings = (projectedSavings + annualSavings) * (1 + expectedReturn / 100);
    }

    // Progress percentage
    const progressPercent = Math.min(100, (currentSavings / fatFIREnumber) * 100);

    // Will reach goal?
    const willReachGoal = projectedSavings >= fatFIREnumber;

    // Monthly savings needed to reach goal
    let monthlySavingsNeeded = 0;
    if (!willReachGoal && yearsToFIRE > 0) {
      // Using future value of annuity formula to solve for payment
      const r = expectedReturn / 100;
      const n = yearsToFIRE;

      // Simplified calculation
      const totalNeeded = fatFIREnumber - (currentSavings * Math.pow(1 + r, n));
      const fvFactor = (Math.pow(1 + r, n) - 1) / r;
      monthlySavingsNeeded = (totalNeeded / fvFactor) / 12;
    }

    // Luxury budget breakdown (percentages)
    const luxuryBreakdown = {
      housing: annualSpending * 0.30,
      travel: annualSpending * 0.20,
      dining: annualSpending * 0.15,
      vehicles: annualSpending * 0.10,
      entertainment: annualSpending * 0.10,
      other: annualSpending * 0.15,
    };

    return {
      fatFIREnumber,
      amountNeeded,
      annualSavings,
      projectedSavings,
      progressPercent,
      willReachGoal,
      monthlySavingsNeeded,
      yearsToFIRE,
      luxuryBreakdown,
    };
  }, [
    annualSpending,
    currentSavings,
    currentAge,
    targetAge,
    currentIncome,
    savingsRate,
    expectedReturn,
    withdrawalRate,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#B22234]/10 text-[#B22234] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#B22234]/30">
          <Crown className="h-4 w-4" />
          Luxury FIRE Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
          Fat FIRE Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Plan for a luxurious early retirement without lifestyle compromises. Calculate what you need to live your dream life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Lifestyle Spending */}
          <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-6 border border-[#B22234]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <Sparkles className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Desired Lifestyle</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Annual Spending (Luxury Lifestyle)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualSpending}
                    onChange={(e) => setAnnualSpending(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-[#B22234]/30 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                    min="0"
                    step="10000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Monthly: {formatFullCurrency(annualSpending / 12)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Withdrawal Rate: {withdrawalRate}%
                </label>
                <input
                  type="range"
                  min="2"
                  max="4"
                  step="0.25"
                  value={withdrawalRate}
                  onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative (2%)</span>
                  <span>Standard (4%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Financial Situation */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Current Situation</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                    min="0"
                    step="50000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Annual Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={currentIncome}
                    onChange={(e) => setCurrentIncome(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-[#B22234]"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Savings Rate: {savingsRate}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={savingsRate}
                  onChange={(e) => setSavingsRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Annual savings: {formatFullCurrency(calculations.annualSavings)}
                </p>
              </div>
            </div>
          </div>

          {/* Age & Timeline */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Timeline</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="18"
                  max="60"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Target Fat FIRE Age: {targetAge}
                </label>
                <input
                  type="range"
                  min={currentAge}
                  max="70"
                  value={targetAge}
                  onChange={(e) => setTargetAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Years to FIRE: {calculations.yearsToFIRE}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Fat FIRE Number */}
          <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="h-10 w-10 text-[#B22234]" />
              <div>
                <h3 className="text-sm text-slate-500">Your Fat FIRE Number</h3>
                <div className="text-4xl font-bold text-[#B22234]">
                  {formatCurrency(calculations.fatFIREnumber)}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#B22234]/30">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to Goal</span>
                <span className="font-semibold">{calculations.progressPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-[#B22234] transition-all duration-500"
                  style={{ width: `${Math.min(100, calculations.progressPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Projection */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Projection
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500">Current Savings</span>
                <span className="text-xl font-bold">
                  {formatCurrency(currentSavings)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500">Projected at Age {targetAge}</span>
                <span className="text-xl font-bold text-green-600">
                  {formatCurrency(calculations.projectedSavings)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500">Amount Needed</span>
                <span className="text-xl font-bold text-orange-400">
                  {formatCurrency(calculations.amountNeeded)}
                </span>
              </div>

              <div className={`p-4 rounded-lg ${
                calculations.willReachGoal
                  ? 'bg-green-500/20 border border-green-500/30'
                  : 'bg-orange-500/20 border border-orange-500/30'
              }`}>
                <div className="text-sm font-semibold mb-1">
                  {calculations.willReachGoal ? 'On Track!' : 'Adjustment Needed'}
                </div>
                <div className="text-xs text-slate-600">
                  {calculations.willReachGoal
                    ? `You're projected to exceed your Fat FIRE goal by age ${targetAge}`
                    : `Save ${formatFullCurrency(calculations.monthlySavingsNeeded)}/month to reach your goal`}
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle Breakdown */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-700" />
              Luxury Budget Breakdown
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-slate-500">Housing (30%)</span>
                </div>
                <span className="font-semibold text-blue-600">
                  {formatCurrency(calculations.luxuryBreakdown.housing)}/yr
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-purple-700" />
                  <span className="text-sm text-slate-500">Travel (20%)</span>
                </div>
                <span className="font-semibold text-purple-700">
                  {formatCurrency(calculations.luxuryBreakdown.travel)}/yr
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-slate-500">Dining (15%)</span>
                </div>
                <span className="font-semibold text-orange-400">
                  {formatCurrency(calculations.luxuryBreakdown.dining)}/yr
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-slate-500">Vehicles (10%)</span>
                </div>
                <span className="font-semibold text-green-600">
                  {formatCurrency(calculations.luxuryBreakdown.vehicles)}/yr
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Entertainment (10%)</span>
                <span className="font-semibold text-pink-400">
                  {formatCurrency(calculations.luxuryBreakdown.entertainment)}/yr
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Other (15%)</span>
                <span className="font-semibold text-slate-500">
                  {formatCurrency(calculations.luxuryBreakdown.other)}/yr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Gold for Fat FIRE Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protecting Your Luxury Lifestyle</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">Wealth Preservation</div>
              <p className="text-slate-600 text-sm">
                With millions at stake, protecting your wealth from currency devaluation is essential. Gold has preserved purchasing power for thousands of years.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Portfolio Stability</div>
              <p className="text-slate-600 text-sm">
                High net worth individuals need stability. Gold provides a hedge against market volatility that could derail your luxury retirement.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Multi-Generational Planning</div>
              <p className="text-slate-600 text-sm">
                Fat FIRE often includes legacy planning. Physical gold IRAs offer tax-advantaged wealth transfer to your heirs.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="fat-fire-calculator"
            subheadline="High net worth FIRE investors protect their wealth with Gold IRAs. Diversify beyond paper assets to safeguard your luxury lifestyle."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Fat FIRE</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is Fat FIRE?</h3>
            <p className="text-slate-500 mb-4">
              Fat FIRE is the luxury version of Financial Independence Retire Early. Instead of cutting expenses to the bone, Fat FIRE means saving enough to maintain or even upgrade your lifestyle in retirement. Think annual spending of $150,000-$300,000+ rather than the $40,000-$60,000 typical of standard FIRE.
            </p>
            <p className="text-slate-500">
              Fat FIRE requires a significantly larger nest egg - often $3-7 million+ - but provides the freedom to travel first class, own multiple properties, dine at fine restaurants, and pursue expensive hobbies without financial stress.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Who Pursues Fat FIRE?</h3>
            <ul className="space-y-2 text-slate-500">
              <li>• High earners in tech, finance, medicine, or law</li>
              <li>• Successful entrepreneurs who sold businesses</li>
              <li>• Dual-income households with aggressive savings rates</li>
              <li>• Anyone who values lifestyle quality over early retirement age</li>
            </ul>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">The Math</h3>
            <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm mb-4">
              Fat FIRE Number = Annual Spending × (100 ÷ Withdrawal Rate)
            </div>
            <p className="text-slate-500 mb-4">
              Fat FIRE often uses a more conservative withdrawal rate (3-3.5%) instead of the standard 4% rule, ensuring your portfolio can support higher spending through market downturns.
            </p>
            <p className="text-slate-500">
              Example: $200,000 annual spending ÷ 3.5% withdrawal rate = $5.7 million Fat FIRE number
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
