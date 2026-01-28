"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Flame,
  DollarSign,
  Calendar,
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
  Clock,
  Info,
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

export function FIRENumberCalculator() {
  // Inputs
  const [annualExpenses, setAnnualExpenses] = useState<number>(60000);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);
  const [currentSavings, setCurrentSavings] = useState<number>(200000);
  const [currentAge, setCurrentAge] = useState<number>(40);
  const [annualSavings, setAnnualSavings] = useState<number>(30000);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [inflationRate, setInflationRate] = useState<number>(3);

  // Calculations
  const calculations = useMemo(() => {
    // FIRE number (classic 25x rule or based on withdrawal rate)
    const fireNumber = annualExpenses * (100 / withdrawalRate);

    // Amount still needed
    const amountNeeded = Math.max(0, fireNumber - currentSavings);

    // Progress percentage
    const progressPercent = Math.min(100, (currentSavings / fireNumber) * 100);

    // Years to FIRE calculation with compound interest
    let yearsToFIRE = 0;
    if (amountNeeded > 0 && annualSavings > 0) {
      let balance = currentSavings;
      let years = 0;
      const returnRate = expectedReturn / 100;

      while (balance < fireNumber && years < 100) {
        balance = balance * (1 + returnRate) + annualSavings;
        years++;
      }
      yearsToFIRE = years;
    }

    // Age at FIRE
    const fireAge = currentAge + yearsToFIRE;

    // Has reached FIRE?
    const hasReachedFIRE = currentSavings >= fireNumber;

    // Annual passive income at FIRE number
    const annualPassiveIncome = fireNumber * (withdrawalRate / 100);
    const monthlyPassiveIncome = annualPassiveIncome / 12;

    // Inflation-adjusted FIRE number (what you'd need in today's dollars at FIRE age)
    const inflationAdjustedFIRE = fireNumber * Math.pow(1 + inflationRate / 100, yearsToFIRE);

    // Monthly savings needed to reach goal
    const monthlySavingsNeeded = annualSavings / 12;

    // FI Ratio (how many years of expenses you have saved)
    const fiRatio = currentSavings / annualExpenses;

    // Savings rate needed (if current isn't enough)
    const projectedBalance = currentSavings * Math.pow(1 + expectedReturn / 100, yearsToFIRE);
    const willReachGoal = projectedBalance + (annualSavings * yearsToFIRE) >= fireNumber;

    // Safe withdrawal amount from current savings
    const currentWithdrawal = currentSavings * (withdrawalRate / 100);

    return {
      fireNumber,
      amountNeeded,
      progressPercent,
      yearsToFIRE,
      fireAge,
      hasReachedFIRE,
      annualPassiveIncome,
      monthlyPassiveIncome,
      inflationAdjustedFIRE,
      monthlySavingsNeeded,
      fiRatio,
      willReachGoal,
      currentWithdrawal,
    };
  }, [
    annualExpenses,
    withdrawalRate,
    currentSavings,
    currentAge,
    annualSavings,
    expectedReturn,
    inflationRate,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
          <Flame className="h-4 w-4" />
          Financial Independence Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
          FIRE Number Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate your exact FIRE number and discover how long until you achieve financial independence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Annual Expenses */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <DollarSign className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold">Annual Expenses</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  How much do you spend per year?
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualExpenses}
                    onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-orange-500"
                    min="0"
                    step="5000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Monthly: {formatFullCurrency(annualExpenses / 12)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  Safe Withdrawal Rate: {withdrawalRate}%
                  <div className="group relative">
                    <Info className="h-4 w-4 text-slate-500 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-100 text-xs text-slate-600 rounded-lg p-3 border border-slate-700 z-10">
                      The 4% rule suggests you can withdraw 4% of your portfolio annually without running out of money. Conservative: 3-3.5%, Aggressive: 4-5%.
                    </div>
                  </div>
                </label>
                <input
                  type="range"
                  min="2"
                  max="6"
                  step="0.25"
                  value={withdrawalRate}
                  onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative (2%)</span>
                  <span>Standard (4%)</span>
                  <span>Aggressive (6%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Situation */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Your Current Situation</h3>
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
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-orange-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Annual Savings/Contributions
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={annualSavings}
                    onChange={(e) => setAnnualSavings(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-orange-500"
                    min="0"
                    step="5000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Monthly: {formatFullCurrency(annualSavings / 12)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="18"
                  max="70"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Assumptions */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <TrendingUp className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Investment Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Annual Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative</span>
                  <span>7% (Historical avg)</span>
                  <span>Aggressive</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Inflation: {inflationRate}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.25"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Your FIRE Number */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-10 w-10 text-orange-400" />
              <div>
                <h3 className="text-sm text-slate-500">Your FIRE Number</h3>
                <div className="text-4xl font-bold text-orange-400">
                  {formatCurrency(calculations.fireNumber)}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm bg-slate-50 rounded-lg p-4 mt-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Monthly Passive Income</span>
                <span className="font-semibold text-green-600">
                  {formatFullCurrency(calculations.monthlyPassiveIncome)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Annual Passive Income</span>
                <span className="font-semibold text-green-600">
                  {formatFullCurrency(calculations.annualPassiveIncome)}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-orange-500/30">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to FIRE</span>
                <span className="font-semibold">{calculations.progressPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                  style={{ width: `${Math.min(100, calculations.progressPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className={`rounded-xl p-6 border ${
            calculations.hasReachedFIRE
              ? 'bg-green-500/20 border-green-500/30'
              : calculations.willReachGoal
              ? 'bg-blue-500/20 border-blue-500/30'
              : 'bg-[#B22234]/10 border-[#B22234]/30'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {calculations.hasReachedFIRE ? (
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              ) : (
                <Clock className="h-8 w-8 text-blue-600" />
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {calculations.hasReachedFIRE
                    ? "You've Reached FIRE!"
                    : `${calculations.yearsToFIRE.toFixed(1)} Years to FIRE`}
                </h3>
                <p className="text-sm text-slate-600">
                  {calculations.hasReachedFIRE
                    ? "You're financially independent"
                    : `You'll reach FIRE at age ${Math.round(calculations.fireAge)}`}
                </p>
              </div>
            </div>

            {!calculations.hasReachedFIRE && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="text-sm text-slate-500 mb-1">Still needed</div>
                <div className="text-2xl font-bold text-orange-400">
                  {formatCurrency(calculations.amountNeeded)}
                </div>
              </div>
            )}
          </div>

          {/* Key Metrics */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-[#B22234]" />
              Key Metrics
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500">FI Ratio</span>
                <span className="text-xl font-bold text-purple-400">
                  {calculations.fiRatio.toFixed(1)}x
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500">Current Annual Withdrawal</span>
                <span className="text-xl font-bold text-blue-600">
                  {formatCurrency(calculations.currentWithdrawal)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500">Inflation-Adjusted FIRE</span>
                <span className="text-xl font-bold text-orange-400">
                  {formatCurrency(calculations.inflationAdjustedFIRE)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">Monthly Savings</span>
                <span className="text-xl font-bold text-green-600">
                  {formatCurrency(calculations.monthlySavingsNeeded)}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Breakdown */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Timeline Breakdown
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Current Age</span>
                <span className="font-semibold">{currentAge} years</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">FIRE Age</span>
                <span className="font-semibold text-orange-400">
                  {Math.round(calculations.fireAge)} years
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">Years to Freedom</span>
                <span className="font-semibold text-blue-600">
                  {calculations.hasReachedFIRE ? "0" : calculations.yearsToFIRE.toFixed(1)}
                </span>
              </div>

              {!calculations.hasReachedFIRE && (
                <div className="mt-4 pt-4 border-t border-slate-200 bg-blue-500/10 rounded-lg p-3">
                  <div className="text-xs text-slate-500 mb-1">Target Date</div>
                  <div className="text-lg font-bold text-blue-600">
                    {new Date().getFullYear() + Math.round(calculations.yearsToFIRE)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Why Gold for FIRE Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protecting Your FIRE Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">30+ Year Horizon</div>
              <p className="text-slate-600 text-sm">
                FIRE means your portfolio needs to last 30-50+ years. Gold has preserved wealth for thousands of years through every economic crisis.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Sequence of Returns Risk</div>
              <p className="text-slate-600 text-sm">
                A market crash right after you FIRE can devastate your plan. Gold often rises when stocks fall, protecting your withdrawal strategy.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">True Diversification</div>
              <p className="text-slate-600 text-sm">
                Most FIRE portfolios are 100% paper assets (stocks/bonds). Physical gold adds real diversification beyond correlated financial instruments.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="fire-number-calculator"
            subheadline="FIRE investors protect their nest egg from inflation with Gold IRAs. Unlike paper assets, gold maintains purchasing power over decades of early retirement."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Your FIRE Number</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is a FIRE Number?</h3>
            <p className="text-slate-500 mb-4">
              Your FIRE number is the amount of money you need invested to live off the returns indefinitely without working. It's the magic number that gives you complete financial independence.
            </p>
            <p className="text-slate-500">
              The concept is based on the 4% rule from the Trinity Study, which found that withdrawing 4% of your portfolio annually (adjusted for inflation) has historically allowed retirees to avoid running out of money over 30+ years.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">The 25x Rule</h3>
            <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm mb-4">
              FIRE Number = Annual Expenses × 25
            </div>
            <p className="text-slate-500 mb-4">
              This is the inverse of the 4% rule. If you withdraw 4% per year, you need 25 times your annual expenses saved.
            </p>
            <p className="text-slate-500">
              Example: If you spend $50,000/year, your FIRE number is $50,000 × 25 = $1,250,000. At 4% withdrawal, this gives you exactly $50,000 annually.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Adjusting for Your Situation</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Longer retirement:</strong> Use 3-3.5% withdrawal rate (28-33x expenses)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Side income:</strong> You can use higher withdrawal rates if you have backup income</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Variable spending:</strong> Plan to reduce spending in market downturns</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Geographic flexibility:</strong> Ability to relocate can reduce your FIRE number significantly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
