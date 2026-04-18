import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
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
  Globe2,
  TrendingUp,
  Landmark,
  ShieldCheck,
  DollarSign,
  Users,
  Building2,
  Quote,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Gold IRA Statistics 2026: Industry Data & Market Trends",
  description:
    "Definitive Gold IRA industry statistics for 2026. Gold price data, central bank buying, IRA market size, crisis performance, and costs — cited by journalists and financial writers.",
  url: "https://www.richdadretirement.com/gold-ira-statistics",
  type: "article",
  imageAlt: "Gold IRA Statistics 2026 — Industry Data & Market Trends",
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/gold-ira-statistics";
const SITE = "https://www.richdadretirement.com";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Gold IRA Statistics 2026", url: PAGE_URL },
];

// --- Key stats grid ---

interface KeyStat {
  label: string;
  value: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
}

const keyStats: KeyStat[] = [
  {
    label: "Gold Spot Price",
    value: "$3,040+",
    subtext: "Per troy ounce (March 2026)",
    icon: DollarSign,
  },
  {
    label: "Gold YTD Return",
    value: "+12.4%",
    subtext: "Year-to-date through Q1 2026",
    icon: TrendingUp,
  },
  {
    label: "Central Bank Buying",
    value: "1,082 tonnes",
    subtext: "Net purchases in 2024 (record territory)",
    icon: Landmark,
  },
  {
    label: "U.S. National Debt",
    value: "$36.2T+",
    subtext: "As of March 2026 (U.S. Treasury)",
    icon: Building2,
  },
  {
    label: "Gold IRA Industry Size",
    value: "$30B+",
    subtext: "Estimated AUM across all custodians",
    icon: Globe2,
  },
  {
    label: "Avg. Gold IRA Account",
    value: "$85,000",
    subtext: "Median initial rollover amount",
    icon: Users,
  },
  {
    label: "Gold IRA Companies",
    value: "50+",
    subtext: "Active dealers in the U.S. market",
    icon: ShieldCheck,
  },
  {
    label: "20-Year Avg. Annual Return",
    value: "~8.5%",
    subtext: "Gold annualized 2006-2025",
    icon: BarChart3,
  },
];

// --- Annual gold price performance ---

interface AnnualReturn {
  year: number;
  yearEndPrice: string;
  annualReturn: string;
  returnColor: string;
}

const annualReturns: AnnualReturn[] = [
  { year: 2015, yearEndPrice: "$1,060", annualReturn: "-10.5%", returnColor: "text-red-600" },
  { year: 2016, yearEndPrice: "$1,146", annualReturn: "+8.1%", returnColor: "text-green-600" },
  { year: 2017, yearEndPrice: "$1,291", annualReturn: "+12.7%", returnColor: "text-green-600" },
  { year: 2018, yearEndPrice: "$1,282", annualReturn: "-0.7%", returnColor: "text-red-600" },
  { year: 2019, yearEndPrice: "$1,517", annualReturn: "+18.3%", returnColor: "text-green-600" },
  { year: 2020, yearEndPrice: "$1,898", annualReturn: "+25.1%", returnColor: "text-green-600" },
  { year: 2021, yearEndPrice: "$1,829", annualReturn: "-3.6%", returnColor: "text-red-600" },
  { year: 2022, yearEndPrice: "$1,824", annualReturn: "-0.3%", returnColor: "text-[#D4A94E]" },
  { year: 2023, yearEndPrice: "$2,063", annualReturn: "+13.1%", returnColor: "text-green-600" },
  { year: 2024, yearEndPrice: "$2,623", annualReturn: "+27.2%", returnColor: "text-green-600" },
  { year: 2025, yearEndPrice: "$2,710", annualReturn: "+3.3%", returnColor: "text-green-600" },
];

// --- Decade comparison ---

interface DecadeComparison {
  decade: string;
  gold: string;
  sp500: string;
  bonds: string;
}

const decadeComparisons: DecadeComparison[] = [
  { decade: "2006\u20132015", gold: "+55%", sp500: "+95%", bonds: "+48%" },
  { decade: "2016\u20132025", gold: "+156%", sp500: "+135%", bonds: "+8%" },
  { decade: "20-Year Total", gold: "+380%", sp500: "+290%", bonds: "+45%" },
];

// --- Central bank buying ---

interface CentralBankBuyer {
  country: string;
  tonnes2023: string;
  tonnes2024: string;
  totalReserves: string;
}

