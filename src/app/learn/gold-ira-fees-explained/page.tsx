import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { ChevronDown } from "lucide-react";
import { isPublished } from "@/data/editorial-schedule";

export const revalidate = 86400; // Revalidate daily so pages go live on schedule

export const metadata: Metadata = {
    title: "Gold IRA Fees Explained: Setup, Storage, Custodian & Selling Costs (2026)",
    description:
        "Understand all Gold IRA fees: setup, custodian, storage, dealer markup, transaction, and termination costs. Real math examples by account size.",
    alternates: {
        canonical: "https://www.richdadretirement.com/learn/gold-ira-fees-explained",
    },
    robots: isPublished("gold-ira-fees-explained") ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
        title: "Gold IRA Fees Explained: Setup, Storage, Custodian, and Selling Costs",
        description:
            "Breakdown of the 6 main Gold IRA fees with real math examples for $25K to $250K accounts.",
        type: "article",
        url: "https://www.richdadretirement.com/learn/gold-ira-fees-explained",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const faqs = [
    {
        question: "What is the average annual fee for a Gold IRA?",
        answer:
            "It varies, but combined custodian and storage fees often run a few hundred dollars per year.",
    },
    {
        question: "Are Gold IRA fees percentage-based or flat?",
        answer:
            "They can be either. Many providers use flat annual fees, which hit smaller accounts harder as a percentage.",
    },
    {
        question: "What is the most overlooked Gold IRA cost?",
        answer:
            "Dealer markup or spread is often overlooked and can be substantial.",
    },
    {
        question: "Why are Gold IRA fees higher than ETF fees?",
        answer:
            "Physical metal requires custody, storage, administration, and handling, while ETFs are simpler to hold and trade.",
    },
    {
        question: "Can Gold IRA fees be waived?",
        answer:
            "Some promotions may waive certain fees for a time, but investors should ask where the company makes up that cost, often through product pricing.",
    },
];

const sources = [
    { name: "SEC Investor.gov, fee and expense basics", url: "https://www.investor.gov", accessDate: "March 2026" },
    { name: "IRS, IRA rules and reporting basics", url: "https://www.irs.gov", accessDate: "March 2026" },
    { name: "SPDR Gold MiniShares Trust and other issuer documents for ETF fee comparison", url: "https://www.spdrgoldshares.com", accessDate: "March 2026" },
    { name: "FINRA, investing costs and disclosures", url: "https://www.finra.org", accessDate: "March 2026" },
];

export default function GoldIRAFeesExplainedPage() {
    return (
        <main className="min-h-screen bg-[#0C0D18] pb-24">
            <SchemaScript
                schema={articleSchema({
                    title: "Gold IRA Fees Explained: Setup, Storage, Custodian, and Selling Costs",
                    description:
                        "Breakdown of the 6 main Gold IRA fees with real math examples by account size.",
                    slug: "/learn/gold-ira-fees-explained",
                    datePublished: "2026-03-19",
                    dateModified: "2026-03-19",
                })}
            />
            <SchemaScript schema={faqSchema(faqs)} />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Learn", url: "/learn" },
                    { name: "Gold IRA Fees Explained", url: "/learn/gold-ira-fees-explained" },
                ])}
            />

            {/* Answer-First GEO Block */}
            <section className="pt-8 pb-4 bg-white">
                <Container>
                    <AnswerFirst
                        answer="Gold IRA costs are usually more layered than traditional IRA costs. Retirees should expect to compare at least four categories -- account setup, annual custodian fees, storage fees, and spreads or liquidation costs -- before deciding whether the account fits their balance size and goals."
                        keyFacts={[
                            "Self-directed IRAs often involve separate custodian and asset-related fees. Source: SEC Investor.gov",
                            "Fee drag can materially reduce long-term retirement outcomes. Source: FINRA",
                            "Precious metals dealers may earn revenue through spreads, not just published fees. Source: CFTC investor education",
                        ]}
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            {/* Header */}
            <header className="bg-[#0C0D18] py-16 border-b border-[#2A2D42]">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-[#D4A94E] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Fee Transparency
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6">
                            Gold IRA Fees Explained
                        </h1>
                        <p className="text-xl text-[#D0CCC4] leading-relaxed">
                            Fees can quietly eat into returns, especially if the account is smaller or held for many
                            years. Here are the six most common costs and what the math actually looks like.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <ArticleMeta publishDate="2026-03-19" updateDate="2026-03-19" readTime="8 min" />

                    <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-li:text-[#D0CCC4] max-w-none">
                        <p className="lead">
                            Gold IRA advertising often focuses on the metal. What gets less attention is the fee stack.
                            If you&apos;re thinking about moving retirement money into a Gold IRA, understanding the
                            costs is not optional.
                        </p>
                        <p>
                            And that&apos;s important because gold itself does not produce income. So every dollar paid
                            in fees has to be made up through price appreciation just to break even. Our{" "}
                            <Link href="/gold-ira-industry-report-2026">2026 Gold IRA Industry Report</Link> covers the
                            latest fee benchmarks across the industry.
                        </p>

                        {/* Section: 6 main fees */}
                        <section id="six-main-fees" className="scroll-mt-24">
                            <h2>The 6 main Gold IRA fees</h2>
                            <p>
                                While pricing varies by company, these are the six most common fee categories:
                            </p>

                            <h3>1. Setup or account opening fee</h3>
                            <p>
                                This is a one-time fee to establish the self-directed IRA. It often ranges from around{" "}
                                <strong>$50 to $100+</strong>.
                            </p>

                            <h3>2. Custodian annual fee</h3>
                            <p>
                                This covers administration, reporting, and account maintenance. It may be a flat fee or
                                based on account size. Common range: roughly{" "}
                                <strong>$75 to $300+ per year</strong>.
                            </p>

                            <h3>3. Storage fee</h3>
                            <p>
                                Because IRA metals generally must be held in an approved depository, storage fees apply.
                                These may be <strong>segregated storage</strong> (your metals kept separately) or{" "}
                                <strong>non-segregated/commingled storage</strong> (pooled with others of the same type).
                                Common range: about <strong>$100 to $300+ per year</strong>, though percentages may
                                apply on larger accounts.
                            </p>

                            <h3>4. Dealer markup or spread</h3>
                            <p>
                                This is a big one. The dealer sells metals to the IRA above the spot market price. The
                                markup varies widely depending on product type, market conditions, and dealer pricing.
                                Some coins carry much higher premiums than standard bullion.
                            </p>

                            <h3>5. Wire, shipping, or transaction fees</h3>
                            <p>
                                These may apply when buying, selling, or moving metals. Sometimes small, but they add up.
                            </p>

                            <h3>6. Termination or liquidation fee</h3>
                            <p>
                                If you close the account, transfer out, or sell holdings, there may be additional fees.
                                See our{" "}
                                <Link href="/guide/gold-ira-fees">full fees guide</Link> for company-by-company
                                comparisons.
                            </p>
                        </section>

                        {/* Section: Math */}
                        <section id="fee-math" className="scroll-mt-24">
                            <h2>What the math can look like</h2>
                            <p>
                                Let&apos;s use a simple hypothetical annual cost estimate:
                            </p>
                            <ul>
                                <li>Setup fee: <strong>$50</strong> one time</li>
                                <li>Annual custodian fee: <strong>$150</strong></li>
                                <li>Annual storage fee: <strong>$150</strong></li>
                                <li>Ongoing account-level annual cost after year one: <strong>$300</strong></li>
                            </ul>
                            <p>
                                That does <strong>not</strong> include dealer markup, which can be significant.
                            </p>

                            {/* Fee table */}
                            <div className="not-prose my-8 overflow-x-auto">
                                <table className="min-w-full border border-[#2A2D42] rounded-lg text-sm">
                                    <thead className="bg-[#0C0D18]">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-bold text-[#F6F4EF] border-b border-[#2A2D42]">
                                                Account Size
                                            </th>
                                            <th className="px-4 py-3 text-left font-bold text-[#F6F4EF] border-b border-[#2A2D42]">
                                                $300/yr as %
                                            </th>
                                            <th className="px-4 py-3 text-left font-bold text-[#F6F4EF] border-b border-[#2A2D42]">
                                                Year 1 ($350) as %
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[#D0CCC4]">
                                        <tr className="border-b border-[#2A2D42]">
                                            <td className="px-4 py-3 font-medium">$25,000</td>
                                            <td className="px-4 py-3">1.2%</td>
                                            <td className="px-4 py-3">1.4%</td>
                                        </tr>
                                        <tr className="border-b border-[#2A2D42] bg-[#0C0D18]/50">
                                            <td className="px-4 py-3 font-medium">$50,000</td>
                                            <td className="px-4 py-3">0.6%</td>
                                            <td className="px-4 py-3">0.7%</td>
                                        </tr>
                                        <tr className="border-b border-[#2A2D42]">
                                            <td className="px-4 py-3 font-medium">$100,000</td>
                                            <td className="px-4 py-3">0.3%</td>
                                            <td className="px-4 py-3">0.35%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">$250,000</td>
                                            <td className="px-4 py-3">0.12%</td>
                                            <td className="px-4 py-3">0.14%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                Again, this still leaves out dealer markups and spreads. Compare these numbers using our{" "}
                                <Link href="/tools/fees-comparison">fees comparison tool</Link>.
                            </p>
                        </section>

                        {/* Section: Dealer markup */}
                        <section id="dealer-markup" className="scroll-mt-24">
                            <h2>Why dealer markup matters so much</h2>
                            <p>
                                The annual fees get most of the attention, but the markup on the gold itself can be just
                                as important, or more.
                            </p>
                            <p>
                                If spot gold is one price and you pay several percentage points above it to buy coins or
                                bars, you start out behind. Then if you sell back below spot, that creates another drag.
                            </p>
                            <p>
                                This is one reason investors should compare the &quot;all-in&quot; cost, not just the
                                annual admin fee. Ask:
                            </p>
                            <ul>
                                <li>What premium am I paying over spot?</li>
                                <li>What products are being recommended, and why?</li>
                                <li>What is the buyback policy?</li>
                                <li>How wide is the spread between buy and sell prices?</li>
                            </ul>
                            <p>
                                For a company known for fee transparency, see our{" "}
                                <Link href="/reviews/augusta-precious-metals">Augusta Precious Metals review</Link>.
                            </p>
                        </section>

                        {/* Section: ETF comparison */}
                        <section id="etf-comparison" className="scroll-mt-24">
                            <h2>Compare that with a low-cost gold ETF</h2>
                            <p>
                                For perspective, one of the lowest-cost gold ETFs on the market has an expense ratio
                                around <strong>0.03%</strong> annually. That&apos;s a very different fee structure from
                                a Gold IRA with flat annual fees, storage costs, and dealer spreads.
                            </p>
                            <p>
                                For a <strong>$25,000</strong> position:
                            </p>
                            <ul>
                                <li>
                                    <strong>0.03% ETF fee</strong> = <strong>$7.50 per year</strong>
                                </li>
                                <li>
                                    Hypothetical Gold IRA annual costs = <strong>$300 per year</strong> before markup
                                </li>
                            </ul>
                            <p>
                                That gap is why fees matter so much. If you&apos;re unsure whether the physical metal
                                premium is worth it for your situation, our guide on{" "}
                                <Link href="/when-not-to-open-gold-ira">when not to open a Gold IRA</Link> walks
                                through the trade-offs.
                            </p>
                        </section>

                        {/* Section: Blue-collar example */}
                        <section id="blue-collar-example" className="scroll-mt-24">
                            <h2>Blue-collar worker example</h2>
                            <p>
                                Meet <strong>Ron</strong>, 63, a retired welder with $50,000 in an old 401(k) that
                                he&apos;s thinking about rolling into gold.
                            </p>
                            <p>
                                If Ron puts the full $50,000 into a Gold IRA and pays about $300 a year in custodian
                                and storage fees, that&apos;s around <strong>0.6% annually</strong>, before product
                                markups.
                            </p>
                            <p>
                                If he also pays a hefty premium on coins, the investment may need a solid rise in gold
                                prices just to overcome the upfront and ongoing costs.
                            </p>
                            <p>
                                If Ron instead used a low-cost gold ETF inside a regular IRA or brokerage IRA, his
                                annual fee might be far lower. But he would not own physical coins or bars directly.
                            </p>
                            <p>
                                So Ron&apos;s decision isn&apos;t just about gold. It&apos;s about{" "}
                                <strong>how much he&apos;s paying for the form of gold he wants</strong>.
                            </p>
                        </section>

                        {/* Section: Who this is for */}
                        <section id="who-this-is-for" className="scroll-mt-24">
                            <h2>Who this is for / not for</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                                    <h3 className="font-bold text-green-800 mb-3">This is for:</h3>
                                    <ul className="space-y-2 text-sm text-green-700">
                                        <li>Retirees comparing Gold IRA costs with other gold options</li>
                                        <li>People considering a rollover from a 401(k)</li>
                                        <li>Savers with $25K to $250K wondering how fees scale</li>
                                        <li>Anyone who wants to look past advertising and see the math</li>
                                    </ul>
                                </div>
                                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                                    <h3 className="font-bold text-red-800 mb-3">This is not for:</h3>
                                    <ul className="space-y-2 text-sm text-red-700">
                                        <li>Investors unwilling to ask about markups and spreads</li>
                                        <li>People assuming &quot;free storage&quot; promotions mean no real cost</li>
                                        <li>Anyone focused only on setup fees while ignoring total ownership cost</li>
                                        <li>Those expecting gold to reliably outrun fees every year</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: Bottom line */}
                        <section id="bottom-line" className="scroll-mt-24">
                            <h2>The bottom line</h2>
                            <p>
                                Gold IRA fees are real, and they matter. The six most common costs are setup, custodian,
                                storage, markup, transaction, and termination fees. For smaller accounts especially,
                                flat annual fees can take a noticeable bite.
                            </p>
                            <p>
                                That does not mean a Gold IRA is always a bad idea. It means you should compare total
                                cost, not just marketing claims. Ask for every fee in writing, ask what premium
                                you&apos;re paying over spot, and compare the result against lower-cost alternatives
                                like gold ETFs.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-24">
                            <h2>Frequently Asked Questions</h2>
                            <div className="space-y-4 not-prose">
                                {faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-[#0C0D18] rounded-xl border border-[#2A2D42] p-6"
                                    >
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                            <h3 className="text-lg font-bold">{faq.question}</h3>
                                            <span className="shrink-0 rounded-full bg-[#121423] p-1.5 text-[#D4A94E] sm:p-3">
                                                <ChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-[#D0CCC4]">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <SourcesSection sources={sources} lastVerified="March 2026" />

                        <AutoRelatedContent currentUrl="/learn/gold-ira-fees-explained" />

                        <AuthorBox />
                    </article>
                </div>
            </Container>

            {/* Footer CTA */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-gold-ira-fees-explained" />
                </Container>
            </section>
        </main>
    );
}
