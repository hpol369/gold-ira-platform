// src/components/compare/ComparisonBuilder.tsx
// Client component for building custom comparisons

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Company } from "@/data/companies";

interface ComparisonBuilderProps {
  companies: Company[];
}

export function ComparisonBuilder({ companies }: ComparisonBuilderProps) {
  const router = useRouter();
  const [companyA, setCompanyA] = useState("");
  const [companyB, setCompanyB] = useState("");

  const handleCompare = () => {
    if (companyA && companyB && companyA !== companyB) {
      router.push(`/compare/${companyA}-vs-${companyB}`);
    }
  };

  return (
    <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-[#000080] mb-4">Build Your Own Comparison</h3>
      <p className="text-slate-600 mb-6">
        Select any two companies to see a detailed side-by-side comparison.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <select
          value={companyA}
          onChange={(e) => setCompanyA(e.target.value)}
          className="w-full p-3 border border-slate-200 rounded-lg bg-white text-slate-900 focus:border-[#B22234]/50 focus:outline-none"
        >
          <option value="" disabled>Select first company...</option>
          {companies.map(company => (
            <option key={company.slug} value={company.slug}>
              {company.name}
            </option>
          ))}
        </select>
        <select
          value={companyB}
          onChange={(e) => setCompanyB(e.target.value)}
          className="w-full p-3 border border-slate-200 rounded-lg bg-white text-slate-900 focus:border-[#B22234]/50 focus:outline-none"
        >
          <option value="" disabled>Select second company...</option>
          {companies.map(company => (
            <option key={company.slug} value={company.slug}>
              {company.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleCompare}
          disabled={!companyA || !companyB || companyA === companyB}
          className="w-full p-3 bg-[#B22234] text-white font-bold rounded-lg hover:bg-[#8b1c2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Compare
        </button>
      </div>
      {companyA && companyB && companyA === companyB && (
        <p className="text-red-600 text-sm mt-2">Please select two different companies</p>
      )}
    </div>
  );
}
