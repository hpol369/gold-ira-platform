import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BaristaFIRECalculator } from "@/components/tools/BaristaFIRECalculator";

export const metadata: Metadata = {
  title: "Barista FIRE Calculator - Calculate Part-Time Work FIRE Strategy",
  description: "Free Barista FIRE calculator to determine how part-time income can accelerate your financial independence. Find out how much you need with flexible work.",
  keywords: "barista fire calculator, barista fire, part time fire, semi-retirement calculator",
};

export default function BaristaFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <BaristaFIRECalculator />
      <Footer />
    </div>
  );
}
