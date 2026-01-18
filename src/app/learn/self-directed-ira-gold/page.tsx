import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Self-Directed IRA Gold Guide (2026): Rules & Setup",
    description: "Learn how to use a Self-Directed IRA to invest in physical gold. We explain the IRS rules, custodians, and how to avoid penalties.",
};

const tocItems = [
    { id: "what-is-sdir", label: "What is a Self-Directed IRA?" },
    { id: "how-it-works", label: "How It Works" },
    { id: "rules", label: "IRS Rules & Regulations" },
    { id: "pros-cons", label: "Pros & Cons" },
    { id: "setup", label: "How to Set Up" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Self-Directed IRA Gold Guide: How to Take Control",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" }
};

export default function SelfDirectedIraGoldPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Investment Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            Self-Directed IRA for Gold: The Ultimate Guide
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Take control of your retirement by holding physical assets. Here is everything you need to know about Self-Directed Gold IRAs.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="lg:w-64 flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>

                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-text prose-a:text-secondary max-w-none">

                        <p className="lead text-xl text-text-muted">
                            Most retirement accounts limit you to stocks, bonds, and mutual funds. A Self-Directed IRA changes that—it lets you invest in physical gold, real estate, private equity, and other alternative assets the IRS normally keeps off-limits. Here's how it works, what the rules are, and whether it makes sense for your situation.
                        </p>

                        <section id="what-is-sdir" className="scroll-mt-32">
                            <h2>What is a Self-Directed IRA?</h2>
                            <p>
                                A Self-Directed IRA (SDIRA) is a retirement account that gives you control over your investment choices. Unlike traditional IRAs managed by brokerage firms that restrict you to their approved products, a self-directed account lets you invest in alternative assets—including physical precious metals.
                            </p>
                            <p>
                                The "self-directed" part doesn't mean you handle everything yourself. You still need a custodian (a financial institution approved by the IRS to hold retirement assets), but that custodian doesn't limit your investment options or push you toward certain products.
                            </p>
                            <p>
                                For gold investors, an SDIRA is the only legal way to hold physical gold in a retirement account with tax advantages. You can't just buy gold coins and stick them in a regular IRA—the IRS requires specific custodians, approved depositories, and compliant metals.
                            </p>
                        </section>

                        <section id="how-it-works" className="scroll-mt-32">
                            <h2>How It Works</h2>
                            <p>
                                Setting up a Self-Directed Gold IRA follows a specific process. First, you choose a custodian that specializes in alternative assets—not all custodians handle precious metals. Popular choices include Equity Trust, New Direction IRA, and STRATA Trust.
                            </p>
                            <p>
                                Next, you fund the account. This can happen through a direct contribution, a rollover from an existing 401(k) or IRA, or a transfer from another retirement account. Rollovers are the most common method for Gold IRAs since they allow you to move larger sums without hitting annual contribution limits.
                            </p>
                            <p>
                                Once funded, you direct your custodian to purchase specific precious metals from an authorized dealer. The metals are then shipped directly to an IRS-approved depository—not to your home. The custodian holds the paperwork; the depository holds the physical gold.
                            </p>
                            <p>
                                When you want to sell or take a distribution, the process reverses: the depository ships the metals to a dealer, the sale proceeds go to your IRA, and from there you can reinvest or distribute to yourself (subject to IRS rules and potential taxes).
                            </p>
                        </section>

                        <section id="rules" className="scroll-mt-32">
                            <h2>IRS Rules & Regulations</h2>
                            <p>
                                The IRS has strict requirements for precious metals in retirement accounts. Not all gold qualifies. To be IRA-eligible, gold must be 99.5% pure (0.995 fineness). This includes American Gold Eagles (the one exception—allowed despite being 91.67% gold), American Gold Buffaloes, Canadian Maple Leafs, and certain bars from approved refiners.
                            </p>
                            <p>
                                What's not allowed? Collectible coins, rare numismatic pieces, and most foreign coins don't qualify. The IRS specifically prohibits collectibles in IRAs, so that rare $20 Saint-Gaudens you inherited can't go in your retirement account.
                            </p>
                            <p>
                                Storage is non-negotiable: IRA metals must be held by an IRS-approved trustee or depository. Home storage is illegal—despite what some companies claim. The "home storage IRA" is a myth that's gotten people in serious trouble with the IRS. Don't fall for it.
                            </p>
                            <p>
                                Contribution limits follow standard IRA rules. For 2026, that's $7,000 per year ($8,000 if you're 50 or older). Rollovers from existing retirement accounts don't count against these limits, which is why most Gold IRA investors use rollovers rather than annual contributions.
                            </p>
                        </section>

                        <section id="pros-cons" className="scroll-mt-32">
                            <h2>Pros & Cons</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                                <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-2">Advantages</h4>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4" /> True Diversification</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4" /> Inflation Hedge</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4" /> Tax Benefits</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-xl bg-amber-50 border border-amber-100">
                                    <h4 className="font-bold text-amber-800 mb-2">Disadvantages</h4>
                                    <ul className="space-y-2 text-amber-700 text-sm">
                                        <li className="flex gap-2"><AlertTriangle className="w-4 h-4" /> Higher Fees</li>
                                        <li className="flex gap-2"><AlertTriangle className="w-4 h-4" /> Strict IRS Rules</li>
                                        <li className="flex gap-2"><AlertTriangle className="w-4 h-4" /> No Yield/Dividends</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="setup" className="scroll-mt-32">
                            <h2>How to Set Up a Self-Directed Gold IRA</h2>
                            <p>
                                <strong>Step 1: Choose a Custodian</strong> — Not all IRA custodians allow precious metals. You need one that specializes in self-directed accounts with alternative assets. The custodian handles the paperwork and ensures IRS compliance.
                            </p>
                            <p>
                                <strong>Step 2: Fund Your Account</strong> — Transfer or roll over funds from an existing retirement account, or make a cash contribution. Rollovers from 401(k)s, 403(b)s, and traditional IRAs are common. Make sure it's a trustee-to-trustee transfer to avoid tax complications.
                            </p>
                            <p>
                                <strong>Step 3: Select Your Metals</strong> — Work with an authorized precious metals dealer to choose IRA-eligible gold (or silver, platinum, palladium). The dealer must ship directly to your depository—metals cannot pass through your hands.
                            </p>
                            <p>
                                <strong>Step 4: Arrange Storage</strong> — Your custodian will work with an IRS-approved depository. Options include segregated storage (your metals stored separately) or non-segregated (commingled with other investors' holdings). Segregated costs more but ensures you get your exact coins back.
                            </p>
                            <p>
                                <strong>Step 5: Maintain Compliance</strong> — Keep records, pay your annual fees, and don't touch the metals. Any personal use of IRA assets is a prohibited transaction that can disqualify your entire account.
                            </p>
                        </section>

                        <section id="faq" className="scroll-mt-32">
                            <h2>Frequently Asked Questions</h2>
                            <h3>Can I store Gold IRA metals at home?</h3>
                            <p>
                                No. Despite claims from some companies, the IRS requires precious metals IRA assets to be stored by an approved custodian or depository. Home storage constitutes a distribution, triggering taxes and penalties.
                            </p>
                            <h3>What's the difference between a Gold IRA and a Self-Directed IRA?</h3>
                            <p>
                                A Gold IRA is a type of Self-Directed IRA. "Self-directed" is the category that allows alternative investments; "Gold IRA" is a self-directed account specifically used for precious metals. All Gold IRAs are self-directed, but not all self-directed IRAs hold gold.
                            </p>
                            <h3>Can I roll over my 401(k) into a Self-Directed Gold IRA?</h3>
                            <p>
                                Yes, in most cases. If you've left your employer, you can roll over your 401(k) into any IRA, including a self-directed one. If you're still employed, check if your plan allows "in-service" rollovers—not all do.
                            </p>
                            <h3>What happens when I retire and want my gold?</h3>
                            <p>
                                You have options: take an in-kind distribution (receive the physical gold, but pay taxes on its value), sell the metals and take a cash distribution, or leave them in the IRA and take Required Minimum Distributions starting at age 73.
                            </p>
                            <h3>Are Self-Directed Gold IRAs risky?</h3>
                            <p>
                                The structure itself isn't risky—it's the same tax-advantaged account as any IRA. The risk lies in the investment: gold prices fluctuate, fees are higher than index funds, and you're responsible for choosing compliant products. Do your research.
                            </p>
                        </section>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
