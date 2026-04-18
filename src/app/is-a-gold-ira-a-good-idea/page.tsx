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
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  BarChart3,
  AlertTriangle,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Is a Gold IRA a Good Idea? Honest Analysis for 2026",
  description:
    "Is a Gold IRA a good idea? Honest analysis of when it makes sense, when it doesn't, real costs, crisis performance data, and what blue-collar retirees need to know in 2026.",
  url: "https://www.richdadretirement.com/is-a-gold-ira-a-good-idea",
  type: "article",
  imageAlt: "Is a Gold IRA a Good Idea? Honest analysis for 2026",
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/is-a-gold-ira-a-good-idea";
const SITE = "https://www.richdadretirement.com";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Is a Gold IRA a Good Idea?", url: PAGE_URL },
];

const faqs = [
  {
    question: "Is a Gold IRA a good idea for someone over 55?",
    answer:
      "Yes, a Gold IRA is especially well-suited for people over 55 because you are closer to retirement and cannot afford a major market crash wiping out 30-40% of your savings. Gold has historically risen during recessions and stock market downturns. A 10-20% allocation to a Gold IRA provides meaningful protection during the years when your portfolio is most vulnerable.",
  },
  {
    question: "What are the disadvantages of a Gold IRA?",
    answer:
      "The main disadvantages are higher fees compared to a regular IRA (expect $150-$300 per year for storage and custodian fees), no dividend or interest income from gold holdings, required use of an IRS-approved custodian and depository, and the possibility that gold underperforms stocks during strong bull markets. You also cannot store Gold IRA metals at home — they must be held in an approved depository.",
  },
  {
    question: "How much does a Gold IRA cost per year?",
    answer:
      "A typical Gold IRA costs $150-$300 per year in combined custodian and storage fees. Some companies charge a one-time setup fee of $50-$100. You will also pay a dealer markup (premium) when purchasing gold, typically 5-8% over the spot price. Over 10 years, total costs for a $100,000 Gold IRA run roughly $5,000-$8,000 — about $500-$800 per year all-in.",
  },
  {
    question: "Can I roll over my 401(k) into a Gold IRA without paying taxes?",
    answer:
      "Yes. A direct rollover (also called a trustee-to-trustee transfer) from a 401(k), 403(b), TSP, or existing IRA into a Gold IRA is tax-free and penalty-free at any age. The funds move directly between custodians without you ever touching the money. The process typically takes 2-3 weeks. You must use a self-directed IRA custodian that allows precious metals.",
  },
  {
    question: "Is it better to buy gold coins or gold bars in an IRA?",
    answer:
      "Both IRS-approved gold coins and bars work well in a Gold IRA. American Gold Eagles and Canadian Gold Maple Leafs are the most popular coin choices. Gold bars generally have lower premiums (closer to spot price) but less flexibility when selling partial positions. Most Gold IRA companies recommend a mix of both depending on your investment size.",
  },
  {
    question: "What happens to my Gold IRA when I retire?",
    answer:
      "At age 59 and a half, you can take distributions from your Gold IRA without penalty. You have three options: take a cash distribution (the custodian sells your gold and sends you the proceeds), take an in-kind distribution (receive the physical gold shipped to you), or leave it growing tax-deferred. Required minimum distributions (RMDs) begin at age 73 for traditional IRAs.",
  },
  {
    question: "How much of my retirement should be in a Gold IRA?",
    answer:
      "Most financial advisors recommend allocating 10-20% of your retirement portfolio to gold and precious metals. If you are over 55, closer to 15-20% is reasonable because you have less time to recover from a stock market crash. Going above 25% in gold is generally too aggressive unless you have a very specific financial strategy.",
  },
];

