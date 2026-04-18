// src/app/is-enough-to-retire/page.tsx
// "Is $X Enough to Retire?" Hub Page — targets high-volume retirement adequacy queries

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { FAQSection } from "@/components/seo/FAQSection";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import {
  Calculator,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Is $X Enough to Retire? Retirement Savings Calculator & Guide (2026)",
  description:
    "Find out if your retirement savings are enough. Analyze $200k, $300k, $400k, $500k, $600k, $750k, $800k, and $1M+ scenarios using the 4% rule, Social Security, and real healthcare costs.",
  keywords: [
    "is 500k enough to retire",
    "is 300k enough to retire",
    "can i retire with 750000",
    "retirement savings by age",
    "how much do i need to retire",
    "4 percent rule retirement",
  ],
  alternates: {
    canonical: "/is-enough-to-retire",
  },
  openGraph: {
    title: "Is Your Retirement Savings Enough? Complete 2026 Analysis",
    description:
      "Detailed analysis of retirement savings adequacy from $200k to $1M+. Calculator, 4% rule breakdowns, and gold protection strategies.",
    type: "article",
  },
};

const amounts = [
  {
    amount: "$300k",
    slug: "retire-with-300k-at-55",
    monthly: "$1,000",
    annual: "$12,000",
    withSS: "$33,756",
    verdict: "Tight — requires low-cost living + part-time income",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    amount: "$400k",
    slug: "retire-with-400k-at-60",
    monthly: "$1,333",
    annual: "$16,000",
    withSS: "$37,756",
    verdict: "Possible in low-cost areas with controlled spending",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    amount: "$500k",
    slug: "retire-with-500k-at-62",
    monthly: "$1,667",
    annual: "$20,000",
    withSS: "$41,756",
    verdict: "Comfortable in moderate-cost areas",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    amount: "$600k",
    slug: "retire-with-600k-at-65",
    monthly: "$2,000",
    annual: "$24,000",
    withSS: "$45,756",
    verdict: "Solid — covers most areas with discipline",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    amount: "$750k",
    slug: "retire-with-750k",
    monthly: "$2,500",
    annual: "$30,000",
    withSS: "$51,756",
    verdict: "Comfortable — above-average retirement income",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    amount: "$800k",
    slug: "retire-with-800k",
    monthly: "$2,667",
    annual: "$32,000",
    withSS: "$53,756",
    verdict: "Strong position — flexibility for healthcare & travel",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    amount: "$1M",
    slug: "retire-with-1-million",
    monthly: "$3,333",
    annual: "$40,000",
    withSS: "$61,756",
    verdict: "Classic milestone — inflation is the real threat",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

const faqs = [
  {
    question: "How much money do I need to retire comfortably in 2026?",
    answer:
      "Most financial advisors suggest you need 25x your annual expenses saved for retirement (the inverse of the 4% rule). For a $50,000/year lifestyle, that's $1.25 million. However, Social Security reduces this significantly — with average SS benefits of $21,756/year, you'd only need about $706,000 in savings to reach $50,000/year total income.",
  },
  {
    question: "What is the 4% rule and is it still valid?",
    answer:
      "The 4% rule says you can withdraw 4% of your portfolio annually (adjusted for inflation) and your money should last 30 years. It's based on the 1994 Trinity Study. While some argue lower returns may reduce this to 3-3.5%, the rule remains a useful baseline. Diversifying 10-15% into gold can improve sequence-of-returns risk.",
  },
  {
    question: "Can I retire with $500,000?",
    answer:
      "Yes, $500,000 can support retirement, especially with Social Security. At a 4% withdrawal rate, $500k provides $20,000/year. Combined with average Social Security ($21,756/year), total income is ~$41,756/year. This works well in low-to-moderate cost areas but may be tight in expensive cities.",
  },
  {
    question: "How does gold protect my retirement savings?",
    answer:
      "Gold acts as a hedge against inflation, dollar devaluation, and stock market crashes. During the 2008 crisis, gold gained 25% while the S&P 500 lost 37%. A 10-15% gold allocation in retirement portfolios has historically reduced drawdowns by 15-25% while maintaining similar long-term returns.",
  },
  {
    question: "What's the biggest risk to my retirement savings?",
    answer:
      "Sequence-of-returns risk — a market crash in your first 5 years of retirement can permanently deplete your savings even if markets later recover. This is why diversification into non-correlated assets like gold is critical for retirees. A $750,000 portfolio that drops 40% in year one may never recover with ongoing withdrawals.",
  },
  {
    question: "Should I factor in healthcare costs?",
    answer:
      "Absolutely. Before Medicare eligibility at 65, a couple can pay $12,000-$24,000/year for health insurance. After 65, Medicare premiums, supplemental insurance, and out-of-pocket costs average $6,500-$12,000/year per person. Fidelity estimates a 65-year-old couple needs $315,000 saved just for healthcare in retirement.",
  },
];

const schema = articleSchema({
  title: "Is $X Enough to Retire? Complete Retirement Savings Analysis",
  description:
    "Comprehensive analysis of retirement savings adequacy from $200k to $1M+.",
  slug: "/is-enough-to-retire",
});

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Is Enough to Retire?", url: "/is-enough-to-retire" },
]);

