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
import { CheckCircle2, XCircle, ArrowRight, Trophy, Wallet, GraduationCap, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Augusta Precious Metals vs Noble Gold: 2026 Comparison",
    description: "Head-to-head comparison of Augusta vs Noble Gold. We analyze their fees, minimums ($50k vs $20k), and which one is better for your retirement.",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Augusta Precious Metals vs Noble Gold: Complete 2026 Comparison",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
    "datePublished": "2026-01-19",
    "dateModified": "2026-01-19"
};

export default function AugustaVsNoblePage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
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
                                Augusta Precious Metals vs Noble Gold
                            </h1>
                            <p className="text-xl text-gray-200">
                                The Premium Giant vs. The Flexible Favorite. Which Gold IRA is right for your budget?
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
                        <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                            {/* Verdict */}
                            <VerdictBox
                                companyName="Winner: Depends on Budget"
                                rating={5.0}
                                isRecommended={true}
                                bottomLine="If you have $50k+, choose Augusta for their premium education and zero complaints. If you have $20k-$50k, Noble Gold wins with lower minimums and the same A+ reputation. Both are excellent choices."
                                ctaText="Jump to Recommendation"
                                ctaUrl="#verdict"
                            />

                            {/* Quick Comparison Table */}
                            <section id="comparison" className="scroll-mt-32">
                                <h2>At a Glance Comparison</h2>
                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
                                        <thead>
                                            <tr className="bg-primary text-white">
                                                <th className="p-4 text-left font-bold">Feature</th>
                                                <th className="p-4 text-center font-bold">Augusta</th>
                                                <th className="p-4 text-center font-bold">Noble Gold</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="border-b border-gray-200">
                                                <td className="p-4 font-medium">Minimum Investment</td>
                                                <td className="p-4 text-center text-red-600 font-bold">$50,000</td>
                                                <td className="p-4 text-center text-green-600 font-bold">$20,000</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-4 font-medium">BBB Rating</td>
                                                <td className="p-4 text-center">A+</td>
                                                <td className="p-4 text-center">A+</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-4 font-medium">BBB Complaints</td>
                                                <td className="p-4 text-center text-green-600 font-bold">0</td>
                                                <td className="p-4 text-center">Very Few</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-4 font-medium">Setup Fee</td>
                                                <td className="p-4 text-center">$50</td>
                                                <td className="p-4 text-center">$80</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-4 font-medium">Annual Fees</td>
                                                <td className="p-4 text-center">$180/year</td>
                                                <td className="p-4 text-center">$225/year</td>
                                            </tr>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <td className="p-4 font-medium">Texas Storage</td>
                                                <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                                                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="p-4 font-medium">Free Webinar Education</td>
                                                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                                                <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="p-4 font-medium">Best For</td>
                                                <td className="p-4 text-center text-sm">High-net-worth investors wanting premium service</td>
                                                <td className="p-4 text-center text-sm">Budget-conscious investors under $50k</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Deep Dive */}
                            <section id="fees" className="scroll-mt-32">
                                <h2>Fee Structure Comparison</h2>
                                <p>
                                    Both companies use a flat-fee structure rather than percentage-based fees—which is good news for larger accounts. Here&apos;s how they break down:
                                </p>

                                <div className="not-prose grid md:grid-cols-2 gap-6 my-6">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <Trophy className="w-5 h-5 text-secondary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-primary">Augusta Fees</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li>• Setup: $50 (one-time)</li>
                                            <li>• Annual Admin: $80</li>
                                            <li>• Storage: $100/year</li>
                                            <li>• <strong>Total Year 1: $230</strong></li>
                                            <li>• <strong>Annual after: $180</strong></li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                <Wallet className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-bold text-lg text-primary">Noble Gold Fees</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li>• Setup: $80 (one-time)</li>
                                            <li>• Annual Admin: $80</li>
                                            <li>• Storage: $150/year</li>
                                            <li>• <strong>Total Year 1: $310</strong></li>
                                            <li>• <strong>Annual after: $230</strong></li>
                                        </ul>
                                    </div>
                                </div>

                                <p>
                                    <strong>The math:</strong> Augusta is slightly cheaper on annual fees ($50/year less). But for someone with $25,000 to invest, Noble Gold is the only option—Augusta won&apos;t take you.
                                </p>
                            </section>

                            {/* Sign-Up Process */}
                            <section id="signup" className="scroll-mt-32">
                                <h2>Sign-Up Experience</h2>
                                <div className="not-prose grid md:grid-cols-2 gap-6 my-6">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-2 mb-4">
                                            <GraduationCap className="w-6 h-6 text-secondary" />
                                            <h3 className="font-bold text-primary">Augusta: Education-First</h3>
                                        </div>
                                        <p className="text-gray-700 text-sm mb-4">
                                            Augusta requires you to attend a 15-minute webinar with their economist before you can buy. Some find this annoying; others appreciate the education.
                                        </p>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            <li>✓ Harvard-trained economist explains gold</li>
                                            <li>✓ No pressure to buy immediately</li>
                                            <li>✓ Confirmation call before purchase</li>
                                            <li>✗ Takes longer to get started</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Wallet className="w-6 h-6 text-blue-600" />
                                            <h3 className="font-bold text-primary">Noble Gold: Straightforward</h3>
                                        </div>
                                        <p className="text-gray-700 text-sm mb-4">
                                            Noble Gold takes a more traditional approach. You can open an account and start buying without required education sessions.
                                        </p>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            <li>✓ Faster account setup</li>
                                            <li>✓ Dedicated account rep</li>
                                            <li>✓ Texas storage option</li>
                                            <li>✗ Less structured education</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Storage Options */}
                            <section id="storage" className="scroll-mt-32">
                                <h2>Storage Options</h2>
                                <p>
                                    Both companies use IRS-approved depositories, but Noble Gold offers something Augusta doesn&apos;t: <strong>Texas-based storage</strong>.
                                </p>
                                <div className="not-prose bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Building2 className="w-6 h-6 text-blue-600" />
                                        <h4 className="font-bold text-blue-800">Noble Gold&apos;s Texas Advantage</h4>
                                    </div>
                                    <p className="text-blue-800 text-sm">
                                        Noble Gold partners with the Texas Precious Metals Depository—one of the only state-run depositories in the US. Some investors prefer this for perceived extra security and state-level oversight. Augusta uses Delaware Depository (also excellent, but privately run).
                                    </p>
                                </div>
                            </section>

                            {/* Final Verdict */}
                            <section id="verdict" className="scroll-mt-32">
                                <h2>Who Should Choose Which?</h2>

                                <div className="not-prose grid md:grid-cols-2 gap-6 my-6">
                                    <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                                        <h3 className="font-bold text-primary text-lg mb-3">Choose Augusta If:</h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You have $50,000+ to invest</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You want the best education experience</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Zero complaints matters to you</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You value slightly lower annual fees</span>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <Button variant="gold" size="sm" asChild>
                                                <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">
                                                    Get Augusta Free Kit <ArrowRight className="ml-2 w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                        <h3 className="font-bold text-primary text-lg mb-3">Choose Noble Gold If:</h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You have $20,000-$50,000 to invest</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You want Texas-based storage</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You prefer a faster signup process</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>You don&apos;t need extensive education</span>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">
                                                    Get Noble Gold Free Kit <ArrowRight className="ml-2 w-4 h-4" />
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
                                    Both Augusta and Noble Gold are A+ rated, reputable companies. The decision really comes down to your budget:
                                </p>
                                <ul>
                                    <li><strong>$50k+?</strong> Augusta is the gold standard for premium service</li>
                                    <li><strong>Under $50k?</strong> Noble Gold is your best bet—same quality, accessible minimums</li>
                                </ul>
                                <p>
                                    There&apos;s no wrong choice between these two. Both will take care of your retirement metals properly.
                                </p>
                            </section>

                            {/* Related Links */}
                            <div className="not-prose my-8 p-6 bg-gray-100 rounded-xl">
                                <h4 className="font-bold text-primary mb-4">Related Reviews</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/reviews/augusta-precious-metals" className="text-sm px-4 py-2 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        Augusta Full Review →
                                    </Link>
                                    <Link href="/reviews/noble-gold" className="text-sm px-4 py-2 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        Noble Gold Full Review →
                                    </Link>
                                    <Link href="/compare/noble-gold-vs-birch-gold" className="text-sm px-4 py-2 bg-white rounded-lg border hover:border-secondary transition-colors">
                                        Noble Gold vs Birch Gold →
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
