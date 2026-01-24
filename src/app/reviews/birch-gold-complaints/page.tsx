import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, ShieldCheck, AlertOctagon, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Birch Gold Group Complaints & Lawsuit Investigation (2026)",
    description: "Are there Birch Gold Group lawsuits? We analyzed their BBB complaints, Ben Shapiro's endorsement, and customer reviews to find the truth.",
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Birch Gold Group Complaints: Deep Dive Investigation",
            "description": "Investigation into Birch Gold complaints, lawsuits, and reputation.",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-19"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is Birch Gold Group a scam?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Birch Gold Group is a legitimate company that has been in business since 2003. They have an A+ BBB rating and have never faced any regulatory action. While they have some complaints (normal for any large company), there is no pattern of fraud."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are there any Birch Gold Group lawsuits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We found no evidence of any class-action lawsuits or significant legal actions against Birch Gold Group. They have maintained a clean regulatory record for over 20 years."
                    }
                }
            ]
        }
    ]
};

export default function BirchGoldComplaintsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-sm font-semibold text-blue-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <AlertOctagon className="w-4 h-4" /> Complaint Investigation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Birch Gold Complaints: The Full Picture
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        With celebrity endorsements and heavy advertising comes scrutiny. We analyzed BBB complaints, customer reviews, and regulatory records.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0 hidden lg:block relative">
                        <StickyMasterSidebar />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">

                        <p className="lead">
                            Birch Gold Group is everywhere. If you listen to conservative talk radio or podcasts, you&apos;ve probably heard Ben Shapiro, Ron Paul, or other hosts endorse them. That kind of exposure brings in a lot of customers—and inevitably, some complaints.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                companyName="Birch Gold Group"
                                rating={4.6}
                                isRecommended={true}
                                bottomLine="Birch Gold is a legitimate, 20+ year old company with an A+ BBB rating and zero regulatory actions. The complaints we found were typical industry friction (shipping delays, spot price confusion)—not fraud. They're a solid choice for smaller accounts ($10k+)."
                                ctaUrl={AFFILIATE_LINKS.birch}
                                ctaText="Visit Birch Gold Group"
                            />
                        </section>

                        {/* Complaints Analysis */}
                        <section id="complaints-analysis" className="scroll-mt-32">
                            <h2>What Are People Actually Complaining About?</h2>
                            <p>
                                I read through dozens of BBB complaints and negative reviews. Here are the patterns I found:
                            </p>

                            <div className="not-prose grid gap-4 my-6">
                                <div className="p-5 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">1. Spot Price Confusion (Most Common)</h4>
                                    <p className="text-gray-600 text-sm">
                                        Many new investors don&apos;t understand that when you buy gold, you pay a premium above the spot price. When they check their account and see a value lower than what they paid, they think they got scammed. This is actually normal—it&apos;s the dealer&apos;s spread, and it exists everywhere.
                                    </p>
                                </div>
                                <div className="p-5 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">2. Shipping Delays</h4>
                                    <p className="text-gray-600 text-sm">
                                        Some customers complained about delays in receiving their metals or getting their IRA funded. Most of these were resolved once the customer contacted support, and many were due to third-party custodian delays, not Birch Gold directly.
                                    </p>
                                </div>
                                <div className="p-5 bg-white rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">3. Sales Call Frequency</h4>
                                    <p className="text-gray-600 text-sm">
                                        A few people complained about follow-up calls after requesting a free kit. This is standard practice in the industry—if you request info, expect calls. You can always ask to be removed from their list.
                                    </p>
                                </div>
                            </div>

                            <p>
                                What I <strong>didn&apos;t</strong> find: accusations of theft, regulatory violations, or patterns of outright fraud. That matters more than a handful of shipping complaints.
                            </p>
                        </section>

                        {/* 2026 Reputation */}
                        <section id="reputation" className="scroll-mt-32">
                            <h2>Birch Gold&apos;s Reputation in 2026</h2>
                            <div className="not-prose my-8 grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">A+</div>
                                    <div className="text-sm text-gray-600">BBB Rating</div>
                                    <div className="text-xs text-gray-400 mt-1">20+ Years Clean</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">0</div>
                                    <div className="text-sm text-gray-600">Regulatory Actions</div>
                                    <div className="text-xs text-gray-400 mt-1">Clean Record</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">$10k</div>
                                    <div className="text-sm text-gray-600">Minimum Investment</div>
                                    <div className="text-xs text-gray-400 mt-1">Low Barrier</div>
                                </div>
                            </div>
                        </section>

                        {/* Ben Shapiro */}
                        <section id="ben-shapiro" className="scroll-mt-32">
                            <h2>Does the Ben Shapiro Endorsement Mean Anything?</h2>
                            <p>
                                Let&apos;s be real: celebrity endorsements are paid. Ben Shapiro, Ron Paul, and other hosts are compensated to promote Birch Gold. That doesn&apos;t automatically make the company good or bad.
                            </p>
                            <p>
                                However, there&apos;s a practical consideration: high-profile endorsers have reputations to protect. If Birch Gold were scamming their listeners, it would blow up publicly. The ongoing relationships suggest that Birch Gold is at least meeting basic expectations.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex gap-4 not-prose my-6">
                                <Users className="w-6 h-6 text-gray-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">The Endorsement Effect</h4>
                                    <p className="text-gray-600 text-sm">
                                        Birch Gold has worked with the same conservative media figures for years. If their customers were getting ripped off en masse, these partnerships would have ended. Still, don&apos;t choose a company based on who endorses them—do your own research on fees and service.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Scam Check */}
                        <section id="scam-check" className="scroll-mt-32">
                            <h2>Is Birch Gold Group a Scam?</h2>
                            <p>
                                No. Here&apos;s why I&apos;m confident about that:
                            </p>
                            <div className="not-prose grid gap-3 my-6">
                                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">20+ years in business</h4>
                                        <p className="text-gray-600 text-sm">Scams get shut down. Legitimate businesses last. Birch Gold has been operating since 2003.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">A+ BBB rating</h4>
                                        <p className="text-gray-600 text-sm">The BBB doesn&apos;t just hand these out. Companies have to respond to complaints and resolve issues.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Physical location</h4>
                                        <p className="text-gray-600 text-sm">Birch Gold operates out of Burbank, California. They&apos;re real people in a real office—not a PO box.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">No regulatory actions</h4>
                                        <p className="text-gray-600 text-sm">The CFTC, FTC, and state regulators have taken action against many gold dealers. Birch Gold isn&apos;t on any of those lists.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-32">
                            <h2>Bottom Line</h2>
                            <p>
                                Birch Gold Group is a legitimate option, especially if you have a smaller amount to invest (their minimum is just $10,000). Like any company, they have some unhappy customers. But the complaints I found were typical industry friction—not red flags.
                            </p>
                            <p>
                                The main thing to watch: fees can be a higher percentage of your investment when you&apos;re starting with $10-20k. Make sure you understand the spread and annual fees before committing.
                            </p>
                            <p>
                                For our full review with fee breakdowns, see our <Link href="/reviews/birch-gold" className="text-secondary hover:underline">Birch Gold Group Review</Link>. Or compare them against <Link href="/compare/noble-gold-vs-birch-gold" className="text-secondary hover:underline">Noble Gold</Link> for similar minimums.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">20 Years. Zero Regulatory Actions.</h3>
                                <p className="mb-6 text-gray-200">See why Ben Shapiro recommends Birch Gold. Get their free investor kit.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <a href={AFFILIATE_LINKS.birch} target="_blank" rel="noopener noreferrer">
                                        Get Free Kit <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
