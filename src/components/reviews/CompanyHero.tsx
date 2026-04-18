// src/components/reviews/CompanyHero.tsx
// P1-021: Review page hero component

"use client";

import { Award, Building2, Calendar, DollarSign, ExternalLink, Shield, Zap, ArrowRight } from "lucide-react";
import { Company } from "@/data/companies";
import { CompanyRating } from "./CompanyRating";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { getTrackedLink } from "@/config/affiliates";
import { useLeadModal } from "@/context/LeadModalContext";
import Link from "next/link";
import { useMemo } from "react";

interface CompanyHeroProps {
  company: Company;
}

export function CompanyHero({ company }: CompanyHeroProps) {
  const isFeatured = company.featured;
  const isAugusta = company.slug === "augusta-precious-metals";
  const { openModal } = useLeadModal();

  // Generate a consistent "random" viewer count based on company slug (50-200)
  const viewerCount = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < company.slug.length; i++) {
      hash = ((hash << 5) - hash) + company.slug.charCodeAt(i);
      hash = hash & hash;
    }
    return 50 + Math.abs(hash) % 151;
  }, [company.slug]);

  const handleVisitClick = () => {
    openModal("default", `company-hero-${company.slug}`);
  };

  return (
    <section className={cn(
      "relative pt-24 pb-12 md:pt-32 md:pb-16",
      isFeatured
        ? "bg-gradient-to-b from-amber-50 to-[#161828]"
        : "bg-[#0C0D18]"
    )}>
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-4">
          <a href="/" className="hover:text-[#F6F4EF]">Home</a>
          <span>/</span>
          <a href="/reviews" className="hover:text-[#F6F4EF]">Reviews</a>
          <span>/</span>
          <span className="text-[#F6F4EF]">{company.name}</span>
        </nav>

        {/* Urgency Badge - Social Proof */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-medium">
            <Zap className="h-4 w-4" />
            <span>{viewerCount} people viewed this review today</span>
          </div>
        </div>

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
            <h1 className="text-4xl md:text-5xl font-bold text-[#F6F4EF] mb-4">
              {company.name} Review 2026
            </h1>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <CompanyRating
                rating={company.rating}
                reviews={company.reviewCount}
                size="lg"
              />
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#2A2D42]">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold">BBB: {company.bbbRating}</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-lg text-[#D0CCC4] mb-6 leading-relaxed">
              {company.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {isAugusta ? (
                <button
                  onClick={handleVisitClick}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all",
                    isFeatured
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25"
                      : "bg-[rgba(197,149,46,0.1)] text-white hover:bg-[#000060]"
                  )}
                >
                  Visit {company.name}
                  <ExternalLink className="h-4 w-4" />
                </button>
              ) : (
                <a
                  href={getTrackedLink(company.affiliateLink, `company-hero-${company.slug}`, company.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all",
                    isFeatured
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25"
                      : "bg-[rgba(197,149,46,0.1)] text-white hover:bg-[#000060]"
                  )}
                >
                  Visit {company.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <a
                href="#verdict"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-[#3F4460] text-[#D0CCC4] hover:bg-[#121423] transition-all"
              >
                Jump to Verdict
              </a>
            </div>

            {/* Compare Alternative Link - Show for non-featured companies */}
            {!isFeatured && (
              <div className="mt-4">
                <Link
                  href={`/compare/${company.slug}-vs-augusta-precious-metals`}
                  className="inline-flex items-center gap-2 text-[#D0CCC4] hover:text-amber-600 text-sm font-medium transition-colors"
                >
                  Not sure? Compare {company.name} vs Augusta Precious Metals
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Quick Stats Card */}
          <div className="lg:col-span-1">
            <div className={cn(
              "bg-[#161828] rounded-2xl p-6 shadow-lg border",
              isFeatured ? "border-amber-200" : "border-[#2A2D42]"
            )}>
              <h2 className="font-bold text-[#F6F4EF] mb-4">Quick Facts</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#121423] rounded-lg">
                    <DollarSign className="h-5 w-5 text-[#D0CCC4]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A8A39A]">Minimum Investment</div>
                    <div className="font-bold text-[#F6F4EF]">
                      ${company.minInvestment.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#121423] rounded-lg">
                    <Calendar className="h-5 w-5 text-[#D0CCC4]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A8A39A]">Founded</div>
                    <div className="font-bold text-[#F6F4EF]">{company.founded}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#121423] rounded-lg">
                    <Building2 className="h-5 w-5 text-[#D0CCC4]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A8A39A]">Headquarters</div>
                    <div className="font-bold text-[#F6F4EF]">{company.headquarters}</div>
                  </div>
                </div>

                <div className="border-t border-[#2A2D42] pt-4">
                  <div className="text-sm text-[#A8A39A] mb-2">Available Metals</div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.metals.map((metal) => (
                      <span
                        key={metal}
                        className="px-2 py-1 bg-[#121423] text-[#D0CCC4] text-xs font-medium rounded"
                      >
                        {metal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#2A2D42] pt-4">
                  <div className="text-sm text-[#A8A39A] mb-2">Account Types</div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.accountTypes.slice(0, 4).map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 bg-[#121423] text-[#D0CCC4] text-xs font-medium rounded"
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
