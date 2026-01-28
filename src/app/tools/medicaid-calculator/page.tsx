'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AugustaCTA } from '@/components/cta/AugustaCTA';

// 2024 Medicaid asset limits by state category
const stateLimits = {
  standard: { individual: 2000, couple: 3000, csra: 154140, mmmna: 3853 },
  higher: { individual: 2000, couple: 4000, csra: 154140, mmmna: 3853 },
  ny: { individual: 31175, couple: 46400, csra: 154140, mmmna: 3853 },
};

export default function MedicaidCalculatorPage() {
  const [step, setStep] = useState(1);
  const [maritalStatus, setMaritalStatus] = useState<'single' | 'married'>('married');
  const [state, setState] = useState('standard');
  const [countableAssets, setCountableAssets] = useState(200000);
  const [homeEquity, setHomeEquity] = useState(300000);
  const [monthlyIncome, setMonthlyIncome] = useState(3000);
  const [spouseIncome, setSpouseIncome] = useState(1500);
  const [nursingHomeCost, setNursingHomeCost] = useState(9000);
  const [showResults, setShowResults] = useState(false);

  const calculations = useMemo(() => {
    const limits = stateLimits[state as keyof typeof stateLimits] || stateLimits.standard;

    // Asset calculations
    const assetLimit = maritalStatus === 'married' ? limits.csra : limits.individual;
    const excessAssets = Math.max(0, countableAssets - assetLimit);

    // Home equity limit (most states: $713,000 in 2024)
    const homeEquityLimit = 713000;
    const excessHomeEquity = Math.max(0, homeEquity - homeEquityLimit);

    // Income calculations
    const totalIncome = maritalStatus === 'married' ? monthlyIncome + spouseIncome : monthlyIncome;

    // MMMNA (Minimum Monthly Maintenance Needs Allowance) for spouse
    const spouseAllowance = maritalStatus === 'married' ? Math.min(limits.mmmna, Math.max(2555, spouseIncome)) : 0;

    // Patient liability (what applicant pays to nursing home)
    const personalNeedsAllowance = 50; // Standard in most states
    const patientLiability = Math.max(0, monthlyIncome - personalNeedsAllowance - spouseAllowance);

    // Medicaid payment
    const medicaidPayment = Math.max(0, nursingHomeCost - patientLiability);

    // Spend-down period (months to become eligible)
    const monthlySpendDown = nursingHomeCost; // Simplified: nursing home cost as spend rate
    const spendDownMonths = excessAssets > 0 ? Math.ceil(excessAssets / monthlySpendDown) : 0;

    // Strategies
    const strategies = [];

    if (excessAssets > 0) {
      strategies.push({
        name: 'Pay Down Debt',
        description: 'Use excess assets to pay off mortgage, car loans, or credit cards',
        savings: Math.min(excessAssets, 50000),
      });
      strategies.push({
        name: 'Home Improvements',
        description: 'Exempt home improvements (new roof, accessibility modifications)',
        savings: Math.min(excessAssets, 30000),
      });
      strategies.push({
        name: 'Prepay Funeral/Burial',
        description: 'Irrevocable funeral trusts are exempt (varies by state)',
        savings: Math.min(excessAssets, 15000),
      });
      if (maritalStatus === 'married') {
        strategies.push({
          name: 'Purchase Annuity',
          description: 'Medicaid-compliant annuity for community spouse',
          savings: Math.min(excessAssets, 100000),
        });
      }
    }

    // Look-back period (5 years in most states, 2.5 years in CA)
    const lookBackMonths = state === 'ca' ? 30 : 60;

    return {
      assetLimit,
      excessAssets,
      homeEquityLimit,
      excessHomeEquity,
      spouseAllowance,
      patientLiability,
      medicaidPayment,
      spendDownMonths,
      strategies,
      lookBackMonths,
      isEligible: excessAssets === 0 && excessHomeEquity === 0,
    };
  }, [maritalStatus, state, countableAssets, homeEquity, monthlyIncome, spouseIncome, nursingHomeCost]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
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
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-slate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4">
                Long-Term Care Planning
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#000080] mb-4">
                Medicaid Spend-Down Calculator
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                After a lifetime of working and saving, nursing home costs can wipe out everything.
                See what you can legally protect - and what strategies can help preserve assets for your spouse and family.
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
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                            step >= s ? 'bg-teal-500 text-slate-900' : 'bg-slate-700 text-slate-500'
                          }`}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-16 h-1 mx-2 rounded transition-colors ${
                              step > s ? 'bg-teal-500' : 'bg-slate-700'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Basic Info */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Basic Information
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Tell us about your situation
                      </p>

                      <div className="space-y-8">
                        {/* Marital Status */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Marital Status</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              onClick={() => setMaritalStatus('single')}
                              className={`p-4 rounded-xl border-2 text-center transition-colors ${
                                maritalStatus === 'single'
                                  ? 'border-teal-500 bg-teal-500/10'
                                  : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                              }`}
                            >
                              <p className="text-slate-900 font-semibold">Single/Widowed</p>
                              <p className="text-slate-600 text-sm">Applying alone</p>
                            </button>
                            <button
                              onClick={() => setMaritalStatus('married')}
                              className={`p-4 rounded-xl border-2 text-center transition-colors ${
                                maritalStatus === 'married'
                                  ? 'border-teal-500 bg-teal-500/10'
                                  : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                              }`}
                            >
                              <p className="text-slate-900 font-semibold">Married</p>
                              <p className="text-slate-600 text-sm">Spouse at home</p>
                            </button>
                          </div>
                        </div>

                        {/* State */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">State Category</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <button
                              onClick={() => setState('standard')}
                              className={`p-4 rounded-xl border-2 text-center transition-colors ${
                                state === 'standard'
                                  ? 'border-teal-500 bg-teal-500/10'
                                  : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                              }`}
                            >
                              <p className="text-slate-900 font-semibold">Standard</p>
                              <p className="text-slate-500 text-xs">Most states</p>
                            </button>
                            <button
                              onClick={() => setState('ny')}
                              className={`p-4 rounded-xl border-2 text-center transition-colors ${
                                state === 'ny'
                                  ? 'border-teal-500 bg-teal-500/10'
                                  : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                              }`}
                            >
                              <p className="text-slate-900 font-semibold">New York</p>
                              <p className="text-slate-500 text-xs">Higher limits</p>
                            </button>
                            <button
                              onClick={() => setState('higher')}
                              className={`p-4 rounded-xl border-2 text-center transition-colors ${
                                state === 'higher'
                                  ? 'border-teal-500 bg-teal-500/10'
                                  : 'border-slate-700 bg-slate-50 hover:border-slate-600'
                              }`}
                            >
                              <p className="text-slate-900 font-semibold">Other</p>
                              <p className="text-slate-500 text-xs">CT, some others</p>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button
                          onClick={() => setStep(2)}
                          className="px-8 py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Assets */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Your Assets
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Enter countable assets (excludes primary home, one vehicle, personal belongings)
                      </p>

                      <div className="space-y-8">
                        {/* Countable Assets */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Countable Assets</h3>
                          <p className="text-slate-600 text-sm text-center">Bank accounts, investments, IRAs, second properties</p>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-teal-400">
                              {formatCurrency(countableAssets)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="1000000"
                            step="5000"
                            value={countableAssets}
                            onChange={(e) => setCountableAssets(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                          />
                          <div className="flex flex-wrap gap-2 justify-center">
                            {[50000, 100000, 200000, 300000, 500000].map((amount) => (
                              <button
                                key={amount}
                                onClick={() => setCountableAssets(amount)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                  countableAssets === amount
                                    ? 'bg-teal-500 text-slate-900'
                                    : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                                }`}
                              >
                                {formatCurrency(amount)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Home Equity */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Home Equity</h3>
                          <p className="text-slate-600 text-sm text-center">Market value minus mortgage balance</p>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-teal-400">
                              {formatCurrency(homeEquity)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="1500000"
                            step="10000"
                            value={homeEquity}
                            onChange={(e) => setHomeEquity(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                          />
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
                          className="px-8 py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Income & Costs */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Income & Nursing Home Cost
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Enter monthly income and expected care costs
                      </p>

                      <div className="space-y-8">
                        {/* Monthly Income */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Your Monthly Income</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-teal-400">
                              {formatCurrency(monthlyIncome)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="10000"
                            step="100"
                            value={monthlyIncome}
                            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                          />
                        </div>

                        {/* Spouse Income (if married) */}
                        {maritalStatus === 'married' && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 text-center">Spouse's Monthly Income</h3>
                            <div className="text-center">
                              <span className="text-4xl font-bold text-blue-600">
                                {formatCurrency(spouseIncome)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="8000"
                              step="100"
                              value={spouseIncome}
                              onChange={(e) => setSpouseIncome(Number(e.target.value))}
                              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                          </div>
                        )}

                        {/* Nursing Home Cost */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-slate-900 text-center">Monthly Nursing Home Cost</h3>
                          <div className="text-center">
                            <span className="text-4xl font-bold text-red-600">
                              {formatCurrency(nursingHomeCost)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="5000"
                            max="20000"
                            step="500"
                            value={nursingHomeCost}
                            onChange={(e) => setNursingHomeCost(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                          />
                          <p className="text-slate-600 text-sm text-center">
                            National average: ~$9,000/month for semi-private room
                          </p>
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
                          onClick={handleCalculate}
                          className="px-8 py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
                        >
                          Calculate Eligibility
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
                  {/* Eligibility Status */}
                  <div className={`border-2 rounded-2xl p-8 text-center ${
                    calculations.isEligible
                      ? 'bg-gradient-to-b from-green-500/10 to-transparent border-green-500/30'
                      : 'bg-gradient-to-b from-red-500/10 to-transparent border-red-500/30'
                  }`}>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      calculations.isEligible
                        ? 'bg-green-500/20 text-green-600'
                        : 'bg-red-500/20 text-red-600'
                    }`}>
                      {calculations.isEligible ? 'Likely Eligible' : 'Over Asset Limit'}
                    </span>

                    {calculations.isEligible ? (
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        You may qualify for Medicaid
                      </div>
                    ) : (
                      <>
                        <div className="text-3xl font-bold text-[#000080] mb-2">
                          {formatCurrency(calculations.excessAssets)} over limit
                        </div>
                        <p className="text-slate-600">
                          Estimated spend-down period: <strong className="text-[#B22234]">{calculations.spendDownMonths} months</strong>
                        </p>
                      </>
                    )}
                  </div>

                  {/* Asset Analysis */}
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-[#000080] mb-6">Asset Analysis</h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Countable Assets</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Your Assets</span>
                            <span className="text-slate-900 font-semibold">{formatCurrency(countableAssets)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Asset Limit</span>
                            <span className="text-teal-400 font-semibold">{formatCurrency(calculations.assetLimit)}</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-700 pt-3">
                            <span className="text-slate-900">Excess</span>
                            <span className={`font-semibold ${calculations.excessAssets > 0 ? 'text-red-600' : 'text-green-600'}`}>
                              {formatCurrency(calculations.excessAssets)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Home Equity</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Your Equity</span>
                            <span className="text-slate-900 font-semibold">{formatCurrency(homeEquity)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Equity Limit</span>
                            <span className="text-teal-400 font-semibold">{formatCurrency(calculations.homeEquityLimit)}</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-700 pt-3">
                            <span className="text-slate-900">Status</span>
                            <span className={`font-semibold ${calculations.excessHomeEquity > 0 ? 'text-red-600' : 'text-green-600'}`}>
                              {calculations.excessHomeEquity > 0 ? 'Over Limit' : 'Within Limit'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Income Breakdown */}
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Monthly Cost Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Nursing Home Cost</span>
                          <span className="text-red-600 font-semibold">{formatCurrency(nursingHomeCost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Your Patient Liability</span>
                          <span className="text-slate-900 font-semibold">{formatCurrency(calculations.patientLiability)}</span>
                        </div>
                        {maritalStatus === 'married' && (
                          <div className="flex justify-between">
                            <span className="text-slate-500">Spouse Allowance</span>
                            <span className="text-blue-600 font-semibold">{formatCurrency(calculations.spouseAllowance)}</span>
                          </div>
                        )}
                        <div className="flex justify-between border-t border-slate-700 pt-3">
                          <span className="text-slate-900">Medicaid Pays</span>
                          <span className="text-teal-400 font-semibold">{formatCurrency(calculations.medicaidPayment)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spend-Down Strategies */}
                  {calculations.strategies.length > 0 && (
                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-[#000080] mb-6">Legitimate Spend-Down Strategies</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {calculations.strategies.map((strategy, index) => (
                          <div key={index} className="bg-slate-50 rounded-xl p-4">
                            <h3 className="text-lg font-semibold text-teal-400 mb-2">{strategy.name}</h3>
                            <p className="text-slate-600 text-sm mb-2">{strategy.description}</p>
                            <p className="text-slate-900 font-semibold">Potential: up to {formatCurrency(strategy.savings)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Important Warnings */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">Important Warnings</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">!</span>
                        <span><strong>{calculations.lookBackMonths}-month look-back period:</strong> Asset transfers within this period may result in penalty periods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">!</span>
                        <span><strong>Estate recovery:</strong> States may recover Medicaid costs from your estate after death</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">!</span>
                        <span><strong>Rules vary by state:</strong> This calculator provides estimates only. Consult an elder law attorney</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">!</span>
                        <span><strong>Do NOT gift assets</strong> without professional guidance - this can disqualify you</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <AugustaCTA
                    variant="inline"
                    headline="Protect Assets with a Gold IRA"
                    subheadline="While IRA assets are countable for Medicaid, strategic planning with an elder law attorney can help protect your retirement savings. Learn about your options."
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
                      href="/learn/medicaid-planning-guide"
                      className="px-8 py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition-colors text-center"
                    >
                      Medicaid Planning Guide
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
              Understanding Medicaid Spend-Down
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-teal-400 mb-3">Countable vs Exempt Assets</h3>
                <p className="text-slate-600">
                  <strong>Exempt:</strong> Primary home (up to equity limit), one vehicle, personal belongings, prepaid funeral<br /><br />
                  <strong>Countable:</strong> Bank accounts, stocks, bonds, IRAs, 401(k)s, second properties, cash value life insurance
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-teal-400 mb-3">Spousal Protections</h3>
                <p className="text-slate-600">
                  The "community spouse" (at home) can keep:<br />
                  • Up to $154,140 in assets (CSRA)<br />
                  • Monthly income up to $3,853 (MMMNA)<br />
                  • The primary residence<br />
                  • One vehicle
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-teal-400 mb-3">Look-Back Period</h3>
                <p className="text-slate-600">
                  Medicaid reviews 5 years of financial records (2.5 years in California). Gifts or transfers during this period create penalty periods where Medicaid won't pay for care.
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-teal-400 mb-3">Planning Ahead</h3>
                <p className="text-slate-600">
                  The best Medicaid planning happens 5+ years before you need care. Strategies include irrevocable trusts, Medicaid-compliant annuities, and life estate deeds. Consult an elder law attorney.
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
                href="/tools/money-longevity-calculator"
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#B22234] transition-colors">
                  Money Longevity Calculator
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  How long will your savings last?
                </p>
              </Link>
              <Link
                href="/tools/social-security-calculator"
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#B22234] transition-colors">
                  Social Security Optimizer
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Find your optimal claiming age
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
