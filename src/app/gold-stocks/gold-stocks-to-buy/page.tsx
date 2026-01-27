import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
    ArrowLeft,
    ArrowRight,
    AlertTriangle,
    Building2,
    Coins,
    FileCheck,
    Scale,
    ShieldCheck,
    TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
    title: "Gold Stocks to Buy vs Physical Gold: Investment Guide 2026",
    description: "Considering gold stocks to buy? Learn why physical gold may offer purer gold exposure than mining stocks or ETFs. Compare options for your portfolio.",
    openGraph: {
        title: "Gold Stocks to Buy vs Physical Gold: Investment Guide 2026",
        description: "Learn what you're really looking for when searching for gold stocks to buy - and why physical gold might be the better answer.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gold Stocks to Buy vs Physical Gold: Investment Guide 2026",
    description: "Understanding the differences between gold stocks, ETFs, and physical gold for investors seeking gold exposure.",
    author: {
        "@type": "Person",
        name: "Thomas Richardson",
    },
    publisher: {
        "@type": "Organization",
        name: "Rich Dad Retirement",
    },
    datePublished: "2026-01-27",
    dateModified: "2026-01-27",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Are gold stocks the same as owning gold?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Gold mining stocks give you exposure to companies that mine gold, not the metal itself. Stock prices depend on operational efficiency, management decisions, labor costs, and mining yields - not just gold prices. Physical gold gives you direct ownership of the metal.",
            },
        },
        {
            "@type": "Question",
            name: "What is the safest way to invest in gold?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Physical gold (coins or bars) held in your possession or in an IRS-approved depository through a Gold IRA is considered the safest form of gold ownership. It has no counterparty risk - you own the actual metal, not a promise or paper claim.",
            },
        },
        {
            "@type": "Question",
            name: "Do gold ETFs give you real gold exposure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Gold ETFs track gold prices but come with counterparty risk. You own shares in a fund, not physical gold. In a financial crisis, ETF shares could face redemption issues while physical gold remains yours.",
            },
        },
        {
            "@type": "Question",
            name: "Can I hold physical gold in my IRA?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A Gold IRA (or Precious Metals IRA) allows you to hold IRS-approved gold coins and bars in a tax-advantaged retirement account. You can roll over funds from an existing 401(k) or IRA without penalties.",
            },
        },
    ],
};

const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, faqSchema],
};

