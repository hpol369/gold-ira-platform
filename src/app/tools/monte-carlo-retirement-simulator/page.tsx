import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Container } from "@/components/ui/Container";
import { MonteCarloRetirementSimulator } from "@/components/tools/MonteCarloRetirementSimulator";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Monte Carlo Retirement Calculator - Simulate Your Retirement Success",
  description: "Free Monte Carlo retirement simulator runs 1,000+ scenarios to calculate your retirement success probability. See how asset allocation affects your odds.",
  keywords: "monte carlo retirement calculator, monte carlo simulation retirement, retirement success calculator, retirement probability calculator, retirement Monte Carlo",
  openGraph: {
    title: "Monte Carlo Retirement Simulator - Calculate Your Success Odds",
    description: "Run thousands of retirement scenarios to see the probability of your money lasting. Understand how gold and asset allocation impact your success rate.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function MonteCarloRetirementSimulatorPage() {
  return (
    <div className="min-h-screen bg-whitetext-[#F6F4EF]">
      <SchemaScript schema={articleSchema({ title: "Monte Carlo Retirement Calculator - Simulate Your Retirement Success", description: "Free Monte Carlo retirement simulator runs 1,000+ scenarios to calculate your retirement success probability. See how asset allocation affects your odds.", slug: "/tools/monte-carlo-retirement-simulator" })} />
      <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: "Monte Carlo Retirement Simulator", url: "/tools/monte-carlo-retirement-simulator" }])} />
      <Navbar />
      <MonteCarloRetirementSimulator />
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA variant="footer" headline="Want to Improve Your Retirement Odds?" subheadline="Adding 10-15% gold allocation has historically improved Monte Carlo success rates. Augusta Precious Metals can show you how — no pressure, just education." trackSource="monte-carlo-simulator" />
        </Container>
      </section>
      <Footer />
    </div>
  );
}
