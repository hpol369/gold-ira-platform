'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AugustaCTA } from '@/components/cta/AugustaCTA';

// IRS Single Life Expectancy Table (partial - ages 30-70)
const lifeExpectancyTable: Record<number, number> = {
  30: 53.3, 31: 52.4, 32: 51.4, 33: 50.4, 34: 49.4, 35: 48.5, 36: 47.5, 37: 46.5,
  38: 45.6, 39: 44.6, 40: 43.6, 41: 42.7, 42: 41.7, 43: 40.7, 44: 39.8, 45: 38.8,
  46: 37.9, 47: 36.9, 48: 36.0, 49: 35.1, 50: 34.2, 51: 33.3, 52: 32.3, 53: 31.4,
  54: 30.5, 55: 29.6, 56: 28.7, 57: 27.9, 58: 27.0, 59: 26.1, 60: 25.2, 61: 24.4,
  62: 23.5, 63: 22.7, 64: 21.8, 65: 21.0, 66: 20.2, 67: 19.4, 68: 18.6, 69: 17.8, 70: 17.0
};

// Annuity factor table (simplified - based on age and interest rate)
function getAnnuityFactor(age: number, rate: number): number {
  const lifeExpectancy = lifeExpectancyTable[age] || 20;
  if (rate === 0) return lifeExpectancy;
  const monthlyRate = rate / 12;
  const months = lifeExpectancy * 12;
  return (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate / 12;
}

export default function SEPP72tCalculatorPage() {
  // Form state
  const [step, setStep] = useState(1);
  const [accountBalance, setAccountBalance] = useState(500000);
  const [age, setAge] = useState(55);
  const [interestRate, setInterestRate] = useState(5.0);
  const [showResults, setShowResults] = useState(false);

  // Calculate SEPP amounts using all three IRS methods
  const calculations = useMemo(() => {
    const lifeExpectancy = lifeExpectancyTable[age] || 20;
    const rate = interestRate / 100;

    // Method 1: RMD (Required Minimum Distribution)
    // Annual payment = Account Balance / Life Expectancy
    const rmdAnnual = accountBalance / lifeExpectancy;

    // Method 2: Fixed Amortization
    // Annual payment = Balance * (r / (1 - (1 + r)^-n))
    let amortizationAnnual: number;
    if (rate === 0) {
      amortizationAnnual = accountBalance / lifeExpectancy;
    } else {
      amortizationAnnual = accountBalance * (rate / (1 - Math.pow(1 + rate, -lifeExpectancy)));
    }

    // Method 3: Fixed Annuitization
    // Annual payment = Balance / Annuity Factor
    const annuityFactor = getAnnuityFactor(age, rate);
    const annuitizationAnnual = accountBalance / annuityFactor;

    // Calculate how long until 59.5 or 5 years (whichever is longer)
    const yearsUntil59Half = Math.max(0, 59.5 - age);
    const minimumYears = Math.max(5, yearsUntil59Half);
    const endAge = age + minimumYears;

    // Total distributions over SEPP period
    const rmdTotal = rmdAnnual * minimumYears;
    const amortizationTotal = amortizationAnnual * minimumYears;
    const annuitizationTotal = annuitizationAnnual * minimumYears;

    return {
      lifeExpectancy,
      minimumYears: Math.ceil(minimumYears),
      endAge: Math.ceil(endAge),
      rmd: {
        annual: rmdAnnual,
        monthly: rmdAnnual / 12,
        total: rmdTotal
      },
      amortization: {
        annual: amortizationAnnual,
        monthly: amortizationAnnual / 12,
        total: amortizationTotal
      },
      annuitization: {
        annual: annuitizationAnnual,
        monthly: annuitizationAnnual / 12,
        total: annuitizationTotal
      }
    };
  }, [accountBalance, age, interestRate]);

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
    setAccountBalance(500000);
    setAge(55);
    setInterestRate(5.0);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
                Early Retirement Tool
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                72(t) SEPP Calculator
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Calculate penalty-free early withdrawals from your IRA using IRS Rule 72(t)
                Substantially Equal Periodic Payments (SEPP)
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  {/* Progress Steps */}
                  <div className="flex items-center justify-center mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                            step >= s
                              ? 'bg-amber-500 text-slate-900'
                              : 'bg-slate-700 text-slate-400'
                          }`}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-16 h-1 mx-2 rounded transition-colors ${
                              step > s ? 'bg-amber-500' : 'bg-slate-700'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Account Balance */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        What is your IRA account balance?
                      </h2>
                      <p className="text-slate-400 text-center mb-8">
                        Enter the current balance of the IRA you want to take SEPP distributions from
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-amber-400">
                            {formatCurrency(accountBalance)}
                          </span>
                        </div>

                        <input
                          type="range"
                          min="50000"
                          max="5000000"
                          step="10000"
                          value={accountBalance}
                          onChange={(e) => setAccountBalance(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />

                        <div className="flex justify-between text-sm text-slate-400">
                          <span>$50,000</span>
                          <span>$5,000,000</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[100000, 250000, 500000, 750000, 1000000].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => setAccountBalance(amount)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                accountBalance === amount
                                  ? 'bg-amber-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
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
                          className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Age */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        What is your current age?
                      </h2>
                      <p className="text-slate-400 text-center mb-8">
                        SEPP distributions must continue for 5 years or until age 59½, whichever is longer
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-amber-400">{age}</span>
                          <span className="text-2xl text-slate-400 ml-2">years old</span>
                        </div>

                        <input
                          type="range"
                          min="30"
                          max="59"
                          step="1"
                          value={age}
                          onChange={(e) => setAge(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />

                        <div className="flex justify-between text-sm text-slate-400">
                          <span>30</span>
                          <span>59</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[40, 45, 50, 55, 58].map((a) => (
                            <button
                              key={a}
                              onClick={() => setAge(a)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                age === a
                                  ? 'bg-amber-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              {a} years
                            </button>
                          ))}
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <p className="text-blue-300 text-sm">
                            <strong>Note:</strong> At age {age}, you must continue SEPP distributions for at least{' '}
                            <strong>{calculations.minimumYears} years</strong> (until age {calculations.endAge})
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

                  {/* Step 3: Interest Rate */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        Select a reasonable interest rate
                      </h2>
                      <p className="text-slate-400 text-center mb-8">
                        The IRS allows a rate up to 120% of the federal mid-term rate (currently ~5%)
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-amber-400">{interestRate.toFixed(1)}%</span>
                        </div>

                        <input
                          type="range"
                          min="2"
                          max="8"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />

                        <div className="flex justify-between text-sm text-slate-400">
                          <span>2.0%</span>
                          <span>8.0%</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[3.0, 4.0, 5.0, 6.0, 7.0].map((r) => (
                            <button
                              key={r}
                              onClick={() => setInterestRate(r)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                interestRate === r
                                  ? 'bg-amber-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                              }`}
                            >
                              {r.toFixed(1)}%
                            </button>
                          ))}
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                          <p className="text-amber-300 text-sm">
                            <strong>Tip:</strong> A higher interest rate results in larger annual distributions.
                            The IRS publishes updated rates monthly.
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
                          onClick={handleCalculate}
                          className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                        >
                          Calculate SEPP
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
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                      Your 72(t) SEPP Options
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <p className="text-slate-400 text-sm">Account Balance</p>
                        <p className="text-xl font-bold text-white">{formatCurrency(accountBalance)}</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <p className="text-slate-400 text-sm">Your Age</p>
                        <p className="text-xl font-bold text-white">{age}</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <p className="text-slate-400 text-sm">Interest Rate</p>
                        <p className="text-xl font-bold text-white">{interestRate.toFixed(1)}%</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <p className="text-slate-400 text-sm">SEPP Duration</p>
                        <p className="text-xl font-bold text-white">{calculations.minimumYears} years</p>
                      </div>
                    </div>

                    {/* Three Methods Comparison */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* RMD Method */}
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-blue-400 rounded-full" />
                          <h3 className="text-lg font-semibold text-white">RMD Method</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">
                          Simplest method - recalculated annually
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-slate-400 text-sm">Annual Distribution</p>
                            <p className="text-2xl font-bold text-blue-400">
                              {formatCurrency(calculations.rmd.annual)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm">Monthly</p>
                            <p className="text-lg font-semibold text-white">
                              {formatCurrency(calculations.rmd.monthly)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Fixed Amortization */}
                      <div className="bg-gradient-to-b from-amber-500/10 to-transparent border-2 border-amber-500/30 rounded-xl p-6 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                            MOST POPULAR
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-amber-400 rounded-full" />
                          <h3 className="text-lg font-semibold text-white">Fixed Amortization</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">
                          Fixed payments - highest distribution
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-slate-400 text-sm">Annual Distribution</p>
                            <p className="text-2xl font-bold text-amber-400">
                              {formatCurrency(calculations.amortization.annual)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm">Monthly</p>
                            <p className="text-lg font-semibold text-white">
                              {formatCurrency(calculations.amortization.monthly)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Fixed Annuitization */}
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-green-400 rounded-full" />
                          <h3 className="text-lg font-semibold text-white">Fixed Annuitization</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">
                          Uses annuity factor tables
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-slate-400 text-sm">Annual Distribution</p>
                            <p className="text-2xl font-bold text-green-400">
                              {formatCurrency(calculations.annuitization.annual)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm">Monthly</p>
                            <p className="text-lg font-semibold text-white">
                              {formatCurrency(calculations.annuitization.monthly)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total Distributions Over SEPP Period */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6">
                      Total Distributions Over {calculations.minimumYears} Years
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-400 rounded-full" />
                        <span className="text-slate-300 flex-1">RMD Method</span>
                        <span className="text-white font-semibold">{formatCurrency(calculations.rmd.total)}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-amber-400 rounded-full" />
                        <span className="text-slate-300 flex-1">Fixed Amortization</span>
                        <span className="text-white font-semibold">{formatCurrency(calculations.amortization.total)}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                        <span className="text-slate-300 flex-1">Fixed Annuitization</span>
                        <span className="text-white font-semibold">{formatCurrency(calculations.annuitization.total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Important Rules */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-4">
                      Important 72(t) Rules
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">!</span>
                        <span>Once started, SEPP must continue for 5 years OR until 59½, whichever is longer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">!</span>
                        <span>Modifying payments triggers 10% penalty on ALL previous distributions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">!</span>
                        <span>You can make a one-time switch from Amortization/Annuitization to RMD method</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">!</span>
                        <span>Consult a tax professional before starting a 72(t) plan</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <AugustaCTA
                    variant="inline"
                    headline="Considering Early Retirement with a Gold IRA?"
                    subheadline="Learn how physical gold can provide stability during your SEPP distribution period. Augusta Precious Metals specializes in helping pre-retirees protect their savings."
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
                      href="/learn/72t-sepp-early-retirement"
                      className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-center"
                    >
                      Learn More About 72(t)
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Educational Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Understanding 72(t) SEPP Distributions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">What is 72(t)?</h3>
                <p className="text-slate-300">
                  IRS Rule 72(t) allows you to take penalty-free withdrawals from your IRA before age 59½
                  through Substantially Equal Periodic Payments (SEPP). This is ideal for early retirees
                  who need access to retirement funds.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">Which Method to Choose?</h3>
                <p className="text-slate-300">
                  <strong>RMD:</strong> Lowest payments, can vary year to year.<br />
                  <strong>Amortization:</strong> Highest fixed payments, most popular.<br />
                  <strong>Annuitization:</strong> Fixed payments using annuity factors.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">Duration Requirements</h3>
                <p className="text-slate-300">
                  You must continue SEPP distributions for the longer of 5 years OR until you reach age 59½.
                  If you're 50, that means 9.5 years. If you're 57, that means 5 years (until age 62).
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">Modification Penalty</h3>
                <p className="text-slate-300">
                  If you modify your SEPP plan (other than the one-time switch to RMD), the IRS will
                  apply a 10% penalty to ALL previous distributions, plus interest. This makes careful
                  planning essential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Related Retirement Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/tools/retirement-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  Retirement Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  See if you have enough saved for retirement
                </p>
              </Link>
              <Link
                href="/tools/rmd-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  RMD Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Calculate your Required Minimum Distributions
                </p>
              </Link>
              <Link
                href="/tools/fees-comparison"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  IRA Fees Comparison
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Compare Gold IRA fees across providers
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
