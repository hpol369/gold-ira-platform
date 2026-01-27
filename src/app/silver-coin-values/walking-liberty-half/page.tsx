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
  Award,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Walking Liberty half dollar worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walking Liberty half dollar values range from $9-12 for common dates in circulated condition (based on silver melt value of ~$9) to $50,000+ for key dates in mint state. Most circulated specimens sell for 10-30% above melt value. The 1916-S, 1917-S obverse, 1919-D, 1921-S, and 1938-D are the key dates commanding significant premiums."
      }
    },
    {
      "@type": "Question",
      "name": "Which Walking Liberty halves are most valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most valuable Walking Liberty halves include: 1916 (first year, $50-500+), 1916-D ($50-300+), 1916-S ($100-1,000+), 1917-S Obverse mintmark ($30-500+), 1919-D ($30-2,000+), 1919-S ($20-1,500+), 1921 ($100-2,000+), 1921-D ($200-5,000+), 1921-S ($30-10,000+), and 1938-D ($80-250+, last year with lowest mintage)."
      }
    },
    {
      "@type": "Question",
      "name": "Why are Walking Liberty halves called 'the most beautiful American coin'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Designed by Adolph A. Weinman in 1916, the Walking Liberty half features Liberty striding toward the rising sun with an American flag draped over her shoulders, symbolizing the nation's march toward progress. The design is so revered that the US Mint revived it in 1986 for the American Silver Eagle bullion coin, which remains in production today."
      }
    },
    {
      "@type": "Question",
      "name": "How much silver is in a Walking Liberty half dollar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walking Liberty half dollars contain 0.36169 troy ounces of pure silver. They weigh 12.5 grams total with a composition of 90% silver and 10% copper. At $25/oz silver, the melt value is approximately $9.04. This silver content is the same as all US half dollars minted from 1892-1964."
      }
    },
    {
      "@type": "Question",
      "name": "Should I buy graded or raw Walking Liberty halves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For common dates, raw (ungraded) coins offer better value - you pay less premium and can stack more silver. For key dates (1916-S, 1921-S, 1938-D, etc.) or coins in AU/MS condition, PCGS or NGC grading is essential. Grading authenticates the coin and guarantees the grade, which is crucial for coins worth hundreds or thousands of dollars."
      }
    }
  ]
};

