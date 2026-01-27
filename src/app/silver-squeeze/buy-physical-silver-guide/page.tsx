import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import {
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    Shield,
    Coins,
    Building2,
    DollarSign,
    Package,
    Lock,
    TrendingUp,
    Scale,
    Store,
    Globe,
    Warehouse,
    BadgeAlert,
    ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "How to Buy Physical Silver: Complete 2026 Guide | Silver Investment",
    description: "Learn how to buy physical silver in 2026. Understand silver premiums over spot, compare silver coins vs bars, find the best places to buy, and avoid common pitfalls.",
    keywords: [
        "buy physical silver",
        "silver premium over spot",
        "silver coin premium",
        "how to buy silver",
        "physical silver investment",
        "silver bars vs coins",
        "silver bullion guide",
        "silver IRA",
    ],
    openGraph: {
        title: "How to Buy Physical Silver: Complete 2026 Guide",
        description: "Everything you need to know about buying physical silver in 2026 - from understanding premiums to choosing the right products and dealers.",
        type: "article",
    },
};

const tocItems = [
    { id: "why-physical-silver", label: "Why Buy Physical Silver" },
    { id: "types-of-silver", label: "Types of Silver to Buy" },
    { id: "understanding-premiums", label: "Understanding Premiums" },
    { id: "best-products", label: "Best Silver Products" },
    { id: "where-to-buy", label: "Where to Buy" },
    { id: "premium-limits", label: "How Much Premium Is Too Much?" },
    { id: "storage-options", label: "Storage Options" },
    { id: "silver-in-ira", label: "Buying Silver in Your IRA" },
    { id: "red-flags", label: "Red Flags to Avoid" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Buy Physical Silver: Complete 2026 Guide",
    description: "Comprehensive guide to buying physical silver in 2026, covering types of silver, understanding premiums over spot, best products for investment, where to buy, storage options, and red flags to avoid.",
    image: "https://www.richdadretirement.com/images/buy-physical-silver.jpg",
    datePublished: "2026-01-15",
    dateModified: "2026-01-27",
    author: {
        "@type": "Person",
        name: "Thomas Richardson",
        jobTitle: "Precious Metals Investment Specialist",
        description: "30+ years experience in precious metals investing and retirement planning"
    },
    publisher: {
        "@type": "Organization",
        name: "Rich Dad Retirement",
        logo: {
            "@type": "ImageObject",
            url: "https://www.richdadretirement.com/logo.png"
        }
    },
    mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is a good premium to pay for silver?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A reasonable premium depends on the product type. Generic silver bars typically carry 3-8% premiums, silver rounds 5-10%, and government-minted coins like American Silver Eagles can carry 15-30% premiums. During normal market conditions, lower is generally better for investment purposes."
                }
            },
            {
                "@type": "Question",
                name: "Should I buy silver coins or bars?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For pure investment purposes, silver bars offer the most silver per dollar due to lower premiums. However, government-minted coins offer superior liquidity, recognition, and potential numismatic value. Most experts recommend a mix of both."
                }
            },
            {
                "@type": "Question",
                name: "Can I buy physical silver for my IRA?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can hold physical silver in a self-directed IRA, also known as a Silver IRA. The silver must meet IRS purity requirements (99.9% pure) and be stored at an IRS-approved depository. You cannot store IRA silver at home."
                }
            },
            {
                "@type": "Question",
                name: "Is it better to buy silver online or locally?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Online dealers typically offer lower premiums and better selection, while local coin shops allow you to inspect products and avoid shipping. Many experienced silver stackers use both - online for bulk purchases and local shops for smaller, opportunistic buys."
                }
            }
        ]
    }
};