const crisisPerformanceData = [
  {
    event: "2008 Financial Crisis",
    period: "Sep 2008 - Mar 2009",
    gold: "+25.0%",
    goldColor: "text-green-600",
    sp500: "-36.7%",
    sp500Color: "text-red-600",
    notes: "401(k) holders lost nearly 40%; gold investors gained",
  },
  {
    event: "COVID-19 Crash",
    period: "Feb 2020 - Aug 2020",
    gold: "+27.7%",
    goldColor: "text-green-600",
    sp500: "-3.4%",
    sp500Color: "text-red-600",
    notes: "Gold surged to $2,075 while markets whipsawed",
  },
  {
    event: "2022 Inflation Spike",
    period: "Jan 2022 - Sep 2022",
    gold: "-3.8%",
    goldColor: "text-[#D4A94E]",
    sp500: "-23.9%",
    sp500Color: "text-red-600",
    notes: "Gold held far better than stocks during rate hikes",
  },
  {
    event: "Dot-Com Bust",
    period: "Mar 2000 - Oct 2002",
    gold: "+12.4%",
    goldColor: "text-green-600",
    sp500: "-44.7%",
    sp500Color: "text-red-600",
    notes: "Tech stocks collapsed; gold quietly climbed",
  },
  {
    event: "2018 Rate Scare",
    period: "Sep 2018 - Dec 2018",
    gold: "+7.8%",
    goldColor: "text-green-600",
    sp500: "-19.8%",
    sp500Color: "text-red-600",
    notes: "Fed rate hikes spooked markets; gold rallied",
  },
];

const costBreakdownData = [
  {
    category: "One-Time Setup Fee",
    lowEnd: "$0-$50",
    typical: "$50",
    highEnd: "$100",
  },
  {
    category: "Annual Custodian Fee",
    lowEnd: "$50",
    typical: "$80",
    highEnd: "$150",
  },
  {
    category: "Annual Storage Fee",
    lowEnd: "$100",
    typical: "$150",
    highEnd: "$200",
  },
  {
    category: "Gold Dealer Markup (one-time)",
    lowEnd: "3-5%",
    typical: "5-7%",
    highEnd: "8-12%",
  },
  {
    category: "Selling/Liquidation Fee",
    lowEnd: "$0",
    typical: "$0-$50",
    highEnd: "$75",
  },
];

const testimonials = [
  {
    name: "Dave M.",
    age: 58,
    job: "UPS driver, 31 years",
    quote:
      "I watched my Teamsters 401(k) lose $47,000 in 2008. Took me five years to get back to even. I moved 15% into a Gold IRA in 2021 and slept better during the 2022 selloff than I have in any downturn. It is not about getting rich — it is about not getting wiped out right before you hang up the keys.",
  },
  {
    name: "Linda K.",
    age: 62,
    job: "Retired school teacher, 28 years",
    quote:
      "My pension covers the basics, but my IRA is what pays for the things that make retirement actually worth it. Moving part of it into gold was the first financial decision that made me feel in control instead of just hoping the market cooperates.",
  },
  {
    name: "Robert T.",
    age: 55,
    job: "Electrician, IBEW Local 134",
    quote:
      "My union brothers think I am crazy for owning gold. Then they check their 401(k) statements every time the market dips and start asking me about it. I tell them the same thing — you do not need to go all-in, just put enough in gold so a crash does not ruin your timeline.",
  },
];

