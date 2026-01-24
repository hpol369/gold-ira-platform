// src/app/reviews/[company]/page.tsx
// P1-026: Dynamic company review page template

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { CompanyHero } from "@/components/reviews/CompanyHero";
import { ProsConsList } from "@/components/reviews/ProsConsList";
import { FeesTable, SingleCompanyFees } from "@/components/reviews/FeesTable";
import { VerdictSection } from "@/components/reviews/VerdictSection";
import { BestForSection } from "@/components/reviews/BestForSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  getCompanyBySlug,
  getCompanySlugs,
  getFeaturedCompany,
  getTopCompanies,
  Company,
} from "@/data/companies";
import { Award, BookOpen, Clock, DollarSign, Shield, Users, Building2, Scale } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ company: string }>;
}

// P1-027: Generate static params for all companies
export async function generateStaticParams() {
  const slugs = getCompanySlugs();
  return slugs.map((company) => ({ company }));
}

// P1-028: Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company: slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    return {
      title: "Company Not Found | Gold IRA Reviews",
    };
  }

  const title = `${company.name} Review 2026: Fees, Complaints & Analysis`;
  const description = `Honest ${company.name} review. We analyze their $${company.minInvestment.toLocaleString()} minimum, ${company.bbbRating} BBB rating, fees, and real customer complaints. See if they're right for you.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// P1-029: JSON-LD structured data
function generateJsonLd(company: Company) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "FinancialService",
      name: company.name,
      description: company.description,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: company.rating,
        bestRating: 5,
        worstRating: 1,
        reviewCount: company.reviewCount,
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: company.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Organization",
      name: "Rich Dad Retirement",
    },
    publisher: {
      "@type": "Organization",
      name: "Rich Dad Retirement",
    },
  };
}

export default async function CompanyReviewPage({ params }: Props) {
  const { company: slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  const jsonLd = generateJsonLd(company);
  const topCompanies = getTopCompanies(5).filter((c) => c.slug !== company.slug);
  const yearsInBusiness = new Date().getFullYear() - company.founded;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-slate-900">
        <Navbar />

        {/* Hero Section */}
        <CompanyHero company={company} />

        {/* Main Content */}
        <section className="py-12">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Article */}
              <article className="lg:col-span-2 space-y-12">
                {/* Table of Contents */}
                <nav className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h2 className="font-bold text-white mb-4">In This Review</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <a href="#overview" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                      <BookOpen className="h-4 w-4" />
                      Company Overview
                    </a>
                    <a href="#pros-cons" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                      <Scale className="h-4 w-4" />
                      Pros & Cons
                    </a>
                    <a href="#fees" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                      <DollarSign className="h-4 w-4" />
                      Fee Structure
                    </a>
                    <a href="#best-for" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                      <Users className="h-4 w-4" />
                      Who It&apos;s Best For
                    </a>
                    <a href="#verdict" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-500 transition-colors">
                      <Award className="h-4 w-4" />
                      Final Verdict
                    </a>
                  </div>
                </nav>

                {/* Company Overview */}
                <section id="overview" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Building2 className="h-5 w-5 text-slate-400" />
                    </div>
                    Company Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {company.description}
                    </p>
                    <p className="text-slate-300">
                      Founded in {company.founded} and headquartered in {company.headquarters},
                      {company.name} has been in business for {yearsInBusiness} years. They
                      currently hold an {company.bbbRating} rating with the Better Business Bureau
                      and have accumulated {company.reviewCount.toLocaleString()} customer reviews
                      with an average rating of {company.rating}/5.
                    </p>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold text-white">{yearsInBusiness}+</div>
                      <div className="text-sm text-slate-400">Years in Business</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold text-white">{company.bbbRating}</div>
                      <div className="text-sm text-slate-400">BBB Rating</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold text-white">${company.minInvestment.toLocaleString()}</div>
                      <div className="text-sm text-slate-400">Minimum</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold text-white">{company.metals.length}</div>
                      <div className="text-sm text-slate-400">Metals Offered</div>
                    </div>
                  </div>
                </section>

                {/* Pros & Cons */}
                <section id="pros-cons" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Scale className="h-5 w-5 text-slate-400" />
                    </div>
                    Pros & Cons
                  </h2>
                  <ProsConsList pros={company.pros} cons={company.cons} />
                </section>

                {/* Inline CTA */}
                {!company.featured && (
                  <AugustaCTA variant="inline" linkContext="comparison" />
                )}

                {/* Fee Structure */}
                <section id="fees" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <DollarSign className="h-5 w-5 text-slate-400" />
                    </div>
                    Fee Structure
                  </h2>
                  <SingleCompanyFees company={company} />
                  <p className="mt-4 text-sm text-slate-400">
                    Note: Fees are subject to change. Contact {company.name} directly for current pricing.
                    All Gold IRA companies also charge spreads on precious metals purchases, typically 3-8% above spot price.
                  </p>
                </section>

                {/* Best For Section */}
                <section id="best-for" className="scroll-mt-24">
                  <BestForSection company={company} />
                </section>

                {/* Verdict Section */}
                <VerdictSection company={company} />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Augusta CTA Sidebar (if not viewing Augusta) */}
                  {!company.featured && (
                    <AugustaCTA variant="sidebar" linkContext="comparison" />
                  )}

                  {/* This Company CTA */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-sm">
                    <h3 className="font-bold text-white mb-4">Get Started with {company.name}</h3>
                    <ul className="space-y-2 mb-4 text-sm">
                      <li className="flex items-center gap-2 text-slate-300">
                        <Shield className="h-4 w-4 text-green-500" />
                        Free Consultation
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <Clock className="h-4 w-4 text-blue-500" />
                        No Obligation
                      </li>
                    </ul>
                    <a
                      href={company.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all"
                    >
                      Visit {company.name}
                    </a>
                  </div>

                  {/* Compare with Others */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="font-bold text-white mb-4">Compare Companies</h3>
                    <div className="space-y-3">
                      {topCompanies.slice(0, 3).map((c) => (
                        <Link
                          key={c.slug}
                          href={`/reviews/${c.slug}`}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-amber-500/50 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-sm text-white">{c.name}</div>
                            <div className="text-xs text-slate-400">{c.bbbRating} BBB • ${c.minInvestment.toLocaleString()} min</div>
                          </div>
                          <div className="text-amber-500 font-bold">{c.rating}</div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/reviews"
                      className="block text-center text-sm text-amber-500 font-semibold mt-4 hover:text-amber-400"
                    >
                      See All Reviews →
                    </Link>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="font-bold text-white mb-4">Related Content</h3>
                    <div className="space-y-2 text-sm">
                      <Link href="/guide/gold-ira-fees" className="block text-slate-400 hover:text-amber-500">
                        Understanding Gold IRA Fees →
                      </Link>
                      <Link href="/learn/gold-ira-scams" className="block text-slate-400 hover:text-amber-500">
                        Gold IRA Scams to Avoid →
                      </Link>
                      <Link href="/guide/how-to-open-gold-ira" className="block text-slate-400 hover:text-amber-500">
                        How to Open a Gold IRA →
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Footer CTA */}
        {company.featured ? (
          <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16">
            <Container>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Award className="h-4 w-4" />
                  OUR #1 RECOMMENDATION
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Ready to Get Started with {company.name}?
                </h2>
                <p className="text-slate-600 mb-8">
                  Get a free consultation and learn how a Gold IRA could protect your retirement savings.
                </p>
                <a
                  href={company.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25"
                >
                  Get Your Free Consultation
                </a>
              </div>
            </Container>
          </section>
        ) : (
          <section className="py-16">
            <Container>
              <AugustaCTA variant="footer" linkContext="comparison" />
            </Container>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
