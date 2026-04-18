"use client";

import { Star, Shield, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface LPTrustBarProps {
  rating?: number;
  reviewCount?: number;
  bbbRating?: string;
  className?: string;
  showAwards?: boolean;
}

export function LPTrustBar({
  rating = 4.9,
  reviewCount = 2847,
  bbbRating = "A+",
  className,
  showAwards = true,
}: LPTrustBarProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-sm border-y border-white/10 py-4",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1: Award Badges */}
        {showAwards && (
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-[#161828] border border-[rgba(197,149,46,0.32)] px-3 py-1.5 rounded-lg">
              <Award className="h-4 w-4 text-[#D4A94E]" />
              <div>
                <div className="text-[10px] text-[#D4A94E] font-medium leading-tight">MONEY MAGAZINE 2024</div>
                <div className="text-xs font-bold text-amber-800 leading-tight">&quot;Best Overall Gold IRA&quot;</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#121423] border border-blue-200 px-3 py-1.5 rounded-lg">
              <Shield className="h-4 w-4 text-blue-600" />
              <div>
                <div className="text-[10px] text-blue-600 font-medium leading-tight">INVESTOPEDIA 2024</div>
                <div className="text-xs font-bold text-blue-800 leading-tight">&quot;Most Transparent Pricing&quot;</div>
              </div>
            </div>
          </div>
        )}

        {/* Row 2: Star Rating, BBB, Zero Complaints, Joe Montana */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-10">
          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-[#D4A94E]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4 sm:h-5 sm:w-5",
                    i <= Math.floor(rating) ? "fill-current" : "fill-current opacity-30"
                  )}
                />
              ))}
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">{rating}/5</span>
            <span className="text-[#A8A39A] text-xs sm:text-sm">({reviewCount.toLocaleString()} reviews)</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* BBB Rating */}
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
            <span className="text-white font-semibold text-sm sm:text-base">{bbbRating} BBB Rating</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* Zero Complaints */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[rgba(46,139,87,0.08)]0/20 flex items-center justify-center">
              <span className="text-green-400 text-[10px] sm:text-xs font-bold">0</span>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">Consumer Complaints</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* Joe Montana Endorsement */}
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4A94E]" />
            <span className="text-white font-semibold text-sm sm:text-base">Joe Montana&apos;s Choice</span>
          </div>
        </div>
      </div>
    </div>
  );
}