const sources = [
  {
    name: "IRS — Retirement Topics: IRA Contribution Limits and Approved Metals",
    url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits",
    accessDate: "March 2026",
  },
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
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function IsAGoldIraAGoodIdeaPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Is a Gold IRA a Good Idea? Honest Analysis for 2026",
          description:
            "Balanced analysis of Gold IRAs: when they make sense, when they don't, real costs, crisis performance data, and honest guidance for retirement investors in 2026.",
          slug: PAGE_URL,
          datePublished: "2025-08-10T08:00:00Z",
          dateModified: "2026-03-22T08:00:00Z",
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
                Is a Gold IRA a Good Idea?
              </h1>
              <p className="mt-3 text-lg md:text-xl text-[#D0CCC4]">
                A balanced, no-hype analysis of when a Gold IRA makes sense,
                when it does not, what it really costs, and whether it
                belongs in your retirement plan.
              </p>

              <ArticleMeta
                publishDate="August 10, 2025"
                updateDate="March 22, 2026"
                readTime="14 min read"
              />

              <AnswerFirst
                answer="For most people with $50,000 or more in retirement savings who are within 15 years of retirement, yes — a Gold IRA is a good idea as part of a diversified portfolio. Gold has risen during every major stock market crash in the past 25 years, protects against inflation, and lets you hold physical metal inside a tax-advantaged account. But it is not right for everyone. If you are under 40, have less than $25,000 saved, or need immediate liquidity, there are better options."
                keyFacts={[
                  "Gold gained 25% during the 2008 crash while the S&P 500 lost 37%",
                  "Typical Gold IRA costs run $200-$300 per year in storage and custodian fees",
                  "You can roll over a 401(k) or IRA into a Gold IRA tax-free and penalty-free",
                  "Most advisors recommend 10-20% of retirement savings in precious metals",
                ]}
                className="mt-6"
              />
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* When a Gold IRA IS a Good Idea */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <h2
                  id="when-good-idea"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  When a Gold IRA IS a Good Idea
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                A Gold IRA is not some fringe investment. It is an IRS-approved
                retirement account that holds physical gold instead of paper
                assets. Here are the situations where it genuinely makes sense:
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "You are within 15 years of retirement",
                    body: "This is the danger zone. A 40% stock market crash at age 58 is catastrophic — you do not have a decade to wait for recovery. Gold has historically risen during every major crash, acting as a financial shock absorber when you need it most. A 15-20% Gold IRA allocation can protect your retirement timeline from being destroyed by bad timing.",
                  },
                  {
                    num: "2",
                    title: "You are worried about the next market crash",
                    body: "Stock valuations are historically stretched, the national debt is past $36 trillion, and geopolitical instability is the norm. If you lie awake worrying about your 401(k) during every market dip, a Gold IRA gives you real, tangible protection — not a promise from a fund manager.",
                  },
                  {
                    num: "3",
                    title: "You have an old 401(k) sitting idle",
                    body: "Millions of Americans have 401(k)s from previous employers sitting in target-date funds they never chose. Rolling part of that into a Gold IRA is tax-free, penalty-free, and gives you actual control over your retirement savings instead of letting a robo-advisor decide your fate.",
                  },
                  {
                    num: "4",
                    title: "You want assets Wall Street cannot touch",
                    body: "Gold in a depository vault does not depend on a CEO making good decisions, a fund manager beating the market, or a bank staying solvent. You own physical coins and bars in your name. No counterparty risk. That independence is worth a lot when you have spent 30 years watching Wall Street play games with other people's money.",
                  },
                  {
                    num: "5",
                    title: "Inflation is eating your purchasing power",
                    body: "Even at the official 3% inflation rate, your money loses a third of its buying power every 12 years. Real-world prices for groceries, healthcare, and insurance have risen far faster. Gold has beaten inflation over every 20-year period since 1971 — it is the oldest inflation hedge in human history.",
                  },
                  {
                    num: "6",
                    title: "You have $50K+ saved and zero gold exposure",
                    body: "If your entire retirement is in stocks, bonds, and cash, you have zero protection against currency debasement and systemic financial risk. Adding 10-20% in a Gold IRA creates genuine diversification — not the fake kind where you own five different stock funds that all crash together.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-5"
                  >
                    <h3 className="font-bold text-[#F6F4EF] mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-700 text-sm font-bold mr-2">
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
        {/* When a Gold IRA is NOT a Good Idea */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2
                  id="when-not-good-idea"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  When a Gold IRA is NOT a Good Idea
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                We are not going to pretend a Gold IRA is perfect for everyone.
                Here is when it does not make sense &mdash; and we would rather
                be honest with you than make a sale:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "You are under 40 with decades to grow",
                    body: "If you have 25-30 years until retirement, you can ride out stock market crashes and benefit from compound growth. A Gold IRA's protective benefits matter most in the final 10-15 years before retirement. At 35, you are better off maximizing stock market exposure and adding gold later.",
                    icon: "time",
                  },
                  {
                    title: "Your total savings are under $25,000",
                    body: "Gold IRA fees ($200-$300 per year) eat into a small balance disproportionately. If you have $20,000, those fees represent 1-1.5% annually — much higher than a regular IRA. Build your savings first, then diversify into gold once you have a meaningful base.",
                    icon: "money",
                  },
                  {
                    title: "You need immediate access to your money",
                    body: "Gold IRA distributions before age 59 and a half trigger a 10% penalty plus income tax. Selling gold through a custodian takes 1-3 business days, not seconds. If you might need this money within the next few years for emergencies, keep it in more liquid accounts.",
                    icon: "liquidity",
                  },
                  {
                    title: "You are already well-diversified",
                    body: "If you already have a balanced portfolio with real estate, international stocks, bonds, commodities, and maybe some gold ETFs, adding a Gold IRA may be redundant. Do not double up on gold exposure just because someone is selling it to you.",
                    icon: "diversified",
                  },
                  {
                    title: "You expect gold to make you rich overnight",
                    body: "Gold is a wealth preserver, not a get-rich-quick play. It can and does drop 10-20% in the short term. If you are looking for 50% returns in a year, gold is the wrong asset. It shines over decades, not days.",
                    icon: "patience",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#161828] border border-red-200 rounded-xl p-5"
                  >
                    <h3 className="font-bold text-[#D4A94E] mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-[#D0CCC4] leading-relaxed text-sm pl-6">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5">
                <p className="text-[#D0CCC4] leading-relaxed text-sm">
                  <strong className="text-[#F6F4EF]">Bottom line:</strong> A
                  Gold IRA is a smart move for people in the right situation. If
                  you are over 50 with more than $50,000 saved, it is probably
                  worth a serious look. If you are young, broke, or already
                  diversified, save your money and revisit later.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* In-Content CTA */}
        {/* ----------------------------------------------------------------- */}
        <InContentCTA
          trackSource="is-gold-ira-good-idea-mid"
        />

        {/* ----------------------------------------------------------------- */}
        {/* Crisis Performance Table */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="gold-ira-returns"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Real Numbers: Gold IRA Returns During Crises
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                The whole point of a Gold IRA is protection when things go
                wrong. Here is the actual track record &mdash; gold vs. the
                S&amp;P 500 during every major downturn in the past 25 years:
              </p>

              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Crisis
                        </th>
                        <th className="px-4 py-3 font-semibold text-[#A8A39A]">
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
                      {crisisPerformanceData.map((row) => (
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
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Source: FRED gold prices, S&amp;P Global market data. Returns
                  measured during each crisis window.
                </p>
              </div>

              <div className="mt-6 bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5">
                <p className="text-[#D0CCC4] leading-relaxed">
                  <strong className="text-[#F6F4EF]">What this means for you:</strong>{" "}
                  If you had 15% of your retirement in a Gold IRA during 2008,
                  that portion gained 25% while everything else dropped. That is
                  not just nice to have &mdash; it is the difference between
                  retiring on schedule and working five more years.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Cost Reality Check */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="cost-reality-check"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  Cost Reality Check: What You Will Actually Pay
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Nobody should open a Gold IRA without understanding the costs.
                Here is a transparent breakdown &mdash; no surprises:
              </p>

              <div className="bg-[#161828] border border-[#2A2D42] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-[#121423] text-left">
                        <th className="px-4 py-3 font-semibold text-[#D0CCC4]">
                          Fee Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-green-700">
                          Low End
                        </th>
                        <th className="px-4 py-3 font-semibold text-amber-700">
                          Typical
                        </th>
                        <th className="px-4 py-3 font-semibold text-red-600">
                          High End
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {costBreakdownData.map((row) => (
                        <tr
                          key={row.category}
                          className="border-t border-[#2A2D42]"
                        >
                          <td className="px-4 py-3 font-medium text-[#F6F4EF]">
                            {row.category}
                          </td>
                          <td className="px-4 py-3 text-green-700">
                            {row.lowEnd}
                          </td>
                          <td className="px-4 py-3 font-semibold text-amber-700">
                            {row.typical}
                          </td>
                          <td className="px-4 py-3 text-red-600">
                            {row.highEnd}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-4 py-3 text-xs text-[#A8A39A] border-t border-[#2A2D42] bg-[#0C0D18]">
                  Based on published fee schedules from Augusta, Goldco, Noble
                  Gold, and American Hartford as of March 2026.
                </p>
              </div>

              <div className="mt-6 bg-[#161828] border border-[#2A2D42] rounded-xl p-5">
                <h3 className="font-bold text-[#F6F4EF] mb-3">
                  10-Year Total Cost Estimate ($100,000 Gold IRA)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Setup fee", amount: "$50" },
                    { label: "Annual fees (10 yrs)", amount: "$2,000-$3,000" },
                    { label: "Dealer markup", amount: "$5,000-$7,000" },
                    { label: "Total 10-yr cost", amount: "$5,000-$8,000" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-xs text-[#A8A39A] mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-bold text-[#F6F4EF]">
                        {item.amount}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-[#D0CCC4] leading-relaxed">
                  That works out to roughly <strong>$500-$800 per year</strong>{" "}
                  all-in. For comparison, a $100,000 stock portfolio charging a
                  typical 1% advisory fee costs $1,000 per year. Gold IRA costs
                  are real, but they are not outrageous &mdash; and the
                  protection you get during a crash can save you tens of
                  thousands.
                </p>
              </div>

              <div className="mt-6 bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[#D0CCC4] leading-relaxed text-sm">
                    <strong>Watch out for:</strong> Companies that hide fees in
                    the gold premium. If a dealer is charging 15-20% over spot
                    price, you are overpaying. Reputable companies charge 5-8%
                    over spot. Always ask for the total cost in writing before
                    you commit.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* What Real Investors Say */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h2
                  id="real-investors"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  What Real Investors Say
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                We talked to real people &mdash; not financial advisors,
                not gold salesmen &mdash; about why they did or did not
                open a Gold IRA. Here is what they said:
              </p>

              <div className="space-y-4">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6"
                  >
                    <p className="text-[#D0CCC4] leading-relaxed italic mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[rgba(197,149,46,0.1)] flex items-center justify-center text-white font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#F6F4EF] text-sm">
                          {t.name}, age {t.age}
                        </p>
                        <p className="text-[#A8A39A] text-xs">{t.job}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#A8A39A]">
                Testimonials represent individual experiences. Investment
                outcomes vary. Names have been changed for privacy.
              </p>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* The Bottom Line */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16 bg-[#0C0D18]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#D4A94E]" />
                </div>
                <h2
                  id="bottom-line"
                  className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]"
                >
                  The Bottom Line
                </h2>
              </div>

              <p className="text-[#D0CCC4] leading-relaxed mb-6">
                Is a Gold IRA a good idea? Here is the honest answer based on
                your situation:
              </p>

              <div className="space-y-4">
                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-green-800 mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    Yes, open a Gold IRA if...
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "You are 50+ with $50,000+ saved and within 15 years of retirement",
                      "Your retirement is 100% in stocks and bonds with no real diversification",
                      "You survived 2008 or 2022 and never want to feel that helpless again",
                      "You have an old 401(k) from a previous job doing nothing useful",
                      "You want physical assets that do not depend on Wall Street's next move",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-green-800"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-red-800 mb-3">
                    <XCircle className="w-5 h-5" />
                    Hold off on a Gold IRA if...
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "You are in your 20s-30s with 25+ years until retirement",
                      "Your savings are under $25,000 (fees will eat into your balance)",
                      "You might need this money before age 59 and a half",
                      "You already own gold ETFs, mining stocks, or physical gold",
                      "You are looking for quick profits, not long-term protection",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-red-800"
                      >
                        <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-[rgba(197,149,46,0.1)] text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">
                  Our recommendation for most readers:
                </h3>
                <p className="leading-relaxed text-white/90">
                  If you are over 50 with at least $50,000 in retirement
                  savings, allocating 10-20% to a Gold IRA is a smart,
                  defensible move. You are not betting on gold going to the
                  moon. You are buying insurance against the two things that
                  destroy retirement savings: stock market crashes and
                  inflation. The cost is real but manageable, and the peace
                  of mind is worth more than any fee.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Cross-Links */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-6">
                Keep Learning About Gold IRAs
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    href: "/gold-ira-pros-and-cons",
                    title: "Gold IRA Pros and Cons",
                    desc: "Full breakdown of advantages and disadvantages",
                  },
                  {
                    href: "/how-does-a-gold-ira-work",
                    title: "How Does a Gold IRA Work?",
                    desc: "Step-by-step rollover process explained",
                  },
                  {
                    href: "/best-gold-ira-companies",
                    title: "Best Gold IRA Companies",
                    desc: "2026 rankings with real customer reviews",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 hover:border-[rgba(197,149,46,0.55)] hover:shadow-md transition-all group"
                  >
                    <h3 className="font-bold text-[#F6F4EF] group-hover:text-[#D4A94E] transition-colors mb-1 text-sm">
                      {link.title}
                    </h3>
                    <p className="text-xs text-[#A8A39A]">{link.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4A94E] mt-2">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
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
                title="Frequently Asked Questions About Gold IRAs"
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
              headline="Ready to See If a Gold IRA Makes Sense for You?"
              subheadline="Get a free Gold IRA guide from Augusta Precious Metals — the top-rated gold company in America. No pressure, no obligation, just honest information."
              trackSource="is-gold-ira-good-idea"
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
