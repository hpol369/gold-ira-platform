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

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Gold IRA for Nurses Over 55: A Practical Retirement Protection Guide (2026)",
  description:
    "Gold IRA guide for nurses over 55. Learn how 403(b), 457(b), and pension plans affect the decision, when gold makes sense, and how to avoid common mistakes.",
  url: "https://www.richdadretirement.com/learn/gold-ira-for-nurses",
  type: "article",
  imageAlt: "Gold IRA for Nurses Over 55",
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/learn/gold-ira-for-nurses";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Learn", url: "/learn" },
  { name: "Gold IRA for Nurses", url: PAGE_URL },
];

const faqs = [
  {
    question: "Can a nurse roll a 403(b) into a Gold IRA?",
    answer:
      "Often yes if it is from a former employer, and sometimes from a current employer if the plan allows an in-service rollover. Check with your plan administrator for specific eligibility.",
  },
  {
    question: "What about a 457(b)?",
    answer:
      "Possibly, but the rules depend on the plan type (governmental vs non-governmental) and your employment status. Governmental 457(b) plans generally have more rollover flexibility.",
  },
  {
    question: "If a nurse has a pension, does she still need gold?",
    answer:
      "Maybe, maybe not. A pension already provides a more stable income floor than many retirees have, which may reduce the need to chase protection through a large metals allocation.",
  },
  {
    question: "Is a Gold IRA safer than a 403(b)?",
    answer:
      "Not automatically. Gold IRAs carry price risk, fee risk, and concentration risk. A 403(b) invested in diversified funds may offer broader exposure with lower costs.",
  },
  {
    question: "Should a nurse move all retirement savings into gold?",
    answer:
      "Usually that would be too concentrated for most retirees. A modest allocation may make sense for some, but moving everything into one asset class increases risk rather than reducing it.",
  },
];

