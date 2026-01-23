"use client";

// Golden Circle: WHY Section
// The emotional core - why people should protect their retirement with gold

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, AlertTriangle, TrendingDown, Heart } from "lucide-react";

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* The Core WHY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8">
              The Question That Matters
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              What happens to your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                life&apos;s work
              </span>{" "}
              if the dollar keeps losing value?
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
              You&apos;ve spent decades building your retirement savings.
              But inflation, market crashes, and economic uncertainty threaten everything you&apos;ve worked for.
            </p>
          </motion.div>

          {/* The Fears/Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <TrendingDown className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Inflation Erodes Savings</h3>
              <p className="text-slate-400 text-sm">
                At 3% inflation, $500,000 becomes worth just $372,000 in purchasing power over 10 years.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Market Crashes Devastate</h3>
              <p className="text-slate-400 text-sm">
                The 2008 crash wiped out 37% of retirement portfolios. Many never fully recovered.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Outliving Your Money</h3>
              <p className="text-slate-400 text-sm">
                47% of Americans fear running out of money in retirement more than death itself.
              </p>
            </div>
          </motion.div>

          {/* The Hope/Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-amber-400" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              There&apos;s a reason the wealthy have always owned gold.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              For 5,000 years, gold has preserved wealth through every crisis, war, and economic collapse.
              Now, with a Gold IRA, you can hold physical gold in your retirement account—tax-free.
            </p>
            <Link
              href="/why-gold"
              className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              Discover why gold protects retirement →
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
