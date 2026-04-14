import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { Quote, TrendingUp, AlertTriangle, ShieldCheck, DollarSign, ArrowRight, BookOpen, Coins, Building2 } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Robert Kiyosaki on Gold: Why Rich Dad Says Buy",
    description: "Robert Kiyosaki's gold strategy. Why the Rich Dad author recommends gold and silver to protect wealth against inflation and dollar collapse.",
    openGraph: {
        title: "Robert Kiyosaki on Gold: The Rich Dad Investment Strategy",
        description: "Why Robert Kiyosaki recommends gold and silver for wealth protection.",
        type: "article",
    },
};

const takeaways = [
    "Kiyosaki has recommended gold and silver for over 25 years as protection against currency collapse.",
    "'Savers are losers' — cash in the bank loses value to inflation every year.",
    "Gold is 'God's money' according to Kiyosaki — it cannot be printed or debased.",
    "He recommends physical gold, not ETFs or paper gold derivatives.",
    "Kiyosaki views gold as insurance, not a get-rich-quick investment.",
    "He predicted the 2008 crisis and has warned about a larger crash coming.",
    "A Gold IRA allows you to apply Kiyosaki's strategy with tax advantages."
];

const tocItems = [
    { id: "overview", label: "Kiyosaki's Gold Philosophy" },
    { id: "savers-losers", label: "Why 'Savers Are Losers'" },
    { id: "gods-money", label: "Gold as 'God's Money'" },
    { id: "predictions", label: "His Economic Predictions" },
    { id: "strategy", label: "His Investment Strategy" },
    { id: "quotes", label: "Famous Gold Quotes" },
    { id: "apply", label: "Apply the Strategy" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Robert Kiyosaki on Gold: Why Rich Dad Says Buy Gold & Silver",
            "description": "Learn Robert Kiyosaki's gold investment strategy and why the Rich Dad Poor Dad author recommends precious metals for wealth protection.",
            "image": "https://richdadretirement.com/images/kiyosaki-gold.jpg",
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
                    "name": "Does Robert Kiyosaki recommend gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Robert Kiyosaki has been a vocal advocate for gold and silver investments for over 25 years. He calls gold 'God's money' and recommends it as protection against inflation, currency devaluation, and economic crises. He specifically recommends physical gold over paper gold ETFs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why does Kiyosaki say 'savers are losers'?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kiyosaki says 'savers are losers' because cash savings lose purchasing power to inflation every year. Since the dollar has lost over 96% of its value since 1913, people who simply save dollars are seeing their wealth erode. He recommends converting paper savings into real assets like gold that maintain purchasing power."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What does Robert Kiyosaki mean by 'God's money'?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kiyosaki calls gold and silver 'God's money' because they are natural elements that cannot be created, printed, or digitally manufactured by governments or central banks. Unlike fiat currency which can be printed infinitely, gold's supply is limited by nature, making it a true store of value."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Kiyosaki recommend Gold IRAs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Kiyosaki supports using retirement accounts to hold physical precious metals. A Gold IRA allows you to apply his wealth protection strategy with tax advantages, converting paper 401(k) assets into physical gold and silver tax-free through a rollover."
                    }
                }
            ]
        }
    ]
};

export default function RobertKiyosakiGoldPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/rich-dad-strategy" className="text-[#B22234] hover:text-[#8b1c2a] text-sm font-semibold mb-4 inline-block">
                            ← Back to Rich Dad Strategy
                        </Link>
                        <span className="text-[#B22234] font-bold tracking-widest uppercase text-xs mb-4 block mt-4">
                            Investment Philosophy
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            Robert Kiyosaki on Gold
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Why the author of &quot;Rich Dad Poor Dad&quot; has recommended gold and silver for 25+ years—and how to apply his strategy to your retirement.
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
                    <article className="flex-1 prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Robert Kiyosaki, author of the #1 personal finance book of all time, has been one of the most vocal advocates for <strong>gold and silver investment</strong> in the mainstream financial world.
                            </p>
                            <p>
                                While most financial advisors push stocks, bonds, and mutual funds, Kiyosaki has consistently warned that paper assets are risky and that <strong>real assets like gold</strong> are essential for protecting wealth. His message has only grown more urgent in recent years.
                            </p>
                            <p>
                                In this guide, we&apos;ll explore Kiyosaki&apos;s philosophy on gold, his economic predictions, and how you can apply the &quot;Rich Dad&quot; strategy to your own retirement planning.
                            </p>
                        </section>

                        {/* Savers Are Losers */}
                        <section id="savers-losers" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-100 rounded-lg text-red-600 border border-red-200">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Why &quot;Savers Are Losers&quot;</h2>
                            </div>
                            <p>
                                One of Kiyosaki&apos;s most controversial statements is that <strong>&quot;savers are losers.&quot;</strong> This isn&apos;t about being irresponsible with money—it&apos;s about understanding how the monetary system works.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl not-prose my-8">
                                <div className="flex items-start gap-4">
                                    <Quote className="w-8 h-8 text-red-600 flex-shrink-0" />
                                    <div>
                                        <p className="text-red-700 italic text-lg mb-2">
                                            &quot;In 1971, Nixon took the dollar off the gold standard. Since then, the dollar has lost over 96% of its purchasing power. Savers are losers because they save fake money.&quot;
                                        </p>
                                        <p className="text-red-600 font-semibold">— Robert Kiyosaki</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Here&apos;s the math: If you saved $100,000 in 1971, that money would have the purchasing power of less than $4,000 today. Meanwhile, if you had converted that $100,000 into gold in 1971 (when gold was $35/oz), you&apos;d have about 2,857 ounces—worth over $5.7 million today.
                            </p>
                            <p>
                                This is why Kiyosaki says the wealthy don&apos;t save money—they convert cash into <strong>real assets</strong> that maintain or increase in value.
                            </p>
                        </section>

                        {/* God's Money */}
                        <section id="gods-money" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-100 rounded-lg text-[#B22234] border border-amber-200">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Gold as &quot;God&apos;s Money&quot;</h2>
                            </div>
                            <p>
                                Kiyosaki frequently refers to gold and silver as <strong>&quot;God&apos;s money&quot;</strong> in contrast to fiat currency, which he calls &quot;government money&quot; or &quot;fake money.&quot;
                            </p>

                            <Callout type="info" title="Kiyosaki's Money Classifications">
                                <ul className="mb-0">
                                    <li><strong>God&apos;s Money:</strong> Gold and silver — natural elements that cannot be created or destroyed</li>
                                    <li><strong>Government Money:</strong> Paper currency and digital dollars — can be printed infinitely</li>
                                    <li><strong>People&apos;s Money:</strong> Bitcoin — created by people, limited supply, but still unproven</li>
                                </ul>
                            </Callout>

                            <p>
                                The distinction is crucial: Gold&apos;s supply is limited by nature. No government, central bank, or corporation can print more gold. This is why gold has maintained purchasing power for over 5,000 years while every paper currency in history has eventually failed.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl not-prose my-8">
                                <div className="flex items-start gap-4">
                                    <Quote className="w-8 h-8 text-amber-600 flex-shrink-0" />
                                    <div>
                                        <p className="text-amber-800 italic text-lg mb-2">
                                            &quot;Gold is God&apos;s money. It was here before humans, and it will be here after humans. You can&apos;t print it. You can&apos;t hack it. You can&apos;t make more of it in a computer.&quot;
                                        </p>
                                        <p className="text-amber-700 font-semibold">— Robert Kiyosaki</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Predictions */}
                        <section id="predictions" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 border border-blue-200">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">His Economic Predictions</h2>
                            </div>
                            <p>
                                Kiyosaki has a track record of warning about economic crises before they happen. In his 2002 book &quot;Rich Dad&apos;s Prophecy,&quot; he predicted a market crash around 2016. While his timing was off, his warnings about the fragility of the financial system proved prescient during the 2008 crash.
                            </p>
                            <p>
                                More recently, Kiyosaki has made increasingly urgent warnings:
                            </p>
                            <ul>
                                <li><strong>Dollar collapse:</strong> He predicts the dollar will lose its status as the world&apos;s reserve currency</li>
                                <li><strong>Hyperinflation risk:</strong> Massive money printing will lead to severe inflation</li>
                                <li><strong>Stock market crash:</strong> The &quot;everything bubble&quot; in stocks, bonds, and real estate will pop</li>
                                <li><strong>Banking crisis:</strong> More bank failures like Silicon Valley Bank are coming</li>
                            </ul>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-[#000080] text-lg mb-4">Kiyosaki&apos;s Recommendations</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                                        <h5 className="font-semibold text-green-700 mb-2">What He Recommends</h5>
                                        <ul className="text-sm text-green-800 space-y-1">
                                            <li>✓ Physical gold and silver</li>
                                            <li>✓ Real estate (income-producing)</li>
                                            <li>✓ Bitcoin (with caution)</li>
                                            <li>✓ Financial education</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                                        <h5 className="font-semibold text-red-700 mb-2">What He Warns Against</h5>
                                        <ul className="text-sm text-red-800 space-y-1">
                                            <li>✗ Saving dollars long-term</li>
                                            <li>✗ Paper gold (ETFs, futures)</li>
                                            <li>✗ Traditional 401(k) advice</li>
                                            <li>✗ Trusting the government/Fed</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-gradient-to-r from-[#000080] to-[#000060] rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Apply the Rich Dad Strategy</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA lets you convert paper retirement savings into physical gold—tax-free.</p>
                                <Button variant="gold" size="lg" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                                    <Link href="/quiz">Find the Best Gold IRA for You <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Strategy */}
                        <section id="strategy" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-100 rounded-lg text-green-600 border border-green-200">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">His Investment Strategy</h2>
                            </div>
                            <p>
                                Kiyosaki doesn&apos;t view gold as a &quot;get rich quick&quot; investment. Instead, he sees it as <strong>financial insurance</strong>—protection against economic crises and currency collapse.
                            </p>
                            <p>
                                Key elements of his gold strategy:
                            </p>
                            <ol>
                                <li><strong>Buy physical gold and silver, not paper:</strong> He warns against ETFs and other paper gold products that don&apos;t give you ownership of real metal</li>
                                <li><strong>Accumulate consistently:</strong> Buy regularly regardless of price—it&apos;s insurance, not speculation</li>
                                <li><strong>Hold long-term:</strong> Gold is for wealth preservation over decades, not short-term trading</li>
                                <li><strong>Don&apos;t wait for the &quot;perfect&quot; price:</strong> The best time to buy insurance is before you need it</li>
                            </ol>

                            <Callout type="tip" title="Kiyosaki on Timing">
                                &quot;I don&apos;t care what the price of gold is. I just keep buying. I&apos;m not buying gold to make money. I&apos;m buying gold because I don&apos;t trust the dollar. There&apos;s a big difference.&quot;
                            </Callout>
                        </section>

                        {/* Famous Quotes */}
                        <section id="quotes" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-100 rounded-lg text-purple-600 border border-purple-200">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">Famous Kiyosaki Gold Quotes</h2>
                            </div>

                            <div className="space-y-6 not-prose my-8">
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-300">
                                    <p className="text-slate-700 italic mb-2">&quot;If you don&apos;t know what gold is, you&apos;re in trouble. Gold is insurance. It&apos;s not an investment.&quot;</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-300">
                                    <p className="text-slate-700 italic mb-2">&quot;The reason I hold gold and silver is because I&apos;m hedging against the incompetence of our leaders.&quot;</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-300">
                                    <p className="text-slate-700 italic mb-2">&quot;Gold and silver are honest money. The dollar is dishonest money. Which would you rather hold?&quot;</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-300">
                                    <p className="text-slate-700 italic mb-2">&quot;I&apos;m not saying to put all your money in gold. I&apos;m saying, don&apos;t put all your faith in the dollar.&quot;</p>
                                </div>
                            </div>
                        </section>

                        {/* Apply the Strategy */}
                        <section id="apply" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600 border border-cyan-200">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">How to Apply This Strategy</h2>
                            </div>
                            <p>
                                If Kiyosaki&apos;s message resonates with you, here&apos;s how to take action:
                            </p>

                            <h3>Option 1: Buy Physical Gold Directly</h3>
                            <p>
                                Purchase gold and silver coins or bars from a reputable dealer and store them at home in a safe or in a secure vault. This gives you maximum control but no tax advantages.
                            </p>

                            <h3>Option 2: Open a Gold IRA (Recommended)</h3>
                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> lets you convert your existing 401(k) or IRA into physical gold and silver—tax-free. You get:
                            </p>
                            <ul>
                                <li>Physical gold ownership (not paper)</li>
                                <li>Tax-deferred or tax-free growth (depending on account type)</li>
                                <li>Professional, insured storage</li>
                                <li>Easy rollover from existing retirement accounts</li>
                            </ul>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 not-prose my-8">
                                <h4 className="font-bold text-[#000080] text-lg mb-4">Getting Started with a Gold IRA</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                                        <p className="text-slate-700">Take our <Link href="/quiz" className="text-[#B22234] hover:underline font-semibold">60-second quiz</Link> to find the best Gold IRA company for your situation</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                                        <p className="text-slate-700">Request a free information kit from your matched company</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#B22234] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                                        <p className="text-slate-700">Rollover your 401(k) or IRA into physical gold—tax-free</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Does Robert Kiyosaki recommend gold?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes, Robert Kiyosaki has been a vocal advocate for gold and silver investments for over 25 years. He calls gold &quot;God&apos;s money&quot; and recommends it as protection against inflation, currency devaluation, and economic crises. He specifically recommends physical gold over paper gold ETFs.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Why does Kiyosaki say &quot;savers are losers&quot;?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Kiyosaki says &quot;savers are losers&quot; because cash savings lose purchasing power to inflation every year. Since the dollar has lost over 96% of its value since 1913, people who simply save dollars are seeing their wealth erode. He recommends converting paper savings into real assets like gold that maintain purchasing power.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">What does &quot;God&apos;s money&quot; mean?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Kiyosaki calls gold and silver &quot;God&apos;s money&quot; because they are natural elements that cannot be created, printed, or digitally manufactured by governments or central banks. Unlike fiat currency which can be printed infinitely, gold&apos;s supply is limited by nature, making it a true store of value.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                                        <h4 className="text-lg font-bold">Does Kiyosaki recommend Gold IRAs?</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        Yes, Kiyosaki supports using retirement accounts to hold physical precious metals. A <Link href="/what-is-a-gold-ira" className="text-[#B22234] hover:underline">Gold IRA</Link> allows you to apply his wealth protection strategy with tax advantages, converting paper 401(k) assets into physical gold and silver tax-free through a rollover.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-[#000080] to-[#000060] rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22234]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Follow the Rich Dad Path?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Convert paper retirement savings into physical gold and silver—just like Kiyosaki recommends.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild className="bg-[#B22234] hover:bg-[#8b1c2a] text-white">
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
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
            <Footer />
        </main>
    );
}
