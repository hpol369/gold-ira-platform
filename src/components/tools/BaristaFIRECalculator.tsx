"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Coffee,
  DollarSign,
  Calendar,
  Target,
  Clock,
  Shield,
  CheckCircle2,
  Briefcase,
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

export function BaristaFIRECalculator() {
  // Inputs
  const [currentSavings, setCurrentSavings] = useState<number>(300000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(4000);
  const [partTimeIncome, setPartTimeIncome] = useState<number>(2000);
  const [currentAge, setCurrentAge] = useState<number>(45);
  const [fullRetirementAge, setFullRetirementAge] = useState<number>(65);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);

  // Calculations
  const calculations = useMemo(() => {
    const annualExpenses = monthlyExpenses * 12;
    const monthlyGap = Math.max(0, monthlyExpenses - partTimeIncome);
    const annualGap = monthlyGap * 12;

    // Full FIRE number (25x expenses or based on withdrawal rate)
    const fullFIREnumber = annualExpenses * (100 / withdrawalRate);

    // Barista FIRE number (amount needed to cover the gap with part-time income)
    const baristaFIREnumber = annualGap * (100 / withdrawalRate);

    // Amount still needed
    const amountNeeded = Math.max(0, baristaFIREnumber - currentSavings);

    // Years of part-time work needed
    let yearsOfPartTimeWork = 0;
    if (amountNeeded > 0) {
      let balance = currentSavings;
      let years = 0;
      while (balance < baristaFIREnumber && years < 50) {
        balance = balance * (1 + expectedReturn / 100) - annualGap;
        years++;
      }
      yearsOfPartTimeWork = years;
    }

    // Age when fully FIRE (after Barista FIRE period)
    const fullFIREage = currentAge + yearsOfPartTimeWork;

    // Progress percentage
    const progressPercent = Math.min(100, (currentSavings / baristaFIREnumber) * 100);

    // Can start Barista FIRE now?
    const canStartNow = currentSavings >= baristaFIREnumber;

    // Monthly withdrawal from savings during Barista FIRE
    const monthlyWithdrawal = (baristaFIREnumber * (withdrawalRate / 100)) / 12;

    // Coverage percentage from part-time work
    const coveragePercent = partTimeIncome > 0 ? (partTimeIncome / monthlyExpenses) * 100 : 0;

    return {
      fullFIREnumber,
      baristaFIREnumber,
      amountNeeded,
      yearsOfPartTimeWork,
      fullFIREage,
      progressPercent,
      canStartNow,
      monthlyGap,
      monthlyWithdrawal,
      coveragePercent,
    };
  }, [
    currentSavings,
    monthlyExpenses,
    partTimeIncome,
    currentAge,
    fullRetirementAge,
    expectedReturn,
    withdrawalRate,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-500/30">
          <Coffee className="h-4 w-4" />
          FIRE Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Barista FIRE Calculator
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Calculate how part-time work can help you achieve financial independence faster with a lower savings requirement.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Financial Snapshot */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <DollarSign className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Financial Snapshot</h3>
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
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-amber-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Monthly Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-amber-500"
                    min="0"
                    step="500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Part-Time Monthly Income (after taxes)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={partTimeIncome}
                    onChange={(e) => setPartTimeIncome(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-amber-500"
                    min="0"
                    step="500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Age & Assumptions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Age & Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="18"
                  max="70"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Full Retirement Age: {fullRetirementAge}
                </label>
                <input
                  type="range"
                  min={currentAge}
                  max="80"
                  value={fullRetirementAge}
                  onChange={(e) => setFullRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Expected Return Rate: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className={`rounded-xl p-6 border ${
            calculations.canStartNow
              ? 'bg-green-500/20 border-green-500/30'
              : 'bg-amber-500/20 border-amber-500/30'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {calculations.canStartNow ? (
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              ) : (
                <Coffee className="h-8 w-8 text-amber-400" />
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {calculations.canStartNow
                    ? "Ready for Barista FIRE!"
                    : "Keep Building Your Nest Egg"}
                </h3>
                <p className="text-sm text-slate-300">
                  {calculations.canStartNow
                    ? "You can start part-time work now"
                    : `You need ${formatCurrency(calculations.amountNeeded)} more`}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to Barista FIRE</span>
                <span className="font-semibold">{calculations.progressPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
                  style={{ width: `${Math.min(100, calculations.progressPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Income Coverage */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-400" />
              Income Coverage
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Part-time covers expenses</span>
                  <span className="font-semibold">{calculations.coveragePercent.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    style={{ width: `${Math.min(100, calculations.coveragePercent)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Monthly Income</div>
                  <div className="text-lg font-semibold text-green-400">
                    {formatCurrency(partTimeIncome)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Monthly Gap</div>
                  <div className="text-lg font-semibold text-orange-400">
                    {formatCurrency(calculations.monthlyGap)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Numbers */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-amber-400" />
              Key Numbers
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Full FIRE Number</span>
                <span className="text-xl font-bold text-amber-400">
                  {formatCurrency(calculations.fullFIREnumber)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Barista FIRE Number</span>
                <span className="text-xl font-bold text-green-400">
                  {formatCurrency(calculations.baristaFIREnumber)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Savings Needed</span>
                <span className="text-xl font-bold text-orange-400">
                  {calculations.canStartNow ? "$0" : formatCurrency(calculations.amountNeeded)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400">Monthly from Portfolio</span>
                <span className="text-xl font-bold text-blue-400">
                  {formatCurrency(calculations.monthlyWithdrawal)}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {!calculations.canStartNow && calculations.yearsOfPartTimeWork > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                Timeline
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Years to Barista FIRE</div>
                    <div className="font-semibold">{calculations.yearsOfPartTimeWork} years</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Age at Barista FIRE</div>
                    <div className="font-semibold">{calculations.fullFIREage} years old</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Why Gold for FIRE Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Protecting Your Barista FIRE Nest Egg</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-amber-400 font-semibold mb-2">Long-Term Stability</div>
              <p className="text-slate-400 text-sm">
                Barista FIRE means relying on your portfolio for decades. Gold provides stability that paper assets can't match during market turmoil.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Income Protection</div>
              <p className="text-slate-400 text-sm">
                Your part-time income may not keep pace with inflation. Gold IRAs help ensure your purchasing power remains intact over time.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Peace of Mind</div>
              <p className="text-slate-400 text-sm">
                With lower income from part-time work, you can't afford major portfolio losses. Gold adds a protective layer to your strategy.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="barista-fire-calculator"
            subheadline="FIRE investors protect their nest egg from inflation with Gold IRAs. Unlike paper assets, gold maintains purchasing power over decades."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Barista FIRE</h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is Barista FIRE?</h3>
            <p className="text-slate-400 mb-4">
              Barista FIRE is a semi-retirement strategy where you've saved enough that part-time work covers your remaining expenses. The term comes from working a "barista job" - flexible, low-stress work that provides income and often benefits like health insurance.
            </p>
            <p className="text-slate-400">
              Unlike traditional FIRE where you need to save 25x your annual expenses, Barista FIRE only requires savings to cover the gap between your part-time income and expenses. This makes FIRE achievable years earlier.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">Benefits of Barista FIRE</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Lower Savings Target:</strong> You need significantly less money saved compared to full FIRE</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Earlier Freedom:</strong> Escape the corporate grind years sooner</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Flexibility:</strong> Choose work that aligns with your values and interests</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Healthcare Bridge:</strong> Part-time work can provide health insurance until Medicare</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">The Calculation</h3>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm mb-4">
              Barista FIRE Number = (Monthly Expenses - Part-Time Income) × 12 × 25
            </div>
            <p className="text-slate-400">
              For example, if you need $4,000/month to live and earn $2,000/month from part-time work, you only need to cover a $2,000/month gap. That's $24,000/year × 25 = $600,000 instead of needing $1,200,000 for full FIRE.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
