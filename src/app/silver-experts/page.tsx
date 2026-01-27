import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { ArrowRight, Users, Star, TrendingUp, Mic, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Silver Experts & Analysts: What the Pros Say About Silver in 2026",
    description: "Meet the leading silver market experts and analysts. Learn what Andy Schectman, David Morgan, Mike Maloney, Ted Butler, Rick Rule, and Eric Sprott predict for silver prices.",
    keywords: ["silver experts", "silver analysts", "andy schectman silver", "david morgan silver", "mike maloney silver", "ted butler silver", "rick rule silver", "eric sprott silver"],
    openGraph: {
        title: "Silver Experts & Analysts: What the Pros Say About Silver in 2026",
        description: "Meet the leading silver market experts. Learn what Andy Schectman, David Morgan, Mike Maloney, and others predict for silver.",
        type: "website",
    },
};

const experts = [
    {
        name: "Andy Schectman",
        slug: "andy-schectman",
        title: "CEO, Miles Franklin",
        expertise: "Silver Shortage & Manipulation",
        description: "One of the most vocal advocates for physical silver ownership. Andy has been warning about silver shortages and bank manipulation for over two decades.",
        keyPrediction: "Physical silver shortage will create a massive price spike when paper market fails.",
        icon: TrendingUp,
        color: "amber",
    },
    {
        name: "David Morgan",
        slug: "david-morgan",
        title: "The Silver Guru",
        expertise: "Silver Analysis & Education",
        description: "Publisher of The Morgan Report and author of 'The Silver Manifesto.' David has been analyzing silver markets since the 1990s.",
        keyPrediction: "Silver will outperform gold in the coming precious metals bull market.",
        icon: BookOpen,
        color: "blue",
    },
    {
        name: "Mike Maloney",
        slug: "mike-maloney",
        title: "Founder, GoldSilver.com",
        expertise: "Monetary History & Wealth Cycles",
        description: "Creator of the 'Hidden Secrets of Money' documentary series. Mike educates millions on monetary history and wealth preservation.",
        keyPrediction: "We are in the greatest wealth transfer in history. Silver is the opportunity of a lifetime.",
        icon: Star,
        color: "purple",
    },
    {
        name: "Ted Butler",
        slug: "ted-butler",
        title: "Silver Market Analyst",
        expertise: "COMEX Manipulation Research",
        description: "The pioneer of silver manipulation research. Ted has been documenting JP Morgan's silver manipulation for over 30 years.",
        keyPrediction: "JP Morgan's silver short position will eventually break and cause explosive price moves.",
        icon: Award,
        color: "red",
    },
    {
        name: "Rick Rule",
        slug: "rick-rule",
        title: "Mining Investment Legend",
        expertise: "Resource Investing",
        description: "Former President of Sprott U.S. Holdings. Rick has decades of experience investing in natural resource companies.",
        keyPrediction: "Silver mining stocks offer leveraged exposure to rising silver prices.",
        icon: TrendingUp,
        color: "green",
    },
    {
        name: "Eric Sprott",
        slug: "eric-sprott",
        title: "Billionaire Investor",
        expertise: "Physical Silver Investment",
        description: "Creator of PSLV (Sprott Physical Silver Trust). Eric has personally invested hundreds of millions in silver.",
        keyPrediction: "Physical silver demand will overwhelm paper market supply.",
        icon: Star,
        color: "slate",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Silver Market Experts & Analysts",
    "description": "Directory of leading silver market experts, analysts, and thought leaders. Learn what the professionals predict for silver in 2026.",
    "url": "https://www.richdadretirement.com/silver-experts",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": experts.map((expert, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Person",
                "name": expert.name,
                "jobTitle": expert.title,
                "description": expert.description,
            }
        }))
    }
};

