import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FIRENumberCalculator } from "@/components/tools/FIRENumberCalculator";

export const metadata: Metadata = {
  title: "FIRE Number Calculator - Calculate Your Financial Independence Number",
  description: "Free FIRE number calculator to determine exactly how much you need to retire early. Calculate your path to financial independence.",
  keywords: "fire number calculator, financial independence calculator, fire calculator, retirement number",
};

export default function FIRENumberCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <FIRENumberCalculator />
      <Footer />
    </div>
  );
}
