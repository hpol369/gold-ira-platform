import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, MessageSquareWarning, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "American Hartford Gold Complaints & Reviews (2026 Analysis)",
    description: "Deep dive into American Hartford Gold complaints. Is the Bill O'Reilly endorsement worth the hype? We analyze customer feedback and pricing.",
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Article",
            "headline": "American Hartford Gold Complaints Analysis",
            "description": "Deep dive into American Hartford Gold complaints and customer reviews.",
            "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-19"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is American Hartford Gold legitimate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. American Hartford Gold is a legitimate, family-owned company with an A+ BBB rating, excellent Trustpilot reviews, and endorsements from Bill O'Reilly. They have been in business since 2015."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are common complaints about American Hartford Gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The few complaints mainly involve spot price confusion (customers not understanding the spread) and occasional shipping delays. These are common across the industry and not specific red flags."
                    }
                }
            ]
        }
    ]
};

export default function AmericanHartfordComplaintsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-sm font-semibold text-green-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <MessageSquareWarning className="w-4 h-4" /> Consumer Report
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        American Hartford Gold Complaints: 2026 Analysis
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Bill O&apos;Reilly calls them &quot;the only gold company he recommends.&quot; But what do actual customers say?
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
                            American Hartford Gold is a family-owned company that&apos;s become a major player in the Gold IRA space. With endorsements from Bill O&apos;Reilly and a 4.9/5 rating on Trustpilot, they look great on paper. But no company is perfect—so I dug into the complaints to see if there are hidden problems.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                companyName="American Hartford Gold"
                                rating={4.8}
                                isRecommended={true}
                                bottomLine="American Hartford Gold has one of the cleanest reputations in the industry. Their A+ BBB rating, stellar Trustpilot score (4.9/5), and proactive customer service set them apart. The complaints we found were minor and typical for any large company. No patterns of fraud or unresolved issues."
                                ctaUrl={AFFILIATE_LINKS.americanHartford}
                                ctaText="Get Their Free Gold Guide"
                            />
                        </section>

                        {/* Complaints */}
                        <section id="complaints" className="scroll-mt-32">
                            <h2>What Are People Complaining About?</h2>
                            <p>
                                I went through BBB complaints, Trustpilot reviews, and online forums. Here&apos;s what I found:
                            </p>

                            <div className="not-prose grid gap-4 my-6">
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">1. Spot Price Confusion</h4>
                                    <p className="text-slate-300 text-sm">
                                        This is the most common &quot;complaint&quot;—and it&apos;s really a misunderstanding. When you buy gold, you pay a premium above the spot price. When you check your account value, it shows the current metal value (at spot). The difference isn&apos;t a loss—it&apos;s the dealer&apos;s spread. This exists at every company.
                                    </p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">2. Shipping Delays</h4>
                                    <p className="text-slate-300 text-sm">
                                        A handful of customers mentioned delays in receiving their metals. Most of these were during high-demand periods. American Hartford typically resolved these by expediting shipping or providing clear timelines.
                                    </p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">3. Premium Pricing on Some Products</h4>
                                    <p className="text-slate-300 text-sm">
                                        A few reviewers mentioned that certain coins had higher premiums than expected. This is worth noting—always compare premiums on specific products before buying.
                                    </p>
                                </div>
                            </div>

                            <p>
                                Notably absent: accusations of fraud, theft, regulatory violations, or refusal to honor buyback guarantees. These are the serious complaints you see with bad actors—and American Hartford doesn&apos;t have them.
                            </p>
                        </section>

                        {/* Reputation Stats */}
                        <section id="reputation" className="scroll-mt-32">
                            <h2>American Hartford&apos;s Reputation in 2026</h2>
                            <div className="not-prose my-8 grid md:grid-cols-4 gap-4">
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">A+</div>
                                    <div className="text-sm text-slate-400">BBB Rating</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">4.9/5</div>
                                    <div className="text-sm text-slate-400">Trustpilot</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">$5k</div>
                                    <div className="text-sm text-slate-400">Minimum</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">$0</div>
                                    <div className="text-sm text-slate-400">Buyback Fees</div>
                                </div>
                            </div>
                        </section>

                        {/* Resolution */}
                        <section id="resolution" className="scroll-mt-32">
                            <h2>How American Hartford Handles Issues</h2>
                            <p>
                                What impressed me most was their response to complaints. Looking at BBB responses and Trustpilot replies, American Hartford is proactive about resolving issues:
                            </p>

                            <div className="not-prose my-6 space-y-3">
                                <div className="flex gap-3 items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                    <p className="text-slate-300"><strong className="text-white">100% Customer Satisfaction Guarantee:</strong> They&apos;ll buy back your metals at current prices if you&apos;re not happy</p>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                    <p className="text-slate-300"><strong className="text-white">Personal responses:</strong> Complaints typically get responses from senior staff, not form letters</p>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                    <p className="text-slate-300"><strong className="text-white">No buyback fees:</strong> Unlike some competitors, they don&apos;t charge you to sell metals back to them</p>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-32">
                            <h2>Should You Trust American Hartford Gold?</h2>
                            <p>
                                Based on my analysis: <strong>yes</strong>. American Hartford Gold has earned its reputation. The complaints I found were minor, resolved professionally, and typical for any company handling thousands of customers.
                            </p>
                            <p>
                                Their low minimum ($5,000), no-fee buyback policy, and family-owned service model make them a solid choice—especially for investors who want personalized attention.
                            </p>
                            <p>
                                For our full company review, see our <Link href="/reviews/american-hartford-gold" className="text-secondary hover:underline">American Hartford Gold Review</Link>. Or see how they compare: <Link href="/compare/goldco-vs-american-hartford-gold" className="text-secondary hover:underline">Goldco vs American Hartford Gold</Link>.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Family-Owned. Customer-First.</h3>
                                <p className="mb-6 text-gray-200">See why Bill O&apos;Reilly recommends them. Get their free gold guide.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <a href={AFFILIATE_LINKS.americanHartford} target="_blank" rel="noopener noreferrer">
                                        Get Free Gold Guide <ArrowRight className="ml-2 w-4 h-4" />
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