const sources = [
  {
    name: "IRS, Retirement Plan Rollover Guidance",
    url: "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions",
    accessDate: "April 2026",
  },
  {
    name: "U.S. Department of Labor, Retirement Plan Basics",
    url: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/retirement-plans-and-erisa-consumer",
    accessDate: "April 2026",
  },
  {
    name: "SEC Investor.gov, Diversification and Fees",
    url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-2",
    accessDate: "April 2026",
  },
  {
    name: "Bureau of Labor Statistics, Healthcare Workforce Data",
    url: "https://www.bls.gov/ooh/healthcare/",
    accessDate: "April 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIraForNursesPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA for Nurses Over 55: A Practical Guide to Retirement Protection",
          description:
            "Gold IRA guide for nurses over 55. Learn how 403(b), 457(b), and pension plans affect the decision, and when gold makes sense.",
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
                Gold IRA for Nurses Over 55
              </h1>
              <p className="mt-3 text-lg md:text-xl text-slate-600">
                A practical guide to retirement protection for healthcare workers
                navigating 403(b) plans, pensions, burnout, and the question of
                whether gold belongs in the picture.
              </p>

              <ArticleMeta
                publishDate="April 15, 2026"
                updateDate="April 15, 2026"
                readTime="10 min"
              />

              <AnswerFirst
                answer="Nurses over 55 often have unique retirement questions around employer plans, late-career burnout, and inflation protection. A Gold IRA may fit some situations, but the best choice depends on savings balance, pension expectations, and how soon withdrawals may begin."
                keyFacts={[
                  "Retirement readiness depends heavily on contribution history and expected retirement age. Source: EBRI",
                  "Health-care workers may face irregular retirement timing due to physical demands and burnout. Source: BLS / industry workforce reports",
                  "Portfolio diversification remains a core retirement planning principle. Source: FINRA",
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
                Nurses over 55 are in a unique spot. You&apos;ve worked long shifts, handled
                physical and emotional stress, and in many cases spent years putting other
                people first. By the time retirement gets close, a lot of nurses are not chasing
                big investment wins. They want clarity, stability, and a plan they can live with.
              </p>
              <p>
                This article is written with <strong>Linda</strong>, a 56-year-old ICU nurse,
                in mind. Linda has $95,000 in a 403(b) and is wondering whether a Gold IRA
                deserves a place in her retirement picture. For more nursing-specific retirement
                content, visit our{" "}
                <Link href="/retirement/nurses-nearing-retirement" className="text-[#B22234] font-semibold hover:underline">
                  nurses nearing retirement hub
                </Link>.
              </p>

              {/* Where Money Lives */}
              <h2 id="where-money-lives">Where Nurses&apos; Retirement Money Usually Lives</h2>
              <p>
                Hospital and health system workers often have retirement savings in a mix of:
              </p>
              <ul>
                <li><strong>403(b) plans</strong></li>
                <li><strong>457(b) plans</strong></li>
                <li>Traditional or Roth IRAs</li>
                <li>A <strong>pension</strong>, in some hospital systems</li>
                <li>Taxable savings</li>
              </ul>
              <p>
                That mix can get confusing fast. Linda may have a 403(b) through her hospital,
                maybe a 457(b), and maybe a pension estimate she hasn&apos;t looked at in a while.
              </p>
              <p>Before talking about gold, she needs to know:</p>
              <ul>
                <li>Is she still employed at the hospital?</li>
                <li>Is the 403(b) from a current job or former job?</li>
                <li>Is an in-service rollover allowed?</li>
                <li>Does she have a pension that already provides stable income?</li>
              </ul>
              <p>
                Those details affect whether a Gold IRA even makes sense right now.
              </p>

              {/* Why Gold Comes Up */}
              <h2 id="why-gold-comes-up">Why Gold Comes Up for Nurses Near Retirement</h2>
              <p>
                For many nurses, the interest in gold is not greed. It&apos;s fatigue. After
                years of bedside stress, charting, staffing shortages, and burnout,
                &ldquo;safe&rdquo; sounds good. Gold gets marketed as a defense against inflation,
                recession, and stock market losses. That can be appealing to someone who feels
                like she can&apos;t afford another financial shock.
              </p>
              <p>
                But gold is not a replacement for a retirement income plan. Linda still needs
                to think about:
              </p>
              <ul>
                <li>Monthly income needs</li>
                <li>Pension options, if she has one</li>
                <li>Social Security timing</li>
                <li>Healthcare costs before and after Medicare</li>
                <li>How much growth she still needs</li>
              </ul>
              <p>
                Gold can be one small piece of the conversation, but it should not become the
                whole conversation. Take our{" "}
                <Link href="/retirement-risk-score" className="text-[#B22234] font-semibold hover:underline">
                  retirement risk assessment
                </Link>{" "}
                to understand how your overall plan stacks up.
              </p>

              {/* 403(b) and Pension Questions */}
              <h2 id="plan-questions">403(b), 457(b), and Pension Questions Matter First</h2>
              <p>
                If Linda still works for the hospital, moving money out of her current 403(b) may
                not be allowed unless the plan permits an in-service rollover. A 457(b) may have
                different rules depending on whether it&apos;s governmental or non-governmental.
              </p>
              <p>
                And if she has a pension coming, that changes the role gold might play. A pension
                already provides a more stable income floor than many retirees have. That may
                reduce the need to chase &ldquo;protection&rdquo; through a large metals allocation.
              </p>
              <p>
                In other words, Linda&apos;s decision should be based on her full retirement map
                &mdash; not just fear about the stock market.
              </p>

              <InContentCTA trackSource="learn-gold-ira-nurses" />

              {/* Practical Example */}
              <h2 id="practical-example">A Practical Example for Linda</h2>
              <p>Let&apos;s say Linda is 56, has:</p>
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 my-6 not-prose">
                <ul className="space-y-2 text-slate-700">
                  <li><strong>$95,000 in a 403(b)</strong></li>
                  <li>A small expected hospital pension</li>
                  <li>About 10 years until full retirement, though burnout may push her out sooner</li>
                </ul>
              </div>
              <p>
                She&apos;s nervous about inflation and market swings. She hears that she can roll
                her 403(b) into a Gold IRA. Maybe she can. But the better question is whether she
                should, and if so, how much.
              </p>
              <p>For Linda, a cautious approach might mean:</p>
              <ul>
                <li>Reviewing whether her current plan is low-cost</li>
                <li>Looking at her pension and Social Security estimates</li>
                <li>Making sure she has emergency savings</li>
                <li>Considering whether only a modest slice of retirement money belongs in gold</li>
              </ul>
              <p>
                If she moves too much into a Gold IRA, she could face higher{" "}
                <Link href="/learn/gold-ira-fees-explained" className="text-[#B22234] font-semibold hover:underline">
                  fees
                </Link>, less growth potential over time, more concentration in one asset, and more
                complexity later when taking distributions. For someone already dealing with
                burnout, simplicity has value too.
              </p>

              {/* When It May or May Not Fit */}
              <h2 id="when-it-fits">When a Gold IRA May or May Not Fit</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">May fit if Linda:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Wants limited exposure to precious metals</li>
                    <li>Understands the fees</li>
                    <li>Has other retirement income sources</li>
                    <li>Is not sacrificing too much diversification</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">May not fit if she:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Is reacting mainly out of fear</li>
                    <li>Has high-interest debt or weak cash reserves</li>
                    <li>Is giving up a good low-cost workplace plan</li>
                    <li>Thinks gold cannot lose value</li>
                  </ul>
                </div>
              </div>
              <p>
                That last point matters. Gold can and does fall in price. For a broader look at
                when a Gold IRA is{" "}
                <Link href="/when-not-to-open-gold-ira" className="text-[#B22234] font-semibold hover:underline">
                  not the right move
                </Link>, see our dedicated trust page. And for step-by-step rollover guidance,
                read our{" "}
                <Link href="/guide/gold-ira-guide" className="text-[#B22234] font-semibold hover:underline">
                  Gold IRA guide
                </Link>.
              </p>

              {/* Who This Is For */}
              <h2 id="who-this-is-for">Who This Is For / Not For</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This is for:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Nurses over 55 with a 403(b), 457(b), or pension</li>
                    <li>Hospital workers thinking about rollover options</li>
                    <li>Burned-out healthcare workers seeking a calmer retirement plan</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This is not for:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Readers looking for a guarantee against market loss</li>
                    <li>Nurses who need immediate personalized tax advice</li>
                    <li>Anyone thinking gold should replace all other retirement investments</li>
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
            <AugustaCTA variant="footer" trackSource="learn-gold-ira-nurses" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
