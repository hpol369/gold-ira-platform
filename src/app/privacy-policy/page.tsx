import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Rich Dad Retirement",
    description: "Privacy policy for Rich Dad Retirement. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white pb-24">
            {/* Header */}
            <header className="bg-slate-50 py-16 border-b border-slate-200">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#000080] mb-4">
                                Privacy Policy
                            </h1>
                            <p className="text-slate-500">
                                Last updated: January 2026
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </header>

            {/* Content */}
            <Container className="py-12">
                <div className="max-w-3xl mx-auto">
                    <FadeIn delay={0.1}>
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 max-w-none">

                            <p className="lead text-lg text-slate-600">
                                We take your privacy seriously. This policy explains what information we collect, how we use it, and your rights regarding your personal data. We try to keep this straightforward—no legalese buried in footnotes.
                            </p>

                            <h2>Who We Are</h2>
                            <p>
                                Rich Dad Retirement is an educational website focused on Gold IRA investing. We&apos;re located in the United States. When you visit our site or use our services, you&apos;re trusting us with your information, and we don&apos;t take that lightly.
                            </p>

                            <h2>Information We Collect</h2>

                            <h3>Information You Give Us</h3>
                            <p>When you fill out forms on our site (like our quiz or contact form), you may provide:</p>
                            <ul>
                                <li>Your name</li>
                                <li>Email address</li>
                                <li>Phone number (if you choose to provide it)</li>
                                <li>General information about your retirement goals</li>
                            </ul>
                            <p>
                                We only ask for what we need. If a field seems optional, it usually is.
                            </p>

                            <h3>Information We Collect Automatically</h3>
                            <p>Like most websites, we collect certain information automatically when you visit:</p>
                            <ul>
                                <li><strong>Device information:</strong> Browser type, operating system, screen size</li>
                                <li><strong>Usage data:</strong> Pages you visit, time spent on site, how you got here</li>
                                <li><strong>IP address:</strong> Used for general location (country/region level) and security</li>
                            </ul>
                            <p>
                                We use cookies and similar technologies for this. More on that below.
                            </p>

                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Connect you with Gold IRA companies you&apos;ve expressed interest in</li>
                                <li>Respond to your questions or feedback</li>
                                <li>Improve our website and content</li>
                                <li>Understand which articles and resources are most helpful</li>
                                <li>Prevent fraud and protect our site</li>
                            </ul>
                            <p>
                                We don&apos;t sell your personal information to third parties. Period.
                            </p>

                            <h2>Sharing Your Information</h2>
                            <p>We share your information in limited circumstances:</p>

                            <h3>Gold IRA Companies</h3>
                            <p>
                                When you request information from a Gold IRA company through our site, we share your contact information with that specific company so they can follow up with you. This is the whole point of the service—connecting you with companies you want to hear from.
                            </p>

                            <h3>Service Providers</h3>
                            <p>
                                We work with companies that help us run our website (hosting, analytics, email). They only access your information as needed to provide their services and are bound by confidentiality agreements.
                            </p>

                            <h3>Legal Requirements</h3>
                            <p>
                                We may disclose your information if required by law, such as in response to a subpoena or court order.
                            </p>

                            <h2>Cookies and Tracking</h2>
                            <p>
                                We use cookies (small text files stored on your device) and similar technologies for several purposes:
                            </p>
                            <ul>
                                <li><strong>Essential cookies:</strong> Keep the site functioning properly</li>
                                <li><strong>Analytics cookies:</strong> Help us understand how people use our site</li>
                                <li><strong>Advertising cookies:</strong> Used to show relevant ads and track conversions</li>
                            </ul>
                            <p>
                                Most browsers let you control cookies through their settings. You can refuse or delete cookies, but some parts of our site may not work properly without them.
                            </p>

                            <h2>Third-Party Links</h2>
                            <p>
                                Our site contains links to Gold IRA companies and other external websites. Once you leave our site, you&apos;re subject to their privacy policies, not ours. We encourage you to read their policies before sharing your information.
                            </p>

                            <h2>Your Rights</h2>
                            <p>Depending on where you live, you may have certain rights regarding your personal data:</p>
                            <ul>
                                <li><strong>Access:</strong> Request a copy of the information we have about you</li>
                                <li><strong>Correction:</strong> Ask us to fix inaccurate information</li>
                                <li><strong>Deletion:</strong> Request that we delete your information</li>
                                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                            </ul>
                            <p>
                                To exercise these rights, contact us at <a href="mailto:privacy@richdadretirement.com" className="text-[#B22234] hover:underline">privacy@richdadretirement.com</a>.
                            </p>

                            <h2>California Residents</h2>
                            <p>
                                If you&apos;re a California resident, the California Consumer Privacy Act (CCPA) gives you additional rights, including the right to know what personal information we collect and the right to opt out of the &quot;sale&quot; of your information (as defined by CCPA).
                            </p>
                            <p>
                                When we share your information with Gold IRA companies at your request, this may be considered a &quot;sale&quot; under CCPA. To opt out, email us at <a href="mailto:privacy@richdadretirement.com" className="text-[#B22234] hover:underline">privacy@richdadretirement.com</a> with the subject line &quot;CCPA Opt-Out.&quot;
                            </p>

                            <h2>Data Security</h2>
                            <p>
                                We use reasonable security measures to protect your information, including encryption for data in transit (HTTPS) and secure hosting. However, no method of transmission over the internet is 100% secure, and we can&apos;t guarantee absolute security.
                            </p>

                            <h2>Children&apos;s Privacy</h2>
                            <p>
                                Our site is not intended for anyone under 18. We don&apos;t knowingly collect information from children. If you believe a child has provided us with personal information, please contact us and we&apos;ll delete it.
                            </p>

                            <h2>Changes to This Policy</h2>
                            <p>
                                We may update this policy from time to time. When we make significant changes, we&apos;ll update the &quot;Last updated&quot; date at the top. We encourage you to review this policy periodically.
                            </p>

                            <h2>Contact Us</h2>
                            <p>
                                Questions about this privacy policy? Reach out:
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:privacy@richdadretirement.com" className="text-[#B22234] hover:underline">privacy@richdadretirement.com</a>
                            </p>
                            <p>
                                You can also visit our <Link href="/contact" className="text-[#B22234] hover:underline">contact page</Link> for other ways to get in touch.
                            </p>

                        </article>
                    </FadeIn>
                </div>
            </Container>
        </main>
    );
}
