"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Shield,
  CheckCircle2,
  AlertCircle,
  Info,
  Calendar,
  Target,
} from "lucide-react";

// Format currency
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function SocialSecurityBreakEvenCalculatorPage() {
  // Form inputs
  const [benefitAt62, setBenefitAt62] = useState(1800);
  const [benefitAtFRA, setBenefitAtFRA] = useState(2500);
  const [benefitAt70, setBenefitAt70] = useState(3100);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [showResults, setShowResults] = useState(false);

  // Full Retirement Age (assume 67 for those born 1960+)
  const FRA = 67;

  // Calculate results
  const results = useMemo(() => {
    // Calculate lifetime benefits for each claiming age
    const calculateLifetimeBenefits = (
      claimAge: number,
      monthlyBenefit: number,
      lifeAge: number
    ) => {
      const monthsReceiving = Math.max(0, (lifeAge - claimAge) * 12);
      return monthsReceiving * monthlyBenefit;
    };

    const lifetime62 = calculateLifetimeBenefits(62, benefitAt62, lifeExpectancy);
    const lifetimeFRA = calculateLifetimeBenefits(FRA, benefitAtFRA, lifeExpectancy);
    const lifetime70 = calculateLifetimeBenefits(70, benefitAt70, lifeExpectancy);

    // Calculate break-even ages
    // Break-even 62 vs FRA
    const monthlyDifferenceFRA = benefitAtFRA - benefitAt62;
    const earlyPaymentsAtFRA = benefitAt62 * ((FRA - 62) * 12);
    const monthsToBreakEvenFRA = monthlyDifferenceFRA > 0
      ? earlyPaymentsAtFRA / monthlyDifferenceFRA
      : 0;
    const breakEvenAgeFRA = FRA + monthsToBreakEvenFRA / 12;

    // Break-even 62 vs 70
    const monthlyDifference70 = benefitAt70 - benefitAt62;
    const earlyPaymentsAt70 = benefitAt62 * ((70 - 62) * 12);
    const monthsToBreakEven70 = monthlyDifference70 > 0
      ? earlyPaymentsAt70 / monthlyDifference70
      : 0;
    const breakEvenAge70vs62 = 70 + monthsToBreakEven70 / 12;

    // Break-even FRA vs 70
    const monthlyDifferenceFRA70 = benefitAt70 - benefitAtFRA;
    const earlyPaymentsFRA70 = benefitAtFRA * ((70 - FRA) * 12);
    const monthsToBreakEvenFRA70 = monthlyDifferenceFRA70 > 0
      ? earlyPaymentsFRA70 / monthlyDifferenceFRA70
      : 0;
    const breakEvenAgeFRA70 = 70 + monthsToBreakEvenFRA70 / 12;

    // Determine optimal claiming age based on life expectancy
    let optimalAge = 62;
    let optimalBenefit = lifetime62;
    let optimalReason = "";

    if (lifetime70 > lifetimeFRA && lifetime70 > lifetime62) {
      optimalAge = 70;
      optimalBenefit = lifetime70;
      optimalReason = "You'll maximize lifetime benefits by waiting until 70";
    } else if (lifetimeFRA > lifetime62 && lifetimeFRA > lifetime70) {
      optimalAge = FRA;
      optimalBenefit = lifetimeFRA;
      optimalReason = `Claiming at full retirement age (${FRA}) provides the best total benefits`;
    } else {
      optimalAge = 62;
      optimalBenefit = lifetime62;
      optimalReason = "Claiming early at 62 maximizes your lifetime benefits given your life expectancy";
    }

    // Calculate year-by-year comparison (first 10 years)
    const yearlyComparison = [];
    for (let year = 1; year <= 10; year++) {
      const age = 62 + year - 1;
      const total62 = benefitAt62 * 12 * year;
      const totalFRA = age >= FRA ? benefitAtFRA * 12 * (year - (FRA - 62)) : 0;
      const total70 = age >= 70 ? benefitAt70 * 12 * (year - 8) : 0;

      yearlyComparison.push({
        year,
        age,
        total62,
        totalFRA,
        total70,
      });
    }

    return {
      lifetime62,
      lifetimeFRA,
      lifetime70,
      breakEvenAgeFRA,
      breakEvenAge70vs62,
      breakEvenAgeFRA70,
      optimalAge,
      optimalBenefit,
      optimalReason,
      yearlyComparison,
      reachesBreakEvenFRA: lifeExpectancy >= breakEvenAgeFRA,
      reachesBreakEven70: lifeExpectancy >= breakEvenAge70vs62,
      reachesBreakEvenFRA70: lifeExpectancy >= breakEvenAgeFRA70,
    };
  }, [benefitAt62, benefitAtFRA, benefitAt70, lifeExpectancy, FRA]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setBenefitAt62(1800);
    setBenefitAtFRA(2500);
    setBenefitAt70(3100);
    setLifeExpectancy(85);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              FREE SOCIAL SECURITY CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              Social Security Break Even Calculator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Should you claim at 62, 67, or 70? Compare lifetime benefits and
              find your optimal claiming age based on your life expectancy.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Calculator */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#000080] mb-6">
                  Your Social Security Details
                </h2>

                <div className="space-y-6">
                  {/* Benefit at 62 */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-red-600" />
                        Monthly Benefit at Age 62 (Early)
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(benefitAt62)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={800}
                      max={3000}
                      step={50}
                      value={benefitAt62}
                      onChange={(e) => setBenefitAt62(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$800</span>
                      <span>$3,000</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      Reduced by ~30% for claiming early
                    </div>
                  </div>

                  {/* Benefit at FRA */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-blue-600" />
                        Monthly Benefit at Age {FRA} (Full)
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(benefitAtFRA)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={4000}
                      step={50}
                      value={benefitAtFRA}
                      onChange={(e) => setBenefitAtFRA(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$1,000</span>
                      <span>$4,000</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      Your full retirement age benefit
                    </div>
                  </div>

                  {/* Benefit at 70 */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Monthly Benefit at Age 70 (Maximum)
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(benefitAt70)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1200}
                      max={5000}
                      step={50}
                      value={benefitAt70}
                      onChange={(e) => setBenefitAt70(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$1,200</span>
                      <span>$5,000</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      Increased by ~24% for delaying to 70
                    </div>
                  </div>

                  {/* Life Expectancy */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#B22234]" />
                        Expected Life Expectancy
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {lifeExpectancy} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min={70}
                      max={100}
                      step={1}
                      value={lifeExpectancy}
                      onChange={(e) =>
                        setLifeExpectancy(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>70</span>
                      <span>85 (avg)</span>
                      <span>100</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-600">
                        <strong className="text-slate-900">Find your benefits:</strong>{" "}
                        Log in to{" "}
                        <a
                          href="https://www.ssa.gov/myaccount/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          ssa.gov/myaccount
                        </a>{" "}
                        to see your personalized benefit estimates at different
                        claiming ages.
                      </div>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#B22234] text-slate-900 hover:bg-[#8b1c2a] shadow-lg shadow-amber-500/25"
                  >
                    Calculate Break-Even Points
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {showResults ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      {/* Optimal Claiming Age */}
                      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Target className="h-6 w-6 text-green-600 flex-shrink-0" />
                          <div>
                            <div className="text-green-600 text-sm font-medium mb-1">
                              OPTIMAL CLAIMING AGE
                            </div>
                            <div className="text-4xl font-bold text-[#000080] mb-2">
                              Age {results.optimalAge}
                            </div>
                            <p className="text-slate-600 text-sm">
                              {results.optimalReason}
                            </p>
                            <div className="mt-3 text-green-600 font-semibold">
                              Lifetime Total: {formatCurrency(results.optimalBenefit)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lifetime Benefits Comparison */}
                      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-[#000080] mb-4">
                          Lifetime Benefits to Age {lifeExpectancy}
                        </h3>

                        <div className="space-y-4">
                          {/* Age 62 */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full" />
                                <span className="text-slate-600 text-sm">
                                  Claim at 62
                                </span>
                              </div>
                              <span className="text-slate-900 font-bold">
                                {formatCurrency(results.lifetime62)}
                              </span>
                            </div>
                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-red-500 to-red-600"
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${
                                    (results.lifetime62 /
                                      Math.max(
                                        results.lifetime62,
                                        results.lifetimeFRA,
                                        results.lifetime70
                                      )) *
                                    100
                                  }%`,
                                }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                          </div>

                          {/* Age FRA */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-400 rounded-full" />
                                <span className="text-slate-600 text-sm">
                                  Claim at {FRA}
                                </span>
                              </div>
                              <span className="text-slate-900 font-bold">
                                {formatCurrency(results.lifetimeFRA)}
                              </span>
                            </div>
                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${
                                    (results.lifetimeFRA /
                                      Math.max(
                                        results.lifetime62,
                                        results.lifetimeFRA,
                                        results.lifetime70
                                      )) *
                                    100
                                  }%`,
                                }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                              />
                            </div>
                          </div>

                          {/* Age 70 */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full" />
                                <span className="text-slate-600 text-sm">
                                  Claim at 70
                                </span>
                              </div>
                              <span className="text-slate-900 font-bold">
                                {formatCurrency(results.lifetime70)}
                              </span>
                            </div>
                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-green-500 to-green-600"
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${
                                    (results.lifetime70 /
                                      Math.max(
                                        results.lifetime62,
                                        results.lifetimeFRA,
                                        results.lifetime70
                                      )) *
                                    100
                                  }%`,
                                }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Break-Even Ages */}
                      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-[#000080] mb-4">
                          Break-Even Analysis
                        </h3>

                        <div className="space-y-3">
                          {/* 62 vs FRA */}
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-slate-600 text-sm">
                                Age 62 vs {FRA}
                              </span>
                              <span
                                className={`font-bold ${
                                  results.reachesBreakEvenFRA
                                    ? "text-green-600"
                                    : "text-[#B22234]"
                                }`}
                              >
                                {results.breakEvenAgeFRA.toFixed(1)} years
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              {results.reachesBreakEvenFRA
                                ? `You'll live past the break-even age - waiting to ${FRA} pays off`
                                : `You might not reach break-even - claiming at 62 could be better`}
                            </p>
                          </div>

                          {/* FRA vs 70 */}
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-slate-600 text-sm">
                                Age {FRA} vs 70
                              </span>
                              <span
                                className={`font-bold ${
                                  results.reachesBreakEvenFRA70
                                    ? "text-green-600"
                                    : "text-[#B22234]"
                                }`}
                              >
                                {results.breakEvenAgeFRA70.toFixed(1)} years
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              {results.reachesBreakEvenFRA70
                                ? "You'll live past the break-even age - delaying to 70 maximizes benefits"
                                : `You might not reach break-even - claiming at ${FRA} could be better`}
                            </p>
                          </div>

                          {/* 62 vs 70 */}
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-slate-600 text-sm">
                                Age 62 vs 70
                              </span>
                              <span
                                className={`font-bold ${
                                  results.reachesBreakEven70
                                    ? "text-green-600"
                                    : "text-[#B22234]"
                                }`}
                              >
                                {results.breakEvenAge70vs62.toFixed(1)} years
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">
                              {results.reachesBreakEven70
                                ? "You'll live past the break-even age - waiting to 70 is optimal"
                                : "You might not reach break-even - claiming at 62 could be better"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Key Considerations */}
                      <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-slate-900 font-semibold mb-2">
                              Important Factors to Consider
                            </h4>
                            <ul className="space-y-1 text-sm text-slate-600">
                              <li>• Health status and family longevity history</li>
                              <li>• Other income sources (pension, retirement savings)</li>
                              <li>• Spousal benefits and survivor benefits</li>
                              <li>• Need for current income vs. long-term security</li>
                              <li>• Tax implications of benefits</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Reset Button */}
                      <button
                        onClick={resetCalculator}
                        className="w-full py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-medium hover:bg-slate-200 hover:text-slate-900 transition-all"
                      >
                        Calculate Different Scenario
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-center h-full flex flex-col justify-center"
                    >
                      <Calculator className="h-16 w-16 text-[#B22234] mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-[#000080] mb-2">
                        Ready to Calculate
                      </h3>
                      <p className="text-slate-500">
                        Enter your benefit amounts on the left and click Calculate
                        to see your optimal claiming strategy.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold IRA Bridge Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#B22234]/5 border border-[#B22234]/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-[#B22234] flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-[#000080] mb-3">
                    Protect Your Other Retirement Assets
                  </h2>
                  <p className="text-slate-600 mb-4">
                    While you're optimizing Social Security timing, don't forget
                    to protect your IRA and 401(k) from market volatility. Many
                    retirees use a Gold IRA to safeguard a portion of their
                    retirement savings from stock market crashes and inflation.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Diversify beyond Social Security and stocks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Hedge against currency devaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Reduce overall portfolio risk
                    </li>
                  </ul>
                </div>
              </div>
              <AugustaCTA
                variant="inline"
                linkContext="default"
                trackSource="social-security-break-even-calculator"
                subheadline="Get a free consultation to learn how physical gold can complement your Social Security and protect your retirement wealth."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                When to Claim Social Security
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The right claiming age depends on your unique situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-3">
                  Claim at 62
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  <strong className="text-slate-900">Best if:</strong>
                </p>
                <ul className="space-y-1 text-xs text-slate-500">
                  <li>• Poor health or shorter life expectancy</li>
                  <li>• Need immediate income</li>
                  <li>• No other retirement income</li>
                  <li>• Will invest benefits wisely</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-3">
                  Claim at {FRA}
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  <strong className="text-slate-900">Best if:</strong>
                </p>
                <ul className="space-y-1 text-xs text-slate-500">
                  <li>• Average health and life expectancy</li>
                  <li>• Want full benefits without penalty</li>
                  <li>• Balance between now and later</li>
                  <li>• Can afford to wait past 62</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-3">
                  Claim at 70
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  <strong className="text-slate-900">Best if:</strong>
                </p>
                <ul className="space-y-1 text-xs text-slate-500">
                  <li>• Excellent health and longevity</li>
                  <li>• Don't need the income yet</li>
                  <li>• Want maximum survivor benefit</li>
                  <li>• Have other income to bridge gap</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">
                    Spousal Strategy Tip
                  </h4>
                  <p className="text-slate-600 text-sm">
                    For married couples, consider having the higher earner delay
                    to 70 for maximum survivor benefits, while the lower earner
                    claims earlier. This strategy can significantly boost lifetime
                    household benefits, especially if one spouse outlives the
                    other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AugustaCTA
              variant="footer"
              headline="Protect All Your Retirement Assets"
              subheadline="Social Security is just one piece of your retirement puzzle. Learn how Augusta Precious Metals can help you protect your IRA and 401(k) with physical gold. Get a free consultation with no obligation."
              linkContext="default"
              trackSource="social-security-break-even-calculator-footer"
            />
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-600 text-sm">
                    This calculator provides estimates for educational purposes
                    only and is not financial or legal advice. Social Security
                    claiming decisions are complex and irreversible in most cases.
                    Your actual benefits may differ. Consult with a qualified
                    financial advisor and the Social Security Administration
                    before making claiming decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
