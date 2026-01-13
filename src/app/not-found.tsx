import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-12 md:py-24">
                <Container className="text-center">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-red-50 mb-6">
                        <Search className="h-8 w-8 text-red-500" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
                        404
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-text mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-text-muted max-w-md mx-auto mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="gold" asChild>
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/quiz">
                                Take the Quiz
                            </Link>
                        </Button>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
