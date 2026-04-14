import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { SourcesSection } from "@/components/content/SourcesSection";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { createPageMetadata } from "@/lib/metadata";
import {
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BarChart3,
  TrendingUp,
  Landmark,
  ShieldCheck,
  DollarSign,
  AlertTriangle,
  Globe2,
  BookOpen,
  Scale,
  FileText,
  CheckCircle2,
} from "lucide-react";

import {
  recessionGoldData,
  decadeComparisons,
  worstCrashes,
  iraIndustryStats,
  iraBalancesByAge,
  retirementSavingsByAge,
  contributionLimitsHistory,
  goldIRAFees,
  companyComplaintData,
  enforcementActions,
  commonComplaintCategories,
  goldSupplyDemand,
  originalInsights,
  reportMetadata,
  sdiraMarketData,
} from "@/data/industry-report-2026";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Gold IRA Industry Report 2026 | Original Research & Data",
  description:
    "Comprehensive Gold IRA industry analysis with original research. Gold performance during recessions, fee comparisons, IRA market statistics, and consumer protection data. All statistics sourced from IRS, World Gold Council, Federal Reserve, and BBB.",
  url: "https://www.richdadretirement.com/gold-ira-industry-report-2026",
  type: "article",
  imageAlt: "Gold IRA Industry Report 2026 - Original Research & Data Analysis",
});

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PAGE_URL = "/gold-ira-industry-report-2026";
const SITE = "https://www.richdadretirement.com";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Gold IRA Industry Report 2026", url: PAGE_URL },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "How did gold perform during past US recessions?",
    answer:
      "Gold delivered positive returns during 5 of the 7 US recessions since 1973. During the 2007-2009 Great Recession, gold rose 12% while the S&P 500 fell 57%. During the 2020 COVID-19 recession, gold gained 8% while stocks dropped 34%. Gold performed weakest during rate-driven contractions like the 1980 recession (-5%) when aggressive Federal Reserve rate hikes temporarily suppressed gold prices.",
  },
  {
    question: "What is the average cost of a Gold IRA per year?",
    answer:
      "Total annual costs for a typical Gold IRA range from $200 to $400, including annual administration fees ($75-$300), segregated storage fees ($100-$300), and the one-time setup fee ($0-$100). On a $100,000 account, this represents just 0.2-0.4% annually, comparable to many actively managed mutual fund expense ratios. Dealer spreads (markups on metals) average 5% of the purchase price and are a one-time cost.",
  },
  {
    question: "How much are Americans investing in Gold IRAs?",
    answer:
      "The average Gold IRA investment size tripled from $35,000 in 2023 to $100,000 in 2024, according to major provider reports. This coincides with gold hitting multiple all-time highs. Total US IRA assets reached $19.2 trillion as of Q4 2025, with approximately 10% of Americans investing in gold through retirement accounts.",
  },
  {
    question: "Are Gold IRA companies regulated?",
    answer:
      "Gold IRA custodians are regulated by the IRS and state banking authorities. However, the dealers who sell precious metals are less tightly regulated. In 2024-2025, the CFTC fined two precious metals companies a combined $107 million for defrauding elderly investors. Red Rock Secured ($56M, 2024) and Safeguard Metals ($51M, 2025) both targeted retirees with inflated premiums. Checking a company's BBB rating and complaint history is essential.",
  },
  {
    question: "Why are central banks buying so much gold?",
    answer:
      "Central banks purchased 2,944 tonnes of gold across 2022-2024, more than the previous 6 years combined. This de-dollarization trend is driven by geopolitical tensions, sanctions risk, and a desire to diversify away from US Treasury holdings. In 2025, bar and coin demand hit a 12-year high of 1,374 tonnes, and 43% of central banks surveyed said they plan to increase gold reserves further.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function SectionHeader({
  icon: Icon,
  title,
  id,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-amber-600" />
      </div>
      <h2
        id={id}
        className="text-2xl md:text-3xl font-serif font-bold text-[#000080]"
      >
        {title}
      </h2>
    </div>
  );
}

