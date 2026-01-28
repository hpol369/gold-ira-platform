import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RMDCalculator } from "@/components/tools/RMDCalculator";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Info,
  Calculator,
  Table,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RMD Calculator 2026 | Free Required Minimum Distribution Calculator",
  description:
    "Free 2026 RMD calculator. Calculate Required Minimum Distributions using IRS Uniform Lifetime Tables. Includes SECURE 2.0 updates and Gold IRA strategies.",
  keywords: [
    "rmd calculator",
    "rmd calculator 2026",
    "required minimum distribution calculator",
    "how to calculate rmd",
    "rmd table 2026",
    "ira rmd calculator",
    "401k rmd calculator",
    "Gold IRA RMD",
    "SECURE 2.0 RMD",
  ],
};

const rmdFacts = [
  {
    title: "Start Age Changed",
    description:
      "SECURE 2.0 Act raised the RMD start age to 73 (for those born 1951-1959) and 75 (for those born 1960+).",
    icon: Calendar,
  },
  {
    title: "Penalty Reduced",
    description:
      "The penalty for missing an RMD dropped from 50% to 25% (or 10% if corrected quickly). Still significant!",
    icon: AlertTriangle,
  },
  {
    title: "Roth IRAs Exempt",
    description:
      "Roth IRAs have no RMDs during your lifetime—only your heirs face distribution requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Deadline Matters",
    description:
      "RMDs must be taken by December 31 each year. Your first RMD can be delayed until April 1 of the following year.",
    icon: Info,
  },
];

// IRS Uniform Lifetime Table 2026 (for RMD calculations)
const rmdTable = [
  { age: 73, factor: 26.5 },
  { age: 74, factor: 25.5 },
  { age: 75, factor: 24.6 },
  { age: 76, factor: 23.7 },
  { age: 77, factor: 22.9 },
  { age: 78, factor: 22.0 },
  { age: 79, factor: 21.1 },
  { age: 80, factor: 20.2 },
  { age: 81, factor: 19.4 },
  { age: 82, factor: 18.5 },
  { age: 83, factor: 17.7 },
  { age: 84, factor: 16.8 },
  { age: 85, factor: 16.0 },
  { age: 86, factor: 15.2 },
  { age: 87, factor: 14.4 },
  { age: 88, factor: 13.7 },
  { age: 89, factor: 12.9 },
  { age: 90, factor: 12.2 },
];

// Schema markup for the calculator tool
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "RMD Calculator 2026",
  description: "Free Required Minimum Distribution calculator using official IRS Uniform Lifetime Tables",
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
      name: "What happens if I don't take my RMD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll owe a 25% penalty on the amount not withdrawn (reduced to 10% if corrected within 2 years). Plus you still have to take the distribution and pay regular income taxes."
      }
    },
    {
      "@type": "Question",
      name: "How do I calculate my RMD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide your IRA balance as of December 31 of the previous year by the distribution period from the IRS Uniform Lifetime Table for your age. For example, at age 75 with a $500,000 balance: $500,000 ÷ 24.6 = $20,325 RMD."
      }
    },
    {
      "@type": "Question",
      name: "When do RMDs start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under SECURE 2.0 Act, RMDs begin at age 73 if you were born between 1951-1959, or age 75 if you were born in 1960 or later."
      }
    },
    {
      "@type": "Question",
      name: "Can I take more than the RMD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The RMD is the minimum required. You can withdraw more, but you'll owe income taxes on the full amount. You cannot carry forward excess withdrawals to reduce future RMDs."
      }
    }
  ]
};

