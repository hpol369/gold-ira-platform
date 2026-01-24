import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { KeyTakeaways } from "@/components/learn/KeyTakeaways";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Metadata } from "next";
import { AlertTriangle, ShieldX, Scale, Gavel, ArrowRight, XCircle, Home } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Home Storage Gold IRA: Why It's a Terrible Idea (2026 Warning)",
    description: "Thinking about a 'home storage Gold IRA'? Don't. Learn why these schemes violate IRS rules, trigger massive penalties, and put your retirement at risk.",
};

const takeaways = [
    "Home storage Gold IRAs are NOT approved by the IRS—despite what salespeople claim.",
    "Storing IRA gold at home is treated as a taxable distribution, triggering immediate taxes.",
    "You'll also owe a 10% early withdrawal penalty if you're under 59½.",
    "The 'LLC loophole' has been repeatedly shot down by the IRS and Tax Court.",
    "Companies promoting home storage are often the same ones selling overpriced coins.",
    "If you want gold at home, buy it outside your IRA—don't try to game the system."
];

const tocItems = [
    { id: "what-is-it", label: "What Is Home Storage IRA?" },
    { id: "why-illegal", label: "Why It's Not Legal" },
    { id: "court-cases", label: "Court Cases" },
    { id: "penalties", label: "The Penalties" },
    { id: "llc-loophole", label: "The LLC Loophole Myth" },
    { id: "what-to-do", label: "What You Should Do Instead" },
    { id: "faq", label: "FAQs" }
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Home Storage Gold IRA: Why It's a Terrible Idea",
            "description": "Thinking about a 'home storage Gold IRA'? Don't. Learn why these schemes violate IRS rules, trigger massive penalties, and put your retirement at risk.",
            "image": "https://richdadretirement.com/images/home-storage-gold-ira-warning.jpg",
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
                    "name": "Can I legally store my Gold IRA at home?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. The IRS requires Gold IRA assets to be held by an approved custodian and stored at an IRS-approved depository. Storing IRA gold at home—even in a safe—is treated as taking a distribution. You'll owe taxes on the full amount plus a 10% penalty if under 59½."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the LLC loophole for Gold IRAs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Some companies claim you can set up an LLC owned by your IRA, then store gold at home as the 'LLC's' property. This scheme has been repeatedly rejected by the IRS and Tax Court (see McNulty v. Commissioner). The IRS treats this as a prohibited transaction, disqualifying your entire IRA."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the penalties for home storage of IRA gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If the IRS determines you stored IRA gold at home, your entire IRA is treated as distributed. You'll owe: (1) Income tax on the full value, (2) 10% early withdrawal penalty if under 59½, and (3) Potential additional penalties for prohibited transactions. On a $100,000 IRA, you could lose $40,000+ to taxes and penalties."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do companies promote home storage Gold IRAs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Because they make money selling you gold—often at inflated prices. The 'home storage' pitch appeals to people who distrust institutions. But the companies promoting these schemes aren't the ones who'll pay your tax bill when the IRS comes knocking."
                    }
                }
            ]
        }
    ]
};

