// src/app/silver-retirement/rmd-rules/page.tsx
// Keywords: silver ira rmd rules, silver ira distribution rules

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import {
  ArrowRight,
  AlertTriangle,
  Calculator,
  Calendar,
  Coins,
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Silver IRA RMD Rules | Required Minimum Distribution Guide (2026)",
  description:
    "Understand Required Minimum Distribution rules for Silver IRAs. Learn about RMD calculation, in-kind distribution options, tax implications, and strategies to minimize your tax burden.",
  keywords: [
    "silver ira rmd rules",
    "silver ira distribution rules",
    "silver ira required minimum distribution",
    "precious metals ira rmd",
    "silver ira withdrawal rules",
  ],
  openGraph: {
    title: "Silver IRA RMD Rules | Distribution Guide",
    description: "Required Minimum Distribution rules for Silver IRAs explained.",
    url: "https://www.richdadretirement.com/silver-retirement/rmd-rules",
    type: "article",
  },
};

const rmdAgeTable = [
  { birthYear: "1950 or earlier", rmdAge: 72 },
  { birthYear: "1951-1959", rmdAge: 73 },
  { birthYear: "1960 or later", rmdAge: 75 },
];

const distributionOptions = [
  {
    option: "Cash Distribution",
    description:
      "Sell silver within your IRA and take cash. Most common method. Your custodian handles the sale and sends you a check or bank transfer.",
    pros: [
      "Simple and straightforward",
      "Immediate cash for expenses",
      "No need to find a buyer yourself",
    ],
    cons: [
      "May sell at unfavorable prices",
      "Lose silver position permanently",
      "Subject to custodian's pricing",
    ],
    taxTreatment: "Entire distribution taxed as ordinary income",
    icon: DollarSign,
  },
  {
    option: "In-Kind Distribution",
    description:
      "Take physical silver instead of cash. You receive the actual silver coins or bars. Must still pay taxes on fair market value at distribution.",
    pros: [
      "Keep your silver position",
      "No forced sale at bad timing",
      "Physical ownership after distribution",
    ],
    cons: [
      "Still owe taxes on FMV",
      "Need secure storage after receipt",
      "May require selling some for tax payment",
    ],
    taxTreatment: "FMV at distribution taxed as ordinary income",
    icon: Coins,
  },
  {
    option: "Qualified Charitable Distribution (QCD)",
    description:
      "Donate silver (sold to cash first) directly to charity. Up to $105,000/year (2026). Counts toward RMD but isn't included in taxable income.",
    pros: [
      "Satisfies RMD requirement",
      "No income tax on distribution",
      "Supports causes you care about",
    ],
    cons: [
      "Must be 70.5+ years old",
      "Cannot benefit from silver later",
      "Must go directly to charity",
    ],
    taxTreatment: "Excluded from taxable income up to $105,000",
    icon: TrendingUp,
  },
];

const rmdCalculationExample = {
  accountValue: 200000,
  age: 75,
  divisor: 22.9, // Uniform Lifetime Table for age 75
  rmdAmount: 8734, // $200,000 / 22.9
  taxRate: 0.22,
  taxOwed: 1921, // $8,734 × 22%
};

const rmdStrategies = [
  {
    strategy: "Convert to Roth Before RMD Age",
    description:
      "Convert Silver IRA to Roth IRA before age 73-75. Pay taxes on conversion now, but Roth IRAs have no RMDs during your lifetime. Good if you expect higher future tax rates.",
    effectiveness: "High",
    complexity: "Medium",
  },
  {
    strategy: "Take Larger Early Distributions",
    description:
      "Take more than the minimum in lower-income years to reduce account balance. Smaller account = smaller future RMDs. Good for managing tax brackets over time.",
    effectiveness: "Medium",
    complexity: "Low",
  },
  {
    strategy: "QCD for Charitable Giving",
    description:
      "If you're charitably inclined, use QCDs instead of regular RMDs. You satisfy the requirement while excluding the amount from income - better than taking RMD then donating.",
    effectiveness: "High",
    complexity: "Low",
  },
  {
    strategy: "In-Kind Distribution + Timing",
    description:
      "Take physical silver when prices are low (lower FMV = lower tax), then hold outside IRA for potential appreciation. Future gains taxed at capital gains rate, not ordinary income.",
    effectiveness: "Medium",
    complexity: "Medium",
  },
  {
    strategy: "Split Between Metals",
    description:
      "If you hold both gold and silver, strategically choose which to distribute. Take distributions from whichever has performed worse to minimize taxable amount.",
    effectiveness: "Medium",
    complexity: "Low",
  },
];

