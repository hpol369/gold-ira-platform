import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, HelpCircle, Coins, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Can I Buy Gold With My 401k? Yes, Here's How (2026)",
    description: "Yes, you can buy gold with your 401k through a Gold IRA rollover. Learn the simple process to convert your retirement savings to physical gold.",
};

const faqs = [
    {
        question: "Can I buy gold directly with my current 401k?",
        answer: "Not directly through your employer's 401(k) plan. Most 401(k) plans only offer stocks, bonds, and mutual funds. To buy physical gold, you need to roll over funds to a 'Self-Directed IRA' (also called a Gold IRA). This is a different type of retirement account that's allowed to hold physical precious metals."
    },
    {
        question: "Is a Gold IRA rollover the same as cashing out my 401k?",
        answer: "No, they're completely different. Cashing out means withdrawing the money and paying taxes plus penalties. A rollover moves your money from one retirement account to another. You never touch the money, so there are no taxes or penalties. Your retirement savings stay tax-sheltered."
    },
    {
        question: "What kind of gold can I buy with my 401k money?",
        answer: "The IRS has specific rules. You can buy: American Gold Eagles, Canadian Gold Maple Leafs, Australian Gold Kangaroos, gold bars that are .995 fine or better from approved refiners, and certain other government-minted coins. The gold must be stored in an IRS-approved depository, not at your home."
    },
    {
        question: "How much does it cost to set up a Gold IRA?",
        answer: "Setup fees vary by company. Many top companies waive the first-year fees for new accounts. After that, expect annual fees of $150-$300 for storage and account maintenance. For accounts over $50,000, these fees represent less than 0.5% of your holdings."
    },
    {
        question: "Can I still contribute to my Gold IRA after I set it up?",
        answer: "Yes! A Gold IRA follows the same contribution rules as a traditional IRA. In 2026, you can contribute up to $7,000 per year ($8,000 if you're 50 or older). You can also roll over additional funds from other retirement accounts at any time."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Can I Buy Gold With My 401k? Yes, Here's How (2026)",
            "description": "Yes, you can buy gold with your 401k through a Gold IRA rollover. Learn the simple process to convert your retirement savings to physical gold.",
            "image": "https://richdadretirement.com/images/can-buy-gold-401k-guide.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-27",
            "dateModified": "2026-01-27"
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

export default function CanIBuyGoldWith401kPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />

            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6 border border-blue-200">
                            <HelpCircle className="w-4 h-4" />
                            QUICK ANSWER
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            Can I Buy Gold With My 401k?
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            The simple answer to one of the most common retirement questions, plus exactly how to do it.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-a:text-[#B22234] max-w-none">

                        {/* Big Direct Answer */}
                        <div className="not-prose mb-10 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 text-center">
                            <p className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                                Yes, you can buy gold with your 401k.
                            </p>
                            <p className="text-xl text-slate-600">
                                You do this through a <strong className="text-[#B22234]">&quot;Gold IRA Rollover.&quot;</strong>
                            </p>
                        </div>

                        {/* The Short Answer */}
                        <h2 className="text-[#000080]">The Short Answer</h2>
                        <p>
                            <strong className="text-green-400">Yes.</strong> You can absolutely use your 401(k) money to buy physical gold. The IRS has allowed this since 1997.
                        </p>
                        <p>
                            Here&apos;s the catch: you can&apos;t buy gold directly <em>inside</em> your existing 401(k). Instead, you transfer some or all of your 401(k) funds to a special type of IRA that&apos;s designed to hold physical precious metals. This is called a <strong>Gold IRA</strong> or <strong>Precious Metals IRA</strong>.
                        </p>
                        <p>
                            The process is called a &quot;rollover&quot; and it&apos;s completely tax-free when done correctly.
                        </p>

                        {/* The Longer Answer */}
                        <h2 className="text-[#000080]">The Longer Answer: How It Actually Works</h2>
                        <p>
                            Most 401(k) plans only let you invest in stocks, bonds, and mutual funds. They don&apos;t offer physical gold as an option. That&apos;s just how traditional retirement plans work.
                        </p>
                        <p>
                            But the IRS created a workaround. They allow something called a &quot;Self-Directed IRA.&quot; This is an IRA where <em>you</em> decide what to invest in, including physical gold, silver, platinum, and palladium.
                        </p>
                        <p>
                            To get your 401(k) money into a Self-Directed IRA, you do a &quot;rollover.&quot; This means:
                        </p>
                        <ul>
                            <li>Your 401(k) money transfers directly to the new IRA</li>
                            <li>You never touch the money yourself</li>
                            <li>It stays tax-sheltered the entire time</li>
                            <li>No taxes, no penalties</li>
                        </ul>
                        <p>
                            Once the money is in your Gold IRA, you can use it to buy physical gold coins and bars from IRS-approved dealers. The gold is stored in a secure, insured depository until you&apos;re ready to take distributions in retirement.
                        </p>

                        {/* What Can You Buy */}
                        <h2 className="text-[#000080]">What Gold Can You Buy?</h2>
                        <p>
                            The IRS has specific rules about what precious metals qualify for IRAs. Here&apos;s what you can purchase:
                        </p>

                        <div className="not-prose my-8">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                                    <h4 className="font-bold text-[#000080] text-lg mb-3 flex items-center gap-2">
                                        <Coins className="w-5 h-5 text-[#B22234]" />
                                        Gold Coins
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            American Gold Eagles
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            Canadian Gold Maple Leafs
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            American Gold Buffalos
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            Australian Gold Kangaroos
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                                    <h4 className="font-bold text-[#000080] text-lg mb-3 flex items-center gap-2">
                                        <Coins className="w-5 h-5 text-[#B22234]" />
                                        Gold Bars
                                    </h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            Must be .995+ fineness
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            From COMEX/NYMEX approved refiners
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            Any size (1 oz, 10 oz, kilo, etc.)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                            Popular brands: PAMP, Credit Suisse
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p>
                            Your Gold IRA company will help you choose the right products for your budget and goals. They&apos;ll make sure everything you buy is IRS-approved.
                        </p>

                        {/* Steps to Do It */}
                        <h2 className="text-[#000080]">Steps to Buy Gold With Your 401k</h2>
                        <p>
                            The process is simpler than most people expect:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-[#000080] text-lg mb-1">Contact a Gold IRA Company</h4>
                                    <p className="text-slate-600">They specialize in this exact process. Call them, tell them you want to move your 401k to gold, and they&apos;ll walk you through everything.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-[#000080] text-lg mb-1">Open Your Gold IRA Account</h4>
                                    <p className="text-slate-600">Fill out an application (takes about 15 minutes). The company handles the custodian setup for you.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-[#000080] text-lg mb-1">Roll Over Your 401k Funds</h4>
                                    <p className="text-slate-600">Your new custodian requests a direct transfer from your 401(k). This takes 1-3 weeks depending on your old plan.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-5 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="w-10 h-10 rounded-full bg-[#B22234] text-[#000080] flex items-center justify-center font-bold shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-[#000080] text-lg mb-1">Buy Your Gold</h4>
                                    <p className="text-slate-600">Once funds arrive, work with your dealer to select your gold products. They ship directly to a secure depository.</p>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Links */}
                        <div className="not-prose my-10 p-6 rounded-xl bg-slate-50 border border-slate-200">
                            <h3 className="font-bold text-[#000080] text-lg mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#B22234]" />
                                Learn More
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/rollover/401k-to-gold-ira" className="flex items-center gap-2 text-[#B22234] hover:text-[#B22234]/80 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                        <span>401k to Gold IRA Rollover: Complete Process</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/what-is-a-gold-ira" className="flex items-center gap-2 text-[#B22234] hover:text-[#B22234]/80 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                        <span>What is a Gold IRA? Beginner&apos;s Guide</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B22234]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">Ready to Buy Gold With Your 401k?</h3>
                                <p className="mb-6 text-gray-200">Find out which Gold IRA company is the best fit for your situation.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find My Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-[#000080]">Common Questions</h2>

                        <div className="space-y-4 not-prose">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">{faq.question}</h4>
                                        <span className="shrink-0 rounded-full bg-slate-200 p-1.5 text-[#B22234] sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-600">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>

                        <div className="mt-12">
                            <AuthorBox />
                        </div>

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-100">
                <Container>
                    <AugustaCTA variant="footer" trackSource="guide-can-buy-gold-401k" />
                </Container>
            </section>
        </main>
    );
}
