"use client";

// Authority Section - Build instant credibility
// Media logos, trust badges, social proof numbers

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
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

  // Stagger animation variants for scroll reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-32 bg-slate-800/50 border-y border-white/5 relative overflow-hidden">
      <FloatingOrbs variant="minimal" />
      <Container className="relative z-10">
        {/* Trust Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                         hover:bg-white/[0.08] hover:-translate-y-2
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.1)]
                         hover:border-amber-400/30
                         transition-all duration-400 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/5">
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
