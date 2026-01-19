import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import { BookOpen, FileText, Calculator, Video, ExternalLink, ArrowRight, CheckCircle, Scale } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Gold IRA Resources & Tools | Free Guides & Checklists",
    description: "Free Gold IRA resources: guides, comparison tools, rollover checklists, and IRS-approved metals lists. Everything you need to decide.",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gold IRA Resources",
    "description": "Free educational resources for Gold IRA investors including guides, checklists, and comparison tools.",
    "url": "https://richdadretirement.com/resources"
};

const guides = [
    {
        title: "Complete Gold IRA Guide",
        description: "Everything you need to know about Gold IRAs in one place. How they work, who they're for, and how to get started.",
        href: "/guide/gold-ira-guide",
        icon: BookOpen,
        tag: "Most Popular"
    },
    {
        title: "Gold IRA Fees Guide",
        description: "Understand setup fees, storage costs, custodian fees, and what's actually reasonable to pay.",
        href: "/guide/gold-ira-fees",
        icon: Calculator,
        tag: null
    },
    {
        title: "Gold IRA Minimum Investment",
        description: "How much do you really need? We break down minimums by company and account type.",
        href: "/guide/gold-ira-minimum-investment",
        icon: Calculator,
        tag: null
    },
    {
        title: "Gold IRA for Seniors",
        description: "Special considerations for retirees: RMDs, withdrawal strategies, and age-specific rules.",
        href: "/guide/gold-ira-for-seniors",
        icon: BookOpen,
        tag: null
    },
    {
        title: "Silver IRA Guide",
        description: "Silver offers different benefits than gold. Learn when silver makes sense and how to add it to your retirement account.",
        href: "/guide/silver-ira-guide",
        icon: BookOpen,
        tag: null
    },
    {
        title: "401(k) to Gold Rollover",
        description: "Step-by-step instructions for rolling over your old 401(k) into a Gold IRA—without penalties or tax headaches.",
        href: "/guide/401k-to-gold-rollover",
        icon: FileText,
        tag: null
    },
    {
        title: "TSP to Gold IRA Rollover",
        description: "Federal employees and military members: here's how to move your Thrift Savings Plan into precious metals.",
        href: "/guide/tsp-to-gold-ira-rollover",
        icon: FileText,
        tag: null
    },
    {
        title: "403(b) to Gold IRA Rollover",
        description: "Teachers, nurses, and nonprofit workers—your 403(b) can be converted too. Here's the process.",
        href: "/guide/403b-to-gold-ira-rollover",
        icon: FileText,
        tag: null
    }
];

const learnArticles = [
    {
        title: "7 Benefits of a Gold IRA",
        description: "Why investors are adding precious metals to their retirement portfolios.",
        href: "/learn/gold-ira-benefits"
    },
    {
        title: "Gold IRA Tax Rules",
        description: "What the IRS allows, contribution limits, and withdrawal rules.",
        href: "/learn/gold-ira-tax-rules"
    },
    {
        title: "How to Spot Gold IRA Scams",
        description: "Red flags that separate legitimate companies from bad actors.",
        href: "/learn/gold-ira-scams"
    },
    {
        title: "Are Gold IRAs Safe?",
        description: "Understanding the real risks and protections.",
        href: "/learn/are-gold-iras-safe"
    },
    {
        title: "IRS-Approved Gold Coins",
        description: "Which metals are allowed in your IRA and which aren't.",
        href: "/learn/ira-approved-gold-coins"
    },
    {
        title: "Home Storage Gold IRA",
        description: "Why 'home storage' IRAs are risky and usually illegal.",
        href: "/learn/home-storage-gold-ira"
    },
    {
        title: "Self-Directed IRA Gold Guide",
        description: "How self-directed IRAs work and what they allow.",
        href: "/learn/self-directed-ira-gold"
    },
    {
        title: "Precious Metals IRA Rules",
        description: "IRS regulations for gold, silver, platinum, and palladium.",
        href: "/learn/precious-metals-ira-rules"
    },
    {
        title: "Checkbook IRA Rules",
        description: "Understanding LLC IRAs and their strict requirements.",
        href: "/learn/checkbook-ira-rules"
    },
    {
        title: "Platinum IRA Guide",
        description: "Adding platinum to your precious metals portfolio.",
        href: "/learn/platinum-ira"
    }
];

const comparisons = [
    { title: "Gold IRA vs. 401(k)", href: "/compare/gold-ira-vs-401k" },
    { title: "Gold IRA vs. Traditional IRA", href: "/compare/gold-ira-vs-traditional-ira" },
    { title: "Gold IRA vs. Roth IRA", href: "/compare/gold-ira-vs-roth-ira" },
    { title: "Gold IRA vs. Physical Gold", href: "/compare/gold-ira-vs-physical-gold" },
    { title: "Gold IRA vs. Gold ETFs", href: "/compare/gold-ira-vs-gold-etf" },
    { title: "Gold IRA vs. Crypto", href: "/compare/gold-ira-vs-crypto" },
    { title: "Gold vs. Silver IRA", href: "/compare/gold-vs-silver-ira" }
];

