import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Testimonials } from "@/components/home/Testimonials";
import { ValueProps } from "@/components/home/ValueProps";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FeaturedPartner } from "@/components/home/FeaturedPartner";

// Golden Circle: WHY (Hero with visceral pain)
import { WhySection } from "@/components/home/GoldenCircle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow">
        {/* Optimized Golden Circle Flow */}
        {/* 1. WHY: Visceral pain - "Stop Letting Inflation Eat Your Savings" */}
        <WhySection />

        {/* 2. LOGIC: Paper vs Real Assets - Rich Dad framework */}
        <ValueProps />

        {/* 3. HOW: 3 Simple Steps - Reduce anxiety */}
        <ProcessSteps />

        {/* 4. WHAT: The Solution - Augusta (with scarcity badge) */}
        <FeaturedPartner />

        {/* Social Proof */}
        <TrustBadges />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
