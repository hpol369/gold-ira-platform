import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { LeanFIRECalculator } from "@/components/tools/LeanFIRECalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

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
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Secure Your Lean FIRE Strategy"
            subheadline="When living on less, every dollar matters. Gold can help protect your minimalist retirement from market swings."
            trackSource="tools-lean-fire-calculator"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
