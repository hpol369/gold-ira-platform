// src/app/why-gold/inflation-protection/page.tsx
// P4-002: Gold as inflation protection deep-dive

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  TrendingUp,
  DollarSign,
  Clock,
  ShoppingCart,
  Home,
  Car,
  Pill,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gold as Inflation Protection | Preserve Purchasing Power in Retirement",
  description: "Learn how gold has protected against inflation for centuries. Understand why gold preserves purchasing power and how it can protect your retirement savings from rising prices.",
  openGraph: {
    title: "Gold as Inflation Protection | Preserve Purchasing Power",
    description: "Discover how gold has historically preserved purchasing power during periods of high inflation and monetary expansion.",
    type: "article",
  },
};

export default function InflationProtectionPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-white py-16 md:py-20">
        <Container>
          <Link
            href="/why-gold"
            className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Why Gold
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <TrendingUp className="h-4 w-4" />
              Inflation Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gold vs. Inflation: Preserving Your Purchasing Power
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              When inflation rises, your dollars buy less. But gold has maintained its purchasing
              power for over 5,000 years. Here&apos;s how gold can protect your retirement savings
              from the silent thief of inflation.
            </p>
          </div>
        </Container>
      </header>

      {/* The Problem */}
      <section className="py-16 bg-red-500/10 border-b border-red-500/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              The Hidden Threat to Your Retirement
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-12">
              Inflation doesn&apos;t take money from your account—it makes your money worth less.
              Even &quot;moderate&quot; inflation of 3% per year means your purchasing power is cut in
              half in just 24 years.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-red-400" />
                  What $100,000 Buys Over Time
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  At 3% annual inflation, here&apos;s what your $100,000 retirement savings will
                  actually purchase:
                </p>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between">
                    <span>Today</span>
                    <span className="font-bold text-green-400">$100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10 years</span>
                    <span className="font-bold text-amber-400">$74,409</span>
                  </div>
                  <div className="flex justify-between">
                    <span>20 years</span>
                    <span className="font-bold text-orange-400">$55,368</span>
                  </div>
                  <div className="flex justify-between">
                    <span>30 years</span>
                    <span className="font-bold text-red-400">$41,199</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-red-400" />
                  Real-World Cost Increases
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Here&apos;s what inflation has done to common purchases (1990 vs. 2024):
                </p>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-slate-500" />
                      <span>Median Home</span>
                    </div>
                    <span className="text-red-400 font-bold">+244%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-slate-500" />
                      <span>Healthcare</span>
                    </div>
                    <span className="text-red-400 font-bold">+315%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-slate-500" />
                      <span>New Car</span>
                    </div>
                    <span className="text-red-400 font-bold">+176%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-slate-500" />
                      <span>Groceries</span>
                    </div>
                    <span className="text-red-400 font-bold">+132%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold's Track Record */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Gold&apos;s Inflation-Fighting Track Record
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12">
              Throughout history, gold has maintained its value while paper currencies have lost
              purchasing power. Here&apos;s the evidence:
            </p>

            <div className="space-y-8">
              {/* The Suit Example */}
              <div className="bg-amber-500/10 rounded-xl p-8 border border-amber-500/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  The Famous &quot;Gold Suit&quot; Example
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">1920s</h4>
                    <p className="text-slate-300">
                      One ounce of gold ($20) could buy a quality men&apos;s suit.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">2024</h4>
                    <p className="text-slate-300">
                      One ounce of gold (~$2,000) can still buy a quality men&apos;s suit.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-amber-300">
                  The dollar lost over 97% of its purchasing power. Gold maintained its value.
                </p>
              </div>

              {/* Historical Inflation Periods */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Gold During High Inflation Periods
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-semibold text-white">1970s Stagflation</h4>
                      <p className="text-sm text-slate-400">1970-1980</p>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Inflation Rate</div>
                      <div className="text-lg font-bold text-red-400">7.4% avg/year</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Gold Performance</div>
                      <div className="text-lg font-bold text-green-400">+1,335%</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h4 className="font-semibold text-white">Post-2008 QE Era</h4>
                      <p className="text-sm text-slate-400">2008-2012</p>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Fed Balance Sheet</div>
                      <div className="text-lg font-bold text-red-400">+300%</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Gold Performance</div>
                      <div className="text-lg font-bold text-green-400">+101%</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-white">2020-2024 Inflation</h4>
                      <p className="text-sm text-slate-400">COVID & aftermath</p>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">CPI Increase</div>
                      <div className="text-lg font-bold text-red-400">+22%</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Gold Performance</div>
                      <div className="text-lg font-bold text-green-400">+35%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Gold Works */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Gold Protects Against Inflation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Limited Supply</h3>
                <p className="text-sm text-slate-300">
                  Unlike paper money, gold can&apos;t be printed. All the gold ever mined fits in a
                  67-foot cube. This scarcity helps maintain value as money supplies expand.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2">5,000-Year Track Record</h3>
                <p className="text-sm text-slate-300">
                  Gold has been valued across every civilization in history. Currencies come and
                  go, but gold endures—it&apos;s the ultimate long-term store of value.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Inverse Dollar Relationship</h3>
                <p className="text-sm text-slate-300">
                  When the dollar weakens due to inflation, gold typically rises. This makes
                  gold an effective hedge against currency devaluation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2">Real Asset Value</h3>
                <p className="text-sm text-slate-300">
                  Gold has intrinsic value—it&apos;s used in jewelry, electronics, and industry.
                  This real-world demand provides a floor for gold&apos;s value.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Current Situation */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Why Inflation Protection Matters Now
            </h2>
            <div className="bg-red-500/10 rounded-xl p-8 border border-red-500/30 mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-4">
                Current Economic Concerns
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-red-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>$35+ trillion national debt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Massive government spending programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Central banks worldwide adding to gold reserves</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-red-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Rising healthcare costs for retirees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Social Security sustainability questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Global economic uncertainty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-300 text-center">
              Many financial experts recommend allocating 5-15% of your retirement portfolio
              to gold as inflation insurance.
            </p>
          </div>
        </Container>
      </section>

      {/* Take Action */}
      <section className="py-16 bg-amber-500/10 border-y border-amber-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Protect Your Retirement from Inflation
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              A Gold IRA allows you to hold physical gold in your retirement account with
              the same tax advantages as your 401(k) or traditional IRA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/what-is-a-gold-ira"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Learn About Gold IRAs
              </Link>
              <Link
                href="/reviews/augusta-precious-metals"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
              >
                Get Free Gold IRA Kit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Learn How Gold Can Protect Your Retirement"
            subheadline="Augusta Precious Metals offers free one-on-one web conferences to help you understand inflation risks and how a Gold IRA might fit your retirement strategy."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
