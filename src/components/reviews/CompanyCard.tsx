// src/components/reviews/CompanyCard.tsx
// P1-017: Company preview card component

"use client";

import Link from "next/link";
import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";
import { Company } from "@/data/companies";
import { CompanyRating } from "./CompanyRating";
import { cn } from "@/lib/utils";

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
        className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all"
      >
        {rank && (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-white/10">
            #{rank}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">{company.name}</h3>
          <CompanyRating rating={company.rating} size="sm" showValue={true} />
        </div>
        <ArrowRight className="h-4 w-4 text-slate-400" />
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "relative bg-white/5 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all hover:bg-white/10",
        isFeatured
          ? "border-amber-500/30 shadow-[0_0_30px_-5px_rgba(234,179,8,0.2)]"
          : "border-white/10 hover:border-amber-500/20"
      )}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
            <Award className="h-3 w-3" />
            #1 RATED
          </div>
        </div>
      )}

      {/* Rank Badge */}
      {rank && !isFeatured && (
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 font-bold text-lg border border-white/10">
            #{rank}
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className={cn("mb-4", rank && !isFeatured && "ml-14")}>
          <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
          <CompanyRating
            rating={company.rating}
            reviews={company.reviewCount}
            size="md"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4 text-center">
          <div className="bg-slate-800/50 rounded-lg p-2 border border-white/5">
            <div className="text-xs text-slate-400 mb-0.5">BBB Rating</div>
            <div className="font-bold text-white">{company.bbbRating}</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-2 border border-white/5">
            <div className="text-xs text-slate-400 mb-0.5">Minimum</div>
            <div className="font-bold text-white">
              ${company.minInvestment.toLocaleString()}
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-2 border border-white/5">
            <div className="text-xs text-slate-400 mb-0.5">Since</div>
            <div className="font-bold text-white">{company.founded}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {company.shortDescription}
        </p>

        {/* Top Pros */}
        <div className="space-y-1.5 mb-4">
          {company.pros.slice(0, 3).map((pro, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <Shield className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300">{pro}</span>
            </div>
          ))}
        </div>

        {/* Best For */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-amber-400 mb-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            BEST FOR
          </div>
          <p className="text-sm text-amber-300">{company.bestFor}</p>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="flex gap-2">
            <Link
              href={`/reviews/${company.slug}`}
              className={cn(
                "flex-1 text-center py-3 px-4 rounded-lg font-semibold transition-all text-sm",
                isFeatured
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-600 hover:to-amber-700"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              )}
            >
              Read Full Review
            </Link>
            <a
              href={company.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 px-4 rounded-lg font-semibold border border-white/10 text-slate-300 hover:bg-white/5 transition-all text-sm"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
