// src/app/why-gold/page.tsx
// P4-001: WHY Gold hub page - The case for gold in retirement

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  Shield,
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Gold for Retirement? | Inflation Protection & Portfolio Safety",
  description: "Understand why millions of Americans add gold to their retirement portfolios. Learn about inflation protection, portfolio diversification, and wealth preservation.",
  openGraph: {
    title: "Why Gold for Retirement? | Inflation Protection & Portfolio Safety",
    description: "Discover the reasons why gold has been a trusted store of value for thousands of years and how it can protect your retirement savings.",
    type: "website",
  },
};

export default function WhyGoldPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <Target className="h-4 w-4" />
              The Case for Gold
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Gold for Your Retirement?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              For thousands of years, gold has preserved wealth through wars, recessions, and currency collapses.
              Here&apos;s why millions of Americans are adding it to their retirement portfolios.
            </p>
          </div>
        </Container>
      </header>

      {/* The Big Picture */}
      <section className="py-16 bg-amber-50 border-b border-amber-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              The Simple Truth
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Your retirement savings face two invisible threats: <strong>inflation</strong> that erodes
              purchasing power, and <strong>market crashes</strong> that can wipe out years of gains overnight.
              Gold has historically protected against both.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                <div className="text-4xl font-bold text-amber-600 mb-2">5,000+</div>
                <div className="text-slate-600">Years as a store of value</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                <div className="text-4xl font-bold text-amber-600 mb-2">680%</div>
                <div className="text-slate-600">Gold price increase since 2000</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-200">
                <div className="text-4xl font-bold text-amber-600 mb-2">$35T+</div>
                <div className="text-slate-600">US national debt (2026)</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Reasons */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              5 Reasons to Consider Gold
            </h2>

            <div className="space-y-8">
              {/* Reason 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    1. Protection Against Inflation
                  </h3>
                  <p className="text-slate-600 mb-4">
                    When inflation rises, your dollar buys less. But gold has historically maintained its
                    purchasing power across generations. An ounce of gold bought a fine suit 100 years ago—and
                    still does today. Your paper savings can&apos;t make that claim.
                  </p>
                  <Link
                    href="/why-gold/inflation-protection"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Learn about gold & inflation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="h-7 w-7 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    2. Portfolio Diversification
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Gold often moves independently of stocks and bonds. When markets crashed in 2008,
                    the S&P 500 fell 37%—gold rose 5.5%. This negative correlation can help smooth out
                    your portfolio&apos;s volatility and protect against devastating losses.
                  </p>
                  <Link
                    href="/why-gold/diversification"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Learn about diversification
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    3. Protection Against Dollar Weakness
                  </h3>
                  <p className="text-slate-600 mb-4">
                    With US national debt exceeding $35 trillion and central banks around the world
                    accumulating gold, many investors worry about long-term dollar stability. Gold
                    provides insurance against currency devaluation—it can&apos;t be printed like paper money.
                  </p>
                  <Link
                    href="/why-gold/dollar-protection"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Learn about currency protection
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    4. Crisis Insurance
                  </h3>
                  <p className="text-slate-600 mb-4">
                    During economic uncertainty, investors flock to gold. Whether it&apos;s banking crises,
                    geopolitical tensions, or market panics, gold has historically served as a &quot;safe haven&quot;
                    asset that holds value when other investments falter.
                  </p>
                  <Link
                    href="/why-gold/crisis-protection"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Learn about crisis protection
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Clock className="h-7 w-7 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    5. Long-Term Wealth Preservation
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Unlike stocks of companies that can go bankrupt or currencies that can collapse,
                    gold has never gone to zero. It&apos;s a tangible asset with intrinsic value that has
                    preserved wealth across civilizations, making it ideal for long-term retirement planning.
                  </p>
                  <Link
                    href="/why-gold/wealth-preservation"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Learn about wealth preservation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Historical Performance */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Gold During Market Crises
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">2008 Financial Crisis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">S&P 500</span>
                    <span className="text-red-600 font-bold">-37%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Gold</span>
                    <span className="text-green-600 font-bold">+5.5%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">2020 COVID Crash</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">S&P 500 (Mar)</span>
                    <span className="text-red-600 font-bold">-34%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Gold (2020)</span>
                    <span className="text-green-600 font-bold">+25%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">2000-2002 Dot-Com Crash</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">NASDAQ</span>
                    <span className="text-red-600 font-bold">-78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Gold</span>
                    <span className="text-green-600 font-bold">+12%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">2022 Rate Hike Cycle</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">60/40 Portfolio</span>
                    <span className="text-red-600 font-bold">-17%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Gold</span>
                    <span className="text-amber-600 font-bold">-0.3%</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 text-center mt-6">
              Past performance does not guarantee future results. Gold prices can be volatile in the short term.
            </p>
          </div>
        </Container>
      </section>

      {/* Who Should Consider */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Is Gold Right for Your Retirement?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Gold May Be Right If You:
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Are concerned about inflation eroding your savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Want to diversify beyond stocks and bonds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Have 10+ years until retirement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Value tangible assets over paper promises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Have $50,000+ in retirement savings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Consider Carefully If You:
                </h3>
                <ul className="space-y-3 text-amber-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Need regular income from investments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Have a very short time horizon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Can&apos;t tolerate short-term price swings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Are looking for quick profits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Have less than $10,000 to invest</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expert Recommendation */}
      <section className="py-16 bg-slate-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              What Financial Experts Say
            </h2>
            <blockquote className="text-xl text-slate-300 leading-relaxed mb-6">
              &quot;I recommend a 5-15% allocation to gold for most retirement portfolios. It&apos;s not about
              getting rich quick—it&apos;s about protecting what you&apos;ve worked a lifetime to build.&quot;
            </blockquote>
            <p className="text-amber-400 font-semibold">
              — Common guidance from financial advisors
            </p>
          </div>
        </Container>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Learn More
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/what-is-a-gold-ira"
              className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                What Is a Gold IRA?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Learn the basics of Gold IRAs and how they work.
              </p>
              <span className="text-amber-600 text-sm font-semibold flex items-center gap-1">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/gold-ira-rules"
              className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                Gold IRA Rules
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Understand IRS regulations and requirements.
              </p>
              <span className="text-amber-600 text-sm font-semibold flex items-center gap-1">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/reviews"
              className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                Company Reviews
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Find the best Gold IRA company for your needs.
              </p>
              <span className="text-amber-600 text-sm font-semibold flex items-center gap-1">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Explore Gold for Your Retirement?"
            subheadline="Augusta Precious Metals offers free one-on-one web conferences to help you understand if gold is right for your portfolio. No pressure, just education from industry experts."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
