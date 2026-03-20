// src/app/is-enough-to-retire/[slug]/page.tsx
// Dynamic sub-pages for "Is $X Enough to Retire?" — Sprint 6

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { FAQSection } from "@/components/seo/FAQSection";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { TrustBar } from "@/components/content/TrustBar";
import { SourcesSection } from "@/components/content/SourcesSection";
import { RelatedContent } from "@/components/content/RelatedContent";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  RETIREMENT_AMOUNTS,
  getRetirementAmount,
  getAllRetirementSlugs,
  type RetirementAmountPage,
} from "@/data/retirement-amounts";
import {
  ArrowRight,
  Calculator,
  DollarSign,
  TrendingDown,
  Shield,
  MapPin,
  User,
  Lightbulb,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

export function generateStaticParams() {
  return getAllRetirementSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getRetirementAmount(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/is-enough-to-retire/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `/is-enough-to-retire/${page.slug}`,
    },
  };
}

function ComparisonTable({ current }: { current: RetirementAmountPage }) {
  return (
    <div className="overflow-x-auto border border-slate-200 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">Savings</th>
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">Monthly (4%)</th>
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">+ Social Security</th>
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">Details</th>
          </tr>
        </thead>
        <tbody>
          {RETIREMENT_AMOUNTS.map((row) => {
            const isCurrent = row.slug === current.slug;
            return (
              <tr
                key={row.slug}
                className={`border-b border-slate-100 ${isCurrent ? "bg-amber-50" : "hover:bg-slate-50"} transition-colors`}
              >
                <td className={`py-3 px-4 font-bold ${isCurrent ? "text-amber-700" : "text-[#000080]"}`}>
                  {row.amountShort}
                  {isCurrent && <span className="ml-2 text-xs font-normal text-amber-600">(You are here)</span>}
                </td>
                <td className="py-3 px-4 text-slate-700">{row.monthlyIncome4Pct}</td>
                <td className="py-3 px-4 font-medium text-slate-900">{row.withSocialSecurity62}/yr</td>
                <td className="py-3 px-4">
                  {isCurrent ? (
                    <span className="text-slate-400 text-sm">Current page</span>
                  ) : (
                    <Link
                      href={`/is-enough-to-retire/${row.slug}`}
                      className="inline-flex items-center gap-1 text-[#B22234] font-medium hover:underline"
                    >
                      Analysis <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function StateComparisonTable({ page }: { page: RetirementAmountPage }) {
  return (
    <div className="overflow-x-auto border border-slate-200 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">State</th>
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">Annual Cost of Living</th>
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">Years {page.amountShort} Lasts*</th>
            <th className="text-left py-3 px-4 font-semibold text-[#000080]">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {page.stateComparisons.map((state) => (
            <tr key={state.state} className="border-b border-slate-100">
              <td className="py-3 px-4 font-medium text-[#000080]">{state.state}</td>
              <td className="py-3 px-4 text-slate-700">{state.annualCost}</td>
              <td className="py-3 px-4 text-slate-700">{state.yearsLast} years</td>
              <td className="py-3 px-4">
                <span
                  className={`text-sm font-medium ${
                    state.verdict.includes("Not") || state.verdict.includes("Tight")
                      ? "text-red-600"
                      : state.verdict.includes("Very") || state.verdict.includes("Excellent")
                        ? "text-green-600"
                        : "text-amber-600"
                  }`}
                >
                  {state.verdict}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-500 px-4 py-2 italic">
        * Based on 4% withdrawal from savings only, before Social Security. With SS, money lasts significantly longer.
      </p>
    </div>
  );
}

export default async function RetirementAmountSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getRetirementAmount(slug);
  if (!page) notFound();

  const relatedPages = page.relatedAmounts
    .map((s) => getRetirementAmount(s))
    .filter(Boolean) as RetirementAmountPage[];

  const schema = articleSchema({
    title: page.title,
    description: page.description,
    slug: `/is-enough-to-retire/${page.slug}`,
    datePublished: "2026-03-20T00:00:00Z",
    dateModified: "2026-03-20T00:00:00Z",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Is Enough to Retire?", url: "/is-enough-to-retire" },
    { name: `Retire with ${page.amountShort}`, url: `/is-enough-to-retire/${page.slug}` },
  ]);

  const faqJsonLd = faqSchema(page.faqs);

  const relatedLinks = [
    { title: "Is Your Savings Enough to Retire?", href: "/is-enough-to-retire", type: "guide" as const },
    ...relatedPages.map((rp) => ({
      title: `Retire with ${rp.amountShort}${rp.retirementAge ? ` at ${rp.retirementAge}` : ""}`,
      href: `/is-enough-to-retire/${rp.slug}`,
      type: "article" as const,
    })),
    { title: "Retirement Calculator", href: "/tools/retirement-calculator", type: "tool" as const },
    { title: "Money Longevity Calculator", href: "/tools/money-longevity-calculator", type: "tool" as const },
    { title: "Sequence of Returns Risk", href: "/learn/sequence-of-returns-risk", type: "learn" as const },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <SchemaScript schema={breadcrumbs} />
      <SchemaScript schema={faqJsonLd} />
      <Navbar />
      <TrustBar updateDate="2026-03-20" />

      {/* Hero */}
      <header className="bg-slate-50 py-14 md:py-20 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#B22234]">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/is-enough-to-retire" className="hover:text-[#B22234]">
                Is Enough to Retire?
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-700 font-medium">{page.amountShort}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800 mb-5 border border-amber-200">
              <Calculator className="h-4 w-4" />
              Updated March 2026
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-5 text-[#000080]">
              {page.retirementAge
                ? `Can You Retire at ${page.retirementAge} with ${page.amountFormatted}?`
                : `Is ${page.amountFormatted} Enough to Retire?`}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              The real math behind retiring with {page.amountFormatted}. 4% rule breakdown,
              Social Security projections, state-by-state analysis, and strategies to make every dollar last.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-10 md:py-14">
        {/* Article Meta */}
        <div className="max-w-4xl mb-6">
          <ArticleMeta
            publishDate="2026-02-15"
            updateDate="2026-03-20"
            readTime="12 min"
          />
        </div>

        {/* Answer First */}
        <AnswerFirst
          answer={page.answerFirst}
          keyFacts={page.keyFacts}
          className="mb-12 max-w-4xl"
        />

        {/* Section 1: The Math */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-amber-500" />
            The Math: 4% Rule Applied to {page.amountFormatted}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
              <p className="text-sm text-slate-500 mb-1">Monthly Income (4% Rule)</p>
              <p className="text-2xl font-bold text-[#000080]">{page.monthlyIncome4Pct}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
              <p className="text-sm text-slate-500 mb-1">Annual Income (4% Rule)</p>
              <p className="text-2xl font-bold text-[#000080]">{page.annualIncome4Pct}</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
              <p className="text-sm text-amber-700 mb-1">Portfolio Longevity</p>
              <p className="text-2xl font-bold text-amber-800">{page.yearsMoneyLasts}</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            The 4% rule comes from the 1994 Trinity Study: withdraw 4% of your portfolio in year one,
            then adjust for inflation each year. With a balanced stock/bond portfolio, this withdrawal
            rate has historically sustained retirees for 30 years with a 95% success rate.
            For {page.amountFormatted}, that means pulling {page.annualIncome4Pct}/year
            ({page.monthlyIncome4Pct}/month) — your base retirement income before Social Security.
          </p>
        </section>

        {/* Section 2: Social Security */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">
            Social Security + {page.amountFormatted}: What Your Life Actually Looks Like
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-6">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              <div className="p-5 text-center">
                <p className="text-sm text-slate-500 mb-1">Claim at 62 (early)</p>
                <p className="text-xl font-bold text-red-600">{page.withSocialSecurity62}/yr</p>
                <p className="text-xs text-slate-500 mt-1">30% reduction</p>
              </div>
              <div className="p-5 text-center bg-green-50">
                <p className="text-sm text-green-700 mb-1">Claim at 67 (full)</p>
                <p className="text-xl font-bold text-green-700">{page.withSocialSecurity67}/yr</p>
                <p className="text-xs text-green-600 mt-1">Full benefit</p>
              </div>
              <div className="p-5 text-center">
                <p className="text-sm text-slate-500 mb-1">Claim at 70 (max)</p>
                <p className="text-xl font-bold text-[#000080]">{page.withSocialSecurity70}/yr</p>
                <p className="text-xs text-slate-500 mt-1">24% bonus over full</p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Social Security is the backbone of most American retirements. The average benefit in 2026
            is $1,813/month ($21,756/year) for someone claiming at 62. Every year you delay past 62
            increases your benefit — waiting until 67 gives you the full amount, and 70 maxes it out
            at roughly 24% above full retirement age.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Combined with your {page.annualIncome4Pct}/year from the 4% rule, claiming at 67
            gives you {page.withSocialSecurity67}/year. The question is whether you can afford to
            wait — or whether you need income now.
            {page.retirementAge && page.retirementAge < 62
              ? ` Retiring at ${page.retirementAge} means ${62 - page.retirementAge} years before your first Social Security check.`
              : ""}
          </p>
        </section>

        {/* Section 3: Healthcare */}
        {page.healthcareBridge && (
          <section className="mb-14 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">
              Healthcare Costs Before Medicare
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <div className="flex gap-3">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">The Healthcare Gap</h3>
                  <p className="text-red-700 leading-relaxed">{page.healthcareBridge}</p>
                </div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              This is often the biggest surprise for early retirees. Employer-sponsored health insurance
              typically costs $6,000-$7,000/year for individuals — but on the open market, expect
              $8,000-$18,000/year depending on age, state, and coverage level. ACA marketplace
              subsidies can help, but only if your modified adjusted gross income falls below
              certain thresholds.
            </p>
          </section>
        )}

        {/* Section 4: State Comparisons */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-amber-500" />
            Where {page.amountFormatted} Goes Furthest
          </h2>
          <p className="text-slate-600 mb-6">
            Location is the single biggest factor in how far your savings stretch. The same
            {" "}{page.amountFormatted} that barely lasts a decade in high-cost states can fund
            20+ years of comfortable living in affordable areas.
          </p>
          <StateComparisonTable page={page} />
        </section>

        {/* Section 5: The Crash Risk — Gold Angle */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
            <TrendingDown className="h-7 w-7 text-red-500" />
            The Hidden Risk: What Happens If the Market Crashes in Year 1
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            This is the risk nobody talks about until it&apos;s too late. <strong>Sequence-of-returns risk</strong> means
            a market crash in your first few years of retirement can permanently destroy your
            portfolio — even if markets fully recover later.
          </p>
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
            <h3 className="font-bold text-amber-400 mb-4 text-lg">The 2008 Scenario Applied to {page.amountFormatted}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-slate-300 mb-1">100% Stocks Portfolio</p>
                <p className="text-sm mb-2">S&P 500 lost <span className="text-red-400 font-bold">37%</span> in 2008</p>
                <p className="text-lg font-bold text-red-400">
                  {page.amountFormatted} → ${Math.round(page.amount * 0.63).toLocaleString()}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  With ongoing withdrawals, may never recover
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-slate-300 mb-1">85% Stocks + 15% Gold</p>
                <p className="text-sm mb-2">Gold gained <span className="text-green-400 font-bold">25%</span> in 2008</p>
                <p className="text-lg font-bold text-green-400">
                  {page.amountFormatted} → ${Math.round(page.amount * 0.85 * 0.63 + page.amount * 0.15 * 1.25).toLocaleString()}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Gold cushion preserves capital, faster recovery
                </p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            A 15% gold allocation ({page.goldAllocation15Pct}) won&apos;t prevent all losses —
            but it creates a buffer. When stocks crash, gold typically rises, cushioning the blow.
            For retirees making ongoing withdrawals, this difference can mean 5-10 additional years
            of portfolio life.
          </p>

          {/* In-Content CTA after the crash section */}
          <InContentCTA
            variant="emphasized"
            trackSource={`retire-${page.amountShort.toLowerCase()}-crash-section`}
          />
        </section>

        {/* Section 6: Inflation Erosion */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">
            Inflation: The Silent Threat to {page.amountFormatted}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
              <p className="text-sm text-red-600 mb-1">After 10 Years</p>
              <p className="text-xl font-bold text-red-700">{page.inflationErosion10yr}</p>
              <p className="text-xs text-red-500 mt-1">purchasing power</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
              <p className="text-sm text-red-600 mb-1">After 20 Years</p>
              <p className="text-xl font-bold text-red-700">{page.inflationErosion20yr}</p>
              <p className="text-xs text-red-500 mt-1">purchasing power</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
              <p className="text-sm text-red-600 mb-1">After 30 Years</p>
              <p className="text-xl font-bold text-red-700">{page.inflationErosion30yr}</p>
              <p className="text-xs text-red-500 mt-1">purchasing power</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            At 3% annual inflation, your {page.amountFormatted} loses roughly a quarter of its
            purchasing power every decade. That {page.monthlyIncome4Pct}/month withdrawal buys
            less each year — the same groceries, gas, and healthcare cost more. Gold has historically
            matched or exceeded inflation over 20+ year periods, which is why financial advisors
            recommend a 10-15% allocation for retirees.
          </p>
        </section>

        {/* Section 7: Strategies */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
            <Lightbulb className="h-7 w-7 text-amber-500" />
            How to Make {page.amountFormatted} Last Longer
          </h2>
          <div className="space-y-4">
            {page.strategies.map((strategy, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-slate-50 border border-slate-200 rounded-xl p-5"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#000080] text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-slate-700 leading-relaxed">{strategy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Case Study */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6 flex items-center gap-3">
            <User className="h-7 w-7 text-amber-500" />
            Real Example: {page.caseStudy.name}, Age {page.caseStudy.age}, Retired with {page.caseStudy.amount}
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <p className="text-sm text-amber-700 font-semibold mb-3 uppercase tracking-wide">
              {page.caseStudy.occupation}
            </p>
            <p className="text-slate-700 leading-relaxed text-lg italic">
              &ldquo;{page.caseStudy.story}&rdquo;
            </p>
            <p className="text-xs text-slate-500 mt-4">
              * Names and details changed. Based on composite profiles of real retirees in this savings range.
            </p>
          </div>
        </section>

        {/* Section 9: Gold Protection CTA */}
        <section className="mb-14 max-w-4xl">
          <div className="bg-[#000080] text-white rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-amber-400" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                How Gold Could Add 10+ Years to Your {page.amountFormatted}
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
              In 2008, the S&P 500 dropped 37%. Gold rose 25%. A 10-15% allocation to gold
              ({page.goldAllocation10Pct}–{page.goldAllocation15Pct} from a {page.amountFormatted} portfolio)
              creates a shock absorber that protects your retirement when markets crash.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-amber-300">10% Gold Allocation</p>
                <p className="text-2xl font-bold">{page.goldAllocation10Pct}</p>
                <p className="text-sm text-slate-400">Conservative protection</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-amber-300">15% Gold Allocation</p>
                <p className="text-2xl font-bold">{page.goldAllocation15Pct}</p>
                <p className="text-sm text-slate-400">Full crash protection</p>
              </div>
            </div>
            <AugustaCTA
              variant="inline"
              headline={page.ctaHeadline}
              subheadline={page.ctaSubheadline}
              directToAugusta={page.directToAugusta}
              augustaContext={page.augustaContext}
              trackSource={`retire-${page.amountShort.toLowerCase()}-gold-section`}
            />
          </div>
        </section>

        {/* Section 10: Interactive Tool Link */}
        <section className="mb-14 max-w-4xl">
          <Link
            href="/tools/retirement-calculator"
            className="group flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#B22234]/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#B22234]/10">
                <Calculator className="h-6 w-6 text-[#B22234]" />
              </div>
              <div>
                <h3 className="font-bold text-[#000080] text-lg group-hover:text-[#B22234] transition-colors">
                  Run Your Own Numbers
                </h3>
                <p className="text-slate-600 text-sm">
                  Use our retirement calculator to project your specific scenario with custom inputs.
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#B22234] transition-colors" />
          </Link>
        </section>

        {/* Section 11: Comparison Table */}
        <section className="mb-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">
            How {page.amountShort} Compares
          </h2>
          <ComparisonTable current={page} />
        </section>

        {/* Section 12: FAQ */}
        <FAQSection
          faqs={page.faqs}
          title={`Frequently Asked Questions About Retiring with ${page.amountFormatted}`}
          className="mb-14 max-w-3xl"
          includeSchema={false}
        />

        {/* Section 13: Related Content */}
        <RelatedContent
          title="Related Resources"
          links={relatedLinks}
          variant="cards"
          className="mb-14 max-w-4xl"
        />

        {/* Sources */}
        <div className="max-w-4xl mb-12">
          <SourcesSection
            sources={[
              { name: "Employee Benefit Research Institute — Retirement Confidence Survey", url: "https://www.ebri.org/retirement/retirement-confidence-survey" },
              { name: "U.S. Bureau of Labor Statistics — Consumer Expenditure Survey", url: "https://www.bls.gov/cex/" },
              { name: "Social Security Administration — Benefit Calculators", url: "https://www.ssa.gov/benefits/retirement/estimator.html" },
              { name: "IRS — Retirement Topics: Required Minimum Distributions", url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-required-minimum-distributions-rmds" },
              { name: "World Gold Council — Gold Performance Data", url: "https://www.gold.org/goldhub/data/gold-prices" },
            ]}
            lastVerified="March 2026"
          />
        </div>

        {/* Section 14: Footer CTA */}
        <div className="max-w-4xl">
          <AugustaCTA
            variant="footer"
            headline={page.ctaHeadline}
            subheadline={page.ctaSubheadline}
            directToAugusta={page.directToAugusta}
            augustaContext={page.augustaContext}
            trackSource={`retire-${page.amountShort.toLowerCase()}-footer`}
          />
        </div>
      </Container>

      <Footer />
    </main>
  );
}
