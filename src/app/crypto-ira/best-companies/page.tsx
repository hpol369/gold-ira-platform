import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import {
    ArrowRight,
    Shield,
    Award,
    DollarSign,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
    Coins,
    Lock,
    BarChart3,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Best Crypto IRA Companies 2026: Fees & Features Compared",
    description:
        "Compare the best Crypto IRA companies for 2026. iTrustCapital, Alto IRA, and Bitcoin IRA reviewed side-by-side on fees, crypto selection, insurance, and minimums.",
    url: "https://www.richdadretirement.com/crypto-ira/best-companies",
    type: "article",
});

const companies = [
    {
        name: "iTrustCapital",
        rating: 4.7,
        tradingFee: "1% per trade",
        monthlyFee: "$0",
        minimum: "$1,000",
        cryptos: "30+",
        otherAssets: "Gold & Silver",
        insurance: "BitGo $250M policy",
        storage: "Fireblocks cold storage",
        highlight: "Best Overall",
        pros: [
            "Simple 1% per-trade fee with no hidden charges",
            "No monthly or annual account fees",
            "24/7 trading on a self-service platform",
            "Physical gold and silver available alongside crypto",
        ],
        cons: [
            "Fewer crypto options than Alto IRA",
            "$1,000 minimum to open",
            "No staking or DeFi features",
        ],
    },
    {
        name: "Alto IRA",
        rating: 4.5,
        tradingFee: "1% per trade",
        monthlyFee: "$0 (Starter) / $25 (CryptoIRA)",
        minimum: "$10",
        cryptos: "200+",
        otherAssets: "Alternative investments via partners",
        insurance: "Coinbase custody insurance",
        storage: "Coinbase institutional custody",
        highlight: "Most Crypto Options",
        pros: [
            "Over 200 cryptocurrencies available",
            "Extremely low $10 minimum investment",
            "Free starter plan available",
            "Access to alternative investments beyond crypto",
        ],
        cons: [
            "CryptoIRA plan has $25/month fee",
            "Platform can feel complex for beginners",
            "Trading fees match iTrustCapital at 1%",
        ],
    },
    {
        name: "Bitcoin IRA",
        rating: 4.2,
        tradingFee: "$0 trading fee",
        monthlyFee: "Account fee varies",
        minimum: "$3,000",
        cryptos: "60+",
        otherAssets: "Gold & Silver",
        insurance: "$250M BitGo policy",
        storage: "BitGo cold storage",
        highlight: "Zero Trading Fees",
        pros: [
            "No per-trade fee on buy/sell",
            "One of the oldest crypto IRA platforms (est. 2015)",
            "60+ cryptocurrencies available",
            "Interest-earning feature on some holdings",
        ],
        cons: [
            "Higher $3,000 minimum investment",
            "Account fees can be opaque",
            "Spread markup on trades instead of explicit fee",
        ],
    },
];

const faqs = [
    {
        question: "What is the best Crypto IRA company for 2026?",
        answer:
            "iTrustCapital is the best overall Crypto IRA company for 2026 based on our analysis. It charges a straightforward 1% per-trade fee with zero monthly fees, offers 30+ cryptocurrencies plus physical gold and silver, and uses Fireblocks cold storage with $250M in BitGo insurance coverage. The $1,000 minimum is reasonable for most investors.",
    },
    {
        question: "How much does a Crypto IRA cost?",
        answer:
            "Crypto IRA costs vary by provider. iTrustCapital charges 1% per trade with no monthly fees. Alto IRA offers a free starter plan or $25/month for its CryptoIRA plan with 1% trading fees. Bitcoin IRA advertises $0 trading fees but includes spread markups and varying account fees. Annual custodian fees typically range from $0 to $300 depending on the provider.",
    },
    {
        question: "Are Crypto IRAs safe?",
        answer:
            "Crypto IRAs use institutional-grade security including cold storage (offline wallets), multi-signature authentication, and insurance policies up to $250 million. However, cryptocurrency itself remains volatile. Your crypto is held by a qualified custodian, not on an exchange, which reduces hacking risk. FDIC insurance does not cover cryptocurrency holdings.",
    },
    {
        question: "Can I hold Bitcoin in my IRA?",
        answer:
            "Yes. The IRS treats cryptocurrency as property (IRS Notice 2014-21), and self-directed IRAs can hold property as an investment. You need a Crypto IRA provider like iTrustCapital, Alto IRA, or Bitcoin IRA that offers a self-directed IRA with cryptocurrency custody. You can use a Traditional IRA (tax-deferred growth) or Roth IRA (tax-free growth) for Bitcoin.",
    },
    {
        question: "What is the minimum investment for a Crypto IRA?",
        answer:
            "Minimum investments vary significantly. Alto IRA has the lowest at just $10. iTrustCapital requires $1,000 to open an account. Bitcoin IRA requires $3,000. These are account minimums—individual trade minimums may be lower. There are no IRS-imposed minimums for crypto in an IRA, only provider-set minimums.",
    },
];

export default function BestCryptoIRACompaniesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <SchemaScript
                schema={articleSchema({
                    title: "Best Crypto IRA Companies 2026: Fees & Features Compared",
                    description:
                        "Compare the best Crypto IRA companies for 2026 including iTrustCapital, Alto IRA, and Bitcoin IRA on fees, crypto selection, and features.",
                    slug: "/crypto-ira/best-companies",
                    datePublished: "2025-01-15",
                    dateModified: "2026-03-01",
                })}
            />
            <SchemaScript
                schema={breadcrumbSchema([
                    { name: "Home", url: "/" },
                    { name: "Crypto IRA", url: "/crypto-ira" },
                    { name: "Best Companies", url: "/crypto-ira/best-companies" },
                ])}
            />

            {/* Hero */}
            <header className="relative py-16 md:py-20 bg-[#0C0D18]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)]" />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6">
                            <Link href="/" className="hover:text-[#D4A94E]">Home</Link>
                            <span>/</span>
                            <Link href="/crypto-ira" className="hover:text-[#D4A94E]">Crypto IRA</Link>
                            <span>/</span>
                            <span className="text-[#F6F4EF]">Best Companies</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Coins className="w-4 h-4" />
                            <span>2026 Rankings</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-6 leading-tight">
                            Best Crypto IRA Companies 2026
                        </h1>

                        <AnswerFirst
                            answer="iTrustCapital is the best overall Crypto IRA for 2026 with its simple 1% per-trade fee and no monthly charges. Alto IRA wins for the most crypto options (200+). Bitcoin IRA has the lowest barrier to entry with $0 trading fees. All three offer tax-advantaged crypto investing through a self-directed IRA."
                            keyFacts={[
                                "iTrustCapital: 1% per trade, $0 monthly, $1,000 minimum, 30+ cryptos",
                                "Alto IRA: 1% per trade, $0-$25/mo, $10 minimum, 200+ cryptos",
                                "Bitcoin IRA: $0 trading fee, $3,000 minimum, 60+ cryptos",
                                "All providers use cold storage and carry insurance policies",
                            ]}
                        />
                    </div>
                </Container>
            </header>

            {/* Comparison Table */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Side-by-Side Comparison
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#0C0D18]">
                                        <th className="text-left px-4 py-3 text-[#F6F4EF] font-semibold border-b border-[#2A2D42]">Feature</th>
                                        {companies.map((c) => (
                                            <th key={c.name} className="text-left px-4 py-3 text-[#F6F4EF] font-semibold border-b border-[#2A2D42]">
                                                <div className="flex items-center gap-2">
                                                    {c.name}
                                                    {c.highlight === "Best Overall" && (
                                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">#1</span>
                                                    )}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Trading Fee</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.tradingFee}</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-[#0C0D18]/50">
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Monthly Fee</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.monthlyFee}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Minimum Investment</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.minimum}</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-[#0C0D18]/50">
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Crypto Selection</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.cryptos} cryptos</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Other Assets</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.otherAssets}</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-[#0C0D18]/50">
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Insurance</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.insurance}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border-b border-[#2A2D42] font-medium text-[#D0CCC4]">Storage</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 border-b border-[#2A2D42] text-[#D0CCC4]">{c.storage}</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-[#0C0D18]/50">
                                        <td className="px-4 py-3 font-medium text-[#D0CCC4]">Our Rating</td>
                                        {companies.map((c) => (
                                            <td key={c.name} className="px-4 py-3 font-bold text-[#F6F4EF]">{c.rating}/5</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Individual Reviews */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                <Award className="w-5 h-5 text-amber-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Detailed Provider Reviews
                            </h2>
                        </div>

                        {companies.map((company, idx) => (
                            <div key={company.name} className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6 md:p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-xs font-bold text-white bg-[#DC2626] px-3 py-1 rounded-full mb-2 inline-block">
                                            #{idx + 1} {company.highlight}
                                        </span>
                                        <h3 className="text-2xl font-bold text-[#F6F4EF] mt-2">{company.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-[#F6F4EF]">{company.rating}</div>
                                        <div className="text-sm text-[#A8A39A]">out of 5</div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" /> Pros
                                        </h4>
                                        <ul className="space-y-2">
                                            {company.pros.map((pro, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4" /> Cons
                                        </h4>
                                        <ul className="space-y-2">
                                            {company.cons.map((con, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[#D0CCC4] text-sm">
                                                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* How to Choose */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                How to Choose the Right Crypto IRA
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4]">
                            <p>
                                Picking a Crypto IRA comes down to what matters most to you. Here is a simple decision framework:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                                <h3 className="font-bold text-[#F6F4EF] mb-2">Lowest Fees</h3>
                                <p className="text-[#D0CCC4] text-sm mb-4">
                                    If keeping costs low is your priority, iTrustCapital&apos;s 1% per-trade fee with zero monthly charges is the clear winner. You only pay when you trade.
                                </p>
                                <p className="text-green-700 font-semibold text-sm">Pick: iTrustCapital</p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                <Coins className="w-8 h-8 text-blue-600 mb-3" />
                                <h3 className="font-bold text-[#F6F4EF] mb-2">Most Crypto Options</h3>
                                <p className="text-[#D0CCC4] text-sm mb-4">
                                    If you want access to smaller altcoins beyond Bitcoin and Ethereum, Alto IRA&apos;s 200+ cryptocurrency selection is unmatched in the retirement space.
                                </p>
                                <p className="text-blue-700 font-semibold text-sm">Pick: Alto IRA</p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <TrendingUp className="w-8 h-8 text-amber-600 mb-3" />
                                <h3 className="font-bold text-[#F6F4EF] mb-2">Zero Trade Fees</h3>
                                <p className="text-[#D0CCC4] text-sm mb-4">
                                    If you trade frequently and want to avoid per-trade fees, Bitcoin IRA&apos;s $0 trading fee model works well. Just be aware of the spread markup.
                                </p>
                                <p className="text-amber-700 font-semibold text-sm">Pick: Bitcoin IRA</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Security callout */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <Lock className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#F6F4EF]">
                                Security: What to Look For
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-[#D0CCC4]">
                            <p>
                                Your retirement savings need industrial-strength security. Every provider on this list uses cold storage, meaning your crypto is held offline where hackers cannot reach it. Here is what each company offers:
                            </p>
                        </div>

                        <div className="bg-[#161828] rounded-xl border border-[#2A2D42] p-6 mt-6">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-[#F6F4EF]">Cold Storage:</strong>{" "}
                                        <span className="text-[#D0CCC4]">All three providers keep crypto in offline wallets (iTrustCapital uses Fireblocks, Alto uses Coinbase Custody, Bitcoin IRA uses BitGo).</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-[#F6F4EF]">Insurance Coverage:</strong>{" "}
                                        <span className="text-[#D0CCC4]">iTrustCapital and Bitcoin IRA carry $250 million in insurance through BitGo. Alto IRA is backed by Coinbase&apos;s institutional insurance.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-[#F6F4EF]">Regulated Custodians:</strong>{" "}
                                        <span className="text-[#D0CCC4]">All providers use IRS-approved custodians and are subject to regulatory oversight. Your IRA is a legally distinct account from the company itself.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <p className="text-[#D0CCC4] text-sm">
                                    <strong>Important:</strong> Crypto IRA insurance typically covers theft and hacking of the custodian&apos;s systems. It does not protect against market losses. Cryptocurrency remains a volatile asset class and your investment can lose value.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Augusta Bridge CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6 md:p-8 text-center">
                            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">
                                Prefer Physical Assets Over Digital?
                            </h2>
                            <p className="text-[#D0CCC4] mb-6 max-w-2xl mx-auto">
                                If the volatility of crypto gives you pause, physical gold and silver have protected wealth for thousands of years. Augusta Precious Metals offers Gold and Silver IRAs with the same tax advantages and none of the digital risk.
                            </p>
                            <AugustaCTA
                                variant="inline"
                                headline="Augusta Precious Metals"
                                subheadline="Prefer physical assets? Augusta offers Gold IRAs with the same tax advantages and none of the digital risk."
                                trackSource="crypto-ira-best-companies"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-[#0C0D18]">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FAQSection faqs={faqs} />
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <AugustaCTA
                            variant="footer"
                            headline="Want the Stability of Physical Gold Instead?"
                            subheadline="Augusta Precious Metals is our #1 rated Gold IRA company. Physical gold has a 5,000-year track record. Get a free info kit to compare."
                            trackSource="crypto-ira-best-companies-footer"
                        />
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
