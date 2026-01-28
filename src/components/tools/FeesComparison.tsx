"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  DollarSign,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  Star,
} from "lucide-react";

interface CompanyFees {
  id: string;
  name: string;
  rating: number;
  minimum: number;
  setupFee: { amount: number | string; waived?: boolean };
  annualFee: { amount: number; type: "flat" | "scaled" };
  storageFee: { amount: number; type: "flat" | "percentage"; percentage?: number };
  wireFee: number;
  sellingFee: string;
  buybackSpread: string;
  promoNote?: string;
  reviewUrl: string;
}

const companies: CompanyFees[] = [
  {
    id: "augusta",
    name: "Augusta Precious Metals",
    rating: 4.9,
    minimum: 50000,
    setupFee: { amount: 0, waived: true },
    annualFee: { amount: 0, type: "flat" },
    storageFee: { amount: 150, type: "flat" },
    wireFee: 0,
    sellingFee: "None",
    buybackSpread: "Competitive (at current market)",
    promoNote: "Fees waived for first year on qualifying accounts",
    reviewUrl: "/reviews/augusta-precious-metals",
  },
  {
    id: "goldco",
    name: "Goldco",
    rating: 4.8,
    minimum: 25000,
    setupFee: { amount: 50 },
    annualFee: { amount: 80, type: "flat" },
    storageFee: { amount: 150, type: "flat" },
    wireFee: 30,
    sellingFee: "None",
    buybackSpread: "Good buyback guarantee",
    promoNote: "May waive fees for larger accounts",
    reviewUrl: "/reviews/goldco",
  },
  {
    id: "american-hartford",
    name: "American Hartford Gold",
    rating: 4.7,
    minimum: 10000,
    setupFee: { amount: 0, waived: true },
    annualFee: { amount: 75, type: "flat" },
    storageFee: { amount: 100, type: "flat" },
    wireFee: 30,
    sellingFee: "None",
    buybackSpread: "Price match guarantee",
    promoNote: "Free silver on qualifying orders",
    reviewUrl: "/reviews/american-hartford-gold",
  },
  {
    id: "birch",
    name: "Birch Gold Group",
    rating: 4.6,
    minimum: 10000,
    setupFee: { amount: 50 },
    annualFee: { amount: 100, type: "flat" },
    storageFee: { amount: 150, type: "flat" },
    wireFee: 30,
    sellingFee: "None",
    buybackSpread: "Competitive",
    reviewUrl: "/reviews/birch-gold-group",
  },
  {
    id: "noble",
    name: "Noble Gold",
    rating: 4.5,
    minimum: 20000,
    setupFee: { amount: 80 },
    annualFee: { amount: 80, type: "flat" },
    storageFee: { amount: 150, type: "flat" },
    wireFee: 30,
    sellingFee: "None",
    buybackSpread: "Standard market rates",
    reviewUrl: "/reviews/noble-gold",
  },
];

