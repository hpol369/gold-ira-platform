import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { TrendingUp, ShieldCheck, Lock, DollarSign, Users, ArrowRight, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "7 Key Benefits of a Gold IRA in 2026 | Why Investors Choose Gold",
    description: "Discover the top benefits of a Gold IRA: tax advantages, inflation protection, portfolio diversification, and more. Learn why savvy investors are adding gold to their retirement.",
};

const takeaways = [
    "Gold IRAs offer the same tax benefits as regular IRAs (tax-deferred or tax-free growth).",
    "Physical gold acts as a proven hedge against inflation and dollar devaluation.",
    "Gold often moves inversely to stocks, providing true portfolio diversification.",
    "You legally own physical gold coins and bars in your retirement account.",
    "Gold is the only retirement asset that is not someone else's liability.",
    "Central banks worldwide are buying record amounts of gold—a telling sign.",
    "You can roll over existing 401(k) funds into gold tax-free and penalty-free."
];

const tocItems = [
    { id: "overview", label: "Why Gold IRAs?" },
    { id: "inflation", label: "1. Inflation Protection" },
    { id: "diversification", label: "2. True Diversification" },
    { id: "tax-benefits", label: "3. Tax Advantages" },
    { id: "control", label: "4. Control & Ownership" },
    { id: "crisis-protection", label: "5. Crisis Protection" },
    { id: "legacy", label: "6. Generational Wealth" },
    { id: "central-banks", label: "7. Central Bank Signal" },
    { id: "faq", label: "FAQs" }
];

