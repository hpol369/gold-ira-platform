import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  articleSchema,
  faqSchema,
  breadcrumbSchema,
  howToSchema,
} from "@/lib/schema";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Building2,
  Coins,
  FileText,
  TrendingUp,
  BadgeDollarSign,
  ArrowRightLeft,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Gold IRA Rollover: Complete Guide to Tax-Free Transfers (2026)",
  description:
    "Learn how to do a gold IRA rollover tax-free in 2026. Step-by-step process for 401k, TSP, 403b, and IRA transfers into physical gold. No penalties when done right.",
  url: "https://www.richdadretirement.com/gold-ira-rollover",
  type: "article",
});

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const tocItems = [
  { id: "what-is-gold-ira-rollover", label: "What Is a Gold IRA Rollover?" },
  { id: "rollover-types", label: "Direct vs. Indirect Rollovers" },
  { id: "eligible-accounts", label: "Eligible Account Types" },
  { id: "step-by-step", label: "Step-by-Step Process" },
  { id: "tax-rules", label: "Tax Rules & Penalties" },
  { id: "costs", label: "Rollover Costs & Fees" },
  { id: "best-companies", label: "Best Companies for Rollovers" },
  { id: "specific-guides", label: "Account-Specific Guides" },
  { id: "faq", label: "FAQs" },
];

const faqs = [
  {
    question: "How long does a gold IRA rollover take?",
    answer:
      "A direct gold IRA rollover typically takes 1 to 3 weeks from start to finish. The timeline depends on how quickly your current custodian processes the transfer and how fast the new Gold IRA custodian sets up your account. Some 401k plans may take up to 4 weeks to release funds.",
  },
  {
    question: "Is a gold IRA rollover tax-free?",
    answer:
      "Yes, a direct gold IRA rollover (trustee-to-trustee transfer) is completely tax-free. The funds move directly between custodians without you touching the money. An indirect rollover is also tax-free as long as you redeposit the full amount into the new Gold IRA within 60 calendar days.",
  },
  {
    question: "Can I roll my 401k into gold?",
    answer:
      "Yes. If you have left the employer sponsoring the 401k, you can roll it into a self-directed Gold IRA with no taxes or penalties. If you are still employed, check whether your plan allows an in-service rollover — many plans permit partial rollovers once you reach age 59 and a half.",
  },
  {
    question: "What is the minimum for a gold IRA rollover?",
    answer:
      "Most Gold IRA custodians require a minimum of $10,000 to $50,000 to open an account. Augusta Precious Metals, the top-rated company in our reviews, has a $50,000 minimum. Some companies like Noble Gold accept rollovers as low as $2,000.",
  },
  {
    question: "Can I do a partial rollover?",
    answer:
      "Absolutely. You do not have to move your entire retirement account into a Gold IRA. Many people roll over a portion — typically 5% to 25% — of their retirement savings into gold as a diversification strategy while keeping the rest in stocks, bonds, or mutual funds.",
  },
  {
    question: "What happens if I miss the 60-day deadline?",
    answer:
      "If you miss the 60-day window on an indirect rollover, the IRS treats the entire distribution as taxable income. You will owe federal and state income taxes on the full amount, plus a 10% early withdrawal penalty if you are under 59 and a half. This is why most advisors recommend a direct rollover to eliminate this risk entirely.",
  },
  {
    question: "Can I roll a Roth IRA into a Gold IRA?",
    answer:
      "Yes. You can roll a Roth IRA into a Roth Gold IRA (also called a self-directed Roth IRA that holds physical gold). Since both accounts are Roth, the transfer is tax-free and your future withdrawals remain tax-free as long as you meet the standard Roth distribution rules.",
  },
  {
    question: "Do I pay capital gains tax on a gold IRA rollover?",
    answer:
      "No. A rollover is not a sale, so there are no capital gains to report. You are simply moving retirement assets from one qualified account to another. Capital gains tax only applies if you take a distribution and sell the gold outside of the IRA.",
  },
];

