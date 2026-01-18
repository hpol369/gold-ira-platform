import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Editorial Policy | Rich Dad Retirement - How We Review Companies",
    description: "Learn how Rich Dad Retirement reviews Gold IRA companies. Our methodology, standards, and commitment to honest, unbiased reviews.",
};

export default function EditorialPolicyPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                                Editorial Policy
                            </h1>
                            <p className="text-lg text-text-muted">
                                How we research, review, and rank Gold IRA companies
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </header>

            {/* Content */}
            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <FadeIn delay={0.1}>
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                            <p className="lead text-lg text-text-muted">
                                We built Rich Dad Retirement because finding honest information about Gold IRAs is harder than it should be. Most review sites are just sales funnels in disguise. We wanted to do better.
                            </p>

                            <h2>Our Approach</h2>
                            <p>
                                We approach every company review with one question: if my own family were considering this company, what would I want them to know? That means highlighting both the good and the bad—even when it&apos;s uncomfortable.
                            </p>

                            <h2>How We Research Companies</h2>
                            <p>
                                Before writing about any Gold IRA company, we dig into multiple sources:
                            </p>

                            <h3>Official Sources</h3>
                            <ul>
                                <li><strong>Better Business Bureau (BBB):</strong> We check ratings, accreditation status, complaint history, and how companies respond to issues</li>
                                <li><strong>Business Consumer Alliance (BCA):</strong> Another layer of consumer complaint data</li>
                                <li><strong>State regulatory filings:</strong> When available, we look at business registrations and any regulatory actions</li>
                            </ul>

                            <h3>Customer Feedback</h3>
                            <ul>
                                <li><strong>Trustpilot and Google Reviews:</strong> We read through customer experiences, looking for patterns in both praise and complaints</li>
                                <li><strong>Forums and discussion boards:</strong> Real conversations from actual customers often reveal things polished reviews don&apos;t</li>
                                <li><strong>Complaint boards:</strong> Sites like Ripoff Report and Consumer Affairs can surface issues that don&apos;t show up elsewhere</li>
                            </ul>

                            <h3>Company Information</h3>
                            <ul>
                                <li><strong>Fee disclosures:</strong> We document setup fees, annual fees, storage costs, and any other charges</li>
                                <li><strong>Minimum investments:</strong> Important for knowing if a company is even an option for you</li>
                                <li><strong>Buyback policies:</strong> How easy is it to sell your metals back when you need to?</li>
                                <li><strong>Product selection:</strong> What coins and bars do they actually offer?</li>
                            </ul>

                            <h2>What We Look For</h2>

                            <div className="not-prose my-8 space-y-4">
                                <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-green-900 mb-1">Green Flags</h4>
                                        <ul className="text-sm text-green-800 space-y-1">
                                            <li>Clear, upfront fee disclosures</li>
                                            <li>Strong BBB rating (A or higher) with good complaint resolution</li>
                                            <li>No high-pressure sales tactics</li>
                                            <li>Competitive buyback programs</li>
                                            <li>Long track record in the industry</li>
                                            <li>Educational approach to sales</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-red-900 mb-1">Red Flags</h4>
                                        <ul className="text-sm text-red-800 space-y-1">
                                            <li>Hidden or unclear fees</li>
                                            <li>Aggressive cold calling or scare tactics</li>
                                            <li>Pushing &quot;rare&quot; or &quot;exclusive&quot; coins with huge markups</li>
                                            <li>Pattern of unresolved complaints</li>
                                            <li>Promises of guaranteed returns</li>
                                            <li>Pressure to move your entire retirement into gold</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2>How Rankings Work</h2>
                            <p>
                                Our rankings are based on weighted criteria. Here&apos;s roughly how we think about it:
                            </p>
                            <ul>
                                <li><strong>Fees and transparency (30%):</strong> Are fees clearly disclosed? Are they competitive?</li>
                                <li><strong>Customer experience (25%):</strong> What do actual customers say? How does the company handle problems?</li>
                                <li><strong>Reputation (20%):</strong> BBB rating, years in business, regulatory history</li>
                                <li><strong>Education and sales approach (15%):</strong> Do they educate or just sell? Are they pushy?</li>
                                <li><strong>Product selection and buyback (10%):</strong> Good variety? Fair buyback terms?</li>
                            </ul>
                            <p>
                                These aren&apos;t rigid formulas—some judgment is always involved. A company with great fees but terrible customer service won&apos;t rank well.
                            </p>

                            <h2>About Our Affiliate Relationships</h2>
                            <p>
                                Here&apos;s the part most review sites don&apos;t want to talk about: we earn referral fees when you request information from Gold IRA companies through our site. That&apos;s our business model.
                            </p>
                            <p>
                                But we draw a clear line: <strong>affiliate relationships do not influence our rankings.</strong> We don&apos;t rank companies higher because they pay us more. We don&apos;t hide problems to protect partnerships. If we think a company has issues, we say so.
                            </p>
                            <p>
                                Why should you believe that? Because long-term, our reputation is worth more than any single referral fee. If we steered people toward bad companies, word would get out and our site would become worthless.
                            </p>

                            <div className="not-prose my-8">
                                <div className="flex items-start gap-4 p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">A Note About Sponsored Content</h4>
                                        <p className="text-sm text-amber-800">
                                            We don&apos;t accept payment for better reviews or rankings. Companies can&apos;t pay to be featured more prominently or to have negative information removed. If we ever publish sponsored content (like a company-provided article), it will be clearly labeled as such.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2>Staying Current</h2>
                            <p>
                                The Gold IRA industry changes. Companies improve, companies slip, fees change, lawsuits happen. We try to keep our content current by:
                            </p>
                            <ul>
                                <li>Regularly reviewing and updating our company pages</li>
                                <li>Monitoring news and regulatory announcements</li>
                                <li>Tracking changes in BBB ratings and complaint volumes</li>
                                <li>Listening to reader feedback about their experiences</li>
                            </ul>
                            <p>
                                That said, we&apos;re a small team and can&apos;t catch everything instantly. If you notice something outdated or incorrect, please <Link href="/contact" className="text-secondary hover:underline">let us know</Link>.
                            </p>

                            <h2>Corrections Policy</h2>
                            <p>
                                We make mistakes. When we do, we fix them. Our approach to corrections:
                            </p>
                            <ul>
                                <li><strong>Factual errors:</strong> We correct them as soon as we&apos;re aware, with a note explaining what changed</li>
                                <li><strong>Outdated information:</strong> We update it and change the &quot;last updated&quot; date</li>
                                <li><strong>Disputed claims:</strong> If a company disputes our characterization, we&apos;ll review the evidence and update if warranted</li>
                            </ul>
                            <p>
                                We don&apos;t quietly edit negative information just because a company complains. If their complaint is valid, we&apos;ll fix it. If it&apos;s not, the information stays.
                            </p>

                            <h2>What We Won&apos;t Do</h2>
                            <ul>
                                <li>Accept payment for better rankings or reviews</li>
                                <li>Remove accurate negative information because a company asks us to</li>
                                <li>Pretend we have no financial interest in the companies we review</li>
                                <li>Give personalized investment advice (we&apos;re not licensed for that)</li>
                                <li>Guarantee that any company will give you a good experience</li>
                            </ul>

                            <h2>Questions?</h2>
                            <p>
                                If you have questions about our editorial process or want to report a concern, email us at <a href="mailto:editorial@richdadretirement.com" className="text-secondary hover:underline">editorial@richdadretirement.com</a>.
                            </p>

                        </article>
                    </FadeIn>
                </div>
            </Container>
        </main>
    );
}
