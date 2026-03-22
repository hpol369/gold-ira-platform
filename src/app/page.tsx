import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhySection } from "@/components/home/GoldenCircle";
import { TrustBadgeBar } from "@/components/trust/TrustBadgeBar";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { webSiteSchema, siteNavigationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Gold IRA Companies 2026 | Compare Reviews, Fees & Ratings",
  description: "Compare the top Gold IRA companies for 2026. Independent reviews, fee breakdowns, and expert analysis to help you protect your retirement savings with precious metals.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Gold IRA Companies 2026 | Rich Dad Retirement",
    description: "Compare top Gold IRA companies. Independent reviews, fee comparisons, and retirement protection strategies from experts who understand blue-collar retirement.",
    type: "website",
  },
};

// Loading skeleton for consistent CLS prevention
function SectionSkeleton({ height = "h-64" }: { height?: string }) {
  return <div className={`${height} bg-slate-100 animate-pulse rounded-lg`} />;
}

// Section 2: Social Proof + Urgency (merged Authority + Urgency)
const SocialProofUrgency = dynamic(
  () => import("@/components/home/SocialProofUrgency").then(mod => ({ default: mod.SocialProofUrgency })),
  { ssr: true, loading: () => <SectionSkeleton height="h-48" /> }
);

// Section 3: Wealth Calculator
const WealthCalculator = dynamic(
  () => import("@/components/home/WealthCalculator").then(mod => ({ default: mod.WealthCalculator })),
  { ssr: true, loading: () => <SectionSkeleton height="h-96" /> }
);

// Section 4: Augusta Featured Partner
const FeaturedPartner = dynamic(
  () => import("@/components/home/FeaturedPartner").then(mod => ({ default: mod.FeaturedPartner })),
  { ssr: true, loading: () => <SectionSkeleton height="h-72" /> }
);

// Section 5: How It Works
const HowSection = dynamic(
  () => import("@/components/home/GoldenCircle").then(mod => ({ default: mod.HowSection })),
  { ssr: true, loading: () => <SectionSkeleton height="h-80" /> }
);

// Section 5b: What We Offer (Golden Circle: WHAT)
const WhatSection = dynamic(
  () => import("@/components/home/GoldenCircle").then(mod => ({ default: mod.WhatSection })),
  { ssr: true, loading: () => <SectionSkeleton height="h-96" /> }
);

// Section 6: Company Comparison
const ComparisonTable = dynamic(
  () => import("@/components/home/ComparisonTable").then(mod => ({ default: mod.ComparisonTable })),
  { ssr: true, loading: () => <SectionSkeleton height="h-96" /> }
);

// Section 7: Testimonials
const Testimonials = dynamic(
  () => import("@/components/home/Testimonials").then(mod => ({ default: mod.Testimonials })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

// Section 8: Closing CTA
const ClosingCTA = dynamic(
  () => import("@/components/home/ClosingCTA").then(mod => ({ default: mod.ClosingCTA })),
  { ssr: true, loading: () => <SectionSkeleton height="h-48" /> }
);

const siteNavItems = [
  { name: "Gold IRA Guide", url: "/guide/gold-ira-guide" },
  { name: "Best Gold IRA Companies", url: "/best-gold-ira-companies" },
  { name: "Reviews", url: "/reviews" },
  { name: "Calculators", url: "/tools" },
  { name: "Learn", url: "/learn" },
  { name: "News", url: "/news" },
  { name: "Rollover Guide", url: "/rollover" },
  { name: "Get Started", url: "/get-started" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SchemaScript schema={webSiteSchema()} />
      <SchemaScript schema={siteNavigationSchema(siteNavItems)} />
      <Navbar />

      <div className="flex-grow">
        {/* 1. HERO: Emotional hook + primary CTA to /get-started */}
        <WhySection />

        {/* 2. SOCIAL PROOF + URGENCY: Stats + central bank urgency */}
        <SocialProofUrgency />

        {/* 3. WEALTH CALCULATOR: Make the pain real — interactive */}
        <WealthCalculator />

        {/* 4. FEATURED PARTNER: Augusta — the solution */}
        <FeaturedPartner />

        {/* 4b. TRUST BADGES: Social proof credibility bar */}
        <section className="py-6 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <TrustBadgeBar variant="light" />
          </div>
        </section>

        {/* 5. HOW IT WORKS: 3 simple steps — reduce anxiety */}
        <HowSection />

        {/* 5b. WHAT: The tangible offerings — Golden Circle complete */}
        <WhatSection />

        {/* 6. COMPANY COMPARISON: For researchers */}
        <ComparisonTable />

        {/* 7. TESTIMONIALS: Social proof from real people */}
        <Testimonials />

        {/* 8. CLOSING CTA: Final push */}
        <ClosingCTA />
      </div>

      <Footer />
    </main>
  );
}
