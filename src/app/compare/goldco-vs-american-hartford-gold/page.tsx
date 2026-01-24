import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS } from "@/config/affiliates";
import { Metadata } from "next";
import { CheckCircle2, XCircle, ArrowRight, Shield, Users, RefreshCw, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Goldco vs American Hartford Gold: Which is Better? (2026)",
    description: "Goldco vs American Hartford Gold. We compare their buyback guarantees, silver promotions, minimums, and customer service ratings side-by-side.",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Goldco vs American Hartford Gold: Complete 2026 Comparison",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
    "datePublished": "2026-01-19",
    "dateModified": "2026-01-19"
};

export default function GoldcoVsAHGPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />
            <div className="flex-grow">
                <header className="bg-primary text-white py-16">
                    <Container>
                        <div className="max-w-3xl">
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                                Head-to-Head Comparison
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                                Goldco vs American Hartford Gold
                            </h1>
                            <p className="text-xl text-gray-200">
                                Battle of the Customer Service Heavyweights. Which Gold IRA company deserves your business?
                            </p>
                        </div>
                    </Container>
                </header>

                <Container className="py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="lg:w-80 flex-shrink-0 hidden lg:block relative order-last lg:order-first">
                            <StickyMasterSidebar />
                        </aside>

                        {/* Content */}
                        <article className="flex-1 prose prose-lg prose-headings:font-serif prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                            {/* Verdict */}
                            <VerdictBox
                                companyName="Winner: Goldco (Slightly)"
                                rating={4.9}
                                isRecommended={true}
                                bottomLine="Both are excellent choices with A+ ratings and stellar customer service. Goldco edges out AHG with their famous Buyback Guarantee and streamlined rollover process. But AHG wins on lower minimums ($5k vs $25k) and no buyback fees. Your budget determines the winner."
                                ctaText="Get Goldco's Free Kit"
                                ctaUrl={AFFILIATE_LINKS.goldco}
                            />

                            {/* Quick Comparison Table */}
                            <section id="comparison" className="scroll-mt-32">
                                <h2>At a Glance Comparison</h2>
                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="w-full border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                        <thead>
                                            <tr className="bg-white/10 text-white">
                                                <th className="p-4 text-left font-bold text-amber-400">Feature</th>
                                                <th className="p-4 text-center font-bold text-amber-400">Goldco</th>
                                                <th className="p-4 text-center font-bold text-amber-400">American Hartford</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-300">
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Minimum Investment</td>
                                                <td className="p-4 text-center">$25,000</td>
                                                <td className="p-4 text-center text-green-400 font-bold">$5,000</td>
                                            </tr>
                                            <tr className="border-b border-white/10 bg-white/5">
                                                <td className="p-4 font-medium text-white">BBB Rating</td>
                                                <td className="p-4 text-center">A+</td>
                                                <td className="p-4 text-center">A+</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Trustpilot Score</td>
                                                <td className="p-4 text-center">4.8/5</td>
                                                <td className="p-4 text-center">4.9/5</td>
                                            </tr>
                                            <tr className="border-b border-white/10 bg-white/5">
                                                <td className="p-4 font-medium text-white">Buyback Guarantee</td>
                                                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" /></td>
                                                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" /></td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Buyback Fees</td>
                                                <td className="p-4 text-center text-amber-400">Varies</td>
                                                <td className="p-4 text-center text-green-400 font-bold">$0</td>
                                            </tr>
                                            <tr className="border-b border-white/10 bg-white/5">
                                                <td className="p-4 font-medium text-white">Free Silver Promo</td>
                                                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" /></td>
                                                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" /></td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Celebrity Endorsement</td>
                                                <td className="p-4 text-center text-sm">Sean Hannity</td>
                                                <td className="p-4 text-center text-sm">Bill O&apos;Reilly</td>
                                            </tr>
                                            <tr className="bg-white/5">
                                                <td className="p-4 font-medium text-white">Best For</td>
                                                <td className="p-4 text-center text-sm">$25k+ investors wanting proven track record</td>
                                                <td className="p-4 text-center text-sm">Smaller accounts, fee-free buybacks</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Key Differences */}
                            <section id="differences" className="scroll-mt-32">
                                <h2>Key Differences Explained</h2>

                                <div className="not-prose grid gap-6 my-6">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <DollarSign className="w-5 h-5 text-green-400" />
                                            </div>
                                            <h3 className="font-bold text-lg text-amber-400">Minimum Investment</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">
                                            This is the biggest practical difference. <strong>Goldco requires $25,000</strong> to start, while <strong>American Hartford starts at just $5,000</strong>. If you&apos;re working with a smaller retirement account, AHG is clearly more accessible.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <RefreshCw className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <h3 className="font-bold text-lg text-amber-400">Buyback Programs</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm mb-3">
                                            Both companies will buy back your metals when you&apos;re ready to sell—but the terms differ:
                                        </p>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li><strong>Goldco:</strong> Famous &quot;Buyback Guarantee&quot; at competitive rates. May have small spread fees.</li>
                                            <li><strong>American Hartford:</strong> <strong>Zero buyback fees</strong>—they&apos;ll repurchase at current market prices with no deductions.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <Users className="w-5 h-5 text-secondary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-amber-400">Company Culture</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm mb-3">
                                            Both are known for excellent customer service, but the vibes are slightly different:
                                        </p>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li><strong>Goldco:</strong> Larger, more corporate feel. Streamlined processes. Massive advertising presence.</li>
                                            <li><strong>American Hartford:</strong> Family-owned, more personal touch. Direct access to senior staff.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Fees Comparison */}
                            <section id="fees" className="scroll-mt-32">
                                <h2>Fee Structure Comparison</h2>
                                <p>
                                    Both companies use fairly standard fee structures for the industry:
                                </p>

                                <div className="not-prose grid md:grid-cols-2 gap-6 my-6">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Shield className="w-6 h-6 text-secondary" />
                                            <h3 className="font-bold text-amber-400">Goldco Fees</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li>• Setup: $50 (one-time)</li>
                                            <li>• Annual Admin: $80</li>
                                            <li>• Storage: $100-150/year</li>
                                            <li>• <strong>Total Year 1: ~$230-280</strong></li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Users className="w-6 h-6 text-blue-600" />
                                            <h3 className="font-bold text-amber-400">American Hartford Fees</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li>• Setup: Varies (often waived)</li>
                                            <li>• Annual: ~$180/year combined</li>
                                            <li>• Storage: Included</li>
                                            <li>• <strong>Total Year 1: ~$180-250</strong></li>
                                        </ul>
                                    </div>
                                </div>

                                <p>
                                    <strong>Important:</strong> Both companies frequently run promotions that waive first-year fees on larger accounts. Always ask about current offers when you request your free kit.
                                </p>
                            </section>

                            {/* Who Should Choose Which */}
                            <section id="verdict" className="scroll-mt-32">
                                <h2>Who Should Choose Which?</h2>

                                <div className="not-prose grid md:grid-cols-2 gap-6 my-6">
                                    <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                                        <h3 className="font-bold text-amber-400 text-lg mb-3">Choose Goldco If:</h3>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You have $25,000+ to invest</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You want the most recognized brand</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Streamlined, efficient processes matter</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You value their Buyback Guarantee</span>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <Button variant="gold" size="sm" asChild>
                                                <a href={AFFILIATE_LINKS.goldco} target="_blank" rel="noopener noreferrer">
                                                    Get Goldco Free Kit <ArrowRight className="ml-2 w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                        <h3 className="font-bold text-amber-400 text-lg mb-3">Choose American Hartford If:</h3>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You have $5,000-$25,000 to invest</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Zero buyback fees is important to you</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You prefer a family-owned business</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You want a more personal touch</span>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={AFFILIATE_LINKS.americanHartford} target="_blank" rel="noopener noreferrer">
                                                    Get AHG Free Kit <ArrowRight className="ml-2 w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Bottom Line */}
                            <section id="conclusion" className="scroll-mt-32">
                                <h2>Bottom Line</h2>
                                <p>
                                    This is one of those comparisons where you really can&apos;t go wrong. Both Goldco and American Hartford Gold are top-tier companies with A+ ratings, excellent customer service, and strong track records.
                                </p>
                                <ul>
                                    <li><strong>Have $25k+?</strong> Goldco&apos;s brand recognition and Buyback Guarantee make them a strong choice</li>
                                    <li><strong>Have under $25k?</strong> American Hartford&apos;s lower minimum and fee-free buybacks are the better deal</li>
                                    <li><strong>Want the personal touch?</strong> American Hartford&apos;s family-owned model may appeal</li>
                                    <li><strong>Want a streamlined experience?</strong> Goldco&apos;s larger operation has the edge</li>
                                </ul>
                                <p>
                                    Request free kits from both and see which team you connect with better. The right fit is the company you feel most comfortable with.
                                </p>
                            </section>

                            {/* Related Links */}
                            <div className="not-prose my-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                <h4 className="font-bold text-amber-400 mb-4">Related Reviews</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/reviews/goldco" className="text-sm px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-slate-300 hover:border-amber-500/50 hover:text-white transition-colors">
                                        Goldco Full Review →
                                    </Link>
                                    <Link href="/reviews/american-hartford-gold" className="text-sm px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-slate-300 hover:border-amber-500/50 hover:text-white transition-colors">
                                        American Hartford Review →
                                    </Link>
                                    <Link href="/compare/goldco-vs-lear-capital" className="text-sm px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-slate-300 hover:border-amber-500/50 hover:text-white transition-colors">
                                        Goldco vs Lear Capital →
                                    </Link>
                                </div>
                            </div>

                            <AuthorBox />

                        </article>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
