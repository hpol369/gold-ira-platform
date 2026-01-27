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
  Info,
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Morgan silver dollar worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Morgan silver dollar values range from $25-30 for common dates in Good condition to $100,000+ for rare key dates in mint state. The silver melt value provides a floor of approximately $19-20 based on 0.7734 oz silver content. Most circulated common dates sell for $30-50, while uncirculated specimens start around $40-60 and can reach hundreds or thousands depending on grade and mint mark."
      }
    },
    {
      "@type": "Question",
      "name": "Which Morgan dollars are worth the most?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most valuable Morgan dollars include: 1893-S (rarest regular issue, $5,000-100,000+), 1889-CC ($1,000-50,000+), 1879-CC ($500-20,000+), 1893-O ($500-15,000+), and 1884-S ($200-10,000+). Carson City (CC) mint marks generally command the highest premiums. Proof specimens and high-grade MS-65+ coins of any date can also reach significant values."
      }
    },
    {
      "@type": "Question",
      "name": "How do I grade a Morgan dollar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key areas to examine on Morgan dollars: (1) Liberty's hair above the ear - shows wear first, (2) Eagle's breast feathers - flatten with circulation, (3) Cheek of Liberty - develops contact marks, (4) Overall luster - should be unbroken on uncirculated coins. Grades range from G-4 (heavily worn) to MS-70 (perfect). For valuable coins, professional grading from PCGS or NGC is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Are all Morgan dollars silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all genuine Morgan dollars are 90% silver and 10% copper, with a total weight of 26.73 grams (0.7734 troy oz of pure silver). There are no clad or copper-nickel Morgan dollars - any such specimens would be counterfeits. Modern commemorative versions exist but are clearly marked as reproductions."
      }
    },
    {
      "@type": "Question",
      "name": "Should I clean my Morgan dollar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never clean a Morgan dollar. Cleaning removes the natural patina (toning) that collectors value and leaves microscopic scratches visible under magnification. Cleaned coins are worth 50-90% less than original, uncleaned specimens. Even 'gentle' cleaning with soap and water can damage a coin's surfaces and destroy its numismatic value."
      }
    }
  ]
};

