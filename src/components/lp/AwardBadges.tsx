"use client";

import { Award, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface AwardBadgesProps {
  variant?: "full" | "compact";
  className?: string;
}

export function AwardBadges({ variant = "full", className }: AwardBadgesProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap justify-center gap-3", className)}>
        <div className="flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-3 py-1.5 rounded-full">
          <Award className="h-4 w-4 text-amber-600" />
          <span className="text-amber-800 font-semibold text-xs">
            Money Magazine&apos;s &quot;Best Overall&quot; 2024
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-blue-100 border border-blue-300 px-3 py-1.5 rounded-full">
          <Shield className="h-4 w-4 text-blue-600" />
          <span className="text-blue-800 font-semibold text-xs">
            Investopedia &quot;Most Transparent&quot;
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap justify-center gap-4", className)}>
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-lg">
        <Award className="h-5 w-5 text-amber-600" />
        <div>
          <div className="text-xs text-amber-600 font-medium">MONEY MAGAZINE 2024</div>
          <div className="text-sm font-bold text-amber-800">&quot;Best Overall Gold IRA&quot;</div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg">
        <Shield className="h-5 w-5 text-blue-600" />
        <div>
          <div className="text-xs text-blue-600 font-medium">INVESTOPEDIA 2024</div>
          <div className="text-sm font-bold text-blue-800">&quot;Most Transparent Pricing&quot;</div>
        </div>
      </div>
    </div>
  );
}

// Single award badge for hero sections
export function MoneyMagazineBadge({ className }: { className?: string }) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-2 rounded-full",
      className
    )}>
      <Award className="h-5 w-5 text-amber-600" />
      <span className="text-amber-800 font-semibold text-sm">
        Money Magazine&apos;s &quot;Best Overall&quot; 2024
      </span>
    </div>
  );
}

// Zero Fees promo badge for hero sections
export function ZeroFeesBadge({ className }: { className?: string }) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 bg-green-100 border border-green-300 px-3 py-1.5 rounded-full text-sm",
      className
    )}>
      <span className="text-green-800 font-medium">
        ZERO Fees for Up to 10 Years
      </span>
    </div>
  );
}