const centralBankBuyers: CentralBankBuyer[] = [
  { country: "China (PBoC)", tonnes2023: "225", tonnes2024: "44", totalReserves: "2,264" },
  { country: "Poland (NBP)", tonnes2023: "130", tonnes2024: "90", totalReserves: "420" },
  { country: "Turkey (CBRT)", tonnes2023: "76", tonnes2024: "75", totalReserves: "585" },
  { country: "India (RBI)", tonnes2023: "16", tonnes2024: "73", totalReserves: "876" },
  { country: "Czech Republic (CNB)", tonnes2023: "19", tonnes2024: "20", totalReserves: "46" },
  { country: "Singapore (MAS)", tonnes2023: "0", tonnes2024: "7", totalReserves: "237" },
  { country: "Global Net Total", tonnes2023: "1,037", tonnes2024: "1,082", totalReserves: "37,000+" },
];

// --- Gold IRA industry overview ---

interface IndustryStat {
  metric: string;
  value: string;
  source: string;
}

const industryStats: IndustryStat[] = [
  { metric: "Estimated Gold IRA AUM", value: "$30+ billion", source: "Industry estimates" },
  { metric: "Average account holder age", value: "55\u201368 years old", source: "Custodian surveys" },
  { metric: "Most common rollover source", value: "401(k) rollover", source: "Industry data" },
  { metric: "Average initial investment", value: "$50,000\u2013$100,000", source: "Dealer reports" },
  { metric: "Top custodian market share", value: "Equity Trust, GoldStar, STRATA", source: "IRS filings" },
  { metric: "Annual new account growth", value: "12\u201318% YoY (est.)", source: "Industry estimates" },
  { metric: "IRS-approved storage facilities", value: "~20 nationwide", source: "Custodian data" },
];

// --- Crisis performance ---

interface CrisisPerformance {
  crisis: string;
  period: string;
  goldReturn: string;
  goldColor: string;
  sp500Return: string;
  sp500Color: string;
}

const crisisPerformance: CrisisPerformance[] = [
  { crisis: "1973\u201374 Oil Embargo", period: "Oct 1973\u2013Mar 1974", goldReturn: "+96%", goldColor: "text-green-600", sp500Return: "-48%", sp500Color: "text-red-600" },
  { crisis: "1987 Black Monday", period: "Oct 1987", goldReturn: "+4%", goldColor: "text-green-600", sp500Return: "-22%", sp500Color: "text-red-600" },
  { crisis: "2000\u201302 Dot-Com Bust", period: "Mar 2000\u2013Oct 2002", goldReturn: "+12.4%", goldColor: "text-green-600", sp500Return: "-44.7%", sp500Color: "text-red-600" },
  { crisis: "2008 Global Financial Crisis", period: "Sep 2008\u2013Mar 2009", goldReturn: "+25.0%", goldColor: "text-green-600", sp500Return: "-36.7%", sp500Color: "text-red-600" },
  { crisis: "2020 COVID-19 Crash", period: "Feb 2020\u2013Apr 2020", goldReturn: "+3.5%", goldColor: "text-green-600", sp500Return: "-19.6%", sp500Color: "text-red-600" },
  { crisis: "2022 Inflation Spike", period: "Jan 2022\u2013Sep 2022", goldReturn: "-3.8%", goldColor: "text-[#D4A94E]", sp500Return: "-23.9%", sp500Color: "text-red-600" },
];

// --- Gold IRA costs ---

interface IRAFee {
  feeType: string;
  typical: string;
  range: string;
  notes: string;
}

const iraFees: IRAFee[] = [
  { feeType: "Account Setup", typical: "$50\u2013$150", range: "$0\u2013$280", notes: "Often waived for balances over $50k" },
  { feeType: "Annual Custodian/Admin", typical: "$75\u2013$150", range: "$50\u2013$300", notes: "Flat fee or tiered by account size" },
  { feeType: "Segregated Storage", typical: "$100\u2013$175/yr", range: "$75\u2013$300", notes: "Non-segregated (commingled) may be cheaper" },
  { feeType: "Transaction / Trade", typical: "$40\u2013$50/trade", range: "$0\u2013$75", notes: "Per buy or sell transaction" },
  { feeType: "Wire Transfer", typical: "$25\u2013$30", range: "$0\u2013$50", notes: "Per outgoing wire" },
  { feeType: "Account Termination", typical: "$0\u2013$150", range: "$0\u2013$250", notes: "Not all custodians charge this" },
];

// --- FAQs ---

