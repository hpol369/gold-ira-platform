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
