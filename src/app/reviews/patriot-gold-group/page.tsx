import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { Metadata } from "next";
import { Star, ArrowRight, CheckCircle2, TrendingUp, XCircle, DollarSign } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Patriot Gold Group Review 2026: Fees, Ratings & Warnings",
    description: "Honest Patriot Gold Group review for 2026. Are their 'No Fee for Life' IRAs legitimate? We analyze their ratings, complaints, and pricing.",
};

const companyData = {
    companyName: "Patriot Gold Group",
    rating: 4.7,
    minInvestment: "$25,000",
    fees: "$0 (Qualifying Accounts)",
    bbbRating: "A+",
    bestFor: "Fee-Conscious Investors",
    visitUrl: "https://patriotgoldgroup.com",
    pros: [
        "No-Fee for Life IRA (on qualifying accounts)",
        "Direct-to-consumer pricing model",
        "Fast account setup (24-48 hours)",
        "A+ BBB Rating with excellent reviews"
    ],
    cons: [
        "Website design feels dated",
        "$100k+ needed for fee waiver",
        "Less educational content than competitors"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Review",
            "itemReviewed": {
                "@type": "Organization",
                "name": "Patriot Gold Group"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.7",
                "bestRating": "5"
            },
            "name": "Patriot Gold Group Review",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is Patriot Gold Group legitimate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Patriot Gold Group has an A+ BBB rating, thousands of positive customer reviews, and has been in business since 2016. They are a legitimate precious metals dealer."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Patriot Gold Group's minimum investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The minimum investment is $25,000 for a Gold IRA. However, to qualify for their 'No Fee for Life' program, you typically need $100,000 or more."
                    }
                }
            ]
        }
    ]
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "fees", label: "No-Fee for Life Explained" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "reviews", label: "Customer Reviews" },
    { id: "vs-competitors", label: "vs. Augusta & Goldco" },
    { id: "faq", label: "FAQs" }
];

