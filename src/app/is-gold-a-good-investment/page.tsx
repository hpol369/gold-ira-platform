import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { InContentCTA } from "@/components/widgets/InContentCTA";
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
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Building2,
  AlertTriangle,
  Scale,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Landmark,
} from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Is Gold a Good Investment in 2026? What the Data Shows",
  description:
    "Is gold a good investment? We break down 20 years of data, recession performance, central bank buying, and who should (and shouldn't) own gold in 2026.",
  url: "https://www.richdadretirement.com/is-gold-a-good-investment",
  type: "article",
  imageAlt: "Is Gold a Good Investment? Data-backed analysis for 2026",
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/is-gold-a-good-investment";
const SITE = "https://www.richdadretirement.com";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Is Gold a Good Investment?", url: PAGE_URL },
];

const faqs = [
  {
    question: "Is gold a safe investment?",
    answer:
      "Gold is one of the safest long-term stores of value in human history. It has never gone to zero, unlike individual stocks or bonds. However, gold can lose 20-30% of its value in shorter timeframes. Over any 20-year period since 1971, gold has delivered positive real returns (above inflation). For retirement investors, gold is safest when held as 10-20% of a diversified portfolio rather than your entire nest egg.",
  },
  {
    question: "Will gold go up in 2026?",
    answer:
      "Most major bank analysts expect gold prices to remain strong in 2026. The key drivers are record central bank buying (over 1,000 tonnes per year since 2022), U.S. national debt exceeding $36 trillion, persistent inflation above the Fed's 2% target, and ongoing geopolitical instability. While short-term pullbacks are always possible, the structural case for gold is the strongest it has been in decades.",
  },
  {
    question: "Is gold better than stocks?",
    answer:
      "Gold and stocks serve different purposes. Stocks have historically delivered higher average annual returns (about 10% vs gold's 8% since 2000), but stocks can crash 40-50% in a single year. Gold tends to rise when stocks fall — during 2008, gold gained 25% while the S&P 500 lost 37%. The smartest approach is owning both: stocks for growth and gold for protection.",
  },
  {
    question: "How much gold should I own?",
    answer:
      "Financial advisors generally recommend allocating 5-20% of your portfolio to gold and precious metals. If you are over 55, closer to retirement, or worried about inflation and market crashes, 15-20% is reasonable. Younger investors with decades until retirement may be fine with 5-10%. The goal is meaningful protection without over-concentrating in a single asset.",
  },
  {
    question: "What are the downsides of investing in gold?",
    answer:
      "Gold does not pay dividends or interest, so you will not receive income from your holdings. During strong stock bull markets (like 2013-2019), gold can underperform equities significantly. Gold also has storage and insurance costs if you hold physical metal. Short-term price swings of 10-20% happen regularly. And some gold dealers charge high premiums — always compare prices before buying.",
  },
  {
    question: "Is gold a good investment for retirement?",
    answer:
      "Yes. Gold is particularly well-suited for retirement portfolios because it protects against the two biggest retirement risks: inflation and market crashes. A Gold IRA lets you hold physical gold inside a tax-advantaged retirement account, giving you the protection of real metal with the tax benefits of an IRA. You can roll over funds from a 401(k) or existing IRA without penalties or taxes.",
  },
  {
    question: "Should I buy physical gold or a gold ETF?",
    answer:
      "For retirement savings, physical gold in a Gold IRA is generally the better choice. You own real metal with zero counterparty risk — no fund manager stands between you and your gold. Gold ETFs like GLD are better for short-term trading but charge annual fees (0.40% for GLD) that erode your position over decades. If you are buying gold for long-term security, physical gold is the way to go.",
  },
  {
    question: "Is it too late to buy gold at record prices?",
    answer:
      "People asked this same question when gold hit $300 in 2002, $1,000 in 2009, and $1,800 in 2020. In every case, long-term holders came out ahead. The factors driving gold — government debt, inflation, central bank demand — are structural and long-lasting. For retirement investors with a 10-20 year horizon, today's prices may look like a bargain in hindsight.",
  },
];

const performanceData = [
  { period: "1 Year (2025)", gold: "+11%", sp500: "+8%", bonds: "+2%", inflation: "+3.2%" },
  { period: "5 Years (2021-2025)", gold: "+62%", sp500: "+55%", bonds: "-5%", inflation: "+22%" },
  { period: "10 Years (2016-2025)", gold: "+95%", sp500: "+145%", bonds: "+8%", inflation: "+32%" },
  { period: "20 Years (2006-2025)", gold: "+380%", sp500: "+290%", bonds: "+45%", inflation: "+62%" },
];

