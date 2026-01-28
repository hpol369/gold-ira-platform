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
  Scale,
  AlertTriangle,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are silver quarters worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver quarters (1932-1964) are worth at minimum their melt value of approximately $4.50 based on 0.1808 oz of silver content. Common circulated Washington quarters typically sell for $5-7. Key dates like 1932-D and 1932-S can be worth $100-500+ even in lower grades. Standing Liberty and Barber quarters carry additional numismatic premiums."
      }
    },
    {
      "@type": "Question",
      "name": "What year quarters are silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "US quarters contain 90% silver from 1892-1964. This includes Barber quarters (1892-1916), Standing Liberty quarters (1916-1930), and Washington quarters (1932-1964). Starting in 1965, quarters were changed to copper-nickel clad. Some special collector issues (bicentennial proofs, silver proof sets) from 1976 and 1992-present contain 90% or 40% silver."
      }
    },
    {
      "@type": "Question",
      "name": "Which silver quarters are most valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most valuable silver quarters include: 1916 Standing Liberty ($3,000-100,000+), 1918/7-S Standing Liberty overdate ($1,000-50,000+), 1932-D Washington ($100-3,000+), 1932-S Washington ($100-2,000+), 1896-S Barber ($100-10,000+), and 1901-S Barber ($2,000-100,000+). Full Head Standing Liberty quarters and Full Bell Lines Washington quarters in MS grades command high premiums."
      }
    },
    {
      "@type": "Question",
      "name": "How can I tell if a quarter is silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check the date first - 1964 or earlier means silver. You can also check the edge: silver quarters have a solid gray/silver edge, while clad quarters show a copper stripe. Silver quarters weigh 6.25 grams vs 5.67 grams for clad. Silver also has a distinctive 'ring' when dropped, while clad coins sound duller."
      }
    },
    {
      "@type": "Question",
      "name": "Are silver quarters a good investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver quarters offer tangible precious metal ownership at affordable entry points. Common dates trade near melt value with low premiums, making them cost-effective for silver stacking. They're highly recognizable, divisible, and liquid. However, 90% silver coins are not IRA-eligible. For retirement accounts, consider .999 fine silver bullion products that meet IRS requirements."
      }
    }
  ]
};

const washingtonValues = [
  { year: "1932", mint: "P", g: 6, vg: 7, f: 8, vf: 10, xf: 18, au: 40, ms60: 70, ms65: 250, notes: "First year" },
  { year: "1932-D", mint: "D", g: 100, vg: 130, f: 160, vf: 220, xf: 380, au: 700, ms60: 1200, ms65: 5000, notes: "Key date" },
  { year: "1932-S", mint: "S", g: 100, vg: 120, f: 140, vf: 180, xf: 280, au: 500, ms60: 800, ms65: 3000, notes: "Key date" },
  { year: "1934", mint: "P", g: 5, vg: 6, f: 7, vf: 10, xf: 22, au: 55, ms60: 100, ms65: 400, notes: "Common" },
  { year: "1934-D", mint: "D", g: 5, vg: 6, f: 8, vf: 18, xf: 50, au: 120, ms60: 250, ms65: 1100, notes: "Scarcer" },
  { year: "1935", mint: "P", g: 5, vg: 6, f: 6.5, vf: 8, xf: 15, au: 35, ms60: 60, ms65: 200, notes: "Common" },
  { year: "1935-D", mint: "D", g: 5, vg: 6, f: 8, vf: 15, xf: 45, au: 100, ms60: 200, ms65: 800, notes: "Scarcer" },
  { year: "1935-S", mint: "S", g: 5, vg: 6, f: 7, vf: 12, xf: 35, au: 80, ms60: 160, ms65: 700, notes: "Scarcer" },
  { year: "1936", mint: "P", g: 5, vg: 5.5, f: 6, vf: 8, xf: 14, au: 28, ms60: 50, ms65: 150, notes: "Common" },
  { year: "1936-D", mint: "D", g: 5, vg: 6, f: 8, vf: 25, xf: 80, au: 200, ms60: 350, ms65: 1400, notes: "Semi-key" },
  { year: "1937", mint: "P", g: 5, vg: 5.5, f: 6, vf: 8, xf: 12, au: 25, ms60: 45, ms65: 130, notes: "Common" },
  { year: "1937-S", mint: "S", g: 5, vg: 6, f: 9, vf: 25, xf: 70, au: 140, ms60: 250, ms65: 900, notes: "Semi-key" },
  { year: "1938-S", mint: "S", g: 5, vg: 6, f: 10, vf: 30, xf: 80, au: 150, ms60: 280, ms65: 800, notes: "Semi-key" },
  { year: "1939", mint: "P", g: 5, vg: 5.5, f: 6, vf: 7, xf: 10, au: 20, ms60: 35, ms65: 100, notes: "Common" },
  { year: "1940", mint: "P", g: 5, vg: 5.5, f: 6, vf: 7, xf: 9, au: 18, ms60: 30, ms65: 80, notes: "Common" },
  { year: "1950-D/S", mint: "D", g: 15, vg: 20, f: 30, vf: 60, xf: 100, au: 150, ms60: 220, ms65: 600, notes: "Overdate" },
  { year: "1964", mint: "P", g: 5, vg: 5, f: 5.5, vf: 6, xf: 7, au: 9, ms60: 12, ms65: 35, notes: "Last silver" },
  { year: "1964-D", mint: "D", g: 5, vg: 5, f: 5.5, vf: 6, xf: 7, au: 9, ms60: 12, ms65: 35, notes: "Last silver" },
  { year: "Common", mint: "Any", g: 5, vg: 5, f: 5.5, vf: 6, xf: 8, au: 12, ms60: 20, ms65: 60, notes: "Most dates" },
];

