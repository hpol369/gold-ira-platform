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
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <Target className="h-4 w-4" />
              Protection, Not Speculation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              You Worked 30 Years for That 401k. Here&apos;s How to Protect It.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              You didn&apos;t build your retirement savings by gambling. You built it through decades of showing up,
              working hard, and making smart choices. Now you need to protect what you&apos;ve earned from
              the two things that can wipe it out: market crashes and inflation.
            </p>
          </div>
        </Container>
      </header>

      {/* The Big Picture */}
      <section className="py-16 bg-slate-800/50 border-b border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              What Nobody on Wall Street Will Tell You
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              When the 2008 crash hit, workers like Dave watched $200,000 disappear from their 401k in months.
              His broker said &quot;stay the course.&quot; Meanwhile, people who held gold actually saw their savings <em>grow</em>.
              That&apos;s the difference between hoping the market recovers and <strong className="text-white">actually protecting</strong> what you&apos;ve built.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-red-400 mb-2">-37%</div>
                <div className="text-slate-300">S&P 500 in 2008 (many lost more)</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-green-400 mb-2">+5.5%</div>
                <div className="text-slate-300">Gold in 2008 (held its ground)</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-amber-400 mb-2">$35T+</div>
                <div className="text-slate-300">US debt (they&apos;re printing money)</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Reasons */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              5 Reasons Workers Are Moving to Gold
            </h2>

            <div className="space-y-8">
              {/* Reason 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-red-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    1. Your Dollars Are Worth Less Every Year
                  </h3>
                  <p className="text-slate-300 mb-4">
                    You&apos;ve seen it at the grocery store, the gas pump, everywhere. That $600,000 you saved?
                    It buys less every year. Tom, a retired machinist from Ohio, put it simply: &quot;I watched
                    my dad&apos;s pension buy less and less every year. I wasn&apos;t going to let that happen to me.&quot;
                    Gold has kept its purchasing power for over 5,000 years. The dollar? Down 97% since 1913.
                  </p>
                  <Link
                    href="/why-gold/inflation-protection"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300"
                  >
                    See how gold fights inflation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <BarChart3 className="h-7 w-7 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    2. When Stocks Crash, Gold Usually Doesn&apos;t
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Here&apos;s what your broker won&apos;t explain: gold and stocks often move in opposite directions.
                    When the 2008 crash hit, Mike&apos;s 401k dropped 40%. But his gold? Up 5.5%. That&apos;s not luck.
                    That&apos;s how gold works. It&apos;s like having insurance that actually pays off when you need it most.
                  </p>
                  <Link
                    href="/why-gold/gold-vs-stocks"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300"
                  >
                    See gold vs stocks comparison
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    3. The Government Is $35 Trillion in Debt
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Let&apos;s be straight: the government keeps printing money to pay its bills. Every new dollar
                    they print makes your dollars worth less. Gold can&apos;t be printed. It can&apos;t be inflated away
                    by politicians. That&apos;s why central banks around the world are buying gold at record rates.
                    They know something most people don&apos;t.
                  </p>
                  <Link
                    href="/why-gold/central-banks-buying-gold"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300"
                  >
                    Why central banks are buying gold
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    4. You Can&apos;t Afford Another 2008
                  </h3>
                  <p className="text-slate-300 mb-4">
                    If you&apos;re 58 and planning to retire at 63, a 40% market crash isn&apos;t an &quot;opportunity to buy
                    the dip.&quot; It&apos;s five more years of work. Susan, a nurse from Michigan, learned this the hard way
                    in 2008. She delayed retirement by 4 years. &quot;If I&apos;d had 20% in gold,&quot; she told us, &quot;I would have
                    been fine.&quot; Gold is crisis insurance for people who can&apos;t afford to start over.
                  </p>
                  <Link
                    href="/learn/gold-ira-benefits#crisis-protection"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300"
                  >
                    Learn about crash protection
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Reason 5 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Clock className="h-7 w-7 text-amber-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    5. It&apos;s Real. You Own It. Period.
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Enron employees had company stock. Lehman Brothers employees had company stock. They trusted
                    paper promises. Gold is different. It&apos;s a real, physical thing you actually own. It can&apos;t go
                    to zero. It&apos;s been valuable for 5,000 years. No company, no government, no banker can take
                    that away from you.
                  </p>
                  <Link
                    href="/why-gold/physical-gold-vs-paper"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300"
                  >
                    Physical gold vs paper promises
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Historical Performance */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            What Would Have Happened to Your 401k?
          </h2>
          <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
            Let&apos;s look at real numbers. If you had $500,000 in your 401k before each of these crashes,
            here&apos;s what happened to people who were 100% in stocks vs. those with 20% in gold.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4">2008 Financial Crisis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">All stocks</span>
                    <span className="text-red-400 font-bold">Lost $185,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">80% stocks / 20% gold</span>
                    <span className="text-amber-400 font-bold">Lost $142,000</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2">Gold helped save $43,000 in losses</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4">2020 COVID Crash</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">All stocks (March)</span>
                    <span className="text-red-400 font-bold">Lost $170,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">80% stocks / 20% gold</span>
                    <span className="text-amber-400 font-bold">Lost $111,000</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2">Gold helped save $59,000 in losses</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4">2000-2002 Dot-Com Crash</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">All stocks (NASDAQ)</span>
                    <span className="text-red-400 font-bold">Lost $390,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">With gold allocation</span>
                    <span className="text-green-400 font-bold">Gold up 12%</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2">Many tech-heavy 401ks were devastated</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4">The Pattern Is Clear</h3>
                <div className="space-y-3 text-slate-300 text-sm">
                  <p>Every major crash in the last 25 years: stocks down, gold held steady or up.</p>
                  <p>Your broker gets paid whether you lose money or not. Think about what that means.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 text-center mt-6">
              Past performance doesn&apos;t guarantee future results. But the pattern is hard to ignore.
            </p>
          </div>
        </Container>
      </section>

      {/* Who Should Consider */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Is Gold Right for You?
            </h2>
            <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
              Let&apos;s be honest: gold isn&apos;t for everyone. But if you recognize yourself below, it might be worth a conversation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Gold Makes Sense If You:
                </h3>
                <ul className="space-y-3 text-green-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Have worked 20-30+ years and saved real money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Remember what 2008 did to your 401k</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Are 5-15 years from retirement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Don&apos;t trust Wall Street to look out for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Want to protect your savings, not gamble with them</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-500/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
                <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Gold Probably Isn&apos;t Right If You:
                </h3>
                <ul className="space-y-3 text-amber-300">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Are looking to &quot;get rich quick&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Need to withdraw money within 1-2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Want regular dividend checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Have less than $25,000 in retirement savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>Think you can &quot;time the market&quot;</span>
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
              Why Your Broker Probably Never Mentioned This
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Here&apos;s a simple question: Why didn&apos;t your financial advisor ever suggest moving some of
              your 401k to gold? The answer is uncomfortable. They make money when you&apos;re in stocks and
              mutual funds. Gold doesn&apos;t generate trading commissions. It just sits there, protecting
              your wealth. That&apos;s not how Wall Street makes money.
            </p>
            <p className="text-lg text-slate-400 mb-6">
              Most independent financial advisors recommend 10-20% of retirement savings in gold for people
              within 15 years of retirement. Not to get rich. To avoid getting poor.
            </p>
            <p className="text-amber-400 font-semibold">
              Protection first. Everything else second.
            </p>
          </div>
        </Container>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Learn More
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/what-is-a-gold-ira"
              className="group block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/50 hover:bg-white/10 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                What Is a Gold IRA?
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Learn the basics of Gold IRAs and how they work.
              </p>
              <span className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/gold-ira-rules"
              className="group block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/50 hover:bg-white/10 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                Gold IRA Rules
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Understand IRS regulations and requirements.
              </p>
              <span className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/reviews"
              className="group block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/50 hover:bg-white/10 transition-all"
            >
              <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                Company Reviews
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Find the best Gold IRA company for your needs.
              </p>
              <span className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Want Straight Answers About Gold?"
            subheadline="Augusta Precious Metals offers free one-on-one conversations with specialists who will answer your questions honestly. No pressure, no sales pitch - just real information from people who actually know this stuff."
            trackSource="why-gold-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
