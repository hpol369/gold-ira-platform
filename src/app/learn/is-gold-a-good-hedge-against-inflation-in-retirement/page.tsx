import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Clock,
  BarChart3,
  Users,
  CheckCircle2,
  DollarSign,
} from "lucide-react";
import { isPublished } from "@/data/editorial-schedule";

export const revalidate = 86400; // Revalidate daily so pages go live on schedule

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Is Gold a Good Hedge Against Inflation in Retirement? (2026)",
    description:
      "Does gold really protect retirees from inflation? We examine the historical record, the 1970s vs. 1980-2000, and how gold fits a broader retirement inflation plan.",
    url: "https://www.richdadretirement.com/learn/is-gold-a-good-hedge-against-inflation-in-retirement",
    type: "article",
  }),
  robots: isPublished("is-gold-a-good-hedge-against-inflation-in-retirement") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "Does gold always go up when inflation rises?",
    answer:
      "No. Gold sometimes rises during inflation, but not always, especially over short periods. The relationship is strongest over longer time horizons.",
  },
  {
    question: "Was gold a good inflation hedge in the 1970s?",
    answer:
      "Yes, gold performed very strongly during the high-inflation 1970s, which is why many older investors associate gold with inflation protection.",
  },
  {
    question: "What happened to gold from 1980 to 2000?",
    answer:
      "Gold went through a long weak period and did not consistently protect buyers who entered near its 1980 peak. It took roughly 25 years to recover in real terms.",
  },
  {
    question: "Can gold help in recessions too?",
    answer:
      "Often yes. Gold has outperformed the S&P 500 in 5 of the last 7 U.S. recessions, according to World Gold Council summaries.",
  },
  {
    question: "How much gold should a retiree own for inflation protection?",
    answer:
      "There is no universal number, but many investors who use gold keep it as a modest allocation rather than a dominant holding. A range of 5-15% is commonly discussed.",
  },
];