const standingLibertyValues = [
  { year: "1916", mint: "P", g: 3500, vg: 5000, f: 7000, vf: 10000, xf: 14000, au: 18000, ms60: 24000, ms65: 50000, notes: "Key date - 52,000 minted" },
  { year: "1917 Type 1", mint: "P", g: 20, vg: 30, f: 50, vf: 80, xf: 140, au: 220, ms60: 340, ms65: 1000, notes: "Bare breast design" },
  { year: "1917 Type 2", mint: "P", g: 20, vg: 28, f: 40, vf: 60, xf: 100, au: 160, ms60: 250, ms65: 750, notes: "Chain mail design" },
  { year: "1918/7-S", mint: "S", g: 1200, vg: 2000, f: 3500, vf: 6000, xf: 12000, au: 22000, ms60: 40000, ms65: 150000, notes: "Overdate key" },
  { year: "1919-D", mint: "D", g: 50, vg: 80, f: 150, vf: 280, xf: 500, au: 850, ms60: 1400, ms65: 4500, notes: "Semi-key" },
  { year: "1919-S", mint: "S", g: 50, vg: 80, f: 150, vf: 280, xf: 550, au: 950, ms60: 1600, ms65: 5500, notes: "Semi-key" },
  { year: "1921", mint: "P", g: 120, vg: 200, f: 300, vf: 450, xf: 700, au: 1000, ms60: 1500, ms65: 4000, notes: "Low mintage" },
  { year: "1923-S", mint: "S", g: 180, vg: 280, f: 400, vf: 600, xf: 900, au: 1300, ms60: 2000, ms65: 7000, notes: "Key date" },
  { year: "1927-S", mint: "S", g: 25, vg: 40, f: 80, vf: 200, xf: 600, au: 1400, ms60: 3000, ms65: 25000, notes: "Rare MS" },
  { year: "Common", mint: "Any", g: 10, vg: 15, f: 25, vf: 45, xf: 80, au: 140, ms60: 220, ms65: 600, notes: "Most dates" },
];

const barberValues = [
  { year: "1892", mint: "P", g: 6, vg: 15, f: 35, vf: 60, xf: 100, au: 160, ms60: 250, ms65: 700, notes: "First year" },
  { year: "1896-S", mint: "S", g: 100, vg: 350, f: 800, vf: 1500, xf: 2800, au: 4500, ms60: 7000, ms65: 22000, notes: "Key date" },
  { year: "1901-S", mint: "S", g: 2500, vg: 5000, f: 12000, vf: 25000, xf: 45000, au: 70000, ms60: 100000, ms65: 250000, notes: "Major key" },
  { year: "1913-S", mint: "S", g: 500, vg: 1500, f: 4000, vf: 8000, xf: 12000, au: 18000, ms60: 28000, ms65: 80000, notes: "Key date" },
  { year: "Common", mint: "Any", g: 5, vg: 10, f: 25, vf: 50, xf: 90, au: 150, ms60: 240, ms65: 650, notes: "Most dates" },
];

