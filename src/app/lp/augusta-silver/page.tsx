import type { Metadata } from "next";
import {
  LPHeader,
  LPHero,
  LPTrustBar,
  LPProcess,
  LPFinalCTA,
  LPFooter,
  type Step,
} from "@/components/lp";
import { Shield, GraduationCap, DollarSign, Star, Award, BookOpen, Users, CheckCircle } from "lucide-react";

// noindex for paid landing pages - don't compete with SEO pages
export const metadata: Metadata = {
  title: "Why Augusta Is Our #1 Silver IRA Pick | Free Consultation",
  description:
    "After reviewing 12+ companies, here's why Augusta stands out for silver investors. Zero BBB complaints, education-first approach, transparent pricing.",
  robots: {
    index: false,
    follow: false,
  },
};

// Track source for all CTAs on this page
const TRACK_SOURCE = "lp-augusta-silver";

// 3-step process for the warmup page
const processSteps: Step[] = [
  {
    icon: "phone",
    title: "Free Consultation",
    description:
      "Speak with a silver specialist who will answer all your questions without any pressure or obligation.",
  },
  {
    icon: "refresh-ccw",
    title: "Easy Rollover",
    description:
      "Augusta handles all the paperwork to transfer your existing 401k, IRA, or retirement account tax-free.",
  },
  {
    icon: "coins",
    title: "Own Physical Silver",
    description:
      "Your IRS-approved silver is stored in a secure depository with full insurance protection.",
  },
];

export default function AugustaSilverWarmupPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sticky Header */}
      <LPHeader />

      {/* Hero Section */}
      <LPHero
        headline="Why Augusta Is Our #1 Silver IRA Recommendation"
        subheadline="After reviewing 12+ companies, here's why Augusta stands out for silver investors."
        ctaText="Get Your Free Consultation"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Trust Bar */}
      <LPTrustBar rating={4.9} reviewCount={2847} bbbRating="A+" />

      {/* The Augusta Difference - 3 Key Differentiators */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            The Augusta Difference
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            What sets Augusta apart from every other silver IRA company
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Zero BBB Complaints */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="h-14 w-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                ZERO BBB Complaints
              </h3>
              <p className="text-slate-400">
                In an industry full of complaints and lawsuits, Augusta has maintained a perfect record since inception. That&apos;s not marketing - that&apos;s verifiable at BBB.org.
              </p>
            </div>

            {/* Card 2: Education First */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="h-14 w-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Education First, Sales Never
              </h3>
              <p className="text-slate-400">
                Start with a 45-minute web conference led by a Harvard-trained economist. No sales pitch. Just honest education about whether silver is right for you.
              </p>
            </div>

            {/* Card 3: Transparent Pricing */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="h-14 w-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6">
                <DollarSign className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Transparent Pricing
              </h3>
              <p className="text-slate-400">
                Know exactly what you&apos;re paying. No hidden buyback spreads or surprise fees. Flat $180/year storage - same whether you have $50K or $500K in silver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-slate-800/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Why Thousands Trust Augusta
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {/* A+ BBB Rating */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-white font-bold">A+ BBB Rating</div>
              <div className="text-slate-400 text-sm">Perfect record</div>
            </div>

            {/* 4.9/5 Reviews */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-white font-bold">4.9/5 Rating</div>
              <div className="text-slate-400 text-sm">2,847+ reviews</div>
            </div>

            {/* Joe Montana */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-white font-bold">Joe Montana</div>
              <div className="text-slate-400 text-sm">Brand ambassador</div>
            </div>

            {/* Free Resources */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-white font-bold">Free Resources</div>
              <div className="text-slate-400 text-sm">Education library</div>
            </div>

            {/* Lifetime Support */}
            <div className="flex flex-col items-center text-center p-4 col-span-2 md:col-span-1">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-amber-400" />
              </div>
              <div className="text-white font-bold">Lifetime Support</div>
              <div className="text-slate-400 text-sm">Always there for you</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <div className="absolute -top-3 left-6 bg-slate-900 px-2">
              <span className="text-amber-400 text-4xl">&ldquo;</span>
            </div>
            <blockquote className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4">
              Augusta made the entire process simple. No pressure, just education. I now feel confident about my silver IRA and my retirement is better protected.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="text-amber-400 font-bold">RK</span>
              </div>
              <div>
                <div className="text-white font-semibold">Robert K.</div>
                <div className="text-slate-400 text-sm">Verified Augusta Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <LPProcess
        headline="How It Works (3 Simple Steps)"
        steps={processSteps}
        ctaText="Speak With a Silver Specialist"
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Final CTA */}
      <LPFinalCTA
        headline="Ready to Protect Your Retirement with Silver?"
        subheadline="Get your free, no-obligation consultation today"
        ctaText="Speak With a Silver Specialist"
        trustPoints={["No obligation", "100% free", "Takes 15 minutes"]}
        linkContext="silver"
        trackSource={TRACK_SOURCE}
      />

      {/* Minimal Footer */}
      <LPFooter />
    </div>
  );
}
