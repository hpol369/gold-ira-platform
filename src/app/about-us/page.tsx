import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import { ShieldCheck, Users, Target, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
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
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <span className="inline-block text-secondary font-bold tracking-widest uppercase text-xs">
                                Our Story
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                About Rich Dad Retirement
                            </h1>
                            <p className="text-xl text-gray-200 font-light leading-relaxed">
                                We built this site because we got tired of seeing people get ripped off by high-pressure Gold IRA salespeople.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Why We Started */}
            <section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FadeIn delay={0.1}>
                            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                                    Why We Started This Site
                                </h2>
                                <p className="text-lg text-text-muted leading-relaxed mb-6">
                                    A few years ago, my father got a cold call from a Gold IRA company. The salesperson was smooth—talked about the coming dollar collapse, showed him scary charts, and pushed him to move his entire 401(k) into gold. He almost did it.
                                </p>
                                <p className="text-lg text-text-muted leading-relaxed mb-6">
                                    When I looked into the company, I found a trail of complaints, hidden fees, and unhappy customers. The company wasn&apos;t even one of the better ones out there—they were just aggressive marketers who happened to call at the right time.
                                </p>
                                <p className="text-lg text-text-muted leading-relaxed mb-6">
                                    That experience made me realize something: most people researching Gold IRAs have no idea how to separate the good companies from the bad ones. They don&apos;t know what fees are reasonable. They don&apos;t understand how rollovers work. And they&apos;re being bombarded by sales pitches disguised as education.
                                </p>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    So we built Rich Dad Retirement. Not to sell you gold—but to give you the information you need to make your own decision.
                                </p>
                            </div>
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
