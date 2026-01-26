import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { Scale, FileText, CheckCircle2, XCircle, ArrowRight, Gavel } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Precious Metals IRA Rules: IRS Regulations You Must Know (2026)",
    description: "Complete guide to IRS rules for Precious Metals IRAs. Learn about purity standards, approved coins, storage requirements, and prohibited transactions.",
};

const takeaways = [
    "Gold must be .9995 fineness (except American Eagles at .9167).",
    "Silver must be .999 fineness.",
    "Metals must be stored in an IRS-approved non-bank depository.",
    "You cannot take personal possession of the metals (no home storage).",
    "Only 24k bullion bars and specific government-minted coins are allowed.",
    "Collectible 'numismatic' coins are generally prohibited or ill-advised."
];

const tocItems = [
    { id: "purity", label: "Purity Standards" },
    { id: "approved-coins", label: "Approved Coins" },
    { id: "storage-rules", label: "Storage Rules" },
    { id: "prohibited", label: "Prohibited Transactions" },
    { id: "distributions", label: "Taking Distributions" },
    { id: "taxes", label: "Tax Rules" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Precious Metals IRA Rules: IRS Regulations Explained",
            "description": "Complete guide to IRS rules for Precious Metals IRAs. Learn about purity standards, approved coins, storage requirements, and prohibited transactions.",
            "image": "https://richdadretirement.com/images/ira-rules-cover.jpg",
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
                    "name": "Can I store my IRA gold at home?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. The IRS strictly prohibits 'home storage' of IRA assets. Doing so is considered a distribution, triggering immediate taxes and potential penalties. All metals must be held by an approved third-party depository."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What coins are approved for an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Common approved coins include American Eagle (Gold, Silver, Platinum), Canadian Maple Leaf, Australian Kangaroo, and Austrian Philharmonic. South African Krugerrands (gold) are NOT allowed due to lower purity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "At what age can I withdraw my gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can begin taking penalty-free distributions at age 59½. You can choose to take the physical metal (shipped to your door) or sell it for cash within the IRA and withdraw the funds."
                    }
                }
            ]
        }
    ]
};

export default function PreciousMetalsIraRulesPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-white/5 backdrop-blur-sm py-16 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            IRS Guidelines
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Precious Metals IRA Rules
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            You've worked 30+ years to build your 401k. Before you move any of it to gold, you need to understand the IRS rules—because breaking them means taxes and penalties that could cost you thousands. Here's the straight talk, in plain English.
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
                            Here's the reality: A Gold IRA lets you protect your hard-earned savings from market crashes while keeping your tax advantages. But the IRS has strict rules about what gold you can buy, where it must be stored, and what happens if you break the rules. This isn't complicated—but it's important. Let me walk you through exactly what you need to know.
                        </p>

                        {/* Purity Standards */}
                        <section id="purity" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Fineness (Purity) Requirements</h2>
                            </div>
                            <p>
                                Not all gold qualifies for an IRA. The IRS sets strict purity requirements—and if you buy the wrong coins, you could trigger taxes and penalties. Here are the minimums:
                            </p>
                            <ul>
                                <li><strong>Gold:</strong> .995+ (99.5% pure)</li>
                                <li><strong>Silver:</strong> .999+ (99.9% pure)</li>
                                <li><strong>Platinum:</strong> .9995+ (99.95% pure)</li>
                                <li><strong>Palladium:</strong> .9995+ (99.95% pure)</li>
                            </ul>
                            <Callout type="info" title="The American Eagle Exception">
                                The American Gold Eagle is the ONLY exception to the .995 rule. It is 22-karat (.9167) but is specifically authorized by Congress for IRA inclusion.
                            </Callout>
                        </section>

                        {/* Approved Coins */}
                        <section id="approved-coins" className="scroll-mt-32">
                            <h2>Approved Coins & Bars</h2>
                            <p>
                                Based on the purity rules, these are the most common allowed investments:
                            </p>
                            <ul>
                                <li>American Gold/Silver/Platinum Eagles</li>
                                <li>Canadian Maple Leafs</li>
                                <li>Australian Kangaroos/Nuggets</li>
                                <li>Austrian Philharmonics</li>
                                <li>PAMP Suisse/Credit Suisse Bars (.9999 fine)</li>
                            </ul>
                            <p>
                                <strong>NOT Allowed:</strong> South African Krugerrands, Pre-1933 Gold Coins (unless deemed bullion), Numismatic/Collectible Coins (generally).
                            </p>
                        </section>

                        {/* Storage Rules */}
                        <section id="storage-rules" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Gavel className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Strict Storage Regulations</h2>
                            </div>
                            <p>
                                This is where people get into trouble. <strong>You cannot hold the gold yourself—not in your safe, not in your closet, not buried in the backyard.</strong>
                            </p>
                            <p>
                                The IRS requires your gold to be stored in an approved depository (like Delaware Depository or Brink's). Think of it like this: the tax advantages come with strings attached. Your gold is yours—you own it, you can take physical possession at retirement—but while it's in the IRA, a third party has to hold it.
                            </p>
                            <Callout type="warning" title="Warning: Home Storage">
                                "Home Storage" or "Checkbook IRAs" often claim to use a legal loophole (LLC). The IRS has successfully challenged these in court (e.g., McNulty v. Commissioner), resulting in massive taxes and penalties for the investor.
                            </Callout>
                        </section>

                        {/* Prohibited Transactions */}
                        <section id="prohibited" className="scroll-mt-32">
                            <h2>Prohibited Transactions</h2>
                            <p>
                                You cannot deal with "disqualified persons" concerning your IRA assets. This means:
                            </p>
                            <ul>
                                <li>You generally cannot sell gold <i>to</i> your IRA.</li>
                                <li>You cannot buy gold <i>from</i> your IRA personally (without taking a distribution).</li>
                                <li>You cannot use the gold (e.g., wearing jewelry owned by the IRA would be disallowed, though jewelry is generally prohibited anyway).</li>
                            </ul>
                        </section>

                        {/* Distributions */}
                        <section id="distributions" className="scroll-mt-32">
                            <h2>Taking Distributions</h2>
                            <p>
                                <strong>Age 59½ Rule:</strong> You can take penalty-free distributions.
                            </p>
                            <p>
                                <strong>RMDs:</strong> Start at age 73 for Traditional IRAs (Roth IRAs have no RMDs).
                            </p>
                            <p>
                                <strong>In-Kind Distributions:</strong> You can choose to have the physical gold shipped to your home as your distribution. The value of the metal on the day it is shipped is used to calculate taxes.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Don't Want to Navigate the Rules Alone?</h3>
                                <p className="mb-6 text-gray-200">A good Gold IRA company handles all this compliance for you—the paperwork, the storage, the IRS requirements. That's what you're paying them for.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find a Compliance Partner <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Rules & Regs FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                                <FileText className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
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
                    <AugustaCTA variant="footer" trackSource="learn-precious-metals-ira-rules" />
                </Container>
            </section>
        </main>
    );
}
