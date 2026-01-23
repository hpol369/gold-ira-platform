// src/components/reviews/CompanyRating.tsx
// P1-018: Star rating display component

import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviews?: number;
  className?: string;
}

export function CompanyRating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = true,
  reviews,
  className,
}: CompanyRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const textClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizeClasses[size], "fill-amber-400 text-amber-400")}
          />
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(sizeClasses[size], "text-gray-300")} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={cn(sizeClasses[size], "fill-amber-400 text-amber-400")} />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizeClasses[size], "text-gray-300")}
          />
        ))}
      </div>

      {showValue && (
        <span className={cn("font-semibold text-slate-900", textClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}

      {reviews !== undefined && (
        <span className={cn("text-slate-500", textClasses[size])}>
          ({reviews.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}
