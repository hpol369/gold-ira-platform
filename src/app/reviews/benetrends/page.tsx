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
    Award,
    TrendingUp,
    DollarSign,
    FileCheck,
    AlertTriangle,
    History
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Benetrends Review 2026: ROBS Pioneer Fees & Pros/Cons",
    description: "Complete Benetrends review covering their 40+ years of ROBS experience, fees, services, and how they compare to Guidant Financial. Honest assessment.",
    keywords: "benetrends review, benetrends robs, benetrends fees, benetrends 401k, rollover for business startups benetrends",
    openGraph: {
        title: "Benetrends Review 2026: The Original ROBS Provider",
        description: "Benetrends pioneered ROBS funding in 1983. Complete review covering fees, services, and our honest verdict.",
        type: "article",
    },
};

const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "FinancialService",
        "name": "Benetrends",
        "image": "https://www.richdadretirement.com/logo.png"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
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
    "reviewBody": "Benetrends pioneered ROBS funding in 1983 and has over 40 years of experience helping entrepreneurs. They offer slightly lower fees than competitors, an A+ BBB rating, and strong relationships with franchise brands."
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What does Benetrends charge for ROBS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Benetrends charges approximately $4,995 for ROBS setup and around $129/month for ongoing administration. Their pricing is competitive with industry standards."
            }
        },
        {
            "@type": "Question",
            "name": "Is Benetrends the original ROBS company?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Benetrends pioneered the ROBS funding method in 1983 and has over 40 years of experience helping entrepreneurs fund businesses with retirement accounts."
            }
        }
    ]
};

