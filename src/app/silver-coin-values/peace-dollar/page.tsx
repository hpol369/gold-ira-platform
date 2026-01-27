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
  AlertTriangle,
  CheckCircle,
  Shield,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Peace silver dollar worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peace dollar values start at the silver melt value of approximately $19-20 (based on 0.7734 oz silver content) and range up to $100,000+ for the rarest specimens. Common dates in circulated condition typically sell for $25-35. Key dates like 1921 High Relief, 1928, and 1934-S command significant premiums even in lower grades."
      }
    },
    {
      "@type": "Question",
      "name": "Which Peace dollars are the most valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most valuable Peace dollars are: 1921 High Relief ($100-5,000+), 1928 ($300-10,000+, lowest mintage), 1934-S ($50-15,000+), 1925-S ($30-8,000+ in MS), and 1927-S ($30-7,000+ in MS). The legendary 1964-D Peace dollar (never officially released) would be worth hundreds of thousands if authentic, but all known examples were melted."
      }
    },
    {
      "@type": "Question",
      "name": "Why was the Peace dollar created?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Peace dollar was created in 1921 to commemorate the end of World War I. It was the first US coin to bear the word 'PEACE.' Designer Anthony de Francisci modeled the obverse portrait of Liberty after his wife Teresa. The reverse shows a bald eagle perched on a rock, clutching an olive branch - symbolizing peace rather than war."
      }
    },
    {
      "@type": "Question",
      "name": "How can I tell a 1921 Peace dollar High Relief from regular issue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All 1921 Peace dollars are High Relief - there is no 'regular issue' 1921. The High Relief design was used only in 1921 before being modified to low relief in 1922 due to striking difficulties. 1921 Peace dollars have more sculptural, three-dimensional features compared to later dates. They also tend to show weakness in Liberty's hair and the eagle's feathers due to the striking challenges."
      }
    },
    {
      "@type": "Question",
      "name": "Are Peace dollars a good investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peace dollars offer both numismatic appeal and precious metal content. For pure silver investment, common dates near melt value offer good value. For numismatic investment, key dates in high grades have historically appreciated. However, unlike .999 fine bullion, Peace dollars (90% silver) are not IRA-eligible. For tax-advantaged retirement accounts, consider American Silver Eagles or other approved products."
      }
    }
  ]
};

