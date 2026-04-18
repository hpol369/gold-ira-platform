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
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-[#D4A94E] font-bold border-2 border-amber-500/30">
          TR
        </div>
        <div>
          <Link
            href="/author/thomas-richardson"
            className="text-white font-semibold hover:text-[#D4A94E] transition-colors"
          >
            Thomas Richardson
          </Link>
          <p className="text-[#A8A39A] text-xs">20+ years in finance</p>
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
          <span className="text-3xl font-bold text-[#D4A94E]/80">TR</span>
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
            <p className="text-xs font-bold tracking-widest text-[#D4A94E] uppercase">
              Written & Researched By
            </p>
            <span className="hidden md:inline text-[#D0CCC4]">•</span>
            <Link
              href="/about-us"
              className="text-xs text-[#A8A39A] hover:text-[#D4A94E] transition-colors flex items-center gap-1 justify-center md:justify-start"
            >
              Read my story
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          {/* Name */}
          <Link
            href="/author/thomas-richardson"
            className="hover:text-[#D4A94E] transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Thomas Richardson
            </h3>
          </Link>

          {/* Bio */}
          <p className="text-[#A8A39A] mb-4 leading-relaxed text-sm md:text-base">
            Former wealth manager turned Gold IRA researcher. After 20 years in
            finance, I got tired of watching scammers prey on retirees. Now I
            investigate companies and publish what I find—good or bad.
          </p>

          {/* Credentials */}
          {showCredentials && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3F4460] bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <Briefcase className="h-3 w-3 text-[#D4A94E]" />
                20+ Years Finance
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3F4460] bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <FileSearch className="h-3 w-3 text-[#D4A94E]" />
                15+ Companies Investigated
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3F4460] bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                <Shield className="h-3 w-3 text-green-400" />
                Independent Research
              </span>
            </div>
          )}

          {/* Fact-checker byline */}
          {showFactChecker && (
            <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500/80" />
              <p className="text-xs text-[#A8A39A]/80">
                Fact-checked by{" "}
                <span className="text-[#3F4460]/90 font-medium">
                  Sarah Mitchell, CPA
                </span>
                <span className="hidden sm:inline">
                  {" "}— Licensed CPA with 15 years in retirement tax planning
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Trust signals */}
      <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-[#A8A39A]">
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
