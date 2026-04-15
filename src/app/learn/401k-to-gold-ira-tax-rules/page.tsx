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

export const metadata: Metadata = {
    title: "401(k) to Gold IRA Tax Rules: What Triggers Taxes or Penalties? (2026)",
    description:
        "Understand 401(k) to Gold IRA rollover tax rules. Learn about direct vs indirect rollovers, the 60-day rule, 20% withholding, and how to avoid penalties.",
    alternates: {
        canonical: "https://www.richdadretirement.com/learn/401k-to-gold-ira-tax-rules",
    },
    openGraph: {
        title: "401(k) to Gold IRA Tax Rules: What Triggers Taxes or Penalties?",
        description:
            "Direct vs indirect rollovers, the 60-day rule, and how to avoid turning a rollover into a taxable event.",
        type: "article",
        url: "https://www.richdadretirement.com/learn/401k-to-gold-ira-tax-rules",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const faqs = [
    {
        question: "Is a 401(k) to Gold IRA rollover taxable?",
        answer:
            "Not if it's done properly as a direct rollover from a pretax 401(k) to a traditional IRA.",
    },
    {
        question: "What is the 60-day rollover rule?",
        answer:
            "If funds are paid to you personally, you generally must deposit them into another retirement account within 60 days.",
    },
    {
        question: "Why is 20% withheld in an indirect rollover?",
        answer:
            "Federal law generally requires 20% withholding on eligible rollover distributions paid directly to the participant.",
    },
    {
        question: "Can I roll over my current employer 401(k)?",
        answer:
            "Maybe. Some plans allow it through an in-service withdrawal, but many do not.",
    },
    {
        question: "Is there an early withdrawal penalty?",
        answer:
            "If a rollover fails and becomes a distribution, those under 59 1/2 may owe a 10% penalty unless an exception applies.",
    },
];

const sources = [
    { name: "IRS, rollover chart and IRA rollover rules", url: "https://www.irs.gov", accessDate: "March 2026" },
    { name: "IRS Publication 590-A and 590-B", url: "https://www.irs.gov", accessDate: "March 2026" },
    { name: "U.S. Department of Labor, 401(k) rollover guidance", url: "https://www.dol.gov", accessDate: "March 2026" },
    { name: "SEC Investor.gov, retirement account rollover basics", url: "https://www.investor.gov", accessDate: "March 2026" },
];

export default function FourOhOneKToGoldIRATaxRulesPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript
                schema={articleSchema({
                    title: "401(k) to Gold IRA Tax Rules: What Triggers Taxes or Penalties?",
                    description:
                        "Direct vs indirect rollovers, the 60-day rule, and how to avoid turning a 401(k) rollover into a taxable event.",
                    slug: "/learn/401k-to-gold-ira-tax-rules",
                    datePublished: "2026-03-19",
                    dateModified: "2026-03-19",
                })}
            />
            <SchemaScript schema={faqSchema(faqs)} />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Learn", url: "/learn" },
                    { name: "401(k) to Gold IRA Tax Rules", url: "/learn/401k-to-gold-ira-tax-rules" },
                ])}
            />

            {/* Answer-First GEO Block */}
            <section className="pt-8 pb-4 bg-white">
                <Container>
                    <AnswerFirst
                        answer="A move from a 401(k) to a Gold IRA is not automatically taxable, but the details matter. Direct rollovers are generally simpler and safer, while mistakes with timing, withholding, or account handling can trigger avoidable taxes or early-withdrawal penalties."
                        keyFacts={[
                            "Indirect rollovers generally must be completed within 60 days. Source: IRS",
                            "Plan distributions paid to the participant may be subject to mandatory 20% withholding. Source: IRS rollover guidance",
                            "Early distributions before age 59 1/2 may trigger a 10% penalty unless an exception applies. Source: IRS",
                        ]}
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Rollover Tax Guide
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            401(k) to Gold IRA Tax Rules
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            A small mistake can turn what you thought was a tax-free rollover into a taxable event.
                            Here are the core rules you need to know before moving anything.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <ArticleMeta publishDate="2026-03-19" updateDate="2026-03-19" readTime="7 min" />

                    <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">
                        <p className="lead">
                            Rolling money from a 401(k) into a Gold IRA can be done, but the tax rules matter. If
                            you&apos;re 55+ and looking at an old employer plan, here are the core rules you need to
                            know before moving anything.
                        </p>

                        {/* Section: Can you roll over */}
                        <section id="can-you-rollover" className="scroll-mt-24">
                            <h2>First: can you roll a 401(k) into a Gold IRA?</h2>
                            <p>
                                Usually, yes, if the money is in an eligible account and you follow rollover rules.
                            </p>
                            <p>
                                If it&apos;s a <strong>former employer&apos;s 401(k)</strong>, rollovers are commonly
                                allowed.
                            </p>
                            <p>
                                If it&apos;s your <strong>current employer&apos;s 401(k)</strong>, you may be limited
                                unless the plan allows an &quot;in-service withdrawal.&quot; You&apos;ll need to check
                                with your plan administrator.
                            </p>
                            <p>
                                A Gold IRA is generally set up as a self-directed traditional IRA, and then rollover
                                funds are moved into it. For step-by-step instructions, see our{" "}
                                <Link href="/guide/401k-to-gold-rollover">401(k) to Gold rollover guide</Link>.
                            </p>
                        </section>

                        {/* Section: Direct vs indirect */}
                        <section id="direct-vs-indirect" className="scroll-mt-24">
                            <h2>Direct rollover vs indirect rollover</h2>
                            <p>
                                This is the most important distinction. For a detailed side-by-side comparison, see our{" "}
                                <Link href="/learn/indirect-vs-direct-rollover">
                                    indirect vs direct rollover explainer
                                </Link>.
                            </p>

                            <h3>Direct rollover</h3>
                            <p>
                                In a direct rollover, the money goes{" "}
                                <strong>straight from the 401(k) plan to the IRA custodian</strong>. You never take
                                possession of the funds.
                            </p>
                            <p>This is usually the cleaner and safer option. Why?</p>
                            <ul>
                                <li>No mandatory withholding</li>
                                <li>Lower chance of missing deadlines</li>
                                <li>Less paperwork confusion</li>
                            </ul>

                            <h3>Indirect rollover</h3>
                            <p>
                                In an indirect rollover, the 401(k) sends the money to <strong>you</strong> first. Then
                                you have <strong>60 days</strong> to deposit it into the IRA.
                            </p>
                            <p>This is where trouble can start.</p>
                        </section>

                        {/* Section: 60-day rule */}
                        <section id="60-day-rule" className="scroll-mt-24">
                            <h2>The 60-day rule and withholding</h2>
                            <p>
                                Under IRS rules, if you receive the money personally, you generally have{" "}
                                <strong>60 days</strong> from the date you receive it to complete the rollover.
                            </p>
                            <p>
                                Also, plan administrators are generally required to withhold <strong>20%</strong> for
                                federal income tax on eligible rollover distributions paid to you.
                            </p>

                            {/* Withholding example box */}
                            <div className="not-prose my-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <h3 className="font-bold text-amber-900 mb-3">Example: $50,000 indirect rollover</h3>
                                <ul className="space-y-2 text-sm text-amber-800">
                                    <li>You request a $50,000 indirect rollover</li>
                                    <li>The plan sends you <strong>$40,000</strong></li>
                                    <li><strong>$10,000</strong> is withheld for taxes</li>
                                </ul>
                                <p className="mt-3 text-sm text-amber-800">
                                    To complete a full tax-free rollover, you must deposit the full{" "}
                                    <strong>$50,000</strong> into the IRA within 60 days -- not just the $40,000 you
                                    received. You must come up with the missing $10,000 from your own funds until the
                                    withholding is credited back when you file taxes.
                                </p>
                            </div>

                            <p>
                                That&apos;s why many people choose a direct rollover. Consider using our{" "}
                                <Link href="/tools/roth-conversion-calculator">Roth conversion calculator</Link> to
                                model the tax impact of different rollover strategies.
                            </p>
                        </section>

                        {/* Section: What happens if you miss */}
                        <section id="missed-rules" className="scroll-mt-24">
                            <h2>What happens if you miss the rules?</h2>
                            <p>If the indirect rollover is not completed properly:</p>
                            <ul>
                                <li>The distribution may become taxable income</li>
                                <li>
                                    If you&apos;re under <strong>59 1/2</strong>, you may also owe a{" "}
                                    <strong>10% early withdrawal penalty</strong>, unless an exception applies
                                </li>
                            </ul>
                            <p>For many households, that can be an expensive mistake.</p>
                            <p>
                                There is one age-related detail worth noting: separation from service after age 55 may
                                allow penalty-free withdrawals from a 401(k) in some cases, but that rule does{" "}
                                <strong>not</strong> automatically carry over to IRA distributions. That&apos;s another
                                reason to understand timing before moving funds.
                            </p>
                        </section>

                        {/* Section: Traditional vs Roth */}
                        <section id="traditional-vs-roth" className="scroll-mt-24">
                            <h2>Traditional vs Roth tax treatment</h2>
                            <p>
                                Most 401(k)-to-Gold-IRA rollovers involve{" "}
                                <strong>traditional pretax money</strong> going into a traditional self-directed IRA.
                                Done properly, that is generally <strong>not taxable at the time of rollover</strong>.
                            </p>
                            <p>
                                If you move pretax 401(k) money into a <strong>Roth IRA</strong>, that is generally a{" "}
                                <strong>Roth conversion</strong>, and the converted amount is usually taxable in the
                                year of conversion.
                            </p>
                            <p>
                                So if someone says, &quot;Just move it and there&apos;s no tax,&quot; that&apos;s only
                                true in the right type of rollover. For the full tax picture, see our{" "}
                                <Link href="/learn/gold-ira-tax-rules">Gold IRA tax rules guide</Link>.
                            </p>
                        </section>

                        {/* Section: Blue-collar example */}
                        <section id="blue-collar-example" className="scroll-mt-24">
                            <h2>Blue-collar worker example</h2>
                            <p>
                                Take <strong>Steve</strong>, 57, a forklift operator who left his employer last year. He
                                has <strong>$85,000</strong> in his old 401(k) and wants to move part of it into a Gold
                                IRA.
                            </p>
                            <p>
                                If Steve does a <strong>direct rollover</strong> from the old 401(k) to the new IRA
                                custodian, the transfer can generally happen without current taxes or the 20%
                                withholding issue.
                            </p>
                            <p>
                                If Steve instead receives the check personally and misses the 60-day deadline, that
                                amount may become taxable. Because he&apos;s under 59 1/2, he may also face a 10%
                                early withdrawal penalty unless an exception applies.
                            </p>
                            <p>
                                For Steve, the safest route is usually the direct rollover. Not sure if a Gold IRA is
                                even the right move? Read{" "}
                                <Link href="/when-not-to-open-gold-ira">when not to open a Gold IRA</Link>.
                            </p>
                        </section>

                        {/* Section: Who this is for */}
                        <section id="who-this-is-for" className="scroll-mt-24">
                            <h2>Who this is for / not for</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                    <h3 className="font-bold text-green-800 mb-3">This is for:</h3>
                                    <ul className="space-y-2 text-sm text-green-700">
                                        <li>Workers 55+ with an old 401(k)</li>
                                        <li>People considering moving retirement funds into a Gold IRA</li>
                                        <li>Savers trying to avoid rollover tax mistakes</li>
                                        <li>Anyone needing a plain-English explanation of the 60-day rule</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                    <h3 className="font-bold text-red-800 mb-3">This is not for:</h3>
                                    <ul className="space-y-2 text-sm text-red-700">
                                        <li>People assuming any withdrawal can be &quot;fixed later&quot;</li>
                                        <li>Anyone ignoring plan-specific rules on current employer 401(k)s</li>
                                        <li>Investors who have not considered IRA flexibility vs 401(k) protections</li>
                                        <li>People confusing a rollover with a taxable cash-out</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: Bottom line */}
                        <section id="bottom-line" className="scroll-mt-24">
                            <h2>The bottom line</h2>
                            <p>
                                A 401(k) to Gold IRA rollover can be tax-free if it&apos;s done correctly. The safest
                                path is usually a <strong>direct rollover</strong>, where the money moves straight
                                between institutions.
                            </p>
                            <p>
                                An <strong>indirect rollover</strong> is riskier because of the{" "}
                                <strong>60-day rule</strong> and the <strong>20% withholding</strong> requirement. Miss
                                the deadline or fail to replace withheld funds, and the IRS may treat it as a taxable
                                distribution. If you&apos;re under 59 1/2, that could also mean a 10% penalty.
                            </p>
                            <p>
                                This is one of those situations where paperwork matters as much as the investment itself.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-24">
                            <h2>Frequently Asked Questions</h2>
                            <div className="space-y-4 not-prose">
                                {faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-slate-50 rounded-xl border border-slate-200 p-6"
                                    >
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                            <h3 className="text-lg font-bold">{faq.question}</h3>
                                            <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                                <ChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <SourcesSection sources={sources} lastVerified="March 2026" />

                        <AutoRelatedContent currentUrl="/learn/401k-to-gold-ira-tax-rules" />

                        <AuthorBox />
                    </article>
                </div>
            </Container>

            {/* Footer CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-401k-to-gold-ira-tax-rules" />
                </Container>
            </section>
        </main>
    );
}
