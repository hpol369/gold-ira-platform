import { Shield, Star, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeBarProps {
  variant?: "light" | "dark";
  className?: string;
}

const BADGES = [
  {
    icon: Shield,
    label: "A+ BBB Rated",
    sublabel: "Partners",
  },
  {
    icon: Star,
    label: "4.97/5 Rating",
    sublabel: "1,000+ Reviews",
  },
  {
    icon: Users,
    label: "50,000+",
    sublabel: "Americans Educated",
  },
  {
    icon: Clock,
    label: "10+ Years",
    sublabel: "Independent Research",
  },
] as const;

export function TrustBadgeBar({ variant = "light", className }: TrustBadgeBarProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "py-4 px-6 rounded-xl",
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-[#0C0D18] border border-[#2A2D42]",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
        {BADGES.map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.label} className="flex items-center gap-2.5">
              <div
                className={cn(
                  "p-1.5 rounded-lg",
                  isDark ? "bg-amber-500/20" : "bg-amber-50"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4",
                    isDark ? "text-amber-400" : "text-amber-600"
                  )}
                />
              </div>
              <div>
                <div
                  className={cn(
                    "text-sm font-bold leading-tight",
                    isDark ? "text-white" : "text-[#F6F4EF]"
                  )}
                >
                  {badge.label}
                </div>
                <div
                  className={cn(
                    "text-[11px] leading-tight",
                    isDark ? "text-[#A8A39A]" : "text-[#A8A39A]"
                  )}
                >
                  {badge.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