export default function GoldStocksToBuyPage() {
    return (
        <>
            <Navbar />
            <SchemaScript schema={combinedSchema} />

            {/* Hero */}
            <section className="bg-primary pt-24 pb-16">
                <Container>
                    <Link
                        href="/gold-stocks"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Gold Stocks
                    </Link>
                    <div className="max-w-3xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            What You Need to Know First
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Gold Stocks to Buy: What Most Investors Get Wrong
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            You&apos;re looking for gold stocks to buy because you want gold exposure.
                            But here&apos;s what your broker probably hasn&apos;t told you: mining stocks
                            and physical gold are very different investments. One tracks gold.
                            The other tracks mining companies.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-a:text-secondary max-w-none">

                            {/* Introduction */}
                            <p className="lead">
                                You&apos;re looking for gold stocks to buy. Maybe you&apos;ve heard gold hit
                                all-time highs. Maybe you&apos;re worried about inflation or a market crash.
                                Either way, you want gold in your portfolio.
                            </p>
                            <p>
                                But before you click &quot;buy&quot; on a mining stock, let&apos;s talk about what
                                you&apos;re actually trying to achieve - and whether mining stocks are the best
                                way to get there.
                            </p>

                            {/* What You're Really Looking For */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What You&apos;re Really Looking For</h2>
                            </div>

                            <p>
                                When people search for &quot;gold stocks to buy,&quot; they usually want one
                                of these things:
                            </p>

                            <ul>
                                <li><strong>Inflation protection:</strong> Something that holds value when dollars don&apos;t</li>
                                <li><strong>Crisis insurance:</strong> An asset that goes up when stocks crash</li>
                                <li><strong>Portfolio diversification:</strong> Something uncorrelated to stocks and bonds</li>
                                <li><strong>Wealth preservation:</strong> A store of value that&apos;s lasted 5,000 years</li>
                            </ul>

                            <p>
                                The question is: do gold mining stocks actually deliver these benefits?
                                Let&apos;s look at the data.
                            </p>

                            {/* The Problem with Gold Mining Stocks */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Problem with Gold Mining Stocks</h2>
                            </div>

                            <p>
                                Gold mining stocks are stocks first, gold second. Here&apos;s what that means:
                            </p>

                            <h3>1. Operational Risk</h3>
                            <p>
                                Mining is hard. Equipment breaks. Mines flood. Permits get denied.
                                Labor costs spike. Even when gold prices rise, a mining company can lose
                                money if operations go wrong.
                            </p>

                            <h3>2. Management Risk</h3>
                            <p>
                                You&apos;re betting on executives making good decisions. Bad acquisitions,
                                poor capital allocation, or misreading reserves can tank a mining stock
                                while gold prices climb.
                            </p>

                            <h3>3. Not Pure Gold Exposure</h3>
                            <p>
                                During the 2008 financial crisis, gold rose 25%. Gold mining stocks?
                                Many fell with the broader market. When you need gold protection most,
                                mining stocks often act like... stocks.
                            </p>

                            <Callout type="warning" title="Historical Reality Check">
                                In 2008, the GDX Gold Miners ETF fell over 25% while physical gold rose 25%.
                                The correlation between mining stocks and physical gold breaks down exactly
                                when it matters most - during market panics.
                            </Callout>

                            <h3>4. Leverage Works Both Ways</h3>
                            <p>
                                Mining stocks can amplify gold&apos;s moves - sometimes 2-3x. Great when gold
                                rises. Devastating when it falls. If you&apos;re near retirement, that
                                volatility can be dangerous.
                            </p>

                            {/* The Problem with Gold ETFs */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                                    <FileCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Problem with Gold ETFs</h2>
                            </div>

                            <p>
                                &quot;What about gold ETFs?&quot; you might ask. &quot;They track gold prices directly.&quot;
                            </p>
                            <p>
                                True - ETFs like GLD track gold more closely than mining stocks. But
                                they have their own issues:
                            </p>

                            <ul>
                                <li><strong>Counterparty risk:</strong> You own shares in a fund, not actual gold</li>
                                <li><strong>Redemption limits:</strong> In a crisis, you may not be able to convert to physical</li>
                                <li><strong>Annual fees:</strong> Expense ratios eat into your returns over time</li>
                                <li><strong>No physical possession:</strong> If you can&apos;t hold it, do you really own it?</li>
                            </ul>

                            <p>
                                ETFs are better than mining stocks for gold exposure. But they&apos;re still
                                paper claims on gold, not gold itself.
                            </p>

                            {/* The Physical Gold Alternative */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Physical Gold Alternative</h2>
                            </div>

                            <p>
                                If you want real gold exposure - the kind that protected wealth during
                                every crisis in history - there&apos;s only one way to get it: own the metal.
                            </p>

                            <p>
                                Physical gold means:
                            </p>

                            <ul>
                                <li><strong>No counterparty risk:</strong> You own gold, not a promise of gold</li>
                                <li><strong>No management risk:</strong> Gold doesn&apos;t make bad acquisitions</li>
                                <li><strong>No operational risk:</strong> Your gold doesn&apos;t flood or break down</li>
                                <li><strong>Pure gold exposure:</strong> When gold rises, your gold rises. Period.</li>
                            </ul>

                            {/* Comparison Table */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What Each Option Actually Gives You</h2>
                            </div>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">What You Want</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-blue-400">Mining Stocks</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-purple-400">Gold ETFs</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Physical Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-medium text-white">Pure gold price exposure</td>
                                            <td className="p-4 text-red-400">Poor</td>
                                            <td className="p-4 text-yellow-400">Good</td>
                                            <td className="p-4 text-green-400 font-semibold">Perfect</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Crisis protection</td>
                                            <td className="p-4 text-red-400">Unreliable</td>
                                            <td className="p-4 text-yellow-400">Good</td>
                                            <td className="p-4 text-green-400 font-semibold">Excellent</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">No counterparty risk</td>
                                            <td className="p-4 text-red-400">No</td>
                                            <td className="p-4 text-red-400">No</td>
                                            <td className="p-4 text-green-400 font-semibold">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Inflation hedge</td>
                                            <td className="p-4 text-yellow-400">Mixed</td>
                                            <td className="p-4 text-green-400">Good</td>
                                            <td className="p-4 text-green-400 font-semibold">Excellent</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Long-term wealth preservation</td>
                                            <td className="p-4 text-yellow-400">Depends on company</td>
                                            <td className="p-4 text-yellow-400">Good (minus fees)</td>
                                            <td className="p-4 text-green-400 font-semibold">5,000 year track record</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Potential upside leverage</td>
                                            <td className="p-4 text-green-400 font-semibold">High (2-3x)</td>
                                            <td className="p-4 text-yellow-400">1:1 with gold</td>
                                            <td className="p-4 text-yellow-400">1:1 with gold</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Dividends</td>
                                            <td className="p-4 text-green-400">Some</td>
                                            <td className="p-4 text-red-400">None</td>
                                            <td className="p-4 text-red-400">None</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <Callout type="info" title="The Bottom Line">
                                If you want to speculate on gold prices with leverage, mining stocks make
                                sense. If you want reliable gold exposure for wealth protection, physical
                                gold is the purest form of ownership.
                            </Callout>

                            {/* How to Buy Physical Gold */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">How to Buy Physical Gold</h2>
                            </div>

                            <p>
                                If physical gold makes sense for your goals, here are your options:
                            </p>

                            <h3>1. Gold Coins</h3>
                            <p>
                                American Gold Eagles, Canadian Maple Leafs, and other sovereign coins
                                are widely recognized and easy to buy. You can hold them at home or in
                                a safe deposit box.
                            </p>

                            <h3>2. Gold Bars</h3>
                            <p>
                                Lower premiums than coins but less flexible for selling partial positions.
                                Best for larger investments. Make sure bars come from accredited refiners.
                            </p>

                            <h3>3. Gold IRA</h3>
                            <p>
                                For retirement savings, a <Link href="/what-is-a-gold-ira">Gold IRA</Link> lets
                                you hold IRS-approved gold coins and bars in a tax-advantaged account. Same
                                tax benefits as a traditional IRA - you can even roll over an existing 401(k)
                                without penalties.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Gold IRA Benefits</h4>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Physical gold stored in IRS-approved depository</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Tax-deferred growth (or tax-free with Roth)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Roll over existing 401(k) or IRA funds penalty-free</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>No daily price watching - set it and let it protect</span>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Own Real Gold?</h3>
                                    <p className="mb-6 text-gray-200">Take 60 seconds to see if a Gold IRA makes sense for your retirement goals.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Key Takeaways</h2>
                            </div>

                            <ul>
                                <li><strong>Gold stocks are stocks first:</strong> Mining company problems can tank your investment even when gold rises</li>
                                <li><strong>ETFs have counterparty risk:</strong> You own fund shares, not metal</li>
                                <li><strong>Physical gold is pure exposure:</strong> No management, no operations, just gold</li>
                                <li><strong>Match the tool to the goal:</strong> Speculation favors stocks; protection favors physical</li>
                                <li><strong>Gold IRAs offer the best of both:</strong> Physical gold ownership with retirement tax benefits</li>
                            </ul>

                            <p>
                                The next time you search for &quot;gold stocks to buy,&quot; remember to ask
                                yourself: do I want to own a gold mining business, or do I want to own gold?
                            </p>

                        </article>

                        {/* Navigation */}
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                <Link
                                    href="/gold-stocks/best-gold-stocks"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Best Gold Stocks
                                </Link>
                                <Link
                                    href="/gold-stocks/gold-mining-stocks-vs-physical-gold"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition justify-end"
                                >
                                    Mining Stocks vs Physical Gold <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <AugustaCTA trackSource="gold-stocks-to-buy" />
            <Footer />
        </>
    );
}
