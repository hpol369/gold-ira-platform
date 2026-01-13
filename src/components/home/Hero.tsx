import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pb-16 pt-16 md:pb-24 md:pt-24 lg:pb-32 lg:pt-32">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-50 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl mix-blend-multiply filter" />
                <div className="absolute top-[10%] right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply filter" />
            </div>

            <Container className="relative z-10">

                {/* Subheadline */}
                <p className="max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed text-balance">
                    Join 500,000+ Americans who have secured their savings against inflation and market volatility.
                    Discover if you qualify for a <span className="font-semibold text-primary">Tax-Free Gold IRA Rollover</span>.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-4">
                    <Button size="xl" variant="gold" asChild className="w-full sm:w-auto min-w-[240px] shadow-xl shadow-secondary/20">
                        <Link href="/quiz">
                            Check Eligibility Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="xl" variant="outline" asChild className="w-full sm:w-auto min-w-[240px] border-text-muted/20 text-text-muted hover:text-primary hover:bg-gray-50">
                        <Link href="/best-gold-ira-companies">
                            Compare Top Companies
                        </Link>
                    </Button>
                </div>

                {/* Trust Factors */}
                <div className="mt-12 pt-8 border-t border-gray-100 w-full">
                    <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">Trusted By Investors For</p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm">
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-full bg-blue-50 text-blue-600 mb-1">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-primary">Wealth Protection</span>
                            <span className="text-gray-500">Hedge against inflation</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-full bg-amber-50 text-amber-600 mb-1">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-primary">Portfolio Growth</span>
                            <span className="text-gray-500">Stability in crisis</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 rounded-full bg-green-50 text-green-600 mb-1">
                                <Users className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-primary">Tax Advantages</span>
                            <span className="text-gray-500">Tax-free roll over</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
