import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Search, BookOpen, Calculator } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-16 md:py-32">
                <Container className="text-center max-w-2xl">
                    <div className="inline-flex items-center justify-center p-6 rounded-full bg-slate-800 mb-8">
                        <Search className="h-10 w-10 text-amber-400" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                        Page Not Found
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                        It looks like the strategy you&apos;re looking for has moved or doesn&apos;t exist.
                        Don&apos;t let this setback derail your retirement planning.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
                        <Link href="/guide/gold-ira-guide" className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all bg-white/5">
                            <div className="p-3 bg-amber-500/20 rounded-lg group-hover:bg-amber-500 transition-colors">
                                <BookOpen className="w-5 h-5 text-amber-400 group-hover:text-slate-900" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Read the Guide</h4>
                                <p className="text-xs text-slate-400">Start with the basics</p>
                            </div>
                        </Link>

                        <Link href="/quiz" className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all bg-white/5">
                            <div className="p-3 bg-amber-500/20 rounded-lg group-hover:bg-amber-500 transition-colors">
                                <Calculator className="w-5 h-5 text-amber-400 group-hover:text-slate-900" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Free Eligibility Quiz</h4>
                                <p className="text-xs text-slate-400">Check your requirements</p>
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