const valueByYear = [
  { year: "1921", mint: "P", mintage: "1,006,473", g: 100, vg: 120, f: 150, vf: 200, xf: 280, au: 380, ms60: 500, ms65: 2500, notes: "High Relief, first year" },
  { year: "1922", mint: "P", mintage: "51,737,000", g: 23, vg: 25, f: 27, vf: 30, xf: 35, au: 45, ms60: 60, ms65: 180, notes: "Most common" },
  { year: "1922-D", mint: "D", mintage: "15,063,000", g: 23, vg: 25, f: 27, vf: 30, xf: 38, au: 50, ms60: 70, ms65: 350, notes: "Common" },
  { year: "1922-S", mint: "S", mintage: "17,475,000", g: 23, vg: 25, f: 27, vf: 30, xf: 40, au: 55, ms60: 85, ms65: 2200, notes: "Common, rare MS65" },
  { year: "1923", mint: "P", mintage: "30,800,000", g: 23, vg: 25, f: 27, vf: 30, xf: 35, au: 45, ms60: 60, ms65: 180, notes: "Common" },
  { year: "1923-D", mint: "D", mintage: "6,811,000", g: 23, vg: 25, f: 28, vf: 32, xf: 45, au: 65, ms60: 100, ms65: 1200, notes: "Scarcer" },
  { year: "1923-S", mint: "S", mintage: "19,020,000", g: 23, vg: 25, f: 27, vf: 32, xf: 45, au: 70, ms60: 120, ms65: 4500, notes: "Rare in high grade" },
  { year: "1924", mint: "P", mintage: "11,811,000", g: 23, vg: 25, f: 27, vf: 30, xf: 35, au: 45, ms60: 60, ms65: 200, notes: "Common" },
  { year: "1924-S", mint: "S", mintage: "1,728,000", g: 25, vg: 30, f: 40, vf: 70, xf: 180, au: 400, ms60: 900, ms65: 12000, notes: "Semi-key" },
  { year: "1925", mint: "P", mintage: "10,198,000", g: 23, vg: 25, f: 27, vf: 30, xf: 35, au: 45, ms60: 60, ms65: 200, notes: "Common" },
  { year: "1925-S", mint: "S", mintage: "1,610,000", g: 25, vg: 30, f: 38, vf: 60, xf: 150, au: 350, ms60: 700, ms65: 9000, notes: "Semi-key" },
  { year: "1926", mint: "P", mintage: "1,939,000", g: 23, vg: 26, f: 30, vf: 40, xf: 60, au: 90, ms60: 140, ms65: 500, notes: "Lower mintage" },
  { year: "1926-D", mint: "D", mintage: "2,348,700", g: 23, vg: 26, f: 32, vf: 45, xf: 80, au: 140, ms60: 220, ms65: 1500, notes: "Scarcer" },
  { year: "1926-S", mint: "S", mintage: "6,980,000", g: 23, vg: 26, f: 30, vf: 40, xf: 65, au: 100, ms60: 160, ms65: 1200, notes: "Common" },
  { year: "1927", mint: "P", mintage: "848,000", g: 28, vg: 35, f: 45, vf: 70, xf: 120, au: 200, ms60: 320, ms65: 1800, notes: "Low mintage" },
  { year: "1927-D", mint: "D", mintage: "1,268,900", g: 28, vg: 35, f: 50, vf: 90, xf: 180, au: 350, ms60: 600, ms65: 5500, notes: "Semi-key" },
  { year: "1927-S", mint: "S", mintage: "866,000", g: 28, vg: 38, f: 55, vf: 100, xf: 220, au: 550, ms60: 1200, ms65: 18000, notes: "Key date" },
  { year: "1928", mint: "P", mintage: "360,649", g: 300, vg: 320, f: 350, vf: 400, xf: 480, au: 600, ms60: 800, ms65: 3000, notes: "Key date - lowest" },
  { year: "1928-S", mint: "S", mintage: "1,632,000", g: 28, vg: 35, f: 45, vf: 80, xf: 180, au: 380, ms60: 700, ms65: 8500, notes: "Semi-key" },
  { year: "1934", mint: "P", mintage: "954,057", g: 28, vg: 35, f: 42, vf: 60, xf: 100, au: 170, ms60: 280, ms65: 1400, notes: "Low mintage" },
  { year: "1934-D", mint: "D", mintage: "1,569,500", g: 28, vg: 35, f: 42, vf: 60, xf: 110, au: 200, ms60: 350, ms65: 2500, notes: "Scarcer" },
  { year: "1934-S", mint: "S", mintage: "1,011,000", g: 50, vg: 80, f: 140, vf: 280, xf: 700, au: 1600, ms60: 4000, ms65: 35000, notes: "Key date" },
  { year: "1935", mint: "P", mintage: "1,576,000", g: 25, vg: 28, f: 33, vf: 45, xf: 70, au: 110, ms60: 170, ms65: 600, notes: "Last year" },
  { year: "1935-S", mint: "S", mintage: "1,964,000", g: 25, vg: 30, f: 38, vf: 55, xf: 100, au: 180, ms60: 350, ms65: 3200, notes: "Last year" },
];

const keyDates = [
  { year: "1928", mintage: "360,649", value: "$300-3,000+", why: "Lowest mintage regular issue Peace dollar" },
  { year: "1934-S", mintage: "1,011,000", value: "$50-35,000+", why: "Scarce in all grades, rare in MS" },
  { year: "1921", mintage: "1,006,473", value: "$100-2,500+", why: "Only High Relief year, first Peace dollar" },
  { year: "1927-S", mintage: "866,000", value: "$28-18,000+", why: "Second lowest S-mint, very rare in MS-65" },
  { year: "1925-S", mintage: "1,610,000", value: "$25-9,000+", why: "Low mintage, often weakly struck" },
  { year: "1924-S", mintage: "1,728,000", value: "$25-12,000+", why: "Scarce especially in uncirculated" },
];

