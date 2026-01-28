import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CrashSimulator } from "@/components/tools/CrashSimulator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  TrendingDown,
  Shield,
  History,
  Calculator,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Market Crash Simulator - Test Your Portfolio",
  description:
    "See how your retirement portfolio would perform in historical market crashes. Simulate 2008, COVID, and other crises to understand gold's protective power.",
  keywords: [
    "market crash simulator",
    "portfolio stress test",
    "gold protection",
    "retirement calculator",
    "2008 financial crisis",
    "portfolio diversification",
  ],
};

const historicalCrashes = [
  {
    year: "2008",
    name: "Financial Crisis",
    stocksLoss: "-57%",
    goldReturn: "+25%",
    description: "Lehman Brothers collapse triggered global financial meltdown",
  },
  {
    year: "2020",
    name: "COVID-19 Crash",
    stocksLoss: "-34%",
    goldReturn: "+24%",
    description: "Pandemic panic caused fastest market crash in history",
  },
  {
    year: "2000",
    name: "Dot-Com Bubble",
    stocksLoss: "-49%",
    goldReturn: "-6%",
    description: "Tech stocks collapsed, erasing trillions in value",
  },
  {
    year: "1973",
    name: "Stagflation Crisis",
    stocksLoss: "-45%",
    goldReturn: "+721%",
    description: "Oil embargo caused decade of high inflation",
  },
];

export default function CrashSimulatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] font-semibold text-sm mb-6">
              <TrendingDown className="h-4 w-4" />
              FREE TOOL
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#000080] mb-4">
              Market Crash Simulator
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              In 2008, workers lost 40% of their 401(k)s in months. Some near retirement
              had to keep working. See what the next crash could do to YOUR savings.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Simulator */}
      <CrashSimulator />

      {/* Historical Context Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#B22234] font-semibold text-sm mb-4">
                <History className="h-4 w-4" />
                HISTORICAL DATA
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                How Gold Performed in Past Crises
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Historical performance data shows gold&apos;s role as a safe haven
                during market turbulence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {historicalCrashes.map((crash) => (
                <div
                  key={crash.year}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[#B22234] font-bold text-lg">
                        {crash.year}
                      </div>
                      <div className="text-slate-900 font-semibold">
                        {crash.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-600 font-mono">
                        S&P: {crash.stocksLoss}
                      </div>
                      <div
                        className={`font-mono ${
                          crash.goldReturn.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        Gold: {crash.goldReturn}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">{crash.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Use This Tool */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#B22234] font-semibold text-sm mb-4">
                <Calculator className="h-4 w-4" />
                WHY USE THIS TOOL
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                Understand Your Risk Before It&apos;s Too Late
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Stress Test Your Portfolio",
                  description:
                    "See exactly how much you could lose in various crisis scenarios with your current allocation.",
                },
                {
                  title: "Visualize Gold's Protection",
                  description:
                    "Understand the concrete dollar value of having gold in your retirement portfolio.",
                },
                {
                  title: "Make Informed Decisions",
                  description:
                    "Use real historical data to guide your asset allocation strategy.",
                },
                {
                  title: "Plan for the Unexpected",
                  description:
                    "Prepare your retirement for economic uncertainty before the next crisis hits.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-600 text-sm">
                    This simulator uses historical data for educational purposes
                    only. Past performance does not guarantee future results.
                    Gold prices can be volatile and may not always increase
                    during market downturns. Always consult with a qualified
                    financial advisor before making investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="You Can't Afford to Wait for the Next Crash"
            subheadline="You've spent 30+ years building your 401(k). Don't let the next market crash wipe out decades of hard work. Talk to a Gold IRA specialist today."
            trackSource="tools-crash-simulator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