const valueByYear = [
  { year: "1878 (8TF)", mint: "P", g: 60, vg: 75, f: 90, vf: 120, xf: 180, au: 250, ms60: 350, ms65: 1200, notes: "First year, 8 tail feathers" },
  { year: "1878 (7TF)", mint: "P", g: 35, vg: 40, f: 50, vf: 65, xf: 90, au: 130, ms60: 180, ms65: 600, notes: "Revised 7 tail feathers" },
  { year: "1878", mint: "CC", g: 120, vg: 150, f: 180, vf: 220, xf: 280, au: 380, ms60: 550, ms65: 2500, notes: "First Carson City" },
  { year: "1878", mint: "S", g: 30, vg: 35, f: 40, vf: 50, xf: 70, au: 100, ms60: 140, ms65: 450, notes: "Common" },
  { year: "1879", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 90, ms60: 120, ms65: 400, notes: "Common" },
  { year: "1879", mint: "CC", g: 350, vg: 500, f: 800, vf: 1400, xf: 3000, au: 5500, ms60: 9000, ms65: 45000, notes: "Key date" },
  { year: "1879-O", mint: "O", g: 28, vg: 32, f: 38, vf: 48, xf: 70, au: 110, ms60: 180, ms65: 2200, notes: "Common" },
  { year: "1879-S", mint: "S", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 300, notes: "Common, nice luster" },
  { year: "1880", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 350, notes: "Common" },
  { year: "1880", mint: "CC", g: 180, vg: 220, f: 280, vf: 350, xf: 480, au: 650, ms60: 900, ms65: 3500, notes: "Popular CC" },
  { year: "1881", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 350, notes: "Common" },
  { year: "1881", mint: "CC", g: 380, vg: 420, f: 480, vf: 550, xf: 680, au: 850, ms60: 1100, ms65: 3200, notes: "Lower mintage" },
  { year: "1881-S", mint: "S", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 280, notes: "Very common, nice" },
  { year: "1882", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 350, notes: "Common" },
  { year: "1882", mint: "CC", g: 110, vg: 130, f: 150, vf: 180, xf: 220, au: 300, ms60: 420, ms65: 1400, notes: "Popular CC" },
  { year: "1883", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 350, notes: "Common" },
  { year: "1883", mint: "CC", g: 110, vg: 130, f: 150, vf: 180, xf: 220, au: 300, ms60: 420, ms65: 1200, notes: "GSA hoard" },
  { year: "1884", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 350, notes: "Common" },
  { year: "1884", mint: "CC", g: 150, vg: 170, f: 190, vf: 220, xf: 280, au: 360, ms60: 480, ms65: 1200, notes: "GSA hoard" },
  { year: "1884-S", mint: "S", g: 35, vg: 55, f: 120, vf: 350, xf: 1200, au: 3500, ms60: 8000, ms65: 85000, notes: "Semi-key" },
  { year: "1885", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 300, notes: "Common" },
  { year: "1885", mint: "CC", g: 650, vg: 720, f: 780, vf: 850, xf: 950, au: 1100, ms60: 1400, ms65: 3000, notes: "Lower mintage" },
  { year: "1886", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 280, notes: "Very common" },
  { year: "1887", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 280, notes: "Very common" },
  { year: "1888", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 350, notes: "Common" },
  { year: "1889", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 110, ms65: 400, notes: "Common" },
  { year: "1889", mint: "CC", g: 800, vg: 1500, f: 3500, vf: 8000, xf: 18000, au: 35000, ms60: 55000, ms65: 250000, notes: "Major key date" },
  { year: "1890", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 90, ms60: 130, ms65: 700, notes: "Common" },
  { year: "1890", mint: "CC", g: 100, vg: 120, f: 140, vf: 180, xf: 280, au: 450, ms60: 750, ms65: 6500, notes: "Popular" },
  { year: "1891", mint: "P", g: 28, vg: 32, f: 38, vf: 50, xf: 75, au: 120, ms60: 200, ms65: 1200, notes: "Common" },
  { year: "1891", mint: "CC", g: 100, vg: 120, f: 145, vf: 200, xf: 320, au: 500, ms60: 850, ms65: 7500, notes: "Last CC year" },
  { year: "1892", mint: "P", g: 28, vg: 35, f: 50, vf: 80, xf: 180, au: 350, ms60: 550, ms65: 4500, notes: "Lower mintage" },
  { year: "1893", mint: "P", g: 200, vg: 250, f: 320, vf: 450, xf: 700, au: 1100, ms60: 2000, ms65: 12000, notes: "Key date" },
  { year: "1893", mint: "CC", g: 700, vg: 1000, f: 1600, vf: 2800, xf: 5500, au: 9000, ms60: 18000, ms65: 120000, notes: "Rare" },
  { year: "1893-O", mint: "O", g: 300, vg: 400, f: 600, vf: 1000, xf: 2200, au: 4500, ms60: 9000, ms65: 90000, notes: "Key date" },
  { year: "1893-S", mint: "S", g: 5000, vg: 7000, f: 12000, vf: 22000, xf: 45000, au: 70000, ms60: 110000, ms65: 500000, notes: "The King - rarest" },
  { year: "1894", mint: "P", g: 100, vg: 150, f: 280, vf: 550, xf: 1200, au: 2200, ms60: 3800, ms65: 25000, notes: "Low mintage" },
  { year: "1895", mint: "P", g: null, vg: null, f: null, vf: null, xf: null, au: null, ms60: 50000, ms65: 180000, notes: "Proof only - 880 struck" },
  { year: "1896", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 300, notes: "Common" },
  { year: "1897", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 300, notes: "Common" },
  { year: "1898", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 300, notes: "Common" },
  { year: "1899", mint: "P", g: 150, vg: 180, f: 210, vf: 250, xf: 320, au: 420, ms60: 550, ms65: 1800, notes: "Lower mintage" },
  { year: "1900", mint: "P", g: 28, vg: 32, f: 38, vf: 48, xf: 65, au: 85, ms60: 100, ms65: 300, notes: "Common" },
  { year: "1901", mint: "P", g: 50, vg: 70, f: 150, vf: 500, xf: 2500, au: 6500, ms60: 15000, ms65: 175000, notes: "Key in high grade" },
  { year: "1902", mint: "P", g: 28, vg: 35, f: 48, vf: 75, xf: 150, au: 280, ms60: 480, ms65: 3500, notes: "Semi-key" },
  { year: "1903", mint: "P", g: 50, vg: 55, f: 65, vf: 80, xf: 110, au: 150, ms60: 210, ms65: 700, notes: "Lower mintage" },
  { year: "1904", mint: "P", g: 28, vg: 35, f: 48, vf: 75, xf: 180, au: 380, ms60: 700, ms65: 5500, notes: "Semi-key" },
  { year: "1921", mint: "P", g: 25, vg: 28, f: 30, vf: 35, xf: 42, au: 55, ms60: 70, ms65: 200, notes: "Very common, last year" },
  { year: "1921", mint: "D", g: 25, vg: 28, f: 30, vf: 35, xf: 45, au: 60, ms60: 80, ms65: 350, notes: "Only Denver Morgans" },
  { year: "1921", mint: "S", g: 25, vg: 28, f: 30, vf: 35, xf: 42, au: 55, ms60: 75, ms65: 800, notes: "Common" },
];

