import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReverseMortgageCalculator } from "@/components/tools/ReverseMortgageCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Home,
  Info,
  Calculator,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reverse Mortgage Calculator 2026 | Free HECM Payout Estimator",
  description:
    "Free reverse mortgage calculator for 2026. Calculate how much equity you can access, compare payout options (lump sum, line of credit, monthly payments), and understand true costs including fees and interest.",
  keywords: [
    "reverse mortgage calculator",
    "hecm calculator",
    "home equity conversion mortgage",
    "reverse mortgage payout",
    "reverse mortgage eligibility",
    "how much can I get from reverse mortgage",
    "reverse mortgage interest rate",
    "reverse mortgage line of credit",
    "reverse mortgage monthly payment",
  ],
};

const reverseMortgageFacts = [
  {
    title: "Age Requirement",
    description:
      "You must be at least 62 years old. The older you are, the higher your Principal Limit Factor and the more you can borrow.",
    icon: Home,
  },
  {
    title: "No Monthly Payments",
    description:
      "Unlike traditional mortgages, you don't make monthly payments. The loan is repaid when you sell, move out, or pass away.",
    icon: DollarSign,
  },
  {
    title: "Non-Recourse Loan",
    description:
      "You (or your heirs) will never owe more than the home is worth when sold, even if the loan balance exceeds home value.",
    icon: CheckCircle2,
  },
  {
    title: "Counseling Required",
    description:
      "HUD requires all borrowers to complete reverse mortgage counseling before applying to ensure you understand the risks.",
    icon: Info,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Reverse Mortgage Calculator 2026",
  description: "Free reverse mortgage calculator to estimate HECM proceeds, compare payout options, and understand costs",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can I get from a reverse mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The amount depends on your age, home value, current mortgage balance, and interest rates. Generally, older borrowers with more equity can access 50-70% of their home value. Use our calculator for an estimate."
      }
    },
    {
      "@type": "Question",
      name: "What are the downsides of a reverse mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key drawbacks include high fees (2-6% of home value), compound interest that rapidly grows your loan balance, reduced inheritance for heirs, and the requirement to maintain property taxes and insurance or risk foreclosure."
      }
    },
    {
      "@type": "Question",
      name: "Can I lose my home with a reverse mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While you don't make monthly payments, you must continue paying property taxes, homeowners insurance, and maintain the home. Failure to do so can trigger loan default and foreclosure."
      }
    },
    {
      "@type": "Question",
      name: "What happens to a reverse mortgage when I die?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your heirs have options: repay the loan and keep the home, sell the home and keep any equity above the loan balance, or walk away with no debt (it's non-recourse). They typically have 6 months to decide."
      }
    }
  ]
};

export default function ReverseMortgageCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <ReverseMortgageCalculator />

      {/* Important Facts */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              What You Need to Know About Reverse Mortgages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reverseMortgageFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          {fact.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {fact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                How the Principal Limit Factor Works
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">The Reverse Mortgage Formula</h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-blue-400 font-mono text-lg text-center">
                  Available Proceeds = (Home Value x PLF) - Mortgage Balance - Closing Costs
                </p>
              </div>
              <div className="space-y-3 text-slate-400">
                <p><strong className="text-white">PLF (Principal Limit Factor):</strong> A percentage based on your age and expected interest rate. Older borrowers get higher PLFs.</p>
                <p><strong className="text-white">Home Value:</strong> Appraised value or HECM limit ($1,149,825 for 2024), whichever is less.</p>
                <p><strong className="text-white">Existing Mortgage:</strong> Must be paid off from proceeds, reducing available cash.</p>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 font-medium mb-1">Example:</p>
                <p className="text-slate-300 text-sm">
                  Age 75, $450,000 home, $50,000 mortgage, 6% rate: $450,000 x 52.7% - $50,000 - $17,000 = <strong className="text-white">$170,150 available</strong>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Reverse Mortgage Payout Options Compared
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Option</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Best For</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Pros</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-6 py-4 text-white font-medium">Lump Sum</td>
                    <td className="px-6 py-4 text-slate-400">Large immediate expense</td>
                    <td className="px-6 py-4 text-green-400 text-sm">Full amount upfront, fixed rate available</td>
                    <td className="px-6 py-4 text-red-400 text-sm">Interest accrues on full balance immediately</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="px-6 py-4 text-white font-medium">Line of Credit</td>
                    <td className="px-6 py-4 text-slate-400">Emergency fund, flexibility</td>
                    <td className="px-6 py-4 text-green-400 text-sm">Unused portion grows, draw as needed</td>
                    <td className="px-6 py-4 text-red-400 text-sm">Variable rate only</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-6 py-4 text-white font-medium">Tenure (Lifetime)</td>
                    <td className="px-6 py-4 text-slate-400">Long-term income supplement</td>
                    <td className="px-6 py-4 text-green-400 text-sm">Guaranteed monthly income for life</td>
                    <td className="px-6 py-4 text-red-400 text-sm">Lower payments than term option</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="px-6 py-4 text-white font-medium">Term</td>
                    <td className="px-6 py-4 text-slate-400">Bridge to other income</td>
                    <td className="px-6 py-4 text-green-400 text-sm">Higher monthly payments</td>
                    <td className="px-6 py-4 text-red-400 text-sm">Payments end after term</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Reverse Mortgage FAQs
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How much can I get from a reverse mortgage?",
                  a: "The amount depends on your age, home value, current mortgage balance, and interest rates. Generally, older borrowers with more equity can access 50-70% of their home value. Our calculator above gives you a personalized estimate.",
                },
                {
                  q: "Do I have to pay back a reverse mortgage?",
                  a: "Not while you live in the home. The loan becomes due when you sell, move out for more than 12 months, or pass away. Your heirs can pay off the loan and keep the home, or sell it and keep any equity above the loan balance.",
                },
                {
                  q: "Can my heirs inherit the house?",
                  a: "Yes. Your heirs can keep the home by repaying the loan (often through refinancing). If the loan balance exceeds the home value, they only need to pay 95% of the appraised value - or they can walk away with no debt.",
                },
                {
                  q: "What are the biggest risks of a reverse mortgage?",
                  a: "Key risks include: compound interest rapidly growing your loan balance, reduced inheritance for heirs, losing the home if you fail to pay property taxes/insurance, and becoming 'house rich, cash poor' if you need to move.",
                },
                {
                  q: "Is a reverse mortgage a good idea?",
                  a: "It depends on your situation. Reverse mortgages can help seniors who are house-rich but cash-poor, but the high costs and compound interest make them expensive. Consider alternatives like HELOCs, downsizing, or retirement account strategies first.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-white/5 pt-4">
                    <p className="text-slate-400">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
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
                  <h3 className="text-white font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-400 text-sm">
                    This calculator provides estimates only. Actual reverse mortgage proceeds, rates, and fees
                    will vary based on your specific situation, lender, and market conditions. This is not
                    financial advice. Reverse mortgages are complex products with significant risks - consult
                    a HUD-approved reverse mortgage counselor before applying.
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
            headline="Protect Your Home Equity for Retirement"
            subheadline="Before tapping your home equity, explore how a Gold IRA can provide retirement income while preserving your home for your family."
            trackSource="tools-reverse-mortgage-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
