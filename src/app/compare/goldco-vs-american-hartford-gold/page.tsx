import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Goldco vs American Hartford Gold: Which is Better? (2026)",
    description: "Goldco vs American Hartford Gold. We compare their buyback guarantees, silver promotions, and customer service ratings side-by-side.",
};

export default function GoldcoVsAHGPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-grow bg-gray-50/50">
                <header className="bg-primary text-white py-16">
                    <Container>
                        <h1 className="text-4xl font-serif font-bold mb-4">Goldco vs American Hartford Gold</h1>
                        <p className="text-xl opacity-90">Battle of the Customer Service Heavyweights</p>
                    </Container>
                </header>
                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 prose prose-lg">
                            <VerdictBox
                                companyName="Winner: Goldco"
                                rating={4.9}
                                isRecommended={true}
                                bottomLine="Both are excellent, but Goldco slightly edges out AHG with their 'Buyback Guarantee' and streamlined rollover process. AHG is a great runner-up specifically for smaller accounts."
                                ctaText="Get Goldco's Free Kit"
                                ctaUrl="/reviews/goldco"
                            />
                            <h2>Key Differences</h2>
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
