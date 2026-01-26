import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Metadata } from "next";
import Link from "next/link";
import { Coins, SquareStack, Scale, CheckCircle2, AlertTriangle, ArrowRight, DollarSign, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Silver Coins vs Bars: Which is Better for Your IRA? (2026)",
    description: "Compare silver coins vs silver bars for your IRA. Learn the differences in premiums, liquidity, recognition, and which is better for your investment goals.",
    keywords: ["silver coins vs bars", "silver coins vs silver bars", "silver bars vs coins", "best silver to buy", "silver bullion comparison", "silver ira coins or bars"],
    openGraph: {
        title: "Silver Coins vs Bars: Which is Better for Your IRA?",
        description: "Compare silver coins vs silver bars for your investment. Premiums, liquidity, recognition, and IRA eligibility.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

// Comparison data
const comparisonFactors = [
    {
        factor: "Premiums",
        coins: "Higher (15-40% over spot)",
        bars: "Lower (5-15% over spot)",
        winner: "bars",
        note: "Bars give you more silver per dollar"
    },
    {
        factor: "Liquidity",
        coins: "Higher (easier to sell small amounts)",
        bars: "Lower (must sell full bar)",
        winner: "coins",
        note: "Coins easier to sell in any market"
    },
    {
        factor: "Recognition",
        coins: "Universal (especially sovereign coins)",
        bars: "Variable (depends on refiner)",
        winner: "coins",
        note: "American Eagles recognized worldwide"
    },
    {
        factor: "IRA Eligibility",
        coins: "Most .999 coins qualify",
        bars: "Must be from approved refiners",
        winner: "tie",
        note: "Both can be IRA-approved"
    },
    {
        factor: "Storage Efficiency",
        coins: "Less efficient (varied sizes)",
        bars: "More efficient (stackable)",
        winner: "bars",
        note: "Bars pack more tightly"
    },
    {
        factor: "Counterfeiting Risk",
        coins: "Lower (harder to counterfeit)",
        bars: "Higher (especially generic bars)",
        winner: "coins",
        note: "Sovereign coins have security features"
    },
    {
        factor: "Collectibility",
        coins: "Higher (numismatic potential)",
        bars: "Lower (pure bullion value)",
        winner: "coins",
        note: "Some coins have collector premiums"
    },
    {
        factor: "Best For Beginners",
        coins: "Recommended",
        bars: "After building foundation",
        winner: "coins",
        note: "Start with coins, add bars later"
    },
];

// Popular coin options
const popularCoins = [
    { name: "American Silver Eagle", purity: ".9993", premium: "25-40%", weight: "1 oz", note: "Most recognized, highest premium" },
    { name: "Canadian Silver Maple Leaf", purity: ".9999", premium: "15-25%", weight: "1 oz", note: "Highest purity, good value" },
    { name: "Austrian Silver Philharmonic", purity: ".999", premium: "15-20%", weight: "1 oz", note: "European option, lower premiums" },
    { name: "Australian Silver Kangaroo", purity: ".9999", premium: "15-25%", weight: "1 oz", note: "Perth Mint quality" },
    { name: "British Silver Britannia", purity: ".999", premium: "15-20%", weight: "1 oz", note: "Royal Mint, security features" },
];

// Popular bar options
const popularBars = [
    { name: "1 oz Silver Bars", premium: "10-15%", use: "Beginners, small purchases" },
    { name: "10 oz Silver Bars", premium: "8-12%", use: "Regular stackers, balance of liquidity/premium" },
    { name: "100 oz Silver Bars", premium: "5-8%", use: "Serious investors, lowest premiums" },
    { name: "1 Kilo Silver Bars", premium: "6-10%", use: "International standard, good value" },
];

// FAQs
const faqs = [
    {
        question: "Are silver coins or bars better for beginners?",
        answer: "Silver coins are better for beginners. Sovereign mint coins like American Silver Eagles and Canadian Maple Leafs are universally recognized, highly liquid, and harder to counterfeit. While premiums are higher, the liquidity and recognition are worth it when you're building your foundation. Once you have 50-100 oz in coins, consider adding bars for lower premiums."
    },
    {
        question: "Do silver bars or coins have better resale value?",
        answer: "Sovereign coins typically sell closer to spot price and are easier to sell. Coins from government mints (US, Canada, UK, Austria) command consistent premiums and can be sold anywhere. Bars may sell at a slight discount if they're from less-recognized refiners. However, well-known bars (PAMP Suisse, Johnson Matthey) hold their value well."
    },
    {
        question: "Which has lower premiums - coins or bars?",
        answer: "Silver bars have lower premiums, especially larger bars. A 100 oz bar might carry a 5-8% premium over spot, while American Silver Eagles typically carry 25-40% premiums. However, the lower premium comes at the cost of reduced liquidity - you must sell the entire bar at once."
    },
    {
        question: "Can both coins and bars be held in an IRA?",
        answer: "Yes, both IRA-approved coins and bars can be held in a Silver IRA. Coins must be from sovereign mints and .999+ fine (American Eagles are .9993). Bars must be .999 fine from NYMEX/COMEX-approved refiners or national mints. Your IRA custodian can advise on specific products."
    },
    {
        question: "What's the best mix of coins and bars?",
        answer: "A common approach: Start with 100% coins to build a liquid foundation (first 50-100 oz). Then transition to 70% coins / 30% bars for balance. Experienced stackers with larger holdings might go 50/50 or even bar-heavy to minimize premiums. The right mix depends on your goals and timeline."
    },
];

// Schema markup
const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver Coins vs Bars: Which is Better for Your IRA?",
            "description": "Compare silver coins vs silver bars for your IRA. Learn the differences in premiums, liquidity, recognition, and which is better for your investment goals.",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25"
        },
        {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export default function SilverCoinsVsBarsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            <div className="flex-grow">
                {/* Hero */}
                <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                    </div>
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-slate-300 font-bold tracking-widest uppercase text-xs mb-4">
                                <Scale className="h-4 w-4" />
                                Silver Comparison
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                                Silver Coins vs Bars
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                You&apos;ve saved for decades. Now you want real assets you can hold—not just numbers on a screen. But should you buy coins or bars? Here&apos;s the straight answer from people who aren&apos;t trying to sell you something you don&apos;t need.
                            </p>
                        </div>
                    </Container>
                </header>

                {/* Quick Answer */}
                <section className="py-12 bg-amber-500/10 border-y border-amber-500/30">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-xl font-bold text-amber-400 mb-4">Quick Answer</h2>
                            <p className="text-slate-300">
                                <strong className="text-white">Silver coins</strong> are better for beginners and liquidity. <strong className="text-white">Silver bars</strong> are better for lower premiums and serious stackers. <strong className="text-white">Most investors should own both</strong>—coins for their foundation, bars for efficiency.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Visual Comparison */}
                <section className="py-16">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Coins */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-amber-500/20 rounded-xl">
                                        <Coins className="w-8 h-8 text-amber-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Silver Coins</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Higher liquidity</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Universal recognition</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Harder to counterfeit</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Best for beginners</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                        <span className="text-slate-300">Higher premiums (15-40%)</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-lg p-4 text-sm">
                                    <span className="text-amber-400 font-bold">Best For:</span>
                                    <span className="text-slate-300"> Building your first 50-100 oz, maximum liquidity, easy selling</span>
                                </div>
                            </div>

                            {/* Bars */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-slate-400/20 rounded-xl">
                                        <SquareStack className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Silver Bars</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Lower premiums (5-15%)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">More oz per dollar</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Efficient storage</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">Best for large positions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                        <span className="text-slate-300">Less liquid (sell whole bar)</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-lg p-4 text-sm">
                                    <span className="text-amber-400 font-bold">Best For:</span>
                                    <span className="text-slate-300"> Experienced stackers, large purchases, minimizing premiums</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Detailed Comparison Table */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Complete Comparison</h2>

                        <div className="overflow-x-auto max-w-4xl mx-auto">
                            <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-4 font-bold text-amber-400">Factor</th>
                                        <th className="text-left p-4 font-bold text-amber-400">Coins</th>
                                        <th className="text-left p-4 font-bold text-amber-400">Bars</th>
                                        <th className="text-left p-4 font-bold text-amber-400">Winner</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10 text-sm">
                                    {comparisonFactors.map((item, index) => (
                                        <tr key={index}>
                                            <td className="p-4 font-semibold text-white">{item.factor}</td>
                                            <td className="p-4 text-slate-300">{item.coins}</td>
                                            <td className="p-4 text-slate-300">{item.bars}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                    item.winner === 'coins' ? 'bg-amber-500/20 text-amber-400' :
                                                    item.winner === 'bars' ? 'bg-slate-400/20 text-slate-300' :
                                                    'bg-white/10 text-slate-400'
                                                }`}>
                                                    {item.winner === 'coins' ? 'Coins' : item.winner === 'bars' ? 'Bars' : 'Tie'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Container>
                </section>

                {/* Popular Options */}
                <section className="py-16">
                    <Container>
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Popular Options</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Popular Coins */}
                                <div>
                                    <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                        <Coins className="w-5 h-5" /> Top IRA-Approved Coins
                                    </h3>
                                    <div className="space-y-3">
                                        {popularCoins.map((coin, index) => (
                                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-bold text-white">{coin.name}</span>
                                                    <span className="text-amber-400 text-sm">{coin.premium}</span>
                                                </div>
                                                <div className="flex gap-4 text-xs text-slate-400">
                                                    <span>Purity: {coin.purity}</span>
                                                    <span>Weight: {coin.weight}</span>
                                                </div>
                                                <p className="text-xs text-slate-500 mt-2">{coin.note}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Popular Bars */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                                        <SquareStack className="w-5 h-5" /> Top IRA-Approved Bars
                                    </h3>
                                    <div className="space-y-3">
                                        {popularBars.map((bar, index) => (
                                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-bold text-white">{bar.name}</span>
                                                    <span className="text-green-400 text-sm">{bar.premium}</span>
                                                </div>
                                                <p className="text-sm text-slate-400">{bar.use}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-xs text-slate-500">
                                        Top refiners: PAMP Suisse, Credit Suisse, Johnson Matthey, Sunshine Mint, Royal Canadian Mint
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Strategy Recommendation */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6 text-center">Recommended Strategy</h2>
                            <p className="text-slate-300 text-center mb-8">
                                Most successful silver investors use a tiered approach, starting with coins and adding bars as their stack grows.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 rounded-full bg-green-400 text-slate-900 flex items-center justify-center font-bold">1</span>
                                        <h4 className="font-bold text-green-400">Foundation (0-100 oz): 100% Coins</h4>
                                    </div>
                                    <p className="text-slate-300 text-sm ml-11">
                                        Start with sovereign mint coins like American Eagles or Canadian Maple Leafs. Maximum liquidity while you learn the market.
                                    </p>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 rounded-full bg-blue-400 text-slate-900 flex items-center justify-center font-bold">2</span>
                                        <h4 className="font-bold text-blue-400">Growth (100-500 oz): 70% Coins / 30% Bars</h4>
                                    </div>
                                    <p className="text-slate-300 text-sm ml-11">
                                        Add 10 oz bars to reduce premiums while maintaining coin liquidity. Consider generic rounds for even lower premiums.
                                    </p>
                                </div>

                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold">3</span>
                                        <h4 className="font-bold text-amber-400">Advanced (500+ oz): 50% Coins / 50% Bars</h4>
                                    </div>
                                    <p className="text-slate-300 text-sm ml-11">
                                        Add 100 oz bars and monster boxes (500 coins) for lowest premiums. Your coin foundation provides liquidity; bars maximize ounces.
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm text-center mt-6">
                                Learn more in our <Link href="/guide/silver-stacking" className="text-amber-400 hover:underline">Silver Stacking Guide</Link>.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* FAQs */}
                <section className="py-16">
                    <Container>
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

                        <div className="max-w-3xl mx-auto space-y-4">
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
                    </Container>
                </section>

                {/* Related */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Resources</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <Link href="/guide/ira-approved-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">IRA-Approved Silver</h3>
                                <p className="text-sm text-slate-400">Full list of coins & bars that qualify.</p>
                            </Link>
                            <Link href="/best-silver-ira-companies" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Best Silver IRA Companies</h3>
                                <p className="text-sm text-slate-400">Compare top providers for 2026.</p>
                            </Link>
                            <Link href="/guide/silver-stacking" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Silver Stacking Guide</h3>
                                <p className="text-sm text-slate-400">Build your silver position over time.</p>
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="silver"
                            headline="Ready to Start Your Silver IRA?"
                            subheadline="Augusta Precious Metals offers both silver coins and bars at competitive premiums. Get expert guidance on building your silver portfolio."
                            trackSource="silver-coins-vs-bars"
                        />
                    </Container>
                </section>
            </div>

            <Footer />
        </main>
    );
}
