"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Calculator,
  DollarSign,
  Briefcase,
  AlertTriangle,
  TrendingDown,
  Info,
  CheckCircle2,
  Shield,
  Building,
  Users,
} from "lucide-react";

// WEP Maximum Reduction by Year
// The maximum WEP reduction is the lesser of:
// 1) One-half of the pension from non-covered employment, or
// 2) A maximum dollar amount that depends on years of substantial earnings
const WEP_MAX_REDUCTION_2024 = 558; // 2024 maximum
const WEP_MAX_REDUCTION_2025 = 578; // 2025 estimated
const WEP_MAX_REDUCTION_2026 = 598; // 2026 estimated

// Substantial Earnings Amounts by Year (for determining WEP reduction)
const SUBSTANTIAL_EARNINGS: Record<number, number> = {
  2024: 31275,
  2023: 29700,
  2022: 27300,
  2021: 26550,
  2020: 26250,
  2019: 24675,
  2018: 23850,
  2017: 23625,
  2016: 22050,
  2015: 22050,
  // Earlier years would continue...
};

// WEP Reduction percentage based on years of substantial earnings
// 30+ years = 0% reduction (WEP eliminated)
// 21-29 years = graduated reduction
// 20 years or less = full reduction
function getWEPPercentage(yearsOfSubstantialEarnings: number): number {
  if (yearsOfSubstantialEarnings >= 30) return 0;
  if (yearsOfSubstantialEarnings <= 20) return 100;

  // Between 21-29 years: reduction decreases by 5% per year over 20
  const yearsOver20 = yearsOfSubstantialEarnings - 20;
  return 100 - (yearsOver20 * 5); // 21 yrs = 95%, 22 = 90%, ... 29 = 55%
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function WEPCalculator() {
  // Inputs
  const [yearsSubstantialEarnings, setYearsSubstantialEarnings] = useState<number>(15);
  const [estimatedPIA, setEstimatedPIA] = useState<number>(2000);
  const [nonCoveredPension, setNonCoveredPension] = useState<number>(2500);
  const [yearOfEligibility, setYearOfEligibility] = useState<number>(2026);
  const [showGPO, setShowGPO] = useState<boolean>(false);
  const [spouseBenefit, setSpouseBenefit] = useState<number>(1200);

  const calculations = useMemo(() => {
    // Get WEP maximum for the eligibility year
    let wepMaximum: number;
    if (yearOfEligibility <= 2024) {
      wepMaximum = WEP_MAX_REDUCTION_2024;
    } else if (yearOfEligibility === 2025) {
      wepMaximum = WEP_MAX_REDUCTION_2025;
    } else {
      wepMaximum = WEP_MAX_REDUCTION_2026;
    }

    // Calculate WEP percentage based on years of substantial earnings
    const wepPercentage = getWEPPercentage(yearsSubstantialEarnings);

    // Calculate the preliminary WEP reduction
    const preliminaryReduction = wepMaximum * (wepPercentage / 100);

    // WEP reduction cannot exceed 50% of the non-covered pension
    const pensionLimit = nonCoveredPension * 0.5;

    // Final WEP reduction is the lesser of the preliminary reduction and pension limit
    const wepReduction = Math.min(preliminaryReduction, pensionLimit);

    // Adjusted Social Security benefit
    const adjustedBenefit = Math.max(0, estimatedPIA - wepReduction);

    // Calculate impact of working additional years
    const additionalYearsImpact = [];
    for (let additionalYears = 1; additionalYears <= 15; additionalYears++) {
      const totalYears = yearsSubstantialEarnings + additionalYears;
      const futureWepPercentage = getWEPPercentage(totalYears);
      const futureReduction = Math.min(wepMaximum * (futureWepPercentage / 100), pensionLimit);
      const futureBenefit = Math.max(0, estimatedPIA - futureReduction);
      const monthlyGain = futureBenefit - adjustedBenefit;

      additionalYearsImpact.push({
        years: additionalYears,
        totalYears,
        wepPercentage: futureWepPercentage,
        reduction: futureReduction,
        benefit: futureBenefit,
        monthlyGain,
        annualGain: monthlyGain * 12,
        wepEliminated: totalYears >= 30,
      });
    }

    // GPO Calculation (Government Pension Offset)
    // GPO reduces spousal/survivor benefits by 2/3 of the government pension
    const gpoReduction = nonCoveredPension * (2 / 3);
    const adjustedSpouseBenefit = Math.max(0, spouseBenefit - gpoReduction);
    const spouseBenefitLost = spouseBenefit - adjustedSpouseBenefit;

    // Total monthly income impact
    const totalMonthlyLoss = wepReduction + (showGPO ? spouseBenefitLost : 0);

    // Lifetime impact (assuming 20 years of benefits)
    const lifetimeLoss = totalMonthlyLoss * 12 * 20;

    // Calculate years until WEP elimination
    const yearsToEliminate = Math.max(0, 30 - yearsSubstantialEarnings);

    return {
      wepMaximum,
      wepPercentage,
      preliminaryReduction,
      pensionLimit,
      wepReduction,
      estimatedPIA,
      adjustedBenefit,
      additionalYearsImpact,
      gpoReduction,
      adjustedSpouseBenefit,
      spouseBenefitLost,
      totalMonthlyLoss,
      lifetimeLoss,
      yearsToEliminate,
      isWEPEliminated: yearsSubstantialEarnings >= 30,
    };
  }, [
    yearsSubstantialEarnings,
    estimatedPIA,
    nonCoveredPension,
    yearOfEligibility,
    showGPO,
    spouseBenefit,
  ]);

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
          <Building className="h-4 w-4" />
          WEP Calculator
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          WEP Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate how the Windfall Elimination Provision affects your Social Security benefits
          if you have a pension from non-covered employment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Earnings History */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Your Earnings History</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  Years of Substantial Earnings: {yearsSubstantialEarnings}
                  <div className="group relative">
                    <Info className="h-4 w-4 text-slate-500 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-slate-100 text-xs text-slate-600 rounded-lg p-3 border border-slate-700 z-10">
                      Years where you paid Social Security taxes on earnings above the substantial earnings threshold (about $31,275 in 2024). 30+ years eliminates WEP entirely.
                    </div>
                  </div>
                </label>
                <input
                  type="range"
                  min={0}
                  max={40}
                  value={yearsSubstantialEarnings}
                  onChange={(e) => setYearsSubstantialEarnings(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0 years</span>
                  <span className="text-green-600 font-medium">30+ eliminates WEP</span>
                  <span>40 years</span>
                </div>
                {yearsSubstantialEarnings >= 30 && (
                  <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    WEP does not apply with 30+ years of substantial earnings!
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Your Estimated PIA (Primary Insurance Amount)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={estimatedPIA}
                    onChange={(e) => setEstimatedPIA(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-blue-500"
                    min="0"
                    step="100"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  This is your full Social Security benefit at full retirement age (find on ssa.gov)
                </p>
              </div>
            </div>
          </div>

          {/* Non-Covered Pension */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <Building className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold">Non-Covered Pension</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Monthly Non-Covered Pension Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    value={nonCoveredPension}
                    onChange={(e) => setNonCoveredPension(Number(e.target.value))}
                    className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-orange-500"
                    min="0"
                    step="100"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Pension from government, railroad, foreign, or other non-Social Security covered work
                </p>
              </div>

              <div>
                <label className="text-sm text-slate-500 mb-2 block">
                  Year of Social Security Eligibility
                </label>
                <select
                  value={yearOfEligibility}
                  onChange={(e) => setYearOfEligibility(Number(e.target.value))}
                  className="w-full bg-slate-100 border border-slate-700 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-orange-500"
                >
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                </select>
              </div>
            </div>
          </div>

          {/* GPO Section */}
          <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <Users className="h-5 w-5 text-purple-700" />
                </div>
                <h3 className="text-lg font-semibold">GPO (Spousal/Survivor Benefits)</h3>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showGPO}
                  onChange={(e) => setShowGPO(e.target.checked)}
                  className="w-5 h-5 rounded accent-purple-500"
                />
                <span className="text-sm text-slate-500">Include GPO</span>
              </label>
            </div>

            {showGPO && (
              <div className="space-y-4">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                  <p className="text-sm text-purple-800">
                    <strong>Government Pension Offset (GPO)</strong> reduces spousal or survivor
                    Social Security benefits by 2/3 of your government pension.
                  </p>
                </div>

                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Expected Spousal/Survivor Benefit (before GPO)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="number"
                      value={spouseBenefit}
                      onChange={(e) => setSpouseBenefit(Number(e.target.value))}
                      className="w-full bg-slate-100 border border-slate-700 rounded-lg px-10 py-3 text-slate-900 focus:outline-none focus:border-purple-500"
                      min="0"
                      step="100"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* WEP Impact Summary */}
          <div className={`bg-gradient-to-br ${
            calculations.isWEPEliminated
              ? "from-green-500/20 to-emerald-500/20 border-green-500/30"
              : "from-red-500/20 to-orange-500/20 border-red-500/30"
          } backdrop-blur-sm rounded-xl p-8 border`}>
            <div className="flex items-center gap-3 mb-6">
              {calculations.isWEPEliminated ? (
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              ) : (
                <TrendingDown className="h-10 w-10 text-red-600" />
              )}
              <div>
                <h3 className="text-sm text-slate-500">
                  {calculations.isWEPEliminated ? "WEP Status" : "WEP Reduction"}
                </h3>
                <div className={`text-3xl font-bold ${
                  calculations.isWEPEliminated ? "text-green-600" : "text-red-600"
                }`}>
                  {calculations.isWEPEliminated
                    ? "Eliminated!"
                    : `-${formatCurrency(calculations.wepReduction)}/mo`}
                </div>
              </div>
            </div>

            {!calculations.isWEPEliminated && (
              <div className="space-y-3 bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">Your PIA (before WEP)</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(calculations.estimatedPIA)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">WEP Reduction ({calculations.wepPercentage}%)</span>
                  <span className="font-semibold text-red-600">
                    -{formatCurrency(calculations.wepReduction)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                  <span className="text-slate-600 text-sm font-semibold">Adjusted Benefit</span>
                  <span className="font-bold text-slate-900 text-lg">
                    {formatCurrency(calculations.adjustedBenefit)}
                  </span>
                </div>
              </div>
            )}

            {!calculations.isWEPEliminated && (
              <div className="mt-4 text-xs text-slate-500">
                WEP Maximum ({yearOfEligibility}): {formatCurrency(calculations.wepMaximum)}/mo |
                50% Pension Limit: {formatCurrency(calculations.pensionLimit)}/mo
              </div>
            )}
          </div>

          {/* GPO Impact (if enabled) */}
          {showGPO && (
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-purple-700" />
                <h3 className="text-lg font-semibold">GPO Impact on Spousal Benefits</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">Spousal Benefit (before GPO)</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(spouseBenefit)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">GPO Reduction (2/3 of pension)</span>
                  <span className="font-semibold text-red-600">
                    -{formatCurrency(calculations.gpoReduction)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                  <span className="text-slate-600 text-sm">Adjusted Spousal Benefit</span>
                  <span className="font-bold text-purple-700">
                    {formatCurrency(calculations.adjustedSpouseBenefit)}
                  </span>
                </div>
              </div>

              {calculations.adjustedSpouseBenefit === 0 && (
                <div className="mt-4 bg-red-500/20 rounded-lg p-3">
                  <p className="text-red-800 text-sm">
                    <AlertTriangle className="inline h-4 w-4 mr-1" />
                    GPO completely eliminates your spousal/survivor benefit.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Total Impact */}
          {!calculations.isWEPEliminated && (
            <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-[#B22234]" />
                <h3 className="text-lg font-semibold">Total Financial Impact</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="text-slate-500">Monthly Loss</span>
                  <span className="text-xl font-bold text-red-600">
                    {formatCurrency(calculations.totalMonthlyLoss)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="text-slate-500">Annual Loss</span>
                  <span className="text-xl font-bold text-red-600">
                    {formatCurrency(calculations.totalMonthlyLoss * 12)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">20-Year Lifetime Loss</span>
                  <span className="text-xl font-bold text-red-600">
                    {formatCurrency(calculations.lifetimeLoss)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Impact of Additional Years */}
          {!calculations.isWEPEliminated && (
            <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-green-600" />
                Impact of Additional Years of Work
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-2 px-2 text-left text-slate-500">+Years</th>
                      <th className="py-2 px-2 text-right text-slate-500">Total</th>
                      <th className="py-2 px-2 text-right text-slate-500">WEP %</th>
                      <th className="py-2 px-2 text-right text-slate-500">Monthly Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.additionalYearsImpact.slice(0, 8).map((row, idx) => (
                      <tr
                        key={row.years}
                        className={`border-b border-slate-200 ${row.wepEliminated ? "bg-green-500/5" : ""}`}
                      >
                        <td className="py-2 px-2 text-slate-600">+{row.years}</td>
                        <td className="py-2 px-2 text-right text-slate-500">{row.totalYears} yrs</td>
                        <td className="py-2 px-2 text-right text-slate-500">
                          {row.wepEliminated ? (
                            <span className="text-green-600">0%</span>
                          ) : (
                            `${row.wepPercentage}%`
                          )}
                        </td>
                        <td className="py-2 px-2 text-right text-green-600 font-medium">
                          +{formatCurrency(row.monthlyGain)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-xs mt-3">
                Working {calculations.yearsToEliminate} more years with substantial earnings would eliminate WEP entirely.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Gold Bridge Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-bold">Protecting Your Retirement from WEP</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-[#B22234] font-semibold mb-2">Income Diversification</div>
              <p className="text-slate-600 text-sm">
                Government retirees affected by WEP should build additional retirement income sources.
                A Gold IRA provides tax-advantaged growth independent of Social Security.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Inflation Protection</div>
              <p className="text-slate-600 text-sm">
                With reduced Social Security benefits, protecting your purchasing power becomes critical.
                Gold historically maintains value during inflationary periods.
              </p>
            </div>

            <div>
              <div className="text-[#B22234] font-semibold mb-2">Legacy Planning</div>
              <p className="text-slate-600 text-sm">
                Unlike Social Security, a Gold IRA can be passed to heirs. Build a tangible asset
                portfolio that benefits your family for generations.
              </p>
            </div>
          </div>

          <AugustaCTA
            variant="inline"
            linkContext="default"
            trackSource="wep-calculator"
            subheadline="Government retirees affected by WEP often diversify retirement income with Gold IRAs. Our specialists can help you understand your options."
          />
        </div>
      </div>
    </Container>
  );
}
