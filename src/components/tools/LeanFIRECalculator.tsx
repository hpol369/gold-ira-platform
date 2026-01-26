"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  Leaf,
  DollarSign,
  Target,
  Shield,
  CheckCircle2,
  Home,
  ShoppingCart,
  Utensils,
  Zap,
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

export function LeanFIRECalculator() {
  // Inputs
  const [monthlyHousing, setMonthlyHousing] = useState<number>(800);
  const [monthlyFood, setMonthlyFood] = useState<number>(400);
  const [monthlyUtilities, setMonthlyUtilities] = useState<number>(150);
  const [monthlyOther, setMonthlyOther] = useState<number>(450);
  const [currentSavings, setCurrentSavings] = useState<number>(150000);
  const [monthlySavings, setMonthlySavings] = useState<number>(2000);
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

  // Calculations
  const calculations = useMemo(() => {
    const monthlyExpenses = monthlyHousing + monthlyFood + monthlyUtilities + monthlyOther;
    const annualExpenses = monthlyExpenses * 12;

    // Lean FIRE number (25x annual expenses or based on withdrawal rate)
    const leanFIREnumber = annualExpenses * (100 / withdrawalRate);

    // Amount still needed
    const amountNeeded = Math.max(0, leanFIREnumber - currentSavings);

    // Progress percentage
    const progressPercent = Math.min(100, (currentSavings / leanFIREnumber) * 100);

    // Years to FIRE calculation
    let yearsToFIRE = 0;
    if (amountNeeded > 0 && monthlySavings > 0) {
      let balance = currentSavings;
      let months = 0;
      const monthlyReturn = expectedReturn / 100 / 12;

      while (balance < leanFIREnumber && months < 600) { // Max 50 years
        balance = balance * (1 + monthlyReturn) + monthlySavings;
        months++;
      }
      yearsToFIRE = months / 12;
    }

    // Age at FIRE
    const fireAge = currentAge + yearsToFIRE;

    // Has reached Lean FIRE?
    const hasReachedFIRE = currentSavings >= leanFIREnumber;

    // Monthly income from portfolio at FIRE
    const monthlyPortfolioIncome = (leanFIREnumber * (withdrawalRate / 100)) / 12;

    // Expense breakdown percentages
    const housingPercent = (monthlyHousing / monthlyExpenses) * 100;
    const foodPercent = (monthlyFood / monthlyExpenses) * 100;
    const utilitiesPercent = (monthlyUtilities / monthlyExpenses) * 100;
    const otherPercent = (monthlyOther / monthlyExpenses) * 100;

    // Savings metrics
    const monthsOfExpensesSaved = currentSavings / monthlyExpenses;

    return {
      monthlyExpenses,
      annualExpenses,
      leanFIREnumber,
      amountNeeded,
      progressPercent,
      yearsToFIRE,
      fireAge,
      hasReachedFIRE,
      monthlyPortfolioIncome,
      housingPercent,
      foodPercent,
      utilitiesPercent,
      otherPercent,
      monthsOfExpensesSaved,
    };
  }, [
    monthlyHousing,
    monthlyFood,
    monthlyUtilities,
    monthlyOther,
    currentSavings,
    monthlySavings,
    currentAge,
    expectedReturn,
    withdrawalRate,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-500/30">
          <Leaf className="h-4 w-4" />
          Minimalist FIRE Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Lean FIRE Calculator
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Calculate your path to early retirement with a minimalist lifestyle. Live intentionally and retire decades earlier.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Monthly Expenses Breakdown */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <ShoppingCart className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Minimal Monthly Expenses</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Housing (rent/mortgage)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyHousing}
                    onChange={(e) => setMonthlyHousing(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-green-500"
                    min="0"
                    step="50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  Food & Groceries
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyFood}
                    onChange={(e) => setMonthlyFood(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-green-500"
                    min="0"
                    step="50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Utilities & Internet
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyUtilities}
                    onChange={(e) => setMonthlyUtilities(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-green-500"
                    min="0"
                    step="25"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Other Expenses (transport, insurance, etc.)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyOther}
                    onChange={(e) => setMonthlyOther(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-green-500"
                    min="0"
                    step="50"
                  />
                </div>
              </div>

              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-400">Total Monthly</span>
                  <span className="text-2xl font-bold text-green-400">
                    {formatFullCurrency(calculations.monthlyExpenses)}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {formatFullCurrency(calculations.annualExpenses)}/year
                </div>
              </div>
            </div>
          </div>

          {/* Savings Progress */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <DollarSign className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Savings</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Current Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-green-500"
                    min="0"
                    step="5000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {calculations.monthsOfExpensesSaved.toFixed(1)} months of expenses saved
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Monthly Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-green-500"
                    min="0"
                    step="100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Assumptions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Calculator className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="18"
                  max="60"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Expected Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Withdrawal Rate: {withdrawalRate}%
                </label>
                <input
                  type="range"
                  min="2"
                  max="6"
                  step="0.5"
                  value={withdrawalRate}
                  onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className={`rounded-xl p-6 border ${
            calculations.hasReachedFIRE
              ? 'bg-green-500/20 border-green-500/30'
              : 'bg-blue-500/20 border-blue-500/30'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {calculations.hasReachedFIRE ? (
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              ) : (
                <Target className="h-8 w-8 text-blue-400" />
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {calculations.hasReachedFIRE
                    ? "You've Reached Lean FIRE!"
                    : "Your Lean FIRE Journey"}
                </h3>
                <p className="text-sm text-slate-300">
                  {calculations.hasReachedFIRE
                    ? "You can retire with a minimalist lifestyle"
                    : `${calculations.yearsToFIRE.toFixed(1)} years to freedom`}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to Lean FIRE</span>
                <span className="font-semibold">{calculations.progressPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${Math.min(100, calculations.progressPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Lean FIRE Number */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <h3 className="text-sm text-slate-400 mb-2">Your Lean FIRE Number</h3>
            <div className="text-4xl font-bold text-green-400 mb-4">
              {formatCurrency(calculations.leanFIREnumber)}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Age at FIRE</span>
                <span className="font-semibold">{Math.round(calculations.fireAge)} years old</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Monthly Portfolio Income</span>
                <span className="font-semibold text-green-400">
                  {formatFullCurrency(calculations.monthlyPortfolioIncome)}
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-amber-400" />
              Key Metrics
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Current Savings</span>
                <span className="text-xl font-bold">
                  {formatCurrency(currentSavings)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Amount Needed</span>
                <span className="text-xl font-bold text-orange-400">
                  {calculations.hasReachedFIRE ? "$0" : formatCurrency(calculations.amountNeeded)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Years to FIRE</span>
                <span className="text-xl font-bold text-blue-400">
                  {calculations.hasReachedFIRE ? "0" : calculations.yearsToFIRE.toFixed(1)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400">FIRE Age</span>
                <span className="text-xl font-bold text-green-400">
                  {Math.round(calculations.fireAge)}
                </span>
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-purple-400" />
              Expense Breakdown
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Housing</span>
                  <span className="font-semibold">
                    {formatCurrency(monthlyHousing)} ({calculations.housingPercent.toFixed(0)}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${calculations.housingPercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Food</span>
                  <span className="font-semibold">
                    {formatCurrency(monthlyFood)} ({calculations.foodPercent.toFixed(0)}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${calculations.foodPercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Utilities</span>
                  <span className="font-semibold">
                    {formatCurrency(monthlyUtilities)} ({calculations.utilitiesPercent.toFixed(0)}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${calculations.utilitiesPercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Other</span>
                  <span className="font-semibold">
                    {formatCurrency(monthlyOther)} ({calculations.otherPercent.toFixed(0)}%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${calculations.otherPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Gold for Lean FIRE Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Protecting Your Lean FIRE Nest Egg</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-amber-400 font-semibold mb-2">Essential Security</div>
              <p className="text-slate-400 text-sm">
                With minimal expenses, you can't afford portfolio losses. Gold provides a safety net during market crashes and economic uncertainty.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Inflation Protection</div>
              <p className="text-slate-400 text-sm">
                Living on less means inflation hits harder. Gold maintains purchasing power when the dollar loses value, protecting your fixed budget.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Low Correlation</div>
              <p className="text-slate-400 text-sm">
                Lean FIRE portfolios need stability. Gold's low correlation to stocks and bonds provides crucial diversification on a tight budget.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="lean-fire-calculator"
            subheadline="Lean FIRE investors protect their minimal nest egg with Gold IRAs. Ensure your purchasing power survives decades of retirement on a fixed budget."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Lean FIRE</h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is Lean FIRE?</h3>
            <p className="text-slate-400 mb-4">
              Lean FIRE is the minimalist approach to Financial Independence Retire Early. By keeping expenses low (typically $25,000-$40,000/year), you need a much smaller nest egg - often $600,000-$1,000,000 instead of $2 million+.
            </p>
            <p className="text-slate-400">
              Lean FIRE practitioners embrace frugality not as deprivation, but as intentional living. By focusing on what truly matters and cutting unnecessary expenses, they achieve freedom years or even decades earlier than traditional retirement.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">Strategies for Lean FIRE</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Geographic Arbitrage:</strong> Live in low cost-of-living areas or countries</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Minimize Housing:</strong> Small homes, van life, or house hacking</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Cook at Home:</strong> Eliminate restaurant spending</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>One Car or No Car:</strong> Use bikes, public transit, or car sharing</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Free Entertainment:</strong> Hiking, library, community events</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">The Math</h3>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm mb-4">
              Lean FIRE Number = Annual Expenses × 25
            </div>
            <p className="text-slate-400">
              Example: If you can live comfortably on $30,000/year, your Lean FIRE number is $750,000. At a 4% withdrawal rate, this provides $30,000 annually while preserving your principal.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
