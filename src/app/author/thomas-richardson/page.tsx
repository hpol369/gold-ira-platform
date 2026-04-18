import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Linkedin, Twitter, Award, BookOpen, ShieldCheck, FileText, Users, Building2, CheckCircle2 } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Thomas Richardson — Founder & Lead Analyst | Rich Dad Retirement",
    description: "Thomas Richardson is a former wealth manager with 20+ years of experience in retirement planning, Gold IRAs, and precious metals investing. Founder of Rich Dad Retirement.",
    alternates: {
        canonical: "/author/thomas-richardson",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas Richardson",
    "jobTitle": "Founder & Lead Analyst",
    "url": "https://www.richdadretirement.com/author/thomas-richardson",
    "image": "https://www.richdadretirement.com/images/thomas-richardson.png",
    "description": "Thomas Richardson is a former wealth manager turned retirement advocate with 20+ years of experience. He founded Rich Dad Retirement to help Americans protect their savings.",
    "sameAs": [
        "https://www.linkedin.com/in/thomas-richardson-gold",
        "https://twitter.com/ThomasGoldIRA"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
        "url": "https://www.richdadretirement.com"
    },
    "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Virginia"
    },
    "hasCredential": [
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Professional Certification",
            "name": "Certified Financial Planner (CFP)"
        }
    ],
    "memberOf": [
        {
            "@type": "Organization",
            "name": "Financial Planning Association"
        }
    ],
    "knowsAbout": [
        "Gold IRAs",
        "Retirement Planning",
        "Wealth Preservation",
        "Precious Metals Investing",
        "401(k) Rollovers",
        "Self-Directed IRAs",
        "Federal Employee Retirement (FERS/TSP)",
        "Social Security Optimization"
    ],
    "publishingPrinciples": "https://www.richdadretirement.com/editorial-standards"
};

const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Thomas Richardson", url: "/author/thomas-richardson" },
]);

const featuredArticles = [
    { href: "/guide/gold-ira-guide", title: "Gold IRA Guide 2026", desc: "The ultimate beginner's handbook to precious metals IRAs." },
    { href: "/guide/401k-to-gold-rollover", title: "401(k) to Gold Rollover", desc: "How to move your funds without paying taxes or penalties." },
    { href: "/reviews/augusta-precious-metals", title: "Augusta Precious Metals Review", desc: "In-depth review of the #1 rated Gold IRA company." },
    { href: "/learn/gold-ira-tax-rules", title: "Gold IRA Tax Rules", desc: "Complete guide to IRS rules for precious metals in retirement accounts." },
    { href: "/federal-retirement", title: "Federal Employee Retirement Guide", desc: "FERS, TSP, and FEHB strategies for government workers." },
    { href: "/guide/silver-ira-guide", title: "Silver IRA Guide", desc: "Why silver belongs in your retirement portfolio." },
];