const sources = [
  {
    name: "World Gold Council, Research on Gold, Inflation, and Recessions",
    url: "https://www.gold.org/",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Bureau of Labor Statistics, CPI Data",
    url: "https://www.bls.gov/cpi/",
    accessDate: "March 2026",
  },
  {
    name: "Federal Reserve Economic Data (FRED)",
    url: "https://fred.stlouisfed.org/",
    accessDate: "March 2026",
  },
  {
    name: "S&P Dow Jones Indices Market Data",
    url: "https://www.spglobal.com/spdji/",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldInflationHedgePage() {
  return (
    <>
      <Navbar />

      <SchemaScript
        schema={articleSchema({
          title: "Is Gold a Good Hedge Against Inflation in Retirement?",
          description:
            "Does gold really protect retirees from inflation? We examine the historical record and how gold fits a broader retirement inflation plan.",
          slug: "/learn/is-gold-a-good-hedge-against-inflation-in-retirement",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Learn", url: "/learn" },
          { name: "Gold as Inflation Hedge", url: "/learn/is-gold-a-good-hedge-against-inflation-in-retirement" },
        ])}
      />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-[#0C0D18] border-b border-[#2A2D42] pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#D4A94E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-[#D4A94E] transition-colors">Learn</Link>
              <span>/</span>
              <span className="text-[#F6F4EF] font-medium">Gold as Inflation Hedge</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
                Is Gold a Good Hedge Against Inflation in Retirement?
              </h1>
              <p className="text-lg md:text-xl text-[#D0CCC4] leading-relaxed mb-6">
                Gold has a long reputation as an inflation fighter. But the honest answer is more nuanced than the commercials make it sound.
              </p>
              <ArticleMeta
                publishDate="2026-04-15"
                updateDate="2026-04-15"
                readTime="9 min"
              />
            </div>
          </Container>
        </section>

        {/* Content */}
        <Container className="py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="Gold is often discussed as an inflation hedge, but the reality is more nuanced. It may help preserve purchasing power over longer periods in some environments, yet it does not move in lockstep with inflation and can underperform for long stretches."
              keyFacts={[
                "Gold's relationship with inflation is not perfectly consistent in the short term. Source: World Gold Council",
                "Inflation risk is a major retirement planning concern because it erodes purchasing power. Source: BLS CPI / SSA",
                "Diversified portfolios are generally more resilient than single-asset bets. Source: FINRA",
              ]}
              className="mb-10"
            />

            <p className="text-[#D0CCC4] text-lg leading-relaxed mb-8">
              A lot of retirees hear the same claim over and over: gold protects you from inflation. There is some truth in that, but it is not the whole story. Gold has a long history of holding value over very long stretches. It has also done well in some inflationary and recessionary periods. But if you expect gold to move up every time prices at the grocery store rise, you may be disappointed. The honest answer is this: gold can be a useful inflation hedge in retirement, but it is imperfect, especially over shorter periods. Our <Link href="/gold-ira-industry-report-2026" className="text-[#D4A94E] font-medium hover:underline">2026 Gold IRA Industry Report</Link> has the latest market data to put this in context.
            </p>

            {/* Section: Why people turn to gold */}
            <section id="why-gold" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-700">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Why People Turn to Gold When Inflation Rises
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                Inflation eats away at purchasing power. If your savings earn less than inflation, your money buys less over time. That is a real problem for retirees living on fixed income.
              </p>
              <p className="text-[#D0CCC4] mb-4">
                Gold attracts attention because it is not tied to one company&apos;s profits or one government&apos;s promise to pay. It has been viewed for centuries as a store of value during times of currency weakness, financial stress, and inflation fear.
              </p>
              <p className="text-[#D0CCC4]">
                The World Gold Council notes that gold has historically served as a long-term store of value and portfolio diversifier. Many investors use it as a hedge when they worry that paper assets may struggle. That said, &quot;hedge&quot; does not mean &quot;perfect shield.&quot; To see how much gold actually belongs in your portfolio, read our guide on <Link href="/learn/how-much-gold-in-retirement-portfolio" className="text-[#D4A94E] font-medium hover:underline">how much gold to hold in a retirement portfolio</Link>.
              </p>
            </section>

            {/* Section: Historical record */}
            <section id="historical-record" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-100 rounded-lg text-blue-700">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  The Historical Record Is Mixed, Not Magical
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                Gold&apos;s record against inflation depends a lot on the time period you measure.
              </p>
              <p className="text-[#D0CCC4] mb-4">
                In the 1970s, when inflation ran hot in the United States, gold performed extremely well. That period is the reason many older investors still think of gold as the inflation asset.
              </p>
              <p className="text-[#D0CCC4] mb-4">
                But history also shows long dry spells. From roughly 1980 to 2000, gold went through a long drought after its early-1980 peak. Inflation still existed during those years, but gold did not consistently protect investors who bought near the top. In real terms, many buyers waited a long time to recover.
              </p>
              <div className="bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-6 my-6">
                <h3 className="font-bold text-amber-800 mb-2">The Big Lesson</h3>
                <p className="text-[#D0CCC4]">
                  Gold may help over long cycles, but it can absolutely underperform for years at a time. That is why it works best as part of a broader plan, not the whole plan.
                </p>
              </div>
            </section>

            <InContentCTA trackSource="learn-gold-inflation-hedge" />

            {/* Section: Gold in the 2020s */}
            <section id="gold-2020s" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-100 rounded-lg text-green-700">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Gold in the 2020s: Some Protection, Not a Straight Line
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                The 2020s gave retirees another reminder that gold does not move in a neat pattern. Inflation surged in 2021 and 2022. Gold did rise over parts of that period and remained resilient compared with many financial assets, but it did not perfectly track inflation month by month. Higher interest rates also mattered, because rising real yields can pressure gold.
              </p>
              <p className="text-[#D0CCC4] mb-4">
                In other words, gold responded to more than just CPI data. It reacted to:
              </p>
              <ul className="space-y-2 text-[#D0CCC4] mb-4 ml-4">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#A8A39A] mt-0.5 shrink-0" /> Inflation expectations</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#A8A39A] mt-0.5 shrink-0" /> Federal Reserve policy</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#A8A39A] mt-0.5 shrink-0" /> Real interest rates</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#A8A39A] mt-0.5 shrink-0" /> Recession fears</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#A8A39A] mt-0.5 shrink-0" /> Geopolitical stress</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[#A8A39A] mt-0.5 shrink-0" /> Investor demand</li>
              </ul>
              <p className="text-[#D0CCC4]">
                That is why retirees should think of gold as one tool in an inflation plan, not the whole plan. Our <Link href="/retirement-risk-score" className="text-[#D4A94E] font-medium hover:underline">Retirement Risk Score quiz</Link> can help assess your overall exposure.
              </p>
            </section>

            {/* Section: Recessions */}
            <section id="recessions" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-red-100 rounded-lg text-red-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Recessions, Stocks, and Why Gold Can Still Help Retirees
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                One reason gold remains relevant is that it has often helped during economic stress. According to data summarized by the World Gold Council, gold outperformed the S&P 500 in 5 of the last 7 U.S. recessions.
              </p>
              <p className="text-[#D0CCC4] mb-4">
                That matters in retirement because inflation is not the only risk. Retirees also face stock market losses, sequence-of-returns risk, bond volatility, banking stress, and geopolitical shocks.
              </p>
              <p className="text-[#D0CCC4]">
                Gold may provide value in a retirement portfolio not just because of inflation, but because it can diversify when traditional assets struggle. Still, diversification is not the same as guarantee. Use our <Link href="/tools/retirement-calculator" className="text-[#D4A94E] font-medium hover:underline">retirement calculator</Link> to see how different allocations affect your outlook.
              </p>
            </section>

            {/* Section: Who is this for */}
            <section id="who-is-this-for" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-100 rounded-lg text-green-700">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Who This Is For, and Who It Is Not For
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This May Be for You If:</h3>
                  <ul className="space-y-2 text-[#D0CCC4] text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You want a small hedge against inflation and market stress</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You understand that gold can lag for years</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You want portfolio diversification, not income</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You are willing to keep your allocation moderate</li>
                  </ul>
                </div>
                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This May Not Be for You If:</h3>
                  <ul className="space-y-2 text-[#D0CCC4] text-sm">
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You need steady dividends or interest</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You expect gold to always beat inflation every year</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You are chasing headlines</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You cannot tolerate periods of underperformance</li>
                  </ul>
                </div>
              </div>
              <p className="text-[#D0CCC4] mt-4">
                If gold does not seem right for your situation, explore <Link href="/when-not-to-open-gold-ira" className="text-[#D4A94E] font-medium hover:underline">when not to open a gold IRA</Link> for alternatives.
              </p>
            </section>

            {/* Section: Blue-collar example */}
            <section id="example" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                A Blue-Collar Example: Linda the Retired School Bus Driver
              </h2>
              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <p className="text-[#D0CCC4] mb-4">
                  Linda is 67 and retired after years driving a school bus. She is living on Social Security, a county pension, and withdrawals from her IRA. When food and utility prices jump, she worries about inflation eating into her budget.
                </p>
                <p className="text-[#D0CCC4] mb-4">
                  She thinks about putting a chunk of her nest egg into gold. Her advisor explains that gold may help as part of a broader plan, but it will not replace cash reserves, TIPS, or diversified stock funds.
                </p>
                <p className="text-[#D0CCC4]">
                  So Linda puts 7% of her retirement portfolio into gold, keeps a cash cushion for near-term spending, and uses TIPS and dividend-paying stock funds for the rest of her inflation strategy. That is a more balanced approach than betting everything on one metal.
                </p>
              </div>
            </section>

            {/* Section: Bottom line */}
            <section id="bottom-line" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                So, Is Gold a Good Hedge Against Inflation?
              </h2>
              <p className="text-[#D0CCC4] mb-4">
                Yes, but only with realistic expectations. Gold has a strong long-term reputation as a store of value and has often helped during inflationary and recessionary stress. But it is imperfect over short periods, and there have been long stretches, especially after 1980, when it disappointed investors.
              </p>
              <p className="text-[#D0CCC4]">
                For retirees, gold can make sense as a modest slice of a broader plan, especially if the goal is diversification and protection from extreme scenarios. It makes less sense as a one-stop answer to rising prices.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-[#0C0D18] rounded-xl border border-[#2A2D42] p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                      <h3 className="text-lg font-bold">{faq.question}</h3>
                      <span className="shrink-0 rounded-full bg-[#121423] p-1.5 text-[#D4A94E] sm:p-3">
                        <Clock className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-[#D0CCC4]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <SourcesSection sources={sources} lastVerified="April 2026" />

            <AutoRelatedContent currentUrl="/learn/is-gold-a-good-hedge-against-inflation-in-retirement" />

            <AuthorBox />
          </article>
        </Container>

        {/* Footer CTA */}
        <section className="py-16 bg-[#0C0D18] border-t border-[#2A2D42]">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-gold-inflation-hedge" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
