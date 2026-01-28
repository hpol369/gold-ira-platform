import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Gem, Clock, Globe, ShieldCheck, TrendingUp, ArrowRight, Sparkles, Coins, Building2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Why Is Gold Valuable? Science & History Explained",
    description: "Discover why gold has been valuable for 5,000+ years. Learn the scientific properties, historical significance, and economic factors that make gold the ultimate store of value.",
    openGraph: {
        title: "Why Is Gold Valuable? Understanding Gold's Timeless Worth",
        description: "Learn why gold has maintained its value for millennia while currencies have come and gone.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "Gold's unique chemical properties make it practically indestructible—it doesn't rust, tarnish, or corrode.",
    "Every major civilization in history has recognized gold as money and a store of value.",
    "Gold's scarcity is natural and unchangeable—all the gold ever mined fits in a 67-foot cube.",
    "Central banks hold over 35,000 tonnes of gold as reserve assets, validating its importance.",
    "Gold serves as 'financial insurance' that has protected wealth during every economic crisis.",
    "Unlike paper currencies, gold cannot be printed, diluted, or devalued by government policy.",
    "Gold's value comes from a combination of scarcity, durability, beauty, and universal acceptance."
];

const tocItems = [
    { id: "overview", label: "Why Gold?" },
    { id: "scientific", label: "Scientific Properties" },
    { id: "history", label: "Historical Significance" },
    { id: "scarcity", label: "Natural Scarcity" },
    { id: "store-of-value", label: "Store of Value" },
    { id: "modern-relevance", label: "Why Gold Matters Today" },
    { id: "central-banks", label: "Central Banks & Gold" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Why Is Gold Valuable? The Science & History Behind Gold's Worth",
            "description": "Discover why gold has been valuable for 5,000+ years. Learn the scientific properties, historical significance, and economic factors that make gold the ultimate store of value.",
            "image": "https://richdadretirement.com/images/why-gold-valuable.jpg",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-23",
            "dateModified": "2026-01-23"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why is gold so valuable?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold is valuable because of its unique combination of properties: it's extremely rare, virtually indestructible (doesn't rust or corrode), beautiful, easily divisible, portable, and universally recognized across all cultures and time periods. These properties make it the ideal store of value and medium of exchange."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes gold different from other metals?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold is one of the least reactive chemical elements, meaning it doesn't rust, tarnish, or corrode. It's also extremely rare—all the gold ever mined would fit in a 67-foot cube. Unlike silver (which tarnishes) or platinum (which is too rare), gold strikes the perfect balance of scarcity, durability, and practicality."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will gold always be valuable?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While no one can predict the future with certainty, gold has maintained its value for over 5,000 years across every civilization. Its value is rooted in physical properties that cannot change and scarcity that cannot be altered. As long as humans value rare, beautiful, durable assets, gold will likely remain valuable."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do central banks hold gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Central banks hold over 35,000 tonnes of gold because it's the only reserve asset that isn't simultaneously someone else's liability. Gold provides diversification from dollar-denominated assets, protection against currency crises, and a hedge against inflation. In 2022-2024, central banks bought record amounts of gold."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is gold a good investment for retirement?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold can be an excellent component of a retirement portfolio. It provides diversification, inflation protection, and crisis insurance. Most advisors who recommend precious metals suggest allocating 10-20% of your portfolio to gold. A Gold IRA allows you to hold physical gold with the same tax advantages as a traditional IRA."
                    }
                }
            ]
        }
    ]
};

