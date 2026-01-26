import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { RailroadRetirementCalculator } from "@/components/tools/RailroadRetirementCalculator";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  Train,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calculator,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Railroad Retirement Calculator 2026 | Free RRB Benefits Calculator",
  description:
    "Free Railroad Retirement calculator for 2026. Calculate your Tier I, Tier II, and spousal benefits from the Railroad Retirement Board. Compare to Social Security.",
  keywords: [
    "railroad retirement calculator",
    "rrb calculator",
    "railroad pension calculator",
    "tier 1 benefits",
    "tier 2 benefits",
    "railroad retirement board",
    "rrb benefits",
    "railroad retirement benefits",
    "railroad spouse benefits",
  ],
};

const rrbFacts = [
  {
    title: "Two-Tier System",
    description:
      "Railroad Retirement provides Tier I (Social Security equivalent) plus Tier II (additional railroad pension). Most workers get significantly more than SS alone.",
    icon: Train,
  },
  {
    title: "30-Year Rule",
    description:
      "With 30 years of railroad service, you can retire at age 60 with full benefits - 2 years earlier than Social Security's earliest claiming age.",
    icon: CheckCircle2,
  },
  {
    title: "Spousal Benefits",
    description:
      "Spouses receive 50% of Tier I plus 45% of Tier II benefits. This is more generous than Social Security's spousal benefits.",
    icon: Users,
  },
  {
    title: "Survivor Protection",
    description:
      "Surviving spouses can receive up to 100% of both Tier I and Tier II benefits, providing strong financial protection.",
    icon: Info,
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Railroad Retirement Calculator 2026",
  description:
    "Free Railroad Retirement Board benefits calculator with Tier I, Tier II, and spousal benefit calculations",
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
      name: "How is Railroad Retirement different from Social Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Railroad Retirement provides a two-tier benefit system. Tier I is equivalent to Social Security, while Tier II is an additional pension based on railroad service only. Combined, railroad workers typically receive 30-50% more than they would from Social Security alone.",
      },
    },
    {
      "@type": "Question",
      name: "When can I retire with Railroad Retirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With 30+ years of railroad service, you can retire at age 60 with full benefits. With less service, Tier I follows Social Security rules (age 62 earliest, 67 for full benefits), while Tier II has its own reduction schedule.",
      },
    },
    {
      "@type": "Question",
      name: "How is Tier II calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tier II is calculated as approximately 0.7% multiplied by your years of railroad service, multiplied by your highest 60-month average earnings. For example, 30 years x 0.7% x $7,000/month = $1,470/month Tier II benefit.",
      },
    },
    {
      "@type": "Question",
      name: "What spousal benefits does Railroad Retirement provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spouses receive 50% of the worker's Tier I benefit plus 45% of the Tier II benefit at full retirement age. This is more generous than Social Security, which only provides 50% of the primary benefit.",
      },
    },
  ],
};

export default function RailroadRetirementCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <SchemaScript schema={calculatorSchema} />
      <SchemaScript schema={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />

        <Container>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
              <Train className="h-4 w-4" />
              Railroad Retirement Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Railroad Retirement Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Calculate your Railroad Retirement Board benefits including Tier I, Tier II,
              and spousal benefits. See how much more you get compared to Social Security.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <RailroadRetirementCalculator />

      {/* Key Facts Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Railroad Retirement Benefits Explained
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {rrbFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-amber-400" />
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

      {/* Tier Explanation */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Understanding the Two Tiers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Tier I: Social Security Equivalent
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    Calculated like Social Security using combined railroad and
                    non-railroad earnings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    Subject to Social Security wage base limits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    Receives annual COLA adjustments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">*</span>
                    Early retirement reductions similar to SS (up to 30% at 62)
                  </li>
                </ul>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">
                  Tier II: Railroad Pension
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    Based only on railroad service and earnings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    Formula: ~0.7% x years x highest 60-month average
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    This is the &quot;extra&quot; that railroad workers get
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">*</span>
                    Full benefits at 60 with 30 years of service
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Sample Calculation
              </h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <p className="text-amber-400 font-mono text-sm">
                  30 years service | $7,000/month average earnings | Age 62
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">Tier I (approx)</p>
                  <p className="text-2xl font-bold text-blue-400">$2,800</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">Tier II (approx)</p>
                  <p className="text-2xl font-bold text-amber-400">$1,470</p>
                </div>
                <div className="bg-amber-500/10 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">Total Monthly</p>
                  <p className="text-2xl font-bold text-white">$4,270</p>
                </div>
              </div>
              <p className="text-green-400 text-sm mt-4 text-center">
                That is $1,470/month more than Social Security alone would provide!
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Railroad Retirement Eligibility
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Years of Service
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Earliest Full Retirement
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-6 py-4 text-white font-medium">30+ years</td>
                    <td className="px-6 py-4 text-amber-400 font-semibold">Age 60</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">
                      Full Tier I and Tier II - no reductions
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="px-6 py-4 text-white font-medium">10-29 years</td>
                    <td className="px-6 py-4 text-slate-300">Age 62 (reduced) / 67 (full)</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">
                      Tier I follows SS rules, Tier II has own schedule
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-6 py-4 text-white font-medium">5-9 years</td>
                    <td className="px-6 py-4 text-slate-300">Age 62 (reduced)</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">
                      May receive Tier I only; credits transfer to SS
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="px-6 py-4 text-white font-medium">&lt;5 years</td>
                    <td className="px-6 py-4 text-slate-300">N/A</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">
                      Credits transfer to Social Security
                    </td>
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
              Railroad Retirement FAQ
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How is Railroad Retirement different from Social Security?",
                  a: "Railroad Retirement provides a two-tier benefit system. Tier I is equivalent to Social Security, while Tier II is an additional pension based on railroad service only. Combined, railroad workers typically receive 30-50% more than they would from Social Security alone.",
                },
                {
                  q: "Can I receive both Railroad Retirement and Social Security?",
                  a: "Generally no - your railroad credits are used to calculate your Tier I benefit, which replaces Social Security. However, if you have substantial non-railroad employment, you may receive some SS benefits, potentially reduced by the Windfall Elimination Provision (WEP).",
                },
                {
                  q: "What happens to my benefits if I return to railroad work?",
                  a: "Your Tier I and Tier II benefits may be reduced or suspended if you return to work for a railroad employer before your Full Retirement Age. Work for non-railroad employers is generally not affected until you reach certain earnings limits.",
                },
                {
                  q: "How do spousal benefits work with Railroad Retirement?",
                  a: "Spouses receive 50% of the worker's Tier I plus 45% of Tier II at full retirement age. This is more generous than Social Security. Divorced spouses may also qualify if married 10+ years.",
                },
                {
                  q: "Can I roll my railroad pension into a Gold IRA?",
                  a: "Tier I and Tier II benefits themselves cannot be rolled over - they are defined benefit pensions. However, if you have a Railroad Retirement 401(k) or other qualified plan, that can typically be rolled into a Gold IRA after separation from service or at retirement age.",
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
                    This calculator provides estimates based on simplified formulas.
                    Actual Railroad Retirement benefits depend on your complete earnings
                    record, specific service history, and RRB calculations. For accurate
                    benefit estimates, contact the Railroad Retirement Board directly or
                    review your annual Statement of Account.
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
            headline="30 Years on the Rails. Protect What You've Built."
            subheadline="Your Tier I and Tier II benefits are strong - but any 401(k) or IRA savings are still at risk. A Gold IRA protects your supplemental savings from the next crash."
            trackSource="tools-railroad-retirement-calculator"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
