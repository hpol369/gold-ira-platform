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
  Shield,
  Building2,
  Scale,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// HECM Principal Limit Factors by age and expected rate
const HECM_PLF_TABLE: Record<number, Record<string, number>> = {
  62: { "5.0": 0.418, "5.5": 0.395, "6.0": 0.373, "6.5": 0.352, "7.0": 0.331 },
  65: { "5.0": 0.453, "5.5": 0.431, "6.0": 0.409, "6.5": 0.388, "7.0": 0.368 },
  70: { "5.0": 0.510, "5.5": 0.489, "6.0": 0.468, "6.5": 0.448, "7.0": 0.429 },
  75: { "5.0": 0.565, "5.5": 0.546, "6.0": 0.527, "6.5": 0.509, "7.0": 0.491 },
  80: { "5.0": 0.620, "5.5": 0.603, "6.0": 0.586, "6.5": 0.570, "7.0": 0.554 },
  85: { "5.0": 0.670, "5.5": 0.655, "6.0": 0.640, "6.5": 0.626, "7.0": 0.612 },
  90: { "5.0": 0.710, "5.5": 0.698, "6.0": 0.686, "6.5": 0.674, "7.0": 0.663 },
};

// Proprietary reverse mortgage PLFs (generally higher for high-value homes)
const PROPRIETARY_PLF_TABLE: Record<number, Record<string, number>> = {
  62: { "5.0": 0.35, "5.5": 0.33, "6.0": 0.31, "6.5": 0.29, "7.0": 0.27 },
  65: { "5.0": 0.39, "5.5": 0.37, "6.0": 0.35, "6.5": 0.33, "7.0": 0.31 },
  70: { "5.0": 0.45, "5.5": 0.43, "6.0": 0.41, "6.5": 0.39, "7.0": 0.37 },
  75: { "5.0": 0.52, "5.5": 0.50, "6.0": 0.48, "6.5": 0.46, "7.0": 0.44 },
  80: { "5.0": 0.58, "5.5": 0.56, "6.0": 0.54, "6.5": 0.52, "7.0": 0.50 },
  85: { "5.0": 0.63, "5.5": 0.61, "6.0": 0.59, "6.5": 0.57, "7.0": 0.55 },
  90: { "5.0": 0.67, "5.5": 0.65, "6.0": 0.63, "6.5": 0.61, "7.0": 0.59 },
};

