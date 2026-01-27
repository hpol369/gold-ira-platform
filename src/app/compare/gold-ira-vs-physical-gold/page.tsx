import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ComparisonTable, ComparisonRow } from "@/components/compare/ComparisonTable";
import { VerdictBox } from "@/components/compare/VerdictBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, AlertTriangle, DollarSign, Lock, Home, Building2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA vs. Physical Gold: Which is Better? (2026 Comparison)",
    description: "Comparing Gold IRAs vs buying physical gold directly. Learn the tax advantages, storage considerations, and which method is right for your situation.",
};

const comparisonRows: ComparisonRow[] = [
    { feature: "Tax Benefits", optionA: "Tax-deferred or tax-free growth", optionB: "Taxed as collectibles (28% max)", winner: "A" },
    { feature: "Storage", optionA: "Professional depository (insured)", optionB: "Your responsibility (home/safe)", winner: "A" },
    { feature: "Insurance", optionA: "Fully insured by depository", optionB: "Must purchase separately", winner: "A" },
    { feature: "Accessibility", optionA: "Limited until 59½", optionB: "Immediate access anytime", winner: "B" },
    { feature: "Privacy", optionA: "IRS reporting required", optionB: "Private (under $10k cash)", winner: "B" },
    { feature: "Annual Fees", optionA: "$200-350/year", optionB: "$0 (but insurance costs)", winner: "B" },
    { feature: "Theft Risk", optionA: "Minimal (secure vault)", optionB: "Higher (home storage)", winner: "A" },
    { feature: "Liquidity", optionA: "Sell through dealer", optionB: "Sell anywhere, anytime", winner: "B" },
    { feature: "Counterfeiting Risk", optionA: "Minimal (verified by dealer)", optionB: "Higher if buying privately", winner: "A" },
    { feature: "Estate Planning", optionA: "Clear beneficiary rules", optionB: "Can be complex", winner: "A" }
];

const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "what-is-gold-ira", label: "What is a Gold IRA?" },
    { id: "what-is-physical", label: "What is Physical Gold?" },
    { id: "tax-differences", label: "Tax Differences" },
    { id: "storage-security", label: "Storage & Security" },
    { id: "which-to-choose", label: "Which Should You Choose?" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Gold IRA vs. Physical Gold: Which is Better for Your Investment?",
            "description": "Comparing Gold IRAs vs buying physical gold directly. Learn the tax advantages, storage considerations, and which method is right for your situation.",
            "image": "https://richdadretirement.com/images/gold-ira-vs-physical-gold-cover.jpg",
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
            "datePublished": "2026-01-17",
            "dateModified": "2026-01-17"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I keep my Gold IRA gold at home?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. The IRS requires Gold IRA metals to be stored at an approved depository. 'Home storage Gold IRA' schemes are risky and can result in the IRS treating your entire IRA as a distribution—triggering immediate taxes plus a 10% penalty if you're under 59½. If you want gold at home, buy it outside of an IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is physical gold a good investment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gold is excellent for wealth preservation and inflation protection, but not designed for aggressive growth. It's best used as a portfolio diversifier (10-20% allocation). Gold tends to hold value during crashes when stocks fall—that's its main appeal. Whether in an IRA or physical form, the underlying value is the same."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do taxes compare between Gold IRA and physical gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Physical gold held outside an IRA is taxed as a collectible—28% max on long-term gains (or ordinary income for short-term). A Roth Gold IRA offers tax-free withdrawals. A Traditional Gold IRA defers taxes until withdrawal. For long-term holdings, a Gold IRA typically results in lower overall taxes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's the best way to buy physical gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Buy from reputable dealers with transparent pricing. Stick to well-known coins (American Gold Eagles, Canadian Maple Leafs) or bars from recognized mints. Avoid eBay and unverified sellers. Many Gold IRA companies also sell physical gold for direct ownership—they're vetted and reliable."
                    }
                }
            ]
        }
    ]
};

export default function GoldIraVsPhysicalGoldPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-secondary mb-6">
                        Gold Ownership Comparison
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Gold IRA vs. Physical Gold
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Should you hold gold in a tax-advantaged retirement account or keep it in your own possession? We compare both approaches.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <p className="lead">
                            Here&apos;s a question I get all the time: <em>&quot;Why would I lock my gold in some IRA when I could just buy coins and keep them in my safe?&quot;</em>
                        </p>

                        <p>
                            Fair point. Both options give you real, physical gold—not paper promises. But the way you own that gold? Completely different. We&apos;re talking different tax treatment, different security setups, different levels of access. And honestly, the &quot;right&quot; answer depends entirely on what you&apos;re trying to accomplish.
                        </p>

                        <p>
                            So let&apos;s break this down properly.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                winnerName="Gold IRA for Retirement Savings"
                                summary="For retirement planning, a Gold IRA wins due to significant tax advantages—your gold grows tax-free or tax-deferred. However, for emergency preparedness or immediate access needs, physical gold at home provides flexibility that IRAs can't match. Many investors use both."
                                bestFor="Use a Gold IRA for long-term retirement savings; keep some physical gold for immediate access."
                            />
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2>Complete Side-by-Side Comparison</h2>
                            <p>
                                Here&apos;s how Gold IRAs compare to holding physical gold directly:
                            </p>
                            <ComparisonTable
                                optionAName="Gold IRA"
                                optionBName="Physical Gold (Direct)"
                                rows={comparisonRows}
                            />
                        </section>

                        {/* What is a Gold IRA */}
                        <section id="what-is-gold-ira" className="scroll-mt-32">
                            <h2>What is a Gold IRA?</h2>
                            <p>
                                Think of a Gold IRA as a retirement account that happens to hold gold bars and coins instead of stocks. Same tax benefits. Same contribution limits. Same rules about when you can take money out.
                            </p>
                            <p>
                                The catch? You can&apos;t stuff that gold under your mattress. The IRS requires it to be stored at an approved depository—think Fort Knox-level security, but for your retirement account.
                            </p>
                            <p>
                                Here&apos;s what that means in practice:
                            </p>
                            <ul>
                                <li>Your gold sits in a vault (Delaware Depository, Brink&apos;s, etc.)—not your house</li>
                                <li>It&apos;s fully insured. If something happens, you&apos;re covered.</li>
                                <li>Growth is tax-deferred or tax-free, depending on Traditional vs Roth</li>
                                <li>You can contribute up to $7,000/year (2026 limits), more if you&apos;re over 50</li>
                                <li>Touch it before 59½? You&apos;ll pay penalties. That&apos;s the trade-off.</li>
                            </ul>
                            <p>
                                Want the full breakdown? Check out our <Link href="/guide/gold-ira-guide">Gold IRA guide</Link>.
                            </p>
                        </section>

                        {/* What is Physical Gold */}
                        <section id="what-is-physical" className="scroll-mt-32">
                            <h2>What is Physical Gold Ownership?</h2>
                            <p>
                                This is the old-school approach. You buy gold coins or bars, and you keep them. In your safe. In a bank deposit box. Buried in your backyard (please don&apos;t actually do this).
                            </p>
                            <p>
                                No middlemen. No custodians. No government telling you where to store it. It&apos;s <em>your</em> gold, and you can do whatever you want with it.
                            </p>
                            <p>
                                The reality:
                            </p>
                            <ul>
                                <li>You can walk to your safe right now and hold it in your hands</li>
                                <li>Buy whatever gold you want—no IRS &quot;approved&quot; list to follow</li>
                                <li>No annual fees eating into your investment</li>
                                <li>Sell it whenever, wherever, to whoever you want</li>
                                <li>But when you sell? The IRS taxes it as a &quot;collectible&quot;—up to 28% on your gains</li>
                            </ul>

                            <Callout type="warning" title="Watch Out for &quot;Home Storage IRA&quot; Scams">
                                Some shady companies claim you can keep IRA gold at home using an LLC loophole. Don&apos;t fall for it. The IRS has been cracking down hard on these arrangements. If you try it, they&apos;ll treat your entire IRA as a distribution—meaning you owe all the taxes immediately, plus a 10% penalty if you&apos;re under 59½. That&apos;s not a gray area. That&apos;s a financial disaster waiting to happen.
                            </Callout>
                        </section>

                        {/* Tax Differences */}
                        <section id="tax-differences" className="scroll-mt-32">
                            <h2>Tax Differences: Gold IRA vs. Physical Gold</h2>
                            <p>
                                Alright, this is where things get interesting. Because frankly, taxes are the single biggest reason to choose one approach over the other.
                            </p>
                            <p>
                                The IRS doesn&apos;t treat gold like stocks. They treat it like baseball cards and vintage wines—a &quot;collectible.&quot; That means worse tax rates. Unless you shelter it in an IRA.
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Tax Aspect</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Gold IRA</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-amber-400">Physical Gold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Purchase</td>
                                            <td className="p-4">Pre-tax (Traditional) or after-tax (Roth)</td>
                                            <td className="p-4">After-tax dollars only</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-4 font-semibold text-white">Growth</td>
                                            <td className="p-4">Tax-deferred or tax-free</td>
                                            <td className="p-4">Taxable when sold</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Sale/Withdrawal</td>
                                            <td className="p-4">Ordinary income tax (Traditional) or tax-free (Roth)</td>
                                            <td className="p-4">Collectibles tax: 28% max capital gains</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-4 font-semibold text-white">Held &lt; 1 Year</td>
                                            <td className="p-4">N/A (retirement account)</td>
                                            <td className="p-4">Ordinary income tax rates</td>
                                        </tr>
                                        <tr className="bg-amber-500/10">
                                            <td className="p-4 font-bold text-amber-400">Winner</td>
                                            <td className="p-4 font-bold text-green-400">Better for long-term</td>
                                            <td className="p-4">Simpler but higher tax burden</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Let&apos;s Run the Numbers</h3>
                            <p>
                                Say you put $50,000 into gold today, and over 20 years it doubles to $100,000. Nice gain. But how much do you actually keep?
                            </p>
                            <ul>
                                <li><strong>Physical Gold:</strong> Sell it, and you owe up to $14,000 in taxes. That&apos;s 28% of your $50k gain, gone.</li>
                                <li><strong>Roth Gold IRA:</strong> You keep every penny. $0 taxes on qualified withdrawals. Zero.</li>
                                <li><strong>Traditional Gold IRA:</strong> You&apos;ll pay ordinary income tax when you withdraw, but you got a tax break when you put the money in. It often works out better than the collectibles rate.</li>
                            </ul>
                            <p>
                                Over a 20-30 year retirement timeline, we&apos;re talking tens of thousands of dollars in tax savings. That&apos;s not trivial.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find the Best Gold IRA Company</h3>
                                <p className="mb-6 text-gray-200">Take our 60-second quiz to get matched with a company that fits your investment goals.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Storage & Security */}
                        <section id="storage-security" className="scroll-mt-32">
                            <h2>Storage & Security: Vault vs. Your Closet</h2>
                            <p>
                                Let&apos;s be blunt: storing gold is a bigger deal than storing cash. Cash gets stolen? Annoying. Gold gets stolen? That&apos;s your retirement walking out the door.
                            </p>

                            <div className="not-prose space-y-6 my-8">
                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">Gold IRA Storage</h4>
                                        <ul className="text-slate-300 mt-2 space-y-1 text-sm">
                                            <li>• Stored in IRS-approved depositories (Delaware Depository, Brink&apos;s, etc.)</li>
                                            <li>• Armed security, 24/7 surveillance, climate control</li>
                                            <li>• Fully insured by Lloyd&apos;s of London or similar</li>
                                            <li>• Regular third-party audits</li>
                                            <li>• You can visit to view your metals (by appointment)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Home className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-400 text-lg">Physical Gold Storage (Home)</h4>
                                        <ul className="text-slate-300 mt-2 space-y-1 text-sm">
                                            <li>• Home safe, hidden location, or bank safe deposit box</li>
                                            <li>• Security is your responsibility</li>
                                            <li>• Insurance required (homeowner&apos;s policy may not cover bullion)</li>
                                            <li>• Risk of theft, fire, or natural disaster</li>
                                            <li>• Immediate access whenever you need it</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Callout type="tip" title="If You&apos;re Going the Home Storage Route">
                                Get a real safe. Not a lockbox from Walmart—a heavy, bolted-down safe that weighs several hundred pounds. Add a specific rider to your homeowner&apos;s insurance for precious metals (standard policies usually don&apos;t cover bullion). And for the love of all that is holy, don&apos;t tell people you have gold at home. The majority of home gold thefts involve someone the owner knew.
                            </Callout>
                        </section>

                        {/* Which to Choose */}
                        <section id="which-to-choose" className="scroll-mt-32">
                            <h2>So Which One Should You Choose?</h2>
                            <p>
                                Depends on what keeps you up at night.
                            </p>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex gap-4 p-5 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <ShieldCheck className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-400">Choose a Gold IRA if...</h4>
                                        <ul className="text-sm text-green-300 mt-2 space-y-1">
                                            <li>• Your primary goal is retirement savings</li>
                                            <li>• You want tax-advantaged growth</li>
                                            <li>• You prefer professional security and insurance</li>
                                            <li>• You have old 401(k)s or IRAs to roll over</li>
                                            <li>• You don&apos;t need immediate access to the gold</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <Lock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-400">Choose Physical Gold if...</h4>
                                        <ul className="text-sm text-blue-300 mt-2 space-y-1">
                                            <li>• You want immediate, direct access to your gold</li>
                                            <li>• Emergency preparedness is a priority</li>
                                            <li>• You value maximum privacy</li>
                                            <li>• You&apos;re already maxing out retirement accounts</li>
                                            <li>• You want complete control over your assets</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                                    <DollarSign className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400">Consider Both if...</h4>
                                        <ul className="text-sm text-slate-300 mt-2 space-y-1">
                                            <li>• You want tax-advantaged retirement gold AND immediate-access gold</li>
                                            <li>• You believe in diversifying how you hold assets</li>
                                            <li>• You want professional storage for most gold, but some at home for emergencies</li>
                                            <li>• You&apos;re following a comprehensive wealth protection strategy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h3>The &quot;Why Not Both?&quot; Strategy</h3>
                            <p>
                                Here&apos;s what I see a lot of smart investors do: they split it.
                            </p>
                            <ul>
                                <li><strong>80-90% in a Gold IRA:</strong> This is the bulk of their precious metals. It&apos;s for retirement, so they want the tax advantages. They don&apos;t need to touch it for 10-20+ years.</li>
                                <li><strong>10-20% physical at home:</strong> Enough gold coins in a safe that if something crazy happens—bank holiday, grid goes down, whatever—they have something tangible they can access immediately.</li>
                            </ul>
                            <p>
                                Is it a bit paranoid? Maybe. But these are the same people who have generators and a few months of food stored. They&apos;re not crazy—they&apos;re prepared. And having some accessible gold while the rest grows tax-free? That&apos;s just smart portfolio construction.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Gold IRA vs. Physical Gold FAQs</h2>

                            <div className="space-y-4 not-prose">
                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Can I keep my Gold IRA gold at home?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        No. The IRS requires Gold IRA metals to be stored at an approved depository. &quot;Home storage Gold IRA&quot; schemes are risky and can result in the IRS treating your entire IRA as a distribution—triggering immediate taxes plus a 10% penalty if you&apos;re under 59½. If you want gold at home, buy it outside of an IRA.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">Is physical gold a good investment?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Gold is excellent for wealth preservation and inflation protection, but not designed for aggressive growth. It&apos;s best used as a portfolio diversifier (10-20% allocation). Gold tends to hold value during crashes when stocks fall—that&apos;s its main appeal. Whether in an IRA or physical form, the underlying value is the same.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">How do taxes compare between Gold IRA and physical gold?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Physical gold held outside an IRA is taxed as a collectible—28% max on long-term gains (or ordinary income for short-term). A Roth Gold IRA offers tax-free withdrawals. A Traditional Gold IRA defers taxes until withdrawal. For long-term holdings, a Gold IRA typically results in lower overall taxes. See our <Link href="/learn/gold-ira-tax-rules" className="text-secondary hover:underline">tax rules guide</Link> for details.
                                    </p>
                                </details>

                                <details className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                        <h4 className="text-lg font-bold">What&apos;s the best way to buy physical gold?</h4>
                                        <span className="shrink-0 rounded-full bg-amber-500/20 p-1.5 text-amber-400 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-300">
                                        Buy from reputable dealers with transparent pricing. Stick to well-known coins (American Gold Eagles, Canadian Maple Leafs) or bars from recognized mints. Avoid eBay and unverified sellers. Many Gold IRA companies also sell physical gold for direct ownership—they&apos;re vetted and reliable. See our <Link href="/reviews" className="text-secondary hover:underline">company reviews</Link>.
                                    </p>
                                </details>
                            </div>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Explore Gold IRAs?</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find the best gold IRA company for your retirement savings with our free quiz.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                        <Link href="/guide/gold-ira-guide">Read the Full Guide</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </Container>

            {/* Augusta CTA */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Want Tax-Advantaged Gold Ownership?"
                        subheadline="Get your free Gold IRA guide and learn about secure, insured storage."
                        trackSource="compare-gold-ira-vs-physical-gold"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
