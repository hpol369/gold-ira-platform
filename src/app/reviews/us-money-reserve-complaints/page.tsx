import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VerdictBox } from "@/components/reviews/VerdictBox";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { StickyMobileCTA } from "@/components/cta/StickyMobileCTA";
import { ArrowRight, AlertTriangle, PhoneOff, ShieldAlert, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "US Money Reserve Complaints: Sales Tactics Exposed (2026)",
    description: "Why does US Money Reserve keep calling? We investigate the high-pressure sales complaints, 'bait and switch' allegations, and how to protect yourself.",
};

const schema = {
    "@context": "https://schema.org/",
    "@graph": [
        {
            "@type": "Article",
            "headline": "US Money Reserve Complaints Investigation",
            "description": "Investigation into US Money Reserve sales tactics, complaints, and customer experiences.",
            "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-19"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is US Money Reserve a scam?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, US Money Reserve is a legitimate company with an A+ BBB rating. However, they have aggressive sales tactics and high-pressure phone calls that frustrate many customers. The main complaints are about persistent calling and pushing expensive numismatic coins."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I stop US Money Reserve from calling me?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ask directly to be removed from their call list, send a written email request, register with the National Do Not Call Registry at donotcall.gov, or file a BBB complaint if calls continue after you've requested removal."
                    }
                }
            ]
        }
    ]
};

export default function UsMoneyReserveComplaintsPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-500/30 text-sm font-semibold text-red-200 mb-6 flex items-center justify-center gap-2 w-fit mx-auto">
                        <AlertTriangle className="w-4 h-4" /> Consumer Warning
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        US Money Reserve Complaints: What You Should Know
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Requested a free guide and now getting non-stop calls? You&apos;re not alone. Here&apos;s what&apos;s happening and how to handle it.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0 hidden lg:block relative">
                        <StickyMasterSidebar />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-secondary max-w-none">

                        <p className="lead">
                            If you&apos;ve ever downloaded a free gold guide from US Money Reserve, you probably know what comes next: phone calls. Lots of them. Sometimes multiple times a day. This is the number one complaint we see about this company.
                        </p>

                        {/* Quick Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <VerdictBox
                                companyName="US Money Reserve"
                                rating={3.5}
                                isRecommended={false}
                                bottomLine="US Money Reserve is legitimate—not a scam. They have an A+ BBB rating and deliver real gold. But their aggressive sales tactics, persistent phone calls, and tendency to push expensive numismatic coins make them a frustrating experience for most people. There are better options for Gold IRAs."
                                ctaUrl="/reviews"
                                ctaText="See Better Alternatives"
                            />
                        </section>

                        {/* Sales Tactics */}
                        <section id="sales-tactics" className="scroll-mt-32">
                            <h2>The Aggressive Sales Playbook</h2>
                            <p>
                                US Money Reserve spends millions on TV advertising featuring former US Mint Director Philip Diehl. Their business model depends on converting those ad leads into sales. That creates pressure on their sales team.
                            </p>
                            <p>
                                Here&apos;s what customers commonly report:
                            </p>

                            <div className="not-prose grid gap-4 my-6">
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Persistent Calling</h4>
                                    <p className="text-slate-300 text-sm">Multiple calls per day, sometimes for weeks after requesting information. Even after asking them to stop.</p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Urgency Tactics</h4>
                                    <p className="text-slate-300 text-sm">&quot;This price is only good for today&quot; or &quot;We only have a few of these left.&quot; Classic pressure tactics.</p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Fear-Based Selling</h4>
                                    <p className="text-slate-300 text-sm">Warnings about economic collapse, dollar devaluation, or government confiscation to create urgency.</p>
                                </div>
                                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Numismatic Upselling</h4>
                                    <p className="text-slate-300 text-sm">Pushing expensive &quot;exclusive&quot; or &quot;limited edition&quot; coins instead of standard bullion.</p>
                                </div>
                            </div>

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

                        {/* Bait and Switch */}
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
                                Is this technically illegal? That&apos;s a gray area. But it&apos;s definitely a frustrating experience for customers who feel misled. The BBB has received numerous complaints about this pattern.
                            </p>
                        </section>

                        {/* Legit? */}
                        <section id="legit" className="scroll-mt-32">
                            <h2>But Are They Still Legitimate?</h2>
                            <p>
                                <strong>Yes—with caveats.</strong> US Money Reserve is a real company that will deliver real gold. They haven&apos;t been shut down by regulators. They maintain an A+ BBB rating by responding to complaints.
                            </p>
                            <p>
                                The issue isn&apos;t fraud—it&apos;s value. When you buy numismatic coins at 40% over spot, you&apos;re paying for the company&apos;s massive advertising budget. That&apos;s money that could have bought you more actual gold.
                            </p>
                            <p>
                                <strong>Bottom line:</strong> If you can navigate the sales pressure and stick to standard bullion only, US Money Reserve can work. But most people will have a less stressful experience elsewhere.
                            </p>
                        </section>

                        {/* How to Stop Calls */}
                        <section id="stop-calls" className="scroll-mt-32">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose">
                                <h3 className="flex items-center gap-2 font-bold text-white text-xl mb-4">
                                    <PhoneOff className="w-5 h-5" /> How to Stop the Calls
                                </h3>
                                <p className="text-slate-300 mb-4">If you&apos;re getting unwanted calls from US Money Reserve, here&apos;s what to do:</p>
                                <div className="space-y-3">
                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-300"><strong className="text-white">Ask to be removed:</strong> Tell the caller directly, &quot;Please remove me from your call list.&quot; They&apos;re legally required to comply.</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-300"><strong className="text-white">Send an email:</strong> Write to their customer service requesting removal in writing. Keep a copy.</p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-300"><strong className="text-white">Register with Do Not Call:</strong> Add your number to the National Do Not Call Registry at <a href="https://www.donotcall.gov" className="text-secondary underline" target="_blank" rel="noopener noreferrer">donotcall.gov</a></p>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-300"><strong className="text-white">File a BBB complaint:</strong> If calls continue after you&apos;ve asked to stop, file a complaint. Companies care about their BBB rating.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Alternatives */}
                        <section id="alternatives" className="scroll-mt-32">
                            <h2>Companies With Less Aggressive Sales</h2>
                            <p>
                                If the US Money Reserve experience has turned you off, here are alternatives known for low-pressure sales:
                            </p>
                            <ul>
                                <li><strong><Link href="/reviews/augusta-precious-metals" className="text-secondary hover:underline">Augusta Precious Metals</Link>:</strong> Education-first approach, no hard sells. Zero BBB complaints. Higher minimum ($50k).</li>
                                <li><strong><Link href="/reviews/goldco" className="text-secondary hover:underline">Goldco</Link>:</strong> Strong customer service reputation. $25k minimum.</li>
                                <li><strong><Link href="/reviews/noble-gold" className="text-secondary hover:underline">Noble Gold</Link>:</strong> Laid-back sales approach, $20k minimum, Texas storage option.</li>
                                <li><strong><Link href="/reviews/birch-gold" className="text-secondary hover:underline">Birch Gold Group</Link>:</strong> Lower minimum ($10k), straightforward process.</li>
                            </ul>
                        </section>

                        {/* CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Want a Better Experience?</h3>
                                <p className="mb-6 text-gray-200">Companies with education-first approach and no high-pressure calls.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/best-gold-ira-companies">
                                        See Top Rated Companies <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
            <StickyMobileCTA companySlug="us-money-reserve" companyName="US Money Reserve" />
        </main>
    );
}
