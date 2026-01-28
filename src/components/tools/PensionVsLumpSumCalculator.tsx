"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  DollarSign,
  Calendar,
  TrendingUp,
  Scale,
  Users,
  Info,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
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

// Actuarial life expectancy table (simplified)
const lifeExpectancyTable: Record<number, number> = {
  50: 32, 51: 31, 52: 30, 53: 29, 54: 28, 55: 27, 56: 26, 57: 25, 58: 24, 59: 23,
  60: 22, 61: 21, 62: 20, 63: 19, 64: 19, 65: 18, 66: 17, 67: 17, 68: 16, 69: 16,
  70: 15, 71: 14, 72: 14, 73: 13, 74: 13, 75: 12, 76: 12, 77: 11, 78: 11, 79: 10,
  80: 10, 81: 9, 82: 9, 83: 8, 84: 8, 85: 7, 86: 7, 87: 7, 88: 6, 89: 6, 90: 5,
};

export function PensionVsLumpSumCalculator() {
  // Inputs
  const [monthlyPension, setMonthlyPension] = useState<number>(2500);
  const [lumpSumOffer, setLumpSumOffer] = useState<number>(400000);
  const [currentAge, setCurrentAge] = useState<number>(60);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(85);
  const [expectedReturn, setExpectedReturn] = useState<number>(6);
  const [inflationRate, setInflationRate] = useState<number>(3);
  const [taxBracket, setTaxBracket] = useState<number>(22);
  const [colaPension, setColaPension] = useState<number>(0);
  const [survivorBenefitPercent, setSurvivorBenefitPercent] = useState<number>(50);
  const [spouseAge, setSpouseAge] = useState<number>(58);
  const [needsSurvivorBenefit, setNeedsSurvivorBenefit] = useState<boolean>(true);

  // Calculations
  const calculations = useMemo(() => {
    const yearsOfPayment = lifeExpectancy - currentAge;
    const annualPension = monthlyPension * 12;

    // Calculate break-even age
    let pensionTotal = 0;
    let lumpSumValue = lumpSumOffer;
    let breakEvenAge = 0;
    let yearlyData: Array<{
      age: number;
      pensionTotal: number;
      lumpSumValue: number;
      annualPension: number;
    }> = [];

    for (let year = 0; year <= 50; year++) {
      const age = currentAge + year;
      const adjustedAnnualPension = annualPension * Math.pow(1 + colaPension / 100, year);
      pensionTotal += adjustedAnnualPension;

      if (year > 0) {
        lumpSumValue = lumpSumValue * (1 + expectedReturn / 100);
      }

      yearlyData.push({
        age,
        pensionTotal,
        lumpSumValue,
        annualPension: adjustedAnnualPension,
      });

      if (breakEvenAge === 0 && pensionTotal >= lumpSumOffer) {
        breakEvenAge = age;
      }
    }

    // Present value of pension stream (NPV)
    const realDiscountRate = (1 + expectedReturn / 100) / (1 + inflationRate / 100) - 1;
    let pensionPV = 0;
    for (let year = 0; year < yearsOfPayment; year++) {
      const adjustedAnnualPension = annualPension * Math.pow(1 + colaPension / 100, year);
      pensionPV += adjustedAnnualPension / Math.pow(1 + realDiscountRate, year + 1);
    }

    // Add survivor benefit present value if needed
    let survivorPV = 0;
    if (needsSurvivorBenefit) {
      const spouseLifeExpectancy = lifeExpectancyTable[spouseAge] || 20;
      const spouseYearsAlone = Math.max(0, (spouseAge + spouseLifeExpectancy) - lifeExpectancy);
      const survivorAnnualBenefit = annualPension * (survivorBenefitPercent / 100);

      for (let year = 0; year < spouseYearsAlone; year++) {
        const adjustedBenefit = survivorAnnualBenefit * Math.pow(1 + colaPension / 100, yearsOfPayment + year);
        survivorPV += adjustedBenefit / Math.pow(1 + realDiscountRate, yearsOfPayment + year + 1);
      }
    }

    const totalPensionPV = pensionPV + survivorPV;

    // Lump sum required to generate equivalent income (4% rule)
    const lumpSumNeededFor4Percent = annualPension / 0.04;

    // Tax considerations
    const lumpSumAfterTax = lumpSumOffer * (1 - taxBracket / 100);
    const pensionAnnualAfterTax = annualPension * (1 - taxBracket / 100);

    // Total pension income over lifetime (before tax)
    const totalPensionIncome = annualPension * yearsOfPayment;
    const totalPensionWithCOLA = yearlyData
      .filter(d => d.age <= lifeExpectancy)
      .reduce((sum, d) => sum + d.annualPension, 0);

    // Projected lump sum value at life expectancy
    const lumpSumAtLifeExpectancy = lumpSumOffer * Math.pow(1 + expectedReturn / 100, yearsOfPayment);

    // What monthly income does lump sum generate at 4%?
    const lumpSumMonthlyIncome = (lumpSumOffer * 0.04) / 12;

    // Years until pension income beats lump sum starting value
    const yearsToBreakeven = breakEvenAge - currentAge;

    // Recommendation logic
    let recommendation: "pension" | "lumpsum" | "neutral";
    let recommendationReason: string;

    if (totalPensionPV > lumpSumOffer * 1.1) {
      recommendation = "pension";
      recommendationReason = `The pension's present value (${formatCurrency(totalPensionPV)}) exceeds the lump sum by more than 10%.`;
    } else if (lumpSumOffer > totalPensionPV * 1.1) {
      recommendation = "lumpsum";
      recommendationReason = `The lump sum offer exceeds the pension's present value (${formatCurrency(totalPensionPV)}) by more than 10%.`;
    } else if (colaPension === 0) {
      recommendation = "lumpsum";
      recommendationReason = "Without COLA, inflation will erode your pension's purchasing power. A lump sum invested wisely can keep pace with inflation.";
    } else if (needsSurvivorBenefit && survivorBenefitPercent < 50) {
      recommendation = "lumpsum";
      recommendationReason = "Limited survivor benefits may leave your spouse financially vulnerable. A lump sum provides more flexibility for estate planning.";
    } else {
      recommendation = "neutral";
      recommendationReason = "Both options are roughly equal. Consider your health, risk tolerance, and need for guaranteed income.";
    }

    return {
      breakEvenAge,
      yearsToBreakeven,
      pensionPV: totalPensionPV,
      survivorPV,
      lumpSumNeededFor4Percent,
      lumpSumAfterTax,
      pensionAnnualAfterTax,
      totalPensionIncome,
      totalPensionWithCOLA,
      lumpSumAtLifeExpectancy,
      lumpSumMonthlyIncome,
      yearsOfPayment,
      annualPension,
      recommendation,
      recommendationReason,
      yearlyData: yearlyData.slice(0, Math.min(30, yearsOfPayment + 5)),
    };
  }, [
    monthlyPension,
    lumpSumOffer,
    currentAge,
    lifeExpectancy,
    expectedReturn,
    inflationRate,
    taxBracket,
    colaPension,
    survivorBenefitPercent,
    spouseAge,
    needsSurvivorBenefit,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-500/30">
          <Scale className="h-4 w-4" />
          Pension Decision Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Pension vs Lump Sum Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Should you take the guaranteed monthly pension or the one-time lump sum? This calculator helps you make an informed decision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Pension Details */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <DollarSign className="h-5 w-5 text-blue-600" />
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
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-blue-500"
                    min="0"
                    step="100"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Annual: {formatFullCurrency(monthlyPension * 12)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Lump Sum Offer
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={lumpSumOffer}
                    onChange={(e) => setLumpSumOffer(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-blue-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  Pension COLA (Cost of Living Adjustment): {colaPension}%
                  <div className="group relative">
                    <Info className="h-4 w-4 text-slate-500 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-100 text-xs text-slate-600 rounded-lg p-3 border border-slate-700 z-10">
                      Annual increase in pension benefits to offset inflation. Many pensions have 0% COLA, making them lose purchasing power over time.
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0% (No COLA)</span>
                  <span>2%</span>
                  <span>4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Calendar className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your Current Age: {currentAge}
                </label>
                <input
                  type="range"
                  min="50"
                  max="70"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Life Expectancy: {lifeExpectancy}
                </label>
                <input
                  type="range"
                  min="70"
                  max="100"
                  value={lifeExpectancy}
                  onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Expected years of payment: {lifeExpectancy - currentAge} years
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Tax Bracket: {taxBracket}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="37"
                  value={taxBracket}
                  onChange={(e) => setTaxBracket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10%</span>
                  <span>22%</span>
                  <span>37%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Survivor Benefits */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Survivor Benefits</h3>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needsSurvivorBenefit}
                  onChange={(e) => setNeedsSurvivorBenefit(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-600 bg-slate-100 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-slate-600">Need survivor benefits for spouse</span>
              </label>

              {needsSurvivorBenefit && (
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
                      Spouse Age: {spouseAge}
                    </label>
                    <input
                      type="range"
                      min="45"
                      max="80"
                      value={spouseAge}
                      onChange={(e) => setSpouseAge(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Investment Assumptions */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                <TrendingUp className="h-5 w-5 text-[#B22234]" />
              </div>
              <h3 className="text-lg font-semibold">Investment Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Investment Return: {expectedReturn}%
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Conservative (2%)</span>
                  <span>6%</span>
                  <span>Aggressive (10%)</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Inflation: {inflationRate}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Recommendation */}
          <div className={`rounded-xl p-6 border ${
            calculations.recommendation === "pension"
              ? 'bg-blue-500/20 border-blue-500/30'
              : calculations.recommendation === "lumpsum"
              ? 'bg-[#B22234]/10 border-[#B22234]/30'
              : 'bg-purple-500/20 border-purple-500/30'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {calculations.recommendation === "pension" ? (
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              ) : calculations.recommendation === "lumpsum" ? (
                <CheckCircle2 className="h-8 w-8 text-[#B22234]" />
              ) : (
                <Scale className="h-8 w-8 text-purple-400" />
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {calculations.recommendation === "pension"
                    ? "Pension May Be Better"
                    : calculations.recommendation === "lumpsum"
                    ? "Lump Sum May Be Better"
                    : "Close Call - Consider Both"}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {calculations.recommendationReason}
                </p>
              </div>
            </div>
          </div>

          {/* Break-Even Analysis */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Break-Even Analysis
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  Age {calculations.breakEvenAge}
                </div>
                <div className="text-sm text-slate-500">Break-Even Age</div>
                <div className="text-xs text-slate-500 mt-1">
                  ({calculations.yearsToBreakeven} years from now)
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {formatCurrency(calculations.pensionPV)}
                </div>
                <div className="text-sm text-slate-500">Pension Present Value</div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-500">
                If you live to age {lifeExpectancy}, the pension will pay out{" "}
                <span className="text-slate-900 font-semibold">
                  {formatFullCurrency(calculations.totalPensionWithCOLA)}
                </span>{" "}
                total. Meanwhile, the lump sum would grow to{" "}
                <span className="text-slate-900 font-semibold">
                  {formatFullCurrency(calculations.lumpSumAtLifeExpectancy)}
                </span>{" "}
                at {expectedReturn}% return.
              </p>
            </div>
          </div>

          {/* NPV Comparison */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4">Present Value Comparison</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-500">Pension NPV</span>
                  <span className="font-semibold text-blue-600">
                    {formatFullCurrency(calculations.pensionPV)}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${Math.min(100, (calculations.pensionPV / Math.max(calculations.pensionPV, lumpSumOffer)) * 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-500">Lump Sum Offer</span>
                  <span className="font-semibold text-[#B22234]">
                    {formatFullCurrency(lumpSumOffer)}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${Math.min(100, (lumpSumOffer / Math.max(calculations.pensionPV, lumpSumOffer)) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Difference</span>
                  <span className={`font-semibold ${calculations.pensionPV > lumpSumOffer ? 'text-blue-600' : 'text-[#B22234]'}`}>
                    {calculations.pensionPV > lumpSumOffer ? '+' : ''}{formatFullCurrency(calculations.pensionPV - lumpSumOffer)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4% Rule Analysis */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4">4% Rule Analysis</h3>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm text-slate-500 mb-1">To match pension income with 4% withdrawal...</div>
                <div className="text-xl font-bold text-[#B22234]">
                  You need: {formatFullCurrency(calculations.lumpSumNeededFor4Percent)}
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  {lumpSumOffer >= calculations.lumpSumNeededFor4Percent ? (
                    <span className="text-green-600">Lump sum exceeds this amount!</span>
                  ) : (
                    <span className="text-red-600">
                      Lump sum is {formatFullCurrency(calculations.lumpSumNeededFor4Percent - lumpSumOffer)} short
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">Lump sum generates monthly</span>
                <span className="font-semibold text-green-600">
                  {formatFullCurrency(calculations.lumpSumMonthlyIncome)}/mo
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">vs. Pension monthly</span>
                <span className="font-semibold text-blue-600">
                  {formatFullCurrency(monthlyPension)}/mo
                </span>
              </div>
            </div>
          </div>

          {/* Pros & Cons Table */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4">Pros & Cons</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Pension Pros/Cons */}
              <div>
                <div className="text-blue-600 font-semibold mb-3 flex items-center gap-2">
                  <Scale className="h-4 w-4" />
                  Monthly Pension
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Guaranteed lifetime income</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">No investment risk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Can't outlive payments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">{colaPension === 0 ? "No inflation protection" : "Limited inflation protection"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Nothing left for heirs</span>
                  </div>
                </div>
              </div>

              {/* Lump Sum Pros/Cons */}
              <div>
                <div className="text-[#B22234] font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Lump Sum
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Full control of your money</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Can hedge inflation with Gold IRA</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Estate inheritance potential</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Investment risk on you</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">Could outlive savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Bridge Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">The Inflation Problem with Pensions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">Without COLA</div>
              <p className="text-slate-600 text-sm">
                A ${formatFullCurrency(monthlyPension)}/month pension with 0% COLA will have the purchasing power of just ${formatFullCurrency(monthlyPension / Math.pow(1.03, 20))}/month in 20 years (at 3% inflation). You lose nearly half your buying power.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Gold IRA Solution</div>
              <p className="text-slate-600 text-sm">
                Rolling a lump sum into a Gold IRA can protect purchasing power. Gold has historically kept pace with or exceeded inflation over 20+ year periods, preserving your retirement lifestyle.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm">
                <strong className="text-[#B22234]">Key Insight:</strong> If your pension has no COLA, inflation erodes value over time. A lump sum rolled into a Gold IRA can protect purchasing power while still providing retirement income through strategic withdrawals.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="pension-vs-lump-sum-calculator"
            subheadline="Considering a pension buyout? A Gold IRA can help protect your lump sum from inflation while generating income. Get expert guidance on rolling over your pension payout."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Pension vs Lump Sum</h2>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is a Pension Buyout?</h3>
            <p className="text-slate-500 mb-4">
              A pension buyout (or lump sum option) is when your employer offers you a one-time payment instead of monthly pension checks for life. This is becoming increasingly common as companies look to reduce long-term pension obligations.
            </p>
            <p className="text-slate-500">
              The decision between taking the lump sum or keeping the pension is one of the biggest financial decisions retirees face. There's no universally "right" answer - it depends on your health, financial situation, risk tolerance, and goals.
            </p>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">When to Consider the Lump Sum</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <span>Your pension has no or minimal COLA adjustments</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <span>You have health concerns that may reduce life expectancy</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <span>Concerned about pension fund stability or company bankruptcy</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <span>Want to leave inheritance to heirs</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <span>Confident in your ability to manage investments</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">When to Keep the Pension</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>You value guaranteed income and peace of mind</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Family longevity suggests you'll live well past break-even</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Not comfortable managing a large investment portfolio</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Pension includes strong COLA protections</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Backed by PBGC insurance (up to limits)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
