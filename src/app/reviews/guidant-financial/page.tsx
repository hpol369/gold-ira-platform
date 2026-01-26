import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import {
    Building2,
    ArrowRight,
    CheckCircle2,
    Star,
    Users,
    Clock,
    Shield,
    Phone,
    Award,
    TrendingUp,
    DollarSign,
    FileCheck,
    AlertTriangle
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Guidant Financial Review 2026: ROBS Fees & Pros/Cons",
    description: "Honest Guidant Financial review covering ROBS 401k setup fees, services, customer reviews & our verdict. See how they compare to Benetrends and other providers.",
    keywords: "guidant financial review, guidant financial robs, guidant financial fees, guidant 401k business funding, rollover for business startups",
    openGraph: {
        title: "Guidant Financial Review 2026: ROBS Fees, Pros & Cons",
        description: "Complete Guidant Financial review for ROBS 401k business funding. Fees, services, and honest assessment.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "Organization",
        "name": "Guidant Financial"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "worstRating": "1"
    },
    "author": {
        "@type": "Person",
        "name": "Thomas Richardson"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-26",
    "reviewBody": "Guidant Financial is one of the most trusted names in ROBS funding with 20+ years of experience and 25,000+ businesses funded. They offer comprehensive services, an A+ BBB rating, and excellent compliance support."
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What does Guidant Financial charge for ROBS setup?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Guidant Financial charges approximately $5,000 for ROBS setup, which includes C-Corp formation, 401(k) plan creation, and all legal documentation. Monthly administration fees are around $139."
            }
        },
        {
            "@type": "Question",
            "name": "Is Guidant Financial legitimate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Guidant Financial is a legitimate and well-established ROBS provider. They've been in business since 2003 and have helped fund over 25,000 businesses using retirement funds."
            }
        },
        {
            "@type": "Question",
            "name": "What is the minimum retirement funds needed for Guidant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Guidant Financial requires a minimum of $50,000 in eligible retirement funds to use their ROBS services."
            }
        }
    ]
};

