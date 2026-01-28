import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PensionVsLumpSumCalculator } from "@/components/tools/PensionVsLumpSumCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pension vs Lump Sum Calculator 2026 | Free Pension Buyout Calculator",
  description:
    "Free pension vs lump sum calculator. Compare buyout offers with break-even analysis and inflation-adjusted NPV projections.",
  keywords: [
    "pension vs lump sum calculator",
    "pension buyout calculator",
    "take pension or lump sum",
    "pension payout calculator",
    "lump sum vs annuity calculator",
    "pension vs 401k rollover",
    "pension buyout analysis",
    "pension present value calculator",
    "should i take lump sum pension",
    "pension lump sum offer",
  ],
};

const pensionFacts = [
  {
    title: "Break-Even Age",
    description:
      "The age when total pension payments equal the lump sum. If you live beyond this age, the pension was the better choice financially.",
    icon: Scale,
  },
  {
    title: "COLA Matters",
    description:
      "Pensions without Cost-of-Living Adjustments lose purchasing power to inflation. At 3% inflation, buying power is cut in half in 24 years.",
    icon: AlertTriangle,
  },
  {
    title: "PBGC Protection",
    description:
      "The Pension Benefit Guaranty Corporation insures private pensions up to limits. However, there are caps that may not cover your full benefit.",
    icon: CheckCircle2,
  },
  {
    title: "Tax Considerations",
    description:
      "A lump sum may push you into a higher tax bracket the year you take it. Consider rolling to an IRA to defer taxes and maintain control.",
    icon: Info,
  },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pension vs Lump Sum Calculator 2026",
  description: "Free calculator to compare monthly pension payments to lump sum buyout offers",
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
      name: "Should I take a pension or lump sum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on several factors: your life expectancy, whether the pension has COLA adjustments, your ability to invest the lump sum, need for survivor benefits, and concern about pension fund stability. Use our calculator to compare the present values and break-even age for your specific situation."
      }
    },
    {
      "@type": "Question",
      name: "How do I calculate the present value of a pension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The present value is calculated by discounting future pension payments to today's dollars. The formula accounts for expected return, inflation, and life expectancy. Our calculator does this automatically, comparing the NPV to your lump sum offer."
      }
    },
    {
      "@type": "Question",
      name: "What is the break-even age for pension vs lump sum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The break-even age is when total pension payments received equal the lump sum amount. If you live beyond this age, the pension was financially better. Typically, break-even occurs around age 80-85 for most pensions."
      }
    },
    {
      "@type": "Question",
      name: "Can I roll my pension lump sum into a Gold IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! A pension lump sum can be rolled directly into a Traditional IRA (including a Gold IRA) without triggering taxes. This allows you to maintain tax-deferred growth while investing in physical gold for inflation protection."
      }
    }
  ]
};

export default function PensionVsLumpSumCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <PensionVsLumpSumCalculator />

      {/* Important Facts */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Key Factors in Your Pension Decision
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pensionFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold mb-2">
                          {fact.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
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

      {/* Inflation Section */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                The Hidden Danger: Inflation Erosion
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Most pensions have no Cost-of-Living Adjustment. Here&apos;s what that means for your purchasing power over time.
              </p>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-3 text-left text-slate-600">Years</th>
                    <th className="px-4 py-3 text-right text-slate-600">$2,500/mo Pension</th>
                    <th className="px-4 py-3 text-right text-slate-600">Real Value (3% Inflation)</th>
                    <th className="px-4 py-3 text-right text-slate-600">Lost Purchasing Power</th>
                  </tr>
                </thead>
                <tbody>
                  {[5, 10, 15, 20, 25].map((years) => {
                    const realValue = Math.round(2500 / Math.pow(1.03, years));
                    const lost = 2500 - realValue;
                    return (
                      <tr key={years} className="border-b border-slate-200">
                        <td className="px-4 py-3text-slate-900">{years} years</td>
                        <td className="px-4 py-3 text-right text-slate-500">$2,500</td>
                        <td className="px-4 py-3 text-right text-[#B22234]">${realValue.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-red-600">-${lost.toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-4">
                * Assumes 3% average annual inflation. Actual inflation may vary.
              </p>
            </div>

            <div className="mt-8 bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">
                    Why Gold Protects What Pensions Can&apos;t
                  </h4>
                  <p className="text-slate-600 text-sm">
                    If you take the lump sum and roll it into a Gold IRA, physical gold can help maintain purchasing power as inflation rises. Gold has historically increased in value during inflationary periods, offering protection that fixed pensions cannot provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Pension vs Lump Sum FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Should I take a pension or lump sum?",
                  a: "It depends on several factors: your life expectancy, whether the pension has COLA adjustments, your ability to invest the lump sum, need for survivor benefits, and concern about pension fund stability. Use our calculator to compare the present values and break-even age for your specific situation.",
                },
                {
                  q: "What is the break-even age for pension vs lump sum?",
                  a: "The break-even age is when total pension payments received equal the lump sum amount. If you live beyond this age, the pension was financially better. Typically, break-even occurs around age 80-85 for most pensions, but this varies widely based on the offer.",
                },
                {
                  q: "Can I roll my pension lump sum into a Gold IRA?",
                  a: "Yes! A pension lump sum can be rolled directly into a Traditional IRA (including a Gold IRA) without triggering taxes. This allows you to maintain tax-deferred growth while investing in physical gold for inflation protection.",
                },
                {
                  q: "What happens to my pension if the company goes bankrupt?",
                  a: "Private pensions are insured by the PBGC (Pension Benefit Guaranty Corporation), but there are limits. In 2024, the maximum guaranteed benefit at age 65 is about $6,750/month. If your pension exceeds this, you could lose the excess in bankruptcy.",
                },
                {
                  q: "Does taking a lump sum affect my Social Security?",
                  a: "No, Social Security benefits are based on your earnings history, not your pension decision. However, a lump sum could affect your taxable income and Medicare premiums (IRMAA) in the year you receive it.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-slate-900 font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-slate-200 pt-4">
                    <p className="text-slate-500">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-semibold mb-2">
                    Important Disclaimer
                  </h3>
                  <p className="text-slate-600 text-sm">
                    This calculator provides estimates based on the inputs you provide. Actual results may vary based on investment performance, inflation rates, tax changes, and other factors. The pension vs lump sum decision is complex and depends on your personal circumstances. We recommend consulting with a qualified financial advisor before making this decision. This is not financial or tax advice.
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
            headline="Taking the Lump Sum? Protect It."
            subheadline="After 30+ years on the job, your pension buyout could be $200K-$500K. Don't let the next crash eat into it. A Gold IRA rollover protects your payout tax-free."
            trackSource="tools-pension-vs-lump-sum-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
