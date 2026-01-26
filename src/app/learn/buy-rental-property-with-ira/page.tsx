import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Home,
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    Search,
    FileText,
    DollarSign,
    Key,
    Users,
    Building2,
    Calculator
} from "lucide-react";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "Buy Rental Property with Your IRA: 2026 Guide",
    description: "Complete guide to buying rental property with your IRA. Learn the step-by-step process, financing options, and what to watch out for.",
    keywords: "buy rental property with ira, ira rental property, buy house with ira, purchase property with ira, rental property self directed ira",
    openGraph: {
        title: "How to Buy Rental Property with Your IRA (2026 Guide)",
        description: "Step-by-step guide to purchasing rental properties using your self-directed IRA funds.",
        type: "article",
    },
};

export default function BuyRentalPropertyWithIraPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-12 lg:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

                <Container className="relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/real-estate-ira" className="hover:text-white transition-colors">Real Estate IRA</Link>
                        <span>/</span>
                        <span className="text-white">Buy Rental Property</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                            <Home className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-sm font-medium">Step-by-Step Guide</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            How to Buy Rental Property{" "}
                            <span className="text-emerald-400">with Your IRA</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                            After decades of hard work building your 401k, you might be looking at real estate as a way to protect and grow your savings. Many workers—from retired teachers to former union electricians—use their IRA to buy rental property that generates income without stock market risk. Here&apos;s exactly how it works.
                        </p>

                        <Button variant="gold" size="lg" asChild>
                            <a
                                href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "rental-property-hero", "rocketdollar")}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Real Estate IRA
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Step-by-Step Process */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        The Complete Process (7 Steps)
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            {
                                step: "1",
                                icon: Building2,
                                title: "Open a Self-Directed IRA",
                                description: "First, you need a self-directed IRA (SDIRA) with a custodian that allows real estate investments. Traditional brokers like Fidelity don't allow this.",
                                tips: [
                                    "Choose between Traditional (tax-deferred) or Roth (tax-free) SDIRA",
                                    "Consider checkbook control for faster transactions",
                                    "Compare custodian fees carefully"
                                ],
                                cta: { text: "Compare Custodians", href: "/learn/real-estate-ira-custodians" }
                            },
                            {
                                step: "2",
                                icon: DollarSign,
                                title: "Fund Your SDIRA",
                                description: "Transfer funds into your new self-directed IRA. You can rollover from an existing 401(k), IRA, or other retirement account, or make annual contributions.",
                                tips: [
                                    "Rollovers are tax-free if done correctly (direct trustee-to-trustee)",
                                    "2026 contribution limits: $7,000 ($8,000 if 50+)",
                                    "Ensure you have enough for purchase + reserves for expenses"
                                ],
                                cta: null
                            },
                            {
                                step: "3",
                                icon: Search,
                                title: "Find an Investment Property",
                                description: "Research and identify a rental property that fits your investment goals. Remember: this is a pure investment—you cannot live in it or rent to family.",
                                tips: [
                                    "Analyze cash flow (rental income vs expenses)",
                                    "Research the local rental market",
                                    "Get professional inspections",
                                    "Factor in property management costs"
                                ],
                                cta: null
                            },
                            {
                                step: "4",
                                icon: FileText,
                                title: "Make an Offer in the IRA's Name",
                                description: "When making an offer, the buyer is your IRA, not you personally. Work with a real estate agent who understands SDIRA transactions.",
                                tips: [
                                    "Contract should show buyer as: '[Your Custodian] FBO [Your Name] IRA'",
                                    "Earnest money comes from the IRA, not personal funds",
                                    "Inform your custodian before making offers"
                                ],
                                cta: null
                            },
                            {
                                step: "5",
                                icon: Calculator,
                                title: "Complete Due Diligence",
                                description: "Conduct inspections, title search, and appraisal. All costs are paid from the IRA. Your custodian will coordinate the purchase.",
                                tips: [
                                    "Home inspection, pest inspection, etc. paid by IRA",
                                    "Title insurance and closing costs from IRA funds",
                                    "If using non-recourse loan, coordinate with lender"
                                ],
                                cta: null
                            },
                            {
                                step: "6",
                                icon: Key,
                                title: "Close on the Property",
                                description: "At closing, the IRA becomes the legal owner of the property. The deed will show your custodian as owner for the benefit of your IRA.",
                                tips: [
                                    "Title vested in: '[Custodian] FBO [Your Name] IRA'",
                                    "All closing documents signed by custodian (or you if checkbook IRA)",
                                    "Funds wire from IRA account to title company"
                                ],
                                cta: null
                            },
                            {
                                step: "7",
                                icon: Users,
                                title: "Manage the Property",
                                description: "Hire a third-party property manager or manage it yourself (without compensation). All rental income goes to the IRA; all expenses are paid from the IRA.",
                                tips: [
                                    "You cannot receive payment for managing the property",
                                    "Hire unrelated contractors for repairs",
                                    "Keep reserves in IRA for vacancies and repairs",
                                    "Rental income grows tax-advantaged!"
                                ],
                                cta: null
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">{item.step}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <item.icon className="w-6 h-6 text-emerald-400" />
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-300 mb-4">{item.description}</p>

                                        <div className="bg-white/5 rounded-xl p-4 mb-4">
                                            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Key Tips:</h4>
                                            <ul className="space-y-1">
                                                {item.tips.map((tip, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                        {tip}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {item.cta && (
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={item.cta.href}>
                                                    {item.cta.text}
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Financing Options */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Financing Options
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6" />
                                    All Cash (Recommended)
                                </h3>
                                <p className="text-slate-300 mb-4">
                                    Buying property outright with IRA funds is the simplest approach.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "No UBIT tax on rental income",
                                        "Simpler transactions",
                                        "No debt payments reducing cash flow",
                                        "Easier to manage"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" />
                                    Non-Recourse Loan
                                </h3>
                                <p className="text-slate-300 mb-4">
                                    If you need financing, only non-recourse loans are allowed (you can&apos;t personally guarantee).
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Leverage increases returns (and risk)",
                                        "UBIT applies to debt-financed income",
                                        "Higher down payments (30-40% typical)",
                                        "Fewer lender options available"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                                            <AlertTriangle className="w-4 h-4 text-amber-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Common Mistakes */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Common Mistakes to Avoid
                        </h2>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                            <div className="space-y-4">
                                {[
                                    {
                                        mistake: "Using personal funds for ANY expense",
                                        fix: "All costs must come from the IRA—even small repairs"
                                    },
                                    {
                                        mistake: "Doing repairs yourself",
                                        fix: "Hire third-party contractors; you can't provide 'sweat equity'"
                                    },
                                    {
                                        mistake: "Not having enough reserves",
                                        fix: "Keep 6+ months of expenses in the IRA for vacancies/repairs"
                                    },
                                    {
                                        mistake: "Signing contracts in your personal name",
                                        fix: "The IRA is the buyer—contracts should reflect this"
                                    },
                                    {
                                        mistake: "Thinking you can live in it someday",
                                        fix: "While in the IRA, you can NEVER use the property personally"
                                    },
                                    {
                                        mistake: "Not informing your custodian early",
                                        fix: "Involve them before making offers—they need time to process"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                                        <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-red-400 font-semibold">{item.mistake}</div>
                                            <div className="text-slate-400 text-sm mt-1">
                                                <span className="text-green-400">Fix:</span> {item.fix}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Ready to Put Your Savings to Work?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            You&apos;ve done the hard part—building your retirement savings through years of work. Now you can turn that money into rental income that isn&apos;t tied to Wall Street. Start with a self-directed IRA that allows real estate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" asChild>
                                <a
                                    href={getTrackedLink(AFFILIATE_LINKS.rocketDollar, "rental-property-cta", "rocketdollar")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Real Estate IRA
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/learn/real-estate-ira-rules">
                                    Review IRS Rules First
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Content */}
            <section className="py-12 bg-slate-800/50">
                <Container>
                    <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { href: "/real-estate-ira", title: "Real Estate IRA Guide", desc: "Complete overview" },
                            { href: "/learn/real-estate-ira-custodians", title: "Best Custodians", desc: "Compare providers" },
                            { href: "/learn/real-estate-ira-rules", title: "RE IRA Rules", desc: "IRS requirements" },
                            { href: "/self-directed-ira", title: "Self-Directed IRA", desc: "SDIRA basics" },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                            >
                                <h3 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors text-sm">
                                    {link.title}
                                </h3>
                                <p className="text-slate-400 text-xs">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
