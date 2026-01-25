// src/components/guide/AuthorBox.tsx
// Enhanced author bio with credibility signals

import Link from "next/link";
import {
  Briefcase,
  Shield,
  FileSearch,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface AuthorBoxProps {
  variant?: "default" | "compact";
  showCredentials?: boolean;
}

export function AuthorBox({
  variant = "default",
  showCredentials = true,
}: AuthorBoxProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3 text-sm">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 font-bold border-2 border-amber-500/30">
          TR
        </div>
        <div>
          <Link
            href="/author/thomas-richardson"
            className="text-white font-semibold hover:text-amber-400 transition-colors"
          >
            Thomas Richardson
          </Link>
          <p className="text-slate-400 text-xs">20+ years in finance</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mt-12">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Photo placeholder - replace src when real photo available */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-slate-700 shrink-0 overflow-hidden border-4 border-amber-500/20 shadow-lg flex items-center justify-center">
          {/* Initials placeholder - replace with Image component when photo ready */}
          <span className="text-3xl font-bold text-amber-400/80">TR</span>
          {/*
          <Image
            src="/images/thomas-richardson.jpg"
            alt="Thomas Richardson"
            fill
            className="object-cover"
          />
          */}
        </div>

        <div className="flex-1 text-center md:text-left">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
            <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Written & Researched By
            </p>
            <span className="hidden md:inline text-slate-600">•</span>
            <Link
              href="/about-us"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 justify-center md:justify-start"
            >
              Read my story
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          {/* Name */}
          <Link
            href="/author/thomas-richardson"
            className="hover:text-amber-400 transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Thomas Richardson
            </h3>
          </Link>

          {/* Bio */}
          <p className="text-slate-400 mb-4 leading-relaxed text-sm md:text-base">
            Former wealth manager turned Gold IRA researcher. After 20 years in
            finance, I got tired of watching scammers prey on retirees. Now I
            investigate companies and publish what I find—good or bad.
          </p>

          {/* Credentials */}
          {showCredentials && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <Briefcase className="h-3 w-3 text-amber-400" />
                20+ Years Finance
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <FileSearch className="h-3 w-3 text-amber-400" />
                15+ Companies Investigated
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <Shield className="h-3 w-3 text-green-400" />
                Independent Research
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Trust signals */}
      <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          Fact-checked content
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          No paid placements
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          Updated monthly
        </span>
      </div>
    </div>
  );
}
