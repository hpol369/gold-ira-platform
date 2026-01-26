import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CoastFIRECalculator } from "@/components/tools/CoastFIRECalculator";

export const metadata: Metadata = {
  title: "Coast FIRE Calculator - Calculate When You Can Stop Saving",
  description: "Free Coast FIRE calculator to determine when your retirement savings can grow on autopilot. Find out how much you need to coast to financial independence.",
  keywords: "coast fire calculator, coast fire, fire calculator, financial independence calculator",
};

export default function CoastFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <CoastFIRECalculator />
      <Footer />
    </div>
  );
}
