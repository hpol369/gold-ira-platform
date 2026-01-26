"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Home,
  DollarSign,
  Calendar,
  TrendingUp,
  Calculator,
  AlertTriangle,
  Percent,
  CreditCard,
  PiggyBank,
  LineChart,
} from "lucide-react";

// Principal Limit Factors by age and interest rate (simplified table)
// These are approximate PLFs based on HUD tables
const PLF_TABLE: Record<number, Record<string, number>> = {
  62: { "5.0": 0.418, "5.5": 0.395, "6.0": 0.373, "6.5": 0.352, "7.0": 0.331 },
  65: { "5.0": 0.453, "5.5": 0.431, "6.0": 0.409, "6.5": 0.388, "7.0": 0.368 },
  70: { "5.0": 0.510, "5.5": 0.489, "6.0": 0.468, "6.5": 0.448, "7.0": 0.429 },
  75: { "5.0": 0.565, "5.5": 0.546, "6.0": 0.527, "6.5": 0.509, "7.0": 0.491 },
  80: { "5.0": 0.620, "5.5": 0.603, "6.0": 0.586, "6.5": 0.570, "7.0": 0.554 },
  85: { "5.0": 0.670, "5.5": 0.655, "6.0": 0.640, "6.5": 0.626, "7.0": 0.612 },
  90: { "5.0": 0.710, "5.5": 0.698, "6.0": 0.686, "6.5": 0.674, "7.0": 0.663 },
};

function getPLF(age: number, rate: string): number {
  const ages = Object.keys(PLF_TABLE).map(Number).sort((a, b) => a - b);
  let closestAge = ages[0];
  for (const a of ages) {
    if (a <= age) closestAge = a;
  }
  const rateKey = rate as keyof typeof PLF_TABLE[number];
  return PLF_TABLE[closestAge]?.[rateKey] || 0.45;
}

