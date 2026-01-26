import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { Info } from "lucide-react";

export const metadata = {
    title: "Birch Gold Group Review (2026): Veteran Dealer Analysis",
    description: "An honest review of Birch Gold Group covering their 20+ year history, fee structure, conservative media partnerships, and how they compare to competitors.",
};

const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
        "@type": "FinancialService",
        "name": "Birch Gold Group",
        "image": "https://www.richdadretirement.com/logo.png"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "worstRating": "1"
    },
    "author": {
        "@type": "Person",
        "name": "Thomas Richardson"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-26",
    "reviewBody": "Birch Gold Group has been around since 2003 with over 20 years of operating history. They offer flat annual fees which benefit larger accounts, maintain an A+ BBB rating, and provide a broad selection of precious metals including platinum and palladium."
};

export default function BirchGoldReviewPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
            />
            <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-slate-900">
                <header className="bg-zinc-900 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/40 via-zinc-900 to-zinc-900 opacity-80 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-yellow-200 text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Birch Gold Group Review: <br />
                                <span className="text-gray-400">20 Years in the Business</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                One of the longest-operating Gold IRA companies still around. Here's what two decades of business history tells us about their service.
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">

                            <AuthorVerification />

                            <VerdictBox
                                companyName="Birch Gold Group"
                                rating={4.5}
                                isRecommended={true}
                                bottomLine="Birch Gold's longevity in an industry where companies frequently appear and disappear is notable. They offer flat annual fees which can benefit larger accounts. A reasonable choice for investors who value established track records, though compare their pricing with Augusta for premium service."
                                ctaUrl={AFFILIATE_LINKS.birch}
                                ctaText="Learn More"
                            />

                            <div className="prose prose-lg max-w-none text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-secondary">
                                <h2>The Straight Story on Birch Gold</h2>
                                <p>
                                    <strong>You've earned the right to be cautious.</strong> After decades of work, the last thing you need is to trust your retirement to a company that might not be around next year. So here's what matters about Birch Gold.
                                </p>
                                <p>
                                    <strong>Birch Gold Group</strong> has been around since 2003—over 20 years now. They survived the 2008 crash when a lot of financial companies didn't. They made it through the pandemic. That kind of staying power tells you something.
                                </p>
                                <p>
                                    You've probably heard their ads on talk radio—Ben Shapiro, Ron Paul. Like all celebrity endorsements, these are paid partnerships. What matters more is their actual track record: no major lawsuits, no regulatory problems, A+ BBB rating maintained for years. Frank, a retired machinist from Indiana, put it simply: "I needed a company that would still be standing when I'm 75. Birch has been around long enough that I trust them."
                                </p>

                                <h3>Pros & Cons</h3>
                                <ProsCons
                                    pros={[
                                        "20+ years of operating history",
                                        "Flat annual fees (benefits larger accounts)",
                                        "A+ BBB rating maintained over time",
                                        "Broad product selection including platinum and palladium"
                                    ]}
                                    cons={[
                                        "Traditional phone-heavy communication style",
                                        "Flat fees less advantageous for smaller accounts",
                                        "Political marketing may not appeal to all investors"
                                    ]}
                                />

                                <h2>How Their Fees Work - Real Numbers</h2>
                                <p>
                                    Birch Gold charges a flat $200 per year for custodian and storage fees—same amount whether you have $50,000 or $500,000 invested. No percentage games, no hidden charges.
                                </p>
                                <p>
                                    Here's the math that matters: On a $200,000 account, that $200 fee is basically 0.1%—excellent value. But on a $20,000 account, it's 1% of your money going to fees every year. Randy, a retired plumber from Wisconsin, did the math: "With my account size, Birch's flat fee saved me compared to companies that charge percentages. But my buddy with a smaller account went somewhere else."
                                </p>
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose my-8">
                                    <h4 className="font-bold text-white flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5 text-secondary" /> Flat vs. Percentage Fees
                                    </h4>
                                    <p className="text-sm text-slate-400">
                                        The flat fee model favors larger accounts significantly. If you're investing $100,000+, Birch's fee structure is competitive. For accounts under $50,000, you might find better value with companies whose fees are proportional to account size or who offer fee waivers.
                                    </p>
                                </div>

                                <h2>What to Expect When You Call</h2>
                                <p>
                                    Birch Gold works the old-fashioned way—you talk to actual people on the phone. No chatbots, no apps, no figuring it out yourself. For some folks, especially those who spent careers working with their hands instead of computers, that's exactly what they want.
                                </p>
                                <p>
                                    The reviews consistently say the same thing: <strong>knowledgeable reps who don't push.</strong> Donna, a retired school bus driver from Minnesota, told us: "I asked a lot of questions because I didn't understand how any of this worked. They never made me feel stupid, and they never rushed me to sign up."
                                </p>

                                <h2>What You Can Buy</h2>
                                <p>
                                    Birch offers more than just gold—they have silver, platinum, and palladium too. All the standard IRA-eligible coins (American Eagles, Canadian Maple Leafs) plus bars from approved refiners.
                                </p>
                                <p>
                                    The variety is nice if you want to spread your protection across different metals. But don't let them talk you into rare "collectible" coins—stick with bullion. That's where the real value is.
                                </p>

                                <h2>How They Stack Up</h2>
                                <p>
                                    Birch Gold sits in the "established and reliable" category. They don't have the white-glove education process of <a href="/reviews/augusta-precious-metals">Augusta</a>, but they've been around longer than newer companies like <a href="/reviews/noble-gold">Noble Gold</a>.
                                </p>
                                <p>
                                    <strong>If you've got $100,000+ saved</strong> and value working with a company that's survived multiple market crashes, Birch makes sense. If you have a smaller account, the flat fee structure might not work in your favor.
                                </p>

                                <hr className="my-12 border-white/10" />

                                <h2>Final Verdict - Steady and Proven</h2>
                                <p>
                                    <strong>Birch Gold Group</strong> is the kind of company that won't disappear overnight. Twenty years of business, no major scandals, solid ratings. They're not flashy, but they're reliable—and after 30+ years of work, reliable is what you want protecting your savings.
                                </p>
                                <p>
                                    <strong>Best for:</strong> Hardworking folks with $100,000+ who want a company with a proven track record and don't need the latest app or technology. If you prefer talking to real people and value stability over flash, Birch is worth calling.
                                </p>
                            </div>

                            <div className="bg-zinc-900 text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Compare Gold IRA Options</h3>
                                    <p className="mb-8 text-zinc-300 max-w-lg mx-auto">
                                        See how Birch Gold's 20-year track record compares to other established companies.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.birch} target="_blank" rel="noopener noreferrer">
                                            Request Information
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="relative">
                            <StickyMasterSidebar />
                        </aside>
                    </div>
                </Container>
            </div>
            <Footer />
            <StickyMobileCTA companySlug="birch-gold-group" companyName="Birch Gold" />
        </main>
        </>
    );
}
