import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Testimonials } from "@/components/home/Testimonials";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedPartner } from "@/components/home/FeaturedPartner";
import { QuizCTA } from "@/components/home/QuizCTA";
import { WealthCalculator } from "@/components/home/WealthCalculator";
import { DailyBrief } from "@/components/home/DailyBrief";
import { WhySection, DeepWhySection } from "@/components/home/GoldenCircle";
import { HowSection } from "@/components/home/GoldenCircle";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { UrgencySection } from "@/components/home/UrgencySection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { NewsletterSignup } from "@/components/email/NewsletterSignup";
import { Container } from "@/components/ui/Container";
import { AlertTriangle, BookOpen, RefreshCw, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <div className="flex-grow">
        {/* ============================================ */}
        {/* GOLDEN CIRCLE CONVERSION FLOW               */}
        {/* ============================================ */}

        {/* 1. VISCERAL WHY: Emotional hook - "Your Retirement Is Under Attack" */}
        <WhySection />

        {/* 2. AUTHORITY: Instant credibility - Stats & Rich Dad philosophy */}
        <AuthoritySection />

        {/* 3. DEEP WHY: Our mission - "Why We Do This" */}
        <DeepWhySection />

        {/* 4. AGITATION: Make the pain real - Wealth Calculator */}
        <WealthCalculator />

        {/* 5. QUIZ CTA: Capture intent right after pain point */}
        <QuizCTA />

        {/* 6. CURRENT MARKET: Daily Brief - Spot prices & headlines */}
        <DailyBrief />

        {/* 7. SOLUTION LOGIC: Why gold works - Rich Dad framework */}
        <ValueProps />

        {/* 8. HOW: Reduce anxiety - "3 Simple Steps" */}
        <HowSection />

        {/* 9. WHAT: The recommendation - Augusta Featured Partner */}
        <FeaturedPartner />

        {/* 10. SOCIAL PROOF: "People like me" - Testimonials */}
        <Testimonials />

        {/* 11. URGENCY: Why act NOW - Gold prices, central banks */}
        <UrgencySection />

        {/* 11.5. QUICK NAVIGATION: Links to key resources */}
        <section className="py-16 bg-slate-800/50 border-y border-white/10">
          <Container>
            <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
              Explore Our Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/scenarios"
                className="group bg-red-500/10 border border-red-500/20 rounded-xl p-6 hover:bg-red-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">Crisis Scenarios</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Understand economic threats and how to protect your retirement from dollar collapse, inflation, and market crashes.
                </p>
                <span className="inline-flex items-center gap-1 text-red-400 text-sm font-medium">
                  View Scenarios <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/learn"
                className="group bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 hover:bg-amber-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 text-amber-400" />
                  <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Learning Center</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Expert guides on 401k management, RMDs, fees, withdrawal strategies, and retirement planning.
                </p>
                <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium">
                  Browse Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/rollover"
                className="group bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:bg-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="h-6 w-6 text-blue-400" />
                  <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Rollover Guides</h3>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Step-by-step instructions for rolling over your 401k, IRA, TSP, or other retirement account to gold.
                </p>
                <span className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium">
                  Start Rollover <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* 12. NEWSLETTER: Stay informed - Weekly insights */}
        <section className="py-16 bg-transparent">
          <Container>
            <NewsletterSignup variant="footer" />
          </Container>
        </section>

        {/* 13. COMPARISON: For researchers - All roads lead to Augusta */}
        <ComparisonTable />

        {/* 14. TRUST: Final reassurance - Badges */}
        <TrustBadges />
      </div>

      <Footer />
    </main>
  );
}