type PayoutType = "lump" | "loc" | "tenure" | "term" | "combo";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ReverseMortgageCalculator() {
  // Inputs
  const [age, setAge] = useState<number>(70);
  const [homeValue, setHomeValue] = useState<number>(450000);
  const [mortgageBalance, setMortgageBalance] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<string>("6.0");
  const [payoutType, setPayoutType] = useState<PayoutType>("loc");
  const [termYears, setTermYears] = useState<number>(10);

  // Calculations
  const calculations = useMemo(() => {
    const plf = getPLF(age, interestRate);
    const rate = parseFloat(interestRate) / 100;

    // HECM lending limit (2024)
    const hecmLimit = 1149825;
    const assessedValue = Math.min(homeValue, hecmLimit);

    // Principal Limit
    const principalLimit = assessedValue * plf;

    // Closing costs (estimate: origination fee + MIP + other)
    const originationFee = Math.min(Math.max(2500, homeValue * 0.02), 6000);
    const upfrontMIP = assessedValue * 0.02; // 2% upfront MIP
    const otherClosingCosts = 3000; // Title, appraisal, etc.
    const totalClosingCosts = originationFee + upfrontMIP + otherClosingCosts;

    // Available proceeds
    const availableProceeds = Math.max(0, principalLimit - mortgageBalance - totalClosingCosts);

    // Line of Credit growth projection (unused portion grows at same rate + 0.5% MIP)
    const locGrowthRate = rate + 0.005;
    const locProjections: { year: number; availableCredit: number; growth: number }[] = [];
    let credit = availableProceeds;
    for (let year = 0; year <= 15; year++) {
      locProjections.push({
        year,
        availableCredit: credit,
        growth: year > 0 ? credit - availableProceeds : 0,
      });
      credit = credit * (1 + locGrowthRate);
    }

    // Monthly payment for tenure (lifetime) option
    // Simplified calculation - actual uses actuarial tables
    const lifeExpectancy = Math.max(1, 95 - age);
    const tenureMonthlyPayment = availableProceeds / (lifeExpectancy * 12);

    // Monthly payment for term option
    const termMonthlyPayment = availableProceeds / (termYears * 12);

    // Total interest projection over time
    const interestProjections: { year: number; loanBalance: number; homeEquity: number; interestPaid: number }[] = [];
    let loanBalance = mortgageBalance + totalClosingCosts + availableProceeds;
    let homeVal = homeValue;
    const homeAppreciation = 0.03; // 3% annual appreciation

    for (let year = 0; year <= 20; year++) {
      const equity = homeVal - loanBalance;
      interestProjections.push({
        year,
        loanBalance,
        homeEquity: equity,
        interestPaid: year > 0 ? loanBalance - (mortgageBalance + totalClosingCosts + availableProceeds) : 0,
      });
      loanBalance = loanBalance * (1 + rate);
      homeVal = homeVal * (1 + homeAppreciation);
    }

    return {
      plf,
      principalLimit,
      originationFee,
      upfrontMIP,
      totalClosingCosts,
      availableProceeds,
      tenureMonthlyPayment,
      termMonthlyPayment,
      locProjections,
      interestProjections,
      hecmLimit,
      assessedValue,
    };
  }, [age, homeValue, mortgageBalance, interestRate, termYears]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-500/30">
          <Home className="h-4 w-4" />
          Reverse Mortgage Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Calculate Your Reverse Mortgage
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          See how much home equity you could access with a reverse mortgage. Compare payout options and understand true costs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Personal Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Your Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Your Age (must be 62+): <span className="text-white font-semibold">{age}</span>
                </label>
                <input
                  type="range"
                  min="62"
                  max="95"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>62</span>
                  <span>75</span>
                  <span>95</span>
                </div>
              </div>
            </div>
          </div>

          {/* Home Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <Home className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Home Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Home Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={homeValue}
                    onChange={(e) => setHomeValue(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-blue-500"
                    min="100000"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Current Mortgage Balance
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={mortgageBalance}
                    onChange={(e) => setMortgageBalance(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:border-blue-500"
                    min="0"
                    step="5000"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Enter $0 if your home is paid off
                </p>
              </div>
            </div>
          </div>

          {/* Loan Details */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <Percent className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold">Loan Options</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Interest Rate (Expected)
                </label>
                <select
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="5.0">5.0% (Low)</option>
                  <option value="5.5">5.5%</option>
                  <option value="6.0">6.0% (Typical)</option>
                  <option value="6.5">6.5%</option>
                  <option value="7.0">7.0% (High)</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Payout Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "lump" as PayoutType, label: "Lump Sum", icon: DollarSign },
                    { value: "loc" as PayoutType, label: "Line of Credit", icon: CreditCard },
                    { value: "tenure" as PayoutType, label: "Monthly (Life)", icon: Calendar },
                    { value: "term" as PayoutType, label: "Monthly (Term)", icon: PiggyBank },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPayoutType(option.value)}
                      className={`p-3 rounded-lg border text-left flex items-center gap-2 transition-all ${
                        payoutType === option.value
                          ? "bg-blue-500/20 border-blue-500/50 text-blue-400"
                          : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                      }`}
                    >
                      <option.icon className="h-4 w-4" />
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {payoutType === "term" && (
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">
                    Term Length: <span className="text-white font-semibold">{termYears} years</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    value={termYears}
                    onChange={(e) => setTermYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Results */}
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-sm text-slate-400 mb-2">Available Proceeds</h3>
            <div className="text-4xl font-bold text-blue-400 mb-4">
              {formatCurrency(calculations.availableProceeds)}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-500/30">
              <div>
                <div className="text-xs text-slate-500">Principal Limit</div>
                <div className="text-lg font-semibold">{formatCurrency(calculations.principalLimit)}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">PLF (Your Age)</div>
                <div className="text-lg font-semibold">{(calculations.plf * 100).toFixed(1)}%</div>
              </div>
            </div>
          </div>

          {/* Payout Options Comparison */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-amber-400" />
              Payout Options
            </h3>

            <div className="space-y-3">
              <div className={`p-4 rounded-lg border ${payoutType === "lump" ? "bg-blue-500/10 border-blue-500/30" : "bg-slate-800/50 border-slate-700"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Lump Sum</span>
                  <span className="text-xl font-bold text-white">{formatCurrency(calculations.availableProceeds)}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">One-time payment at closing</p>
              </div>

              <div className={`p-4 rounded-lg border ${payoutType === "loc" ? "bg-blue-500/10 border-blue-500/30" : "bg-slate-800/50 border-slate-700"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Line of Credit</span>
                  <span className="text-xl font-bold text-white">{formatCurrency(calculations.availableProceeds)}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Draw as needed, grows over time</p>
              </div>

              <div className={`p-4 rounded-lg border ${payoutType === "tenure" ? "bg-blue-500/10 border-blue-500/30" : "bg-slate-800/50 border-slate-700"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monthly (Lifetime)</span>
                  <span className="text-xl font-bold text-white">{formatCurrency(calculations.tenureMonthlyPayment)}/mo</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Payments for as long as you live in home</p>
              </div>

              <div className={`p-4 rounded-lg border ${payoutType === "term" ? "bg-blue-500/10 border-blue-500/30" : "bg-slate-800/50 border-slate-700"}`}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monthly ({termYears} Year Term)</span>
                  <span className="text-xl font-bold text-white">{formatCurrency(calculations.termMonthlyPayment)}/mo</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Fixed payments for set period</p>
              </div>
            </div>
          </div>

          {/* Closing Costs */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-orange-400" />
              Closing Costs (Estimated)
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Origination Fee</span>
                <span className="text-white">{formatCurrency(calculations.originationFee)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Upfront MIP (2%)</span>
                <span className="text-white">{formatCurrency(calculations.upfrontMIP)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Other Costs (est.)</span>
                <span className="text-white">$3,000</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                <span className="text-slate-300 font-semibold">Total Closing Costs</span>
                <span className="text-orange-400 font-bold">{formatCurrency(calculations.totalClosingCosts)}</span>
              </div>
            </div>
          </div>

          {/* Line of Credit Growth */}
          {payoutType === "loc" && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Line of Credit Growth
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-2 text-left text-slate-500">Year</th>
                      <th className="py-2 text-right text-slate-500">Available Credit</th>
                      <th className="py-2 text-right text-slate-500">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.locProjections.slice(0, 11).map((proj, idx) => (
                      <tr key={proj.year} className={idx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                        <td className="py-2 text-slate-300">{proj.year}</td>
                        <td className="py-2 text-right text-white">{formatCurrency(proj.availableCredit)}</td>
                        <td className="py-2 text-right text-green-400">
                          {proj.growth > 0 ? `+${formatCurrency(proj.growth)}` : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Unused credit line grows at interest rate + 0.5% MIP
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Risks and Warnings Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-red-400" />
            <h2 className="text-2xl font-bold text-red-400">Important Risks to Consider</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="text-white font-semibold mb-2">Compound Interest</h4>
                <p className="text-slate-400 text-sm">
                  Interest compounds on your loan balance monthly. A {formatCurrency(calculations.availableProceeds)} loan at {interestRate}% could grow to {formatCurrency(calculations.interestProjections[10]?.loanBalance || 0)} in just 10 years.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="text-white font-semibold mb-2">Reduced Inheritance</h4>
                <p className="text-slate-400 text-sm">
                  Your heirs will need to repay the full loan balance or sell the home. The longer you live, the more equity is consumed by interest.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="text-white font-semibold mb-2">Fees Are High</h4>
                <p className="text-slate-400 text-sm">
                  Closing costs of {formatCurrency(calculations.totalClosingCosts)} are significant. These costs are typically rolled into your loan, adding to the balance.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="text-white font-semibold mb-2">Property Tax &amp; Insurance Required</h4>
                <p className="text-slate-400 text-sm">
                  You must continue paying property taxes, homeowners insurance, and maintain the home. Failure to do so can trigger loan default.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="text-white font-semibold mb-2">Must Remain Primary Residence</h4>
                <p className="text-slate-400 text-sm">
                  If you move out for more than 12 months (including nursing home care), the loan becomes due immediately.
                </p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="text-white font-semibold mb-2">Affects Benefits</h4>
                <p className="text-slate-400 text-sm">
                  Reverse mortgage proceeds could affect eligibility for Medicaid, SSI, and other needs-based programs. Consult a benefits specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Balance Projection */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <LineChart className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold">20-Year Equity Projection</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-2 text-left text-slate-500">Year</th>
                  <th className="py-2 text-right text-slate-500">Loan Balance</th>
                  <th className="py-2 text-right text-slate-500">Home Value</th>
                  <th className="py-2 text-right text-slate-500">Remaining Equity</th>
                </tr>
              </thead>
              <tbody>
                {calculations.interestProjections.filter((_, i) => i % 2 === 0 || i === 10).slice(0, 11).map((proj, idx) => (
                  <tr key={proj.year} className={idx % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="py-2 text-slate-300">{proj.year}</td>
                    <td className="py-2 text-right text-red-400">{formatCurrency(proj.loanBalance)}</td>
                    <td className="py-2 text-right text-green-400">{formatCurrency(homeValue * Math.pow(1.03, proj.year))}</td>
                    <td className={`py-2 text-right font-semibold ${proj.homeEquity > 0 ? "text-white" : "text-red-400"}`}>
                      {formatCurrency(proj.homeEquity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            * Assumes 3% annual home appreciation. Actual results will vary.
          </p>
        </div>
      </div>

      {/* Gold IRA Alternative */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-8 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-6">
            <PiggyBank className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Preserve Home Equity with Better Planning</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-amber-400 font-semibold mb-2">Reverse Mortgage Reality</div>
              <p className="text-slate-400 text-sm">
                Reverse mortgages can be useful in emergencies, but compound interest rapidly erodes your home equity - the wealth you spent decades building.
              </p>
            </div>

            <div>
              <div className="text-amber-400 font-semibold mb-2">Gold IRA Alternative</div>
              <p className="text-slate-400 text-sm">
                A Gold IRA allows you to diversify retirement savings into physical precious metals that historically hold value against inflation - without risking your home.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="reverse-mortgage-calculator"
            subheadline="Before tapping home equity, explore how a Gold IRA can provide retirement security while preserving your home for your family."
          />
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Reverse Mortgages</h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">What is a Reverse Mortgage?</h3>
            <p className="text-slate-400 mb-4">
              A reverse mortgage is a loan that allows homeowners 62+ to convert home equity into cash without selling their home or making monthly payments. Instead, the loan balance grows over time and is repaid when the borrower sells, moves out, or passes away.
            </p>
            <p className="text-slate-400">
              The most common type is the Home Equity Conversion Mortgage (HECM), which is insured by the Federal Housing Administration (FHA). Proprietary reverse mortgages are also available for high-value homes exceeding HECM limits.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Requirements</h3>
            <ul className="space-y-2 text-slate-400">
              <li>- Must be 62 years of age or older</li>
              <li>- Must own home outright or have significant equity</li>
              <li>- Home must be your primary residence</li>
              <li>- Must complete HUD-approved counseling</li>
              <li>- Must continue paying property taxes and insurance</li>
              <li>- Home must meet FHA property standards</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">When to Consider Alternatives</h3>
            <p className="text-slate-400 mb-4">
              Reverse mortgages can be appropriate for seniors who need cash flow and plan to age in place, but they are expensive and reduce the inheritance you can leave. Consider alternatives first:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li>- Home Equity Line of Credit (HELOC) - lower fees, more flexibility</li>
              <li>- Downsizing to a smaller home</li>
              <li>- Renting out part of your home</li>
              <li>- Retirement account withdrawals with proper tax planning</li>
              <li>- Life insurance cash value</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
