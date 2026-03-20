"use client";

// Golden Circle: HOW Section — Sprint 11 (condensed, single CTA)
// 3 steps only, no "How We Help" sub-section

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RefreshCw, Building2, Coins, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function HowSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-[#000080]/10 border border-[#000080]/20 rounded-full text-[#000080] text-sm font-bold mb-6">
                The Process
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-[#000080] mb-6">
                How a Gold IRA Protects Your Retirement
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                It&apos;s simpler than you think. A Gold IRA works just like your regular IRA—but instead
                of paper assets, you own real, physical gold.
              </p>
            </div>
          </FadeIn>

          {/* The Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <FadeIn delay={0.1} className="h-full">
              <div className="relative group h-full">
                <div className="absolute top-12 left-full w-full h-0.5 bg-[#C5A55A]/30 hidden md:block" style={{ width: 'calc(100% - 3rem)' }} />
                <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-lg group-hover:border-[#C5A55A]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#000080] mb-3">Open Your Gold IRA</h3>
                  <p className="text-slate-600 mb-5 font-medium">
                    Choose a reputable Gold IRA company. They handle all the paperwork and set up
                    your self-directed IRA with an approved custodian.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#C5A55A] font-bold">
                    <Building2 className="h-4 w-4" />
                    <span>Takes 10-15 minutes</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="h-full">
              <div className="relative group h-full">
                <div className="absolute top-12 left-full w-full h-0.5 bg-[#C5A55A]/30 hidden md:block" style={{ width: 'calc(100% - 3rem)' }} />
                <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-lg group-hover:border-[#C5A55A]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#000080] mb-3">Fund with a Rollover</h3>
                  <p className="text-slate-600 mb-5 font-medium">
                    Transfer funds from your existing 401(k), IRA, or other retirement account.
                    Direct rollovers are 100% tax-free with no penalties.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#C5A55A] font-bold">
                    <RefreshCw className="h-4 w-4" />
                    <span>5-14 business days</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="relative group h-full">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-lg group-hover:border-[#C5A55A]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#000080] mb-3">Buy Physical Gold</h3>
                  <p className="text-slate-600 mb-5 font-medium">
                    Select IRS-approved gold coins and bars. Your metals are stored in a secure,
                    insured depository—protected for your retirement.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#C5A55A] font-bold">
                    <Coins className="h-4 w-4" />
                    <span>Own real gold</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom CTA */}
          <FadeIn delay={0.4}>
            <div className="text-center">
              <Link
                href="/get-started?ref=homepage-how"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#000080] hover:bg-[#000060] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1 group"
              >
                Ready to Start? It Takes 10 Minutes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
