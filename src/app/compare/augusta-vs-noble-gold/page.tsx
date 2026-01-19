import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ComparisonTable } from "@/components/compare/ComparisonTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Augusta Precious Metals vs Noble Gold: 2026 Comparison",
    description: "Head-to-head comparison of Augusta vs Noble Gold. We analyze their fees, minimums ($50k vs $20k), and which one is better for your retirement.",
};

export default function AugustaVsNoblePage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow bg-gray-50/50">
                <header className="bg-primary text-white py-16">
                    <Container>
                        <h1 className="text-4xl font-serif font-bold mb-4">Augusta Precious Metals vs Noble Gold</h1>
                        <p className="text-xl opacity-90">The Premium Giant vs. The Flexible Favorite</p>
                    </Container>
                </header>
                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 prose prose-lg">
                            <VerdictBox
                                companyName="Winner: Depends on Budget"
                                rating={5.0}
                                isRecommended={true}
                                bottomLine="If you have $50k+, choose Augusta for their premium service and education. If you have under $50k, Noble Gold is the clear winner with their $20k minimum and excellent reputation."
                                ctaText="Compare Both Side-by-Side"
                                ctaUrl="#comparison"
                            />
                            <h2>Head-to-Head At a Glance</h2>
                            <p>[COMPARISON CONTENT PLACEHOLDER - CLAUDE WILL GENERATE]</p>
                        </article>
                        <aside>
                            <StickyMasterSidebar />
                        </aside>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
