"use client";

import { Star, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface LPTrustBarProps {
  rating?: number;
  reviewCount?: number;
  bbbRating?: string;
  className?: string;
}

export function LPTrustBar({
  rating = 4.9,
  reviewCount = 2847,
  bbbRating = "A+",
  className,
}: LPTrustBarProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-sm border-y border-white/10 py-4",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i <= Math.floor(rating) ? "fill-current" : "fill-current opacity-30"
                  )}
                />
              ))}
            </div>
            <span className="text-white font-semibold">{rating}/5</span>
            <span className="text-slate-400">({reviewCount.toLocaleString()} reviews)</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* BBB Rating */}
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-400" />
            <span className="text-white font-semibold">{bbbRating} BBB Rating</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-white/20" />

          {/* Zero Complaints */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-xs font-bold">0</span>
            </div>
            <span className="text-white font-semibold">Consumer Complaints</span>
          </div>
        </div>
      </div>
    </div>
  );
}
