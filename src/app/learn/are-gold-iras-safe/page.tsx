import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { ShieldCheck, Lock, AlertTriangle, Scale, Building, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Are Gold IRAs Safe? Legitimacy, Risks & Protections (2026)",
    description: "Are Gold IRAs safe investments? We analyze the legitimacy, regulatory protections, and real risks involved in holding physical precious metals in an IRA.",
};

const takeaways = [
    "Gold IRAs are 100% legal and IRS-approved under the Taxpayer Relief Act of 1997.",
    "Your assets are physical metals, not paper promises, eliminating counterparty risk.",
    "Metals must be stored in insured, IRS-approved non-bank depositories.",
    "The biggest risk is not the IRA itself, but choosing a dishonest dealer.",
    "You have full title ownership of the metals; they are not on the custodian's balance sheet.",
    "Gold has zero default risk—it cannot go bankrupt like a company can."
];

const tocItems = [
    { id: "legitimacy", label: "Is It Legitimate?" },
    { id: "counterparty-risk", label: "Counterparty Risk" },
    { id: "custodian-safety", label: "Custodian Safety" },
    { id: "depository-safety", label: "Depository Security" },
    { id: "scams", label: "Scams to Watch" },
    { id: "regulatory-protection", label: "Regulatory Protections" },
    { id: "verdict", label: "Safety Verdict" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Are Gold IRAs Safe? Legitimacy & Risks Explained",
            "description": "Are Gold IRAs safe investments? We analyze the legitimacy, regulatory protections, and real risks involved in holding physical precious metals in an IRA.",
            "image": "https://richdadretirement.com/images/are-gold-iras-safe-cover.jpg",
            "author": {
                "@type": "Organization",
                "name": "Rich Dad Retirement"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://richdadretirement.com/logo.png"
                }
            },
            "datePublished": "2026-01-17",
            "dateModified": "2026-01-17"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What happens if my Gold IRA custodian goes bankrupt?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your assets are safe. IRA assets are held in a trust and are not considered assets of the custodian. Creditors cannot seize them. You would simply transfer your holding to a new custodian."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is my gold insured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. IRS regulations require that physical metals in an IRA be held by an approved depository (like Delaware Depository or Brink's). These facilities maintain comprehensive insurance policies (often Lloyd's of London) that cover theft, damage, and loss."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can the government confiscate my gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While the US government did confiscate gold in 1933 under Executive Order 6102, the legal landscape is vastly different today. Most experts consider a repeat highly unlikely. Furthermore, certain modern coins (like American Eagles) are legal tender, complicating any potential confiscation."
                    }
                }
            ]
        }
    ]
};

export default function AreGoldIrasSafePage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Safety Analysis
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Are Gold IRAs Safe?
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Separating fact from fear. We investigate the legal structure, insurance protections, and real risks of holding gold in a retirement account.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Content */}
                    <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                        <KeyTakeaways items={takeaways} />

                        <p className="lead">
                            Let&apos;s cut through the noise. People ask &quot;are Gold IRAs safe?&quot; but what they&apos;re really asking is one of three things: Is this legal? Will my gold actually be there? Or: am I going to get scammed?
                        </p>
                        <p>
                            All fair questions. Let&apos;s answer each one directly.
                        </p>

                        {/* Legitimacy */}
                        <section id="legitimacy" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Is It Even Legal?</h2>
                            </div>
                            <p>
                                100% yes. Congress specifically authorized precious metals in IRAs back in 1997 with the Taxpayer Relief Act. This isn&apos;t some loophole or gray area. It&apos;s a legitimate, IRS-recognized retirement strategy that millions of Americans use.
                            </p>
                        </section>

                        {/* Counterparty Risk */}
                        <section id="counterparty-risk" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Building className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Why Gold Can&apos;t Go to Zero</h2>
                            </div>
                            <p>
                                Here&apos;s something most people don&apos;t think about: every stock you own is a claim on a company. If that company goes bankrupt, your stock is worth zero. Happened to Enron. Happened to Lehman Brothers. Could happen to any company. Gold doesn&apos;t work that way. It&apos;s not a claim on anything. It just <em>is</em>. There&apos;s no CEO who can run it into the ground, no board making bad decisions. Gold has been valuable for 5,000 years and it&apos;ll be valuable 5,000 years from now.
                            </p>
                        </section>

                        {/* Custodian Safety */}
                        <section id="custodian-safety" className="scroll-mt-32">
                            <h2>Safety of Funds at Custodians</h2>
                            <p>
                                Your IRA is managed by a licensed self-directed custodian. By law, they must keep client assets separate from their own business funds.
                            </p>
                            <Callout type="info" title="Asset Segregation">
                                "Client assets are held in trust." This means even if the custodian declares bankruptcy, your gold IRA remains yours and untouchable by their creditors.
                            </Callout>
                        </section>

                        {/* Depository Security */}
                        <section id="depository-safety" className="scroll-mt-32">
                            <h2>Vault Security & Insurance</h2>
                            <p>
                                Your metals are stored in high-security non-bank depositories like the Delaware Depository. These facilities feature:
                            </p>
                            <ul>
                                <li>Class 3 vaults (highest rating)</li>
                                <li>24/7 armed security</li>
                                <li>$1 Billion+ in "All-Risk" insurance coverage</li>
                                <li>Regular third-party audits</li>
                            </ul>
                        </section>

                        {/* Scams */}
                        <section id="scams" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">The Real Danger: Scams</h2>
                            </div>
                            <p>
                                The Gold IRA structure is safe. The danger lies in <strong>bad dealers</strong>.
                            </p>
                            <ul>
                                <li><strong>Home Storage:</strong> Illegal and risky.</li>
                                <li><strong>Overpriced Coins:</strong> Selling "rare" coins at 50% markups.</li>
                                <li><strong>Unallocated Storage:</strong> Make sure your gold is segregated or specifically allocated.</li>
                            </ul>
                            <p>
                                See our guide on <Link href="/learn/gold-ira-scams">Gold IRA Scams</Link> to stay protected.
                            </p>
                        </section>

                        {/* Verdict */}
                        <section id="verdict" className="scroll-mt-32">
                            <h2>The Verdict: Safe, If Done Right</h2>
                            <p>
                                A Gold IRA is arguably safer than a traditional IRA because the underlying asset (gold) carries no counterparty risk. As long as you work with a reputable custodian and dealer, your retirement is more secure in physical metal than in paper assets.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Work with Vetted Companies Only</h3>
                                <p className="mb-6 text-gray-200">Avoid the scams. We've vetted the top Gold IRA companies for safety, insurance, and reputation.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find a Safe Company <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Safety FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                                <ShieldCheck className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-slate-400">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <AuthorBox />

                    </article>
                </div>
            </Container>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" trackSource="learn-are-gold-iras-safe" />
                </Container>
            </section>
        </main>
    );
}
