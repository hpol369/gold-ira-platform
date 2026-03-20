import Link from "next/link";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhySection } from "@/components/home/GoldenCircle";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { Container } from "@/components/ui/Container";
import { AlertTriangle, BookOpen, RefreshCw, ArrowRight } from "lucide-react";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { webSiteSchema, siteNavigationSchema } from "@/lib/schema";

// Lazy load below-fold components for better performance
const WealthCalculator = dynamic(
  () => import("@/components/home/WealthCalculator").then(mod => ({ default: mod.WealthCalculator })),
  { ssr: true, loading: () => <div className="h-96 bg-slate-100 animate-pulse" /> }
);

// Loading skeleton component for consistent CLS prevention
function SectionSkeleton({ height = "h-64" }: { height?: string }) {
  return <div className={`${height} bg-slate-100 animate-pulse rounded-lg`} />;
}

const FeaturedPartner = dynamic(
  () => import("@/components/home/FeaturedPartner").then(mod => ({ default: mod.FeaturedPartner })),
  { ssr: true, loading: () => <SectionSkeleton height="h-72" /> }
);

const HowSection = dynamic(
  () => import("@/components/home/GoldenCircle").then(mod => ({ default: mod.HowSection })),
  { ssr: true, loading: () => <SectionSkeleton height="h-80" /> }
);

const ComparisonTable = dynamic(
  () => import("@/components/home/ComparisonTable").then(mod => ({ default: mod.ComparisonTable })),
  { ssr: true, loading: () => <SectionSkeleton height="h-96" /> }
);

const DailyBrief = dynamic(
  () => import("@/components/home/DailyBrief").then(mod => ({ default: mod.DailyBrief })),
  { ssr: true, loading: () => <SectionSkeleton height="h-72" /> }
);

const ValueProps = dynamic(
  () => import("@/components/home/ValueProps").then(mod => ({ default: mod.ValueProps })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

const Testimonials = dynamic(
  () => import("@/components/home/Testimonials").then(mod => ({ default: mod.Testimonials })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

const UrgencySection = dynamic(
  () => import("@/components/home/UrgencySection").then(mod => ({ default: mod.UrgencySection })),
  { ssr: true, loading: () => <SectionSkeleton height="h-64" /> }
);

const NewsletterSignup = dynamic(
  () => import("@/components/email/NewsletterSignup").then(mod => ({ default: mod.NewsletterSignup })),
  { ssr: true, loading: () => <SectionSkeleton height="h-48" /> }
);

const TrustBadges = dynamic(
  () => import("@/components/home/TrustBadges").then(mod => ({ default: mod.TrustBadges })),
  { ssr: true, loading: () => <SectionSkeleton height="h-32" /> }
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
        {/* 1. EMOTIONAL HOOK: "Your Retirement Is Under Attack" */}
        <WhySection />

        {/* 2. CREDIBILITY: Instant trust — stats & Rich Dad philosophy */}
        <AuthoritySection />

        {/* 3. AGITATION: Make the pain real — Wealth Calculator */}
        <WealthCalculator />

        {/* 4. THE ANSWER: Augusta showcase — right after the pain */}
        <FeaturedPartner />

        {/* 5. HOW IT WORKS: Reduce anxiety — "3 Simple Steps" */}
        <HowSection />

        {/* 6. COMPARE: For researchers — all companies ranked */}
        <ComparisonTable />

        {/* 7. SOCIAL PROOF: "People like me" — Testimonials */}
        <Testimonials />

        {/* 8. MARKET CONTEXT: Daily Brief — spot prices & headlines */}
        <DailyBrief />

        {/* 9. EDUCATION: Why gold works — Rich Dad framework */}
        <ValueProps />

        {/* 10. URGENCY: Why act NOW — gold prices, central banks */}
        <UrgencySection />

        {/* 11. RESOURCES: Quick nav to key content */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <Container>
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              Explore Our Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/scenarios"
                className="group bg-red-500/10 border border-red-500/20 rounded-xl p-6 hover:bg-red-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="font-bold text-[#000080] group-hover:text-red-500 transition-colors">Crisis Scenarios</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Understand economic threats and how to protect your retirement from dollar collapse, inflation, and market crashes.
                </p>
                <span className="inline-flex items-center gap-1 text-red-500 text-sm font-medium">
                  View Scenarios <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/learn"
                className="group bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 hover:bg-amber-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 text-amber-500" />
                  <h3 className="font-bold text-[#000080] group-hover:text-amber-500 transition-colors">Learning Center</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Expert guides on 401k management, RMDs, fees, withdrawal strategies, and retirement planning.
                </p>
                <span className="inline-flex items-center gap-1 text-amber-500 text-sm font-medium">
                  Browse Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/rollover"
                className="group bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 hover:bg-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="h-6 w-6 text-blue-500" />
                  <h3 className="font-bold text-[#000080] group-hover:text-blue-500 transition-colors">Rollover Guides</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Step-by-step instructions for rolling over your 401k, IRA, TSP, or other retirement account to gold.
                </p>
                <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium">
                  Start Rollover <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* 12. NEWSLETTER */}
        <section className="py-16 bg-transparent">
          <Container>
            <NewsletterSignup variant="footer" />
          </Container>
        </section>

        {/* 13. TRUST: Final reassurance */}
        <TrustBadges />
      </div>

      <Footer />
    </main>
  );
}
