"use client";

// Golden Circle: WHY Section (Hero)
// Patriot Light Theme
// Speaking to 55+ blue collar workers who HAVE saved and need protection

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Clock, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-20 md:py-32">
      {/* Patriot Wash */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#000080]/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Acknowledgment Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#000080]/10 border border-[#000080]/20 rounded-full text-[#000080] text-sm font-bold mb-8 shadow-sm">
              For Hard-Working Americans Who&apos;ve Done It Right
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight mb-8 text-[#000080]">
              You&apos;ve Worked 30 Years for This.<br className="hidden md:block" />
              <span className="text-[#B22234] underline decoration-4 underline-offset-8 decoration-[#B22234]">
                Don&apos;t Let Wall Street Take It Now.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
              You put in the hours. You skipped the vacations. You built a nest egg most people only dream about.
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
              But one market crash in your final years before retirement could wipe out decades of sacrifice.<br className="hidden md:block" />
              <strong className="text-[#000080]">A Gold IRA protects what you&apos;ve built. No Wall Street games. No BS.</strong>
            </p>
          </motion.div>

          {/* Stats That Reflect Their Reality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#000080]/30 hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#000080]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="h-6 w-6 text-[#000080]" />
                </div>
              </div>
              <div className="text-3xl font-black text-[#000080] mb-2">30+ Years</div>
              <p className="text-slate-500 text-sm font-medium">Of early mornings, overtime, and sacrifice</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#B22234]/30 hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#B22234]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-[#B22234]" />
                </div>
              </div>
              <div className="text-3xl font-black text-[#B22234] mb-2">5-10 Years</div>
              <p className="text-slate-500 text-sm font-medium">The danger zone before retirement</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-green-600/30 hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-green-700" />
                </div>
              </div>
              <div className="text-3xl font-black text-green-700 mb-2">5,000+ Years</div>
              <p className="text-slate-500 text-sm font-medium">Gold has held its value</p>
            </div>
          </motion.div>

          {/* Protective CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#000080] hover:bg-[#000060] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <Shield className="w-5 h-5 mr-2" />
              Protect What You&apos;ve Built
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#000080] text-[#000080] font-bold text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              See Protection Options
            </a>
          </motion.div>

          {/* Trust Signal */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-slate-500 text-sm font-medium"
          >
            Straight talk. No pushy sales. Just honest information to protect your life&apos;s work.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
