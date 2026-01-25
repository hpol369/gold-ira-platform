import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { ArrowRight, AlertTriangle, Scale, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Lear Capital Complaints & Lawsuit History (2026 Update)",
    description: "Honest analysis of Lear Capital complaints, past NY Attorney General lawsuit, and their current BBB standing. Is Lear Capital safe in 2026?",
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Lear Capital Complaints & Lawsuits: The Full Story",
            "description": "Investigation into Lear Capital complaints, lawsuits, and current reputation.",
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
                    "name": "Was Lear Capital sued?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Lear Capital settled a lawsuit with the NY Attorney General regarding undisclosed fees. They paid penalties, improved their disclosures, and have since rebuilt their A+ BBB rating."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Lear Capital safe to use in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Lear Capital has addressed their past compliance issues, improved transparency, and maintains an A+ BBB rating. They've been in business 25+ years. Their history actually makes them more compliant today."
                    }
                }
            ]
        }
    ]
};

export default function LearCapitalComplaintsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/30 text-sm font-semibold text-amber-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <Scale className="w-4 h-4" /> Legal Investigation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Lear Capital Complaints: The Full Story
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Yes, Lear Capital has had legal issues. But they&apos;ve been in business 25+ years—here&apos;s what actually happened and where they stand today.
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
                            Google &quot;Lear Capital&quot; and you&apos;ll see &quot;lawsuit&quot; and &quot;scam&quot; in the autocomplete. That&apos;s enough to make anyone nervous. But here&apos;s the thing: Lear Capital has been operating for over 25 years, which scams simply don&apos;t do. Let&apos;s look at the facts—both the ugly past and the cleaned-up present.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                companyName="Lear Capital"
                                rating={4.2}
                                isRecommended={true}
                                bottomLine="Lear Capital settled a lawsuit with the NY Attorney General over undisclosed fees. They paid penalties, improved transparency, and have rebuilt their A+ BBB rating with thousands of positive reviews. The lawsuit was about disclosure—not fraud or theft. They've turned a corner and are now more compliant than many competitors."
                                ctaUrl={AFFILIATE_LINKS.lear}
                                ctaText="Visit Lear Capital"
                            />
                        </section>

                        {/* The Lawsuit */}
                        <section id="lawsuit-history" className="scroll-mt-32">
                            <h2>The NY Attorney General Lawsuit</h2>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex gap-4 not-prose my-6">
                                <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-amber-900 text-lg mb-2">What Actually Happened</h3>
                                    <p className="text-amber-800">
                                        The NY Attorney General alleged that Lear Capital wasn&apos;t clearly disclosing the &quot;spread&quot;—the difference between what customers paid for gold and what they could sell it back for. Customers felt surprised when they saw their account values lower than expected. Lear Capital settled, paid penalties, and agreed to improve their disclosures.
                                    </p>
                                </div>
                            </div>

                            <p>
                                <strong>Important context:</strong> This was a civil matter about fee disclosure—not criminal fraud. No customers had metals stolen. No one went to prison. Lear Capital didn&apos;t admit wrongdoing (standard in settlements), but they did make significant changes.
                            </p>

                            <p>
                                The core issue—spread/fee confusion—is actually an industry-wide problem. Every gold dealer makes money on the spread. Lear Capital got called out for not explaining this clearly enough. Today, they&apos;re more transparent about pricing than many of their competitors.
                            </p>
                        </section>

                        {/* Current Status */}
                        <section id="current-status" className="scroll-mt-32">
                            <h2>Lear Capital in 2026</h2>
                            <div className="not-prose my-8 grid md:grid-cols-4 gap-4">
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">A+</div>
                                    <div className="text-sm text-slate-400">BBB Rating</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">25+</div>
                                    <div className="text-sm text-slate-400">Years in Business</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">4.8/5</div>
                                    <div className="text-sm text-slate-400">Trustpilot</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                    <div className="text-3xl font-bold text-amber-400 mb-1">$10k</div>
                                    <div className="text-sm text-slate-400">Minimum</div>
                                </div>
                            </div>

                            <p>
                                Since the settlement, Lear Capital has rebuilt their reputation through improved transparency and customer service. Their current A+ BBB rating (with thousands of reviews) shows they&apos;ve addressed the issues that got them in trouble.
                            </p>
                        </section>

                        {/* Common Complaints Today */}
                        <section id="complaints" className="scroll-mt-32">
                            <h2>What Customers Complain About Today</h2>
                            <p>
                                Looking at current BBB and Trustpilot reviews, the complaints have shifted from serious disclosure issues to more typical industry friction:
                            </p>

                            <div className="not-prose grid gap-4 my-6">
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">1. Sales Call Persistence</h4>
                                    <p className="text-slate-300 text-sm">
                                        Lear Capital has an aggressive sales team. If you request info, expect follow-up calls. This isn&apos;t fraud—it&apos;s just their sales culture. You can ask to be removed from their call list.
                                    </p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">2. Spread/Premium Questions</h4>
                                    <p className="text-slate-300 text-sm">
                                        Some customers still don&apos;t fully understand the spread when they buy. However, Lear Capital now provides written disclosures upfront—a direct result of the lawsuit.
                                    </p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">3. Higher Fees Than Some Competitors</h4>
                                    <p className="text-slate-300 text-sm">
                                        Lear Capital&apos;s annual fees ($225-280/year) are higher than budget competitors. You&apos;re paying for a 25-year track record and their Price Lock Guarantee.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Improvements */}
                        <section id="improvements" className="scroll-mt-32">
                            <h2>How They Fixed the Issues</h2>
                            <div className="not-prose my-6 space-y-3">
                                <div className="flex gap-3 items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                    <p className="text-slate-300"><strong className="text-white">Price Lock Guarantee:</strong> They now lock in your purchase price, so no surprises if metal prices move during processing</p>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                    <p className="text-slate-300"><strong className="text-white">Written fee disclosures:</strong> All spreads and fees are now documented upfront before you commit</p>
                                </div>
                                <div className="flex gap-3 items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                    <p className="text-slate-300"><strong className="text-white">Compliance overhaul:</strong> The lawsuit forced them to tighten internal controls—making them safer than before</p>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-32">
                            <h2>Should You Trust Lear Capital in 2026?</h2>
                            <p>
                                <strong>Yes—with awareness.</strong> Lear Capital is a legitimate company that went through a compliance crisis and came out better for it. Their 25-year track record proves they&apos;re not a fly-by-night operation.
                            </p>
                            <p>
                                They&apos;re best for investors who:
                            </p>
                            <ul>
                                <li>Want an established brand with a long track record</li>
                                <li>Value their Price Lock Guarantee</li>
                                <li>Can handle assertive sales calls and say &quot;no&quot; to upsells</li>
                            </ul>
                            <p>
                                If you prefer a lower-pressure experience, consider <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link> (education-first) or <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> (laid-back sales).
                            </p>
                            <p>
                                For our full review, see our <Link href="/reviews/lear-capital" className="text-secondary hover:underline">Lear Capital Review</Link>.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">25 Years. Lessons Learned.</h3>
                                <p className="mb-6 text-gray-200">Get their Price Lock Guarantee and transparent pricing.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <a href={AFFILIATE_LINKS.lear} target="_blank" rel="noopener noreferrer">
                                        Get Free Gold Kit <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
            <StickyMobileCTA companySlug="lear-capital" companyName="Lear Capital" />
        </main>
    );
}
