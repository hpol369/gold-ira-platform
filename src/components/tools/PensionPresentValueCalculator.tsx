"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  DollarSign,
  Calendar,
  TrendingUp,
  PiggyBank,
  Users,
  Info,
  CheckCircle2,
  ArrowRight,
  Scale,
  Target,
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

// Actuarial life expectancy table
const lifeExpectancyTable: Record<number, number> = {
  50: 32, 51: 31, 52: 30, 53: 29, 54: 28, 55: 27, 56: 26, 57: 25, 58: 24, 59: 23,
  60: 22, 61: 21, 62: 20, 63: 19, 64: 19, 65: 18, 66: 17, 67: 17, 68: 16, 69: 16,
  70: 15, 71: 14, 72: 14, 73: 13, 74: 13, 75: 12, 76: 12, 77: 11, 78: 11, 79: 10,
  80: 10, 81: 9, 82: 9, 83: 8, 84: 8, 85: 7, 86: 7, 87: 7, 88: 6, 89: 6, 90: 5,
};

export function PensionPresentValueCalculator() {
  // Inputs
  const [monthlyPension, setMonthlyPension] = useState<number>(2500);
  const [startAge, setStartAge] = useState<number>(65);
  const [currentAge, setCurrentAge] = useState<number>(60);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(87);
  const [discountRate, setDiscountRate] = useState<number>(5);
  const [colaPension, setColaPension] = useState<number>(0);
  const [hasSurvivorBenefit, setHasSurvivorBenefit] = useState<boolean>(true);
  const [survivorBenefitPercent, setSurvivorBenefitPercent] = useState<number>(50);
  const [spouseAge, setSpouseAge] = useState<number>(62);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Calculations
  const calculations = useMemo(() => {
    const annualPension = monthlyPension * 12;
    const yearsUntilStart = Math.max(0, startAge - currentAge);
    const yearsOfPayment = lifeExpectancy - startAge;

    // Calculate present value of pension stream
    // PV = Sum of [Payment / (1 + discount rate)^n] for all payment periods
    let pensionPV = 0;
    let yearlyBreakdown: Array<{
      year: number;
      age: number;
      payment: number;
      presentValue: number;
      cumulativePV: number;
    }> = [];

    for (let year = 0; year < yearsOfPayment; year++) {
      const age = startAge + year;
      // Calculate COLA-adjusted payment
      const adjustedPayment = annualPension * Math.pow(1 + colaPension / 100, year);
      // Discount back to current age
      const yearsToDiscount = yearsUntilStart + year + 1;
      const pv = adjustedPayment / Math.pow(1 + discountRate / 100, yearsToDiscount);
      pensionPV += pv;

      yearlyBreakdown.push({
        year: year + 1,
        age,
        payment: adjustedPayment,
        presentValue: pv,
        cumulativePV: pensionPV,
      });
    }

    // Calculate survivor benefit PV if applicable
    let survivorPV = 0;
    let survivorYears = 0;
    if (hasSurvivorBenefit) {
      const spouseLifeExpectancy = spouseAge + (lifeExpectancyTable[spouseAge] || 20);
      survivorYears = Math.max(0, spouseLifeExpectancy - lifeExpectancy);
      const survivorAnnualBenefit = annualPension * (survivorBenefitPercent / 100);

      for (let year = 0; year < survivorYears; year++) {
        const adjustedBenefit = survivorAnnualBenefit * Math.pow(1 + colaPension / 100, yearsOfPayment + year);
        const yearsToDiscount = yearsUntilStart + yearsOfPayment + year + 1;
        const pv = adjustedBenefit / Math.pow(1 + discountRate / 100, yearsToDiscount);
        survivorPV += pv;
      }
    }

    const totalPV = pensionPV + survivorPV;

    // Total lifetime pension payments (nominal)
    const totalNominalPayments = yearlyBreakdown.reduce((sum, y) => sum + y.payment, 0);

    // What lump sum at 4% withdrawal would generate same income?
    const equivalentLumpSum4Percent = annualPension / 0.04;

    // What would pension PV be worth at start age if invested today?
    const pvAtStartAge = totalPV * Math.pow(1 + discountRate / 100, yearsUntilStart);

    // "Pension Wealth" - how this compares to net worth
    const pensionAsPercent = (fraction: number) => totalPV / fraction;

    // Monthly equivalent if you invested the PV
    const monthlyFromPV = (totalPV * (discountRate / 100)) / 12;

    // Compare to buying an annuity (rough estimate at 5% payout)
    const annuityEquivalent = totalPV * 0.05 / 12;

    return {
      pensionPV,
      survivorPV,
      totalPV,
      annualPension,
      totalNominalPayments,
      equivalentLumpSum4Percent,
      pvAtStartAge,
      monthlyFromPV,
      annuityEquivalent,
      yearsUntilStart,
      yearsOfPayment,
      survivorYears,
      yearlyBreakdown: yearlyBreakdown.slice(0, 20), // First 20 years
    };
  }, [
    monthlyPension,
    startAge,
    currentAge,
    lifeExpectancy,
    discountRate,
    colaPension,
    hasSurvivorBenefit,
    survivorBenefitPercent,
    spouseAge,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
          <PiggyBank className="h-4 w-4" />
          Pension Value Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Pension Present Value Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate the lump sum equivalent of your pension. Understand your true &quot;pension wealth&quot; for retirement planning, divorce settlements, or job offer comparisons.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Pension Details */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <DollarSign className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Pension Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Monthly Pension Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={monthlyPension}
                    onChange={(e) => setMonthlyPension(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                    min="0"
                    step="100"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Annual: {formatFullCurrency(monthlyPension * 12)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  COLA (Cost of Living Adjustment): {colaPension}%
                  <div className="group relative">
                    <Info className="h-4 w-4 text-slate-500 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-100 text-xs text-slate-600 rounded-lg p-3 border border-slate-700 z-10">
                      Annual increase to keep pace with inflation. Government pensions often have COLA; private pensions typically don&apos;t.
                    </div>
                  </div>
                </label>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={colaPension}
                  onChange={(e) => setColaPension(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0% (None)</span>
                  <span>2%</span>
                  <span>4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Age & Timing */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Age & Timing</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="30"
                  max="75"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Pension Start Age: {startAge}
                </label>
                <input
                  type="range"
                  min={Math.max(currentAge, 55)}
                  max="75"
                  value={startAge}
                  onChange={(e) => setStartAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  {calculations.yearsUntilStart > 0
                    ? `${calculations.yearsUntilStart} years until pension starts`
                    : "Pension starts immediately"}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Life Expectancy: {lifeExpectancy}
                </label>
                <input
                  type="range"
                  min={startAge + 5}
                  max="100"
                  value={lifeExpectancy}
                  onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  {calculations.yearsOfPayment} years of pension payments
                </p>
              </div>
            </div>
          </div>

          {/* Discount Rate */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <TrendingUp className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Discount Rate</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  Discount Rate: {discountRate}%
                  <div className="group relative">
                    <Info className="h-4 w-4 text-slate-500 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-100 text-xs text-slate-600 rounded-lg p-3 border border-slate-700 z-10">
                      The rate used to discount future payments to present value. Use risk-free rate (3-4%) for conservative estimate, or expected investment return (5-7%) for comparison purposes.
                    </div>
                  </div>
                </label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="0.5"
                  value={discountRate}
                  onChange={(e) => setDiscountRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Risk-Free (2-3%)</span>
                  <span>5%</span>
                  <span>Aggressive (8%)</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 text-sm">
                <p className="text-slate-500">
                  <strong className="text-[#B22234]">Lower rate</strong> = higher present value (pension worth more)<br />
                  <strong className="text-[#B22234]">Higher rate</strong> = lower present value (lump sum could earn more)
                </p>
              </div>
            </div>
          </div>

          {/* Survivor Benefits (Collapsible) */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">Survivor Benefits</h3>
              </div>
              <span className={`text-slate-500 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>
                &#9660;
              </span>
            </button>

            {showAdvanced && (
              <div className="space-y-4 mt-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasSurvivorBenefit}
                    onChange={(e) => setHasSurvivorBenefit(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-600 bg-slate-100 text-purple-500 focus:ring-purple-500"
                  />
                  <span className="text-slate-600">Include survivor benefit for spouse</span>
                </label>

                {hasSurvivorBenefit && (
                  <>
                    <div>
                      <label className="text-sm text-slate-500 mb-2 block">
                        Survivor Benefit: {survivorBenefitPercent}% of pension
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        value={survivorBenefitPercent}
                        onChange={(e) => setSurvivorBenefitPercent(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-slate-500 mb-2 block">
                        Spouse Current Age: {spouseAge}
                      </label>
                      <input
                        type="range"
                        min="30"
                        max="80"
                        value={spouseAge}
                        onChange={(e) => setSpouseAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Est. survivor years: {calculations.survivorYears}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-500 mb-2">Your Pension Present Value</div>
              <div className="text-5xl font-bold text-purple-700">
                {formatCurrency(calculations.totalPV)}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                {formatFullCurrency(calculations.totalPV)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-500">Pension Portion</div>
                <div className="text-xl font-bold text-purple-700">
                  {formatCurrency(calculations.pensionPV)}
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-500">Survivor Benefit</div>
                <div className="text-xl font-bold text-green-600">
                  {formatCurrency(calculations.survivorPV)}
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Metrics */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Scale className="h-5 w-5 text-[#B22234]" />
              Equivalent Values
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <span className="text-slate-500">4% Rule Equivalent</span>
                  <div className="text-xs text-slate-500">Lump sum to match pension income</div>
                </div>
                <span className="text-xl font-bold text-[#B22234]">
                  {formatCurrency(calculations.equivalentLumpSum4Percent)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <span className="text-slate-500">Total Nominal Payments</span>
                  <div className="text-xs text-slate-500">What you&apos;ll actually receive</div>
                </div>
                <span className="text-xl font-bold text-blue-600">
                  {formatCurrency(calculations.totalNominalPayments)}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <span className="text-slate-500">PV at Start Age</span>
                  <div className="text-xs text-slate-500">If invested until pension begins</div>
                </div>
                <span className="text-xl font-bold text-green-600">
                  {formatCurrency(calculations.pvAtStartAge)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-slate-500">Monthly Income from PV</span>
                  <div className="text-xs text-slate-500">At {discountRate}% return</div>
                </div>
                <span className="text-xl font-bold text-purple-700">
                  {formatFullCurrency(calculations.monthlyFromPV)}/mo
                </span>
              </div>
            </div>
          </div>

          {/* Pension Wealth Context */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-700" />
              Pension as Part of Net Worth
            </h3>

            <p className="text-slate-600 text-sm mb-4">
              Your pension is a hidden asset often left off balance sheets. Here&apos;s how it compares:
            </p>

            <div className="space-y-3">
              {[100000, 250000, 500000, 1000000].map((netWorth) => (
                <div key={netWorth} className="flex justify-between items-center">
                  <span className="text-slate-500">{formatCurrency(netWorth)} net worth</span>
                  <span className="font-semibold text-purple-700">
                    +{Math.round((calculations.totalPV / netWorth) * 100)}% pension wealth
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 bg-purple-500/10 rounded-lg p-3">
              <p className="text-sm text-slate-600">
                <strong className="text-purple-700">Important:</strong> For divorce settlements or estate planning, pension present value should be included in total marital assets.
              </p>
            </div>
          </div>

          {/* Year-by-Year Breakdown */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Payment Breakdown (First 10 Years)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-2 py-2 text-left text-slate-500">Year</th>
                    <th className="px-2 py-2 text-left text-slate-500">Age</th>
                    <th className="px-2 py-2 text-right text-slate-500">Payment</th>
                    <th className="px-2 py-2 text-right text-slate-500">PV</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.yearlyBreakdown.slice(0, 10).map((row) => (
                    <tr key={row.year} className="border-b border-slate-200">
                      <td className="px-2 py-2 text-slate-500">{row.year}</td>
                      <td className="px-2 py-2text-slate-900">{row.age}</td>
                      <td className="px-2 py-2 text-right text-green-600">
                        {formatCurrency(row.payment)}
                      </td>
                      <td className="px-2 py-2 text-right text-purple-700">
                        {formatCurrency(row.presentValue)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">When You Need Pension Present Value</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Scale className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-slate-900 font-semibold mb-2">Divorce Settlements</h3>
            <p className="text-slate-600 text-sm">
              Pensions are marital property. The present value determines fair division during divorce proceedings.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-slate-900 font-semibold mb-2">Retirement Planning</h3>
            <p className="text-slate-600 text-sm">
              Include pension wealth in your net worth to accurately assess retirement readiness.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-slate-900 font-semibold mb-2">Job Offer Comparison</h3>
            <p className="text-slate-600 text-sm">
              Compare total compensation including pension value when evaluating job offers.
            </p>
          </div>
        </div>
      </div>

      {/* Gold Bridge Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protecting Your Pension Wealth</h2>
          </div>

          <p className="text-slate-500 mb-6">
            Your pension has significant value - {formatFullCurrency(calculations.totalPV)}. But if it lacks COLA, inflation will erode its purchasing power. Consider diversifying with a Gold IRA to protect the wealth your pension represents.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">Pension Risk</div>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>No COLA means declining real income</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Company bankruptcy risk (PBGC limits)</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Nothing for heirs if you die early</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Gold IRA Protection</div>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Physical asset hedges inflation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>No counterparty risk</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Full inheritance for heirs</span>
                </li>
              </ul>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="pension-present-value-calculator"
            subheadline="Don't let inflation erode your pension wealth. A Gold IRA can complement your fixed pension income with an asset that historically rises during inflationary periods."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Pension Present Value</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">The NPV Formula</h3>
            <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
              PV = Sum of [Payment / (1 + discount rate)^n]
            </div>
            <p className="text-slate-500">
              Present value discounts future payments to today&apos;s dollars. A payment 10 years from now is worth less than the same payment today because money has time value - you could invest it and earn returns.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Choosing the Right Discount Rate</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Risk-free rate (3-4%):</strong> Most conservative; assumes you&apos;d invest in Treasury bonds</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Expected return (5-7%):</strong> What you might earn in a diversified portfolio</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Company rate:</strong> For divorce/buyout, companies often use PBGC segment rates</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Higher rate:</strong> Use if you&apos;re confident you can beat market returns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
