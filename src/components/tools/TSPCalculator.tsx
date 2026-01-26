"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Info,
  ArrowRight,
  PieChart,
  Clock,
  Target,
  Wallet,
} from "lucide-react";
import Link from "next/link";

interface TSPResult {
  projectedBalance: number;
  totalContributions: number;
  totalEmployerMatch: number;
  totalGrowth: number;
  yearByYearProjection: {
    year: number;
    age: number;
    balance: number;
    contribution: number;
    match: number;
    growth: number;
  }[];
  monthlyRetirementIncome: number;
}

// TSP Fund historical average returns (approximated)
const fundReturns: Record<string, number> = {
  G: 2.5, // G Fund - Government Securities
  F: 4.0, // F Fund - Fixed Income Index
  C: 10.0, // C Fund - S&P 500 Index
  S: 11.0, // S Fund - Small Cap Index
  I: 7.0, // I Fund - International Stock Index
};

export function TSPCalculator() {
  const [currentBalance, setCurrentBalance] = useState(100000);
  const [annualSalary, setAnnualSalary] = useState(85000);
  const [contributionPercent, setContributionPercent] = useState(10);
  const [currentAge, setCurrentAge] = useState(45);
  const [retirementAge, setRetirementAge] = useState(62);
  const [catchUpEligible, setCatchUpEligible] = useState(false);

  // Fund allocation percentages
  const [allocation, setAllocation] = useState({
    G: 10,
    F: 10,
    C: 40,
    S: 20,
    I: 20,
  });

  const [result, setResult] = useState<TSPResult | null>(null);

  // 2024/2025 TSP Contribution Limits
  const regularLimit = 23500; // 2025 limit
  const catchUpLimit = 7500; // 50+ catch-up
  const totalLimit = catchUpEligible && currentAge >= 50 ? regularLimit + catchUpLimit : regularLimit;

  // Calculate weighted average return based on allocation
  const weightedReturn = useMemo(() => {
    let total = 0;
    let weight = 0;
    Object.entries(allocation).forEach(([fund, percent]) => {
      total += (percent / 100) * fundReturns[fund];
      weight += percent;
    });
    return weight > 0 ? total : 7; // Default 7% if no allocation
  }, [allocation]);

  // Validate allocation totals 100%
  const allocationTotal = Object.values(allocation).reduce((a, b) => a + b, 0);
  const isValidAllocation = allocationTotal === 100;

  function updateAllocation(fund: string, value: number) {
    setAllocation((prev) => ({
      ...prev,
      [fund]: Math.max(0, Math.min(100, value)),
    }));
  }

  function calculateTSP() {
    const yearsToRetirement = retirementAge - currentAge;
    if (yearsToRetirement <= 0) return;

    const yearlyProjection = [];
    let balance = currentBalance;
    let totalContributions = 0;
    let totalMatch = 0;
    let totalGrowth = 0;
    const currentYear = new Date().getFullYear();

    // Federal match: 1% automatic + up to 4% matching (5% total max)
    const matchPercent = Math.min(contributionPercent, 5);
    const automaticContribution = 1; // 1% automatic

    for (let i = 0; i < yearsToRetirement; i++) {
      const age = currentAge + i;
      const yearLimit = age >= 50 ? regularLimit + catchUpLimit : regularLimit;

      // Calculate contribution (capped at limit)
      const desiredContribution = (annualSalary * contributionPercent) / 100;
      const contribution = Math.min(desiredContribution, yearLimit);

      // Calculate match (5% total: 1% auto + up to 4% match)
      const autoContrib = (annualSalary * automaticContribution) / 100;
      const matchablePercent = Math.min(contributionPercent, 5) - automaticContribution;
      const dollarMatch = (annualSalary * (matchablePercent > 0 ? matchablePercent : 0)) / 100;
      const match = autoContrib + Math.min(dollarMatch, annualSalary * 0.04);

      // Calculate growth
      const annualReturn = weightedReturn / 100;
      const midYearBalance = balance + (contribution + match) / 2;
      const growth = midYearBalance * annualReturn;

      // Update totals
      totalContributions += contribution;
      totalMatch += match;
      totalGrowth += growth;
      balance = balance + contribution + match + growth;

      yearlyProjection.push({
        year: currentYear + i,
        age,
        balance,
        contribution,
        match,
        growth,
      });
    }

    // Calculate monthly retirement income (4% rule)
    const monthlyIncome = (balance * 0.04) / 12;

    setResult({
      projectedBalance: balance,
      totalContributions,
      totalEmployerMatch: totalMatch,
      totalGrowth,
      yearByYearProjection: yearlyProjection,
      monthlyRetirementIncome: monthlyIncome,
    });
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const formatPercent = (value: number) => `${value.toFixed(1)}%`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              TSP CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              TSP Calculator 2026
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Project your TSP balance at retirement with fund allocation analysis and contribution optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Input Panel - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Your TSP Information</h3>

                {/* Current Balance */}
                <div className="mb-5">
                  <label className="block text-slate-400 text-sm mb-2">
                    Current TSP Balance
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={currentBalance}
                      onChange={(e) => setCurrentBalance(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Annual Salary */}
                <div className="mb-5">
                  <label className="block text-slate-400 text-sm mb-2">
                    Annual Salary
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={annualSalary}
                      onChange={(e) => setAnnualSalary(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Contribution Percent */}
                <div className="mb-5">
                  <label className="block text-slate-400 text-sm mb-2">
                    Contribution Rate: <span className="text-green-400 font-bold">{contributionPercent}%</span>
                    <span className="text-slate-500 ml-2">
                      ({formatCurrency((annualSalary * contributionPercent) / 100)}/year)
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={contributionPercent}
                    onChange={(e) => setContributionPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>0%</span>
                    <span>5% (max match)</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Age Inputs */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Current Age</label>
                    <input
                      type="number"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      min={18}
                      max={70}
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Retirement Age</label>
                    <input
                      type="number"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(Number(e.target.value))}
                      min={currentAge + 1}
                      max={75}
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Catch-up Eligible */}
                <div className="mb-5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={catchUpEligible}
                      onChange={(e) => setCatchUpEligible(e.target.checked)}
                      className="w-5 h-5 bg-slate-800 border border-white/20 rounded accent-green-500"
                    />
                    <span className="text-slate-300">Age 50+ (catch-up contributions)</span>
                  </label>
                  <p className="text-slate-500 text-xs mt-1 ml-8">
                    2025 limits: ${regularLimit.toLocaleString()} + ${catchUpLimit.toLocaleString()} catch-up = ${(regularLimit + catchUpLimit).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Fund Allocation */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Fund Allocation</h3>
                  <span className={`text-sm font-semibold ${isValidAllocation ? 'text-green-400' : 'text-red-400'}`}>
                    {allocationTotal}% / 100%
                  </span>
                </div>

                <div className="space-y-4">
                  {Object.entries(allocation).map(([fund, percent]) => (
                    <div key={fund}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-300 text-sm">
                          {fund} Fund <span className="text-slate-500">({formatPercent(fundReturns[fund])} avg return)</span>
                        </span>
                        <span className="text-white font-semibold">{percent}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={percent}
                        onChange={(e) => updateAllocation(fund, Number(e.target.value))}
                        className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                          fund === 'G' ? 'accent-gray-400' :
                          fund === 'F' ? 'accent-blue-400' :
                          fund === 'C' ? 'accent-green-400' :
                          fund === 'S' ? 'accent-purple-400' :
                          'accent-orange-400'
                        }`}
                        style={{ background: `linear-gradient(to right, ${
                          fund === 'G' ? '#9ca3af' :
                          fund === 'F' ? '#60a5fa' :
                          fund === 'C' ? '#4ade80' :
                          fund === 'S' ? '#a78bfa' :
                          '#fb923c'
                        } ${percent}%, #334155 ${percent}%)` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Weighted Average Return:</span>
                    <span className="text-green-400 font-bold">{formatPercent(weightedReturn)}</span>
                  </div>
                </div>

                {!isValidAllocation && (
                  <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm">
                      Allocation must total 100%. Currently at {allocationTotal}%.
                    </p>
                  </div>
                )}
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateTSP}
                disabled={!isValidAllocation}
                className={`w-full py-4 font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 ${
                  isValidAllocation
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Calculator className="h-5 w-5" />
                Calculate TSP Projection
              </button>
            </div>

            {/* Results Panel - 3 columns */}
            <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your TSP Projection</h3>

              {result ? (
                <div className="space-y-6">
                  {/* Projected Balance */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                      <Target className="h-4 w-4" />
                      PROJECTED BALANCE AT RETIREMENT
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {formatCurrency(result.projectedBalance)}
                    </div>
                    <p className="text-slate-400 text-sm">
                      at age {retirementAge} ({retirementAge - currentAge} years from now)
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <Wallet className="h-3 w-3" />
                        Your Contributions
                      </div>
                      <div className="text-lg font-bold text-white">
                        {formatCurrency(result.totalContributions)}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <DollarSign className="h-3 w-3" />
                        Employer Match
                      </div>
                      <div className="text-lg font-bold text-blue-400">
                        {formatCurrency(result.totalEmployerMatch)}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <TrendingUp className="h-3 w-3" />
                        Investment Growth
                      </div>
                      <div className="text-lg font-bold text-green-400">
                        {formatCurrency(result.totalGrowth)}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <Clock className="h-3 w-3" />
                        Monthly Income (4%)
                      </div>
                      <div className="text-lg font-bold text-amber-400">
                        {formatCurrency(result.monthlyRetirementIncome)}
                      </div>
                    </div>
                  </div>

                  {/* Growth Breakdown */}
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Balance Composition</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-4 bg-slate-700 rounded-full overflow-hidden flex">
                          <div
                            className="h-full bg-slate-500"
                            style={{ width: `${(currentBalance / result.projectedBalance) * 100}%` }}
                            title="Starting Balance"
                          />
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${(result.totalContributions / result.projectedBalance) * 100}%` }}
                            title="Your Contributions"
                          />
                          <div
                            className="h-full bg-purple-500"
                            style={{ width: `${(result.totalEmployerMatch / result.projectedBalance) * 100}%` }}
                            title="Employer Match"
                          />
                          <div
                            className="h-full bg-green-500"
                            style={{ width: `${(result.totalGrowth / result.projectedBalance) * 100}%` }}
                            title="Investment Growth"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-slate-500 rounded" />
                          <span className="text-slate-400">Starting ({formatCurrency(currentBalance)})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-500 rounded" />
                          <span className="text-slate-400">Contributions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-purple-500 rounded" />
                          <span className="text-slate-400">Match</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-green-500 rounded" />
                          <span className="text-slate-400">Growth</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Year-by-Year Projection */}
                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold mb-4">
                      <PieChart className="h-5 w-5 text-green-400" />
                      Year-by-Year Projection
                    </div>
                    <div className="overflow-x-auto max-h-64 overflow-y-auto">
                      <table className="w-full text-sm">
                        <thead className="sticky top-0 bg-slate-800">
                          <tr className="border-b border-white/10">
                            <th className="py-2 px-2 text-left text-slate-500">Year</th>
                            <th className="py-2 px-2 text-left text-slate-500">Age</th>
                            <th className="py-2 px-2 text-right text-slate-500">Contribution</th>
                            <th className="py-2 px-2 text-right text-slate-500">Match</th>
                            <th className="py-2 px-2 text-right text-slate-500">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.yearByYearProjection.map((row, idx) => (
                            <tr
                              key={row.year}
                              className={`border-b border-white/5 ${
                                idx === result.yearByYearProjection.length - 1 ? "bg-green-500/10" : ""
                              }`}
                            >
                              <td className="py-2 px-2 text-slate-300">{row.year}</td>
                              <td className="py-2 px-2 text-slate-300">{row.age}</td>
                              <td className="py-2 px-2 text-right text-blue-400">
                                {formatCurrency(row.contribution)}
                              </td>
                              <td className="py-2 px-2 text-right text-purple-400">
                                {formatCurrency(row.match)}
                              </td>
                              <td className="py-2 px-2 text-right text-white font-medium">
                                {formatCurrency(row.balance)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-center rounded-xl transition-all"
                  >
                    Diversify with a Gold IRA
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                    <Calculator className="h-10 w-10 text-slate-500" />
                  </div>
                  <p className="text-slate-400 max-w-sm">
                    Enter your TSP information and fund allocation, then click &quot;Calculate&quot; to see your projected balance at retirement.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Info className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Federal Employee Gold Bridge Strategy
                </h4>
                <p className="text-slate-400 text-sm">
                  While TSP offers excellent low-cost index funds, it lacks precious metals options.
                  Federal employees should consider diversifying beyond TSP and FERS with a Gold IRA for
                  inflation protection. After separation or at age 59 1/2 while employed, you can roll
                  TSP funds into a self-directed Gold IRA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
