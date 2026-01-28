// src/components/reviews/CompanyCard.tsx
// P1-017: Company preview card component - PATRIOT LIGHT THEME

"use client";

import Link from "next/link";
import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";
import { Company } from "@/data/companies";
import { CompanyRating } from "./CompanyRating";
import { cn } from "@/lib/utils";
import { getTrackedLink } from "@/config/affiliates";

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

  if (variant === "compact") {
    return (
      <Link
        href={`/reviews/${company.slug}`}
        className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-[#000080]/30 hover:shadow-md transition-all"
      >
        {rank && (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold text-sm border border-slate-200">
            #{rank}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 truncate">{company.name}</h3>
          <CompanyRating rating={company.rating} size="sm" showValue={true} />
        </div>
        <ArrowRight className="h-4 w-4 text-slate-400" />
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "relative bg-white rounded-2xl border overflow-hidden transition-all hover:shadow-lg",
        isFeatured
          ? "border-amber-200 shadow-md ring-4 ring-amber-50"
          : "border-slate-200 hover:border-[#000080]/20"
      )}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#000080] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
            <Award className="h-3 w-3" />
            #1 RATED
          </div>
        </div>
      )}

      {/* Rank Badge */}
      {rank && !isFeatured && (
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold text-lg border border-slate-200">
            #{rank}
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className={cn("mb-4", rank && !isFeatured && "ml-14")}>
          <h3 className="text-xl font-bold text-[#000080] mb-1">{company.name}</h3>
          <CompanyRating
            rating={company.rating}
            reviews={company.reviewCount}
            size="md"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4 text-center">
          <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
            <div className="text-xs text-slate-500 mb-0.5">BBB Rating</div>
            <div className="font-bold text-slate-900">{company.bbbRating}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
            <div className="text-xs text-slate-500 mb-0.5">Minimum</div>
            <div className="font-bold text-slate-900">
              ${company.minInvestment.toLocaleString()}
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
            <div className="text-xs text-slate-500 mb-0.5">Since</div>
            <div className="font-bold text-slate-900">{company.founded}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {company.shortDescription}
        </p>

        {/* Top Pros */}
        <div className="space-y-1.5 mb-4">
          {company.pros.slice(0, 3).map((pro, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <Shield className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-600">{pro}</span>
            </div>
          ))}
        </div>

        {/* Best For */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-[#000080] mb-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            BEST FOR
          </div>
          <p className="text-sm text-[#000080]">{company.bestFor}</p>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="flex gap-2">
            <Link
              href={`/reviews/${company.slug}`}
              className={cn(
                "flex-1 text-center py-3 px-4 rounded-lg font-semibold transition-all text-sm",
                isFeatured
                  ? "bg-[#B22234] text-white hover:bg-[#8b1c2a]"
                  : "bg-[#000080] text-white hover:bg-[#000060]"
              )}
            >
              Read Full Review
            </Link>
            <a
              href={getTrackedLink(company.affiliateLink, `company-card-${company.slug}`, company.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 px-4 rounded-lg font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all text-sm"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