const penalties = [
  {
    scenario: "Missing RMD Deadline",
    penalty: "25% of the amount not taken",
    notes: "Reduced from 50% by SECURE 2.0 Act. Can be reduced to 10% if corrected within 2 years.",
  },
  {
    scenario: "Taking Less Than Required",
    penalty: "25% of the shortfall",
    notes: "Only the shortfall is penalized, not the entire RMD.",
  },
  {
    scenario: "Taking Distribution Before 59.5",
    penalty: "10% early withdrawal penalty + income tax",
    notes: "Applies unless exception applies (disability, substantially equal payments, etc.)",
  },
];

const faqs = [
  {
    question: "How is my Silver IRA RMD calculated?",
    answer:
      "Your RMD is calculated by dividing your Silver IRA's December 31 balance by the IRS life expectancy factor for your age. For a Traditional Silver IRA worth $200,000 at age 75, the factor is 22.9, so RMD = $200,000 / 22.9 = $8,734. Your custodian typically provides this calculation, but you're responsible for taking the distribution.",
  },
  {
    question: "Can I take my RMD in physical silver instead of cash?",
    answer:
      "Yes, this is called an 'in-kind distribution.' Instead of selling silver and receiving cash, you receive the actual silver coins or bars. However, you still owe income tax on the fair market value of the silver at distribution. You'll need to have cash available from other sources to pay the tax bill.",
  },
  {
    question: "What if silver prices drop before I take my RMD?",
    answer:
      "Your RMD is based on the December 31 value of the previous year, but you can take the distribution anytime during the current year. If silver drops significantly, you might take an in-kind distribution at the lower FMV, reducing your tax bill while keeping the same amount of silver. Consult a tax advisor for your specific situation.",
  },
  {
    question: "Do Roth Silver IRAs have RMDs?",
    answer:
      "No, Roth IRAs (including Roth Silver IRAs) do not have RMDs during the original owner's lifetime. This is a major advantage of Roth accounts. However, inherited Roth IRAs DO have distribution requirements for non-spouse beneficiaries (10-year rule).",
  },
  {
    question: "Can I aggregate RMDs from multiple precious metals IRAs?",
    answer:
      "Yes, if you have multiple Traditional IRAs (including precious metals IRAs), you can calculate the total RMD for all of them and take the entire amount from any one IRA. For example, if you have a Gold IRA and Silver IRA, you could take your entire RMD from just the Silver IRA. This allows strategic liquidation choices.",
  },
  {
    question: "What happens to my Silver IRA RMD if I die?",
    answer:
      "If you die before taking your RMD for the year, your beneficiary must take it by December 31. The distribution is included in the beneficiary's income, not yours. Non-spouse beneficiaries are then subject to the 10-year rule - they must empty the inherited IRA within 10 years. Spouse beneficiaries have more options including rolling it into their own IRA.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver IRA RMD Rules: Required Minimum Distribution Guide",
      "description": "Understand Required Minimum Distribution rules for Silver IRAs.",
      "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-27",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

export default function SilverIraRmdRulesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-red-400 text-sm font-medium mb-4 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30">
              <AlertTriangle className="h-4 w-4" />
              REQUIRED READING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              Silver IRA{" "}
              <span className="text-red-400">RMD Rules</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Required Minimum Distributions for Silver IRAs - what you must know
              about distribution rules, tax implications, and strategies to minimize
              your tax burden.
            </p>

            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "rmd-rules-hero", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan Your Silver IRA <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* RMD Age Table */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
              When Do Silver IRA RMDs Begin?
            </h2>
            <p className="text-slate-600 text-center mb-8">
              Your Required Beginning Date depends on when you were born. The SECURE
              2.0 Act pushed back RMD ages.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 border-b border-slate-200 font-bold text-slate-900">
                      Birth Year
                    </th>
                    <th className="p-4 border-b border-slate-200 font-bold text-slate-900">
                      RMDs Begin At Age
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rmdAgeTable.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 text-slate-600">{row.birthYear}</td>
                      <td className="p-4 text-red-400 font-bold">{row.rmdAge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-[#B22234]/10 border border-[#B22234]/30 rounded-lg p-4">
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">First-Year Exception:</strong> For
                your first RMD, you can delay until April 1 of the following year.
                However, you'll then need to take TWO RMDs that year (both years'
                worth), which could push you into a higher tax bracket.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* RMD Calculation Example */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              <Calculator className="h-6 w-6 text-red-400 inline-block mr-3" />
              How Silver IRA RMDs Are Calculated
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">
                Example: $200,000 Silver IRA at Age 75
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Account Value (Dec 31)</span>
                    <span className="text-slate-900 font-semibold">
                      ${rmdCalculationExample.accountValue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Your Age</span>
                    <span className="text-slate-900 font-semibold">
                      {rmdCalculationExample.age}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">IRS Divisor (Uniform Lifetime Table)</span>
                    <span className="text-slate-900 font-semibold">
                      {rmdCalculationExample.divisor}
                    </span>
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Required Minimum Distribution</div>
                    <div className="text-3xl font-bold text-red-400">
                      ${rmdCalculationExample.rmdAmount.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-600 mt-3">
                      At 22% tax bracket:{" "}
                      <span className="text-slate-900 font-semibold">
                        ${rmdCalculationExample.taxOwed.toLocaleString()} tax
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4 text-center">
                Formula: Account Value / IRS Divisor = RMD Amount<br />
                ${rmdCalculationExample.accountValue.toLocaleString()} / {rmdCalculationExample.divisor} = ${rmdCalculationExample.rmdAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Distribution Options */}
      <section className="py-16 bg-slate-100">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            How to Take Your Silver IRA RMD
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            You have options for how to receive your Required Minimum Distribution.
            Each has different implications.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {distributionOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-500/20 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{option.option}</h3>
                      <p className="text-sm text-slate-600">{option.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-green-400 mb-2">Pros</h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {option.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <CheckCircle2 className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-red-400 mb-2">Cons</h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {option.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <XCircle className="h-3 w-3 text-red-400 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-100/30 border border-slate-200 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-slate-600 mb-2">Tax Treatment</h4>
                      <p className="text-xs text-slate-600">{option.taxTreatment}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need Help Planning Your RMD Strategy?
            </h3>
            <p className="text-slate-600 mb-6">
              Augusta Precious Metals can help you understand how RMDs work with
              your Silver IRA and connect you with tax professionals who specialize
              in precious metals retirement accounts.
            </p>
            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "rmd-rules-mid", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get RMD Planning Help <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* RMD Strategies */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Strategies to Minimize Silver IRA RMD Taxes
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {rmdStrategies.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{item.strategy}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.effectiveness === "High"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-[#B22234]/20 text-[#B22234]"
                    }`}
                  >
                    {item.effectiveness} Impact
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                <p className="text-xs text-slate-600">Complexity: {item.complexity}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Penalties Section */}
      <section className="py-16 bg-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8 flex items-center justify-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              RMD Penalties to Avoid
            </h2>
            <div className="space-y-4">
              {penalties.map((item, index) => (
                <div
                  key={index}
                  className="bg-red-500/10 border border-red-500/30 rounded-xl p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-red-400 flex-shrink-0">
                      {item.penalty}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.scenario}</h3>
                      <p className="text-sm text-slate-600">{item.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              <Calendar className="h-6 w-6 text-red-400 inline-block mr-3" />
              Key RMD Deadlines
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
                <div className="text-2xl font-bold text-red-400 flex-shrink-0">Dec 31</div>
                <div>
                  <h3 className="font-bold text-slate-900">Annual RMD Deadline</h3>
                  <p className="text-sm text-slate-600">
                    You must take your RMD by December 31 each year (except first year)
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
                <div className="text-2xl font-bold text-[#B22234] flex-shrink-0">Apr 1</div>
                <div>
                  <h3 className="font-bold text-slate-900">First-Year Extension</h3>
                  <p className="text-sm text-slate-600">
                    Your first RMD can be delayed until April 1 following your RMD start year
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
                <div className="text-2xl font-bold text-slate-600 flex-shrink-0">Dec 31</div>
                <div>
                  <h3 className="font-bold text-slate-900">Valuation Date</h3>
                  <p className="text-sm text-slate-600">
                    RMD calculated using your account value on December 31 of prior year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Silver IRA RMD FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900 font-semibold list-none">
                  {faq.question}
                  <span className="text-[#B22234] group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12">
        <Container>
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Related Silver IRA Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/transfer-ira-to-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Transfer IRA to Silver</h3>
              <p className="text-sm text-slate-600">Step-by-step rollover guide</p>
            </Link>
            <Link
              href="/silver-retirement/inheritance-planning"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Inheritance Planning</h3>
              <p className="text-sm text-slate-600">Estate planning with silver</p>
            </Link>
            <Link
              href="/silver-retirement/how-much-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">How Much Silver?</h3>
              <p className="text-sm text-slate-600">Portfolio allocation guide</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Plan Your Silver IRA Distribution Strategy"
            subheadline="Augusta Precious Metals helps you understand RMD rules and can connect you with tax professionals who specialize in precious metals IRAs. Get expert guidance on minimizing your tax burden."
            trackSource="rmd-rules-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
