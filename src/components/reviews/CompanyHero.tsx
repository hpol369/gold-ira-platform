// src/components/reviews/CompanyHero.tsx
// P1-021: Review page hero component

import { Award, Building2, Calendar, DollarSign, ExternalLink, Shield } from "lucide-react";
import { Company } from "@/data/companies";
import { CompanyRating } from "./CompanyRating";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface CompanyHeroProps {
  company: Company;
}

export function CompanyHero({ company }: CompanyHeroProps) {
  const isFeatured = company.featured;

  return (
    <section className={cn(
      "relative pt-24 pb-12 md:pt-32 md:pb-16",
      isFeatured
        ? "bg-gradient-to-b from-amber-50 to-white"
        : "bg-gradient-to-b from-slate-50 to-white"
    )}>
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a href="/" className="hover:text-slate-700">Home</a>
          <span>/</span>
          <a href="/reviews" className="hover:text-slate-700">Reviews</a>
          <span>/</span>
          <span className="text-slate-900">{company.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Badge */}
            {isFeatured && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                <Award className="h-4 w-4" />
                OUR #1 RECOMMENDATION
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {company.name} Review 2026
            </h1>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <CompanyRating
                rating={company.rating}
                reviews={company.reviewCount}
                size="lg"
              />
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold">BBB: {company.bbbRating}</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {company.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={company.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all",
                  isFeatured
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                Visit {company.name}
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#verdict"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all"
              >
                Jump to Verdict
              </a>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="lg:col-span-1">
            <div className={cn(
              "bg-white rounded-2xl p-6 shadow-lg border",
              isFeatured ? "border-amber-200" : "border-slate-200"
            )}>
              <h2 className="font-bold text-slate-900 mb-4">Quick Facts</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <DollarSign className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Minimum Investment</div>
                    <div className="font-bold text-slate-900">
                      ${company.minInvestment.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Calendar className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Founded</div>
                    <div className="font-bold text-slate-900">{company.founded}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Building2 className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Headquarters</div>
                    <div className="font-bold text-slate-900">{company.headquarters}</div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="text-sm text-slate-500 mb-2">Available Metals</div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.metals.map((metal) => (
                      <span
                        key={metal}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                      >
                        {metal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="text-sm text-slate-500 mb-2">Account Types</div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.accountTypes.slice(0, 4).map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
