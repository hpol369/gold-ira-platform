import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoldIRACalculator } from "@/components/tools/GoldIRACalculator";

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

export default function GoldIRACalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <GoldIRACalculator />
      <Footer />
    </div>
  );
}
