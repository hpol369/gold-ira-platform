// src/app/retirement/[segment]/page.tsx
// Dynamic segment hub page for occupation/situation-specific retirement guides
// Light Patriot theme: bg-white, text-[#F6F4EF], #B22234 accents, #000080 headings

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home, AlertTriangle, Shield, Briefcase, FileSearch, CheckCircle2, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  getSegmentBySlug,
  getAllSegmentSlugs,
} from "@/data/segment-hubs";
import {
  articleSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { createPageMetadata, getCanonicalUrl } from "@/lib/metadata";

// ── Sources per segment (mapped by slug for SEO citation) ──────────────

const segmentSources: Record<string, { name: string; url: string; accessDate: string }[]> = {
  "retired-truck-drivers": [
    { name: "IRS - Retirement Plans for Self-Employed People (SEP IRA)", url: "https://www.irs.gov/retirement-plans/retirement-plans-for-self-employed-people", accessDate: "March 2026" },
    { name: "ATBS - American Truck Business Services Owner-Operator Benchmarking", url: "https://www.atbs.com/", accessDate: "March 2026" },
    { name: "Bureau of Labor Statistics - CPI Inflation Data", url: "https://www.bls.gov/cpi/", accessDate: "March 2026" },
  ],
  "nurses-nearing-retirement": [
    { name: "IRS - 403(b) Tax-Sheltered Annuity Plans", url: "https://www.irs.gov/retirement-plans/irc-403b-tax-sheltered-annuity-plans", accessDate: "March 2026" },
    { name: "Bureau of Labor Statistics - Registered Nurses Occupational Outlook", url: "https://www.bls.gov/ooh/healthcare/registered-nurses.htm", accessDate: "March 2026" },
    { name: "Fidelity - 403(b) Plan Benchmarking Data", url: "https://www.fidelity.com/", accessDate: "March 2026" },
  ],
  "teachers-403b": [
    { name: "Aon Hewitt - 403(b) Plan Landscape Report", url: "https://www.aon.com/", accessDate: "March 2026" },
    { name: "IRS - 403(b) Retirement Plan FAQ", url: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-403b-tax-sheltered-annuity-plans", accessDate: "March 2026" },
    { name: "National Education Association - Teacher Retirement Resources", url: "https://www.nea.org/", accessDate: "March 2026" },
  ],
  "federal-employees-tsp": [
    { name: "Federal Retirement Thrift Investment Board - TSP Fund Performance", url: "https://www.tsp.gov/fund-performance/", accessDate: "March 2026" },
    { name: "OPM - FERS Information", url: "https://www.opm.gov/retirement-center/fers-information/", accessDate: "March 2026" },
    { name: "TSP - Withdrawals After Leaving Federal Service", url: "https://www.tsp.gov/withdrawals/", accessDate: "March 2026" },
  ],
  "union-manufacturing-workers": [
    { name: "PBGC - Pension Benefit Guaranty Corporation Annual Report", url: "https://www.pbgc.gov/about/annual-reports", accessDate: "March 2026" },
    { name: "Department of Labor - Form 5500 Search", url: "https://www.efast.dol.gov/5500Search/", accessDate: "March 2026" },
    { name: "Bureau of Labor Statistics - Manufacturing Employment Data", url: "https://www.bls.gov/iag/tgs/iag31-33.htm", accessDate: "March 2026" },
  ],
  "laid-off-after-55": [
    { name: "IRS - Retirement Topics - Exceptions to 10% Penalty (Rule of 55)", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-exceptions-to-tax-on-early-distributions", accessDate: "March 2026" },
    { name: "Vanguard - How America Saves 2024", url: "https://institutional.vanguard.com/how-america-saves/overview.html", accessDate: "March 2026" },
    { name: "Bureau of Labor Statistics - Displaced Workers Summary", url: "https://www.bls.gov/news.release/disp.nr0.htm", accessDate: "March 2026" },
  ],
  "inherited-ira": [
    { name: "IRS - Required Minimum Distributions for Beneficiaries", url: "https://www.irs.gov/retirement-plans/required-minimum-distributions-for-ira-beneficiaries", accessDate: "March 2026" },
    { name: "IRS - SECURE Act 2.0 Final Regulations (2024)", url: "https://www.irs.gov/retirement-plans/secure-2-0-act-of-2022", accessDate: "March 2026" },
    { name: "Congressional Research Service - SECURE Act Summary", url: "https://crsreports.congress.gov/", accessDate: "March 2026" },
  ],
  "divorce-after-50": [
    { name: "IRS - QDROs - Qualified Domestic Relations Orders", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-qdro-qualified-domestic-relations-order", accessDate: "March 2026" },
    { name: "Social Security Administration - Benefits for Divorced Spouses", url: "https://www.ssa.gov/benefits/retirement/planner/applying7.html", accessDate: "March 2026" },
    { name: "Pew Research Center - Gray Divorce Statistics", url: "https://www.pewresearch.org/", accessDate: "March 2026" },
  ],
  "police-firefighters": [
    { name: "IRS - 457(b) Plans for State and Local Government Employees", url: "https://www.irs.gov/retirement-plans/irc-457b-deferred-compensation-plans", accessDate: "March 2026" },
    { name: "National Association of Police Organizations - Pension Data", url: "https://www.napo.org/", accessDate: "March 2026" },
    { name: "International Association of Fire Fighters - Retirement Resources", url: "https://www.iaff.org/", accessDate: "March 2026" },
  ],
  "construction-workers": [
    { name: "CPWR - Center for Construction Research and Training", url: "https://www.cpwr.com/", accessDate: "March 2026" },
    { name: "Bureau of Labor Statistics - Construction Industry Overview", url: "https://www.bls.gov/iag/tgs/iag23.htm", accessDate: "March 2026" },
    { name: "PBGC - Multiemployer Pension Plan Information", url: "https://www.pbgc.gov/prac/multiemployer", accessDate: "March 2026" },
  ],
  "postal-workers-usps": [
    { name: "USPS Office of Inspector General - Postal Service Retirement", url: "https://www.uspsoig.gov/", accessDate: "March 2026" },
    { name: "OPM - FERS vs. CSRS Comparison", url: "https://www.opm.gov/retirement-center/", accessDate: "March 2026" },
    { name: "Federal Retirement Thrift Investment Board - TSP Fund Options", url: "https://www.tsp.gov/fund-performance/", accessDate: "March 2026" },
  ],
  "veterans-civilian-retirement": [
    { name: "Department of Defense - Transition Assistance Program", url: "https://www.dodtap.mil/", accessDate: "March 2026" },
    { name: "VA - Disability Compensation Overview", url: "https://www.va.gov/disability/", accessDate: "March 2026" },
    { name: "TSP - Military Service and the TSP", url: "https://www.tsp.gov/military/", accessDate: "March 2026" },
  ],
};

// ── Static Params ───────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllSegmentSlugs().map((segment) => ({ segment }));
}

// ── Types ───────────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ segment: string }>;
}

// ── Metadata ────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { segment } = await params;
  const hub = getSegmentBySlug(segment);

  if (!hub) {
    return { title: "Retirement Guide Not Found" };
  }

  return {
    ...createPageMetadata({
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: getCanonicalUrl(`/retirement/${hub.slug}`),
      type: "article",
    }),
    alternates: {
      canonical: `/retirement/${hub.slug}`,
    },
  };
}

// ── Page Component ──────────────────────────────────────────────────────

export default async function SegmentHubPage({ params }: PageProps) {
  const { segment } = await params;
  const hub = getSegmentBySlug(segment);

  if (!hub) {
    notFound();
  }

  const sources = segmentSources[hub.slug] ?? [];

  // Schema.org structured data
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Retirement Guides", url: "/retirement" },
    { name: hub.title, url: `/retirement/${hub.slug}` },
  ]);

  const article = articleSchema({
    title: hub.title,
    description: hub.metaDescription,
    slug: `/retirement/${hub.slug}`,
    datePublished: "2026-03-19T00:00:00Z",
    dateModified: "2026-03-19T00:00:00Z",
  });

  return (
    <main className="bg-white text-[#F6F4EF] min-h-screen">
      {/* Structured Data */}
      <SchemaScript schema={breadcrumbs} />
      <SchemaScript schema={article} />

      <Container className="py-8 md:py-12">
        {/* ── Breadcrumb ─────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#A8A39A]">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover:text-[#D4A94E] transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-[#3F4460]" />
              <Link
                href="/retirement"
                className="hover:text-[#D4A94E] transition-colors"
              >
                Retirement Guides
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-[#3F4460]" />
              <span className="font-semibold text-[#F6F4EF]" aria-current="page">
                {hub.title.split(":")[0]}
              </span>
            </li>
          </ol>
        </nav>

        {/* ── H1 Title ───────────────────────────────────────────── */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] leading-tight mb-6">
          {hub.title}
        </h1>

        {/* ── Author byline (compact) ────────────────────────────── */}
        <div className="flex items-center gap-3 text-sm text-[#A8A39A] mb-8 pb-8 border-b border-[#2A2D42]">
          <div className="w-8 h-8 rounded-full bg-[rgba(197,149,46,0.1)] flex items-center justify-center text-white text-xs font-bold">
            TR
          </div>
          <div>
            <span className="text-[#D0CCC4] font-medium">Thomas Richardson</span>
            <span className="mx-2 text-[#3F4460]">|</span>
            <span>Updated March 2026</span>
            <span className="mx-2 text-[#3F4460]">|</span>
            <span>Fact-checked by Sarah Mitchell, CPA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── Main Content Column ──────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* ── Answer First Block ───────────────────────────────── */}
            <AnswerFirst
              answer={hub.answer}
              keyFacts={hub.keyFacts}
              variant="light"
              className="mb-8"
            />

            {/* ── Account Types Badges ─────────────────────────────── */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#A8A39A] mb-3">
                Relevant Account Types
              </h2>
              <div className="flex flex-wrap gap-2">
                {hub.accountTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-[rgba(197,149,46,0.06)] text-[#F6F4EF] border border-[#000080]/15"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    {type}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#A8A39A] mt-2">
                Average savings: {hub.avgSavings} ({hub.savingsSource})
              </p>
            </div>

            {/* ── Pain Point Callout ───────────────────────────────── */}
            <div className="bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5 mb-10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">
                    The Core Challenge
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    {hub.painPoint}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Inline CTA ──────────────────────────────────────── */}
            <AugustaCTA
              variant="inline"
              trackSource={`segment-${hub.slug}-inline`}
              className="mb-10"
            />

            {/* ── Content Sections ─────────────────────────────────── */}
            {hub.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-[#F6F4EF] mb-4">
                  {section.heading}
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed text-base md:text-lg">
                  {section.content}
                </p>
                {/* Insert another CTA after the 3rd section */}
                {i === 2 && (
                  <AugustaCTA
                    variant="inline"
                    trackSource={`segment-${hub.slug}-mid`}
                    className="mt-8"
                  />
                )}
              </section>
            ))}

            {/* ── FAQ Section ──────────────────────────────────────── */}
            <FAQSection
              faqs={hub.faqs}
              title={`Frequently Asked Questions: ${hub.title.split(":")[0]}`}
              className="mt-12 mb-12"
            />

            {/* ── Sources ──────────────────────────────────────────── */}
            {sources.length > 0 && (
              <SourcesSection
                sources={sources}
                lastVerified="March 2026"
              />
            )}

            {/* ── Author Box (light theme) ─────────────────────────── */}
            <div className="mt-12 bg-[#0C0D18] rounded-2xl p-6 md:p-8 border border-[#2A2D42]">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-[rgba(197,149,46,0.1)] shrink-0 overflow-hidden border-4 border-[#000080]/20 shadow-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/90">TR</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <p className="text-xs font-bold tracking-widest text-[#D4A94E] uppercase">
                      Written &amp; Researched By
                    </p>
                    <span className="hidden md:inline text-[#3F4460]">-</span>
                    <Link
                      href="/about-us"
                      className="text-xs text-[#A8A39A] hover:text-[#D4A94E] transition-colors flex items-center gap-1 justify-center md:justify-start"
                    >
                      Read my story
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                  <Link
                    href="/author/thomas-richardson"
                    className="hover:text-[#D4A94E] transition-colors"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-[#F6F4EF] mb-2">
                      Thomas Richardson
                    </h3>
                  </Link>
                  <p className="text-[#A8A39A] mb-4 leading-relaxed text-sm md:text-base">
                    Former wealth manager turned Gold IRA researcher. After 20 years in
                    finance, I got tired of watching scammers prey on retirees. Now I
                    investigate companies and publish what I find -- good or bad.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D0CCC4] bg-white px-3 py-1.5 rounded-full border border-[#2A2D42]">
                      <Briefcase className="h-3 w-3 text-[#D4A94E]" />
                      20+ Years Finance
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D0CCC4] bg-white px-3 py-1.5 rounded-full border border-[#2A2D42]">
                      <FileSearch className="h-3 w-3 text-[#D4A94E]" />
                      15+ Companies Investigated
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D0CCC4] bg-white px-3 py-1.5 rounded-full border border-[#2A2D42]">
                      <Shield className="h-3 w-3 text-green-600" />
                      Independent Research
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                    <p className="text-xs text-[#A8A39A]">
                      Fact-checked by{" "}
                      <span className="text-[#D0CCC4] font-medium">
                        Sarah Mitchell, CPA
                      </span>
                      <span className="hidden sm:inline">
                        {" "} -- Licensed CPA with 15 years in retirement tax planning
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#2A2D42] flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-[#A8A39A]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  Fact-checked content
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  No paid placements
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  Updated monthly
                </span>
              </div>
            </div>
          </div>

          {/* ── Sidebar Column ───────────────────────────────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar CTA */}
              <AugustaCTA
                variant="sidebar"
                trackSource={`segment-${hub.slug}-sidebar`}
              />

              {/* Quick Stats Card */}
              <div className="bg-[#0C0D18] rounded-xl p-5 border border-[#2A2D42]">
                <h3 className="font-bold text-[#F6F4EF] mb-4 text-sm uppercase tracking-wider">
                  Quick Facts
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-[#A8A39A]">Average Savings</dt>
                    <dd className="font-semibold text-[#F6F4EF]">
                      {hub.avgSavings}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#A8A39A]">Account Types</dt>
                    <dd className="font-semibold text-[#F6F4EF]">
                      {hub.accountTypes.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#A8A39A]">Source</dt>
                    <dd className="text-xs text-[#A8A39A]">
                      {hub.savingsSource}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Related Guides */}
              <div className="bg-[#0C0D18] rounded-xl p-5 border border-[#2A2D42]">
                <h3 className="font-bold text-[#F6F4EF] mb-4 text-sm uppercase tracking-wider">
                  Related Guides
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/learn/gold-ira-tax-rules"
                      className="text-[#F6F4EF] hover:text-[#D4A94E] transition-colors hover:underline"
                    >
                      Gold IRA Tax Rules Explained
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/learn/indirect-vs-direct-rollover"
                      className="text-[#F6F4EF] hover:text-[#D4A94E] transition-colors hover:underline"
                    >
                      Direct vs. Indirect Rollover
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/learn/are-gold-iras-safe"
                      className="text-[#F6F4EF] hover:text-[#D4A94E] transition-colors hover:underline"
                    >
                      Are Gold IRAs Safe?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guide/gold-ira-guide"
                      className="text-[#F6F4EF] hover:text-[#D4A94E] transition-colors hover:underline"
                    >
                      Complete Gold IRA Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Footer CTA (full width) ──────────────────────────── */}
        <div className="mt-16">
          <AugustaCTA
            variant="footer"
            trackSource={`segment-${hub.slug}-footer`}
          />
        </div>
      </Container>
    </main>
  );
}
