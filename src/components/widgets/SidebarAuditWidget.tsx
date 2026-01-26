"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Users } from "lucide-react";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

export function SidebarAuditWidget() {
  const [auditsToday, setAuditsToday] = useState<number>(0);

  useEffect(() => {
    // Generate random number between 8000-15000 on client side
    setAuditsToday(Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000);
  }, []);

  return (
    <div
      className="relative overflow-hidden w-64 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(212,175,55,0.1)]"
      style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
    >
      <FloatingOrbs variant="minimal" />
      {/* Ambient gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 rounded-2xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-red-500/20">
            <Shield className="h-5 w-5 text-red-400" />
          </div>
          <h4 className="font-serif font-bold text-white text-sm">
            Which Account Fits You?
          </h4>
        </div>

        <p className="text-lg font-bold text-white mb-2">
          Gold, Crypto, Real Estate...
        </p>

        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
          Find out in 60 seconds
        </p>

        <Link
          href="/audit"
          className="group relative overflow-hidden flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold
                     bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-slate-900
                     shadow-[0_0_60px_-5px_rgba(212,175,55,0.5),0_0_100px_-10px_rgba(212,175,55,0.3)]
                     hover:shadow-[0_0_80px_-5px_rgba(212,175,55,0.7),0_0_120px_-10px_rgba(212,175,55,0.4)]
                     hover:scale-105 transition-all duration-300"
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          <span className="relative z-10 flex items-center gap-2 text-sm">
            Take Free Quiz <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        {auditsToday > 0 && (
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-4">
            <Users className="h-3 w-3" />
            <span>{auditsToday.toLocaleString()} audits completed today</span>
          </div>
        )}
      </div>
    </div>
  );
}
