import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { US_STATES } from "@/lib/states";
import { MapPin, CheckCircle2, XCircle, Shield, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Gold IRA Companies by State | Local Reviews 2026",
    description: "Find the best Gold IRA companies in your state. Local reviews, tax information, and recommendations for all 50 US states.",
    openGraph: {
        title: "Best Gold IRA Companies by State | Local Reviews 2026",
        description: "Find the best Gold IRA companies in your state. Local reviews, tax information, and recommendations for all 50 US states.",
        type: "website",
    },
};

export default function LocalPage() {
    const taxFriendlyStates = US_STATES.filter(s => s.taxFriendly);
    const taxableStates = US_STATES.filter(s => !s.taxFriendly);

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Best Gold IRA Companies by State",
        "description": "State-by-state guides to Gold IRA investing, including local tax laws, storage options, and recommended companies.",
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": US_STATES.length,
            "itemListElement": US_STATES.map((state, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": `Gold IRA Guide for ${state.name}`,
                "url": `https://richdadretirement.com/local/${state.slug}`
            }))
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <SchemaScript schema={schema} />
            <Navbar />

            <div className="flex-grow">
                {/* Hero Section */}
                <header className="bg-slate-50 py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,34,52,0.08),transparent_50%)]" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#B22234]/10 px-4 py-1.5 text-sm font-semibold text-[#B22234] mb-6 border border-[#B22234]/20">
                                <MapPin className="w-4 h-4" />
                                State-by-State Guides
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#000080]">
                                Gold IRA Companies by State
                            </h1>
                            <p className="text-xl text-slate-600">
                                Find trusted Gold IRA providers in your area. Each state guide covers local tax laws, storage options, and the best companies serving your region.
                            </p>
                        </div>
                    </Container>
                </header>

                {/* Why Location Matters */}
                <section className="py-12 bg-white border-b border-slate-200">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-serif font-bold text-[#000080] mb-6 text-center">
                                Why Your State Matters for Gold IRAs
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 border border-amber-200">
                                        <Building2 className="w-6 h-6 text-[#B22234]" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Sales Tax Laws</h3>
                                    <p className="text-slate-600 text-sm">
                                        Some states exempt precious metals from sales tax, while others charge 6-10%. A Gold IRA bypasses state sales tax entirely.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 border border-blue-200">
                                        <Shield className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Storage Options</h3>
                                    <p className="text-slate-600 text-sm">
                                        IRS requires approved depository storage. Some states like Texas and Delaware have major facilities with lower fees.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 border border-green-200">
                                        <MapPin className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Local Regulations</h3>
                                    <p className="text-slate-600 text-sm">
                                        State-specific rules affect dealer licensing, home storage risks, and reporting requirements. Know before you invest.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* All States Grid */}
                <section className="py-16 bg-white">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-[#000080] mb-2 text-center">
                            Select Your State
                        </h2>
                        <p className="text-slate-600 text-center mb-8">
                            Click your state for local tax laws, storage options, and recommended Gold IRA companies
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {US_STATES.map((state) => (
                                <Link
                                    key={state.slug}
                                    href={`/local/${state.slug}`}
                                    className="group bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-[#B22234]/50 hover:bg-white transition-all"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <MapPin className="h-4 w-4 text-[#B22234] mb-2" />
                                            <span className="text-slate-900 font-medium group-hover:text-[#B22234] transition-colors block">
                                                {state.name}
                                            </span>
                                        </div>
                                        {state.taxFriendly ? (
                                            <span className="text-green-600" title="Tax-friendly for precious metals">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </span>
                                        ) : (
                                            <span className="text-slate-400" title="Sales tax applies">
                                                <XCircle className="w-4 h-4" />
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex justify-center gap-6 mt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span className="text-slate-600">Tax-exempt for precious metals ({taxFriendlyStates.length} states)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <XCircle className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-600">Sales tax applies ({taxableStates.length} states)</span>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Tax-Friendly States Section */}
                <section className="py-12 bg-green-50 border-y border-green-200">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-[#000080] mb-2">
                            <CheckCircle2 className="w-6 h-6 text-green-600 inline mr-2" />
                            Tax-Friendly States for Gold
                        </h2>
                        <p className="text-slate-600 mb-6">
                            These {taxFriendlyStates.length} states exempt precious metals from sales tax, making local purchases more affordable.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {taxFriendlyStates.map((state) => (
                                <Link
                                    key={state.slug}
                                    href={`/local/${state.slug}`}
                                    className="bg-green-100 border border-green-300 text-green-800 px-3 py-1.5 rounded-full text-sm hover:bg-green-200 transition-colors"
                                >
                                    {state.name}
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Taxable States Section */}
                <section className="py-12 bg-white">
                    <Container>
                        <h2 className="text-2xl font-serif font-bold text-[#000080] mb-2">
                            <XCircle className="w-6 h-6 text-amber-600 inline mr-2" />
                            States with Precious Metals Sales Tax
                        </h2>
                        <p className="text-slate-600 mb-6">
                            In these {taxableStates.length} states, a Gold IRA can save you 5-10% in sales tax compared to buying locally.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {taxableStates.map((state) => (
                                <Link
                                    key={state.slug}
                                    href={`/local/${state.slug}`}
                                    className="bg-amber-100 border border-amber-300 text-amber-800 px-3 py-1.5 rounded-full text-sm hover:bg-amber-200 transition-colors"
                                >
                                    {state.name}
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-[#000080] to-[#000060]">
                    <Container>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">
                                Not Sure Where to Start?
                            </h2>
                            <p className="text-gray-200 mb-8">
                                Compare the top-rated Gold IRA companies that serve all 50 states. Get free investor kits with pricing, process guides, and no obligation.
                            </p>
                            <Link
                                href="/best-gold-ira-companies"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#B22234] hover:bg-[#8b1c2a] text-white font-bold rounded-lg transition-colors"
                            >
                                Compare Top Companies
                            </Link>
                        </div>
                    </Container>
                </section>
            </div>

            <Footer />
        </main>
    );
}
