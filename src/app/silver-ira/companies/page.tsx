import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
    Award,
    Star,
    CheckCircle2,
    ArrowRight,
    Shield,
    Coins,
    TrendingUp,
    Building2,
    Phone,
    Users,
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata = createPageMetadata({
    title: "Silver IRA Companies: Top Providers Compared (2026)",
    description:
        "Compare the best Silver IRA companies for 2026. In-depth analysis of Augusta, Goldco, Birch Gold, Noble Gold and more. Find the right silver IRA provider for your needs.",
    url: "https://www.richdadretirement.com/silver-ira/companies",
    imageAlt: "Silver IRA Companies Comparison - Rich Dad Retirement",
});

const silverCompanies = [
    {
        rank: 1,
        name: "Augusta Precious Metals",
        tagline: "Best Overall Silver IRA Company",
        rating: 4.9,
        minInvestment: "$50,000",
        annualFee: "$180",
        silverSelection: "Excellent",
        highlight: "Education-first approach with zero BBB complaints and lifetime customer support",
        strengths: [
            "Transparent silver premiums - no hidden markups",
            "Dedicated lifetime agent for your account",
            "A+ BBB Rating with zero complaints",
            "Free one-on-one web conference education",
            "Wide selection of IRA-approved silver products"
        ],
        considerations: [
            "Higher minimum investment ($50,000)",
            "Requires consultation before purchasing"
        ],
        silverProducts: ["American Silver Eagles", "Canadian Silver Maple Leafs", "Silver Britannias", "Silver Bars (various weights)"],
        link: AFFILIATE_LINKS.augusta,
        reviewLink: "/reviews/augusta-precious-metals",
        featured: true,
    },
    {
        rank: 2,
        name: "Goldco",
        tagline: "Most Recognized Silver IRA Brand",
        rating: 4.8,
        minInvestment: "$25,000",
        annualFee: "Varies",
        silverSelection: "Very Good",
        highlight: "Industry leader with billions in precious metals transactions and celebrity endorsement",
        strengths: [
            "Established reputation and brand recognition",
            "Strong buyback program for silver",
            "Wide silver product selection",
            "A+ BBB Rating",
            "White-glove customer service"
        ],
        considerations: [
            "Pricing requires consultation",
            "Can be aggressive with follow-ups"
        ],
        silverProducts: ["American Silver Eagles", "Austrian Silver Philharmonics", "Silver Rounds", "Silver Bars"],
        link: AFFILIATE_LINKS.goldco,
        reviewLink: "/reviews/goldco",
        featured: false,
    },
    {
        rank: 3,
        name: "Birch Gold Group",
        tagline: "Best Flat-Fee Silver IRA",
        rating: 4.7,
        minInvestment: "$10,000",
        annualFee: "$200 flat",
        silverSelection: "Good",
        highlight: "Operating since 2003 with a flat-fee structure beneficial for larger silver holdings",
        strengths: [
            "Predictable flat annual fee",
            "Over 20 years of experience",
            "Focus on lower-premium silver products",
            "Educational resources for silver investors",
            "Multiple storage options"
        ],
        considerations: [
            "Smaller silver product variety",
            "No Texas storage option"
        ],
        silverProducts: ["American Silver Eagles", "Canadian Silver Maple Leafs", "Generic Silver Rounds", "Silver Bars"],
        link: AFFILIATE_LINKS.birch || "#",
        reviewLink: "/reviews/birch-gold",
        featured: false,
    },
    {
        rank: 4,
        name: "Noble Gold Investments",
        tagline: "Best Low Minimum Silver IRA",
        rating: 4.6,
        minInvestment: "$2,000",
        annualFee: "$225",
        silverSelection: "Good",
        highlight: "Lowest minimum in the industry makes silver IRAs accessible to all investors",
        strengths: [
            "Industry-low $2,000 minimum",
            "Texas depository option",
            "Quick account setup process",
            "Royal Survival Packs for emergencies",
            "Good silver bar selection"
        ],
        considerations: [
            "Higher fees for small accounts",
            "Newer company (established 2016)"
        ],
        silverProducts: ["American Silver Eagles", "Silver Bars", "Silver Rounds", "Australian Silver products"],
        link: AFFILIATE_LINKS.noble,
        reviewLink: "/reviews/noble-gold",
        featured: false,
    },
    {
        rank: 5,
        name: "American Hartford Gold",
        tagline: "Best Silver Buyback Program",
        rating: 4.5,
        minInvestment: "$10,000",
        annualFee: "Varies",
        silverSelection: "Good",
        highlight: "Known for competitive buyback prices when you want to sell your silver",
        strengths: [
            "Competitive buyback program",
            "Price match guarantee",
            "A+ BBB Rating",
            "Responsive customer service",
            "Free shipping on orders"
        ],
        considerations: [
            "Less silver variety than competitors",
            "Pricing can vary"
        ],
        silverProducts: ["American Silver Eagles", "Canadian Maple Leafs", "Silver Bars", "Junk Silver"],
        link: AFFILIATE_LINKS.americanHartford || "#",
        reviewLink: "/reviews/american-hartford-gold",
        featured: false,
    },
];

