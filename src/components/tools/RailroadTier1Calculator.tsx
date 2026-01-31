"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

interface CalculationResults {
  tierIBenefit: number;
  ssEquivalent: number;
  wepReduction: number;
  gpoReduction: number;
  finalBenefit: number;
  railroadYears: number;
  nonRailroadYears: number;
  retirementAge: number;
  hasWEP: boolean;
  hasGPO: boolean;
}

export function RailroadTier1Calculator() {
  // Form state
  const [step, setStep] = useState(1);
  const [railroadYears, setRailroadYears] = useState(25);
  const [nonRailroadYears, setNonRailroadYears] = useState(5);
  const [averageMonthlyEarnings, setAverageMonthlyEarnings] = useState(6000);
  const [retirementAge, setRetirementAge] = useState(67);
  const [hasNonCoveredPension, setHasNonCoveredPension] = useState(false);
  const [nonCoveredPensionAmount, setNonCoveredPensionAmount] = useState(1500);
  const [isGovernmentEmployee, setIsGovernmentEmployee] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Calculate Tier I benefits with WEP/GPO considerations
  const calculations = useMemo<CalculationResults>(() => {
    const totalYears = railroadYears + nonRailroadYears;

    // Calculate base PIA using SS bend points (2024 values approximated)
    let pia = 0;
    if (averageMonthlyEarnings <= 1174) {
      pia = averageMonthlyEarnings * 0.9;
    } else if (averageMonthlyEarnings <= 7077) {
      pia = 1174 * 0.9 + (averageMonthlyEarnings - 1174) * 0.32;
    } else {
      pia = 1174 * 0.9 + (7077 - 1174) * 0.32 + (averageMonthlyEarnings - 7077) * 0.15;
    }

    // Adjust for years of coverage (need 35 years for full benefit)
    const coverageMultiplier = Math.min(1, totalYears / 35);
    let adjustedPIA = pia * coverageMultiplier;

    // Apply early/late retirement adjustments
    const fra = 67;
    let tierIBenefit = adjustedPIA;

    if (retirementAge < fra) {
      const yearsEarly = fra - retirementAge;
      if (yearsEarly <= 3) {
        tierIBenefit = adjustedPIA * (1 - yearsEarly * 0.0667);
      } else {
        tierIBenefit = adjustedPIA * (1 - 3 * 0.0667 - (yearsEarly - 3) * 0.05);
      }
    } else if (retirementAge > fra && retirementAge <= 70) {
      const yearsDelayed = retirementAge - fra;
      tierIBenefit = adjustedPIA * (1 + yearsDelayed * 0.08);
    }

    // Calculate what SS-only would be (without railroad)
    const ssEquivalent = tierIBenefit;

    // WEP calculation (if receiving non-covered pension)
    let wepReduction = 0;
    if (hasNonCoveredPension && nonRailroadYears < 30) {
      // WEP reduces the 90% factor (first bend point) to as low as 40%
      // Based on years of substantial earnings
      const substantialYears = Math.min(30, nonRailroadYears + railroadYears);
      let wepFactor = 0.9; // Normal factor

      if (substantialYears < 20) {
        wepFactor = 0.4; // Maximum WEP reduction
      } else if (substantialYears < 30) {
        // Phase out WEP between 20-30 years
        wepFactor = 0.4 + (substantialYears - 20) * 0.05;
      }

      // Maximum WEP reduction is ~$587/month in 2024
      const normalFirstBendPoint = Math.min(averageMonthlyEarnings, 1174) * 0.9;
      const wepFirstBendPoint = Math.min(averageMonthlyEarnings, 1174) * wepFactor;
      wepReduction = Math.min(587, (normalFirstBendPoint - wepFirstBendPoint) * coverageMultiplier);
    }

    // GPO calculation (Government Pension Offset for spousal benefits)
    let gpoReduction = 0;
    if (isGovernmentEmployee && hasNonCoveredPension) {
      // GPO reduces spousal benefits by 2/3 of the government pension
      gpoReduction = nonCoveredPensionAmount * (2 / 3);
    }

    const finalBenefit = Math.max(0, tierIBenefit - wepReduction);

    return {
      tierIBenefit: Math.round(tierIBenefit),
      ssEquivalent: Math.round(ssEquivalent),
      wepReduction: Math.round(wepReduction),
      gpoReduction: Math.round(gpoReduction),
      finalBenefit: Math.round(finalBenefit),
      railroadYears,
      nonRailroadYears,
      retirementAge,
      hasWEP: hasNonCoveredPension && wepReduction > 0,
      hasGPO: isGovernmentEmployee && gpoReduction > 0,
    };
  }, [
    railroadYears,
    nonRailroadYears,
    averageMonthlyEarnings,
    retirementAge,
    hasNonCoveredPension,
    nonCoveredPensionAmount,
    isGovernmentEmployee,
  ]);

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
    setRailroadYears(25);
    setNonRailroadYears(5);
    setAverageMonthlyEarnings(6000);
    setRetirementAge(67);
    setHasNonCoveredPension(false);
    setNonCoveredPensionAmount(1500);
    setIsGovernmentEmployee(false);
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
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8"
            >
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= s
                          ? "bg-blue-500text-slate-900"
                          : "bg-slate-700 text-slate-500"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`w-12 h-1 mx-2 rounded transition-colors ${
                          step > s ? "bg-blue-500" : "bg-slate-700"
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
                  <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                    Your Work History
                  </h2>
                  <p className="text-slate-500 text-center mb-8">
                    Enter your years of railroad and non-railroad employment
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Railroad Years */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 text-center">
                        Railroad Service
                      </h3>
                      <div className="text-center">
                        <span className="text-4xl font-bold text-blue-600">
                          {railroadYears}
                        </span>
                        <span className="text-xl text-slate-500 ml-2">years</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="40"
                        step="1"
                        value={railroadYears}
                        onChange={(e) => setRailroadYears(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[10, 20, 25, 30].map((y) => (
                          <button
                            key={y}
                            onClick={() => setRailroadYears(y)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              railroadYears === y
                                ? "bg-blue-500text-slate-900"
                                : "bg-slate-700 text-slate-600 hover:bg-slate-600"
                            }`}
                          >
                            {y} yrs
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Non-Railroad Years */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 text-center">
                        Non-Railroad Work
                      </h3>
                      <div className="text-center">
                        <span className="text-4xl font-bold text-[#B22234]">
                          {nonRailroadYears}
                        </span>
                        <span className="text-xl text-slate-500 ml-2">years</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value={nonRailroadYears}
                        onChange={(e) => setNonRailroadYears(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[0, 5, 10, 15].map((y) => (
                          <button
                            key={y}
                            onClick={() => setNonRailroadYears(y)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              nonRailroadYears === y
                                ? "bg-[#B22234] text-white"
                                : "bg-slate-700 text-slate-600 hover:bg-slate-600"
                            }`}
                          >
                            {y} yrs
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Total Coverage:</strong> {railroadYears + nonRailroadYears}{" "}
                      years
                      {railroadYears + nonRailroadYears >= 35
                        ? " (Full 35-year credit)"
                        : ` (${35 - railroadYears - nonRailroadYears} years short of maximum)`}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Earnings & Age */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                    Earnings & Retirement Age
                  </h2>
                  <p className="text-slate-500 text-center mb-8">
                    Average indexed monthly earnings and planned retirement age
                  </p>

                  <div className="space-y-8">
                    {/* Average Earnings */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 text-center">
                        Average Indexed Monthly Earnings (AIME)
                      </h3>
                      <div className="text-center">
                        <span className="text-5xl font-bold text-blue-600">
                          {formatCurrency(averageMonthlyEarnings)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="2000"
                        max="12000"
                        step="100"
                        value={averageMonthlyEarnings}
                        onChange={(e) =>
                          setAverageMonthlyEarnings(Number(e.target.value))
                        }
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[4000, 5000, 6000, 8000, 10000].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => setAverageMonthlyEarnings(amount)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              averageMonthlyEarnings === amount
                                ? "bg-blue-500text-slate-900"
                                : "bg-slate-700 text-slate-600 hover:bg-slate-600"
                            }`}
                          >
                            {formatCurrency(amount)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Retirement Age */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 text-center">
                        Retirement Age
                      </h3>
                      <div className="text-center">
                        <span className="text-4xl font-bold text-blue-600">
                          {retirementAge}
                        </span>
                        <span className="text-xl text-slate-500 ml-2">years old</span>
                      </div>
                      <input
                        type="range"
                        min="62"
                        max="70"
                        step="1"
                        value={retirementAge}
                        onChange={(e) => setRetirementAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[62, 65, 67, 70].map((age) => (
                          <button
                            key={age}
                            onClick={() => setRetirementAge(age)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              retirementAge === age
                                ? "bg-blue-500text-slate-900"
                                : "bg-slate-700 text-slate-600 hover:bg-slate-600"
                            }`}
                          >
                            {age}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`rounded-lg p-4 ${
                        retirementAge < 67
                          ? "bg-[#B22234]/10 border border-[#B22234]/30"
                          : retirementAge > 67
                          ? "bg-green-50 border border-green-200"
                          : "bg-blue-50 border border-blue-200"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          retirementAge < 67
                            ? "text-amber-800"
                            : retirementAge > 67
                            ? "text-green-800"
                            : "text-blue-800"
                        }`}
                      >
                        {retirementAge < 67
                          ? `Early retirement: Tier I reduced by ~${Math.round(
                              (67 - retirementAge) * 6.67
                            )}%`
                          : retirementAge > 67
                          ? `Delayed retirement: Tier I increased by ${(retirementAge - 67) * 8}%`
                          : "Full Retirement Age: 100% of Tier I benefit"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-8 py-3 bg-slate-700 text-slate-600 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: WEP Considerations */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                    WEP Considerations
                  </h2>
                  <p className="text-slate-500 text-center mb-8">
                    Windfall Elimination Provision may affect mixed employment
                  </p>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">
                        Do you receive a pension from work not covered by Social Security?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setHasNonCoveredPension(false)}
                          className={`p-4 rounded-xl border-2 text-center transition-colors ${
                            !hasNonCoveredPension
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-slate-700 bg-slate-50 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold text-slate-900">No</p>
                          <p className="text-slate-600 text-sm mt-1">
                            All work was SS-covered
                          </p>
                        </button>
                        <button
                          onClick={() => setHasNonCoveredPension(true)}
                          className={`p-4 rounded-xl border-2 text-center transition-colors ${
                            hasNonCoveredPension
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-slate-700 bg-slate-50 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold text-slate-900">Yes</p>
                          <p className="text-slate-600 text-sm mt-1">
                            Some non-covered work
                          </p>
                        </button>
                      </div>
                    </div>

                    {hasNonCoveredPension && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-slate-900">
                          Monthly non-covered pension amount:
                        </h3>
                        <div className="text-center">
                          <span className="text-4xl font-bold text-[#B22234]">
                            {formatCurrency(nonCoveredPensionAmount)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="5000"
                          step="100"
                          value={nonCoveredPensionAmount}
                          onChange={(e) =>
                            setNonCoveredPensionAmount(Number(e.target.value))
                          }
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                        />

                        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg p-4">
                          <p className="text-amber-800 text-sm">
                            <strong>WEP Impact:</strong> If you receive a pension from
                            work not covered by Social Security (e.g., some government
                            positions), your Tier I benefit may be reduced. The maximum
                            WEP reduction in 2024 is approximately $587/month.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 bg-slate-700 text-slate-600 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="px-8 py-3 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: GPO Considerations */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                    GPO Considerations
                  </h2>
                  <p className="text-slate-500 text-center mb-8">
                    Government Pension Offset affects spousal/survivor benefits
                  </p>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">
                        Were you a federal, state, or local government employee?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setIsGovernmentEmployee(false)}
                          className={`p-4 rounded-xl border-2 text-center transition-colors ${
                            !isGovernmentEmployee
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-slate-700 bg-slate-50 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold text-slate-900">No</p>
                          <p className="text-slate-600 text-sm mt-1">
                            Private sector only
                          </p>
                        </button>
                        <button
                          onClick={() => setIsGovernmentEmployee(true)}
                          className={`p-4 rounded-xl border-2 text-center transition-colors ${
                            isGovernmentEmployee
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-slate-700 bg-slate-50 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold text-slate-900">Yes</p>
                          <p className="text-slate-600 text-sm mt-1">
                            Government work history
                          </p>
                        </button>
                      </div>
                    </div>

                    {isGovernmentEmployee && hasNonCoveredPension && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4"
                      >
                        <p className="text-red-800 text-sm">
                          <strong>GPO Warning:</strong> If you receive a government
                          pension from non-SS-covered work, your spousal or survivor
                          benefits will be reduced by 2/3 of that pension amount. Your
                          estimated GPO reduction is{" "}
                          {formatCurrency(nonCoveredPensionAmount * (2 / 3))}/month.
                        </p>
                      </motion.div>
                    )}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> GPO primarily affects spousal and
                        survivor benefits. If you are claiming your own Tier I benefit
                        based on your own work record, GPO does not apply to your
                        benefit directly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3 bg-slate-700 text-slate-600 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCalculate}
                      className="px-8 py-3 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-400 transition-colors"
                    >
                      Calculate Tier I
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
              {/* Main Result Card */}
              <div className="bg-gradient-to-b from-blue-500/10 to-transparent border-2 border-blue-500/30 rounded-2xl p-8 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-600 mb-4">
                  Your Tier I Benefit
                </span>
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {formatCurrency(calculations.finalBenefit)}
                </div>
                <p className="text-slate-600 mb-4">
                  Monthly at age {calculations.retirementAge} with{" "}
                  {calculations.railroadYears + calculations.nonRailroadYears} years of
                  combined earnings
                </p>
                {calculations.hasWEP && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#B22234]/10 text-[#B22234]">
                    WEP Reduction Applied: -{formatCurrency(calculations.wepReduction)}
                  </div>
                )}
              </div>

              {/* Benefit Breakdown */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#000080] mb-6 text-center">
                  Tier I Calculation Breakdown
                </h2>

                <div className="space-y-4 mb-8">
                  {/* Base Calculation */}
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-500">Base Tier I (before adjustments)</span>
                    <span className="text-slate-900 font-semibold">
                      {formatCurrency(calculations.tierIBenefit + calculations.wepReduction)}
                    </span>
                  </div>

                  {/* WEP Reduction */}
                  {calculations.hasWEP && (
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                      <span className="text-[#B22234]">WEP Reduction</span>
                      <span className="text-[#B22234] font-semibold">
                        -{formatCurrency(calculations.wepReduction)}
                      </span>
                    </div>
                  )}

                  {/* Final Amount */}
                  <div className="flex justify-between items-center py-3 bg-blue-500/10 rounded-lg px-4">
                    <span className="text-slate-900 font-semibold">Final Tier I Benefit</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatCurrency(calculations.finalBenefit)}
                    </span>
                  </div>
                </div>

                {/* Comparison */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Employment Breakdown
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Railroad Years</span>
                        <span className="text-blue-600 font-semibold">
                          {calculations.railroadYears}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Non-Railroad Years</span>
                        <span className="text-[#B22234] font-semibold">
                          {calculations.nonRailroadYears}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-slate-200 pt-3">
                        <span className="text-slate-900">Total Coverage</span>
                        <span className="text-slate-900 font-bold">
                          {calculations.railroadYears + calculations.nonRailroadYears} years
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Annual Benefit
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Monthly</span>
                        <span className="text-slate-900 font-semibold">
                          {formatCurrency(calculations.finalBenefit)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Annual</span>
                        <span className="text-blue-600 font-bold">
                          {formatCurrency(calculations.finalBenefit * 12)}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-slate-200 pt-3">
                        <span className="text-slate-500">SS Equivalent</span>
                        <span className="text-slate-600">
                          {formatCurrency(calculations.ssEquivalent)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WEP/GPO Explanation */}
              {(calculations.hasWEP || calculations.hasGPO) && (
                <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#B22234] mb-4">
                    WEP/GPO Impact on Your Benefits
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {calculations.hasWEP && (
                      <li className="flex items-start gap-2">
                        <span className="text-[#B22234] mt-1">*</span>
                        <span>
                          <strong>WEP Reduction:</strong> Your Tier I is reduced by{" "}
                          {formatCurrency(calculations.wepReduction)}/month because you
                          receive a pension from work not covered by Social Security. With
                          more years of substantial earnings, this reduction decreases.
                        </span>
                      </li>
                    )}
                    {calculations.hasGPO && (
                      <li className="flex items-start gap-2">
                        <span className="text-[#B22234] mt-1">*</span>
                        <span>
                          <strong>GPO Reduction:</strong> If claiming spousal/survivor
                          benefits, they would be reduced by{" "}
                          {formatCurrency(calculations.gpoReduction)}/month (2/3 of your
                          government pension).
                        </span>
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">*</span>
                      <span>
                        <strong>Good News:</strong> Your Tier II benefit (railroad pension)
                        is NOT affected by WEP or GPO. Use our{" "}
                        <Link
                          href="/tools/railroad-retirement-calculator"
                          className="text-[#B22234] hover:underline"
                        >
                          full RRB calculator
                        </Link>{" "}
                        to see your complete benefit picture.
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Important Notes */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  Important Information
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">*</span>
                    <span>
                      Tier I is the Social Security equivalent portion of Railroad
                      Retirement. It is calculated similarly to Social Security benefits.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">*</span>
                    <span>
                      Both railroad and non-railroad earnings count toward your Tier I
                      benefit calculation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">*</span>
                    <span>
                      Tier I benefits receive annual COLA (cost-of-living adjustments)
                      just like Social Security.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">*</span>
                    <span>
                      This is only your Tier I portion. Railroad workers also receive
                      Tier II benefits based on railroad service only.
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <AugustaCTA
                variant="inline"
                headline="Maximize Your Railroad Retirement"
                subheadline="Understanding your Tier I benefits is just the start. Consider diversifying with a Gold IRA to protect your total retirement income from inflation and market volatility."
                trackSource="tools-railroad-tier-1-calculator"
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-slate-700 text-slate-600 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Calculate Again
                </button>
                <Link
                  href="/tools/railroad-retirement-calculator"
                  className="px-8 py-3 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-400 transition-colors text-center"
                >
                  Full RRB Calculator (Tier I + II)
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
