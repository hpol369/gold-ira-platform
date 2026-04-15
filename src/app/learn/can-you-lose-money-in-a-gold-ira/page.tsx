import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
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
import Link from "next/link";
import { isPublished } from "@/data/editorial-schedule";

export const revalidate = 86400; // Revalidate daily so pages go live on schedule

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Can You Lose Money in a Gold IRA? Real Risks Retirees Should Understand",
    description:
      "Yes, you can lose money in a Gold IRA. We explain the real risks: price declines, fee drag, dealer markups, opportunity cost, and how to protect yourself.",
    url: "https://www.richdadretirement.com/learn/can-you-lose-money-in-a-gold-ira",
    type: "article",
    imageAlt: "Can You Lose Money in a Gold IRA?",
  }),
  robots: isPublished("can-you-lose-money-in-a-gold-ira") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/learn/can-you-lose-money-in-a-gold-ira";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Learn", url: "/learn" },
  { name: "Can You Lose Money in a Gold IRA?", url: PAGE_URL },
];

const faqs = [
  {
    question: "Can you really lose money in a Gold IRA?",
    answer:
      "Yes. You can lose money from price declines, fees, dealer markups, and poor timing. Gold is not a guaranteed investment.",
  },
  {
    question: "Has gold ever fallen sharply?",
    answer:
      "Yes. Gold lost roughly 45% from its 2011 high to its 2015 low. Significant declines have occurred at other times as well.",
  },
  {
    question: "Are Gold IRA fees higher than regular IRA fees?",
    answer:
      "Often yes. Gold IRAs usually involve custody and storage costs that regular brokerage IRAs may not have, including setup fees, annual custodian fees, storage fees, and insurance fees.",
  },
  {
    question: "Do dealer markups matter that much?",
    answer:
      "Yes. High markups can leave you at an immediate disadvantage. If the all-in purchase price is significantly above spot, the metal has to rise just for you to break even.",
  },
  {
    question: "Is gold a bad investment then?",
    answer:
      "Not necessarily. Gold may help with diversification, but it carries real risks and should be sized carefully within a broader retirement portfolio.",
  },
];

