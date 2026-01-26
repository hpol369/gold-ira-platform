import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { NUACalculator } from "@/components/tools/NUACalculator";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  TrendingUp,
  AlertTriangle,
  Info,
  Calculator,
  Clock,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NUA Calculator 2026 | Net Unrealized Appreciation Tax Strategy",
  description:
    "Free NUA calculator for 2026. Calculate tax savings from the Net Unrealized Appreciation strategy for employer stock in your 401k. Compare NUA vs regular rollover.",
  keywords: [
    "nua calculator",
    "net unrealized appreciation calculator",
    "nua tax calculator",
    "401k company stock",
    "nua tax strategy",
    "employer stock 401k",
    "nua vs rollover",
    "lump sum distribution",
    "company stock tax",
  ],
};

const nuaFacts = [
  {
    title: "Massive Tax Savings",
    description:
      "NUA lets you pay long-term capital gains rates (0-20%) on stock appreciation instead of ordinary income rates (up to 37%).",
    icon: TrendingUp,
  },
  {
    title: "Triggering Event Required",
    description:
      "You need a qualifying event: separation from service, reaching 59 1/2, disability, or death to use NUA.",
    icon: Clock,
  },
  {
    title: "Lump Sum in One Year",
    description:
      "You must distribute your entire 401(k) balance within one calendar year. The stock goes to a taxable brokerage account.",
    icon: FileCheck,
  },
  {
    title: "Immediate Tax on Basis",
    description:
      "You pay ordinary income tax on the cost basis right away. The NUA portion is taxed as LTCG when you sell.",
    icon: Calculator,
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NUA Calculator 2026",
  description:
    "Free Net Unrealized Appreciation tax calculator for employer stock in 401k plans",
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
      name: "What is Net Unrealized Appreciation (NUA)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NUA is a tax strategy for employer stock held in a 401(k). Instead of rolling the stock to an IRA (and paying ordinary income tax later), you distribute the stock to a taxable account. You pay ordinary income tax on the cost basis now, but only long-term capital gains tax on the appreciation (NUA) when sold.",
      },
    },
    {
      "@type": "Question",
      name: "When does NUA make sense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NUA typically makes sense when: 1) Your stock has significant appreciation (large gap between cost basis and current value), 2) You're in a high ordinary income tax bracket, 3) Your long-term capital gains rate is significantly lower than your ordinary rate, 4) You need access to the funds (no 10% early withdrawal penalty on NUA portion).",
      },
    },
    {
      "@type": "Question",
      name: "What are the requirements for NUA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To use NUA, you need: 1) A triggering event (separation, age 59.5, disability, death), 2) Lump-sum distribution of your entire 401(k) balance within one calendar year, 3) Employer stock that has appreciated in value. The stock must be distributed in-kind to a taxable brokerage account.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do a partial NUA strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You cannot do NUA on only part of your employer stock - it's all or nothing for the NUA election. However, you can roll over other assets (mutual funds, bonds) to an IRA while taking the stock via NUA. You must distribute everything within the same calendar year.",
      },
    },
  ],
};

