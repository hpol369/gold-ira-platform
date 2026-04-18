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
    title: "9 Signs a Gold IRA Company Is Not Reputable (2026 Red Flag Guide)",
    description:
      "Learn the 9 warning signs of an untrustworthy Gold IRA company. Covers high-pressure tactics, hidden fees, collectible coin scams, and real CFTC enforcement cases.",
    url: "https://www.richdadretirement.com/learn/signs-gold-ira-company-not-reputable",
    type: "article",
    imageAlt: "9 Signs a Gold IRA Company Is Not Reputable",
  }),
  robots: isPublished("signs-gold-ira-company-not-reputable") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/learn/signs-gold-ira-company-not-reputable";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Learn", url: "/learn" },
  { name: "Signs a Gold IRA Company Is Not Reputable", url: PAGE_URL },
];

const faqs = [
  {
    question: "Is every Gold IRA company dishonest?",
    answer:
      "No. But some use aggressive or misleading tactics, so screening matters. Reputable companies are transparent about fees, storage, and risks.",
  },
  {
    question: "Why do BBB complaints matter?",
    answer:
      "Not because every complaint is true, but because repeated patterns can reveal real issues with a company's service, pricing, or sales approach.",
  },
  {
    question: "Are high-pressure calls a red flag?",
    answer:
      "Yes. Pressure selling is one of the clearest warning signs. A reputable company should explain options without rushing you into moving your life savings.",
  },
  {
    question: "What real enforcement cases should I know about?",
    answer:
      "The CFTC has brought enforcement actions involving precious metals firms such as Red Rock Secured and Safeguard Metals, alleging significant customer harm affecting many elderly investors.",
  },
  {
    question: "What is the safest next step before opening a Gold IRA?",
    answer:
      "Slow down, compare fees in writing, review the company's regulatory history, and consider consulting with a fiduciary financial professional before moving retirement money.",
  },
];