const howToSteps = [
  {
    name: "Choose a Gold IRA custodian",
    text: "Research and select a reputable self-directed IRA custodian that specializes in precious metals. Look for companies with strong BBB ratings, transparent fee structures, and no history of complaints. Augusta Precious Metals, Goldco, and American Hartford Gold are among the top-rated options.",
  },
  {
    name: "Open your Gold IRA account",
    text: "Complete the new account application with your chosen custodian. You will need to provide your personal information, Social Security number, and beneficiary designations. Most companies handle this paperwork for you and the process takes about 15 minutes.",
  },
  {
    name: "Request the rollover from your current plan",
    text: "Contact your existing 401k administrator, IRA custodian, or plan provider and request a direct trustee-to-trustee transfer to your new Gold IRA. Your new custodian can usually initiate this on your behalf. Specify the dollar amount or percentage you want to roll over.",
  },
  {
    name: "Fund your Gold IRA account",
    text: "Once the transfer is initiated, your current custodian will send the funds directly to your new Gold IRA custodian. A direct rollover usually takes 1 to 3 weeks. You will receive confirmation once the funds arrive in your new account.",
  },
  {
    name: "Select and purchase your precious metals",
    text: "Work with your Gold IRA company to choose IRS-approved gold, silver, platinum, or palladium products. The IRS requires a minimum fineness of .995 for gold and .999 for silver. Popular choices include American Gold Eagles, Canadian Gold Maple Leafs, and gold bars from approved refiners. Your metals are then stored in an IRS-approved depository.",
  },
];

