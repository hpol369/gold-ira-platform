"use client";

// Section 2: Social Proof + Urgency (merged AuthoritySection + UrgencySection)
// Sprint 11: Compact credibility + urgency in one section

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Users, Shield, Star, Award, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

const stats = [
  { value: "50,000+", label: "Americans Educated", icon: Users },
  { value: "$2B+", label: "Assets Protected", icon: Shield },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "A+", label: "BBB Rated Partners", icon: Award },
];

const trustSignals = [
  "BBB Accredited Partners",
  "IRS-Approved Depositories",
  "Segregated Storage",
  "Full Insurance Coverage",
];

export function SocialProofUrgency() {
  return (
    <section id="social-proof" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Stats + Trust Signals (3 cols) */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-semibold text-[#000080] mb-8"
            >
              50,000+ Americans have already protected their retirement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-full bg-[#C5A55A]/10">
                      <stat.icon className="h-4 w-4 text-[#C5A55A]" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#000080]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-1.5 text-sm text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                  <span>{signal}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Urgency + CTA (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 bg-[#000080] rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#C5A55A] text-sm font-bold mb-4">
                <TrendingUp className="h-4 w-4" />
                WHY SMART MONEY IS MOVING
              </div>
              <p className="text-xl md:text-2xl font-serif font-bold leading-snug mb-4">
                Central banks bought{" "}
                <span className="text-[#C5A55A]">1,037 tons</span> of gold in 2023.
              </p>
              <p className="text-blue-200 text-base mb-6">
                They&apos;re preparing. Are you?
              </p>
              <Link
                href="/get-started?ref=homepage-urgency"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#000080] font-bold rounded-xl hover:from-[#D4AF37] hover:to-[#B8860B] transition-all duration-300 shadow-lg group"
              >
                Check Your Options
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
