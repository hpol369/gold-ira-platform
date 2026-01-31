'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AugustaCTA } from '@/components/cta/AugustaCTA';

export default function SocialSecurityCalculatorPage() {
  // Form state
  const [step, setStep] = useState(1);
  const [birthYear, setBirthYear] = useState(1962);
  const [estimatedBenefitAtFRA, setEstimatedBenefitAtFRA] = useState(2500);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [showResults, setShowResults] = useState(false);

  // Calculate benefits at different claiming ages
  const calculations = useMemo(() => {
    // Determine Full Retirement Age (FRA) based on birth year
    let fra: number;
    if (birthYear <= 1937) {
      fra = 65;
    } else if (birthYear <= 1942) {
      fra = 65 + (birthYear - 1937) * 2 / 12;
    } else if (birthYear <= 1954) {
      fra = 66;
    } else if (birthYear <= 1959) {
      fra = 66 + (birthYear - 1954) * 2 / 12;
    } else {
      fra = 67;
    }

    const fraYears = Math.floor(fra);
    const fraMonths = Math.round((fra - fraYears) * 12);

    // Calculate benefit at age 62 (early claiming)
    // Reduction: 5/9 of 1% per month for first 36 months, 5/12 of 1% for additional months
    const monthsEarlyFrom62 = (fra - 62) * 12;
    let reductionAt62 = 0;
    if (monthsEarlyFrom62 <= 36) {
      reductionAt62 = monthsEarlyFrom62 * (5 / 9) / 100;
    } else {
      reductionAt62 = 36 * (5 / 9) / 100 + (monthsEarlyFrom62 - 36) * (5 / 12) / 100;
    }
    const benefitAt62 = estimatedBenefitAtFRA * (1 - reductionAt62);

    // Calculate benefit at age 70 (delayed claiming)
    // Increase: 8% per year (2/3 of 1% per month) for delaying past FRA
    const monthsDelayedTo70 = (70 - fra) * 12;
    const increaseAt70 = monthsDelayedTo70 * (2 / 3) / 100;
    const benefitAt70 = estimatedBenefitAtFRA * (1 + increaseAt70);

    // Calculate benefit at other common ages
    const calculateBenefitAtAge = (age: number): number => {
      if (age < 62) return 0;
      if (age >= 70) return benefitAt70;

      const monthsFromFRA = (age - fra) * 12;
      if (monthsFromFRA < 0) {
        // Early claiming
        const monthsEarly = Math.abs(monthsFromFRA);
        let reduction = 0;
        if (monthsEarly <= 36) {
          reduction = monthsEarly * (5 / 9) / 100;
        } else {
          reduction = 36 * (5 / 9) / 100 + (monthsEarly - 36) * (5 / 12) / 100;
        }
        return estimatedBenefitAtFRA * (1 - reduction);
      } else {
        // Delayed claiming
        const increase = monthsFromFRA * (2 / 3) / 100;
        return estimatedBenefitAtFRA * (1 + increase);
      }
    };

    // Calculate lifetime benefits at different claiming ages
    const calculateLifetimeBenefit = (claimingAge: number): number => {
      const monthlyBenefit = calculateBenefitAtAge(claimingAge);
      const yearsReceiving = Math.max(0, lifeExpectancy - claimingAge);
      return monthlyBenefit * 12 * yearsReceiving;
    };

    // Find optimal claiming age
    const claimingAges = [62, 63, 64, 65, 66, 67, 68, 69, 70];
    const lifetimeBenefits = claimingAges.map(age => ({
      age,
      monthly: calculateBenefitAtAge(age),
      lifetime: calculateLifetimeBenefit(age)
    }));

    const optimalAge = lifetimeBenefits.reduce((max, current) =>
      current.lifetime > max.lifetime ? current : max
    );

    // Calculate breakeven ages
    const breakeven62vs70 = benefitAt70 > benefitAt62
      ? 62 + (benefitAt62 * 12 * 8) / ((benefitAt70 - benefitAt62) * 12)
      : null;

    return {
      fra,
      fraYears,
      fraMonths,
      benefitAt62,
      benefitAtFRA: estimatedBenefitAtFRA,
      benefitAt70,
      reductionAt62: reductionAt62 * 100,
      increaseAt70: increaseAt70 * 100,
      lifetimeBenefits,
      optimalAge,
      breakeven62vs70
    };
  }, [birthYear, estimatedBenefitAtFRA, lifeExpectancy]);

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
    setBirthYear(1962);
    setEstimatedBenefitAtFRA(2500);
    setLifeExpectancy(85);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-slate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-600 border border-green-500/20 mb-4">
                Retirement Planning Tool
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#000080] mb-4">
                Social Security Optimizer
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                After decades of paying into the system, you've earned every dollar.
                This calculator helps you claim at the right time - especially if your body can't wait until 70.
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
                            step >= s
                              ? 'bg-green-500 text-slate-900'
                              : 'bg-slate-700 text-slate-500'
                          }`}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-16 h-1 mx-2 rounded transition-colors ${
                              step > s ? 'bg-green-500' : 'bg-slate-700'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Birth Year */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        What year were you born?
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Your birth year determines your Full Retirement Age (FRA)
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-green-600">{birthYear}</span>
                        </div>

                        <input
                          type="range"
                          min="1940"
                          max="1980"
                          step="1"
                          value={birthYear}
                          onChange={(e) => setBirthYear(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />

                        <div className="flex justify-between text-sm text-slate-500">
                          <span>1940</span>
                          <span>1980</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[1955, 1960, 1962, 1965, 1970].map((year) => (
                            <button
                              key={year}
                              onClick={() => setBirthYear(year)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                birthYear === year
                                  ? 'bg-green-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                              }`}
                            >
                              {year}
                            </button>
                          ))}
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-800 text-sm">
                            <strong>Your Full Retirement Age:</strong> {calculations.fraYears} years
                            {calculations.fraMonths > 0 && ` and ${calculations.fraMonths} months`}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button
                          onClick={() => setStep(2)}
                          className="px-8 py-3 bg-green-500 text-slate-900 font-semibold rounded-lg hover:bg-green-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Estimated Benefit */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Estimated monthly benefit at FRA?
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Find this on your Social Security statement at ssa.gov/myaccount
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-green-600">
                            {formatCurrency(estimatedBenefitAtFRA)}
                          </span>
                          <span className="text-xl text-slate-500 ml-2">/month</span>
                        </div>

                        <input
                          type="range"
                          min="500"
                          max="5000"
                          step="50"
                          value={estimatedBenefitAtFRA}
                          onChange={(e) => setEstimatedBenefitAtFRA(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />

                        <div className="flex justify-between text-sm text-slate-500">
                          <span>$500</span>
                          <span>$5,000</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[1500, 2000, 2500, 3000, 3500].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => setEstimatedBenefitAtFRA(amount)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                estimatedBenefitAtFRA === amount
                                  ? 'bg-green-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                              }`}
                            >
                              {formatCurrency(amount)}
                            </button>
                          ))}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-blue-800 text-sm">
                            <strong>Tip:</strong> The average Social Security benefit in 2024 is about $1,907/month.
                            Maximum benefit at FRA is approximately $3,822/month.
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
                          className="px-8 py-3 bg-green-500 text-slate-900 font-semibold rounded-lg hover:bg-green-400 transition-colors"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Life Expectancy */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="text-2xl font-bold text-[#000080] mb-2 text-center">
                        Estimated life expectancy?
                      </h2>
                      <p className="text-slate-500 text-center mb-8">
                        Consider your health, family history, and lifestyle
                      </p>

                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-5xl font-bold text-green-600">{lifeExpectancy}</span>
                          <span className="text-xl text-slate-500 ml-2">years</span>
                        </div>

                        <input
                          type="range"
                          min="70"
                          max="100"
                          step="1"
                          value={lifeExpectancy}
                          onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />

                        <div className="flex justify-between text-sm text-slate-500">
                          <span>70</span>
                          <span>100</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {[78, 82, 85, 90, 95].map((age) => (
                            <button
                              key={age}
                              onClick={() => setLifeExpectancy(age)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                lifeExpectancy === age
                                  ? 'bg-green-500 text-slate-900'
                                  : 'bg-slate-700 text-slate-600 hover:bg-slate-600'
                              }`}
                            >
                              {age} years
                            </button>
                          ))}
                        </div>

                        <div className="bg-slate-50 border border-slate-700 rounded-lg p-4">
                          <p className="text-slate-600 text-sm">
                            <strong>Average life expectancy:</strong><br />
                            • Men at 65: ~84 years<br />
                            • Women at 65: ~87 years<br />
                            • Longer lifespan favors delaying benefits
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
                          className="px-8 py-3 bg-green-500 text-slate-900 font-semibold rounded-lg hover:bg-green-400 transition-colors"
                        >
                          Optimize Benefits
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
                  {/* Optimal Age Card */}
                  <div className="bg-gradient-to-b from-green-500/10 to-transparent border-2 border-green-500/30 rounded-2xl p-8 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-600 mb-4">
                      Optimal Claiming Age
                    </span>
                    <div className="text-6xl font-bold text-green-600 mb-2">
                      Age {calculations.optimalAge.age}
                    </div>
                    <p className="text-slate-600 mb-4">
                      Based on your life expectancy of {lifeExpectancy}, claiming at age {calculations.optimalAge.age} maximizes your lifetime benefits
                    </p>
                    <div className="flex justify-center gap-8">
                      <div>
                        <p className="text-slate-600 text-sm">Monthly Benefit</p>
                        <p className="text-2xl font-bold text-slate-900">{formatCurrency(calculations.optimalAge.monthly)}</p>
                      </div>
                      <div>
                        <p className="text-slate-600 text-sm">Lifetime Total</p>
                        <p className="text-2xl font-bold text-slate-900">{formatCurrency(calculations.optimalAge.lifetime)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Claiming Age Comparison */}
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-[#000080] mb-6 text-center">
                      Benefits by Claiming Age
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {/* Age 62 */}
                      <div className="bg-slate-50 border border-slate-700 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full" />
                          <h3 className="text-lg font-semibold text-slate-900">Age 62 (Early)</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-slate-600 text-sm">Monthly Benefit</p>
                            <p className="text-2xl font-bold text-red-600">
                              {formatCurrency(calculations.benefitAt62)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 text-sm">Reduction from FRA</p>
                            <p className="text-lg font-semibold text-red-600">
                              -{calculations.reductionAt62.toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 text-sm">Lifetime Total</p>
                            <p className="text-lg font-semibold text-slate-900">
                              {formatCurrency(calculations.lifetimeBenefits.find(b => b.age === 62)?.lifetime || 0)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* FRA */}
                      <div className="bg-slate-50 border border-slate-700 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-amber-400 rounded-full" />
                          <h3 className="text-lg font-semibold text-slate-900">Age {calculations.fraYears} (FRA)</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-slate-600 text-sm">Monthly Benefit</p>
                            <p className="text-2xl font-bold text-[#B22234]">
                              {formatCurrency(calculations.benefitAtFRA)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 text-sm">Full Retirement Age</p>
                            <p className="text-lg font-semibold text-[#B22234]">
                              100% of benefit
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 text-sm">Lifetime Total</p>
                            <p className="text-lg font-semibold text-slate-900">
                              {formatCurrency(calculations.lifetimeBenefits.find(b => b.age === calculations.fraYears)?.lifetime || 0)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Age 70 */}
                      <div className="bg-slate-50 border border-slate-700 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-green-400 rounded-full" />
                          <h3 className="text-lg font-semibold text-slate-900">Age 70 (Maximum)</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-slate-600 text-sm">Monthly Benefit</p>
                            <p className="text-2xl font-bold text-green-600">
                              {formatCurrency(calculations.benefitAt70)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 text-sm">Increase from FRA</p>
                            <p className="text-lg font-semibold text-green-600">
                              +{calculations.increaseAt70.toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 text-sm">Lifetime Total</p>
                            <p className="text-lg font-semibold text-slate-900">
                              {formatCurrency(calculations.lifetimeBenefits.find(b => b.age === 70)?.lifetime || 0)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lifetime Benefits Chart */}
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Lifetime Benefits by Claiming Age</h3>
                      <div className="space-y-3">
                        {calculations.lifetimeBenefits.map((benefit) => {
                          const maxLifetime = Math.max(...calculations.lifetimeBenefits.map(b => b.lifetime));
                          const percentage = (benefit.lifetime / maxLifetime) * 100;
                          const isOptimal = benefit.age === calculations.optimalAge.age;

                          return (
                            <div key={benefit.age} className="flex items-center gap-4">
                              <span className="text-slate-500 w-16">Age {benefit.age}</span>
                              <div className="flex-1 h-8 bg-slate-700 rounded-lg overflow-hidden relative">
                                <div
                                  className={`h-full rounded-lg transition-all ${
                                    isOptimal ? 'bg-green-500' : 'bg-slate-500'
                                  }`}
                                  style={{ width: `${percentage}%` }}
                                />
                                {isOptimal && (
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-900">
                                    OPTIMAL
                                  </span>
                                )}
                              </div>
                              <span className="text-slate-900 font-semibold w-24 text-right">
                                {formatCurrency(benefit.lifetime)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Breakeven Analysis */}
                  {calculations.breakeven62vs70 && (
                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Breakeven Analysis</h3>
                      <p className="text-slate-600">
                        If you claim at 70 instead of 62, you'll break even at age{' '}
                        <strong className="text-[#B22234]">{Math.round(calculations.breakeven62vs70)}</strong>.
                        After this age, claiming at 70 provides more total lifetime benefits.
                      </p>
                    </div>
                  )}

                  {/* Important Considerations */}
                  <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-[#B22234] mb-4">
                      Important Considerations
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B22234] mt-1">•</span>
                        <span>Spouse benefits: Your claiming decision affects survivor benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B22234] mt-1">•</span>
                        <span>Working while claiming: Benefits may be reduced if you earn above limits before FRA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B22234] mt-1">•</span>
                        <span>Taxes: Up to 85% of benefits may be taxable depending on income</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B22234] mt-1">•</span>
                        <span>Inflation: Benefits are adjusted annually for cost of living (COLA)</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <AugustaCTA
                    variant="inline"
                    headline="Need Income Before 62? There's a Way."
                    subheadline="If your body can't wait for Social Security, a Gold IRA can provide income without the early claiming penalty - and protect your savings from inflation."
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
                      href="/learn/social-security-bridge-strategy"
                      className="px-8 py-3 bg-green-500 text-slate-900 font-semibold rounded-lg hover:bg-green-400 transition-colors text-center"
                    >
                      Learn Bridge Strategies
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
              Understanding Social Security
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Early Claiming (62-FRA)</h3>
                <p className="text-slate-600">
                  Benefits are permanently reduced by:<br />
                  • ~6.7% per year for first 3 years early<br />
                  • ~5% per year for additional years<br />
                  • At 62: Up to 30% reduction from FRA
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Delayed Claiming (FRA-70)</h3>
                <p className="text-slate-600">
                  Benefits increase by 8% per year:<br />
                  • Delayed Retirement Credits<br />
                  • Maximum increase at 70: ~24-32%<br />
                  • No benefit to waiting past 70
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Full Retirement Age (FRA)</h3>
                <p className="text-slate-600">
                  Your FRA depends on birth year:<br />
                  • 1943-1954: Age 66<br />
                  • 1955-1959: 66 + 2 months/year<br />
                  • 1960+: Age 67
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">When to Claim Early</h3>
                <p className="text-slate-600">
                  Consider claiming early if:<br />
                  • Poor health/shorter life expectancy<br />
                  • Need income and have no alternatives<br />
                  • Want to invest benefits elsewhere<br />
                  • Spouse has higher benefits
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
                href="/tools/72t-calculator"
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#B22234] transition-colors">
                  72(t) Calculator
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                  Early withdrawal options
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
