// src/app/compare/page.tsx
// P1-031: Comparison hub page with all company comparisons

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllCompanies } from "@/data/companies";
import { ComparisonBuilder } from "@/components/compare/ComparisonBuilder";
import { assets } from "@/data/assets";
import { Scale, ArrowRight, Star, Award, TrendingUp, BarChart3 } from "lucide-react";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

export const metadata: Metadata = {
  title: "Gold IRA Company Comparisons 2026 | Side-by-Side Analysis",
  description: "Compare Gold IRA companies side-by-side. See fees, minimums, ratings, and pros/cons to find the best Gold IRA for your retirement.",
  openGraph: {
    title: "Gold IRA Company Comparisons 2026 | Side-by-Side Analysis",
    description: "Compare Gold IRA companies side-by-side. See fees, minimums, ratings, and pros/cons.",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

// Generate ALL comparison pairs from companies (210 pairs for 15 companies - both directions)
function generateAllComparisonPairs() {
  const companies = getAllCompanies();
  const pairs: { slugA: string; slugB: string; nameA: string; nameB: string; highlight?: string }[] = [];

  // Generate all unique pairs in BOTH directions for complete internal linking
  // This ensures every comparison page has at least one incoming link from the hub
  for (let i = 0; i < companies.length; i++) {
    for (let j = i + 1; j < companies.length; j++) {
      const companyA = companies[i];
      const companyB = companies[j];
      // A vs B direction
      pairs.push({
        slugA: companyA.slug,
        slugB: companyB.slug,
        nameA: companyA.name,
        nameB: companyB.name,
        highlight: companyA.featured ? "vs #1 Pick" : companyB.featured ? "vs #1 Pick" : undefined,
      });
      // B vs A direction (reverse)
      pairs.push({
        slugA: companyB.slug,
        slugB: companyA.slug,
        nameA: companyB.name,
        nameB: companyA.name,
        highlight: companyB.featured ? "vs #1 Pick" : companyA.featured ? "vs #1 Pick" : undefined,
      });
    }
  }

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
    slug: "gold-ira-vs-crypto",
    title: "Gold IRA vs Crypto",
    description: "Traditional precious metals vs digital assets",
  },
  {
    slug: "gold-vs-silver-ira",
    title: "Gold vs Silver IRA",
    description: "Compare precious metals for your IRA",
  },
];

// Featured company comparisons (static pages with in-depth analysis)
const featuredCompanyComparisons = [
  {
    slug: "goldco-vs-augusta",
    title: "Goldco vs Augusta",
    description: "In-depth comparison of two industry leaders",
    highlight: "Popular",
  },
  {
    slug: "augusta-vs-goldco",
    title: "Augusta vs Goldco",
    description: "Our #1 pick compared to the most recognized name",
    highlight: "#1 Pick",
  },
  {
    slug: "augusta-vs-noble-gold",
    title: "Augusta vs Noble Gold",
    description: "Premium service vs product variety",
  },
  {
    slug: "goldco-vs-american-hartford-gold",
    title: "Goldco vs American Hartford",
    description: "Experience vs promotional offers",
  },
  {
    slug: "goldco-vs-lear-capital",
    title: "Goldco vs Lear Capital",
    description: "Modern vs established approaches",
  },
  {
    slug: "lear-capital-vs-noble-gold",
    title: "Lear Capital vs Noble Gold",
    description: "Industry veteran vs innovative newcomer",
  },
  {
    slug: "american-hartford-vs-oxford-gold",
    title: "American Hartford vs Oxford Gold",
    description: "Compare two rising Gold IRA companies",
  },
  {
    slug: "noble-gold-vs-birch-gold",
    title: "Noble Gold vs Birch Gold",
    description: "Product selection vs rollover specialists",
  },
];

export default function ComparePage() {
  const companyPairs = generateAllComparisonPairs();
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

      {/* Featured Comparisons - In-Depth Analyses */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
              <Award className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Comparisons</h2>
              <p className="text-slate-500">Our most in-depth head-to-head analyses</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCompanyComparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/10 transition-all"
              >
                {comparison.highlight && (
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                    {comparison.highlight}
                  </div>
                )}
                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {comparison.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{comparison.description}</p>
                <span className="text-amber-400 text-sm font-semibold flex items-center gap-1">
                  Read Analysis
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Company vs Company Comparisons */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">All Company Comparisons</h2>
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

      {/* Gold vs Other Assets */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
              <BarChart3 className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Gold vs Other Assets</h2>
              <p className="text-slate-500">See how physical gold compares to stocks, crypto, bonds, and more</p>
            </div>
          </div>

          {/* Stocks */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Major Stocks</h3>
            <p className="text-sm text-slate-500 mb-4">How gold stacks up against individual stocks</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {assets.filter(a => a.category === "stock").map((asset) => (
                <Link
                  key={asset.slug}
                  href={`/compare/gold-vs/${asset.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="text-xs text-slate-500 mb-1">{asset.ticker}</div>
                  <div className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm">
                    Gold vs {asset.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Market Indices */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Market Indices</h3>
            <p className="text-sm text-slate-500 mb-4">Gold vs major stock market benchmarks</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {assets.filter(a => a.category === "index").map((asset) => (
                <Link
                  key={asset.slug}
                  href={`/compare/gold-vs/${asset.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="text-xs text-slate-500 mb-1">{asset.ticker}</div>
                  <div className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm">
                    Gold vs {asset.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Crypto */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Cryptocurrencies</h3>
            <p className="text-sm text-slate-500 mb-4">Physical gold vs digital assets</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {assets.filter(a => a.category === "crypto").map((asset) => (
                <Link
                  key={asset.slug}
                  href={`/compare/gold-vs/${asset.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="text-xs text-slate-500 mb-1">{asset.ticker}</div>
                  <div className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm">
                    Gold vs {asset.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Commodities & Other */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Commodities, Currencies & Other</h3>
            <p className="text-sm text-slate-500 mb-4">Gold compared to other asset classes</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {assets.filter(a => ["commodity", "currency", "other"].includes(a.category)).map((asset) => (
                <Link
                  key={asset.slug}
                  href={`/compare/gold-vs/${asset.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="text-xs text-slate-500 mb-1">{asset.ticker}</div>
                  <div className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm">
                    Gold vs {asset.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Investment Type Comparisons */}
      <section className="py-16">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-700 rounded-lg border border-white/10">
              <Scale className="h-5 w-5 text-slate-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Account Type Comparisons</h2>
              <p className="text-slate-500">Compare Gold IRAs with other retirement account options</p>
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

      {/* Augusta CTA */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Start Comparing?"
            subheadline="Get your free Gold IRA guide and see why Augusta is rated #1 for transparency."
            trackSource="compare-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
