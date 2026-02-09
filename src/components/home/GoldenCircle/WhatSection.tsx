"use client";

// Golden Circle: WHAT Section
// Patriot Light Theme
// The tangible offerings - what we provide and featured partner

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";
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
  const { openModal } = useLeadModal();

  const handleCtaClick = () => {
    openModal("default", "homepage-what-section");
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
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
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-[#000080] mb-6">
              Everything You Need to Make an Informed Decision
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
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
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#000080]/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Star className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-lg text-[#000080] mb-2 group-hover:text-blue-800 transition-colors">
                Company Reviews
              </h3>
              <p className="text-sm text-slate-600 mb-4 font-medium">
                In-depth reviews of 15+ Gold IRA companies with ratings, fees, and pros/cons.
              </p>
              <span className="text-[#B22234] font-bold text-sm flex items-center gap-1">
                Read Reviews
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/compare"
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#000080]/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Scale className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-lg text-[#000080] mb-2 group-hover:text-blue-800 transition-colors">
                Company Comparisons
              </h3>
              <p className="text-sm text-slate-600 mb-4 font-medium">
                Side-by-side comparisons to help you choose between top providers.
              </p>
              <span className="text-[#B22234] font-bold text-sm flex items-center gap-1">
                Compare Companies
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/rollover"
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#000080]/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <FileText className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-bold text-lg text-[#000080] mb-2 group-hover:text-blue-800 transition-colors">
                Rollover Guides
              </h3>
              <p className="text-sm text-slate-600 mb-4 font-medium">
                Step-by-step guides for Fidelity, Vanguard, Schwab, TSP, and more.
              </p>
              <span className="text-[#B22234] font-bold text-sm flex items-center gap-1">
                Start Rollover
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/why-gold"
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#000080]/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="font-bold text-lg text-[#000080] mb-2 group-hover:text-blue-800 transition-colors">
                Why Gold
              </h3>
              <p className="text-sm text-slate-600 mb-4 font-medium">
                Research on gold as inflation protection and portfolio diversification.
              </p>
              <span className="text-[#B22234] font-bold text-sm flex items-center gap-1">
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
            className="bg-[#000080] rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left - Company Info */}
                <div className="lg:w-3/5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full shadow-sm">
                      #1 Recommended
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full whitespace-nowrap border border-white/10">
                      Best for $50,000+
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-6">
                    Augusta Precious Metals
                  </h3>

                  <p className="text-lg text-blue-100 mb-8 leading-relaxed font-medium">
                    Augusta has built their reputation on education, not sales pressure.
                    They offer a free one-on-one web conference covering how precious metals
                    fit into retirement planning—no obligation, no hard sell.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-700 flex-shrink-0" />
                      <span className="text-white font-medium">Zero BBB complaints (7+ years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-700 flex-shrink-0" />
                      <span className="text-white font-medium">4.97/5 Trustpilot rating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-700 flex-shrink-0" />
                      <span className="text-white font-medium">Fee waiver programs available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-700 flex-shrink-0" />
                      <span className="text-white font-medium">Lifetime customer support</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold shadow-lg text-lg px-8"
                      onClick={handleCtaClick}
                    >
                      <span className="flex items-center gap-2">
                        Get Free Gold IRA Kit
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 font-bold text-lg"
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
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                    <h4 className="text-white font-bold mb-6 text-center text-xl">Trust & Ratings</h4>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-xs font-black text-[#000080]">BBB</span>
                          </div>
                          <span className="text-white font-bold">BBB Rating</span>
                        </div>
                        <span className="text-amber-700 font-black text-xl">A+</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#00b67a] rounded-lg flex items-center justify-center">
                            <Star className="h-5 w-5 text-white fill-white" />
                          </div>
                          <span className="text-white font-bold">Trustpilot</span>
                        </div>
                        <span className="text-amber-700 font-black text-xl whitespace-nowrap">4.97/5</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Award className="h-10 w-10 text-amber-700" />
                          <span className="text-white font-bold">Our Rating</span>
                        </div>
                        <span className="text-amber-700 font-black text-xl whitespace-nowrap">4.98/5</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-10 w-10 text-blue-200" />
                          <span className="text-white font-bold">Minimum</span>
                        </div>
                        <span className="text-white font-bold text-xl whitespace-nowrap">$50,000</span>
                      </div>
                    </div>

                    <p className="text-xs text-blue-200 text-center mt-6 font-medium">
                      Updated January 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black/20 border-t border-white/10 px-8 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-blue-100 text-sm font-medium">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Free consultation with no obligation—just education
                </p>
                <button
                  onClick={handleCtaClick}
                  className="text-amber-700 font-bold text-sm hover:text-amber-800 transition-colors uppercase tracking-wide"
                >
                  Request Your Free Kit →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
