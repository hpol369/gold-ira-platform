import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrustBadges } from "@/components/home/TrustBadges";
import { Testimonials } from "@/components/home/Testimonials";
import { Education } from "@/components/home/Education";

// Golden Circle Architecture (Simon Sinek's WHY → HOW → WHAT)
import { WhySection, HowSection, WhatSection } from "@/components/home/GoldenCircle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow">
        {/* Golden Circle: WHY → HOW → WHAT */}
        <WhySection />
        <HowSection />
        <WhatSection />

        {/* Social Proof & Education */}
        <TrustBadges />
        <Testimonials />
        <Education />
      </div>

      <Footer />
    </main>
  );
}
