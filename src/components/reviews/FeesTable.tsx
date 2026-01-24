// src/components/reviews/FeesTable.tsx
// P1-019: Fees comparison table component

import { Company } from "@/data/companies";
import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeesTableProps {
  companies: Company[];
  highlightCompany?: string;
  showTotal?: boolean;
}

export function FeesTable({
  companies,
  highlightCompany,
  showTotal = true,
}: FeesTableProps) {
  const calculateTotal = (company: Company) => {
    return company.fees.setup + company.fees.annual + company.fees.storage;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 px-4 font-semibold text-white">
              Company
            </th>
            <th className="text-center py-3 px-4 font-semibold text-white">
              Setup Fee
            </th>
            <th className="text-center py-3 px-4 font-semibold text-white">
              Annual Fee
            </th>
            <th className="text-center py-3 px-4 font-semibold text-white">
              Storage Fee
            </th>
            {showTotal && (
              <th className="text-center py-3 px-4 font-semibold text-white">
                Year 1 Total
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            const isHighlighted = company.slug === highlightCompany;
            const total = calculateTotal(company);

            return (
              <tr
                key={company.id}
                className={cn(
                  "border-b border-white/5 transition-colors",
                  isHighlighted
                    ? "bg-amber-500/10"
                    : "hover:bg-white/5"
                )}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {isHighlighted && (
                      <span className="text-xs bg-amber-500 text-slate-900 px-1.5 py-0.5 rounded font-semibold">
                        #1
                      </span>
                    )}
                    <span className={cn(
                      "font-medium",
                      isHighlighted ? "text-amber-400" : "text-white"
                    )}>
                      {company.name}
                    </span>
                  </div>
                </td>
                <td className="text-center py-3 px-4">
                  {company.fees.setup === 0 ? (
                    <span className="text-green-400 font-semibold">Free</span>
                  ) : (
                    <span className="text-slate-300">${company.fees.setup}</span>
                  )}
                </td>
                <td className="text-center py-3 px-4 text-slate-300">
                  ${company.fees.annual}
                </td>
                <td className="text-center py-3 px-4 text-slate-300">
                  ${company.fees.storage}
                </td>
                {showTotal && (
                  <td className="text-center py-3 px-4">
                    <span className={cn(
                      "font-bold",
                      isHighlighted ? "text-amber-400" : "text-white"
                    )}>
                      ${total}
                    </span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Single company fee breakdown
interface SingleCompanyFeesProps {
  company: Company;
}

export function SingleCompanyFees({ company }: SingleCompanyFeesProps) {
  const total = company.fees.setup + company.fees.annual + company.fees.storage;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      <div className="bg-slate-800/50 px-6 py-4 border-b border-white/10">
        <h3 className="font-bold text-white">Fee Structure</h3>
        <p className="text-sm text-slate-400">All fees for {company.name}</p>
      </div>

      <div className="divide-y divide-white/5">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-white">Setup Fee</div>
            <div className="text-sm text-slate-400">One-time account opening fee</div>
          </div>
          <div className="text-right">
            {company.fees.setup === 0 ? (
              <span className="text-green-400 font-bold text-lg">Free</span>
            ) : (
              <span className="font-bold text-lg text-white">${company.fees.setup}</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-white">Annual Maintenance Fee</div>
            <div className="text-sm text-slate-400">Yearly account administration</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-white">${company.fees.annual}</span>
            <span className="text-slate-400 text-sm">/year</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-white">Storage Fee</div>
            <div className="text-sm text-slate-400">Secure depository storage</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-white">${company.fees.storage}</span>
            <span className="text-slate-400 text-sm">/year</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4 bg-slate-800/50">
          <div>
            <div className="font-bold text-white">First Year Total</div>
            <div className="text-sm text-slate-400">Setup + Annual + Storage</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-2xl text-amber-400">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
