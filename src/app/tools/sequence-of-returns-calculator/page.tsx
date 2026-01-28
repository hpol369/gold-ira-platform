import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SequenceOfReturnsCalculator } from "@/components/tools/SequenceOfReturnsCalculator";

export const metadata: Metadata = {
  title: "Sequence of Returns Calculator - Retirement Risk Tool",
  description: "Free sequence of returns calculator. See how return timing affects retirement outcomes and learn to protect against sequence risk.",
  keywords: "sequence of returns calculator, sequence of returns risk calculator, retirement sequence risk, sequence risk retirement, order of returns risk",
  openGraph: {
    title: "Sequence of Returns Calculator - See Why Timing Matters",
    description: "Same average returns, vastly different outcomes. Calculate how sequence of returns risk can devastate or boost your retirement.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function SequenceOfReturnsCalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-slate-900">
      <Navbar />
      <SequenceOfReturnsCalculator />
      <Footer />
    </div>
  );
}
