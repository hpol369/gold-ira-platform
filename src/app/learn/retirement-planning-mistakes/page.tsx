import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { AlertTriangle, TrendingDown, Clock, PieChart, ArrowRight, DollarSign, ShieldCheck, Target } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "10 Retirement Planning Mistakes That Destroy Wealth",
    description: "Avoid these 10 costly retirement planning mistakes. Learn about sequence of returns risk, over-concentration in stocks, ignoring inflation, and more.",
    openGraph: {
        title: "10 Retirement Planning Mistakes to Avoid",
        description: "Common retirement planning mistakes that destroy wealth and how to avoid them.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

const takeaways = [
    "Starting too late is the #1 retirement mistake—compound interest needs time to work.",
    "Over-concentration in stocks leaves retirees vulnerable to market crashes at the worst time.",
    "Ignoring inflation means your \"safe\" savings lose purchasing power every year.",
    "Underestimating healthcare costs can devastate retirement budgets—plan for $300K+ per couple.",
    "Sequence of returns risk can destroy a 30-year retirement plan in the first 5 years.",
    "Diversifying into gold and other real assets protects against multiple retirement risks."
];

const tocItems = [
    { id: "overview", label: "Why Mistakes Matter" },
    { id: "starting-late", label: "1. Starting Too Late" },
    { id: "concentration", label: "2. Over-Concentration in Stocks" },
    { id: "inflation", label: "3. Ignoring Inflation" },
    { id: "sequence", label: "4. Sequence of Returns Risk" },
    { id: "healthcare", label: "5. Underestimating Healthcare" },
    { id: "social-security", label: "6. Claiming SS Early" },
    { id: "fees", label: "7. Ignoring Fees" },
    { id: "withdrawal", label: "8. Wrong Withdrawal Rate" },
    { id: "taxes", label: "9. Tax Inefficiency" },
    { id: "plan", label: "10. No Written Plan" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "10 Retirement Planning Mistakes That Destroy Wealth",
            "description": "Avoid these 10 costly retirement planning mistakes that can devastate your retirement savings.",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-23",
            "dateModified": "2026-01-23"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the biggest mistake people make in retirement planning?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The biggest retirement planning mistake is starting too late. Compound interest needs time to work—someone starting at 25 can save half as much as someone starting at 35 and still end up with more money. The second biggest mistake is over-concentration in stocks, which leaves retirees vulnerable to market crashes at the worst possible time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I avoid running out of money in retirement?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To avoid running out of money: 1) Use a safe withdrawal rate (3-4% annually), 2) Diversify beyond stocks into bonds, gold, and real assets, 3) Plan for sequence of returns risk by having 2-3 years of expenses in cash/bonds, 4) Account for inflation by holding assets that grow with prices, 5) Have a written retirement plan and review it annually."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is sequence of returns risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sequence of returns risk is the danger that poor investment returns early in retirement can permanently deplete your portfolio—even if average returns over time are good. A 30% market crash in year 1 of retirement is far more damaging than the same crash in year 20, because you're withdrawing from a depleted base."
                    }
                }
            ]
        }
    ]
};

export default function RetirementPlanningMistakesPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-slate-50 backdrop-blur-sm py-16 border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Retirement Planning
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-6">
                            10 Retirement Planning Mistakes That Destroy Wealth
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            You've spent 30+ years building your retirement savings. You've done what most Americans couldn't—you actually saved. Here are the mistakes that could undo all that hard work, and how to avoid them.
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
                    <article className="flex-1 prose prose-lg  prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-[#000080] prose-li:text-slate-600 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <p className="lead">
                                Here's the truth nobody tells you: the financial industry makes money whether you win or lose. They get their fees either way. So when they give you "advice," ask yourself whose interests they're really serving.
                            </p>
                            <p>
                                You've already won the hardest part—you actually saved for retirement. You've got $500k, $600k, maybe more. That puts you ahead of 90% of Americans. Now the challenge is protecting it. Here are the mistakes that destroy what people like you have spent a lifetime building.
                            </p>
                        </section>

                        {/* 1. Starting Too Late */}
                        <section id="starting-late" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">1. Starting Too Late</h2>
                            </div>
                            <p>
                                If you're reading this at 55 or 60, you already know this isn't your issue. You started decades ago. You showed up every day, maxed out your contributions when you could, and built something real. But if you have kids or grandkids who haven't started? Show them these numbers:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Starting Age</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">Monthly Savings</th>
                                            <th className="p-4 border-b border-slate-200 font-bold text-[#000080]">At Age 65 (7% return)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="p-4 text-[#000080]">25</td>
                                            <td className="p-4 text-slate-500">$500</td>
                                            <td className="p-4 text-green-700 font-semibold">$1,199,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">35</td>
                                            <td className="p-4 text-slate-500">$500</td>
                                            <td className="p-4 font-semibold text-slate-600">$566,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#000080]">45</td>
                                            <td className="p-4 text-slate-500">$500</td>
                                            <td className="p-4 text-red-700 font-semibold">$246,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>For you:</strong> If you're 55+ and have $500k or more saved, you're not "behind"—you're ahead of most Americans. Your focus now should be protecting what you have, not chasing returns.
                            </p>
                        </section>

                        {/* 2. Over-Concentration */}
                        <section id="concentration" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">2. Over-Concentration in Stocks</h2>
                            </div>
                            <p>
                                This is the big one for people like you. You've got 80%, 90%, maybe 100% of your 401k in stocks. Your broker says "stay diversified"—but having 10 different stock funds isn't diversification. When the market drops, they all drop together.
                            </p>
                            <p>
                                Remember 2008? People with stock-heavy portfolios lost 30-50% of their savings right when they needed to start withdrawals. Some folks had to keep working into their 70s. Others never recovered. And their brokers? Still collecting fees.
                            </p>
                            <p>
                                <strong>The fix:</strong> Real diversification means owning things that don't move together. When stocks crashed 37% in 2008, gold went UP 25%. A <Link href="/what-is-a-gold-ira">Gold IRA</Link> lets you move part of your 401k into physical gold while keeping your tax advantages.
                            </p>
                        </section>

                        {/* 3. Ignoring Inflation */}
                        <section id="inflation" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-[#B22234]">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">3. Ignoring Inflation</h2>
                            </div>
                            <p>
                                You've watched grocery prices double. You've seen what happened to gas prices. You're not imagining it—your dollars buy less every year. At 3% inflation, your $600,000 becomes $300,000 in purchasing power over 24 years. At 7-9% like we saw in 2021-2023? Even faster.
                            </p>
                            <p>
                                The "safe" play of keeping everything in cash or bonds? That's how you slowly go broke. Your money is losing value every single day it sits there.
                            </p>
                            <p>
                                <strong>The fix:</strong> Own things that rise with inflation. Gold has maintained its purchasing power for 5,000 years. An ounce of gold in 1920 bought the same quality suit as an ounce today. Meanwhile, the dollar has lost 97% of its value. Think about that.
                            </p>

                            <Callout type="info" title="The Gold Solution">
                                Gold has maintained purchasing power for 5,000+ years. An ounce of gold in 1920 bought the same quality suit as an ounce today. Physical gold in a Gold IRA provides inflation protection within a tax-advantaged account.
                            </Callout>
                        </section>

                        {/* 4. Sequence of Returns */}
                        <section id="sequence" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-700">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">4. Ignoring Sequence of Returns Risk</h2>
                            </div>
                            <p>
                                <strong>Sequence of returns risk</strong> is the danger that poor returns early in retirement permanently deplete your portfolio—even if long-term average returns are good.
                            </p>
                            <p>
                                A 30% crash in year 1 of retirement is catastrophic because you&apos;re withdrawing from a depleted base. The same crash in year 20 matters much less.
                            </p>
                            <p>
                                <strong>The fix:</strong> Build a &quot;retirement buffer&quot; of 2-3 years of expenses in cash, bonds, or gold. During crashes, draw from the buffer instead of selling stocks at the bottom. Learn more in our <Link href="/learn/sequence-of-returns-risk">sequence of returns risk guide</Link>.
                            </p>
                        </section>

                        {/* 5. Healthcare */}
                        <section id="healthcare" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-700">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">5. Underestimating Healthcare Costs</h2>
                            </div>
                            <p>
                                Fidelity estimates a 65-year-old couple retiring in 2026 needs <strong>$315,000</strong> for healthcare costs in retirement—and that&apos;s not including long-term care.
                            </p>
                            <p>
                                Medicare doesn&apos;t cover everything: premiums, deductibles, dental, vision, hearing, and long-term care add up. Many retirees are shocked by these costs.
                            </p>
                            <p>
                                <strong>The fix:</strong> Plan for $300K+ per couple. Consider an HSA (triple tax advantage), Medigap policies, and long-term care insurance.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-[#000080] text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-[#000080]">You've Built It. Now Protect It.</h3>
                                <p className="mb-6 text-gray-200">After 30+ years of work, your 401k isn't just a number—it's your freedom. A Gold IRA protects against the crashes, inflation, and timing risks that destroy retirements.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* 6. Social Security */}
                        <section id="social-security" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-700">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">6. Claiming Social Security Too Early</h2>
                            </div>
                            <p>
                                Here's where it gets complicated for people with physical jobs. The calculators say wait until 70. But if you're a nurse with 35 years on your feet, a trucker with a bad back, or a factory worker whose body is telling you it's time—waiting may not be an option.
                            </p>
                            <p>
                                The math is real: claiming at 62 versus 70 can mean $12,960 less per year for life. But the math doesn't account for bodies that wear out.
                            </p>
                            <p>
                                <strong>The real answer:</strong> If you can wait, the numbers favor waiting. But if your body says it's time to stop at 62, make sure your savings can bridge the gap. That's why protecting your 401k matters so much—it gives you options when your body makes the decision for you.
                            </p>
                        </section>

                        {/* 7. Fees */}
                        <section id="fees" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-700/50 rounded-lg text-slate-500">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">7. Ignoring Investment Fees</h2>
                            </div>
                            <p>
                                A 1% annual fee doesn&apos;t sound like much, but over 30 years it can consume 25-30% of your portfolio. Many 401(k) plans and actively managed funds charge 1-2%.
                            </p>
                            <p>
                                <strong>The fix:</strong> Use low-cost index funds (0.03-0.10% expense ratios). Review 401(k) fund options. Consider rolling old 401(k)s to lower-cost IRAs.
                            </p>
                        </section>

                        {/* 8. Withdrawal Rate */}
                        <section id="withdrawal" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-700">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">8. Using the Wrong Withdrawal Rate</h2>
                            </div>
                            <p>
                                The traditional &quot;4% rule&quot; said you could withdraw 4% of your portfolio annually. But with longer lifespans and lower expected returns, many experts now recommend 3-3.5%.
                            </p>
                            <p>
                                Withdrawing too much early in retirement dramatically increases the chance of running out of money. Withdrawing too little means unnecessarily restricting your lifestyle.
                            </p>
                            <p>
                                <strong>The fix:</strong> Use a flexible withdrawal strategy. Reduce withdrawals during market downturns; increase during good years. Have a buffer of safe assets.
                            </p>
                        </section>

                        {/* 9. Tax Inefficiency */}
                        <section id="taxes" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">9. Tax Inefficiency</h2>
                            </div>
                            <p>
                                Many retirees have all their savings in traditional 401(k)s/IRAs—meaning every withdrawal is taxed as ordinary income. This limits flexibility and can push you into higher tax brackets.
                            </p>
                            <p>
                                <strong>The fix:</strong> Build tax diversification across:
                            </p>
                            <ul>
                                <li><strong>Traditional accounts:</strong> Tax-deferred (401k, Traditional IRA)</li>
                                <li><strong>Roth accounts:</strong> Tax-free withdrawals</li>
                                <li><strong>Taxable accounts:</strong> Lower capital gains rates</li>
                                <li><strong>Gold IRA:</strong> Tax-advantaged precious metals</li>
                            </ul>
                        </section>

                        {/* 10. No Plan */}
                        <section id="plan" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] m-0">10. No Written Retirement Plan</h2>
                            </div>
                            <p>
                                Surprisingly, most Americans don&apos;t have a written retirement plan. They have a vague goal (&quot;retire at 65&quot;) but no specific strategy for getting there or maintaining their lifestyle.
                            </p>
                            <p>
                                <strong>The fix:</strong> Create a written plan that includes:
                            </p>
                            <ul>
                                <li>Target retirement age and lifestyle</li>
                                <li>Required savings and current gap</li>
                                <li>Asset allocation strategy</li>
                                <li>Withdrawal strategy</li>
                                <li>Healthcare and long-term care plan</li>
                                <li>Estate planning documents</li>
                            </ul>
                            <p>
                                Review and update the plan annually.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What is the biggest retirement planning mistake?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        The biggest mistake is starting too late. Compound interest needs time—someone starting at 25 can save half as much as someone starting at 35 and end up with more. The second biggest is over-concentration in stocks, leaving retirees vulnerable to crashes.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">How do I avoid running out of money in retirement?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Use a safe withdrawal rate (3-4% annually), diversify beyond stocks into bonds, gold, and real assets, plan for sequence of returns risk with 2-3 years of cash/bonds, account for inflation, and have a written retirement plan reviewed annually.
                                    </p>
                                </details>

                                <details className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#000080]">
                                        <h4 className="text-lg font-bold">What is sequence of returns risk?</h4>
                                        <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500">
                                        Sequence of returns risk is the danger that poor returns early in retirement permanently deplete your portfolio—even if average returns are good. A 30% crash in year 1 is far more damaging than in year 20 because you&apos;re withdrawing from a depleted base.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-[#000080] relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-[#000080]">You've Done the Hard Part. Don't Blow It Now.</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">30+ years of early mornings and hard work built your nest egg. Diversifying into gold protects it from the crashes that destroy retirements.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-[#000080] hover:bg-white/10">
                                        <Link href="/learn/sequence-of-returns-risk">Sequence Risk Guide</Link>
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
                    <AugustaCTA variant="footer" trackSource="learn-retirement-planning-mistakes" />
                </Container>
            </section>
        </main>
    );
}
