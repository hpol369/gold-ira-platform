import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FIRECalculator } from "@/components/tools/FIRECalculator";

export const metadata: Metadata = {
  title: "FIRE Calculator - Financial Independence Retire Early Calculator",
  description: "Free FIRE calculator to plan financial independence. Calculate your FIRE number, years to retirement, and explore early retirement scenarios.",
  keywords: "fire calculator, financial independence calculator, early retirement calculator, retire early calculator",
};

// Schema markup for SEO
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FIRE Calculator",
  description: "Calculate your path to Financial Independence and Retire Early (FIRE). Determine your FIRE number, years to retirement, and explore scenarios.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Calculate FIRE Number",
    "Years to FIRE projection",
    "Year-by-year wealth projection",
    "What-if scenario analysis",
    "Social Security integration",
    "Safe withdrawal rate customization",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is FIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FIRE stands for Financial Independence, Retire Early. It's a lifestyle movement focused on extreme savings and investment to achieve financial freedom earlier than traditional retirement age. The goal is to accumulate enough assets to live off investment returns indefinitely.",
      },
    },
    {
      "@type": "Question",
      name: "How is the FIRE number calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your FIRE number is calculated by dividing your annual expenses by your safe withdrawal rate (typically 4%). For example, if you spend $50,000 per year and use a 4% withdrawal rate, your FIRE number is $1,250,000 ($50,000 / 0.04).",
      },
    },
    {
      "@type": "Question",
      name: "What is a safe withdrawal rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A safe withdrawal rate (SWR) is the percentage of your portfolio you can withdraw annually without running out of money. The most common SWR is 4%, based on the Trinity Study, which found this rate historically sustained portfolios for 30+ years.",
      },
    },
    {
      "@type": "Question",
      name: "How does Social Security affect my FIRE plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social Security can reduce your FIRE number because it provides guaranteed income starting at age 62-70. You can factor in expected Social Security benefits to lower the amount you need to save, though early retirees should plan for years before SS kicks in.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between FIRE, Lean FIRE, and Fat FIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lean FIRE targets minimal expenses (typically under $40,000/year), standard FIRE targets moderate expenses ($40,000-$100,000/year), and Fat FIRE targets higher spending ($100,000+/year) for a more luxurious retirement lifestyle.",
      },
    },
  ],
};

export default function FIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <FIRECalculator />
      <Footer />
    </div>
  );
}
