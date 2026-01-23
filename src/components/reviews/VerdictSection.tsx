// src/components/reviews/VerdictSection.tsx
// P1-022: Final verdict section component

import { Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Company, getFeaturedCompany } from "@/data/companies";
import { CompanyRating } from "./CompanyRating";
import { cn } from "@/lib/utils";

interface VerdictSectionProps {
  company: Company;
  showAugustaAlternative?: boolean;
}

export function VerdictSection({
  company,
  showAugustaAlternative = true,
}: VerdictSectionProps) {
  const augusta = getFeaturedCompany();
  const isFeatured = company.featured;
  const showAlternative = showAugustaAlternative && !isFeatured;

  return (
    <section id="verdict" className="scroll-mt-24">
      <div className={cn(
        "rounded-2xl p-8 md:p-10",
        isFeatured
          ? "bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200"
          : "bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200"
      )}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={cn(
            "p-3 rounded-xl",
            isFeatured ? "bg-amber-500 text-white" : "bg-slate-900 text-white"
          )}>
            <Award className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Our Verdict</h2>
            <p className="text-slate-600">Final assessment of {company.name}</p>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-slate-200">
          <div className="text-5xl font-bold text-slate-900">
            {company.rating.toFixed(1)}
          </div>
          <div>
            <CompanyRating rating={company.rating} size="lg" showValue={false} />
            <p className="text-sm text-slate-500 mt-1">
              Based on {company.reviewCount.toLocaleString()} reviews
            </p>
          </div>
          {isFeatured && (
            <div className="ml-auto">
              <div className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                #1 RECOMMENDED
              </div>
            </div>
          )}
        </div>

        {/* Verdict Text */}
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            {company.verdict}
          </p>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-4">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">
                {company.bbbRating} BBB rating with strong reputation
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">
                ${company.minInvestment.toLocaleString()} minimum investment
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">
                {company.fees.setup === 0 ? "No setup fee" : `$${company.fees.setup} setup fee`}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">
                {company.metals.join(", ")} available
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a
            href={company.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all",
              isFeatured
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25"
                : "bg-slate-900 text-white hover:bg-slate-800"
            )}
          >
            Get Started with {company.name}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Augusta Alternative */}
      {showAlternative && (
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-6 md:p-8 border border-amber-200">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm mb-2">
                <Award className="h-4 w-4" />
                CONSIDER OUR #1 PICK
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {augusta.name} Scored Higher in Our Tests
              </h3>
              <p className="text-slate-600 mb-4">
                While {company.name} is a solid choice, Augusta Precious Metals rated higher
                in our comprehensive review for their education-first approach, transparent
                pricing, and lifetime customer support.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-900">{augusta.rating}</span>
                  <CompanyRating rating={augusta.rating} size="sm" showValue={false} />
                </div>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600">BBB: {augusta.bbbRating}</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600">${augusta.minInvestment.toLocaleString()} min</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href={augusta.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25"
              >
                See Why Augusta is #1
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
