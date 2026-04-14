// src/app/retirement-risk-score/page.tsx
// Retirement Risk Score Quiz — standalone interactive assessment page

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { FAQSection } from "@/components/seo/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { RetirementRiskQuiz } from "@/components/quiz/RetirementRiskQuiz";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import { ClipboardCheck } from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Retirement Risk Score Quiz | Is a Gold IRA Right for You?",
  description:
    "Take our 10-question quiz to find out if a Gold IRA fits your retirement situation. Based on your savings, time horizon, debt, and financial goals. Free, no signup required.",
  url: "https://www.richdadretirement.com/retirement-risk-score",
  type: "article",
});

// ---------------------------------------------------------------------------
// Schema data
// ---------------------------------------------------------------------------

const pageSlug = "/retirement-risk-score";

const article = articleSchema({
  title: "Retirement Risk Score Quiz | Is a Gold IRA Right for You?",
  description:
    "Take our 10-question quiz to find out if a Gold IRA fits your retirement situation. Based on your savings, time horizon, debt, and financial goals. Free, no signup required.",
  slug: pageSlug,
  datePublished: "2026-04-14T08:00:00Z",
  dateModified: "2026-04-14T08:00:00Z",
});

const faqItems = [
  {
    question: "How is the Retirement Risk Score calculated?",
    answer:
      "The quiz evaluates 10 factors that determine whether a Gold IRA is appropriate for your situation: time horizon, total savings, debt level, existing alternative investments, liquidity needs, Gold IRA knowledge, investment motivation, fee sensitivity, age, and emergency fund status. Each answer is scored 0 to 3 points, where 0 indicates an ideal Gold IRA candidate and 3 indicates a poor fit. Scores range from 0 (best candidate) to 30 (not recommended).",
  },
  {
    question: "What score do I need to qualify for a Gold IRA?",
    answer:
      "There is no hard cutoff, but our scoring suggests: 0-7 (Low Risk) means you are a strong candidate; 8-14 (Moderate Risk) means a Gold IRA could work after addressing some financial gaps; 15-21 (High Risk) means alternatives like gold ETFs are likely better; and 22-30 (Critical Risk) means you should focus on financial foundations first. Most quiz takers score between 8 and 14.",
  },
  {
    question: "Is this quiz a substitute for financial advice?",
    answer:
      "No. This quiz is an educational self-assessment tool designed to help you evaluate whether a Gold IRA aligns with your financial situation. It is not personalized financial advice. We recommend consulting a fee-only fiduciary financial advisor before making any investment decisions, especially those involving retirement accounts.",
  },
];

const faqSchemaData = faqSchema(faqItems);

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Retirement Risk Score Quiz", url: pageSlug },
]);

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

