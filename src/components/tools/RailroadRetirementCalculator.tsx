"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

interface CalculationResults {
  tierIBenefit: number;
  tierIIBenefit: number;
  vestedDualBenefit: number;
  totalMonthlyBenefit: number;
  spouseTierI: number;
  spouseTierII: number;
  spouseTotal: number;
  ssOnlyEquivalent: number;
  rrAdvantage: number;
  yearsOfService: number;
  retirementAge: number;
}

export function RailroadRetirementCalculator() {
  // Form state
  const [step, setStep] = useState(1);
  const [yearsOfService, setYearsOfService] = useState(30);
  const [averageMonthlyEarnings, setAverageMonthlyEarnings] = useState(7000);
  const [retirementAge, setRetirementAge] = useState(65);
  const [spouseAge, setSpouseAge] = useState(62);
  const [hasVestedDualBenefit, setHasVestedDualBenefit] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Calculate Railroad Retirement benefits
  const calculations = useMemo<CalculationResults>(() => {
    // Tier I: Social Security equivalent
    // Simplified PIA calculation (actual SS formula is more complex)
    const annualEarnings = averageMonthlyEarnings * 12;

    // Simplified Tier I calculation based on SS bend points (2024 values approximated)
    // First $1,174/mo at 90%, next $5,903/mo at 32%, remainder at 15%
    let pia = 0;
    if (averageMonthlyEarnings <= 1174) {
      pia = averageMonthlyEarnings * 0.9;
    } else if (averageMonthlyEarnings <= 7077) {
      pia = 1174 * 0.9 + (averageMonthlyEarnings - 1174) * 0.32;
    } else {
      pia = 1174 * 0.9 + (7077 - 1174) * 0.32 + (averageMonthlyEarnings - 7077) * 0.15;
    }

    // Apply early/late retirement adjustments
    let tierIBenefit = pia;
    const fra = 67; // Full Retirement Age for most current retirees

    if (retirementAge < fra) {
      // Early retirement reduction (roughly 6.67% per year for first 3 years, 5% thereafter)
      const yearsEarly = fra - retirementAge;
      if (yearsEarly <= 3) {
        tierIBenefit = pia * (1 - yearsEarly * 0.0667);
      } else {
        tierIBenefit = pia * (1 - 3 * 0.0667 - (yearsEarly - 3) * 0.05);
      }
    } else if (retirementAge > fra && retirementAge <= 70) {
      // Delayed retirement credits (8% per year)
      const yearsDelayed = retirementAge - fra;
      tierIBenefit = pia * (1 + yearsDelayed * 0.08);
    }

    // Tier II: Railroad-specific pension
    // Approximately 0.7% x years of service x average monthly earnings
    // This is the "second tier" unique to railroad workers
    const tierIIMultiplier = 0.007;
    let tierIIBenefit = tierIIMultiplier * yearsOfService * averageMonthlyEarnings;

    // Cap Tier II based on years of service (max around 30 years for full benefit)
    const maxTierIIYears = 30;
    if (yearsOfService > maxTierIIYears) {
      tierIIBenefit = tierIIMultiplier * maxTierIIYears * averageMonthlyEarnings;
    }

    // Vested Dual Benefit (for those who qualified before 1975)
    let vestedDualBenefit = 0;
    if (hasVestedDualBenefit) {
      // Simplified VDB calculation
      vestedDualBenefit = Math.min(500, tierIBenefit * 0.15);
    }

    const totalMonthlyBenefit = tierIBenefit + tierIIBenefit + vestedDualBenefit;

    // Spouse Benefits
    // Spouse Tier I: 50% of worker's Tier I at spouse's FRA
    let spouseTierI = tierIBenefit * 0.5;
    if (spouseAge < fra) {
      // Reduce for early claiming
      const spouseYearsEarly = fra - spouseAge;
      spouseTierI = spouseTierI * (1 - Math.min(spouseYearsEarly * 0.0833, 0.35));
    }

    // Spouse Tier II: 45% of worker's Tier II
    const spouseTierII = tierIIBenefit * 0.45;
    const spouseTotal = spouseTierI + spouseTierII;

    // Social Security equivalent (what they'd get with SS only, no Tier II)
    const ssOnlyEquivalent = tierIBenefit;
    const rrAdvantage = totalMonthlyBenefit - ssOnlyEquivalent;

    return {
      tierIBenefit: Math.round(tierIBenefit),
      tierIIBenefit: Math.round(tierIIBenefit),
      vestedDualBenefit: Math.round(vestedDualBenefit),
      totalMonthlyBenefit: Math.round(totalMonthlyBenefit),
      spouseTierI: Math.round(spouseTierI),
      spouseTierII: Math.round(spouseTierII),
      spouseTotal: Math.round(spouseTotal),
      ssOnlyEquivalent: Math.round(ssOnlyEquivalent),
      rrAdvantage: Math.round(rrAdvantage),
      yearsOfService,
      retirementAge,
    };
  }, [yearsOfService, averageMonthlyEarnings, retirementAge, spouseAge, hasVestedDualBenefit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setStep(1);
    setShowResults(false);
    setYearsOfService(30);
    setAverageMonthlyEarnings(7000);
    setRetirementAge(65);
    setSpouseAge(62);
    setHasVestedDualBenefit(false);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= s
                          ? "bg-amber-500 text-slate-900"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`w-12 h-1 mx-2 rounded transition-colors ${
                          step > s ? "bg-amber-500" : "bg-slate-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Years of Service */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Years of Railroad Service
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    Total years of creditable railroad employment
                  </p>

                  <div className="space-y-6">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-amber-400">
                        {yearsOfService}
                      </span>
                      <span className="text-2xl text-slate-400 ml-2">years</span>
                    </div>

                    <input
                      type="range"
                      min="5"
                      max="45"
                      step="1"
                      value={yearsOfService}
                      onChange={(e) => setYearsOfService(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />

                    <div className="flex justify-between text-sm text-slate-400">
                      <span>5 years</span>
                      <span>45 years</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {[10, 20, 25, 30, 35].map((years) => (
                        <button
                          key={years}
                          onClick={() => setYearsOfService(years)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            yearsOfService === years
                              ? "bg-amber-500 text-slate-900"
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                          }`}
                        >
                          {years} years
                        </button>
                      ))}
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                      <p className="text-amber-300 text-sm">
                        <strong>Note:</strong> You need at least 10 years of railroad service to
                        qualify for Railroad Retirement benefits. With 30+ years, you can retire
                        at age 60 with full benefits.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Average Monthly Earnings */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Average Monthly Earnings
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    Your highest 60 consecutive months of railroad earnings
                  </p>

                  <div className="space-y-6">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-amber-400">
                        {formatCurrency(averageMonthlyEarnings)}
                      </span>
                      <span className="text-xl text-slate-400 ml-2">/month</span>
                    </div>

                    <input
                      type="range"
                      min="2000"
                      max="15000"
                      step="100"
                      value={averageMonthlyEarnings}
                      onChange={(e) =>
                        setAverageMonthlyEarnings(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />

                    <div className="flex justify-between text-sm text-slate-400">
                      <span>$2,000</span>
                      <span>$15,000</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {[4000, 5500, 7000, 8500, 10000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setAverageMonthlyEarnings(amount)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            averageMonthlyEarnings === amount
                              ? "bg-amber-500 text-slate-900"
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                          }`}
                        >
                          {formatCurrency(amount)}
                        </button>
                      ))}
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <p className="text-blue-300 text-sm">
                        <strong>Tip:</strong> This is your average monthly compensation during
                        your highest-earning 60-month period, which is used to calculate your
                        Tier II benefit.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-8 py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Retirement Age */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Retirement Age
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    When do you plan to start receiving benefits?
                  </p>

                  <div className="space-y-6">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-amber-400">
                        {retirementAge}
                      </span>
                      <span className="text-2xl text-slate-400 ml-2">years old</span>
                    </div>

                    <input
                      type="range"
                      min="60"
                      max="70"
                      step="1"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />

                    <div className="flex justify-between text-sm text-slate-400">
                      <span>60</span>
                      <span>70</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {[60, 62, 65, 67, 70].map((age) => (
                        <button
                          key={age}
                          onClick={() => setRetirementAge(age)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            retirementAge === age
                              ? "bg-amber-500 text-slate-900"
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                          }`}
                        >
                          Age {age}
                        </button>
                      ))}
                    </div>

                    <div
                      className={`rounded-lg p-4 ${
                        yearsOfService >= 30
                          ? "bg-green-500/10 border border-green-500/20"
                          : "bg-amber-500/10 border border-amber-500/20"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          yearsOfService >= 30 ? "text-green-300" : "text-amber-300"
                        }`}
                      >
                        {yearsOfService >= 30
                          ? "With 30+ years of service, you can retire at age 60 with full Tier I and Tier II benefits."
                          : `With ${yearsOfService} years of service, your Full Retirement Age is 67 for Tier I benefits.`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Spouse Age & Options */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Spousal Benefits
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    Enter spouse information for spousal benefit calculation
                  </p>

                  <div className="space-y-8">
                    {/* Spouse Age */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        Spouse Age at Your Retirement
                      </h3>
                      <div className="text-center">
                        <span className="text-4xl font-bold text-amber-400">
                          {spouseAge}
                        </span>
                        <span className="text-xl text-slate-400 ml-2">years old</span>
                      </div>
                      <input
                        type="range"
                        min="55"
                        max="70"
                        step="1"
                        value={spouseAge}
                        onChange={(e) => setSpouseAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[55, 60, 62, 65, 67].map((age) => (
                          <button
                            key={age}
                            onClick={() => setSpouseAge(age)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              spouseAge === age
                                ? "bg-amber-500 text-slate-900"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            Age {age}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Vested Dual Benefit */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        Vested Dual Benefit (VDB)
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setHasVestedDualBenefit(false)}
                          className={`p-4 rounded-xl border-2 text-center transition-colors ${
                            !hasVestedDualBenefit
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold text-white">No VDB</p>
                          <p className="text-slate-400 text-sm mt-1">
                            Most railroad workers
                          </p>
                        </button>
                        <button
                          onClick={() => setHasVestedDualBenefit(true)}
                          className={`p-4 rounded-xl border-2 text-center transition-colors ${
                            hasVestedDualBenefit
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold text-white">Has VDB</p>
                          <p className="text-slate-400 text-sm mt-1">
                            Pre-1975 qualification
                          </p>
                        </button>
                      </div>
                      <p className="text-slate-500 text-xs text-center">
                        VDB applies to workers who had both railroad and social security
                        credits before 1975.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCalculate}
                      className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      Calculate Benefits
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Total Benefit Card */}
              <div className="bg-gradient-to-b from-amber-500/10 to-transparent border-2 border-amber-500/30 rounded-2xl p-8 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/20 text-amber-400 mb-4">
                  Your Total Monthly Benefit
                </span>
                <div className="text-6xl font-bold text-amber-400 mb-2">
                  {formatCurrency(calculations.totalMonthlyBenefit)}
                </div>
                <p className="text-slate-300 mb-4">
                  Based on {calculations.yearsOfService} years of railroad service,
                  retiring at age {calculations.retirementAge}
                </p>
                <div className="flex justify-center gap-8">
                  <div>
                    <p className="text-slate-400 text-sm">Annual Benefit</p>
                    <p className="text-2xl font-bold text-white">
                      {formatCurrency(calculations.totalMonthlyBenefit * 12)}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">RR Advantage</p>
                    <p className="text-2xl font-bold text-green-400">
                      +{formatCurrency(calculations.rrAdvantage)}/mo
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit Breakdown */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Benefit Breakdown
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Tier I */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      <h3 className="text-lg font-semibold text-white">Tier I</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                      Social Security equivalent
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-400 text-sm">Monthly</p>
                        <p className="text-2xl font-bold text-blue-400">
                          {formatCurrency(calculations.tierIBenefit)}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Annual</p>
                        <p className="text-lg font-semibold text-white">
                          {formatCurrency(calculations.tierIBenefit * 12)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tier II */}
                  <div className="bg-gradient-to-b from-amber-500/10 to-transparent border-2 border-amber-500/30 rounded-xl p-6 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                        RAILROAD ONLY
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-amber-400 rounded-full" />
                      <h3 className="text-lg font-semibold text-white">Tier II</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                      Railroad pension benefit
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-400 text-sm">Monthly</p>
                        <p className="text-2xl font-bold text-amber-400">
                          {formatCurrency(calculations.tierIIBenefit)}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Annual</p>
                        <p className="text-lg font-semibold text-white">
                          {formatCurrency(calculations.tierIIBenefit * 12)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* VDB or Comparison */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                      <h3 className="text-lg font-semibold text-white">
                        {hasVestedDualBenefit ? "VDB" : "SS-Only"}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                      {hasVestedDualBenefit
                        ? "Vested Dual Benefit"
                        : "If only Social Security"}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-400 text-sm">Monthly</p>
                        <p className="text-2xl font-bold text-green-400">
                          {hasVestedDualBenefit
                            ? formatCurrency(calculations.vestedDualBenefit)
                            : formatCurrency(calculations.ssOnlyEquivalent)}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">
                          {hasVestedDualBenefit ? "Annual VDB" : "You gain"}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {hasVestedDualBenefit
                            ? formatCurrency(calculations.vestedDualBenefit * 12)
                            : `+${formatCurrency(calculations.rrAdvantage)}/mo`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Bar */}
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Railroad Retirement vs Social Security Only
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400">Social Security Only</span>
                        <span className="text-white font-semibold">
                          {formatCurrency(calculations.ssOnlyEquivalent)}
                        </span>
                      </div>
                      <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{
                            width: `${
                              (calculations.ssOnlyEquivalent /
                                calculations.totalMonthlyBenefit) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400">Railroad Retirement</span>
                        <span className="text-amber-400 font-semibold">
                          {formatCurrency(calculations.totalMonthlyBenefit)}
                        </span>
                      </div>
                      <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full w-full" />
                      </div>
                    </div>
                  </div>
                  <p className="text-green-400 font-semibold mt-4 text-center">
                    Railroad Retirement provides {formatCurrency(calculations.rrAdvantage)} more
                    per month ({formatCurrency(calculations.rrAdvantage * 12)} per year)
                  </p>
                </div>
              </div>

              {/* Spousal Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  Spousal Benefits (Age {spouseAge})
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm">Spouse Tier I (50%)</p>
                    <p className="text-2xl font-bold text-white">
                      {formatCurrency(calculations.spouseTierI)}
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm">Spouse Tier II (45%)</p>
                    <p className="text-2xl font-bold text-amber-400">
                      {formatCurrency(calculations.spouseTierII)}
                    </p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <p className="text-amber-400 text-sm">Total Spouse Benefit</p>
                    <p className="text-2xl font-bold text-white">
                      {formatCurrency(calculations.spouseTotal)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">
                    <strong className="text-white">Combined Household:</strong>{" "}
                    {formatCurrency(
                      calculations.totalMonthlyBenefit + calculations.spouseTotal
                    )}
                    /month ({formatCurrency(
                      (calculations.totalMonthlyBenefit + calculations.spouseTotal) * 12
                    )}
                    /year)
                  </p>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  Important Information
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    <span>
                      These are estimates based on simplified formulas. Actual benefits
                      depend on your complete earnings record and RRB calculations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    <span>
                      Tier I benefits are subject to cost-of-living adjustments (COLA)
                      similar to Social Security.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    <span>
                      Tier II benefits may be partially taxable at the federal level.
                      Consult a tax professional.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    <span>
                      Survivor benefits provide up to 100% of Tier I and Tier II to
                      qualifying widows/widowers.
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <AugustaCTA
                variant="inline"
                headline="Protect Your Railroad Pension with Gold"
                subheadline="Railroad workers often have substantial retirement benefits. Consider diversifying a portion into physical gold to protect against inflation and market volatility. Augusta Precious Metals specializes in helping retirees preserve their hard-earned benefits."
                trackSource="tools-railroad-retirement-calculator"
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Calculate Again
                </button>
                <Link
                  href="/tools/railroad-tier-1-calculator"
                  className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-center"
                >
                  Detailed Tier I Calculator
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
