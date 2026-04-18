// src/components/reviews/FeesTable.tsx
// P1-019: Fees comparison table component - PATRIOT LIGHT THEME

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
          <tr className="border-b border-[#2A2D42]">
            <th className="text-left py-3 px-4 font-semibold text-[#F6F4EF]">
              Company
            </th>
            <th className="text-center py-3 px-4 font-semibold text-[#F6F4EF]">
              Setup Fee
            </th>
            <th className="text-center py-3 px-4 font-semibold text-[#F6F4EF]">
              Annual Fee
            </th>
            <th className="text-center py-3 px-4 font-semibold text-[#F6F4EF]">
              Storage Fee
            </th>
            {showTotal && (
              <th className="text-center py-3 px-4 font-semibold text-[#F6F4EF]">
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
                  "border-b border-[#2A2D42] transition-colors",
                  isHighlighted
                    ? "bg-blue-50"
                    : "hover:bg-[#121423]"
                )}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {isHighlighted && (
                      <span className="text-xs bg-[rgba(197,149,46,0.1)] text-white px-1.5 py-0.5 rounded font-semibold">
                        #1
                      </span>
                    )}
                    <span className={cn(
                      "font-medium",
                      isHighlighted ? "text-[#F6F4EF]" : "text-[#F6F4EF]"
                    )}>
                      {company.name}
                    </span>
                  </div>
                </td>
                <td className="text-center py-3 px-4">
                  {company.fees.setup === 0 ? (
                    <span className="text-green-600 font-semibold">Free</span>
                  ) : (
                    <span className="text-[#D0CCC4]">${company.fees.setup}</span>
                  )}
                </td>
                <td className="text-center py-3 px-4 text-[#D0CCC4]">
                  ${company.fees.annual}
                </td>
                <td className="text-center py-3 px-4 text-[#D0CCC4]">
                  ${company.fees.storage}
                </td>
                {showTotal && (
                  <td className="text-center py-3 px-4">
                    <span className={cn(
                      "font-bold",
                      isHighlighted ? "text-[#F6F4EF]" : "text-[#F6F4EF]"
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
    <div className="bg-[#161828] rounded-xl border border-[#2A2D42] overflow-hidden shadow-sm">
      <div className="bg-[#0C0D18] px-6 py-4 border-b border-[#2A2D42]">
        <h3 className="font-bold text-[#F6F4EF]">Fee Structure</h3>
        <p className="text-sm text-[#A8A39A]">All fees for {company.name}</p>
      </div>

      <div className="divide-y divide-[#2A2D42]">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-[#F6F4EF]">Setup Fee</div>
            <div className="text-sm text-[#A8A39A]">One-time account opening fee</div>
          </div>
          <div className="text-right">
            {company.fees.setup === 0 ? (
              <span className="text-green-600 font-bold text-lg">Free</span>
            ) : (
              <span className="font-bold text-lg text-[#F6F4EF]">${company.fees.setup}</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-[#F6F4EF]">Annual Maintenance Fee</div>
            <div className="text-sm text-[#A8A39A]">Yearly account administration</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-[#F6F4EF]">${company.fees.annual}</span>
            <span className="text-[#A8A39A] text-sm">/year</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <div className="font-medium text-[#F6F4EF]">Storage Fee</div>
            <div className="text-sm text-[#A8A39A]">Secure depository storage</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-[#F6F4EF]">${company.fees.storage}</span>
            <span className="text-[#A8A39A] text-sm">/year</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4 bg-[#0C0D18]">
          <div>
            <div className="font-bold text-[#F6F4EF]">First Year Total</div>
            <div className="text-sm text-[#A8A39A]">Setup + Annual + Storage</div>
          </div>
          <div className="text-right">
            <span className="font-bold text-2xl text-[#D4A94E]">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
