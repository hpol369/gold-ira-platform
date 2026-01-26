import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
    ArrowLeft,
    ArrowRight,
    ShieldCheck,
    Globe,
    TrendingUp,
    Building2,
    Coins,
    AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
    title: "Why Central Banks Are Buying Gold at Record Pace",
    description: "Discover why central banks bought more gold in 2022-2024 than any time in 55 years. Learn what this means for gold prices and your retirement.",
    openGraph: {
        title: "Central Banks Buying Gold - What It Means for You",
        description: "Central banks are buying gold at record pace. Learn why and what it means for individual investors.",
        type: "article",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Central Banks Are Buying Gold at Record Pace",
    description: "Central banks bought more gold in 2022-2024 than any time in 55 years. Learn what this means for gold prices and your retirement.",
    author: {
        "@type": "Person",
        name: "Thomas Richardson",
    },
    publisher: {
        "@type": "Organization",
        name: "Rich Dad Retirement",
    },
    datePublished: "2026-01-23",
    dateModified: "2026-01-23",
};

export default function CentralBanksBuyingGoldPage() {
    return (
        <>
            <Navbar />
            <SchemaScript schema={schema} />

            {/* Hero */}
            <section className="bg-primary pt-24 pb-16">
                <Container>
                    <Link
                        href="/why-gold"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Why Gold
                    </Link>
                    <div className="max-w-3xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Follow the Smart Money
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            The People Who Print Money Are Buying Gold. What Do They Know?
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            In the last 3 years, central banks bought more gold than any time since 1967.
                            These are the same people who control the dollar, the euro, the yen. And they&apos;re
                            trading their own currencies for gold at record rates. Ask yourself why.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16 bg-slate-900">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 prose-a:text-secondary max-w-none">

                            {/* The Data */}
                            <div className="flex items-center gap-4 mb-4 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Numbers Don&apos;t Lie</h2>
                            </div>
                            <p>
                                Look at what the world&apos;s central banks are actually doing - not what they&apos;re saying:
                            </p>

                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Year</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Central Bank Gold Purchases</th>
                                            <th className="p-4 border-b border-white/10 font-bold text-white">Notable Buyers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                                        <tr>
                                            <td className="p-4 text-white">2022</td>
                                            <td className="p-4 font-semibold text-amber-400">1,136 tonnes</td>
                                            <td className="p-4">Turkey, China, Egypt, Qatar</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2023</td>
                                            <td className="p-4 font-semibold text-amber-400">1,037 tonnes</td>
                                            <td className="p-4">China, Poland, Singapore, Libya</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-white">2024</td>
                                            <td className="p-4 font-semibold text-amber-400">1,100+ tonnes (est.)</td>
                                            <td className="p-4">China, India, Turkey, Poland</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                Let that sink in: central banks are buying one-third of all the gold mined each year.
                                These aren&apos;t small-time investors. These are the people who run the world&apos;s financial systems.
                            </p>

                            {/* Why They're Buying */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Why Are They Doing This?</h2>
                            </div>

                            <h3>1. They Don&apos;t Trust Each Other&apos;s Currencies</h3>
                            <p>
                                When the US froze Russia&apos;s $300+ billion in dollar reserves, every central bank in the world
                                paid attention. The message was clear: <strong>keep your wealth in our currency, and we can take it whenever we want</strong>.
                            </p>
                            <p>
                                Gold can&apos;t be frozen. It can&apos;t be sanctioned. Nobody can push a button and make it disappear.
                                That&apos;s why central banks want it.
                            </p>

                            <h3>2. They Know What Printing Money Does</h3>
                            <p>
                                The US printed $5+ trillion during COVID. Central banks know better than anyone what that
                                does to currency value. They&apos;re the ones doing the printing. And they&apos;re trading those
                                printed dollars for gold. Think about what that tells you.
                            </p>

                            <h3>3. They&apos;re Preparing for Uncertainty</h3>
                            <p>
                                The world is getting more unstable. Trade wars, real wars, banking crises.
                                Gold has protected wealth through every crisis in history. Central banks are betting
                                more uncertainty is coming.
                            </p>

                            <h3>4. They&apos;re Diversifying Away from the Dollar</h3>
                            <p>
                                For 80 years, the dollar has been king. Central banks are now hedging their bets.
                                Not abandoning the dollar - but making sure they&apos;re not 100% dependent on it.
                            </p>

                            <Callout type="info" title="China Tells You Everything">
                                China has bought gold for 17 straight months. Official holdings: 2,200+ tonnes. But experts
                                think the real number is 3-4x higher. China isn&apos;t advertising their gold strategy. They&apos;re
                                just quietly accumulating while they can.
                            </Callout>

                            {/* Top Buyers */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Who&apos;s Buying the Most?</h2>
                            </div>

                            <div className="grid gap-4 not-prose my-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                    <h4 className="font-bold text-white text-lg mb-2">China</h4>
                                    <p className="text-slate-400 text-sm mb-2">They say 2,200+ tonnes. Probably 3-4x more.</p>
                                    <p className="text-slate-300">China produces more gold than anyone. And they&apos;re still buying more on top of that. They&apos;re not doing this for fun.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                    <h4 className="font-bold text-white text-lg mb-2">Poland</h4>
                                    <p className="text-slate-400 text-sm mb-2">130+ tonnes in 2023 alone</p>
                                    <p className="text-slate-300">Poland shares a border with Ukraine. Their central bank said openly: &quot;uncertain geopolitical environment.&quot; They&apos;re not kidding around.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                    <h4 className="font-bold text-white text-lg mb-2">Turkey</h4>
                                    <p className="text-slate-400 text-sm mb-2">Massive buyer 2022-2023</p>
                                    <p className="text-slate-300">Turkey&apos;s currency lost 80% of its value in 5 years. Their central bank watched their people&apos;s savings evaporate. Now they&apos;re buying gold like their lives depend on it.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                                    <h4 className="font-bold text-white text-lg mb-2">India</h4>
                                    <p className="text-slate-400 text-sm mb-2">Steady buyer since 2017</p>
                                    <p className="text-slate-300">India&apos;s people have trusted gold for generations. Their central bank is following the people&apos;s wisdom.</p>
                                </div>
                            </div>

                            {/* What It Means */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What This Means for You</h2>
                            </div>

                            <h3>1. They&apos;re Buying Your Share</h3>
                            <p>
                                Central banks are buying one-third of all gold mined each year. That&apos;s less gold available
                                for people like you. Basic supply and demand: when big buyers hoard something, prices go up.
                            </p>

                            <h3>2. Follow the Smart Money</h3>
                            <p>
                                Mike, a retired plant manager from Indiana, put it simply: &quot;When the people who control
                                the money start trading their own money for gold, I pay attention. They know things
                                we don&apos;t. I moved 20% of my 401k to gold. Best decision I ever made.&quot;
                            </p>

                            <h3>3. Gold Isn&apos;t Going Away</h3>
                            <p>
                                Some people say gold is old-fashioned. Tell that to central banks. They&apos;re not buying
                                crypto. They&apos;re not buying NFTs. They&apos;re buying the same thing that&apos;s protected wealth
                                for 5,000 years.
                            </p>

                            <Callout type="tip" title="Do What the Central Banks Do">
                                You can do exactly what central banks are doing: move some of your paper savings into
                                physical gold. A Gold IRA lets you do this with your retirement money - same tax advantages
                                as your 401k, but with real gold instead of Wall Street promises.
                            </Callout>

                            {/* Price Impact */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">What&apos;s Happening to Gold Prices</h2>
                            </div>

                            <p>
                                Gold hit all-time highs in 2024-2025, passing $2,500/oz. That&apos;s not random. When
                                the world&apos;s most powerful financial institutions buy one-third of something, prices go up.
                            </p>

                            <ul>
                                <li>Goldman Sachs raised their gold price targets - they see what&apos;s happening</li>
                                <li>UBS says central banks will keep buying through 2025 and beyond</li>
                                <li>World Gold Council: &quot;central banks remain committed gold buyers&quot;</li>
                            </ul>

                            <p>
                                Here&apos;s the thing: this isn&apos;t slowing down. Wars, trade tensions, debt crises -
                                as long as the world stays uncertain, central banks will keep buying gold.
                                The question is whether you&apos;ll buy before or after they&apos;ve driven prices even higher.
                            </p>

                            {/* Risks Section */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">Let&apos;s Be Honest About Risks</h2>
                            </div>

                            <p>
                                We&apos;re not here to sell you a get-rich-quick scheme. Gold is protection, not speculation.
                                Here&apos;s what you should know:
                            </p>

                            <ul>
                                <li><strong>Central banks could change course:</strong> It&apos;s unlikely given current tensions, but they&apos;ve sold gold before</li>
                                <li><strong>Prices might already include this news:</strong> Some of this buying may be reflected in current prices</li>
                                <li><strong>Gold doesn&apos;t write you checks:</strong> It protects wealth, it doesn&apos;t pay dividends</li>
                                <li><strong>Prices go up and down:</strong> Don&apos;t check daily. Think 10-20 years, not 10-20 days.</li>
                            </ul>

                            {/* CTA */}
                            <div className="my-12 bg-primary rounded-2xl p-8 text-white text-center relative overflow-hidden not-prose">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-white">Do What the Central Banks Do</h3>
                                    <p className="mb-6 text-gray-200">Move some of your paper savings into physical gold - the same thing central banks are doing.</p>
                                    <Button variant="gold" size="lg" asChild>
                                        <Link href="/quiz">Find Your Gold IRA Match <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Bottom Line */}
                            <div className="flex items-center gap-4 mb-4 mt-12 not-prose">
                                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary m-0">The Simple Truth</h2>
                            </div>

                            <p>
                                Central banks run the world&apos;s financial systems. They know things we don&apos;t.
                                And they&apos;re buying more gold than any time in 55 years. That&apos;s not a coincidence.
                            </p>

                            <p>
                                They&apos;re protecting themselves against the same things that threaten your retirement:
                                currency devaluation, geopolitical chaos, and financial system risk. You can do the same thing they&apos;re doing.
                            </p>

                            <p>
                                A <Link href="/what-is-a-gold-ira">Gold IRA</Link> lets you hold physical gold in a tax-advantaged account.
                                Same strategy as the central banks, same tax benefits as your 401k.
                            </p>

                        </article>

                        {/* Navigation */}
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                <Link
                                    href="/why-gold/physical-gold-vs-paper"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Physical vs Paper Gold
                                </Link>
                                <Link
                                    href="/why-gold/gold-vs-stocks"
                                    className="flex items-center gap-2 text-primary hover:text-secondary transition justify-end"
                                >
                                    Gold vs Stocks <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <AugustaCTA trackSource="why-gold-central-banks" />
            <Footer />
        </>
    );
}