const valueByYear = [
  { year: "1916", mint: "P", mintage: "608,000", g: 50, vg: 60, f: 80, vf: 140, xf: 220, au: 350, ms60: 500, ms65: 2200, notes: "First year" },
  { year: "1916-D", mint: "D", mintage: "1,014,400", g: 50, vg: 60, f: 80, vf: 120, xf: 180, au: 280, ms60: 400, ms65: 1800, notes: "First year Denver" },
  { year: "1916-S", mint: "S", mintage: "508,000", g: 100, vg: 130, f: 180, vf: 350, xf: 600, au: 900, ms60: 1300, ms65: 6500, notes: "Key date" },
  { year: "1917", mint: "P", mintage: "12,292,000", g: 12, vg: 14, f: 18, vf: 30, xf: 55, au: 90, ms60: 140, ms65: 650, notes: "Common" },
  { year: "1917-D Obv", mint: "D", mintage: "765,400", g: 25, vg: 35, f: 55, vf: 120, xf: 280, au: 500, ms60: 900, ms65: 5000, notes: "Obverse mintmark" },
  { year: "1917-D Rev", mint: "D", mintage: "1,940,000", g: 12, vg: 16, f: 25, vf: 55, xf: 130, au: 280, ms60: 480, ms65: 3000, notes: "Reverse mintmark" },
  { year: "1917-S Obv", mint: "S", mintage: "952,000", g: 25, vg: 40, f: 70, vf: 180, xf: 450, au: 850, ms60: 1400, ms65: 12000, notes: "Semi-key" },
  { year: "1917-S Rev", mint: "S", mintage: "5,554,000", g: 12, vg: 14, f: 18, vf: 40, xf: 100, au: 220, ms60: 450, ms65: 4500, notes: "Common" },
  { year: "1918", mint: "P", mintage: "6,634,000", g: 12, vg: 14, f: 20, vf: 50, xf: 130, au: 300, ms60: 500, ms65: 3200, notes: "Common" },
  { year: "1918-D", mint: "D", mintage: "3,853,040", g: 12, vg: 16, f: 28, vf: 80, xf: 200, au: 420, ms60: 800, ms65: 6500, notes: "Scarce in MS" },
  { year: "1918-S", mint: "S", mintage: "10,282,000", g: 12, vg: 14, f: 20, vf: 55, xf: 150, au: 350, ms60: 650, ms65: 5000, notes: "Common" },
  { year: "1919", mint: "P", mintage: "962,000", g: 15, vg: 22, f: 45, vf: 150, xf: 400, au: 750, ms60: 1100, ms65: 5000, notes: "Low mintage" },
  { year: "1919-D", mint: "D", mintage: "1,165,000", g: 18, vg: 30, f: 65, vf: 250, xf: 700, au: 1400, ms60: 2500, ms65: 18000, notes: "Semi-key" },
  { year: "1919-S", mint: "S", mintage: "1,552,000", g: 15, vg: 25, f: 55, vf: 200, xf: 650, au: 1300, ms60: 2200, ms65: 20000, notes: "Semi-key" },
  { year: "1920", mint: "P", mintage: "6,372,000", g: 12, vg: 14, f: 18, vf: 40, xf: 100, au: 220, ms60: 380, ms65: 2400, notes: "Common" },
  { year: "1920-D", mint: "D", mintage: "1,551,000", g: 12, vg: 18, f: 35, vf: 120, xf: 350, au: 700, ms60: 1200, ms65: 9000, notes: "Scarce" },
  { year: "1920-S", mint: "S", mintage: "4,624,000", g: 12, vg: 14, f: 22, vf: 65, xf: 220, au: 550, ms60: 1100, ms65: 11000, notes: "Common" },
  { year: "1921", mint: "P", mintage: "246,000", g: 100, vg: 150, f: 280, vf: 600, xf: 1100, au: 1800, ms60: 2600, ms65: 14000, notes: "Key date" },
  { year: "1921-D", mint: "D", mintage: "208,000", g: 180, vg: 260, f: 450, vf: 900, xf: 1600, au: 2400, ms60: 3500, ms65: 25000, notes: "Key date" },
  { year: "1921-S", mint: "S", mintage: "548,000", g: 40, vg: 65, f: 150, vf: 700, xf: 2200, au: 4500, ms60: 7000, ms65: 55000, notes: "Key date" },
  { year: "1927-S", mint: "S", mintage: "2,392,000", g: 12, vg: 14, f: 22, vf: 70, xf: 280, au: 750, ms60: 2000, ms65: 18000, notes: "Scarce MS" },
  { year: "1928-S", mint: "S", mintage: "1,940,000", g: 12, vg: 14, f: 22, vf: 70, xf: 280, au: 750, ms60: 1800, ms65: 12000, notes: "Scarce MS" },
  { year: "1929-D", mint: "D", mintage: "1,001,200", g: 12, vg: 16, f: 28, vf: 70, xf: 180, au: 350, ms60: 600, ms65: 4500, notes: "Scarce" },
  { year: "1929-S", mint: "S", mintage: "1,902,000", g: 12, vg: 14, f: 22, vf: 55, xf: 140, au: 320, ms60: 550, ms65: 4000, notes: "Common" },
  { year: "1933-S", mint: "S", mintage: "1,786,000", g: 12, vg: 14, f: 18, vf: 45, xf: 110, au: 220, ms60: 400, ms65: 2800, notes: "Depression era" },
  { year: "1934", mint: "P", mintage: "6,964,000", g: 10, vg: 12, f: 14, vf: 22, xf: 45, au: 80, ms60: 140, ms65: 500, notes: "Common" },
  { year: "1934-D", mint: "D", mintage: "2,361,400", g: 10, vg: 12, f: 16, vf: 35, xf: 80, au: 160, ms60: 280, ms65: 1200, notes: "Common" },
  { year: "1934-S", mint: "S", mintage: "3,652,000", g: 10, vg: 12, f: 16, vf: 35, xf: 90, au: 180, ms60: 350, ms65: 2200, notes: "Common" },
  { year: "1935", mint: "P", mintage: "9,162,000", g: 10, vg: 11, f: 13, vf: 20, xf: 40, au: 65, ms60: 100, ms65: 400, notes: "Common" },
  { year: "1936", mint: "P", mintage: "12,617,901", g: 10, vg: 11, f: 13, vf: 18, xf: 35, au: 55, ms60: 85, ms65: 320, notes: "Common" },
  { year: "1937", mint: "P", mintage: "9,527,728", g: 10, vg: 11, f: 13, vf: 18, xf: 35, au: 55, ms60: 85, ms65: 320, notes: "Common" },
  { year: "1938", mint: "P", mintage: "4,118,152", g: 10, vg: 12, f: 16, vf: 30, xf: 55, au: 90, ms60: 140, ms65: 500, notes: "Lower mintage" },
  { year: "1938-D", mint: "D", mintage: "491,600", g: 80, vg: 90, f: 100, vf: 120, xf: 150, au: 180, ms60: 240, ms65: 700, notes: "Semi-key, last D" },
  { year: "1939", mint: "P", mintage: "6,820,808", g: 10, vg: 11, f: 13, vf: 18, xf: 30, au: 50, ms60: 75, ms65: 280, notes: "Common" },
  { year: "1940", mint: "P", mintage: "9,167,279", g: 10, vg: 11, f: 13, vf: 16, xf: 28, au: 45, ms60: 65, ms65: 250, notes: "Common" },
  { year: "1941", mint: "P", mintage: "24,207,412", g: 10, vg: 11, f: 12, vf: 15, xf: 25, au: 40, ms60: 55, ms65: 180, notes: "Very common" },
  { year: "1942", mint: "P", mintage: "47,839,120", g: 10, vg: 11, f: 12, vf: 14, xf: 22, au: 35, ms60: 50, ms65: 160, notes: "Very common" },
  { year: "1943", mint: "P", mintage: "53,190,000", g: 10, vg: 11, f: 12, vf: 14, xf: 22, au: 35, ms60: 50, ms65: 160, notes: "Very common" },
  { year: "1944", mint: "P", mintage: "28,206,000", g: 10, vg: 11, f: 12, vf: 14, xf: 22, au: 35, ms60: 50, ms65: 160, notes: "Very common" },
  { year: "1945", mint: "P", mintage: "31,502,000", g: 10, vg: 11, f: 12, vf: 14, xf: 22, au: 35, ms60: 50, ms65: 160, notes: "Very common" },
  { year: "1946", mint: "P", mintage: "12,118,000", g: 10, vg: 11, f: 12, vf: 15, xf: 25, au: 40, ms60: 55, ms65: 180, notes: "Common" },
  { year: "1947", mint: "P", mintage: "4,094,000", g: 10, vg: 11, f: 13, vf: 18, xf: 35, au: 55, ms60: 80, ms65: 300, notes: "Last year" },
  { year: "1947-D", mint: "D", mintage: "3,900,600", g: 10, vg: 11, f: 13, vf: 18, xf: 35, au: 55, ms60: 80, ms65: 300, notes: "Last year" },
];