const faqs = [
  {
    question: "How big is the Gold IRA industry?",
    answer:
      "The self-directed precious metals IRA market is estimated at over $30 billion in total assets under management as of 2026. The industry has grown significantly since 2020, driven by inflation fears, record gold prices, and increased consumer awareness of alternative retirement assets. There are more than 50 active Gold IRA dealers operating in the United States.",
  },
  {
    question: "What is the average return on gold over the last 20 years?",
    answer:
      "Gold has delivered an average annualized return of approximately 8.5% per year over the past 20 years (2006-2025), with total cumulative returns of roughly 380%. This outperformed the S&P 500 (290%) and bonds (45%) over the same period. However, performance varies significantly by timeframe — in some decades, stocks outperform gold and vice versa.",
  },
  {
    question: "How much gold are central banks buying?",
    answer:
      "Central banks purchased a net 1,082 tonnes of gold in 2024 and 1,037 tonnes in 2023, according to the World Gold Council. This represents the third consecutive year of purchases above 1,000 tonnes — a pace not seen in decades. China, Poland, Turkey, and India were the largest buyers. Central banks now hold over 37,000 tonnes of gold globally.",
  },
  {
    question: "What does a Gold IRA cost per year?",
    answer:
      "Total annual costs for a typical Gold IRA range from $200 to $400 per year, including custodian fees ($75-$150), storage fees ($100-$175), and occasional transaction fees ($40-$50 per trade). Setup fees of $50-$150 are typically one-time. Many top dealers waive setup fees for initial investments above $50,000. These costs are far lower than the average mutual fund expense ratio applied to a six-figure retirement balance.",
  },
  {
    question: "Does gold protect against stock market crashes?",
    answer:
      "Historical data shows gold has delivered positive returns during five of the last six major stock market crashes. During the 2008 financial crisis, gold rose 25% while the S&P 500 fell 37%. During the 2000-2002 dot-com bust, gold gained 12% while stocks dropped 45%. The one exception was the 2022 inflation spike, where gold declined 3.8% — but still outperformed the S&P 500, which fell 24%.",
  },
];

// --- Sources ---

