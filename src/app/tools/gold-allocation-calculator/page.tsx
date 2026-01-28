import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { GoldAllocationCalculator } from "@/components/tools/GoldAllocationCalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

export const metadata: Metadata = {
  title: "Gold Allocation Calculator | Optimal Portfolio %",
  description: "Free gold allocation calculator. Find your optimal portfolio gold percentage based on age and risk tolerance. Compare expert portfolios.",
  keywords: "gold allocation calculator, portfolio gold percentage, optimal gold allocation, gold IRA allocation",
};

// Schema markup for SEO
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gold Allocation Calculator",
  description: "Calculate your optimal gold allocation based on personal factors like age, risk tolerance, and investment goals.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Personalized gold allocation recommendations",
    "Risk tolerance assessment",
    "Inflation concern analysis",
    "Portfolio breakdown visualization",
    "Ray Dalio All-Weather comparison",
    "Harry Browne Permanent Portfolio comparison",
  ],
};

export default function GoldAllocationCalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <GoldAllocationCalculator />
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Found Your Optimal Gold Allocation?"
            subheadline="Learn how Augusta Precious Metals can help you add the right amount of gold to your retirement portfolio."
            trackSource="tools-gold-allocation-calculator"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