export function FeesComparison() {
  const [accountSize, setAccountSize] = useState(100000);
  const [yearsHeld, setYearsHeld] = useState(10);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([
    "augusta",
    "goldco",
    "american-hartford",
  ]);

  const toggleCompany = (id: string) => {
    if (selectedCompanies.includes(id)) {
      if (selectedCompanies.length > 1) {
        setSelectedCompanies(selectedCompanies.filter((c) => c !== id));
      }
    } else {
      setSelectedCompanies([...selectedCompanies, id]);
    }
  };

  const calculations = useMemo(() => {
    return companies
      .filter((c) => selectedCompanies.includes(c.id))
      .map((company) => {
        const setupFee =
          typeof company.setupFee.amount === "number"
            ? company.setupFee.amount
            : 0;
        const annualFeePerYear = company.annualFee.amount;
        const storageFeePerYear =
          company.storageFee.type === "flat"
            ? company.storageFee.amount
            : (accountSize * (company.storageFee.percentage || 0.5)) / 100;
        const wireFee = company.wireFee;

        const yearOneFees = setupFee + annualFeePerYear + storageFeePerYear + wireFee;
        const subsequentYearFees = annualFeePerYear + storageFeePerYear;
        const totalFees =
          yearOneFees + subsequentYearFees * (yearsHeld - 1);
        const percentOfAccount = (totalFees / accountSize) * 100;
        const avgAnnualFee = totalFees / yearsHeld;

        return {
          company,
          yearOneFees,
          subsequentYearFees,
          totalFees,
          percentOfAccount,
          avgAnnualFee,
        };
      })
      .sort((a, b) => a.totalFees - b.totalFees);
  }, [accountSize, yearsHeld, selectedCompanies]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const lowestTotal = calculations[0]?.totalFees || 0;

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <Scale className="h-4 w-4" />
              FEES COMPARISON TOOL
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              Gold IRA Fees Comparison Tool
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See the true cost of each Gold IRA company over time. Adjust your
              account size and holding period to find the best value.
            </p>
          </div>

          {/* Input Controls */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Account Size */}
              <div>
                <label className="block text-slate-600 text-sm mb-2">
                  Account Size: <span className="text-[#B22234] font-bold">{formatCurrency(accountSize)}</span>
                </label>
                <input
                  type="range"
                  min={25000}
                  max={500000}
                  step={5000}
                  value={accountSize}
                  onChange={(e) => setAccountSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$25K</span>
                  <span>$250K</span>
                  <span>$500K</span>
                </div>
              </div>

              {/* Years Held */}
              <div>
                <label className="block text-slate-600 text-sm mb-2">
                  Years Held: <span className="text-[#B22234] font-bold">{yearsHeld} years</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={yearsHeld}
                  onChange={(e) => setYearsHeld(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B22234]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 year</span>
                  <span>15 years</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>

            {/* Company Selection */}
            <div className="mt-6">
              <label className="block text-slate-600 text-sm mb-3">
                Select Companies to Compare:
              </label>
              <div className="flex flex-wrap gap-2">
                {companies.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => toggleCompany(company.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCompanies.includes(company.id)
                        ? "bg-[#B22234] text-white"
                        : "bg-slate-50 text-slate-500 hover:bg-white/10"
                    }`}
                  >
                    {company.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {calculations.map((calc, index) => {
              const isLowest = calc.totalFees === lowestTotal;
              return (
                <div
                  key={calc.company.id}
                  className={`bg-slate-50 border rounded-2xl p-6 ${
                    isLowest
                      ? "border-green-500/30 bg-green-500/5"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Company Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {isLowest && (
                          <span className="px-2 py-0.5 bg-green-500 text-slate-900 text-xs font-bold rounded">
                            LOWEST COST
                          </span>
                        )}
                        <h3 className="text-lg font-bold text-slate-900">
                          {calc.company.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[#B22234]">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm">{calc.company.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span>Min: {formatCurrency(calc.company.minimum)}</span>
                        <span>
                          Year 1: {formatCurrency(calc.yearOneFees)}
                        </span>
                        <span>
                          Annual: {formatCurrency(calc.subsequentYearFees)}
                        </span>
                      </div>
                      {calc.company.promoNote && (
                        <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4" />
                          {calc.company.promoNote}
                        </p>
                      )}
                    </div>

                    {/* Total Cost */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">
                        {formatCurrency(calc.totalFees)}
                      </div>
                      <div className="text-slate-600 text-sm">
                        over {yearsHeld} years
                      </div>
                      <div className="text-slate-500 text-xs">
                        ({calc.percentOfAccount.toFixed(2)}% of account)
                      </div>
                    </div>

                    {/* View Review */}
                    <Link
                      href={calc.company.reviewUrl}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-slate-900 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                      View Review
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fee Breakdown Table */}
          <div className="mt-12 bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Detailed Fee Breakdown
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-slate-500 font-medium">
                      Company
                    </th>
                    <th className="py-3 px-4 text-right text-slate-500 font-medium">
                      Setup Fee
                    </th>
                    <th className="py-3 px-4 text-right text-slate-500 font-medium">
                      Annual Fee
                    </th>
                    <th className="py-3 px-4 text-right text-slate-500 font-medium">
                      Storage Fee
                    </th>
                    <th className="py-3 px-4 text-right text-slate-500 font-medium">
                      Wire Fee
                    </th>
                    <th className="py-3 px-4 text-left text-slate-500 font-medium">
                      Buyback
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies
                    .filter((c) => selectedCompanies.includes(c.id))
                    .map((company) => (
                      <tr
                        key={company.id}
                        className="border-b border-slate-200 hover:bg-slate-50"
                      >
                        <td className="py-3 px-4 text-slate-900 font-medium">
                          {company.name}
                        </td>
                        <td className="py-3 px-4 text-right text-slate-600">
                          {company.setupFee.waived ? (
                            <span className="text-green-600">Waived</span>
                          ) : (
                            formatCurrency(company.setupFee.amount as number)
                          )}
                        </td>
                        <td className="py-3 px-4 text-right text-slate-600">
                          {company.annualFee.amount === 0 ? (
                            <span className="text-green-600">$0</span>
                          ) : (
                            formatCurrency(company.annualFee.amount)
                          )}
                        </td>
                        <td className="py-3 px-4 text-right text-slate-600">
                          {formatCurrency(company.storageFee.amount)}/yr
                        </td>
                        <td className="py-3 px-4 text-right text-slate-600">
                          {company.wireFee === 0 ? (
                            <span className="text-green-600">$0</span>
                          ) : (
                            formatCurrency(company.wireFee)
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-500 text-xs">
                          {company.buybackSpread}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-[#B22234]/10 border border-[#B22234]/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-slate-900 font-semibold mb-2">
                  Understanding Gold IRA Fees
                </h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>
                    <strong className="text-slate-600">Setup fees</strong> are one-time charges
                    when opening your account. Many companies waive these for larger accounts.
                  </li>
                  <li>
                    <strong className="text-slate-600">Annual fees</strong> cover account
                    administration and are charged yearly by the custodian.
                  </li>
                  <li>
                    <strong className="text-slate-600">Storage fees</strong> pay for secure vault
                    storage and insurance of your physical metals.
                  </li>
                  <li>
                    <strong className="text-slate-600">Premiums</strong> (not shown) are added to
                    the spot price when purchasing gold. Compare before buying.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
