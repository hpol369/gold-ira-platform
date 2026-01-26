// src/app/compare/page.tsx
// P1-031: Comparison hub page with all company comparisons

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllCompanies, getFeaturedCompany } from "@/data/companies";
import { ComparisonBuilder } from "@/components/compare/ComparisonBuilder";
import { Scale, ArrowRight, Star, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Gold IRA Company Comparisons 2026 | Side-by-Side Analysis",
  description: "Compare Gold IRA companies side-by-side. See fees, minimums, ratings, and pros/cons to find the best Gold IRA for your retirement.",
  openGraph: {
    title: "Gold IRA Company Comparisons 2026 | Side-by-Side Analysis",
    description: "Compare Gold IRA companies side-by-side. See fees, minimums, ratings, and pros/cons.",
    type: "website",
  },
};

// Generate comparison pairs from top companies
function generateComparisonPairs() {
  const companies = getAllCompanies();
  const featured = getFeaturedCompany();
  const pairs: { slugA: string; slugB: string; nameA: string; nameB: string; highlight?: string }[] = [];

  // Featured company vs top competitors
  const topCompetitors = companies.filter(c => !c.featured).slice(0, 5);
  topCompetitors.forEach(competitor => {
    pairs.push({
      slugA: featured.slug,
      slugB: competitor.slug,
      nameA: featured.name,
      nameB: competitor.name,
      highlight: "vs #1 Pick",
    });
  });

  // Other popular comparisons
  const popularPairs = [
    ["goldco", "american-hartford-gold"],
    ["noble-gold", "birch-gold"],
    ["goldco", "lear-capital"],
    ["birch-gold", "american-hartford-gold"],
    ["noble-gold", "orion-metal-exchange"],
  ];

  popularPairs.forEach(([slugA, slugB]) => {
    const companyA = companies.find(c => c.slug === slugA);
    const companyB = companies.find(c => c.slug === slugB);
    if (companyA && companyB && !pairs.some(p =>
      (p.slugA === slugA && p.slugB === slugB) ||
      (p.slugA === slugB && p.slugB === slugA)
    )) {
      pairs.push({
        slugA,
        slugB,
        nameA: companyA.name,
        nameB: companyB.name,
      });
    }
  });

  return pairs;
}

// Investment type comparisons
const investmentComparisons = [
  {
    slug: "gold-ira-vs-401k",
    title: "Gold IRA vs 401(k)",
    description: "Compare retirement account options and tax implications",
  },
  {
    slug: "gold-ira-vs-traditional-ira",
    title: "Gold IRA vs Traditional IRA",
    description: "Understand the differences in asset types and rules",
  },
  {
    slug: "gold-ira-vs-roth-ira",
    title: "Gold IRA vs Roth IRA",
    description: "Tax-deferred vs tax-free growth comparison",
  },
  {
    slug: "gold-ira-vs-physical-gold",
    title: "Gold IRA vs Physical Gold",
    description: "IRA-held vs home storage gold comparison",
  },
  {
    slug: "gold-ira-vs-gold-etf",
    title: "Gold IRA vs Gold ETF",
    description: "Physical gold vs paper gold investments",
  },
  {
    slug: "gold-vs-silver-ira",
    title: "Gold vs Silver IRA",
    description: "Compare precious metals for your IRA",
  },
];

export default function ComparePage() {
  const companyPairs = generateComparisonPairs();
  const companies = getAllCompanies();

  return (
    <main className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <Scale className="h-4 w-4" />
              Side-by-Side Analysis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gold IRA Company Comparisons
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-4">
              Choosing the right company for your life&apos;s savings isn&apos;t easy. You&apos;ve worked 30+ years to build what you have&mdash;you deserve a straight answer, not a sales pitch.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              For someone with $500k saved over 30 years, the difference between companies isn&apos;t just fees&mdash;it&apos;s whether they&apos;ll be there when you need them. We focus on what matters: BBB complaints, customer service track records, and how they treat people like you.
            </p>
          </div>
        </Container>
      </header>

      {/* Company vs Company Comparisons */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Company Comparisons</h2>
              <p className="text-slate-500">We look at trust, complaints, and service&mdash;not just marketing claims</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyPairs.map((pair, index) => (
              <Link
                key={`${pair.slugA}-${pair.slugB}`}
                href={`/compare/${pair.slugA}-vs-${pair.slugB}`}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/10 transition-all"
              >
                {pair.highlight && (
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                    {pair.highlight}
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {pair.nameA}
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-slate-700 rounded-full text-xs font-bold text-slate-400">
                    VS
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {pair.nameB}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center text-amber-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  Compare Now
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Build Your Own Comparison */}
          <ComparisonBuilder companies={companies} />
        </Container>
      </section>

      {/* Investment Type Comparisons */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-700 rounded-lg border border-white/10">
              <Scale className="h-5 w-5 text-slate-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Investment Comparisons</h2>
              <p className="text-slate-500">Compare Gold IRAs with other investment options</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {investmentComparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {comparison.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{comparison.description}</p>
                <span className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                  Read Comparison
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-4">Quick Company Overview</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            When you&apos;re trusting a company with decades of savings, ratings and BBB grades tell you how they treat customers when things go wrong. Here&apos;s how the top companies stack up.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <thead>
                <tr className="bg-slate-800/80">
                  <th className="p-4 text-left font-semibold text-slate-400">Company</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Rating</th>
                  <th className="p-4 text-center font-semibold text-slate-400">BBB</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Minimum</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Annual Fee</th>
                  <th className="p-4 text-center font-semibold text-slate-400"></th>
                </tr>
              </thead>
              <tbody>
                {companies.slice(0, 10).map((company, index) => (
                  <tr key={company.slug} className="border-t border-white/5 hover:bg-white/5">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? "bg-amber-500 text-slate-900" : "bg-slate-700 text-slate-400"
                        }`}>
                          {index + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-white flex items-center gap-2">
                            {company.name}
                            {company.featured && <Award className="h-4 w-4 text-amber-400" />}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="font-bold text-white">{company.rating}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-semibold text-slate-300">{company.bbbRating}</td>
                    <td className="p-4 text-center text-slate-400">${company.minInvestment.toLocaleString()}</td>
                    <td className="p-4 text-center text-slate-400">${company.fees.annual}</td>
                    <td className="p-4 text-center">
                      <Link
                        href={`/reviews/${company.slug}`}
                        className="text-amber-400 text-sm font-semibold hover:text-amber-300"
                      >
                        Review &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/reviews"
              className="text-amber-400 font-semibold hover:text-amber-300"
            >
              View All {companies.length} Company Reviews &rarr;
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