export default function NUACalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

        <Container>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-4">
              <TrendingUp className="h-4 w-4" />
              Tax Optimization Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              NUA Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Calculate potential tax savings using the Net Unrealized Appreciation
              strategy for employer stock in your 401(k). Compare NUA vs regular rollover.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <NUACalculator />

      {/* Key Facts Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Understanding the NUA Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {nuaFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          {fact.title}
                        </h3>
                        <p className="text-slate-400 text-sm">{fact.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* How NUA Works */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-green-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                How NUA Works: Step by Step
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Triggering Event Occurs
                    </h3>
                    <p className="text-slate-400">
                      You separate from your employer, turn 59 1/2, become disabled, or the
                      account owner passes away. This is required to use NUA.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Distribute Your Entire 401(k)
                    </h3>
                    <p className="text-slate-400">
                      Within one calendar year, you must distribute your entire 401(k)
                      balance. Employer stock goes to a taxable brokerage account. Other
                      assets can roll to an IRA.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Pay Tax on Cost Basis
                    </h3>
                    <p className="text-slate-400">
                      You immediately owe ordinary income tax on the{" "}
                      <strong>cost basis</strong> (what was contributed/paid for the stock).
                      This is usually a smaller amount than the current value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Sell Stock: Pay LTCG on NUA
                    </h3>
                    <p className="text-slate-400">
                      When you eventually sell the stock, you pay{" "}
                      <strong>long-term capital gains</strong> rates on the NUA
                      (appreciation) - even if you sell immediately. Any additional gains
                      after distribution are taxed based on holding period.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                Example: The Power of NUA
              </h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-slate-300 font-mono text-sm">
                  1,000 shares | Cost Basis: $25/share | Current Value: $100/share
                  <br />
                  Cost Basis Total: $25,000 | Current Value: $100,000 | NUA: $75,000
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2">Regular Rollover</p>
                  <p className="text-slate-300 text-sm">
                    Tax at 24%: <strong>$24,000</strong>
                    <br />
                    (Full $100,000 taxed as ordinary income)
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">NUA Strategy</p>
                  <p className="text-slate-300 text-sm">
                    Cost Basis (24%): $6,000
                    <br />
                    NUA (15% LTCG): $11,250
                    <br />
                    Total: <strong>$17,250</strong>
                  </p>
                </div>
              </div>
              <p className="text-green-400 font-semibold mt-4 text-center">
                Tax Savings: $6,750 (28% less tax!)
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* When NUA Makes Sense */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              When Does NUA Make Sense?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">
                  NUA Is Often Better When:
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    Large appreciation (high NUA vs cost basis)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    High ordinary income tax bracket (24%+)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    Low long-term capital gains rate (0% or 15%)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    Need access to funds (no 10% penalty on NUA)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    Planning to sell stock soon anyway
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    Want to leave stepped-up basis to heirs
                  </li>
                </ul>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-4">
                  Regular Rollover May Be Better When:
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">-</span>
                    Low appreciation (cost basis close to value)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">-</span>
                    Low current income (expecting higher rates later)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">-</span>
                    Want to continue tax-deferred growth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">-</span>
                    Planning to hold for many more years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">-</span>
                    Do not have cash to pay the upfront tax
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">-</span>
                    State taxes LTCG at ordinary income rates
                  </li>
                </ul>
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
              NUA Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What happens if I sell NUA stock immediately?",
                  a: "Even if you sell immediately after distribution, the NUA portion is taxed at long-term capital gains rates. The cost basis is taxed at ordinary income rates. Any additional gain after distribution would be short-term capital gains if sold within a year.",
                },
                {
                  q: "Is there a 10% early withdrawal penalty on NUA?",
                  a: "The 10% early withdrawal penalty only applies to the cost basis portion if you're under 59 1/2. The NUA portion is NOT subject to the 10% penalty, making this an attractive option for early retirees.",
                },
                {
                  q: "Can I do NUA on stock from any company?",
                  a: "No - NUA only applies to employer stock (your employer's publicly traded stock held in your 401k). It does not apply to mutual funds, ETFs, or stock from other companies.",
                },
                {
                  q: "What if my employer stock has lost value?",
                  a: "If your cost basis is higher than the current value (a loss), NUA does not apply - there is no 'unrealized appreciation.' In this case, a regular rollover to an IRA is typically better.",
                },
                {
                  q: "Can I roll over some stock and use NUA on the rest?",
                  a: "No - you cannot split NUA on the same employer stock. It's all or nothing for NUA. However, if you have employer stock in multiple accounts or from different contribution sources with different cost bases, consult a tax professional about your options.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      ^
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
                    This calculator provides estimates for educational purposes only. NUA
                    is a complex tax strategy with strict requirements and timing rules.
                    Mistakes can be costly and irreversible. We strongly recommend
                    consulting with a qualified tax professional or financial advisor
                    before implementing an NUA strategy.
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
            headline="Diversify After Your NUA Distribution"
            subheadline="Once you've taken advantage of NUA, consider diversifying your concentrated stock position with a Gold IRA. Physical gold can provide stability and inflation protection for your retirement portfolio."
            trackSource="tools-nua-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