const recessionData = [
  {
    event: "2008 Financial Crisis",
    period: "Sep 2008 - Mar 2009",
    gold: "+25.0%",
    goldColor: "text-green-600",
    sp500: "-36.7%",
    sp500Color: "text-red-600",
    notes: "Lehman Brothers collapse; gold rallied as a safe haven",
  },
  {
    event: "COVID-19 Crash",
    period: "Feb 2020 - Apr 2020",
    gold: "+3.5%",
    goldColor: "text-green-600",
    sp500: "-19.6%",
    sp500Color: "text-red-600",
    notes: "Brief dip then gold surged to $2,075 by August 2020",
  },
  {
    event: "2022 Inflation Spike",
    period: "Jan 2022 - Sep 2022",
    gold: "-3.8%",
    goldColor: "text-[#D4A94E]",
    sp500: "-23.9%",
    sp500Color: "text-red-600",
    notes: "Fed hiked rates aggressively; gold held better than stocks",
  },
  {
    event: "Dot-Com Bust",
    period: "Mar 2000 - Oct 2002",
    gold: "+12.4%",
    goldColor: "text-green-600",
    sp500: "-44.7%",
    sp500Color: "text-red-600",
    notes: "Gold quietly gained while tech stocks collapsed",
  },
];

const investmentComparisonData = [
  {
    feature: "Ownership",
    goldIRA: "Physical coins/bars in your name",
    physical: "Physical coins/bars at home or in a vault",
    etf: "Fund shares — you never own real metal",
  },
  {
    feature: "Tax advantages",
    goldIRA: "Tax-deferred or tax-free (Roth) growth",
    physical: "Capital gains tax when you sell",
    etf: "Capital gains tax; some taxed as collectibles at 28%",
  },
  {
    feature: "Annual costs",
    goldIRA: "$150-$300/yr custodian + storage",
    physical: "$0 at home; $100-$300/yr vault storage",
    etf: "0.25%-0.40% expense ratio per year",
  },
  {
    feature: "Counterparty risk",
    goldIRA: "Minimal — allocated gold in insured depository",
    physical: "None if self-stored",
    etf: "Multiple — fund issuer, custodian bank, market maker",
  },
  {
    feature: "Liquidity",
    goldIRA: "Sell through custodian (1-3 days)",
    physical: "Sell to dealer (same day, may lose 2-5%)",
    etf: "Sell on stock exchange instantly",
  },
  {
    feature: "Best for",
    goldIRA: "Retirement savings, long-term protection",
    physical: "Emergency preparedness, tangible security",
    etf: "Short-term trading, easy portfolio rebalancing",
  },
];

