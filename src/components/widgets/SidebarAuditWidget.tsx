"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Users } from "lucide-react";

interface SidebarAuditWidgetProps {
  /** Source page for tracking (e.g. "learn-gold-ira-fees") */
  trackSource?: string;
  /** Custom headline (overrides "Free Precious Metals Kit") */
  headline?: string;
  /** Custom body text (overrides "Get matched with the right company in 60 seconds") */
  body?: string;
}

export function SidebarAuditWidget({ trackSource, headline, body }: SidebarAuditWidgetProps) {
  const [auditsToday, setAuditsToday] = useState<number>(0);

  useEffect(() => {
    setAuditsToday(Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000);
  }, []);

  const href = trackSource
    ? `/get-started?ref=${encodeURIComponent(trackSource)}`
    : "/get-started";

  return (
    <div
      className="relative overflow-hidden w-64 p-6 bg-[#161828] rounded-2xl border border-[#2A2D42] shadow-xl"
    >
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000080]/5 via-transparent to-red-500/5 rounded-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-[rgba(220,38,38,0.08)]">
            <Shield className="h-5 w-5 text-[#D4A94E]" />
          </div>
          <h4 className="font-serif font-bold text-[#F6F4EF] text-sm">
            {headline || "Free Precious Metals Kit"}
          </h4>
        </div>

        <p className="text-sm text-[#D0CCC4] mb-4 leading-relaxed">
          {body || "Get matched with the right company in 60 seconds. No cost, no pressure."}
        </p>

        <Link
          href={href}
          className="group relative overflow-hidden flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold
                     bg-[#DC2626] text-white hover:bg-[#991B1B]
                     shadow-lg shadow-red-900/20
                     hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2 text-sm">
            Get Free Kit <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        {auditsToday > 0 && (
          <div className="flex items-center gap-2 text-xs text-[#A8A39A] mt-4">
            <Users className="h-3 w-3" />
            <span>{auditsToday.toLocaleString()} kits requested today</span>
          </div>
        )}
      </div>
    </div>
  );
}
