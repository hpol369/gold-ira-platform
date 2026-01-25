import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-xl font-serif font-bold text-white tracking-tight">
                                Rich<span className="text-secondary">Dad</span>Retirement
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Helping Americans protect their retirement savings with precious metals.
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/best-gold-ira-companies" className="text-gray-400 hover:text-white transition-colors text-sm">Best Companies</Link></li>
                            <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors text-sm">Reviews</Link></li>
                            <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors text-sm">Compare</Link></li>
                            <li><Link href="/rollover" className="text-gray-400 hover:text-white transition-colors text-sm">Rollovers</Link></li>
                            <li><Link href="/best-gold-ira-for" className="text-gray-400 hover:text-white transition-colors text-sm">Best For You</Link></li>
                        </ul>
                    </div>

                    {/* Learn */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Learn</h3>
                        <ul className="space-y-2">
                            <li><Link href="/academy" className="text-gray-400 hover:text-white transition-colors text-sm">Gold IRA Academy</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ Hub</Link></li>
                            <li><Link href="/glossary" className="text-gray-400 hover:text-white transition-colors text-sm">Glossary</Link></li>
                            <li><Link href="/what-is-a-gold-ira" className="text-gray-400 hover:text-white transition-colors text-sm">What is a Gold IRA?</Link></li>
                            <li><Link href="/why-gold" className="text-gray-400 hover:text-white transition-colors text-sm">Why Gold?</Link></li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Tools</h3>
                        <ul className="space-y-2">
                            <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors text-sm">All Tools</Link></li>
                            <li><Link href="/tools/crash-simulator" className="text-gray-400 hover:text-white transition-colors text-sm">Crash Simulator</Link></li>
                            <li><Link href="/tools/rmd-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">RMD Calculator</Link></li>
                            <li><Link href="/tools/fees-comparison" className="text-gray-400 hover:text-white transition-colors text-sm">Fees Comparison</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="/editorial-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Editorial Policy</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link></li>
                        </ul>
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
