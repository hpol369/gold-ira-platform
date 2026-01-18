import { Container } from "@/components/ui/Container";
import { ReviewSidebar } from "@/components/reviews/ReviewSidebar";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { AlertTriangle, PhoneOff, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS } from "@/config/affiliates";

export const metadata: Metadata = {
    title: "US Money Reserve Complaints: Sales Tactics Exposed (2026)",
    description: "Why does US Money Reserve keep calling? We investigate the high-pressure sales complaints and 'bait and switch' allegations.",
};

const companyData = {
    companyName: "US Money Reserve",
    rating: 3.8,
    minInvestment: "$25,000",
    fees: "Varies",
    bbbRating: "A+",
    bestFor: "Collectors",
    visitUrl: "https://usmoneyreserve.com",
    pros: ["Large inventory", "Former Mint Director leadership"],
    cons: ["High pressure sales", "Numismatic markups"]
};

const schema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    "headline": "US Money Reserve Complaints Investigation",
    "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18"
};

const tocItems = [
    { id: "sales-tactics", label: "Aggressive Sales Tactics" },
    { id: "bait-switch", label: "The 'Bait & Switch'" },
    { id: "legit", label: "Is It Still Legit?" },
    { id: "stop-calls", label: "How to Stop the Calls" },
    { id: "alternatives", label: "Better Alternatives" }
];

export default function UsMoneyReserveComplaintsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            <header className="bg-primary text-white py-16 relative overflow-hidden">
                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30 text-sm font-semibold text-red-200 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Consumer Warning
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            US Money Reserve Complaints: What You Should Know
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                            Requested a free guide and now getting non-stop calls? You&apos;re not alone. Here&apos;s what&apos;s happening and how to handle it.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                            <section id="intro">
                                <p className="lead">
                                    If you&apos;ve ever downloaded a free gold guide from US Money Reserve, you probably know what comes next: phone calls. Lots of them. Sometimes multiple times a day. This is the number one complaint we see about this company.
                                </p>
                                <p>
                                    Let me be clear: US Money Reserve isn&apos;t a scam. They&apos;re a legitimate company with an A+ BBB rating. But their sales tactics are aggressive enough that many people end up frustrated. Here&apos;s what you need to know.
                                </p>
                            </section>

                            <section id="sales-tactics" className="scroll-mt-32">
                                <h2>The Aggressive Sales Playbook</h2>
                                <p>
                                    US Money Reserve spends millions on TV advertising featuring former US Mint Director Philip Diehl. Their business model depends on converting those ad leads into sales. That creates pressure on their sales team.
                                </p>
                                <p>
                                    Here&apos;s what customers commonly report:
                                </p>
                                <ul>
                                    <li><strong>Persistent calling:</strong> Multiple calls per day, sometimes for weeks after requesting information</li>
                                    <li><strong>Urgency tactics:</strong> &quot;This price is only good for today&quot; or &quot;We only have a few of these left&quot;</li>
                                    <li><strong>Fear-based selling:</strong> Warnings about economic collapse, dollar devaluation, or government confiscation</li>
                                    <li><strong>Upselling to &quot;exclusive&quot; coins:</strong> Pushing expensive numismatic coins instead of standard bullion</li>
                                </ul>

                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 flex gap-4 not-prose my-6">
                                    <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-800">Red Flag: &quot;Limited Edition&quot; Coins</h4>
                                        <p className="text-amber-700 text-sm">
                                            If a sales rep pushes &quot;limited edition,&quot; &quot;exclusive,&quot; or &quot;proof&quot; coins, be very cautious. These often carry premiums of 30-50% above spot price. For a retirement IRA, you want standard bullion—not collectibles.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section id="bait-switch" className="scroll-mt-32">
                                <h2>The &quot;Bait and Switch&quot; Pattern</h2>
                                <p>
                                    This is a common complaint pattern we found in BBB reviews and online forums:
                                </p>
                                <ol>
                                    <li>Customer sees ad for free gold coin or heavily discounted gold</li>
                                    <li>Customer calls to claim the offer</li>
                                    <li>Sales rep says that item is &quot;sold out&quot; or &quot;not available in your area&quot;</li>
                                    <li>Sales rep offers a &quot;better&quot; alternative—usually a higher-priced numismatic coin</li>
                                </ol>
                                <p>
                                    Is this technically illegal? That&apos;s a gray area. But it&apos;s definitely a frustrating experience for customers who feel misled. The BBB has received numerous complaints about this pattern, though US Money Reserve typically responds and resolves individual cases.
                                </p>
                            </section>

                            <section id="legit" className="scroll-mt-32">
                                <h2>But Are They Still Legitimate?</h2>
                                <p>
                                    Yes—with caveats. US Money Reserve is a real company that will deliver real gold. They haven&apos;t been shut down by regulators. They maintain an A+ BBB rating by responding to complaints.
                                </p>
                                <p>
                                    The issue isn&apos;t fraud—it&apos;s value. When you buy numismatic coins at 40% over spot, you&apos;re paying for the company&apos;s massive advertising budget. That&apos;s money that could have bought you more actual gold.
                                </p>
                                <p>
                                    <strong>Bottom line:</strong> If you can navigate the sales pressure and stick to standard bullion only, US Money Reserve can work. But most people will have a less stressful experience elsewhere.
                                </p>
                            </section>

                            <section id="stop-calls" className="scroll-mt-32">
                                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 not-prose">
                                    <h3 className="flex items-center gap-2 font-bold text-gray-800 text-xl mb-4">
                                        <PhoneOff className="w-5 h-5" /> How to Stop the Calls
                                    </h3>
                                    <p className="text-gray-700 mb-4">If you&apos;re getting unwanted calls from US Money Reserve, here&apos;s what to do:</p>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li><strong>Ask to be removed:</strong> Tell the caller directly, &quot;Please remove me from your call list.&quot; They&apos;re legally required to comply.</li>
                                        <li><strong>Send an email:</strong> Write to their customer service requesting removal in writing. Keep a copy.</li>
                                        <li><strong>Register with Do Not Call:</strong> Add your number to the National Do Not Call Registry at <a href="https://www.donotcall.gov" className="text-secondary underline" target="_blank" rel="noopener noreferrer">donotcall.gov</a></li>
                                        <li><strong>File a BBB complaint:</strong> If calls continue after you&apos;ve asked to stop, file a complaint. Companies care about their BBB rating.</li>
                                    </ol>
                                </div>
                            </section>

                            <section id="alternatives" className="scroll-mt-32">
                                <h2>Companies With Less Aggressive Sales</h2>
                                <p>
                                    If the US Money Reserve experience has turned you off, here are alternatives known for low-pressure sales:
                                </p>
                                <ul>
                                    <li><strong><Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link>:</strong> Education-first approach, no hard sells. Zero BBB complaints. Higher minimum ($50k).</li>
                                    <li><strong><Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link>:</strong> Strong customer service reputation. $25k minimum.</li>
                                    <li><strong><Link href="/reviews/birch-gold" className="text-secondary hover:underline">Birch Gold Group</Link>:</strong> Lower minimum ($10k), straightforward process.</li>
                                </ul>
                                <div className="not-prose mt-6">
                                    <Button variant="gold" asChild>
                                        <Link href="/reviews">
                                            Compare All Gold IRA Companies
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </section>
                        </article>
                    </div>
                    <aside className="w-80 flex-shrink-0 hidden lg:block">
                        <ReviewSidebar {...companyData} />
                        <div className="mt-8">
                            <TableOfContents items={tocItems} />
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}
