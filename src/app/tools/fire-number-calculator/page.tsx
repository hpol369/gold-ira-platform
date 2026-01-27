import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FIRENumberCalculator } from "@/components/tools/FIRENumberCalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

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
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Path to Financial Independence"
            subheadline="Gold can help safeguard your FIRE number from market volatility and inflation."
            trackSource="tools-fire-number-calculator"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
