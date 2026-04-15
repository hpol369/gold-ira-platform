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
    title: "Gold IRA RMD Rules After Age 73: What Retirees Must Know (2026)",
    description:
      "Gold IRA RMD rules explained in plain English. Learn when required minimum distributions start, how physical gold is valued, in-kind vs cash options, and penalties for missing an RMD.",
    url: "https://www.richdadretirement.com/learn/gold-ira-rmd-rules",
    type: "article",
    imageAlt: "Gold IRA RMD Rules After Age 73",
  }),
  robots: isPublished("gold-ira-rmd-rules") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PAGE_URL = "/learn/gold-ira-rmd-rules";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Learn", url: "/learn" },
  { name: "Gold IRA RMD Rules", url: PAGE_URL },
];

const faqs = [
  {
    question: "Do Gold IRAs have RMDs?",
    answer:
      "Yes, traditional Gold IRAs are subject to RMD rules just like other traditional IRAs. Roth IRAs do not require RMDs during the original owner's lifetime.",
  },
  {
    question: "At what age do Gold IRA RMDs start?",
    answer:
      "For most current retirees, RMDs start at age 73 under the SECURE 2.0 Act for those who reached age 72 after December 31, 2022.",
  },
  {
    question: "Can I take my RMD in actual gold instead of cash?",
    answer:
      "Usually yes, if your custodian allows in-kind distributions. The fair market value of the metals on the date of distribution counts toward your RMD and is generally taxable as ordinary income.",
  },
  {
    question: "How is gold valued for an RMD?",
    answer:
      "The custodian generally reports the account's fair market value as of December 31 of the prior year, based on metal type, quantity, purity, and the market spot price.",
  },
  {
    question: "What is the penalty for missing an RMD?",
    answer:
      "Generally 25% of the missed amount under current law. If corrected in a timely way, the penalty may be reduced to 10%. You may also need to file Form 5329.",
  },
];