const sources = [
  {
    name: "World Gold Council, Historical Gold Price Data",
    url: "https://www.gold.org/goldhub/data/gold-prices",
    accessDate: "April 2026",
  },
  {
    name: "Macrotrends, Historical Gold Prices",
    url: "https://www.macrotrends.net/1333/historical-gold-prices-100-year-chart",
    accessDate: "April 2026",
  },
  {
    name: "U.S. Securities and Exchange Commission, Investor Education on Fees and Diversification",
    url: "https://www.investor.gov",
    accessDate: "April 2026",
  },
  {
    name: "Commodity Futures Trading Commission (CFTC), Precious Metals Enforcement Actions",
    url: "https://www.cftc.gov",
    accessDate: "April 2026",
  },
  {
    name: "FINRA, Investing and Diversification Resources",
    url: "https://www.finra.org/investors",
    accessDate: "April 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function CanYouLoseMoneyInGoldIraPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Can You Lose Money in a Gold IRA? Real Risks Retirees Should Understand",
          description:
            "Yes, you can lose money in a Gold IRA. We explain the real risks: price declines, fee drag, dealer markups, opportunity cost, and how to protect yourself.",
          slug: PAGE_URL,
          datePublished: "2026-04-15T08:00:00Z",
          dateModified: "2026-04-15T08:00:00Z",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript schema={breadcrumbSchema(breadcrumbs)} />

      <main className="bg-white min-h-screen">
        {/* Hero / H1 + AnswerFirst */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-12 md:pt-12 md:pb-16">
          <Container>
            <div className="max-w-3xl mx-auto mt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] leading-tight">
                Can You Lose Money in a Gold IRA?
              </h1>
              <p className="mt-3 text-lg md:text-xl text-slate-600">
                Real risks retirees should understand before moving retirement
                savings into physical gold.
              </p>

              <ArticleMeta
                publishDate="April 15, 2026"
                updateDate="April 15, 2026"
                readTime="10 min"
              />

              <AnswerFirst
                answer="Yes, a Gold IRA can lose money. Gold prices move, dealer spreads matter, account fees add up, and selling quickly in the wrong market can reduce proceeds — so retirees should evaluate it as a risk-management tool, not a guaranteed-profit account."
                keyFacts={[
                  "Gold prices can be volatile over shorter time periods. Source: World Gold Council / LBMA historical data",
                  "Fees and spreads can create a performance hurdle for investors. Source: SEC/FINRA investor guidance",
                  "No investment eliminates market risk entirely. Source: SEC Investor.gov",
                ]}
                className="mt-8"
              />
            </div>
          </Container>
        </section>

        {/* Article Body */}
        <section className="py-12">
          <Container>
            <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-700 prose-strong:text-slate-900 prose-li:text-slate-700 max-w-none">
              <p>
                Yes, you absolutely can lose money in a Gold IRA. That may sound obvious, but
                a lot of advertising around precious metals suggests the opposite. Some
                promotions make gold sound like a one-way bet &mdash; safe, permanent, and always
                rising when everything else falls apart. Real life is not that simple.
              </p>
              <p>
                A Gold IRA can play a role in retirement planning for some people. But it has
                risks, costs, and trade-offs just like any other investment. If you&apos;re
                thinking about moving retirement money into physical gold, it helps to understand
                where losses can come from. Take our{" "}
                <Link href="/retirement-risk-score" className="text-[#B22234] font-semibold hover:underline">
                  retirement risk assessment
                </Link>{" "}
                to see how your current plan stacks up.
              </p>

              {/* Gold Prices Can Go Down */}
              <h2 id="gold-prices-decline">Gold Prices Can Go Down &mdash; Sometimes for Years</h2>
              <p>
                Gold is often described as a hedge, but that does not mean the price always
                rises. One clear example: after hitting a peak around 2011, gold fell sharply.
                From roughly 2011 to late 2015, gold dropped about <strong>45%</strong> from its
                high to its low. That&apos;s a major decline, especially for retirees who may not
                have years to wait for a rebound.
              </p>
              <p>
                Gold can be volatile for several reasons:
              </p>
              <ul>
                <li>Changes in interest rates</li>
                <li>Strength of the U.S. dollar</li>
                <li>Inflation expectations</li>
                <li>Global fear and risk appetite</li>
                <li>Central bank activity</li>
              </ul>
              <p>
                Gold is not income-producing like a dividend-paying stock or a bond. Its value
                mostly depends on what the next buyer is willing to pay. Our{" "}
                <Link href="/gold-ira-industry-report-2026" className="text-[#B22234] font-semibold hover:underline">
                  2026 Gold IRA Industry Report
                </Link>{" "}
                provides additional context on how the market has performed in recent years.
              </p>

              {/* Fee Drag */}
              <h2 id="fees-eat-returns">Fees Can Eat Into Returns</h2>
              <p>
                A Gold IRA often costs more than a plain vanilla IRA invested in index funds.
                Common costs include:
              </p>
              <ul>
                <li>Account setup fee</li>
                <li>Annual custodian fee</li>
                <li>Storage fee</li>
                <li>Insurance fee</li>
                <li>Dealer spread or markup</li>
                <li>Selling fees in some cases</li>
              </ul>
              <p>
                This is called <strong>fee drag</strong>. Even if gold&apos;s price stays flat,
                your account value can still decline over time because of those ongoing expenses.
                For a full breakdown, see our{" "}
                <Link href="/learn/gold-ira-fees-explained" className="text-[#B22234] font-semibold hover:underline">
                  Gold IRA fees explained
                </Link>{" "}
                article.
              </p>
              <p>
                Let&apos;s say your Gold IRA earns 0% on price movement for a year, but annual
                fees total 1% to 2% or more once all costs are counted. Your real return is
                negative. That&apos;s a big difference from many low-cost index funds, where
                expense ratios can be a fraction of 1%.
              </p>

              <InContentCTA trackSource="learn-can-you-lose-money-gold-ira" />

              {/* Dealer Markups */}
              <h2 id="dealer-markups">Dealer Markups Can Put You Behind on Day One</h2>
              <p>
                This is one of the least understood risks. When you buy metals for a Gold IRA,
                you may pay more than the current spot price. Dealers often charge a{" "}
                <strong>markup</strong>, and in some enforcement cases regulators have alleged
                very high markups on coins sold to retirement investors.
              </p>
              <p>
                That means the metal may have to rise just for you to break even. If spot gold
                is $2,000 an ounce but the all-in purchase price embedded in the product is
                much higher, you start out in a hole. That&apos;s especially dangerous for
                retirees moving large balances.
              </p>
              <p>
                Some companies push collectible or semi-numismatic coins rather than simpler
                bullion products. Those often carry higher spreads and can be harder for regular
                investors to evaluate.
              </p>

              {/* Opportunity Cost */}
              <h2 id="opportunity-cost">Opportunity Cost Is Real</h2>
              <p>
                Even if your Gold IRA doesn&apos;t lose money outright, it can still
                underperform other investments over time. That&apos;s the{" "}
                <strong>opportunity cost</strong>.
              </p>
              <p>Money tied up in gold is money not invested in:</p>
              <ul>
                <li>Dividend-paying stocks</li>
                <li>Broad stock index funds</li>
                <li>Bonds or bond funds</li>
                <li>T-bills, CDs, or other income-producing assets</li>
              </ul>
              <p>
                Over long periods, stocks have historically outperformed gold, though with
                their own risks and volatility. Gold may help diversify a portfolio, but
                putting too much into it can mean giving up growth and income you may need
                in retirement. Use our{" "}
                <Link href="/tools/gold-allocation-calculator" className="text-[#B22234] font-semibold hover:underline">
                  gold allocation calculator
                </Link>{" "}
                to explore what percentage might fit your situation.
              </p>

              {/* Blue-Collar Example */}
              <h2 id="example">A Real-World Example</h2>
              <p>
                Take <strong>Dennis</strong>, a 61-year-old maintenance worker with $180,000 in
                retirement savings. He hears radio ads warning that the dollar is doomed and
                rolls $90,000 into a Gold IRA.
              </p>
              <p>Here&apos;s what happens:</p>
              <ul>
                <li>He pays setup and storage fees</li>
                <li>The dealer sells products with a healthy markup</li>
                <li>Gold prices drift lower over the next two years</li>
                <li>Meanwhile, the stock market rebounds and his old 401(k) holdings would have recovered faster</li>
              </ul>
              <p>
                Dennis did not lose money because gold is fake. He lost money because{" "}
                <strong>timing, fees, and concentration risk</strong> all worked against him.
                That doesn&apos;t mean gold is always a bad idea. It means a Gold IRA should be
                treated like one tool, not a miracle cure.
              </p>

              {/* When It Might Make Sense */}
              <h2 id="when-it-makes-sense">So When Might a Gold IRA Make Sense?</h2>
              <p>A Gold IRA may make sense for people who:</p>
              <ul>
                <li>Want a modest hedge against inflation or market stress</li>
                <li>Already have stock and bond exposure elsewhere</li>
                <li>Understand the fees and storage rules</li>
                <li>Plan to keep the allocation limited</li>
              </ul>
              <p>
                Many financial professionals who support gold exposure still suggest keeping it
                to a small slice of a diversified portfolio rather than making it the main
                event. For situations where it may not be a good fit, see{" "}
                <Link href="/when-not-to-open-gold-ira" className="text-[#B22234] font-semibold hover:underline">
                  when not to open a Gold IRA
                </Link>.
              </p>

              {/* Who This Is For */}
              <h2 id="who-this-is-for">Who This Is For / Not For</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This is for:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Retirees worried about moving too much money into gold</li>
                    <li>Investors comparing Gold IRAs to standard IRAs</li>
                    <li>People wanting a realistic view of downside risks</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This is not for:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Readers looking for gold sales pitches</li>
                    <li>People wanting guarantees about future gold prices</li>
                    <li>Investors who have already decided to go all-in no matter what</li>
                  </ul>
                </div>
              </div>

              {/* FAQ */}
              <FAQSection faqs={faqs} className="mt-12" />

              {/* Sources */}
              <SourcesSection sources={sources} lastVerified="April 2026" />

              <AutoRelatedContent currentUrl={PAGE_URL} />

              <AuthorBox />
            </article>
          </Container>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-slate-50">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-can-you-lose-money-gold-ira" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
