"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import {
  Calculator,
  DollarSign,
  Calendar,
  TrendingUp,
  Info,
  ArrowRight,
  Users,
  Percent,
} from "lucide-react";
import Link from "next/link";

type RetirementType = "immediate" | "early" | "mra10" | "deferred";
type SurvivorBenefit = "none" | "partial25" | "full50";

interface AnnuityResult {
  multiplier: number;
  grossAnnualAnnuity: number;
  grossMonthlyAnnuity: number;
  survivorReduction: number;
  netAnnualAnnuity: number;
  netMonthlyAnnuity: number;
  earlyRetirementReduction: number;
  tenYearProjection: {
    year: number;
    annuity: number;
    cumulative: number;
  }[];
  lifetimeValue25Years: number;
}

export function FERSAnnuityCalculator() {
  const [highThreeSalary, setHighThreeSalary] = useState(100000);
  const [yearsOfService, setYearsOfService] = useState(25);
  const [retirementAge, setRetirementAge] = useState(62);
  const [retirementType, setRetirementType] = useState<RetirementType>("immediate");
  const [survivorBenefit, setSurvivorBenefit] = useState<SurvivorBenefit>("none");
  const [colaRate, setColaRate] = useState(2.5);
  const [result, setResult] = useState<AnnuityResult | null>(null);

  // Minimum Retirement Age
  const mra = 57;

  const retirementOptions = [
    { value: "immediate", label: "Immediate (MRA+30, 60+20, or 62+5)" },
    { value: "early", label: "Early (Special provisions - LEO/FF)" },
    { value: "mra10", label: "MRA + 10 (Reduced benefit)" },
    { value: "deferred", label: "Deferred (Separate before retirement age)" },
  ];

  const survivorOptions = [
    { value: "none", label: "No Survivor Benefit", reduction: 0 },
    { value: "partial25", label: "25% Survivor (-5% reduction)", reduction: 5 },
    { value: "full50", label: "50% Survivor (-10% reduction)", reduction: 10 },
  ];

  function calculateAnnuity() {
    // Determine multiplier
    // 1% x High-3 x Years (standard)
    // 1.1% x High-3 x Years (if age 62+ with 20+ years)
    let multiplier = 0.01;
    if (retirementAge >= 62 && yearsOfService >= 20) {
      multiplier = 0.011;
    }

    // Calculate gross annual annuity
    let grossAnnual = multiplier * highThreeSalary * yearsOfService;

    // Apply early retirement reduction for MRA+10
    let earlyReduction = 0;
    if (retirementType === "mra10" && retirementAge < 62) {
      const yearsBelow62 = 62 - retirementAge;
      earlyReduction = yearsBelow62 * 5; // 5% per year before 62
      grossAnnual = grossAnnual * (1 - earlyReduction / 100);
    }

    // Apply survivor benefit reduction
    let survivorReduction = 0;
    if (survivorBenefit === "partial25") {
      survivorReduction = grossAnnual * 0.05;
    } else if (survivorBenefit === "full50") {
      survivorReduction = grossAnnual * 0.10;
    }

    const netAnnual = grossAnnual - survivorReduction;
    const netMonthly = netAnnual / 12;
    const grossMonthly = grossAnnual / 12;

    // 10-year projection with COLA
    const projection = [];
    let currentAnnuity = netAnnual;
    let cumulative = 0;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < 10; i++) {
      if (i > 0 && retirementType !== "mra10") {
        // COLA typically applies starting in December after retirement
        // Using simplified annual COLA
        currentAnnuity = currentAnnuity * (1 + colaRate / 100);
      } else if (i > 0 && retirementType === "mra10" && (retirementAge + i) >= 62) {
        // MRA+10 retirees get COLA starting at age 62
        currentAnnuity = currentAnnuity * (1 + colaRate / 100);
      }
      cumulative += currentAnnuity;
      projection.push({
        year: currentYear + i,
        annuity: currentAnnuity,
        cumulative,
      });
    }

    // 25-year lifetime value estimate
    let lifetimeValue = 0;
    let annuityValue = netAnnual;
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        annuityValue = annuityValue * (1 + colaRate / 100);
      }
      lifetimeValue += annuityValue;
    }

    setResult({
      multiplier,
      grossAnnualAnnuity: grossAnnual + survivorReduction, // Before survivor reduction
      grossMonthlyAnnuity: (grossAnnual + survivorReduction) / 12,
      survivorReduction,
      netAnnualAnnuity: netAnnual,
      netMonthlyAnnuity: netMonthly,
      earlyRetirementReduction: earlyReduction,
      tenYearProjection: projection,
      lifetimeValue25Years: lifetimeValue,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              FERS ANNUITY CALCULATOR
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Calculate Your FERS Pension Benefit
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estimate your FERS basic annuity with survivor benefits and COLA projections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your Information</h3>

              {/* High-3 Salary */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  High-3 Average Salary
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={highThreeSalary}
                    onChange={(e) => setHighThreeSalary(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Years of Service */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Years of Creditable Service: <span className="text-blue-400 font-bold">{yearsOfService} years</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={yearsOfService}
                  onChange={(e) => setYearsOfService(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
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
                  Retirement Age: <span className="text-blue-400 font-bold">{retirementAge}</span>
                </label>
                <input
                  type="range"
                  min={55}
                  max={70}
                  step={1}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>55</span>
                  <span>MRA (57)</span>
                  <span>62</span>
                  <span>70</span>
                </div>
              </div>

              {/* Retirement Type */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Retirement Type
                </label>
                <select
                  value={retirementType}
                  onChange={(e) => setRetirementType(e.target.value as RetirementType)}
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  {retirementOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Survivor Benefit */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Survivor Benefit Election
                </label>
                <div className="space-y-2">
                  {survivorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSurvivorBenefit(option.value as SurvivorBenefit)}
                      className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                        survivorBenefit === option.value
                          ? "bg-blue-500/20 border border-blue-500/50 text-white"
                          : "bg-slate-800 border border-white/10 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {option.value === survivorBenefit && (
                          <Users className="h-4 w-4 text-blue-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* COLA Assumption */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  COLA Assumption: <span className="text-blue-400 font-bold">{colaRate}%</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  value={colaRate}
                  onChange={(e) => setColaRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0%</span>
                  <span>2.5%</span>
                  <span>5%</span>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateAnnuity}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Calculate FERS Annuity
              </button>
            </div>

            {/* Results Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your Results</h3>

              {result ? (
                <div className="space-y-6">
                  {/* Monthly Annuity */}
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                      <DollarSign className="h-4 w-4" />
                      NET MONTHLY ANNUITY
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatCurrency(result.netMonthlyAnnuity)}
                    </div>
                    <p className="text-slate-400 text-sm">
                      {formatCurrency(result.netAnnualAnnuity)} per year
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-slate-800/50 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Multiplier</span>
                      <span className="text-white font-semibold">{(result.multiplier * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Gross Annual Annuity</span>
                      <span className="text-white font-semibold">{formatCurrency(result.grossAnnualAnnuity)}</span>
                    </div>
                    {result.earlyRetirementReduction > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Early Retirement Reduction</span>
                        <span className="text-red-400 font-semibold">-{result.earlyRetirementReduction}%</span>
                      </div>
                    )}
                    {result.survivorReduction > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Survivor Benefit Reduction</span>
                        <span className="text-amber-400 font-semibold">-{formatCurrency(result.survivorReduction)}/yr</span>
                      </div>
                    )}
                  </div>

                  {/* Formula */}
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">
                      <strong className="text-white">Formula:</strong>{" "}
                      {(result.multiplier * 100).toFixed(1)}% x {formatCurrency(highThreeSalary)} x {yearsOfService} years = {formatCurrency(result.grossAnnualAnnuity)}/year
                    </p>
                  </div>

                  {/* 10-Year Projection */}
                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold mb-4">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                      10-Year COLA Projection ({colaRate}% annual)
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="py-2 px-2 text-left text-slate-500">Year</th>
                            <th className="py-2 px-2 text-right text-slate-500">Annual</th>
                            <th className="py-2 px-2 text-right text-slate-500">Cumulative</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.tenYearProjection.map((proj, idx) => (
                            <tr
                              key={proj.year}
                              className={`border-b border-white/5 ${
                                idx === 0 ? "bg-blue-500/5" : ""
                              }`}
                            >
                              <td className="py-2 px-2 text-slate-300">{proj.year}</td>
                              <td className="py-2 px-2 text-right text-white">
                                {formatCurrency(proj.annuity)}
                              </td>
                              <td className="py-2 px-2 text-right text-blue-400 font-medium">
                                {formatCurrency(proj.cumulative)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 25-Year Value */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-green-400 text-sm mb-1">
                      <Percent className="h-4 w-4" />
                      25-YEAR ESTIMATED VALUE
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {formatCurrency(result.lifetimeValue25Years)}
                    </div>
                    <p className="text-slate-400 text-xs mt-1">
                      Total pension value over 25 years with {colaRate}% annual COLA
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-center rounded-xl transition-all"
                  >
                    Protect Your Federal Pension
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-slate-500" />
                  </div>
                  <p className="text-slate-400">
                    Enter your information and click &quot;Calculate&quot; to see your FERS annuity estimate.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Info className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  About the 1.1% Multiplier
                </h4>
                <p className="text-slate-400 text-sm">
                  If you retire at age 62 or older with at least 20 years of service, your annuity
                  is calculated using the 1.1% multiplier instead of 1%. This can significantly
                  increase your pension. For example, with 25 years and a $100,000 High-3:
                  1% = $25,000/year vs 1.1% = $27,500/year - a $2,500 annual difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
