import { NavbarV2 } from "@/components/home/v2/NavbarV2";
import { HeroSectionV2 } from "@/components/home/v2/HeroSection";
import { TrustBar } from "@/components/home/v2/TrustBar";
import { ProblemSection } from "@/components/home/v2/ProblemSection";
import { CompaniesTeaser } from "@/components/home/v2/CompaniesTeaser";
import { HowItWorksSection } from "@/components/home/v2/HowItWorksSection";
import { ProofSection } from "@/components/home/v2/ProofSection";
import { CTASection } from "@/components/home/v2/CTASection";
import { FooterV2 } from "@/components/home/v2/FooterV2";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0C0D18] text-[#F6F4EF]">
      <NavbarV2 />

      <div className="flex-grow">
        {/* 1. Hero + live ticker + calculator widget */}
        <HeroSectionV2 />

        {/* 2. Trust bar (BBB / Money / fiduciary etc.) */}
        <TrustBar />

        {/* 3. The three silent threats (problem agitation) */}
        <ProblemSection />

        {/* 4. Top 4 custodians — restyled ranking teaser */}
        <CompaniesTeaser />

        {/* 5. How it works — 3 steps */}
        <HowItWorksSection />

        {/* 6. Social proof — verified testimonials */}
        <ProofSection />

        {/* 7. Final CTA + newsletter capture */}
        <CTASection />
      </div>

      <FooterV2 />
    </main>
  );
}
