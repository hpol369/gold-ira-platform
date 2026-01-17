import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ClipboardCheck, Sparkles, Scale, BookOpen } from "lucide-react";

export const metadata = {
    title: "Best Gold IRA Companies of 2026 | Reviewed & Ranked",
    description: "We tested 20+ top gold IRA companies. See our list of the best providers for fees, customer service, and security in 2026.",
};

export default function BestGoldIraCompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow">
                {/* Header */}
                <header className="bg-primary text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-50 z-0"></div>
                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Updated for January 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Best Gold IRA Companies
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Protect your retirement savings from inflation and volatility. We've reviewed and ranked the most trusted gold IRA providers in the industry.
                        </p>
                    </Container>
                </header>

                {/* Main Comparison Component */}
                <div className="-mt-12 relative z-20">
                    <ComparisonTable />
                </div>

                {/* Methodology / Trust Section */}
                <section className="py-20 bg-gray-50">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">How We Ranked These Companies</h2>
                                <p className="text-text-muted">
                                    Our ranking methodology is based on 4 key pillars of trust and performance.
                                    We do not accept payment for higher rankings.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                                        <TrophyIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">Reputation & Trust</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We analyze BBB ratings, TrustPilot scores, and years in business. We only recommend companies with an A+ BBB rating and a clean complaint history.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">Fees & Pricing</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We look for transparency. We verify annual fees, storage costs, and dealer premiums to ensure you aren't getting hit with hidden charges.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">Education & Support</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We test customer service response times and evaluate the quality of educational materials. We prioritize companies that educate rather than hard-sell.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                                        <ClipboardCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">Ease of Setup</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We assess the rollover process. The best companies handle 95% of the paperwork for you, making the transfer from your 401(k) seamless.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
            <Footer />
        </main>
    );
}

function TrophyIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    )
}
