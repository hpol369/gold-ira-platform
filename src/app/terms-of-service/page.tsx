import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata = {
    title: "Terms of Service - Coming Soon | Gold IRA Guide",
    description: "Terms of service for Gold IRA Guide.",
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-12 md:py-24">
                <Container className="text-center">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-secondary/10 mb-6">
                        <Clock className="h-8 w-8 text-secondary" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Coming Soon
                    </h1>
                    <p className="text-lg text-text-muted max-w-md mx-auto mb-8">
                        Our terms of service are currently being finalized.
                    </p>
                    <Button variant="outline" asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