export default function IsEnoughToRetirePage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <SchemaScript schema={breadcrumbs} />
      <Navbar />

      {/* Hero */}
      <header className="bg-[#0C0D18] py-16 md:py-20 border-b border-[#2A2D42]">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800 mb-6 border border-amber-200">
              <Calculator className="h-4 w-4" />
              Updated for 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-[#F6F4EF]">
              Is Your Retirement Savings Enough?
            </h1>
            <p className="text-xl text-[#D0CCC4] leading-relaxed">
              Find out exactly how far your savings will go — from $300k to
              $1M+. Real math, real scenarios, no fluff.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-12">
        <AnswerFirst
          answer="Whether your savings are 'enough' depends on three factors: your annual spending, Social Security income, and how long you need it to last. Using the 4% safe withdrawal rule, $500,000 generates $20,000/year; combined with average Social Security ($21,756/year), that's $41,756/year total. Most Americans need $40,000-$60,000/year for a comfortable retirement."
          keyFacts={[
            "4% rule: multiply your savings by 0.04 for safe annual withdrawal",
            "Average Social Security benefit in 2026: $21,756/year ($1,813/month)",
            "Healthcare before 65: budget $12,000-$24,000/year per couple",
            "Location matters: $500k goes much further in Tennessee than California",
            "A 10-15% gold allocation protects against the #1 retirement risk: sequence-of-returns",
          ]}
          className="mb-12 max-w-4xl"
        />

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-8">
            Retirement Savings Breakdown: $300k to $1M
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto border border-[#2A2D42] rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0C0D18] border-b border-[#2A2D42]">
                  <th className="text-left py-4 px-5 font-semibold text-[#F6F4EF]">
                    Savings
                  </th>
                  <th className="text-left py-4 px-5 font-semibold text-[#F6F4EF]">
                    Monthly (4% Rule)
                  </th>
                  <th className="text-left py-4 px-5 font-semibold text-[#F6F4EF]">
                    Annual (4% Rule)
                  </th>
                  <th className="text-left py-4 px-5 font-semibold text-[#F6F4EF]">
                    + Social Security
                  </th>
                  <th className="text-left py-4 px-5 font-semibold text-[#F6F4EF]">
                    Verdict
                  </th>
                  <th className="text-left py-4 px-5 font-semibold text-[#F6F4EF]">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {amounts.map((row) => (
                  <tr
                    key={row.slug}
                    className="border-b border-[#2A2D42] hover:bg-[#121423] transition-colors"
                  >
                    <td className="py-4 px-5 font-bold text-[#F6F4EF] text-lg">
                      {row.amount}
                    </td>
                    <td className="py-4 px-5 text-[#D0CCC4]">{row.monthly}</td>
                    <td className="py-4 px-5 text-[#D0CCC4]">{row.annual}</td>
                    <td className="py-4 px-5 font-semibold text-[#F6F4EF]">
                      {row.withSS}
                    </td>
                    <td className={`py-4 px-5 font-medium ${row.color}`}>
                      {row.verdict}
                    </td>
                    <td className="py-4 px-5">
                      <Link
                        href={`/is-enough-to-retire/${row.slug}`}
                        className="inline-flex items-center gap-1 text-[#D4A94E] font-medium hover:underline"
                      >
                        Full Analysis
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {amounts.map((row) => (
              <Link
                key={row.slug}
                href={`/is-enough-to-retire/${row.slug}`}
                className={`block ${row.bg} ${row.border} border rounded-xl p-5 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-[#F6F4EF]">
                    {row.amount}
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#A8A39A]" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-[#A8A39A]">4% Rule:</span>{" "}
                    <span className="font-medium">{row.annual}/yr</span>
                  </div>
                  <div>
                    <span className="text-[#A8A39A]">+ SS:</span>{" "}
                    <span className="font-semibold">{row.withSS}/yr</span>
                  </div>
                </div>
                <p className={`text-sm font-medium ${row.color}`}>
                  {row.verdict}
                </p>
              </Link>
            ))}
          </div>

          <p className="text-sm text-[#A8A39A] mt-4 italic">
            * Based on 4% safe withdrawal rate + average Social Security benefit
            of $21,756/year. Individual results vary based on spending,
            location, and healthcare needs.
          </p>
        </section>

        {/* Key Variables Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-8">
            3 Factors That Determine If You Have Enough
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-[#F6F4EF]">Annual Spending</h3>
              </div>
              <p className="text-[#D0CCC4] text-sm leading-relaxed">
                The average retired household spends $52,141/year (BLS 2024).
                Your number depends on location, healthcare, and lifestyle.
                Housing is typically 30-35% of the budget.
              </p>
            </div>
            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-bold text-[#F6F4EF]">
                  Social Security
                </h3>
              </div>
              <p className="text-[#D0CCC4] text-sm leading-relaxed">
                Average benefit: $1,813/month. Claiming at 62 reduces it by 30%.
                Waiting until 70 increases it by 24% over full retirement age.
                This is often the biggest income source in retirement.
              </p>
            </div>
            <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-100">
                  <Shield className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-[#F6F4EF]">
                  Inflation Protection
                </h3>
              </div>
              <p className="text-[#D0CCC4] text-sm leading-relaxed">
                At 3% inflation, $50,000/year of purchasing power erodes to
                $37,200 in 10 years. Gold has historically matched or exceeded
                inflation — a 10-15% allocation preserves your buying power.
              </p>
            </div>
          </div>
        </section>

        {/* Gold Protection CTA */}
        <section className="mb-16 bg-[rgba(197,149,46,0.06)] border border-[#000080]/10 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">
              Protect What You&apos;ve Saved
            </h2>
            <p className="text-[#D0CCC4] mb-6">
              The biggest risk in retirement isn&apos;t running out of money — it&apos;s
              a market crash in your first 5 years. A Gold IRA protects against
              sequence-of-returns risk while preserving your purchasing power.
            </p>
            <AugustaCTA
              variant="inline"
              trackSource="is-enough-to-retire-hub"
            />
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-8">
            Retirement Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Retirement Calculator",
                href: "/tools/retirement-calculator",
                desc: "How much do you need? Project your retirement savings growth.",
              },
              {
                name: "Money Longevity Calculator",
                href: "/tools/money-longevity-calculator",
                desc: "How long will your savings last at different withdrawal rates?",
              },
              {
                name: "Social Security Calculator",
                href: "/tools/social-security-calculator",
                desc: "Estimate your Social Security benefits by claiming age.",
              },
              {
                name: "Gold Allocation Calculator",
                href: "/tools/gold-allocation-calculator",
                desc: "Find your optimal gold allocation for portfolio protection.",
              },
              {
                name: "Monte Carlo Simulator",
                href: "/tools/monte-carlo-retirement-simulator",
                desc: "Run 1,000 scenarios to test your retirement plan's survival rate.",
              },
              {
                name: "RMD Calculator",
                href: "/tools/rmd-calculator",
                desc: "Calculate your Required Minimum Distributions by age.",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-[#161828] border border-[#2A2D42] rounded-xl p-5 hover:border-[rgba(197,149,46,0.45)] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-4 w-4 text-[#D4A94E]" />
                  <h3 className="font-bold text-[#F6F4EF] group-hover:text-[#D4A94E] transition-colors">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-sm text-[#D0CCC4]">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          faqs={faqs}
          className="mb-16 max-w-3xl"
        />
      </Container>

      <section className="py-12 bg-white">
        <Container>
          <AutoRelatedContent currentUrl="/is-enough-to-retire" />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