export default function BenetrendsReviewPage() {
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
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link>
                            <span>/</span>
                            <span className="text-white">Benetrends</span>
                        </nav>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
                                    <History className="w-4 h-4 text-blue-400" />
                                    <span className="text-blue-400 text-sm font-medium">ROBS Pioneer Since 1983</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                    Benetrends Review 2026:{" "}
                                    <span className="text-blue-400">The Original ROBS Provider</span>
                                </h1>

                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Benetrends invented ROBS (Rollover for Business Startups) in 1983, making them the
                                    original pioneer in retirement-funded business financing. With 40+ years of experience,
                                    they&apos;ve helped over 15,000 entrepreneurs turn their retirement savings into successful businesses.
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
                                        <span className="ml-2 text-white font-bold">4.5/5</span>
                                    </div>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-slate-400">BBB Rating: A+</span>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-slate-400">40+ Years Experience</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button variant="gold" size="lg" asChild>
                                        <a
                                            href={getTrackedLink(AFFILIATE_LINKS.benetrends, "benetrends-review-hero", "benetrends")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Free Consultation
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="/reviews/guidant-financial">
                                            Compare to Guidant
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Sidebar Quick Facts */}
                            <div className="lg:col-span-1">
                                <VerdictBox
                                    companyName="Benetrends"
                                    rating={4.5}
                                    isRecommended={true}
                                    bottomLine="Benetrends is a solid ROBS choice with unmatched 40+ years of experience. Slightly lower fees than competitors, but fewer additional services. Great for straightforward ROBS needs."
                                    ctaText="Free Consultation"
                                    ctaUrl={getTrackedLink(AFFILIATE_LINKS.benetrends, "benetrends-review-verdict", "benetrends")}
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* At a Glance */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8">Benetrends at a Glance</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: "Founded", value: "1983", icon: Clock },
                                { label: "Minimum Required", value: "$50,000", icon: DollarSign },
                                { label: "Setup Fee", value: "~$4,995", icon: FileCheck },
                                { label: "Monthly Admin", value: "$129/mo", icon: Building2 },
                                { label: "BBB Rating", value: "A+", icon: Award },
                                { label: "Businesses Funded", value: "15,000+", icon: TrendingUp },
                                { label: "Experience", value: "40+ years", icon: History },
                                { label: "Support", value: "Phone & Email", icon: Users },
                            ].map((item, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <item.icon className="w-6 h-6 text-blue-400 mb-3" />
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
                        <h2 className="text-2xl font-bold text-white mb-8">Benetrends: Pros and Cons</h2>

                        <ProsCons
                            pros={[
                                "Invented ROBS in 1983 (40+ years experience)",
                                "Slightly lower fees than competitors",
                                "A+ BBB rating with strong reputation",
                                "15,000+ successful business fundings",
                                "Deep expertise in franchise funding",
                                "SBA loan assistance available",
                                "Strong relationships with franchise brands",
                                "No hidden fees or surprise costs"
                            ]}
                            cons={[
                                "Fewer additional services than Guidant",
                                "Online dashboard not as modern",
                                "No in-house payroll services",
                                "Customer support can be slower",
                                "Less marketing/branding resources"
                            ]}
                        />
                    </Container>
                </section>

                {/* The Benetrends Story */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-6">The Benetrends Story: ROBS Pioneers</h2>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        In 1983, Benetrends founder <strong className="text-white">Leonard Fischer</strong> pioneered
                                        a revolutionary concept: using retirement funds to start a business without taxes or penalties.
                                        What became known as ROBS (Rollover for Business Startups) was born.
                                    </p>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Before Benetrends, entrepreneurs had two options: take a taxable distribution from their
                                        retirement (losing 30-40% to taxes and penalties) or borrow money and take on debt.
                                        Benetrends created a third path.
                                    </p>
                                    <p className="text-slate-300 leading-relaxed">
                                        Today, Benetrends has helped over <strong className="text-white">15,000 entrepreneurs</strong> fund
                                        businesses ranging from franchises to independent startups. Their deep relationships with
                                        major franchise brands make them particularly strong for franchise buyers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Fees Breakdown */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-8">Benetrends Fees</h2>

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
                                            { type: "ROBS Setup Fee", amount: "~$4,995", notes: "Includes C-Corp, 401(k) plan, all docs" },
                                            { type: "Monthly Administration", amount: "$129/month", notes: "Ongoing compliance and admin" },
                                            { type: "Annual Cost", amount: "~$1,548/year", notes: "Based on monthly admin fee" },
                                            { type: "State Filing Fees", amount: "Varies", notes: "Depends on state of incorporation" },
                                            { type: "SBA Loan Assistance", amount: "Included", notes: "No extra fee for SBA guidance" },
                                        ].map((fee, index) => (
                                            <tr key={index} className="border-b border-white/5">
                                                <td className="p-4 text-white">{fee.type}</td>
                                                <td className="p-4 text-blue-400 font-semibold">{fee.amount}</td>
                                                <td className="p-4 text-slate-400 text-sm">{fee.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                                <p className="text-green-400 text-sm flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span>Benetrends&apos; fees are slightly lower than Guidant Financial, saving ~$120/year on administration.</span>
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Comparison Table */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">Benetrends vs. Guidant Financial</h2>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                <table className="w-full min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-white font-semibold">Feature</th>
                                            <th className="text-center p-4 text-blue-400 font-semibold bg-blue-500/5">Benetrends</th>
                                            <th className="text-center p-4 text-white font-semibold">Guidant Financial</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Setup Fee", benetrends: "~$4,995", guidant: "~$5,000" },
                                            { feature: "Monthly Fee", benetrends: "$129", guidant: "$139" },
                                            { feature: "Experience", benetrends: "40+ years", guidant: "20+ years" },
                                            { feature: "Businesses Funded", benetrends: "15,000+", guidant: "25,000+" },
                                            { feature: "BBB Rating", benetrends: "A+", guidant: "A+" },
                                            { feature: "SBA Loan Services", benetrends: "Yes", guidant: "Yes" },
                                            { feature: "Payroll Services", benetrends: "No", guidant: "Yes" },
                                            { feature: "Modern Dashboard", benetrends: "Limited", guidant: "Yes" },
                                            { feature: "Franchise Relationships", benetrends: "Strong", guidant: "Good" },
                                        ].map((row, index) => (
                                            <tr key={index} className="border-b border-white/5">
                                                <td className="p-4 text-white">{row.feature}</td>
                                                <td className="p-4 text-center text-slate-300 bg-blue-500/5">{row.benetrends}</td>
                                                <td className="p-4 text-center text-slate-400">{row.guidant}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto mt-8 text-center">
                            <p className="text-slate-400">
                                <strong className="text-white">Bottom line:</strong> Benetrends offers lower fees and more experience,
                                while Guidant provides more comprehensive services. Choose Benetrends for straightforward ROBS needs;
                                choose Guidant if you want additional services like payroll.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Who Should Use */}
                <section className="py-12 bg-slate-900">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">
                                Who Should Use Benetrends?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Ideal For
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Franchise buyers (strong franchise relationships)",
                                            "Entrepreneurs wanting proven track record",
                                            "Budget-conscious buyers (lower fees)",
                                            "Those who value experience over tech features",
                                            "Simple ROBS needs without extra services",
                                            "Those combining ROBS with SBA loans"
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
                                            "Those wanting modern online dashboard",
                                            "Businesses needing payroll services",
                                            "Those preferring quick email support",
                                            "Tech-savvy entrepreneurs wanting apps",
                                            "Those needing extensive hand-holding"
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
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Benetrends FAQ
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                {
                                    question: "What does Benetrends charge for ROBS?",
                                    answer: "Benetrends charges approximately $4,995 for ROBS setup and around $129/month for ongoing administration. This is slightly lower than competitors like Guidant Financial."
                                },
                                {
                                    question: "Is Benetrends the original ROBS company?",
                                    answer: "Yes, Benetrends pioneered the ROBS funding method in 1983. They literally invented the concept of using retirement funds to start a business tax-free, making them the original ROBS provider."
                                },
                                {
                                    question: "How does Benetrends compare to Guidant?",
                                    answer: "Benetrends has more experience (40+ years vs 20+) and lower fees, but Guidant offers more additional services like payroll and a modern online dashboard. Both have A+ BBB ratings."
                                },
                                {
                                    question: "Does Benetrends help with SBA loans?",
                                    answer: "Yes, Benetrends assists clients who want to combine ROBS funding with SBA loans for additional capital. This is included in their services at no extra charge."
                                },
                                {
                                    question: "What's the minimum retirement funds needed?",
                                    answer: "Benetrends requires a minimum of $50,000 in eligible retirement funds (401k, IRA, 403b, etc.) to use their ROBS services."
                                },
                                {
                                    question: "Is Benetrends good for franchises?",
                                    answer: "Yes, Benetrends has particularly strong relationships with major franchise brands. They're one of the top choices for franchise buyers using ROBS funding."
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
                <section className="py-12 bg-slate-900">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-white mb-6">Our Verdict: Benetrends</h2>

                            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 mb-8">
                                <div className="flex justify-center mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`w-8 h-8 ${star <= 4 ? 'text-amber-400 fill-amber-400' : star === 5 ? 'text-amber-400 fill-amber-400/50' : 'text-slate-600'}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-3xl font-bold text-blue-400 mb-4">4.5 / 5</div>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Benetrends is a <strong className="text-white">solid, proven ROBS provider</strong> with unmatched
                                    experience in the industry. If you want lower fees and don&apos;t need extra services like payroll,
                                    Benetrends is an excellent choice. Their 40+ years of experience and strong franchise relationships
                                    make them particularly good for franchise buyers.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="lg" asChild>
                                    <a
                                        href={getTrackedLink(AFFILIATE_LINKS.benetrends, "benetrends-review-bottom", "benetrends")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Free Benetrends Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/reviews/guidant-financial">
                                        Compare to Guidant Financial
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {[
                                { href: "/robs-401k", title: "ROBS 401k Guide", desc: "Complete ROBS overview" },
                                { href: "/reviews/guidant-financial", title: "Guidant Financial Review", desc: "Top ROBS alternative" },
                                { href: "/learn/robs-401k-rules", title: "ROBS Rules", desc: "IRS requirements" },
                                { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "Other options" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors text-sm">
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
