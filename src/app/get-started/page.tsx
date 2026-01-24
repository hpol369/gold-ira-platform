// src/app/get-started/page.tsx
// Custom lead capture form - stays on brand before redirecting to Augusta

import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { Container } from "@/components/ui/Container";
import { Shield, Clock, Gift, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Your Free Gold IRA Kit | Rich Dad Retirement",
  description: "Request your free Gold IRA information kit. Learn how to protect your retirement savings with physical gold and silver. No obligation, 100% free.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Value Prop */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
                <Gift className="h-4 w-4" />
                100% Free - No Obligation
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Get Your Free
                <span className="text-amber-400"> Gold IRA Kit</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8">
                Discover how thousands of Americans are protecting their retirement savings from inflation, market crashes, and economic uncertainty.
              </p>

              {/* What You Get */}
              <div className="space-y-4 mb-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Your Free Kit Includes:
                </h3>
                <div className="space-y-3">
                  {[
                    "Gold IRA Investment Guide (PDF)",
                    "Current Gold & Silver Pricing",
                    "Rollover Process Explained Step-by-Step",
                    "Fee Comparison Chart",
                    "One-on-One Consultation (Optional)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-amber-400" />
                  <span>Your info is secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <span>Takes 30 seconds</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <LeadCaptureForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-slate-800/50 border-y border-white/10">
        <Container>
          <div className="text-center">
            <p className="text-slate-400 mb-4">Trusted by thousands of Americans protecting their retirement</p>
            <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold text-white">
              <div>
                <span className="text-amber-400">4.9</span>/5 Rating
              </div>
              <div>
                <span className="text-amber-400">1,800+</span> Reviews
              </div>
              <div>
                <span className="text-amber-400">A+</span> BBB Rating
              </div>
              <div>
                <span className="text-amber-400">$2B+</span> Assets Protected
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
