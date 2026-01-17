import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/guide/TableOfContents";
import { Callout } from "@/components/ui/Callout";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArrowRight, CheckCircle2, ShieldCheck, AlertTriangle, Clock, FileText, Building2, Lock, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { SchemaScript } from "@/components/seo/SchemaScript";

export const metadata: Metadata = {
    title: "403(b) to Gold IRA Rollover Guide: For Teachers & Nurses (2026)",
    description: "Complete guide for Teachers, Nurses, and Non-Profit employees. Learn how to roll over your 403(b) / TSA to a Gold IRA tax-free. Avoid annuity surrender charges.",
};

const tocItems = [
    { id: "what-is-403b-rollover", label: "What is a 403(b) Rollover?" },
    { id: "eligibility", label: "Eligibility Rules" },
    { id: "annuity-trap", label: "Warning: The Annuity Trap" },
    { id: "step-by-step", label: "Step-by-Step Process" },
    { id: "tax-benefits", label: "Tax Benefits" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "faq", label: "FAQs" },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "403(b) to Gold IRA Rollover Guide: For Teachers & Nurses",
            "description": "Complete guide for Teachers, Nurses, and Non-Profit employees. Learn how to roll over your 403(b) / TSA to a Gold IRA tax-free. Avoid annuity surrender charges.",
            "image": "https://richdadretirement.com/images/403b-rollover-guide-cover.jpg",
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
                    "name": "Can I roll over my 403(b) without quitting my job?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends. If you are over age 59½, most 403(b) plans allow for 'in-service distributions' or rollovers. If you are under 59½, it is more difficult unless you have funds from a previous employer or qualify for a hardship withdrawal."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will I pay a penalty for moving my 403(b) to Gold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you do a 'Direct Rollover' (trustee-to-trustee), there is no IRS penalty or tax. However, be careful if your 403(b) is invested in an annuity contract—some insurance companies charge 'surrender fees' if you move the money out before a certain number of years."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a TSA the same as a 403(b)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, 'Tax-Sheltered Annuity' (TSA) is the old name for a 403(b) plan. The rules for rolling them over to a Gold IRA are identical."
                    }
                }
            ]
        }
    ]
};

export default function TsaRolloverPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <SchemaScript schema={schema} />
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/50" />
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            For Teachers, Nurses & Non-Profits
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            403(b) to Gold IRA Rollover Guide
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                            How to move your Tax-Sheltered Annuity (TSA) into physical gold. Escape high fees and protect your retirement savings.
                        </p>
                    </div>
                </Container>
            </header>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (TOC) */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-text prose-a:text-secondary max-w-none">

                        <p className="lead text-xl text-text-muted">
                            Teachers and nurses work hard for their retirement. But many 403(b) plans are filled with high-fee insurance products. A <strong>403(b) to Gold IRA rollover</strong> puts you back in control.
                        </p>

                        <p>
                            [Content Placeholder: Introduction to the unique challenges of 403(b) plans, often limited to high-fee annuities.]
                        </p>

                        <Callout type="warning" title="Watch Out for Surrender Charges">
                            Unlike 401(k)s, many 403(b)s are actually annuity contracts. Before you roll over, check if your policy has a "Surrender Charge" schedule (often 5-10 years) that charges a fee for leaving.
                        </Callout>

                        {/* Section 1: What is Rollover */}
                        <section id="what-is-403b-rollover" className="scroll-mt-32">
                            <h2>What is a 403(b) Rollover?</h2>
                            <p>
                                [Content Placeholder: Moving funds from a 403(b)/TSA to a Self-Directed IRA. Explaining that the tax rules are the same as a 401(k).]
                            </p>
                        </section>

                        {/* Section 2: Eligibility */}
                        <section id="eligibility" className="scroll-mt-32">
                            <h2>Eligibility Rules</h2>
                            <p>
                                [Content Placeholder: 1. Left job (Eligible). 2. Age 59.5+ (Eligible). 3. Under 59.5 & Employed (Usually restricted, check plan).]
                            </p>
                        </section>

                        {/* Section 3: The Annuity Trap */}
                        <section id="annuity-trap" className="scroll-mt-32">
                            <h2>Warning: The Annuity Trap</h2>
                            <p>
                                [Content Placeholder: Deep dive into how insurance companies lock teachers into contracts. Why Gold IRAs offer more freedom and lower long-term costs.]
                            </p>
                        </section>

                        {/* Section 4: Step-by-Step */}
                        <section id="step-by-step" className="scroll-mt-32">
                            <h2>Step-by-Step Process</h2>
                            <p>
                                [Content Placeholder: Standard rollover steps 1-5. Specific emphasis on contacting the "Vendor" (insurance co) vs the "School District".]
                            </p>
                        </section>

                        {/* Section 5: Tax Benefits */}
                        <section id="tax-benefits" className="scroll-mt-32">
                            <h2>Tax Benefits</h2>
                            <p>
                                [Content Placeholder: Tax-Deferred growth. No immediate tax bill if done correctly.]
                            </p>
                        </section>

                        {/* Section 6: Mistakes */}
                        <section id="mistakes" className="scroll-mt-32">
                            <h2>Common Mistakes</h2>
                            <p>
                                [Content Placeholder: Trying to move money while under 59.5 without checking rules. Ignoring surrender charges. Indirect rollovers.]
                            </p>
                        </section>

                        {/* Final CTA */}
                        <div className="my-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Take Control of Your 403(b)</h3>
                                <p className="mb-6 text-gray-200 max-w-xl mx-auto">Don't let high fees eat your retirement. See if you qualify for a penalty-free rollover today.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link href="/quiz">Check My Eligibility <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <AuthorBox />

                    </article>
                </div>
            </Container>
        </main>
    );
}