export default function AuthorPage() {
    return (
        <main className="min-h-screen bg-[#0C0D18]">
            <Navbar />
            <SchemaScript schema={personSchema} />
            <SchemaScript schema={breadcrumbs} />

            <Container className="pt-12 pb-24">
                <Link href="/about-us" className="inline-flex items-center text-sm text-[#A8A39A] hover:text-[#D4A94E] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to About Us
                </Link>

                <div className="bg-[#0C0D18] rounded-3xl p-8 md:p-12 border border-[#2A2D42]">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image Column */}
                        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                            <div className="w-64 h-64 rounded-full border-8 border-white mb-8 shadow-xl relative overflow-hidden">
                                <Image
                                    src="/images/thomas-richardson.png"
                                    alt="Thomas Richardson — Founder & Lead Analyst at Rich Dad Retirement"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-[#F6F4EF] mb-2">Thomas Richardson</h1>
                            <p className="text-[#D4A94E] font-medium tracking-wide text-sm uppercase mb-6">Founder & Lead Analyst</p>

                            <div className="flex gap-4 mb-8">
                                <a href="https://www.linkedin.com/in/thomas-richardson-gold" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#121423] rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors text-[#A8A39A]">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com/ThomasGoldIRA" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#121423] rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors text-[#A8A39A]">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Credentials Card */}
                            <div className="w-full bg-[#161828] rounded-xl p-6 text-left space-y-4 border border-[#2A2D42]">
                                <h3 className="text-xs font-bold text-[#A8A39A] uppercase tracking-wider mb-3">Credentials</h3>
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#D4A94E] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-[#F6F4EF]">20+ Years in Finance</p>
                                        <p className="text-xs text-[#A8A39A]">Former Wealth Manager, Regional Director</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#D4A94E] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-[#F6F4EF]">CFP Certified</p>
                                        <p className="text-xs text-[#A8A39A]">Certified Financial Planner</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Building2 className="w-5 h-5 text-[#D4A94E] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-[#F6F4EF]">University of Virginia</p>
                                        <p className="text-xs text-[#A8A39A]">B.S. in Finance</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-[#D4A94E] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-[#F6F4EF]">15+ Companies Investigated</p>
                                        <p className="text-xs text-[#A8A39A]">Independent, hands-on research</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-[#D4A94E] shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm text-[#F6F4EF]">500+ Articles Published</p>
                                        <p className="text-xs text-[#A8A39A]">Guides, reviews, and analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-li:text-[#D0CCC4] max-w-none">
                            <h2 className="mt-0">My Philosophy: &ldquo;If You Can&apos;t Touch It, You Don&apos;t Own It&rdquo;</h2>
                            <p className="lead">
                                I spent two decades in the corporate financial world. I saw how the sausage was made &mdash; high fees, complex derivatives, and &ldquo;paper assets&rdquo; that vanished when markets crashed.
                            </p>
                            <p>
                                I founded <strong>Rich Dad Retirement</strong> with a simple mission: to give everyday Americans the knowledge they need to take back control of their wealth.
                            </p>

                            <h3>Professional Background</h3>
                            <p>
                                Before founding Rich Dad Retirement, I spent 20 years as a wealth manager advising high-net-worth clients on retirement planning and asset protection. I managed portfolios ranging from $250,000 to $10 million and saw firsthand how physical precious metals outperformed during the 2008 financial crisis while paper assets collapsed.
                            </p>
                            <p>
                                I hold a <strong>Certified Financial Planner (CFP)</strong> designation and am a member of the <strong>Financial Planning Association</strong>. My education includes a B.S. in Finance from the University of Virginia.
                            </p>

                            <h3>Why Gold? Why Now?</h3>
                            <p>
                                We are living in an era of unprecedented debt and currency devaluation. The traditional &ldquo;60/40&rdquo; portfolio of stocks and bonds is no longer enough to protect your purchasing power.
                            </p>
                            <p>
                                I believe every retirement portfolio needs insurance. Physical gold and silver aren&apos;t about &ldquo;getting rich quick&rdquo; &mdash; they&apos;re about <strong>staying rich</strong> when the dollar loses value.
                            </p>

                            <h3>How I Research &amp; Evaluate Gold IRA Companies</h3>
                            <p>
                                Every review and recommendation on this site follows a rigorous process:
                            </p>
                            <ol>
                                <li><strong>Hands-on testing:</strong> I open accounts, request kits, and go through each company&apos;s onboarding process personally.</li>
                                <li><strong>Fee verification:</strong> I verify all fees directly with company representatives and cross-reference with BBB complaints.</li>
                                <li><strong>Source verification:</strong> Every statistic is verified against primary sources (IRS.gov, SSA.gov, BLS.gov, World Gold Council).</li>
                                <li><strong>Regular re-evaluation:</strong> Reviews are updated quarterly. If a company&apos;s rating changes at the BBB or new complaints emerge, I update immediately.</li>
                                <li><strong>Editorial board review:</strong> All content is reviewed by our <Link href="/editorial-board">Editorial Board</Link> before publication.</li>
                            </ol>

                            <h3>My Editorial Promise</h3>
                            <p>
                                The Gold IRA industry is full of sharks. My team and I are here to be your shield.
                            </p>
                            <ul>
                                <li><strong>No Fear Tactics:</strong> We use data, not doom-and-gloom.</li>
                                <li><strong>Fee Transparency:</strong> We dig into the fine print to find hidden costs.</li>
                                <li><strong>Unbiased Reviews:</strong> If a company has a bad reputation, we say so.</li>
                                <li><strong>Affiliate Disclosure:</strong> We earn commissions from some companies we recommend. This never influences our ratings or editorial content. Read our <Link href="/editorial-standards">Editorial Standards</Link>.</li>
                            </ul>

                            {/* Featured Articles */}
                            <div className="not-prose mt-12 pt-12 border-t border-[#2A2D42]">
                                <h3 className="font-serif font-bold text-2xl text-[#F6F4EF] mb-6">Featured Articles by Thomas</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {featuredArticles.map((article) => (
                                        <Link key={article.href} href={article.href} className="group block bg-[#161828] rounded-xl p-5 hover:bg-[#121423] transition-all border border-[#2A2D42] hover:border-[#B22234]">
                                            <BookOpen className="w-5 h-5 text-[#D4A94E] mb-2 group-hover:scale-110 transition-transform" />
                                            <h4 className="font-bold text-sm text-[#F6F4EF] mb-1 group-hover:text-[#D4A94E] transition-colors">{article.title}</h4>
                                            <p className="text-xs text-[#A8A39A]">{article.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </main>
    );
}
