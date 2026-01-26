import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, AlertTriangle, CheckCircle2, Clock, Coins, Shield, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Silver IRA Rules 2026: IRS Requirements, Contribution Limits & More",
    description: "Silver IRA rules for 2026. IRS purity requirements, contribution limits, withdrawal rules, storage requirements, and prohibited transactions.",
    keywords: ["silver ira rules", "silver ira regulations", "silver ira contribution limits", "silver ira withdrawal rules", "silver ira purity requirements", "silver ira storage rules"],
    openGraph: {
        title: "Silver IRA Rules 2026: IRS Requirements, Contribution Limits & More",
        description: "Complete guide to silver IRA rules. IRS purity requirements, contribution limits, withdrawal rules, and storage requirements.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

// Contribution limits data
const contributionLimits = {
    traditional: {
        under50: "$7,000",
        over50: "$8,000",
        type: "Traditional IRA"
    },
    roth: {
        under50: "$7,000",
        over50: "$8,000",
        type: "Roth IRA"
    },
    sep: {
        limit: "25% of compensation or $69,000",
        type: "SEP IRA"
    },
    simple: {
        under50: "$16,000",
        over50: "$19,500",
        type: "SIMPLE IRA"
    },
};

// IRS-approved silver requirements
const purityRequirements = [
    {
        type: "Silver Coins",
        requirement: ".999 fine (99.9% pure)",
        examples: "American Silver Eagles, Canadian Maple Leafs, Austrian Philharmonics",
        exception: "American Silver Eagles can be .9993 fine"
    },
    {
        type: "Silver Bars",
        requirement: ".999 fine (99.9% pure)",
        examples: "PAMP Suisse, Credit Suisse, Johnson Matthey, Sunshine Mint",
        exception: "Must be from NYMEX/COMEX approved refiners or national mints"
    },
    {
        type: "Silver Rounds",
        requirement: ".999 fine (99.9% pure)",
        examples: "Must be from accredited refiners",
        exception: "Generic rounds from approved refiners are acceptable"
    },
];

// Prohibited transactions
const prohibitedTransactions = [
    "Buying silver from yourself or family members",
    "Storing silver at home (must use approved depository)",
    "Using IRA silver as collateral for a loan",
    "Selling silver to a disqualified person",
    "Buying collectible or numismatic coins",
    "Purchasing silver from a disqualified person"
];

// Disqualified persons
const disqualifiedPersons = [
    "You (the IRA owner)",
    "Your spouse",
    "Your parents, grandparents, and great-grandparents",
    "Your children, grandchildren, and great-grandchildren",
    "Spouses of your lineal descendants",
    "Investment advisors to your IRA",
    "Any entity where you or disqualified persons own 50%+ ownership"
];

// FAQs
const faqs = [
    {
        question: "What purity must silver be for an IRA?",
        answer: "Silver in an IRA must be .999 fine (99.9% pure). This is an IRS requirement. The one exception is American Silver Eagles, which are .9993 fine and still qualify. Collectible, numismatic, or circulated coins do not qualify regardless of silver content."
    },
    {
        question: "Can I store silver IRA metals at home?",
        answer: "No. IRS rules require precious metals in an IRA to be stored in an approved depository. Home storage, even in a safe, is prohibited and can result in the IRA being disqualified, triggering taxes and penalties. The silver must be held by a qualified custodian at an IRS-approved storage facility."
    },
    {
        question: "What are the contribution limits for a Silver IRA?",
        answer: "Silver IRA contribution limits are the same as traditional or Roth IRAs: $7,000 for 2026 (or $8,000 if you're 50 or older). However, rollovers from 401(k)s or other retirement accounts have no limit—you can roll over any amount."
    },
    {
        question: "When can I withdraw from a Silver IRA without penalty?",
        answer: "You can take penalty-free distributions from a Silver IRA at age 59½. Early withdrawals before this age typically incur a 10% penalty plus income taxes. Required Minimum Distributions (RMDs) begin at age 73 for Traditional IRAs."
    },
    {
        question: "Can I take physical possession of my silver?",
        answer: "You can take an 'in-kind distribution' of your silver, meaning you receive the physical metal instead of cash. However, this is treated as a distribution for tax purposes. Before age 59½, you'll owe taxes plus the 10% early withdrawal penalty on the fair market value."
    },
    {
        question: "What happens if I break Silver IRA rules?",
        answer: "Violating IRS rules (like storing silver at home or buying from a disqualified person) can result in the IRA being 'disqualified.' This means the entire IRA value is treated as a distribution—you'd owe income taxes on the full amount plus a 10% penalty if under 59½."
    },
];

// Schema markup
const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Silver IRA Rules 2026: IRS Requirements, Contribution Limits & More",
            "description": "Complete guide to silver IRA rules and regulations. Learn IRS purity requirements, contribution limits, withdrawal rules, storage requirements, and prohibited transactions.",
            "author": {
                "@type": "Person",
                "name": "Thomas Richardson"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25"
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

export default function SilverIraRulesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            <div className="flex-grow">
                {/* Hero */}
                <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[150px]" />
                    </div>
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-slate-300 font-bold tracking-widest uppercase text-xs mb-4">
                                <Scale className="h-4 w-4" />
                                IRS Guidelines
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                                Silver IRA Rules & Regulations
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Everything you need to know about IRS rules for silver IRAs: purity requirements, contribution limits, withdrawal rules, and what to avoid.
                            </p>
                        </div>
                    </Container>
                </header>

                {/* Quick Rules Overview */}
                <section className="py-12 bg-slate-800/50">
                    <Container>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                                <Coins className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">.999</div>
                                <div className="text-sm text-slate-400">Minimum Purity</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                                <FileText className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">$7,000</div>
                                <div className="text-sm text-slate-400">2026 Contribution Limit</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                                <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">59½</div>
                                <div className="text-sm text-slate-400">Penalty-Free Age</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">73</div>
                                <div className="text-sm text-slate-400">RMD Start Age</div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Purity Requirements */}
                <section className="py-16">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">IRS Purity Requirements for Silver</h2>
                            <p className="text-slate-300 mb-8">
                                The IRS has strict requirements for what silver can be held in an IRA. The silver must be <strong className="text-white">.999 fine (99.9% pure)</strong> and come from approved mints or refiners.
                            </p>

                            <div className="space-y-4">
                                {purityRequirements.map((req, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                                            <h3 className="font-bold text-white text-lg">{req.type}</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <span className="text-slate-500">Requirement:</span>
                                                <p className="text-slate-300">{req.requirement}</p>
                                            </div>
                                            <div>
                                                <span className="text-slate-500">Examples:</span>
                                                <p className="text-slate-300">{req.examples}</p>
                                            </div>
                                            <div>
                                                <span className="text-slate-500">Note:</span>
                                                <p className="text-slate-300">{req.exception}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400 mb-2">What Does NOT Qualify</h4>
                                        <ul className="text-slate-300 text-sm space-y-1">
                                            <li>• Collectible or numismatic coins (even if they contain silver)</li>
                                            <li>• Pre-1965 &quot;junk silver&quot; US coins (.900 fine)</li>
                                            <li>• Proof coins intended for collectors</li>
                                            <li>• Silver jewelry or silverware</li>
                                            <li>• Any silver below .999 fineness (except American Eagles)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-6 text-slate-400 text-sm">
                                See our complete list of <Link href="/guide/ira-approved-silver" className="text-amber-400 hover:underline">IRA-approved silver coins and bars</Link>.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Contribution Limits */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">2026 Contribution Limits</h2>
                            <p className="text-slate-300 mb-8">
                                Silver IRA contribution limits follow standard IRA rules. These limits apply to your total IRA contributions across all accounts (traditional and Roth combined).
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 font-bold text-amber-400">Account Type</th>
                                            <th className="text-left p-4 font-bold text-amber-400">Under 50</th>
                                            <th className="text-left p-4 font-bold text-amber-400">50 or Older</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-slate-300">
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Traditional IRA</td>
                                            <td className="p-4">$7,000</td>
                                            <td className="p-4">$8,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Roth IRA</td>
                                            <td className="p-4">$7,000</td>
                                            <td className="p-4">$8,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">SEP IRA</td>
                                            <td className="p-4" colSpan={2}>25% of compensation up to $69,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">SIMPLE IRA</td>
                                            <td className="p-4">$16,000</td>
                                            <td className="p-4">$19,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-green-400 mb-2">Rollovers Have No Limit</h4>
                                        <p className="text-slate-300 text-sm">
                                            Unlike contributions, there&apos;s no limit on how much you can roll over from a 401(k), existing IRA, or other qualified retirement account. You can roll over any amount—$50,000, $500,000, or more—without it counting against contribution limits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Withdrawal Rules */}
                <section className="py-16">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">Withdrawal Rules</h2>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white text-lg mb-4">Traditional Silver IRA</h3>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                            Penalty-free withdrawals at age 59½
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                            RMDs begin at age 73
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                                            10% penalty for early withdrawal (before 59½)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                                            Distributions taxed as ordinary income
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="font-bold text-white text-lg mb-4">Roth Silver IRA</h3>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                            Contributions can be withdrawn anytime tax-free
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                            Earnings tax-free after 59½ (if account 5+ years old)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                                            No RMDs during your lifetime
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                                            Early withdrawal of earnings = penalty + taxes
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                                <h4 className="font-bold text-blue-400 mb-3">In-Kind Distributions</h4>
                                <p className="text-slate-300 text-sm">
                                    You can take your silver as a physical distribution rather than selling it and receiving cash. This is called an &quot;in-kind distribution.&quot; The fair market value of the silver on the distribution date is used for tax purposes. You&apos;ll receive the actual silver bars or coins, shipped to you or picked up from the depository.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Storage Requirements */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">Storage Requirements</h2>
                            <p className="text-slate-300 mb-8">
                                The IRS requires all silver in an IRA to be held by a qualified custodian at an approved depository. You cannot store IRA silver at home.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                                    <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Approved Storage
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li>• IRS-approved depositories</li>
                                        <li>• Delaware Depository</li>
                                        <li>• Brinks Global Services</li>
                                        <li>• IDS of Texas</li>
                                        <li>• HSBC Bank vault</li>
                                        <li>• Segregated or allocated storage</li>
                                    </ul>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                    <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" /> NOT Allowed
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li>• Home storage (even in a safe)</li>
                                        <li>• Bank safe deposit box</li>
                                        <li>• Storage at a business you own</li>
                                        <li>• Any location you control</li>
                                        <li>• &quot;Home storage IRA&quot; schemes</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-400 mb-2">Warning: &quot;Home Storage IRA&quot; Schemes</h4>
                                        <p className="text-slate-300 text-sm">
                                            Some promoters claim you can legally store IRA metals at home through an LLC structure. The IRS has explicitly stated this violates the rules and has taken enforcement action against such arrangements. If caught, your entire IRA can be disqualified, resulting in taxes and penalties on the full value.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Prohibited Transactions */}
                <section className="py-16">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">Prohibited Transactions</h2>
                            <p className="text-slate-300 mb-8">
                                The IRS prohibits certain transactions involving your IRA and &quot;disqualified persons.&quot; Violating these rules can disqualify your entire IRA.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                    <h4 className="font-bold text-red-400 mb-4">Prohibited Transactions</h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        {prohibitedTransactions.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                                    <h4 className="font-bold text-amber-400 mb-4">Disqualified Persons</h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        {disqualifiedPersons.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="w-4 h-4 rounded-full bg-amber-400/30 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQs */}
                <section className="py-16 bg-slate-800/50">
                    <Container>
                        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Silver IRA Rules FAQ</h2>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Related Content */}
                <section className="py-16">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Silver IRA Resources</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <Link href="/guide/silver-ira-guide" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Silver IRA Guide</h3>
                                <p className="text-sm text-slate-400">Complete guide to opening a silver IRA.</p>
                            </Link>
                            <Link href="/guide/ira-approved-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">IRA-Approved Silver</h3>
                                <p className="text-sm text-slate-400">Which silver coins & bars qualify.</p>
                            </Link>
                            <Link href="/guide/silver-ira-rollover" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Silver IRA Rollover</h3>
                                <p className="text-sm text-slate-400">How to transfer your 401k to silver.</p>
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="py-16">
                    <Container>
                        <AugustaCTA
                            variant="footer"
                            linkContext="silver"
                            headline="Ready to Open a Silver IRA?"
                            subheadline="Augusta Precious Metals ensures your Silver IRA is fully IRS-compliant. They handle all the paperwork and compliance requirements so you don't have to."
                            trackSource="silver-ira-rules"
                        />
                    </Container>
                </section>
            </div>

            <Footer />
        </main>
    );
}
