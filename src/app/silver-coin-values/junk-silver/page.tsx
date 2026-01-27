"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  Coins,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Scale,
  Star,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Shield,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is junk silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Junk silver refers to pre-1965 US coins that contain 90% silver but have no significant numismatic (collector) value beyond their metal content. Common examples include circulated Roosevelt dimes, Washington quarters, Franklin and Kennedy halves, and Morgan/Peace dollars. The term 'junk' is a misnomer - these coins are valuable for their silver content, typically trading at small premiums over melt value."
      }
    },
    {
      "@type": "Question",
      "name": "How much is junk silver worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Junk silver is valued based on its silver content, measured by face value. At $25/oz silver, $1 face value of 90% silver contains approximately $18.08 worth of silver. A $1,000 face value bag contains about 715 oz of pure silver. Dealers typically buy at 95-100% of melt and sell at 103-110% depending on market conditions and demand."
      }
    },
    {
      "@type": "Question",
      "name": "Why buy junk silver instead of bullion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Junk silver offers several advantages: (1) Low premiums - often the lowest cost per ounce of silver, (2) Divisibility - small denominations for barter or small purchases, (3) Recognizability - US coins are universally recognized, (4) No counterfeits - too costly to fake circulated coins, (5) Legal tender - face value floor in emergencies. However, 90% coins are NOT IRA-eligible due to purity requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How much silver is in a bag of junk silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A $1,000 face value bag of 90% junk silver contains approximately 715 troy ounces of pure silver (actual silver, not total weight). This breaks down to: 10,000 dimes, 4,000 quarters, or 2,000 half dollars. Due to wear on circulated coins, actual silver content may be slightly less than the theoretical 723.4 oz for uncirculated coins."
      }
    },
    {
      "@type": "Question",
      "name": "Is junk silver a good investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Junk silver is excellent for silver stacking due to low premiums and high liquidity. It's ideal for those who want physical silver outside the banking system. For investment purposes, it offers: inflation protection, portfolio diversification, and tangible asset ownership. However, it's not suitable for IRAs (not .999 fine), and storage can be bulky. For retirement accounts, consider IRA-eligible silver bullion instead."
      }
    }
  ]
};

const silverContent = [
  { coin: "Morgan Dollar", faceValue: 1.00, silverOz: 0.7734, perDollar: 0.7734, coinsPer1000: 1000 },
  { coin: "Peace Dollar", faceValue: 1.00, silverOz: 0.7734, perDollar: 0.7734, coinsPer1000: 1000 },
  { coin: "Walking Liberty Half", faceValue: 0.50, silverOz: 0.3617, perDollar: 0.7234, coinsPer1000: 2000 },
  { coin: "Franklin Half", faceValue: 0.50, silverOz: 0.3617, perDollar: 0.7234, coinsPer1000: 2000 },
  { coin: "Kennedy Half (1964)", faceValue: 0.50, silverOz: 0.3617, perDollar: 0.7234, coinsPer1000: 2000 },
  { coin: "Washington Quarter", faceValue: 0.25, silverOz: 0.1808, perDollar: 0.7234, coinsPer1000: 4000 },
  { coin: "Roosevelt Dime", faceValue: 0.10, silverOz: 0.0723, perDollar: 0.7234, coinsPer1000: 10000 },
  { coin: "Mercury Dime", faceValue: 0.10, silverOz: 0.0723, perDollar: 0.7234, coinsPer1000: 10000 },
  { coin: "War Nickel (35%)", faceValue: 0.05, silverOz: 0.0563, perDollar: 1.1260, coinsPer1000: 20000 },
];

const pricingExample = {
  spotPrice: 25,
  meltMultiplier: 0.7234,
  get meltPerDollar() { return this.spotPrice * this.meltMultiplier; },
  buyback: 0.97,
  retail: 1.05,
};

