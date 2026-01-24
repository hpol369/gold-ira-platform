import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, TrendingUp, AlertTriangle, ShieldCheck, DollarSign } from "lucide-react";

export default function RichDadStrategyPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            {/* Hero Section */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary shadow-sm ring-1 ring-inset ring-white/20">
                                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                                Insider Knowledge
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                                Why "Savers Are Losers"
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 font-light">
                                And why the wealthy are moving millions into real assets right now.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* The Problem: Paper Assets */}
            <section className="py-20">
                <Container>
                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">The "Middle Class" Trap: Paper Assets</h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                                    <p>
                                        Most people are taught to go to school, get a job, and save money in a 401(k). But Robert Kiyosaki and other financial experts have been warning for years: <strong className="text-white">this is a trap.</strong>
                                    </p>
                                    <p>
                                        Your savings accounts and 401(k)s are made of "fiat currency" and paper promises. They are not real. When the government prints trillions of dollars (like they did in 2020-2024), the value of your labor and savings is stolen through inflation.
                                    </p>
                                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2">
                                            <AlertTriangle className="h-5 w-5" />
                                            The Silent Thief
                                        </h4>
                                        <p className="text-sm text-red-300">
                                            Since 1971, the U.S. Dollar has lost 98% of its purchasing power against gold. Your savings aren't growing; they are shrinking.
                                        </p>
                                    </div>
                                </div>

                                {/* Chart Placeholder */}
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[300px]">
                                    <div className="w-full h-48 bg-white/5 rounded-lg relative overflow-hidden flex items-end justify-between px-4 pb-4">
                                        {/* Bars representing declining dollar value */}
                                        <div className="w-8 h-[90%] bg-amber-500/80 rounded-t-sm relative group">
                                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">1971</span>
                                        </div>
                                        <div className="w-8 h-[70%] bg-amber-500/60 rounded-t-sm" />
                                        <div className="w-8 h-[50%] bg-amber-500/40 rounded-t-sm" />
                                        <div className="w-8 h-[30%] bg-amber-500/20 rounded-t-sm" />
                                        <div className="w-8 h-[5%] bg-red-400 rounded-t-sm relative">
                                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-400">2024</span>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-center font-bold text-slate-400 text-sm uppercase tracking-widest">Purchasing Power of $1</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* The Solution: Real Assets */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">The Rich Dad Approach</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">Own Real Assets</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                                <div className="h-12 w-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold font-serif text-white mb-3">No Counterparty Risk</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Physical gold is one of the distinct assets that is not someone else's liability. Even if banks fail, your gold remains gold.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                                <div className="h-12 w-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-6">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold font-serif text-white mb-3">Wealth Preservation</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Gold has preserved wealth for over 5,000 years. It cannot be printed, inflated, or digitally deleted.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                                <div className="h-12 w-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-6">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold font-serif text-white mb-3">Tax Advantages</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Using a "Gold IRA", you can buy physical metals using pre-tax dollars, just like the wealthy use real estate loopholes.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <Container>
                    <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">What is Your "Rich Dad" Score?</h2>
                            <p className="text-lg text-gray-200">
                                Find out if you are exposed to the crashing dollar, or if you are set up for generational wealth.
                            </p>
                            <Button size="xl" variant="gold" asChild className="w-full sm:w-auto shadow-2xl shadow-black/20">
                                <Link href="/quiz">
                                    Calculate My Score
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
