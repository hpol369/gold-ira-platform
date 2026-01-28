// src/app/silver-retirement/silver-vs-bonds/page.tsx
// Keywords: silver vs bonds for retirees

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
  TrendingUp,
  Shield,
  Scale,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  DollarSign,
  Percent,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Silver vs Bonds for Retirees | Which is Better for Retirement? (2026)",
  description:
    "Compare silver vs bonds for retirement portfolios. Learn about inflation protection, risk profiles, income generation, and how to balance both assets for a secure retirement.",
  keywords: [
    "silver vs bonds for retirees",
    "silver or bonds retirement",
    "silver bonds comparison",
    "precious metals vs bonds",
    "retirement investment silver bonds",
  ],
  openGraph: {
    title: "Silver vs Bonds for Retirees | Complete Comparison",
    description: "Which is better for retirement: silver or bonds?",
    url: "https://www.richdadretirement.com/silver-retirement/silver-vs-bonds",
    type: "article",
  },
};

const comparisonTable = [
  {
    factor: "Inflation Protection",
    silver: "Excellent - historically rises with inflation",
    silverScore: 5,
    bonds: "Poor - fixed payments lose purchasing power",
    bondsScore: 2,
  },
  {
    factor: "Income Generation",
    silver: "None - no dividends or interest",
    silverScore: 1,
    bonds: "Good - regular interest payments",
    bondsScore: 5,
  },
  {
    factor: "Price Volatility",
    silver: "High - can swing 20%+ annually",
    silverScore: 2,
    bonds: "Low to Moderate - varies by duration",
    bondsScore: 4,
  },
  {
    factor: "Capital Preservation",
    silver: "Variable - depends on market timing",
    silverScore: 3,
    bonds: "Good - if held to maturity",
    bondsScore: 4,
  },
  {
    factor: "Counterparty Risk",
    silver: "None - physical asset you own",
    silverScore: 5,
    bonds: "Yes - issuer default possible",
    bondsScore: 3,
  },
  {
    factor: "Liquidity",
    silver: "Good - global market, 24/7",
    silverScore: 4,
    bonds: "Variable - depends on type",
    bondsScore: 3,
  },
  {
    factor: "Crisis Performance",
    silver: "Mixed - often rises during uncertainty",
    silverScore: 4,
    bonds: "Good - Treasury bonds are safe havens",
    bondsScore: 4,
  },
  {
    factor: "Tax Efficiency",
    silver: "Poor - collectibles rate (28%) if outside IRA",
    silverScore: 2,
    bonds: "Variable - municipal bonds tax-free",
    bondsScore: 4,
  },
];

const silverPros = [
  "Protection against inflation and currency devaluation",
  "No counterparty risk - you own a physical asset",
  "Industrial demand provides fundamental value support",
  "Portfolio diversification - moves differently than stocks/bonds",
  "Potential for significant appreciation during crises",
  "Tangible asset that can be passed to heirs",
];

const silverCons = [
  "No income generation - doesn't pay dividends or interest",
  "Higher volatility can cause stress for conservative retirees",
  "Storage costs and insurance if held physically",
  "28% collectibles tax rate if sold outside IRA",
  "Can underperform during strong economic periods",
];

const bondsPros = [
  "Regular income through interest payments",
  "Lower volatility for capital preservation",
  "Treasury bonds are backed by U.S. government",
  "Predictable returns if held to maturity",
  "Municipal bonds offer tax-free income",
  "Well-understood, traditional retirement asset",
];

const bondsCons = [
  "Inflation erodes purchasing power of fixed payments",
  "Rising interest rates decrease bond values",
  "Credit risk - corporate/municipal bonds can default",
  "Low yields in current environment (2-4%)",
  "No upside potential beyond stated interest",
  "Heavily dependent on central bank policies",
];