const sources = [
  {
    name: "World Gold Council — Gold Demand Trends 2024",
    url: "https://www.gold.org/goldhub/research/gold-demand-trends",
    accessDate: "March 2026",
  },
  {
    name: "Federal Reserve Economic Data (FRED) — Gold Fixing Price",
    url: "https://fred.stlouisfed.org/series/GOLDAMGBD228NLBM",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Bureau of Labor Statistics — Consumer Price Index",
    url: "https://www.bls.gov/cpi/",
    accessDate: "March 2026",
  },
  {
    name: "S&P Global — S&P 500 Historical Returns",
    url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Treasury — Debt to the Penny",
    url: "https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/",
    accessDate: "March 2026",
  },
  {
    name: "International Monetary Fund — Currency Composition of Official Foreign Exchange Reserves",
    url: "https://data.imf.org/regular.aspx?key=41175",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function IsGoldAGoodInvestmentPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Is Gold a Good Investment in 2026? What the Data Shows",
          description:
            "Data-backed analysis of gold as an investment: 20 years of performance data, recession track record, central bank buying trends, and expert allocation guidance.",
          slug: PAGE_URL,
          datePublished: "2025-06-15T08:00:00Z",
          dateModified: "2026-03-19T08:00:00Z",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript schema={breadcrumbSchema(breadcrumbs)} />

      <main className="bg-white min-h-screen">
        {/* ----------------------------------------------------------------- */}
        {/* Hero / H1 + AnswerFirst */}
        {/* ----------------------------------------------------------------- */}
        <section className="bg-[#0C0D18] pt-8 pb-12 md:pt-12 md:pb-16">
          <Container>
            <Breadcrumbs />

            <div className="max-w-3xl mx-auto mt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] leading-tight">
                Is Gold a Good Investment?
              </h1>
              <p className="mt-3 text-lg md:text-xl text-[#D0CCC4]">
                An honest, data-backed look at gold&rsquo;s track record &mdash;
                the good, the bad, and who it actually makes sense for in 2026.
              </p>

              <ArticleMeta
                publishDate="June 15, 2025"
                updateDate="March 19, 2026"
                readTime="12 min read"
              />

              <AnswerFirst
                answer="Yes, gold is a good investment for most people in 2026 — but it works best as 10-20% of a diversified portfolio, not a bet-the-farm play. Gold has beaten inflation over every 20-year period since 1971, outperformed stocks during every major recession, and is being stockpiled at record levels by central banks worldwide. The U.S. national debt topping $36 trillion makes gold's role as a dollar hedge more relevant than it's been in decades."
                keyFacts={[
                  "Gold returned roughly 380% over the past 20 years, outpacing the S&P 500's 290%",
                  "Central banks bought over 1,000 tonnes of gold per year in 2022, 2023, and 2024",
                  "During the 2008 crash, gold rose 25% while the S&P 500 fell 37%",
                  "Financial advisors recommend 10-20% gold allocation for retirement investors",
                ]}
                className="mt-6"
              />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Performance Comparison Table */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="performance-comparison"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Gold vs. Stocks vs. Bonds: 20 Years of Data
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Forget the hype. Here are the actual numbers. Gold gets called a
                &ldquo;pet rock&rdquo; by some Wall Street analysts, but the
                data tells a different story &mdash; especially if you zoom out
                beyond the last couple of years.
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Period
                        </th>
                        <th className="px-4 py-3 font-semibold text-amber-700">
                          Gold
                        </th>
                        <th className="px-4 py-3 font-semibold text-blue-700">
                          S&amp;P 500
                        </th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">
                          Bonds
                        </th>
                        <th className="px-4 py-3 font-semibold text-red-600">
                          Inflation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceData.map((row) => (
                        <tr
                          key={row.period}
                          className="border-t border-[#2A2D42]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                            {row.period}
                          </td>
                          <td className="px-4 py-3 font-semibold text-amber-700">
                            {row.gold}
                          </td>
                          <td className="px-4 py-3 text-blue-700">
                            {row.sp500}
                          </td>
                          <td className="px-4 py-3 text-[#A8A39A]">
                            {row.bonds}
                          </td>
                          <td className="px-4 py-3 text-red-600">
                            {row.inflation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Sources: FRED, S&amp;P Global, BLS CPI data. Returns are total
                  (not annualized). Bond returns based on Bloomberg U.S.
                  Aggregate Bond Index.
                </p>
              </div>

              <div className="mt-6 bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5">
                <p className="text-[#D0CCC4] leading-relaxed">
                  <strong className="text-[#F6F4EF]">The takeaway:</strong> Over
                  20 years, gold outperformed both the S&amp;P 500 and bonds.
                  Over 10 years, the S&amp;P 500 did better. Gold and stocks take
                  turns leading &mdash; that is exactly why you want both. When
                  one zigs, the other zags. That is diversification working the
                  way it should.
                </p>
              </div>

              <p className="mt-6 text-[#D0CCC4] leading-relaxed">
                Here is what really matters for people in their 50s and 60s: gold
                crushed the 20-year period because it includes the 2008 crash and
                the inflation surge of 2021-2024. If you are within 10-15 years
                of retirement, you cannot afford another 2008. Gold does not just
                grow your money &mdash; it protects it when everything else falls
                apart.
              </p>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Recession Performance */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                </div>
                <h2
                  id="recession-performance"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  How Gold Performs When the Economy Crashes
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                This is where gold earns its keep. Nobody buys gold because they
                expect smooth sailing &mdash; you buy it for the storms. Here is
                how gold performed during every major market crash in the past 25
                years:
              </p>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Crisis
                        </th>
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Period
                        </th>
                        <th className="px-4 py-3 font-semibold text-amber-700">
                          Gold
                        </th>
                        <th className="px-4 py-3 font-semibold text-blue-700">
                          S&amp;P 500
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recessionData.map((row) => (
                        <tr
                          key={row.event}
                          className="border-t border-[#2A2D42]"
                        >
                          <td className="px-4 py-3">
                            <span className="font-medium text-[#F6F4EF]">
                              {row.event}
                            </span>
                            <span className="block text-xs text-[#A8A39A] mt-0.5">
                              {row.notes}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[#A8A39A] text-sm">
                            {row.period}
                          </td>
                          <td
                            className={`px-4 py-3 font-semibold ${row.goldColor}`}
                          >
                            {row.gold}
                          </td>
                          <td
                            className={`px-4 py-3 font-semibold ${row.sp500Color}`}
                          >
                            {row.sp500}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42]">
                  Source: FRED gold prices, S&amp;P Global market data. Returns
                  measured peak-to-trough for each crisis.
                </p>
              </div>

              <p className="mt-6 text-[#D0CCC4] leading-relaxed">
                Look at that 2008 row closely. While 401(k) holders watched
                nearly 40% of their savings disappear, gold investors were
                actually making money. That is not some lucky fluke &mdash; gold
                has served as crisis insurance for thousands of years. When
                governments print money, when banks fail, when the market
                panics, people run to gold. They always have, and they always
                will.
              </p>

              <div className="mt-6 bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[#D0CCC4] leading-relaxed text-sm">
                    <strong>Real talk:</strong> Gold did not shoot the lights
                    out during COVID &mdash; it gained 3.5% during the initial
                    crash, then surged to all-time highs by August 2020. And in
                    2022 when the Fed was raising rates, gold dipped briefly
                    before recovering. Gold is not magic. But it consistently
                    loses less than stocks when things go bad, and that
                    difference compounds massively over a retirement.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Who Should / Shouldn't Invest */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-green-600" />
                </div>
                <h2
                  id="who-should-invest"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Who Should (and Shouldn&rsquo;t) Invest in Gold
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-8">
                Gold is not right for everyone, and anyone who tells you
                otherwise is trying to sell you something. Here is an honest
                breakdown:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Should */}
                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-green-800 mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                    Gold makes sense if you&hellip;
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Are within 15 years of retirement and cannot afford a 40% portfolio crash",
                      "Have most of your savings in a 401(k) or IRA that is 100% stocks and bonds",
                      "Are worried about inflation eating away at your purchasing power",
                      "Don't trust the government to stop printing money (the national debt is $36+ trillion and climbing)",
                      "Want an asset that has held value for 5,000 years, not just the last bull market",
                      "Already have $50K+ saved and want real diversification beyond Wall Street",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-green-800"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[rgba(46,139,87,0.08)]0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shouldn't */}
                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-red-800 mb-4">
                    <XCircle className="w-5 h-5" />
                    Gold may not be right if you&hellip;
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Need income from your investments right now (gold pays no dividends)",
                      "Are in your 20s or 30s with decades to ride out stock market volatility",
                      "Want to get rich quick — gold is a wealth preserver, not a moonshot",
                      "Are putting all your money into gold instead of diversifying",
                      "Have high-interest debt that should be paid off first",
                      "Expect gold to go straight up — it can and does drop 10-20% in the short term",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-red-800"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[rgba(220,38,38,0.08)]0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Central Bank Buying */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-blue-600" />
                </div>
                <h2
                  id="central-bank-buying"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Central Banks Are Stockpiling Gold &mdash; Here&rsquo;s Why
                  That Matters
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Forget what financial TV pundits say about gold. Watch what the
                biggest, smartest money on the planet actually does. Central
                banks &mdash; the institutions that literally print currency
                &mdash; have been buying gold at the fastest pace in 55 years.
              </p>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { stat: "1,037", unit: "tonnes", label: "Gold bought by central banks in 2023", highlight: true },
                    { stat: "1,082", unit: "tonnes", label: "Gold bought by central banks in 2024", highlight: true },
                    { stat: "36,000+", unit: "tonnes", label: "Total central bank gold reserves worldwide", highlight: false },
                    { stat: "$36T+", unit: "", label: "U.S. national debt (and climbing)", highlight: false },
                  ].map((item) => (
                    <div key={item.label}>
                      <p
                        className={`text-2xl md:text-3xl font-bold ${item.highlight ? "text-[#D4A94E]" : "text-[#F6F4EF]"}`}
                      >
                        {item.stat}
                        {item.unit && (
                          <span className="text-sm font-normal text-[#A8A39A] ml-1">
                            {item.unit}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-[#A8A39A] mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-4">
                China, India, Poland, Turkey, and dozens of other nations are
                aggressively adding gold to their reserves. Why? Because they see
                the same thing you probably feel in your gut: the U.S. dollar is
                being devalued by trillions in government spending, and gold is
                the one asset no government can print more of.
              </p>
              <p className="text-[#D0CCC4] leading-relaxed">
                When central banks &mdash; the people who literally control the
                money supply &mdash; are buying gold at record levels, that is
                the strongest endorsement gold can get. They are not buying it
                for speculation. They are buying it because they know currencies
                lose value over time, and gold does not.
              </p>

              <div className="mt-6 bg-[#121423] border border-blue-200 rounded-xl p-5">
                <p className="text-[#D0CCC4] leading-relaxed text-sm">
                  <strong className="text-[#F6F4EF]">Think about it this way:</strong>{" "}
                  If your neighbor told you gold was a good investment, you might
                  be skeptical. But when the central banks of China, India, and
                  40+ other nations are collectively buying over 1,000 tonnes a
                  year, that is not a rumor &mdash; that is institutional
                  conviction backed by hundreds of billions of dollars.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Mid-article CTA */}
        {/* ----------------------------------------------------------------- */}
        <Container className="py-8">
          <div className="max-w-3xl mx-auto">
            <InContentCTA
              variant="emphasized"
              trackSource="is-gold-good-investment"
            />
          </div>
        </Container>

        {/* ----------------------------------------------------------------- */}
        {/* Gold IRA vs Physical vs ETFs */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="how-to-invest"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Three Ways to Invest in Gold (and Which Is Best for
                  Retirement)
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Once you decide gold belongs in your portfolio, the next question
                is how. There are three main options, and the best one depends on
                your situation:
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Feature
                        </th>
                        <th className="px-4 py-3 font-semibold text-amber-700">
                          Gold IRA
                        </th>
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Physical Gold
                        </th>
                        <th className="px-4 py-3 font-semibold text-blue-700">
                          Gold ETF
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {investmentComparisonData.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-t border-[#2A2D42]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                            {row.feature}
                          </td>
                          <td className="px-4 py-3 text-[#D0CCC4]">
                            {row.goldIRA}
                          </td>
                          <td className="px-4 py-3 text-[#D0CCC4]">
                            {row.physical}
                          </td>
                          <td className="px-4 py-3 text-[#D0CCC4]">
                            {row.etf}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Gold IRA costs based on major custodians (Augusta, Goldco,
                  Noble Gold). ETF data based on GLD and IAU.
                </p>
              </div>

              <div className="mt-6 space-y-4 text-[#D0CCC4] leading-relaxed">
                <p>
                  <strong className="text-[#F6F4EF]">For retirement savings,
                  a Gold IRA is the clear winner.</strong> You get the crisis
                  protection of owning real, physical gold combined with the tax
                  advantages of an IRA. Your gold grows tax-deferred (or
                  tax-free in a Roth), and you can roll over funds from your
                  existing 401(k) or IRA without paying a dime in taxes or
                  penalties.
                </p>
                <p>
                  Physical gold at home is great for emergency preparedness, but
                  it gives you no tax advantages and can be a security risk. Gold
                  ETFs are convenient for traders, but you never own actual gold
                  &mdash; just shares in a fund &mdash; and the annual fees eat
                  into your returns over decades.
                </p>
              </div>

              <div className="mt-6 bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#D4A94E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#D0CCC4] leading-relaxed text-sm">
                      <strong className="text-[#F6F4EF]">
                        How a Gold IRA rollover works:
                      </strong>{" "}
                      You open a self-directed IRA with a Gold IRA company, then
                      transfer funds from your existing 401(k), 403(b), TSP, or
                      IRA. No taxes, no penalties. Your Gold IRA custodian
                      purchases IRS-approved gold coins or bars, which are stored
                      in a secure, insured depository. The whole process takes
                      about 2-3 weeks.
                    </p>
                    <Link
                      href="/guide/gold-ira-guide"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4A94E] hover:text-[#F6F4EF] mt-2"
                    >
                      Read our full Gold IRA guide
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Why 2026 Specifically */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="why-2026"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Why 2026 Is a Particularly Strong Year for Gold
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Gold has been a solid investment for decades, but the macro setup
                right now is about as bullish as it gets. Here are the five
                biggest factors:
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "National debt is past the point of no return",
                    body: "The U.S. government owes over $36 trillion. Interest payments alone now exceed the defense budget. Every dollar of new debt weakens the currency, and gold is the world's oldest hedge against currency debasement.",
                  },
                  {
                    num: "2",
                    title: "Inflation is sticky, not beaten",
                    body: "Despite Fed rate hikes, real-world prices for food, energy, insurance, and healthcare remain elevated. The official CPI understates what retirees actually pay. Gold protects purchasing power when the dollar buys less every year.",
                  },
                  {
                    num: "3",
                    title: "Central banks are buying at record pace",
                    body: "Over 1,000 tonnes per year for three straight years. China alone added hundreds of tonnes. When the people who print money are buying gold instead of trusting their own currencies, that tells you everything.",
                  },
                  {
                    num: "4",
                    title: "Geopolitical risk is elevated",
                    body: "Ongoing conflicts, trade wars, and sanctions are driving nations to diversify away from U.S. dollar reserves. The BRICS bloc is actively exploring alternatives to dollar-based trade. All of this increases demand for gold.",
                  },
                  {
                    num: "5",
                    title: "Stock valuations are stretched",
                    body: "S&P 500 price-to-earnings ratios are historically elevated. A correction is not a matter of if but when. Investors who are 100% stocks and bonds are sitting ducks. Gold provides genuine portfolio protection when equities correct.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-[#161828] border border-[#2A2D42] rounded-xl p-5"
                  >
                    <h3 className="font-bold text-[#F6F4EF] mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mr-2">
                        {item.num}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-[#D0CCC4] leading-relaxed text-sm pl-9">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* How Much to Allocate */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#121423] flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#D0CCC4]" />
                </div>
                <h2
                  id="allocation"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  How Much of Your Portfolio Should Be in Gold?
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                The right allocation depends on your age, risk tolerance, and
                how close you are to retirement. Here is what most financial
                advisors recommend:
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Investor Profile
                        </th>
                        <th className="px-4 py-3 font-semibold text-amber-700">
                          Suggested Gold Allocation
                        </th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">
                          Why
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          profile: "Under 40, decades to retirement",
                          allocation: "5-10%",
                          why: "Long time horizon to ride out stock volatility; gold provides baseline protection",
                        },
                        {
                          profile: "40-55, building toward retirement",
                          allocation: "10-15%",
                          why: "Growing need for downside protection as retirement approaches",
                        },
                        {
                          profile: "55-65, within 10 years of retirement",
                          allocation: "15-20%",
                          why: "Cannot afford a major crash; gold hedges sequence-of-returns risk",
                        },
                        {
                          profile: "65+, in retirement",
                          allocation: "10-20%",
                          why: "Preserving purchasing power is priority; gold offsets inflation and market dips",
                        },
                      ].map((row) => (
                        <tr
                          key={row.profile}
                          className="border-t border-[#2A2D42]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                            {row.profile}
                          </td>
                          <td className="px-4 py-3 font-semibold text-amber-700">
                            {row.allocation}
                          </td>
                          <td className="px-4 py-3 text-[#A8A39A] text-sm">
                            {row.why}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-6 text-[#D0CCC4] leading-relaxed">
                The most common mistake is going all-in on anything &mdash;
                including gold. Gold works best as an insurance policy inside a
                diversified portfolio. You would not put 100% of your savings in
                any single stock, and you should not put 100% in gold either.
                But zero gold? That is like driving without insurance. You might
                be fine for years &mdash; until you are not.
              </p>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* FAQ Section */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FAQSection
                faqs={faqs}
                title="Frequently Asked Questions About Gold as an Investment"
                includeSchema={false}
              />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Sources */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SourcesSection
                sources={sources}
                lastVerified="March 2026"
              />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Author Box */}
        {/* ----------------------------------------------------------------- */}
        <Container className="pb-12">
          <div className="max-w-3xl mx-auto">
            <AuthorBox />
          </div>
        </Container>

        {/* ----------------------------------------------------------------- */}
        {/* Augusta CTA */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <AugustaCTA
              variant="footer"
              headline="Ready to Protect Your Retirement with Gold?"
              subheadline="Get a free Gold IRA guide from Augusta Precious Metals — the top-rated gold company in America. No pressure, no obligation."
              trackSource="is-gold-good-investment"
              augustaContext="default"
            />
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Related Content */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 border-t border-[#2A2D42]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AutoRelatedContent currentUrl={PAGE_URL} />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
