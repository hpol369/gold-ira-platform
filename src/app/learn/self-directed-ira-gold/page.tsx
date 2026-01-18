import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { Callout } from "@/components/ui/Callout";
import { ArrowRight, CheckCircle2, Building2, Scale, Lock, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata = {
    title: "Self-Directed IRA Gold Guide (2026): Rules, Setup & Best Custodians",
    description: "Complete guide to self-directed gold IRAs. Learn what they are, IRS rules, how to set one up, and which custodians to use. Updated for 2026.",
};

const tocItems = [
    { id: "what-is-sdir", label: "What is a Self-Directed IRA?" },
    { id: "how-it-works", label: "How It Works" },
    { id: "rules", label: "IRS Rules & Regulations" },
    { id: "setup", label: "How to Set Up" },
    { id: "custodians", label: "Best Custodians" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Self-Directed IRA Gold Guide (2026): Rules, Setup & Best Custodians",
    "description": "Complete guide to self-directed gold IRAs. Learn what they are, IRS rules, how to set one up, and which custodians to use.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    }
};

export default function SelfDirectedIraGoldPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <SchemaScript schema={schema} />

            <div className="flex-grow">
                {/* Header */}
                <header className="bg-primary text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-dark/50" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Educational Guide
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                                Self-Directed IRA Gold: <br />The Complete 2026 Guide
                            </h1>
                            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                                Most retirement accounts limit you to stocks and bonds. A Self-Directed IRA changes that—it lets you invest in physical gold, real estate, and other alternative assets. Here's everything you need to know.
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
                        <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                            {/* Section 1: What is a Self-Directed IRA */}
                            <section id="what-is-sdir" className="scroll-mt-32">
                                <h2>What is a Self-Directed IRA?</h2>
                                <p>
                                    A <strong>Self-Directed IRA (SDIRA)</strong> is a retirement account that gives you control over your investment choices. Unlike traditional IRAs managed by brokerage firms that restrict you to their approved products, a self-directed account lets you invest in alternative assets—including physical precious metals.
                                </p>
                                <p>
                                    The "self-directed" part doesn't mean you handle everything yourself. You still need a <strong>custodian</strong> (a financial institution approved by the IRS to hold retirement assets), but that custodian doesn't limit your investment options or push you toward certain products.
                                </p>
                                <p>
                                    For gold investors, an SDIRA is the <strong>only legal way</strong> to hold physical gold in a retirement account with tax advantages. You can't just buy gold coins and stick them in a regular IRA—the IRS requires specific custodians, approved depositories, and compliant metals.
                                </p>

                                <div className="bg-background-subtle rounded-2xl p-6 border border-primary/5 not-prose my-8">
                                    <h4 className="font-bold text-primary text-lg mb-4">Key Differences: SDIRA vs. Regular IRA</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                            <span><strong>Regular IRA:</strong> Limited to stocks, bonds, mutual funds, ETFs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                            <span><strong>Self-Directed IRA:</strong> Physical gold, silver, real estate, private equity, and more</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                            <span><strong>Same tax benefits:</strong> Both offer tax-deferred or tax-free growth</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 2: How It Works */}
                            <section id="how-it-works" className="scroll-mt-32">
                                <h2>How Does a Self-Directed Gold IRA Work?</h2>
                                <p>
                                    Setting up a Self-Directed Gold IRA involves three key parties working together:
                                </p>

                                <div className="not-prose">
                                    <div className="space-y-4 my-8">
                                        <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <strong className="block text-primary text-lg">1. The Custodian</strong>
                                                <p className="text-text-muted mt-1">A specialized financial institution that holds your IRA assets and handles all IRS reporting. Examples: Equity Trust Company, STRATA Trust, New Direction IRA.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0">
                                                <Scale className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <strong className="block text-primary text-lg">2. The Precious Metals Dealer</strong>
                                                <p className="text-text-muted mt-1">The company you purchase your gold from. Reputable dealers like <Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta</Link> and <Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link> guide you through the entire process.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold shrink-0">
                                                <Lock className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <strong className="block text-primary text-lg">3. The Depository</strong>
                                                <p className="text-text-muted mt-1">A high-security vault where your physical metals are stored. These facilities are insured, audited, and IRS-approved. Popular: Delaware Depository, Brink's Global Services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Once funded, you direct your custodian to purchase specific precious metals from an authorized dealer. The metals ship directly to an IRS-approved depository—not to your home. The custodian holds the paperwork; the depository holds the physical gold.
                                </p>
                            </section>

                            {/* Mid-Article CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Find the Right Company for You</h3>
                                    <p className="mb-6 text-gray-200">Take our 60-second quiz to find out which Gold IRA company matches your investment goals.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Section 3: IRS Rules */}
                            <section id="rules" className="scroll-mt-32">
                                <h2>IRS Rules & Regulations</h2>
                                <p>
                                    The IRS has strict requirements for precious metals in retirement accounts:
                                </p>

                                <h3>Purity Requirements</h3>
                                <ul>
                                    <li><strong>Gold:</strong> Must be 99.5% pure (0.995 fineness)</li>
                                    <li><strong>Silver:</strong> Must be 99.9% pure</li>
                                    <li><strong>Platinum/Palladium:</strong> Must be 99.95% pure</li>
                                </ul>
                                <p>
                                    Approved products include American Gold Eagles (the one exception at 91.67% purity), American Gold Buffaloes, Canadian Maple Leafs, and certain bars from approved refiners.
                                </p>

                                <Callout type="warning" title="Home Storage is ILLEGAL">
                                    Despite what some companies claim, you <strong>cannot</strong> store IRA metals at home. The "home storage IRA" is a myth that's gotten people in serious trouble with the IRS. Your metals must be held by an approved trustee or depository.
                                </Callout>

                                <h3>Contribution Limits (2026)</h3>
                                <ul>
                                    <li>Under 50: $7,000 per year</li>
                                    <li>50 and older: $8,000 per year (catch-up contribution)</li>
                                </ul>
                                <p>
                                    Rollovers from existing retirement accounts don't count against these limits, which is why most Gold IRA investors use rollovers rather than annual contributions.
                                </p>
                            </section>

                            {/* Section 4: How to Set Up */}
                            <section id="setup" className="scroll-mt-32">
                                <h2>How to Set Up a Self-Directed Gold IRA</h2>

                                <div className="not-prose my-8">
                                    <div className="space-y-6">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-primary text-lg">Choose a Gold IRA Company</h4>
                                                <p className="text-text-muted mt-1">Select a reputable dealer with strong BBB ratings. They'll guide you through custodian selection and handle the paperwork.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-primary text-lg">Open Your Self-Directed IRA</h4>
                                                <p className="text-text-muted mt-1">Your dealer helps you establish an account with a custodian that specializes in precious metals.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-primary text-lg">Fund Your Account</h4>
                                                <p className="text-text-muted mt-1">Rollover from an existing 401(k)/IRA (tax-free), transfer from another IRA, or make a direct contribution.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-primary text-lg">Select & Purchase Metals</h4>
                                                <p className="text-text-muted mt-1">Choose IRS-approved gold, silver, platinum, or palladium. Your dealer ships directly to the depository.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">5</div>
                                            <div>
                                                <h4 className="font-bold text-primary text-lg">Secure Storage</h4>
                                                <p className="text-text-muted mt-1">Your metals are stored in an IRS-approved depository, insured and audited. You receive confirmation of your holdings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 5: Best Custodians */}
                            <section id="custodians" className="scroll-mt-32">
                                <h2>Best Self-Directed IRA Custodians</h2>
                                <p>
                                    Not all custodians handle precious metals. Here are the most commonly used:
                                </p>
                                <ul>
                                    <li><strong>Equity Trust Company</strong> — One of the largest, handles multiple alternative assets</li>
                                    <li><strong>STRATA Trust Company</strong> — Specializes in self-directed IRAs</li>
                                    <li><strong>New Direction IRA</strong> — Known for good customer service</li>
                                    <li><strong>Kingdom Trust</strong> — Popular with cryptocurrency and metals investors</li>
                                </ul>
                                <p>
                                    Most reputable Gold IRA dealers work with these custodians and handle the setup for you. You don't need to contact custodians directly—your dealer coordinates everything.
                                </p>
                            </section>

                            {/* FAQ Section */}
                            <section id="faq" className="scroll-mt-32">
                                <h2>Frequently Asked Questions</h2>

                                <h3>Can I store Gold IRA metals at home?</h3>
                                <p>
                                    No. The IRS requires precious metals IRA assets to be stored by an approved custodian or depository. Home storage constitutes a distribution, triggering taxes and potential 10% early withdrawal penalties.
                                </p>

                                <h3>What's the difference between a Gold IRA and a Self-Directed IRA?</h3>
                                <p>
                                    A Gold IRA is a type of Self-Directed IRA. "Self-directed" is the category that allows alternative investments; "Gold IRA" is a self-directed account specifically used for precious metals.
                                </p>

                                <h3>Can I roll over my 401(k) into a Self-Directed Gold IRA?</h3>
                                <p>
                                    Yes, in most cases. If you've left your employer, you can roll over your 401(k) tax-free. If still employed, check if your plan allows "in-service" rollovers.
                                </p>

                                <h3>What happens when I retire?</h3>
                                <p>
                                    At age 59½, you can take distributions without penalty. Options: receive physical gold (taxed on value), sell and take cash, or take Required Minimum Distributions starting at age 73.
                                </p>
                            </section>

                            {/* Final CTA */}
                            <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10 text-center">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ready to Open Your Self-Directed Gold IRA?</h3>
                                    <p className="mb-6 text-gray-200 max-w-xl mx-auto">Find out which company is the best fit for your investment goals and portfolio size.</p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button variant="gold" size="xl" asChild>
                                            <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                        </Button>
                                        <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                            <Link href="/best-gold-ira-companies">See Top Companies</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <AuthorBox />

                        </article>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