export default function JunkSilverValuePage() {
  const meltPerDollar = pricingExample.spotPrice * pricingExample.meltMultiplier;

  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-coin-values"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Silver Coin Values
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 font-semibold text-sm mb-6 ml-4">
              <Star className="h-4 w-4" />
              CONSTITUTIONAL SILVER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Junk Silver Value Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              &quot;Junk&quot; silver isn&apos;t junk at all - it&apos;s <span className="text-amber-400 font-semibold">real money</span>.
              Pre-1965 US coins containing 90% silver are the most affordable, recognizable way
              to own physical silver outside the banking system.
              <span className="text-amber-400 font-semibold"> What the banks don&apos;t want you to know:
              this is the money they replaced with paper promises.</span>
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Coins className="h-4 w-4 text-slate-400" />
                90% Silver
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Scale className="h-4 w-4 text-slate-400" />
                ~$18/face value
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <TrendingUp className="h-4 w-4 text-green-400" />
                Lowest Premiums
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Shield className="h-4 w-4 text-amber-400" />
                Legal Tender
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* What Is Junk Silver */}
      <section className="py-12 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 rounded-r-xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                Why &quot;Junk&quot; Silver?
              </h2>
              <p className="text-slate-300 mb-3">
                The term &quot;junk&quot; refers to coins with no numismatic (collector) premium - they&apos;re valued
                purely for silver content. But make no mistake: these coins represent
                <span className="text-amber-400 font-semibold"> real money that has preserved purchasing power
                for over a century</span>, while the dollar has lost 95% of its value.
              </p>
              <p className="text-slate-400 text-sm">
                Also called &quot;constitutional silver&quot; (because the Constitution defines money as gold and silver),
                these pre-1965 coins are the most practical form of silver ownership for everyday Americans.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Silver Content Chart */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Silver Content by Coin Type
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              All 90% silver coins (except war nickels) contain 0.7234 oz of silver per $1 face value.
              This consistency makes calculating value straightforward.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-4 text-white font-bold">Coin Type</th>
                    <th className="text-center p-4 text-white font-bold">Face Value</th>
                    <th className="text-center p-4 text-white font-bold">Silver per Coin</th>
                    <th className="text-center p-4 text-white font-bold">Silver per $1 Face</th>
                    <th className="text-center p-4 text-white font-bold">Coins in $1,000 Bag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {silverContent.map((row, index) => (
                    <tr key={index} className={row.coin.includes("War") ? "bg-amber-500/10" : ""}>
                      <td className="p-4 text-white font-medium">{row.coin}</td>
                      <td className="p-4 text-center text-slate-300">${row.faceValue.toFixed(2)}</td>
                      <td className="p-4 text-center text-slate-300">{row.silverOz} oz</td>
                      <td className="p-4 text-center text-green-400">{row.perDollar} oz</td>
                      <td className="p-4 text-center text-slate-400">{row.coinsPer1000.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              War nickels (35% silver) are sometimes included in junk silver but have different silver content per dollar face value.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How to Calculate Junk Silver Value
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  The Formula
                </h3>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <p className="text-slate-300 font-mono text-center">
                    Face Value x 0.7234 x Spot Price = Melt Value
                  </p>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><span className="text-white font-semibold">0.7234</span> = oz of silver per $1 face (90% coins)</li>
                  <li><span className="text-white font-semibold">Spot Price</span> = Current silver price per oz</li>
                  <li><span className="text-white font-semibold">Face Value</span> = Total denomination ($1, $10, $1000, etc.)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">Example @ $25/oz Silver</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex justify-between">
                    <span>$1 face value:</span>
                    <span className="text-green-400 font-semibold">${meltPerDollar.toFixed(2)} melt</span>
                  </li>
                  <li className="flex justify-between">
                    <span>$10 face value:</span>
                    <span className="text-green-400 font-semibold">${(meltPerDollar * 10).toFixed(2)} melt</span>
                  </li>
                  <li className="flex justify-between">
                    <span>$100 face value:</span>
                    <span className="text-green-400 font-semibold">${(meltPerDollar * 100).toFixed(2)} melt</span>
                  </li>
                  <li className="flex justify-between border-t border-white/10 pt-3">
                    <span>$1,000 bag:</span>
                    <span className="text-amber-400 font-bold">${(meltPerDollar * 1000).toFixed(2)} melt</span>
                  </li>
                </ul>
                <Link
                  href="/silver-coin-values/melt-value-calculator"
                  className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Use Interactive Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Buying & Selling */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Buying & Selling Junk Silver
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">Buying (What You&apos;ll Pay)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Typical Premium:</span> 3-10% over melt
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Large Bags ($1,000 face):</span> Lowest premiums
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Small Lots:</span> Higher premiums, more convenience
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Crisis Periods:</span> Premiums can spike to 20%+
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">Selling (What You&apos;ll Get)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Typical Buyback:</span> 95-100% of melt
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Coin Shops:</span> Usually best prices locally
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Online Dealers:</span> Competitive but shipping costs
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Pawn Shops:</span> Avoid - typically pay 60-70% of melt
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Junk Silver */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Why Choose Junk Silver?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Lowest Premiums",
                  description: "Often the cheapest way to buy silver by the ounce. No numismatic markup.",
                  icon: TrendingUp,
                },
                {
                  title: "Highly Divisible",
                  description: "Dimes, quarters, halves - perfect for small transactions or barter.",
                  icon: Coins,
                },
                {
                  title: "Universally Recognized",
                  description: "US coins are known worldwide. No authentication needed.",
                  icon: Shield,
                },
                {
                  title: "No Counterfeits",
                  description: "Circulated coins aren't worth faking. Each is genuine silver.",
                  icon: CheckCircle,
                },
                {
                  title: "Legal Tender Floor",
                  description: "Face value provides a minimum worth in any scenario.",
                  icon: DollarSign,
                },
                {
                  title: "Tangible & Private",
                  description: "Physical silver you hold. No counterparty risk.",
                  icon: Scale,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                    <Icon className="h-8 w-8 text-amber-400 mb-3" />
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Limitations */}
      <section className="py-12 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Important: Junk Silver is NOT IRA-Eligible
                  </h3>
                  <p className="text-slate-300 mb-3">
                    The IRS requires precious metals in IRAs to be .999 fine (99.9% pure) or higher.
                    90% silver coins do not meet this requirement and cannot be held in a
                    self-directed precious metals IRA.
                  </p>
                  <p className="text-slate-400 text-sm">
                    For tax-advantaged retirement accounts, consider American Silver Eagles,
                    Canadian Silver Maple Leafs, or .999 fine silver bars from approved refiners.
                    Augusta Precious Metals specializes in IRA-eligible precious metals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {schema.mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white text-center mb-6">
              Related Silver Coin Guides
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/silver-coin-values/melt-value-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Melt Value Calculator</h3>
                <p className="text-sm text-slate-400">Calculate silver value instantly</p>
              </Link>
              <Link
                href="/silver-coin-values/silver-quarters"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Silver Quarters</h3>
                <p className="text-sm text-slate-400">Washington, Standing Liberty, Barber</p>
              </Link>
              <Link
                href="/silver-coin-values/war-nickels"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">War Nickels</h3>
                <p className="text-sm text-slate-400">1942-1945 35% silver nickels</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready for IRA-Eligible Silver?"
            subheadline="Junk silver is perfect for physical stacking, but it won't qualify for your retirement account. Augusta Precious Metals can help you add .999 fine silver to a tax-advantaged IRA. Learn how real money can protect your retirement."
            linkContext="silver"
            trackSource="junk-silver-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
