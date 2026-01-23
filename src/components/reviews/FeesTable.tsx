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
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 font-semibold text-slate-900">
              Company
            </th>
            <th className="text-center py-3 px-4 font-semibold text-slate-900">
              Setup Fee
            </th>
            <th className="text-center py-3 px-4 font-semibold text-slate-900">
              Annual Fee
            </th>
            <th className="text-center py-3 px-4 font-semibold text-slate-900">
              Storage Fee
            </th>
            {showTotal && (
              <th className="text-center py-3 px-4 font-semibold text-slate-900">
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
                  "border-b border-slate-100 transition-colors",
                  isHighlighted
                    ? "bg-amber-50"
                    : "hover:bg-slate-50"
                )}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {isHighlighted && (
                      <span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded font-semibold">
                        #1
                      </span>
                    )}
                    <span className={cn(
                      "font-medium",
                      isHighlighted ? "text-amber-900" : "text-slate-900"
                    )}>
                      {company.name}
                    </span>
                  </div>
                </td>
                <td className="text-center py-3 px-4">
                  {company.fees.setup === 0 ? (
                    <span className="text-green-600 font-semibold">Free</span>
                  ) : (
                    <span className="text-slate-700">${company.fees.setup}</span>
                  )}
                </td>
                <td className="text-center py-3 px-4 text-slate-700">
                  ${company.fees.annual}
                </td>
                <td className="text-center py-3 px-4 text-slate-700">
                  ${company.fees.storage}
                </td>
                {showTotal && (
                  <td className="text-center py-3 px-4">
                    <span className={cn(
                      "font-bold",
                      isHighlighted ? "text-amber-900" : "text-slate-900"
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
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
        <h3 className="font-bold text-slate-900">Fee Structure</h3>
        <p className="text-sm text-slate-600">All fees for {company.name}</p>
      </div>

      <div className="divide-y divide-slate-100">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-slate-900">Setup Fee</div>
            <div className="text-sm text-slate-500">One-time account opening fee</div>
          </div>
          <div className="text-right">
            {company.fees.setup === 0 ? (
              <span className="text-green-600 font-bold text-lg">Free</span>
            ) : (
              <span className="font-bold text-lg text-slate-900">${company.fees.setup}</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-slate-900">Annual Maintenance Fee</div>
            <div className="text-sm text-slate-500">Yearly account administration</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-slate-900">${company.fees.annual}</span>
            <span className="text-slate-500 text-sm">/year</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-slate-900">Storage Fee</div>
            <div className="text-sm text-slate-500">Secure depository storage</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-slate-900">${company.fees.storage}</span>
            <span className="text-slate-500 text-sm">/year</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4 bg-slate-50">
          <div>
            <div className="font-bold text-slate-900">First Year Total</div>
            <div className="text-sm text-slate-500">Setup + Annual + Storage</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-2xl text-slate-900">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