export default function GoldIraBenefitsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Financial Education
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            7 Critical Benefits of a Gold IRA
                        </h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            Why the wealthy use physical precious metals to stay rich—while the middle class loses purchasing power every year.
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
                                Most financial advisors won&apos;t tell you about <strong>Gold IRA benefits</strong>. Why? Because they can&apos;t earn commissions selling you physical metals. They make money on stocks, bonds, and mutual funds—not gold.
                            </p>
                            <p>
                                But if you look at how the truly wealthy protect their assets, you&apos;ll notice a pattern: they own real, tangible assets that hold value regardless of what governments or central banks do to currencies. Gold has been money for over 5,000 years—long before paper currencies existed.
                            </p>
                            <p>
                                In this guide, we&apos;ll explore the seven most important benefits of adding a Gold IRA to your retirement strategy. Whether you&apos;re concerned about inflation, market crashes, or simply want more control over your retirement, understanding these benefits is the first step.
                            </p>
                        </section>

                        {/* Benefit 1: Inflation Protection */}
                        <section id="inflation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">1. Inflation Protection</h2>
                            </div>
                            <p>
                                Since the Federal Reserve was created in 1913, the US dollar has lost over <strong>96% of its purchasing power</strong>. What cost $1 in 1913 now costs over $30. Your dollars are constantly losing value—every single day.
                            </p>
                            <p>
                                Gold, on the other hand, has maintained its purchasing power across centuries. Here&apos;s a striking example: In 1920, an ounce of gold (~$20) could buy a high-quality men&apos;s suit. Today, an ounce of gold (~$2,000+) still buys a high-quality men&apos;s suit. The gold didn&apos;t change—the dollar collapsed.
                            </p>

                            <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                <h4 className="font-bold text-primary text-lg mb-4">The Inflation Math</h4>
                                <p className="text-text-muted mb-4">Consider what happens to $100,000 in savings over 20 years at different inflation rates:</p>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="p-4 bg-white rounded-xl border border-gray-100">
                                        <div className="text-2xl font-bold text-red-500">$67,297</div>
                                        <div className="text-xs text-text-muted">@ 2% inflation</div>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-gray-100">
                                        <div className="text-2xl font-bold text-red-500">$45,639</div>
                                        <div className="text-xs text-text-muted">@ 4% inflation</div>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-gray-100">
                                        <div className="text-2xl font-bold text-red-500">$31,180</div>
                                        <div className="text-xs text-text-muted">@ 6% inflation</div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-muted mt-4">Your savings lose purchasing power even when the balance stays the same. Gold protects against this erosion.</p>
                            </div>

                            <p>
                                A Gold IRA locks in your purchasing power. When the cost of living goes up, the price of gold typically rises proportionally, preserving your wealth in real terms.
                            </p>
                        </section>

                        {/* Benefit 2: True Diversification */}
                        <section id="diversification" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">2. True Portfolio Diversification</h2>
                            </div>
                            <p>
                                Most people think they&apos;re diversified because they own multiple mutual funds. But here&apos;s the problem: <strong>owning 5 different stock funds isn&apos;t diversification</strong>. If the stock market crashes, they all go down together.
                            </p>
                            <p>
                                True diversification means owning assets that behave differently from each other. Gold often has a <strong>negative correlation</strong> to stocks—meaning when stocks fall, gold tends to rise.
                            </p>

                            <Callout type="info" title="2008 Financial Crisis Example">
                                During the 2008 financial crisis, the S&P 500 fell 37%. Meanwhile, gold rose 5.5%. Investors with gold in their portfolios weathered the storm far better than those with stocks alone. This inverse relationship is the essence of true diversification.
                            </Callout>

                            <p>
                                Adding just 10-20% precious metals to a traditional portfolio can significantly reduce overall volatility while maintaining strong long-term returns. This is why institutional investors, pension funds, and billionaires all hold physical gold.
                            </p>
                        </section>

                        {/* Benefit 3: Tax Advantages */}
                        <section id="tax-benefits" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">3. Powerful Tax Advantages</h2>
                            </div>
                            <p>
                                One of the most overlooked <strong>gold IRA benefits</strong> is the tax treatment. Gold IRAs offer the same tax advantages as regular IRAs:
                            </p>
                            <ul>
                                <li><strong>Traditional Gold IRA:</strong> Contributions may be tax-deductible. Gains grow tax-deferred until withdrawal.</li>
                                <li><strong>Roth Gold IRA:</strong> Contributions are after-tax, but qualified withdrawals (including all gains) are 100% tax-free.</li>
                            </ul>
                            <p>
                                Even better: you can <strong>roll over existing 401(k) or IRA funds into a Gold IRA</strong> completely tax-free and penalty-free. This allows you to convert &quot;paper profits&quot; into physical gold without triggering any taxable event.
                            </p>
                            <p>
                                Compare this to buying gold outside of an IRA, where you&apos;d pay capital gains taxes (up to 28% for collectibles) when you sell. The Gold IRA structure lets your gold appreciate tax-advantaged—potentially for decades.
                            </p>
                            <p>
                                Learn more about the tax rules in our detailed guide to <Link href="/learn/gold-ira-tax-rules">Gold IRA tax rules</Link>.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Explore Your Options?</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to find the best gold IRA company for your situation.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Get Your Free Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Benefit 4: Control & Ownership */}
                        <section id="control" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">4. True Ownership & Control</h2>
                            </div>
                            <p>
                                With a Gold IRA, you are buying <strong>specific, physical bars and coins</strong> that are allocated to you. You&apos;re not buying a paper &quot;promise&quot; or an ETF share that can be diluted. You own the metal directly.
                            </p>
                            <p>
                                This matters because most financial assets are actually <strong>someone else&apos;s liability</strong>:
                            </p>
                            <ul>
                                <li><strong>Stocks:</strong> Dependent on company performance and management decisions</li>
                                <li><strong>Bonds:</strong> IOUs that depend on the issuer&apos;s ability to pay</li>
                                <li><strong>Bank deposits:</strong> Loans to the bank that can be frozen or seized</li>
                                <li><strong>ETFs:</strong> Paper claims that may not be backed 1:1 with physical assets</li>
                            </ul>
                            <p>
                                Physical gold in a secure depository is <strong>your asset, period</strong>. It can&apos;t be hacked, it can&apos;t be diluted through additional share issuance, and it can&apos;t be made worthless by corporate bankruptcy or government default.
                            </p>
                        </section>

                        {/* Benefit 5: Crisis Protection */}
                        <section id="crisis-protection" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">5. Protection During Crises</h2>
                            </div>
                            <p>
                                Gold has a proven track record as a &quot;safe haven&quot; during times of economic, political, and geopolitical turmoil. When fear rises, investors flee to gold:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b font-bold text-primary">Crisis Event</th>
                                            <th className="p-4 border-b font-bold text-primary">Stock Performance</th>
                                            <th className="p-4 border-b font-bold text-primary">Gold Performance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        <tr>
                                            <td className="p-4">2008 Financial Crisis</td>
                                            <td className="p-4 text-red-500 font-semibold">-37%</td>
                                            <td className="p-4 text-green-500 font-semibold">+5.5%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">2020 COVID Crash (Feb-Mar)</td>
                                            <td className="p-4 text-red-500 font-semibold">-34%</td>
                                            <td className="p-4 text-green-500 font-semibold">+3.6%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">2022 Bear Market</td>
                                            <td className="p-4 text-red-500 font-semibold">-18%</td>
                                            <td className="p-4 text-amber-500 font-semibold">+0.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                Gold provides insurance for your portfolio. Like any insurance, you hope you won&apos;t need it—but you&apos;ll be grateful you have it when crisis strikes.
                            </p>
                        </section>

                        {/* Benefit 6: Generational Wealth */}
                        <section id="legacy" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">6. Generational Wealth Transfer</h2>
                            </div>
                            <p>
                                Gold is the ultimate legacy asset. It is tangible wealth that can be passed down to children and grandchildren with minimal complications:
                            </p>
                            <ul>
                                <li><strong>No maintenance required:</strong> Unlike real estate, gold doesn&apos;t need repairs or property management</li>
                                <li><strong>No business risk:</strong> Unlike stocks, it doesn&apos;t depend on a company staying profitable</li>
                                <li><strong>Universally recognized:</strong> Gold is valued everywhere in the world</li>
                                <li><strong>Easy to divide:</strong> Can be split equally among multiple heirs</li>
                                <li><strong>Survives currency collapse:</strong> Unlike cash, maintains value even if the dollar fails</li>
                            </ul>
                            <p>
                                Wealthy families have passed gold down for centuries. It&apos;s one of the few assets that truly stands the test of time.
                            </p>
                        </section>

                        {/* Benefit 7: Central Banks */}
                        <section id="central-banks" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">7. The Central Bank Signal</h2>
                            </div>
                            <p>
                                Here&apos;s something most investors don&apos;t realize: <strong>central banks around the world are buying record amounts of gold</strong>. In 2022-2024, global central bank gold purchases reached all-time highs.
                            </p>
                            <p>
                                Why does this matter? Central banks understand money better than anyone. If they&apos;re aggressively accumulating gold, it tells you something about their confidence in paper currencies—including the US dollar.
                            </p>

                            <Callout type="tip" title="Rich Dad Insight">
                                &quot;If central banks are buying gold, shouldn&apos;t you? These are the institutions that print money. When they choose to hold real assets instead of their own currency, that&apos;s the ultimate vote of no confidence in the system they control.&quot;
                            </Callout>

                            <p>
                                Countries like China, Russia, India, and Turkey have been particularly aggressive buyers. They&apos;re preparing for a world where the US dollar may no longer be the dominant reserve currency. Smart individual investors are doing the same.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA Benefits: Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What are the main benefits of a Gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        The main benefits include: inflation protection, true portfolio diversification, tax advantages (same as traditional IRAs), tangible ownership of physical assets, crisis protection during market crashes, wealth transfer to heirs, and alignment with central bank strategies. Gold IRAs give you something most retirement accounts can&apos;t—real assets that aren&apos;t dependent on the stock market or the dollar&apos;s value.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">Is a Gold IRA a good investment?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        A Gold IRA can be an excellent investment for those seeking to protect against inflation, diversify away from stocks, and preserve wealth long-term. However, it&apos;s typically recommended as 10-20% of a retirement portfolio—not 100%. Gold is better for preservation than growth, so it complements stocks rather than replacing them entirely.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">What are the disadvantages of a Gold IRA?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Gold IRAs have some drawbacks: higher fees than regular IRAs (storage and custodian costs), no dividends or interest income, price volatility in the short term, no employer matching (unlike 401(k)s), and lower contribution limits. They also require working with specialized custodians. For a balanced view, see our <Link href="/guide/gold-ira-guide" className="text-secondary hover:underline">complete Gold IRA guide</Link>.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">How does gold protect against inflation?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        When governments print more money (inflation), each dollar becomes worth less. But gold is finite—you can&apos;t print more of it. As dollars lose purchasing power, it takes more dollars to buy the same amount of gold. This means gold&apos;s price tends to rise with inflation, preserving your real purchasing power over time.
                                    </p>
                                </details>

                                <details className="group bg-white rounded-xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary">
                                        <h4 className="text-lg font-bold">How much of my portfolio should be in gold?</h4>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-gray-700">
                                        Most financial advisors who recommend precious metals suggest 10-20% of your total retirement portfolio. Conservative investors might stick to 5-10%, while those more concerned about economic instability might go up to 25%. The exact amount depends on your risk tolerance, time horizon, and overall financial situation.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Protect Your Retirement?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find out which gold IRA company is the best fit for your goals and portfolio size.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/gold-ira-guide">Read the Complete Guide</Link>
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
