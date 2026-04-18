"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import {
  Calculator,
  DollarSign,
  Calendar,
  TrendingDown,
  Info,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// IRS Uniform Lifetime Table (2024)
const uniformLifetimeTable: Record<number, number> = {
  72: 27.4,
  73: 26.5,
  74: 25.5,
  75: 24.6,
  76: 23.7,
  77: 22.9,
  78: 22.0,
  79: 21.1,
  80: 20.2,
  81: 19.4,
  82: 18.5,
  83: 17.7,
  84: 16.8,
  85: 16.0,
  86: 15.2,
  87: 14.4,
  88: 13.7,
  89: 12.9,
  90: 12.2,
  91: 11.5,
  92: 10.8,
  93: 10.1,
  94: 9.5,
  95: 8.9,
  96: 8.4,
  97: 7.8,
  98: 7.3,
  99: 6.8,
  100: 6.4,
  101: 6.0,
  102: 5.6,
  103: 5.2,
  104: 4.9,
  105: 4.6,
  106: 4.3,
  107: 4.1,
  108: 3.9,
  109: 3.7,
  110: 3.5,
  111: 3.4,
  112: 3.3,
  113: 3.1,
  114: 3.0,
  115: 2.9,
  116: 2.8,
  117: 2.7,
  118: 2.5,
  119: 2.3,
  120: 2.0,
};

interface RMDResult {
  currentAge: number;
  accountBalance: number;
  distributionPeriod: number;
  rmdAmount: number;
  percentOfBalance: number;
  projections: {
    age: number;
    year: number;
    startingBalance: number;
    rmd: number;
    endingBalance: number;
    distributionPeriod: number;
  }[];
}

