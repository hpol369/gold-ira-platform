"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import {
  Calculator,
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  Info,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// CalSTRS Age Factor Tables
const AGE_FACTORS_2AT60 = {
  50: 1.16,
  51: 1.24,
  52: 1.32,
  53: 1.40,
  54: 1.48,
  55: 1.56,
  56: 1.64,
  57: 1.72,
  58: 1.80,
  59: 1.88,
  60: 2.00,
  61: 2.20,
  62: 2.40,
  // 63+ stays at 2.4%
};

const AGE_FACTORS_2AT62_PEPRA = {
  55: 1.16,
  56: 1.28,
  57: 1.40,
  58: 1.52,
  59: 1.64,
  60: 1.76,
  61: 1.88,
  62: 2.00,
  63: 2.10,
  64: 2.20,
  65: 2.30,
  // 65+ stays at 2.3%
};

type FormulaType = "2at60" | "2at62pepra";

interface CalSTRSResult {
  monthlyBenefit: number;
  annualBenefit: number;
  ageFactor: number;
  formula: string;
  survivor100: number;
  survivor75: number;
  survivor50: number;
  modifiedSurvivor: number;
  lifetimeBenefitAt80: number;
  lifetimeBenefitAt85: number;
  lifetimeBenefitAt90: number;
  colaAdjusted10yr: number;
  colaAdjusted20yr: number;
}

