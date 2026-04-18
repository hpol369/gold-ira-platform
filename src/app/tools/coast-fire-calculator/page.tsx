import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { CoastFIRECalculator } from "@/components/tools/CoastFIRECalculator";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Coast FIRE Calculator - Calculate When You Can Stop Saving",
  description: "Free Coast FIRE calculator to determine when your retirement savings can grow on autopilot. Find out how much you need to coast to financial independence.",
  keywords: "coast fire calculator, coast fire, fire calculator, financial independence calculator",
};

export default function CoastFIRECalculatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-[#F6F4EF]">
      <SchemaScript schema={articleSchema({ title: "Coast FIRE Calculator - Calculate When You Can Stop Saving", description: "Free Coast FIRE calculator to determine when your retirement savings can grow on autopilot. Find out how much you need to coast to financial independence.", slug: "/tools/coast-fire-calculator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "Coast FIRE Calculator", url: "/tools/coast-fire-calculator" }])} />
      <Navbar />
      <CoastFIRECalculator />
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Coast FIRE Savings"
            subheadline="While your investments compound, gold can add stability and protect against market downturns."
            trackSource="tools-coast-fire-calculator"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
