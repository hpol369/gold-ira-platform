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
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <Scale className="h-4 w-4" />
              Side-by-Side Analysis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gold IRA Company Comparisons
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Can&apos;t decide between two companies? Our detailed comparisons break down fees, minimums, ratings, and service quality to help you make the right choice.
            </p>
          </div>
        </Container>
      </header>

      {/* Company vs Company Comparisons */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Company Comparisons</h2>
              <p className="text-slate-500">Head-to-head matchups of top Gold IRA providers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyPairs.map((pair, index) => (
              <Link
                key={`${pair.slugA}-${pair.slugB}`}
                href={`/compare/${pair.slugA}-vs-${pair.slugB}`}
                className="group relative bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                {pair.highlight && (
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {pair.highlight}
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {pair.nameA}
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500">
                    VS
                  </div>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {pair.nameB}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center text-amber-600 text-sm font-semibold group-hover:gap-2 transition-all">
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
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-200 rounded-lg">
              <Scale className="h-5 w-5 text-slate-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Investment Comparisons</h2>
              <p className="text-slate-500">Compare Gold IRAs with other investment options</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {investmentComparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {comparison.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{comparison.description}</p>
                <span className="text-amber-600 text-sm font-semibold flex items-center gap-1">
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Quick Company Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-slate-200">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 text-left font-semibold text-slate-700">Company</th>
                  <th className="p-4 text-center font-semibold text-slate-700">Rating</th>
                  <th className="p-4 text-center font-semibold text-slate-700">BBB</th>
                  <th className="p-4 text-center font-semibold text-slate-700">Minimum</th>
                  <th className="p-4 text-center font-semibold text-slate-700">Annual Fee</th>
                  <th className="p-4 text-center font-semibold text-slate-700"></th>
                </tr>
              </thead>
              <tbody>
                {companies.slice(0, 10).map((company, index) => (
                  <tr key={company.slug} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-600"
                        }`}>
                          {index + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-slate-900 flex items-center gap-2">
                            {company.name}
                            {company.featured && <Award className="h-4 w-4 text-amber-500" />}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-amber-500 fill-current" />
                        <span className="font-bold">{company.rating}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-semibold">{company.bbbRating}</td>
                    <td className="p-4 text-center">${company.minInvestment.toLocaleString()}</td>
                    <td className="p-4 text-center">${company.fees.annual}</td>
                    <td className="p-4 text-center">
                      <Link
                        href={`/reviews/${company.slug}`}
                        className="text-amber-600 text-sm font-semibold hover:text-amber-700"
                      >
                        Review →
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
              className="text-amber-600 font-semibold hover:text-amber-700"
            >
              View All {companies.length} Company Reviews →
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