export default function BuyPhysicalSilverGuidePage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            {/* Hero Header */}
            <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-400/10 px-4 py-1.5 text-sm font-semibold text-slate-300 mb-6 border border-slate-400/20">
                            <Coins className="w-4 h-4" />
                            Silver Squeeze Hub
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            How to Buy Physical Silver: Complete 2026 Guide
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Master the art of buying physical silver. Learn to navigate premiums, choose the right products, find reputable dealers, and protect yourself from common scams.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (TOC) */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-400 prose-a:text-amber-400 max-w-none">

                        {/* Intro Content */}
                        <p className="lead text-xl text-slate-300">
                            With silver prices volatile and premiums at historic highs, knowing <strong>how to buy physical silver</strong> smartly has never been more important. This guide will teach you everything from understanding <strong>silver premiums over spot</strong> to identifying the best products for your investment goals.
                        </p>

                        <p>
                            Whether you&apos;re a first-time buyer or expanding your stack, the silver market in 2026 presents unique opportunities and challenges. The ongoing <Link href="/silver-squeeze">silver squeeze</Link> has pushed retail demand to record levels, creating tight supplies and elevated premiums. But with the right knowledge, you can still build your silver position efficiently.
                        </p>

                        {/* Section 1: Why Buy Physical Silver */}
                        <section id="why-physical-silver" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Shield className="w-8 h-8 text-slate-400" />
                                Why Buy Physical Silver (vs. Paper)
                            </h2>

                            <p>
                                The first decision any silver investor faces: physical metal or paper alternatives like ETFs, futures, or mining stocks? While paper silver has its place, <strong>physical silver offers unique advantages</strong> that paper simply cannot replicate.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-slate-400/10 backdrop-blur-sm border border-slate-400/20">
                                    <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">No Counterparty Risk</h4>
                                    <p className="text-sm text-slate-400">Physical silver in your possession doesn&apos;t depend on any institution&apos;s solvency. Unlike ETF shares or futures contracts, your silver remains yours regardless of market conditions.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-400/10 backdrop-blur-sm border border-slate-400/20">
                                    <Lock className="w-8 h-8 text-green-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">True Ownership</h4>
                                    <p className="text-sm text-slate-400">When you hold physical silver, you have absolute ownership. No terms of service, no account restrictions, no potential for rehypothecation.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-400/10 backdrop-blur-sm border border-slate-400/20">
                                    <Globe className="w-8 h-8 text-green-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Universal Value</h4>
                                    <p className="text-sm text-slate-400">Silver has been money for 5,000 years. Physical silver is recognized and valued worldwide, independent of any government or currency system.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-400/10 backdrop-blur-sm border border-slate-400/20">
                                    <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                                    <h4 className="font-bold text-white text-lg mb-2">Supply Squeeze Exposure</h4>
                                    <p className="text-sm text-slate-400">Physical silver buyers directly impact available supply. During the <Link href="/silver-squeeze" className="text-amber-400 hover:underline">silver squeeze</Link>, physical demand has exposed the disconnect between paper and physical markets.</p>
                                </div>
                            </div>

                            <Callout type="tip" title="Paper vs Physical: The Key Insight">
                                Silver ETFs like SLV hold &quot;silver&quot; that&apos;s been lent, borrowed, and rehypothecated multiple times. When you buy physical, you remove real silver from the market. This is why the silver squeeze movement focuses on physical acquisition.
                            </Callout>
                        </section>

                        {/* Section 2: Types of Silver */}
                        <section id="types-of-silver" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Package className="w-8 h-8 text-slate-400" />
                                Types of Silver to Buy
                            </h2>

                            <p>
                                Physical silver comes in three main forms: <strong>coins, bars, and rounds</strong>. Each has distinct characteristics, premiums, and advantages. Understanding these differences helps you make smarter purchasing decisions.
                            </p>

                            <h3 className="text-white">Government-Minted Silver Coins</h3>
                            <p>
                                Sovereign coins are produced by national mints with guaranteed weight and purity. They carry the highest premiums but offer maximum liquidity, recognition, and legal tender status.
                            </p>
                            <ul>
                                <li><strong>American Silver Eagles:</strong> The most recognized silver coin globally. 1 oz .999 fine silver. Highest premiums but easiest to sell anywhere.</li>
                                <li><strong>Canadian Silver Maple Leafs:</strong> 1 oz .9999 fine silver (highest purity). Excellent security features. Slightly lower premiums than Eagles.</li>
                                <li><strong>Austrian Silver Philharmonics:</strong> 1 oz .999 fine silver. Popular in Europe, gaining recognition in the US.</li>
                                <li><strong>British Silver Britannias:</strong> 1 oz .999 fine silver. Excellent design, good recognition.</li>
                            </ul>

                            <h3 className="text-white">Silver Bars</h3>
                            <p>
                                Silver bars offer the most metal per dollar due to their simple manufacturing process. They&apos;re ideal for investors focused purely on accumulating ounces rather than collectibility.
                            </p>
                            <ul>
                                <li><strong>1 oz bars:</strong> Good starter size, but premiums are higher than larger bars.</li>
                                <li><strong>10 oz bars:</strong> Sweet spot for many investors. Reasonable premiums, easy to handle and sell.</li>
                                <li><strong>100 oz bars:</strong> Lowest premiums per ounce, but harder to sell in small increments.</li>
                                <li><strong>1 kilo bars (32.15 oz):</strong> Popular internationally, good balance of size and liquidity.</li>
                            </ul>

                            <h3 className="text-white">Silver Rounds</h3>
                            <p>
                                Rounds are privately minted, coin-shaped silver pieces. They look like coins but carry no face value or government backing. Their lower premiums make them attractive for pure investment purposes.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Type</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Typical Premium</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Liquidity</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">American Eagles</td>
                                            <td className="p-4">15-30%</td>
                                            <td className="p-4">Excellent</td>
                                            <td className="p-4">Maximum liquidity, IRA</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Canadian Maples</td>
                                            <td className="p-4">12-25%</td>
                                            <td className="p-4">Excellent</td>
                                            <td className="p-4">Highest purity, IRA</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Generic Rounds</td>
                                            <td className="p-4">5-12%</td>
                                            <td className="p-4">Good</td>
                                            <td className="p-4">Maximum ounces/dollar</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">10 oz Bars</td>
                                            <td className="p-4">4-10%</td>
                                            <td className="p-4">Good</td>
                                            <td className="p-4">Balance of premium & size</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">100 oz Bars</td>
                                            <td className="p-4">3-7%</td>
                                            <td className="p-4">Moderate</td>
                                            <td className="p-4">Serious stackers, lowest premiums</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 3: Understanding Premiums */}
                        <section id="understanding-premiums" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Scale className="w-8 h-8 text-slate-400" />
                                Understanding Premiums Over Spot
                            </h2>

                            <p>
                                The <strong>silver premium over spot</strong> is the additional cost above the spot price you pay when buying physical silver. Understanding premiums is crucial because they directly impact your break-even point and overall returns.
                            </p>

                            <h3 className="text-white">What Creates Silver Premiums?</h3>
                            <p>
                                Premiums exist because transforming raw silver into retail products costs money. They include:
                            </p>
                            <ul>
                                <li><strong>Minting/refining costs:</strong> Manufacturing bars, coins, and rounds requires labor and equipment</li>
                                <li><strong>Dealer markup:</strong> Dealers need margins to operate their businesses</li>
                                <li><strong>Supply/demand dynamics:</strong> When demand exceeds supply, premiums rise</li>
                                <li><strong>Product type:</strong> Government coins cost more to produce than generic bars</li>
                                <li><strong>Size:</strong> Smaller products have higher per-ounce premiums</li>
                            </ul>

                            <Callout type="warning" title="Premium Alert: Silver Squeeze Impact">
                                During the 2021 silver squeeze and subsequent waves, premiums on physical silver spiked dramatically. American Silver Eagles have traded at 50%+ premiums during peak demand. Always check current premiums before buying and compare across dealers.
                            </Callout>

                            <h3 className="text-white">How to Calculate Silver Premium</h3>
                            <p>
                                The <strong>silver coin premium</strong> or bar premium is calculated using this formula:
                            </p>
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10 not-prose my-6">
                                <p className="text-white font-mono text-center">
                                    Premium % = ((Price Paid - Spot Price) / Spot Price) x 100
                                </p>
                                <p className="text-slate-400 text-sm mt-4 text-center">
                                    Example: If spot silver is $25/oz and you pay $30/oz, your premium is 20%
                                </p>
                            </div>

                            <h3 className="text-white">Current Premium Environment (2026)</h3>
                            <p>
                                As of early 2026, premiums remain elevated compared to historical norms due to:
                            </p>
                            <ul>
                                <li>Ongoing retail investment demand from the silver squeeze movement</li>
                                <li>Industrial demand growth (solar, electronics, EVs)</li>
                                <li>Mint production constraints</li>
                                <li>Supply chain disruptions</li>
                            </ul>
                            <p>
                                Smart buyers focus on <strong>lowest premium products that meet their goals</strong> rather than chasing specific coins during high-premium periods.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose border border-slate-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Want Silver in Your IRA?</h3>
                                <p className="mb-6 text-slate-300">If you&apos;re interested in holding physical silver in a tax-advantaged retirement account, take our quiz to find the right company for your needs.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Silver IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Section 4: Best Products */}
                        <section id="best-products" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Coins className="w-8 h-8 text-slate-400" />
                                Best Silver Products for Investment
                            </h2>

                            <p>
                                Not all silver products are equal for investment purposes. Here are our recommendations based on different investor goals:
                            </p>

                            <h3 className="text-white">Top Picks: Government Coins</h3>
                            <div className="not-prose my-6 space-y-4">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                                            <span className="text-amber-400 font-bold">#1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">American Silver Eagles</h4>
                                            <p className="text-sm text-slate-400 mt-1">The gold standard of silver coins. Universally recognized, IRA-approved, and guaranteed by the US government. Higher premiums are offset by superior liquidity when selling.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-400/20 flex items-center justify-center shrink-0">
                                            <span className="text-slate-300 font-bold">#2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Canadian Silver Maple Leafs</h4>
                                            <p className="text-sm text-slate-400 mt-1">The purest (.9999) and arguably most beautiful silver coin. Slightly lower premiums than Eagles with excellent recognition. MintShield technology prevents milk spots.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-400/20 flex items-center justify-center shrink-0">
                                            <span className="text-slate-300 font-bold">#3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Austrian Silver Philharmonics</h4>
                                            <p className="text-sm text-slate-400 mt-1">Europe&apos;s most popular silver coin. Legal tender in the Eurozone. Beautiful musical design. Often available at lower premiums than Eagles or Maples.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-white">Top Picks: Bars</h3>
                            <p>
                                For serious stackers focused on accumulating ounces, bars from recognized refiners offer the best value:
                            </p>
                            <ul>
                                <li><strong>Royal Canadian Mint bars:</strong> Government-backed quality at bar prices</li>
                                <li><strong>PAMP Suisse bars:</strong> Premium Swiss quality, excellent resale value</li>
                                <li><strong>Sunshine Minting:</strong> US-made with MintMark SI anti-counterfeit feature</li>
                                <li><strong>Johnson Matthey bars:</strong> No longer produced, highly collectible</li>
                                <li><strong>Generic/secondary market bars:</strong> Lowest premiums for bulk accumulation</li>
                            </ul>

                            <h3 className="text-white">Top Picks: Rounds</h3>
                            <p>
                                For maximum silver per dollar without bar storage challenges:
                            </p>
                            <ul>
                                <li><strong>Buffalo rounds:</strong> Classic design, widely available at low premiums</li>
                                <li><strong>Sunshine Mint rounds:</strong> US quality with security features</li>
                                <li><strong>Asahi rounds:</strong> From the refiner that now supplies the US Mint</li>
                            </ul>
                        </section>

                        {/* Section 5: Where to Buy */}
                        <section id="where-to-buy" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Store className="w-8 h-8 text-slate-400" />
                                Where to Buy Physical Silver
                            </h2>

                            <p>
                                Choosing the right place to buy silver impacts both your cost and security. Here&apos;s a breakdown of your options:
                            </p>

                            <h3 className="text-white">Online Dealers</h3>
                            <p>
                                Online dealers offer the widest selection and often the best prices. Major reputable dealers include:
                            </p>

                            <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-2">Pros of Online Dealers</h4>
                                    <ul className="text-sm text-slate-400 space-y-1">
                                        <li>+ Lower premiums due to volume</li>
                                        <li>+ Extensive product selection</li>
                                        <li>+ Price comparison is easy</li>
                                        <li>+ Customer reviews available</li>
                                        <li>+ Often offer free shipping thresholds</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-2">Cons of Online Dealers</h4>
                                    <ul className="text-sm text-slate-400 space-y-1">
                                        <li>- Can&apos;t inspect before buying</li>
                                        <li>- Shipping time required</li>
                                        <li>- Must trust delivery process</li>
                                        <li>- Payment delays on some methods</li>
                                    </ul>
                                </div>
                            </div>

                            <p>
                                <strong>Key tips for buying online:</strong>
                            </p>
                            <ul>
                                <li>Compare prices across multiple dealers (use price aggregators)</li>
                                <li>Check BBB ratings and customer reviews</li>
                                <li>Understand each dealer&apos;s shipping and insurance policies</li>
                                <li>Consider payment methods (some offer discounts for check/wire)</li>
                                <li>Verify secure checkout (HTTPS, reputable payment processors)</li>
                            </ul>

                            <h3 className="text-white">Local Coin Shops (LCS)</h3>
                            <p>
                                Local coin shops offer unique advantages that online can&apos;t match:
                            </p>

                            <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-2">Pros of Local Shops</h4>
                                    <ul className="text-sm text-slate-400 space-y-1">
                                        <li>+ Inspect products before buying</li>
                                        <li>+ Immediate possession</li>
                                        <li>+ Build relationship with dealer</li>
                                        <li>+ No shipping costs or risks</li>
                                        <li>+ Potential for negotiation</li>
                                        <li>+ Cash transactions (privacy)</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-2">Cons of Local Shops</h4>
                                    <ul className="text-sm text-slate-400 space-y-1">
                                        <li>- Often higher premiums</li>
                                        <li>- Limited selection</li>
                                        <li>- Quality varies widely</li>
                                        <li>- Harder to price compare</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="text-white">Other Options</h3>
                            <ul>
                                <li><strong>eBay:</strong> Can find deals, but counterfeit risk is real. Only buy from highly-rated sellers with buyer protection.</li>
                                <li><strong>Coin shows:</strong> Great for building relationships and finding deals, especially on secondary market products.</li>
                                <li><strong>Private sales:</strong> Lowest prices possible, but highest risk. Only buy from trusted connections.</li>
                            </ul>
                        </section>

                        {/* Section 6: Premium Limits */}
                        <section id="premium-limits" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-slate-400" />
                                How Much Premium Is Too Much?
                            </h2>

                            <p>
                                This is one of the most debated topics in the silver community. The answer depends on your goals and the current market environment.
                            </p>

                            <h3 className="text-white">General Premium Guidelines</h3>
                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Product</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Normal Premium</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">High Premium</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Avoid</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Generic Bars/Rounds</td>
                                            <td className="p-4 text-green-400">3-8%</td>
                                            <td className="p-4 text-amber-400">8-15%</td>
                                            <td className="p-4 text-red-400">15%+</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">Silver Maples/Philharmonics</td>
                                            <td className="p-4 text-green-400">10-18%</td>
                                            <td className="p-4 text-amber-400">18-30%</td>
                                            <td className="p-4 text-red-400">30%+</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">American Silver Eagles</td>
                                            <td className="p-4 text-green-400">15-25%</td>
                                            <td className="p-4 text-amber-400">25-40%</td>
                                            <td className="p-4 text-red-400">40%+</td>
                                        </tr>
                                        <tr className="bg-slate-800/30">
                                            <td className="p-4 font-semibold text-white">100 oz Bars</td>
                                            <td className="p-4 text-green-400">2-5%</td>
                                            <td className="p-4 text-amber-400">5-10%</td>
                                            <td className="p-4 text-red-400">10%+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="tip" title="Premium Strategy">
                                When premiums are elevated, consider switching to lower-premium products. During the silver squeeze, savvy stackers moved from Eagles to generic rounds and bars, accumulating 20-30% more silver for the same dollars.
                            </Callout>

                            <h3 className="text-white">When Higher Premiums Make Sense</h3>
                            <ul>
                                <li><strong>IRA purchases:</strong> Government coins like Eagles and Maples are required for some IRA custodians</li>
                                <li><strong>Liquidity priority:</strong> Recognized coins sell faster and easier in emergencies</li>
                                <li><strong>Small purchases:</strong> Buying $50 of silver will naturally carry higher premiums</li>
                                <li><strong>Specific products:</strong> Some limited editions or collectibles warrant premiums</li>
                            </ul>
                        </section>

                        {/* Section 7: Storage Options */}
                        <section id="storage-options" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Warehouse className="w-8 h-8 text-slate-400" />
                                Storage Options
                            </h2>

                            <p>
                                Once you&apos;ve acquired physical silver, you need to store it safely. Your options range from home storage to professional depositories, each with distinct tradeoffs.
                            </p>

                            <h3 className="text-white">Home Storage</h3>
                            <p>
                                Keeping silver at home provides immediate access but comes with security responsibilities:
                            </p>
                            <ul>
                                <li><strong>Safe:</strong> A quality safe bolted to floor/wall is essential for serious amounts</li>
                                <li><strong>Hidden locations:</strong> Some stackers prefer hiding spots over safes (less obvious to thieves)</li>
                                <li><strong>Insurance:</strong> Standard homeowner&apos;s policies have precious metals limits; riders may be needed</li>
                                <li><strong>Discretion:</strong> Never broadcast your holdings</li>
                            </ul>

                            <Callout type="warning" title="Home Storage Consideration">
                                While home storage offers privacy and immediate access, the responsibility for security falls entirely on you. For larger holdings ($50,000+), many experts recommend professional storage for at least a portion.
                            </Callout>

                            <h3 className="text-white">Professional Depository Storage</h3>
                            <p>
                                Third-party depositories offer institutional-grade security:
                            </p>
                            <ul>
                                <li><strong>Pros:</strong> Professional security, insurance included, allocated/segregated storage options</li>
                                <li><strong>Cons:</strong> Annual fees, no immediate access, counterparty risk</li>
                                <li><strong>Major depositories:</strong> Delaware Depository, Brink&apos;s, IDS of Delaware, Texas Precious Metals Depository</li>
                            </ul>

                            <h3 className="text-white">IRA Storage (Required)</h3>
                            <p>
                                If you hold silver in an IRA, it <strong>must</strong> be stored at an IRS-approved depository. You cannot store IRA silver at home or in a personal safe deposit box. This is a critical distinction from regular silver ownership.
                            </p>
                            <p>
                                Learn more about this requirement in our <Link href="/guide/silver-ira-guide">Silver IRA Guide</Link>.
                            </p>
                        </section>

                        {/* Section 8: Silver in IRA */}
                        <section id="silver-in-ira" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <Building2 className="w-8 h-8 text-slate-400" />
                                Buying Silver in Your IRA
                            </h2>

                            <p>
                                A <strong>Silver IRA</strong> allows you to hold physical silver in a tax-advantaged retirement account. This is one of the most powerful ways to combine the benefits of physical ownership with the tax benefits of retirement accounts.
                            </p>

                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 not-prose my-8">
                                <h4 className="text-xl font-bold text-white mb-4">Key Silver IRA Requirements</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Purity Standards</p>
                                            <p className="text-sm text-slate-400">Silver must be .999 fine (99.9% pure) minimum</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Approved Products</p>
                                            <p className="text-sm text-slate-400">Eagles, Maples, Philharmonics, and certain bars</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Custodian Required</p>
                                            <p className="text-sm text-slate-400">Self-directed IRA with precious metals custodian</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Approved Depository</p>
                                            <p className="text-sm text-slate-400">Must store at IRS-approved facility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-white">How to Open a Silver IRA</h3>
                            <p>
                                The process is simpler than most people think:
                            </p>
                            <ol>
                                <li><strong>Choose a precious metals company:</strong> They coordinate the entire process</li>
                                <li><strong>Open self-directed IRA:</strong> The company helps establish your account with a custodian</li>
                                <li><strong>Fund your account:</strong> Roll over from 401(k), transfer from existing IRA, or contribute directly</li>
                                <li><strong>Select your silver:</strong> Choose from IRA-approved coins and bars</li>
                                <li><strong>Secure storage:</strong> Silver ships directly to depository</li>
                            </ol>

                            <p>
                                For a complete walkthrough, read our <Link href="/guide/silver-ira-guide">comprehensive Silver IRA Guide</Link> or compare <Link href="/best-silver-ira-companies">the best Silver IRA companies</Link>.
                            </p>

                            <Callout type="tip" title="Silver IRA Advantage">
                                In a traditional Silver IRA, you don&apos;t pay capital gains taxes on silver appreciation until withdrawal. In a Roth Silver IRA, qualified withdrawals are completely tax-free. This can significantly boost your after-tax returns compared to regular silver ownership.
                            </Callout>
                        </section>

                        {/* Section 9: Red Flags */}
                        <section id="red-flags" className="scroll-mt-32">
                            <h2 className="text-white flex items-center gap-3">
                                <BadgeAlert className="w-8 h-8 text-red-400" />
                                Red Flags to Avoid When Buying Silver
                            </h2>

                            <p>
                                The silver market unfortunately attracts scammers and unethical dealers. Here are warning signs that should make you walk away:
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Prices Too Good to Be True</h4>
                                        <p className="text-sm text-red-300 mt-1">If someone is selling silver significantly below spot price or with abnormally low premiums, it&apos;s likely counterfeit, stolen, or a scam. Always verify current spot prices.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">High-Pressure Sales Tactics</h4>
                                        <p className="text-sm text-red-300 mt-1">&quot;Buy now or lose this deal forever!&quot; Legitimate dealers don&apos;t need to pressure you. Take your time to research and compare.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Pushing &quot;Rare&quot; or Numismatic Coins</h4>
                                        <p className="text-sm text-red-300 mt-1">Unscrupulous dealers often push numismatic coins at massive markups to beginners. Stick with bullion products until you understand numismatics.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">No Physical Address or Phone</h4>
                                        <p className="text-sm text-red-300 mt-1">Reputable dealers have verifiable business locations and customer service. Anonymous sellers are high risk.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">&quot;Allocated&quot; Storage Without Proof</h4>
                                        <p className="text-sm text-red-300 mt-1">If a dealer offers to store your silver but can&apos;t provide audited proof of allocated holdings, your silver may not exist.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-400">Counterfeit Products</h4>
                                        <p className="text-sm text-red-300 mt-1">Fake silver is increasingly sophisticated. Buy only from reputable sources. Use tools like Sigma Metalytics or specific gravity tests to verify. Learn to spot fakes.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-white">How to Protect Yourself</h3>
                            <ul>
                                <li>Buy from established dealers with verified track records</li>
                                <li>Check BBB ratings and online reviews before purchasing</li>
                                <li>Verify products have proper markings and feel right</li>
                                <li>Use a magnet test (silver is not magnetic) as a basic check</li>
                                <li>Consider professional testing for larger purchases</li>
                                <li>Start small with new dealers before making large purchases</li>
                            </ul>

                            <p>
                                For more on avoiding scams, see our <Link href="/scams">Scam Protection Center</Link> and <Link href="/silver-squeeze/reddit-wallstreetsilver-review">WallStreetSilver Review</Link>.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="text-white">Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is a good premium to pay for silver?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        A reasonable premium depends on the product type. Generic silver bars typically carry 3-8% premiums, silver rounds 5-10%, and government-minted coins like American Silver Eagles can carry 15-30% premiums. During normal market conditions, lower is generally better for investment purposes. However, during high-demand periods like the silver squeeze, expect elevated premiums across all products.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Should I buy silver coins or bars?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        For pure investment purposes, silver bars offer the most silver per dollar due to lower premiums. However, government-minted coins offer superior liquidity, recognition, and potential numismatic value. Most experts recommend a mix: bars for bulk accumulation and coins for liquidity and divisibility. Consider your goals: if you might need to sell small amounts, coins are better. If you&apos;re long-term stacking, bars maximize your ounces.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I buy physical silver for my IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Yes! You can hold physical silver in a self-directed IRA, also known as a Silver IRA. The silver must meet IRS purity requirements (99.9% pure) and be stored at an IRS-approved depository. You cannot store IRA silver at home. Popular choices include American Silver Eagles, Canadian Silver Maple Leafs, and certain silver bars. See our <Link href="/guide/silver-ira-guide" className="text-amber-400 hover:underline">Silver IRA Guide</Link> for complete details.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is it better to buy silver online or locally?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Online dealers typically offer lower premiums and better selection, while local coin shops allow you to inspect products and avoid shipping. Many experienced silver stackers use both approaches: online for bulk purchases where premiums matter most, and local shops for smaller opportunistic buys, face-to-face relationships, and immediate possession. The best strategy depends on your priorities—price, convenience, or privacy.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How do I know if silver is real?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Several tests can help verify authentic silver: 1) Magnet test—silver is not magnetic; 2) Ice test—silver conducts heat rapidly, causing ice to melt quickly; 3) Ring test—silver produces a distinctive ring when tapped; 4) Specific gravity test—silver&apos;s density is precisely 10.49 g/cm3; 5) Professional testing with devices like Sigma Metalytics. The best protection is buying from reputable dealers with authentication guarantees.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden not-prose border border-slate-700">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <ShieldCheck className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Start Stacking Silver?</h3>
                                <p className="mb-6 text-slate-300 max-w-xl mx-auto">Whether you&apos;re buying silver for personal ownership or your retirement account, we can help you find the right approach.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Silver IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/silver-squeeze">Explore Silver Squeeze Hub</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* Related Content */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Continue Your Silver Education</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-squeeze" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver Squeeze Hub</h3>
                            <p className="text-sm text-slate-400">Learn about the silver squeeze movement and why it matters for investors.</p>
                        </Link>
                        <Link href="/guide/silver-ira-guide" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Silver IRA Guide</h3>
                            <p className="text-sm text-slate-400">Everything you need to know about holding silver in a retirement account.</p>
                        </Link>
                        <Link href="/best-silver-ira-companies" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Best Silver IRA Companies</h3>
                            <p className="text-sm text-slate-400">Compare the top companies for silver IRA accounts in 2026.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="buy-physical-silver-guide" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
