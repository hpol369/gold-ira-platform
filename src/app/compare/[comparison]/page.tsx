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

  const title = `${companyA.name} vs ${companyB.name} Comparison`;
  const description = `Compare ${companyA.name} vs ${companyB.name}. Side-by-side analysis of fees, minimums, BBB ratings, and reviews.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
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
      <main className="min-h-screen flex flex-col bg-white">
        <Navbar />

        {/* Header */}
        <header className="bg-[#0C0D18] py-16 md:py-20 border-b border-[#2A2D42]">
          <Container>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6">
              <Link href="/" className="hover:text-[#F6F4EF]">Home</Link>
              <span>/</span>
              <Link href="/compare" className="hover:text-[#F6F4EF]">Compare</Link>
              <span>/</span>
              <span className="text-[#F6F4EF]">{companyA.name} vs {companyB.name}</span>
            </nav>

            <div className="flex items-center gap-2 text-[#D4A94E] font-bold tracking-widest uppercase text-xs mb-4">
              <Scale className="h-4 w-4" />
              Head-to-Head Comparison
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#F6F4EF]">
              {companyA.name} vs {companyB.name}
            </h1>

            <p className="text-xl text-[#D0CCC4] leading-relaxed max-w-2xl mb-4">
              When you&apos;ve spent 30 years building your retirement savings, you can&apos;t afford to trust it to the wrong company. Let&apos;s look at what actually matters.
            </p>
            <p className="text-base text-[#D0CCC4] leading-relaxed max-w-2xl mb-8">
              For someone with $500k saved over a lifetime of hard work, we focus on the things that count: BBB complaint history, how they handle problems, and whether customers actually recommend them to friends&mdash;not just flashy marketing.
            </p>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className={`rounded-xl p-4 ${companyA.featured ? "bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20" : "bg-[#161828] border border-[#2A2D42]"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#F6F4EF]">{companyA.name}</span>
                  {companyA.featured && <Award className="h-4 w-4 text-[#D4A94E]" />}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-[#D0CCC4]">
                    <Star className="h-4 w-4 text-[#D4A94E]" />
                    {companyA.rating}
                  </span>
                  <span className="flex items-center gap-1 text-[#D0CCC4]">
                    <Shield className="h-4 w-4 text-blue-600" />
                    {companyA.bbbRating}
                  </span>
                  <span className="text-[#D0CCC4]">
                    ${companyA.minInvestment.toLocaleString()} min
                  </span>
                </div>
              </div>
              <div className={`rounded-xl p-4 ${companyB.featured ? "bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20" : "bg-[#161828] border border-[#2A2D42]"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#F6F4EF]">{companyB.name}</span>
                  {companyB.featured && <Award className="h-4 w-4 text-[#D4A94E]" />}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-[#D0CCC4]">
                    <Star className="h-4 w-4 text-[#D4A94E]" />
                    {companyB.rating}
                  </span>
                  <span className="flex items-center gap-1 text-[#D0CCC4]">
                    <Shield className="h-4 w-4 text-blue-600" />
                    {companyB.bbbRating}
                  </span>
                  <span className="text-[#D0CCC4]">
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
                  <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                    <div className="p-2 bg-[#121423] rounded-lg border border-[#2A2D42]">
                      <Scale className="h-5 w-5 text-[#D4A94E]" />
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
                  <h2 className="text-2xl font-bold text-[#F6F4EF] mb-6 flex items-center gap-3">
                    <div className="p-2 bg-[#121423] rounded-lg border border-[#2A2D42]">
                      <CheckCircle2 className="h-5 w-5 text-[#D4A94E]" />
                    </div>
                    Pros & Cons Comparison
                  </h2>
                  <ProsConsComparison companyA={companyA} companyB={companyB} />
                </section>

                {/* Company Summaries */}
                <section className="space-y-8">
                  <h2 className="text-2xl font-bold text-[#F6F4EF] flex items-center gap-3">
                    <div className="p-2 bg-[#121423] rounded-lg border border-[#2A2D42]">
                      <DollarSign className="h-5 w-5 text-[#D4A94E]" />
                    </div>
                    Company Overviews
                  </h2>

                  {/* Company A Summary */}
                  <div className={`rounded-xl p-6 border ${companyA.featured ? "bg-[rgba(220,38,38,0.06)] border-[#B22234]/20" : "bg-[#161828] border-[#2A2D42]"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-[#F6F4EF]">{companyA.name}</h3>
                      {companyA.featured && (
                        <span className="text-xs bg-[#DC2626] text-white px-2 py-1 rounded-full font-bold">
                          #1 Pick
                        </span>
                      )}
                    </div>
                    <p className="text-[#D0CCC4] mb-4">{companyA.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-[#D0CCC4]">
                        <Star className="h-4 w-4 text-[#D4A94E]" />
                        {companyA.rating}/5 rating
                      </span>
                      <span className="flex items-center gap-1 text-[#D0CCC4]">
                        <Shield className="h-4 w-4 text-blue-600" />
                        {companyA.bbbRating} BBB
                      </span>
                      <span className="text-[#D0CCC4]">
                        Founded {companyA.founded}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/reviews/${companyA.slug}`}
                        className="text-[#D4A94E] font-semibold hover:text-[#8b1c2a]"
                      >
                        Read Full Review →
                      </Link>
                      <a
                        href={getTrackedLink(companyA.affiliateLink, `compare-${comparison}`, companyA.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D0CCC4] font-semibold hover:text-[#F6F4EF]"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>

                  {/* Company B Summary */}
                  <div className={`rounded-xl p-6 border ${companyB.featured ? "bg-[rgba(220,38,38,0.06)] border-[#B22234]/20" : "bg-[#161828] border-[#2A2D42]"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-[#F6F4EF]">{companyB.name}</h3>
                      {companyB.featured && (
                        <span className="text-xs bg-[#DC2626] text-white px-2 py-1 rounded-full font-bold">
                          #1 Pick
                        </span>
                      )}
                    </div>
                    <p className="text-[#D0CCC4] mb-4">{companyB.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-[#D0CCC4]">
                        <Star className="h-4 w-4 text-[#D4A94E]" />
                        {companyB.rating}/5 rating
                      </span>
                      <span className="flex items-center gap-1 text-[#D0CCC4]">
                        <Shield className="h-4 w-4 text-blue-600" />
                        {companyB.bbbRating} BBB
                      </span>
                      <span className="text-[#D0CCC4]">
                        Founded {companyB.founded}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/reviews/${companyB.slug}`}
                        className="text-[#D4A94E] font-semibold hover:text-[#8b1c2a]"
                      >
                        Read Full Review →
                      </Link>
                      <a
                        href={getTrackedLink(companyB.affiliateLink, `compare-${comparison}`, companyB.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D0CCC4] font-semibold hover:text-[#F6F4EF]"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </section>

                {/* Bottom Line */}
                <section className="bg-[#0C0D18] rounded-2xl p-8 border border-[#2A2D42]">
                  <h2 className="text-2xl font-bold mb-4 text-[#F6F4EF]">The Bottom Line</h2>
                  <p className="text-[#D0CCC4] mb-6">
                    {winner ? (
                      <>
                        Look, you didn&apos;t work 30 years to hand your savings over to a company that might let you down. Based on complaint history, customer service track record, and how they treat people with real money on the line, <strong className="text-[#F6F4EF]">{winner.name}</strong> edges ahead ({winner.rating}/5 rating). That said, your situation matters:
                      </>
                    ) : (
                      <>
                        Both companies have solid track records with minimal complaints. For someone who&apos;s spent decades building their nest egg, that&apos;s what matters most. Your decision should come down to your specific investment amount and what feels right:
                      </>
                    )}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#161828] rounded-lg p-4 border border-[#2A2D42]">
                      <div className="font-bold text-[#F6F4EF] mb-2">Choose {companyA.name} if:</div>
                      <p className="text-sm text-[#D0CCC4]">{companyA.bestFor}</p>
                    </div>
                    <div className="bg-[#161828] rounded-lg p-4 border border-[#2A2D42]">
                      <div className="font-bold text-[#F6F4EF] mb-2">Choose {companyB.name} if:</div>
                      <p className="text-sm text-[#D0CCC4]">{companyB.bestFor}</p>
                    </div>
                  </div>
                </section>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Winner CTA */}
                  {winner && (
                    <div className={`rounded-xl p-6 ${winner.featured ? "bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20" : "bg-[#161828] border border-[#2A2D42] shadow-sm"}`}>
                      <div className="text-xs font-bold text-[#D4A94E] mb-2 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        COMPARISON WINNER
                      </div>
                      <h3 className="font-bold text-[#F6F4EF] mb-2">{winner.name}</h3>
                      <div className="flex items-center gap-2 mb-4 text-sm text-[#D0CCC4]">
                        <Star className="h-4 w-4 text-[#D4A94E]" />
                        {winner.rating}/5 • {winner.bbbRating} BBB
                      </div>
                      <a
                        href={getTrackedLink(winner.affiliateLink, `compare-${comparison}`, winner.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-3 font-bold rounded-lg transition-all ${
                          winner.featured
                            ? "bg-[#DC2626] text-white hover:bg-[#991B1B]"
                            : "bg-[rgba(197,149,46,0.1)] text-white hover:bg-[#000066]"
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
                  <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                    <h3 className="font-bold text-[#F6F4EF] mb-4">Related Comparisons</h3>
                    <div className="space-y-3">
                      <Link
                        href={`/compare/augusta-precious-metals-vs-${companyA.slug === "augusta-precious-metals" ? companyB.slug : companyA.slug}`}
                        className="block text-sm text-[#D0CCC4] hover:text-[#D4A94E]"
                      >
                        Augusta vs {companyA.slug === "augusta-precious-metals" ? companyB.name : companyA.name} →
                      </Link>
                      <Link
                        href="/compare"
                        className="block text-sm text-[#D4A94E] font-semibold hover:text-[#8b1c2a]"
                      >
                        See All Comparisons →
                      </Link>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-[#161828] rounded-xl p-6 border border-[#2A2D42] shadow-sm">
                    <h3 className="font-bold text-[#F6F4EF] mb-4">Individual Reviews</h3>
                    <div className="space-y-2">
                      <Link
                        href={`/reviews/${companyA.slug}`}
                        className="block text-sm text-[#D0CCC4] hover:text-[#D4A94E]"
                      >
                        {companyA.name} Review →
                      </Link>
                      <Link
                        href={`/reviews/${companyB.slug}`}
                        className="block text-sm text-[#D0CCC4] hover:text-[#D4A94E]"
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
        <section className="py-16 bg-[#0C0D18] border-t border-[#2A2D42]">
          <Container>
            {showAugustaCTA ? (
              <AugustaCTA variant="footer" linkContext="comparison" trackSource={`compare-${comparison}`} />
            ) : (
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-[#F6F4EF] mb-4">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-[#D0CCC4] mb-8">
                  You&apos;ve done your homework. Both companies offer free consultations with no pressure&mdash;just straight answers about whether a Gold IRA makes sense for what you&apos;ve built.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={getTrackedLink(companyA.affiliateLink, `compare-${comparison}`, companyA.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                      companyA.featured
                        ? "bg-[#DC2626] text-white hover:bg-[#991B1B]"
                        : "bg-[rgba(197,149,46,0.1)] text-white hover:bg-[#000066]"
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
                        ? "bg-[#DC2626] text-white hover:bg-[#991B1B]"
                        : "bg-[rgba(197,149,46,0.1)] text-white hover:bg-[#000066]"
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
