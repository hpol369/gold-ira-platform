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
} from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are silver dimes worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver dimes (pre-1965) are worth at minimum their melt value of approximately $1.80 based on 0.0723 oz of silver content. Common circulated Roosevelt and Mercury dimes typically sell for $1.90-2.50. Key date Mercury dimes like the 1916-D can be worth $1,000+ even in lower grades, while Barber dimes range from $3-5 for common dates up to several thousand for key dates."
      }
    },
    {
      "@type": "Question",
      "name": "What years are dimes silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "US dimes contain 90% silver from 1892-1964. This includes Barber dimes (1892-1916), Mercury/Winged Liberty dimes (1916-1945), and Roosevelt dimes (1946-1964). Starting in 1965, dimes were changed to copper-nickel clad with no silver content. Special collector proof sets from 1992-present contain 90% silver Roosevelt dimes."
      }
    },
    {
      "@type": "Question",
      "name": "Which silver dimes are most valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most valuable silver dimes include: 1916-D Mercury dime ($1,000-50,000+), 1894-S Barber dime ($500,000-2,000,000+, only 24 minted), 1895-O Barber ($50-5,000+), 1921 Mercury ($60-3,000+), 1921-D Mercury ($75-5,000+), and 1942/1 Mercury overdate ($400-20,000+). Full Band Mercury dimes (FB) in MS grades command significant premiums."
      }
    },
    {
      "@type": "Question",
      "name": "How can I tell if a dime is silver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The easiest way to identify a silver dime is by the date - 1964 or earlier means silver. You can also check the edge: silver dimes have a solid gray/silver edge, while clad dimes show a copper stripe. Silver dimes also have a distinct 'ring' when dropped on a hard surface, versus the dull sound of clad coins."
      }
    },
    {
      "@type": "Question",
      "name": "Are Roosevelt dimes worth anything?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roosevelt dimes from 1946-1964 contain 90% silver and are worth at least their melt value (~$1.80). Most circulated specimens sell for $1.90-2.50. Key dates include 1949-S, 1950-S, and 1951-S which can be worth $5-20+ in circulated grades. Uncirculated Roosevelt dimes start around $3-5 for common dates."
      }
    }
  ]
};

const mercuryDimeValues = [
  { year: "1916", mint: "P", g: 4, vg: 6, f: 10, vf: 18, xf: 35, au: 60, ms60: 80, ms65: 200, notes: "First year" },
  { year: "1916-D", mint: "D", g: 1000, vg: 1500, f: 2500, vf: 4500, xf: 8000, au: 12000, ms60: 18000, ms65: 50000, notes: "Key date" },
  { year: "1916-S", mint: "S", g: 5, vg: 8, f: 12, vf: 22, xf: 50, au: 90, ms60: 140, ms65: 350, notes: "Semi-key" },
  { year: "1917-S", mint: "S", g: 3, vg: 4, f: 8, vf: 25, xf: 80, au: 180, ms60: 300, ms65: 1400, notes: "Scarce MS" },
  { year: "1918-S", mint: "S", g: 3, vg: 4, f: 6, vf: 20, xf: 70, au: 180, ms60: 400, ms65: 2200, notes: "Scarce MS" },
  { year: "1919-D", mint: "D", g: 3, vg: 5, f: 12, vf: 50, xf: 140, au: 300, ms60: 500, ms65: 2500, notes: "Low mintage" },
  { year: "1919-S", mint: "S", g: 3, vg: 5, f: 10, vf: 40, xf: 120, au: 280, ms60: 500, ms65: 3000, notes: "Scarce" },
  { year: "1921", mint: "P", g: 60, vg: 100, f: 180, vf: 400, xf: 800, au: 1200, ms60: 1800, ms65: 5500, notes: "Key date" },
  { year: "1921-D", mint: "D", g: 80, vg: 150, f: 280, vf: 600, xf: 1200, au: 1800, ms60: 2800, ms65: 8000, notes: "Key date" },
  { year: "1926-S", mint: "S", g: 8, vg: 15, f: 50, vf: 200, xf: 600, au: 1500, ms60: 3500, ms65: 18000, notes: "Semi-key" },
  { year: "1931-D", mint: "D", g: 12, vg: 20, f: 35, vf: 70, xf: 140, au: 220, ms60: 350, ms65: 900, notes: "Low mintage" },
  { year: "1931-S", mint: "S", g: 6, vg: 10, f: 18, vf: 40, xf: 90, au: 160, ms60: 280, ms65: 650, notes: "Depression era" },
  { year: "1942/1", mint: "P", g: 400, vg: 500, f: 700, vf: 1000, xf: 1800, au: 3000, ms60: 5000, ms65: 18000, notes: "Overdate error" },
  { year: "1942/1-D", mint: "D", g: 450, vg: 550, f: 800, vf: 1200, xf: 2200, au: 4000, ms60: 7000, ms65: 25000, notes: "Overdate error" },
  { year: "Common Date", mint: "Any", g: 2, vg: 2, f: 2.5, vf: 3, xf: 5, au: 10, ms60: 20, ms65: 50, notes: "Most dates" },
];

