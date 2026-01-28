'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AugustaCTA } from '@/components/cta/AugustaCTA';

export default function FERSCalculatorPage() {
  // Form state
  const [step, setStep] = useState(1);
  const [highThreeSalary, setHighThreeSalary] = useState(100000);
  const [yearsOfService, setYearsOfService] = useState(25);
  const [retirementAge, setRetirementAge] = useState(62);
  const [tspBalance, setTspBalance] = useState(500000);
  const [survivorBenefit, setSurvivorBenefit] = useState<'none' | 'partial' | 'full'>('none');
  const [showResults, setShowResults] = useState(false);

  // Calculate FERS benefits
  const calculations = useMemo(() => {
    // FERS Basic Benefit Formula
    // 1% x High-3 x Years of Service (1.1% if age 62+ with 20+ years)
    let multiplier = 0.01;
    if (retirementAge >= 62 && yearsOfService >= 20) {
      multiplier = 0.011;
    }

    const annualBasicBenefit = multiplier * highThreeSalary * yearsOfService;
    const monthlyBasicBenefit = annualBasicBenefit / 12;

    // Survivor benefit reduction
    let survivorReduction = 0;
    if (survivorBenefit === 'partial') {
      survivorReduction = annualBasicBenefit * 0.05; // 5% reduction for 25% survivor
    } else if (survivorBenefit === 'full') {
      survivorReduction = annualBasicBenefit * 0.10; // 10% reduction for 50% survivor
    }

    const netAnnualBenefit = annualBasicBenefit - survivorReduction;
    const netMonthlyBenefit = netAnnualBenefit / 12;

    // FERS Supplement (if retiring before 62)
    // Approximation: (Years of Service / 40) x Estimated SS benefit
    let fersSupplementAnnual = 0;
    let fersSupplementMonthly = 0;
    if (retirementAge < 62) {
      // Estimate SS benefit at 62 based on high-3 salary
      const estimatedSSAt62 = Math.min(highThreeSalary * 0.4, 36000); // Rough estimate
      fersSupplementAnnual = (yearsOfService / 40) * estimatedSSAt62;
      fersSupplementMonthly = fersSupplementAnnual / 12;
    }

    // TSP Projections
    // Assume 4% safe withdrawal rate
    const tspAnnualWithdrawal = tspBalance * 0.04;
    const tspMonthlyWithdrawal = tspAnnualWithdrawal / 12;

    // Total retirement income
    const totalAnnual = netAnnualBenefit + fersSupplementAnnual + tspAnnualWithdrawal;
    const totalMonthly = netMonthlyBenefit + fersSupplementMonthly + tspMonthlyWithdrawal;

    // Replacement ratio
    const replacementRatio = (totalAnnual / highThreeSalary) * 100;

    // Minimum Retirement Age (MRA) based on birth year
    // Simplified: assuming MRA of 57 for most current federal employees
    const mra = 57;
    const canRetireImmediate = (retirementAge >= mra && yearsOfService >= 30) ||
                               (retirementAge >= 60 && yearsOfService >= 20) ||
                               (retirementAge >= 62 && yearsOfService >= 5);

    const canRetireMRAPlus10 = retirementAge >= mra && yearsOfService >= 10;
    const penaltyPercentage = canRetireImmediate ? 0 : (canRetireMRAPlus10 ? Math.max(0, (62 - retirementAge) * 5) : 100);

    return {
      multiplier,
      annualBasicBenefit,
      monthlyBasicBenefit,
      survivorReduction,
      netAnnualBenefit,
      netMonthlyBenefit,
      fersSupplementAnnual,
      fersSupplementMonthly,
      tspAnnualWithdrawal,
      tspMonthlyWithdrawal,
      totalAnnual,
      totalMonthly,
      replacementRatio,
      canRetireImmediate,
      canRetireMRAPlus10,
      penaltyPercentage,
      mra
    };
  }, [highThreeSalary, yearsOfService, retirementAge, tspBalance, survivorBenefit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setStep(1);
    setShowResults(false);
    setHighThreeSalary(100000);
    setYearsOfService(25);
    setRetirementAge(62);
    setTspBalance(500000);
    setSurvivorBenefit('none');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-slate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-4">
                Federal Employee Tool
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#000080] mb-4">
                FERS Retirement Calculator
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                After 25+ years of federal service, you've earned a solid pension.
                This calculator shows exactly what you'll get - and how to protect your TSP from the next market downturn.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
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
                              ? 'bg-blue-500 text-slate-900'
                              : 'bg-slate-700 text-slate-500'
                          }`}
                        >
                          {s}
                        </div>
                        {s < 4 && (
                          <div
                            className={`w-12 h-1 mx-2 rounded transition-colors ${
                              step > s ? 'bg-blue-500' : 'bg-slate-700'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: High-3 Salary */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        What is your High-3 average salary?
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        The average of your highest 3 consecutive years of basic pay
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-blue-600">
                            {formatCurrency(highThreeSalary)}
                          </span>
                        </div>

                        <input
                          type="range"
                          min="40000"
                          max="250000"
                          step="5000"
                          value={highThreeSalary}
                          onChange={(e) => setHighThreeSalary(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />

                        <div className="flex justify-between text-sm text-slate-500">
                          <span>$40,000</span>
                          <span>$250,000</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[75000, 100000, 125000, 150000, 175000].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => setHighThreeSalary(amount)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                highThreeSalary === amount
                                  ? 'bg-blue-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                              }`}
                            >
                              {formatCurrency(amount)}
                            </button>
                          ))}
                        </div>
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

                  {/* Step 2: Years of Service & Retirement Age */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Service & Retirement Age
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Enter your years of creditable service and planned retirement age
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Years of Service */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Years of Service</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-blue-600">{yearsOfService}</span>
                            <span className="text-xl text-slate-500 ml-2">years</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="40"
                            step="1"
                            value={yearsOfService}
                            onChange={(e) => setYearsOfService(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[10, 20, 25, 30, 35].map((y) => (
                              <button
                                key={y}
                                onClick={() => setYearsOfService(y)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  yearsOfService === y
                                    ? 'bg-blue-500 text-slate-900'
                                    : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                                }`}
                              >
                                {y} yrs
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Retirement Age */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Retirement Age</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-blue-600">{retirementAge}</span>
                            <span className="text-xl text-slate-500 ml-2">years old</span>
                          </div>
                          <input
                            type="range"
                            min="55"
                            max="70"
                            step="1"
                            value={retirementAge}
                            onChange={(e) => setRetirementAge(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[57, 60, 62, 65, 67].map((a) => (
                              <button
                                key={a}
                                onClick={() => setRetirementAge(a)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  retirementAge === a
                                    ? 'bg-blue-500 text-slate-900'
                                    : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                                }`}
                              >
                                {a}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Eligibility Status */}
                      <div className={`mt-6 rounded-lg p-4 ${
                        calculations.canRetireImmediate
                          ? 'bg-green-50 border border-green-200'
                          : calculations.canRetireMRAPlus10
                            ? 'bg-[#B22234]/10 border border-[#B22234]/30'
                            : 'bg-red-50 border border-red-200'
                      }`}>
                        <p className={`text-sm ${
                          calculations.canRetireImmediate
                            ? 'text-green-300'
                            : calculations.canRetireMRAPlus10
                              ? 'text-amber-300'
                              : 'text-red-300'
                        }`}>
                          {calculations.canRetireImmediate
                            ? '✓ Eligible for immediate unreduced retirement'
                            : calculations.canRetireMRAPlus10
                              ? `⚠ Eligible for MRA+10 retirement with ${calculations.penaltyPercentage}% reduction`
                              : '✗ Not yet eligible for FERS retirement at this age/service combination'}
                        </p>
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

                  {/* Step 3: TSP Balance */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        What is your TSP balance?
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Your Thrift Savings Plan balance (we'll estimate income using 4% withdrawal rate)
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-blue-600">
                            {formatCurrency(tspBalance)}
                          </span>
                        </div>

                        <input
                          type="range"
                          min="0"
                          max="3000000"
                          step="25000"
                          value={tspBalance}
                          onChange={(e) => setTspBalance(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />

                        <div className="flex justify-between text-sm text-slate-500">
                          <span>$0</span>
                          <span>$3,000,000</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[250000, 500000, 750000, 1000000, 1500000].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => setTspBalance(amount)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                tspBalance === amount
                                  ? 'bg-blue-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                              }`}
                            >
                              {formatCurrency(amount)}
                            </button>
                          ))}
                        </div>
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

                  {/* Step 4: Survivor Benefit */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Survivor Benefit Election
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Choose a survivor benefit for your spouse (reduces your pension)
                      </p>

                      <div className="space-y-4">
                        <button
                          onClick={() => setSurvivorBenefit('none')}
                          className={`w-full p-6 rounded-xl border-2 text-left transition-colors ${
                            survivorBenefit === 'none'
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                          }`}
                        >
                          <h3 className="text-lg font-semibold text-slate-900">No Survivor Benefit</h3>
                          <p className="text-slate-600 text-sm mt-1">
                            Full pension amount with no reduction. Pension stops at your death.
                          </p>
                          <p className="text-blue-600 font-semibold mt-2">0% reduction</p>
                        </button>

                        <button
                          onClick={() => setSurvivorBenefit('partial')}
                          className={`w-full p-6 rounded-xl border-2 text-left transition-colors ${
                            survivorBenefit === 'partial'
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                          }`}
                        >
                          <h3 className="text-lg font-semibold text-slate-900">Partial Survivor (25%)</h3>
                          <p className="text-slate-600 text-sm mt-1">
                            Spouse receives 25% of your pension after your death.
                          </p>
                          <p className="text-[#B22234] font-semibold mt-2">5% reduction in your pension</p>
                        </button>

                        <button
                          onClick={() => setSurvivorBenefit('full')}
                          className={`w-full p-6 rounded-xl border-2 text-left transition-colors ${
                            survivorBenefit === 'full'
                              ? 'border-blue-500 bg-blue-500/10'
                              : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                          }`}
                        >
                          <h3 className="text-lg font-semibold text-slate-900">Full Survivor (50%)</h3>
                          <p className="text-slate-600 text-sm mt-1">
                            Spouse receives 50% of your pension after your death.
                          </p>
                          <p className="text-red-600 font-semibold mt-2">10% reduction in your pension</p>
                        </button>
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
                          Calculate FERS
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
                  {/* Summary Card */}
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-[#000080] mb-6 text-center">
                      Your FERS Retirement Estimate
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <p className="text-slate-600 text-sm">High-3 Salary</p>
                        <p className="text-xl font-bold text-slate-900">{formatCurrency(highThreeSalary)}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <p className="text-slate-600 text-sm">Years of Service</p>
                        <p className="text-xl font-bold text-slate-900">{yearsOfService}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <p className="text-slate-600 text-sm">Retirement Age</p>
                        <p className="text-xl font-bold text-slate-900">{retirementAge}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <p className="text-slate-600 text-sm">Multiplier</p>
                        <p className="text-xl font-bold text-slate-900">{(calculations.multiplier * 100).toFixed(1)}%</p>
                      </div>
                    </div>

                    {/* Income Breakdown */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Monthly Income */}
                      <div className="bg-gradient-to-b from-blue-500/10 to-transparent border-2 border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Income</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-500">FERS Basic Benefit</span>
                            <span className="text-slate-900 font-semibold">{formatCurrency(calculations.netMonthlyBenefit)}</span>
                          </div>
                          {calculations.fersSupplementMonthly > 0 && (
                            <div className="flex justify-between">
                              <span className="text-slate-500">FERS Supplement</span>
                              <span className="text-slate-900 font-semibold">{formatCurrency(calculations.fersSupplementMonthly)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-slate-500">TSP (4% rate)</span>
                            <span className="text-slate-900 font-semibold">{formatCurrency(calculations.tspMonthlyWithdrawal)}</span>
                          </div>
                          <div className="border-t border-slate-700 pt-3">
                            <div className="flex justify-between">
                              <span className="text-slate-900 font-semibold">Total Monthly</span>
                              <span className="text-2xl font-bold text-blue-600">{formatCurrency(calculations.totalMonthly)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Annual Income */}
                      <div className="bg-slate-50 border border-slate-700 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Annual Income</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-500">FERS Basic Benefit</span>
                            <span className="text-slate-900 font-semibold">{formatCurrency(calculations.netAnnualBenefit)}</span>
                          </div>
                          {calculations.fersSupplementAnnual > 0 && (
                            <div className="flex justify-between">
                              <span className="text-slate-500">FERS Supplement</span>
                              <span className="text-slate-900 font-semibold">{formatCurrency(calculations.fersSupplementAnnual)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-slate-500">TSP (4% rate)</span>
                            <span className="text-slate-900 font-semibold">{formatCurrency(calculations.tspAnnualWithdrawal)}</span>
                          </div>
                          <div className="border-t border-slate-700 pt-3">
                            <div className="flex justify-between">
                              <span className="text-slate-900 font-semibold">Total Annual</span>
                              <span className="text-2xl font-bold text-slate-900">{formatCurrency(calculations.totalAnnual)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Replacement Ratio */}
                    <div className="bg-slate-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-600">Income Replacement Ratio</span>
                        <span className={`text-2xl font-bold ${
                          calculations.replacementRatio >= 80 ? 'text-green-600' :
                          calculations.replacementRatio >= 60 ? 'text-[#B22234]' : 'text-red-600'
                        }`}>
                          {calculations.replacementRatio.toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            calculations.replacementRatio >= 80 ? 'bg-green-500' :
                            calculations.replacementRatio >= 60 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(100, calculations.replacementRatio)}%` }}
                        />
                      </div>
                      <p className="text-slate-600 text-sm mt-2">
                        Financial advisors often recommend 70-80% replacement of pre-retirement income
                      </p>
                    </div>
                  </div>

                  {/* Survivor Benefit Impact */}
                  {survivorBenefit !== 'none' && (
                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Survivor Benefit Impact</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-slate-600 text-sm">Gross Annual Benefit</p>
                          <p className="text-lg font-semibold text-slate-900">{formatCurrency(calculations.annualBasicBenefit)}</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-slate-600 text-sm">Survivor Reduction</p>
                          <p className="text-lg font-semibold text-red-600">-{formatCurrency(calculations.survivorReduction)}</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-slate-600 text-sm">Net Annual Benefit</p>
                          <p className="text-lg font-semibold text-blue-600">{formatCurrency(calculations.netAnnualBenefit)}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FERS Supplement Notice */}
                  {calculations.fersSupplementAnnual > 0 && (
                    <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-[#B22234] mb-2">FERS Supplement</h3>
                      <p className="text-slate-600">
                        You may be eligible for the FERS Supplement of approximately <strong>{formatCurrency(calculations.fersSupplementMonthly)}/month</strong>.
                        This is paid from retirement until age 62 to bridge the gap before Social Security.
                        The supplement is subject to an earnings test if you work in retirement.
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <AugustaCTA
                    variant="inline"
                    headline="Your Pension Is Safe. What About Your TSP?"
                    subheadline="FERS is reliable, but your TSP can lose 40%+ in a crash. Federal employees can roll TSP into a Gold IRA at 59½ - protecting decades of contributions from market chaos."
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
                      href="/learn/fers-pension-gold-ira"
                      className="px-8 py-3 bg-blue-500 text-slate-900 font-semibold rounded-lg hover:bg-blue-400 transition-colors text-center"
                    >
                      FERS & Gold IRA Guide
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Educational Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-8 text-center">
              Understanding FERS Retirement
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">FERS Basic Benefit Formula</h3>
                <p className="text-slate-600">
                  <strong>1%</strong> × High-3 × Years of Service<br />
                  Or <strong>1.1%</strong> if age 62+ with 20+ years<br /><br />
                  Example: 1% × $100,000 × 30 years = $30,000/year
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Retirement Eligibility</h3>
                <p className="text-slate-600">
                  <strong>MRA + 30:</strong> Minimum Retirement Age with 30 years<br />
                  <strong>Age 60 + 20:</strong> Age 60 with 20 years<br />
                  <strong>Age 62 + 5:</strong> Age 62 with 5 years<br />
                  <strong>MRA + 10:</strong> Reduced benefit (5%/year before 62)
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Three Legs of FERS</h3>
                <p className="text-slate-600">
                  <strong>1. FERS Basic Benefit:</strong> The pension calculated above<br />
                  <strong>2. Social Security:</strong> Full benefits at your FRA<br />
                  <strong>3. TSP:</strong> Your Thrift Savings Plan investments
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">TSP Rollover Options</h3>
                <p className="text-slate-600">
                  After separation or at age 59½, you can roll TSP funds into:<br />
                  • Traditional IRA<br />
                  • Roth IRA (with tax consequences)<br />
                  • Gold IRA (Self-Directed)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#000080] mb-8 text-center">
              Related Retirement Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/tools/72t-calculator"
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#B22234] transition-colors">
                  72(t) Calculator
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Calculate early withdrawal options
                </p>
              </Link>
              <Link
                href="/tools/retirement-calculator"
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#B22234] transition-colors">
                  Retirement Calculator
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  See if you have enough saved
                </p>
              </Link>
              <Link
                href="/tools/rmd-calculator"
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#B22234] transition-colors">
                  RMD Calculator
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Required Minimum Distributions
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
