// src/components/guide/AuthorBox.tsx
// Transparent editorial team attribution — no fictional individuals

import Link from "next/link";
import {
  Briefcase,
  Shield,
  FileSearch,
  CheckCircle2,
  ExternalLink,
  Users,
} from "lucide-react";

interface AuthorBoxProps {
  variant?: "default" | "compact";
  showCredentials?: boolean;
  showFactChecker?: boolean;
}

export function AuthorBox({
  variant = "default",
  showCredentials = true,
  showFactChecker = true,
}: AuthorBoxProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3 text-sm">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 font-bold border-2 border-amber-500/30">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <Link
            href="/editorial-board"
            className="text-white font-semibold hover:text-amber-400 transition-colors"
          >
            Rich Dad Retirement Editorial Team
          </Link>
          <p className="text-slate-400 text-xs">Independent research since 2024</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mt-12">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-slate-700 shrink-0 overflow-hidden border-4 border-amber-500/20 shadow-lg flex items-center justify-center">
          <Users className="w-12 h-12 text-amber-400/80" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
            <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Written & Researched By
            </p>
            <span className="hidden md:inline text-slate-600">•</span>
            <Link
              href="/editorial-standards"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 justify-center md:justify-start"
            >
              Our editorial standards
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <Link
            href="/editorial-board"
            className="hover:text-amber-400 transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Rich Dad Retirement Editorial Team
            </h3>
          </Link>

          <p className="text-slate-400 mb-4 leading-relaxed text-sm md:text-base">
            Our editorial team researches Gold IRA companies using public filings,
            BBB records, customer reviews, and fee disclosures. Content is
            AI-assisted and human-reviewed.{" "}
            <Link href="/editorial-policy" className="text-amber-400 hover:underline">
              We earn affiliate commissions
            </Link>
            —this is disclosed on every page.
          </p>

          {showCredentials && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <FileSearch className="h-3 w-3 text-amber-400" />
                15+ Companies Investigated
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <Briefcase className="h-3 w-3 text-amber-400" />
                Data-Driven Methodology
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <Shield className="h-3 w-3 text-green-400" />
                Affiliate Disclosed
              </span>
            </div>
          )}

          {showFactChecker && (
            <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500/80" />
              <p className="text-xs text-slate-400/80">
                Reviewed by{" "}
                <Link href="/editorial-board" className="text-slate-300/90 font-medium hover:text-amber-400">
                  Editorial Board
                </Link>
                <span className="hidden sm:inline">
                  {" "}— IRS data verified quarterly
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          AI-assisted, human-reviewed
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          Affiliate commissions disclosed
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          Updated monthly
        </span>
      </div>
    </div>
  );
}