export function CalSTRSCalculator() {
  const [membershipYear, setMembershipYear] = useState(2008);
  const [finalCompensation, setFinalCompensation] = useState(90000);
  const [serviceYears, setServiceYears] = useState(30);
  const [retirementAge, setRetirementAge] = useState(62);
  const [formula, setFormula] = useState<FormulaType>("2at60");
  const [result, setResult] = useState<CalSTRSResult | null>(null);

  // Automatically suggest formula based on membership year
  const suggestedFormula = useMemo(() => {
    return membershipYear >= 2013 ? "2at62pepra" : "2at60";
  }, [membershipYear]);

  function getAgeFactor(formulaType: FormulaType, age: number): number {
    const factors = formulaType === "2at60" ? AGE_FACTORS_2AT60 : AGE_FACTORS_2AT62_PEPRA;
    const ages = Object.keys(factors).map(Number).sort((a, b) => a - b);
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    const maxFactor = formulaType === "2at60" ? 2.4 : 2.3;

    if (age < minAge) return factors[minAge as keyof typeof factors];
    if (age > maxAge) return maxFactor;

    if (age in factors) return factors[age as keyof typeof factors];

    // Linear interpolation
    const lowerAge = ages.filter(a => a <= age).pop() || minAge;
    const upperAge = ages.find(a => a > age) || maxAge;
    const lowerFactor = factors[lowerAge as keyof typeof factors];
    const upperFactor = factors[upperAge as keyof typeof factors] || maxFactor;

    return lowerFactor + ((age - lowerAge) / (upperAge - lowerAge)) * (upperFactor - lowerFactor);
  }

  function calculateBenefit() {
    const minAge = formula === "2at60" ? 50 : 55;

    if (retirementAge < minAge) {
      alert(`Minimum retirement age for ${formula === "2at60" ? "2% @ 60" : "PEPRA 2% @ 62"} is ${minAge}`);
      return;
    }

    const ageFactor = getAgeFactor(formula, retirementAge);

    // CalSTRS formula: Service Credit x Age Factor x Final Compensation
    const annualBenefit = serviceYears * (ageFactor / 100) * finalCompensation;
    const monthlyBenefit = annualBenefit / 12;

    // Survivor benefit options - CalSTRS specific reductions
    // Option 1: 100% survivor = approximately 11-15% reduction
    // Option 2: 75% survivor = approximately 8-11% reduction
    // Option 3: 50% survivor = approximately 5-7% reduction
    // Modified Benefit (reduced to Social Security level at 65) = higher initial benefit
    const survivor100 = monthlyBenefit * 0.88;
    const survivor75 = monthlyBenefit * 0.92;
    const survivor50 = monthlyBenefit * 0.95;
    const modifiedSurvivor = monthlyBenefit * 1.03; // Slightly higher until 65

    // Lifetime benefit projections (total received)
    const yearsTo80 = 80 - retirementAge;
    const yearsTo85 = 85 - retirementAge;
    const yearsTo90 = 90 - retirementAge;

    const lifetimeBenefitAt80 = annualBenefit * Math.max(0, yearsTo80);
    const lifetimeBenefitAt85 = annualBenefit * Math.max(0, yearsTo85);
    const lifetimeBenefitAt90 = annualBenefit * Math.max(0, yearsTo90);

    // COLA projections (CalSTRS has 2% simple COLA, not compound)
    // Actually CalSTRS uses 2% of initial benefit per year
    const colaAdjusted10yr = annualBenefit + (annualBenefit * 0.02 * 10);
    const colaAdjusted20yr = annualBenefit + (annualBenefit * 0.02 * 20);

    setResult({
      monthlyBenefit,
      annualBenefit,
      ageFactor,
      formula: formula === "2at60" ? "2% @ 60" : "PEPRA 2% @ 62",
      survivor100,
      survivor75,
      survivor50,
      modifiedSurvivor,
      lifetimeBenefitAt80,
      lifetimeBenefitAt85,
      lifetimeBenefitAt90,
      colaAdjusted10yr,
      colaAdjusted20yr,
    });
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-600 font-semibold text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              CALSTRS CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              CalSTRS Retirement Calculator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Estimate your California State Teachers Retirement System pension
              for educators and school employees.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#000080] mb-6">Your Teaching Career</h3>

              {/* Membership Year */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Year You Became a CalSTRS Member
                </label>
                <input
                  type="number"
                  value={membershipYear}
                  onChange={(e) => {
                    const year = Number(e.target.value);
                    setMembershipYear(year);
                    if (year >= 2013) setFormula("2at62pepra");
                    else setFormula("2at60");
                  }}
                  min={1970}
                  max={2024}
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 text-lg focus:outline-none focus:border-blue-500"
                />
                {membershipYear >= 2013 ? (
                  <p className="text-blue-600 text-sm mt-2">
                    PEPRA member - You are subject to the 2% @ 62 formula
                  </p>
                ) : (
                  <p className="text-green-600 text-sm mt-2">
                    Classic member - You have the 2% @ 60 formula
                  </p>
                )}
              </div>

              {/* Formula Selection */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Benefit Formula
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFormula("2at60")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formula === "2at60"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-slate-900 font-semibold block">2% @ 60</span>
                    <span className="text-slate-500 text-xs">Pre-2013 members</span>
                  </button>
                  <button
                    onClick={() => setFormula("2at62pepra")}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formula === "2at62pepra"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-slate-900 font-semibold block">2% @ 62</span>
                    <span className="text-slate-500 text-xs">PEPRA (2013+)</span>
                  </button>
                </div>
                {formula !== suggestedFormula && (
                  <p className="text-[#B22234] text-xs mt-2">
                    Note: Based on your membership year, {suggestedFormula === "2at60" ? "2% @ 60" : "PEPRA 2% @ 62"} may be your formula
                  </p>
                )}
              </div>

              {/* Final Compensation */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Final Compensation
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={finalCompensation}
                    onChange={(e) => setFinalCompensation(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <p className="text-slate-500 text-sm mt-2">
                  {formula === "2at60"
                    ? "Average of highest 12 consecutive months (or 36 if hired after 1996)"
                    : "Average of highest 36 consecutive months (PEPRA)"}
                </p>
              </div>

              {/* Service Credit */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Service Credit (Years): <span className="text-blue-600 font-bold">{serviceYears}</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={43}
                  step={0.5}
                  value={serviceYears}
                  onChange={(e) => setServiceYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5 years</span>
                  <span>25 years</span>
                  <span>43 years</span>
                </div>
              </div>

              {/* Retirement Age */}
              <div className="mb-6">
                <label className="block text-slate-600 text-sm mb-2">
                  Retirement Age: <span className="text-blue-600 font-bold">{retirementAge}</span>
                </label>
                <input
                  type="range"
                  min={formula === "2at60" ? 50 : 55}
                  max={70}
                  step={1}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Min: {formula === "2at60" ? 50 : 55}</span>
                  <span>{formula === "2at60" ? 60 : 62}</span>
                  <span>70</span>
                </div>
              </div>

              {/* Age Factor Display */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-600 font-semibold text-sm">
                      Age Factor at {retirementAge}: {getAgeFactor(formula, retirementAge).toFixed(2)}%
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Max factor: {formula === "2at60" ? "2.4% at age 63+" : "2.3% at age 65+"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateBenefit}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-slate-900 font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Calculate My CalSTRS Benefit
              </button>
            </div>

            {/* Results Panel */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#000080] mb-6">Your CalSTRS Estimate</h3>

              {result ? (
                <div className="space-y-6">
                  {/* Primary Result */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-blue-600 text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      ESTIMATED MONTHLY BENEFIT
                    </div>
                    <div className="text-4xl font-bold text-[#000080] mb-2">
                      {formatCurrency(result.monthlyBenefit)}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {formatCurrency(result.annualBenefit)} per year
                    </div>
                  </div>

                  {/* Formula Breakdown */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="text-slate-900 font-semibold mb-3">Benefit Formula</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Formula</span>
                        <span className="text-slate-900">{result.formula}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Service Credit</span>
                        <span className="text-slate-900">{serviceYears} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Age Factor</span>
                        <span className="text-blue-600">{result.ageFactor.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Final Compensation</span>
                        <span className="text-slate-900">{formatCurrency(finalCompensation)}</span>
                      </div>
                      <div className="border-t border-slate-200 pt-2 mt-2">
                        <p className="text-slate-500 text-xs">
                          {serviceYears} x {result.ageFactor.toFixed(2)}% x {formatCurrency(finalCompensation)} = {formatCurrency(result.annualBenefit)}/year
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Survivor Options */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      Survivor Benefit Options
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-slate-600">100% Survivor</span>
                          <span className="text-slate-500 text-xs block">~12% reduction</span>
                        </div>
                        <span className="text-slate-900 font-semibold">{formatCurrency(result.survivor100)}/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-slate-600">75% Survivor</span>
                          <span className="text-slate-500 text-xs block">~8% reduction</span>
                        </div>
                        <span className="text-slate-900 font-semibold">{formatCurrency(result.survivor75)}/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-slate-600">50% Survivor</span>
                          <span className="text-slate-500 text-xs block">~5% reduction</span>
                        </div>
                        <span className="text-slate-900 font-semibold">{formatCurrency(result.survivor50)}/mo</span>
                      </div>
                    </div>
                  </div>

                  {/* COLA Projections */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      COLA Projections (2% per year)
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">After 10 Years</span>
                        <span className="text-green-600">{formatCurrency(result.colaAdjusted10yr)}/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">After 20 Years</span>
                        <span className="text-green-600">{formatCurrency(result.colaAdjusted20yr)}/year</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs mt-2">
                      CalSTRS COLA is 2% of your initial benefit, added each year
                    </p>
                  </div>

                  {/* Lifetime Projections */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="text-slate-900 font-semibold mb-3">Lifetime Benefit Projections</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Total by Age 80</span>
                        <span className="text-slate-900">{formatCurrency(result.lifetimeBenefitAt80)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Total by Age 85</span>
                        <span className="text-slate-900">{formatCurrency(result.lifetimeBenefitAt85)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Total by Age 90</span>
                        <span className="text-slate-900">{formatCurrency(result.lifetimeBenefitAt90)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-slate-900 font-bold text-center rounded-xl transition-all"
                  >
                    Protect Your Teacher Pension
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-slate-500" />
                  </div>
                  <p className="text-slate-500">
                    Enter your teaching career information and click &quot;Calculate My CalSTRS Benefit&quot;
                    to see your estimated pension.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Age Factor Table */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#000080] mb-6 text-center">CalSTRS Age Factor Tables</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 2% @ 60 Table */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
                <div className="bg-blue-500/10 p-4 border-b border-slate-200">
                  <h4 className="text-slate-900 font-semibold">2% @ 60 (Classic Members)</h4>
                  <p className="text-slate-600 text-sm">For members hired before January 1, 2013</p>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    {Object.entries(AGE_FACTORS_2AT60).slice(0, 8).map(([age, factor]) => (
                      <div key={age} className="flex justify-between p-2 bg-slate-50 rounded">
                        <span className="text-slate-500">{age}</span>
                        <span className="text-slate-900 font-medium">{factor}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs mt-3">Max: 2.4% at age 63+</p>
                </div>
              </div>

              {/* 2% @ 62 PEPRA Table */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
                <div className="bg-[#B22234]/10 p-4 border-b border-slate-200">
                  <h4 className="text-slate-900 font-semibold">2% @ 62 (PEPRA Members)</h4>
                  <p className="text-slate-600 text-sm">For members hired on/after January 1, 2013</p>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    {Object.entries(AGE_FACTORS_2AT62_PEPRA).slice(0, 8).map(([age, factor]) => (
                      <div key={age} className="flex justify-between p-2 bg-slate-50 rounded">
                        <span className="text-slate-500">{age}</span>
                        <span className="text-slate-900 font-medium">{factor}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs mt-3">Max: 2.3% at age 65+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key CalSTRS Facts */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <CheckCircle2 className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">No Social Security</h4>
              <p className="text-slate-600 text-sm">
                Most CalSTRS members do not pay into Social Security. Your CalSTRS pension is your primary retirement income.
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-[#B22234] mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">2% Annual COLA</h4>
              <p className="text-slate-600 text-sm">
                CalSTRS provides a 2% purchasing power protection benefit based on your initial benefit amount.
              </p>
            </div>
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <Info className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">403(b) Supplement</h4>
              <p className="text-slate-600 text-sm">
                Many teachers supplement CalSTRS with a 403(b) plan. Consider diversifying with different asset classes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
