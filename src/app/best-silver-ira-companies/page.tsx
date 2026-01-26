import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { Sparkles, Trophy, Star, CheckCircle2, ArrowRight, Coins, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Silver IRA Companies of 2026 | Top-Rated Silver IRA Providers",
    description: "Compare the best Silver IRA companies for 2026. We analyze silver selection, premiums, storage options, and fees to help you find the right silver IRA provider for your retirement.",
    keywords: ["silver ira companies", "best silver ira companies", "silver ira providers", "top silver ira", "silver ira reviews", "silver retirement accounts"],
    openGraph: {
        title: "Best Silver IRA Companies of 2026 | Top-Rated Silver IRA Providers",
        description: "Compare the best Silver IRA companies for 2026. Find the right silver IRA provider based on silver selection, premiums, and fees.",
        type: "article",
    },
};

// Silver IRA company data
const silverCompanies = [
    {
        rank: 1,
        name: "Augusta Precious Metals",
        tagline: "Best Overall Silver IRA",
        description: "Augusta offers an exceptional silver IRA experience with their education-first approach. Their silver selection includes popular IRA-approved coins like American Silver Eagles and Canadian Silver Maple Leafs, with transparent pricing and no hidden fees. Their lifetime customer support is particularly valuable for silver investors monitoring the silver-to-gold ratio.",
        minInvestment: "$50,000",
        silverSelection: "Premium",
        annualFee: "$180",
        strengths: [
            "Transparent silver premiums",
            "Education-focused approach",
            "Zero BBB complaints",
            "Lifetime dedicated agent"
        ],
        considerations: [
            "$50,000 minimum investment",
            "Requires consultation call"
        ],
        badges: ["Best Education", "A+ BBB Rating"],
        link: AFFILIATE_LINKS.augusta,
        reviewLink: "/reviews/augusta-precious-metals",
        featured: true,
    },
    {
        rank: 2,
        name: "Noble Gold Investments",
        tagline: "Best for Accessible Silver Investing",
        description: "Noble Gold stands out for silver investors with smaller portfolios. With minimums as low as $2,000, they make silver IRAs accessible to beginning investors. Their silver selection includes a good variety of IRA-approved silver coins and bars, and their Texas depository option appeals to investors who prefer domestic storage.",
        minInvestment: "$2,000",
        silverSelection: "Good",
        annualFee: "$225",
        strengths: [
            "Low $2,000 minimum",
            "Good silver bar selection",
            "Texas storage available",
            "Quick account setup"
        ],
        considerations: [
            "Fees higher for small accounts",
            "Newer company (est. 2016)"
        ],
        badges: ["Low Minimum", "Fast Setup"],
        link: AFFILIATE_LINKS.noble,
        reviewLink: "/reviews/noble-gold",
        featured: false,
    },
    {
        rank: 3,
        name: "Goldco",
        tagline: "Most Recognized Silver IRA Brand",
        description: "Goldco is one of the largest precious metals IRA companies, processing billions in gold and silver transactions. Their silver offerings include American Eagles, Canadian Maple Leafs, and various IRA-approved silver bars. While they're known primarily for gold, their silver selection and customer service are solid.",
        minInvestment: "$25,000",
        silverSelection: "Good",
        annualFee: "Varies",
        strengths: [
            "Established reputation",
            "Strong customer service",
            "Wide silver selection",
            "Buyback program"
        ],
        considerations: [
            "$25,000 minimum",
            "Pricing requires consultation"
        ],
        badges: ["Established Brand", "Buyback Program"],
        link: AFFILIATE_LINKS.goldco,
        reviewLink: "/reviews/goldco",
        featured: false,
    },
    {
        rank: 4,
        name: "Birch Gold Group",
        tagline: "Best Flat-Fee Silver IRA",
        description: "Birch Gold uses a flat annual fee structure that can be advantageous for larger silver holdings. Operating since 2003, they have deep experience in precious metals IRAs. Their silver selection focuses on sovereign mint coins with lower premiums, making them efficient for investors prioritizing silver weight over collectibility.",
        minInvestment: "$10,000",
        silverSelection: "Good",
        annualFee: "$200 flat",
        strengths: [
            "Flat fee structure",
            "Long track record (since 2003)",
            "Focus on lower-premium silver",
            "Educational resources"
        ],
        considerations: [
            "Less variety in silver products",
            "No Texas storage"
        ],
        badges: ["Since 2003", "Flat Fees"],
        link: AFFILIATE_LINKS.birch || "#",
        reviewLink: "/reviews/birch-gold",
        featured: false,
    },
];

