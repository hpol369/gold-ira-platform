import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FatFIRECalculator } from "@/components/tools/FatFIRECalculator";

export const metadata: Metadata = {
  title: "Fat FIRE Calculator - Calculate Your Luxury Retirement Number",
  description: "Free Fat FIRE calculator to determine how much you need for a luxurious early retirement. Plan for the lifestyle you want without compromise.",
  keywords: "fat fire calculator, fat fire, luxury retirement calculator, high income fire",
};

export default function FatFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <FatFIRECalculator />
      <Footer />
    </div>
  );
}
