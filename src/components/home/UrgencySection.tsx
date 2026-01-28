"use client";

// Urgency Section - Create FOMO and drive immediate action
// Gold price trends, central bank buying, limited offers

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrendingUp, Clock, AlertTriangle, ArrowRight, Building2, Globe } from "lucide-react";
import Link from "next/link";

export function UrgencySection() {
  const urgencyPoints = [
    {
      icon: TrendingUp,
      stat: "$2,400+",
      label: "Gold Price Per Oz",
      desc: "Near all-time highs",
      color: "amber",
    },
    {
      icon: Building2,
      stat: "1,037 tons",
      label: "Central Bank Buying",
      desc: "Record purchases in 2023",
      color: "blue",
    },
    {
      icon: Globe,
      stat: "35+",
      label: "Countries Stockpiling",
      desc: "De-dollarization accelerating",
      color: "green",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Background pulse effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B22234]/5 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Urgency Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] text-sm font-bold mb-6">
              <AlertTriangle className="h-4 w-4" />
              Why Smart Money Is Moving NOW
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#000080] mb-4">
              The Window Is <span className="text-[#B22234]">Closing</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Central banks are buying gold at record rates. Billionaires are diversifying out of dollars.
              The question isn't <em>if</em> you should protect your retirement—it's whether you'll do it in time.
            </p>
          </div>

          {/* Urgency Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {urgencyPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className={`w-14 h-14 rounded-xl bg-${point.color}-500/20 flex items-center justify-center mx-auto mb-4`}>
                  <point.icon className={`h-7 w-7 text-${point.color}-400`} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{point.stat}</div>
                <div className="text-sm font-semibold text-slate-600 mb-1">{point.label}</div>
                <div className="text-xs text-slate-500">{point.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* What's Happening Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 mb-10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#B22234]/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#B22234]" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-[#000080] mb-2">
                  What the Wealthy Already Know
                </h3>
                <p className="text-slate-600">
                  While most Americans keep their retirement in paper assets, <span className="text-[#B22234] font-semibold">central banks added 1,037 tons of gold</span> to their reserves in 2023 alone. China, Russia, India—they're all preparing.
                  <span className="text-slate-900 font-semibold"> The question is: are you?</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="xl"
              className="bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold text-lg px-10 shadow-lg shadow-[#B22234]/25"
              asChild
            >
              <Link href="/get-started">
                Protect Your Retirement Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-slate-500 text-sm mt-4">
              Free consultation • No obligation • Takes 2 minutes
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
