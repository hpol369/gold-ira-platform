"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface LPHeaderProps {
  phone?: string;
  logoText?: string;
  className?: string;
}

export function LPHeader({
  phone = "1-800-700-1008",
  logoText = "Augusta Precious Metals",
  className,
}: LPHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "bg-slate-900/95 backdrop-blur-md border-b border-white/10",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-white hidden sm:block">
              {logoText}
            </span>
          </div>

          {/* Phone CTA */}
          <a
            href={`tel:${phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4 text-amber-400" />
            <span className="text-white font-medium">
              <span className="hidden sm:inline">Call Now: </span>
              {phone}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
