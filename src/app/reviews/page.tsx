// src/app/reviews/page.tsx
// PATRIOT LIGHT THEME REFACTOR

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
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
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
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header - Patriot Hero Style */}
      <header className="bg-slate-50 border-b border-slate-200 py-16 md:py-20 relative overflow-hidden">
        {/* Navy/Red Wash */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#000080]/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4">
              <TrendingUp className="h-4 w-4" />
              Updated January 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-6 text-[#000080]">
              Gold IRA Company Reviews
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Picking the wrong Gold IRA company could cost you thousands in hidden fees. We dug through <strong className="text-[#000080]">BBB complaints</strong>, fee structures, and customer experiences.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>{companies.length} Companies Reviewed</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-700">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>BBB Verified Ratings</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-700">
                <Star className="h-4 w-4 text-amber-500" />
                <span>Unbiased Analysis</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Featured Company Banner - Patriot Navy/Gold */}
      <section className="bg-[#000080] text-white py-6 border-y border-blue-900">
        <Container>
          <Link
            href={`/reviews/${featuredCompany.slug}`}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-amber-400 text-[#000080] px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                <Award className="h-4 w-4" />
                #1 Pick
              </div>
              <div>
                <h2 className="text-xl font-bold text-white group-hover:text-amber-800 transition-colors whitespace-nowrap">
                  {featuredCompany.name}
                </h2>
                <p className="text-sm text-white/80">{featuredCompany.bestFor}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-700">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white">{featuredCompany.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-white/80">
                <Shield className="h-4 w-4 text-green-700" />
                {featuredCompany.bbbRating} BBB
              </div>
              <span className="text-amber-700 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Review
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <Link
                key={company.slug}
                href={`/reviews/${company.slug}`}
                className={`group bg-white rounded-xl border p-6 hover:shadow-lg transition-all ${company.featured
                    ? "border-amber-200 hover:border-amber-400 ring-4 ring-amber-50"
                    : "border-slate-200 hover:border-[#000080]/30"
                  }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Rank & Name */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${index === 0
                        ? "bg-[#000080] text-white"
                        : index < 3
                          ? "bg-slate-100 text-slate-600 border border-slate-200"
                          : "bg-slate-50 text-slate-400 border border-slate-200"
                      }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className={`text-xl font-bold transition-colors whitespace-nowrap ${company.featured
                            ? "text-[#000080] group-hover:text-blue-800"
                            : "text-slate-900 group-hover:text-[#000080]"
                          }`}>
                          {company.name}
                        </h2>
                        {company.featured && (
                          <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-bold border border-amber-200">
                            Editor&apos;s Choice
                          </span>
                        )}
                        {company.highlight && !company.featured && (
                          <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full font-semibold border border-slate-200">
                            {company.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 font-medium">{company.bestFor}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className={`w-4 h-4 fill-current ${company.rating >= 4.5 ? "text-amber-500" : "text-slate-300"
                        }`} />
                      <span className="font-bold text-slate-900">{company.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-slate-600">{company.bbbRating} BBB</span>
                    </div>
                    <div className="text-slate-600 whitespace-nowrap font-medium">
                      ${company.minInvestment.toLocaleString()} min
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#000080] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Quick Pros for top companies */}
                {index < 5 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                    {company.pros.slice(0, 3).map((pro, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
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
            <h2 className="text-2xl font-bold text-[#000080] mb-2 flex items-center gap-2 font-serif">
              <FileSearch className="w-6 h-6 text-[#000080]" />
              Investigations & Complaint Analysis
            </h2>
            <p className="text-slate-600 mb-6">Deep dives into lawsuits, BBB complaints, and company legitimacy.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {investigationPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/reviews/${page.slug}`}
                  className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-[#B22234] hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${page.type === "warning" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                      }`}>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#000080] group-hover:text-[#B22234] transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-sm text-slate-500">{page.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* How We Review (Patriot Card) */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-4">How We Actually Review These Companies</h2>
            <p className="text-slate-600 mb-6 font-medium">
              We look at what actually matters when you&apos;re trusting someone with your retirement savings:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong className="text-[#000080]">BBB Complaints</strong>
                  <p className="text-sm text-slate-500">What real customers actually complained about</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong className="text-[#000080]">Hidden Fees</strong>
                  <p className="text-sm text-slate-500">The charges they don&apos;t advertise up front</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong className="text-[#000080]">Minimum Investment</strong>
                  <p className="text-sm text-slate-500">Does it match what real people have to invest?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong className="text-[#000080]">Sales Pressure</strong>
                  <p className="text-sm text-slate-500">Do they educate, or do they push?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-lg font-bold text-[#000080] mb-4">Related Guides</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guide/gold-ira-fees" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#000080]/30 hover:shadow-sm transition-all">
                <span className="text-sm font-semibold text-[#000080]">Gold IRA Fees Guide &rarr;</span>
              </Link>
              <Link href="/learn/gold-ira-scams" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#000080]/30 hover:shadow-sm transition-all">
                <span className="text-sm font-semibold text-[#000080]">Scams to Avoid &rarr;</span>
              </Link>
              <Link href="/compare/gold-ira-vs-401k" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#000080]/30 hover:shadow-sm transition-all">
                <span className="text-sm font-semibold text-[#000080]">Gold IRA vs 401k &rarr;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
