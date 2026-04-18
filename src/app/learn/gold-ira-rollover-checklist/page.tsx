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
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";
import { isPublished } from "@/data/editorial-schedule";

export const revalidate = 86400; // Revalidate daily so pages go live on schedule

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Gold IRA Rollover Checklist for First-Time Retirees (2026)",
    description:
      "Step-by-step Gold IRA rollover checklist. 25 items covering what to verify before, during, and after moving your 401(k) or IRA into physical gold.",
    url: "https://www.richdadretirement.com/learn/gold-ira-rollover-checklist",
    type: "article",
  }),
  robots: isPublished("gold-ira-rollover-checklist") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "What is the safest way to do a gold IRA rollover?",
    answer:
      "Usually a direct rollover or direct transfer between custodians. This method avoids the 60-day deadline and mandatory withholding that apply to indirect rollovers.",
  },
  {
    question: "Can I store IRA gold at home?",
    answer:
      "No. IRA metals generally must be held in an approved depository. Taking personal possession is treated as a distribution by the IRS, triggering taxes and potential penalties.",
  },
  {
    question: "What mistakes are most common in gold IRA rollovers?",
    answer:
      "Missing fees, buying non-eligible metals, and mishandling the rollover paperwork are among the most common first-time mistakes.",
  },
  {
    question: "Should I roll over my entire 401(k) into gold?",
    answer:
      "For most retirees, that is usually too aggressive. A gold IRA typically works best as a partial diversification move, not an all-in bet.",
  },
  {
    question: "What paperwork should I keep after a gold IRA rollover?",
    answer:
      "Account opening forms, transfer documents, purchase confirmations, storage confirmations, and year-end statements. Keep everything for taxes and future RMD planning.",
  },
];

const sources = [
  {
    name: "IRS Rollover and IRA Rules",
    url: "https://www.irs.gov/retirement-plans",
    accessDate: "March 2026",
  },
  {
    name: "SEC Investor.gov on Rollovers",
    url: "https://www.investor.gov/",
    accessDate: "March 2026",
  },
  {
    name: "FINRA Guidance on Retirement Rollovers",
    url: "https://www.finra.org/investors",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Mint Bullion Specifications",
    url: "https://www.usmint.gov/",
    accessDate: "March 2026",
  },
];

const beforeChecklist = [
  "Confirm why you want gold in your retirement plan.",
  "Decide how much to allocate; avoid moving your whole nest egg.",
  "Review fees: setup, annual custodian, storage, insurance, dealer markup.",
  "Confirm whether your current 401(k) or IRA is eligible for rollover.",
  "Ask whether a direct rollover is possible. This is usually safer than an indirect rollover.",
  "Research the self-directed IRA custodian's reputation and complaint history.",
  "Verify the depository is IRS-approved and insured.",
  "Ask for a full list of IRA-eligible metals and products.",
  "Confirm the metals meet IRS purity standards.",
  "Understand storage options: segregated vs. non-segregated.",
];

const duringChecklist = [
  "Open the self-directed IRA before moving funds.",
  "Submit rollover paperwork carefully; double-check account numbers and names.",
  "Use a direct custodian-to-custodian transfer when possible.",
  "Do not take personal possession of the money unless you fully understand the 60-day indirect rollover rule.",
  "Wait until funds arrive before locking in metal purchases, unless procedures are clearly documented.",
  "Review the dealer's buy/sell spread before placing the order.",
  "Confirm exactly which coins or bars are being purchased.",
  "Get written confirmation that the metals will be shipped to the approved depository, not your home.",
];

