"use client";

import { Star, Award, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  rating: number;
  minimum: string;
  fees: string;
  highlight?: string;
  isWinner?: boolean;
}

interface LPComparisonTableProps {
  headline?: string;
  companies?: Company[];
  className?: string;
}

const defaultCompanies: Company[] = [
  {
    name: "Augusta Precious Metals",
    rating: 4.9,
    minimum: "$50K",
    fees: "$180/yr",
    highlight: "Best Overall",
    isWinner: true,
  },
  {
    name: "Noble Gold",
    rating: 4.7,
    minimum: "$2K",
    fees: "$225/yr",
    highlight: "Low Min",
  },
  {
    name: "Goldco",
    rating: 4.6,
    minimum: "$25K",
    fees: "Varies",
    highlight: "Popular",
  },
  {
    name: "Birch Gold",
    rating: 4.5,
    minimum: "$10K",
    fees: "$200/yr",
    highlight: "Flat Fee",
  },
];

export function LPComparisonTable({
  headline = "Quick Company Comparison",
  companies = defaultCompanies,
  className,
}: LPComparisonTableProps) {
  return (
    <section className={cn("bg-slate-900 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          {headline}
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                  Company
                </th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-slate-300">
                  Rating
                </th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-slate-300">
                  Minimum
                </th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-slate-300">
                  Annual Fees
                </th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-slate-300">
                  Highlight
                </th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr
                  key={company.name}
                  className={cn(
                    "border-b border-white/5 transition-colors",
                    company.isWinner
                      ? "bg-amber-500/10 hover:bg-amber-500/15"
                      : "hover:bg-white/5"
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {company.isWinner && (
                        <Award className="h-5 w-5 text-amber-400 flex-shrink-0" />
                      )}
                      <span
                        className={cn(
                          "font-semibold",
                          company.isWinner ? "text-amber-400" : "text-white"
                        )}
                      >
                        {company.name}
                      </span>
                    </div>
                  </td>
                  <td className="text-center px-4 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      <span className="text-white font-medium">
                        {company.rating}
                      </span>
                    </div>
                  </td>
                  <td className="text-center px-4 py-4 text-slate-300">
                    {company.minimum}
                  </td>
                  <td className="text-center px-4 py-4 text-slate-300">
                    {company.fees}
                  </td>
                  <td className="text-center px-4 py-4">
                    {company.isWinner ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                        <CheckCircle className="h-3.5 w-3.5" />
                        {company.highlight}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-sm">
                        {company.highlight}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={cn(
                "rounded-xl border p-4",
                company.isWinner
                  ? "border-amber-400/30 bg-amber-500/10"
                  : "border-white/10 bg-white/5"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {company.isWinner && (
                    <Award className="h-5 w-5 text-amber-400" />
                  )}
                  <span
                    className={cn(
                      "font-semibold",
                      company.isWinner ? "text-amber-400" : "text-white"
                    )}
                  >
                    {company.name}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span className="text-white font-medium">{company.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="text-slate-400 block">Minimum</span>
                  <span className="text-white font-medium">{company.minimum}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Annual Fees</span>
                  <span className="text-white font-medium">{company.fees}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Highlight</span>
                  {company.isWinner ? (
                    <span className="text-amber-400 font-medium">
                      {company.highlight}
                    </span>
                  ) : (
                    <span className="text-slate-300">{company.highlight}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Augusta callout */}
        <div className="mt-8 p-6 rounded-xl border border-amber-400/20 bg-amber-500/5">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            Why Augusta is Our #1 Pick
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Zero BBB complaints in company history",
              "Transparent silver pricing (no hidden markups)",
              "Education-first approach - no pushy sales",
              "Lifetime dedicated customer service",
              "Free silver IRA educational web conference",
              "A+ BBB rating with 4.9/5 customer reviews",
            ].map((reason, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