export default function WalkingLibertyHalfValuePage() {
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
              LOW COMPETITION - 2,200 SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Walking Liberty Half Dollar Value Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Called &quot;the most beautiful American coin ever minted,&quot; the Walking Liberty half dollar
              (1916-1947) is beloved by collectors and silver stackers alike. The design was so iconic
              that the US Mint revived it for the
              <span className="text-amber-400 font-semibold"> American Silver Eagle</span> in 1986.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Coins className="h-4 w-4 text-slate-400" />
                0.3617 oz Silver
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <History className="h-4 w-4 text-slate-400" />
                1916-1947
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <TrendingUp className="h-4 w-4 text-green-400" />
                ~$9 Melt Value
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Award className="h-4 w-4 text-amber-400" />
                Most Beautiful Design
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Design History */}
      <section className="py-8 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border-l-4 border-blue-500 rounded-r-xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                The Story Behind the Design
              </h2>
              <p className="text-slate-300">
                In 1916, Treasury Secretary William McAdoo launched a competition to redesign American coinage.
                Sculptor Adolph A. Weinman created the Walking Liberty design, showing Liberty striding confidently
                toward the dawn with the American flag draped over her shoulders. The design symbolizes
                <span className="text-amber-400"> freedom advancing toward a brighter future</span> - a message
                that resonates even more today as paper currencies continue to lose purchasing power.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Dates */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Key Dates to Look For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { year: "1916-S", value: "$100-6,500+", why: "First year San Francisco, low mintage" },
                { year: "1921", value: "$100-14,000+", why: "Lowest mintage Philadelphia" },
                { year: "1921-D", value: "$180-25,000+", why: "Lowest mintage Denver" },
                { year: "1921-S", value: "$40-55,000+", why: "Rare in high grades" },
                { year: "1919-D", value: "$18-18,000+", why: "Low mintage, rarely found in MS" },
                { year: "1919-S", value: "$15-20,000+", why: "Rare above XF condition" },
                { year: "1917-S Obverse", value: "$25-12,000+", why: "Obverse mintmark variety" },
                { year: "1938-D", value: "$80-700+", why: "Last Denver, lowest late-date mintage" },
              ].map((coin, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-amber-400">{coin.year}</h3>
                    <span className="text-green-400 font-semibold">{coin.value}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{coin.why}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Value Chart */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Walking Liberty Half Dollar Values by Year
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Values in USD. Most circulated common dates trade at 10-30% above melt value.
              Key dates command significant premiums in all grades.
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
                      <td className="p-3 text-center text-green-400">${row.ms60}</td>
                      <td className="p-3 text-center text-amber-400 font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Values are approximate. S and D mintmarks for common years typically add 10-50% premium. Professional grading recommended for key dates.
            </p>
          </div>
        </Container>
      </section>

      {/* Grading Guide */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How to Grade Walking Liberty Halves
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Grading Points - Obverse</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Liberty&apos;s Hand:</span> First area to show wear. Should have clear fingers in XF+.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Head and Cap:</span> Liberty&apos;s head and cap lose detail quickly with wear.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Center Skirt Lines:</span> Vertical lines should be visible in VF and higher.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Breast and Arm:</span> High points that show early wear. Check for flatness.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Grading Points - Reverse</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Eagle&apos;s Breast:</span> Feather detail is first to wear on reverse.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Wing Tips:</span> Should show feather separation in XF and higher.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Leg Feathers:</span> Thigh feathers should be distinct in VF+.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Strike Quality:</span> Early dates often weakly struck, especially on centers.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">
                  <span className="font-semibold text-white">Strike Weakness Note:</span> Many Walking Liberty halves,
                  especially San Francisco issues, have weak strikes on Liberty&apos;s hand and head. This is a
                  strike issue, not wear, but can affect value. Learn to distinguish strike weakness from circulation wear.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mintmark Locations */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Mintmark Locations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">1916-1917: Obverse Mintmark</h3>
                <p className="text-slate-300 mb-4">
                  On early issues, the mintmark (D or S) appears on the <span className="text-white font-semibold">obverse</span>,
                  below &quot;IN GOD WE TRUST&quot; near the lower rim.
                </p>
                <p className="text-sm text-slate-400">
                  1917 coins exist with both obverse and reverse mintmarks - the obverse variety is scarcer.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">1917-1947: Reverse Mintmark</h3>
                <p className="text-slate-300 mb-4">
                  From mid-1917 onward, the mintmark moved to the <span className="text-white font-semibold">reverse</span>,
                  below the pine branch near &quot;HALF DOLLAR&quot;.
                </p>
                <p className="text-sm text-slate-400">
                  Philadelphia coins have no mintmark. D = Denver, S = San Francisco.
                </p>
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
            headline="From Beautiful Coins to Secure Retirement"
            subheadline="Walking Liberty halves showcase why silver has been treasured for centuries. While these 90% silver coins aren't IRA-eligible, Augusta Precious Metals can help you add .999 fine silver to a tax-advantaged retirement account. Protect your future with real assets."
            linkContext="silver"
            trackSource="walking-liberty-half-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
