import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { TrendingDown, AlertTriangle, Calculator, ShieldCheck, ArrowRight, BarChart3, Clock, Coins } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Sequence of Returns Risk: The Hidden Retirement Killer | Rich Dad Retirement",
    description: "Understand sequence of returns risk and how it can devastate your retirement. Learn strategies to protect your savings from early retirement market crashes.",
    openGraph: {
        title: "Sequence of Returns Risk: Protect Your Retirement",
        description: "Learn why WHEN you experience market returns matters more than average returns for retirees.",
        type: "article",
    },
};

const takeaways = [
    "Sequence of returns risk is the danger of experiencing poor returns early in retirement.",
    "Two portfolios with identical average returns can have vastly different outcomes based on timing.",
    "A market crash in your first years of retirement can permanently deplete your savings.",
    "This risk only applies to portfolios being drawn down—it doesn't affect accumulators.",
    "The first 5-10 years of retirement are the 'danger zone' for sequence risk.",
    "Diversifying into non-correlated assets like gold can reduce sequence risk.",
    "Having 2-3 years of cash reserves prevents selling stocks at the worst time."
];

const tocItems = [
    { id: "overview", label: "What Is Sequence Risk?" },
    { id: "example", label: "The Math That Matters" },
    { id: "why-dangerous", label: "Why It's So Dangerous" },
    { id: "danger-zone", label: "The Danger Zone" },
    { id: "protection", label: "Protection Strategies" },
    { id: "gold-role", label: "Gold's Role" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Sequence of Returns Risk: The Hidden Retirement Killer",
            "description": "Understand sequence of returns risk and how it can devastate your retirement savings.",
            "image": "https://richdadretirement.com/images/sequence-risk.jpg",
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
                    "name": "What is sequence of returns risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sequence of returns risk is the danger that poor investment returns early in retirement will permanently damage your portfolio. When you're withdrawing money from your portfolio, the ORDER of returns matters as much as the average return. A crash early in retirement forces you to sell shares at low prices, leaving fewer shares to benefit from eventual recovery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I protect against sequence of returns risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Key protection strategies include: 1) Maintaining 2-3 years of cash reserves so you don't have to sell during crashes, 2) Diversifying into non-correlated assets like gold that may rise when stocks fall, 3) Using a flexible withdrawal strategy that reduces spending during down markets, 4) Building a 'bond tent' with higher fixed-income allocation in early retirement."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is the first decade of retirement so important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The first 5-10 years of retirement are the 'danger zone' for sequence risk because your portfolio is at its largest and you're starting to withdraw. A major crash during this period depletes your portfolio when it matters most, leaving fewer assets to compound over the remaining 20-30 years of retirement."
                    }
                }
            ]
        }
    ]
};

export default function SequenceOfReturnsRiskPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Retirement Planning
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Sequence of Returns Risk
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            The hidden danger that can destroy your retirement—even with &quot;average&quot; market returns. Here&apos;s what you need to know.
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
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Most people think retirement success is about getting good <em>average</em> returns. But there&apos;s a hidden danger that financial advisors rarely discuss: <strong>sequence of returns risk</strong>.
                            </p>
                            <p>
                                Here&apos;s the uncomfortable truth: two people with <em>identical</em> average returns over 30 years can have completely different outcomes. One might live comfortably; the other runs out of money. The difference? The <em>order</em> in which those returns occurred.
                            </p>
                            <p>
                                Understanding sequence risk is critical for anyone approaching or in retirement. It&apos;s the reason why some retirees who did &quot;everything right&quot; still run out of money—while others with similar portfolios thrive.
                            </p>
                        </section>

                        {/* The Math Example */}
                        <section id="example" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Math That Will Shock You</h2>
                            </div>
                            <p>
                                Let&apos;s look at two retirees who both have $1,000,000 and withdraw $50,000 per year. Both experience the same returns over 15 years—just in different order:
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                <h4 className="font-bold text-white text-lg mb-4">Same Average Returns, Different Outcomes</h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-green-500/20">
                                        <h5 className="font-semibold text-green-400 mb-3">Retiree A: Good Returns First</h5>
                                        <p className="text-sm text-slate-400 mb-3">Years 1-5: +15%, +12%, +18%, +10%, +8%</p>
                                        <p className="text-sm text-slate-400 mb-3">Years 6-15: Mix of gains and losses</p>
                                        <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
                                            <span className="text-xs text-green-400 font-semibold">After 15 years:</span>
                                            <div className="text-2xl font-bold text-green-400">$1,240,000</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-red-500/20">
                                        <h5 className="font-semibold text-red-400 mb-3">Retiree B: Bad Returns First</h5>
                                        <p className="text-sm text-slate-400 mb-3">Years 1-5: -15%, -12%, -18%, +5%, +3%</p>
                                        <p className="text-sm text-slate-400 mb-3">Years 6-15: Strong recovery</p>
                                        <div className="mt-4 p-3 bg-red-500/10 rounded-lg">
                                            <span className="text-xs text-red-400 font-semibold">After 15 years:</span>
                                            <div className="text-2xl font-bold text-red-400">$540,000</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-muted mt-4 text-center">Same average return. $700,000 difference. That&apos;s sequence risk.</p>
                            </div>

                            <p>
                                Both retirees experienced the same mathematical average return. But Retiree B faced a crash early—while withdrawing $50,000 per year. Those early withdrawals at low prices depleted shares that could never recover.
                            </p>
                        </section>

                        {/* Why So Dangerous */}
                        <section id="why-dangerous" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Why Sequence Risk Is So Dangerous</h2>
                            </div>
                            <p>
                                During the accumulation phase (when you&apos;re saving for retirement), sequence of returns doesn&apos;t matter much. In fact, crashes are beneficial—you buy more shares at lower prices.
                            </p>
                            <p>
                                But everything changes when you start <em>withdrawing</em>:
                            </p>
                            <ul>
                                <li><strong>You&apos;re selling shares at depressed prices</strong> to fund your withdrawals</li>
                                <li><strong>Fewer shares remain</strong> to benefit from eventual recovery</li>
                                <li><strong>The damage compounds</strong> over the remaining years of retirement</li>
                                <li><strong>You can&apos;t &quot;wait it out&quot;</strong> because you need income to live</li>
                            </ul>

                            <Callout type="warning" title="The Irreversible Problem">
                                Unlike younger investors who can recover from crashes, retirees who deplete their portfolios early cannot simply &quot;wait for recovery.&quot; Once you sell shares at a loss to fund living expenses, those shares are gone forever. The damage is permanent.
                            </Callout>
                        </section>

                        {/* The Danger Zone */}
                        <section id="danger-zone" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The &quot;Danger Zone&quot;: Years 1-10</h2>
                            </div>
                            <p>
                                Research shows that the first 5-10 years of retirement are critical. This period is often called the &quot;retirement red zone&quot; or &quot;sequence risk danger zone.&quot;
                            </p>
                            <p>
                                Why these years matter most:
                            </p>
                            <ul>
                                <li>Your portfolio is at its <strong>maximum size</strong>—you have the most to lose</li>
                                <li>You have <strong>20-30 more years</strong> of withdrawals ahead</li>
                                <li>Early losses have the <strong>longest time to compound</strong> negatively</li>
                                <li>A crash now is <strong>far more damaging</strong> than a crash in year 20</li>
                            </ul>

                            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20 not-prose my-8">
                                <h4 className="font-bold text-red-400 text-lg mb-4">Historical Danger Zone Examples</h4>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Retired January 2000 (Dot-Com Crash)</span>
                                        <span className="text-red-400 font-semibold">49% loss in first 3 years</span>
                                    </div>
                                    <div className="flex justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Retired January 2008 (Financial Crisis)</span>
                                        <span className="text-red-400 font-semibold">57% loss in first 2 years</span>
                                    </div>
                                    <div className="flex justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                        <span className="text-slate-300">Retired January 2020 (COVID Crash)</span>
                                        <span className="text-amber-400 font-semibold">34% loss (recovered quickly)</span>
                                    </div>
                                </div>
                                <p className="text-red-300 text-sm mt-4">Retirees who started withdrawals during these crashes faced devastating sequence risk.</p>
                            </div>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Worried About Sequence Risk?</h3>
                                <p className="mb-6 text-gray-200">A Gold IRA can provide protection during the critical early years of retirement.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find the Right Gold IRA <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Protection Strategies */}
                        <section id="protection" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">How to Protect Against Sequence Risk</h2>
                            </div>
                            <p>
                                While you can&apos;t control market returns, you can take steps to minimize sequence risk:
                            </p>

                            <h3>1. Build a Cash Reserve (2-3 Years)</h3>
                            <p>
                                Keep 2-3 years of living expenses in cash or short-term bonds. During a crash, draw from this reserve instead of selling stocks at depressed prices. This gives your portfolio time to recover.
                            </p>

                            <h3>2. Diversify Into Non-Correlated Assets</h3>
                            <p>
                                Assets like gold often rise when stocks fall. Having 10-20% of your portfolio in precious metals means you have assets to draw from (or rebalance) during stock market crashes.
                            </p>

                            <h3>3. Use Flexible Withdrawal Strategies</h3>
                            <p>
                                Instead of fixed 4% withdrawals, consider dynamic strategies that reduce spending during down markets. Cutting withdrawals by 10-20% during crashes can dramatically improve portfolio longevity.
                            </p>

                            <h3>4. Build a &quot;Bond Tent&quot;</h3>
                            <p>
                                Increase your bond allocation to 40-50% in the years immediately before and after retirement, then gradually reduce it. This reduces volatility during the danger zone.
                            </p>

                            <h3>5. Consider Partial Annuitization</h3>
                            <p>
                                Converting a portion of your portfolio to an annuity guarantees income regardless of market conditions. This reduces the amount you need to withdraw from volatile investments.
                            </p>
                        </section>

                        {/* Gold's Role */}
                        <section id="gold-role" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Gold&apos;s Role in Sequence Risk Protection</h2>
                            </div>
                            <p>
                                Gold is particularly valuable for managing sequence risk because of its behavior during crises:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl shadow-sm border border-white/10">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Crisis</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">S&P 500</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-white">2008 Financial Crisis</td>
                                            <td className="p-4 text-red-400 font-semibold">-37%</td>
                                            <td className="p-4 text-green-400 font-semibold">+5.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2020 COVID Crash</td>
                                            <td className="p-4 text-red-400 font-semibold">-34%</td>
                                            <td className="p-4 text-green-400 font-semibold">+25% (full year)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                When stocks crashed, gold held or gained value. A retiree with 15-20% in gold during these crashes could:
                            </p>
                            <ul>
                                <li>Sell gold at high prices instead of stocks at low prices</li>
                                <li>Rebalance by buying cheap stocks with gold proceeds</li>
                                <li>Maintain withdrawals without depleting stock holdings</li>
                            </ul>

                            <Callout type="tip" title="The Rebalancing Bonus">
                                During the 2008 crash, investors who sold gold (up 5%) to buy stocks (down 37%) captured enormous gains when stocks recovered. This &quot;rebalancing bonus&quot; only works if you own assets that move in opposite directions.
                            </Callout>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> lets you hold physical gold within your retirement account, making it easy to use gold as sequence risk insurance.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What is sequence of returns risk?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Sequence of returns risk is the danger that poor investment returns early in retirement will permanently damage your portfolio. When you&apos;re withdrawing money, the ORDER of returns matters as much as the average return. A crash early in retirement forces you to sell shares at low prices, leaving fewer shares to benefit from eventual recovery.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How can I protect against sequence risk?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        Key protection strategies include: 1) Maintaining 2-3 years of cash reserves so you don&apos;t have to sell during crashes, 2) Diversifying into non-correlated assets like gold that may rise when stocks fall, 3) Using a flexible withdrawal strategy that reduces spending during down markets, 4) Building a &quot;bond tent&quot; with higher fixed-income allocation in early retirement.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Why are the first years of retirement so critical?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        The first 5-10 years of retirement are the &quot;danger zone&quot; for sequence risk because your portfolio is at its largest and you&apos;re starting to withdraw. A major crash during this period depletes your portfolio when it matters most, leaving fewer assets to compound over the remaining 20-30 years of retirement.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Does sequence risk affect everyone?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-400">
                                        No—sequence risk primarily affects those who are withdrawing from their portfolios (retirees). During the accumulation phase, crashes are actually beneficial because you buy more shares at lower prices. The risk only becomes critical when you start taking money out rather than putting it in.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Protect Your Retirement from Sequence Risk</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Add gold to your retirement portfolio as insurance against early-retirement crashes.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/learn/stock-market-crash-protection">Crash Protection Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
