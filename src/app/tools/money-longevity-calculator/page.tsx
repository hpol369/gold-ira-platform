'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AugustaCTA } from '@/components/cta/AugustaCTA';

export default function MoneyLongevityCalculatorPage() {
  // Form state
  const [step, setStep] = useState(1);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(4000);
  const [socialSecurity, setSocialSecurity] = useState(2000);
  const [pension, setPension] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [inflationRate, setInflationRate] = useState(3);
  const [currentAge, setCurrentAge] = useState(65);
  const [showResults, setShowResults] = useState(false);

  // Calculate money longevity
  const calculations = useMemo(() => {
    const annualExpenses = monthlyExpenses * 12;
    const annualIncome = (socialSecurity + pension) * 12;
    const annualGap = annualExpenses - annualIncome;
    const realReturn = (1 + expectedReturn / 100) / (1 + inflationRate / 100) - 1;

    // If expenses are covered by income, savings last forever
    if (annualGap <= 0) {
      return {
        yearsLasting: Infinity,
        ageWhenDepleted: Infinity,
        annualExpenses,
        annualIncome,
        annualGap: 0,
        yearByYear: [],
        safeWithdrawalRate: 0,
        sustainableWithdrawal: 0,
        shortfall: 0
      };
    }

    // Calculate year-by-year depletion
    const yearByYear: Array<{
      year: number;
      age: number;
      startBalance: number;
      withdrawal: number;
      returns: number;
      endBalance: number;
    }> = [];

    let balance = currentSavings;
    let year = 0;
    let withdrawal = annualGap;

    while (balance > 0 && year < 100) {
      const startBalance = balance;
      const returns = balance * realReturn;
      const adjustedWithdrawal = withdrawal * Math.pow(1 + inflationRate / 100, year);
      const endBalance = Math.max(0, startBalance + returns - adjustedWithdrawal);

      yearByYear.push({
        year: year + 1,
        age: currentAge + year + 1,
        startBalance,
        withdrawal: adjustedWithdrawal,
        returns,
        endBalance
      });

      balance = endBalance;
      year++;

      if (balance <= 0) break;
    }

    const yearsLasting = year;
    const ageWhenDepleted = currentAge + yearsLasting;

    // Calculate safe withdrawal rate (4% rule)
    const safeWithdrawalRate = 4;
    const sustainableWithdrawal = (currentSavings * safeWithdrawalRate / 100) / 12;

    // Calculate shortfall if any
    const targetAge = 95;
    const targetYears = targetAge - currentAge;
    let shortfall = 0;
    if (yearsLasting < targetYears) {
      // Calculate how much more savings needed to last to target age
      // Using simplified calculation
      const yearsShort = targetYears - yearsLasting;
      shortfall = yearsShort * annualGap;
    }

    return {
      yearsLasting,
      ageWhenDepleted,
      annualExpenses,
      annualIncome,
      annualGap,
      yearByYear: yearByYear.slice(0, 40), // Show max 40 years
      safeWithdrawalRate,
      sustainableWithdrawal,
      shortfall
    };
  }, [currentSavings, monthlyExpenses, socialSecurity, pension, expectedReturn, inflationRate, currentAge]);

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
    setCurrentSavings(500000);
    setMonthlyExpenses(4000);
    setSocialSecurity(2000);
    setPension(0);
    setExpectedReturn(5);
    setInflationRate(3);
    setCurrentAge(65);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
                Retirement Planning Tool
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Money Longevity Calculator
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Find out how long your retirement savings will last and avoid running out of money
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
                              ? 'bg-purple-500 text-white'
                              : 'bg-slate-700 text-slate-400'
                          }`}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-16 h-1 mx-2 rounded transition-colors ${
                              step > s ? 'bg-purple-500' : 'bg-slate-700'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Savings & Age */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        Your Savings & Age
                      </h2>
                      <p className="text-slate-400 text-center mb-8">
                        Enter your total retirement savings and current age
                      </p>

                      <div className="space-y-8">
                        {/* Savings */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Total Retirement Savings</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-purple-400">
                              {formatCurrency(currentSavings)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="50000"
                            max="5000000"
                            step="25000"
                            value={currentSavings}
                            onChange={(e) => setCurrentSavings(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[250000, 500000, 750000, 1000000, 2000000].map((amount) => (
                              <button
                                key={amount}
                                onClick={() => setCurrentSavings(amount)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  currentSavings === amount
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                              >
                                {formatCurrency(amount)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Age */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Current Age</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-purple-400">{currentAge}</span>
                            <span className="text-xl text-slate-400 ml-2">years old</span>
                          </div>
                          <input
                            type="range"
                            min="50"
                            max="85"
                            step="1"
                            value={currentAge}
                            onChange={(e) => setCurrentAge(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[55, 60, 65, 70, 75].map((age) => (
                              <button
                                key={age}
                                onClick={() => setCurrentAge(age)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  currentAge === age
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                              >
                                {age}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button
                          onClick={() => setStep(2)}
                          className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Income & Expenses */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        Monthly Income & Expenses
                      </h2>
                      <p className="text-slate-400 text-center mb-8">
                        Enter your guaranteed income and expected monthly expenses
                      </p>

                      <div className="space-y-8">
                        {/* Monthly Expenses */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Monthly Expenses</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-red-400">
                              {formatCurrency(monthlyExpenses)}
                            </span>
                            <span className="text-xl text-slate-400">/month</span>
                          </div>
                          <input
                            type="range"
                            min="2000"
                            max="15000"
                            step="250"
                            value={monthlyExpenses}
                            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[3000, 4000, 5000, 6000, 8000].map((amount) => (
                              <button
                                key={amount}
                                onClick={() => setMonthlyExpenses(amount)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  monthlyExpenses === amount
                                    ? 'bg-red-500 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                              >
                                {formatCurrency(amount)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Social Security */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Monthly Social Security</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-green-400">
                              {formatCurrency(socialSecurity)}
                            </span>
                            <span className="text-xl text-slate-400">/month</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={socialSecurity}
                            onChange={(e) => setSocialSecurity(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                          />
                        </div>

                        {/* Pension */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Monthly Pension (if any)</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-blue-400">
                              {formatCurrency(pension)}
                            </span>
                            <span className="text-xl text-slate-400">/month</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="8000"
                            step="250"
                            value={pension}
                            onChange={(e) => setPension(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                        </div>

                        {/* Summary */}
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-slate-400">Monthly Income</span>
                            <span className="text-green-400 font-semibold">{formatCurrency(socialSecurity + pension)}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-slate-400">Monthly Expenses</span>
                            <span className="text-red-400 font-semibold">{formatCurrency(monthlyExpenses)}</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-700 pt-2">
                            <span className="text-slate-300">Monthly Gap (from savings)</span>
                            <span className={`font-semibold ${monthlyExpenses - socialSecurity - pension > 0 ? 'text-amber-400' : 'text-green-400'}`}>
                              {formatCurrency(Math.max(0, monthlyExpenses - socialSecurity - pension))}
                            </span>
                          </div>
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
                          className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Assumptions */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        Investment & Inflation Assumptions
                      </h2>
                      <p className="text-slate-400 text-center mb-8">
                        Adjust these assumptions to see different scenarios
                      </p>

                      <div className="space-y-8">
                        {/* Expected Return */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Expected Annual Return</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-purple-400">{expectedReturn}%</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.5"
                            value={expectedReturn}
                            onChange={(e) => setExpectedReturn(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[3, 4, 5, 6, 7].map((rate) => (
                              <button
                                key={rate}
                                onClick={() => setExpectedReturn(rate)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  expectedReturn === rate
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                              >
                                {rate}%
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Inflation Rate */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white text-center">Expected Inflation Rate</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-amber-400">{inflationRate}%</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="6"
                            step="0.5"
                            value={inflationRate}
                            onChange={(e) => setInflationRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[2, 2.5, 3, 3.5, 4].map((rate) => (
                              <button
                                key={rate}
                                onClick={() => setInflationRate(rate)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  inflationRate === rate
                                    ? 'bg-amber-500 text-slate-900'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                              >
                                {rate}%
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <p className="text-blue-300 text-sm">
                            <strong>Real Return:</strong> {(expectedReturn - inflationRate).toFixed(1)}% (return after inflation)<br />
                            <strong>Historical Average:</strong> S&P 500 has returned ~10% nominal, ~7% real
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
                          className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors"
                        >
                          Calculate Longevity
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
                  <div className={`border-2 rounded-2xl p-8 text-center ${
                    calculations.yearsLasting === Infinity
                      ? 'bg-gradient-to-b from-green-500/10 to-transparent border-green-500/30'
                      : calculations.ageWhenDepleted >= 95
                        ? 'bg-gradient-to-b from-green-500/10 to-transparent border-green-500/30'
                        : calculations.ageWhenDepleted >= 85
                          ? 'bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/30'
                          : 'bg-gradient-to-b from-red-500/10 to-transparent border-red-500/30'
                  }`}>
                    {calculations.yearsLasting === Infinity ? (
                      <>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 mb-4">
                          Excellent!
                        </span>
                        <div className="text-4xl font-bold text-green-400 mb-2">
                          Your savings will last forever
                        </div>
                        <p className="text-slate-300">
                          Your guaranteed income covers all your expenses. Your savings can continue to grow!
                        </p>
                      </>
                    ) : (
                      <>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                          calculations.ageWhenDepleted >= 95
                            ? 'bg-green-500/20 text-green-400'
                            : calculations.ageWhenDepleted >= 85
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-red-500/20 text-red-400'
                        }`}>
                          {calculations.ageWhenDepleted >= 95
                            ? 'On Track'
                            : calculations.ageWhenDepleted >= 85
                              ? 'Caution Needed'
                              : 'Action Required'}
                        </span>
                        <div className="text-6xl font-bold text-white mb-2">
                          {calculations.yearsLasting} <span className="text-3xl text-slate-400">years</span>
                        </div>
                        <p className="text-xl text-slate-300 mb-4">
                          Your savings will last until age <strong className={
                            calculations.ageWhenDepleted >= 95
                              ? 'text-green-400'
                              : calculations.ageWhenDepleted >= 85
                                ? 'text-amber-400'
                                : 'text-red-400'
                          }>{calculations.ageWhenDepleted}</strong>
                        </p>
                        {calculations.ageWhenDepleted < 95 && (
                          <p className="text-red-400 text-sm">
                            ⚠ Risk of outliving savings (average life expectancy is ~85-87)
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* Summary Stats */}
                  {calculations.yearsLasting !== Infinity && (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Your Numbers
                      </h2>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-800/50 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Annual Cash Flow</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Total Expenses</span>
                              <span className="text-red-400 font-semibold">{formatCurrency(calculations.annualExpenses)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Guaranteed Income</span>
                              <span className="text-green-400 font-semibold">{formatCurrency(calculations.annualIncome)}</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-700 pt-3">
                              <span className="text-white">Annual Withdrawal</span>
                              <span className="text-amber-400 font-semibold">{formatCurrency(calculations.annualGap)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Withdrawal Analysis</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Your Withdrawal Rate</span>
                              <span className="text-white font-semibold">
                                {((calculations.annualGap / currentSavings) * 100).toFixed(1)}%
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Safe Rate (4% Rule)</span>
                              <span className="text-green-400 font-semibold">4.0%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Sustainable Monthly</span>
                              <span className="text-green-400 font-semibold">
                                {formatCurrency(calculations.sustainableWithdrawal)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Year by Year Projection */}
                      {calculations.yearByYear.length > 0 && (
                        <div className="bg-slate-800/50 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Balance Over Time</h3>
                          <div className="space-y-2 max-h-64 overflow-y-auto">
                            {calculations.yearByYear.filter((_, i) => i % 5 === 0 || i === calculations.yearByYear.length - 1).map((year) => {
                              const percentage = (year.endBalance / currentSavings) * 100;
                              return (
                                <div key={year.year} className="flex items-center gap-4">
                                  <span className="text-slate-400 w-20">Age {year.age}</span>
                                  <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                                    <div
                                      className={`h-full rounded-lg transition-all ${
                                        percentage > 50 ? 'bg-green-500' :
                                        percentage > 25 ? 'bg-amber-500' : 'bg-red-500'
                                      }`}
                                      style={{ width: `${Math.max(2, percentage)}%` }}
                                    />
                                  </div>
                                  <span className="text-white font-semibold w-28 text-right">
                                    {formatCurrency(year.endBalance)}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Recommendations */}
                  {calculations.yearsLasting !== Infinity && calculations.ageWhenDepleted < 95 && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-amber-400 mb-4">
                        Ways to Extend Your Savings
                      </h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">1.</span>
                          <span><strong>Reduce expenses:</strong> Cutting ${Math.round((monthlyExpenses - socialSecurity - pension) * 0.1).toLocaleString()}/month could add years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">2.</span>
                          <span><strong>Delay Social Security:</strong> Each year you delay adds ~8% to benefits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">3.</span>
                          <span><strong>Part-time work:</strong> Even small income reduces withdrawal needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">4.</span>
                          <span><strong>Diversify with gold:</strong> Hedge against inflation and market crashes</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  <AugustaCTA
                    variant="inline"
                    headline="Protect Your Retirement Savings"
                    subheadline="A Gold IRA can help protect your nest egg from inflation and market volatility, potentially extending how long your savings last."
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
                      href="/learn/retirement-withdrawal-strategies"
                      className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors text-center"
                    >
                      Withdrawal Strategies Guide
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
              Understanding Retirement Longevity
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">The 4% Rule</h3>
                <p className="text-slate-300">
                  The classic guideline suggests withdrawing 4% of your initial savings annually
                  (adjusted for inflation) to make your money last 30 years. More conservative
                  estimates suggest 3-3.5% for longer retirements.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Sequence of Returns Risk</h3>
                <p className="text-slate-300">
                  Poor market returns early in retirement can dramatically shorten how long your
                  money lasts. This is why diversification with assets like gold can provide
                  stability during volatile markets.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Inflation Impact</h3>
                <p className="text-slate-300">
                  At 3% inflation, your purchasing power is cut in half every 24 years.
                  Your $4,000/month expenses could become $8,000/month in 24 years.
                  Gold historically maintains purchasing power over long periods.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Longevity Risk</h3>
                <p className="text-slate-300">
                  A 65-year-old couple has a 50% chance of one spouse living to 90+.
                  Planning for a 30+ year retirement is increasingly important.
                  Running out of money is one of retirees' biggest fears.
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
                  Calculate how much you need to save
                </p>
              </Link>
              <Link
                href="/tools/social-security-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  Social Security Optimizer
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  Find your optimal claiming age
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