export default function SilverExpertsPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/5 to-transparent animate-pulse" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-400/10 px-4 py-1.5 text-sm font-semibold text-slate-300 mb-6 border border-slate-400/20">
                            <Users className="w-4 h-4 text-slate-300" />
                            Authority Building Content
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            What the <span className="text-slate-300">Silver Experts</span> Say About 2026
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                            Meet the leading voices in the silver market. These analysts, investors, and industry veterans have decades of experience navigating precious metals markets. Here is what they see coming.
                        </p>
                        <Button variant="gold" size="xl" asChild>
                            <Link href="/quiz">Find Your Perfect Silver IRA Match <ArrowRight className="ml-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                </Container>
            </header>

            {/* Expert Grid */}
            <section className="py-16">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experts.map((expert) => {
                            const IconComponent = expert.icon;
                            return (
                                <Link
                                    key={expert.slug}
                                    href={`/silver-experts/${expert.slug}`}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-slate-400/30 transition-all"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-${expert.color}-500/20 flex items-center justify-center mb-6`}>
                                        <IconComponent className={`w-7 h-7 text-${expert.color}-400`} />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                        {expert.name}
                                    </h2>
                                    <p className="text-amber-400 font-semibold text-sm mb-4">{expert.title}</p>
                                    <p className="text-slate-400 mb-4">{expert.description}</p>
                                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                                        <p className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-1">Key Prediction</p>
                                        <p className="text-slate-300 text-sm italic">&quot;{expert.keyPrediction}&quot;</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                                        Read Full Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* Why Follow Experts Section */}
            <section className="py-16 bg-slate-800/30">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-white text-center mb-8">
                            Why Follow Silver Market Experts?
                        </h2>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-slate-300 text-center mb-8">
                                The silver market is complex, with forces ranging from industrial demand to central bank policies to retail investor movements. These experts have spent decades studying these dynamics and have track records of accurate predictions.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 not-prose">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                    <Mic className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                                    <h3 className="font-bold text-white mb-2">Media Presence</h3>
                                    <p className="text-slate-400 text-sm">Regularly featured on financial news channels, podcasts, and major publications.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                    <TrendingUp className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                                    <h3 className="font-bold text-white mb-2">Track Record</h3>
                                    <p className="text-slate-400 text-sm">Decades of experience with documented predictions and market calls.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                    <Award className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                                    <h3 className="font-bold text-white mb-2">Industry Authority</h3>
                                    <p className="text-slate-400 text-sm">Recognized leaders who have shaped how investors think about silver.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mid-Page CTA */}
            <section className="py-16">
                <Container>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-slate-400/20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">
                                Want to Follow the Experts Into Silver?
                            </h2>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                                Many of these experts recommend physical silver in a tax-advantaged retirement account. Find out if a Silver IRA is right for your portfolio.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="gold" size="xl" asChild>
                                    <Link href="/quiz">Take the Free Quiz <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                </Button>
                                <Button variant="outline" size="xl" asChild className="border-white/30 text-white hover:bg-white/10">
                                    <Link href="/guide/silver-ira-guide">Silver IRA Guide</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Expert Insights Summary */}
            <section className="py-16 bg-slate-800/30">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
                        Common Themes Among Silver Experts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold text-white text-xl mb-4">On Silver Supply</h3>
                            <p className="text-slate-300 mb-4">
                                Nearly all leading silver analysts point to the same fundamental issue: demand is outpacing supply. Industrial demand from solar panels, EVs, and electronics continues to grow while mine supply stagnates.
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                &quot;The silver market is in a structural deficit. Above-ground inventories are being depleted.&quot;
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold text-white text-xl mb-4">On Price Manipulation</h3>
                            <p className="text-slate-300 mb-4">
                                Many experts believe silver prices are artificially suppressed through paper derivative contracts. JP Morgan&apos;s $920 million fine for precious metals manipulation adds credibility to these claims.
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                &quot;When the paper market meets physical reality, prices will need to adjust dramatically.&quot;
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold text-white text-xl mb-4">On Silver vs Gold</h3>
                            <p className="text-slate-300 mb-4">
                                Experts frequently highlight the gold-to-silver ratio, currently around 80:1 versus the historical average of 15:1. Many see this as evidence that silver is dramatically undervalued relative to gold.
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                &quot;Silver always outperforms gold in precious metals bull markets.&quot;
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold text-white text-xl mb-4">On Physical Ownership</h3>
                            <p className="text-slate-300 mb-4">
                                Every expert on this list emphasizes the importance of owning physical silver rather than paper derivatives. They consistently recommend taking delivery or using allocated storage.
                            </p>
                            <p className="text-slate-400 text-sm italic">
                                &quot;If you can not hold it, you do not own it.&quot;
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Disclaimer */}
            <section className="py-8">
                <Container>
                    <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 max-w-4xl mx-auto">
                        <p className="text-slate-400 text-sm text-center">
                            <strong className="text-white">Disclaimer:</strong> We are not affiliated with any of the experts featured on this page. The information presented is for educational purposes only and represents our interpretation of publicly available statements. Always conduct your own research and consult with a financial advisor before making investment decisions.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800/50">
                <Container>
                    <AugustaCTA variant="footer" linkContext="silver" trackSource="silver-experts-hub" />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
