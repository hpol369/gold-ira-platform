import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import { Mail, MessageCircle, Clock, HelpCircle } from "lucide-react";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "Contact Us | Rich Dad Retirement - Get in Touch",
    description: "Have questions about Gold IRAs? Contact the Rich Dad Retirement team. We're here to help with your precious metals retirement questions.",
};

const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Rich Dad Retirement",
    "description": "Contact page for Rich Dad Retirement - Gold IRA education and reviews",
    "url": "https://richdadretirement.com/contact"
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-900 pb-24">
            <SchemaScript schema={schema} />

            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/40" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <span className="inline-block text-secondary font-bold tracking-widest uppercase text-xs">
                                Get in Touch
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Contact Us
                            </h1>
                            <p className="text-xl text-gray-200 font-light leading-relaxed">
                                Got a question? Found an error on our site? Just want to say hi? We actually read every message.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Contact Options */}
            <section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <FadeIn delay={0.1}>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                                    <div className="h-12 w-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-6">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-xl font-bold font-serif text-white mb-3">Email Us</h2>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        For general questions, corrections, or feedback, drop us a line. We try to respond within a couple business days.
                                    </p>
                                    <a
                                        href="mailto:hello@richdadretirement.com"
                                        className="text-amber-400 font-semibold hover:underline"
                                    >
                                        hello@richdadretirement.com
                                    </a>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                                    <div className="h-12 w-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-6">
                                        <MessageCircle className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-xl font-bold font-serif text-white mb-3">Partnership Inquiries</h2>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        Are you with a Gold IRA company interested in being reviewed? We&apos;re selective, but we&apos;re always open to hearing from reputable businesses.
                                    </p>
                                    <a
                                        href="mailto:partners@richdadretirement.com"
                                        className="text-amber-400 font-semibold hover:underline"
                                    >
                                        partners@richdadretirement.com
                                    </a>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Before You Reach Out */}
                        <FadeIn delay={0.3}>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="h-10 w-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <HelpCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold font-serif text-white mb-2">Before You Reach Out</h2>
                                        <p className="text-slate-400">
                                            You might find your answer faster in one of these places:
                                        </p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Link
                                        href="/guide/gold-ira-guide"
                                        className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all group"
                                    >
                                        <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">Gold IRA Guide</h3>
                                        <p className="text-sm text-slate-400">Everything you need to know about Gold IRAs, from start to finish.</p>
                                    </Link>

                                    <Link
                                        href="/learn/gold-ira-scams"
                                        className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all group"
                                    >
                                        <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">Scam Prevention Guide</h3>
                                        <p className="text-sm text-slate-400">Red flags to watch for and how to protect yourself.</p>
                                    </Link>

                                    <Link
                                        href="/guide/gold-ira-fees"
                                        className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all group"
                                    >
                                        <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">Fee Breakdown</h3>
                                        <p className="text-sm text-slate-400">What fees are normal and what&apos;s a ripoff.</p>
                                    </Link>

                                    <Link
                                        href="/reviews"
                                        className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all group"
                                    >
                                        <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">Company Reviews</h3>
                                        <p className="text-sm text-slate-400">Our honest reviews of the top Gold IRA providers.</p>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Important Note */}
                        <FadeIn delay={0.4}>
                            <div className="mt-12 text-center">
                                <div className="inline-flex items-center gap-2 text-slate-400 bg-white/5 border border-white/10 rounded-full px-5 py-3">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-sm">We typically respond within 1-2 business days</span>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Disclaimer */}
                        <FadeIn delay={0.5}>
                            <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                                <p className="text-sm text-amber-300 leading-relaxed">
                                    <strong className="text-amber-400">Please note:</strong> We&apos;re an educational website, not a Gold IRA company. We can&apos;t help you set up an account, process rollovers, or provide personalized financial advice. For those services, you&apos;ll want to contact one of the companies in our <Link href="/reviews" className="underline hover:no-underline text-amber-400">reviews section</Link> directly.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>
        </main>
    );
}
