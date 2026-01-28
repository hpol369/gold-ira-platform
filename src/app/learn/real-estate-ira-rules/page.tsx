import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Scale,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    XCircle,
    Home,
    Users,
    DollarSign,
    FileText,
    Shield
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Real Estate IRA Rules 2026: IRS Requirements Guide",
    description: "Complete guide to real estate IRA rules. Learn about prohibited transactions, disqualified persons, UBIT, and how to stay IRS compliant with your SDIRA.",
    keywords: "real estate ira rules, sdira prohibited transactions, ira real estate rules, self directed ira real estate rules",
    openGraph: {
        title: "Real Estate IRA Rules 2026: IRS Requirements Guide",
        description: "Everything you need to know about real estate IRA rules, prohibited transactions, and staying IRS compliant.",
        type: "article",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
    },
};

export default function RealEstateIraRulesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-12 lg:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-white" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

                <Container className="relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                        <Link href="/" className="hover:text-[#000080] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/real-estate-ira" className="hover:text-[#000080] transition-colors">Real Estate IRA</Link>
                        <span>/</span>
                        <span className="text-[#000080]">Rules</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                            <Scale className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-sm font-medium">IRS Compliance Guide</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000080] mb-6 leading-tight">
                            Real Estate IRA Rules:{" "}
                            <span className="text-emerald-400">What You Can and Can't Do</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
                            You've worked 30+ years to build your retirement savings. Using an IRA to buy rental property is completely legal—but the IRS has strict rules. Break them, and you could owe taxes and penalties on your entire IRA. Here's the straight talk on what's allowed and what's not.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Prohibited Transactions */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-4 text-center">
                            Prohibited Transactions
                        </h2>
                        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
                            Let me be direct: these are the rules that trip people up. Break any of these, and your entire IRA could be treated as a distribution—meaning you owe taxes on the full amount, plus penalties if you're under 59 1/2.
                        </p>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                <XCircle className="w-6 h-6" />
                                You CANNOT Do These Things
                            </h3>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Live in or Use the Property",
                                        description: "You cannot live in, vacation at, or personally use any property owned by your IRA—not even for one night."
                                    },
                                    {
                                        title: "Rent to Disqualified Persons",
                                        description: "You cannot rent the property to yourself, your spouse, parents, children, grandchildren, or their spouses."
                                    },
                                    {
                                        title: "Provide Services (Sweat Equity)",
                                        description: "You cannot do repairs, maintenance, or property management yourself. All work must be done by unrelated third parties."
                                    },
                                    {
                                        title: "Use Personal Funds for Expenses",
                                        description: "All expenses (repairs, taxes, insurance, HOA fees) must be paid from the IRA, not your personal funds."
                                    },
                                    {
                                        title: "Personally Guarantee a Loan",
                                        description: "If the IRA takes out a mortgage, you cannot personally guarantee it. Only non-recourse loans are allowed."
                                    },
                                    {
                                        title: "Buy Property from Disqualified Persons",
                                        description: "Your IRA cannot purchase property that you, family members, or other disqualified persons currently own."
                                    },
                                    {
                                        title: "Sell Property to Disqualified Persons",
                                        description: "You cannot sell an IRA-owned property to yourself or family members, even at fair market value."
                                    },
                                    {
                                        title: "Receive Indirect Benefits",
                                        description: "Any arrangement that provides you or family members indirect benefits from the property is prohibited."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                                        <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-[#000080] font-semibold mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Disqualified Persons */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            Who Are Disqualified Persons?
                        </h2>

                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl p-8">
                            <p className="text-slate-600 mb-6">
                                The IRS defines &quot;disqualified persons&quot; who cannot transact with your IRA. These include:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "You (the IRA owner)",
                                    "Your spouse",
                                    "Your parents and grandparents",
                                    "Your children and grandchildren",
                                    "Spouses of your children/grandchildren",
                                    "Any fiduciary of the IRA",
                                    "Companies you own 50%+ of",
                                    "Officers, directors, or 10%+ shareholders of such companies"
                                ].map((person, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                                        <Users className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                        <span className="text-slate-600">{person}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                                <p className="text-[#B22234] text-sm">
                                    <strong>Note:</strong> Siblings, aunts, uncles, and cousins are NOT disqualified persons.
                                    Transactions with them are generally allowed (but consult a tax professional).
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* What You CAN Do */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            What You CAN Do
                        </h2>

                        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6" />
                                Permitted Activities
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Rent to unrelated third-party tenants",
                                    "Hire unrelated property managers",
                                    "Use IRA funds for all property expenses",
                                    "Direct your custodian on investment decisions",
                                    "Take non-recourse loans (UBIT may apply)",
                                    "Sell property to unrelated third parties",
                                    "Hold multiple properties in one IRA",
                                    "Invest in different types of real estate",
                                    "Hire unrelated contractors for repairs",
                                    "Receive rental income into the IRA"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* UBIT Section */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            Understanding UBIT (Unrelated Business Income Tax)
                        </h2>

                        <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl p-8">
                            <p className="text-slate-600 text-lg mb-6">
                                <strong className="text-[#000080]">UBIT</strong> is a tax that applies when your IRA earns income from
                                debt-financed property or active business operations. This is one of the most misunderstood aspects
                                of real estate IRAs.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                                    <h4 className="text-[#B22234] font-semibold mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        When UBIT Applies
                                    </h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#B22234]">•</span>
                                            <span><strong>Leveraged Property:</strong> If your IRA uses a mortgage to buy property, the portion of income attributable to the borrowed funds is subject to UBIT.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#B22234]">•</span>
                                            <span><strong>Active Business:</strong> If the property operates as an active business (like a hotel you operate), income may be subject to UBIT.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        When UBIT Does NOT Apply
                                    </h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400">•</span>
                                            <span><strong>All-Cash Purchases:</strong> If you buy property entirely with IRA funds (no mortgage), UBIT doesn&apos;t apply to rental income.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400">•</span>
                                            <span><strong>Passive Rentals:</strong> Standard rental income from a debt-free property is not subject to UBIT.</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-slate-500 text-sm">
                                    <strong className="text-[#000080]">UBIT Rate:</strong> Trust tax rates apply, which can be quite high (up to 37% for income over ~$14,000).
                                    However, there&apos;s a $1,000 exemption, and many real estate investors find UBIT manageable compared to the tax benefits of the IRA structure.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Penalties */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#000080] mb-8 text-center">
                            Penalties for Breaking the Rules
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "IRA Disqualification",
                                    description: "A prohibited transaction can disqualify your entire IRA. The full value becomes a taxable distribution, plus 10% early withdrawal penalty if under 59½.",
                                    severity: "Severe"
                                },
                                {
                                    title: "Excise Tax",
                                    description: "15% excise tax on the amount involved in the prohibited transaction. If not corrected, an additional 100% tax applies.",
                                    severity: "Severe"
                                },
                                {
                                    title: "Loss of Tax Benefits",
                                    description: "All the tax-deferred or tax-free growth you&apos;ve accumulated becomes immediately taxable.",
                                    severity: "Severe"
                                },
                                {
                                    title: "Cannot Be Reversed",
                                    description: "Once a prohibited transaction occurs, you cannot undo it. The consequences are immediate and permanent.",
                                    severity: "Critical"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${item.severity === 'Critical'
                                            ? 'bg-red-500/30 text-red-300'
                                            : 'bg-red-500/20 text-red-400'
                                            }`}>
                                            {item.severity}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#000080] mb-2">{item.title}</h3>
                                    <p className="text-slate-500 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-[#000080] mb-6">
                            Don't Risk 30 Years of Savings on a Compliance Mistake
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            You've worked too hard to lose your retirement over a technicality. A good self-directed IRA custodian knows these rules inside and out—and helps you stay on the right side of the IRS.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <a
                                    href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "realestate-rules-cta", "rocketdollar")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Real Estate IRA
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/real-estate-ira">
                                    Back to RE IRA Guide
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Content */}
            <section className="py-12 bg-slate-50">
                <Container>
                    <h2 className="text-xl font-bold text-[#000080] mb-6 text-center">Related Resources</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { href: "/real-estate-ira", title: "Real Estate IRA Guide", desc: "Complete overview" },
                            { href: "/learn/real-estate-ira-custodians", title: "Best Custodians", desc: "Compare providers" },
                            { href: "/learn/buy-rental-property-with-ira", title: "Buy Rental Property", desc: "Step-by-step" },
                            { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "SDIRA basics" },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                            >
                                <h3 className="text-[#000080] font-semibold mb-1 group-hover:text-emerald-400 transition-colors text-sm">
                                    {link.title}
                                </h3>
                                <p className="text-slate-500 text-xs">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
