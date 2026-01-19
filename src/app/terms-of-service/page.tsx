import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Rich Dad Retirement",
    description: "Read the terms of service for Rich Dad Retirement. Understanding these terms is essential before using our Gold IRA educational resources and guides.",
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            {/* Header */}
            <header className="bg-background-subtle py-16 border-b border-primary/5">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                                Terms of Service
                            </h1>
                            <p className="text-text-muted">
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
                        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">

                            <p className="lead text-lg text-text-muted">
                                By using Rich Dad Retirement, you agree to these terms. We&apos;ve tried to make them readable while still covering the legal bases. If something doesn&apos;t make sense, feel free to ask.
                            </p>

                            <h2>The Short Version</h2>
                            <p>
                                We&apos;re an educational website about Gold IRAs. We don&apos;t sell gold, manage investments, or give personalized financial advice. Our content is for informational purposes only. When you click through to a Gold IRA company, you&apos;re dealing with them, not us. Use common sense, do your own research, and consult a financial advisor before making investment decisions.
                            </p>

                            <h2>About Our Site</h2>
                            <p>
                                Rich Dad Retirement provides educational content about Gold IRAs, precious metals investing, and retirement planning. We also review and compare Gold IRA companies to help you make informed decisions.
                            </p>
                            <p>
                                We are <strong>not</strong>:
                            </p>
                            <ul>
                                <li>A registered investment advisor</li>
                                <li>A broker-dealer</li>
                                <li>A Gold IRA company</li>
                                <li>Licensed to give personalized financial advice</li>
                            </ul>
                            <p>
                                Our content is general education, not personalized recommendations. Your financial situation is unique, and what works for one person may not work for you.
                            </p>

                            <h2>Affiliate Disclosure</h2>
                            <p>
                                Let&apos;s be upfront: we make money through affiliate relationships. When you request information from a Gold IRA company through our site, we may receive a referral fee. This is how we keep the lights on.
                            </p>
                            <p>
                                That said, we don&apos;t let affiliate relationships dictate our rankings or recommendations. We rank companies based on our research, not based on who pays us the most. If a company has problems, we&apos;ll say so—even if they&apos;re a partner.
                            </p>
                            <p>
                                For more details, see our <Link href="/editorial-policy" className="text-secondary hover:underline">Editorial Policy</Link>.
                            </p>

                            <h2>No Investment Advice</h2>
                            <p>
                                This is important, so we&apos;re saying it clearly: <strong>nothing on this site is investment advice</strong>.
                            </p>
                            <p>
                                Our articles, guides, and reviews are educational. They&apos;re meant to help you understand your options—not tell you what to do with your money. Before making any investment decision, you should:
                            </p>
                            <ul>
                                <li>Do your own research</li>
                                <li>Consider your personal financial situation</li>
                                <li>Consult with a qualified financial advisor or tax professional</li>
                            </ul>
                            <p>
                                Investing involves risk. The value of gold and other precious metals can go down as well as up. Past performance doesn&apos;t guarantee future results.
                            </p>

                            <h2>Third-Party Companies</h2>
                            <p>
                                When you click a link to a Gold IRA company or submit your information through our site to request a free kit or consultation, you&apos;re dealing directly with that company—not with us.
                            </p>
                            <p>
                                We do our best to vet the companies we feature, but we can&apos;t control:
                            </p>
                            <ul>
                                <li>Their sales practices</li>
                                <li>Their fees or pricing</li>
                                <li>The quality of their service</li>
                                <li>How they handle your personal information</li>
                            </ul>
                            <p>
                                Before doing business with any company, review their terms, disclosures, and privacy policies. If a salesperson makes you uncomfortable or pressures you, walk away.
                            </p>

                            <h2>Accuracy of Information</h2>
                            <p>
                                We do our best to keep our content accurate and up to date. But things change—fees change, company policies change, regulations change. While we regularly review and update our content, we can&apos;t guarantee that every piece of information is current at the moment you read it.
                            </p>
                            <p>
                                If you spot an error, please <Link href="/contact" className="text-secondary hover:underline">let us know</Link> and we&apos;ll correct it.
                            </p>

                            <h2>Intellectual Property</h2>
                            <p>
                                The content on this site—articles, graphics, logos, and design—belongs to Rich Dad Retirement unless otherwise noted. You&apos;re welcome to share links to our content, but please don&apos;t copy or republish our articles without permission.
                            </p>
                            <p>
                                &quot;Rich Dad Retirement&quot; is our brand name. We&apos;re not affiliated with Rich Dad, Poor Dad or Robert Kiyosaki. Our name reflects a philosophy of financial education, not an official partnership.
                            </p>

                            <h2>User Conduct</h2>
                            <p>
                                When using our site, please don&apos;t:
                            </p>
                            <ul>
                                <li>Submit false information through our forms</li>
                                <li>Attempt to access restricted areas of our site</li>
                                <li>Use automated tools to scrape our content</li>
                                <li>Engage in any activity that could harm our site or other users</li>
                            </ul>
                            <p>
                                We reserve the right to block access to anyone who violates these terms.
                            </p>

                            <h2>Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Rich Dad Retirement is not liable for any damages arising from your use of our site or your reliance on our content. This includes direct, indirect, incidental, or consequential damages—whether from investment decisions, dealings with third-party companies, or anything else.
                            </p>
                            <p>
                                We provide this site &quot;as is&quot; without warranties of any kind. We don&apos;t guarantee that the site will be error-free or always available.
                            </p>

                            <h2>Governing Law</h2>
                            <p>
                                These terms are governed by the laws of the United States. Any disputes will be resolved in the courts of Delaware.
                            </p>

                            <h2>Changes to These Terms</h2>
                            <p>
                                We may update these terms from time to time. When we do, we&apos;ll update the &quot;Last updated&quot; date at the top. Continued use of the site after changes means you accept the new terms.
                            </p>

                            <h2>Contact</h2>
                            <p>
                                Questions about these terms? Email us at <a href="mailto:legal@richdadretirement.com" className="text-secondary hover:underline">legal@richdadretirement.com</a> or visit our <Link href="/contact" className="text-secondary hover:underline">contact page</Link>.
                            </p>

                        </article>
                    </FadeIn>
                </div>
            </Container>
        </main>
    );
}
