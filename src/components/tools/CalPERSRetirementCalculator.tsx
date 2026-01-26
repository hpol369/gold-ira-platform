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
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// CalPERS benefit formulas and age factors
const BENEFIT_FORMULAS = {
  classic2at55: {
    name: "Classic 2% @ 55",
    description: "For members hired before January 1, 2013",
    baseAge: 55,
    basePercent: 2.0,
    finalCompPeriod: 12, // months
    ageFactors: {
      50: 1.1,
      51: 1.22,
      52: 1.34,
      53: 1.46,
      54: 1.58,
      55: 2.0,
      56: 2.0,
      57: 2.0,
      58: 2.0,
      59: 2.0,
      60: 2.0,
      61: 2.0,
      62: 2.0,
      63: 2.418,
    },
    minRetirementAge: 50,
    maxAgeFactor: 2.418,
  },
  classic2at60: {
    name: "Classic 2% @ 60",
    description: "For miscellaneous members hired before January 1, 2013",
    baseAge: 60,
    basePercent: 2.0,
    finalCompPeriod: 12, // months
    ageFactors: {
      50: 1.092,
      51: 1.156,
      52: 1.22,
      53: 1.284,
      54: 1.348,
      55: 1.412,
      56: 1.476,
      57: 1.54,
      58: 1.604,
      59: 1.668,
      60: 2.0,
      61: 2.0,
      62: 2.0,
      63: 2.418,
    },
    minRetirementAge: 50,
    maxAgeFactor: 2.418,
  },
  pepra2at62: {
    name: "PEPRA 2% @ 62",
    description: "For members hired on or after January 1, 2013",
    baseAge: 62,
    basePercent: 2.0,
    finalCompPeriod: 36, // months (3 years)
    ageFactors: {
      52: 1.0,
      53: 1.1,
      54: 1.2,
      55: 1.3,
      56: 1.4,
      57: 1.5,
      58: 1.6,
      59: 1.7,
      60: 1.8,
      61: 1.9,
      62: 2.0,
      63: 2.1,
      64: 2.2,
      65: 2.3,
      66: 2.4,
      67: 2.5,
    },
    minRetirementAge: 52,
    maxAgeFactor: 2.5,
  },
};

type FormulaKey = keyof typeof BENEFIT_FORMULAS;

interface CalPERSResult {
  monthlyBenefit: number;
  annualBenefit: number;
  ageFactor: number;
  formula: string;
  survivor50: number;
  survivor75: number;
  survivor100: number;
  colaAdjusted5yr: number;
  colaAdjusted10yr: number;
  colaAdjusted20yr: number;
}

