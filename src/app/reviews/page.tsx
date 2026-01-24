// src/app/reviews/page.tsx
// P1-025: Reviews hub page with company rankings

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Star, ArrowRight, Shield, CheckCircle2, AlertTriangle, FileSearch, Award, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import { getAllCompanies, getFeaturedCompany } from "@/data/companies";

export const metadata: Metadata = {
  title: "Gold IRA Company Reviews 2026: Honest Ratings & Analysis",
  description: "Compare the top Gold IRA companies with our unbiased reviews. We analyze fees, BBB ratings, customer complaints, and minimum investments to help you choose.",
  openGraph: {
    title: "Gold IRA Company Reviews 2026: Honest Ratings & Analysis",
    description: "Compare the top Gold IRA companies with our unbiased reviews. We analyze fees, BBB ratings, customer complaints, and minimum investments.",
    type: "website",
  },
};

const investigationPages = [
  {
    slug: "regal-assets-lawsuit",
    title: "Regal Assets Lawsuit & Collapse",
    description: "What happened to one of the industry's most-recommended companies",
    type: "warning",
  },
  {
    slug: "goldco-lawsuit-facts",
    title: "Goldco Lawsuit Fact Check",
    description: "Separating facts from fiction on Goldco complaints",
    type: "investigation",
  },
  {
    slug: "augusta-precious-metals-lawsuit",
    title: "Augusta Precious Metals Lawsuit",
    description: "Examining claims and complaints against Augusta",
    type: "investigation",
  },
  {
    slug: "noble-gold-legit",
    title: "Is Noble Gold Legit?",
    description: "Investigation into Noble Gold's legitimacy and practices",
    type: "investigation",
  },
  {
    slug: "birch-gold-complaints",
    title: "Birch Gold Complaints Analysis",
    description: "Deep dive into BBB complaints and customer issues",
    type: "complaints",
  },
  {
    slug: "american-hartford-gold-complaints",
    title: "American Hartford Gold Complaints",
    description: "Review of customer complaints and company responses",
    type: "complaints",
  },
  {
    slug: "advantage-gold-complaints",
    title: "Advantage Gold Complaints Audit",
    description: "Analysis of customer feedback and issues",
    type: "complaints",
  },
  {
    slug: "lear-capital-complaints",
    title: "Lear Capital Complaints & History",
    description: "Lawsuit history and customer complaint patterns",
    type: "complaints",
  },
  {
    slug: "rosland-capital-lawsuit",
    title: "Rosland Capital Lawsuit History",
    description: "FTC settlement and class action lawsuit details",
    type: "warning",
  },
  {
    slug: "us-money-reserve-complaints",
    title: "US Money Reserve Complaints",
    description: "Analysis of customer issues and company practices",
    type: "complaints",
  },
];

export default function ReviewsPage() {
  const companies = getAllCompanies();
  const featuredCompany = getFeaturedCompany();

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
              <TrendingUp className="h-4 w-4" />
              Updated January 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gold IRA Company Reviews
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We&apos;ve analyzed fees, customer service, BBB ratings, and real customer complaints for every major Gold IRA company. No fluff—just the facts you need to make a smart decision.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>{companies.length} Companies Reviewed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>BBB Verified Ratings</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Star className="h-4 w-4 text-amber-400" />
                <span>Unbiased Analysis</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Featured Company Banner */}
      <section className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-b border-amber-500/20">
        <Container>
          <Link
            href={`/reviews/${featuredCompany.slug}`}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-amber-500 text-slate-900 px-3 py-1.5 rounded-full text-sm font-bold">
                <Award className="h-4 w-4" />
                #1 Pick
              </div>
              <div>
                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  {featuredCompany.name}
                </h2>
                <p className="text-sm text-slate-400">{featuredCompany.bestFor}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white">{featuredCompany.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-400">
                <Shield className="h-4 w-4 text-green-400" />
                {featuredCompany.bbbRating} BBB
              </div>
              <span className="text-amber-400 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Review
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <Link
                key={company.slug}
                href={`/reviews/${company.slug}`}
                className={`group bg-white/5 backdrop-blur-sm rounded-xl border p-6 hover:bg-white/10 transition-all ${
                  company.featured
                    ? "border-amber-500/30 hover:border-amber-500/50 ring-1 ring-amber-500/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Rank & Name */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      index === 0
                        ? "bg-amber-500 text-slate-900"
                        : index < 3
                        ? "bg-slate-600 text-slate-200"
                        : "bg-slate-700 text-slate-400"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className={`text-xl font-bold transition-colors whitespace-nowrap ${
                          company.featured
                            ? "text-amber-400 group-hover:text-amber-300"
                            : "text-white group-hover:text-slate-200"
                        }`}>
                          {company.name}
                        </h2>
                        {company.featured && (
                          <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full font-semibold border border-amber-500/30">
                            Editor&apos;s Choice
                          </span>
                        )}
                        {company.highlight && !company.featured && (
                          <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-full font-semibold">
                            {company.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">{company.bestFor}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className={`w-4 h-4 fill-current ${
                        company.rating >= 4.5 ? "text-amber-400" : "text-slate-500"
                      }`} />
                      <span className="font-bold text-white">{company.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-slate-400">{company.bbbRating} BBB</span>
                    </div>
                    <div className="text-slate-500 whitespace-nowrap">
                      ${company.minInvestment.toLocaleString()} min
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Quick Pros for top companies */}
                {index < 5 && (
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-3">
                    {company.pros.slice(0, 3).map((pro, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Investigation & Complaints Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-slate-400" />
              Investigations & Complaint Analysis
            </h2>
            <p className="text-slate-500 mb-6">Deep dives into lawsuits, BBB complaints, and company legitimacy.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {investigationPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/reviews/${page.slug}`}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      page.type === "warning" ? "bg-red-500/20" : "bg-amber-500/20"
                    }`}>
                      <AlertTriangle className={`w-4 h-4 ${
                        page.type === "warning" ? "text-red-400" : "text-amber-400"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-sm text-slate-500">{page.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* How We Review */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">How We Review Gold IRA Companies</h2>
            <p className="text-slate-400 mb-6">
              Every review is based on real research—not paid placements. Here&apos;s what we look at:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-white">BBB & Review Sites</strong>
                  <p className="text-sm text-slate-500">Official ratings and real customer complaints</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-white">Fee Transparency</strong>
                  <p className="text-sm text-slate-500">Setup, annual, and hidden costs analyzed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-white">Investment Minimums</strong>
                  <p className="text-sm text-slate-500">Who they&apos;re really designed for</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <strong className="text-white">Customer Experience</strong>
                  <p className="text-sm text-slate-500">Sales tactics, support, and education quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guide/gold-ira-fees" className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all">
                <span className="text-sm font-semibold text-white">Gold IRA Fees Guide &rarr;</span>
              </Link>
              <Link href="/learn/gold-ira-scams" className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all">
                <span className="text-sm font-semibold text-white">Scams to Avoid &rarr;</span>
              </Link>
              <Link href="/compare/gold-ira-vs-401k" className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all">
                <span className="text-sm font-semibold text-white">Gold IRA vs 401k &rarr;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
