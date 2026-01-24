import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Testimonials } from "@/components/home/Testimonials";
import { ValueProps } from "@/components/home/ValueProps";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FeaturedPartner } from "@/components/home/FeaturedPartner";
import { QuizCTA } from "@/components/home/QuizCTA";
import { WealthCalculator } from "@/components/home/WealthCalculator";

// Golden Circle: WHY (Hero with visceral pain)
import { WhySection } from "@/components/home/GoldenCircle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      <div className="flex-grow">
        {/* Optimized Golden Circle Flow */}
        {/* 1. WHY: Visceral pain - "Stop Letting Inflation Eat Your Savings" */}
        <WhySection />

        {/* 1.5 QUIZ CTA: Not sure where to start? */}
        <QuizCTA />

        {/* 2. QUANTIFIABLE WHY: Wealth Calculator - Show the numbers */}
        <WealthCalculator />

        {/* 3. LOGIC: Paper vs Real Assets - Rich Dad framework */}
        <ValueProps />

        {/* 4. HOW: 3 Simple Steps - Reduce anxiety */}
        <ProcessSteps />

        {/* 5. WHAT: The Solution - Augusta (with scarcity badge) */}
        <FeaturedPartner />

        {/* Social Proof */}
        <TrustBadges />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