export function CalPERSRetirementCalculator() {
  const [membershipYear, setMembershipYear] = useState(2010);
  const [finalCompensation, setFinalCompensation] = useState(100000);
  const [serviceYears, setServiceYears] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [formula, setFormula] = useState<FormulaKey>("classic2at55");
  const [result, setResult] = useState<CalPERSResult | null>(null);

  // Automatically select formula based on membership year
  const suggestedFormula = useMemo(() => {
    if (membershipYear >= 2013) return "pepra2at62";
    return "classic2at55"; // Could also be classic2at60 depending on employer type
  }, [membershipYear]);

  function getAgeFactor(formulaKey: FormulaKey, age: number): number {
    const formulaData = BENEFIT_FORMULAS[formulaKey];
    const factors = formulaData.ageFactors;

    // Get the closest age factor
    const ages = Object.keys(factors).map(Number).sort((a, b) => a - b);
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];

    if (age < minAge) return factors[minAge as keyof typeof factors];
    if (age > maxAge) return formulaData.maxAgeFactor;

    // For exact ages, return the factor
    if (age in factors) return factors[age as keyof typeof factors];

    // Linear interpolation between ages
    const lowerAge = ages.filter(a => a <= age).pop() || minAge;
    const upperAge = ages.find(a => a > age) || maxAge;
    const lowerFactor = factors[lowerAge as keyof typeof factors];
    const upperFactor = factors[upperAge as keyof typeof factors];

    return lowerFactor + ((age - lowerAge) / (upperAge - lowerAge)) * (upperFactor - lowerFactor);
  }

  function calculateBenefit() {
    const formulaData = BENEFIT_FORMULAS[formula];

    // Check minimum retirement age
    if (retirementAge < formulaData.minRetirementAge) {
      alert(`Minimum retirement age for ${formulaData.name} is ${formulaData.minRetirementAge}`);
      return;
    }

    const ageFactor = getAgeFactor(formula, retirementAge);

    // CalPERS formula: Age Factor % x Service Years x Final Compensation
    const annualBenefit = (ageFactor / 100) * serviceYears * finalCompensation;
    const monthlyBenefit = annualBenefit / 12;

    // Survivor benefit options (reduction percentages)
    // Option 1: 100% to survivor = ~10% reduction
    // Option 2: 75% to survivor = ~7.5% reduction
    // Option 3: 50% to survivor = ~5% reduction
    const survivor50 = monthlyBenefit * 0.95;
    const survivor75 = monthlyBenefit * 0.925;
    const survivor100 = monthlyBenefit * 0.90;

    // COLA projections (CalPERS typically provides 2% annual COLA)
    const colaRate = 0.02;
    const colaAdjusted5yr = annualBenefit * Math.pow(1 + colaRate, 5);
    const colaAdjusted10yr = annualBenefit * Math.pow(1 + colaRate, 10);
    const colaAdjusted20yr = annualBenefit * Math.pow(1 + colaRate, 20);

    setResult({
      monthlyBenefit,
      annualBenefit,
      ageFactor,
      formula: formulaData.name,
      survivor50,
      survivor75,
      survivor100,
      colaAdjusted5yr,
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              CALPERS CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              CalPERS Retirement Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estimate your California Public Employees Retirement System pension
              benefits using official CalPERS formulas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your Information</h3>

              {/* Membership Year */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Year You Became a CalPERS Member
                </label>
                <input
                  type="number"
                  value={membershipYear}
                  onChange={(e) => {
                    const year = Number(e.target.value);
                    setMembershipYear(year);
                    if (year >= 2013) setFormula("pepra2at62");
                  }}
                  min={1970}
                  max={2024}
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white text-lg focus:outline-none focus:border-amber-500"
                />
                {membershipYear >= 2013 && (
                  <p className="text-amber-400 text-sm mt-2">
                    PEPRA member - You are subject to the 2% @ 62 formula
                  </p>
                )}
              </div>

              {/* Benefit Formula Selection */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Benefit Formula
                </label>
                <select
                  value={formula}
                  onChange={(e) => setFormula(e.target.value as FormulaKey)}
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white text-lg focus:outline-none focus:border-amber-500"
                >
                  {Object.entries(BENEFIT_FORMULAS).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.name} - {data.description}
                    </option>
                  ))}
                </select>
                {formula !== suggestedFormula && membershipYear >= 2013 && (
                  <p className="text-amber-400 text-sm mt-2">
                    Note: Based on your membership year, PEPRA 2% @ 62 may be your formula
                  </p>
                )}
              </div>

              {/* Final Compensation */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Final Compensation (Highest {BENEFIT_FORMULAS[formula].finalCompPeriod === 12 ? "12" : "36"} Month Average)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={finalCompensation}
                    onChange={(e) => setFinalCompensation(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white text-lg focus:outline-none focus:border-amber-500"
                  />
                </div>
                <p className="text-slate-500 text-sm mt-2">
                  {BENEFIT_FORMULAS[formula].finalCompPeriod === 12
                    ? "Classic: Average of highest 12 consecutive months"
                    : "PEPRA: Average of highest 36 consecutive months"}
                </p>
              </div>

              {/* Service Years */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Service Credit (Years): <span className="text-amber-400 font-bold">{serviceYears}</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={0.5}
                  value={serviceYears}
                  onChange={(e) => setServiceYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5 years</span>
                  <span>20 years</span>
                  <span>40 years</span>
                </div>
              </div>

              {/* Retirement Age */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Retirement Age: <span className="text-amber-400 font-bold">{retirementAge}</span>
                </label>
                <input
                  type="range"
                  min={BENEFIT_FORMULAS[formula].minRetirementAge}
                  max={70}
                  step={1}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Min: {BENEFIT_FORMULAS[formula].minRetirementAge}</span>
                  <span>62</span>
                  <span>70</span>
                </div>
              </div>

              {/* Age Factor Display */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-400 font-semibold text-sm">
                      Age Factor at {retirementAge}: {getAgeFactor(formula, retirementAge).toFixed(3)}%
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {BENEFIT_FORMULAS[formula].name} - Max factor: {BENEFIT_FORMULAS[formula].maxAgeFactor}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateBenefit}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Calculate My CalPERS Benefit
              </button>
            </div>

            {/* Results Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your CalPERS Estimate</h3>

              {result ? (
                <div className="space-y-6">
                  {/* Primary Result */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-amber-400 text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      ESTIMATED MONTHLY BENEFIT
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatCurrency(result.monthlyBenefit)}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {formatCurrency(result.annualBenefit)} per year
                    </div>
                  </div>

                  {/* Formula Breakdown */}
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Calculation Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Formula</span>
                        <span className="text-white">{result.formula}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Age Factor</span>
                        <span className="text-amber-400">{result.ageFactor.toFixed(3)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Service Credit</span>
                        <span className="text-white">{serviceYears} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Final Compensation</span>
                        <span className="text-white">{formatCurrency(finalCompensation)}</span>
                      </div>
                      <div className="border-t border-white/10 pt-2 mt-2">
                        <p className="text-slate-500 text-xs">
                          {result.ageFactor.toFixed(3)}% x {serviceYears} x {formatCurrency(finalCompensation)} = {formatCurrency(result.annualBenefit)}/year
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Survivor Options */}
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-white font-semibold mb-3">
                      <Users className="h-5 w-5 text-blue-400" />
                      Survivor Benefit Options
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-slate-300 text-sm">100% to Survivor</span>
                          <span className="text-slate-500 text-xs block">~10% reduction</span>
                        </div>
                        <span className="text-white font-semibold">{formatCurrency(result.survivor100)}/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-slate-300 text-sm">75% to Survivor</span>
                          <span className="text-slate-500 text-xs block">~7.5% reduction</span>
                        </div>
                        <span className="text-white font-semibold">{formatCurrency(result.survivor75)}/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-slate-300 text-sm">50% to Survivor</span>
                          <span className="text-slate-500 text-xs block">~5% reduction</span>
                        </div>
                        <span className="text-white font-semibold">{formatCurrency(result.survivor50)}/mo</span>
                      </div>
                    </div>
                  </div>

                  {/* COLA Projections */}
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-white font-semibold mb-3">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      COLA Projections (2% Annual)
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">After 5 Years</span>
                        <span className="text-green-400">{formatCurrency(result.colaAdjusted5yr)}/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">After 10 Years</span>
                        <span className="text-green-400">{formatCurrency(result.colaAdjusted10yr)}/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">After 20 Years</span>
                        <span className="text-green-400">{formatCurrency(result.colaAdjusted20yr)}/year</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-center rounded-xl transition-all"
                  >
                    Protect Your Pension with Gold
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-slate-500" />
                  </div>
                  <p className="text-slate-400">
                    Enter your information and click &quot;Calculate My CalPERS Benefit&quot; to see your
                    estimated pension.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Key CalPERS Facts */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <CheckCircle2 className="h-8 w-8 text-green-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Guaranteed for Life</h4>
              <p className="text-slate-400 text-sm">
                CalPERS pensions are guaranteed monthly income for life, with optional survivor benefits for your spouse.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-amber-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Cost-of-Living Adjustments</h4>
              <p className="text-slate-400 text-sm">
                Most CalPERS benefits include a 2% annual COLA to help your pension keep pace with inflation.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Info className="h-8 w-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Health Benefits</h4>
              <p className="text-slate-400 text-sm">
                CalPERS retirees may be eligible for health insurance benefits through the CalPERS Health Program.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
