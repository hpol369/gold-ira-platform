"use client";

// Golden Circle: WHY Section (Hero)
// Visceral pain headline - immediate emotional hook

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TrendingDown, AlertTriangle, Coins } from "lucide-react";

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Visceral Pain Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-bold mb-6">
              Your Retirement Is Under Attack
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Stop Letting Inflation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                Eat Your Savings
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Every day you wait, the dollar buys less. Your $500,000 retirement?
              <span className="text-red-400 font-semibold"> Worth $372,000 in just 10 years</span> at current inflation rates.
            </p>
          </motion.div>

          {/* Quick Pain Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-red-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-red-400 mb-1">-25%</div>
              <p className="text-slate-400 text-xs">Dollar purchasing power lost since 2020</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-amber-400 mb-1">37%</div>
              <p className="text-slate-400 text-xs">Average portfolio loss in 2008 crash</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-green-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-green-400 mb-1">+700%</div>
              <p className="text-slate-400 text-xs">Gold price increase since 2000</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
