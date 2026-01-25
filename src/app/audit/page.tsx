import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AuditWizard } from "@/components/audit/AuditWizard";

export const metadata: Metadata = {
    title: "Sovereign Wealth Audit | Calculate Your Inflation Exposure",
    description: "Take the 60-second diagnostic to calculate your portfolio's exposure to inflation and market volatility. Get your Risk Score instantly.",
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
                    <AuditWizard />
                </Container>
            </div>

            <Footer />
        </main>
    );
}
