"use client";

// Golden Circle: DEEP WHY Section
// Patriot Light Theme
// The emotional core - why we exist, our mission, shared beliefs

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Quote, Heart, Shield, Users } from "lucide-react";

export function DeepWhySection() {
  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">

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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full text-amber-700 text-sm font-bold">
              <Heart className="h-4 w-4 fill-amber-700" />
              Why We Do This
            </span>
          </div>

          {/* Main Story */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#000080]/10 flex items-center justify-center">
                <Quote className="h-8 w-8 text-[#000080]" />
              </div>
            </div>

            {/* The Story */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif font-black text-[#000080] leading-tight">
                We Started This Because<br />
                <span className="text-[#B22234]">The System Failed Our Parents</span>
              </h2>

              <div className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto space-y-4 font-medium">
                <p>
                  In 2008, we watched our parents lose <span className="text-[#B22234] font-bold">40% of their retirement savings</span> in a single year. They did everything right—worked hard for 35 years, saved diligently, trusted their financial advisor.
                </p>
                <p>
                  <span className="text-[#000080] font-bold">And the system failed them.</span>
                </p>
                <p>
                  Wall Street got bailouts. Banks got bonuses. Our parents got a letter saying their retirement dreams were cut in half.
                </p>
              </div>

              {/* The Realization */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
                  That's when we discovered what the wealthy have known for centuries: <span className="text-[#000080] font-bold">real assets protect real wealth</span>. Gold isn't a get-rich-quick scheme. It's insurance against a financial system that's rigged against regular people.
                </p>
              </div>

              {/* Our Mission */}
              <div className="pt-10">
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-md">
                  <h3 className="text-2xl font-bold text-[#000080] mb-4 font-serif">Our Mission</h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    We built Rich Dad Retirement because <span className="text-[#000080] font-bold">you deserve the same protection that billionaires and central banks have</span>. No jargon. No pressure. No hidden agendas. Just honest information to help you make the right choice for your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-slate-200">
              <div className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-[#000080] mb-2 text-lg">Education First</h4>
                <p className="text-sm text-slate-500 font-medium">We teach, we don't sell. Your decision should be informed, not pressured.</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold text-[#000080] mb-2 text-lg">For Regular People</h4>
                <p className="text-sm text-slate-500 font-medium">We write for hardworking Americans, not Wall Street insiders.</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-[#000080] mb-2 text-lg">Your Interests First</h4>
                <p className="text-sm text-slate-500 font-medium">We only recommend companies we'd trust with our own family's retirement.</p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 italic text-xl font-serif font-medium">
              "The best time to protect your wealth was 10 years ago.<br />
              The second best time is <span className="text-[#B22234] font-bold not-italic">today</span>."
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
