"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  DollarSign,
  Heart,
  TrendingUp,
  Gift,
  Info,
  CheckCircle2,
  Calendar,
  Percent,
  Shield,
} from "lucide-react";

type TrustType = "crat" | "crut";

interface CRTProjection {
  year: number;
  age: number;
  trustValue: number;
  annualPayout: number;
  cumulativePayouts: number;
}

// IRS Section 7520 rate (Applicable Federal Rate for CRT calculations)
// This changes monthly - using approximate 2024/2025 rate
const DEFAULT_AFR = 5.0;

// Life expectancy factors for CRT remainder calculation (simplified)
// These are approximations based on IRS tables
function getLifeExpectancy(age: number): number {
  if (age <= 30) return 52;
  if (age <= 40) return 43;
  if (age <= 50) return 33;
  if (age <= 55) return 28;
  if (age <= 60) return 24;
  if (age <= 65) return 20;
  if (age <= 70) return 16;
  if (age <= 75) return 12;
  if (age <= 80) return 9;
  if (age <= 85) return 6;
  return 4;
}

// Calculate remainder factor for charitable deduction
// Simplified calculation based on IRS methodology
function calculateRemainderFactor(
  payoutRate: number,
  termYears: number,
  afrRate: number,
  trustType: TrustType
): number {
  const i = afrRate / 100;
  const n = termYears;
  const p = payoutRate / 100;

  if (trustType === "crat") {
    // CRAT: Fixed annuity - remainder = 1 - (annuity factor * payout rate)
    // Annuity factor = (1 - (1+i)^-n) / i
    const annuityFactor = (1 - Math.pow(1 + i, -n)) / i;
    return Math.max(0.1, 1 - (annuityFactor * p));
  } else {
    // CRUT: Unitrust - more complex, using simplified approximation
    // Remainder factor decreases more slowly due to revaluation
    const adjustedRate = p - (i * 0.5); // Simplified adjustment
    const factor = Math.pow(1 - adjustedRate, n);
    return Math.max(0.1, factor);
  }
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function CharitableRemainderTrustCalculator() {
  // Inputs
  const [contributionAmount, setContributionAmount] = useState<number>(500000);
  const [costBasis, setCostBasis] = useState<number>(100000);
  const [trustType, setTrustType] = useState<TrustType>("crut");
  const [payoutRate, setPayoutRate] = useState<number>(5);
  const [termType, setTermType] = useState<"life" | "years">("life");
  const [termYears, setTermYears] = useState<number>(20);
  const [beneficiaryAge, setBeneficiaryAge] = useState<number>(65);
  const [afrRate, setAfrRate] = useState<number>(DEFAULT_AFR);
  const [expectedGrowth, setExpectedGrowth] = useState<number>(7);
  const [marginalTaxRate, setMarginalTaxRate] = useState<number>(32);
  const [capitalGainsRate, setCapitalGainsRate] = useState<number>(20);

  const calculations = useMemo(() => {
    // Determine actual term
    const actualTerm = termType === "life" ? getLifeExpectancy(beneficiaryAge) : termYears;

    // Capital gains avoided (appreciation on contributed assets)
    const appreciatedValue = contributionAmount - costBasis;
    const capitalGainsAvoided = appreciatedValue * (capitalGainsRate / 100);

    // Calculate remainder factor and charitable deduction
    const remainderFactor = calculateRemainderFactor(payoutRate, actualTerm, afrRate, trustType);
    const charitableDeduction = contributionAmount * remainderFactor;

    // Income tax savings from charitable deduction
    const incomeTaxSavings = charitableDeduction * (marginalTaxRate / 100);

    // Total immediate tax benefits
    const totalTaxBenefits = capitalGainsAvoided + incomeTaxSavings;

    // Calculate annual income and projections
    const projections: CRTProjection[] = [];
    let trustValue = contributionAmount;
    let cumulativePayouts = 0;

    for (let i = 0; i < Math.min(actualTerm, 30); i++) {
      const year = new Date().getFullYear() + i;
      const age = beneficiaryAge + i;

      // Annual payout calculation
      const annualPayout = trustType === "crat"
        ? contributionAmount * (payoutRate / 100) // Fixed for CRAT
        : trustValue * (payoutRate / 100); // Based on current value for CRUT

      cumulativePayouts += annualPayout;

      projections.push({
        year,
        age,
        trustValue,
        annualPayout,
        cumulativePayouts,
      });

      // Update trust value for next year
      const growth = (trustValue - annualPayout) * (expectedGrowth / 100);
      trustValue = Math.max(0, trustValue - annualPayout + growth);
    }

    // Total income over term
    const totalIncome = cumulativePayouts;

    // Estimated remainder to charity
    const estimatedRemainder = trustValue;

    // First year income
    const firstYearIncome = projections[0]?.annualPayout || 0;

    // Monthly income
    const monthlyIncome = firstYearIncome / 12;

    // Effective payout (accounting for tax benefits)
    const effectiveFirstYearReturn = ((firstYearIncome + totalTaxBenefits / actualTerm) / contributionAmount) * 100;

    return {
      actualTerm,
      charitableDeduction,
      remainderFactor: remainderFactor * 100,
      capitalGainsAvoided,
      incomeTaxSavings,
      totalTaxBenefits,
      firstYearIncome,
      monthlyIncome,
      totalIncome,
      estimatedRemainder,
      projections: projections.slice(0, 20), // Show first 20 years
      effectiveFirstYearReturn,
    };
  }, [
    contributionAmount,
    costBasis,
    trustType,
    payoutRate,
    termType,
    termYears,
    beneficiaryAge,
    afrRate,
    expectedGrowth,
    marginalTaxRate,
    capitalGainsRate,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-500/30">
          <Heart className="h-4 w-4" />
          CRT Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Charitable Remainder Trust Calculator
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Calculate income, tax deductions, and charitable benefits from a CRAT or CRUT.
          Perfect for appreciated assets like gold holdings.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Contribution Details */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Gift className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Contribution Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Contribution Amount (Fair Market Value)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-purple-500"
                    min="100000"
                    step="50000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Minimum $100,000 recommended for CRT setup costs
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Cost Basis (Original Purchase Price)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={costBasis}
                    onChange={(e) => setCostBasis(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-purple-500"
                    min="0"
                    step="10000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Unrealized gain: {formatCurrency(contributionAmount - costBasis)}
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Trust Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTrustType("crut")}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      trustType === "crut"
                        ? "bg-purple-500/20 border-purple-500 text-purple-400"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    <div className="font-semibold">CRUT</div>
                    <div className="text-xs opacity-70">% of Annual Value</div>
                  </button>
                  <button
                    onClick={() => setTrustType("crat")}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      trustType === "crat"
                        ? "bg-purple-500/20 border-purple-500 text-purple-400"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    <div className="font-semibold">CRAT</div>
                    <div className="text-xs opacity-70">Fixed Annuity</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payout Settings */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <Percent className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Payout Settings</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Payout Rate: {payoutRate}%
                </label>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={0.5}
                  value={payoutRate}
                  onChange={(e) => setPayoutRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5% (Min)</span>
                  <span>Typical: 5-7%</span>
                  <span>50% (Max)</span>
                </div>
                {payoutRate > 10 && (
                  <p className="text-amber-400 text-xs mt-2">
                    Higher payout rates reduce charitable deduction and may not pass IRS 10% remainder test.
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Trust Term
                </label>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <button
                    onClick={() => setTermType("life")}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      termType === "life"
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    Lifetime
                  </button>
                  <button
                    onClick={() => setTermType("years")}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      termType === "years"
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    Fixed Years
                  </button>
                </div>
                {termType === "years" && (
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">
                      Number of Years: {termYears}
                    </label>
                    <input
                      type="range"
                      min={5}
                      max={20}
                      value={termYears}
                      onChange={(e) => setTermYears(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                )}
              </div>

              {termType === "life" && (
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Your Age: {beneficiaryAge}
                  </label>
                  <input
                    type="range"
                    min={40}
                    max={85}
                    value={beneficiaryAge}
                    onChange={(e) => setBeneficiaryAge(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Estimated life expectancy: {calculations.actualTerm} years
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tax & Growth Assumptions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <TrendingUp className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Tax &amp; Growth Assumptions</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                  AFR (Section 7520 Rate): {afrRate}%
                  <div className="group relative">
                    <Info className="h-4 w-4 text-slate-500 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-800 text-xs text-slate-300 rounded-lg p-3 border border-slate-700 z-10">
                      IRS publishes this rate monthly. It affects the charitable deduction calculation. Check IRS.gov for current rate.
                    </div>
                  </div>
                </label>
                <input
                  type="range"
                  min={2}
                  max={8}
                  step={0.2}
                  value={afrRate}
                  onChange={(e) => setAfrRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Expected Trust Growth Rate: {expectedGrowth}%
                </label>
                <input
                  type="range"
                  min={0}
                  max={12}
                  step={0.5}
                  value={expectedGrowth}
                  onChange={(e) => setExpectedGrowth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Income Tax Rate: {marginalTaxRate}%
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={40}
                    step={1}
                    value={marginalTaxRate}
                    onChange={(e) => setMarginalTaxRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Cap Gains Rate: {capitalGainsRate}%
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={23.8}
                    step={0.1}
                    value={capitalGainsRate}
                    onChange={(e) => setCapitalGainsRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Tax Benefits Summary */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-purple-400" />
              <div>
                <h3 className="text-sm text-slate-400">Immediate Tax Benefits</h3>
                <div className="text-3xl font-bold text-purple-400">
                  {formatCurrency(calculations.totalTaxBenefits)}
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-slate-800/50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Charitable Deduction</span>
                <span className="font-semibold text-white">
                  {formatCurrency(calculations.charitableDeduction)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Income Tax Savings</span>
                <span className="font-semibold text-green-400">
                  {formatCurrency(calculations.incomeTaxSavings)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-slate-400 text-sm">Capital Gains Avoided</span>
                <span className="font-semibold text-green-400">
                  {formatCurrency(calculations.capitalGainsAvoided)}
                </span>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              Remainder Factor: {formatPercent(calculations.remainderFactor)}
            </div>
          </div>

          {/* Income Stream */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-green-400" />
              <h3 className="text-lg font-semibold">Your Income Stream</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-1">First Year Income</div>
                <div className="text-2xl font-bold text-green-400">
                  {formatCurrency(calculations.firstYearIncome)}
                </div>
                <div className="text-xs text-slate-500">
                  {formatCurrency(calculations.monthlyIncome)}/month
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-1">Total Over {calculations.actualTerm} Years</div>
                <div className="text-2xl font-bold text-white">
                  {formatCurrency(calculations.totalIncome)}
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-2">
                <Gift className="h-4 w-4" />
                Charitable Remainder
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {formatCurrency(calculations.estimatedRemainder)}
              </div>
              <p className="text-xs text-slate-400">
                Estimated amount going to your chosen charity at trust termination
              </p>
            </div>
          </div>

          {/* Projection Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              {trustType === "crut" ? "CRUT" : "CRAT"} Payment Schedule
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 px-2 text-left text-slate-500">Year</th>
                    <th className="py-2 px-2 text-right text-slate-500">Trust Value</th>
                    <th className="py-2 px-2 text-right text-slate-500">Annual Payout</th>
                    <th className="py-2 px-2 text-right text-slate-500">Cumulative</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.projections.slice(0, 10).map((proj, idx) => (
                    <tr
                      key={proj.year}
                      className={`border-b border-white/5 ${idx === 0 ? "bg-purple-500/5" : ""}`}
                    >
                      <td className="py-2 px-2 text-slate-300">
                        {proj.year} (Age {proj.age})
                      </td>
                      <td className="py-2 px-2 text-right text-slate-400">
                        {formatCurrency(proj.trustValue)}
                      </td>
                      <td className="py-2 px-2 text-right text-green-400 font-medium">
                        {formatCurrency(proj.annualPayout)}
                      </td>
                      <td className="py-2 px-2 text-right text-slate-400">
                        {formatCurrency(proj.cumulativePayouts)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-3">
              * {trustType === "crut" ? "CRUT payouts vary with trust value" : "CRAT payouts are fixed"}.
              Assumes {expectedGrowth}% annual growth.
            </p>
          </div>

          {/* CRAT vs CRUT Comparison */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">CRAT vs CRUT Comparison</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400">CRAT (Annuity Trust)</h4>
                <ul className="space-y-1 text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    Fixed dollar payments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    Predictable income
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    No additional contributions
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-400">CRUT (Unitrust)</h4>
                <ul className="space-y-1 text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    % of annual value
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    Inflation protection
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    Can add contributions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Bridge Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold">CRT Strategies for Gold Investors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-amber-400 font-semibold mb-2">Appreciated Gold Holdings</div>
              <p className="text-slate-400 text-sm">
                If you own physical gold or gold investments with significant gains, funding a CRT bypasses immediate capital gains while generating income and a charitable deduction.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Diversification Strategy</div>
              <p className="text-slate-400 text-sm">
                A CRT allows concentrated gold positions to be sold tax-free within the trust and reinvested across multiple asset classes for income generation.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Legacy Planning</div>
              <p className="text-slate-400 text-sm">
                Combine CRT income with a Gold IRA for your retirement, while your chosen charity receives the remainder - a complete wealth transfer strategy.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="crt-calculator"
            subheadline="Many of our clients combine charitable giving strategies with Gold IRAs for optimal tax efficiency. Speak with a specialist about your options."
          />
        </div>
      </div>
    </Container>
  );
}
