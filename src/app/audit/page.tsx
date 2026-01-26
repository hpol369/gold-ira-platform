import { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { UniversalQuiz } from "@/components/quiz/UniversalQuiz";

export const metadata: Metadata = {
  title: "Free Retirement Account Finder | Gold, Crypto, Real Estate IRAs",
  description: "Take our 60-second quiz to find the perfect retirement account for your goals. Compare Gold IRAs, Crypto IRAs, ROBS 401k, Self-Directed IRAs and more.",
  openGraph: {
    title: "Find Your Perfect Retirement Account - Free Quiz",
    description: "Answer 4 quick questions to get personalized recommendations for Gold IRA, Crypto IRA, ROBS 401k, or Self-Directed IRA.",
  },
};

export default function AuditPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-950">
            <Navbar />

            <div className="flex-grow flex flex-col justify-center py-12 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px]" />
                </div>

                <Container className="relative z-10">
                    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-slate-400">Loading quiz...</div></div>}>
                        <UniversalQuiz />
                    </Suspense>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
