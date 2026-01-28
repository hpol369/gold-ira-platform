import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#000080] text-white pt-16 pb-8">
            <Container>
                {/* Main Footer Grid - 6 columns on large screens */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-xl font-serif font-bold text-white tracking-tight">
                                Rich<span className="text-secondary">Dad</span>Retirement
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Helping Americans protect their retirement savings with precious metals.
                        </p>
                    </div>

                    {/* Reviews Section */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Reviews</h3>
                        <ul className="space-y-2">
                            <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors text-sm">All Reviews</Link></li>
                            <li><Link href="/reviews/augusta-precious-metals" className="text-gray-400 hover:text-white transition-colors text-sm">Augusta Precious Metals</Link></li>
                            <li><Link href="/reviews/goldco" className="text-gray-400 hover:text-white transition-colors text-sm">Goldco</Link></li>
                            <li><Link href="/reviews/american-hartford-gold" className="text-gray-400 hover:text-white transition-colors text-sm">American Hartford Gold</Link></li>
                            <li><Link href="/reviews/birch-gold" className="text-gray-400 hover:text-white transition-colors text-sm">Birch Gold Group</Link></li>
                            <li><Link href="/reviews/noble-gold" className="text-gray-400 hover:text-white transition-colors text-sm">Noble Gold</Link></li>
                            <li><Link href="/reviews/lear-capital" className="text-gray-400 hover:text-white transition-colors text-sm">Lear Capital</Link></li>
                            <li><Link href="/reviews/advantage-gold-complaints" className="text-gray-400 hover:text-white transition-colors text-sm">Advantage Gold Complaints</Link></li>
                            <li><Link href="/reviews/goldco-lawsuit-facts" className="text-gray-400 hover:text-white transition-colors text-sm">Goldco Lawsuit Facts</Link></li>
                        </ul>
                    </div>

                    {/* Guides Section */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Guides</h3>
                        <ul className="space-y-2">
                            <li><Link href="/guide/gold-ira-guide" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Guide</Link></li>
                            <li><Link href="/guide/protect-401k-from-crash" className="text-gray-400 hover:text-white transition-colors text-sm">Protect 401k from Crash</Link></li>
                            <li><Link href="/rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Rollover Guide</Link></li>
                            <li><Link href="/guide/tsp-to-gold-ira-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">TSP to Gold IRA Rollover</Link></li>
                            <li><Link href="/guide/gold-ira-for-seniors" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA for Seniors</Link></li>
                            <li><Link href="/guide/gold-ira-minimum-investment" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Minimum Investment</Link></li>
                            <li><Link href="/crypto-ira" className="text-gray-400 hover:text-white transition-colors text-sm">Crypto IRA Guide</Link></li>
                            <li><Link href="/self-directed-ira" className="text-gray-400 hover:text-white transition-colors text-sm">Self-Directed IRA</Link></li>
                        </ul>
                        <h3 className="font-semibold text-white mb-4 mt-6 text-sm">Silver Guides</h3>
                        <ul className="space-y-2">
                            <li><Link href="/silver-ira" className="text-gray-400 hover:text-white transition-colors text-sm">Silver IRA Hub</Link></li>
                            <li><Link href="/silver-retirement" className="text-gray-400 hover:text-white transition-colors text-sm">Silver Retirement Planning</Link></li>
                            <li><Link href="/silver-coin-values" className="text-gray-400 hover:text-white transition-colors text-sm">Silver Coin Values</Link></li>
                            <li><Link href="/silver-dealer-reviews" className="text-gray-400 hover:text-white transition-colors text-sm">Silver Dealer Reviews</Link></li>
                            <li><Link href="/buy-sell-silver" className="text-gray-400 hover:text-white transition-colors text-sm">Buy & Sell Silver Guide</Link></li>
                            <li><Link href="/silver-products" className="text-gray-400 hover:text-white transition-colors text-sm">Silver Products Guide</Link></li>
                            <li><Link href="/silver-price" className="text-gray-400 hover:text-white transition-colors text-sm">Silver Price Predictions</Link></li>
                            <li><Link href="/silver-squeeze" className="text-gray-400 hover:text-white transition-colors text-sm">Silver Squeeze Hub</Link></li>
                            <li><Link href="/best-silver-ira-companies" className="text-gray-400 hover:text-white transition-colors text-sm">Best Silver IRA Companies</Link></li>
                        </ul>
                    </div>

                    {/* Compare Section */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Compare</h3>
                        <ul className="space-y-2">
                            <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors text-sm">All Comparisons</Link></li>
                            <li><Link href="/compare/augusta-vs-goldco" className="text-gray-400 hover:text-white transition-colors text-sm">Augusta vs Goldco</Link></li>
                            <li><Link href="/compare/gold-ira-vs-traditional-ira" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA vs Traditional IRA</Link></li>
                            <li><Link href="/compare/gold-ira-vs-401k" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA vs 401k</Link></li>
                            <li><Link href="/best-gold-ira-companies" className="text-gray-400 hover:text-white transition-colors text-sm">Best Gold IRA Companies</Link></li>
                            <li><Link href="/best-gold-ira-for" className="text-gray-400 hover:text-white transition-colors text-sm">Best For You</Link></li>
                            <li><Link href="/rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Rollovers</Link></li>
                        </ul>
                    </div>

                    {/* Learn Section */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Learn</h3>
                        <ul className="space-y-2">
                            <li><Link href="/learn/are-gold-iras-safe" className="text-gray-400 hover:text-white transition-colors text-sm">Are Gold IRAs Safe?</Link></li>
                            <li><Link href="/learn/gold-ira-scams" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Scams</Link></li>
                            <li><Link href="/learn/checkbook-ira-rules" className="text-gray-400 hover:text-white transition-colors text-sm">Checkbook IRA Rules</Link></li>
                            <li><Link href="/what-is-a-gold-ira" className="text-gray-400 hover:text-white transition-colors text-sm">What is a Gold IRA?</Link></li>
                            <li><Link href="/why-gold" className="text-gray-400 hover:text-white transition-colors text-sm">Why Gold?</Link></li>
                            <li><Link href="/academy" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Academy</Link></li>
                            <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm">Daily News Briefing</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ Hub</Link></li>
                            <li><Link href="/glossary" className="text-gray-400 hover:text-white transition-colors text-sm">Glossary</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Company Section */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">All Resources</Link></li>
                            <li><Link href="/local" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA by State</Link></li>
                            <li><Link href="/investigative-hub" className="text-gray-400 hover:text-white transition-colors text-sm">Investigative Hub</Link></li>
                            <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors text-sm">Tools & Calculators</Link></li>
                            <li><Link href="/quiz" className="text-gray-400 hover:text-white transition-colors text-sm">Find Your Match Quiz</Link></li>
                            <li><Link href="/robs-401k" className="text-gray-400 hover:text-white transition-colors text-sm">ROBS 401k Guide</Link></li>
                            <li><Link href="/real-estate-ira" className="text-gray-400 hover:text-white transition-colors text-sm">Real Estate IRA</Link></li>
                            <li><Link href="/solo-401k" className="text-gray-400 hover:text-white transition-colors text-sm">Solo 401k Guide</Link></li>
                        </ul>
                        <h3 className="font-semibold text-white mb-4 mt-6 text-sm">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="/editorial-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Editorial Policy</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Secondary Footer - Popular Tools */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <h3 className="font-semibold text-white mb-4 text-sm">Popular Calculators</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="/tools/retirement-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">Retirement Calculator</Link>
                        <Link href="/tools/rmd-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">RMD Calculator</Link>
                        <Link href="/tools/social-security-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">Social Security Calculator</Link>
                        <Link href="/tools/fire-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">FIRE Calculator</Link>
                        <Link href="/tools/coast-fire-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">Coast FIRE Calculator</Link>
                        <Link href="/tools/gold-ira-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Calculator</Link>
                        <Link href="/tools/gold-allocation-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">Gold Allocation Calculator</Link>
                        <Link href="/tools/fers-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">FERS Calculator</Link>
                        <Link href="/tools/calpers-retirement-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">CalPERS Calculator</Link>
                    </div>
                </div>

                {/* Popular Guides */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <h3 className="font-semibold text-white mb-4 text-sm">Popular Guides</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="/scenarios" className="text-gray-400 hover:text-white transition-colors text-sm">Crisis Scenarios</Link>
                        <Link href="/guide/401k-alternatives" className="text-gray-400 hover:text-white transition-colors text-sm">401k Alternatives</Link>
                        <Link href="/guide/what-to-do-with-old-401k" className="text-gray-400 hover:text-white transition-colors text-sm">What to Do with Old 401k</Link>
                        <Link href="/learn/qualified-longevity-annuity-contract" className="text-gray-400 hover:text-white transition-colors text-sm">QLAC Guide</Link>
                        <Link href="/learn/variable-percentage-withdrawal" className="text-gray-400 hover:text-white transition-colors text-sm">VPW Strategy</Link>
                        <Link href="/learn/fixed-vs-variable-annuity" className="text-gray-400 hover:text-white transition-colors text-sm">Annuity Comparison</Link>
                        <Link href="/learn/indirect-vs-direct-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Direct vs Indirect Rollover</Link>
                    </div>
                </div>

                {/* 401k Provider Rollovers */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <h3 className="font-semibold text-white mb-4 text-sm">401(k) Provider Rollovers</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="/learn/t-rowe-price-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">T. Rowe Price</Link>
                        <Link href="/learn/transamerica-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Transamerica</Link>
                        <Link href="/learn/paychex-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Paychex</Link>
                        <Link href="/learn/wells-fargo-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Wells Fargo</Link>
                        <Link href="/learn/nationwide-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Nationwide</Link>
                        <Link href="/learn/principal-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Principal</Link>
                        <Link href="/learn/empower-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Empower</Link>
                        <Link href="/learn/voya-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Voya</Link>
                        <Link href="/learn/john-hancock-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">John Hancock</Link>
                        <Link href="/learn/adp-401k-rollover" className="text-gray-400 hover:text-white transition-colors text-sm">ADP</Link>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
                        <strong className="text-gray-400">Disclosure:</strong> RichDadRetirement.com is an educational website funded by affiliate partnerships. We may receive compensation from companies like Augusta Precious Metals. This may influence which companies we feature. All investments involve risk. Consult a qualified financial advisor before making investment decisions.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {currentYear} Rich Dad Retirement. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/editorial-policy" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
