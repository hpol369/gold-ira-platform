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
  title: "Gold as Inflation Protection | Preserve Purchasing Power",
  description: "Learn how gold protects against inflation. Understand why gold preserves purchasing power and shields retirement savings.",
  openGraph: {
    title: "Gold as Inflation Protection | Preserve Purchasing Power",
    description: "Discover how gold has historically preserved purchasing power during periods of high inflation and monetary expansion.",
    type: "article",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

export default function InflationProtectionPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-[#0C0D18] text-[#F6F4EF] py-16 md:py-20">
        <Container>
          <Link
            href="/why-gold"
            className="inline-flex items-center gap-2 text-[#D0CCC4] hover:text-[#F6F4EF] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Why Gold
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#D4A94E] font-bold tracking-widest uppercase text-xs mb-4">
              <TrendingUp className="h-4 w-4" />
              The Silent Thief
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your $600,000 Buys Less Every Year. Here&apos;s What Smart Workers Are Doing About It.
            </h1>
            <p className="text-xl text-[#D0CCC4] leading-relaxed">
              You&apos;ve noticed it at the grocery store, the gas pump, everywhere. The money you worked
              30 years to save is losing value every day. That&apos;s not your imagination. That&apos;s inflation.
              And your broker&apos;s &quot;stay the course&quot; advice doesn&apos;t do a thing to stop it.
            </p>
          </div>
        </Container>
      </header>

      {/* The Problem */}
      <section className="py-16 bg-red-50 border-b border-red-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6 text-center">
              Here&apos;s What&apos;s Really Happening to Your Money
            </h2>
            <p className="text-lg text-[#D0CCC4] leading-relaxed text-center mb-12">
              Tom worked at the Chrysler plant for 32 years. Retired in 2004 with $400,000 in his 401k.
              &quot;Felt like a million bucks,&quot; he says. Today, that same $400,000 would need to be $680,000
              just to have the same buying power. Tom didn&apos;t lose money. The dollars themselves lost value.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                <h3 className="font-bold text-[#F6F4EF] mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-red-600" />
                  What Your $500,000 Will Actually Buy
                </h3>
                <p className="text-sm text-[#D0CCC4] mb-4">
                  At just 3% inflation (it&apos;s been higher lately), here&apos;s what happens to your
                  retirement savings:
                </p>
                <div className="space-y-3 text-[#D0CCC4]">
                  <div className="flex justify-between">
                    <span>Today</span>
                    <span className="font-bold text-green-600">$500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In 10 years</span>
                    <span className="font-bold text-amber-600">$372,000 buying power</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In 20 years</span>
                    <span className="font-bold text-orange-600">$277,000 buying power</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In 30 years</span>
                    <span className="font-bold text-red-600">$206,000 buying power</span>
                  </div>
                </div>
                <p className="text-xs text-red-600 mt-4">You&apos;re not losing money. Your money is losing value.</p>
              </div>
              <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                <h3 className="font-bold text-[#F6F4EF] mb-4 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-red-600" />
                  You&apos;ve Seen This at the Store
                </h3>
                <p className="text-sm text-[#D0CCC4] mb-4">
                  What things cost in 1990 vs. today - you already know this:
                </p>
                <div className="space-y-3 text-[#D0CCC4]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-[#A8A39A]" />
                      <span>Median Home</span>
                    </div>
                    <span className="text-red-600 font-bold">Up 244%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-[#A8A39A]" />
                      <span>Healthcare</span>
                    </div>
                    <span className="text-red-600 font-bold">Up 315%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-[#A8A39A]" />
                      <span>New Truck</span>
                    </div>
                    <span className="text-red-600 font-bold">Up 176%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-[#A8A39A]" />
                      <span>Groceries</span>
                    </div>
                    <span className="text-red-600 font-bold">Up 132%</span>
                  </div>
                </div>
                <p className="text-xs text-[#A8A39A] mt-4">This isn&apos;t news to you. You live it every day.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gold's Track Record */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6 text-center">
              Why Gold Doesn&apos;t Play by Wall Street&apos;s Rules
            </h2>
            <p className="text-lg text-[#D0CCC4] text-center mb-12">
              Your broker won&apos;t tell you this, but there&apos;s a reason the wealthy have always held gold.
              It keeps its value when everything else falls apart. Here&apos;s the proof:
            </p>

            <div className="space-y-8">
              {/* The Suit Example */}
              <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                <h3 className="text-xl font-bold text-[#F6F4EF] mb-4">
                  The Story That Says It All
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#D0CCC4] mb-2">1920</h4>
                    <p className="text-[#D0CCC4]">
                      One ounce of gold ($20) bought a quality suit for a working man.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#D0CCC4] mb-2">Today</h4>
                    <p className="text-[#D0CCC4]">
                      One ounce of gold (~$2,000) still buys that same quality suit.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#D4A94E]">
                  The dollar lost 97% of its value. Gold kept yours. That&apos;s not speculation. That&apos;s protection.
                </p>
              </div>

              {/* Historical Inflation Periods */}
              <div className="bg-[#161828] rounded-xl p-8 border border-[#2A2D42] shadow-sm">
                <h3 className="text-xl font-bold text-[#F6F4EF] mb-6">
                  What Happened When Inflation Hit Hard
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 pb-4 border-b border-[#2A2D42]">
                    <div>
                      <h4 className="font-semibold text-[#F6F4EF]">1970s - Your Parents Remember</h4>
                      <p className="text-sm text-[#A8A39A]">Gas lines, interest rates at 18%</p>
                    </div>
                    <div>
                      <div className="text-sm text-[#A8A39A]">Inflation</div>
                      <div className="text-lg font-bold text-red-600">7.4%/year for a decade</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#A8A39A]">Gold</div>
                      <div className="text-lg font-bold text-green-600">Up 1,335%</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 pb-4 border-b border-[#2A2D42]">
                    <div>
                      <h4 className="font-semibold text-[#F6F4EF]">2008-2012 - You Remember This</h4>
                      <p className="text-sm text-[#A8A39A]">Bailouts, money printing</p>
                    </div>
                    <div>
                      <div className="text-sm text-[#A8A39A]">Fed printed</div>
                      <div className="text-lg font-bold text-red-600">+300% more dollars</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#A8A39A]">Gold</div>
                      <div className="text-lg font-bold text-green-600">Up 101%</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#F6F4EF]">2020-2024 - Right Now</h4>
                      <p className="text-sm text-[#A8A39A]">COVID, stimulus checks</p>
                    </div>
                    <div>
                      <div className="text-sm text-[#A8A39A]">Prices up</div>
                      <div className="text-lg font-bold text-red-600">+22% (you felt it)</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#A8A39A]">Gold</div>
                      <div className="text-lg font-bold text-green-600">Up 35%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Gold Works */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-8 text-center">
              Why Gold Works When Dollars Don&apos;t
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-[#D4A94E]" />
                </div>
                <h3 className="font-bold text-[#F6F4EF] mb-2">They Can&apos;t Print More Gold</h3>
                <p className="text-sm text-[#D0CCC4]">
                  The government printed $5 trillion during COVID. They can&apos;t print gold.
                  All the gold ever mined would fit in a 67-foot cube. That&apos;s it. No politician
                  can make more.
                </p>
              </div>
              <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#D4A94E]" />
                </div>
                <h3 className="font-bold text-[#F6F4EF] mb-2">5,000 Years of Proof</h3>
                <p className="text-sm text-[#D0CCC4]">
                  Empires rise and fall. Currencies come and go. The Roman denarius is worthless.
                  The British pound has lost 99% of its value. Gold? Still valuable. Still protecting wealth.
                </p>
              </div>
              <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-[#D4A94E]" />
                </div>
                <h3 className="font-bold text-[#F6F4EF] mb-2">When Dollars Fall, Gold Rises</h3>
                <p className="text-sm text-[#D0CCC4]">
                  It&apos;s simple math. When they print more dollars, each dollar is worth less.
                  But gold stays the same. So it takes more dollars to buy gold. Your gold
                  didn&apos;t get more valuable - your dollars got less valuable.
                </p>
              </div>
              <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#D4A94E]" />
                </div>
                <h3 className="font-bold text-[#F6F4EF] mb-2">It&apos;s Real, Not a Promise</h3>
                <p className="text-sm text-[#D0CCC4]">
                  Your 401k statement is just a number on paper. Gold is real. You can hold it.
                  No company can go bankrupt and take it away. No government can default on it.
                  You own it outright.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Current Situation */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6 text-center">
              Why This Matters More Right Now
            </h2>
            <div className="bg-red-50 rounded-xl p-8 border border-red-200 mb-8">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                What&apos;s Happening That Your Broker Won&apos;t Talk About
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-red-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>$35+ trillion in national debt - who pays that back?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Government printing money like there&apos;s no tomorrow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Central banks buying gold at record rates - they know something</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-red-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Healthcare costs up 315% since 1990</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Social Security may not be there like your parents had it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Your body might say &quot;retire&quot; before your 401k is ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-lg text-[#D0CCC4] text-center">
              Most independent financial advisors (not the ones selling you mutual funds)
              recommend 10-20% in gold for people within 15 years of retirement. Not to get rich.
              To protect what you&apos;ve built.
            </p>
          </div>
        </Container>
      </section>

      {/* Take Action */}
      <section className="py-16 bg-amber-50 border-y border-amber-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F6F4EF] mb-6">
              You&apos;ve Done the Hard Part. Now Protect It.
            </h2>
            <p className="text-lg text-[#D0CCC4] mb-8">
              You didn&apos;t build a $500,000 retirement by being careless. A Gold IRA lets you
              move some of that money into real, physical gold - with the same tax advantages
              you already have. No penalties. No extra taxes. Just protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/what-is-a-gold-ira"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#F6F4EF] font-bold rounded-xl hover:bg-[#121423] transition-all border border-[#2A2D42]"
              >
                How Gold IRAs Work
              </Link>
              <Link
                href="/reviews/augusta-precious-metals"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-[#8B0000] transition-all shadow-lg"
              >
                Get Free Info Kit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Questions About Protecting Your Savings?"
            subheadline="Augusta Precious Metals offers free one-on-one conversations with real people who will explain how this works - no pressure, no sales pitch. Just straight answers to your questions."
            trackSource="why-gold-inflation-protection"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