export function RMDCalculator() {
  const [birthYear, setBirthYear] = useState(1955);
  const [accountBalance, setAccountBalance] = useState(500000);
  const [growthRate, setGrowthRate] = useState(5);
  const [result, setResult] = useState<RMDResult | null>(null);

  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - birthYear;
  const rmdStartAge = birthYear <= 1950 ? 72 : birthYear <= 1959 ? 73 : 75;

  function calculateRMD() {
    const age = Math.max(currentAge, rmdStartAge);
    const distributionPeriod = uniformLifetimeTable[age] || uniformLifetimeTable[120];
    const rmdAmount = accountBalance / distributionPeriod;
    const percentOfBalance = (rmdAmount / accountBalance) * 100;

    // Project 10 years of RMDs
    const projections = [];
    let balance = accountBalance;
    for (let i = 0; i < 10; i++) {
      const projectedAge = age + i;
      const year = currentYear + i;
      const period = uniformLifetimeTable[projectedAge] || uniformLifetimeTable[120];
      const rmd = balance / period;
      const growth = (balance - rmd) * (growthRate / 100);
      const endingBalance = balance - rmd + growth;

      projections.push({
        age: projectedAge,
        year,
        startingBalance: balance,
        rmd,
        endingBalance,
        distributionPeriod: period,
      });

      balance = endingBalance;
    }

    setResult({
      currentAge: age,
      accountBalance,
      distributionPeriod,
      rmdAmount,
      percentOfBalance,
      projections,
    });
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section className="py-16 md:py-24 bg-[#0C0D18]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.1)] border border-[#B22234]/30 rounded-full text-[#D4A94E] font-semibold text-sm mb-6">
              <Calculator className="h-4 w-4" />
              RMD CALCULATOR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#F6F4EF] mb-4">
              RMD Calculator 2026
            </h1>
            <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto">
              Plan your Gold IRA withdrawals and understand how RMDs affect your
              retirement income.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#F6F4EF] mb-6">Your Information</h3>

              {/* Birth Year */}
              <div className="mb-6">
                <label className="block text-[#D0CCC4] text-sm mb-2">
                  Birth Year
                </label>
                <input
                  type="number"
                  value={birthYear}
                  onChange={(e) => setBirthYear(Number(e.target.value))}
                  min={1930}
                  max={currentYear - 72}
                  className="w-full px-4 py-3 bg-[#121423] border border-[#2A2D42] rounded-xl text-[#F6F4EF] text-lg focus:outline-none focus:border-[#B22234]"
                />
                <p className="text-[#A8A39A] text-sm mt-2">
                  You are currently {currentAge} years old
                </p>
              </div>

              {/* Account Balance */}
              <div className="mb-6">
                <label className="block text-[#D0CCC4] text-sm mb-2">
                  Traditional IRA/Gold IRA Balance
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A8A39A]" />
                  <input
                    type="number"
                    value={accountBalance}
                    onChange={(e) => setAccountBalance(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-[#121423] border border-[#2A2D42] rounded-xl text-[#F6F4EF] text-lg focus:outline-none focus:border-[#B22234]"
                  />
                </div>
                <p className="text-[#A8A39A] text-sm mt-2">
                  Enter your total traditional IRA balance (as of Dec 31 prior year)
                </p>
              </div>

              {/* Projected Growth */}
              <div className="mb-6">
                <label className="block text-[#D0CCC4] text-sm mb-2">
                  Projected Annual Growth Rate: <span className="text-[#D4A94E] font-bold">{growthRate}%</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={12}
                  step={0.5}
                  value={growthRate}
                  onChange={(e) => setGrowthRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#2A2D42] rounded-lg appearance-none cursor-pointer accent-[#C5952E]"
                />
                <div className="flex justify-between text-xs text-[#A8A39A] mt-1">
                  <span>0%</span>
                  <span>6%</span>
                  <span>12%</span>
                </div>
              </div>

              {/* RMD Start Age Info */}
              <div className="bg-[rgba(220,38,38,0.1)] border border-[#B22234]/30 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#D4A94E] font-semibold text-sm">
                      Your RMD Start Age: {rmdStartAge}
                    </p>
                    <p className="text-[#D0CCC4] text-sm mt-1">
                      Based on SECURE 2.0 Act rules for your birth year.
                    </p>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateRMD}
                className="w-full py-4 bg-[#DC2626] hover:bg-[#991B1B] text-[#F6F4EF] font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                Calculate RMD
              </button>
            </div>

            {/* Results Panel */}
            <div className="bg-[#161828] border border-[#2A2D42] shadow-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#F6F4EF] mb-6">Your Results</h3>

              {result ? (
                <div className="space-y-6">
                  {/* Current Year RMD */}
                  <div className="bg-[rgba(220,38,38,0.1)] border border-[#B22234]/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-[#D4A94E] text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      {currentYear} REQUIRED MINIMUM DISTRIBUTION
                    </div>
                    <div className="text-3xl font-bold text-[#F6F4EF] mb-2">
                      {formatCurrency(result.rmdAmount)}
                    </div>
                    <div className="flex gap-4 text-sm text-[#A8A39A]">
                      <span>
                        Distribution Period: {result.distributionPeriod.toFixed(1)} years
                      </span>
                      <span>
                        {result.percentOfBalance.toFixed(2)}% of balance
                      </span>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="bg-[#0C0D18] rounded-xl p-4">
                    <p className="text-[#D0CCC4] text-sm">
                      At age {result.currentAge}, you must withdraw at least{" "}
                      <span className="text-[#F6F4EF] font-semibold">
                        {formatCurrency(result.rmdAmount)}
                      </span>{" "}
                      from your traditional IRA. This is calculated by dividing your
                      balance by your IRS distribution period of {result.distributionPeriod.toFixed(1)} years.
                    </p>
                  </div>

                  {/* 10-Year Projection */}
                  <div>
                    <div className="flex items-center gap-2 text-[#F6F4EF] font-semibold mb-4">
                      <TrendingDown className="h-5 w-5 text-[#D4A94E]" />
                      10-Year RMD Projection
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-[#2A2D42]">
                            <th className="py-2 px-2 text-left text-[#A8A39A]">Age</th>
                            <th className="py-2 px-2 text-right text-[#A8A39A]">Balance</th>
                            <th className="py-2 px-2 text-right text-[#A8A39A]">RMD</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.projections.map((proj, idx) => (
                            <tr
                              key={proj.year}
                              className={`border-b border-[#2A2D42] ${
                                idx === 0 ? "bg-[#161828]0/5" : ""
                              }`}
                            >
                              <td className="py-2 px-2 text-[#D0CCC4]">
                                {proj.age} ({proj.year})
                              </td>
                              <td className="py-2 px-2 text-right text-[#A8A39A]">
                                {formatCurrency(proj.startingBalance)}
                              </td>
                              <td className="py-2 px-2 text-right text-[#D4A94E] font-medium">
                                {formatCurrency(proj.rmd)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[#A8A39A] text-xs mt-2">
                      * Assumes {growthRate}% annual growth after RMD withdrawal
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/get-started"
                    className="block w-full py-4 bg-[#DC2626] hover:bg-[#991B1B] text-[#F6F4EF] font-bold text-center rounded-xl transition-all"
                  >
                    Plan Your Gold IRA Strategy
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-[#121423] rounded-2xl flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-[#A8A39A]" />
                  </div>
                  <p className="text-[#A8A39A]">
                    Enter your information and click &quot;Calculate RMD&quot; to see your
                    required minimum distribution.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Roth IRA Tip */}
          <div className="mt-8 bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[rgba(46,139,87,0.08)]0/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Info className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-[#F6F4EF] font-semibold mb-2">
                  Want to Avoid RMDs? Consider a Roth Gold IRA
                </h4>
                <p className="text-[#D0CCC4] text-sm">
                  Roth IRAs have no Required Minimum Distributions during your lifetime.
                  If you don&apos;t need the income and want to leave a tax-free inheritance,
                  a Roth Gold IRA might be a better choice.{" "}
                  <Link href="/rollover/roth-ira-to-gold-ira" className="text-green-600 hover:underline">
                    Learn about Roth Gold IRAs →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
