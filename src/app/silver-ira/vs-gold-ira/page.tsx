import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Scale,
    TrendingUp,
    Shield,
    DollarSign,
    Factory,
    Coins,
    BarChart3,
    Clock,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Silver IRA vs Gold IRA: Which Is Better for 2026?",
    description:
        "Silver IRA vs Gold IRA comparison. Understand the pros and cons of each metal, when to choose silver over gold, and how to allocate between them.",
    url: "https://www.richdadretirement.com/silver-ira/vs-gold-ira",
    imageAlt: "Silver IRA vs Gold IRA - Rich Dad Retirement",
});

const comparisonMetrics = [
    {
        metric: "Price Per Ounce",
        silver: "~$25-35",
        gold: "~$2,000-2,500",
        winner: "Depends",
        insight: "Silver's lower price allows buying more ounces for your dollar",
    },
    {
        metric: "Volatility",
        silver: "Higher",
        gold: "Lower",
        winner: "Gold",
        insight: "Gold is more stable; silver swings more in both directions",
    },
    {
        metric: "Growth Potential",
        silver: "Higher",
        gold: "Moderate",
        winner: "Silver",
        insight: "Silver typically outperforms gold in bull markets",
    },
    {
        metric: "Industrial Demand",
        silver: "~50% of supply",
        gold: "~10% of supply",
        winner: "Silver",
        insight: "Silver's industrial use creates dual demand drivers",
    },
    {
        metric: "Storage Costs",
        silver: "Higher per $ value",
        gold: "Lower per $ value",
        winner: "Gold",
        insight: "Same dollar amount of silver requires more storage space",
    },
    {
        metric: "Liquidity",
        silver: "Very Good",
        gold: "Excellent",
        winner: "Gold",
        insight: "Gold is more universally recognized as money",
    },
    {
        metric: "Inflation Hedge",
        silver: "Good",
        gold: "Excellent",
        winner: "Gold",
        insight: "Gold has a longer track record as inflation protection",
    },
    {
        metric: "IRS Purity Requirement",
        silver: ".999 fine",
        gold: ".995 fine",
        winner: "Tie",
        insight: "Similar purity requirements for both metals",
    },
];

const silverAdvantages = [
    {
        title: "Higher Growth Potential",
        description: "During the 2010-2011 bull market, silver rose over 400% while gold rose about 166%. Silver's smaller market means bigger percentage moves.",
        icon: TrendingUp,
    },
    {
        title: "Lower Entry Point",
        description: "At ~$30/oz vs ~$2,000+/oz for gold, silver allows investors to accumulate more ounces and build positions gradually.",
        icon: DollarSign,
    },
    {
        title: "Industrial Demand",
        description: "50%+ of silver demand comes from industry: solar panels, EVs, electronics, medical devices. This creates demand beyond investment.",
        icon: Factory,
    },
    {
        title: "Undervalued Ratio",
        description: "The gold-to-silver ratio (currently ~80:1) is historically high. It averaged 15:1 for centuries. Silver may be undervalued relative to gold.",
        icon: Scale,
    },
];

const goldAdvantages = [
    {
        title: "Stability & Safety",
        description: "Gold is less volatile and better for wealth preservation. It's the traditional 'safe haven' asset during economic uncertainty.",
        icon: Shield,
    },
    {
        title: "Lower Storage Costs",
        description: "Because gold is more valuable per ounce, the same dollar amount takes up 70x less space than silver, reducing storage fees.",
        icon: Coins,
    },
    {
        title: "Universal Recognition",
        description: "Gold is recognized as money worldwide. Central banks hold gold, not silver. This provides ultimate liquidity.",
        icon: BarChart3,
    },
    {
        title: "Longer Track Record",
        description: "Gold has been used as money for 5,000+ years. Its role as an inflation hedge is better established than silver's.",
        icon: Clock,
    },
];

const whenToChoose = [
    {
        scenario: "Choose SILVER When...",
        items: [
            "You have a longer time horizon (10+ years)",
            "You want higher growth potential",
            "You believe industrial demand will increase",
            "You want to accumulate more ounces gradually",
            "You think the gold-silver ratio will normalize",
            "You're comfortable with more volatility",
        ],
    },
    {
        scenario: "Choose GOLD When...",
        items: [
            "You're closer to retirement (5-10 years)",
            "Wealth preservation is your priority",
            "You want lower storage costs",
            "You prefer less volatile investments",
            "You need maximum liquidity",
            "You're protecting a larger portfolio",
        ],
    },
    {
        scenario: "Choose BOTH When...",
        items: [
            "You want diversification within precious metals",
            "You're unsure which will perform better",
            "You want stability + growth potential",
            "You're building a long-term position",
            "Most advisors recommend 60-75% gold, 25-40% silver",
        ],
    },
];