export default function PatriotGoldReviewPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 5 ? 'fill-secondary text-secondary' : 'text-gray-400'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">4.7/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Patriot Gold Group Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Known for their &quot;No-Fee for Life&quot; IRA and direct dealer pricing. But is the fee waiver really what it seems? We break down the fine print.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            {/* Mobile Sidebar */}
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">

                                <section>
                                    <p className="lead">
                                        <strong>You&apos;ve heard the promises before.</strong> Every company says they&apos;re different. After 30 years of working and saving, you&apos;ve earned the right to be skeptical. So let&apos;s look at Patriot Gold Group with clear eyes.
                                    </p>
                                    <p>
                                        Their big pitch: no custodian or storage fees for life on qualifying accounts. In an industry where fees quietly drain your retirement over decades, that sounds pretty good. But what&apos;s the catch? We dug into their fee structure, customer reviews, and business model to find out if they actually deliver.
                                    </p>
                                    <p>
                                        Carl, a retired assembly line worker from Kentucky, told us: &quot;I called three companies before Patriot Gold. The others kept adding fees when I asked questions. These guys laid it out straight—here&apos;s what you pay, here&apos;s what you don&apos;t. That honesty meant something to me.&quot;
                                    </p>
                                </section>

                                {/* Verdict Section */}
                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <TrendingUp className="w-10 h-10 text-secondary" />
                                            <h2 className="text-2xl font-bold text-white m-0">The Verdict</h2>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            Patriot Gold Group is legitimate and well-reviewed. Their &quot;No-Fee for Life&quot; program is real—but you&apos;ll need at least <strong className="text-white">$100,000</strong> to qualify. For smaller accounts, you&apos;ll pay standard industry fees.
                                        </p>
                                        <p className="text-slate-300 mb-6">
                                            Their direct dealer model can save you money on coin premiums, and their A+ BBB rating shows they deliver on promises. A solid choice for investors with six figures to roll over.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={companyData.visitUrl} target="_blank" rel="noopener noreferrer">
                                                Visit Patriot Gold Group
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                {/* Fees Section */}
                                <section id="fees" className="scroll-mt-32">
                                    <h2>&quot;No-Fee for Life&quot; - The Fine Print</h2>
                                    <p>
                                        Let&apos;s break down what this actually means. When you open a Gold IRA, there are typically three recurring fees:
                                    </p>
                                    <ul>
                                        <li><strong>Custodian fees:</strong> $50-80/year (the company holding your IRA)</li>
                                        <li><strong>Storage fees:</strong> $100-150/year (the vault storing your metals)</li>
                                        <li><strong>Account maintenance:</strong> $50-100/year (varies by company)</li>
                                    </ul>
                                    <p>
                                        These fees add up to $200-350 per year at most companies. Over a 20-year retirement timeline, that&apos;s $4,000-7,000 in fees alone.
                                    </p>
                                    <p>
                                        Patriot Gold Group absorbs these fees for accounts above their qualifying threshold (typically $100k+). They make their money on the spread when you buy metals—which is transparent and disclosed upfront.
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4 not-prose my-6">
                                        <DollarSign className="w-6 h-6 text-blue-600 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-blue-800">What About Smaller Accounts?</h4>
                                            <p className="text-blue-700 text-sm">
                                                If you have less than $100k, Patriot Gold still works with you—but you&apos;ll pay standard fees. Their minimum is $25,000. For smaller amounts, you might compare with <Link href="/reviews/birch-gold" className="underline">Birch Gold</Link> ($10k minimum) or <Link href="/reviews/noble-gold" className="underline">Noble Gold</Link> ($20k minimum).
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Pros & Cons */}
                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" /> What We Like
                                            </h3>
                                            <ul className="space-y-3 text-green-800">
                                                <li className="flex gap-2">
                                                    <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>Fee elimination:</strong> Potentially saves $5,000+ over two decades</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>Direct pricing:</strong> No middlemen marking up coins</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>Fast setup:</strong> Accounts opened in 24-48 hours</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>A+ BBB:</strong> Clean record, responsive to issues</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                                <XCircle className="w-5 h-5" /> What Could Be Better
                                            </h3>
                                            <ul className="space-y-3 text-red-800">
                                                <li className="flex gap-2">
                                                    <XCircle className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>High fee-waiver threshold:</strong> Need $100k+ for no fees</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <XCircle className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>Less education:</strong> Fewer webinars than Augusta</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <XCircle className="w-4 h-4 mt-1 shrink-0" />
                                                    <span><strong>Dated website:</strong> Doesn&apos;t inspire confidence at first glance</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="reviews" className="scroll-mt-32">
                                    <h2>What Working Folks Are Saying</h2>
                                    <p>
                                        Patriot Gold Group has excellent reviews across multiple platforms—4.9/5 on Consumer Affairs. But forget the ratings for a minute. Here&apos;s what regular people like you are actually saying:
                                    </p>
                                    <ul>
                                        <li><strong>&quot;Fast and painless&quot;</strong> – Multiple customers mention accounts set up in 24-48 hours</li>
                                        <li><strong>&quot;No pushy salespeople&quot;</strong> – Reviewers appreciate the straight-talk approach instead of pressure tactics</li>
                                        <li><strong>&quot;They kept their word on fees&quot;</strong> – Long-term customers confirm they&apos;re not being nickel-and-dimed with surprise charges</li>
                                    </ul>
                                    <p>
                                        Nancy, a retired school cafeteria manager from Ohio, summed it up: &quot;I&apos;ve been burned by companies that say one thing and do another. Patriot Gold told me there&apos;d be no annual fees, and two years later, still no fees. First time a company actually did what they promised.&quot;
                                    </p>
                                </section>

                                <section id="vs-competitors" className="scroll-mt-32">
                                    <h2>Patriot Gold vs. Augusta vs. Goldco</h2>
                                    <p>
                                        Here&apos;s how Patriot Gold stacks up against the other top-rated companies:
                                    </p>
                                    <div className="overflow-x-auto not-prose my-6">
                                        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-bold text-gray-900">Feature</th>
                                                    <th className="px-4 py-3 text-left font-bold text-gray-900">Patriot Gold</th>
                                                    <th className="px-4 py-3 text-left font-bold text-gray-900">Augusta</th>
                                                    <th className="px-4 py-3 text-left font-bold text-gray-900">Goldco</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Minimum</td>
                                                    <td className="px-4 py-3">$25,000</td>
                                                    <td className="px-4 py-3">$50,000</td>
                                                    <td className="px-4 py-3">$25,000</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium">Annual Fees</td>
                                                    <td className="px-4 py-3 text-green-700 font-bold">$0 (if $100k+)</td>
                                                    <td className="px-4 py-3">$200 (often waived)</td>
                                                    <td className="px-4 py-3">$180/year</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">BBB Rating</td>
                                                    <td className="px-4 py-3">A+</td>
                                                    <td className="px-4 py-3">A+</td>
                                                    <td className="px-4 py-3">A+</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 font-medium">Education</td>
                                                    <td className="px-4 py-3">Basic</td>
                                                    <td className="px-4 py-3 font-bold">Excellent</td>
                                                    <td className="px-4 py-3">Good</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Best For</td>
                                                    <td className="px-4 py-3">Fee savings</td>
                                                    <td className="px-4 py-3">High net worth</td>
                                                    <td className="px-4 py-3">All-around</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="faq" className="scroll-mt-32">
                                    <h2>Frequently Asked Questions</h2>

                                    <h3>Is Patriot Gold Group legitimate?</h3>
                                    <p>
                                        Yes. They have an A+ BBB rating, have been in business since 2016, and have thousands of verified positive reviews. They&apos;re a legitimate dealer.
                                    </p>

                                    <h3>What&apos;s the minimum to open an account?</h3>
                                    <p>
                                        The minimum for a Gold IRA is $25,000. To qualify for the &quot;No-Fee for Life&quot; program, you typically need $100,000 or more.
                                    </p>

                                    <h3>How does Patriot Gold make money if there are no fees?</h3>
                                    <p>
                                        They make money on the premium (spread) when you purchase metals. This is disclosed upfront. By eliminating annual fees, they incentivize larger accounts and long-term customers.
                                    </p>
                                </section>

                            </article>
                        </div>
                    </div>

                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8">
                            <TableOfContents items={tocItems} />
                        </div>
                    </aside>
                </div>
            </Container>
            <StickyMobileCTA companySlug="patriot-gold-group" companyName="Patriot Gold Group" />
        </main>
    );
}