const scenarios = [
  {
    scenario: "High Inflation Environment",
    winner: "Silver",
    explanation:
      "Silver historically rises during inflationary periods as investors seek hard assets. Bond values and purchasing power of fixed payments decline.",
  },
  {
    scenario: "Deflation/Recession",
    winner: "Bonds",
    explanation:
      "Treasury bonds typically perform well during recessions as investors flee to safety. Silver can decline with reduced industrial demand.",
  },
  {
    scenario: "Rising Interest Rates",
    winner: "Silver",
    explanation:
      "Rising rates hurt bond prices (inverse relationship). Silver may benefit as higher rates often accompany inflation concerns.",
  },
  {
    scenario: "Need for Regular Income",
    winner: "Bonds",
    explanation:
      "Bonds provide predictable interest income. Silver generates no income - you'd need to sell portions for cash flow.",
  },
  {
    scenario: "Currency Crisis/Dollar Weakness",
    winner: "Silver",
    explanation:
      "Silver priced in dollars rises when the dollar weakens. Bond values remain stable but lose purchasing power internationally.",
  },
];

const faqs = [
  {
    question: "Should retirees own silver instead of bonds?",
    answer:
      "Most retirees should own BOTH, not one or the other. Bonds provide income stability while silver provides inflation protection and growth potential. A balanced approach might be 60-70% traditional assets (including bonds), 10-15% precious metals (including silver), and the rest in stocks. The exact mix depends on your income needs, risk tolerance, and inflation concerns.",
  },
  {
    question: "How do silver and bonds perform during market crashes?",
    answer:
      "During the 2008 financial crisis, Treasury bonds gained 20%+ while silver initially dropped 20% before recovering. However, in the 2020 COVID crash, silver dropped briefly then surged 47% that year while bond yields hit historic lows. Performance depends on the type of crisis - financial crises favor bonds; inflationary/currency crises favor silver.",
  },
  {
    question: "Are TIPS (inflation-protected bonds) better than silver?",
    answer:
      "TIPS provide inflation protection without silver's volatility, making them popular with conservative retirees. However, TIPS are tied to government-calculated CPI, which some argue understates true inflation. Silver has historically outperformed official inflation measures. Consider holding both: TIPS for steady inflation adjustment, silver for crisis insurance.",
  },
  {
    question: "What percentage should I shift from bonds to silver?",
    answer:
      "If you're concerned about inflation eroding your bond income, consider shifting 5-10% of your bond allocation to precious metals (gold and silver). For example, if you have 40% in bonds, moving to 32% bonds + 8% precious metals maintains similar risk while adding inflation protection. Always consult a financial advisor for personalized advice.",
  },
  {
    question: "Can silver replace bonds for retirement income?",
    answer:
      "No, silver cannot directly replace bond income because it doesn't generate interest or dividends. To create 'income' from silver, you'd need to systematically sell portions, which depletes your holdings and creates tax events. For retirees who need regular income, bonds remain essential - silver should complement, not replace, your income-generating assets.",
  },
  {
    question: "Which is safer: silver or Treasury bonds?",
    answer:
      "For pure safety of principal, Treasury bonds are safer - they're backed by the U.S. government and will repay face value at maturity. However, 'safety' also means preserving purchasing power, where bonds fail during high inflation. Silver protects purchasing power but with higher price volatility. True safety may require holding both.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver vs Bonds for Retirees: Complete Comparison",
      "description": "Compare silver and bonds for retirement portfolios.",
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

export default function SilverVsBondsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium mb-4 bg-teal-500/20 px-4 py-2 rounded-full border border-teal-500/30">
              <Scale className="h-4 w-4" />
              COMPARISON GUIDE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              Silver vs Bonds for{" "}
              <span className="text-teal-400">Retirees</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Should you own silver, bonds, or both in retirement? A detailed
              comparison of inflation protection, income, risk, and more.
            </p>

            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "silver-vs-bonds-hero", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Silver IRAs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              The Bottom Line
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-100/30 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-slate-600" />
                  <h3 className="font-bold text-slate-900">Choose Silver When:</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5" />
                    You're concerned about inflation eroding purchasing power
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5" />
                    You want protection from currency devaluation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5" />
                    You have enough income and seek growth/protection
                  </li>
                </ul>
              </div>
              <div className="bg-slate-100/30 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-slate-600" />
                  <h3 className="font-bold text-slate-900">Choose Bonds When:</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5" />
                    You need regular income from your portfolio
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5" />
                    Capital preservation is your primary goal
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5" />
                    You can't tolerate high price volatility
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Factor</th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-600">Silver</th>
                  <th className="p-4 border-b border-slate-200 font-bold text-teal-400">Bonds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : "bg-slate-100"}>
                    <td className="p-4 font-semibold text-slate-900">{row.factor}</td>
                    <td className="p-4 text-slate-600">
                      <div className="mb-1">{row.silver}</div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < row.silverScore ? "bg-slate-400" : "bg-slate-100"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="mb-1">{row.bonds}</div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < row.bondsScore ? "bg-teal-400" : "bg-slate-100"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-slate-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Silver */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-slate-600" />
                Silver for Retirees
              </h2>
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <h3 className="font-semibold text-green-400 mb-3">Pros</h3>
                  <ul className="space-y-2 text-sm">
                    {silverPros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h3 className="font-semibold text-red-400 mb-3">Cons</h3>
                  <ul className="space-y-2 text-sm">
                    {silverCons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonds */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-teal-400" />
                Bonds for Retirees
              </h2>
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <h3 className="font-semibold text-green-400 mb-3">Pros</h3>
                  <ul className="space-y-2 text-sm">
                    {bondsPros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h3 className="font-semibold text-red-400 mb-3">Cons</h3>
                  <ul className="space-y-2 text-sm">
                    {bondsCons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Considering Adding Silver to Your Portfolio?
            </h3>
            <p className="text-slate-600 mb-6">
              Augusta Precious Metals can help you understand how silver fits with
              your existing bond holdings. Free educational consultation with no
              sales pressure.
            </p>
            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "silver-vs-bonds-mid", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn About Silver IRAs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Scenario Analysis */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Which Wins in Different Scenarios?
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-2">{item.scenario}</h3>
                    <p className="text-sm text-slate-600">{item.explanation}</p>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full font-bold text-sm ${
                      item.winner === "Silver"
                        ? "bg-slate-200 text-slate-700"
                        : "bg-teal-500/20 text-teal-600"
                    }`}
                  >
                    {item.winner} Wins
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Balanced Approach */}
      <section className="py-16 bg-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-4">
              The Best Approach: Own Both
            </h2>
            <p className="text-slate-600 mb-8">
              Most financial experts recommend retirees hold both bonds (for income
              and stability) and precious metals like silver (for inflation protection).
              A common allocation:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">50-60%</div>
                  <div className="text-sm text-slate-600">Stocks & Equities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-1">25-35%</div>
                  <div className="text-sm text-slate-600">Bonds & Fixed Income</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-600 mb-1">5-15%</div>
                  <div className="text-sm text-slate-600">Precious Metals (Gold/Silver)</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Silver vs Bonds FAQs
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
      <section className="py-12 bg-slate-100">
        <Container>
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Continue Your Research
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/how-much-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">How Much Silver?</h3>
              <p className="text-sm text-slate-600">Portfolio allocation guide</p>
            </Link>
            <Link
              href="/silver-retirement/transfer-ira-to-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Transfer IRA to Silver</h3>
              <p className="text-sm text-slate-600">Step-by-step guide</p>
            </Link>
            <Link
              href="/silver-retirement/rmd-rules"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Silver IRA RMD Rules</h3>
              <p className="text-sm text-slate-600">Distribution planning</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Diversify Beyond Bonds with Silver"
            subheadline="Learn how adding silver to your portfolio can provide inflation protection that bonds cannot. Augusta Precious Metals offers free educational consultations to help you make informed decisions."
            trackSource="silver-vs-bonds-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