const sources = [
  {
    name: "IRS: Retirement Topics - IRA Contribution Limits",
    url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits",
    accessDate: "April 2026",
  },
  {
    name: "IRS Publication 590-B: Distributions from Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590b",
    accessDate: "April 2026",
  },
  {
    name: "CFTC: Customer Advisory on Precious Metals Fraud",
    url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_PreciousMetals.html",
    accessDate: "April 2026",
  },
  {
    name: "World Gold Council: Gold as a Strategic Asset (2025)",
    url: "https://www.gold.org/goldhub/research/relevance-of-gold-as-a-strategic-asset",
    accessDate: "April 2026",
  },
  {
    name: "FINRA Investor Alert: Gold and Precious Metals",
    url: "https://www.finra.org/investors/insights/gold",
    accessDate: "April 2026",
  },
  {
    name: "Bureau of Labor Statistics: CPI Inflation Data",
    url: "https://www.bls.gov/cpi/",
    accessDate: "April 2026",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function RetirementRiskScorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pb-24">
        {/* Schema Scripts */}
        <SchemaScript schema={article} />
        <SchemaScript schema={faqSchemaData} />
        <SchemaScript schema={breadcrumbs} />

        {/* Hero Header */}
        <header className="bg-slate-50 border-b border-slate-200 py-16 md:py-20 relative overflow-hidden">
          {/* Patriot gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B22234] via-[#000080] to-[#B22234]" />
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#000080]/5 px-4 py-1.5 text-sm font-semibold text-[#000080] mb-6 border border-[#000080]/20">
                <ClipboardCheck className="h-3.5 w-3.5" />
                Free Assessment &mdash; No Signup Required
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-[#000080]">
                What&rsquo;s Your{" "}
                <span className="text-[#B22234]">Retirement Risk Score</span>?
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Answer 10 questions to find out if a Gold IRA fits your
                situation &mdash; or if you should look elsewhere.
              </p>
            </div>
          </Container>
        </header>

        {/* Content */}
        <Container className="py-12">
          <div className="max-w-3xl mx-auto">
            <ArticleMeta
              publishDate="2026-04-14"
              updateDate="2026-04-14"
              readTime="3 min"
            />

            {/* Answer First -- GEO snippet bait */}
            <AnswerFirst
              answer="This quiz evaluates your financial readiness for a Gold IRA based on 10 factors including time horizon, savings level, debt, liquidity needs, and knowledge. Scores range from 0 (ideal candidate) to 30 (not recommended). Most people score between 8-14, which means a Gold IRA could work after addressing certain financial gaps first."
              keyFacts={[
                "10 questions covering savings, debt, time horizon, knowledge, and motivation",
                "Point-based scoring from 0 (best fit) to 30 (not recommended)",
                "Four risk categories: Low, Moderate, High, and Critical",
                "Personalized next steps based on your score, including alternatives when a Gold IRA isn't right",
              ]}
              className="mb-10"
            />

            {/* Quiz Component */}
            <section className="my-12" id="quiz">
              <RetirementRiskQuiz />
            </section>

            {/* How the quiz works */}
            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none mt-16">
              <h2>How the Retirement Risk Score Works</h2>
              <p>
                Our Retirement Risk Score evaluates 10 financial factors that
                determine whether opening a Gold IRA is likely to help or hurt
                your retirement. Each question awards 0 to 3 points, where lower
                scores indicate a better fit for a Gold IRA.
              </p>

              <h3>What We Measure</h3>
              <ul>
                <li>
                  <strong>Time horizon:</strong> Gold IRAs work best with 5+
                  years before you need the funds
                </li>
                <li>
                  <strong>Savings level:</strong> Fixed fees of $200-$400/year
                  create a disproportionate drag on accounts under $50,000
                </li>
                <li>
                  <strong>Debt burden:</strong> Paying off 8%+ interest debt
                  almost always beats any investment return
                </li>
                <li>
                  <strong>Portfolio allocation:</strong> Over-concentrating in
                  alternative assets increases risk rather than reducing it
                </li>
                <li>
                  <strong>Liquidity needs:</strong> Gold IRAs impose penalties
                  for early withdrawal and physical gold takes days to liquidate
                </li>
                <li>
                  <strong>Knowledge level:</strong> Understanding IRS rules,
                  approved metals, and fee structures prevents costly mistakes
                </li>
                <li>
                  <strong>Investment motivation:</strong> Diversification is
                  sound; panic buying driven by scare-tactic ads is not
                </li>
                <li>
                  <strong>Fee sensitivity:</strong> If annual fees materially
                  affect your returns, alternatives like gold ETFs cost less
                </li>
                <li>
                  <strong>Age:</strong> Younger investors have time for equity
                  compounding; gold serves older investors seeking preservation
                </li>
                <li>
                  <strong>Emergency fund:</strong> Retirement savings should
                  never be your only financial safety net
                </li>
              </ul>

              <h3>Score Ranges Explained</h3>
              <div className="not-prose grid gap-3 my-6">
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                  <span className="font-bold text-green-800 text-sm whitespace-nowrap">0 - 7</span>
                  <span className="text-green-700 text-sm">
                    <strong>Low Risk</strong> &mdash; Strong candidate for a Gold IRA
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                  <span className="font-bold text-amber-800 text-sm whitespace-nowrap">8 - 14</span>
                  <span className="text-amber-700 text-sm">
                    <strong>Moderate Risk</strong> &mdash; Could work after addressing financial gaps
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3">
                  <span className="font-bold text-orange-800 text-sm whitespace-nowrap">15 - 21</span>
                  <span className="text-orange-700 text-sm">
                    <strong>High Risk</strong> &mdash; Alternatives likely a better fit right now
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <span className="font-bold text-red-800 text-sm whitespace-nowrap">22 - 30</span>
                  <span className="text-red-700 text-sm">
                    <strong>Critical Risk</strong> &mdash; Focus on financial foundations first
                  </span>
                </div>
              </div>

              <h3>Important Disclaimer</h3>
              <p>
                This quiz is an educational tool, not personalized financial
                advice. Your actual suitability for a Gold IRA depends on many
                factors beyond the 10 questions here. We recommend consulting
                a{" "}
                <Link href="https://www.napfa.org/find-an-advisor" target="_blank" rel="nofollow noopener noreferrer">
                  fee-only fiduciary financial advisor
                </Link>{" "}
                before making investment decisions involving retirement accounts.
              </p>
            </article>

            {/* FAQ Section */}
            <div className="mt-16">
              <FAQSection faqs={faqItems} />
            </div>

            {/* Sources */}
            <SourcesSection sources={sources} lastVerified="April 2026" />

            {/* Author Box */}
            <div className="mt-12 rounded-2xl bg-slate-900 p-1">
              <AuthorBox />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
