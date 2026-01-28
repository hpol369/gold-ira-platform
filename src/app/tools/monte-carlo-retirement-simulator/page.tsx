import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MonteCarloRetirementSimulator } from "@/components/tools/MonteCarloRetirementSimulator";

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
    <div className="min-h-screen bg-whitetext-slate-900">
      <Navbar />
      <MonteCarloRetirementSimulator />
      <Footer />
    </div>
  );
}