const sources = [
  {
    name: "IRS, Publication 590-B, Distributions from Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590b",
    accessDate: "April 2026",
  },
  {
    name: "IRS, Retirement Topics: Required Minimum Distributions (RMDs)",
    url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-required-minimum-distributions-rmds",
    accessDate: "April 2026",
  },
  {
    name: "SECURE 2.0 Act of 2022 Summary, U.S. Congress and IRS Guidance",
    url: "https://www.irs.gov/retirement-plans/secure-2-0-act-of-2022",
    accessDate: "April 2026",
  },
  {
    name: "IRS, Form 5329 Instructions",
    url: "https://www.irs.gov/forms-pubs/about-form-5329",
    accessDate: "April 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIraRmdRulesPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA RMD Rules After Age 73",
          description:
            "Gold IRA RMD rules explained in plain English. Learn when required minimum distributions start, how physical gold is valued, and penalties for missing an RMD.",
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
                Gold IRA RMD Rules After Age 73
              </h1>
              <p className="mt-3 text-lg md:text-xl text-slate-600">
                Required minimum distributions apply to Gold IRAs just like other
                traditional IRAs. The difference is practical: physical metals add
                steps around valuation, liquidity, and distribution planning.
              </p>

              <ArticleMeta
                publishDate="April 15, 2026"
                updateDate="April 15, 2026"
                readTime="9 min"
              />

              <AnswerFirst
                answer="Gold IRAs are still IRAs, which means required minimum distribution rules can apply. The challenge is that physical metals are not as simple to divide or sell as cash, so retirees need to understand valuation, liquidity, and distribution planning before RMD age arrives."
                keyFacts={[
                  "Traditional IRAs are subject to RMD rules beginning at the applicable age under current law. Source: IRS",
                  "RMD amounts are based on account value and IRS life expectancy tables. Source: IRS",
                  "Illiquid assets inside retirement accounts can complicate distribution planning. Source: SEC/Investor guidance",
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
                If you own a Gold IRA and you&apos;re in your 70s, one question matters a
                lot: when do Required Minimum Distributions start, and how do they work
                when your IRA holds physical gold or silver instead of just mutual funds?
              </p>
              <p>
                A Gold IRA still follows the same basic IRS distribution rules as other
                traditional IRAs. The difference is practical: instead of selling shares,
                you may be dealing with coins or bars stored in a depository. You can
                estimate your RMD amount using our{" "}
                <Link href="/tools/rmd-calculator" className="text-[#B22234] font-semibold hover:underline">
                  RMD calculator
                </Link>.
              </p>

              {/* When RMDs Start */}
              <h2 id="when-rmds-start">When RMDs Start for a Gold IRA</h2>
              <p>
                For <strong>traditional IRAs</strong>, including traditional Gold IRAs, RMDs
                generally begin at <strong>age 73</strong> for people who reached age 72 after
                December 31, 2022. That change came from the SECURE 2.0 Act.
              </p>
              <p>
                Your first RMD must be taken by <strong>April 1 of the year after</strong> the
                year you turn 73. After that, yearly RMDs are generally due by December 31.
              </p>
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 my-6 not-prose">
                <p className="font-bold text-slate-900 mb-2">Example:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>You turn 73 in 2026</li>
                  <li>Your first RMD must be taken by April 1, 2027</li>
                  <li>Your second RMD must still be taken by December 31, 2027</li>
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  If you delay your first RMD until the next year, you could end up taking
                  two distributions in one tax year, which may increase your taxable income.
                </p>
              </div>
              <p>
                Important note: <strong>Roth IRAs do not require RMDs during the original
                owner&apos;s lifetime.</strong> But most Gold IRAs are traditional, not Roth.
                For a broader overview of Gold IRA tax considerations, see our{" "}
                <Link href="/learn/gold-ira-tax-rules" className="text-[#B22234] font-semibold hover:underline">
                  Gold IRA tax rules guide
                </Link>.
              </p>

              {/* How RMDs Are Calculated */}
              <h2 id="how-rmds-calculated">How Gold IRA RMDs Are Calculated</h2>
              <p>
                The IRS does not give Gold IRAs special treatment for the calculation itself.
                The formula is the same as for other traditional IRAs:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6 not-prose">
                <p className="font-bold text-slate-900 text-center">
                  Prior year-end account value &divide; Life expectancy factor (IRS Uniform Lifetime Table)
                </p>
              </div>
              <p>
                Most IRA owners use the <strong>Uniform Lifetime Table</strong> in IRS Publication
                590-B. For example, at age 73, the life expectancy factor is 26.5 under the
                current table. If your Gold IRA was worth $106,000 on December 31 of the
                previous year:
              </p>
              <p className="text-center font-bold text-lg text-slate-900">
                $106,000 &divide; 26.5 = about $4,000
              </p>
              <p>
                That $4,000 would be your approximate RMD for the year. The tricky part with
                a Gold IRA is figuring out the <strong>fair market value</strong> of physical
                metals as of December 31. To understand how this fits into your overall{" "}
                <Link href="/learn/how-much-gold-in-retirement-portfolio" className="text-[#B22234] font-semibold hover:underline">
                  retirement portfolio allocation
                </Link>, start with a realistic allocation plan.
              </p>

              {/* Valuation */}
              <h2 id="valuation">How Physical Gold Is Valued Inside the IRA</h2>
              <p>
                If your IRA owns bullion coins or bars, the custodian must report the
                account&apos;s <strong>fair market value (FMV)</strong> to the IRS each year,
                generally on Form 5498. That valuation is usually based on:
              </p>
              <ul>
                <li>The type of metal held</li>
                <li>Quantity and weight</li>
                <li>Metal purity</li>
                <li>The market spot price</li>
                <li>Sometimes a pricing method used by the custodian or depository</li>
              </ul>
              <p>
                You don&apos;t usually calculate this yourself. The custodian does it. But you
                should still review the reported value for reasonableness, because your RMD
                is based on that number.
              </p>

              <InContentCTA trackSource="learn-gold-ira-rmd-rules" />

              {/* In-Kind vs Cash */}
              <h2 id="in-kind-vs-cash">In-Kind vs Cash Distributions</h2>
              <p>
                With a Gold IRA, you generally have two ways to satisfy an RMD:
              </p>
              <h3>1. Cash distribution</h3>
              <p>
                Your custodian sells enough metal inside the IRA to generate the required
                cash, then distributes the cash to you.
              </p>
              <h3>2. In-kind distribution</h3>
              <p>
                Instead of selling the metal, the IRA distributes actual coins or bars to you
                personally. The fair market value of the metals on the date of distribution
                counts toward your RMD and is generally taxable as ordinary income.
              </p>
              <p>
                That means if you take gold coins worth $5,000 out of the IRA, that $5,000
                generally counts as your taxable IRA distribution. Once the metals leave the
                IRA, they are no longer inside a tax-advantaged account.
              </p>
              <p>
                Not every custodian handles in-kind distributions the same way, so ask about
                process, shipping, insurance, and fees.
              </p>

              {/* Missing an RMD */}
              <h2 id="missing-rmd-penalty">What Happens If You Miss an RMD?</h2>
              <p>
                If you fail to take your full RMD, the IRS can impose an{" "}
                <strong>excise tax</strong> on the amount not withdrawn. Under current law, the
                penalty is generally <strong>25% of the missed amount</strong>. If corrected in a
                timely way, it may be reduced to 10%.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6 not-prose">
                <p className="font-bold text-slate-900 mb-2">Example:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Required RMD: $6,000</li>
                  <li>You only withdraw: $2,000</li>
                  <li>Missed amount: $4,000</li>
                  <li className="font-semibold">Potential penalty: 25% of $4,000 = $1,000</li>
                </ul>
              </div>
              <p>
                You may also need to file <strong>Form 5329</strong>. In some cases, the IRS
                may waive the penalty if the shortfall was due to reasonable error and you
                take steps to fix it. Still, it is much easier to avoid the problem than clean
                it up later. Our{" "}
                <Link href="/guide/gold-ira-guide" className="text-[#B22234] font-semibold hover:underline">
                  Gold IRA guide
                </Link>{" "}
                walks through the full setup and distribution planning process.
              </p>

              {/* Blue-Collar Example */}
              <h2 id="example">A Real-World Example</h2>
              <p>
                Let&apos;s say <strong>Ray</strong>, a 74-year-old retired machinist, rolled part
                of an old 401(k) into a Gold IRA a few years ago. His account held mostly gold
                bullion, and the year-end value reported by his custodian was $132,500.
              </p>
              <p>
                Using the IRS Uniform Lifetime Table factor for age 74, Ray calculates his
                RMD. He doesn&apos;t want to sell all his metal during a weak market, so he asks
                the custodian to do a partial in-kind distribution of coins equal to the required
                amount.
              </p>
              <p>
                That can work, but Ray still owes income tax on the value distributed. The
                lesson: with a Gold IRA, RMDs are doable, but you need to plan ahead, especially
                if most of the account is tied up in physical metal. Learn more about situations
                where a Gold IRA may{" "}
                <Link href="/when-not-to-open-gold-ira" className="text-[#B22234] font-semibold hover:underline">
                  not be the right fit
                </Link>.
              </p>

              {/* Who This Is For */}
              <h2 id="who-this-is-for">Who This Is For / Not For</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This is for:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>Retirees age 73+ with a traditional Gold IRA</li>
                    <li>People considering rolling old retirement money into a Gold IRA</li>
                    <li>Anyone wanting to understand cash vs in-kind RMDs</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This is not for:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>People with only a Roth IRA</li>
                    <li>Investors focused only on Gold IRA setup, not distributions</li>
                    <li>Those looking for legal or tax advice specific to their situation</li>
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
            <AugustaCTA variant="footer" trackSource="learn-gold-ira-rmd-rules" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
