// src/app/compare/[comparison]/page.tsx
// P1-032: Dynamic company comparison page

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import {
  CompanyComparisonTable,
  ProsConsComparison,
  ComparisonWinner,
} from "@/components/compare/CompanyComparison";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  getCompanyBySlug,
  getAllCompanies,
  Company,
} from "@/data/companies";
import { Scale, ArrowRight, Star, Shield, DollarSign, Award, CheckCircle2 } from "lucide-react";
import { getTrackedLink } from "@/config/affiliates";

interface Props {
  params: Promise<{ comparison: string }>;
}

// Parse comparison slug like "augusta-precious-metals-vs-goldco"
function parseComparisonSlug(slug: string): { slugA: string; slugB: string } | null {
  const vsIndex = slug.indexOf("-vs-");
  if (vsIndex === -1) return null;

  const slugA = slug.substring(0, vsIndex);
  const slugB = slug.substring(vsIndex + 4);

  return { slugA, slugB };
}

// Generate all possible comparison pairs
export async function generateStaticParams() {
  const companies = getAllCompanies();
  const params: { comparison: string }[] = [];

  // Generate pairs - only one direction to avoid duplicates
  for (let i = 0; i < companies.length; i++) {
    for (let j = i + 1; j < companies.length; j++) {
      params.push({
        comparison: `${companies[i].slug}-vs-${companies[j].slug}`,
      });
      // Also generate reverse for SEO
      params.push({
        comparison: `${companies[j].slug}-vs-${companies[i].slug}`,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparison } = await params;
  const parsed = parseComparisonSlug(comparison);

  if (!parsed) {
    return { title: "Comparison Not Found" };
  }

  const companyA = getCompanyBySlug(parsed.slugA);
  const companyB = getCompanyBySlug(parsed.slugB);

  if (!companyA || !companyB) {
    return { title: "Comparison Not Found" };
  }

  const title = `${companyA.name} vs ${companyB.name}: 2026 Gold IRA Comparison`;
  const description = `Compare ${companyA.name} vs ${companyB.name}. Side-by-side analysis of fees, minimums, BBB ratings, and customer reviews to find the best Gold IRA for you.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

// JSON-LD for comparison
function generateJsonLd(companyA: Company, companyB: Company) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${companyA.name} vs ${companyB.name}: Gold IRA Comparison`,
    description: `Detailed comparison of ${companyA.name} and ${companyB.name} Gold IRA services.`,
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

export default async function ComparisonPage({ params }: Props) {
  const { comparison } = await params;
  const parsed = parseComparisonSlug(comparison);

  if (!parsed) {
    notFound();
  }

  const companyA = getCompanyBySlug(parsed.slugA);
  const companyB = getCompanyBySlug(parsed.slugB);

  if (!companyA || !companyB) {
    notFound();
  }

  const jsonLd = generateJsonLd(companyA, companyB);
  const winner = companyA.rating > companyB.rating ? companyA :
    companyA.rating < companyB.rating ? companyB : null;
  const showAugustaCTA = !companyA.featured && !companyB.featured;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-slate-900">
        <Navbar />

        {/* Header */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20">
          <Container>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-white">Compare</Link>
              <span>/</span>
              <span className="text-white">{companyA.name} vs {companyB.name}</span>
            </nav>

            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-widest uppercase text-xs mb-4">
              <Scale className="h-4 w-4" />
              Head-to-Head Comparison
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {companyA.name} vs {companyB.name}
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              A detailed comparison of two leading Gold IRA companies. See how they stack up on fees, minimums, ratings, and service quality.
            </p>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className={`rounded-xl p-4 ${companyA.featured ? "bg-amber-500/20 border border-amber-500/30" : "bg-white/10"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white">{companyA.name}</span>
                  {companyA.featured && <Award className="h-4 w-4 text-amber-400" />}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-400" />
                    {companyA.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-blue-400" />
                    {companyA.bbbRating}
                  </span>
                  <span className="text-slate-400">
                    ${companyA.minInvestment.toLocaleString()} min
                  </span>
                </div>
              </div>
              <div className={`rounded-xl p-4 ${companyB.featured ? "bg-amber-500/20 border border-amber-500/30" : "bg-white/10"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white">{companyB.name}</span>
                  {companyB.featured && <Award className="h-4 w-4 text-amber-400" />}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-400" />
                    {companyB.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-blue-400" />
                    {companyB.bbbRating}
                  </span>
                  <span className="text-slate-400">
                    ${companyB.minInvestment.toLocaleString()} min
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* Main Content */}
        <section className="py-12">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Article */}
              <article className="lg:col-span-2 space-y-12">
                {/* Quick Verdict */}
                <ComparisonWinner companyA={companyA} companyB={companyB} />

                {/* Comparison Table */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Scale className="h-5 w-5 text-amber-400" />
                    </div>
                    Side-by-Side Comparison
                  </h2>
                  <CompanyComparisonTable companyA={companyA} companyB={companyB} />
                </section>

                {/* Inline CTA */}
                {showAugustaCTA && (
                  <AugustaCTA
                    variant="inline"
                    linkContext="comparison"
                    subheadline={`Looking for a third option? Augusta Precious Metals is our #1 rated Gold IRA company for ${new Date().getFullYear()}.`}
                    trackSource={`compare-${comparison}`}
                  />
                )}

                {/* Pros & Cons */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-amber-400" />
                    </div>
                    Pros & Cons Comparison
                  </h2>
                  <ProsConsComparison companyA={companyA} companyB={companyB} />
                </section>

                {/* Company Summaries */}
                <section className="space-y-8">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <DollarSign className="h-5 w-5 text-amber-400" />
                    </div>
                    Company Overviews
                  </h2>

                  {/* Company A Summary */}
                  <div className={`rounded-xl p-6 border ${companyA.featured ? "bg-amber-500/10 border-amber-500/30" : "bg-white/5 border-white/10"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">{companyA.name}</h3>
                      {companyA.featured && (
                        <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full font-bold">
                          #1 Pick
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 mb-4">{companyA.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Star className="h-4 w-4 text-amber-500" />
                        {companyA.rating}/5 rating
                      </span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Shield className="h-4 w-4 text-blue-600" />
                        {companyA.bbbRating} BBB
                      </span>
                      <span className="text-slate-300">
                        Founded {companyA.founded}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/reviews/${companyA.slug}`}
                        className="text-amber-600 font-semibold hover:text-amber-700"
                      >
                        Read Full Review →
                      </Link>
                      <a
                        href={getTrackedLink(companyA.affiliateLink, `compare-${comparison}`, companyA.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 font-semibold hover:text-white"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>

                  {/* Company B Summary */}
                  <div className={`rounded-xl p-6 border ${companyB.featured ? "bg-amber-500/10 border-amber-500/30" : "bg-white/5 border-white/10"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">{companyB.name}</h3>
                      {companyB.featured && (
                        <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full font-bold">
                          #1 Pick
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 mb-4">{companyB.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Star className="h-4 w-4 text-amber-500" />
                        {companyB.rating}/5 rating
                      </span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Shield className="h-4 w-4 text-blue-600" />
                        {companyB.bbbRating} BBB
                      </span>
                      <span className="text-slate-300">
                        Founded {companyB.founded}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/reviews/${companyB.slug}`}
                        className="text-amber-600 font-semibold hover:text-amber-700"
                      >
                        Read Full Review →
                      </Link>
                      <a
                        href={getTrackedLink(companyB.affiliateLink, `compare-${comparison}`, companyB.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 font-semibold hover:text-white"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </section>

                {/* Bottom Line */}
                <section className="bg-slate-900 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
                  <p className="text-slate-300 mb-6">
                    {winner ? (
                      <>
                        Based on our analysis, <strong className="text-white">{winner.name}</strong> comes out ahead with a higher rating ({winner.rating}/5) and {winner.bestFor.toLowerCase()}. However, your choice should depend on your specific needs:
                      </>
                    ) : (
                      <>
                        Both companies are excellent choices with identical ratings. Your decision should come down to your specific investment amount and preferences:
                      </>
                    )}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="font-bold text-white mb-2">Choose {companyA.name} if:</div>
                      <p className="text-sm text-slate-300">{companyA.bestFor}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="font-bold text-white mb-2">Choose {companyB.name} if:</div>
                      <p className="text-sm text-slate-300">{companyB.bestFor}</p>
                    </div>
                  </div>
                </section>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Winner CTA */}
                  {winner && (
                    <div className={`rounded-xl p-6 ${winner.featured ? "bg-amber-500/20 border border-amber-500/30" : "bg-white/5 backdrop-blur-sm border border-white/10"}`}>
                      <div className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        COMPARISON WINNER
                      </div>
                      <h3 className="font-bold text-white mb-2">{winner.name}</h3>
                      <div className="flex items-center gap-2 mb-4 text-sm text-slate-300">
                        <Star className="h-4 w-4 text-amber-500" />
                        {winner.rating}/5 • {winner.bbbRating} BBB
                      </div>
                      <a
                        href={getTrackedLink(winner.affiliateLink, `compare-${comparison}`, winner.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-3 font-bold rounded-lg transition-all ${
                          winner.featured
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
                            : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  )}

                  {/* Augusta CTA (if neither company is Augusta) */}
                  {showAugustaCTA && (
                    <AugustaCTA variant="sidebar" linkContext="comparison" trackSource={`compare-${comparison}`} />
                  )}

                  {/* Related Comparisons */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="font-bold text-white mb-4">Related Comparisons</h3>
                    <div className="space-y-3">
                      <Link
                        href={`/compare/augusta-precious-metals-vs-${companyA.slug === "augusta-precious-metals" ? companyB.slug : companyA.slug}`}
                        className="block text-sm text-slate-300 hover:text-amber-400"
                      >
                        Augusta vs {companyA.slug === "augusta-precious-metals" ? companyB.name : companyA.name} →
                      </Link>
                      <Link
                        href="/compare"
                        className="block text-sm text-amber-400 font-semibold hover:text-amber-300"
                      >
                        See All Comparisons →
                      </Link>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="font-bold text-white mb-4">Individual Reviews</h3>
                    <div className="space-y-2">
                      <Link
                        href={`/reviews/${companyA.slug}`}
                        className="block text-sm text-slate-300 hover:text-amber-400"
                      >
                        {companyA.name} Review →
                      </Link>
                      <Link
                        href={`/reviews/${companyB.slug}`}
                        className="block text-sm text-slate-300 hover:text-amber-400"
                      >
                        {companyB.name} Review →
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-slate-800">
          <Container>
            {showAugustaCTA ? (
              <AugustaCTA variant="footer" linkContext="comparison" trackSource={`compare-${comparison}`} />
            ) : (
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-slate-300 mb-8">
                  Request a free consultation from either company to learn more about protecting your retirement with precious metals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={getTrackedLink(companyA.affiliateLink, `compare-${comparison}`, companyA.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                      companyA.featured
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Visit {companyA.name}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={getTrackedLink(companyB.affiliateLink, `compare-${comparison}`, companyB.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                      companyB.featured
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Visit {companyB.name}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </Container>
        </section>

        <Footer />
      </main>
    </>
  );
}
