"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Calendar,
  Target,
  Clock,
  Shield,
  CheckCircle2,
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

export function CoastFIRECalculator() {
  // Inputs
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [coastAge, setCoastAge] = useState<number>(45);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentSavings, setCurrentSavings] = useState<number>(100000);
  const [annualExpenses, setAnnualExpenses] = useState<number>(50000);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);

  // Calculations
  const calculations = useMemo(() => {
    const yearsToCoast = Math.max(0, coastAge - currentAge);
    const yearsFromCoastToRetirement = Math.max(0, retirementAge - coastAge);
    const yearsToRetirement = Math.max(0, retirementAge - currentAge);

    // FIRE number (25x annual expenses)
    const fireNumber = annualExpenses * 25;

    // Coast FIRE number: amount needed at coast age to reach FIRE number at retirement
    const coastFireNumber = fireNumber / Math.pow(1 + expectedReturn / 100, yearsFromCoastToRetirement);

    // Projected balance at retirement if we stop saving now
    const projectedRetirementBalance = currentSavings * Math.pow(1 + expectedReturn / 100, yearsToRetirement);

    // Amount still needed to reach coast FIRE
    const amountNeeded = Math.max(0, coastFireNumber - currentSavings);

    // Years until coast FIRE (assuming annual contributions)
    const annualSavingsNeeded = yearsToCoast > 0
      ? amountNeeded / yearsToCoast
      : 0;

    // Progress percentage
    const progressPercent = Math.min(100, (currentSavings / coastFireNumber) * 100);

    // Status
    const hasReachedCoast = currentSavings >= coastFireNumber;

    return {
      fireNumber,
      coastFireNumber,
      projectedRetirementBalance,
      amountNeeded,
      annualSavingsNeeded,
      progressPercent,
      hasReachedCoast,
      yearsToCoast,
      yearsFromCoastToRetirement,
      yearsToRetirement,
    };
  }, [currentAge, coastAge, retirementAge, currentSavings, annualExpenses, expectedReturn]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[rgba(220,38,38,0.1)] text-[#D4A94E] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#B22234]/30">
          <Calculator className="h-4 w-4" />
          FIRE Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F6F4EF]">
          Coast FIRE Calculator
        </h1>
        <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto">
          Calculate when you can stop saving and let your investments grow on autopilot to reach financial independence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Age Information */}
          <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-6 border border-[#2A2D42]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#121423]0/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Age Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#A8A39A] mb-2 block">
                  Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="18"
                  max="70"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                />
              </div>

              <div>
                <label className="text-sm text-[#A8A39A] mb-2 block">
                  Coast Age (when you stop saving): {coastAge}
                </label>
                <input
                  type="range"
                  min={currentAge}
                  max={retirementAge}
                  value={coastAge}
                  onChange={(e) => setCoastAge(Number(e.target.value))}
                  className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                />
              </div>

              <div>
                <label className="text-sm text-[#A8A39A] mb-2 block">
                  Retirement Age: {retirementAge}
                </label>
                <input
                  type="range"
                  min={coastAge}
                  max="80"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                />
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-6 border border-[#2A2D42]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[rgba(46,139,87,0.08)]0/20 rounded-lg border border-green-500/30">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Financial Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#A8A39A] mb-2 block">
                  Current Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A8A39A]" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full bg-[#121423] border border-slate-700 rounded-lg px-10 py-3 text-[#F6F4EF] focus:outline-none focus:border-[#B22234]"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#A8A39A] mb-2 block">
                  Annual Expenses in Retirement
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A8A39A]" />
                  <input
                    type="number"
                    value={annualExpenses}
                    onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                    className="w-full bg-[#121423] border border-slate-700 rounded-lg px-10 py-3 text-[#F6F4EF] focus:outline-none focus:border-[#B22234]"
                    min="0"
                    step="5000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#A8A39A] mb-2 block">
                  Expected Return Rate: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                />
                <div className="flex justify-between text-xs text-[#A8A39A] mt-1">
                  <span>Conservative (1%)</span>
                  <span>Aggressive (15%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className={`rounded-xl p-6 border ${
            calculations.hasReachedCoast
              ? 'bg-[rgba(46,139,87,0.08)]0/20 border-green-500/30'
              : 'bg-[rgba(220,38,38,0.1)] border-[#B22234]/30'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {calculations.hasReachedCoast ? (
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              ) : (
                <Target className="h-8 w-8 text-[#D4A94E]" />
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {calculations.hasReachedCoast
                    ? "You've Reached Coast FIRE!"
                    : "Keep Saving to Coast FIRE"}
                </h3>
                <p className="text-sm text-[#D0CCC4]">
                  {calculations.hasReachedCoast
                    ? "You can stop saving and still retire comfortably"
                    : `You need ${formatCurrency(calculations.amountNeeded)} more`}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to Coast FIRE</span>
                <span className="font-semibold">{calculations.progressPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-[#121423] rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-[#DC2626] transition-all duration-500"
                  style={{ width: `${Math.min(100, calculations.progressPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Key Numbers */}
          <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-6 border border-[#2A2D42]">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-[#D4A94E]" />
              Key Numbers
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-[#2A2D42]">
                <span className="text-[#A8A39A]">Full FIRE Number</span>
                <span className="text-xl font-bold text-[#D4A94E]">
                  {formatCurrency(calculations.fireNumber)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-[#2A2D42]">
                <span className="text-[#A8A39A]">Coast FIRE Number</span>
                <span className="text-xl font-bold text-green-600">
                  {formatCurrency(calculations.coastFireNumber)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-[#2A2D42]">
                <span className="text-[#A8A39A]">Current Savings</span>
                <span className="text-xl font-bold">
                  {formatCurrency(currentSavings)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#A8A39A]">Projected at {retirementAge}</span>
                <span className="text-xl font-bold text-blue-600">
                  {formatCurrency(calculations.projectedRetirementBalance)}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-6 border border-[#2A2D42]">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Timeline
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <div className="flex-1">
                  <div className="text-sm text-[#A8A39A]">Years to Coast Age</div>
                  <div className="font-semibold">{calculations.yearsToCoast} years</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400" />
                <div className="flex-1">
                  <div className="text-sm text-[#A8A39A]">Coasting Period</div>
                  <div className="font-semibold">{calculations.yearsFromCoastToRetirement} years</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400" />
                <div className="flex-1">
                  <div className="text-sm text-[#A8A39A]">Total to Retirement</div>
                  <div className="font-semibold">{calculations.yearsToRetirement} years</div>
                </div>
              </div>
            </div>
          </div>

          {!calculations.hasReachedCoast && calculations.yearsToCoast > 0 && (
            <div className="bg-[#121423]0/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Action Required
              </h3>
              <p className="text-[#D0CCC4] mb-3">
                To reach Coast FIRE by age {coastAge}, you need to save approximately:
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {formatFullCurrency(calculations.annualSavingsNeeded)}/year
              </div>
              <div className="text-[#D0CCC4] text-sm">
                or {formatFullCurrency(calculations.annualSavingsNeeded / 12)}/month
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Why Gold for FIRE Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-8 border border-[#2A2D42]">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#D4A94E]" />
            <h2 className="text-2xl font-bold">Why FIRE Investors Consider Gold IRAs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-[#D4A94E] font-semibold mb-2">Inflation Hedge</div>
              <p className="text-[#D0CCC4] text-sm">
                With a 30+ year retirement horizon, protecting purchasing power is critical. Gold has historically maintained value through inflationary periods.
              </p>
            </div>

            <div>
              <div className="text-[#D4A94E] font-semibold mb-2">Sequence of Returns Risk</div>
              <p className="text-[#D0CCC4] text-sm">
                A market crash early in retirement can devastate your plan. Gold often moves inversely to stocks, providing a hedge.
              </p>
            </div>

            <div>
              <div className="text-[#D4A94E] font-semibold mb-2">Portfolio Diversification</div>
              <p className="text-[#D0CCC4] text-sm">
                Most FIRE portfolios are heavily weighted in stocks and bonds. Physical gold adds true diversification beyond paper assets.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="coast-fire-calculator"
            subheadline="FIRE investors protect their nest egg from inflation with Gold IRAs. Unlike paper assets, gold maintains purchasing power over decades."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Coast FIRE</h2>

          <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-6 border border-[#2A2D42] mb-6">
            <h3 className="text-xl font-semibold mb-4">What is Coast FIRE?</h3>
            <p className="text-[#A8A39A] mb-4">
              Coast FIRE (Financial Independence Retire Early) is when you've saved enough that your investments will grow to your full FIRE number by retirement age, even if you never save another dollar. You've done the heavy lifting and can now "coast" to retirement.
            </p>
            <p className="text-[#A8A39A]">
              At Coast FIRE, you still need to cover your living expenses through work, but you're free from the pressure of maximizing retirement contributions. Many use this phase to pursue lower-stress jobs, part-time work, or passion projects.
            </p>
          </div>

          <div className="bg-[#0C0D18] backdrop-blur-sm rounded-xl p-6 border border-[#2A2D42]">
            <h3 className="text-xl font-semibold mb-4">The Formula</h3>
            <div className="bg-[#121423] rounded-lg p-4 font-mono text-sm mb-4">
              Coast FIRE Number = FIRE Number ÷ (1 + return rate)^years until retirement
            </div>
            <p className="text-[#A8A39A] mb-4">
              Where your FIRE Number is typically your annual expenses multiplied by 25 (based on the 4% safe withdrawal rate).
            </p>
            <p className="text-[#A8A39A]">
              For example, if you need $1 million at age 65 and you're currently 45 with an expected 7% return, your Coast FIRE number would be approximately $258,000. Once you reach that amount, you can stop saving and it will grow to $1 million in 20 years.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