const rooseveltDimeValues = [
  { year: "1946", mint: "P", g: 2, vg: 2, f: 2, vf: 2.5, xf: 3, au: 5, ms60: 8, ms65: 25, notes: "First year" },
  { year: "1946-D", mint: "D", g: 2, vg: 2, f: 2, vf: 2.5, xf: 3, au: 5, ms60: 8, ms65: 25, notes: "Common" },
  { year: "1946-S", mint: "S", g: 2, vg: 2, f: 2, vf: 2.5, xf: 3, au: 5, ms60: 8, ms65: 25, notes: "Common" },
  { year: "1949", mint: "P", g: 2, vg: 2.5, f: 3, vf: 4, xf: 8, au: 15, ms60: 25, ms65: 55, notes: "Scarcer" },
  { year: "1949-S", mint: "S", g: 3, vg: 4, f: 6, vf: 10, xf: 18, au: 35, ms60: 55, ms65: 110, notes: "Semi-key" },
  { year: "1950-S", mint: "S", g: 2.5, vg: 3, f: 4, vf: 7, xf: 12, au: 22, ms60: 35, ms65: 65, notes: "Lower mintage" },
  { year: "1951-S", mint: "S", g: 2.5, vg: 3, f: 4, vf: 6, xf: 10, au: 18, ms60: 30, ms65: 55, notes: "Lower mintage" },
  { year: "1952-S", mint: "S", g: 2, vg: 2.5, f: 3, vf: 5, xf: 8, au: 15, ms60: 25, ms65: 50, notes: "Scarcer" },
  { year: "1955-D", mint: "D", g: 2, vg: 2, f: 2, vf: 2.5, xf: 3, au: 5, ms60: 12, ms65: 40, notes: "Common" },
  { year: "1964", mint: "P", g: 2, vg: 2, f: 2, vf: 2, xf: 2.5, au: 3, ms60: 5, ms65: 18, notes: "Last silver" },
  { year: "1964-D", mint: "D", g: 2, vg: 2, f: 2, vf: 2, xf: 2.5, au: 3, ms60: 5, ms65: 18, notes: "Last silver" },
];

const barberDimeValues = [
  { year: "1892", mint: "P", g: 4, vg: 8, f: 18, vf: 35, xf: 60, au: 100, ms60: 150, ms65: 400, notes: "First year" },
  { year: "1893-O", mint: "O", g: 20, vg: 50, f: 100, vf: 180, xf: 280, au: 380, ms60: 550, ms65: 1800, notes: "Scarce" },
  { year: "1894-S", mint: "S", g: 500000, vg: 750000, f: 1000000, vf: 1500000, xf: 1800000, au: 2000000, ms60: 2200000, ms65: 2500000, notes: "Legendary rarity" },
  { year: "1895-O", mint: "O", g: 50, vg: 150, f: 350, vf: 700, xf: 1200, au: 2000, ms60: 3500, ms65: 10000, notes: "Key date" },
  { year: "1896-S", mint: "S", g: 25, vg: 80, f: 180, vf: 300, xf: 450, au: 650, ms60: 1000, ms65: 3000, notes: "Semi-key" },
  { year: "1901-S", mint: "S", g: 80, vg: 200, f: 400, vf: 700, xf: 1100, au: 1600, ms60: 2200, ms65: 6000, notes: "Key date" },
  { year: "1903-S", mint: "S", g: 60, vg: 150, f: 350, vf: 550, xf: 800, au: 1100, ms60: 1600, ms65: 4500, notes: "Semi-key" },
  { year: "1904-S", mint: "S", g: 5, vg: 10, f: 40, vf: 100, xf: 200, au: 350, ms60: 550, ms65: 2000, notes: "Scarce MS" },
  { year: "Common Date", mint: "Any", g: 3, vg: 5, f: 12, vf: 25, xf: 50, au: 90, ms60: 140, ms65: 400, notes: "Most dates" },
];