export default function SilverQuartersValuePage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-coin-values"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Silver Coin Values
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6 ml-4">
              <Star className="h-4 w-4" />
              ZERO COMPETITION - 900 SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Silver Quarters Value Guide
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8">
              Before 1965, every quarter in your pocket contained real silver - 90% pure.
              Today, a single pre-1965 quarter holds more purchasing power than its 25-cent face value suggests.
              <span className="text-[#B22234] font-semibold"> That&apos;s what real money looks like.</span>
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg text-slate-600">
                <Coins className="h-4 w-4 text-slate-600" />
                0.1808 oz Silver
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg text-slate-600">
                <History className="h-4 w-4 text-slate-600" />
                Pre-1965
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg text-slate-600">
                <TrendingUp className="h-4 w-4 text-green-400" />
                ~$4.50 Melt Value
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg text-slate-600">
                <Scale className="h-4 w-4 text-slate-600" />
                6.25 grams
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quarter Types Overview */}
      <section className="py-12 bg-white border-y border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Three Types of Silver Quarters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#B22234] mb-2">Barber Quarter</h3>
                <p className="text-slate-600 text-sm mb-3">1892-1916</p>
                <p className="text-slate-600 text-sm">
                  Liberty head design by Charles Barber. Known for wear-prone surfaces.
                  The 1901-S is a major rarity worth $2,500+ even worn.
                </p>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-[#B22234]/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#B22234] mb-2">Standing Liberty</h3>
                <p className="text-slate-600 text-sm mb-3">1916-1930</p>
                <p className="text-slate-600 text-sm">
                  Beautiful art deco design. Type 1 (1916-17) shows Liberty&apos;s bare breast.
                  Dates often worn off, affecting values. Full Head specimens are prized.
                </p>
              </div>
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#B22234] mb-2">Washington Quarter</h3>
                <p className="text-slate-600 text-sm mb-3">1932-1964 (silver)</p>
                <p className="text-slate-600 text-sm">
                  Most common silver quarter. Key dates are 1932-D and 1932-S.
                  Best value for silver stacking. Still in use today (clad).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Washington Quarters */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Washington Quarter Values (1932-1964)
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              The most common and affordable silver quarters. Key dates are 1932-D and 1932-S.
              Most circulated specimens trade at small premiums over melt value.
            </p>
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-3 text-slate-900 font-bold">Year</th>
                    <th className="text-center p-3 text-slate-900 font-bold">Mint</th>
                    <th className="text-center p-3 text-slate-600">G-4</th>
                    <th className="text-center p-3 text-slate-600">VG-8</th>
                    <th className="text-center p-3 text-slate-600">F-12</th>
                    <th className="text-center p-3 text-slate-600">VF-20</th>
                    <th className="text-center p-3 text-slate-600">XF-40</th>
                    <th className="text-center p-3 text-slate-600">AU-50</th>
                    <th className="text-center p-3 text-[#B22234]">MS-60</th>
                    <th className="text-center p-3 text-[#B22234]">MS-65</th>
                    <th className="text-left p-3 text-slate-600">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {washingtonValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Key") ? "bg-[#B22234]/10" : ""}>
                      <td className="p-3 text-slate-900 font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-600">{row.mint}</td>
                      <td className="p-3 text-center text-slate-600">${row.g}</td>
                      <td className="p-3 text-center text-slate-600">${row.vg}</td>
                      <td className="p-3 text-center text-slate-600">${row.f}</td>
                      <td className="p-3 text-center text-slate-600">${row.vf}</td>
                      <td className="p-3 text-center text-slate-600">${row.xf}</td>
                      <td className="p-3 text-center text-slate-600">${row.au}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60}</td>
                      <td className="p-3 text-center text-[#B22234] font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-600 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Standing Liberty Quarters */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Standing Liberty Quarter Values (1916-1930)
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Beautiful art deco design by Hermon MacNeil. The exposed date wore quickly,
              so many coins have illegible or weak dates. Full Head (FH) specimens are highly prized.
            </p>
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-3 text-slate-900 font-bold">Year</th>
                    <th className="text-center p-3 text-slate-900 font-bold">Mint</th>
                    <th className="text-center p-3 text-slate-600">G-4</th>
                    <th className="text-center p-3 text-slate-600">VG-8</th>
                    <th className="text-center p-3 text-slate-600">F-12</th>
                    <th className="text-center p-3 text-slate-600">VF-20</th>
                    <th className="text-center p-3 text-slate-600">XF-40</th>
                    <th className="text-center p-3 text-slate-600">AU-50</th>
                    <th className="text-center p-3 text-[#B22234]">MS-60</th>
                    <th className="text-center p-3 text-[#B22234]">MS-65</th>
                    <th className="text-left p-3 text-slate-600">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {standingLibertyValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Key") || row.notes.includes("Overdate") ? "bg-[#B22234]/10" : ""}>
                      <td className="p-3 text-slate-900 font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-600">{row.mint}</td>
                      <td className="p-3 text-center text-slate-600">${row.g.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.vg.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.f.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.vf.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.xf.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.au.toLocaleString()}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60.toLocaleString()}</td>
                      <td className="p-3 text-center text-[#B22234] font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-600 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#B22234] flex-shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm">
                  <span className="font-semibold text-slate-900">Date Visibility:</span> Standing Liberty quarters
                  have exposed dates that wore quickly. Coins with partial or weak dates are valued as
                  &quot;dateless&quot; at lower prices (typically $6-10). Always check the date carefully.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Barber Quarters */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Barber Quarter Values (1892-1916)
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Liberty head design used across dimes, quarters, and half dollars.
              Many dates are scarce in high grades. The 1901-S is one of the rarest US coins.
            </p>
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-3 text-slate-900 font-bold">Year</th>
                    <th className="text-center p-3 text-slate-900 font-bold">Mint</th>
                    <th className="text-center p-3 text-slate-600">G-4</th>
                    <th className="text-center p-3 text-slate-600">VG-8</th>
                    <th className="text-center p-3 text-slate-600">F-12</th>
                    <th className="text-center p-3 text-slate-600">VF-20</th>
                    <th className="text-center p-3 text-slate-600">XF-40</th>
                    <th className="text-center p-3 text-slate-600">AU-50</th>
                    <th className="text-center p-3 text-[#B22234]">MS-60</th>
                    <th className="text-center p-3 text-[#B22234]">MS-65</th>
                    <th className="text-left p-3 text-slate-600">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {barberValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Key") || row.notes.includes("Major") ? "bg-[#B22234]/10" : ""}>
                      <td className="p-3 text-slate-900 font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-600">{row.mint}</td>
                      <td className="p-3 text-center text-slate-600">${row.g.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.vg.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.f.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.vf.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.xf.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-600">${row.au.toLocaleString()}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60.toLocaleString()}</td>
                      <td className="p-3 text-center text-[#B22234] font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-600 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Melt Value Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Silver Quarter Melt Value Calculator
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Silver Content</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Weight:</span> 6.25 grams total
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Composition:</span> 90% silver, 10% copper
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Pure Silver:</span> 0.1808 troy ounces
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">Per $1 Face:</span> 0.7234 oz silver
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#B22234]/10 via-amber-500/5 to-transparent border border-[#B22234]/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#B22234] mb-4">Quick Math @ $25/oz</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>1 quarter = $4.52 melt value</li>
                  <li>4 quarters ($1 face) = $18.08</li>
                  <li>40 quarters ($10 face) = $180.83</li>
                  <li>$1,000 face value = $18,083</li>
                </ul>
                <p className="text-sm text-slate-600 mt-4">
                  Most dealers buy at 95-98% of melt and sell at 103-110% for common dates.
                </p>
                <Link
                  href="/silver-coin-values/melt-value-calculator"
                  className="inline-flex items-center gap-2 mt-4 text-[#B22234] hover:text-[#B22234] transition-colors"
                >
                  Use Full Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {schema.mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
              Related Silver Coin Guides
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/silver-coin-values/silver-dimes"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">Silver Dimes</h3>
                <p className="text-sm text-slate-600">Mercury, Roosevelt, Barber</p>
              </Link>
              <Link
                href="/silver-coin-values/melt-value-calculator"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">Melt Value Calculator</h3>
                <p className="text-sm text-slate-600">Calculate silver value instantly</p>
              </Link>
              <Link
                href="/silver-coin-values/junk-silver"
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors group"
              >
                <h3 className="font-bold text-slate-900 group-hover:text-[#B22234] transition-colors">Junk Silver Guide</h3>
                <p className="text-sm text-slate-600">Constitutional silver explained</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="From Pocket Change to Retirement Security"
            subheadline="Silver quarters remind us what money used to be - real, tangible, valuable. While 90% silver coins aren't IRA-eligible, Augusta Precious Metals can help you protect your retirement with .999 fine silver in a tax-advantaged account."
            linkContext="silver"
            trackSource="silver-quarters-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
