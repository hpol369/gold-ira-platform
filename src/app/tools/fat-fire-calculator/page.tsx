import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FatFIRECalculator } from "@/components/tools/FatFIRECalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

export const metadata: Metadata = {
  title: "Fat FIRE Calculator - Calculate Your Luxury Retirement Number",
  description: "Free Fat FIRE calculator to determine how much you need for a luxurious early retirement. Plan for the lifestyle you want without compromise.",
  keywords: "fat fire calculator, fat fire, luxury retirement calculator, high income fire",
};

export default function FatFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-slate-900">
      <Navbar />
      <FatFIRECalculator />
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Luxury Retirement"
            subheadline="A Fat FIRE lifestyle deserves protection. Gold can help preserve your wealth for the retirement you envision."
            trackSource="tools-fat-fire-calculator"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