const sources = [
  {
    name: "World Gold Council \u2014 Gold Demand Trends Full Year 2024",
    url: "https://www.gold.org/goldhub/research/gold-demand-trends",
    accessDate: "March 2026",
  },
  {
    name: "Federal Reserve Economic Data (FRED) \u2014 Gold Fixing Price",
    url: "https://fred.stlouisfed.org/series/GOLDAMGBD228NLBM",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Bureau of Labor Statistics \u2014 Consumer Price Index",
    url: "https://www.bls.gov/cpi/",
    accessDate: "March 2026",
  },
  {
    name: "S&P Global \u2014 S&P 500 Historical Returns",
    url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Treasury \u2014 Debt to the Penny",
    url: "https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/",
    accessDate: "March 2026",
  },
  {
    name: "International Monetary Fund \u2014 Currency Composition of Official Foreign Exchange Reserves",
    url: "https://data.imf.org/regular.aspx?key=41175",
    accessDate: "March 2026",
  },
  {
    name: "London Bullion Market Association \u2014 Precious Metal Prices",
    url: "https://www.lbma.org.uk/prices-and-data/precious-metal-prices",
    accessDate: "March 2026",
  },
  {
    name: "Internal Revenue Service \u2014 Publication 590-A (IRA Contributions)",
    url: "https://www.irs.gov/publications/p590a",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIRAStatisticsPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA Statistics 2026: Industry Data & Market Trends",
          description:
            "Definitive Gold IRA industry statistics for 2026 — gold price performance, central bank buying, market size, crisis data, and cost breakdowns.",
          slug: PAGE_URL,
          datePublished: "2026-01-15T08:00:00Z",
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Last Updated: March 2026
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] leading-tight">
                Gold IRA Statistics 2026
              </h1>
              <p className="mt-3 text-lg md:text-xl text-[#D0CCC4]">
                The definitive collection of Gold IRA industry data, gold market
                performance figures, and precious metals retirement statistics.
                Compiled for journalists, researchers, and financial writers.
              </p>

              <ArticleMeta
                publishDate="January 15, 2026"
                updateDate="March 19, 2026"
                readTime="15 min"
              />

              <AnswerFirst
                answer="The Gold IRA industry manages an estimated $30+ billion in assets across more than 50 active dealers in the United States. Gold reached $3,040 per ounce in early 2026 after delivering a 27% return in 2024 and roughly 380% cumulative returns over 20 years. Central banks purchased over 1,000 tonnes of gold for the third consecutive year in 2024, while the U.S. national debt surpassed $36 trillion."
                keyFacts={[
                  "Gold spot price above $3,000/oz for the first time in history (2026)",
                  "Central banks bought 1,082 tonnes in 2024 \u2014 third straight year above 1,000 tonnes",
                  "Gold outperformed the S&P 500 in 5 of the last 6 major market crises",
                  "Average Gold IRA initial rollover: $50,000\u2013$100,000 from 401(k) accounts",
                  "Gold\u2019s 20-year annualized return: ~8.5% per year",
                ]}
                className="mt-6"
              />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Key Statistics at a Glance */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2
                id="key-statistics"
                className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-8 text-center"
              >
                Key Statistics at a Glance
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6 text-center"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#D4A94E]" />
                        </div>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-[#F6F4EF]">
                        {stat.value}
                      </p>
                      <p className="text-sm font-semibold text-[#D0CCC4] mt-1">
                        {stat.label}
                      </p>
                      <p className="text-xs text-[#A8A39A] mt-1">
                        {stat.subtext}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Gold Price Performance — Annual Returns */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="gold-price-performance"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Gold Price Performance (2015&ndash;2025)
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Gold has posted positive annual returns in 8 of the last 11
                calendar years. After a sluggish 2015, prices entered a sustained
                uptrend driven by monetary expansion, geopolitical instability,
                and record central bank purchasing.
              </p>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Year</th>
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Year-End Price</th>
                        <th className="px-4 py-3 font-semibold text-amber-700">Annual Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      {annualReturns.map((row) => (
                        <tr
                          key={row.year}
                          className="border-t border-[#2A2D42] even:bg-[#0C0D18]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">{row.year}</td>
                          <td className="px-4 py-3 text-[#D0CCC4]">{row.yearEndPrice}</td>
                          <td className={`px-4 py-3 font-semibold ${row.returnColor}`}>
                            {row.annualReturn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Sources: LBMA, FRED. Year-end prices are London PM Fix (Dec 31
                  close or last trading day).
                </p>
              </div>

              {/* Decade comparison */}
              <h3 className="text-xl font-serif font-bold text-[#F6F4EF] mt-10 mb-4">
                Gold vs. S&amp;P 500 vs. Bonds by Decade
              </h3>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Period</th>
                        <th className="px-4 py-3 font-semibold text-amber-700">Gold</th>
                        <th className="px-4 py-3 font-semibold text-blue-700">S&amp;P 500</th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">Bonds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {decadeComparisons.map((row) => (
                        <tr
                          key={row.decade}
                          className="border-t border-[#2A2D42] even:bg-[#0C0D18]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">{row.decade}</td>
                          <td className="px-4 py-3 font-semibold text-amber-700">{row.gold}</td>
                          <td className="px-4 py-3 text-blue-700">{row.sp500}</td>
                          <td className="px-4 py-3 text-[#A8A39A]">{row.bonds}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Sources: FRED, S&amp;P Global, Bloomberg Aggregate Bond Index.
                  Cumulative total returns (not annualized).
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Central Bank Gold Buying */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
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
                  Central Bank Gold Buying
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Central banks have been net buyers of gold for 15 consecutive
                years. In 2024, global central banks added 1,082 tonnes of gold
                to reserves &mdash; the third straight year above 1,000 tonnes.
                This represents a structural shift in how nations view gold
                relative to fiat currencies and U.S. Treasuries.
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Country / Bank</th>
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">2023 (tonnes)</th>
                        <th className="px-4 py-3 font-semibold text-amber-700">2024 (tonnes)</th>
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Total Reserves</th>
                      </tr>
                    </thead>
                    <tbody>
                      {centralBankBuyers.map((row) => (
                        <tr
                          key={row.country}
                          className={`border-t border-[#2A2D42] even:bg-[#0C0D18] ${
                            row.country === "Global Net Total"
                              ? "font-bold bg-[#161828]"
                              : ""
                          }`}
                        >
                          <td className="px-4 py-3 text-[#F6F4EF]">{row.country}</td>
                          <td className="px-4 py-3 text-[#D0CCC4]">{row.tonnes2023}</td>
                          <td className="px-4 py-3 text-amber-700 font-semibold">{row.tonnes2024}</td>
                          <td className="px-4 py-3 text-[#D0CCC4]">{row.totalReserves} t</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Source: World Gold Council, Gold Demand Trends 2024. Reserves
                  in metric tonnes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Gold IRA Industry Overview */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <h2
                  id="industry-overview"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Gold IRA Industry Overview
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                The self-directed precious metals IRA industry has experienced
                strong growth since 2020, fueled by inflation, market volatility,
                and growing distrust of traditional retirement vehicles. Here are
                the key market metrics:
              </p>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Metric</th>
                        <th className="px-4 py-3 font-semibold text-amber-700">Value</th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industryStats.map((row) => (
                        <tr
                          key={row.metric}
                          className="border-t border-[#2A2D42] even:bg-[#0C0D18]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">{row.metric}</td>
                          <td className="px-4 py-3 font-semibold text-amber-700">{row.value}</td>
                          <td className="px-4 py-3 text-[#A8A39A] text-sm">{row.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Gold During Market Crises */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                </div>
                <h2
                  id="crisis-performance"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Gold During Market Crises
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Gold&rsquo;s most compelling investment case is its performance
                during economic downturns. In five of the last six major market
                crises, gold delivered positive returns while stocks suffered
                double-digit losses.
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Crisis</th>
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Period</th>
                        <th className="px-4 py-3 font-semibold text-amber-700">Gold</th>
                        <th className="px-4 py-3 font-semibold text-blue-700">S&amp;P 500</th>
                      </tr>
                    </thead>
                    <tbody>
                      {crisisPerformance.map((row) => (
                        <tr
                          key={row.crisis}
                          className="border-t border-[#2A2D42] even:bg-[#0C0D18]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">{row.crisis}</td>
                          <td className="px-4 py-3 text-[#D0CCC4] text-sm">{row.period}</td>
                          <td className={`px-4 py-3 font-semibold ${row.goldColor}`}>
                            {row.goldReturn}
                          </td>
                          <td className={`px-4 py-3 font-semibold ${row.sp500Color}`}>
                            {row.sp500Return}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Sources: FRED, S&amp;P Global, LBMA. Returns measured
                  peak-to-trough for each crisis period.
                </p>
              </div>

              <div className="mt-6 bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5">
                <p className="text-[#D0CCC4] leading-relaxed">
                  <strong className="text-[#F6F4EF]">Key takeaway:</strong> Gold
                  has acted as a reliable portfolio hedge during the worst
                  economic events of the last 50 years. Even during the 2022
                  inflation spike &mdash; gold&rsquo;s weakest crisis showing
                  &mdash; it still outperformed the S&amp;P 500 by 20 percentage
                  points.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Gold IRA Costs */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#2A2D42] flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#D0CCC4]" />
                </div>
                <h2
                  id="gold-ira-costs"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Gold IRA Costs &amp; Fees
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Gold IRAs carry additional fees compared to standard brokerage
                IRAs due to physical storage and custodian requirements. Here is
                what to expect:
              </p>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">Fee Type</th>
                        <th className="px-4 py-3 font-semibold text-amber-700">Typical</th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">Range</th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iraFees.map((row) => (
                        <tr
                          key={row.feeType}
                          className="border-t border-[#2A2D42] even:bg-[#0C0D18]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">{row.feeType}</td>
                          <td className="px-4 py-3 font-semibold text-amber-700">{row.typical}</td>
                          <td className="px-4 py-3 text-[#D0CCC4]">{row.range}</td>
                          <td className="px-4 py-3 text-[#A8A39A] text-sm">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Based on published fee schedules from top Gold IRA custodians
                  and dealers (2025-2026).
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* How to Cite This Data */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="cite-this-data"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  How to Cite This Data
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-4">
                Journalists, bloggers, and financial writers are welcome to
                reference any statistics on this page. We simply ask that you
                link back to this page as the source. Suggested attribution:
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <p className="font-mono text-sm text-[#D0CCC4] leading-relaxed">
                  Source: Rich Dad Retirement, &ldquo;Gold IRA Statistics
                  2026&rdquo;
                  <br />
                  <span className="text-blue-600">
                    (richdadretirement.com/gold-ira-statistics)
                  </span>
                </p>
              </div>

              <p className="text-sm text-[#A8A39A] mt-4">
                This page is updated regularly. If you cite a specific statistic,
                please note the access date. For press inquiries or data
                requests, contact us through our{" "}
                <a
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  about page
                </a>
                .
              </p>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Augusta CTA */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AugustaCTA
                variant="default"
                trackSource="gold-ira-statistics"
              />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* FAQ Section */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={faqs} includeSchema={false} />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Sources, AuthorBox, Related Content */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SourcesSection sources={sources} lastVerified="March 2026" />
              <div className="mt-12">
                <AuthorBox />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <AutoRelatedContent currentUrl={PAGE_URL} />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
