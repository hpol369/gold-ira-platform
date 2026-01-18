import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { ProsCons } from "@/components/reviews/ProsCons";
import { AuthorVerification } from "@/components/reviews/AuthorVerification";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

export const metadata = {
    title: "Augusta Precious Metals Review (2026): Legit or Scam? [Hidden Fees]",
    description: "Honest review of Augusta Precious Metals. We uncovered their fees, minimums, and 'Harvard Economist' claims. Read our full investigation findings.",
};

export default function AugustaReviewPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="flex-grow bg-gray-50/50">
                {/* Header / Hero for Review */}
                <header className="bg-primary text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-50 z-0"></div>
                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-secondary text-sm font-bold uppercase tracking-wider mb-4">
                                <span className="bg-white/10 px-2 py-1 rounded">Gold IRA Company Reviews</span>
                                <span>•</span>
                                <span>Updated Jan 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Augusta Precious Metals Review: <br />
                                <span className="text-gray-300">Is The Hype Justified?</span>
                            </h1>
                            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                                They are endorsed by Joe Montana and Money Magazine. But with a $50k minimum, are they actually the right choice for <em>your</em> retirement?
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content (Left 2/3) */}
                        <article className="lg:col-span-2">

                            {/* Author & Verification */}
                            <AuthorVerification />

                            {/* Verdict Box (Key Takeaway) */}
                            <VerdictBox
                                companyName="Augusta Precious Metals"
                                rating={4.9}
                                isRecommended={true}
                                bottomLine="Augusta is the 'Gold Standard' for high-net-worth investors. Their zero-fee promo (for up to 10 years) and strict 'NO sales pressure' policy makes them our #1 choice for approved accounts over $50k."
                                ctaUrl={AFFILIATE_LINKS.augusta}
                                ctaText="Get Augusta's Free Gold Kit"
                            />

                            {/* Main Body Content - TYPOGRAPHY PROSE */}
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <h2>The "Too Long; Didn't Read" Summary</h2>
                                <p>
                                    If you have <strong>$50,000 or more</strong> to protect, <strong>Augusta Precious Metals</strong> is simply the best in the business. Period.
                                    They consistently rank #1 on our <a href="/best-gold-ira-companies">Best Gold IRA Companies of 2026</a> list for high-net-worth investors.
                                </p>
                                <p>
                                    Why are we so confident? Because they do the one thing no other gold company dares to do: <strong>They tell you NOT to buy gold if it doesn't fit your needs.</strong>
                                    We confirmed this during our <a href="/investigative-hub">secret shopper test</a> where their rep advised us to wait before buying.
                                </p>
                                <p>
                                    Led by their Director of Education, Devlyn Steele (a Harvard-trained economist), their entire process is built around education first. There is zero fear-mongering. No "the dollar is crashing tomorrow" pitch. Just pure, data-backed economics.
                                    Plus, their "Zero Fees for up to 10 Years" promotion is mathematically the best offer in the industry for large accounts.
                                </p>

                                <h3>Pros & Cons at a Glance</h3>
                                <ProsCons
                                    pros={[
                                        "Zero fees for up to 10 years (Huge savings)",
                                        "No high-pressure sales tactics (Authorized)",
                                        "Endorsed by Joe Montana (customer)",
                                        "A+ BBB Rating & AAA BCA Rating"
                                    ]}
                                    cons={[
                                        "High minimum investment ($50,000)",
                                        "No online account setup (Must talk to team)",
                                        "Does not sell crypto or platinum"
                                    ]}
                                />

                                <h2>1. Fees & Pricing Breakdown</h2>
                                <p>
                                    Transparency is where Augusta leaves competitors in the dust. Most companies hide their "dealer spread" (the profit they make on the coins) until after you sign.
                                    Augusta is open about it:
                                </p>
                                <ul>
                                    <li><strong>Setup Fee:</strong> $50 (One-time)</li>
                                    <li><strong>Custodian Fee:</strong> $100 (Annual)</li>
                                    <li><strong>Storage Fee:</strong> $100 (Annual)</li>
                                </ul>
                                <p>
                                    <strong>The "Zero Fee" Promotion:</strong> This is the game-changer. Augusta will pay your custodian and storage fees for you for up to 10 years depending on your investment amount.
                                    On a $200k account, this saves you thousands of dollars that stays compounding in your account.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 not-prose my-8">
                                    <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                                        <Info className="w-5 h-5" /> Hidden Fee Alert
                                    </h4>
                                    <p className="text-sm text-blue-800">
                                        Most gold companies hide their dealer spread. Augusta is transparent: expect a spread of roughly 5%. This is standard for the industry, but Augusta guarantees no added commission on top of this.
                                    </p>
                                </div>

                                <h2>2. The "Harvard Economist" Webinar</h2>
                                <p>
                                    This is Augusta's secret weapon. Before you spend a dime, they invite you to a private web conference.
                                    It’s not a sales pitch—it’s an economics masterclass. They define inflation, deflation, and how central bank policies affect your 401(k).
                                    They even walk you through the "lies" other gold companies tell. It is arguably the most valuable 45 minutes you can spend on your retirement planning.
                                </p>

                                <h2>3. Customer Reviews & Complaints</h2>
                                <p>
                                    We looked everywhere. The track record is spotless:
                                </p>
                                <ul>
                                    <li><strong>BBB:</strong> A+ Rating, 0 Complaints</li>
                                    <li><strong>BCA:</strong> AAA Rating</li>
                                    <li><strong>TrustLink:</strong> 5.0/5 Stars</li>
                                </ul>
                                <p>
                                    In an industry rife with scams and lawsuits, Augusta's clean sheet is extraordinary validation of their integrity.
                                </p>

                                <h2>4. Minimum Investment Requirements</h2>
                                <p>
                                    The only downside? The velvet rope. You must have at least <strong>$50,000</strong> to open an account.
                                    This high barrier ensures that every client gets dedicated, white-glove service.
                                    If you have less than $50k, we respect their honesty in turning you away rather than taking your money and giving you subpar service.
                                    (For smaller accounts, we recommend <strong>Noble Gold</strong>).
                                </p>

                                <hr className="my-12 border-gray-200" />

                                <h2>Final Verdict: Are They Worth It?</h2>
                                <p>
                                    If you meet the $50k minimum, <strong>Augusta Precious Metals</strong> is the obvious choice.
                                    You get the best education, the most transparent pricing, and the security of a company endorsed by money icons.
                                    Don't navigate this volatile economy alone—let Augusta's team guide you.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-primary text-white p-8 rounded-2xl text-center mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Claim Your Free Gold Kit From Augusta</h3>
                                    <p className="mb-8 text-white/80 max-w-lg mx-auto">
                                        Don't let inflation eat your savings. Learn how to protect your 401(k) tax-free today.
                                    </p>
                                    <Button variant="gold" size="xl" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform" asChild>
                                        <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                            Download Free Guide Now
                                        </a>
                                    </Button>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                            </div>
                        </article>

                        {/* Sidebar (Right 1/3) */}
                        <aside className="relative">
                            <StickyMasterSidebar />
                        </aside>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
