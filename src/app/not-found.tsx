import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Search, BookOpen, Calculator } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-16 md:py-32">
                <Container className="text-center max-w-2xl">
                    <div className="inline-flex items-center justify-center p-6 rounded-full bg-slate-100 mb-8">
                        <Search className="h-10 w-10 text-[#B22234]" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#000080] mb-6">
                        Page Not Found
                    </h1>

                    <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                        It looks like the strategy you&apos;re looking for has moved or doesn&apos;t exist.
                        Don&apos;t let this setback derail your retirement planning.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
                        <Link href="/guide/gold-ira-guide" className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#B22234]/30 hover:bg-slate-50 transition-all bg-white">
                            <div className="p-3 bg-[#B22234]/10 rounded-lg group-hover:bg-[#B22234] transition-colors">
                                <BookOpen className="w-5 h-5 text-[#B22234] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#000080]">Read the Guide</h4>
                                <p className="text-xs text-slate-500">Start with the basics</p>
                            </div>
                        </Link>

                        <Link href="/quiz" className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#B22234]/30 hover:bg-slate-50 transition-all bg-white">
                            <div className="p-3 bg-[#B22234]/10 rounded-lg group-hover:bg-[#B22234] transition-colors">
                                <Calculator className="w-5 h-5 text-[#B22234] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#000080]">Free Eligibility Quiz</h4>
                                <p className="text-xs text-slate-500">Check your requirements</p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="gold" size="lg" asChild>
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