const sources = [
  {
    name: "CFTC Enforcement Action Materials on Red Rock Secured",
    url: "https://www.cftc.gov",
    accessDate: "April 2026",
  },
  {
    name: "CFTC Enforcement Action Materials on Safeguard Metals",
    url: "https://www.cftc.gov",
    accessDate: "April 2026",
  },
  {
    name: "Better Business Bureau",
    url: "https://www.bbb.org",
    accessDate: "April 2026",
  },
  {
    name: "FTC Consumer Protection Resources",
    url: "https://www.ftc.gov/news-events/topics/consumer-protection",
    accessDate: "April 2026",
  },
  {
    name: "FINRA and SEC Investor.gov Guidance on Fraud Red Flags",
    url: "https://www.investor.gov",
    accessDate: "April 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function SignsGoldIraCompanyNotReputablePage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "9 Signs a Gold IRA Company May Not Be Reputable",
          description:
            "Learn the 9 warning signs of an untrustworthy Gold IRA company, including high-pressure tactics, hidden fees, and real CFTC enforcement cases.",
          slug: PAGE_URL,
          datePublished: "2026-04-15T08:00:00Z",
          dateModified: "2026-04-15T08:00:00Z",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript schema={breadcrumbSchema(breadcrumbs)} />

      <main className="bg-white min-h-screen">
        {/* Hero / H1 + AnswerFirst */}
        <section className="bg-[#0C0D18] pt-8 pb-12 md:pt-12 md:pb-16">
          <Container>
            <div className="max-w-3xl mx-auto mt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] leading-tight">
                9 Signs a Gold IRA Company Is Not Reputable
              </h1>
              <p className="mt-3 text-lg md:text-xl text-[#D0CCC4]">
                Not every Gold IRA company is a scam. But some are overpriced,
                misleading, or built around high-pressure tactics that can hurt retirees.
                Here is how to spot them before you move your money.
              </p>

              <ArticleMeta
                publishDate="April 15, 2026"
                updateDate="April 15, 2026"
                readTime="11 min"
              />

              <AnswerFirst
                answer="A reputable Gold IRA company should be transparent about fees, storage, liquidation, and sales practices. Retirees should be cautious if a company uses fear-based tactics, dodges written pricing, pushes collectible coins, or promises guaranteed protection from losses."
                keyFacts={[
                  "High-pressure sales tactics are a common red flag in retail investment marketing. Source: FINRA / CFTC",
                  "Precious metals scams often target older Americans. Source: FTC / FBI IC3",
                  "Fee transparency and written disclosures are critical for informed decisions. Source: SEC Investor.gov",
                ]}
                className="mt-8"
              />
            </div>
          </Container>
        </section>

        {/* Article Body */}
        <section className="py-12">
          <Container>
            <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-li:text-[#D0CCC4] max-w-none">
              <p>
                This matters a lot for older Americans. Once you roll money out of a 401(k) or
                IRA and into precious metals through the wrong dealer, the damage can be hard to
                undo. High markups, bad advice, and confusing products can eat into a retirement
                account fast.
              </p>
              <p>
                For a data-driven look at the Gold IRA industry, including company practices and
                complaint patterns, see our{" "}
                <Link href="/gold-ira-industry-report-2026" className="text-[#D4A94E] font-semibold hover:underline">
                  2026 Gold IRA Industry Report
                </Link>.
              </p>

              {/* Red Flag 1 */}
              <h2 id="push-to-act-now">1. They Push You to Act Right Now</h2>
              <p>Pressure is a huge red flag. If a salesperson says things like:</p>
              <ul>
                <li>&ldquo;You need to move today before the dollar collapses&rdquo;</li>
                <li>&ldquo;This offer expires by close of business&rdquo;</li>
                <li>&ldquo;Your retirement account is in danger unless you act now&rdquo;</li>
              </ul>
              <p>
                Slow down. Reputable firms explain options. They do not rush retirees into
                transferring life savings on fear alone.
              </p>

              {/* Red Flag 2 */}
              <h2 id="gold-cant-lose">2. They Talk Like Gold Can&apos;t Lose Value</h2>
              <p>
                Gold can go down. Any company suggesting otherwise is not giving you the full
                picture. If they say gold is &ldquo;guaranteed,&rdquo; &ldquo;perfectly safe,&rdquo;
                or &ldquo;can only go up,&rdquo; that&apos;s a problem.
              </p>
              <p>Balanced companies should acknowledge:</p>
              <ul>
                <li>Price volatility</li>
                <li>Fees and storage costs</li>
                <li>The risk of underperforming other assets</li>
              </ul>

              {/* Red Flag 3 */}
              <h2 id="wont-explain-fees">3. They Won&apos;t Clearly Explain All Fees</h2>
              <p>
                You should be able to get a plain written list of: setup fees, annual custodian
                fees, storage fees, insurance fees, dealer markups or spreads, and liquidation or
                wire fees. If the answer feels vague, slippery, or overly complicated, be careful.
                For a guide on what fees to expect, see our{" "}
                <Link href="/learn/gold-ira-fees-explained" className="text-[#D4A94E] font-semibold hover:underline">
                  Gold IRA fees explained
                </Link>{" "}
                article.
              </p>

              {/* Red Flag 4 */}
              <h2 id="push-collectibles">4. They Push Collectible Coins Over Straight Bullion</h2>
              <p>
                Many retirees think they are buying simple gold exposure, but some dealers steer
                them into coins with much higher markups. That doesn&apos;t automatically mean
                fraud. But it often means the company makes more money when you buy the pricier
                product.
              </p>
              <p>
                The CFTC and state regulators have brought cases involving precious metals firms
                accused of taking advantage of customers with inflated pricing.
              </p>

              <InContentCTA trackSource="learn-signs-gold-ira-not-reputable" />

              {/* Red Flag 5 */}
              <h2 id="review-patterns">5. Their Reviews Show a Pattern, Not Just a Few Complaints</h2>
              <p>
                No company is perfect. A few complaints alone don&apos;t prove much. What matters
                is the <strong>pattern</strong>:
              </p>
              <ul>
                <li>Delays in delivery or account setup</li>
                <li>Surprise fees</li>
                <li>Aggressive sales behavior</li>
                <li>Trouble selling back metals</li>
                <li>Customers saying product value did not match what they were told</li>
              </ul>
              <p>
                Check the BBB, Trustpilot, state regulators, CFTC and FTC actions, and court
                records when available. Read the complaint details, not just the star rating. For
                an example of a company with a strong track record, see our{" "}
                <Link href="/reviews/augusta-precious-metals" className="text-[#D4A94E] font-semibold hover:underline">
                  Augusta Precious Metals review
                </Link>.
              </p>

              {/* Red Flag 6 */}
              <h2 id="fear-over-facts">6. They Use Fear More Than Facts</h2>
              <p>
                A company that spends more time talking about collapse, confiscation, or panic
                than it does on pricing and process is showing you its sales strategy. Good
                companies use facts. Bad ones often use anxiety.
              </p>
              <p>
                That matters because fear-based marketing can lead retirees to move too much
                money into one asset. For a balanced look at when a Gold IRA is{" "}
                <Link href="/when-not-to-open-gold-ira" className="text-[#D4A94E] font-semibold hover:underline">
                  not the right move
                </Link>, see our trust page.
              </p>

              {/* Red Flag 7 */}
              <h2 id="dodge-buyback">7. They Dodge Questions About Buyback Terms</h2>
              <p>
                Ask a simple question: <strong>If I want to sell later, how does that
                work?</strong>
              </p>
              <p>You should get a clear answer on:</p>
              <ul>
                <li>Whether they offer a buyback program</li>
                <li>How pricing is determined</li>
                <li>What spread you may face</li>
                <li>How long liquidation takes</li>
              </ul>
              <p>If the answer is fuzzy, that&apos;s a warning sign.</p>

              {/* Red Flag 8 */}
              <h2 id="regulatory-cases">8. Regulators Have Accused Similar Firms of Massive Harm</h2>
              <p>
                This is not theoretical. The CFTC has announced enforcement actions against
                firms in the precious metals space, alleging schemes involving elderly investors
                and claiming tens of millions of dollars in customer harm.
              </p>
              <p>
                These are allegations and legal matters with case details that readers should
                review directly, but the big lesson is simple:{" "}
                <strong>large-scale precious metals harm has happened before</strong>, and retirees
                were often the target market.
              </p>
              <p>
                So don&apos;t assume &ldquo;gold company&rdquo; automatically means trustworthy.
                For more on{" "}
                <Link href="/learn/gold-ira-scams" className="text-[#D4A94E] font-semibold hover:underline">
                  Gold IRA scams
                </Link>{" "}
                and how to protect yourself, see our dedicated guide.
              </p>

              {/* Red Flag 9 */}
              <h2 id="more-interested-in-fear">9. They Seem More Interested in Your Fear Than Your Retirement Plan</h2>
              <p>A reputable company should care about:</p>
              <ul>
                <li>Your time horizon</li>
                <li>Other retirement assets</li>
                <li>Tax consequences</li>
                <li>Liquidity needs</li>
                <li>Whether a rollover is even suitable</li>
              </ul>
              <p>
                If instead they just want to move as much money as possible into metals, that
                tells you something.
              </p>

              {/* Blue-Collar Example */}
              <h2 id="example">A Real-World Example</h2>
              <p>
                Consider <strong>Tom</strong>, a 63-year-old union electrician with $210,000 in
                an old 401(k). He gets a call after filling out an online form. The salesperson
                warns him that banks are unsafe, says his 401(k) could disappear, and pushes him
                to roll nearly all his savings into gold coins &ldquo;today.&rdquo;
              </p>
              <p>
                Tom asks about fees and resale value. The answers are murky. Online reviews
                mention pressure and overpriced coins. That&apos;s the moment to walk away.
              </p>

              {/* Who This Is For */}
              <h2 id="who-this-is-for">Who This Is For / Not For</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This is for:</h3>
                  <ul className="space-y-2 text-[#D0CCC4]">
                    <li>Retirees considering a Gold IRA rollover</li>
                    <li>Families helping parents review precious metals offers</li>
                    <li>Anyone comparing Gold IRA companies</li>
                  </ul>
                </div>
                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This is not for:</h3>
                  <ul className="space-y-2 text-[#D0CCC4]">
                    <li>Readers looking for a list of &ldquo;best&rdquo; companies without doing due diligence</li>
                    <li>People wanting legal conclusions beyond public case filings</li>
                    <li>Investors who have already committed to a firm without review</li>
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
        <section className="py-16 bg-[#0C0D18]">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-signs-gold-ira-not-reputable" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
