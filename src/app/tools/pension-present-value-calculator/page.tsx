import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PensionPresentValueCalculator } from "@/components/tools/PensionPresentValueCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Calculator,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pension Present Value Calculator 2026 | NPV of Pension Calculator",
  description:
    "Free pension present value calculator. Calculate lump sum equivalent of your pension for divorce, retirement planning, or job comparison.",
  keywords: [
    "pension present value calculator",
    "pension value calculator",
    "npv of pension",
    "pension lump sum value",
    "pension worth calculator",
    "pension wealth calculator",
    "divorce pension calculator",
    "pension net present value",
    "pension pv calculator",
    "actuarial value of pension",
  ],
};

const pensionValueFacts = [
  {
    title: "Hidden Wealth",
    description:
      "A $2,500/month pension can be worth $400,000-$600,000 in present value. This 'pension wealth' is often overlooked in financial planning.",
    icon: Calculator,
  },
  {
    title: "Discount Rate Matters",
    description:
      "The discount rate dramatically affects present value. A lower rate (3%) gives higher PV; higher rate (7%) gives lower PV.",
    icon: Scale,
  },
  {
    title: "COLA Impact",
    description:
      "A pension with 2% COLA can be worth 30-50% more than the same pension without any cost-of-living adjustment.",
    icon: CheckCircle2,
  },
  {
    title: "Survivor Benefits",
    description:
      "Joint & survivor options reduce your monthly payment but add significant value if your spouse is younger or expected to outlive you.",
    icon: AlertTriangle,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pension Present Value Calculator 2026",
  description: "Free calculator to determine the lump sum equivalent of a pension stream",
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
      name: "How do I calculate the present value of a pension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The present value is calculated by discounting all expected future pension payments back to today's dollars using a formula: PV = Sum of [Payment / (1 + discount rate)^n] for each year. Our calculator does this automatically, accounting for COLA and survivor benefits."
      }
    },
    {
      "@type": "Question",
      name: "What discount rate should I use for pension present value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For conservative estimates, use the risk-free rate (3-4%). For comparison to investments, use expected market returns (5-7%). For divorce settlements, courts often use PBGC segment rates or actuarial standards."
      }
    },
    {
      "@type": "Question",
      name: "Why is pension present value important for divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pensions are marital property subject to division in divorce. The present value determines the pension's worth for equitable distribution. Courts use this to either divide the pension directly (QDRO) or offset with other assets."
      }
    },
    {
      "@type": "Question",
      name: "How does COLA affect pension present value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "COLA (Cost of Living Adjustment) significantly increases present value. A pension with 2% COLA can be worth 30-50% more than one without COLA because it maintains purchasing power over decades of retirement."
      }
    }
  ]
};

export default function PensionPresentValueCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <PensionPresentValueCalculator />

      {/* Important Facts */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Understanding Pension Present Value
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pensionValueFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-purple-400" />
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

      {/* Discount Rate Guide */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choosing Your Discount Rate
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The discount rate significantly impacts your pension&apos;s present value. Here&apos;s how different rates affect a $2,500/month pension over 20 years.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-slate-300">Discount Rate</th>
                    <th className="px-4 py-3 text-left text-slate-300">Use Case</th>
                    <th className="px-4 py-3 text-right text-slate-300">Est. Present Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white font-semibold">3% (Conservative)</td>
                    <td className="px-4 py-3 text-slate-400">Risk-free, Treasury bonds</td>
                    <td className="px-4 py-3 text-right text-green-400">~$475,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white font-semibold">5% (Moderate)</td>
                    <td className="px-4 py-3 text-slate-400">Balanced portfolio returns</td>
                    <td className="px-4 py-3 text-right text-blue-400">~$390,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white font-semibold">6% (Standard)</td>
                    <td className="px-4 py-3 text-slate-400">Common actuarial rate</td>
                    <td className="px-4 py-3 text-right text-purple-400">~$355,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 text-white font-semibold">7% (Aggressive)</td>
                    <td className="px-4 py-3 text-slate-400">Stock market returns</td>
                    <td className="px-4 py-3 text-right text-amber-400">~$325,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-4">
                * Estimates for $2,500/month pension, 20-year duration, no COLA. Actual values depend on specific timing and assumptions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Divorce Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="h-6 w-6 text-purple-400" />
                Pension Present Value in Divorce
              </h2>

              <div className="space-y-4 text-slate-400">
                <p>
                  Pensions earned during marriage are marital property in most states. The present value calculation determines how much the pension is worth for division purposes.
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Option 1: QDRO</h4>
                    <p className="text-sm">
                      A Qualified Domestic Relations Order divides the actual pension payments. Ex-spouse receives their share directly from the pension plan at retirement.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Option 2: Offset</h4>
                    <p className="text-sm">
                      Use present value to offset against other assets. Keep your full pension but give up equivalent value in home equity, investments, or other property.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-amber-400 text-sm">
                    <strong>Important:</strong> Courts may use different discount rates or methodologies. Consult a divorce attorney and actuary for legal proceedings. This calculator is for educational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Pension Present Value FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How do I calculate the present value of a pension?",
                  a: "The present value is calculated by discounting all expected future pension payments back to today's dollars using a formula: PV = Sum of [Payment / (1 + discount rate)^n] for each year. Our calculator does this automatically, accounting for COLA and survivor benefits.",
                },
                {
                  q: "What discount rate should I use for pension present value?",
                  a: "For conservative estimates, use the risk-free rate (3-4%). For comparison to investments, use expected market returns (5-7%). For divorce settlements, courts often use PBGC segment rates or actuarial standards. Lower rates give higher present values.",
                },
                {
                  q: "How does COLA affect pension present value?",
                  a: "COLA (Cost of Living Adjustment) significantly increases present value. A pension with 2% COLA can be worth 30-50% more than one without COLA because it maintains purchasing power over decades of retirement.",
                },
                {
                  q: "Should I include pension in my net worth?",
                  a: "Yes! Financial planners increasingly recommend including 'pension wealth' in net worth calculations. This gives a more accurate picture of your total retirement assets, especially when deciding how much to save in other accounts.",
                },
                {
                  q: "Why are survivor benefits important?",
                  a: "Joint & survivor options add significant value if your spouse is likely to outlive you. While they reduce your monthly benefit, they provide continued income protection for your surviving spouse, which has real monetary value.",
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
      <section className="py-8 bg-slate-900">
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
                    This calculator provides estimates for educational purposes. The actual present value of your pension depends on actuarial assumptions, mortality tables, discount rates, and other factors that may differ from this simplified model. For legal proceedings (divorce, buyouts), consult a qualified actuary. This is not financial, legal, or tax advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Pension Wealth"
            subheadline="Your pension represents significant hidden wealth. A Gold IRA can complement your fixed pension income with an inflation-protected asset. Learn how to diversify beyond paper assets."
            trackSource="tools-pension-present-value-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
