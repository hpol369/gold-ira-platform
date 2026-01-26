"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import {
  Calculator,
  DollarSign,
  Calendar,
  Clock,
  TrendingUp,
  Info,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

interface SupplementResult {
  monthlySupplementAmount: number;
  annualSupplementAmount: number;
  monthsUntil62: number;
  totalSupplementValue: number;
  isEligible: boolean;
  eligibilityReason: string;
}

export function FERSSupplementCalculator() {
  const [highThreeSalary, setHighThreeSalary] = useState(100000);
  const [yearsOfService, setYearsOfService] = useState(25);
  const [retirementAge, setRetirementAge] = useState(57);
  const [estimatedSSBenefit, setEstimatedSSBenefit] = useState(2000);
  const [result, setResult] = useState<SupplementResult | null>(null);

  // Minimum Retirement Age (MRA) - using 57 as default for most current employees
  const mra = 57;

  const checkEligibility = useMemo(() => {
    // Eligible for SRS if:
    // 1. MRA + 30 years of service (immediate retirement)
    // 2. Age 60 + 20 years of service
    // 3. Must be retiring before age 62

    const isBeforeAge62 = retirementAge < 62;
    const hasMRAWith30 = retirementAge >= mra && yearsOfService >= 30;
    const has60With20 = retirementAge >= 60 && yearsOfService >= 20;

    let eligible = false;
    let reason = "";

    if (!isBeforeAge62) {
      reason = "SRS is only for those retiring before age 62. At 62, you become eligible for Social Security.";
    } else if (hasMRAWith30) {
      eligible = true;
      reason = "Eligible: MRA with 30+ years of service (immediate retirement).";
    } else if (has60With20) {
      eligible = true;
      reason = "Eligible: Age 60+ with 20+ years of service.";
    } else if (retirementAge >= mra && yearsOfService >= 10) {
      reason = "Not eligible: MRA+10 retirements do not qualify for the FERS Supplement.";
    } else {
      reason = "Not eligible: You need either MRA with 30 years or age 60 with 20 years to qualify for the FERS Supplement.";
    }

    return { eligible, reason };
  }, [retirementAge, yearsOfService, mra]);

  function calculateSupplement() {
    const { eligible, reason } = checkEligibility;

    if (!eligible) {
      setResult({
        monthlySupplementAmount: 0,
        annualSupplementAmount: 0,
        monthsUntil62: 0,
        totalSupplementValue: 0,
        isEligible: false,
        eligibilityReason: reason,
      });
      return;
    }

    // SRS Formula: (Years of Service / 40) x Estimated SS Benefit at 62
    const monthlyAmount = (yearsOfService / 40) * estimatedSSBenefit;
    const annualAmount = monthlyAmount * 12;

    // Calculate months until age 62
    const monthsUntil62 = (62 - retirementAge) * 12;

    // Total value of the supplement
    const totalValue = monthlyAmount * monthsUntil62;

    setResult({
      monthlySupplementAmount: monthlyAmount,
      annualSupplementAmount: annualAmount,
      monthsUntil62,
      totalSupplementValue: totalValue,
      isEligible: true,
      eligibilityReason: reason,
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
              FERS SUPPLEMENT CALCULATOR
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Calculate Your FERS Special Retirement Supplement
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estimate your SRS - the &quot;bridge&quot; payment that federal employees receive from retirement until age 62.
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
                <p className="text-slate-500 text-sm mt-2">
                  Average of your highest 3 consecutive years of basic pay
                </p>
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
                  max={65}
                  step={1}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>55</span>
                  <span>MRA (57)</span>
                  <span>60</span>
                  <span>65</span>
                </div>
              </div>

              {/* Estimated SS Benefit */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">
                  Estimated Social Security Benefit at Age 62
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={estimatedSSBenefit}
                    onChange={(e) => setEstimatedSSBenefit(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <p className="text-slate-500 text-sm mt-2">
                  Find this on your Social Security statement at ssa.gov
                </p>
              </div>

              {/* Eligibility Check */}
              <div className={`rounded-xl p-4 mb-6 ${
                checkEligibility.eligible
                  ? 'bg-green-500/10 border border-green-500/20'
                  : 'bg-amber-500/10 border border-amber-500/20'
              }`}>
                <div className="flex items-start gap-3">
                  {checkEligibility.eligible ? (
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-semibold text-sm ${
                      checkEligibility.eligible ? 'text-green-400' : 'text-amber-400'
                    }`}>
                      {checkEligibility.eligible ? 'Eligible for FERS Supplement' : 'Check Eligibility'}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {checkEligibility.reason}
                    </p>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateSupplement}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Calculate FERS Supplement
              </button>
            </div>

            {/* Results Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your Results</h3>

              {result ? (
                <div className="space-y-6">
                  {result.isEligible ? (
                    <>
                      {/* Monthly Supplement */}
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                        <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                          <DollarSign className="h-4 w-4" />
                          MONTHLY SUPPLEMENT AMOUNT
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">
                          {formatCurrency(result.monthlySupplementAmount)}
                        </div>
                        <p className="text-slate-400 text-sm">
                          per month until you reach age 62
                        </p>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800/50 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                            <Calendar className="h-4 w-4" />
                            Annual Amount
                          </div>
                          <div className="text-xl font-bold text-white">
                            {formatCurrency(result.annualSupplementAmount)}
                          </div>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                            <Clock className="h-4 w-4" />
                            Duration
                          </div>
                          <div className="text-xl font-bold text-white">
                            {Math.floor(result.monthsUntil62 / 12)} years {result.monthsUntil62 % 12} mo
                          </div>
                        </div>
                      </div>

                      {/* Total Value */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                        <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                          <TrendingUp className="h-4 w-4" />
                          TOTAL SUPPLEMENT VALUE
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">
                          {formatCurrency(result.totalSupplementValue)}
                        </div>
                        <p className="text-slate-400 text-sm">
                          Total you&apos;ll receive from retirement until age 62
                        </p>
                      </div>

                      {/* Formula Explanation */}
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <p className="text-slate-400 text-sm">
                          <strong className="text-white">Formula:</strong>{" "}
                          ({yearsOfService} years / 40) x {formatCurrency(estimatedSSBenefit)} = {formatCurrency(result.monthlySupplementAmount)}/month
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                        <div>
                          <p className="text-amber-400 font-semibold mb-2">
                            Not Eligible for FERS Supplement
                          </p>
                          <p className="text-slate-300 text-sm">
                            {result.eligibilityReason}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-center rounded-xl transition-all"
                  >
                    Protect Your Federal Retirement
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-slate-500" />
                  </div>
                  <p className="text-slate-400">
                    Enter your information and click &quot;Calculate&quot; to see your FERS Supplement estimate.
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
                  Important: Earnings Test
                </h4>
                <p className="text-slate-400 text-sm">
                  The FERS Supplement is subject to an earnings test similar to Social Security.
                  If you work and earn above the annual exempt amount (${new Date().getFullYear() >= 2025 ? '23,400' : '22,320'} in 2025),
                  your supplement may be reduced. For every $2 earned above the limit, $1 is deducted from your supplement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