const keyDates = [
  { year: "1893-S", mintage: "100,000", value: "$5,000-500,000+", why: "The 'King of Morgans' - lowest mintage of regular strikes" },
  { year: "1889-CC", mintage: "350,000", value: "$800-250,000+", why: "Low mintage combined with heavy circulation loss" },
  { year: "1879-CC", mintage: "756,000", value: "$350-45,000+", why: "First 'Capped Die' CC, most heavily circulated" },
  { year: "1893-CC", mintage: "677,000", value: "$700-120,000+", why: "Last Carson City Morgan, always in demand" },
  { year: "1895-P", mintage: "880 (proof)", value: "$50,000-180,000+", why: "Proof only - no business strikes exist" },
  { year: "1893-O", mintage: "300,000", value: "$300-90,000+", why: "Second-lowest mintage after 1893-S" },
  { year: "1884-S", mintage: "3,200,000", value: "$35-85,000+", why: "Most survivors heavily circulated, rare in MS" },
  { year: "1901-P", mintage: "6,962,000", value: "$50-175,000+", why: "Common in low grades, extremely rare in MS-65+" },
];

export default function MorganDollarValuePage() {
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
              6,800 MONTHLY SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Morgan Silver Dollar Value Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              The Morgan dollar is America&apos;s most collected silver coin. Minted from 1878-1921,
              these coins contain 0.7734 oz of pure silver. But here&apos;s what coin dealers won&apos;t tell you:
              <span className="text-amber-400 font-semibold"> common dates are often worth
              only a small premium over melt value</span>, while key dates can fetch six figures.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Coins className="h-4 w-4 text-slate-400" />
                0.7734 oz Silver
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <History className="h-4 w-4 text-slate-400" />
                1878-1921
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <TrendingUp className="h-4 w-4 text-green-400" />
                ~$19 Melt Value
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Dates Alert */}
      <section className="py-8 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Before You Sell: Check for Key Dates
                  </h2>
                  <p className="text-slate-300">
                    Banks and pawn shops often buy Morgan dollars at melt value, regardless of date.
                    An 1893-S in your collection could be worth <span className="text-amber-400 font-semibold">$5,000 to $500,000+</span> depending on condition.
                    Always verify your dates and mint marks before selling.
                  </p>
                </div>
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
              Morgan Dollar Value by Year and Condition
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Values in USD. Melt value provides the floor for common dates.
              Key dates and high-grade specimens command significant premiums.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="text-left p-3 text-white font-bold">Year</th>
                    <th className="text-center p-3 text-white font-bold">Mint</th>
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
                    <tr key={index} className={row.notes.includes("Key") || row.notes.includes("rarest") ? "bg-amber-500/10" : ""}>
                      <td className="p-3 text-white font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-400">{row.mint}</td>
                      <td className="p-3 text-center text-slate-300">{row.g ? `$${row.g}` : "-"}</td>
                      <td className="p-3 text-center text-slate-300">{row.vg ? `$${row.vg}` : "-"}</td>
                      <td className="p-3 text-center text-slate-300">{row.f ? `$${row.f}` : "-"}</td>
                      <td className="p-3 text-center text-slate-300">{row.vf ? `$${row.vf}` : "-"}</td>
                      <td className="p-3 text-center text-slate-300">{row.xf ? `$${row.xf}` : "-"}</td>
                      <td className="p-3 text-center text-slate-300">{row.au ? `$${row.au}` : "-"}</td>
                      <td className="p-3 text-center text-green-400">{row.ms60 ? `$${row.ms60.toLocaleString()}` : "-"}</td>
                      <td className="p-3 text-center text-amber-400 font-semibold">{row.ms65 ? `$${row.ms65.toLocaleString()}` : "-"}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Values are approximate and fluctuate with market conditions. For valuable coins, professional grading is recommended.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Dates Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Morgan Dollar Key Dates
            </h2>
            <div className="grid gap-4">
              {keyDates.map((coin, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-5"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <h3 className="text-xl font-bold text-amber-400">{coin.year}</h3>
                      <p className="text-sm text-slate-400">Mintage: {coin.mintage}</p>
                    </div>
                    <div className="md:w-1/4">
                      <p className="text-lg font-semibold text-green-400">{coin.value}</p>
                    </div>
                    <div className="md:w-1/2">
                      <p className="text-slate-300">{coin.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Grading Guide */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How to Grade Morgan Dollars
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-400" />
                  Key Areas to Examine
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Hair Above Ear:</span> First area to show wear. Look for fine lines and detail.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Cheek of Liberty:</span> Develops bag marks and contact marks from storage.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Eagle&apos;s Breast:</span> Feathers flatten with circulation. Check for full detail.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Luster:</span> Original mint luster should be unbroken on uncirculated coins.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  Grading Red Flags
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-red-400 font-bold">X</span>
                    <div>
                      <span className="font-semibold text-white">Cleaning:</span> Hairlines, unnatural shine, or dull surfaces indicate cleaning. Reduces value 50-90%.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-red-400 font-bold">X</span>
                    <div>
                      <span className="font-semibold text-white">Whizzing:</span> Wire brushing to simulate luster. Look for directional lines under magnification.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-red-400 font-bold">X</span>
                    <div>
                      <span className="font-semibold text-white">Tooling:</span> Added or enhanced details. Common on key dates - always buy PCGS/NGC certified.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-red-400 font-bold">X</span>
                    <div>
                      <span className="font-semibold text-white">Counterfeits:</span> Chinese fakes are common. Weight (26.73g) and sound test help identify.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mint Marks */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Morgan Dollar Mint Marks
            </h2>
            <p className="text-slate-400 text-center mb-8">
              Mint marks appear on the reverse, below the wreath and above the &quot;D&quot; in DOLLAR.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">P</div>
                <h3 className="font-bold text-slate-300 mb-1">Philadelphia</h3>
                <p className="text-sm text-slate-400">No mint mark. Highest total mintage.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">CC</div>
                <h3 className="font-bold text-slate-300 mb-1">Carson City</h3>
                <p className="text-sm text-slate-400">Most valuable. Minted 1878-1893.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">O</div>
                <h3 className="font-bold text-slate-300 mb-1">New Orleans</h3>
                <p className="text-sm text-slate-400">Often weakly struck. Many survivors.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">S</div>
                <h3 className="font-bold text-slate-300 mb-1">San Francisco</h3>
                <p className="text-sm text-slate-400">Known for sharp strikes and luster.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center lg:col-start-2">
                <div className="text-3xl font-bold text-white mb-2">D</div>
                <h3 className="font-bold text-slate-300 mb-1">Denver</h3>
                <p className="text-sm text-slate-400">1921 only. Very common.</p>
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
                href="/silver-coin-values/peace-dollar"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Peace Dollar Values</h3>
                <p className="text-sm text-slate-400">1921-1935 Peace dollars</p>
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
            headline="Own Silver in Your Retirement Account"
            subheadline="Morgan dollars are beautiful collectors' items, but they're not IRA-eligible due to their 90% purity. Augusta Precious Metals can help you add .999 fine silver bullion to a tax-advantaged IRA. Learn how real money protects retirement."
            linkContext="silver"
            trackSource="morgan-dollar-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
