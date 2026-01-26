import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeanFIRECalculator } from "@/components/tools/LeanFIRECalculator";

export const metadata: Metadata = {
  title: "Lean FIRE Calculator - Minimalist Early Retirement Calculator",
  description: "Free Lean FIRE calculator to plan minimalist early retirement. Calculate how much you need to retire with essential expenses only.",
  keywords: "lean fire calculator, lean fire, minimalist retirement calculator, frugal fire",
};

export default function LeanFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <LeanFIRECalculator />
      <Footer />
    </div>
  );
}
