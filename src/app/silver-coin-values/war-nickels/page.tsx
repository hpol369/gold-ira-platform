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
  History,
  Star,
  CheckCircle,
  AlertTriangle,
  Shield,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are silver war nickels worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver war nickels are worth at minimum their melt value of approximately $1.40 based on 0.0563 oz of silver content. Most circulated specimens sell for $1.50-2.50. Key dates like 1943/2-P overdate can be worth $100-500+ even in lower grades. Uncirculated war nickels typically sell for $5-15 for common dates."
      }
    },
    {
      "@type": "Question",
      "name": "Which nickels contain silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only Jefferson nickels minted from mid-1942 through 1945 contain silver - these are called 'war nickels.' They contain 35% silver, 56% copper, and 9% manganese. Regular nickels (before 1942 and after 1945) contain 75% copper and 25% nickel with no silver. The mint mark location above Monticello's dome is the easiest way to identify them."
      }
    },
    {
      "@type": "Question",
      "name": "How can I identify silver war nickels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver war nickels have a large mint mark (P, D, or S) above the dome of Monticello on the reverse. This is the ONLY time the Philadelphia mint used a 'P' mint mark. Regular nickels have small mint marks to the right of Monticello. War nickels also have a different color - slightly grayish compared to the yellowish tint of regular nickels."
      }
    },
    {
      "@type": "Question",
      "name": "Why were war nickels made with silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During World War II, nickel was a critical war material needed for armor plating and other military equipment. The US Mint removed nickel from five-cent pieces and substituted silver (35%), copper (56%), and manganese (9%). The large mint mark was added so the coins could be easily identified and later removed from circulation to recover the silver."
      }
    },
    {
      "@type": "Question",
      "name": "Are war nickels worth collecting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "War nickels offer an affordable entry into silver coin collecting. They're the only US nickels containing silver and have interesting WWII history. At just 35% silver, premiums over melt tend to be low for common dates. Key varieties like the 1943/2-P overdate and high-grade specimens offer numismatic value. They're also excellent for introducing children to coin collecting."
      }
    }
  ]
};

const warNickelValues = [
  { year: "1942-P", mint: "P", mintage: "57,900,000", g: 1.50, vg: 1.75, f: 2, vf: 2.50, xf: 4, au: 8, ms60: 15, ms65: 60, notes: "First P mint mark" },
  { year: "1942-S", mint: "S", mintage: "32,900,000", g: 1.50, vg: 1.75, f: 2, vf: 3, xf: 5, au: 10, ms60: 20, ms65: 80, notes: "First silver nickel" },
  { year: "1943-P", mint: "P", mintage: "271,165,000", g: 1.50, vg: 1.60, f: 1.75, vf: 2, xf: 3, au: 6, ms60: 12, ms65: 45, notes: "Most common" },
  { year: "1943/2-P", mint: "P", mintage: "Included", g: 100, vg: 150, f: 200, vf: 300, xf: 500, au: 800, ms60: 1200, ms65: 4000, notes: "Overdate variety" },
  { year: "1943-D", mint: "D", mintage: "15,294,000", g: 1.50, vg: 1.75, f: 2, vf: 2.50, xf: 5, au: 12, ms60: 25, ms65: 120, notes: "Lower mintage" },
  { year: "1943-S", mint: "S", mintage: "104,060,000", g: 1.50, vg: 1.60, f: 1.75, vf: 2, xf: 3.50, au: 7, ms60: 14, ms65: 55, notes: "Common" },
  { year: "1944-P", mint: "P", mintage: "119,150,000", g: 1.50, vg: 1.60, f: 1.75, vf: 2, xf: 3, au: 6, ms60: 12, ms65: 45, notes: "Common" },
  { year: "1944-D", mint: "D", mintage: "32,309,000", g: 1.50, vg: 1.75, f: 2, vf: 2.50, xf: 4, au: 8, ms60: 16, ms65: 65, notes: "Common" },
  { year: "1944-S", mint: "S", mintage: "21,640,000", g: 1.50, vg: 1.75, f: 2, vf: 2.50, xf: 4.50, au: 9, ms60: 18, ms65: 70, notes: "Scarcer" },
  { year: "1945-P", mint: "P", mintage: "119,408,100", g: 1.50, vg: 1.60, f: 1.75, vf: 2, xf: 3, au: 6, ms60: 12, ms65: 45, notes: "Common" },
  { year: "1945-D", mint: "D", mintage: "37,158,000", g: 1.50, vg: 1.75, f: 2, vf: 2.50, xf: 4, au: 8, ms60: 15, ms65: 60, notes: "Common" },
  { year: "1945-S", mint: "S", mintage: "58,939,000", g: 1.50, vg: 1.60, f: 1.75, vf: 2, xf: 3.50, au: 7, ms60: 14, ms65: 50, notes: "Last silver" },
];

