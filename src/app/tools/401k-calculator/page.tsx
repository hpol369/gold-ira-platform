"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Shield,
  PiggyBank,
  Calendar,
  Percent,
  Building2,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronUp,
  Target,
  Wallet,
  Clock,
} from "lucide-react";

// Format currency helper
function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value.toLocaleString()}`;
}

function formatFullCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

// Projection data type
interface YearProjection {
  year: number;
  age: number;
  yourContribution: number;
  employerMatch: number;
  investmentGrowth: number;
  balance: number;
  realBalance: number; // Inflation-adjusted
}

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I contribute to my 401(k)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial experts recommend contributing at least enough to get your full employer match (free money!), then ideally 10-15% of your salary. For 2026, you can contribute up to $23,500 if under 50, or $31,000 if 50 or older with catch-up contributions.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good 401(k) balance by age?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common rule of thumb is: By 30, have 1x your salary saved. By 40, have 3x. By 50, have 6x. By 60, have 8x. By 67, have 10x your salary. However, these are guidelines - your target depends on your retirement lifestyle goals and other income sources.",
      },
    },
    {
      "@type": "Question",
      name: "How does employer 401(k) matching work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employer matching is when your company contributes to your 401(k) based on your contributions. A common match is 50% of your contribution up to 6% of salary. So if you make $100,000 and contribute 6% ($6,000), your employer adds $3,000. This is essentially free money - always contribute enough to get the full match.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 4% rule for retirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4% rule suggests you can withdraw 4% of your retirement portfolio in your first year of retirement, then adjust for inflation each year, and your money should last at least 30 years. With a $1 million 401(k), that's $40,000 per year or about $3,333 per month.",
      },
    },
    {
      "@type": "Question",
      name: "Should I diversify my 401(k) with gold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While traditional 401(k)s typically can't hold physical gold, many investors roll over a portion to a Gold IRA for diversification. Gold has historically acted as a hedge against inflation and market volatility. Experts often recommend allocating 5-15% of retirement savings to precious metals for portfolio protection.",
      },
    },
  ],
};

// Web Application Schema
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "401k Calculator",
  description: "Free 401k calculator to project your retirement savings growth. Calculate employer match, investment returns, and estimate your retirement income.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "401k balance projections",
    "Employer match calculations",
    "Investment growth modeling",
    "Inflation-adjusted values",
    "Monthly retirement income estimates",
    "Interactive growth charts",
  ],
};

export default function Calculator401kPage() {
  // Input states
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [annualContribution, setAnnualContribution] = useState(12000);
  const [employerMatchPercent, setEmployerMatchPercent] = useState(50);
  const [employerMatchLimit, setEmployerMatchLimit] = useState(6);
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(3);

  // UI states
  const [showProjectionTable, setShowProjectionTable] = useState(false);

  // 2026 Contribution Limits
  const contributionLimit2026 = 23500;
  const catchUpContribution2026 = 7500;
  const maxContribution = currentAge >= 50 ? contributionLimit2026 + catchUpContribution2026 : contributionLimit2026;

  // Calculate employer match amount
  const employerMatchAmount = useMemo(() => {
    const contributionPercent = (annualContribution / annualSalary) * 100;
    const effectiveMatchPercent = Math.min(contributionPercent, employerMatchLimit);
    return (annualSalary * (effectiveMatchPercent / 100)) * (employerMatchPercent / 100);
  }, [annualContribution, annualSalary, employerMatchPercent, employerMatchLimit]);

  // Core calculations
  const calculations = useMemo(() => {
    const yearsToRetirement = Math.max(0, retirementAge - currentAge);
    const realReturnRate = (1 + expectedReturn / 100) / (1 + inflationRate / 100) - 1;
    const nominalReturnRate = expectedReturn / 100;
    const inflationRateDecimal = inflationRate / 100;

    // Calculate total annual contribution (yours + employer)
    const totalAnnualContribution = annualContribution + employerMatchAmount;

    // Year-by-year projections
    const projections: YearProjection[] = [];
    let balance = currentBalance;
    let totalYourContributions = 0;
    let totalEmployerMatch = 0;
    let totalGrowth = 0;

    for (let year = 0; year <= yearsToRetirement; year++) {
      const age = currentAge + year;
      const startBalance = balance;

      // Investment growth on existing balance
      const growth = startBalance * nominalReturnRate;

      // Add contributions (after first year)
      const yearlyContribution = year === 0 ? 0 : annualContribution;
      const yearlyMatch = year === 0 ? 0 : employerMatchAmount;

      // End of year balance
      balance = startBalance + growth + yearlyContribution + yearlyMatch;

      // Real (inflation-adjusted) balance
      const realBalance = balance / Math.pow(1 + inflationRateDecimal, year);

      // Track totals
      if (year > 0) {
        totalYourContributions += yearlyContribution;
        totalEmployerMatch += yearlyMatch;
        totalGrowth += growth;
      }

      projections.push({
        year: new Date().getFullYear() + year,
        age,
        yourContribution: yearlyContribution,
        employerMatch: yearlyMatch,
        investmentGrowth: growth,
        balance,
        realBalance,
      });
    }

    // Final values
    const finalBalance = balance;
    const finalRealBalance = balance / Math.pow(1 + inflationRateDecimal, yearsToRetirement);

    // Total growth includes growth on all balances
    const totalInvestmentGrowth = finalBalance - currentBalance - totalYourContributions - totalEmployerMatch;

    // Monthly retirement income using 4% rule
    const monthlyIncome4Percent = (finalBalance * 0.04) / 12;
    const monthlyIncomeReal = (finalRealBalance * 0.04) / 12;

    return {
      yearsToRetirement,
      finalBalance,
      finalRealBalance,
      totalYourContributions,
      totalEmployerMatch,
      totalInvestmentGrowth,
      monthlyIncome4Percent,
      monthlyIncomeReal,
      projections,
      totalAnnualContribution,
    };
  }, [
    currentAge,
    retirementAge,
    currentBalance,
    annualContribution,
    employerMatchAmount,
    expectedReturn,
    inflationRate,
  ]);

  // Chart data for growth visualization
  const chartData = calculations.projections.map((p) => ({
    age: p.age,
    year: p.year,
    balance: Math.round(p.balance),
    realBalance: Math.round(p.realBalance),
  }));

  // Pie chart data for breakdown
  const pieData = [
    { name: "Your Contributions", value: calculations.totalYourContributions, color: "#22c55e" },
    { name: "Employer Match", value: calculations.totalEmployerMatch, color: "#3b82f6" },
    { name: "Investment Growth", value: calculations.totalInvestmentGrowth, color: "#f59e0b" },
    { name: "Starting Balance", value: currentBalance, color: "#8b5cf6" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              FREE 401(k) CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              401k Calculator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Project your 401(k) growth and see how employer matching, contribution rates, and investment returns
              impact your retirement savings. Free, instant results.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Calculator */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">Your Age</h2>
                  </div>

                  <div className="space-y-5">
                    {/* Current Age */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium">
                          Current Age
                        </label>
                        <span className="text-[#B22234] font-bold">{currentAge}</span>
                      </div>
                      <input
                        type="range"
                        min={18}
                        max={70}
                        value={currentAge}
                        onChange={(e) => setCurrentAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>18</span>
                        <span>70</span>
                      </div>
                    </div>

                    {/* Retirement Age */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium">
                          Retirement Age
                        </label>
                        <span className="text-[#B22234] font-bold">{retirementAge}</span>
                      </div>
                      <input
                        type="range"
                        min={Math.max(currentAge + 1, 50)}
                        max={75}
                        value={retirementAge}
                        onChange={(e) => setRetirementAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>{Math.max(currentAge + 1, 50)}</span>
                        <span>75</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Years to Retirement</span>
                        <span className="font-bold text-green-600">{calculations.yearsToRetirement} years</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Balance & Contributions */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                      <PiggyBank className="h-5 w-5 text-green-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">Your 401(k)</h2>
                  </div>

                  <div className="space-y-5">
                    {/* Current Balance */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                          <Wallet className="h-4 w-4 text-[#B22234]" />
                          Current 401(k) Balance
                        </label>
                        <span className="text-[#B22234] font-bold">{formatFullCurrency(currentBalance)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={1000000}
                        step={5000}
                        value={currentBalance}
                        onChange={(e) => setCurrentBalance(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>$0</span>
                        <span>$1M</span>
                      </div>
                    </div>

                    {/* Annual Salary */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-[#B22234]" />
                          Annual Salary
                        </label>
                        <span className="text-[#B22234] font-bold">{formatFullCurrency(annualSalary)}</span>
                      </div>
                      <input
                        type="range"
                        min={30000}
                        max={300000}
                        step={5000}
                        value={annualSalary}
                        onChange={(e) => setAnnualSalary(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>$30k</span>
                        <span>$300k</span>
                      </div>
                    </div>

                    {/* Annual Contribution */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-[#B22234]" />
                          Your Annual Contribution
                        </label>
                        <span className="text-[#B22234] font-bold">{formatFullCurrency(annualContribution)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={maxContribution}
                        step={500}
                        value={annualContribution}
                        onChange={(e) => setAnnualContribution(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>$0</span>
                        <span>{formatCurrency(maxContribution)} (2026 max)</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-2">
                        {((annualContribution / annualSalary) * 100).toFixed(1)}% of salary |
                        {formatFullCurrency(annualContribution / 12)}/month
                      </div>
                    </div>
                  </div>
                </div>

                {/* Employer Match */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <Building2 className="h-5 w-5 text-purple-700" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">Employer Match</h2>
                  </div>

                  <div className="space-y-5">
                    {/* Match Percentage */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                          <Percent className="h-4 w-4 text-[#B22234]" />
                          Employer Matches
                        </label>
                        <span className="text-[#B22234] font-bold">{employerMatchPercent}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={employerMatchPercent}
                        onChange={(e) => setEmployerMatchPercent(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        e.g., 50% means employer adds $0.50 for every $1 you contribute
                      </p>
                    </div>

                    {/* Match Limit */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium flex items-center gap-2">
                          <Target className="h-4 w-4 text-[#B22234]" />
                          Up to % of Salary
                        </label>
                        <span className="text-[#B22234] font-bold">{employerMatchLimit}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        step={0.5}
                        value={employerMatchLimit}
                        onChange={(e) => setEmployerMatchLimit(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>0%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    {/* Employer Match Amount */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-slate-600 text-sm">Annual Employer Match</div>
                          <div className="text-xs text-slate-500">Free money from your employer!</div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {formatFullCurrency(employerMatchAmount)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Assumptions */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#B22234]/10 rounded-lg border border-[#B22234]/30">
                      <TrendingUp className="h-5 w-5 text-[#B22234]" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">Investment Assumptions</h2>
                  </div>

                  <div className="space-y-5">
                    {/* Expected Return */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium">
                          Expected Annual Return
                        </label>
                        <span className="text-[#B22234] font-bold">{expectedReturn}%</span>
                      </div>
                      <input
                        type="range"
                        min={3}
                        max={12}
                        step={0.5}
                        value={expectedReturn}
                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>Conservative (3%)</span>
                        <span>Aggressive (12%)</span>
                      </div>
                    </div>

                    {/* Inflation Rate */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-slate-600 font-medium">
                          Expected Inflation Rate
                        </label>
                        <span className="text-[#B22234] font-bold">{inflationRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={6}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>Low (1%)</span>
                        <span>High (6%)</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Real Return (after inflation)</span>
                        <span className="font-bold text-blue-600">{(expectedReturn - inflationRate).toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                {/* Main Result Card */}
                <div className="bg-[#B22234]/10 rounded-2xl p-8 border border-[#B22234]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-10 w-10 text-[#B22234]" />
                    <div>
                      <h3 className="text-sm text-slate-500">Projected 401(k) at Retirement</h3>
                      <div className="text-4xl font-bold text-[#B22234]">
                        {formatCurrency(calculations.finalBalance)}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#B22234]/30">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Real Value (Today's Dollars)</div>
                      <div className="text-xl font-bold text-slate-900">
                        {formatCurrency(calculations.finalRealBalance)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Retirement Age</div>
                      <div className="text-xl font-bold text-slate-900">
                        {retirementAge} years old
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Income Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Monthly Retirement Income (4% Rule)</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="text-slate-500 text-sm mb-1">Nominal</div>
                      <div className="text-2xl font-bold text-green-600">
                        {formatFullCurrency(calculations.monthlyIncome4Percent)}
                      </div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="text-slate-500 text-sm mb-1">Real (Today's $)</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {formatFullCurrency(calculations.monthlyIncomeReal)}
                      </div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                  </div>
                </div>

                {/* Breakdown Cards */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Balance Breakdown</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-slate-600">Starting Balance</span>
                      </div>
                      <span className="font-semibold text-slate-900">{formatFullCurrency(currentBalance)}</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-slate-600">Your Total Contributions</span>
                      </div>
                      <span className="font-semibold text-green-600">+{formatFullCurrency(calculations.totalYourContributions)}</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-slate-600">Total Employer Match</span>
                      </div>
                      <span className="font-semibold text-blue-600">+{formatFullCurrency(calculations.totalEmployerMatch)}</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-slate-600">Investment Growth</span>
                      </div>
                      <span className="font-semibold text-amber-600">+{formatFullCurrency(calculations.totalInvestmentGrowth)}</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg">
                      <span className="text-slate-900 font-semibold">Total at Retirement</span>
                      <span className="text-2xl font-bold text-[#B22234]">{formatFullCurrency(calculations.finalBalance)}</span>
                    </div>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">401(k) Growth Over Time</h3>

                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis
                          dataKey="age"
                          stroke="#94a3b8"
                          fontSize={12}
                          tickLine={false}
                          label={{ value: 'Age', position: 'bottom', fill: '#94a3b8', offset: -5 }}
                        />
                        <YAxis
                          stroke="#94a3b8"
                          fontSize={12}
                          tickLine={false}
                          tickFormatter={(value) => formatCurrency(value)}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            color: '#f8fafc',
                          }}
                          formatter={(value) => {
                            if (typeof value === 'number') {
                              return formatFullCurrency(value);
                            }
                            return String(value);
                          }}
                          labelFormatter={(label) => `Age ${label}`}
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorBalance)"
                          name="balance"
                        />
                        <Area
                          type="monotone"
                          dataKey="realBalance"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorReal)"
                          name="realBalance"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-sm text-slate-500">Nominal Balance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-slate-500">Real Balance (Today's $)</span>
                    </div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Where Your Money Comes From</h3>

                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            color: '#f8fafc',
                          }}
                          formatter={(value) => {
                            if (typeof value === 'number') {
                              return formatFullCurrency(value);
                            }
                            return String(value);
                          }}
                        />
                        <Legend
                          formatter={(value) => <span className="text-slate-600 text-sm">{value}</span>}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Year-by-Year Table */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <button
                    onClick={() => setShowProjectionTable(!showProjectionTable)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-slate-900"
                  >
                    <span className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Year-by-Year Projection
                    </span>
                    {showProjectionTable ? (
                      <ChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    )}
                  </button>

                  {showProjectionTable && (
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 px-2 text-slate-500">Year</th>
                            <th className="text-left py-2 px-2 text-slate-500">Age</th>
                            <th className="text-right py-2 px-2 text-slate-500">Contribution</th>
                            <th className="text-right py-2 px-2 text-slate-500">Match</th>
                            <th className="text-right py-2 px-2 text-slate-500">Growth</th>
                            <th className="text-right py-2 px-2 text-slate-500">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {calculations.projections.map((proj, index) => (
                            <tr
                              key={index}
                              className={`border-b border-slate-100 ${
                                proj.age === retirementAge ? 'bg-[#B22234]/5' : ''
                              }`}
                            >
                              <td className="py-2 px-2 text-slate-600">{proj.year}</td>
                              <td className="py-2 px-2 text-slate-600">{proj.age}</td>
                              <td className="text-right py-2 px-2 text-green-600">
                                {index === 0 ? '-' : `+${formatCurrency(proj.yourContribution)}`}
                              </td>
                              <td className="text-right py-2 px-2 text-blue-600">
                                {index === 0 ? '-' : `+${formatCurrency(proj.employerMatch)}`}
                              </td>
                              <td className="text-right py-2 px-2 text-amber-600">
                                +{formatCurrency(proj.investmentGrowth)}
                              </td>
                              <td className="text-right py-2 px-2 font-semibold text-slate-900">
                                {formatCurrency(proj.balance)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8 text-center">
              How to Use This 401(k) Calculator
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#B22234] rounded-full flex items-center justify-center text-slate-900 font-bold">1</div>
                  <h3 className="text-lg font-semibold text-slate-900">Enter Your Age</h3>
                </div>
                <p className="text-slate-600">
                  Input your current age and planned retirement age. The calculator will determine
                  how many years your money has to grow through compound interest.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#B22234] rounded-full flex items-center justify-center text-slate-900 font-bold">2</div>
                  <h3 className="text-lg font-semibold text-slate-900">Add Your Balance</h3>
                </div>
                <p className="text-slate-600">
                  Enter your current 401(k) balance, annual salary, and how much you contribute each year.
                  The 2026 maximum is $23,500 (or $31,000 if 50+).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#B22234] rounded-full flex items-center justify-center text-slate-900 font-bold">3</div>
                  <h3 className="text-lg font-semibold text-slate-900">Set Employer Match</h3>
                </div>
                <p className="text-slate-600">
                  Configure your employer's matching formula. A common match is "50% up to 6%" - meaning
                  your employer contributes $0.50 for every $1 you contribute, up to 6% of your salary.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#B22234] rounded-full flex items-center justify-center text-slate-900 font-bold">4</div>
                  <h3 className="text-lg font-semibold text-slate-900">Adjust Assumptions</h3>
                </div>
                <p className="text-slate-600">
                  Set your expected investment return (7% is historical average for stocks) and inflation rate
                  (3% is typical). The calculator shows both nominal and real (inflation-adjusted) values.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Understanding 401k Growth */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8 text-center">
              Understanding 401(k) Growth
            </h2>

            <div className="prose max-w-none">
              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">The Power of Compound Interest</h3>
                <p className="text-slate-600">
                  Your 401(k) grows through compound interest - meaning you earn returns not just on your
                  contributions, but on your previous returns as well. This creates exponential growth over time,
                  which is why starting early is so important.
                </p>
                <div className="bg-slate-50 rounded-lg p-4 mt-4 border border-slate-200">
                  <p className="text-[#B22234] font-semibold mb-2">Example:</p>
                  <p className="text-slate-600 text-sm">
                    If you invest $10,000 at age 25 with 7% annual returns, by age 65 it grows to $149,745 -
                    nearly 15x your initial investment! The same $10,000 invested at age 45 only grows to $38,697.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">The Three Sources of Growth</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 mt-2 shrink-0"></div>
                    <div>
                      <h4 className="text-slate-900 font-semibold">Your Contributions</h4>
                      <p className="text-slate-600 text-sm">
                        Money you contribute from each paycheck, pre-tax (Traditional) or post-tax (Roth).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                    <div>
                      <h4 className="text-slate-900 font-semibold">Employer Match</h4>
                      <p className="text-slate-600 text-sm">
                        Free money! Your employer contributes based on your contributions. Always contribute
                        enough to get the full match - it's an instant 50-100% return.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                    <div>
                      <h4 className="text-slate-900 font-semibold">Investment Growth</h4>
                      <p className="text-slate-600 text-sm">
                        Returns from your investments. Over long periods, this often becomes the largest
                        portion of your balance due to compound growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2026 Contribution Limits */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8 text-center">
              401(k) Contribution Limits 2026
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Under Age 50</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">$23,500</div>
                <p className="text-slate-600">
                  Maximum employee contribution limit for 2026. This is the most you can defer from your
                  salary into a Traditional or Roth 401(k).
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Age 50 and Over</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">$31,000</div>
                <p className="text-slate-600">
                  Includes $7,500 catch-up contribution. If you're 50+, you can contribute an extra $7,500
                  per year to accelerate your retirement savings.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-[#B22234]" />
                Total Annual Limit (Including Employer Match)
              </h3>
              <p className="text-slate-600 mb-4">
                The combined limit for employee + employer contributions is $70,000 for 2026 (or $77,500 if 50+).
                This includes your contributions, employer match, and any profit-sharing contributions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                  <span className="text-slate-500 text-sm">Under 50:</span>
                  <span className="text-slate-900 font-bold ml-2">$70,000</span>
                </div>
                <div className="bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                  <span className="text-slate-500 text-sm">Age 50+:</span>
                  <span className="text-slate-900 font-bold ml-2">$77,500</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Employer Match Explained */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8 text-center">
              Employer Match Explained
            </h2>

            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Common Matching Formulas</h3>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#B22234] font-semibold">50% match up to 6%</h4>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Most Common</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">
                    For every $1 you contribute (up to 6% of salary), employer adds $0.50
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Example:</strong> $80,000 salary, 6% contribution ($4,800) = $2,400 employer match
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="text-[#B22234] font-semibold mb-2">100% match up to 3%</h4>
                  <p className="text-slate-600 text-sm mb-2">
                    Dollar-for-dollar match on your first 3% of salary
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Example:</strong> $80,000 salary, 3% contribution ($2,400) = $2,400 employer match
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="text-[#B22234] font-semibold mb-2">100% match up to 4%, plus 50% of next 2%</h4>
                  <p className="text-slate-600 text-sm mb-2">
                    Tiered matching with better match on initial contributions
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Example:</strong> $80,000 salary, 6% contribution = $4,000 employer match
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Always Get the Full Match!</h3>
                  <p className="text-slate-600">
                    Not contributing enough to get your full employer match? You're leaving free money on the table.
                    An employer match is essentially a 50-100% instant return on your investment - you won't find
                    that anywhere else. Make this your first priority before investing elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold IRA CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#B22234]/5 border border-[#B22234]/30 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-[#B22234] shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-[#000080] mb-3">
                    Protect Your 401(k) Growth with Gold
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Your 401(k) projections look great on paper, but what happens when the next market crash
                    hits? In 2008, the average 401(k) lost 31% of its value. Many workers lost a decade of
                    savings in months.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Gold historically rises when stocks fall
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Physical gold has never gone to zero
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Protects purchasing power against inflation
                    </li>
                  </ul>
                </div>
              </div>
              <AugustaCTA
                variant="inline"
                linkContext="default"
                trackSource="401k-calculator"
                headline="See How Gold Could Protect Your 401(k)"
                subheadline="A Gold IRA lets you diversify your retirement savings with physical precious metals. No high-pressure sales - just education about your options."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.name}</h3>
                  <p className="text-slate-600">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
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
              headline="Ready to Protect Your Retirement Savings?"
              subheadline="After decades of building your 401(k), don't let the next market crash wipe out your progress. Learn how a Gold IRA can protect and diversify your retirement portfolio."
              linkContext="default"
              trackSource="401k-calculator-footer"
            />
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-[#B22234] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-semibold mb-2">Important Disclaimer</h3>
                  <p className="text-slate-600 text-sm">
                    This calculator provides estimates for educational purposes only and is not financial advice.
                    Actual results will vary based on market performance, fees, and individual circumstances.
                    Investment returns are not guaranteed and past performance does not predict future results.
                    Always consult with a qualified financial advisor before making investment decisions.
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
