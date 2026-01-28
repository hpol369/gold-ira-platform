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
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-24 pb-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 border border-emerald-200 mb-8">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-4">
              You&apos;re All Set!
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              Your free Gold IRA kit is being prepared. A specialist from Augusta Precious Metals will contact you within 24 hours.
            </p>

            {/* What Happens Next */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 text-left shadow-sm">
              <h2 className="text-lg font-bold text-[#000080] mb-6 text-center">What Happens Next?</h2>
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-[#B22234]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instant Download CTA */}
            <div className="bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-2 text-[#B22234] mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">While You Wait...</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#000080] mb-4">
                Download Your Instant Guide
              </h3>
              <p className="text-slate-600 mb-6">
                Get started learning about Gold IRAs right now with our free digital guide.
              </p>
              <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                <Link href="/guide/gold-ira-guide">
                  Read the Beginner&apos;s Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Continue Exploring */}
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/best-gold-ira-companies"
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-6 text-left transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2">Compare Companies</h3>
                <p className="text-slate-500 text-sm">See how Augusta stacks up against other providers.</p>
              </Link>
              <Link
                href="/rollover"
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-6 text-left transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2">Rollover Guide</h3>
                <p className="text-slate-500 text-sm">Learn how to roll over your 401k or IRA.</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
