"use client";

// Golden Circle: DEEP WHY Section
// The emotional core - why we exist, our mission, shared beliefs

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Quote, Heart, Shield, Users } from "lucide-react";

export function DeepWhySection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Label */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-semibold">
              <Heart className="h-4 w-4" />
              Why We Do This
            </span>
          </div>

          {/* Main Story */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                <Quote className="h-8 w-8 text-amber-400" />
              </div>
            </div>

            {/* The Story */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight">
                We Started This Because<br />
                <span className="text-amber-400">The System Failed Our Parents</span>
              </h2>

              <div className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>
                  In 2008, we watched our parents lose <span className="text-red-400 font-semibold">40% of their retirement savings</span> in a single year. They did everything right—worked hard for 35 years, saved diligently, trusted their financial advisor.
                </p>
                <p>
                  <span className="text-white font-semibold">And the system failed them.</span>
                </p>
                <p>
                  Wall Street got bailouts. Banks got bonuses. Our parents got a letter saying their retirement dreams were cut in half.
                </p>
              </div>

              {/* The Realization */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  That's when we discovered what the wealthy have known for centuries: <span className="text-amber-400 font-semibold">real assets protect real wealth</span>. Gold isn't a get-rich-quick scheme. It's insurance against a financial system that's rigged against regular people.
                </p>
              </div>

              {/* Our Mission */}
              <div className="pt-8">
                <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We built Rich Dad Retirement because <span className="text-white font-semibold">you deserve the same protection that billionaires and central banks have</span>. No jargon. No pressure. No hidden agendas. Just honest information to help you make the right choice for your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Education First</h4>
                <p className="text-sm text-slate-400">We teach, we don't sell. Your decision should be informed, not pressured.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-bold text-white mb-2">For Regular People</h4>
                <p className="text-sm text-slate-400">We write for hardworking Americans, not Wall Street insiders.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-amber-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Your Interests First</h4>
                <p className="text-sm text-slate-400">We only recommend companies we'd trust with our own family's retirement.</p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-slate-500 italic text-lg">
              "The best time to protect your wealth was 10 years ago.<br />
              The second best time is <span className="text-amber-400">today</span>."
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
