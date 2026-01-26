"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

interface NUACalculationResults {
  // NUA Strategy
  nuaCostBasisTax: number;
  nuaAppreciationTax: number;
  nuaTotalTax: number;
  nuaEffectiveRate: number;

  // Regular Rollover Strategy
  rolloverTax: number;
  rolloverEffectiveRate: number;

  // Comparison
  taxSavings: number;
  savingsPercentage: number;
  recommendedStrategy: "nua" | "rollover" | "mixed";
  breakEvenYears: number;

  // Input values for display
  totalShares: number;
  costBasis: number;
  currentValue: number;
  nua: number;
}

export function NUACalculator() {
  // Form state
  const [step, setStep] = useState(1);
  const [totalShares, setTotalShares] = useState(1000);
  const [costBasisPerShare, setCostBasisPerShare] = useState(25);
  const [currentPricePerShare, setCurrentPricePerShare] = useState(100);
  const [ordinaryIncomeBracket, setOrdinaryIncomeBracket] = useState(24);
  const [longTermCapGainsRate, setLongTermCapGainsRate] = useState(15);
  const [stateTaxRate, setStateTaxRate] = useState(5);
  const [showResults, setShowResults] = useState(false);

  // Calculate NUA vs Rollover
  const calculations = useMemo<NUACalculationResults>(() => {
    const costBasis = totalShares * costBasisPerShare;
    const currentValue = totalShares * currentPricePerShare;
    const nua = currentValue - costBasis; // Net Unrealized Appreciation

    // Combined tax rates
    const totalOrdinaryRate = (ordinaryIncomeBracket + stateTaxRate) / 100;
    const totalCapGainsRate = (longTermCapGainsRate + stateTaxRate) / 100;

    // NUA Strategy:
    // 1. Pay ordinary income tax on cost basis NOW when distributed
    // 2. Pay LTCG on NUA when stock is eventually sold
    const nuaCostBasisTax = costBasis * totalOrdinaryRate;
    const nuaAppreciationTax = nua * totalCapGainsRate;
    const nuaTotalTax = nuaCostBasisTax + nuaAppreciationTax;
    const nuaEffectiveRate = (nuaTotalTax / currentValue) * 100;

    // Regular Rollover Strategy:
    // Pay ordinary income tax on FULL amount when distributed
    const rolloverTax = currentValue * totalOrdinaryRate;
    const rolloverEffectiveRate = (rolloverTax / currentValue) * 100;

    // Tax Savings
    const taxSavings = rolloverTax - nuaTotalTax;
    const savingsPercentage = (taxSavings / rolloverTax) * 100;

    // Determine recommended strategy
    let recommendedStrategy: "nua" | "rollover" | "mixed" = "nua";
    if (taxSavings < 0) {
      recommendedStrategy = "rollover";
    } else if (nua / currentValue < 0.5) {
      // If appreciation is less than 50% of value, consider mixed
      recommendedStrategy = "mixed";
    }

    // Break-even calculation (years of tax-deferred growth to overcome NUA advantage)
    // Simplified: assumes 7% annual growth
    const annualGrowth = 0.07;
    const taxDeferralBenefit = nuaCostBasisTax * annualGrowth; // Value of deferring the tax
    const breakEvenYears =
      taxSavings > 0 ? Math.ceil(taxSavings / taxDeferralBenefit) : 0;

    return {
      nuaCostBasisTax: Math.round(nuaCostBasisTax),
      nuaAppreciationTax: Math.round(nuaAppreciationTax),
      nuaTotalTax: Math.round(nuaTotalTax),
      nuaEffectiveRate,
      rolloverTax: Math.round(rolloverTax),
      rolloverEffectiveRate,
      taxSavings: Math.round(taxSavings),
      savingsPercentage,
      recommendedStrategy,
      breakEvenYears,
      totalShares,
      costBasis,
      currentValue,
      nua,
    };
  }, [
    totalShares,
    costBasisPerShare,
    currentPricePerShare,
    ordinaryIncomeBracket,
    longTermCapGainsRate,
    stateTaxRate,
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
    setTotalShares(1000);
    setCostBasisPerShare(25);
    setCurrentPricePerShare(100);
    setOrdinaryIncomeBracket(24);
    setLongTermCapGainsRate(15);
    setStateTaxRate(5);
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
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= s
                          ? "bg-green-500 text-white"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-16 h-1 mx-2 rounded transition-colors ${
                          step > s ? "bg-green-500" : "bg-slate-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Stock Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Your Company Stock
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    Enter details about your employer stock in your 401(k)
                  </p>

                  <div className="space-y-8">
                    {/* Number of Shares */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        Total Shares of Company Stock
                      </h3>
                      <div className="text-center">
                        <span className="text-5xl font-bold text-green-400">
                          {totalShares.toLocaleString()}
                        </span>
                        <span className="text-xl text-slate-400 ml-2">shares</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="10000"
                        step="100"
                        value={totalShares}
                        onChange={(e) => setTotalShares(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[500, 1000, 2500, 5000].map((shares) => (
                          <button
                            key={shares}
                            onClick={() => setTotalShares(shares)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              totalShares === shares
                                ? "bg-green-500 text-white"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            {shares.toLocaleString()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cost Basis per Share */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white text-center">
                          Cost Basis Per Share
                        </h3>
                        <div className="text-center">
                          <span className="text-4xl font-bold text-amber-400">
                            ${costBasisPerShare}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="100"
                          step="5"
                          value={costBasisPerShare}
                          onChange={(e) =>
                            setCostBasisPerShare(Number(e.target.value))
                          }
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                        <p className="text-slate-500 text-xs text-center">
                          What you paid / was contributed
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white text-center">
                          Current Price Per Share
                        </h3>
                        <div className="text-center">
                          <span className="text-4xl font-bold text-green-400">
                            ${currentPricePerShare}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="500"
                          step="5"
                          value={currentPricePerShare}
                          onChange={(e) =>
                            setCurrentPricePerShare(Number(e.target.value))
                          }
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                        <p className="text-slate-500 text-xs text-center">
                          Fair market value today
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-slate-400 text-sm">Cost Basis</p>
                          <p className="text-xl font-bold text-amber-400">
                            {formatCurrency(totalShares * costBasisPerShare)}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">Current Value</p>
                          <p className="text-xl font-bold text-green-400">
                            {formatCurrency(totalShares * currentPricePerShare)}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">NUA</p>
                          <p className="text-xl font-bold text-white">
                            {formatCurrency(
                              totalShares *
                                (currentPricePerShare - costBasisPerShare)
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Tax Rates */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Your Tax Rates
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    Enter your federal and state tax brackets
                  </p>

                  <div className="space-y-8">
                    {/* Ordinary Income Bracket */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        Federal Ordinary Income Tax Bracket
                      </h3>
                      <div className="text-center">
                        <span className="text-5xl font-bold text-red-400">
                          {ordinaryIncomeBracket}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="37"
                        step="1"
                        value={ordinaryIncomeBracket}
                        onChange={(e) =>
                          setOrdinaryIncomeBracket(Number(e.target.value))
                        }
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                      />
                      <div className="flex flex-wrap gap-2 justify-center">
                        {[12, 22, 24, 32, 35].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => setOrdinaryIncomeBracket(rate)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              ordinaryIncomeBracket === rate
                                ? "bg-red-500 text-white"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            {rate}%
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* LTCG Rate */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        Federal Long-Term Capital Gains Rate
                      </h3>
                      <div className="text-center">
                        <span className="text-5xl font-bold text-green-400">
                          {longTermCapGainsRate}%
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {[0, 15, 20].map((rate) => (
                          <button
                            key={rate}
                            onClick={() => setLongTermCapGainsRate(rate)}
                            className={`px-6 py-3 rounded-xl text-lg font-medium transition-colors ${
                              longTermCapGainsRate === rate
                                ? "bg-green-500 text-white"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            {rate}%
                          </button>
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs text-center">
                        0% if income under $47,025 (single) | 15% for most | 20% if
                        income over $518,900
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <p className="text-green-300 text-sm">
                        <strong>NUA Advantage:</strong> The difference between your
                        ordinary income rate ({ordinaryIncomeBracket}%) and capital
                        gains rate ({longTermCapGainsRate}%) is{" "}
                        <strong>
                          {ordinaryIncomeBracket - longTermCapGainsRate}%
                        </strong>
                        . A larger spread means bigger potential tax savings.
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
                      className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: State Tax */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    State Income Tax
                  </h2>
                  <p className="text-slate-400 text-center mb-8">
                    Enter your state income tax rate (if applicable)
                  </p>

                  <div className="space-y-6">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-purple-400">
                        {stateTaxRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="13"
                      step="0.5"
                      value={stateTaxRate}
                      onChange={(e) => setStateTaxRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[0, 3, 5, 7, 10].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setStateTaxRate(rate)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            stateTaxRate === rate
                              ? "bg-purple-500 text-white"
                              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs text-center">
                      0% for TX, FL, WA, NV, WY, SD, TN, AK, NH | Highest: CA (13.3%),
                      NY (10.9%)
                    </p>

                    {/* Tax Summary */}
                    <div className="bg-slate-800/50 rounded-xl p-6 mt-8">
                      <h3 className="text-lg font-semibold text-white mb-4 text-center">
                        Combined Tax Rates
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center">
                          <p className="text-slate-400 text-sm mb-1">
                            Ordinary Income (Rollover)
                          </p>
                          <p className="text-3xl font-bold text-red-400">
                            {ordinaryIncomeBracket + stateTaxRate}%
                          </p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                          <p className="text-slate-400 text-sm mb-1">
                            Long-Term Cap Gains (NUA)
                          </p>
                          <p className="text-3xl font-bold text-green-400">
                            {longTermCapGainsRate + stateTaxRate}%
                          </p>
                        </div>
                      </div>
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
                      onClick={handleCalculate}
                      className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors"
                    >
                      Calculate NUA Strategy
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
              <div
                className={`rounded-2xl p-8 text-center border-2 ${
                  calculations.taxSavings > 0
                    ? "bg-gradient-to-b from-green-500/10 to-transparent border-green-500/30"
                    : "bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/30"
                }`}
              >
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    calculations.taxSavings > 0
                      ? "bg-green-500/20 text-green-400"
                      : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {calculations.taxSavings > 0
                    ? "NUA Strategy Saves You"
                    : "Consider Regular Rollover"}
                </span>
                <div
                  className={`text-6xl font-bold mb-2 ${
                    calculations.taxSavings > 0
                      ? "text-green-400"
                      : "text-amber-400"
                  }`}
                >
                  {formatCurrency(Math.abs(calculations.taxSavings))}
                </div>
                <p className="text-slate-300 mb-4">
                  {calculations.taxSavings > 0
                    ? `That's ${calculations.savingsPercentage.toFixed(
                        1
                      )}% less in taxes compared to a regular rollover`
                    : "A regular rollover may be more beneficial in your situation"}
                </p>
              </div>

              {/* Strategy Comparison */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Strategy Comparison
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* NUA Strategy */}
                  <div
                    className={`rounded-xl p-6 ${
                      calculations.recommendedStrategy === "nua"
                        ? "bg-green-500/10 border-2 border-green-500/30 relative"
                        : "bg-slate-800/50 border border-slate-700"
                    }`}
                  >
                    {calculations.recommendedStrategy === "nua" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          RECOMMENDED
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-white mb-4">
                      NUA Strategy
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tax on Cost Basis</span>
                        <span className="text-red-400 font-semibold">
                          {formatCurrency(calculations.nuaCostBasisTax)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tax on NUA (LTCG)</span>
                        <span className="text-amber-400 font-semibold">
                          {formatCurrency(calculations.nuaAppreciationTax)}
                        </span>
                      </div>
                      <div className="border-t border-white/10 pt-3 flex justify-between">
                        <span className="text-white font-semibold">Total Tax</span>
                        <span className="text-xl font-bold text-green-400">
                          {formatCurrency(calculations.nuaTotalTax)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Effective Rate</span>
                        <span className="text-slate-300">
                          {calculations.nuaEffectiveRate.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Regular Rollover */}
                  <div
                    className={`rounded-xl p-6 ${
                      calculations.recommendedStrategy === "rollover"
                        ? "bg-amber-500/10 border-2 border-amber-500/30 relative"
                        : "bg-slate-800/50 border border-slate-700"
                    }`}
                  >
                    {calculations.recommendedStrategy === "rollover" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                          RECOMMENDED
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Regular Rollover
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Roll to IRA (Tax Deferred)</span>
                        <span className="text-slate-500">$0 now</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Tax at Distribution (ordinary)
                        </span>
                        <span className="text-red-400 font-semibold">
                          {formatCurrency(calculations.rolloverTax)}
                        </span>
                      </div>
                      <div className="border-t border-white/10 pt-3 flex justify-between">
                        <span className="text-white font-semibold">Total Tax</span>
                        <span className="text-xl font-bold text-red-400">
                          {formatCurrency(calculations.rolloverTax)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Effective Rate</span>
                        <span className="text-slate-300">
                          {calculations.rolloverEffectiveRate.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Comparison */}
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Tax Comparison
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400">NUA Strategy</span>
                        <span className="text-green-400 font-semibold">
                          {formatCurrency(calculations.nuaTotalTax)}
                        </span>
                      </div>
                      <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{
                            width: `${
                              (calculations.nuaTotalTax /
                                Math.max(
                                  calculations.nuaTotalTax,
                                  calculations.rolloverTax
                                )) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400">Regular Rollover</span>
                        <span className="text-red-400 font-semibold">
                          {formatCurrency(calculations.rolloverTax)}
                        </span>
                      </div>
                      <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Position Summary */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Your Stock Position
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <p className="text-slate-400 text-sm">Shares</p>
                    <p className="text-xl font-bold text-white">
                      {calculations.totalShares.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <p className="text-slate-400 text-sm">Cost Basis</p>
                    <p className="text-xl font-bold text-amber-400">
                      {formatCurrency(calculations.costBasis)}
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <p className="text-slate-400 text-sm">Current Value</p>
                    <p className="text-xl font-bold text-green-400">
                      {formatCurrency(calculations.currentValue)}
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                    <p className="text-green-400 text-sm">Net Unrealized Appreciation</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(calculations.nua)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Important NUA Rules */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-4">
                  Critical NUA Rules
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 font-bold">1.</span>
                    <span>
                      <strong>Triggering Event Required:</strong> You must have a
                      qualifying event - separation from service, reaching age 59 1/2,
                      disability, or death.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 font-bold">2.</span>
                    <span>
                      <strong>Lump-Sum Distribution:</strong> You must take your entire
                      401(k) balance (not just the stock) within ONE calendar year.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 font-bold">3.</span>
                    <span>
                      <strong>No Partial NUA:</strong> You cannot do NUA on only some of
                      your employer stock - it is all or nothing for the NUA election.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1 font-bold">4.</span>
                    <span>
                      <strong>Tax Timing:</strong> You pay ordinary income tax on the
                      cost basis immediately. LTCG on NUA is due when you sell the stock.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Gold IRA Bridge */}
              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">
                  After Your NUA Distribution
                </h3>
                <p className="text-slate-300 mb-4">
                  After taking advantage of NUA, you may have a concentrated position in
                  your former employer&apos;s stock. Consider diversifying a portion of
                  your proceeds into a Gold IRA to:
                </p>
                <ul className="space-y-2 text-slate-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">*</span>
                    Reduce single-stock concentration risk
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">*</span>
                    Protect against market volatility with physical gold
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">*</span>
                    Hedge against inflation as you approach retirement
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <AugustaCTA
                variant="inline"
                headline="Diversify After Your NUA Distribution"
                subheadline="Concentrated stock positions carry significant risk. After your NUA distribution, consider moving some proceeds into a Gold IRA for diversification and inflation protection."
                trackSource="tools-nua-calculator"
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
                  href="/guide/401k-to-gold-rollover"
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors text-center"
                >
                  401k Rollover Guide
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
