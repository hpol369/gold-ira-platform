import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BaristaFIRECalculator } from "@/components/tools/BaristaFIRECalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

export const metadata: Metadata = {
  title: "Barista FIRE Calculator - Calculate Part-Time Work FIRE Strategy",
  description: "Free Barista FIRE calculator to determine how part-time income can accelerate your financial independence. Find out how much you need with flexible work.",
  keywords: "barista fire calculator, barista fire, part time fire, semi-retirement calculator",
};

export default function BaristaFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-slate-900">
      <Navbar />
      <BaristaFIRECalculator />
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Barista FIRE Plan"
            subheadline="Gold can provide stability for your semi-retirement portfolio while you work part-time."
            trackSource="tools-barista-fire-calculator"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
