import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { StickyMasterSidebar } from "@/components/reviews/StickyMasterSidebar";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { US_STATES } from "@/lib/states";
import { STATE_CONTENT } from "@/lib/state-content";
import { Metadata } from "next";
import { MapPin, Building2, AlertTriangle, ShieldCheck, CheckCircle2, Landmark } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AFFILIATE_LINKS } from "@/config/affiliates";

// Generate static params for all states
export async function generateStaticParams() {
    return US_STATES.map((state) => ({
        state: state.slug,
    }));
}

type Props = {
    params: Promise<{ state: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { state } = await params;
    const stateData = US_STATES.find(s => s.slug === state);
    if (!stateData) return {};

    const stateName = stateData.name;
    return {
        title: `Gold IRA ${stateName}: Local Dealers vs Online (2026 Guide)`,
        description: `Thinking about buying gold in ${stateName}? Compare local coin shops vs tax-free Gold IRAs. Learn ${stateName} sales tax rules and home storage risks.`,
    };
}

export default async function StatePage({ params }: Props) {
    const { state } = await params;
    const stateData = US_STATES.find(s => s.slug === state);

    if (!stateData) {
        notFound();
    }

    const stateName = stateData.name;
    const content = STATE_CONTENT[state];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": `Gold IRA ${stateName}: The Complete Local Guide (2026)`,
                "description": `Guide to buying gold and opening a Gold IRA for residents of ${stateName}.`,
                "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
                "datePublished": "2026-01-20",
                "dateModified": "2026-01-20"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Does ${stateName} charge sales tax on gold?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": stateData.taxFriendly
                                ? `${stateName} exempts investment-grade gold and silver bullion from sales tax, making it a favorable state for precious metals purchases.`
                                : `${stateName} does charge sales tax on precious metals purchases. Using a Gold IRA allows you to avoid this tax entirely while gaining tax-deferred growth.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Can I store Gold IRA metals at home in ${stateName}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. IRS rules require Gold IRA metals to be stored in an approved depository. 'Home Storage IRAs' are not compliant and can result in immediate taxes plus a 10% penalty. For personal (non-IRA) gold, home storage is legal but carries insurance and security risks."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen flex flex-col bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />
            <div className="flex-grow">
                {/* Hero */}
                <header className="bg-primary text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-dark/50" />
                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                                <MapPin className="w-4 h-4" />
                                {stateName} Gold Guide
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                                Gold IRA {stateName}: Local Dealers vs. Online
                            </h1>
                            <p className="text-xl text-gray-200">
                                Living in {stateName}? Here&apos;s what you need to know about local sales tax, home storage rules, and why smart investors are using tax-advantaged Gold IRAs.
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
                        <article className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

                            <p className="lead">
                                If you live in <strong>{stateName}</strong>, you have two main options for buying gold: driving to a local coin shop or opening a tax-advantaged Gold IRA online. While it feels safer to &quot;hold it in your hand,&quot; {stateName} residents often pay a premium for that privilege—both in markups and potential taxes.
                            </p>

                            {/* Tax Status Quick Box */}
                            <div className={`not-prose p-6 rounded-xl border mb-8 ${stateData.taxFriendly ? 'bg-green-500/10 border-green-500/20' : 'bg-amber-500/10 border-amber-500/20'}`}>
                                <div className="flex items-center gap-3 mb-2">
                                    {stateData.taxFriendly ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    ) : (
                                        <AlertTriangle className="w-6 h-6 text-amber-400" />
                                    )}
                                    <h3 className={`font-bold text-lg ${stateData.taxFriendly ? 'text-green-400' : 'text-amber-400'}`}>
                                        {stateData.taxFriendly ? `${stateName}: Tax-Friendly for Gold` : `${stateName}: Sales Tax Applies`}
                                    </h3>
                                </div>
                                <p className={`text-sm ${stateData.taxFriendly ? 'text-green-300' : 'text-amber-300'}`}>
                                    {stateData.taxFriendly
                                        ? `${stateName} exempts precious metals bullion from sales tax, making local purchases more affordable. However, you still miss out on IRA tax advantages.`
                                        : `${stateName} charges sales tax on precious metals, making local purchases more expensive. A Gold IRA avoids this tax entirely while providing tax-deferred growth.`
                                    }
                                </p>
                            </div>

                            {/* Section 1: Local Laws */}
                            <section className="mt-12">
                                <h2>1. Gold & Silver Tax Laws in {stateName}</h2>
                                <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 not-prose">
                                    <h3 className="flex items-center gap-2 font-bold text-blue-400 text-xl mb-3">
                                        <Building2 className="w-5 h-5" /> {stateName} Tax Rules
                                    </h3>
                                    <p className="text-blue-300 mb-4">
                                        {content?.taxInfo || `Contact your local tax authority for specific rules regarding precious metals purchases in ${stateName}.`}
                                    </p>
                                    <p className="text-sm text-blue-400 italic">
                                        *Tax laws can change. Consult a tax professional for your specific situation. A Gold IRA avoids state sales tax entirely by purchasing through a custodian.
                                    </p>
                                </div>

                                {/* Depository Note if applicable */}
                                {content?.hasDepository && (
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 not-prose mt-6">
                                        <h3 className="flex items-center gap-2 font-bold text-white text-lg mb-2">
                                            <Landmark className="w-5 h-5" /> {stateName} Depository Options
                                        </h3>
                                        <p className="text-slate-300">
                                            {content.depositoryNote}
                                        </p>
                                    </div>
                                )}
                            </section>

                            {/* Section 2: Home Storage */}
                            <section className="mt-12">
                                <h2>2. The Danger of &quot;Home Storage&quot; in {stateName}</h2>
                                <p>
                                    Many {stateName} residents ask: <em>&quot;Can I buy gold and keep it in my safe at home?&quot;</em>
                                </p>
                                <p>
                                    The answer is yes, you <em>can</em>—but <strong>not with IRA money</strong>. If you try to do a &quot;Home Storage Gold IRA&quot; (sometimes called a Checkbook IRA) without strict compliance, you risk:
                                </p>
                                <ul>
                                    <li><strong>Immediate distribution:</strong> The IRS treats it as a taxable withdrawal</li>
                                    <li><strong>10% early withdrawal penalty</strong> if you&apos;re under 59½</li>
                                    <li><strong>IRS audit disqualification</strong> of your entire IRA</li>
                                    <li><strong>No insurance coverage:</strong> Homeowner&apos;s policies typically cap precious metals at $200-$1,000</li>
                                </ul>

                                <div className="bg-amber-500/10 p-6 rounded-xl border border-amber-500/20 flex gap-4 not-prose my-6">
                                    <AlertTriangle className="w-8 h-8 text-amber-400 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-amber-400 mb-2">Storage Warning for {stateName} Residents</h3>
                                        <p className="text-amber-300 text-sm">
                                            {content?.storageWarning || `Home storage of precious metals in ${stateName} carries risks including theft, natural disasters, and insufficient insurance coverage. Professional depository storage provides better protection.`}
                                        </p>
                                    </div>
                                </div>

                                {content?.specialNote && (
                                    <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20 not-prose my-6">
                                        <h3 className="flex items-center gap-2 font-bold text-green-400 mb-2">
                                            <CheckCircle2 className="w-5 h-5" /> {stateName} Advantage
                                        </h3>
                                        <p className="text-green-300 text-sm">
                                            {content.specialNote}
                                        </p>
                                    </div>
                                )}
                            </section>

                            {/* Section 3: Local vs Online */}
                            <section className="mt-12">
                                <h2>3. Local {stateName} Coin Shops vs. National Gold IRAs</h2>
                                <p>
                                    Should you buy from a dealer in your city or work with a national firm?
                                </p>

                                <div className="not-prose overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                        <thead className="bg-white/5">
                                            <tr>
                                                <th className="p-4 border-b border-white/10 font-bold text-white">Feature</th>
                                                <th className="p-4 border-b border-white/10 font-bold text-white">Local Coin Shop</th>
                                                <th className="p-4 border-b border-white/10 font-bold text-amber-400">National Gold IRA</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Pricing</td>
                                                <td className="p-4 text-slate-300">Higher overhead = Higher premiums</td>
                                                <td className="p-4 bg-green-500/10 font-semibold text-green-400">Volume pricing = Lower premiums</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Sales Tax</td>
                                                <td className="p-4 text-slate-300">{stateData.taxFriendly ? 'Exempt in ' + stateName : 'Taxable in ' + stateName}</td>
                                                <td className="p-4 bg-green-500/10 font-semibold text-green-400">No sales tax (IRA purchase)</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Tax Benefits</td>
                                                <td className="p-4 text-slate-300">None (post-tax money)</td>
                                                <td className="p-4 bg-green-500/10 font-semibold text-green-400">Tax-deferred or tax-free (Roth)</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Selection</td>
                                                <td className="p-4 text-slate-300">Limited to current inventory</td>
                                                <td className="p-4 bg-green-500/10 font-semibold text-green-400">All IRS-approved bullion</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-4 font-medium text-white">Storage</td>
                                                <td className="p-4 text-slate-300">Your responsibility (risky)</td>
                                                <td className="p-4 bg-green-500/10 font-semibold text-green-400">Insured depository included</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-white">Insurance</td>
                                                <td className="p-4 text-slate-300">Limited homeowner&apos;s coverage</td>
                                                <td className="p-4 bg-green-500/10 font-semibold text-green-400">Full Lloyd&apos;s of London coverage</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3>Top-Rated Gold IRA Companies Serving {stateName}</h3>
                                <p>
                                    These nationally-licensed Gold IRA dealers serve {stateName} residents and handle all IRA paperwork, custodian setup, and secure storage:
                                </p>

                                <div className="not-prose grid gap-4 my-6">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-8 h-8 text-amber-400" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg text-white">Augusta Precious Metals</h4>
                                            <p className="text-sm text-slate-400 mb-2">Best for: High-net-worth investors ($50k+) who want education-first approach</p>
                                            <p className="text-xs text-green-400 font-semibold">A+ BBB Rating | Zero Complaints | Serves {stateName}</p>
                                        </div>
                                        <Button variant="gold" asChild>
                                            <a href={AFFILIATE_LINKS.augusta} target="_blank" rel="noopener noreferrer">Get Free Kit</a>
                                        </Button>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg text-white">Goldco</h4>
                                            <p className="text-sm text-slate-400 mb-2">Best for: First-time investors ($25k minimum) with excellent hand-holding</p>
                                            <p className="text-xs text-green-400 font-semibold">A+ BBB Rating | 5,000+ 5-Star Reviews | Serves {stateName}</p>
                                        </div>
                                        <Button variant="outline" asChild>
                                            <a href={AFFILIATE_LINKS.goldco} target="_blank" rel="noopener noreferrer">Get Free Kit</a>
                                        </Button>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-8 h-8 text-amber-400" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg text-white">Noble Gold Investments</h4>
                                            <p className="text-sm text-slate-400 mb-2">Best for: Smaller accounts ($20k) & Texas storage option</p>
                                            <p className="text-xs text-green-400 font-semibold">A+ BBB Rating | Low-Pressure Sales | Serves {stateName}</p>
                                        </div>
                                        <Button variant="outline" asChild>
                                            <a href={AFFILIATE_LINKS.noble} target="_blank" rel="noopener noreferrer">Get Free Kit</a>
                                        </Button>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Next Steps */}
                            <section className="mt-12">
                                <h2>4. Next Steps for {stateName} Investors</h2>
                                <p>
                                    If you&apos;re ready to protect your retirement with gold, here&apos;s the process:
                                </p>
                                <ol>
                                    <li><strong>Request a free kit</strong> from one of the companies above to learn about pricing and process</li>
                                    <li><strong>Speak with a specialist</strong> who can answer your questions (no obligation)</li>
                                    <li><strong>Choose your metals</strong> from IRS-approved gold, silver, platinum, or palladium</li>
                                    <li><strong>Fund your IRA</strong> via rollover (401k, existing IRA) or direct contribution</li>
                                    <li><strong>Metals ship to depository</strong> where they&apos;re stored securely in your name</li>
                                </ol>
                                <p>
                                    The entire process typically takes 2-3 weeks. Your specialist handles all the paperwork with your existing retirement account custodian.
                                </p>
                            </section>

                            {/* CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">{stateName} Residents: Protect Your Retirement</h3>
                                    <p className="mb-6 text-gray-200">Compare the top Gold IRA companies serving {stateName}. Get free investor kits with no obligation.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/best-gold-ira-companies">
                                            Compare Top Companies
                                        </Link>
                                    </Button>
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
