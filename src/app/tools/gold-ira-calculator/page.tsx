import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { GoldIRACalculator } from "@/components/tools/GoldIRACalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { CalculatorCTA } from "@/components/widgets/CalculatorCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { SourcesSection } from "@/components/content/SourcesSection";

export const metadata: Metadata = {
  title: "Gold IRA Calculator - Calculate Your Gold IRA Investment Returns",
  description:
    "Free gold IRA calculator to project retirement savings with gold. Compare portfolio performance, analyze historical backtests, and see volatility reduction.",
  keywords:
    "gold ira calculator, gold ira investment calculator, gold ira retirement calculator, gold ira returns calculator, gold retirement planning",
};

// Schema markup for SEO
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gold IRA Calculator",
  description:
    "Calculate and compare your retirement portfolio performance with and without gold allocation. Features historical backtesting from 2000-2024 and risk-adjusted return analysis.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Side-by-side portfolio comparison with and without gold",
    "Gold allocation percentage slider (5-25%)",
    "Investment timeline projections",
    "Historical backtest comparison (2000-2024)",
    "Volatility reduction analysis",
    "Risk-adjusted returns comparison",
    "Inflation rate considerations",
  ],
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tools", url: "/tools" },
  { name: "Gold IRA Calculator", url: "/tools/gold-ira-calculator" },
]);

export default function GoldIRACalculatorPage() {
  return (
    <div className="min-h-screen bg-[#0C0D18] text-[#F6F4EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <SchemaScript schema={breadcrumbs} />
      <Navbar />
      <GoldIRACalculator />
      <section className="py-12">
        <Container>
          <CalculatorCTA calculatorType="gold-ira" trackSource="tools-gold-ira-calculator" />
        </Container>
      </section>
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Add Gold to Your Portfolio?"
            subheadline="See how gold can diversify your retirement savings and protect against market volatility."
            trackSource="tools-gold-ira-calculator"
          />
        </Container>
      </section>
      <section className="py-12 bg-[#0C0D18]">
        <Container>
          <AutoRelatedContent currentUrl="/tools/gold-ira-calculator" />
        </Container>
      </section>
      <section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto px-4 pb-12">
            <SourcesSection
              sources={[
                { name: "IRS — Retirement Topics: IRA Contribution Limits", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits", accessDate: "Mar 2026" },
                { name: "World Gold Council — Gold Performance Data", url: "https://www.gold.org/goldhub/data/gold-prices", accessDate: "Mar 2026" },
                { name: "IRS — Self-Directed IRA Rules (Publication 590-A)", url: "https://www.irs.gov/publications/p590a", accessDate: "Mar 2026" },
              ]}
              lastVerified="March 2026"
            />
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
