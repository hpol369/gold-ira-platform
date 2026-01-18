import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import { ShieldCheck, Users, Target, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "About Us | Rich Dad Retirement - Gold IRA Education & Reviews",
    description: "Learn about Rich Dad Retirement's mission to provide honest Gold IRA education. We help retirees and investors understand precious metals investing without the sales pressure.",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rich Dad Retirement",
    "url": "https://richdadretirement.com",
    "description": "Independent Gold IRA education and company reviews helping investors make informed decisions about precious metals retirement investing.",
    "foundingDate": "2024",
    "sameAs": []
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />

            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/40" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <span className="inline-block text-secondary font-bold tracking-widest uppercase text-xs">
                                    My Mission
                                </span>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                    "I realized the traditional '60/40' portfolio was broken."
                                </h1>
                                <p className="text-xl text-gray-200 font-light leading-relaxed">
                                    Hello, I'm Thomas Richardson. I built this site to help you protect your retirement savings from inflation, market crashes, and predatory salespeople.
                                </p>
                            </div>
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 relative">
                                <Image
                                    src="/images/thomas-richardson.png"
                                    alt="Thomas Richardson"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* My Story */}
            <section className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <FadeIn delay={0.1}>
                            <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                                    Why I Left Wealth Management
                                </h2>
                                <p className="lead">
                                    For 20 years, I worked in traditional wealth management. I wore the suit, I sold the mutual funds, and I repeated the standard advice: "Just stay invested for the long run."
                                </p>
                                <p>
                                    But in 2022, I watched as my clients—honest, hard-working people—lost 20% of their portfolios in months. Stocks went down. Bonds went down. Inflation went up. The "safe" 60/40 portfolio had failed.
                                </p>
                                <p>
                                    At the same time, I saw another problem. My own father was getting bombarded by calls from Gold IRA companies. They used fear tactics to try and scare him into moving his <i>entire</i> life savings into gold coins priced at 30% above market value.
                                </p>
                                <h3>The "Rich Dad" Philosophy</h3>
                                <p>
                                    I realized there were two dangerous extremes:
                                </p>
                                <ol>
                                    <li><strong>The Traditionalists:</strong> Who ignore gold completely and leave you exposed to inflation.</li>
                                    <li><strong>The Gold Sharks:</strong> Who sell overpriced coins to seniors using fear.</li>
                                </ol>
                                <p>
                                    I founded <strong>Rich Dad Retirement</strong> to be the middle path. I believe in the philosophy of owning real assets—not just paper. But I also believe in low fees, transparency, and education first.
                                </p>
                            </article>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* What We Do */}
            <section className="py-20 bg-background-subtle border-y border-gray-200">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs">What We Do</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">
                                Honest Education, No Sales Pitch
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <FadeIn delay={0.1}>
                                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                                    <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                                        <BookOpen className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-3">Educational Guides</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We break down complex topics like rollover rules, IRS regulations, and fee structures into plain English. No jargon, no scare tactics—just the facts you need to know.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                                    <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-3">Honest Reviews</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We research Gold IRA companies so you don&apos;t have to wade through fake reviews and marketing fluff. We look at BBB ratings, real customer complaints, fee disclosures, and actual buyback policies.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                                    <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                                        <Target className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-3">Side-by-Side Comparisons</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        Trying to decide between two companies? We put them head-to-head on the things that actually matter: minimum investments, fee transparency, customer service quality, and more.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                                    <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-3">Real Talk About Precious Metals</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        We&apos;ll tell you when a Gold IRA makes sense—and when it doesn&apos;t. We&apos;re not here to convince you gold is the only answer. It&apos;s one tool in a diversified retirement strategy.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How We Make Money */}
            <section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FadeIn delay={0.1}>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
                                How We Keep the Lights On
                            </h2>
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
                                <p className="text-lg text-text-muted leading-relaxed mb-6">
                                    Let&apos;s be upfront about this: we earn referral fees when you request information from one of the Gold IRA companies we review. That&apos;s how we pay for the research, hosting, and content creation that goes into this site.
                                </p>
                                <p className="text-lg text-text-muted leading-relaxed mb-6">
                                    But here&apos;s what makes us different: <strong className="text-primary">we don&apos;t rank companies based on who pays us the most</strong>. Our rankings are based on our research into fees, customer reviews, BBB ratings, and overall value. If a company has problems, we&apos;ll tell you—even if they&apos;re a partner.
                                </p>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    You can read more about our standards in our <Link href="/editorial-policy" className="text-secondary hover:underline font-medium">Editorial Policy</Link>.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <Container>
                    <FadeIn delay={0.2}>
                        <div className="bg-primary rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold">Ready to Learn More?</h2>
                                <p className="text-gray-200">
                                    Start with our beginner&apos;s guide to Gold IRAs. No fluff, no pressure—just the information you need.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" variant="gold" asChild>
                                        <Link href="/guide/gold-ira-guide">
                                            Read the Guide
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                                        <Link href="/reviews">
                                            See Company Reviews
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>
        </main>
    );
}