export default function RMDCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Calculator Section */}
      <RMDCalculator />

      {/* Important RMD Facts */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              What You Need to Know About RMDs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {rmdFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-[#B22234]" />
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

      {/* How to Calculate RMD Section */}
      <section className="py-16 bg-slate-100/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#B22234]/10 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-[#B22234]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                How to Calculate Your RMD
              </h2>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The RMD Formula</h3>
              <div className="bg-slate-100 rounded-lg p-4 mb-4">
                <p className="text-[#B22234] font-mono text-lg text-center">
                  RMD = Account Balance (Dec 31 prior year) ÷ Life Expectancy Factor
                </p>
              </div>
              <div className="space-y-3 text-slate-500">
                <p><strong className="text-slate-900">Step 1:</strong> Find your IRA balance as of December 31 of the previous year.</p>
                <p><strong className="text-slate-900">Step 2:</strong> Look up your age in the IRS Uniform Lifetime Table below.</p>
                <p><strong className="text-slate-900">Step 3:</strong> Divide your balance by the distribution period factor.</p>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-600 font-medium mb-1">Example Calculation:</p>
                <p className="text-slate-600 text-sm">
                  Age 75 with $500,000 balance: $500,000 ÷ 24.6 = <strong className="text-slate-900">$20,325 RMD</strong>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RMD Table 2026 */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Table className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">
                  RMD Table 2026
                </h2>
                <p className="text-slate-600 text-sm">IRS Uniform Lifetime Table</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Age</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Distribution Period</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">% of Balance</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">RMD on $500K</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rmdTable.map((row, index) => (
                      <tr key={row.age} className={`border-b border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : ''}`}>
                        <td className="px-6 py-3 text-slate-900 font-medium">{row.age}</td>
                        <td className="px-6 py-3 text-slate-500">{row.factor}</td>
                        <td className="px-6 py-3 text-slate-500">{(100 / row.factor).toFixed(2)}%</td>
                        <td className="px-6 py-3 text-[#B22234]">${Math.round(500000 / row.factor).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Source: IRS Uniform Lifetime Table (Publication 590-B). Table shown for ages 73-90.
                  Full table continues to age 120+. Use our calculator above for exact calculations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold IRA RMD Strategy */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                Gold IRA RMD Strategies
              </h2>
              <p className="text-slate-500">
                Physical gold in your IRA gives you unique options when taking distributions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Option 1: Cash Distribution
                </h3>
                <p className="text-slate-500">
                  Your custodian sells enough gold to meet your RMD amount and sends you
                  cash. This is the simplest method and works like any traditional IRA
                  distribution. Taxes owed on the full withdrawal amount.
                </p>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Option 2: In-Kind Distribution
                </h3>
                <p className="text-slate-500">
                  Receive physical gold instead of cash! The depository ships actual coins
                  or bars directly to you. You still owe taxes on the fair market value,
                  but you now own the gold outright—outside your IRA. Popular for those
                  who want to hold their precious metals personally.
                </p>
              </div>

              <div className="bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#B22234] mb-3">
                  Pro Tip: Consider a Roth Conversion
                </h3>
                <p className="text-slate-500">
                  If you don&apos;t need the RMD income, consider converting part of your
                  Traditional Gold IRA to a Roth Gold IRA. You&apos;ll pay taxes now, but
                  eliminate future RMDs and leave tax-free gold to your heirs.
                </p>
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
              RMD Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What happens if I don't take my RMD?",
                  a: "You'll owe a 25% penalty on the amount not withdrawn (reduced to 10% if corrected within 2 years). Plus you still have to take the distribution and pay regular income taxes.",
                },
                {
                  q: "Can I take more than the RMD?",
                  a: "Yes! The RMD is the minimum required. You can withdraw more, but you'll owe income taxes on the full amount. You cannot carry forward excess withdrawals to reduce future RMDs.",
                },
                {
                  q: "Do RMDs apply to inherited Gold IRAs?",
                  a: "Yes, but rules differ. Spouses can roll over to their own IRA. Non-spouse beneficiaries must generally empty the account within 10 years (SECURE Act). Consult a tax advisor.",
                },
                {
                  q: "Is my RMD based on spot price or what I paid?",
                  a: "RMDs are based on the fair market value (current spot price) of your gold as of December 31 of the prior year, not what you originally paid.",
                },
                {
                  q: "Can I reinvest my RMD in gold outside the IRA?",
                  a: "Yes! Take your cash distribution, pay the taxes, and use the remainder to buy physical gold for personal possession. Many retirees do this to keep growing their gold holdings.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden group"
                >
                  <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                    <span className="text-slate-900 font-medium pr-4">{faq.q}</span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      ▼
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
                    This calculator provides estimates based on IRS Uniform Lifetime
                    Tables. Your actual RMD may differ based on beneficiary age,
                    multiple accounts, or other factors. This is not tax advice.
                    Please consult a qualified tax professional for your specific
                    situation.
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
            headline="RMDs Are Required. Losing Your Savings Isn't."
            subheadline="You have to take withdrawals - but you don't have to watch your balance shrink from market crashes. A Gold IRA can help preserve what's left."
            trackSource="tools-rmd-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