const comparisonFactors = [
    {
        icon: Coins,
        title: "Silver Product Selection",
        description: "We evaluate the variety of IRA-approved silver coins and bars each company offers, including sovereign mint coins and generic rounds."
    },
    {
        icon: TrendingUp,
        title: "Silver Premiums",
        description: "Lower premiums mean more ounces of silver for your dollar. We compare markups over spot price across companies."
    },
    {
        icon: Shield,
        title: "Customer Service",
        description: "Silver investors need knowledgeable support. We assess responsiveness, expertise, and ongoing account management."
    },
    {
        icon: Building2,
        title: "Storage & Custodians",
        description: "Quality of partner custodians and depositories, including segregated storage options and geographic choices."
    },
];

const faqs = [
    {
        question: "What should I look for in a Silver IRA company?",
        answer: "Key factors include: transparent silver premiums, variety of IRA-approved silver products, quality customer service, competitive fees, reputable custodian partnerships, and a track record of customer satisfaction. Look for A+ BBB ratings and minimal complaints."
    },
    {
        question: "Why is Augusta Precious Metals ranked #1 for Silver IRAs?",
        answer: "Augusta earns our top ranking for their transparent pricing, education-first approach, zero BBB complaints, and lifetime customer support. They don't pressure you to buy - instead, they educate you about silver investing so you can make informed decisions."
    },
    {
        question: "What is the minimum investment for a Silver IRA?",
        answer: "Minimums vary significantly by company. Noble Gold offers the lowest at $2,000, while Augusta Precious Metals requires $50,000. Most companies fall between $10,000-$25,000. Consider your investment amount when choosing a provider."
    },
    {
        question: "Do all Gold IRA companies also offer Silver IRAs?",
        answer: "Yes, most precious metals IRA companies handle both gold and silver. The same self-directed IRA can hold multiple metals. However, some companies have more expertise and better pricing for silver than others."
    },
    {
        question: "How do Silver IRA fees compare between companies?",
        answer: "Annual fees typically range from $180-$300. Some companies like Birch Gold use flat fees regardless of account size, while others charge based on account value. Storage fees may be higher for silver due to its bulk compared to gold."
    },
    {
        question: "Can I transfer my existing Gold IRA to hold silver instead?",
        answer: "Yes, you can add silver to an existing precious metals IRA or sell gold to purchase silver within the same account. Work with your custodian and dealer to make this transition smoothly."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver IRA Companies: Top Providers Compared (2026)",
    "description": "Compare the best Silver IRA companies. In-depth analysis of Augusta, Goldco, Birch Gold, Noble Gold and more.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-27"
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

export default function SilverIraCompaniesPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="py-16 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-400/30 rounded-full text-slate-300 font-semibold text-sm mb-6">
                            <Building2 className="h-4 w-4" />
                            COMPANY COMPARISON
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Silver IRA Companies: Find Your Perfect Provider
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Not all precious metals companies are equal when it comes to silver. We analyzed fees, silver selection, premiums, and customer service to rank the best Silver IRA providers for 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/quiz">
                                    Find Your Match <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                <Link href="#augusta-precious-metals">
                                    See #1 Pick
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* How We Evaluate */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">How We Evaluate Silver IRA Companies</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our ranking methodology focuses on factors that matter most to silver investors.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {comparisonFactors.map((factor, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <div className="w-12 h-12 rounded-lg bg-slate-500/20 flex items-center justify-center mb-4">
                                    <factor.icon className="w-6 h-6 text-slate-300" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{factor.title}</h3>
                                <p className="text-sm text-slate-400">{factor.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Company Rankings */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Top Silver IRA Companies Ranked</h2>

                        {silverCompanies.map((company) => (
                            <div
                                key={company.rank}
                                id={company.name.toLowerCase().replace(/\s+/g, '-')}
                                className={`rounded-2xl overflow-hidden border ${company.featured ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-slate-900' : 'border-white/10 bg-white/5'}`}
                            >
                                {/* Header */}
                                <div className={`p-6 ${company.featured ? 'bg-amber-500/20' : 'bg-slate-800/50'}`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${company.featured ? 'bg-amber-500 text-slate-900' : 'bg-slate-600 text-white'}`}>
                                                #{company.rank}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                                                <p className="text-slate-400">{company.tagline}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`h-5 w-5 ${star <= Math.floor(company.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`}
                                                    />
                                                ))}
                                                <span className="ml-2 text-white font-bold">{company.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-slate-300 mb-6">{company.highlight}</p>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                            <div className="text-xs text-slate-500 mb-1">Minimum</div>
                                            <div className="font-bold text-white">{company.minInvestment}</div>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                            <div className="text-xs text-slate-500 mb-1">Annual Fee</div>
                                            <div className="font-bold text-white">{company.annualFee}</div>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                            <div className="text-xs text-slate-500 mb-1">Silver Selection</div>
                                            <div className="font-bold text-white">{company.silverSelection}</div>
                                        </div>
                                    </div>

                                    {/* Silver Products */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                            <Coins className="h-4 w-4 text-slate-400" /> Available Silver Products
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {company.silverProducts.map((product, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                                                    {product}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Strengths & Considerations */}
                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                            <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4" /> Strengths
                                            </h4>
                                            <ul className="space-y-2 text-sm text-slate-400">
                                                {company.strengths.map((strength, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                        {strength}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                                            <h4 className="font-bold text-amber-400 mb-3">Considerations</h4>
                                            <ul className="space-y-2 text-sm text-slate-400">
                                                {company.considerations.map((consideration, idx) => (
                                                    <li key={idx}>* {consideration}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="gold" size="lg" className="flex-1" asChild>
                                            <a href={getTrackedLink(company.link, "silver-companies", company.name.toLowerCase().replace(/\s+/g, '-'))} target="_blank" rel="noopener noreferrer">
                                                Get Free Silver IRA Kit <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" className="flex-1 border-white/20 text-slate-300 hover:bg-white/10" asChild>
                                            <Link href={company.reviewLink}>Read Full Review</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                            <thead className="bg-slate-800/50">
                                <tr>
                                    <th className="p-4 border-b border-white/10 font-bold text-white">Company</th>
                                    <th className="p-4 border-b border-white/10 font-bold text-white">Minimum</th>
                                    <th className="p-4 border-b border-white/10 font-bold text-white">Annual Fee</th>
                                    <th className="p-4 border-b border-white/10 font-bold text-white">Rating</th>
                                    <th className="p-4 border-b border-white/10 font-bold text-white">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                <tr className="bg-amber-500/5">
                                    <td className="p-4 font-semibold text-white">Augusta Precious Metals</td>
                                    <td className="p-4">$50,000</td>
                                    <td className="p-4">$180</td>
                                    <td className="p-4">4.9/5</td>
                                    <td className="p-4">Best Overall Experience</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Goldco</td>
                                    <td className="p-4">$25,000</td>
                                    <td className="p-4">Varies</td>
                                    <td className="p-4">4.8/5</td>
                                    <td className="p-4">Brand Recognition</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Birch Gold Group</td>
                                    <td className="p-4">$10,000</td>
                                    <td className="p-4">$200 flat</td>
                                    <td className="p-4">4.7/5</td>
                                    <td className="p-4">Flat Fee Structure</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Noble Gold</td>
                                    <td className="p-4">$2,000</td>
                                    <td className="p-4">$225</td>
                                    <td className="p-4">4.6/5</td>
                                    <td className="p-4">Low Minimum</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">American Hartford Gold</td>
                                    <td className="p-4">$10,000</td>
                                    <td className="p-4">Varies</td>
                                    <td className="p-4">4.5/5</td>
                                    <td className="p-4">Buyback Program</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Silver IRA Companies FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform">&#9660;</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Quiz CTA */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Company Is Right for You?</h2>
                        <p className="text-slate-400 mb-8">
                            Take our 60-second quiz to get a personalized recommendation based on your investment amount, goals, and preferences.
                        </p>
                        <Button variant="gold" size="xl" asChild>
                            <Link href="/quiz">
                                Take the Free Quiz <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Start Your Silver IRA Today"
                        subheadline="Augusta Precious Metals earned our #1 ranking for silver IRAs. Get transparent pricing, expert education, and lifetime support."
                        trackSource="silver-ira-companies"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
