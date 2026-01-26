import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeesComparison } from "@/components/tools/FeesComparison";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AlertTriangle, CheckCircle2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Gold IRA Fees Comparison Tool 2025 | Compare Costs",
  description:
    "Compare Gold IRA fees across top companies. See setup fees, annual fees, storage costs, and total expenses over time. Free comparison tool.",
  keywords: [
    "gold ira fees",
    "gold ira cost comparison",
    "best gold ira fees",
    "gold ira storage fees",
    "gold ira setup fees",
    "gold ira annual fees",
  ],
};

const feeWarnings = [
  {
    title: "Hidden Spread Markups",
    description:
      "Some companies quote low fees but charge high premiums on metal purchases. Always ask about the spread (difference between buy and sell price).",
  },
  {
    title: "Segregated vs Commingled Storage",
    description:
      "Cheaper storage might mean your gold is mixed with others'. If you want your specific bars/coins separated, you may pay more.",
  },
  {
    title: "Liquidation Fees",
    description:
      "Check what happens when you sell. Some companies have excellent buyback programs; others charge hidden fees to liquidate.",
  },
  {
    title: "Account Closure Fees",
    description:
      "If you ever transfer to another company, check for termination or transfer-out fees that could add hundreds to your costs.",
  },
];

export default function FeesComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Calculator Section */}
      <FeesComparison />

      {/* Fee Warnings */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm mb-4">
                <AlertTriangle className="h-4 w-4" />
                WATCH OUT FOR
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hidden Costs to Avoid
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {feeWarnings.map((warning, index) => (
                <div
                  key={index}
                  className="bg-red-500/5 border border-red-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {warning.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {warning.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What Good Value Looks Like */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm mb-4">
                <CheckCircle2 className="h-4 w-4" />
                WHAT TO LOOK FOR
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Signs of a Good-Value Gold IRA Company
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Transparent, published fee schedules",
                "First-year fee waivers for new accounts",
                "Flat storage fees (not percentage-based)",
                "No liquidation or selling fees",
                "Competitive buyback program",
                "No minimum purchase requirements",
                "Free shipping and insurance",
                "Clear pricing on metals (low premiums)",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* The Real Cost */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Put Fees in Perspective
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              On a $100,000 account, paying $300/year in fees equals 0.3%—less than
              most stock mutual fund expense ratios. The real question isn&apos;t &quot;are
              fees low enough?&quot; but &quot;is the protection worth the cost?&quot;
            </p>
            <p className="text-slate-400 leading-relaxed">
              If gold helps your portfolio avoid a 30% market crash, those fees
              become trivial compared to the losses you avoided. Focus on value, not
              just the lowest price.
            </p>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-800/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Disclaimer</h3>
                  <p className="text-slate-400 text-sm">
                    Fee information is based on publicly available data and may change.
                    Always confirm current fees directly with each company before
                    opening an account. Some companies offer promotional pricing that
                    may differ from standard rates. This comparison does not include
                    metal premiums, which can significantly affect total costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Don't Let Fees Eat Your Hard-Earned Savings"
            subheadline="You worked 30+ years for your nest egg. Augusta has some of the clearest, most competitive fees in the industry - no hidden surprises."
            trackSource="tools-fees-comparison"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