export default function HomeStorageGoldIraPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-red-900 text-white py-16 border-b border-red-800">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 text-red-300 font-bold tracking-widest uppercase text-xs mb-4">
                            <AlertTriangle className="w-4 h-4" />
                            Important Warning
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Home Storage Gold IRA: Don&apos;t Do It
                        </h1>
                        <p className="text-xl text-red-100 leading-relaxed">
                            Some companies will tell you that you can keep your IRA gold at home. They&apos;re wrong—and following their advice could cost you your entire retirement savings.
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
                            I&apos;m going to be blunt: &quot;home storage Gold IRA&quot; is one of the biggest scams in the precious metals industry. And the people pushing it are counting on you not knowing the rules.
                        </p>

                        <p>
                            Every week I hear from someone who fell for this pitch. They set up their &quot;home storage IRA,&quot; bought some gold, stuck it in their safe—and then got a letter from the IRS. Now they owe tens of thousands in taxes and penalties. Their retirement is gutted. And the company that sold them on the idea? Nowhere to be found.
                        </p>

                        <p>
                            Let me explain exactly why this happens, and what you should do instead.
                        </p>

                        {/* What Is It */}
                        <section id="what-is-it" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <Home className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">What Is a &quot;Home Storage Gold IRA&quot;?</h2>
                            </div>
                            <p>
                                The pitch goes something like this: <em>&quot;Why trust some bank with YOUR gold? With our special IRA structure, you can keep your gold at home where you can see it, touch it, and protect it yourself.&quot;</em>
                            </p>
                            <p>
                                Sounds appealing, right? Direct access to your gold. No storage fees. Complete control.
                            </p>
                            <p>
                                There&apos;s just one problem: <strong>it&apos;s not legal.</strong>
                            </p>
                        </section>

                        {/* Why Illegal */}
                        <section id="why-illegal" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">Why Home Storage Isn&apos;t Legal</h2>
                            </div>
                            <p>
                                The IRS rules are crystal clear. Under IRC Section 408(m), precious metals in an IRA must be held by a bank or approved non-bank trustee. The metals must be stored at an IRS-approved depository.
                            </p>
                            <p>
                                Your house is not an approved depository. Your gun safe is not an approved depository. The floor safe you bolted to your basement is not an approved depository.
                            </p>
                            <p>
                                When you take physical possession of IRA assets, the IRS treats it as a <strong>distribution</strong>. You&apos;ve effectively withdrawn the money from your retirement account. And that triggers taxes.
                            </p>

                            <Callout type="warning" title="This Is Not a Gray Area">
                                Some promoters will tell you the IRS hasn&apos;t &quot;explicitly banned&quot; home storage. This is technically true in the same way the IRS hasn&apos;t explicitly banned keeping your IRA in a shoebox. The rules require approved custodians and depositories. Your home meets neither requirement.
                            </Callout>
                        </section>

                        {/* Court Cases */}
                        <section id="court-cases" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Gavel className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">The Court Cases That Settled This</h2>
                            </div>
                            <p>
                                If there was any doubt, the Tax Court has made it abundantly clear that home storage doesn&apos;t work:
                            </p>
                            <ul>
                                <li><strong>McNulty v. Commissioner (2021):</strong> A couple set up an LLC owned by their IRA and stored gold coins at home. The Tax Court ruled the entire arrangement was a prohibited transaction. Their IRA was disqualified, and they owed taxes on the full amount.</li>
                                <li><strong>Other cases:</strong> Multiple similar cases have reached the same conclusion. The IRS wins every time.</li>
                            </ul>
                            <p>
                                The pattern is always the same: investor sets up home storage, IRS audits, Tax Court rules against investor, investor loses a massive chunk of their retirement to taxes and penalties.
                            </p>
                        </section>

                        {/* Penalties */}
                        <section id="penalties" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">What You&apos;ll Actually Pay</h2>
                            </div>
                            <p>
                                Let&apos;s say you have $100,000 in a Gold IRA and you move it to home storage. Here&apos;s what happens when the IRS catches up:
                            </p>
                            <div className="not-prose my-8 p-6 bg-red-500/10 rounded-xl border border-red-500/20">
                                <p className="font-bold text-red-400 mb-4">Example: $100,000 Home Storage IRA</p>
                                <ul className="space-y-2 text-red-300">
                                    <li><strong>Federal Income Tax (25% bracket):</strong> $25,000</li>
                                    <li><strong>Early Withdrawal Penalty (if under 59½):</strong> $10,000</li>
                                    <li><strong>State Income Tax (varies):</strong> $5,000+</li>
                                    <li className="pt-2 border-t border-red-500/20"><strong>Total Loss:</strong> $40,000+ (possibly more)</li>
                                </ul>
                                <p className="mt-4 text-sm text-red-400">
                                    That&apos;s 40% of your retirement—gone. And you still have to pay taxes on future withdrawals of what&apos;s left.
                                </p>
                            </div>
                        </section>

                        {/* LLC Loophole */}
                        <section id="llc-loophole" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-slate-800/50 rounded-lg text-slate-400">
                                    <ShieldX className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white m-0">The &quot;LLC Loophole&quot; Myth</h2>
                            </div>
                            <p>
                                Here&apos;s how the scam usually works: A company tells you to set up an LLC. Your self-directed IRA owns the LLC. The LLC then &quot;buys&quot; gold and stores it at your home.
                            </p>
                            <p>
                                The theory is that technically <em>you</em> don&apos;t possess the gold—the LLC does. And since your IRA owns the LLC, it&apos;s still in your retirement account.
                            </p>
                            <p>
                                <strong>The IRS doesn&apos;t buy it.</strong> Neither do the courts. This is a prohibited transaction, and it disqualifies your entire IRA.
                            </p>
                            <p>
                                The companies selling this scheme know it doesn&apos;t work. They make their money on the gold sale and setup fees. When the IRS comes after you years later, they&apos;re long gone.
                            </p>
                        </section>

                        {/* Mid-Article CTA */}
                        <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white">Want Gold? Do It Right.</h3>
                                <p className="mb-6 text-gray-200">Find a legitimate Gold IRA company that follows the rules and protects your retirement.</p>
                                <Button variant="gold" size="lg" asChild>
                                    <Link href="/quiz">Find a Legitimate Company <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* What to Do Instead */}
                        <section id="what-to-do" className="scroll-mt-32">
                            <h2>What You Should Do Instead</h2>
                            <p>
                                Look, I get it. The appeal of home storage is real. You want to hold your gold. You don&apos;t trust banks or custodians. You like the idea of having your wealth physically accessible.
                            </p>
                            <p>
                                Here&apos;s the solution: <strong>do both.</strong>
                            </p>
                            <ul>
                                <li><strong>Gold IRA (stored properly):</strong> Keep the bulk of your precious metals in a legitimate Gold IRA, stored at an approved depository like Delaware Depository or Brink&apos;s. Get the tax benefits. Follow the rules.</li>
                                <li><strong>Physical gold (outside IRA):</strong> Buy some gold coins or bars with after-tax money and keep them at home. No IRA rules apply. Store them however you want.</li>
                            </ul>
                            <p>
                                This gives you the best of both worlds: tax-advantaged retirement savings AND physical gold you can access anytime. No legal risk. No IRS audits. No losing 40% of your retirement to penalties.
                            </p>
                            <p>
                                Read our full comparison: <Link href="/compare/gold-ira-vs-physical-gold">Gold IRA vs. Physical Gold</Link>
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2>Home Storage Gold IRA FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                                    <details key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                                            <h4 className="text-lg font-bold">{faq.name}</h4>
                                            <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-secondary sm:p-3">
                                                <AlertTriangle className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
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
                    <AugustaCTA variant="footer" />
                </Container>
            </section>
        </main>
    );
}
