import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ArrowRight, MessageSquareWarning, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "American Hartford Gold Complaints & Reviews (2026 Analysis)",
    description: "Deep dive into American Hartford Gold complaints. Is the Bill O'Reilly endorsement worth the hype? We analyze customer feedback and pricing.",
};

const companyData = {
    companyName: "American Hartford Gold",
    rating: 4.8,
    minInvestment: "$5,000",
    fees: "Variable",
    bbbRating: "A+",
    bestFor: "Family-Owned Service",
    visitUrl: AFFILIATE_LINKS.americanHartford,
    pros: [
        "No Buyback Fees",
        "Bill O'Reilly Endorsed",
        "Excellent Trustpilot Score",
        "Low $5,000 minimum"
    ],
    cons: [
        "Premium pricing on some coins"
    ]
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Article",
            "headline": "American Hartford Gold Complaints Analysis",
            "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-18"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is American Hartford Gold legitimate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. American Hartford Gold is a legitimate, family-owned company with an A+ BBB rating, excellent Trustpilot reviews, and endorsements from Bill O'Reilly and other public figures. They have been in business since 2015."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are common complaints about American Hartford Gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The few complaints we found mainly involve spot price confusion (customers not understanding the spread) and occasional shipping delays. These are common across the industry and not specific red flags for American Hartford."
                    }
                }
            ]
        }
    ]
};

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "complaints", label: "Common Complaints" },
    { id: "resolution", label: "How They Handle Issues" },
    { id: "vs-competitors", label: "vs. Other Companies" },
    { id: "conclusion", label: "Should You Trust Them?" }
];

export default function AmericanHartfordComplaintsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-sm font-semibold text-secondary flex items-center gap-2">
                                <MessageSquareWarning className="w-4 h-4" /> Consumer Report
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            American Hartford Gold Complaints: 2026 Analysis
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Bill O&apos;Reilly calls them &quot;the only gold company he recommends.&quot; But what do actual customers say? We analyzed the complaints to find out.
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

                                <section id="verdict" className="scroll-mt-32">
                                    <p className="lead">
                                        American Hartford Gold is a family-owned company that&apos;s become a major player in the Gold IRA space. With endorsements from Bill O&apos;Reilly and a 4.9/5 rating on Trustpilot, they look great on paper. But no company is perfect—so I dug into the complaints to see if there are hidden problems.
                                    </p>

                                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100 not-prose my-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <ShieldCheck className="w-10 h-10 text-green-600" />
                                            <h2 className="text-2xl font-bold text-green-800 m-0">Verdict: Excellent Reputation</h2>
                                        </div>
                                        <p className="text-green-800 mb-4">
                                            American Hartford Gold has one of the cleanest reputations in the industry. Their A+ BBB rating, stellar Trustpilot score (4.9/5 from thousands of reviews), and proactive customer service set them apart.
                                        </p>
                                        <p className="text-green-800 mb-6">
                                            The complaints we found were minor and typical for any large company. No patterns of fraud, deceptive practices, or unresolved issues.
                                        </p>
                                        <Button variant="gold" asChild>
                                            <a href={AFFILIATE_LINKS.americanHartford} target="_blank" rel="noopener noreferrer">
                                                Get Their Free Gold Guide
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </section>

                                <section id="complaints" className="scroll-mt-32">
                                    <h2>What Are People Complaining About?</h2>
                                    <p>
                                        I went through BBB complaints, Trustpilot reviews, and online forums. Here&apos;s what I found:
                                    </p>

                                    <div className="not-prose grid gap-4 my-6">
                                        <div className="p-5 bg-white rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-2">1. Spot Price Confusion</h4>
                                            <p className="text-gray-600 text-sm">
                                                This is the most common &quot;complaint&quot;—and it&apos;s really a misunderstanding. When you buy gold, you pay a premium above the spot price. When you check your account value, it shows the current metal value (at spot). The difference isn&apos;t a loss—it&apos;s the dealer&apos;s spread. This exists at every company. American Hartford could do better at educating new investors about this upfront.
                                            </p>
                                        </div>
                                        <div className="p-5 bg-white rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-2">2. Shipping Delays</h4>
                                            <p className="text-gray-600 text-sm">
                                                A handful of customers mentioned delays in receiving their metals. Most of these were during high-demand periods (economic uncertainty tends to spike gold purchases). American Hartford typically resolved these by expediting shipping or providing clear timelines.
                                            </p>
                                        </div>
                                        <div className="p-5 bg-white rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-gray-900 mb-2">3. Premium Pricing on Some Products</h4>
                                            <p className="text-gray-600 text-sm">
                                                A few reviewers mentioned that certain coins had higher premiums than expected. This is worth noting—always compare premiums on specific products before buying. But it&apos;s not unique to American Hartford.
                                            </p>
                                        </div>
                                    </div>

                                    <p>
                                        Notably absent: accusations of fraud, theft, regulatory violations, or refusal to honor buyback guarantees. These are the serious complaints you see with bad actors—and American Hartford doesn&apos;t have them.
                                    </p>
                                </section>

                                <section id="resolution" className="scroll-mt-32">
                                    <h2>How American Hartford Handles Issues</h2>
                                    <p>
                                        What impressed me most was their response to complaints. Looking at BBB responses and Trustpilot replies, American Hartford is proactive about resolving issues:
                                    </p>

                                    <div className="not-prose my-6 space-y-3">
                                        <div className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                                            <p className="text-gray-700"><strong>100% Customer Satisfaction Guarantee:</strong> They&apos;ll buy back your metals at current prices if you&apos;re not happy</p>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                                            <p className="text-gray-700"><strong>Personal responses:</strong> Complaints typically get responses from senior staff, not form letters</p>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                                            <p className="text-gray-700"><strong>No buyback fees:</strong> Unlike some competitors, they don&apos;t charge you to sell metals back to them</p>
                                        </div>
                                    </div>

                                    <p>
                                        This responsiveness is a big reason they maintain an A+ BBB rating. Companies that ignore complaints lose that rating fast.
                                    </p>
                                </section>

                                <section id="vs-competitors" className="scroll-mt-32">
                                    <h2>How Do They Compare to Competitors?</h2>
                                    <p>
                                        For context, here&apos;s how American Hartford&apos;s complaint profile compares:
                                    </p>
                                    <ul>
                                        <li><strong>vs. Augusta Precious Metals:</strong> Augusta has zero BBB complaints (remarkable), but requires $50k minimum. American Hartford is more accessible at $5k.</li>
                                        <li><strong>vs. Goldco:</strong> Similar reputation level. Both are top-tier with A+ ratings and good customer feedback.</li>
                                        <li><strong>vs. US Money Reserve:</strong> American Hartford has far fewer complaints about aggressive sales tactics.</li>
                                    </ul>
                                    <p>
                                        American Hartford sits comfortably in the top tier of Gold IRA companies by reputation.
                                    </p>
                                </section>

                                <section id="conclusion" className="scroll-mt-32">
                                    <h2>Should You Trust American Hartford Gold?</h2>
                                    <p>
                                        Based on my analysis: <strong>yes</strong>. American Hartford Gold has earned its reputation. The complaints I found were minor, resolved professionally, and typical for any company handling thousands of customers.
                                    </p>
                                    <p>
                                        Their low minimum ($5,000), no-fee buyback policy, and family-owned service model make them a solid choice—especially for investors who want personalized attention without the premium pricing of Augusta.
                                    </p>
                                    <p>
                                        For our full company review with fee breakdowns and comparisons, see our <Link href="/reviews/american-hartford-gold" className="text-secondary hover:underline">American Hartford Gold Review</Link>.
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
