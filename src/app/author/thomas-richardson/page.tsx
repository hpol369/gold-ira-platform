import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Linkedin, Twitter, Award, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Thomas Richardson - Founder & Lead Analyst",
    description: "Meet Thomas Richardson, a former wealth manager with 20+ years of experience and the founder of Rich Dad Retirement. Expert in Gold IRAs and precious metals.",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas Richardson",
    "jobTitle": "Founder & Lead Analyst",
    "url": "https://www.richdadretirement.com/author/thomas-richardson",
    "image": "https://www.richdadretirement.com/images/thomas-richardson.png",
    "description": "Thomas Richardson is a former wealth manager turned retirement advocate. He founded Rich Dad Retirement to help Americans protect their savings from inflation and predatory practices.",
    "sameAs": [
        "https://www.linkedin.com/in/thomas-richardson-gold",
        "https://twitter.com/ThomasGoldIRA"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "knowsAbout": ["Gold IRAs", "Retirement Planning", "Wealth Preservation", "Precious Metals"]
};

export default function AuthorPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />

            <Container className="pt-12 pb-24">
                <Link href="/about-us" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to About Us
                </Link>

                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image Column */}
                        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                            <div className="w-64 h-64 rounded-full border-8 border-slate-800 mb-8 shadow-xl relative overflow-hidden">
                                <Image
                                    src="/images/thomas-richardson.png"
                                    alt="Thomas Richardson"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-white mb-2">Thomas Richardson</h1>
                            <p className="text-amber-400 font-medium tracking-wide text-sm uppercase mb-6">Founder & Lead Analyst</p>

                            <div className="flex gap-4 mb-8">
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-slate-400">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-slate-400">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 text-left space-y-4 border border-white/10">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-white">20+ Years Experience</p>
                                        <p className="text-xs text-slate-400">Former Wealth Manager</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-white">Fiduciary Standard</p>
                                        <p className="text-xs text-slate-400">Always putting readers first</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 prose prose-lg prose-invert prose-headings:font-serif prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">
                            <h2 className="mt-0">My Philosophy: "If You Can't Touch It, You Don't Own It"</h2>
                            <p className="lead">
                                I spent two decades in the corporate financial world. I saw how the sausage was made—high fees, complex derivatives, and "paper assets" that vanished when markets crashed.
                            </p>
                            <p>
                                I founded <strong>Rich Dad Retirement</strong> with a simple mission: to give everyday Americans the knowledge they need to take back control of their wealth.
                            </p>

                            <h3>Why Gold? Why Now?</h3>
                            <p>
                                We are living in an era of unprecedented debt and currency devaluation. The traditional "60/40" portfolio of stocks and bonds is no longer enough to protect your purchasing power.
                            </p>
                            <p>
                                I believe every retirement portfolio needs insurance. Physical gold and silver aren't about "getting rich quick"—they're about <strong>staying rich</strong> when the dollar loses value.
                            </p>

                            <h3>My Editorial Promise</h3>
                            <p>
                                The Gold IRA industry is full of sharks. My team and I are here to be your shield.
                            </p>
                            <ul>
                                <li><strong>No Fear Tactics:</strong> We use data, not doom-and-gloom.</li>
                                <li><strong>Fee Transparency:</strong> We dig into the fine print to find hidden costs.</li>
                                <li><strong>Unbiased Reviews:</strong> If a company has a bad reputation, we say so.</li>
                            </ul>

                            <div className="not-prose mt-12 pt-12 border-t border-white/10">
                                <h3 className="font-serif font-bold text-2xl text-white mb-6">Popular Articles by Thomas</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Link href="/guide/gold-ira-guide" className="group block bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20">
                                        <BookOpen className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Gold IRA Guide 2026</h4>
                                        <p className="text-sm text-slate-400">The ultimate beginner's handbook to precious metals IRAs.</p>
                                    </Link>
                                    <Link href="/guide/401k-to-gold-rollover" className="group block bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20">
                                        <BookOpen className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">401k Rollover Rules</h4>
                                        <p className="text-sm text-slate-400">How to move your funds without paying taxes or penalties.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