function SourceNote({ text }: { text: string }) {
  return (
    <p className="text-xs text-slate-400 mt-3 italic">
      Source: {text}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Table of Contents
// ---------------------------------------------------------------------------

const tocItems = [
  { id: "key-findings", label: "Key Findings" },
  { id: "recession-performance", label: "Gold During Recessions" },
  { id: "decade-comparison", label: "Gold vs S&P 500 by Decade" },
  { id: "worst-crashes", label: "Worst Stock Market Crashes" },
  { id: "ira-market", label: "IRA Market Statistics" },
  { id: "fee-analysis", label: "Gold IRA Fee Analysis" },
  { id: "consumer-protection", label: "Consumer Protection" },
  { id: "supply-demand", label: "Gold Supply & Demand" },
  { id: "methodology", label: "Methodology" },
  { id: "sources", label: "Sources & References" },
  { id: "faq", label: "FAQ" },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIRAIndustryReportPage() {
  // Filter supply/demand data for display
  const aboveGroundData = goldSupplyDemand.filter(
    (d) => d.year === 2024 && !d.metric.includes("Below-Ground") && !d.metric.includes("Total Gold Demand") && !d.metric.includes("Central Bank") && !d.metric.includes("Bar & Coin") && !d.metric.includes("Gold ETF") && !d.metric.includes("All-Time") && !d.metric.includes("Top Central") && !d.metric.includes("Total Gold Demand Value")
  );
  const demandData2025 = goldSupplyDemand.filter((d) => d.year === 2025);
  const centralBankHistory = goldSupplyDemand.filter(
    (d) => d.metric.includes("Central Bank") && d.year !== 2025
  );

  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA Industry Report 2026 | Original Research & Data",
          description:
            "Comprehensive Gold IRA industry analysis with original research. Gold performance during recessions, fee comparisons, IRA market statistics, and consumer protection data.",
          slug: PAGE_URL,
          datePublished: "2026-04-14T08:00:00Z",
          dateModified: "2026-04-14T08:00:00Z",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript schema={breadcrumbSchema(breadcrumbs)} />

      <main className="bg-white min-h-screen">
        {/* ================================================================= */}
        {/* HERO */}
        {/* ================================================================= */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
          <Container>
            <Breadcrumbs />

            <div className="max-w-3xl mx-auto mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                <FileText className="w-4 h-4" />
                Published: April 14, 2026
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] leading-tight">
                Gold IRA Industry Report 2026
              </h1>
              <p className="mt-3 text-lg md:text-xl text-slate-600">
                Original Research &amp; Data Analysis.{" "}
                Every statistic sourced from the IRS, World Gold Council,
                Federal Reserve, Investment Company Institute, CFTC, and BBB.
              </p>

              <ArticleMeta
                publishDate="April 14, 2026"
                updateDate="April 14, 2026"
                readTime="20 min"
              />

              <AnswerFirst
                answer="The Gold IRA industry grew significantly in 2024-2025, with average investment sizes tripling from $35,000 to $100,000. Gold outperformed the S&P 500 in 5 of 7 US recessions since 1973, and central banks purchased a record 2,944 tonnes in 2022-2024."
                keyFacts={[
                  "Gold outperformed the S&P 500 during 5 of 7 US recessions since 1973",
                  "Average Gold IRA investment tripled from $35k to $100k in one year",
                  "Central banks bought 2,944 tonnes of gold in 2022-2024 -- more than the prior 6 years combined",
                  "Gold IRA annual fees ($200-$400) represent just 0.2-0.4% on a $100k account",
                  "CFTC fined two precious metals firms $107M combined in 2024-2025",
                  "Gold set 53 all-time price records in 2025 alone",
                ]}
                className="mt-6"
              />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* TABLE OF CONTENTS */}
        {/* ================================================================= */}
        <section className="py-8 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                In This Report
              </h2>
              <nav>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {i + 1}. {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 1. KEY FINDINGS */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16" id="key-findings">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={CheckCircle2}
                title="Key Findings"
                id="key-findings-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-8">
                Our analysis of IRS data, World Gold Council reports, Federal
                Reserve surveys, and CFTC enforcement actions revealed six
                findings that matter for anyone evaluating a Gold IRA in 2026.
              </p>

              <div className="space-y-4">
                {originalInsights.map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-sm font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.insight}
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          {item.dataPoints}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 italic">
                          Significance: {item.significance}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 2. GOLD PERFORMANCE DURING RECESSIONS */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 bg-slate-50" id="recession-performance">
          <Container>
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                icon={TrendingUp}
                title="Gold Performance During US Recessions"
                id="recession-performance-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                We analyzed gold prices during every NBER-dated US recession
                since the end of the gold standard in 1971. Gold delivered
                positive returns in 5 of 7 recessions, with the strongest
                outperformance during systemic credit crises.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Recession</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Period</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Gold Start</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Gold End</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Gold Change</th>
                        <th className="px-4 py-3 font-semibold text-red-700 text-right">S&P 500</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recessionGoldData.map((row, i) => {
                        const isPositive = row.goldChange.startsWith("+");
                        return (
                          <tr
                            key={row.recession}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-4 py-3 font-medium text-slate-900">
                              {row.recession}
                            </td>
                            <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                              {row.startDate} &ndash; {row.endDate}
                            </td>
                            <td className="px-4 py-3 text-right text-slate-600">
                              ${row.goldAtStart.toLocaleString()}
                            </td>
                            <td className="px-4 py-3 text-right text-slate-600">
                              ${row.goldAtEnd.toLocaleString()}
                            </td>
                            <td
                              className={`px-4 py-3 text-right font-bold ${
                                isPositive ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {row.goldChange}
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-red-600">
                              {row.sp500PeakToTrough}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="MacroTrends historical gold prices; NBER recession dates; BLS Gold Prices During and After the Great Recession" />

              {/* 2-Year After Recovery Table */}
              <h3 className="text-lg font-bold text-slate-900 mt-10 mb-4">
                Gold Recovery: 2 Years After Each Recession Ended
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Gold&rsquo;s strongest gains often came in the years following a
                recession, not during it. The table below shows where gold stood
                two years after each recession ended compared to where it was at
                the recession&rsquo;s start.
              </p>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Recession</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Gold at Start</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Gold 2 Yrs After End</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Total Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recessionGoldData.map((row, i) => {
                        const isPositive = row.gold2YrChange.startsWith("+");
                        return (
                          <tr
                            key={row.recession}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-4 py-3 font-medium text-slate-900">
                              {row.recession}
                            </td>
                            <td className="px-4 py-3 text-right text-slate-600">
                              ${row.goldAtStart.toLocaleString()}
                            </td>
                            <td className="px-4 py-3 text-right text-slate-600">
                              ${row.gold2YearsAfter.toLocaleString()}
                            </td>
                            <td
                              className={`px-4 py-3 text-right font-bold ${
                                isPositive ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {row.gold2YrChange}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="MacroTrends historical gold prices; NBER recession dates" />
            </div>
          </Container>
        </section>

        {/* Mid-article CTA */}
        <section className="py-8 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AugustaCTA
                variant="inline"
                headline="Protect Your Retirement With Gold"
                subheadline="Get Augusta's free Gold IRA guide and learn how gold performed during every recession since 1973."
                trackSource="industry-report-recession"
                augustaContext="mid-intent"
              />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 3. GOLD vs S&P 500 BY DECADE */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16" id="decade-comparison">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={BarChart3}
                title="Gold vs S&P 500 by Decade"
                id="decade-comparison-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                Gold and stocks trade leadership across economic cycles.
                Gold dominated during inflationary decades (1970s, 2000s, 2020s),
                while the S&P 500 led during low-inflation growth periods
                (1980s, 1990s, 2010s). Understanding this pattern helps
                investors time their allocation shifts.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Decade</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Gold CAGR</th>
                        <th className="px-4 py-3 font-semibold text-blue-700 text-right">S&P 500 CAGR</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {decadeComparisons.map((row, i) => (
                        <tr
                          key={row.decade}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3">
                            <span className="font-medium text-slate-900">{row.decade}</span>
                            <br />
                            <span className="text-xs text-slate-500">{row.context}</span>
                          </td>
                          <td className={`px-4 py-3 text-right font-bold ${
                            row.goldCAGR.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}>
                            {row.goldCAGR}
                          </td>
                          <td className={`px-4 py-3 text-right font-bold ${
                            row.sp500CAGR.startsWith("+") || row.sp500CAGR.startsWith("-") === false
                              ? "text-green-600"
                              : "text-red-600"
                          }`}>
                            {row.sp500CAGR}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                row.winner === "Gold"
                                  ? "bg-amber-100 text-amber-800"
                                  : row.winner === "S&P 500"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {row.winner}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="Monetary Metals; MacroTrends gold price vs stock market 100-year chart; VT Markets; World Gold Council" />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 3b. WORST STOCK MARKET CRASHES */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 bg-slate-50" id="worst-crashes">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={AlertTriangle}
                title="Gold During the 5 Worst Stock Market Crashes"
                id="worst-crashes-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                Gold acted as an effective hedge during 3 of 5 major crashes.
                When it failed (Black Monday 1987, Dot-Com), the crises were
                either too brief for gold to respond or occurred during a secular
                bear market for gold.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Event</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Dates</th>
                        <th className="px-4 py-3 font-semibold text-red-700 text-right">S&P 500</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Gold</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">Hedge?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {worstCrashes.map((row, i) => (
                        <tr
                          key={row.event}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3">
                            <span className="font-medium text-slate-900">{row.event}</span>
                            <br />
                            <span className="text-xs text-slate-500 leading-tight">{row.notes}</span>
                          </td>
                          <td className="px-4 py-3 text-slate-600 whitespace-nowrap text-xs">
                            {row.dates}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-red-600">
                            {row.sp500Drop}
                          </td>
                          <td className={`px-4 py-3 text-right font-bold ${
                            row.goldChange.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}>
                            {row.goldChange}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {row.goldAsHedge ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                Yes
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
                                No
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="MacroTrends; BLS; Hero Bullion; Carson Wealth; BullionVault; World Gold Council" />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 4. IRA MARKET STATISTICS */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16" id="ira-market">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={Landmark}
                title="IRA Market Statistics"
                id="ira-market-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-8">
                The US retirement market holds $45.8 trillion in assets,
                with IRAs accounting for $19.2 trillion (39%). Here is the
                latest data on IRA balances, contribution limits, and the
                self-directed IRA market.
              </p>

              {/* Industry Stats Grid */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                US IRA Market Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {iraIndustryStats.map((stat) => (
                  <div
                    key={stat.metric}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                  >
                    <p className="text-sm text-slate-500">{stat.metric}</p>
                    <p className="text-2xl font-bold text-[#000080] mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {stat.source} ({stat.date})
                    </p>
                  </div>
                ))}
              </div>

              {/* Self-Directed IRA Market */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Self-Directed IRA Market Data
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {sdiraMarketData.map((stat) => (
                  <div
                    key={stat.metric}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                  >
                    <p className="text-sm text-slate-500">{stat.metric}</p>
                    <p className="text-2xl font-bold text-[#000080] mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {stat.source} ({stat.date})
                    </p>
                  </div>
                ))}
              </div>

              {/* IRA Balances by Age */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Average IRA Balance by Generation
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Generation</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Ages</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Avg IRA Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iraBalancesByAge.map((row, i) => (
                        <tr
                          key={row.generation}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {row.generation}
                          </td>
                          <td className="px-4 py-3 text-slate-600">{row.ageGroup}</td>
                          <td className="px-4 py-3 text-right font-bold text-[#000080]">
                            {row.averageIRABalance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="Fidelity Investments, Q4 2024" />

              {/* Retirement Savings by Age */}
              <h3 className="text-lg font-bold text-slate-900 mt-10 mb-4">
                Total Retirement Savings by Age (All Accounts)
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Age Group</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Average</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Median</th>
                      </tr>
                    </thead>
                    <tbody>
                      {retirementSavingsByAge.map((row, i) => (
                        <tr
                          key={row.ageGroup}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {row.ageGroup}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-700">
                            {row.averageSavings}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-[#000080]">
                            {row.medianSavings}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-2">
                The large gap between average and median shows most Americans
                have far less saved than the &ldquo;average&rdquo; suggests.
                The median is a more accurate picture.
              </p>
              <SourceNote text="Federal Reserve Survey of Consumer Finances, 2022" />

              {/* Contribution Limits */}
              <h3 className="text-lg font-bold text-slate-900 mt-10 mb-4">
                IRA Contribution Limits (2020&ndash;2026)
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Year</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Under 50</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">50 &amp; Over</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-right">Catch-Up</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contributionLimitsHistory.map((row, i) => (
                        <tr
                          key={row.year}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {row.year}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-700">
                            ${row.under50.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-[#000080]">
                            ${row.over50.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-600">
                            ${row.catchUp.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="IRS.gov; Fidelity Investments" />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 5. GOLD IRA FEE ANALYSIS */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 bg-slate-50" id="fee-analysis">
          <Container>
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                icon={DollarSign}
                title="Gold IRA Fee Analysis"
                id="fee-analysis-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                We compiled fee data from CNBC Select, Yahoo Finance, Brighton
                Gold, and individual company disclosures to build the most
                comprehensive fee comparison available. Fees vary significantly
                between companies, so comparing is essential.
              </p>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Fee Type</th>
                        <th className="px-4 py-3 font-semibold text-green-700 text-right">Low</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Typical</th>
                        <th className="px-4 py-3 font-semibold text-red-700 text-right">High</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {goldIRAFees.map((row, i) => {
                        const isTotal = row.feeType.includes("Total");
                        return (
                          <tr
                            key={row.feeType}
                            className={`${
                              isTotal
                                ? "bg-amber-50 font-semibold"
                                : i % 2 === 0
                                ? "bg-white"
                                : "bg-slate-50/50"
                            }`}
                          >
                            <td className="px-4 py-3 text-slate-900">
                              {row.feeType}
                            </td>
                            <td className="px-4 py-3 text-right text-green-700">
                              {row.low}
                            </td>
                            <td className="px-4 py-3 text-right text-amber-700 font-bold">
                              {row.typical}
                            </td>
                            <td className="px-4 py-3 text-right text-red-700">
                              {row.high}
                            </td>
                            <td className="px-4 py-3 text-xs text-slate-500">
                              {row.notes}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="CNBC Select Apr 2026; Yahoo Finance; Brighton Gold 2026 fee breakdown; Money.com Mar 2026" />

              {/* Fee context box */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h4 className="font-bold text-blue-900 mb-2">Putting Fees in Context</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  On a $100,000 Gold IRA, typical annual costs of $250&ndash;$300
                  represent just <strong>0.25&ndash;0.30%</strong> of your
                  account value. That compares favorably to actively managed
                  mutual funds (average 0.66% expense ratio per ICI) and
                  financial advisor fees (typically 1.0%). The one-time dealer
                  spread (5% average) is the largest cost and should be your main
                  comparison point between companies.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Mid-article CTA */}
        <section className="py-8 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AugustaCTA
                variant="inline"
                headline="Compare Gold IRA Fees Before You Buy"
                subheadline="Augusta waives all fees for the first year on qualifying accounts. Get their free fee breakdown."
                trackSource="industry-report-fees"
                augustaContext="fees"
              />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 6. CONSUMER PROTECTION */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16" id="consumer-protection">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={ShieldCheck}
                title="Consumer Protection: Enforcement &amp; Complaints"
                id="consumer-protection-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-8">
                Regulatory enforcement against precious metals fraud has
                intensified. We tracked CFTC and SEC actions and compiled BBB
                complaint data for the largest Gold IRA companies.
              </p>

              {/* Enforcement Actions */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Major Enforcement Actions (2024&ndash;2025)
              </h3>
              <div className="space-y-4 mb-10">
                {enforcementActions.map((action) => (
                  <div
                    key={action.target}
                    className="bg-red-50 border border-red-200 rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-red-900">
                          {action.target} &mdash; {action.penalty} penalty ({action.year})
                        </p>
                        <p className="text-sm text-red-800 mt-1">
                          {action.summary}
                        </p>
                        <p className="text-xs text-red-600 mt-2">
                          Agency: {action.agency} | Victims: {action.victimCount} |
                          Source: {action.source}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Common Complaint Categories */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Most Common Complaint Categories Across the Industry
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Category</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">Frequency</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commonComplaintCategories.map((cat, i) => (
                        <tr
                          key={cat.category}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {cat.category}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                cat.frequency === "Most common"
                                  ? "bg-red-100 text-red-800"
                                  : cat.frequency === "Common"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {cat.frequency}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-600 text-xs">
                            {cat.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* BBB Ratings */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Top Gold IRA Companies: BBB Ratings
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Company</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">BBB Rating</th>
                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">3-Year Complaints</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companyComplaintData.map((row, i) => (
                        <tr
                          key={row.company}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {row.company}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                              {row.bbbRating}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center text-slate-700 font-medium">
                            {row.bbbComplaints3yr}
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-500">
                            {row.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="BBB.org company profiles; Business Consumer Alliance; CFTC Press Releases" />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 7. GOLD SUPPLY & DEMAND */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 bg-slate-50" id="supply-demand">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={Globe2}
                title="Gold Supply &amp; Demand (World Gold Council)"
                id="supply-demand-heading"
              />
              <p className="text-slate-600 leading-relaxed mb-8">
                The World Gold Council reported total gold demand exceeded 5,000
                tonnes and $555 billion for the first time in 2025. Here is the
                latest supply/demand breakdown.
              </p>

              {/* Above-Ground Supply */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Above-Ground Gold Stock (End of 2024)
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Category</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {aboveGroundData.map((row, i) => {
                        const isTotal = row.metric === "Total Above-Ground Gold";
                        return (
                          <tr
                            key={row.metric}
                            className={`${
                              isTotal
                                ? "bg-amber-50 font-semibold"
                                : i % 2 === 0
                                ? "bg-white"
                                : "bg-slate-50/50"
                            }`}
                          >
                            <td className="px-4 py-3 text-slate-900">{row.metric}</td>
                            <td className="px-4 py-3 text-right text-[#000080] font-bold">
                              {row.value} {row.unit}
                            </td>
                          </tr>
                        );
                      })}
                      {/* Below-ground */}
                      {goldSupplyDemand
                        .filter((d) => d.metric.includes("Below-Ground"))
                        .map((row) => (
                          <tr key={row.metric} className="bg-slate-50/50">
                            <td className="px-4 py-3 text-slate-900">{row.metric}</td>
                            <td className="px-4 py-3 text-right text-[#000080] font-bold">
                              {row.value} {row.unit}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="World Gold Council 'The Cube', end-2024 estimate; USGS Mineral Commodity Summaries" />

              {/* 2025 Demand Highlights */}
              <h3 className="text-lg font-bold text-slate-900 mt-10 mb-4">
                2025 Gold Demand Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {demandData2025.map((stat) => (
                  <div
                    key={stat.metric}
                    className="bg-white border border-slate-200 rounded-xl p-5"
                  >
                    <p className="text-sm text-slate-500">{stat.metric}</p>
                    <p className="text-2xl font-bold text-[#000080] mt-1">
                      {stat.value} <span className="text-sm font-normal text-slate-500">{stat.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
              <SourceNote text="World Gold Council, Gold Demand Trends Full Year 2025; Central Bank Gold Reserves Survey 2025" />

              {/* Central Bank Buying History */}
              <h3 className="text-lg font-bold text-slate-900 mt-10 mb-4">
                Central Bank Gold Purchases (Historical Context)
              </h3>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700">Year</th>
                        <th className="px-4 py-3 font-semibold text-slate-700">Description</th>
                        <th className="px-4 py-3 font-semibold text-amber-700 text-right">Tonnes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {centralBankHistory.map((row, i) => (
                        <tr
                          key={`${row.metric}-${row.year}`}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {row.year}
                          </td>
                          <td className="px-4 py-3 text-slate-600">{row.metric}</td>
                          <td className="px-4 py-3 text-right font-bold text-[#000080]">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <SourceNote text="World Gold Council, Gold Demand Trends Full Year 2024 & 2025" />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 8. METHODOLOGY */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16" id="methodology">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                icon={BookOpen}
                title="Methodology"
                id="methodology-heading"
              />
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  This report was compiled by the Rich Dad Retirement research
                  team. Every statistic includes its original source and date.
                  Our methodology:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Gold price data</strong> sourced from MacroTrends
                      historical gold prices, which aggregates London Bullion
                      Market Association (LBMA) fixing prices.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Recession dates</strong> use official NBER Business
                      Cycle Dating Committee designations. Gold prices at
                      recession start and end dates are approximate monthly
                      averages.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>IRA market data</strong> drawn from the Investment
                      Company Institute (ICI) Quarterly Retirement Market Data
                      and the ICI 2025 Investment Company Fact Book.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>IRA balance data</strong> from Fidelity
                      Investments Q4 2024 reports. Retirement savings figures
                      from the Federal Reserve Survey of Consumer Finances (2022,
                      the most recent available).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Fee data</strong> compiled from CNBC Select (April
                      2026), Yahoo Finance, Brighton Gold (2026 fee breakdown),
                      Money.com, and individual company disclosures.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Supply and demand data</strong> from World Gold
                      Council Gold Demand Trends reports (Full Year 2024 and
                      2025) and the Central Bank Gold Reserves Survey 2025.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Consumer protection data</strong> from CFTC
                      enforcement press releases, SEC filings, and Better
                      Business Bureau company profiles verified in early 2026.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Contribution limits</strong> from IRS.gov
                      Publication 590-A and Fidelity Investments.
                    </span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-6">
                  This report is updated as new data becomes available. All
                  original analysis represents the views of the Rich Dad
                  Retirement editorial team and does not constitute financial
                  advice. We receive affiliate compensation from some companies
                  mentioned in this report. See our{" "}
                  <a
                    href="/editorial-policy"
                    className="text-blue-700 hover:text-blue-900 underline"
                  >
                    editorial policy
                  </a>{" "}
                  for our full disclosure.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* 9. SOURCES */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 bg-slate-50" id="sources">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">
                Data Sources
              </h2>
              <p className="text-slate-600 mb-6">
                Every statistic in this report is traceable to the following
                primary sources. We encourage journalists, researchers, and
                financial writers to cite this page and verify our data against
                the originals.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                {reportMetadata.dataSources.map((source, i) => (
                  <li key={i} className="leading-relaxed">
                    {source}
                  </li>
                ))}
              </ol>
              <p className="text-xs text-slate-400 mt-6">
                Report published: {reportMetadata.publishDate} |
                Last updated: {reportMetadata.lastUpdated} |
                URL: {reportMetadata.url}
              </p>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="py-8 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AugustaCTA
                variant="default"
                headline="Ready to Protect Your Retirement?"
                subheadline="Augusta Precious Metals has zero BBB complaints and offers the industry's most transparent fee structure."
                trackSource="industry-report-bottom"
                augustaContext="default"
              />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* FAQ */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16" id="faq">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={faqs} includeSchema={false} />
            </div>
          </Container>
        </section>

        {/* ================================================================= */}
        {/* AUTHOR BOX (dark section) */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 bg-slate-900">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AuthorBox showCredentials showFactChecker />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
