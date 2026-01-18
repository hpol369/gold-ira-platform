import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-serif font-bold text-white tracking-tight">
                                Rich<span className="text-secondary">Dad</span>Retirement
                            </span>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Helping Americans protect their retirement savings with precious metals backed IRAs. Independent, transparent, and trusted.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/best-gold-ira-companies" className="text-gray-300 hover:text-white transition-colors text-sm">Best Gold IRA Companies</Link></li>
                            <li><Link href="/reviews" className="text-gray-300 hover:text-white transition-colors text-sm">Company Reviews</Link></li>
                            <li><Link href="/guide/gold-ira-guide" className="text-gray-300 hover:text-white transition-colors text-sm">Gold IRA Guide</Link></li>
                            <li><Link href="/quiz" className="text-gray-300 hover:text-white transition-colors text-sm">Gold IRA Quiz</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="/editorial-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Editorial Policy</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Disclaimer (Small & Legal) */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Important Disclosure</h3>
                        <div className="text-xs sm:text-sm text-gray-400 leading-relaxed text-balance space-y-4">
                            <p>
                                <strong>We are not financial advisors.</strong> RichDadRetirement.com is an educational website funded by referral fees.
                            </p>
                            <p>
                                We may receive meaningful compensation from the companies we review and recommend (such as Augusta Precious Metals or Goldco). This compensation may influence which companies we review and where they appear on the site.
                            </p>
                            <p>
                                All investments involve risk, including the loss of principal. Gold is not guaranteed to go up. Always consult with a qualified financial planner or tax professional before moving your retirement funds.
                            </p>
                        </div>
                    </div>
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
