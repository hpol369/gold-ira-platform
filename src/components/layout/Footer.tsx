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
                                Gold<span className="text-secondary">IRA</span>Guide
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
                            <li><Link href="/gold-ira-reviews" className="text-gray-300 hover:text-white transition-colors text-sm">Company Reviews</Link></li>
                            <li><Link href="/gold-price-charts" className="text-gray-300 hover:text-white transition-colors text-sm">Gold Price Charts</Link></li>
                            <li><Link href="/retirement-calculator" className="text-gray-300 hover:text-white transition-colors text-sm">Retirement Calculator</Link></li>
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
                        <p className="text-xs text-gray-400 leading-relaxed text-balance">
                            GoldIRAGuide.com is an independent review website. We may receive meaningful compensation from the companies we review and recommend. This compensation may influence the placement and order of companies on our site. We are not financial advisors. All investments involve risk, including the loss of principal.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {currentYear} Gold IRA Guide. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/compliance" className="hover:text-white transition-colors">Accessibility</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