export default function SilverDimesValuePage() {
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
              LOW COMPETITION - 1,000 SEARCHES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Silver Dimes Value Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Every dime dated 1964 or earlier contains 90% silver - worth far more than ten cents.
              From the elegant Mercury dime to common Roosevelt dimes, these small coins pack real purchasing power
              that <span className="text-amber-400 font-semibold">paper money can never match</span>.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Coins className="h-4 w-4 text-slate-400" />
                0.0723 oz Silver
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <History className="h-4 w-4 text-slate-400" />
                Pre-1965
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <TrendingUp className="h-4 w-4 text-green-400" />
                ~$1.80 Melt Value
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-slate-300">
                <Scale className="h-4 w-4 text-slate-400" />
                2.5 grams total
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Dime Types Overview */}
      <section className="py-12 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Three Types of Silver Dimes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Barber Dime</h3>
                <p className="text-slate-400 text-sm mb-3">1892-1916</p>
                <p className="text-slate-300 text-sm">
                  Liberty head design by Charles Barber. Known for quick wear and many rare dates.
                  The 1894-S is one of America&apos;s rarest coins.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Mercury Dime</h3>
                <p className="text-slate-400 text-sm mb-3">1916-1945</p>
                <p className="text-slate-300 text-sm">
                  Actually shows Liberty with a winged cap (not Mercury). Most collected silver dime series.
                  The 1916-D is the key date.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Roosevelt Dime</h3>
                <p className="text-slate-400 text-sm mb-3">1946-1964 (silver)</p>
                <p className="text-slate-300 text-sm">
                  Honors FDR, who died in 1945. Silver versions ended in 1964. Most common and affordable
                  way to stack silver dimes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mercury Dimes */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Mercury Dime Values (1916-1945)
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              The Mercury dime is the most collected silver dime series. &quot;Full Bands&quot; (FB) specimens
              showing complete horizontal bands on the fasces command significant premiums.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px] text-sm">
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
                  {mercuryDimeValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Key") || row.notes.includes("Overdate") ? "bg-amber-500/10" : ""}>
                      <td className="p-3 text-white font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-400">{row.mint}</td>
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
          </div>
        </Container>
      </section>

      {/* Roosevelt Dimes */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Roosevelt Dime Values (1946-1964)
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Roosevelt dimes offer the most affordable entry into silver dimes. Common dates
              trade near melt value, but S-mint issues from 1949-1955 carry premiums.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px] text-sm">
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
                  {rooseveltDimeValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Semi-key") ? "bg-amber-500/10" : ""}>
                      <td className="p-3 text-white font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-400">{row.mint}</td>
                      <td className="p-3 text-center text-slate-300">${row.g}</td>
                      <td className="p-3 text-center text-slate-300">${row.vg}</td>
                      <td className="p-3 text-center text-slate-300">${row.f}</td>
                      <td className="p-3 text-center text-slate-300">${row.vf}</td>
                      <td className="p-3 text-center text-slate-300">${row.xf}</td>
                      <td className="p-3 text-center text-slate-300">${row.au}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60}</td>
                      <td className="p-3 text-center text-amber-400 font-semibold">${row.ms65}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Barber Dimes */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Barber Dime Values (1892-1916)
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Barber dimes are scarcer than Mercury or Roosevelt dimes. Many dates are rare in
              high grades. The 1894-S with only 24 minted is a legendary rarity.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px] text-sm">
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
                  {barberDimeValues.map((row, index) => (
                    <tr key={index} className={row.notes.includes("Key") || row.notes.includes("Legendary") ? "bg-amber-500/10" : ""}>
                      <td className="p-3 text-white font-medium">{row.year}</td>
                      <td className="p-3 text-center text-slate-400">{row.mint}</td>
                      <td className="p-3 text-center text-slate-300">${row.g.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-300">${row.vg.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-300">${row.f.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-300">${row.vf.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-300">${row.xf.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-300">${row.au.toLocaleString()}</td>
                      <td className="p-3 text-center text-green-400">${row.ms60.toLocaleString()}</td>
                      <td className="p-3 text-center text-amber-400 font-semibold">${row.ms65.toLocaleString()}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Melt Value Explanation */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Understanding Silver Dime Melt Value
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Silver Content</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Weight:</span> 2.5 grams total
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Composition:</span> 90% silver, 10% copper
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Pure Silver:</span> 0.0723 troy ounces
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Face Value Multiplier:</span> $1.40 = $1 face value
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-4">Quick Math</h3>
                <p className="text-slate-300 mb-4">
                  At <span className="text-white font-semibold">$25/oz silver</span>:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>1 dime = $1.81 melt value</li>
                  <li>10 dimes ($1 face) = $18.08</li>
                  <li>100 dimes ($10 face) = $180.83</li>
                  <li>$1,000 face value = $18,083</li>
                </ul>
                <p className="text-sm text-slate-400 mt-4">
                  Most dealers buy at 95-100% of melt and sell at 105-115% of melt for common dates.
                </p>
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
                href="/silver-coin-values/silver-quarters"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">Silver Quarters</h3>
                <p className="text-sm text-slate-400">Pre-1965 quarter values</p>
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
            headline="Small Coins, Big Protection"
            subheadline="Silver dimes have preserved purchasing power for over a century while the dollar has lost 95% of its value. Ready to protect your retirement with real assets? Augusta Precious Metals can help you add IRA-eligible silver to your portfolio."
            linkContext="silver"
            trackSource="silver-dimes-value"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
