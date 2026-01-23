"use client";

// Golden Circle: WHAT Section
// The tangible offerings - what we provide and featured partner

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import {
  Star,
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Map,
  Scale,
  Phone
} from "lucide-react";

export function WhatSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
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
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Make an Informed Decision
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Research. Compare. Decide. We provide the tools and information—you stay in control.
            </p>
          </motion.div>

          {/* Resource Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            <Link
              href="/reviews"
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Company Reviews
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                In-depth reviews of 15+ Gold IRA companies with ratings, fees, and pros/cons.
              </p>
              <span className="text-amber-600 font-semibold text-sm flex items-center gap-1">
                Read Reviews
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/compare"
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Company Comparisons
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Side-by-side comparisons to help you choose between top providers.
              </p>
              <span className="text-amber-600 font-semibold text-sm flex items-center gap-1">
                Compare Companies
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/rollover"
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Rollover Guides
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Step-by-step guides for Fidelity, Vanguard, Schwab, TSP, and more.
              </p>
              <span className="text-amber-600 font-semibold text-sm flex items-center gap-1">
                Start Rollover
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/why-gold"
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Why Gold
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Research on gold as inflation protection and portfolio diversification.
              </p>
              <span className="text-amber-600 font-semibold text-sm flex items-center gap-1">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Featured Partner - Augusta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="featured-partner"
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left - Company Info */}
                <div className="lg:w-3/5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full">
                      #1 Recommended
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full whitespace-nowrap">
                      Best for $50,000+
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Augusta Precious Metals
                  </h3>

                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Augusta has built their reputation on education, not sales pressure.
                    They offer a free one-on-one web conference covering how precious metals
                    fit into retirement planning—no obligation, no hard sell.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Zero BBB complaints (7+ years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">4.97/5 Trustpilot rating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Fee waiver programs available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Lifetime customer support</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-lg"
                      asChild
                    >
                      <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2">
                          Get Free Gold IRA Kit
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <Link href="/reviews/augusta-precious-metals">
                        Read Full Review
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right - Trust Badges */}
                <div className="lg:w-2/5">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h4 className="text-white font-bold mb-6 text-center">Trust & Ratings</h4>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-blue-800">BBB</span>
                          </div>
                          <span className="text-white font-medium">BBB Rating</span>
                        </div>
                        <span className="text-amber-400 font-bold text-lg">A+</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#00b67a] rounded-lg flex items-center justify-center">
                            <Star className="h-5 w-5 text-white fill-white" />
                          </div>
                          <span className="text-white font-medium">Trustpilot</span>
                        </div>
                        <span className="text-amber-400 font-bold text-lg whitespace-nowrap">4.97/5</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Award className="h-10 w-10 text-amber-400" />
                          <span className="text-white font-medium">Our Rating</span>
                        </div>
                        <span className="text-amber-400 font-bold text-lg whitespace-nowrap">4.98/5</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-10 w-10 text-slate-400" />
                          <span className="text-white font-medium">Minimum</span>
                        </div>
                        <span className="text-white font-bold text-lg whitespace-nowrap">$50,000</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 text-center mt-6">
                      Updated January 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-amber-500/10 border-t border-amber-500/20 px-8 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-300 text-sm">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Free consultation with no obligation—just education
                </p>
                <a
                  href={AFFILIATE_LINKS.augusta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors"
                >
                  Request Your Free Kit →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
