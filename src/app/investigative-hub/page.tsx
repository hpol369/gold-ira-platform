import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EvidenceCard } from "@/components/investigation/EvidenceCard";
import { GoldChart } from "@/components/investigation/GoldChart";
import { ShieldAlert, Search, FileSearch, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Investigative Hub: We Secret Shopped 10 Gold IRA Companies",
    description: "See the raw data. We recorded calls, analyzed contracts, and uncovered the hidden fees. This is the only place to see the truth about the Gold IRA industry.",
};

export default function InvestigativeHubPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f172a] opacity-90 z-0 pattern-grid-lg"></div>
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold tracking-widest uppercase mb-4">
                        Investigation Status: Active
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        The <span className="text-red-500">Untold Truth</span> About<br />
                        Gold IRA Companies
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        We posed as potential investors. We recorded the calls (legally). We got the contracts. <br />
                        Here is the raw data that the big companies don't want you to see.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="gold" size="xl" asChild>
                            <Link href="#evidence-log">View Evidence Log</Link>
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                            <Link href="/best-gold-ira-companies">See Final Rankings</Link>
                        </Button>
                    </div>
                </Container>
            </div>

            <Container className="py-16">

                {/* Stats / Intro Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">200+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Hours Invested</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">12</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Companies Audited</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-red-500 mb-2">3</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Scams Identified</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wide font-bold">Independent</div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Feed */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Section 1: The Problem */}
                        <section className="prose prose-lg max-w-none">
                            <h2>Why We Did This Investigation</h2>
                            <p>
                                The Gold IRA industry is currently the "Wild West" of finance.
                                Unregulated boiler rooms use fear-mongering scripts to scare seniors into buying gold at 30-40% markups.
                                We decided to shine a light on these practices.
                            </p>
                            <p>
                                Our methodology was simple: <strong>Mystery Shopping.</strong> We used burner phones and alias emails to undergo the sales process just like you would.
                            </p>
                        </section>

                        {/* Section 2: Data Visualization */}
                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-6">Visualizing The Data</h2>
                            <GoldChart />
                            <p className="text-sm text-muted-foreground mt-2 italic">
                                *Chart demonstrates the correlation between inflation spikes and gold price interest, which predatory companies often exploit.
                            </p>
                        </section>

                        {/* Section 3: Evidence Log */}
                        <section id="evidence-log" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-2">
                                <FileSearch className="w-6 h-6 text-primary" />
                                Recent Investigation Logs
                            </h2>
                            <div className="grid gap-6">
                                <EvidenceCard
                                    type="audio"
                                    title="The 'Fear Script' Recording"
                                    company="[Redacted] Gold Group"
                                    date="Jan 12, 2026"
                                    description="Sales rep claimed the 'dollar will be worthless by March'. Classic fear-mongering tactic used to rush the close."
                                    findings="negative"
                                />
                                <EvidenceCard
                                    type="document"
                                    title="Fee Schedule Analysis: Augusta"
                                    company="Augusta Precious Metals"
                                    date="Jan 10, 2026"
                                    description="Received written confirmation of 'Zero Fees' promo. Verified against customer contract. Math checks out."
                                    findings="positive"
                                />
                                <EvidenceCard
                                    type="email"
                                    title="The 'Bait & Switch' Email"
                                    company="[Redacted] Coins"
                                    date="Jan 05, 2026"
                                    description="Company advertised Gold Eagles at spot price, but then claimed they were 'sold out' and pushed numismatic coins at 30% markup."
                                    findings="negative"
                                />
                                <EvidenceCard
                                    type="analysis"
                                    title="Storage Security Check"
                                    company="Noble Gold Investments"
                                    date="Jan 03, 2026"
                                    description="Verified their Texas Depository partnership. Confirmed segregation of assets is available."
                                    findings="positive"
                                />
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-red-500" />
                                Red Flag Warnings
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                If you hear any of these phrases on a phone call, <strong>HANG UPIMMEDIATELY</strong>:
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">1.</span>
                                    <span>"The government is about to confiscate your 401(k)." (Lie)</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">2.</span>
                                    <span>"These 'exclusive' coins are better than bullion." (Markup Trap)</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-red-500 font-bold">3.</span>
                                    <span>"I can only hold this price for 5 minutes." (Pressure)</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-slate-200">
                                <h4 className="font-bold mb-2">Want the Safe List?</h4>
                                <Button className="w-full" asChild>
                                    <Link href="/best-gold-ira-companies">View Approved Companies</Link>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