export default function WhyIsGoldValuablePage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Financial Education
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            Why Is Gold Valuable?
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            The science, history, and economics behind humanity&apos;s most enduring store of value—and why it still matters for your retirement today.
                        </p>
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Your grandfather probably kept some gold coins in a lockbox. His grandfather did too. Meanwhile, the dollar in your wallet buys about 3 cents worth of what it bought in 1913. <strong>Gold doesn&apos;t play by the government&apos;s rules</strong>—and that&apos;s exactly why it matters.
                            </p>
                            <p>
                                This isn&apos;t mystical thinking. Gold&apos;s value comes from hard science and 5,000 years of history. It doesn&apos;t rust, can&apos;t be printed, and every civilization on Earth has recognized it as real money. When you&apos;ve spent 30 years building a $500K or $700K nest egg, understanding <em>why</em> gold holds its value isn&apos;t optional—it&apos;s protection against the next time politicians and bankers decide to print their way out of a crisis.
                            </p>
                            <p>
                                Let&apos;s break down exactly why gold has outlasted every paper currency ever created—and why workers like you are adding it to their retirement savings.
                            </p>
                        </section>

                        {/* Scientific Properties */}
                        <section id="scientific" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-[#B22234]/20 rounded-lg text-[#B22234]">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">The Science Behind Gold&apos;s Value</h2>
                            </div>
                            <p>
                                Gold (Au, atomic number 79) has unique chemical and physical properties that make it ideal as a store of value:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                                    <ShieldCheck className="w-8 h-8 text-[#B22234] mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Virtually Indestructible</h4>
                                    <p className="text-sm text-slate-500">Gold doesn&apos;t rust, tarnish, or corrode. It&apos;s one of the least reactive chemical elements. Gold artifacts from ancient Egypt look exactly as they did 3,000 years ago.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                                    <Gem className="w-8 h-8 text-[#B22234] mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Naturally Beautiful</h4>
                                    <p className="text-sm text-slate-500">Gold&apos;s distinctive yellow luster is unique among metals. It&apos;s been prized for jewelry and ornamentation across every culture in human history.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                                    <Coins className="w-8 h-8 text-[#B22234] mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Easily Divisible</h4>
                                    <p className="text-sm text-slate-500">Gold is soft and malleable, meaning it can be divided into precise amounts. One ounce can be hammered into a 300 square foot sheet or drawn into a 50-mile wire.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                                    <Globe className="w-8 h-8 text-[#B22234] mb-4" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Universally Recognized</h4>
                                    <p className="text-sm text-slate-500">Gold is identifiable anywhere in the world. Its density and properties make it nearly impossible to counterfeit. It&apos;s accepted as valuable in every country.</p>
                                </div>
                            </div>

                            <Callout type="info" title="The Periodic Table Elimination">
                                In his book &quot;The Power of Gold,&quot; chemist Peter Bernstein explains why gold became money: Start with all 118 elements. Eliminate gases, liquids, radioactive elements, reactive metals, and those too rare or too common. You&apos;re left with gold—the only element that perfectly balances scarcity, durability, and practicality.
                            </Callout>
                        </section>

                        {/* Historical Significance */}
                        <section id="history" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">5,000 Years of History</h2>
                            </div>
                            <p>
                                Gold&apos;s track record as money and a store of value is unmatched by any other asset:
                            </p>
                            <ul>
                                <li><strong>Ancient Egypt (3000 BC):</strong> Gold was buried with pharaohs and used for trade</li>
                                <li><strong>Lydia (600 BC):</strong> First gold coins minted, revolutionizing commerce</li>
                                <li><strong>Roman Empire:</strong> Gold coins (aureus) funded the world&apos;s largest empire</li>
                                <li><strong>Byzantine Empire:</strong> The gold solidus remained stable for 700 years</li>
                                <li><strong>Gold Standard Era:</strong> Major currencies were backed by gold until 1971</li>
                                <li><strong>Today:</strong> Central banks hold 35,000+ tonnes as reserve assets</li>
                            </ul>
                            <p>
                                Paper currencies, by contrast, have a 100% failure rate over long time horizons. The average lifespan of a fiat currency is 27 years. The US dollar has lost over 96% of its purchasing power since 1913.
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-slate-900 text-lg mb-4">The Suit Test: Gold vs. Dollar</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="text-center p-4 bg-white border border-slate-200 rounded-xl">
                                        <div className="text-3xl font-bold text-[#B22234] mb-2">1920</div>
                                        <p className="text-sm text-slate-500">1 oz gold ($20) = 1 quality suit</p>
                                    </div>
                                    <div className="text-center p-4 bg-white border border-slate-200 rounded-xl">
                                        <div className="text-3xl font-bold text-[#B22234] mb-2">2026</div>
                                        <p className="text-sm text-slate-500">1 oz gold (~$2,000+) = 1 quality suit</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-4 text-center">Gold maintained its purchasing power. The dollar lost 99%.</p>
                            </div>
                        </section>

                        {/* Natural Scarcity */}
                        <section id="scarcity" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Gem className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Natural Scarcity You Can&apos;t Fake</h2>
                            </div>
                            <p>
                                Unlike paper money, which can be printed infinitely, gold&apos;s supply is naturally limited:
                            </p>
                            <ul>
                                <li><strong>All the gold ever mined</strong> (about 200,000 tonnes) would fit in a cube just 67 feet on each side</li>
                                <li><strong>Annual mining production</strong> adds only about 1.5% to the total supply</li>
                                <li><strong>Gold cannot be created</strong>—it formed in supernova explosions billions of years ago</li>
                                <li><strong>Most accessible gold</strong> has already been mined; new deposits are increasingly difficult and expensive to extract</li>
                            </ul>
                            <p>
                                This natural scarcity is what makes gold a &quot;hard asset.&quot; While central banks can create trillions of dollars with a keystroke, no one can print more gold. This is why gold has maintained purchasing power while every paper currency in history has eventually failed.
                            </p>

                            <Callout type="tip" title="Rich Dad Insight">
                                &quot;Gold is money. Everything else is credit.&quot; — J.P. Morgan, testifying before Congress in 1912. More than a century later, this remains true. The wealthy understand that paper assets are promises; gold is the real thing.
                            </Callout>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Interested in Owning Physical Gold?</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA lets you hold real, physical gold in a tax-advantaged retirement account.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Perfect Gold IRA Company <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Store of Value */}
                        <section id="store-of-value" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Gold as the Ultimate Store of Value</h2>
                            </div>
                            <p>
                                A &quot;store of value&quot; is an asset that maintains purchasing power over time. Gold excels at this for several reasons:
                            </p>
                            <ul>
                                <li><strong>No counterparty risk:</strong> Unlike stocks, bonds, or bank deposits, gold is not someone else&apos;s liability. It can&apos;t default.</li>
                                <li><strong>Immune to inflation:</strong> When governments print money, gold prices typically rise to compensate</li>
                                <li><strong>Liquidity:</strong> Gold can be sold anywhere in the world, at any time, for its fair value</li>
                                <li><strong>Privacy:</strong> Physical gold ownership can be more private than other financial assets</li>
                            </ul>
                            <p>
                                This is why gold performs well during economic crises. During the 2008 financial crisis, stocks fell 37% while gold rose 5%. During the 2020 COVID crash, gold hit all-time highs. Gold is &quot;crisis insurance&quot; for your portfolio.
                            </p>
                        </section>

                        {/* Modern Relevance */}
                        <section id="modern-relevance" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Why Gold Matters Today</h2>
                            </div>
                            <p>
                                In our modern financial system, gold remains critically important:
                            </p>
                            <ul>
                                <li><strong>National debt:</strong> US national debt exceeds $35 trillion and growing</li>
                                <li><strong>Money printing:</strong> The Federal Reserve created trillions of dollars since 2020</li>
                                <li><strong>Inflation concerns:</strong> Prices have risen significantly, eroding purchasing power</li>
                                <li><strong>Geopolitical uncertainty:</strong> Global tensions make &quot;safe haven&quot; assets more attractive</li>
                                <li><strong>De-dollarization:</strong> Countries are reducing dollar reserves in favor of gold</li>
                            </ul>
                            <p>
                                Gold isn&apos;t a relic of the past—it&apos;s increasingly relevant in a world of unlimited money printing, political instability, and eroding trust in institutions.
                            </p>
                        </section>

                        {/* Central Banks */}
                        <section id="central-banks" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Why Central Banks Hold Gold</h2>
                            </div>
                            <p>
                                If gold were truly a &quot;barbarous relic,&quot; why do central banks hold over 35,000 tonnes of it? The answer reveals gold&apos;s true importance:
                            </p>
                            <ul>
                                <li><strong>Diversification:</strong> Gold provides diversification from dollar-denominated assets</li>
                                <li><strong>No counterparty risk:</strong> Unlike Treasury bonds, gold doesn&apos;t depend on another country&apos;s ability to pay</li>
                                <li><strong>Crisis hedge:</strong> Gold provides stability during financial and geopolitical crises</li>
                                <li><strong>Confidence:</strong> Gold reserves signal monetary stability and national creditworthiness</li>
                            </ul>
                            <p>
                                In 2022-2024, central banks bought record amounts of gold. China, Russia, India, Turkey, and other nations are aggressively adding to reserves. They&apos;re preparing for a world where the dollar may not reign supreme.
                            </p>

                            <Callout type="tip" title="Follow the Smart Money">
                                If central banks are buying gold, shouldn&apos;t individual investors pay attention? These institutions understand money better than anyone. Their actions speak louder than their words about paper currencies.
                            </Callout>

                            <p>
                                Learn more about this trend in our article on <Link href="/why-gold/central-banks-buying-gold">why central banks are buying gold</Link>.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Why is gold so valuable?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Gold is valuable because of its unique combination of properties: it&apos;s extremely rare, virtually indestructible (doesn&apos;t rust or corrode), beautiful, easily divisible, portable, and universally recognized across all cultures and time periods. These properties make it the ideal store of value and medium of exchange.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What makes gold different from other metals?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Gold is one of the least reactive chemical elements, meaning it doesn&apos;t rust, tarnish, or corrode. It&apos;s also extremely rare—all the gold ever mined would fit in a 67-foot cube. Unlike silver (which tarnishes) or platinum (which is too rare), gold strikes the perfect balance of scarcity, durability, and practicality.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Will gold always be valuable?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        While no one can predict the future with certainty, gold has maintained its value for over 5,000 years across every civilization. Its value is rooted in physical properties that cannot change and scarcity that cannot be altered. As long as humans value rare, beautiful, durable assets, gold will likely remain valuable.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Why do central banks hold gold?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Central banks hold over 35,000 tonnes of gold because it&apos;s the only reserve asset that isn&apos;t simultaneously someone else&apos;s liability. Gold provides diversification from dollar-denominated assets, protection against currency crises, and a hedge against inflation. In 2022-2024, central banks bought record amounts of gold.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Is gold a good investment for retirement?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Gold can be an excellent component of a retirement portfolio. It provides diversification, inflation protection, and crisis insurance. Most advisors who recommend precious metals suggest allocating 10-20% of your portfolio to gold. A <Link href="/what-is-a-gold-ira" className="text-[#B22234] hover:underline">Gold IRA</Link> allows you to hold physical gold with the same tax advantages as a traditional IRA.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-[#000080] rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Add Gold to Your Portfolio?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Discover how a Gold IRA can help you own physical gold with tax advantages for your retirement.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/what-is-a-gold-ira">Learn About Gold IRAs</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-why-is-gold-valuable" />
                </Container>
            </section>
        </main>
    );
}