const sources = [
  {
    name: "IRS Publication 590-A: Contributions to Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590a",
    accessDate: "March 2026",
  },
  {
    name: "IRS Publication 590-B: Distributions from Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590b",
    accessDate: "March 2026",
  },
  {
    name: "IRS Topic No. 413 — Rollovers from Retirement Plans",
    url: "https://www.irs.gov/taxtopics/tc413",
    accessDate: "March 2026",
  },
  {
    name: "TSP.gov — Withdrawals and Rollovers",
    url: "https://www.tsp.gov/in-service-withdrawal-basics/",
    accessDate: "March 2026",
  },
  {
    name: "IRS Precious Metals IRA Requirements (IRC Section 408(m))",
    url: "https://www.irs.gov/retirement-plans/investments-in-collectibles-in-individually-directed-qualified-plan-accounts",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIRARolloverPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA Rollover: Complete Guide to Tax-Free Transfers (2026)",
          description:
            "Learn how to do a gold IRA rollover tax-free. Step-by-step process for 401k, TSP, 403b, and IRA transfers into physical gold.",
          slug: "/gold-ira-rollover",
          datePublished: "2025-06-15",
          dateModified: "2026-03-19",
        })}
      />
      <SchemaScript
        schema={howToSchema({
          name: "How to Do a Gold IRA Rollover",
          description:
            "Step-by-step process to roll over a 401k, IRA, TSP, or other retirement account into a Gold IRA without taxes or penalties.",
          totalTime: "P21D",
          steps: howToSteps,
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gold IRA Rollover", url: "/gold-ira-rollover" },
        ])}
      />

      <main className="bg-white min-h-screen">
        {/* ---------------------------------------------------------------- */}
        {/* Hero */}
        {/* ---------------------------------------------------------------- */}
        <section className="bg-[#0C0D18] border-b border-[#2A2D42] pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#D4A94E] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F6F4EF] font-medium">Gold IRA Rollover</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
                Gold IRA Rollover
              </h1>
              <p className="text-lg md:text-xl text-[#D0CCC4] leading-relaxed mb-6">
                How to transfer your 401k, IRA, TSP, or other retirement account into physical gold — tax-free, penalty-free, and in as little as 1&ndash;3 weeks.
              </p>

              <ArticleMeta
                publishDate="2025-06-15"
                updateDate="2026-03-19"
                readTime="12 min read"
              />
            </div>
          </Container>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Content + Sidebar Layout */}
        {/* ---------------------------------------------------------------- */}
        <Container className="py-12 md:py-16">
          <div className="flex gap-10">
            {/* Sidebar TOC — desktop only */}
            <TableOfContents items={tocItems} />

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Answer-First Block */}
              <AnswerFirst
                answer="A gold IRA rollover lets you move funds from an existing retirement account — like a 401k, traditional IRA, Roth IRA, TSP, 403b, or 457b — into a self-directed IRA that holds physical gold and other precious metals. When done as a direct (trustee-to-trustee) transfer, the rollover is completely tax-free and penalty-free regardless of your age."
                keyFacts={[
                  "Direct rollovers are 100% tax-free — no income tax, no penalties",
                  "Most Gold IRA rollovers complete in 1 to 3 weeks",
                  "You can do a partial rollover — no need to move everything",
                  "Minimum investments typically range from $10,000 to $50,000",
                  "IRS requires gold to be at least .995 fineness (99.5% pure)",
                ]}
                className="mb-10"
              />

              {/* ---------------------------------------------------------- */}
              {/* What Is a Gold IRA Rollover */}
              {/* ---------------------------------------------------------- */}
              <section id="what-is-gold-ira-rollover" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  What Is a Gold IRA Rollover?
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-4">
                  A gold IRA rollover is the process of transferring money from an existing retirement account into a <strong>self-directed Individual Retirement Account (IRA)</strong> that holds IRS-approved physical gold, silver, platinum, or palladium. The IRS treats this the same as any other IRA-to-IRA transfer — as long as you follow the rules, you will not owe any taxes or penalties.
                </p>
                <p className="text-[#D0CCC4] leading-relaxed mb-4">
                  Think of it this way: your retirement money is already in a tax-advantaged account. A rollover simply moves that money from one qualified account to another. The tax shelter stays in place. The only thing that changes is what your account holds — instead of paper assets like stocks and mutual funds, you now own physical gold stored in a secure depository.
                </p>
                <p className="text-[#D0CCC4] leading-relaxed mb-4">
                  Gold IRA rollovers have become increasingly popular among Americans aged 55 and older who want to protect their retirement savings from inflation, market crashes, and currency devaluation. According to the World Gold Council, gold has delivered an average annual return of roughly 8% over the past 20 years while serving as a hedge during every major market downturn.
                </p>

                <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6 my-6">
                  <h3 className="font-bold text-[#F6F4EF] mb-3 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-[#D4A94E]" />
                    Quick Example
                  </h3>
                  <p className="text-[#D0CCC4] text-sm leading-relaxed">
                    Say you spent 25 years driving a truck for a freight company and built up $180,000 in your 401k. You retire at 62 and want to put some of that money into gold. You pick a Gold IRA custodian, they help you open an account, and your old 401k sends $50,000 directly to the new custodian. No taxes. No penalties. You then use that $50,000 to buy IRS-approved gold coins and bars that go into a secure vault. The rest of your 401k stays where it is.
                  </p>
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Direct vs. Indirect Rollovers */}
              {/* ---------------------------------------------------------- */}
              <section id="rollover-types" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  Direct vs. Indirect Gold IRA Rollovers
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  The IRS allows two methods for rolling over retirement funds. Understanding the difference is critical because picking the wrong method can cost you thousands in taxes and penalties.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Direct Rollover Card */}
                  <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <h3 className="font-bold text-green-900 text-lg">Direct Rollover</h3>
                    </div>
                    <p className="text-green-800 text-sm font-semibold mb-2">Recommended Method</p>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        Funds transfer directly between custodians
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        You never touch the money
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        Zero tax withholding
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        No time limit or deadline
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        Unlimited transfers per year
                      </li>
                    </ul>
                  </div>

                  {/* Indirect Rollover Card */}
                  <div className="bg-[rgba(183,121,31,0.08)] border border-orange-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                      <h3 className="font-bold text-orange-900 text-lg">Indirect Rollover</h3>
                    </div>
                    <p className="text-orange-800 text-sm font-semibold mb-2">Use With Caution</p>
                    <ul className="space-y-2 text-sm text-orange-800">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                        Check is made payable to you
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                        20% mandatory tax withholding on 401k
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                        Must redeposit within 60 calendar days
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                        One indirect rollover per 12-month period
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                        Miss the deadline = full tax bill + penalties
                      </li>
                    </ul>
                  </div>
                </div>

                <Callout type="warning" title="The 60-Day Rule Can Be Expensive">
                  <p>
                    With an indirect rollover, your current custodian sends you a check. You then have exactly 60 calendar days to deposit the full amount into your new Gold IRA. If you miss that deadline by even one day, the IRS treats the entire distribution as taxable income. On a $100,000 rollover, that could mean $25,000 or more in federal and state taxes — plus a 10% early withdrawal penalty if you are under 59&frac12;.
                  </p>
                  <p className="mt-2">
                    <strong>Our recommendation:</strong> Always choose a direct rollover. There is no good reason to take the indirect route when a direct transfer eliminates every risk.
                  </p>
                </Callout>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Eligible Account Types Table */}
              {/* ---------------------------------------------------------- */}
              <section id="eligible-accounts" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  Retirement Accounts Eligible for a Gold IRA Rollover
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  Nearly every type of employer-sponsored or individual retirement account can be rolled into a Gold IRA. Here is a complete breakdown of what qualifies:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[rgba(197,149,46,0.1)] text-white">
                        <th className="text-left px-4 py-3 font-semibold">Account Type</th>
                        <th className="text-center px-4 py-3 font-semibold">Direct Rollover</th>
                        <th className="text-center px-4 py-3 font-semibold">Indirect Rollover</th>
                        <th className="text-left px-4 py-3 font-semibold">Tax Impact</th>
                        <th className="text-left px-4 py-3 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2A2D42]">
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Traditional 401(k)</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Must separate from employer or qualify for in-service withdrawal</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Traditional IRA</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">No separation from employer needed</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Roth IRA</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free (Roth to Roth)</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Must roll into Roth Gold IRA to stay tax-free</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Roth 401(k)</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free (Roth to Roth)</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Must separate from employer first</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">TSP (Thrift Savings Plan)</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Federal & military employees; age-based in-service withdrawal at 59&frac12;</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">403(b)</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Teachers, nurses, hospital workers, nonprofits</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">457(b)</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">State & local government employees; no 10% early withdrawal penalty</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">SEP IRA</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Self-employed & small business owners</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">SIMPLE IRA</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if direct</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Must have participated for at least 2 years</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Pension / Defined Benefit</td>
                        <td className="px-4 py-3 text-center text-green-600 font-bold">Yes</td>
                        <td className="px-4 py-3 text-center text-orange-500 font-bold">Varies</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Tax-free if eligible</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Must take lump-sum distribution option; not all plans offer it</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#A8A39A] text-sm mt-3 italic">
                  Note: If you are still working for the employer that sponsors your plan, check whether they allow in-service rollovers. Many plans now permit partial in-service transfers once you reach age 59&frac12;.
                </p>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Step-by-Step Process */}
              {/* ---------------------------------------------------------- */}
              <section id="step-by-step" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  How to Do a Gold IRA Rollover: 5 Steps
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  The entire process is straightforward and most Gold IRA companies handle the heavy lifting for you. Here is exactly what happens from start to finish:
                </p>

                <div className="space-y-6">
                  {howToSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(197,149,46,0.1)] text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#F6F4EF] text-lg mb-2">
                          Step {index + 1}: {step.name}
                        </h3>
                        <p className="text-[#D0CCC4] leading-relaxed text-sm">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Callout type="tip" title="Pro Tip: Let Your New Custodian Handle It">
                  <p>
                    The best Gold IRA companies will manage the entire rollover process on your behalf. They contact your old custodian, handle the paperwork, and track the transfer so you do not have to. All you need to do is sign a few forms. If a company is making you do all the legwork yourself, that is a red flag.
                  </p>
                </Callout>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Mid-Article CTA */}
              {/* ---------------------------------------------------------- */}
              <InContentCTA
                variant="emphasized"
                trackSource="gold-ira-rollover-mid"
              />

              {/* ---------------------------------------------------------- */}
              {/* Tax Rules & Penalties */}
              {/* ---------------------------------------------------------- */}
              <section id="tax-rules" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  Gold IRA Rollover Tax Rules & Penalties
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  The tax treatment of your gold IRA rollover depends entirely on which method you choose. Here is what you need to know so you do not get hit with an unexpected tax bill:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5">
                    <h3 className="font-bold text-[#F6F4EF] flex items-center gap-2 mb-2">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                      Direct Rollover (Trustee-to-Trustee Transfer)
                    </h3>
                    <ul className="text-[#D0CCC4] text-sm space-y-1.5 ml-7">
                      <li>100% tax-free — no federal or state income tax</li>
                      <li>No mandatory withholding of any kind</li>
                      <li>No 10% early withdrawal penalty regardless of age</li>
                      <li>No limit on the number of direct transfers you can do per year</li>
                      <li>No 60-day deadline to worry about</li>
                    </ul>
                  </div>

                  <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5">
                    <h3 className="font-bold text-[#F6F4EF] flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Indirect Rollover (60-Day Rollover)
                    </h3>
                    <ul className="text-[#D0CCC4] text-sm space-y-1.5 ml-7">
                      <li>20% mandatory federal tax withholding on 401k/403b/457b distributions</li>
                      <li>You must deposit the <strong>full original amount</strong> within 60 calendar days — including replacing the 20% that was withheld from your own pocket</li>
                      <li>Only one indirect rollover allowed per 12-month rolling period (per IRS rules since 2015)</li>
                      <li>Miss the 60-day deadline: full amount becomes taxable income</li>
                      <li>Under 59&frac12;? Add a 10% early withdrawal penalty on top of income taxes</li>
                    </ul>
                  </div>
                </div>

                <Callout type="warning" title="Real-World Example: The 20% Withholding Trap">
                  <p>
                    Let us say you do an indirect rollover of $100,000 from a 401k. Your old plan withholds 20%, so you receive a check for $80,000. To complete the rollover tax-free, you must deposit $100,000 — the full original amount — into your Gold IRA within 60 days. That means you need to come up with $20,000 from your own savings to make up the difference. If you only deposit $80,000, the IRS treats the missing $20,000 as a distribution and you will owe income tax plus the 10% penalty on it.
                  </p>
                </Callout>

                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6 my-6">
                  <h3 className="font-bold text-green-900 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    The Bottom Line on Taxes
                  </h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    A direct gold IRA rollover is always the safest choice. It is tax-free, penalty-free, and removes any risk of missing a deadline or dealing with mandatory withholding. Every reputable Gold IRA company will set up a direct rollover for you at no extra charge.
                  </p>
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Cost Comparison Table */}
              {/* ---------------------------------------------------------- */}
              <section id="costs" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  Gold IRA Rollover Costs & Fee Breakdown
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  The rollover itself is free — no custodian charges you to transfer money in. However, maintaining a Gold IRA comes with annual fees that are typically higher than a standard IRA because of the physical storage and insurance requirements. Here is what to expect:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-[#0C0D18] border border-[#2A2D42] rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[rgba(197,149,46,0.1)] text-white">
                        <th className="text-left px-4 py-3 font-semibold">Fee Type</th>
                        <th className="text-left px-4 py-3 font-semibold">Typical Range</th>
                        <th className="text-left px-4 py-3 font-semibold">When Charged</th>
                        <th className="text-left px-4 py-3 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2A2D42]">
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Account Setup</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">$0 – $50</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">One-time</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Many top companies waive this fee entirely</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Annual Custodian Fee</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">$50 – $100/year</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Annually</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Covers account administration and IRS reporting</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Storage Fee</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">$100 – $300/year</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Annually</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Segregated storage costs more but keeps your metals separate</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Insurance</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Included</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Annually</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Usually included in storage fee at approved depositories</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Transaction / Dealer Spread</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Varies (3% – 5% over spot)</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Per purchase/sale</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">The markup on gold products; compare prices between dealers</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Wire Transfer Fee</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">$25 – $30</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Per transfer</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Charged when funds are wired between institutions</td>
                      </tr>
                      <tr className="hover:bg-[#1E2134] transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#F6F4EF]">Account Closure</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">$0 – $250</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">One-time</td>
                        <td className="px-4 py-3 text-[#D0CCC4]">Charged if you close the account or transfer out</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Callout type="info" title="All-In Annual Cost Estimate">
                  <p>
                    For a typical Gold IRA with $50,000 to $100,000 in assets, expect total annual fees of roughly $150 to $400 per year (custodian fee + storage). That works out to about $12 to $33 per month. Some companies offer first-year fee waivers to new customers.
                  </p>
                </Callout>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Best Companies for Rollovers */}
              {/* ---------------------------------------------------------- */}
              <section id="best-companies" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  Best Gold IRA Companies for Rollovers
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  Not all Gold IRA companies are created equal. When choosing a provider for your rollover, look for transparent pricing, strong customer reviews, and a team that handles the transfer process for you. Here are the top-rated companies based on our independent research:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-[#0C0D18] border-2 border-[#B22234]/30 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[rgba(220,38,38,0.1)] rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="h-6 w-6 text-[#D4A94E]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-[#F6F4EF] text-lg">Augusta Precious Metals</h3>
                          <span className="text-xs bg-[#DC2626] text-white px-2 py-0.5 rounded-full font-semibold">#1 Rated</span>
                        </div>
                        <p className="text-[#D0CCC4] text-sm mb-2">
                          Education-first approach with no high-pressure sales. A+ BBB rating with zero complaints filed in over a decade. Lifetime customer support and transparent fee structure. Minimum investment: $50,000.
                        </p>
                        <p className="text-sm text-[#A8A39A]">
                          Best for: Investors with $50k+ who value education and white-glove service
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#121423] rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="h-6 w-6 text-[#A8A39A]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#F6F4EF] text-lg mb-1">Goldco</h3>
                        <p className="text-[#D0CCC4] text-sm mb-2">
                          Strong buyback program and a wide selection of IRS-approved gold and silver products. A+ BBB rated. Good option for mid-range budgets. Minimum investment: $25,000.
                        </p>
                        <p className="text-sm text-[#A8A39A]">
                          Best for: Investors with $25k–$50k looking for product variety
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#121423] rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="h-6 w-6 text-[#A8A39A]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#F6F4EF] text-lg mb-1">American Hartford Gold</h3>
                        <p className="text-[#D0CCC4] text-sm mb-2">
                          Known for competitive pricing and fast rollovers. Strong track record with A+ BBB rating. Lower minimum makes them accessible to more investors. Minimum investment: $10,000.
                        </p>
                        <p className="text-sm text-[#A8A39A]">
                          Best for: Investors with $10k–$25k who want low minimums
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[#D0CCC4] leading-relaxed">
                  For a detailed side-by-side comparison of fees, ratings, and customer reviews, see our{" "}
                  <Link href="/best-gold-ira-companies" className="text-[#D4A94E] hover:underline font-semibold">
                    Best Gold IRA Companies
                  </Link>{" "}
                  ranking page.
                </p>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Account-Specific Rollover Guides */}
              {/* ---------------------------------------------------------- */}
              <section id="specific-guides" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                  Account-Specific Rollover Guides
                </h2>
                <p className="text-[#D0CCC4] leading-relaxed mb-6">
                  Each retirement account type has its own rules and quirks when it comes to rolling over into gold. We have written detailed guides for each one:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "401(k) to Gold IRA Rollover",
                      href: "/guide/401k-to-gold-rollover",
                      desc: "Step-by-step for traditional and Roth 401k transfers",
                      icon: FileText,
                    },
                    {
                      title: "TSP to Gold IRA Rollover",
                      href: "/guide/tsp-to-gold-ira-rollover",
                      desc: "Federal employees and military service members",
                      icon: ShieldCheck,
                    },
                    {
                      title: "403(b) to Gold IRA Rollover",
                      href: "/guide/403b-to-gold-ira-rollover",
                      desc: "Teachers, nurses, hospital workers, and nonprofits",
                      icon: Building2,
                    },
                    {
                      title: "457(b) to Gold IRA Rollover",
                      href: "/guide/457b-to-gold-ira-rollover",
                      desc: "State and local government employees",
                      icon: BadgeDollarSign,
                    },
                    {
                      title: "IRA to Gold IRA Transfer",
                      href: "/guide/gold-ira-guide",
                      desc: "Traditional and Roth IRA transfers explained",
                      icon: ArrowRightLeft,
                    },
                    {
                      title: "Gold IRA Rollover Rules",
                      href: "/learn/gold-ira-rollover-rules",
                      desc: "Complete IRS rules and compliance guide",
                      icon: FileText,
                    },
                  ].map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group bg-[#161828] border border-[#2A2D42] rounded-xl p-5 hover:border-[rgba(197,149,46,0.45)] hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-lg flex items-center justify-center shrink-0">
                          <guide.icon className="h-5 w-5 text-[#D4A94E]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#F6F4EF] group-hover:text-[#D4A94E] transition-colors">
                            {guide.title}
                          </h3>
                          <p className="text-[#A8A39A] text-sm mt-1">{guide.desc}</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-3">
                        <span className="text-[#D4A94E] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Guide <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* FAQ Section */}
              {/* ---------------------------------------------------------- */}
              <section id="faq" className="mb-12 scroll-mt-24">
                <FAQSection
                  faqs={faqs}
                  title="Gold IRA Rollover: Frequently Asked Questions"
                  includeSchema={false}
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Sources */}
              {/* ---------------------------------------------------------- */}
              <SourcesSection
                sources={sources}
                lastVerified="March 19, 2026"
              />

              {/* ---------------------------------------------------------- */}
              {/* Author Box (dark variant — wrapped in dark bg) */}
              {/* ---------------------------------------------------------- */}
              <div className="bg-slate-900 rounded-2xl p-2 mt-12">
                <AuthorBox />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Footer CTA */}
              {/* ---------------------------------------------------------- */}
              <div className="mt-12">
                <AugustaCTA
                  variant="footer"
                  headline="Ready to Protect Your Retirement With Gold?"
                  subheadline="Request a free information kit from Augusta Precious Metals — our #1 rated Gold IRA company. No sales pressure, just education."
                  trackSource="gold-ira-rollover-footer"
                />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Related Content */}
              {/* ---------------------------------------------------------- */}
              <div className="bg-slate-900 rounded-2xl p-6 mt-12">
                <AutoRelatedContent
                  currentUrl="/gold-ira-rollover"
                  title="Keep Reading"
                  maxLinks={6}
                />
              </div>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
