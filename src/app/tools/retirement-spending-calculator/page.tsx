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
  Home,
  Heart,
  ShoppingCart,
  Car,
  Plane,
  Utensils,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

// Format currency
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Budget categories with icons
const categories = [
  { id: "housing", label: "Housing", icon: Home, color: "text-blue-600" },
  { id: "healthcare", label: "Healthcare", icon: Heart, color: "text-red-600" },
  { id: "food", label: "Food & Groceries", icon: Utensils, color: "text-green-600" },
  { id: "transportation", label: "Transportation", icon: Car, color: "text-purple-700" },
  { id: "entertainment", label: "Entertainment", icon: ShoppingCart, color: "text-[#B22234]" },
  { id: "travel", label: "Travel", icon: Plane, color: "text-teal-400" },
];

export default function RetirementSpendingCalculatorPage() {
  // Budget inputs
  const [housing, setHousing] = useState(2000);
  const [healthcare, setHealthcare] = useState(800);
  const [food, setFood] = useState(700);
  const [transportation, setTransportation] = useState(400);
  const [entertainment, setEntertainment] = useState(500);
  const [travel, setTravel] = useState(600);
  const [inflationRate, setInflationRate] = useState(3.0);
  const [yearsInRetirement, setYearsInRetirement] = useState(30);
  const [showResults, setShowResults] = useState(false);

  // Calculate results
  const results = useMemo(() => {
    const monthlyTotal =
      housing + healthcare + food + transportation + entertainment + travel;
    const annualTotal = monthlyTotal * 12;

    // Calculate year-by-year projections with inflation
    const yearlyProjections: { year: number; spending: number; monthly: number }[] = [];
    for (let year = 1; year <= yearsInRetirement; year++) {
      const inflationMultiplier = Math.pow(
        1 + inflationRate / 100,
        year - 1
      );
      const annualSpending = annualTotal * inflationMultiplier;
      yearlyProjections.push({
        year,
        spending: annualSpending,
        monthly: annualSpending / 12,
      });
    }

    // Total lifetime spending
    const lifetimeSpending = yearlyProjections.reduce(
      (sum, year) => sum + year.spending,
      0
    );

    // Spending at key milestones
    const year10 = yearlyProjections[9];
    const year20 = yearlyProjections[19];
    const year30 = yearlyProjections[29];

    // Calculate purchasing power loss
    const purchasingPowerLoss =
      ((year30?.spending - annualTotal) / annualTotal) * 100;

    // Break down by category with inflation
    const categoryBreakdown = categories.map((cat) => {
      const amounts: Record<string, number> = {
        housing,
        healthcare,
        food,
        transportation,
        entertainment,
        travel,
      };
      const currentAmount = amounts[cat.id] ?? 0;
      const lifetimeTotal = yearlyProjections.reduce(
        (sum, year) => sum + currentAmount * 12 * Math.pow(1 + inflationRate / 100, year.year - 1),
        0
      );
      return {
        ...cat,
        currentMonthly: currentAmount,
        percentage: (currentAmount / monthlyTotal) * 100,
        lifetimeTotal,
      };
    });

    return {
      monthlyTotal,
      annualTotal,
      lifetimeSpending,
      yearlyProjections,
      year10,
      year20,
      year30,
      purchasingPowerLoss,
      categoryBreakdown,
    };
  }, [
    housing,
    healthcare,
    food,
    transportation,
    entertainment,
    travel,
    inflationRate,
    yearsInRetirement,
  ]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setHousing(2000);
    setHealthcare(800);
    setFood(700);
    setTransportation(400);
    setEntertainment(500);
    setTravel(600);
    setInflationRate(3.0);
    setYearsInRetirement(30);
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
              FREE RETIREMENT SPENDING CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              Retirement Spending Calculator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Plan your retirement budget and see how inflation impacts your
              spending needs over 30 years. Get a realistic picture of your
              lifetime expenses.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Calculator */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#000080] mb-6">
                  Monthly Budget
                </h2>

                <div className="space-y-5">
                  {/* Housing */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <Home className="h-4 w-4 text-blue-600" />
                        Housing (rent/mortgage, utilities)
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(housing)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={5000}
                      step={100}
                      value={housing}
                      onChange={(e) => setHousing(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  {/* Healthcare */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-600" />
                        Healthcare (insurance, medications)
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(healthcare)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={2000}
                      step={50}
                      value={healthcare}
                      onChange={(e) => setHealthcare(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                  </div>

                  {/* Food */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <Utensils className="h-4 w-4 text-green-600" />
                        Food & Groceries
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(food)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={300}
                      max={1500}
                      step={50}
                      value={food}
                      onChange={(e) => setFood(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                  </div>

                  {/* Transportation */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <Car className="h-4 w-4 text-purple-700" />
                        Transportation (car, gas, maintenance)
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(transportation)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={1000}
                      step={50}
                      value={transportation}
                      onChange={(e) =>
                        setTransportation(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  {/* Entertainment */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4 text-[#B22234]" />
                        Entertainment & Hobbies
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(entertainment)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={1500}
                      step={50}
                      value={entertainment}
                      onChange={(e) => setEntertainment(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                    />
                  </div>

                  {/* Travel */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <Plane className="h-4 w-4 text-teal-400" />
                        Travel & Vacations
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {formatCurrency(travel)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={2000}
                      step={100}
                      value={travel}
                      onChange={(e) => setTravel(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-200 my-4" />

                  {/* Inflation Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-[#B22234]" />
                        Expected Inflation Rate
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {inflationRate.toFixed(1)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1.5}
                      max={6.0}
                      step={0.5}
                      value={inflationRate}
                      onChange={(e) => setInflationRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                    />
                    <div className="text-xs text-slate-500 mt-1">
                      Historical average: 3.0%
                    </div>
                  </div>

                  {/* Years in Retirement */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-600 font-medium">
                        Years in Retirement
                      </label>
                      <span className="text-[#B22234] font-bold">
                        {yearsInRetirement} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={40}
                      step={5}
                      value={yearsInRetirement}
                      onChange={(e) =>
                        setYearsInRetirement(Number(e.target.value))
                      }
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                    />
                  </div>

                  {/* Total Display */}
                  <div className="bg-[#B22234]/5 border border-[#B22234]/30 rounded-xl p-5 mt-4">
                    <div className="text-center">
                      <div className="text-slate-600 text-sm mb-2">
                        Current Monthly Total
                      </div>
                      <div className="text-4xl font-bold text-slate-900">
                        {formatCurrency(results.monthlyTotal)}
                      </div>
                      <div className="text-slate-600 text-sm mt-1">
                        {formatCurrency(results.annualTotal)} per year
                      </div>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#B22234] text-slate-900 hover:bg-[#8b1c2a] shadow-lg shadow-amber-500/25"
                  >
                    Calculate Lifetime Spending
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
                      {/* Lifetime Total */}
                      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                        <div className="text-center mb-6">
                          <div className="text-slate-600 text-sm mb-2">
                            TOTAL RETIREMENT SPENDING NEEDS
                          </div>
                          <div className="text-5xl font-bold text-[#000080] mb-2">
                            {formatCurrency(results.lifetimeSpending)}
                          </div>
                          <div className="text-slate-500">
                            Over {yearsInRetirement} years
                          </div>
                        </div>

                        {/* Inflation Impact Warning */}
                        <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-slate-900 font-semibold mb-1">
                                Inflation Impact
                              </div>
                              <p className="text-slate-600 text-sm">
                                At {inflationRate}% inflation, your purchasing
                                power will decrease by{" "}
                                <strong className="text-[#B22234]">
                                  {results.purchasingPowerLoss.toFixed(0)}%
                                </strong>{" "}
                                over {yearsInRetirement} years.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Year-by-Year Milestones */}
                      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-[#000080] mb-4">
                          Spending at Key Milestones
                        </h3>

                        <div className="space-y-4">
                          {/* Year 1 */}
                          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                            <div>
                              <div className="text-slate-600 text-sm">
                                Year 1
                              </div>
                              <div className="text-slate-900 font-bold">
                                {formatCurrency(results.annualTotal)}
                              </div>
                            </div>
                            <div className="text-slate-600 text-sm">
                              {formatCurrency(results.monthlyTotal)}/mo
                            </div>
                          </div>

                          {/* Year 10 */}
                          {results.year10 && (
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                              <div>
                                <div className="text-slate-600 text-sm">
                                  Year 10
                                </div>
                                <div className="text-slate-900 font-bold">
                                  {formatCurrency(results.year10.spending)}
                                </div>
                              </div>
                              <div className="text-[#B22234] text-sm">
                                {formatCurrency(results.year10.monthly)}/mo
                              </div>
                            </div>
                          )}

                          {/* Year 20 */}
                          {results.year20 && (
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                              <div>
                                <div className="text-slate-600 text-sm">
                                  Year 20
                                </div>
                                <div className="text-slate-900 font-bold">
                                  {formatCurrency(results.year20.spending)}
                                </div>
                              </div>
                              <div className="text-[#B22234] text-sm">
                                {formatCurrency(results.year20.monthly)}/mo
                              </div>
                            </div>
                          )}

                          {/* Year 30 */}
                          {results.year30 && (
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                              <div>
                                <div className="text-slate-600 text-sm">
                                  Year 30
                                </div>
                                <div className="text-slate-900 font-bold">
                                  {formatCurrency(results.year30.spending)}
                                </div>
                              </div>
                              <div className="text-red-600 text-sm">
                                {formatCurrency(results.year30.monthly)}/mo
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Category Breakdown */}
                      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-[#000080] mb-4">
                          Lifetime Spending by Category
                        </h3>

                        <div className="space-y-3">
                          {results.categoryBreakdown.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <div key={cat.id} className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Icon className={`h-4 w-4 ${cat.color}`} />
                                    <span className="text-slate-600 text-sm">
                                      {cat.label}
                                    </span>
                                  </div>
                                  <span className="text-slate-900 font-bold text-sm">
                                    {formatCurrency(cat.lifetimeTotal)}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-[#B22234]"
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: `${cat.percentage}%`,
                                      }}
                                      transition={{ duration: 0.8, delay: 0.2 }}
                                    />
                                  </div>
                                  <span className="text-slate-500 text-xs w-10 text-right">
                                    {cat.percentage.toFixed(0)}%
                                  </span>
                                </div>
                              </div>
                            );
                          })}
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
                        Enter your monthly budget on the left and click Calculate
                        to see your lifetime retirement spending projection.
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
                    Protect Your Retirement Spending Power from Inflation
                  </h2>
                  <p className="text-slate-600 mb-4">
                    As you've seen, inflation significantly erodes your
                    purchasing power over time. Protect your retirement spending
                    needs with a strategic gold allocation. Financial experts
                    often recommend 10-15% of retirement assets in precious
                    metals to hedge against inflation.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Gold historically outpaces inflation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Maintains purchasing power over decades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Tax-advantaged through Gold IRA
                    </li>
                  </ul>
                </div>
              </div>
              <AugustaCTA
                variant="inline"
                linkContext="default"
                trackSource="retirement-spending-calculator"
                subheadline="Learn how to protect your retirement spending from inflation with a Gold IRA. Get a free consultation today."
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
                Average Retirement Spending by Category
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                How does your budget compare to typical retiree spending?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-3">Housing</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">35-40%</p>
                <p className="text-sm text-slate-500">
                  Typically the largest expense, including property taxes and
                  utilities
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-3">Healthcare</h3>
                <p className="text-3xl font-bold text-red-600 mb-2">15-20%</p>
                <p className="text-sm text-slate-500">
                  Increases with age; Medicare doesn't cover everything
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#000080] mb-3">Food</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">12-15%</p>
                <p className="text-sm text-slate-500">
                  Groceries and dining out; varies by lifestyle
                </p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Planning Tip</h4>
                  <p className="text-slate-600 text-sm">
                    Most financial advisors recommend planning for 70-80% of your
                    pre-retirement income. However, the first decade of retirement
                    often sees higher spending due to travel and active lifestyle,
                    followed by reduced spending in later years (except healthcare).
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
              headline="Secure Your Retirement Spending Power"
              subheadline="Don't let inflation steal your retirement dreams. Learn how Augusta Precious Metals can help you protect your savings with physical gold and silver. Get a free consultation with no high-pressure sales."
              linkContext="default"
              trackSource="retirement-spending-calculator-footer"
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
                    only and is not financial advice. Actual retirement expenses
                    vary widely based on location, health, lifestyle, and
                    unexpected events. Inflation rates fluctuate. Always consult
                    with a qualified financial advisor before making retirement
                    planning decisions.
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