const afterChecklist = [
  "Review your transaction confirmation and account statement.",
  "Verify the depository receipt or storage confirmation.",
  "Keep all paperwork for taxes and future RMD planning.",
  "Review your full portfolio to make sure metals did not become too large a share.",
  "Mark your calendar to review annual fees each year.",
  "Know your liquidation process before you need to sell.",
  "Revisit your plan yearly: is this still serving your retirement goals?",
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIraRolloverChecklistPage() {
  return (
    <>
      <Navbar />

      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA Rollover Checklist for First-Time Retirees",
          description:
            "Step-by-step Gold IRA rollover checklist. 25 items covering what to verify before, during, and after moving your 401(k) or IRA into physical gold.",
          slug: "/learn/gold-ira-rollover-checklist",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Learn", url: "/learn" },
          { name: "Gold IRA Rollover Checklist", url: "/learn/gold-ira-rollover-checklist" },
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
              <span className="text-[#F6F4EF] font-medium">Gold IRA Rollover Checklist</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
                Gold IRA Rollover Checklist for First-Time Retirees
              </h1>
              <p className="text-lg md:text-xl text-[#D0CCC4] leading-relaxed mb-6">
                Your first gold IRA rollover has more moving parts than a regular IRA transfer. This checklist helps you avoid the most common and most expensive mistakes.
              </p>
              <ArticleMeta
                publishDate="2026-04-15"
                updateDate="2026-04-15"
                readTime="8 min"
              />
            </div>
          </Container>
        </section>

        {/* Content */}
        <Container className="py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="Before starting a Gold IRA rollover, retirees should verify plan eligibility, compare custodians, review storage options, understand all fees, and confirm whether a direct rollover is available. A simple checklist can help avoid expensive mistakes and rushed decisions."
              keyFacts={[
                "Direct rollovers usually reduce the risk of timing-related errors. Source: IRS",
                "Investors should review all account, storage, and transaction costs before opening self-directed IRAs. Source: SEC Investor.gov",
                "Comparing multiple providers can improve decision quality and pricing transparency. Source: FTC consumer guidance",
              ]}
              className="mb-10"
            />

            <p className="text-[#D0CCC4] text-lg leading-relaxed mb-8">
              If you are doing your first gold IRA rollover, the process can feel more complicated than it should. That is because it is more complicated than rolling an old 401(k) into a regular IRA. You have more moving parts: a custodian, a metals dealer, an approved depository, IRS rules on what metals qualify, and rollover rules that must be handled correctly. The good news is that most mistakes can be avoided with a simple checklist. For the full rollover walkthrough, see our <Link href="/guide/401k-to-gold-rollover" className="text-[#D4A94E] font-medium hover:underline">401(k) to Gold Rollover Guide</Link>.
            </p>

            {/* Before you start */}
            <section id="before-you-start" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Before You Start: Make Sure a Gold IRA Fits Your Plan
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                Before moving money, ask yourself: Why am I doing this? How much of my retirement should really go into metals? Am I giving up income, liquidity, or growth I may need later? A gold IRA usually works best as a modest diversification move, not an all-in bet. If you are not sure a gold IRA is right, check our guide on <Link href="/when-not-to-open-gold-ira" className="text-[#D4A94E] font-medium hover:underline">when not to open a gold IRA</Link>.
              </p>
            </section>

            {/* Before checklist */}
            <section id="before-checklist" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">
                Before the Rollover
              </h2>
              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <ol className="space-y-3">
                  {beforeChecklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#D0CCC4]">
                      <span className="w-7 h-7 rounded-full bg-[rgba(197,149,46,0.1)] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <InContentCTA trackSource="learn-rollover-checklist" />

            {/* During checklist */}
            <section id="during-checklist" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">
                During the Rollover
              </h2>
              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <ol className="space-y-3" start={11}>
                  {duringChecklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#D0CCC4]">
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{i + 11}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* After checklist */}
            <section id="after-checklist" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">
                After the Rollover
              </h2>
              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <ol className="space-y-3" start={19}>
                  {afterChecklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#D0CCC4]">
                      <span className="w-7 h-7 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{i + 19}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Direct rollovers */}
            <section id="direct-rollovers" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-100 rounded-lg text-green-700">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Why Direct Rollovers Matter
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                The IRS generally allows both direct and indirect rollovers, but direct rollovers are usually cleaner and safer. In a direct rollover, the money moves from one retirement account provider to another without you taking possession of the funds. That lowers the risk of missing deadlines or triggering taxes.
              </p>
              <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6 my-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-1">Watch Out for Indirect Rollovers</h3>
                    <p className="text-[#D0CCC4] text-sm">
                      With an indirect rollover, the clock starts ticking. If you do not redeposit the funds within 60 days, the IRS may treat the transaction as taxable. That is a mistake retirees want to avoid.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[#D0CCC4]">
                For a full breakdown of the tax implications, see our article on <Link href="/learn/401k-to-gold-ira-tax-rules" className="text-[#D4A94E] font-medium hover:underline">401(k) to Gold IRA tax rules</Link>. And to compare providers, read our <Link href="/reviews/augusta-precious-metals" className="text-[#D4A94E] font-medium hover:underline">Augusta Precious Metals review</Link>.
              </p>
            </section>

            {/* Section: Blue-collar example */}
            <section id="example" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                A Blue-Collar Example: Sam the Retired Welder
              </h2>
              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <p className="text-[#D0CCC4] mb-4">
                  Sam is 64 and recently retired after decades as a welder in a manufacturing plant. He wants some protection outside the stock market, so he plans to move part of an old 401(k) into a gold IRA.
                </p>
                <p className="text-[#D0CCC4] mb-4">
                  At first he almost chooses the company with the loudest ads. Instead, he slows down and uses a checklist. He compares custodians, asks about annual fees, checks the depository, and confirms he is doing a direct rollover rather than having a check sent to him.
                </p>
                <p className="text-[#D0CCC4]">
                  That extra homework helps him avoid a tax headache and keeps his gold allocation to a level that fits the rest of his retirement plan.
                </p>
              </div>
            </section>

            {/* Bottom line */}
            <section id="bottom-line" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                The Bottom Line
              </h2>
              <p className="text-[#D0CCC4] mb-4">
                A gold IRA rollover is one of those jobs where a checklist can save real money. The biggest things to get right are: make sure gold actually fits your plan, use a direct rollover when possible, understand every fee, buy only IRA-eligible metals, verify approved storage, and keep good records.
              </p>
              <p className="text-[#D0CCC4]">
                If you handle those basics, you will avoid most of the common first-time mistakes. For more on fee structures, read <Link href="/learn/gold-ira-fees-explained" className="text-[#D4A94E] font-medium hover:underline">Gold IRA Fees Explained</Link>.
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
                        <FileText className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-[#D0CCC4]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <SourcesSection sources={sources} lastVerified="April 2026" />

            <AutoRelatedContent currentUrl="/learn/gold-ira-rollover-checklist" />

            <AuthorBox />
          </article>
        </Container>

        {/* Footer CTA */}
        <section className="py-16 bg-[#0C0D18] border-t border-[#2A2D42]">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-rollover-checklist" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