export default function PeaceDollarValuePage() {
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
              ZERO COMPETITION - 900 SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Peace Silver Dollar Value Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              The Peace dollar was America&apos;s last circulating silver dollar, minted 1921-1935.
              Created to commemorate the end of World War I, it carries the word &quot;PEACE&quot; -
              <span className="text-amber-400 font-semibold"> a reminder that sound money
              brings stability</span>, while fiat currencies bring chaos.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Coins className="h-4 w-4 text-slate-400" />
                0.7734 oz Silver
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <History className="h-4 w-4 text-slate-400" />
                1921-1935
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <TrendingUp className="h-4 w-4 text-green-400" />
                ~$19 Melt Value
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Shield className="h-4 w-4 text-amber-400" />
                Commemorates WWI Peace
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* History Section */}
      <section className="py-8 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border-l-4 border-blue-500 rounded-r-xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                The Story of the Peace Dollar
              </h2>
              <p className="text-slate-300 mb-3">
                In 1921, the American Numismatic Association championed a coin to commemorate peace after
                World War I. Designer Anthony de Francisci won the competition, using his wife Teresa
                as the model for Liberty. The reverse shows an eagle at rest on a mountain, clutching an
                olive branch - a powerful symbol of peace through strength.
              </p>
              <p className="text-slate-400 text-sm">
                The original 1921 design was struck in High Relief, making it difficult to stack and vend.
                Starting in 1922, the design was modified to Low Relief for practical circulation - but
                collectors prize the scarcer 1921 High Relief originals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Dates Alert */}
      <section className="py-12 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Peace Dollar Key Dates
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyDates.map((coin, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-400">{coin.year}</h3>
                    <span className="text-green-400 font-semibold text-sm">{coin.value}</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-2">Mintage: {coin.mintage}</p>
                  <p className="text-slate-400 text-sm">{coin.why}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Value Chart */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Peace Dollar Value by Year and Condition
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Values in USD. Common dates trade 10-50% above melt value in circulated grades.
              Key dates and high-grade specimens command significant premiums.
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
                  {valueByYear.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Key") || row.notes.includes("Semi-key") ? "bg-amber-500/10" : ""}>
                      <td className="p-3 text-white font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-400">{row.mint}</td>
                      <td className="p-3 text-center text-slate-500 text-xs">{row.mintage}</td>
                      <td className="p-3 text-center text-slate-300">${row.g}</td>
                      <td className="p-3 text-center text-slate-300">${row.vg}</td>
                      <td className="p-3 text-center text-slate-300">${row.f}</td>
                      <td className="p-3 text-center text-slate-300">${row.vf}</td>
                      <td className="p-3 text-center text-slate-300">${row.xf}</td>
                      <td className="p-3 text-center text-slate-300">${row.au}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60.toLocaleString()}</td>
                      <td className="p-3 text-center text-amber-400 font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Values fluctuate with silver prices and market demand. Professional grading (PCGS/NGC) recommended for key dates.
            </p>
          </div>
        </Container>
      </section>

      {/* Grading Guide */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How to Grade Peace Dollars
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Obverse (Front) Key Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Hair Above Ear:</span> First area to show wear. Check for fine detail lines.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Hair Above Forehead:</span> Should show waves of hair in VF and higher.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Cheek:</span> Look for contact marks and bag marks on high points.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Ray Lines in Crown:</span> Distinct in AU+, may blend in lower grades.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Reverse (Back) Key Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Eagle&apos;s Wing Tips:</span> Check for full feather definition.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Eagle&apos;s Breast:</span> High point that shows wear first on reverse.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Tail Feathers:</span> Should show individual feathers in XF+.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">PEACE:</span> Letters should be sharp and clear.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold text-white">Strike Quality Warning:</span> Many Peace dollars,
                  especially San Francisco issues, have weak strikes that affect the hair above the ear
                  and eagle&apos;s feathers. Learn to distinguish strike weakness from circulation wear -
                  a weakly struck MS coin is still uncirculated.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 1921 High Relief vs Low Relief */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              1921 High Relief: The First Peace Dollar
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-400 mb-4">High Relief Features (1921 Only)</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      More sculptural, three-dimensional design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Higher relief on Liberty&apos;s face and hair
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      More prominent eagle on reverse
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Difficult to strike, often shows weakness
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Only 1,006,473 minted
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-300 mb-4">Low Relief Features (1922-1935)</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Flatter, more practical design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Easier to stack and use in vending
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      More consistent strikes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Lower collector premium on common dates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      Used for all subsequent Peace dollars
                    </li>
                  </ul>
                </div>
              </div>
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
                href="/silver-coin-values/morgan-dollar"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Morgan Dollar Values</h3>
                <p className="text-sm text-slate-400">1878-1921 Morgan dollars</p>
              </Link>
              <Link
                href="/silver-coin-values/melt-value-calculator"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Melt Value Calculator</h3>
                <p className="text-sm text-slate-400">Calculate silver value instantly</p>
              </Link>
              <Link
                href="/silver-coin-values/junk-silver"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Junk Silver Guide</h3>
                <p className="text-sm text-slate-400">Constitutional silver coins</p>
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
            headline="From Peace Dollars to Retirement Peace of Mind"
            subheadline="The Peace dollar reminds us that sound money brings stability. While 90% silver coins aren't IRA-eligible, Augusta Precious Metals can help you protect your retirement with .999 fine silver and gold in a tax-advantaged account."
            linkContext="silver"
            trackSource="peace-dollar-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
