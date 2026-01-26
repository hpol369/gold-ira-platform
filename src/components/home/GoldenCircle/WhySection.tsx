"use client";

// Golden Circle: WHY Section (Hero)
// Speaking to 55+ blue collar workers who HAVE saved and need protection

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { Shield, Clock, Briefcase } from "lucide-react";

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
      {/* Ambient Gold Glow */}
      <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.15),transparent)]" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Orbs Decoration */}
      <FloatingOrbs variant="section" />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Acknowledgment Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-amber-400 text-sm font-bold mb-6">
              For Hard-Working Americans Who&apos;ve Done It Right
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              You&apos;ve Worked 30 Years for This.<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Don&apos;t Let Wall Street Take It Now.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
              You put in the hours. You skipped the vacations. You built a nest egg most people only dream about.
            </p>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
              But one market crash in your final years before retirement could wipe out decades of sacrifice.<br className="hidden md:block" />
              <span className="text-amber-400 font-semibold">A Gold IRA protects what you&apos;ve built. No Wall Street games. No BS.</span>
            </p>
          </motion.div>

          {/* Stats That Reflect Their Reality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-amber-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-amber-400 mb-1">30+ Years</div>
              <p className="text-slate-400 text-xs">Of early mornings, overtime, and sacrifice</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-red-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-red-400 mb-1">5-10 Years</div>
              <p className="text-slate-400 text-xs">The danger zone before retirement</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-green-400 mb-1">5,000+ Years</div>
              <p className="text-slate-400 text-xs">Gold has held its value</p>
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
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              <Shield className="w-5 h-5 mr-2" />
              Protect What You&apos;ve Built
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white font-semibold text-lg rounded-xl transition-all duration-300"
            >
              See Your Protection Options
            </a>
          </motion.div>

          {/* Trust Signal */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-slate-500 text-sm"
          >
            Straight talk. No pushy sales. Just honest information to protect your life&apos;s work.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
