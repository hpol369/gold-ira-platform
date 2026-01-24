"use client";

// Authority Section - Build instant credibility
// Media logos, trust badges, social proof numbers

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Users, Star, Award, TrendingUp, CheckCircle2 } from "lucide-react";

export function AuthoritySection() {
  const stats = [
    {
      value: "50,000+",
      label: "Americans Educated",
      icon: Users,
    },
    {
      value: "$2B+",
      label: "Assets Protected",
      icon: Shield,
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: Star,
    },
    {
      value: "A+",
      label: "BBB Rated Partners",
      icon: Award,
    },
  ];

  const trustSignals = [
    "BBB Accredited Partners",
    "IRS-Approved Depositories",
    "Segregated Storage",
    "Full Insurance Coverage",
  ];

  return (
    <section className="py-12 bg-slate-800/50 border-y border-white/5">
      <Container>
        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-amber-400" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Signals Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 border-t border-white/10"
        >
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-2 text-sm text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span>{signal}</span>
            </div>
          ))}
        </motion.div>

        {/* Robert Kiyosaki Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-sm font-semibold mb-4">
              <TrendingUp className="h-4 w-4" />
              INSPIRED BY RICH DAD PRINCIPLES
            </div>
            <blockquote className="text-lg md:text-xl text-slate-300 italic mb-4">
              "Savers are losers. The dollar has lost 95% of its value since 1971. The rich don't work for money—they acquire assets that protect and grow their wealth."
            </blockquote>
            <p className="text-slate-500 text-sm">
              — The "Rich Dad" philosophy on why tangible assets matter
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
