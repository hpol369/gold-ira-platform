// src/components/reviews/CompanyCard.tsx
// P1-017: Company preview card component - PATRIOT LIGHT THEME

"use client";

import Link from "next/link";
import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";
import { Company } from "@/data/companies";
import { CompanyRating } from "./CompanyRating";
import { cn } from "@/lib/utils";
import { getTrackedLink } from "@/config/affiliates";
import { useLeadModal } from "@/context/LeadModalContext";

interface CompanyCardProps {
  company: Company;
  rank?: number;
  variant?: "default" | "compact" | "featured";
  showCTA?: boolean;
}

export function CompanyCard({
  company,
  rank,
  variant = "default",
  showCTA = true,
}: CompanyCardProps) {
  const isFeatured = company.featured || variant === "featured";
  const isAugusta = company.slug === "augusta-precious-metals";
  const { openModal } = useLeadModal();

  const handleVisitClick = () => {
    openModal("default", `company-card-${company.slug}`);
  };

  if (variant === "compact") {
    return (
      <Link
        href={`/reviews/${company.slug}`}
        className="flex items-center gap-4 p-4 bg-[#161828] rounded-lg border border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)]/30 hover:shadow-md transition-all"
      >
        {rank && (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#121423] text-[#D0CCC4] font-bold text-sm border border-[#2A2D42]">
            #{rank}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#F6F4EF] truncate">{company.name}</h3>
          <CompanyRating rating={company.rating} size="sm" showValue={true} />
        </div>
        <ArrowRight className="h-4 w-4 text-[#A8A39A]" />
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "relative bg-[#161828] rounded-2xl border overflow-hidden transition-all hover:shadow-lg",
        isFeatured
          ? "border-amber-200 shadow-md ring-4 ring-amber-50"
          : "border-[#2A2D42] hover:border-[rgba(197,149,46,0.55)]/20"
      )}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-0 right-0">
          <div className="bg-[rgba(197,149,46,0.1)] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
            <Award className="h-3 w-3" />
            #1 RATED
          </div>
        </div>
      )}

      {/* Rank Badge */}
      {rank && !isFeatured && (
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#121423] text-[#D0CCC4] font-bold text-lg border border-[#2A2D42]">
            #{rank}
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className={cn("mb-4", rank && !isFeatured && "ml-14")}>
          <h3 className="text-xl font-bold text-[#F6F4EF] mb-1">{company.name}</h3>
          <CompanyRating
            rating={company.rating}
            reviews={company.reviewCount}
            size="md"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4 text-center">
          <div className="bg-[#0C0D18] rounded-lg p-2 border border-[#2A2D42]">
            <div className="text-xs text-[#A8A39A] mb-0.5">BBB Rating</div>
            <div className="font-bold text-[#F6F4EF]">{company.bbbRating}</div>
          </div>
          <div className="bg-[#0C0D18] rounded-lg p-2 border border-[#2A2D42]">
            <div className="text-xs text-[#A8A39A] mb-0.5">Minimum</div>
            <div className="font-bold text-[#F6F4EF]">
              ${company.minInvestment.toLocaleString()}
            </div>
          </div>
          <div className="bg-[#0C0D18] rounded-lg p-2 border border-[#2A2D42]">
            <div className="text-xs text-[#A8A39A] mb-0.5">Since</div>
            <div className="font-bold text-[#F6F4EF]">{company.founded}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#A8A39A] text-sm mb-4 line-clamp-2">
          {company.shortDescription}
        </p>

        {/* Top Pros */}
        <div className="space-y-1.5 mb-4">
          {company.pros.slice(0, 3).map((pro, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <Shield className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#D0CCC4]">{pro}</span>
            </div>
          ))}
        </div>

        {/* Best For */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-[#F6F4EF] mb-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            BEST FOR
          </div>
          <p className="text-sm text-[#F6F4EF]">{company.bestFor}</p>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="flex gap-2">
            <Link
              href={`/reviews/${company.slug}`}
              className={cn(
                "flex-1 text-center py-3 px-4 rounded-lg font-semibold transition-all text-sm",
                isFeatured
                  ? "bg-[#DC2626] text-white hover:bg-[#991B1B]"
                  : "bg-[rgba(197,149,46,0.1)] text-white hover:bg-[#000060]"
              )}
            >
              Read Full Review
            </Link>
            {isAugusta ? (
              <button
                onClick={handleVisitClick}
                className="flex-1 text-center py-3 px-4 rounded-lg font-semibold border border-[#2A2D42] text-[#D0CCC4] hover:bg-[#121423] transition-all text-sm"
              >
                Visit Website
              </button>
            ) : (
              <a
                href={getTrackedLink(company.affiliateLink, `company-card-${company.slug}`, company.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 px-4 rounded-lg font-semibold border border-[#2A2D42] text-[#D0CCC4] hover:bg-[#121423] transition-all text-sm"
              >
                Visit Website
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
