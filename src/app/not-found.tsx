import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Search, BookOpen, Calculator } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-16 md:py-32">
                <Container className="text-center max-w-2xl">
                    <div className="inline-flex items-center justify-center p-6 rounded-full bg-red-50 mb-8 animate-pulse">
                        <Search className="h-10 w-10 text-red-500" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
                        Page Not Found
                    </h1>

                    <p className="text-xl text-text-muted mb-10 leading-relaxed">
                        It looks like the strategy you're looking for has moved or doesn't exist.
                        Don't let this setback derail your retirement planning.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
                        <Link href="/guide/gold-ira-guide" className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-secondary hover:shadow-md transition-all bg-white">
                            <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">Read the Guide</h4>
                                <p className="text-xs text-text-muted">Start with the basics</p>
                            </div>
                        </Link>

                        <Link href="/quiz" className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-secondary hover:shadow-md transition-all bg-white">
                            <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Calculator className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">Free Eligibility Quiz</h4>
                                <p className="text-xs text-text-muted">Check your requirements</p>
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
