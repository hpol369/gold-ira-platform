import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Star, ArrowRight, CheckCircle2, XCircle, Tv } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Rosland Capital Review 2026: Fees & William Devane Endorsement",
    description: "Honest Rosland Capital review. We look past the William Devane commercials to analyze their fees, spreads on numismatic coins, and customer service.",
};

const companyData = {
    companyName: "Rosland Capital",
    rating: 3.9,
    minInvestment: "$2,000 (Non-IRA) / $10,000 (IRA)",
    fees: "$225/year",
    bbbRating: "A+",
    bestFor: "Small Cash Purchases",
    visitUrl: "https://roslandcapital.com",
    pros: [
        "Low entry point ($2,000 for non-IRA)",
        "William Devane brand recognition",
        "A+ BBB rating",
        "International storage options"
    ],
    cons: [
        "Higher spot price spreads reported",
        "Push toward numismatic coins",
        "Past regulatory issues (resolved)"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": { "@type": "Organization", "name": "Rosland Capital" },
    "reviewRating": { "@type": "Rating", "ratingValue": "3.9", "bestRating": "5" },
    "name": "Rosland Capital Review",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" }
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "marketing", label: "The William Devane Effect" },
    { id: "fees", label: "Fees & Spreads" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "legal", label: "Past Legal Issues" },
    { id: "conclusion", label: "Who Should Use Them" }
];

export default function RoslandCapitalReviewPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-secondary text-secondary' : 'text-gray-400'}`} />
                                ))}
                            </div>
                            <span className="font-bold text-secondary text-lg">3.9/5.0 Rating</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Rosland Capital Review (2026)
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            You&apos;ve seen the William Devane commercials. But is Rosland Capital the best place for your money, or just the most advertised?
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            <div className="block lg:hidden"><ReviewSidebar {...companyData} /></div>
                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">

                                <section>
                                    <p className="lead">
                                        Rosland Capital has been advertising gold since 2008, with actor William Devane as their long-time spokesman. If you watch cable news, you&apos;ve probably seen their commercials hundreds of times.
                                    </p>
                                    <p>
                                        But brand recognition doesn&apos;t always equal best value. I dug into Rosland&apos;s fees, customer reviews, and regulatory history to see how they really stack up.
                                    </p>
                                </section>

                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose">
                                        <h2 className="font-bold text-white m-0 mb-4 text-xl">The Verdict</h2>
                                        <p className="text-slate-300 mb-4">
                                            Rosland Capital is a legitimate, established company with an A+ BBB rating. Their low entry point ($2,000 for non-IRA purchases) makes them accessible. However, customer reviews suggest their spreads on numismatic coins can be higher than competitors.
                                        </p>
                                        <p className="text-slate-300">
                                            <strong className="text-white">Best for:</strong> Small cash purchases or investors who want a recognizable brand. For larger Gold IRAs, you may find better value elsewhere.
                                        </p>
                                    </div>
                                </section>

                                <section id="marketing" className="scroll-mt-32">
                                    <h2>The William Devane Factor</h2>
                                    <div className="flex gap-4 items-start not-prose my-6 p-5 bg-blue-50 rounded-xl border border-blue-100">
                                        <Tv className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-blue-800 mb-2">Celebrity Endorsement Reality Check</h4>
                                            <p className="text-blue-700 text-sm">
                                                William Devane is paid to endorse Rosland Capital. It doesn&apos;t mean they&apos;re good or bad—it means they have a large advertising budget. That money comes from somewhere, usually higher margins on products.
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        To their credit, Rosland has maintained this partnership for over 15 years. If they were scamming customers, that relationship would have ended. But the commercials focus on fear (&quot;protect your savings&quot;) rather than education—a common industry tactic.
                                    </p>
                                </section>

                                <section id="fees" className="scroll-mt-32">
                                    <h2>Fees and Spreads</h2>
                                    <p>
                                        Rosland charges about <strong>$225/year</strong> for Gold IRA storage and administration—slightly above average. But the bigger concern is their coin pricing.
                                    </p>
                                    <p>
                                        Multiple customer reviews mention that Rosland&apos;s spread (the difference between what you pay and what you can sell for) is higher than competitors. This is especially true for their &quot;exclusive&quot; or proof coins.
                                    </p>
                                    <p>
                                        <strong>My advice:</strong> If you work with Rosland, stick to standard bullion (American Gold Eagles, Canadian Maple Leafs) and ask for the spread in writing before you buy.
                                    </p>
                                </section>

                                <section id="pros-cons" className="scroll-mt-32">
                                    <h2>Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-8 not-prose">
                                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" /> Strengths
                                            </h3>
                                            <ul className="space-y-2 text-green-800 text-sm">
                                                <li>• Low $2,000 minimum for non-IRA purchases</li>
                                                <li>• A+ BBB rating</li>
                                                <li>• Long operating history (since 2008)</li>
                                                <li>• International storage options available</li>
                                                <li>• Recognizable, trusted brand</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                                <XCircle className="w-5 h-5" /> Weaknesses
                                            </h3>
                                            <ul className="space-y-2 text-red-800 text-sm">
                                                <li>• Higher spreads reported by customers</li>
                                                <li>• Push toward numismatic coins</li>
                                                <li>• Past CFTC settlement (see below)</li>
                                                <li>• Fear-based marketing in commercials</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="legal" className="scroll-mt-32">
                                    <h2>Past Legal Issues</h2>
                                    <p>
                                        In transparency: Rosland Capital has had regulatory issues in the past. They settled with the CFTC (Commodity Futures Trading Commission) over allegations related to misleading customers about coin values.
                                    </p>
                                    <p>
                                        We cover this in detail on our <Link href="/reviews/rosland-capital-lawsuit" className="text-secondary hover:underline">Rosland Capital Lawsuit page</Link>. The short version: they paid a fine, made compliance changes, and continue operating with an A+ BBB rating today.
                                    </p>
                                    <p>
                                        Should this disqualify them? Not necessarily—many companies have had regulatory issues and cleaned up their act. But it&apos;s information you should have.
                                    </p>
                                </section>

                                <section id="conclusion" className="scroll-mt-32">
                                    <h2>Who Should Use Rosland Capital?</h2>
                                    <p>
                                        Rosland Capital makes sense if:
                                    </p>
                                    <ul>
                                        <li>You want a small cash purchase ($2,000-5,000) rather than a full IRA</li>
                                        <li>Brand recognition and long operating history matter to you</li>
                                        <li>You&apos;re comfortable being firm about wanting standard bullion only</li>
                                    </ul>
                                    <p>
                                        For larger Gold IRAs ($25k+), companies like <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta</Link> or <Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link> may offer better overall value with lower spreads and more educational support.
                                    </p>
                                </section>

                            </article>
                        </div>
                    </div>
                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8"><TableOfContents items={tocItems} /></div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}