export default function WarNickelsValuePage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6 ml-4">
              <Star className="h-4 w-4" />
              LOW COMPETITION - 700 SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Silver War Nickels Value Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              During World War II, nickel was needed for the war effort. The solution?
              <span className="text-amber-400 font-semibold"> Put silver in the five-cent piece.</span>
              From 1942-1945, every nickel contained 35% silver. Today, these &quot;war nickels&quot;
              are the only US nickels worth more than face value.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Coins className="h-4 w-4 text-slate-400" />
                35% Silver
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <History className="h-4 w-4 text-slate-400" />
                1942-1945
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <TrendingUp className="h-4 w-4 text-green-400" />
                ~$1.40 Melt Value
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Shield className="h-4 w-4 text-amber-400" />
                WWII History
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Identification Guide */}
      <section className="py-12 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How to Identify Silver War Nickels
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">Look for the Large Mint Mark</h3>
                <p className="text-slate-300 mb-4">
                  Silver war nickels have a <span className="text-white font-semibold">large mint mark
                  (P, D, or S) above the dome of Monticello</span> on the reverse. This is the only
                  time in US history that Philadelphia used a &quot;P&quot; mint mark.
                </p>
                <p className="text-slate-400 text-sm">
                  Regular nickels have small mint marks to the right of the building. If the mint mark
                  is above the dome, it&apos;s silver.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Other Identification Methods</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Color:</span> Slightly grayish vs. the yellowish tint of regular nickels
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Date Range:</span> Only mid-1942 through 1945
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Toning:</span> Silver tones differently than nickel over time
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 rounded-r-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold text-white">Important:</span> Not all 1942 nickels are silver.
                  The changeover happened mid-year. 1942 nickels with <span className="text-white">no mint mark</span> or
                  a <span className="text-white">small D mint mark to the right of Monticello</span> are regular
                  copper-nickel and contain no silver.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Chart */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              War Nickel Values by Year
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Values in USD. Most war nickels trade at modest premiums over melt value.
              The 1943/2-P overdate is the key variety worth significant premiums.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-3 text-white font-bold">Year</th>
                    <th className="text-center p-3 text-white font-bold">Mint</th>
                    <th className="text-center p-3 text-slate-400 text-xs">Mintage</th>
                    <th className="text-center p-3 text-slate-300">G-4</th>
                    <th className="text-center p-3 text-slate-300">VG-8</th>
                    <th className="text-center p-3 text-slate-300">F-12</th>
                    <th className="text-center p-3 text-slate-300">VF-20</th>
                    <th className="text-center p-3 text-slate-300">XF-40</th>
                    <th className="text-center p-3 text-slate-300">AU-50</th>
                    <th className="text-center p-3 text-amber-400">MS-60</th>
                    <th className="text-center p-3 text-amber-400">MS-65</th>
                    <th className="text-left p-3 text-slate-400">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {warNickelValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Overdate") ? "bg-amber-500/10" : ""}>
                      <td className="p-3 text-white font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-400">{row.mint}</td>
                      <td className="p-3 text-center text-slate-500 text-xs">{row.mintage}</td>
                      <td className="p-3 text-center text-slate-300">${row.g}</td>
                      <td className="p-3 text-center text-slate-300">${row.vg}</td>
                      <td className="p-3 text-center text-slate-300">${row.f}</td>
                      <td className="p-3 text-center text-slate-300">${row.vf}</td>
                      <td className="p-3 text-center text-slate-300">${row.xf}</td>
                      <td className="p-3 text-center text-slate-300">${row.au}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60}</td>
                      <td className="p-3 text-center text-amber-400 font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Values fluctuate with silver prices. Melt value based on $25/oz silver = approximately $1.40 per war nickel.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Variety */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              The 1943/2-P Overdate Variety
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-400 mb-4">What Is It?</h3>
                  <p className="text-slate-300 mb-4">
                    During the transition from 1942 to 1943, some dies were overpunched with a &quot;3&quot;
                    over a &quot;2&quot;. You can see remnants of the &quot;2&quot; beneath the &quot;3&quot; in the date.
                  </p>
                  <p className="text-slate-400 text-sm">
                    This is the only significant variety in the war nickel series and commands
                    premiums of 50-100x over common dates.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">How to Identify</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Look for traces of &quot;2&quot; under the &quot;3&quot;
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Use 5x-10x magnification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Check the bottom curve of the &quot;3&quot;
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Only exists on 1943-P (Philadelphia)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="font-bold text-white mb-2">1943/2-P Values</h4>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-center text-sm">
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">G-4</div>
                    <div className="text-white font-semibold">$100</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">VG-8</div>
                    <div className="text-white font-semibold">$150</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">F-12</div>
                    <div className="text-white font-semibold">$200</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">VF-20</div>
                    <div className="text-white font-semibold">$300</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">XF-40</div>
                    <div className="text-white font-semibold">$500</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">AU-50</div>
                    <div className="text-white font-semibold">$800</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">MS-60</div>
                    <div className="text-green-400 font-semibold">$1,200</div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-slate-400">MS-65</div>
                    <div className="text-amber-400 font-semibold">$4,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Silver Content */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              War Nickel Silver Content
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Composition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Silver:</span> 35% (0.0563 oz pure)
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Copper:</span> 56%
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Manganese:</span> 9%
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Total Weight:</span> 5 grams
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">Quick Math @ $25/oz</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>1 war nickel = $1.41 melt value</li>
                  <li>20 war nickels = $28.15</li>
                  <li>100 war nickels = $140.75</li>
                  <li>$1 face value (20 coins) = $28.15</li>
                </ul>
                <p className="text-sm text-slate-400 mt-4">
                  War nickels have lower silver content than 90% coins, but still
                  offer tangible silver at low premiums.
                </p>
                <Link
                  href="/silver-coin-values/melt-value-calculator"
                  className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Use Full Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Historical Context */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              The WWII Story Behind War Nickels
            </h2>
            <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border-l-4 border-blue-500 rounded-r-xl p-6">
              <p className="text-slate-300 mb-4">
                In 1942, with America fully engaged in World War II, the government faced a critical shortage
                of nickel - an essential metal for armor plating, artillery shells, and other military equipment.
                The solution was elegantly simple: remove the nickel from nickels.
              </p>
              <p className="text-slate-300 mb-4">
                The new &quot;war nickel&quot; composition of 35% silver, 56% copper, and 9% manganese solved two problems:
                it freed up nickel for the war effort, and the distinctive large mint mark above Monticello
                made it easy to identify these coins for later removal from circulation.
              </p>
              <p className="text-slate-400 text-sm">
                After the war, the government planned to melt the war nickels to recover the silver.
                But with billions minted and widely circulated, recovery proved impractical. Today,
                these coins remain in circulation - often spent at face value by people who don&apos;t
                know they&apos;re holding silver.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
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
      <section className="py-12 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white text-center mb-6">
              Related Silver Coin Guides
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/silver-coin-values/junk-silver"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Junk Silver Guide</h3>
                <p className="text-sm text-slate-400">Constitutional silver explained</p>
              </Link>
              <Link
                href="/silver-coin-values/melt-value-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Melt Value Calculator</h3>
                <p className="text-sm text-slate-400">Calculate silver value instantly</p>
              </Link>
              <Link
                href="/silver-coin-values/silver-dimes"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Silver Dimes</h3>
                <p className="text-sm text-slate-400">Mercury, Roosevelt, Barber</p>
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
            headline="From Wartime Silver to Retirement Security"
            subheadline="War nickels remind us that governments will always find ways to extract value from currency. Protect your retirement with real assets. Augusta Precious Metals can help you add IRA-eligible silver to your portfolio."
            linkContext="silver"
            trackSource="war-nickels-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
