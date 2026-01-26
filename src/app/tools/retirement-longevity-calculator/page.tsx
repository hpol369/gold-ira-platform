import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RetirementLongevityCalculator } from "@/components/tools/RetirementLongevityCalculator";

export const metadata: Metadata = {
  title: "Retirement Longevity Calculator - How Long Will Your Money Last?",
  description: "Free retirement longevity calculator shows exactly how long your savings will last. Calculate the impact of spending, returns, inflation, and Social Security.",
  keywords: "retirement longevity calculator, how long will money last, retirement money calculator, how long will my savings last, retirement depletion calculator",
  openGraph: {
    title: "Retirement Longevity Calculator - Will Your Money Last?",
    description: "Calculate exactly how many years your retirement savings will last. See the impact of spending changes, returns, and inflation.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function RetirementLongevityCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <RetirementLongevityCalculator />
      <Footer />
    </div>
  );
}