const allocationStrategies = [
    {
        strategy: "Conservative (70/30 Gold/Silver)",
        description: "Prioritizes stability with some growth exposure. Best for investors closer to retirement or those prioritizing wealth preservation.",
        riskLevel: "Lower",
    },
    {
        strategy: "Balanced (60/40 Gold/Silver)",
        description: "Equal emphasis on stability and growth. Popular choice for investors with 10-15 year horizons who want the best of both worlds.",
        riskLevel: "Moderate",
    },
    {
        strategy: "Aggressive (50/50 or more Silver)",
        description: "Maximizes growth potential. Best for younger investors or those who strongly believe in silver's upside potential.",
        riskLevel: "Higher",
    },
    {
        strategy: "100% Gold or Silver",
        description: "Single-metal focus. Only recommended if you have strong conviction about one metal's performance.",
        riskLevel: "Concentrated",
    },
];

const faqs = [
    {
        question: "Is silver better than gold for an IRA?",
        answer: "Neither is universally 'better' - they serve different purposes. Silver offers higher growth potential but more volatility. Gold provides stability and lower storage costs. Most experts recommend holding both, with the ratio depending on your risk tolerance and time horizon."
    },
    {
        question: "Can I hold both gold and silver in the same IRA?",
        answer: "Yes! A 'Gold IRA' or 'Silver IRA' are just marketing terms for a self-directed precious metals IRA. You can hold gold, silver, platinum, and palladium in the same account. Most investors choose a combination."
    },
    {
        question: "What is the gold-to-silver ratio and why does it matter?",
        answer: "The gold-to-silver ratio shows how many ounces of silver it takes to buy one ounce of gold. Historically, this averaged 15-20:1. Today it's around 80:1, suggesting silver is historically cheap relative to gold. When this ratio contracts, silver outperforms gold."
    },
    {
        question: "Which has higher storage costs - gold or silver?",
        answer: "Silver has higher storage costs per dollar invested. Because silver is ~70x less valuable per ounce than gold, $50,000 of silver weighs ~100 lbs vs. ~1 lb for gold. This requires more storage space and higher fees. Some investors balance this by holding more gold."
    },
    {
        question: "Which metal performs better during recessions?",
        answer: "Gold typically performs better during recessions because it's seen as a 'safe haven.' Silver, with its industrial demand component, can suffer when manufacturing slows. However, both usually outperform stocks and bonds during economic uncertainty."
    },
    {
        question: "Should beginners start with gold or silver?",
        answer: "Many advisors recommend beginners start with gold due to its stability, then add silver as they become more comfortable with precious metals. However, silver's lower price point makes it accessible for smaller initial investments."
    },
    {
        question: "How do premiums compare between gold and silver?",
        answer: "Silver typically has higher percentage premiums over spot price than gold. American Silver Eagles might carry 15-25% premiums, while American Gold Eagles have 3-5% premiums. This is partly because silver's lower price makes production costs a larger percentage."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver IRA vs Gold IRA: Which Is Better for 2026?",
    "description": "Comprehensive comparison of Silver IRAs and Gold IRAs, including pros and cons, allocation strategies, and guidance on choosing.",
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

export default function SilverVsGoldIraPage() {
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
                            <Scale className="h-4 w-4" />
                            METAL COMPARISON
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Silver IRA vs Gold IRA: Which Is Right for You?
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Both metals have their place in a diversified retirement portfolio. This guide compares the pros and cons of each to help you decide the right allocation for your situation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <Link href="/quiz">
                                    Get Personalized Advice <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Quick Comparison */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Head-to-Head Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                <thead className="bg-slate-800/50">
                                    <tr>
                                        <th className="p-4 border-b border-white/10 font-bold text-white">Factor</th>
                                        <th className="p-4 border-b border-white/10 font-bold text-slate-300">Silver IRA</th>
                                        <th className="p-4 border-b border-white/10 font-bold text-amber-400">Gold IRA</th>
                                        <th className="p-4 border-b border-white/10 font-bold text-white">Winner</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10 text-sm">
                                    {comparisonMetrics.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-slate-800/30'}>
                                            <td className="p-4 font-semibold text-white">{row.metric}</td>
                                            <td className="p-4 text-slate-300">{row.silver}</td>
                                            <td className="p-4 text-slate-300">{row.gold}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                    row.winner === 'Silver' ? 'bg-slate-500/20 text-slate-300' :
                                                    row.winner === 'Gold' ? 'bg-amber-500/20 text-amber-400' :
                                                    'bg-slate-600 text-slate-300'
                                                }`}>
                                                    {row.winner}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Advantages Sections */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Silver Advantages */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Coins className="h-6 w-6 text-slate-400" />
                                    Why Choose Silver
                                </h2>
                                <div className="space-y-4">
                                    {silverAdvantages.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className="bg-slate-500/10 border border-slate-500/30 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-5 w-5 text-slate-300" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-white">{item.title}</h3>
                                                        <p className="text-sm text-slate-400">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Gold Advantages */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Coins className="h-6 w-6 text-amber-400" />
                                    Why Choose Gold
                                </h2>
                                <div className="space-y-4">
                                    {goldAdvantages.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-10 h-10 bg-amber-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-5 w-5 text-amber-400" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-white">{item.title}</h3>
                                                        <p className="text-sm text-slate-400">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* When to Choose */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">When to Choose Each Metal</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {whenToChoose.map((section, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white text-lg mb-4">{section.scenario}</h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Allocation Strategies */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-4">Recommended Allocation Strategies</h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Most investors hold both metals. Here are common approaches.
                        </p>

                        <div className="space-y-4">
                            {allocationStrategies.map((item, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-white">{item.strategy}</h3>
                                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                                                    item.riskLevel === 'Lower' ? 'bg-green-500/20 text-green-400' :
                                                    item.riskLevel === 'Moderate' ? 'bg-amber-500/20 text-amber-400' :
                                                    item.riskLevel === 'Higher' ? 'bg-red-500/20 text-red-400' :
                                                    'bg-purple-500/20 text-purple-400'
                                                }`}>
                                                    {item.riskLevel} Risk
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                            <h4 className="font-bold text-amber-400 mb-2">Our Recommendation</h4>
                            <p className="text-slate-400">
                                For most investors, a <strong className="text-white">60/40 or 70/30 gold-to-silver split</strong> provides a good balance of stability and growth potential.
                                Adjust based on your age, risk tolerance, and market outlook. Those closer to retirement typically favor more gold.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Gold-Silver Ratio */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-slate-600/50 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">80:1</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">The Gold-to-Silver Ratio</h2>
                                    <p className="text-slate-400">Currently ~80 oz silver = 1 oz gold</p>
                                </div>
                            </div>
                            <div className="prose prose-lg max-w-none text-slate-300">
                                <p>
                                    The gold-to-silver ratio measures how many ounces of silver it takes to buy one ounce of gold.
                                    <strong className="text-white"> Historically, this ratio averaged 15-20:1.</strong> Today's ratio around 80:1
                                    suggests silver is historically cheap relative to gold.
                                </p>
                                <p>
                                    When this ratio contracts (returns toward historical norms), silver dramatically outperforms gold.
                                    During the 2010-2011 bull market, the ratio fell from ~70:1 to ~31:1, with silver rising over 400%.
                                </p>
                                <p className="text-amber-400">
                                    Some investors use this ratio to time their purchases - buying silver when the ratio is high (like now)
                                    and potentially rotating to gold if the ratio falls significantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Not Sure What Mix Is Right for You?</h2>
                        <p className="text-slate-400 mb-6">
                            Take our quiz to get personalized guidance based on your investment goals, timeline, and risk tolerance.
                        </p>
                        <Button variant="gold" size="lg" asChild>
                            <Link href="/quiz">
                                Get My Personalized Recommendation <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Silver vs Gold IRA FAQs</h2>
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

            {/* Related Pages */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Continue Your Research</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/companies" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA Companies</h3>
                            <p className="text-sm text-slate-400">Compare top Silver IRA providers.</p>
                        </Link>
                        <Link href="/best-gold-ira-companies" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Best Gold IRA Companies</h3>
                            <p className="text-sm text-slate-400">Compare top Gold IRA providers.</p>
                        </Link>
                        <Link href="/silver-ira/approved-coins" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">IRA Approved Silver</h3>
                            <p className="text-sm text-slate-400">Which silver products qualify for IRAs.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Get Expert Guidance on Gold & Silver Allocation"
                        subheadline="Augusta Precious Metals offers both gold and silver IRAs. Their specialists help you determine the right mix based on your goals, timeline, and risk tolerance."
                        trackSource="silver-vs-gold-ira"
                        linkContext="comparison"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
