import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, AlertOctagon, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Birch Gold Group Complaints & Lawsuit Investigation (2026)",
    description: "Are there Birch Gold Group lawsuits? We analyzed their BBB complaints, Ben Shapiro's endorsement, and customer reviews to find the truth.",
};

const companyData = {
    companyName: "Birch Gold Group",
    rating: 4.6,
    minInvestment: "$10,000",
    fees: "$180/year",
    bbbRating: "A+",
    bestFor: "Small Accounts ($10k+)",
    visitUrl: AFFILIATE_LINKS.birch,
    pros: [
        "Endorsed by Ben Shapiro",
        "Low $10,000 Minimum",
        "A+ BBB Rating for 20+ years",
        "Specializes in smaller accounts"
    ],
    cons: [
        "Fees higher percentage-wise for small accounts",
        "Aggressive advertising"
    ]
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
            "dateModified": "2026-01-18"
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

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "complaints-analysis", label: "BBB Complaints Breakdown" },
    { id: "ben-shapiro", label: "The Ben Shapiro Factor" },
    { id: "scam-check", label: "Is Birch Gold a Scam?" },
    { id: "conclusion", label: "Final Thoughts" }
];

export default function BirchGoldComplaintsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-sm font-semibold text-secondary flex items-center gap-2">
                                <AlertOctagon className="w-4 h-4" /> Complaint Investigation
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Birch Gold Group Complaints: The Full Picture
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            With celebrity endorsements and heavy advertising comes scrutiny. We dug into BBB complaints, customer reviews, and regulatory records to find out if Birch Gold is trustworthy.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex flex-col-reverse lg:flex-col gap-8">
                            <div className="block lg:hidden">
                                <ReviewSidebar {...companyData} />
                            </div>

                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                                <section>
                                    <p className="lead">
                                        Birch Gold Group is everywhere. If you listen to conservative talk radio or podcasts, you&apos;ve probably heard Ben Shapiro, Ron Paul, or other hosts endorse them. That kind of exposure brings in a lot of customers—and inevitably, some complaints.
                                    </p>
                                    <p>
                                        But here&apos;s the question: are the complaints a sign of a problematic company, or just the normal noise that comes with handling thousands of customers? I went through their BBB file, Trustpilot reviews, and regulatory history to find out.
                                    </p>
                                </section>

                                {/* Verdict Section */}
                                <section id="verdict" className="scroll-mt-32">
                                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 not-prose">
                                        <div className="flex items-center gap-4 mb-4">
                                            <ShieldCheck className="w-10 h-10 text-blue-600" />
                                            <h2 className="text-2xl font-bold text-blue-800 m-0">Verdict: Legitimate Business</h2>
                                        </div>
                                        <p className="text-blue-800 mb-4">
                                            Birch Gold Group is a legitimate, established company. They&apos;ve been in business since <strong>2003</strong>—scams don&apos;t last 20+ years. They maintain an <strong>A+ BBB rating</strong> and have no regulatory actions against them.
                                        </p>
                                        <p className="text-blue-800 mb-6">
                                            The complaints we found were mostly about shipping delays and spot price confusion—common issues across the industry, not signs of fraud. They respond to complaints and resolve issues, which is why they keep their A+ rating.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={AFFILIATE_LINKS.birch} target="_blank" rel="noopener noreferrer">
                                                Visit Birch Gold Group
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
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
                                    <ul>
                                        <li><strong>20+ years in business:</strong> Scams get shut down. Legitimate businesses last. Birch Gold has been operating since 2003.</li>
                                        <li><strong>A+ BBB rating:</strong> The BBB doesn&apos;t just hand these out. Companies have to respond to complaints and resolve issues to maintain this rating.</li>
                                        <li><strong>Physical location:</strong> Birch Gold operates out of Burbank, California, near Warner Bros studios. They&apos;re real people in a real office—not a PO box.</li>
                                        <li><strong>No regulatory actions:</strong> The CFTC, FTC, and state regulators have taken action against numerous gold dealers. Birch Gold isn&apos;t on any of those lists.</li>
                                    </ul>
                                </section>

                                <section id="conclusion" className="scroll-mt-32">
                                    <h2>Bottom Line</h2>
                                    <p>
                                        Birch Gold Group is a legitimate option, especially if you have a smaller amount to invest (their minimum is just $10,000). Like any company, they have some unhappy customers. But the complaints I found were typical industry friction—not red flags.
                                    </p>
                                    <p>
                                        The main thing to watch: fees can be a higher percentage of your investment when you&apos;re starting with $10-20k. Make sure you understand the spread and annual fees before committing.
                                    </p>
                                    <p>
                                        For our full review with fee breakdowns and comparisons, see our <Link href="/reviews/birch-gold" className="text-secondary hover:underline">Birch Gold Group Review</Link>.
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
        </main>
    );
}