export default function GuidantFinancialReviewPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <main className="min-h-screen bg-slate-900">
                {/* Hero Section */}
                <section className="relative py-12 lg:py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link>
                            <span>/</span>
                            <span className="text-white">Guidant Financial</span>
                        </nav>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
                                    <Building2 className="w-4 h-4 text-orange-400" />
                                    <span className="text-orange-400 text-sm font-medium">ROBS 401k Provider</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                    Guidant Financial Review 2026:{" "}
                                    <span className="text-orange-400">ROBS Leader</span>
                                </h1>

                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Guidant Financial is one of the most trusted names in ROBS (Rollover for Business Startups) funding.
                                    With 20+ years of experience and 25,000+ businesses funded, they&apos;re the go-to choice for
                                    entrepreneurs looking to use retirement funds to start a business. Here&apos;s our complete review.
                                </p>

                                {/* Quick Rating */}
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= 4 ? 'text-amber-400 fill-amber-400' : star === 5 ? 'text-amber-400 fill-amber-400/50' : 'text-slate-600'}`}
                                            />
                                        ))}
                                        <span className="ml-2 text-white font-bold">4.7/5</span>
                                    </div>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-slate-400">BBB Rating: A+</span>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-slate-400">25,000+ Businesses Funded</span>
                                </div>

                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "guidant-review-hero", "guidant")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Free ROBS Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            </div>

                            {/* Sidebar Quick Facts */}
                            <div className="lg:col-span-1">
                                <VerdictBox
                                    companyName="Guidant Financial"
                                    rating={4.7}
                                    isRecommended={true}
                                    bottomLine="Guidant Financial is our top choice for ROBS funding. Their 20+ years of experience, comprehensive services, and strong track record make them ideal for serious entrepreneurs with $50k+ in retirement funds."
                                    ctaText="Free Consultation"
                                    ctaUrl={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "guidant-review-verdict", "guidant")}
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* At a Glance */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8">Guidant Financial at a Glance</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: "Founded", value: "2003", icon: Clock },
                                { label: "Minimum Required", value: "$50,000", icon: DollarSign },
                                { label: "Setup Fee", value: "~$5,000", icon: FileCheck },
                                { label: "Monthly Admin", value: "$139/mo", icon: Building2 },
                                { label: "BBB Rating", value: "A+", icon: Award },
                                { label: "Businesses Funded", value: "25,000+", icon: TrendingUp },
                                { label: "Services", value: "ROBS + SBA", icon: Shield },
                                { label: "Support", value: "Dedicated Team", icon: Users },
                            ].map((item, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <item.icon className="w-6 h-6 text-orange-400 mb-3" />
                                    <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                                    <div className="text-lg font-bold text-white">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Pros and Cons */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8">Guidant Financial: Pros and Cons</h2>

                        <ProsCons
                            pros={[
                                "20+ years of ROBS experience (industry leader)",
                                "25,000+ successful business fundings",
                                "A+ BBB rating with excellent customer reviews",
                                "Comprehensive services beyond just ROBS (SBA loans, payroll)",
                                "Dedicated funding specialist assigned to each client",
                                "Strong compliance team to keep you IRS-compliant",
                                "Free initial consultation with no obligation",
                                "Combine ROBS with SBA loan for larger funding"
                            ]}
                            cons={[
                                "Higher setup fees than some competitors (~$5,000)",
                                "Monthly admin fees ($139/month) add up over time",
                                "$50,000 minimum may exclude some entrepreneurs",
                                "C-Corporation requirement limits flexibility",
                                "Process takes 3-4 weeks to complete"
                            ]}
                        />
                    </Container>
                </section>

                {/* How Guidant Works */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-8">How Guidant Financial&apos;s ROBS Process Works</h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        step: "1",
                                        title: "Free Consultation",
                                        description: "Speak with a funding specialist to determine if ROBS is right for your situation. They'll review your retirement assets, business plans, and goals."
                                    },
                                    {
                                        step: "2",
                                        title: "Plan Design & Formation",
                                        description: "Guidant creates your C-Corporation and designs a custom 401(k) plan that allows investment in employer stock. All legal docs are prepared."
                                    },
                                    {
                                        step: "3",
                                        title: "Retirement Rollover",
                                        description: "Your existing 401(k) or IRA funds are rolled over into the new company's 401(k) plan tax-free and penalty-free."
                                    },
                                    {
                                        step: "4",
                                        title: "Stock Purchase",
                                        description: "The 401(k) plan purchases stock in your C-Corporation at fair market value, transferring capital to your business."
                                    },
                                    {
                                        step: "5",
                                        title: "Ongoing Compliance",
                                        description: "Guidant handles annual 401(k) administration, IRS filings, and compliance monitoring to keep everything legal."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                                <p className="text-slate-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Fees Breakdown */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-8">Guidant Financial Fees</h2>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-white font-semibold">Fee Type</th>
                                            <th className="text-left p-4 text-white font-semibold">Amount</th>
                                            <th className="text-left p-4 text-white font-semibold">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { type: "ROBS Setup Fee", amount: "~$5,000", notes: "Includes C-Corp formation, 401(k) plan, legal docs" },
                                            { type: "Monthly Administration", amount: "$139/month", notes: "Ongoing compliance and 401(k) admin" },
                                            { type: "Annual Plan Fees", amount: "~$1,668/year", notes: "Based on monthly admin fee" },
                                            { type: "State Filing Fees", amount: "Varies", notes: "Depends on your state of incorporation" },
                                            { type: "SBA Loan (Optional)", amount: "Varies", notes: "If combining ROBS with SBA financing" },
                                        ].map((fee, index) => (
                                            <tr key={index} className="border-b border-white/5">
                                                <td className="p-4 text-white">{fee.type}</td>
                                                <td className="p-4 text-orange-400 font-semibold">{fee.amount}</td>
                                                <td className="p-4 text-slate-400 text-sm">{fee.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-slate-400 text-sm mt-4">
                                * Fees are approximate and may vary based on your specific situation. Contact Guidant for a detailed quote.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Comparison Table */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">Guidant vs. Other ROBS Providers</h2>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                <table className="w-full min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-white font-semibold">Feature</th>
                                            <th className="text-center p-4 text-orange-400 font-semibold bg-orange-500/5">Guidant Financial</th>
                                            <th className="text-center p-4 text-white font-semibold">Benetrends</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Setup Fee", guidant: "~$5,000", benetrends: "~$4,995" },
                                            { feature: "Monthly Fee", guidant: "$139", benetrends: "$129" },
                                            { feature: "Experience", guidant: "20+ years", benetrends: "40+ years" },
                                            { feature: "Businesses Funded", guidant: "25,000+", benetrends: "15,000+" },
                                            { feature: "BBB Rating", guidant: "A+", benetrends: "A+" },
                                            { feature: "SBA Loan Services", guidant: "Yes", benetrends: "Yes" },
                                            { feature: "Payroll Services", guidant: "Yes", benetrends: "No" },
                                            { feature: "Online Dashboard", guidant: "Yes", benetrends: "Limited" },
                                        ].map((row, index) => (
                                            <tr key={index} className="border-b border-white/5">
                                                <td className="p-4 text-white">{row.feature}</td>
                                                <td className="p-4 text-center text-slate-300 bg-orange-500/5">{row.guidant}</td>
                                                <td className="p-4 text-center text-slate-400">{row.benetrends}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Customer Reviews */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">What Customers Say About Guidant</h2>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    quote: "Guidant made the ROBS process smooth and stress-free. My funding specialist was knowledgeable and walked me through every step. I'm now running a successful franchise!",
                                    author: "Michael T.",
                                    business: "Franchise Owner",
                                    rating: 5
                                },
                                {
                                    quote: "The setup fees are higher than I expected, but the peace of mind knowing everything is done correctly is worth it. Their compliance team is excellent.",
                                    author: "Sarah K.",
                                    business: "Small Business Owner",
                                    rating: 4
                                },
                                {
                                    quote: "After being turned down for bank loans, ROBS through Guidant was my path to business ownership. They combined my 401k with an SBA loan for full funding.",
                                    author: "David R.",
                                    business: "Restaurant Owner",
                                    rating: 5
                                }
                            ].map((review, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <div className="flex mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-slate-300 italic mb-4">&quot;{review.quote}&quot;</p>
                                    <div>
                                        <div className="text-white font-semibold">{review.author}</div>
                                        <div className="text-slate-400 text-sm">{review.business}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Who Should Use */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">
                                Who Should Use Guidant Financial?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Ideal For
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Entrepreneurs with $50k+ in retirement funds",
                                            "Franchise buyers needing reliable funding",
                                            "Those wanting hands-on support and guidance",
                                            "People combining ROBS with SBA loans",
                                            "Those prioritizing compliance over cost",
                                            "Business owners needing payroll services"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        May Not Be Ideal For
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Those with less than $50k in retirement",
                                            "Budget-conscious buyers (fees are higher)",
                                            "Passive investors (must work in business)",
                                            "Those wanting LLC structure (C-Corp required)",
                                            "People in a rush (process takes 3-4 weeks)"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                                                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Guidant Financial FAQ
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                {
                                    question: "What does Guidant Financial charge for ROBS setup?",
                                    answer: "Guidant Financial charges approximately $5,000 for ROBS setup, which includes C-Corp formation, 401(k) plan creation, and all legal documentation. Monthly administration fees are around $139."
                                },
                                {
                                    question: "Is Guidant Financial legitimate?",
                                    answer: "Yes, Guidant Financial is a legitimate and well-established ROBS provider. They've been in business since 2003, have an A+ BBB rating, and have helped fund over 25,000 businesses using retirement funds."
                                },
                                {
                                    question: "How long does the ROBS process take with Guidant?",
                                    answer: "The typical ROBS setup through Guidant takes 3-4 weeks from start to funding. The timeline can vary based on state filing requirements and how quickly you complete paperwork."
                                },
                                {
                                    question: "Can I combine ROBS with an SBA loan?",
                                    answer: "Yes, Guidant Financial specializes in combining ROBS funding with SBA loans for larger capital needs. Many clients use ROBS for equity and an SBA loan for additional working capital."
                                },
                                {
                                    question: "What retirement accounts can I use with Guidant?",
                                    answer: "You can use 401(k), 403(b), Traditional IRA, SEP IRA, and most other tax-deferred retirement accounts. Roth IRAs generally cannot be used for ROBS."
                                },
                                {
                                    question: "What happens if my business fails?",
                                    answer: "If your business fails, you could lose the retirement funds you invested. Guidant provides education and support, but ultimately the business risk is yours. This is why they recommend having a solid business plan."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                                    <p className="text-slate-400 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Final Verdict */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-white mb-6">Our Verdict: Guidant Financial</h2>

                            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 mb-8">
                                <div className="flex justify-center mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`w-8 h-8 ${star <= 4 ? 'text-amber-400 fill-amber-400' : star === 5 ? 'text-amber-400 fill-amber-400/50' : 'text-slate-600'}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-3xl font-bold text-orange-400 mb-4">4.7 / 5</div>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Guidant Financial is our <strong className="text-white">top recommendation for ROBS funding</strong>.
                                    While their fees are on the higher side, the combination of experience (25,000+ businesses funded),
                                    comprehensive services, and excellent compliance support makes them worth the investment.
                                    If you&apos;re serious about using your retirement to start a business, Guidant is the safest choice.
                                </p>
                            </div>

                            <Button variant="gold" size="lg" asChild>
                                <a
                                    href={getTrackedLink(AFFILIATE_LINKS.guidantFinancial, "guidant-review-bottom", "guidant")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Your Free ROBS Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>

                            <p className="text-sm text-slate-500 mt-4">
                                No obligation. Speak with a funding specialist about your situation.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {[
                                { href: "/robs-401k", title: "ROBS 401k Guide", desc: "Complete ROBS overview" },
                                { href: "/reviews/benetrends", title: "Benetrends Review", desc: "Alternative ROBS provider" },
                                { href: "/learn/robs-401k-rules", title: "ROBS Rules", desc: "IRS requirements" },
                                { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "Other investment options" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-orange-400 transition-colors text-sm">
                                        {link.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}
