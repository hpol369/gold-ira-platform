import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-[#2A2D42] bg-[#0C0D18] text-[#F6F4EF] pt-16 pb-8">
            <Container>
                {/* Top manifesto row */}
                <div className="grid gap-10 lg:grid-cols-[1fr_2fr] mb-12">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.08)]">
                                <span className="font-serif text-xl text-[#D4A94E]">R</span>
                            </div>
                            <div className="leading-tight">
                                <div className="font-serif text-lg text-[#F6F4EF]">Rich Dad Retirement</div>
                                <div className="text-[11px] uppercase tracking-[0.18em] text-[#A8A39A]">
                                    Gold &amp; Silver IRA Guidance
                                </div>
                            </div>
                        </Link>
                        <p className="font-serif italic text-[#D0CCC4] text-[16px] leading-[1.6] max-w-[420px] mb-3">
                            &ldquo;The difference between the rich and the poor is the rich invest their money and spend what&apos;s left — the poor spend their money and invest what&apos;s left.&rdquo;
                        </p>
                        <p className="text-[12px] text-[#7E7A72]">— Rich Dad philosophy</p>

                        <div className="mt-6 flex items-center gap-3 text-sm text-[#A8A39A]">
                            <span className="inline-flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                                Gold <span className="tactical text-[#D4A94E]">$2,348.12</span>
                            </span>
                            <span>·</span>
                            <span className="inline-flex items-center gap-1.5">
                                Silver <span className="tactical text-[#F6F4EF]">$28.41</span>
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <FooterGroup title="Reviews">
                            <FL href="/reviews">All Reviews</FL>
                            <FL href="/reviews/augusta-precious-metals">Augusta Precious Metals</FL>
                            <FL href="/reviews/goldco">Goldco</FL>
                            <FL href="/reviews/american-hartford-gold">American Hartford Gold</FL>
                            <FL href="/reviews/birch-gold">Birch Gold Group</FL>
                            <FL href="/reviews/noble-gold">Noble Gold</FL>
                            <FL href="/reviews/lear-capital">Lear Capital</FL>
                            <FL href="/reviews/goldco-lawsuit-facts">Goldco Lawsuit</FL>
                        </FooterGroup>

                        <FooterGroup title="Compare">
                            <FL href="/compare">All Comparisons</FL>
                            <FL href="/compare/augusta-vs-goldco">Augusta vs Goldco</FL>
                            <FL href="/compare/gold-ira-vs-traditional-ira">Gold IRA vs Traditional IRA</FL>
                            <FL href="/compare/gold-ira-vs-401k">Gold IRA vs 401k</FL>
                            <FL href="/best-gold-ira-companies">Best Gold IRA Companies</FL>
                            <FL href="/best-gold-ira-for">Best For You</FL>
                        </FooterGroup>

                        <FooterGroup title="Tools">
                            <FL href="/tools">All Tools</FL>
                            <FL href="/tools/gold-ira-calculator">Gold IRA Calculator</FL>
                            <FL href="/tools/retirement-calculator">Retirement Calculator</FL>
                            <FL href="/tools/fire-calculator">FIRE Calculator</FL>
                            <FL href="/tools/rmd-calculator">RMD Calculator</FL>
                            <FL href="/tools/social-security-calculator">Social Security</FL>
                            <FL href="/quiz">Find Your Match Quiz</FL>
                        </FooterGroup>

                        <FooterGroup title="Guides">
                            <FL href="/guide/gold-ira-guide">Gold IRA Guide</FL>
                            <FL href="/rollover">Rollover Hub</FL>
                            <FL href="/guide/protect-401k-from-crash">Protect 401k from Crash</FL>
                            <FL href="/guide/gold-ira-for-seniors">Gold IRA for Seniors</FL>
                            <FL href="/silver-ira">Silver IRA Hub</FL>
                            <FL href="/buy-sell-silver">Buy &amp; Sell Silver</FL>
                            <FL href="/crypto-ira">Crypto IRA</FL>
                            <FL href="/self-directed-ira">Self-Directed IRA</FL>
                        </FooterGroup>

                        <FooterGroup title="Learn">
                            <FL href="/scenarios">Crisis Scenarios</FL>
                            <FL href="/learn/are-gold-iras-safe">Are Gold IRAs Safe?</FL>
                            <FL href="/learn/gold-ira-scams">Gold IRA Scams</FL>
                            <FL href="/what-is-a-gold-ira">What is a Gold IRA?</FL>
                            <FL href="/why-gold">Why Gold?</FL>
                            <FL href="/academy">Gold IRA Academy</FL>
                            <FL href="/news">Daily News</FL>
                            <FL href="/faq">FAQ Hub</FL>
                            <FL href="/glossary">Glossary</FL>
                        </FooterGroup>
                    </div>
                </div>

                {/* Popular Calculators */}
                <div className="border-t border-[#2A2D42] pt-7 mb-6">
                    <h3 className="font-serif text-[15px] text-[#F6F4EF] mb-4 tracking-[-0.01em]">Popular Calculators</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <FlatLink href="/tools/retirement-calculator">Retirement</FlatLink>
                        <FlatLink href="/tools/rmd-calculator">RMD</FlatLink>
                        <FlatLink href="/tools/social-security-calculator">Social Security</FlatLink>
                        <FlatLink href="/tools/fire-calculator">FIRE</FlatLink>
                        <FlatLink href="/tools/coast-fire-calculator">Coast FIRE</FlatLink>
                        <FlatLink href="/tools/gold-ira-calculator">Gold IRA</FlatLink>
                        <FlatLink href="/tools/gold-allocation-calculator">Gold Allocation</FlatLink>
                        <FlatLink href="/tools/fers-calculator">FERS</FlatLink>
                        <FlatLink href="/tools/calpers-retirement-calculator">CalPERS</FlatLink>
                        <FlatLink href="/tools/monte-carlo-retirement-simulator">Monte Carlo</FlatLink>
                    </div>
                </div>

                {/* Popular Guides */}
                <div className="border-t border-[#2A2D42] pt-7 mb-6">
                    <h3 className="font-serif text-[15px] text-[#F6F4EF] mb-4 tracking-[-0.01em]">Popular Guides</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <FlatLink href="/scenarios">Crisis Scenarios</FlatLink>
                        <FlatLink href="/guide/401k-alternatives">401k Alternatives</FlatLink>
                        <FlatLink href="/guide/what-to-do-with-old-401k">Old 401k Options</FlatLink>
                        <FlatLink href="/learn/indirect-vs-direct-rollover">Direct vs Indirect Rollover</FlatLink>
                        <FlatLink href="/learn/sequence-of-returns-risk">Sequence-of-Returns Risk</FlatLink>
                        <FlatLink href="/guide/gold-ira-fees">Gold IRA Fees</FlatLink>
                        <FlatLink href="/learn/home-storage-gold-ira">Home Storage Gold IRA</FlatLink>
                    </div>
                </div>

                {/* 401(k) Providers */}
                <div className="border-t border-[#2A2D42] pt-7 mb-6">
                    <h3 className="font-serif text-[15px] text-[#F6F4EF] mb-4 tracking-[-0.01em]">401(k) Provider Rollovers</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <FlatLink href="/learn/t-rowe-price-401k-rollover">T. Rowe Price</FlatLink>
                        <FlatLink href="/learn/transamerica-401k-rollover">Transamerica</FlatLink>
                        <FlatLink href="/learn/paychex-401k-rollover">Paychex</FlatLink>
                        <FlatLink href="/learn/wells-fargo-401k-rollover">Wells Fargo</FlatLink>
                        <FlatLink href="/learn/nationwide-401k-rollover">Nationwide</FlatLink>
                        <FlatLink href="/learn/principal-401k-rollover">Principal</FlatLink>
                        <FlatLink href="/learn/empower-401k-rollover">Empower</FlatLink>
                        <FlatLink href="/learn/voya-401k-rollover">Voya</FlatLink>
                        <FlatLink href="/learn/john-hancock-401k-rollover">John Hancock</FlatLink>
                        <FlatLink href="/learn/adp-401k-rollover">ADP</FlatLink>
                    </div>
                </div>

                {/* Disclosure */}
                <div className="border-t border-[#2A2D42] pt-7 mb-6">
                    <p className="text-[12px] text-[#7E7A72] leading-[1.6] max-w-4xl">
                        <strong className="text-[#A8A39A]">Disclosure:</strong> RichDadRetirement.com is an educational
                        website funded by affiliate partnerships. We may receive compensation from companies like Augusta
                        Precious Metals at no cost to readers. Rankings and reviews remain editorially independent. Not
                        investment advice. Consult a qualified fiduciary before any rollover decision. IRS rules (Pub 590-A)
                        apply to all gold IRA rollovers.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#2A2D42] pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-[#7E7A72]">
                    <p>© {currentYear} Rich Dad Retirement. All rights reserved.</p>
                    <div className="flex flex-wrap gap-5">
                        <Link href="/editorial-policy" className="hover:text-[#D4A94E] transition-colors">Affiliate Disclosure</Link>
                        <Link href="/terms-of-service" className="hover:text-[#D4A94E] transition-colors">Terms of Service</Link>
                        <Link href="/privacy-policy" className="hover:text-[#D4A94E] transition-colors">Privacy Policy</Link>
                        <Link href="/editorial-policy" className="hover:text-[#D4A94E] transition-colors">Editorial Policy</Link>
                        <Link href="/sitemap.xml" className="hover:text-[#D4A94E] transition-colors">Sitemap</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="font-serif text-[15px] text-[#F6F4EF] mb-4 tracking-[-0.01em]">{title}</h3>
            <ul className="space-y-2.5">{children}</ul>
        </div>
    );
}

function FL({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-[13px] text-[#A8A39A] hover:text-[#D4A94E] transition-colors">
                {children}
            </Link>
        </li>
    );
}

function FlatLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-[13px] text-[#A8A39A] hover:text-[#D4A94E] transition-colors">
            {children}
        </Link>
    );
}
