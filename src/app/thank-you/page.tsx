// src/app/thank-you/page.tsx
// Thank you page after lead submission - instant value delivery

import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Download, Phone, Clock, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Your Free Kit is On The Way | Rich Dad Retirement",
  description: "Your free Gold IRA information kit is on its way. Download your instant guide while you wait.",
  robots: { index: false, follow: false }, // Don't index thank you pages
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-8">
              <CheckCircle2 className="h-10 w-10 text-emerald-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              You&apos;re All Set!
            </h1>

            <p className="text-xl text-slate-300 mb-8">
              Your free Gold IRA kit is being prepared. A specialist from Augusta Precious Metals will contact you within 24 hours.
            </p>

            {/* What Happens Next */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-lg font-bold text-white mb-6 text-center">What Happens Next?</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Expect a Call",
                    desc: "A Gold IRA specialist will reach out within 24 hours to answer your questions.",
                  },
                  {
                    icon: Download,
                    title: "Your Kit Ships Free",
                    desc: "A physical information kit will be mailed to you at no cost.",
                  },
                  {
                    icon: Shield,
                    title: "No Obligation",
                    desc: "This is purely educational. No pressure, no commitment required.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instant Download CTA */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-2 text-amber-400 mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">While You Wait...</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Download Your Instant Guide
              </h3>
              <p className="text-slate-300 mb-6">
                Get started learning about Gold IRAs right now with our free digital guide.
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link href="/guide/gold-ira-beginners-guide">
                  Read the Beginner&apos;s Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Continue Exploring */}
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/best-gold-ira-companies"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 text-left transition-all"
              >
                <h3 className="font-semibold text-white mb-2">Compare Companies</h3>
                <p className="text-slate-400 text-sm">See how Augusta stacks up against other providers.</p>
              </Link>
              <Link
                href="/rollover"
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 text-left transition-all"
              >
                <h3 className="font-semibold text-white mb-2">Rollover Guide</h3>
                <p className="text-slate-400 text-sm">Learn how to roll over your 401k or IRA.</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