// Silver-specific comparison factors
const silverFactors = [
    {
        icon: Coins,
        title: "Silver Selection",
        description: "Variety of IRA-approved silver coins and bars available, including American Eagles, Maple Leafs, and sovereign mint products."
    },
    {
        icon: TrendingUp,
        title: "Silver Premiums",
        description: "The markup over spot price for silver products. Lower premiums mean more ounces of silver for your investment."
    },
    {
        icon: Shield,
        title: "Storage Options",
        description: "Segregated vs. non-segregated storage, and depository locations. Some investors prefer domestic (Texas, Delaware) storage."
    },
    {
        icon: Award,
        title: "Silver Expertise",
        description: "Company's knowledge of silver markets, silver-to-gold ratio strategies, and silver-specific IRA rules."
    },
];

// FAQs for schema markup
const faqs = [
    {
        question: "What makes a good Silver IRA company?",
        answer: "A good Silver IRA company offers transparent silver premiums, a wide selection of IRA-approved silver products, competitive storage fees, strong customer service, and educational resources about silver investing. Look for companies with A+ BBB ratings and a track record of handling silver IRAs specifically."
    },
    {
        question: "What is the minimum investment for a Silver IRA?",
        answer: "Silver IRA minimums vary by company. Noble Gold offers the lowest at $2,000, while Augusta Precious Metals requires $50,000. Most companies fall in the $10,000-$25,000 range. Remember that silver requires more physical storage space than gold, which can affect overall fees."
    },
    {
        question: "Can I hold only silver in my IRA?",
        answer: "Yes, you can hold 100% silver in a self-directed IRA. However, many financial advisors recommend diversifying between gold and silver. The silver-to-gold ratio can help guide allocation decisions - when silver is historically cheap relative to gold, it may represent better value."
    },
    {
        question: "What silver products are IRA-approved?",
        answer: "IRA-approved silver must be .999 fine (99.9% pure). Popular options include American Silver Eagles, Canadian Silver Maple Leafs, Austrian Silver Philharmonics, and various silver bars from approved refineries like PAMP Suisse, Credit Suisse, and Johnson Matthey."
    },
    {
        question: "Are Silver IRA fees different from Gold IRA fees?",
        answer: "Silver IRA fees are generally similar to gold IRA fees in structure (setup, annual, storage). However, because silver is bulkier per dollar value, storage fees may be slightly higher for silver-heavy portfolios. Some companies charge storage based on weight, others on value."
    },
];

