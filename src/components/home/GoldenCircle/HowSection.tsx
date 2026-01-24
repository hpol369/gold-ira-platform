"use client";

// Golden Circle: HOW Section
// The process that differentiates - how Gold IRAs work and how we help

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  RefreshCw,
  Building2,
  Coins,
  CheckCircle2,
  ArrowRight,
  Scale,
  BookOpen,
  Users
} from "lucide-react";

export function HowSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
              The Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How a Gold IRA Protects Your Retirement
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
            <div className="relative">
              <div className="absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent hidden md:block" style={{ width: 'calc(100% - 3rem)' }} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Open Your Gold IRA</h3>
                <p className="text-slate-400 mb-4">
                  Choose a reputable Gold IRA company. They handle all the paperwork and set up
                  your self-directed IRA with an approved custodian.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
                  <Building2 className="h-4 w-4" />
                  <span>Takes 10-15 minutes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent hidden md:block" style={{ width: 'calc(100% - 3rem)' }} />
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fund with a Rollover</h3>
                <p className="text-slate-400 mb-4">
                  Transfer funds from your existing 401(k), IRA, or other retirement account.
                  Direct rollovers are 100% tax-free with no penalties.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
                  <RefreshCw className="h-4 w-4" />
                  <span>5-14 business days</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Buy Physical Gold</h3>
                <p className="text-slate-400 mb-4">
                  Select IRS-approved gold coins and bars. Your metals are stored in a secure,
                  insured depository—protected for your retirement.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
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
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How We Help You Find the Right Company
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                The Gold IRA industry has good companies and bad ones. We&apos;ve done the research
                so you don&apos;t have to.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-amber-400" />
                </div>
                <h4 className="font-bold text-lg mb-2">Unbiased Comparisons</h4>
                <p className="text-slate-400 text-sm">
                  We analyze fees, BBB ratings, complaint history, and customer reviews
                  to give you objective rankings.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-bold text-lg mb-2">Education First</h4>
                <p className="text-slate-400 text-sm">
                  We believe in informed decisions. Our guides explain everything—no
                  sales pressure, just facts.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-bold text-lg mb-2">For Real People</h4>
                <p className="text-slate-400 text-sm">
                  Written for regular Americans protecting their retirement—not Wall Street
                  insiders or day traders.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/what-is-a-gold-ira"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Learn Gold IRA Basics
              </Link>
              <Link
                href="/rollover"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors"
              >
                See Rollover Guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
