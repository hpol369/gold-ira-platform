import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SequenceOfReturnsCalculator } from "@/components/tools/SequenceOfReturnsCalculator";

export const metadata: Metadata = {
  title: "Sequence of Returns Calculator - Retirement Risk Tool",
  description: "Free sequence of returns calculator shows how the order of investment returns dramatically affects retirement outcomes. Understand sequence risk and protect your portfolio.",
  keywords: "sequence of returns calculator, sequence of returns risk calculator, retirement sequence risk, sequence risk retirement, order of returns risk",
  openGraph: {
    title: "Sequence of Returns Calculator - See Why Timing Matters",
    description: "Same average returns, vastly different outcomes. Calculate how sequence of returns risk can devastate or boost your retirement.",
    type: "website",
  },
};

export default function SequenceOfReturnsCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <SequenceOfReturnsCalculator />
      <Footer />
    </div>
  );
}
