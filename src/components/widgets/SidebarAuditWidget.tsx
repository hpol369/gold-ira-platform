"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Shield, ArrowRight, Users } from "lucide-react";

export function SidebarAuditWidget() {
  const [auditsToday, setAuditsToday] = useState<number>(0);

  useEffect(() => {
    // Generate random number between 8000-15000 on client side
    setAuditsToday(Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000);
  }, []);

  return (
    <div className="w-64 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
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

      <Button variant="gold" size="sm" asChild className="w-full mb-4">
        <Link href="/audit">
          Take Free Quiz <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      {auditsToday > 0 && (
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Users className="h-3 w-3" />
          <span>{auditsToday.toLocaleString()} audits completed today</span>
        </div>
      )}
    </div>
  );
}
