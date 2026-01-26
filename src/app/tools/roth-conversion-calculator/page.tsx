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
  Info,
  CheckCircle2,
  AlertTriangle,
  Percent,
  Calendar,
  PiggyBank,
} from "lucide-react";

// Format currency
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Format percentage
function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export default function RothConversionCalculatorPage() {
  // Form inputs
  const [iraBalance, setIraBalance] = useState(500000);
  const [currentTaxBracket, setCurrentTaxBracket] = useState(24);
  const [retirementTaxBracket, setRetirementTaxBracket] = useState(32);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState(10);
  const [conversionAmount, setConversionAmount] = useState(100000);
  const [showResults, setShowResults] = useState(false);

  // Calculate results
  const results = useMemo(() => {
    // Tax cost now
    const taxCostNow = conversionAmount * (currentTaxBracket / 100);

    // Future tax savings (assuming balance grows)
    const growthRate = 0.06; // 6% annual growth
    const futureValue =
      conversionAmount * Math.pow(1 + growthRate, yearsUntilRetirement);
    const taxSavingsInRetirement =
      futureValue * (retirementTaxBracket / 100);
    const netBenefit = taxSavingsInRetirement - taxCostNow;

    // Break-even calculation
    const taxDifference = retirementTaxBracket - currentTaxBracket;
    const breakevenYears = taxDifference > 0 ? Math.ceil(100 / taxDifference) : 0;

    // Optimal conversion suggestions
    const remainingBalance = iraBalance - conversionAmount;
    const conversionPercentage = (conversionAmount / iraBalance) * 100;

    // Tax bracket thresholds for optimization (2026 estimates)
    const bracketThresholds = {
      12: 11600,
      22: 47150,
      24: 100525,
      32: 191950,
      35: 243725,
      37: 609350,
    };

    // Recommend staying below next bracket
    let optimalAmount = conversionAmount;
    let bracketAdvice = "";

    if (currentTaxBracket === 12 && conversionAmount > 35550) {
      optimalAmount = 35550;
      bracketAdvice = "Consider limiting conversion to stay in the 12% bracket";
    } else if (currentTaxBracket === 22 && conversionAmount > 53375) {
      optimalAmount = 53375;
      bracketAdvice = "Consider limiting conversion to stay in the 22% bracket";
    } else if (currentTaxBracket === 24 && conversionAmount > 91425) {
      optimalAmount = 91425;
      bracketAdvice = "Consider limiting conversion to stay in the 24% bracket";
    }

    const afterTaxBalance = iraBalance - taxCostNow;
    const totalTaxSavingsPercent = (netBenefit / taxCostNow) * 100;

    return {
      taxCostNow,
      taxSavingsInRetirement,
      netBenefit,
      breakevenYears,
      remainingBalance,
      conversionPercentage,
      futureValue,
      optimalAmount,
      bracketAdvice,
      afterTaxBalance,
      totalTaxSavingsPercent,
      worthIt: netBenefit > 0 && breakevenYears <= yearsUntilRetirement,
    };
  }, [
    iraBalance,
    currentTaxBracket,
    retirementTaxBracket,
    yearsUntilRetirement,
    conversionAmount,
  ]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setIraBalance(500000);
    setCurrentTaxBracket(24);
    setRetirementTaxBracket(32);
    setYearsUntilRetirement(10);
    setConversionAmount(100000);
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              FREE ROTH CONVERSION CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Roth Conversion Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              After decades of contributions, your 401(k) is subject to RMDs and taxes.
              A Roth conversion can lock in today's tax rates - see if it makes sense for your situation.
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
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  Conversion Details
                </h2>

                <div className="space-y-6">
                  {/* Traditional IRA Balance */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-300 font-medium flex items-center gap-2">
                        <PiggyBank className="h-4 w-4 text-amber-400" />
                        Traditional IRA Balance
                      </label>
                      <span className="text-amber-400 font-bold">
                        {formatCurrency(iraBalance)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={2000000}
                      step={10000}
                      value={iraBalance}
                      onChange={(e) => setIraBalance(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$50k</span>
                      <span>$2M</span>
                    </div>
                  </div>

                  {/* Conversion Amount */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-300 font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-amber-400" />
                        Conversion Amount
                      </label>
                      <span className="text-amber-400 font-bold">
                        {formatCurrency(conversionAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={iraBalance}
                      step={5000}
                      value={conversionAmount}
                      onChange={(e) =>
                        setConversionAmount(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>$10k</span>
                      <span>{formatCurrency(iraBalance)}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-2">
                      {results.conversionPercentage.toFixed(0)}% of your IRA
                    </div>
                  </div>

                  {/* Current Tax Bracket */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-300 font-medium flex items-center gap-2">
                        <Percent className="h-4 w-4 text-amber-400" />
                        Current Tax Bracket
                      </label>
                      <span className="text-amber-400 font-bold">
                        {currentTaxBracket}%
                      </span>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      {[10, 12, 22, 24, 32, 35, 37].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setCurrentTaxBracket(rate)}
                          className={`py-2 px-2 rounded-lg text-sm font-medium transition-all ${
                            currentTaxBracket === rate
                              ? "bg-amber-500 text-slate-900"
                              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Retirement Tax Bracket */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-300 font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-amber-400" />
                        Expected Retirement Tax Bracket
                      </label>
                      <span className="text-amber-400 font-bold">
                        {retirementTaxBracket}%
                      </span>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      {[10, 12, 22, 24, 32, 35, 37].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setRetirementTaxBracket(rate)}
                          className={`py-2 px-2 rounded-lg text-sm font-medium transition-all ${
                            retirementTaxBracket === rate
                              ? "bg-amber-500 text-slate-900"
                              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Years Until Retirement */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-300 font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-amber-400" />
                        Years Until Retirement
                      </label>
                      <span className="text-amber-400 font-bold">
                        {yearsUntilRetirement} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={yearsUntilRetirement}
                      onChange={(e) =>
                        setYearsUntilRetirement(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>1 year</span>
                      <span>30 years</span>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25"
                  >
                    Calculate Conversion Impact
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
                      {/* Main Verdict */}
                      <div
                        className={`rounded-2xl p-6 border ${
                          results.worthIt
                            ? "bg-green-500/10 border-green-500/30"
                            : "bg-amber-500/10 border-amber-500/30"
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          {results.worthIt ? (
                            <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                          ) : (
                            <Info className="h-6 w-6 text-amber-400 flex-shrink-0" />
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {results.worthIt
                                ? "Conversion Looks Beneficial"
                                : "Conversion May Not Be Optimal"}
                            </h3>
                            <p className="text-slate-300 text-sm">
                              {results.worthIt
                                ? `You'll save ${formatCurrency(
                                    results.netBenefit
                                  )} in taxes over ${yearsUntilRetirement} years.`
                                : retirementTaxBracket <= currentTaxBracket
                                ? "Your expected retirement tax bracket is lower than your current bracket. A conversion may not provide tax savings."
                                : "The break-even timeline is longer than your retirement horizon."}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4">
                          Conversion Analysis
                        </h3>

                        <div className="space-y-4">
                          {/* Tax Cost Now */}
                          <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                            <div>
                              <div className="text-slate-400 text-sm mb-1">
                                Tax Cost Now
                              </div>
                              <div className="text-2xl font-bold text-red-400">
                                {formatCurrency(results.taxCostNow)}
                              </div>
                            </div>
                            <div className="text-red-400 text-sm">
                              {currentTaxBracket}% rate
                            </div>
                          </div>

                          {/* Future Savings */}
                          <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                            <div>
                              <div className="text-slate-400 text-sm mb-1">
                                Future Tax Savings
                              </div>
                              <div className="text-2xl font-bold text-green-400">
                                {formatCurrency(results.taxSavingsInRetirement)}
                              </div>
                            </div>
                            <div className="text-green-400 text-sm">
                              {retirementTaxBracket}% rate
                            </div>
                          </div>

                          {/* Net Benefit */}
                          <div className="p-4 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-slate-300 text-sm mb-1">
                                  Net Benefit
                                </div>
                                <div
                                  className={`text-3xl font-bold ${
                                    results.netBenefit > 0
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {results.netBenefit > 0 ? "+" : ""}
                                  {formatCurrency(results.netBenefit)}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-slate-400 text-xs mb-1">
                                  ROI
                                </div>
                                <div
                                  className={`text-lg font-bold ${
                                    results.totalTaxSavingsPercent > 0
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {results.totalTaxSavingsPercent > 0 ? "+" : ""}
                                  {formatPercent(results.totalTaxSavingsPercent)}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Break-even Years */}
                          {results.breakevenYears > 0 && (
                            <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                              <div className="text-slate-300">
                                Break-even Timeline
                              </div>
                              <div
                                className={`text-xl font-bold ${
                                  results.breakevenYears <=
                                  yearsUntilRetirement
                                    ? "text-green-400"
                                    : "text-amber-400"
                                }`}
                              >
                                {results.breakevenYears} years
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Optimal Conversion Suggestion */}
                      {results.bracketAdvice && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold mb-1">
                                Optimization Tip
                              </h4>
                              <p className="text-slate-300 text-sm mb-2">
                                {results.bracketAdvice}
                              </p>
                              <div className="text-blue-400 font-medium">
                                Suggested amount: {formatCurrency(results.optimalAmount)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Remaining Balance */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-slate-400 text-sm mb-1">
                              Remaining Traditional IRA
                            </div>
                            <div className="text-xl font-bold text-white">
                              {formatCurrency(results.remainingBalance)}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-sm mb-1">
                              Future Roth Value
                            </div>
                            <div className="text-xl font-bold text-green-400">
                              {formatCurrency(results.futureValue)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Reset Button */}
                      <button
                        onClick={resetCalculator}
                        className="w-full py-3 bg-slate-800 border border-white/10 rounded-xl text-slate-400 font-medium hover:bg-slate-700 hover:text-white transition-all"
                      >
                        Calculate Different Scenario
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center h-full flex flex-col justify-center"
                    >
                      <Calculator className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        Ready to Calculate
                      </h3>
                      <p className="text-slate-400">
                        Enter your details on the left and click Calculate to see
                        your personalized Roth conversion analysis.
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
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-amber-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Converting to Roth? Consider Gold IRA Diversification
                  </h2>
                  <p className="text-slate-300 mb-4">
                    While you're thinking about tax-free growth with a Roth
                    conversion, consider diversifying with a Gold IRA for
                    inflation protection. Gold has historically maintained
                    purchasing power and can provide a hedge against market
                    volatility.
                  </p>
                  <ul className="space-y-2 text-slate-300 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      Tax-free growth in Roth Gold IRA
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      Protection from inflation and currency devaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      Portfolio diversification beyond stocks and bonds
                    </li>
                  </ul>
                </div>
              </div>
              <AugustaCTA
                variant="inline"
                linkContext="default"
                trackSource="roth-conversion-calculator"
                headline="Converting? Diversify Into Something Real."
                subheadline="After 30+ years of saving, protect your nest egg with physical gold. Tax-free growth in a Roth Gold IRA - no RMDs, no market anxiety."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                When to Consider a Roth Conversion
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Roth conversions can be powerful tax planning tools, but timing
                and circumstances matter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Good Scenarios
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Low-income year (job loss, sabbatical)</li>
                  <li>• Expect higher future tax rates</li>
                  <li>• Long time horizon (10+ years)</li>
                  <li>• No immediate need for funds</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Be Cautious
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Near retirement age</li>
                  <li>• High current income</li>
                  <li>• Large conversion triggering higher brackets</li>
                  <li>• No cash to pay taxes</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Pro Tips
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Consider partial conversions over multiple years</li>
                  <li>• Convert during market dips</li>
                  <li>• Pay conversion tax from outside account</li>
                  <li>• Consult a tax professional</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AugustaCTA
              variant="footer"
              headline="Ready to Protect Your Retirement?"
              subheadline="Whether you're converting to a Roth or diversifying your portfolio, Augusta Precious Metals can help you understand how gold fits into your retirement strategy. Get a free consultation with no high-pressure sales."
              linkContext="default"
              trackSource="roth-conversion-calculator-footer"
            />
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-400 text-sm">
                    This calculator provides estimates for educational purposes
                    only and is not tax or financial advice. Roth conversions
                    have complex tax implications. Tax brackets and rules change.
                    Always consult with a qualified tax advisor or financial
                    planner before making conversion decisions. Past performance
                    does not guarantee future results.
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