const companyComparisons = [
    { title: "Augusta vs. Goldco", href: "/compare/augusta-vs-goldco" },
    { title: "Noble Gold vs. Birch Gold", href: "/compare/noble-gold-vs-birch-gold" },
    { title: "Goldco vs. Lear Capital", href: "/compare/goldco-vs-lear-capital" },
    { title: "Lear Capital vs. Noble Gold", href: "/compare/lear-capital-vs-noble-gold" },
    { title: "American Hartford vs. Oxford Gold", href: "/compare/american-hartford-vs-oxford-gold" }
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />

            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/40" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <span className="inline-block text-secondary font-bold tracking-widest uppercase text-xs">
                                Free Resources
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Gold IRA Resources
                            </h1>
                            <p className="text-xl text-gray-200 font-light leading-relaxed">
                                Guides, checklists, and tools to help you understand precious metals retirement investing. No sales pitch, no registration required.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Guides Section */}
            <section className="py-20">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs">Start Here</span>
                                <h2 className="text-3xl font-serif font-bold text-primary mt-3">In-Depth Guides</h2>
                                <p className="text-text-muted mt-4 max-w-2xl mx-auto">
                                    These aren&apos;t 500-word fluff pieces. Each guide covers everything you need to know about its topic.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {guides.map((guide, index) => (
                                <FadeIn key={guide.href} delay={0.1 * (index + 1)}>
                                    <Link
                                        href={guide.href}
                                        className="group bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col hover:border-secondary hover:shadow-md transition-all"
                                    >
                                        {guide.tag && (
                                            <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                                                {guide.tag}
                                            </span>
                                        )}
                                        <div className="h-10 w-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-4">
                                            <guide.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-lg font-bold font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                                            {guide.title}
                                        </h3>
                                        <p className="text-sm text-text-muted leading-relaxed flex-grow">
                                            {guide.description}
                                        </p>
                                        <div className="mt-4 text-secondary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read Guide <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Learn Articles */}
            <section className="py-20 bg-background-subtle border-y border-gray-200">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs">Learn</span>
                                <h2 className="text-3xl font-serif font-bold text-primary mt-3">Educational Articles</h2>
                                <p className="text-text-muted mt-4">
                                    Short, focused reads on specific Gold IRA topics.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {learnArticles.map((article, index) => (
                                <FadeIn key={article.href} delay={0.05 * (index + 1)}>
                                    <Link
                                        href={article.href}
                                        className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-secondary hover:shadow-sm transition-all"
                                    >
                                        <h3 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-text-muted">
                                            {article.description}
                                        </p>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Comparisons */}
            <section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs">Compare</span>
                                <h2 className="text-3xl font-serif font-bold text-primary mt-3">Side-by-Side Comparisons</h2>
                                <p className="text-text-muted mt-4">
                                    Not sure how Gold IRAs stack up against other options? We break it down.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                                        <Scale className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-primary">Investment Comparisons</h3>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {comparisons.map((comparison) => (
                                        <Link
                                            key={comparison.href}
                                            href={comparison.href}
                                            className="flex items-center gap-3 p-4 rounded-lg hover:bg-background-subtle transition-colors group"
                                        >
                                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                                            <span className="text-text-muted group-hover:text-primary transition-colors">
                                                {comparison.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mt-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                        <Scale className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-primary">Company vs. Company</h3>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {companyComparisons.map((comparison) => (
                                        <Link
                                            key={comparison.href}
                                            href={comparison.href}
                                            className="flex items-center gap-3 p-4 rounded-lg hover:bg-background-subtle transition-colors group"
                                        >
                                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-text-muted group-hover:text-primary transition-colors">
                                                {comparison.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Company Reviews CTA */}
            <section className="py-16">
                <Container>
                    <FadeIn>
                        <div className="bg-primary rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden max-w-4xl mx-auto">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 space-y-6">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold">Ready to Compare Companies?</h2>
                                <p className="text-gray-200 max-w-xl mx-auto">
                                    Once you understand how Gold IRAs work, the next step is finding the right company. We&apos;ve reviewed the top providers so you don&apos;t have to.
                                </p>
                                <Button size="lg" variant="gold" asChild>
                                    <Link href="/reviews">
                                        See Company Reviews
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* External Resources */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
                                Official IRS Resources
                            </h2>
                            <p className="text-text-muted text-center mb-8">
                                For the official word on retirement account rules, these IRS publications are worth bookmarking.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <a
                                    href="https://www.irs.gov/publications/p590a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-secondary transition-colors group"
                                >
                                    <div>
                                        <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">IRS Publication 590-A</h3>
                                        <p className="text-sm text-text-muted">Contributions to IRAs</p>
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-text-muted group-hover:text-secondary transition-colors" />
                                </a>
                                <a
                                    href="https://www.irs.gov/publications/p590b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-secondary transition-colors group"
                                >
                                    <div>
                                        <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">IRS Publication 590-B</h3>
                                        <p className="text-sm text-text-muted">Distributions from IRAs</p>
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-text-muted group-hover:text-secondary transition-colors" />
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>
        </main>
    );
}
