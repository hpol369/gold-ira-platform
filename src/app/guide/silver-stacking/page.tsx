import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { Metadata } from "next";
import Link from "next/link";
import { Coins, Target, Scale, ShieldCheck, TrendingUp, ArrowRight, CheckCircle2, AlertTriangle, Layers, Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Silver Stacking Guide 2026: How to Build Your Silver Stack",
    description: "Complete silver stacking guide for beginners. Learn the best silver to stack, stacking strategies, premiums, and how to grow your silver holdings over time.",
    keywords: ["silver stacking", "silver stacking guide", "how to stack silver", "best silver to stack", "silver stacker", "stacking silver coins", "silver stacking tips"],
    openGraph: {
        title: "Silver Stacking Guide 2026: How to Build Your Silver Stack",
        description: "Complete guide to silver stacking for beginners. Best silver to stack, strategies, and tips.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const tocItems = [
    { id: "what-is-stacking", label: "What Is Silver Stacking?" },
    { id: "why-stack", label: "Why Stack Silver?" },
    { id: "best-silver", label: "Best Silver to Stack" },
    { id: "strategies", label: "Stacking Strategies" },
    { id: "premiums", label: "Understanding Premiums" },
    { id: "storage", label: "Storage Options" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "silver-ira", label: "Silver Stacking in an IRA" },
    { id: "faq", label: "FAQs" },
];

const stackingTiers = [
    {
        tier: "Foundation",
        ounces: "0-100 oz",
        focus: "Government-minted coins",
        products: ["American Silver Eagles", "Canadian Silver Maple Leafs", "Austrian Silver Philharmonics"],
        reason: "Highest liquidity and recognition. Easiest to sell anywhere.",
        color: "blue",
    },
    {
        tier: "Growth",
        ounces: "100-500 oz",
        focus: "Mix of coins and generic rounds/bars",
        products: ["Sovereign coins", "Generic rounds", "1-10 oz bars from reputable mints"],
        reason: "Balance liquidity with lower premiums to accelerate stacking.",
        color: "green",
    },
    {
        tier: "Advanced",
        ounces: "500+ oz",
        focus: "Larger bars for efficiency",
        products: ["100 oz silver bars", "1 kilo silver bars", "Monster boxes (500 coins)"],
        reason: "Lowest premiums per ounce. Best for serious stackers.",
        color: "amber",
    },
];

const commonMistakes = [
    {
        mistake: "Chasing Numismatics Too Early",
        description: "Collectible coins carry huge premiums that may never be recovered. Stack bullion first, collect later.",
    },
    {
        mistake: "Ignoring Premiums",
        description: "A $5 premium on a $25 coin means you need silver to rise 20% just to break even. Compare premiums carefully.",
    },
    {
        mistake: "Buying Only One Type",
        description: "Diversify between coins and bars. Different products serve different purposes (liquidity vs. efficiency).",
    },
    {
        mistake: "Telling Everyone",
        description: "Operational security matters. Don't advertise your stack on social media or to casual acquaintances.",
    },
    {
        mistake: "Poor Storage",
        description: "Silver tarnishes when exposed to air and humidity. Use proper containers, tubes, or capsules.",
    },
    {
        mistake: "No Exit Strategy",
        description: "Know how and where you'll sell before you buy. Local coin shops, online dealers, and private sales all have different spreads.",
    },
];

const faqs = [
    {
        question: "What is silver stacking?",
        answer: "Silver stacking is the practice of systematically accumulating physical silver over time, typically in the form of coins, rounds, and bars. 'Stackers' buy silver regularly, often dollar-cost averaging, to build a position in the metal as a store of value, inflation hedge, or alternative currency."
    },
    {
        question: "What is the best silver to stack for beginners?",
        answer: "For beginners, we recommend starting with government-minted bullion coins like American Silver Eagles or Canadian Silver Maple Leafs. They carry slightly higher premiums but offer maximum liquidity and are recognized worldwide. Once you have a foundation of 50-100 oz, you can diversify into lower-premium generic rounds and bars."
    },
    {
        question: "How much silver should I stack?",
        answer: "There's no single right answer, but many stackers aim for 100-500 oz as a meaningful position. Some financial advisors suggest 10-20% of your portfolio in precious metals (gold and silver combined). Start with what you can afford without impacting your financial security, and add consistently over time."
    },
    {
        question: "Should I stack silver coins or bars?",
        answer: "Both have advantages. Coins (especially sovereign mint coins) are more liquid and easier to sell in small amounts. Bars have lower premiums, especially larger bars (10 oz, 100 oz). Most experienced stackers hold both—coins for liquidity and bars for efficient accumulation."
    },
    {
        question: "What premiums are reasonable for silver?",
        answer: "As of 2026, reasonable premiums are: generic rounds/bars 8-15% over spot, sovereign coins like Maple Leafs 15-25% over spot, and American Silver Eagles 25-40% over spot (Eagles carry higher premiums due to US government backing and collector demand). During silver shortages, premiums can spike much higher."
    },
    {
        question: "Where should I store my silver stack?",
        answer: "Options include home storage (safe or hidden location), bank safe deposit box, or professional vault storage. Home storage gives you immediate access but carries theft risk. Safe deposit boxes are secure but may not be insured for bullion. Professional vaults offer insurance and security but have fees. Many stackers split their holdings across multiple locations."
    },
    {
        question: "Can I stack silver in an IRA?",
        answer: "Yes! A Silver IRA allows you to hold physical silver in a tax-advantaged retirement account. The silver must meet IRS purity requirements (.999 fine) and be stored in an approved depository. This combines the benefits of silver stacking with retirement tax benefits. You can even roll over an existing 401(k) or IRA into a Silver IRA."
    },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver Stacking Guide 2026: How to Build Your Silver Stack",
            "description": "Complete silver stacking guide for beginners. Learn the best silver to stack, stacking strategies, premiums, and how to grow your silver holdings over time.",
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

export default function SilverStackingGuidePage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            <div className="flex-grow">
                {/* Hero Header */}
                <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]" />
                    </div>
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-slate-300 font-bold tracking-widest uppercase text-xs mb-4">
                                <Layers className="h-4 w-4" />
                                Beginner&apos;s Guide
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                                Silver Stacking Guide
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                The complete guide to building your silver stack. Learn what to buy, how much to pay, and strategies for accumulating silver over time.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <Coins className="h-4 w-4 text-slate-300" />
                                    <span>Physical Silver</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <Target className="h-4 w-4 text-green-400" />
                                    <span>Low Premium Focus</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <TrendingUp className="h-4 w-4 text-amber-400" />
                                    <span>Long-Term Strategy</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        {/* Sidebar */}
                        <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                            <TableOfContents items={tocItems} />
                        </aside>

                        {/* Content */}
                        <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                            {/* What Is Stacking */}
                            <section id="what-is-stacking" className="scroll-mt-32">
                                <h2>What Is Silver Stacking?</h2>
                                <p>
                                    <strong>Silver stacking</strong> is the practice of systematically accumulating physical silver over time. Unlike trading or speculation, stacking is about building a position in real, tangible metal that you own outright.
                                </p>
                                <p>
                                    The term &quot;stacking&quot; comes from the literal act of stacking silver coins, rounds, and bars. Stackers typically buy regularly—whether weekly, monthly, or whenever prices dip—to dollar-cost average into their position.
                                </p>
                                <p>
                                    The silver stacking community has grown significantly, with stackers viewing their silver as:
                                </p>
                                <ul>
                                    <li>A store of value outside the banking system</li>
                                    <li>An inflation hedge and insurance policy</li>
                                    <li>Real money that has held value for thousands of years</li>
                                    <li>A tangible asset they can hold in their hands</li>
                                </ul>
                            </section>

                            {/* Why Stack */}
                            <section id="why-stack" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4 not-prose">
                                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Why Stack Silver?</h2>
                                </div>
                                <p>
                                    Stackers are motivated by various factors, but several themes are common:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <Scale className="w-8 h-8 text-amber-400 mb-4" />
                                        <h4 className="font-bold text-white text-lg mb-2">Undervalued vs Gold</h4>
                                        <p className="text-sm text-slate-400">The silver-to-gold ratio suggests silver is historically cheap compared to gold. Many stackers believe silver has more upside potential.</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                                        <h4 className="font-bold text-white text-lg mb-2">No Counterparty Risk</h4>
                                        <p className="text-sm text-slate-400">Physical silver isn&apos;t someone else&apos;s liability. It can&apos;t be defaulted on, hacked, or frozen by a third party.</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                                        <h4 className="font-bold text-white text-lg mb-2">Industrial Demand</h4>
                                        <p className="text-sm text-slate-400">Over 50% of silver is used in industry. Solar panels, electronics, and EVs all require silver—and demand is growing.</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                        <Coins className="w-8 h-8 text-slate-300 mb-4" />
                                        <h4 className="font-bold text-white text-lg mb-2">Affordable Entry</h4>
                                        <p className="text-sm text-slate-400">Unlike gold, you can start stacking silver with $50-100. It&apos;s accessible to virtually anyone.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Best Silver to Stack */}
                            <section id="best-silver" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4 not-prose">
                                    <div className="p-3 bg-slate-400/20 rounded-lg text-slate-300">
                                        <Coins className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Best Silver to Stack</h2>
                                </div>
                                <p>
                                    Not all silver is created equal for stacking purposes. Your focus should evolve as your stack grows:
                                </p>

                                <div className="space-y-6 not-prose my-8">
                                    {stackingTiers.map((tier) => (
                                        <div
                                            key={tier.tier}
                                            className={`p-6 rounded-xl bg-${tier.color}-500/10 border border-${tier.color}-500/30`}
                                            style={{
                                                backgroundColor: tier.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' :
                                                                tier.color === 'green' ? 'rgba(34, 197, 94, 0.1)' :
                                                                'rgba(245, 158, 11, 0.1)',
                                                borderColor: tier.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                                                            tier.color === 'green' ? 'rgba(34, 197, 94, 0.3)' :
                                                            'rgba(245, 158, 11, 0.3)'
                                            }}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-${tier.color}-400 font-bold text-lg`} style={{
                                                        color: tier.color === 'blue' ? 'rgb(96, 165, 250)' :
                                                               tier.color === 'green' ? 'rgb(74, 222, 128)' :
                                                               'rgb(251, 191, 36)'
                                                    }}>
                                                        {tier.tier} Tier
                                                    </span>
                                                    <span className="text-slate-400 text-sm">({tier.ounces})</span>
                                                </div>
                                                <span className="text-white font-medium">{tier.focus}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tier.products.map((product, idx) => (
                                                    <span key={idx} className="bg-white/10 text-slate-300 px-3 py-1 rounded-full text-sm">
                                                        {product}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-slate-400 text-sm">{tier.reason}</p>
                                        </div>
                                    ))}
                                </div>

                                <p>
                                    Learn more about which silver qualifies for IRAs in our <Link href="/guide/ira-approved-silver">IRA-Approved Silver Guide</Link>.
                                </p>
                            </section>

                            {/* Stacking Strategies */}
                            <section id="strategies" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4 not-prose">
                                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Stacking Strategies</h2>
                                </div>

                                <h3>Dollar-Cost Averaging (DCA)</h3>
                                <p>
                                    The most popular stacking strategy. Buy a fixed dollar amount of silver regularly (weekly, bi-weekly, or monthly) regardless of price. This averages out your cost basis over time and removes the stress of timing the market.
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 not-prose mb-6">
                                    <p className="text-sm text-slate-400">
                                        <strong className="text-white">Example:</strong> Invest $200/month in silver. When silver is $25/oz, you get 8 oz. When it&apos;s $20/oz, you get 10 oz. Over time, your average cost smooths out.
                                    </p>
                                </div>

                                <h3>Buy the Dip</h3>
                                <p>
                                    Keep cash on the sidelines and buy when silver prices drop significantly. This requires patience and discipline, but can result in a lower average cost if you time dips correctly.
                                </p>

                                <h3>Premium Hunting</h3>
                                <p>
                                    Focus on finding the lowest premiums rather than timing spot price. Compare prices across dealers, watch for sales, and consider &quot;generic&quot; rounds and bars from reputable private mints.
                                </p>

                                <h3>Ratio Trading</h3>
                                <p>
                                    Use the silver-to-gold ratio to guide purchases. When the ratio is high (silver cheap vs gold), buy silver. When the ratio falls, you might trade some silver for gold. This is an advanced strategy.
                                </p>
                            </section>

                            {/* Understanding Premiums */}
                            <section id="premiums" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4 not-prose">
                                    <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                        <Calculator className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Understanding Premiums</h2>
                                </div>
                                <p>
                                    The <strong>premium</strong> is the markup over the spot price of silver. It covers minting costs, dealer margins, and market demand. Premiums vary significantly by product type:
                                </p>

                                <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white mb-4">Typical Silver Premiums (2026)</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">100 oz Silver Bars</span>
                                            <span className="text-green-400 font-bold">5-10% over spot</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">10 oz Silver Bars</span>
                                            <span className="text-green-400 font-bold">8-12% over spot</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Generic Rounds (1 oz)</span>
                                            <span className="text-green-400 font-bold">10-15% over spot</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Canadian Maple Leafs</span>
                                            <span className="text-amber-400 font-bold">15-25% over spot</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">American Silver Eagles</span>
                                            <span className="text-red-400 font-bold">25-40% over spot</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-4">*Premiums fluctuate based on market conditions and silver availability</p>
                                </div>

                                <p>
                                    <strong>Key insight:</strong> You need silver to rise by your premium percentage just to break even. A $5 premium on $25 silver means you need a 20% price increase before you&apos;re in profit. This is why premium-conscious stackers focus on lower-premium products.
                                </p>
                            </section>

                            {/* Mid-article CTA */}
                            <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose border border-white/10">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Stack Silver With Tax Advantages</h3>
                                    <p className="mb-6 text-slate-300">A Silver IRA lets you build your silver stack inside a tax-advantaged retirement account.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/best-silver-ira-companies">Compare Silver IRA Companies <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Storage */}
                            <section id="storage" className="scroll-mt-32">
                                <h2>Storage Options</h2>
                                <p>
                                    Where you store your silver stack is a critical decision. Each option has trade-offs:
                                </p>

                                <div className="space-y-4 not-prose my-8">
                                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                        <h4 className="font-bold text-white mb-2">Home Storage</h4>
                                        <p className="text-sm text-slate-400 mb-3">Keep your silver in a safe, hidden location, or fireproof safe at home.</p>
                                        <div className="flex flex-wrap gap-4 text-xs">
                                            <span className="flex items-center gap-1 text-green-400"><CheckCircle2 className="h-3 w-3" /> Immediate access</span>
                                            <span className="flex items-center gap-1 text-green-400"><CheckCircle2 className="h-3 w-3" /> No storage fees</span>
                                            <span className="flex items-center gap-1 text-red-400"><AlertTriangle className="h-3 w-3" /> Theft risk</span>
                                            <span className="flex items-center gap-1 text-red-400"><AlertTriangle className="h-3 w-3" /> May not be insured</span>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                        <h4 className="font-bold text-white mb-2">Bank Safe Deposit Box</h4>
                                        <p className="text-sm text-slate-400 mb-3">Rent a box at your local bank to store your silver.</p>
                                        <div className="flex flex-wrap gap-4 text-xs">
                                            <span className="flex items-center gap-1 text-green-400"><CheckCircle2 className="h-3 w-3" /> Bank-level security</span>
                                            <span className="flex items-center gap-1 text-green-400"><CheckCircle2 className="h-3 w-3" /> Low annual cost</span>
                                            <span className="flex items-center gap-1 text-red-400"><AlertTriangle className="h-3 w-3" /> Limited access hours</span>
                                            <span className="flex items-center gap-1 text-red-400"><AlertTriangle className="h-3 w-3" /> Not FDIC insured</span>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                        <h4 className="font-bold text-white mb-2">Professional Vault Storage</h4>
                                        <p className="text-sm text-slate-400 mb-3">Third-party vaults like Delaware Depository, Brinks, or IDS of Texas.</p>
                                        <div className="flex flex-wrap gap-4 text-xs">
                                            <span className="flex items-center gap-1 text-green-400"><CheckCircle2 className="h-3 w-3" /> Fully insured</span>
                                            <span className="flex items-center gap-1 text-green-400"><CheckCircle2 className="h-3 w-3" /> Required for IRAs</span>
                                            <span className="flex items-center gap-1 text-red-400"><AlertTriangle className="h-3 w-3" /> Annual fees (0.5-1%)</span>
                                            <span className="flex items-center gap-1 text-red-400"><AlertTriangle className="h-3 w-3" /> No physical access</span>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Many stackers use a combination: some silver at home for immediate access, with larger holdings in professional storage for security and insurance.
                                </p>
                            </section>

                            {/* Common Mistakes */}
                            <section id="mistakes" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4 not-prose">
                                    <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Common Stacking Mistakes</h2>
                                </div>

                                <div className="space-y-4 not-prose my-8">
                                    {commonMistakes.map((item, index) => (
                                        <div key={index} className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                                            <h4 className="font-bold text-red-400 mb-1">{item.mistake}</h4>
                                            <p className="text-sm text-slate-400">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Silver IRA */}
                            <section id="silver-ira" className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4 not-prose">
                                    <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Silver Stacking in an IRA</h2>
                                </div>
                                <p>
                                    For retirement-focused stackers, a Silver IRA combines the benefits of physical silver ownership with tax-advantaged growth:
                                </p>
                                <ul>
                                    <li><strong>Tax-deferred growth:</strong> No capital gains taxes as your silver appreciates (Traditional IRA)</li>
                                    <li><strong>Tax-free growth:</strong> All gains and withdrawals tax-free (Roth IRA)</li>
                                    <li><strong>Roll over existing retirement funds:</strong> Convert 401k or IRA to silver without penalties</li>
                                    <li><strong>Professional storage:</strong> Silver stored in IRS-approved, insured depositories</li>
                                </ul>
                                <p>
                                    The main difference from personal stacking is that IRA silver must meet IRS purity requirements and be stored in an approved depository—you can&apos;t keep IRA silver at home.
                                </p>
                                <p>
                                    Learn more: <Link href="/guide/silver-ira-guide">Silver IRA Guide</Link> | <Link href="/guide/silver-ira-rollover">Silver IRA Rollover</Link>
                                </p>
                            </section>

                            {/* FAQ */}
                            <section id="faq" className="scroll-mt-32">
                                <h2>Frequently Asked Questions</h2>

                                <div className="space-y-4 not-prose">
                                    {faqs.map((faq, index) => (
                                        <details
                                            key={index}
                                            className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
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
                            </section>

                            {/* Author */}
                            <AuthorBox />

                        </article>
                    </div>
                </Container>

                {/* Related Content */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Continue Your Silver Journey</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <Link href="/learn/is-silver-a-good-investment" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Is Silver a Good Investment?</h3>
                                <p className="text-sm text-slate-400">Analysis of silver&apos;s investment potential in 2026.</p>
                            </Link>
                            <Link href="/guide/ira-approved-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">IRA-Approved Silver</h3>
                                <p className="text-sm text-slate-400">Which silver qualifies for retirement accounts.</p>
                            </Link>
                            <Link href="/best-silver-ira-companies" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Best Silver IRA Companies</h3>
                                <p className="text-sm text-slate-400">Compare top silver IRA providers.</p>
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* Augusta CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="silver"
                            headline="Ready to Stack Silver in a Tax-Advantaged Account?"
                            subheadline="Augusta Precious Metals offers transparent silver pricing and expert guidance for Silver IRA investors. Get started with a free consultation."
                            trackSource="silver-stacking-guide"
                        />
                    </Container>
                </section>
            </div>

            <Footer />
        </main>
    );
}