function getPLF(age: number, rate: string, table: typeof HECM_PLF_TABLE): number {
  const ages = Object.keys(table).map(Number).sort((a, b) => a - b);
  let closestAge = ages[0];
  for (const a of ages) {
    if (a <= age) closestAge = a;
  }
  return table[closestAge]?.[rate] || 0.45;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function HECMCalculator() {
  // Inputs
  const [age, setAge] = useState<number>(72);
  const [homeValue, setHomeValue] = useState<number>(750000);
  const [mortgageBalance, setMortgageBalance] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<string>("6.0");
  const [spouseAge, setSpouseAge] = useState<number>(0);
  const [hasSpouse, setHasSpouse] = useState<boolean>(false);

  // 2024 HECM Lending Limit
  const HECM_LIMIT_2024 = 1149825;

  // Calculations
  const calculations = useMemo(() => {
    // Use younger borrower's age for PLF if spouse exists
    const effectiveAge = hasSpouse && spouseAge > 0 ? Math.min(age, spouseAge) : age;
    const rate = parseFloat(interestRate) / 100;

    // HECM Calculation
    const hecmAssessedValue = Math.min(homeValue, HECM_LIMIT_2024);
    const hecmPLF = getPLF(effectiveAge, interestRate, HECM_PLF_TABLE);
    const hecmPrincipalLimit = hecmAssessedValue * hecmPLF;

    // HECM Costs
    const hecmOriginationFee = Math.min(Math.max(2500, hecmAssessedValue * 0.02), 6000);
    const hecmUpfrontMIP = hecmAssessedValue * 0.02; // 2% upfront
    const hecmOtherCosts = 3500;
    const hecmTotalCosts = hecmOriginationFee + hecmUpfrontMIP + hecmOtherCosts;
    const hecmProceeds = Math.max(0, hecmPrincipalLimit - mortgageBalance - hecmTotalCosts);

    // Annual MIP (0.5% of outstanding balance)
    const hecmAnnualMIP = hecmProceeds * 0.005;

    // Proprietary Reverse Mortgage Calculation (for comparison)
    const proprietaryPLF = getPLF(effectiveAge, interestRate, PROPRIETARY_PLF_TABLE);
    const proprietaryPrincipalLimit = homeValue * proprietaryPLF; // Uses full home value
    const proprietaryOriginationFee = homeValue * 0.02; // Typically higher
    const proprietaryOtherCosts = 5000;
    const proprietaryTotalCosts = proprietaryOriginationFee + proprietaryOtherCosts; // No MIP
    const proprietaryProceeds = Math.max(0, proprietaryPrincipalLimit - mortgageBalance - proprietaryTotalCosts);

    // Determine which is better
    const hecmIsBetter = hecmProceeds >= proprietaryProceeds;
    const exceedsHECMLimit = homeValue > HECM_LIMIT_2024;

    // 10-year projection for both
    const hecmProjection: { year: number; balance: number; mipPaid: number }[] = [];
    const proprietaryProjection: { year: number; balance: number }[] = [];

    let hecmBalance = mortgageBalance + hecmTotalCosts + hecmProceeds;
    let proprietaryBalance = mortgageBalance + proprietaryTotalCosts + proprietaryProceeds;
    let totalMipPaid = 0;

    for (let year = 0; year <= 15; year++) {
      totalMipPaid += hecmBalance * 0.005;
      hecmProjection.push({
        year,
        balance: hecmBalance,
        mipPaid: totalMipPaid,
      });
      proprietaryProjection.push({
        year,
        balance: proprietaryBalance,
      });
      hecmBalance = hecmBalance * (1 + rate + 0.005); // Rate + annual MIP
      proprietaryBalance = proprietaryBalance * (1 + rate);
    }

    return {
      effectiveAge,
      hecmAssessedValue,
      hecmPLF,
      hecmPrincipalLimit,
      hecmOriginationFee,
      hecmUpfrontMIP,
      hecmTotalCosts,
      hecmProceeds,
      hecmAnnualMIP,
      proprietaryPLF,
      proprietaryPrincipalLimit,
      proprietaryTotalCosts,
      proprietaryProceeds,
      hecmIsBetter,
      exceedsHECMLimit,
      hecmProjection,
      proprietaryProjection,
      HECM_LIMIT_2024,
    };
  }, [age, homeValue, mortgageBalance, interestRate, spouseAge, hasSpouse, HECM_LIMIT_2024]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
          <Shield className="h-4 w-4" />
          FHA-Insured HECM Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
          HECM Calculator 2026
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate your Home Equity Conversion Mortgage (HECM) proceeds and compare to proprietary reverse mortgages for high-value homes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Borrower Info */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                <Calendar className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold">Borrower Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your Age: <span className="text-slate-900 font-semibold">{age}</span>
                </label>
                <input
                  type="range"
                  min="62"
                  max="95"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <input
                  type="checkbox"
                  id="hasSpouse"
                  checked={hasSpouse}
                  onChange={(e) => setHasSpouse(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500"
                />
                <label htmlFor="hasSpouse" className="text-sm text-slate-600">
                  Include spouse/co-borrower (uses younger age for PLF)
                </label>
              </div>

              {hasSpouse && (
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Spouse Age: <span className="text-slate-900 font-semibold">{spouseAge || "Enter age"}</span>
                  </label>
                  <input
                    type="number"
                    value={spouseAge || ""}
                    onChange={(e) => setSpouseAge(Number(e.target.value))}
                    placeholder="Spouse's age (62+)"
                    min="62"
                    max="100"
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Home Information */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Home className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Home Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Home Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={homeValue}
                    onChange={(e) => setHomeValue(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-emerald-500"
                    min="100000"
                    step="25000"
                  />
                </div>
                {calculations.exceedsHECMLimit && (
                  <p className="text-[#B22234] text-xs mt-2 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Your home exceeds the HECM limit of ${formatNumber(HECM_LIMIT_2024)}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Current Mortgage Balance
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={mortgageBalance}
                    onChange={(e) => setMortgageBalance(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-emerald-500"
                    min="0"
                    step="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Expected Interest Rate
                </label>
                <select
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full bg-slate-100 border border-slate-700 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500"
                >
                  <option value="5.0">5.0%</option>
                  <option value="5.5">5.5%</option>
                  <option value="6.0">6.0%</option>
                  <option value="6.5">6.5%</option>
                  <option value="7.0">7.0%</option>
                </select>
              </div>
            </div>
          </div>

          {/* HECM Limit Info */}
          <div className="bg-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-semibold text-emerald-400">2024 HECM Lending Limit</h3>
            </div>
            <div className="text-3xl font-bold text-[#000080] mb-2">
              ${formatNumber(HECM_LIMIT_2024)}
            </div>
            <p className="text-slate-600 text-sm">
              The maximum home value used to calculate HECM proceeds. Homes worth more may benefit from proprietary reverse mortgages.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* HECM Results */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-400" />
                <h3 className="text-lg font-semibold">HECM (FHA-Insured)</h3>
              </div>
              {calculations.hecmIsBetter && !calculations.exceedsHECMLimit && (
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                  RECOMMENDED
                </span>
              )}
            </div>

            <div className="text-4xl font-bold text-emerald-400 mb-4">
              {formatCurrency(calculations.hecmProceeds)}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Assessed Value (max ${formatNumber(HECM_LIMIT_2024)})</span>
                <span className="text-slate-900">{formatCurrency(calculations.hecmAssessedValue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">PLF (Age {calculations.effectiveAge})</span>
                <span className="text-slate-900">{(calculations.hecmPLF * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Principal Limit</span>
                <span className="text-slate-900">{formatCurrency(calculations.hecmPrincipalLimit)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-500">Origination Fee</span>
                <span className="text-orange-400">-{formatCurrency(calculations.hecmOriginationFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Upfront MIP (2%)</span>
                <span className="text-orange-400">-{formatCurrency(calculations.hecmUpfrontMIP)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Other Costs</span>
                <span className="text-orange-400">-$3,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mortgage Payoff</span>
                <span className="text-orange-400">-{formatCurrency(mortgageBalance)}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Annual MIP (ongoing)</span>
                <span className="text-[#B22234]">0.5% of balance/year</span>
              </div>
            </div>
          </div>

          {/* Proprietary Results */}
          <div className={`bg-slate-50 backdrop-blur-sm rounded-xl p-6 border ${
            !calculations.hecmIsBetter || calculations.exceedsHECMLimit
              ? "border-[#B22234]/30"
              : "border-slate-200"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-semibold">Proprietary Reverse Mortgage</h3>
              </div>
              {(!calculations.hecmIsBetter || calculations.exceedsHECMLimit) && (
                <span className="px-2 py-1 bg-[#B22234]/10 text-[#B22234] text-xs font-semibold rounded-full">
                  CONSIDER
                </span>
              )}
            </div>

            <div className="text-4xl font-bold text-purple-400 mb-4">
              {formatCurrency(calculations.proprietaryProceeds)}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Full Home Value Used</span>
                <span className="text-slate-900">{formatCurrency(homeValue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">PLF (Typically Lower)</span>
                <span className="text-slate-900">{(calculations.proprietaryPLF * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Principal Limit</span>
                <span className="text-slate-900">{formatCurrency(calculations.proprietaryPrincipalLimit)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-500">Total Costs</span>
                <span className="text-orange-400">-{formatCurrency(calculations.proprietaryTotalCosts)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mortgage Payoff</span>
                <span className="text-orange-400">-{formatCurrency(mortgageBalance)}</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">No Annual MIP!</span>
                <span className="text-emerald-400">Saves ~${formatNumber(Math.round(calculations.hecmAnnualMIP))}/year</span>
              </div>
            </div>
          </div>

          {/* Comparison Summary */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-5 w-5 text-[#B22234]" />
              <h3 className="text-lg font-semibold">HECM vs Proprietary</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500">Initial Proceeds</span>
                <div className="flex items-center gap-2">
                  {calculations.hecmProceeds > calculations.proprietaryProceeds ? (
                    <>
                      <span className="text-emerald-400 font-semibold">HECM</span>
                      <span className="text-emerald-400">+{formatCurrency(calculations.hecmProceeds - calculations.proprietaryProceeds)}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-purple-400 font-semibold">Proprietary</span>
                      <span className="text-purple-400">+{formatCurrency(calculations.proprietaryProceeds - calculations.hecmProceeds)}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500">Balance at Year 10</span>
                <div className="flex items-center gap-2">
                  {calculations.hecmProjection[10].balance < calculations.proprietaryProjection[10].balance ? (
                    <>
                      <span className="text-emerald-400 font-semibold">HECM</span>
                      <span className="text-emerald-400">Lower</span>
                    </>
                  ) : (
                    <>
                      <span className="text-purple-400 font-semibold">Proprietary</span>
                      <span className="text-purple-400">Lower</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500">FHA Insurance</span>
                <div className="flex gap-4">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> HECM
                  </span>
                  <span className="text-red-600 flex items-center gap-1">
                    <XCircle className="h-4 w-4" /> Proprietary
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Projection Comparison */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">15-Year Balance Projection</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 text-left text-slate-500">Year</th>
                  <th className="py-2 text-right text-emerald-400">HECM Balance</th>
                  <th className="py-2 text-right text-purple-400">Proprietary Balance</th>
                  <th className="py-2 text-right text-[#B22234]">MIP Paid (HECM)</th>
                </tr>
              </thead>
              <tbody>
                {calculations.hecmProjection.filter((_, i) => i % 3 === 0 || i === 10 || i === 15).map((proj, idx) => (
                  <tr key={proj.year} className={idx % 2 === 0 ? "bg-slate-50" : ""}>
                    <td className="py-2 text-slate-600">{proj.year}</td>
                    <td className="py-2 text-right text-emerald-400">{formatCurrency(proj.balance)}</td>
                    <td className="py-2 text-right text-purple-400">
                      {formatCurrency(calculations.proprietaryProjection[proj.year].balance)}
                    </td>
                    <td className="py-2 text-right text-[#B22234]">{formatCurrency(proj.mipPaid)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            HECM balance includes annual MIP of 0.5%. Proprietary has no ongoing MIP but may have higher rates.
          </p>
        </div>
      </div>

      {/* HECM vs Proprietary Features */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" /> HECM Advantages
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>FHA-insured - government guarantees you receive your funds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Non-recourse guarantee - never owe more than home value</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Higher PLFs (more proceeds) for most homes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Line of credit growth feature</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Required HUD counseling protects borrowers</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5" /> Proprietary Advantages
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>No HECM limit - access equity on high-value homes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>No annual MIP - lower ongoing costs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Potentially faster closing process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>May accept condos that don&apos;t meet FHA requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Flexibility in property types</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold IRA Alternative */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#B22234]/5 backdrop-blur-sm rounded-xl p-8 border border-[#B22234]/30">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protect Your Home, Diversify Your Retirement</h2>
          </div>

          <p className="text-slate-500 mb-6">
            A HECM can provide needed cash flow, but compound interest and MIP charges erode your home equity over time.
            Before tapping your home, consider whether a Gold IRA could meet your retirement income needs while preserving
            your home for your heirs.
          </p>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="hecm-calculator"
            subheadline="Explore how Gold IRA diversification can supplement retirement income without risking your home equity."
          />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Important Disclaimer</h3>
              <p className="text-slate-600 text-sm">
                This calculator provides estimates for educational purposes only. Actual HECM and proprietary reverse
                mortgage terms vary by lender, location, and individual circumstances. PLF tables are approximate and
                change based on HUD guidelines. This is not financial advice. Consult a HUD-approved counselor before
                applying for any reverse mortgage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
