"use client";

// Golden Circle: HOW Section
// Patriot Light Theme
// The process that differentiates - how Gold IRAs work and how we help

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  RefreshCw,
  Building2,
  Coins,
  ArrowRight,
  Scale,
  BookOpen,
  Users,
  ShieldCheck
} from "lucide-react";

export function HowSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#000080]/10 border border-[#000080]/20 rounded-full text-[#000080] text-sm font-bold mb-6">
              The Process
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#000080] mb-6">
              How a Gold IRA Protects Your Retirement
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              It&apos;s simpler than you think. A Gold IRA works just like your regular IRA—but instead
              of paper assets, you own real, physical gold.
            </p>
          </motion.div>

          {/* The Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="relative group">
              <div className="absolute top-12 left-full w-full h-0.5 bg-[#000080]/20 hidden md:block" style={{ width: 'calc(100% - 3rem)' }} />
              <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-lg group-hover:border-[#000080]/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#000080] text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">Open Your Gold IRA</h3>
                <p className="text-slate-600 mb-6 font-medium">
                  Choose a reputable Gold IRA company. They handle all the paperwork and set up
                  your self-directed IRA with an approved custodian.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#B22234] font-bold">
                  <Building2 className="h-4 w-4" />
                  <span>Takes 10-15 minutes</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute top-12 left-full w-full h-0.5 bg-[#000080]/20 hidden md:block" style={{ width: 'calc(100% - 3rem)' }} />
              <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-lg group-hover:border-[#000080]/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#000080] text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">Fund with a Rollover</h3>
                <p className="text-slate-600 mb-6 font-medium">
                  Transfer funds from your existing 401(k), IRA, or other retirement account.
                  Direct rollovers are 100% tax-free with no penalties.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#B22234] font-bold">
                  <RefreshCw className="h-4 w-4" />
                  <span>5-14 business days</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-lg group-hover:border-[#000080]/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#000080] text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">Buy Physical Gold</h3>
                <p className="text-slate-600 mb-6 font-medium">
                  Select IRS-approved gold coins and bars. Your metals are stored in a secure,
                  insured depository—protected for your retirement.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#B22234] font-bold">
                  <Coins className="h-4 w-4" />
                  <span>Own real gold</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#000080] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-black mb-4">
                  How We Help You Find the Right Company
                </h3>
                <p className="text-blue-100 max-w-2xl mx-auto font-medium text-lg">
                  The Gold IRA industry has good companies and bad ones. We&apos;ve done the research
                  so you don&apos;t have to.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-amber-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Unbiased Comparisons</h4>
                  <p className="text-blue-100 text-sm font-medium">
                    We analyze fees, BBB ratings, complaint history, and customer reviews
                    to give you objective rankings.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Education First</h4>
                  <p className="text-blue-100 text-sm font-medium">
                    We believe in informed decisions. Our guides explain everything—no
                    sales pressure, just facts.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">For Real People</h4>
                  <p className="text-blue-100 text-sm font-medium">
                    Written for regular Americans protecting their retirement—not Wall Street
                    insiders or day traders.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link
                  href="/what-is-a-gold-ira"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#000080] font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
                >
                  Learn Gold IRA Basics
                </Link>
                <Link
                  href="/rollover"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B22234] text-white font-bold rounded-xl hover:bg-[#8b1c2a] transition-colors shadow-lg"
                >
                  See Rollover Guides
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