export default function BestSilverIraCompaniesPage() {
    // JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Silver IRA Companies of 2026",
        "description": "Compare the best Silver IRA companies for 2026. Analysis of silver selection, premiums, storage options, and fees.",
        "author": {
            "@type": "Person",
            "name": "Thomas Richardson",
            "jobTitle": "Senior Financial Analyst"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Rich Dad Retirement"
        },
        "datePublished": "2026-01-15",
        "dateModified": "2026-01-25"
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />

            <div className="flex-grow">
                {/* Hero Header */}
                <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]" />
                    </div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-400/10 border border-slate-400/20 text-slate-300 text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
                            Best Silver IRA Companies
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Silver offers unique advantages for retirement portfolios. Here&apos;s our analysis of the top Silver IRA providers based on silver selection, premiums, and overall value.
                        </p>
                    </Container>
                </header>

                {/* Why Silver Section */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">Why Consider Silver for Your IRA?</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Silver has historically outperformed gold during precious metals bull markets and offers greater affordability for gradual portfolio building.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {silverFactors.map((factor, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <div className="w-12 h-12 rounded-lg bg-slate-400/20 flex items-center justify-center mb-4">
                                        <factor.icon className="w-6 h-6 text-slate-300" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{factor.title}</h3>
                                    <p className="text-sm text-slate-400">{factor.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Main Content */}
                <Container className="py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-16">

                            {/* How We Evaluate */}
                            <div className="prose prose-lg max-w-none text-slate-300">
                                <h2 className="text-3xl font-serif font-bold text-white">How We Evaluate Silver IRA Companies</h2>
                                <p>
                                    Not all precious metals IRA companies treat silver equally. Some focus primarily on gold and offer limited silver options, while others have built strong silver-specific expertise. We evaluate companies on their silver product selection, transparency of silver premiums, storage solutions for silver&apos;s bulkier nature, and overall value for silver-focused investors.
                                </p>
                                <p>
                                    The silver-to-gold ratio is an important consideration. As of 2026, this ratio has made silver historically attractive compared to gold. Companies that understand this and can guide you through silver allocation strategies score higher in our rankings.
                                </p>
                                <p>
                                    Learn more about which silver products qualify in our <Link href="/guide/ira-approved-silver" className="text-amber-400 hover:underline">IRA-Approved Silver Guide</Link> or read our comprehensive <Link href="/guide/silver-ira-guide" className="text-amber-400 hover:underline">Silver IRA Guide</Link>.
                                </p>
                            </div>

                            {/* Company Cards */}
                            {silverCompanies.map((company) => (
                                <div
                                    key={company.rank}
                                    id={`${company.name.toLowerCase().replace(/\s+/g, '-')}-review`}
                                    className="scroll-mt-24 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-xl"
                                >
                                    <div className={`${company.featured ? 'bg-slate-800' : 'bg-slate-700'} text-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`${company.featured ? 'bg-amber-500 text-slate-900' : 'bg-slate-500 text-white'} font-bold w-8 h-8 rounded-full flex items-center justify-center`}>
                                                #{company.rank}
                                            </div>
                                            <h3 className="font-bold text-xl">{company.name}</h3>
                                        </div>
                                        <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded whitespace-nowrap">
                                            {company.tagline}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <p className="text-slate-400 mb-6">
                                            {company.description}
                                        </p>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                                <div className="text-xs text-slate-500 mb-1">Minimum</div>
                                                <div className="font-bold text-white">{company.minInvestment}</div>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                                <div className="text-xs text-slate-500 mb-1">Silver Selection</div>
                                                <div className="font-bold text-white">{company.silverSelection}</div>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                                <div className="text-xs text-slate-500 mb-1">Annual Fee</div>
                                                <div className="font-bold text-white">{company.annualFee}</div>
                                            </div>
                                        </div>

                                        {/* Badges */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {company.badges.map((badge, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-slate-400/20 text-slate-300 px-3 py-1 rounded-full text-xs font-bold border border-slate-400/30"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Strengths & Considerations */}
                                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                                            <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                                <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4" /> Strengths
                                                </h4>
                                                <ul className="text-sm space-y-1 text-slate-400">
                                                    {company.strengths.map((strength, idx) => (
                                                        <li key={idx}>• {strength}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                                                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                                                    Considerations
                                                </h4>
                                                <ul className="text-sm space-y-1 text-slate-400">
                                                    {company.considerations.map((consideration, idx) => (
                                                        <li key={idx}>• {consideration}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button variant="gold" size="lg" className="w-full" asChild>
                                                <a href={getTrackedLink(company.link, "best-silver-companies", company.name.toLowerCase().replace(/\s+/g, '-'))} target="_blank" rel="noopener noreferrer">
                                                    Request Silver IRA Info
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="lg" className="w-full border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                                <Link href={company.reviewLink}>Read Full Review</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Silver vs Gold Comparison */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                                <h2 className="text-2xl font-serif font-bold text-white mb-4">Silver vs Gold in Your IRA</h2>
                                <p className="text-slate-400 mb-6">
                                    Many investors choose to hold both gold and silver in their precious metals IRA. Silver tends to be more volatile than gold, meaning bigger gains in bull markets but also larger drops in bear markets. The current silver-to-gold ratio may favor silver accumulation.
                                </p>
                                <Link
                                    href="/compare/gold-vs-silver-ira"
                                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold"
                                >
                                    Read Our Silver vs Gold Comparison <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <details
                                            key={index}
                                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                                        >
                                            <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center list-none">
                                                {faq.question}
                                                <span className="text-amber-400 group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-slate-400">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>

                            {/* Quiz CTA */}
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10">
                                <h3 className="text-2xl font-serif font-bold text-white mb-4">Not Sure Which Company Fits Your Silver IRA Needs?</h3>
                                <p className="text-slate-400 mb-6">
                                    The right choice depends on your investment amount, silver allocation goals, and preferences. Take our quick quiz to get a personalized recommendation.
                                </p>
                                <Button variant="outline" className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white" asChild>
                                    <Link href="/quiz">
                                        Take the Quiz <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="relative">
                            <StickyMasterSidebar />
                        </div>
                    </div>
                </Container>

                {/* Related Silver Content */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Learn More About Silver IRAs</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/guide/silver-ira-guide" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA Guide</h3>
                                <p className="text-sm text-slate-400">Complete guide to opening and managing a silver IRA account.</p>
                            </Link>
                            <Link href="/guide/ira-approved-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">IRA-Approved Silver</h3>
                                <p className="text-sm text-slate-400">Which silver coins and bars qualify for your retirement account.</p>
                            </Link>
                            <Link href="/best-gold-ira-companies" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Best Gold IRA Companies</h3>
                                <p className="text-sm text-slate-400">Compare gold IRA providers for a diversified precious metals portfolio.</p>
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* Augusta CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="comparison"
                            headline="Ready to Start Your Silver IRA?"
                            subheadline="Augusta Precious Metals earned our #1 ranking for their transparent silver premiums and education-first approach. Request your free precious metals IRA kit today."
                            trackSource="best-silver-companies"
                        />
                    </Container>
                </section>
            </div>
            <Footer />
        </main>
    );
}
