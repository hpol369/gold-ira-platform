// src/components/reviews/BestForSection.tsx
// P1-023: Who is this company best for section

import { Target, Users, Briefcase, Wallet, Clock, TrendingUp } from "lucide-react";
import { Company } from "@/data/companies";
import { cn } from "@/lib/utils";

interface BestForSectionProps {
  company: Company;
}

// Derive ideal customer profiles from company attributes
function getIdealProfiles(company: Company) {
  const profiles = [];

  // Based on minimum investment
  if (company.minInvestment <= 10000) {
    profiles.push({
      icon: Wallet,
      title: "Beginner Investors",
      description: `Low minimum of $${company.minInvestment.toLocaleString()} makes it accessible`,
    });
  } else if (company.minInvestment >= 50000) {
    profiles.push({
      icon: Briefcase,
      title: "High Net Worth Individuals",
      description: "Premium service for serious investors with larger portfolios",
    });
  }

  // Based on metals offered
  if (company.metals.length === 4) {
    profiles.push({
      icon: TrendingUp,
      title: "Diversified Investors",
      description: "All four precious metals for maximum diversification",
    });
  }

  // Based on fees
  if (company.fees.setup === 0) {
    profiles.push({
      icon: Wallet,
      title: "Cost-Conscious Investors",
      description: "No setup fee reduces initial costs",
    });
  }

  // Based on track record
  const yearsInBusiness = new Date().getFullYear() - company.founded;
  if (yearsInBusiness >= 15) {
    profiles.push({
      icon: Clock,
      title: "Risk-Averse Investors",
      description: `${yearsInBusiness}+ years of established track record`,
    });
  }

  // Based on account types
  if (company.accountTypes.includes("TSP")) {
    profiles.push({
      icon: Users,
      title: "Federal Employees & Military",
      description: "Specializes in TSP to Gold IRA rollovers",
    });
  }

  return profiles.slice(0, 4);
}

export function BestForSection({ company }: BestForSectionProps) {
  const profiles = getIdealProfiles(company);

  return (
    <section className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100 rounded-lg">
          <Target className="h-5 w-5 text-amber-700" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Who Is {company.name} Best For?</h2>
      </div>

      {/* Main Best For */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <p className="text-lg text-amber-900 font-medium">
          {company.bestFor}
        </p>
      </div>

      {/* Ideal Customer Profiles */}
      {profiles.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200"
            >
              <div className="p-2 bg-slate-100 rounded-lg flex-shrink-0">
                <profile.icon className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{profile.title}</h3>
                <p className="text-sm text-slate-600">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Who Should Look Elsewhere */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="font-semibold text-slate-900 mb-2">Who Might Want to Look Elsewhere</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          {company.minInvestment >= 25000 && (
            <li>• Investors with less than ${company.minInvestment.toLocaleString()} to invest</li>
          )}
          {company.metals.length < 4 && (
            <li>• Those seeking platinum or palladium options (only {company.metals.join(" and ")} available)</li>
          )}
          {company.fees.annual >= 200 && (
            <li>• Fee-sensitive investors (annual fees are above average)</li>
          )}
        </ul>
      </div>
    </section>
  );
}
