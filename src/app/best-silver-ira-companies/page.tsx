import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { Sparkles, Trophy, Star, CheckCircle2, ArrowRight, Coins, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { FAQSection } from "@/components/seo/FAQSection";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getPageFAQs } from "@/data/faqs";

export const metadata: Metadata = {
    title: "Best Silver IRA Companies of 2026 | Top Providers",
    description: "Compare the best Silver IRA companies for 2026. Analysis of silver selection, premiums, storage options, and fees to find the right provider.",
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
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <SchemaScript schema={articleSchema({ title: "Best Silver IRA Companies of 2026", description: "Compare the best Silver IRA companies. Analysis of silver selection, premiums, storage options, and fees.", slug: "/best-silver-ira-companies" })} />
            <SchemaScript schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Best Silver IRA Companies", url: "/best-silver-ira-companies" }])} />
            <SchemaScript schema={faqSchema(getPageFAQs("best-silver-ira-companies"))} />
            <Navbar />

            {/* Answer-First GEO Block */}
            <section className="pt-8 pb-4 bg-white">
                <Container>
                    <AnswerFirst
                        answer="The best Silver IRA companies in 2026 are Augusta Precious Metals (widest silver selection, $50k min), Noble Gold (lowest minimum at $2,000), and American Hartford Gold (price match guarantee, $10k min). Silver must be .999 fine to qualify for an IRA."
                        keyFacts={[
                            "Silver IRA purity requirement: .999 fine (99.9% pure)",
                            "Augusta: Widest silver selection, fee waivers up to 10 years",
                            "Noble Gold: $2,000 minimum — lowest in the industry",
                            "Popular silver: American Eagles, Canadian Maple Leafs, approved bars",
                        ]}
                        className="max-w-3xl mx-auto"
                    />
                </Container>
            </section>

            <div className="flex-grow">
                {/* Hero Header */}
                <header className="bg-[#0C0D18] text-[#F6F4EF] py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgba(220,38,38,0.06)] rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[rgba(197,149,46,0.06)] rounded-full blur-[100px]" />
                    </div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 text-[#D0CCC4] text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#F6F4EF]">
                            Best Silver IRA Companies
                        </h1>
                        <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto leading-relaxed">
                            Silver offers unique advantages for retirement portfolios. Here&apos;s our analysis of the top Silver IRA providers based on silver selection, premiums, and overall value.
                        </p>
                    </Container>
                </header>

                {/* Why Silver Section */}
                <section className="py-16 bg-[#0C0D18]">
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-4">Why Consider Silver for Your IRA?</h2>
                            <p className="text-[#D0CCC4] max-w-2xl mx-auto">
                                Silver has historically outperformed gold during precious metals bull markets and offers greater affordability for gradual portfolio building.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {silverFactors.map((factor, index) => (
                                <div key={index} className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6">
                                    <div className="w-12 h-12 rounded-lg bg-[rgba(220,38,38,0.1)] flex items-center justify-center mb-4">
                                        <factor.icon className="w-6 h-6 text-[#D0CCC4]" />
                                    </div>
                                    <h3 className="font-bold text-[#F6F4EF] mb-2">{factor.title}</h3>
                                    <p className="text-sm text-[#D0CCC4]">{factor.description}</p>
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
                            <div className="prose prose-lg max-w-none text-[#D0CCC4]">
                                <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">How We Evaluate Silver IRA Companies</h2>
                                <p>
                                    Not all precious metals IRA companies treat silver equally. Some focus primarily on gold and offer limited silver options, while others have built strong silver-specific expertise. We evaluate companies on their silver product selection, transparency of silver premiums, storage solutions for silver&apos;s bulkier nature, and overall value for silver-focused investors.
                                </p>
                                <p>
                                    The silver-to-gold ratio is an important consideration. As of 2026, this ratio has made silver historically attractive compared to gold. Companies that understand this and can guide you through silver allocation strategies score higher in our rankings.
                                </p>
                                <p>
                                    Learn more about which silver products qualify in our <Link href="/guide/ira-approved-silver" className="text-[#D4A94E] hover:underline">IRA-Approved Silver Guide</Link> or read our comprehensive <Link href="/guide/silver-ira-guide" className="text-[#D4A94E] hover:underline">Silver IRA Guide</Link>.
                                </p>
                            </div>

                            {/* Company Cards */}
                            {silverCompanies.map((company) => (
                                <div
                                    key={company.rank}
                                    id={`${company.name.toLowerCase().replace(/\s+/g, '-')}-review`}
                                    className="scroll-mt-24 border border-[#2A2D42] rounded-2xl overflow-hidden bg-[#0C0D18] backdrop-blur-sm shadow-xl"
                                >
                                    <div className={`${company.featured ? 'bg-[rgba(197,149,46,0.1)]' : 'bg-[#121423]'} ${company.featured ? 'text-white' : 'text-[#F6F4EF]'} p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`${company.featured ? 'bg-[#DC2626] text-white' : 'bg-[#0C0D18]0 text-white'} font-bold w-8 h-8 rounded-full flex items-center justify-center`}>
                                                #{company.rank}
                                            </div>
                                            <h3 className="font-bold text-xl">{company.name}</h3>
                                        </div>
                                        <div className="text-sm font-medium bg-[#121423] px-3 py-1 rounded whitespace-nowrap">
                                            {company.tagline}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <p className="text-[#D0CCC4] mb-6">
                                            {company.description}
                                        </p>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="bg-[#0C0D18] rounded-lg p-3 border border-[#2A2D42]">
                                                <div className="text-xs text-[#D0CCC4] mb-1">Minimum</div>
                                                <div className="font-bold text-[#F6F4EF]">{company.minInvestment}</div>
                                            </div>
                                            <div className="bg-[#0C0D18] rounded-lg p-3 border border-[#2A2D42]">
                                                <div className="text-xs text-[#D0CCC4] mb-1">Silver Selection</div>
                                                <div className="font-bold text-[#F6F4EF]">{company.silverSelection}</div>
                                            </div>
                                            <div className="bg-[#0C0D18] rounded-lg p-3 border border-[#2A2D42]">
                                                <div className="text-xs text-[#D0CCC4] mb-1">Annual Fee</div>
                                                <div className="font-bold text-[#F6F4EF]">{company.annualFee}</div>
                                            </div>
                                        </div>

                                        {/* Badges */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {company.badges.map((badge, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-[rgba(220,38,38,0.1)] text-[#D0CCC4] px-3 py-1 rounded-full text-xs font-bold border border-[#3F4460]"
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
                                                <ul className="text-sm space-y-1 text-[#D0CCC4]">
                                                    {company.strengths.map((strength, idx) => (
                                                        <li key={idx}>• {strength}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-[rgba(220,38,38,0.1)] p-4 rounded-xl border border-amber-500/20">
                                                <h4 className="font-bold text-[#D4A94E] mb-2 flex items-center gap-2">
                                                    Considerations
                                                </h4>
                                                <ul className="text-sm space-y-1 text-[#D0CCC4]">
                                                    {company.considerations.map((consideration, idx) => (
                                                        <li key={idx}>• {consideration}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button className="bg-[#DC2626] hover:bg-[#991B1B] text-white w-full" size="lg" asChild>
                                                <a href={getTrackedLink(company.link, "best-silver-companies", company.name.toLowerCase().replace(/\s+/g, '-'))} target="_blank" rel="noopener noreferrer">
                                                    Request Silver IRA Info
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="lg" className="w-full border-[#3F4460] text-[#D0CCC4] hover:bg-[#1E2134]" asChild>
                                                <Link href={company.reviewLink}>Read Full Review</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Silver vs Gold Comparison */}
                            <div className="bg-[#161828] rounded-2xl p-8 border border-[#2A2D42]">
                                <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">Silver vs Gold in Your IRA</h2>
                                <p className="text-[#D0CCC4] mb-6">
                                    Many investors choose to hold both gold and silver in their precious metals IRA. Silver tends to be more volatile than gold, meaning bigger gains in bull markets but also larger drops in bear markets. The current silver-to-gold ratio may favor silver accumulation.
                                </p>
                                <Link
                                    href="/compare/gold-vs-silver-ira"
                                    className="inline-flex items-center gap-2 text-[#D4A94E] hover:text-[#D4A94E] font-semibold"
                                >
                                    Read Our Silver vs Gold Comparison <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <details
                                            key={index}
                                            className="group bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl"
                                        >
                                            <summary className="cursor-pointer p-6 font-semibold text-[#F6F4EF] flex justify-between items-center list-none">
                                                {faq.question}
                                                <span className="text-[#D4A94E] group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-[#D0CCC4]">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>

                            {/* Quiz CTA */}
                            <div className="bg-[#0C0D18] backdrop-blur-sm p-8 rounded-2xl text-center border border-[#2A2D42]">
                                <h3 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">Not Sure Which Company Fits Your Silver IRA Needs?</h3>
                                <p className="text-[#D0CCC4] mb-6">
                                    The right choice depends on your investment amount, silver allocation goals, and preferences. Take our quick quiz to get a personalized recommendation.
                                </p>
                                <Button variant="outline" className="border-[#3F4460] text-[#D0CCC4] hover:bg-[#1E2134] hover:text-[#F6F4EF]" asChild>
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
                <section className="py-16 bg-[#0C0D18]">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-8 text-center">Explore Silver Content Hubs</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <Link href="/silver-ira" className="group bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 rounded-lg p-4 hover:bg-[rgba(220,38,38,0.1)] transition-colors">
                                <h4 className="font-bold text-[#F6F4EF] mb-1 group-hover:text-[#D4A94E] transition-colors">Silver IRA Hub</h4>
                                <p className="text-xs text-[#D0CCC4]">Complete guide to silver retirement accounts</p>
                            </Link>
                            <Link href="/silver-price" className="group bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 rounded-lg p-4 hover:bg-[rgba(220,38,38,0.1)] transition-colors">
                                <h4 className="font-bold text-[#F6F4EF] mb-1 group-hover:text-[#D4A94E] transition-colors">Silver Price Predictions</h4>
                                <p className="text-xs text-[#D0CCC4]">Expert forecasts 2026-2040</p>
                            </Link>
                            <Link href="/silver-products" className="group bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 rounded-lg p-4 hover:bg-[rgba(220,38,38,0.1)] transition-colors">
                                <h4 className="font-bold text-[#F6F4EF] mb-1 group-hover:text-[#D4A94E] transition-colors">Silver Products Guide</h4>
                                <p className="text-xs text-[#D0CCC4]">Coins, bars & IRA-approved silver</p>
                            </Link>
                            <Link href="/silver-experts" className="group bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 rounded-lg p-4 hover:bg-[rgba(220,38,38,0.1)] transition-colors">
                                <h4 className="font-bold text-[#F6F4EF] mb-1 group-hover:text-[#D4A94E] transition-colors">Silver Experts</h4>
                                <p className="text-xs text-[#D0CCC4]">Leading silver analysts & their views</p>
                            </Link>
                        </div>

                        <h3 className="text-xl font-bold text-[#F6F4EF] mb-6 text-center">Learn More About Silver IRAs</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/guide/silver-ira-guide" className="group bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 hover:bg-[#1E2134] transition-colors">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 group-hover:text-[#D4A94E] transition-colors">Silver IRA Guide</h3>
                                <p className="text-sm text-[#D0CCC4]">Complete guide to opening and managing a silver IRA account.</p>
                            </Link>
                            <Link href="/guide/ira-approved-silver" className="group bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 hover:bg-[#1E2134] transition-colors">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 group-hover:text-[#D4A94E] transition-colors">IRA-Approved Silver</h3>
                                <p className="text-sm text-[#D0CCC4]">Which silver coins and bars qualify for your retirement account.</p>
                            </Link>
                            <Link href="/best-gold-ira-companies" className="group bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6 hover:bg-[#1E2134] transition-colors">
                                <h3 className="font-bold text-[#F6F4EF] mb-2 group-hover:text-[#D4A94E] transition-colors">Best Gold IRA Companies</h3>
                                <p className="text-sm text-[#D0CCC4]">Compare gold IRA providers for a diversified precious metals portfolio.</p>
                            </Link>
                        </div>

                        {/* Silver Squeeze Resources */}
                        <div className="mt-8 pt-8 border-t border-[#2A2D42]">
                            <h3 className="text-xl font-bold text-[#F6F4EF] mb-6 text-center">Silver Market Insights</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                <Link href="/silver-squeeze" className="group bg-[#0C0D18] border border-[#2A2D42] rounded-lg p-4 hover:bg-[#1E2134] transition-colors">
                                    <h4 className="font-bold text-[#F6F4EF] text-sm mb-1 group-hover:text-[#D4A94E] transition-colors">Silver Squeeze Hub</h4>
                                    <p className="text-xs text-[#D0CCC4]">Understand the silver squeeze movement</p>
                                </Link>
                                <Link href="/silver-squeeze/buy-physical-silver-guide" className="group bg-[#0C0D18] border border-[#2A2D42] rounded-lg p-4 hover:bg-[#1E2134] transition-colors">
                                    <h4 className="font-bold text-[#F6F4EF] text-sm mb-1 group-hover:text-[#D4A94E] transition-colors">Buy Physical Silver</h4>
                                    <p className="text-xs text-[#D0CCC4]">Guide to premiums, products & dealers</p>
                                </Link>
                                <Link href="/silver-squeeze/silver-supply-deficit" className="group bg-[#0C0D18] border border-[#2A2D42] rounded-lg p-4 hover:bg-[#1E2134] transition-colors">
                                    <h4 className="font-bold text-[#F6F4EF] text-sm mb-1 group-hover:text-[#D4A94E] transition-colors">Silver Supply Deficit</h4>
                                    <p className="text-xs text-[#D0CCC4]">Why silver supply is tightening</p>
                                </Link>
                                <Link href="/compare/gold-vs-silver-ira" className="group bg-[#0C0D18] border border-[#2A2D42] rounded-lg p-4 hover:bg-[#1E2134] transition-colors">
                                    <h4 className="font-bold text-[#F6F4EF] text-sm mb-1 group-hover:text-[#D4A94E] transition-colors">Gold vs Silver IRA</h4>
                                    <p className="text-xs text-[#D0CCC4]">Compare gold and silver for retirement</p>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Augusta CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="comparison" directToAugusta
                            headline="Ready to Start Your Silver IRA?"
                            subheadline="Augusta Precious Metals earned our #1 ranking for their transparent silver premiums and education-first approach. Request your free precious metals IRA kit today."
                            trackSource="best-silver-companies"
                        />
                    </Container>
                </section>
            </div>
            <section className="py-16 bg-white">
                <Container>
                    <FAQSection
                        faqs={getPageFAQs("best-silver-ira-companies")}
                        title="Silver IRA FAQs"
                        className="max-w-3xl"
                        includeSchema={false}
                    />
                </Container>
            </section>
            <section className="py-12 bg-white">
                <Container>
                    <AutoRelatedContent currentUrl="/best-silver-ira-companies" />
                </Container>
            </section>
            <Footer />
        </main>
    );
}
