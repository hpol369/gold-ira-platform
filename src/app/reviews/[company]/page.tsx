// src/app/reviews/[company]/page.tsx
// PATRIOT LIGHT THEME REFACTOR

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { CompanyHero } from "@/components/reviews/CompanyHero";
import { ProsConsList } from "@/components/reviews/ProsConsList";
// FeesTable / SingleCompanyFees likely need inspection too, but we start here
import { SingleCompanyFees } from "@/components/reviews/FeesTable";
import { VerdictSection } from "@/components/reviews/VerdictSection";
import { BestForSection } from "@/components/reviews/BestForSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import {
  getCompanyBySlug,
  getCompanySlugs,
  getTopCompanies,
  Company,
} from "@/data/companies";
import { Award, BookOpen, DollarSign, Shield, Users, Building2, Scale, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ company: string }>;
}

export async function generateStaticParams() {
  const slugs = getCompanySlugs();
  return slugs.map((company) => ({ company }));
}

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
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

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
      <main className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />

        {/* Hero Section - Pass variant if supported, otherwise it likely needs its own refactor */}
        <CompanyHero company={company} />

        {/* Main Content */}
        <section className="py-12">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Article */}
              <article className="lg:col-span-2 space-y-12">
                {/* Table of Contents - Patriot Card */}
                <nav className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-[#000080] mb-4 font-serif text-lg">In This Review</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <a href="#overview" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#000080] font-medium transition-colors">
                      <BookOpen className="h-4 w-4 text-slate-400" />
                      Company Overview
                    </a>
                    <a href="#pros-cons" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#000080] font-medium transition-colors">
                      <Scale className="h-4 w-4 text-slate-400" />
                      Pros & Cons
                    </a>
                    <a href="#fees" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#000080] font-medium transition-colors">
                      <DollarSign className="h-4 w-4 text-slate-400" />
                      Fee Structure
                    </a>
                    <a href="#best-for" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#000080] font-medium transition-colors">
                      <Users className="h-4 w-4 text-slate-400" />
                      Who It&apos;s Best For
                    </a>
                    <a href="#verdict" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#000080] font-medium transition-colors">
                      <Award className="h-4 w-4 text-slate-400" />
                      Final Verdict
                    </a>
                  </div>
                </nav>

                {/* Company Overview */}
                <section id="overview" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-[#000080] mb-6 flex items-center gap-3 font-serif">
                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <Building2 className="h-5 w-5 text-[#000080]" />
                    </div>
                    Company Overview
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      {company.description}
                    </p>
                    <p className="text-slate-600">
                      Founded in {company.founded} and headquartered in {company.headquarters},
                      <strong> {company.name}</strong> has been in business for {yearsInBusiness} years. They
                      currently hold an <strong>{company.bbbRating} rating</strong> with the Better Business Bureau
                      and have accumulated {company.reviewCount.toLocaleString()} customer reviews
                      with an average rating of {company.rating}/5.
                    </p>
                  </div>

                  {/* Quick Stats Grid - Light Mode */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-[#000080]">{yearsInBusiness}+</div>
                      <div className="text-sm text-slate-500 font-medium">Years in Business</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-[#000080]">{company.bbbRating}</div>
                      <div className="text-sm text-slate-500 font-medium">BBB Rating</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-[#000080]">${company.minInvestment.toLocaleString()}</div>
                      <div className="text-sm text-slate-500 font-medium">Minimum</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-[#000080]">{company.metals.length}</div>
                      <div className="text-sm text-slate-500 font-medium">Metals Offered</div>
                    </div>
                  </div>
                </section>

                {/* Pros & Cons */}
                <section id="pros-cons" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-[#000080] mb-6 flex items-center gap-3 font-serif">
                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <Scale className="h-5 w-5 text-[#000080]" />
                    </div>
                    Pros & Cons
                  </h2>
                  <ProsConsList pros={company.pros} cons={company.cons} />
                </section>

                {/* Inline CTA */}
                {!company.featured && (
                  <AugustaCTA variant="inline" linkContext="comparison" trackSource={`review-${slug}`} />
                )}

                {/* Fee Structure */}
                <section id="fees" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-[#000080] mb-6 flex items-center gap-3 font-serif">
                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <DollarSign className="h-5 w-5 text-[#000080]" />
                    </div>
                    Fee Structure
                  </h2>
                  <SingleCompanyFees company={company} />
                  <p className="mt-4 text-sm text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-200 italic">
                    Note: Fees are subject to change. Contact {company.name} directly for current pricing.
                    All Gold IRA companies also charge spreads, typically 3-8% above spot.
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
                    <AugustaCTA variant="sidebar" linkContext="comparison" trackSource={`review-${slug}`} />
                  )}

                  {/* This Company CTA */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-[#000080] mb-4">Get Started with {company.name}</h3>
                    <ul className="space-y-2 mb-4 text-sm">
                      <li className="flex items-center gap-2 text-slate-600 font-medium">
                        <Shield className="h-4 w-4 text-green-600" />
                        Free Consultation
                      </li>
                      <li className="flex items-center gap-2 text-slate-600 font-medium">
                        <Clock className="h-4 w-4 text-blue-600" />
                        No Obligation
                      </li>
                    </ul>
                    <a
                      href={company.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-[#000080] text-white font-bold rounded-lg hover:bg-[#000060] hover:shadow-lg transition-all"
                    >
                      Visit {company.name}
                    </a>
                  </div>

                  {/* Compare with Others */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-[#000080] mb-4">Compare Companies</h3>
                    <div className="space-y-3">
                      {topCompanies.slice(0, 3).map((c) => (
                        <Link
                          key={c.slug}
                          href={`/reviews/${c.slug}`}
                          className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#000080]/30 hover:bg-white transition-all group"
                        >
                          <div>
                            <div className="font-bold text-sm text-[#000080] group-hover:underline">
                              {c.name}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                              {c.bbbRating} BBB • ${c.minInvestment.toLocaleString()} min
                            </div>
                          </div>
                          <div className="text-amber-500 font-bold">{c.rating}</div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/reviews"
                      className="block text-center text-sm text-[#000080] font-bold mt-4 hover:underline"
                    >
                      See All Reviews →
                    </Link>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-[#000080] mb-4">Related Content</h3>
                    <div className="space-y-2 text-sm">
                      <Link href="/guide/gold-ira-fees" className="block text-slate-600 hover:text-[#B22234] font-medium transition-colors">
                        Understanding Gold IRA Fees →
                      </Link>
                      <Link href="/learn/gold-ira-scams" className="block text-slate-600 hover:text-[#B22234] font-medium transition-colors">
                        Gold IRA Scams to Avoid →
                      </Link>
                      <Link href="/guide/gold-ira-guide" className="block text-slate-600 hover:text-[#B22234] font-medium transition-colors">
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
          <section className="bg-slate-50 border-t border-slate-200 py-16">
            <Container>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-[#B22234] text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-sm">
                  <Award className="h-4 w-4" />
                  OUR #1 RECOMMENDATION
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#000080] mb-4">
                  Ready to Get Started with {company.name}?
                </h2>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                  Get a free consultation and learn how a Gold IRA could protect your retirement savings from inflation.
                </p>
                <a
                  href={company.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Get Your Free Consultation
                </a>
              </div>
            </Container>
          </section>
        ) : (
          <section className="py-16 bg-slate-50 border-t border-slate-200">
            <Container>
              <AugustaCTA variant="footer" linkContext="comparison" trackSource={`review-${slug}`} />
            </Container>
          </section>
        )}

        <Footer />
        <StickyMobileCTA companySlug={company.slug} companyName={company.name} />
      </main>
    </>
  );
}
