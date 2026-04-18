import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Callout";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import Link from "next/link";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { RelatedContent } from "@/components/content/RelatedContent";
import { Building2, Coins, Bitcoin, Briefcase, FileText, Landmark } from "lucide-react";

export const metadata: Metadata = {
    title: "Alternative Assets for Self-Directed IRAs: Complete Guide (2026)",
    description: "Complete guide to alternative assets you can hold in a self-directed IRA: real estate, precious metals, crypto, private equity, tax liens, notes, and LLCs. IRS rules, pros, and cons for each.",
    alternates: {
        canonical: "https://richdadretirement.com/self-directed-ira/alternative-assets",
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Alternative Assets for Self-Directed IRAs: Complete Guide (2026)",
            "description": "Complete guide to alternative assets for self-directed IRAs including real estate, precious metals, crypto, and more.",
            "author": { "@type": "Organization", "name": "Rich Dad Retirement" },
            "publisher": {
                "@type": "Organization",
                "name": "Rich Dad Retirement",
                "logo": { "@type": "ImageObject", "url": "https://richdadretirement.com/logo.png" },
            },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19",
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://richdadretirement.com" },
                { "@type": "ListItem", "position": 2, "name": "Self-Directed IRA", "item": "https://richdadretirement.com/self-directed-ira" },
                { "@type": "ListItem", "position": 3, "name": "Alternative Assets", "item": "https://richdadretirement.com/self-directed-ira/alternative-assets" },
            ],
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What alternative assets can I hold in a self-directed IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A self-directed IRA can hold real estate (residential, commercial, raw land), precious metals (gold, silver, platinum, palladium meeting IRS fineness standards), cryptocurrency (Bitcoin, Ethereum, etc.), private equity and venture capital, promissory notes, tax lien certificates, LLCs, and many other non-traditional investments. The IRS only explicitly prohibits life insurance, collectibles (art, antiques, gems, stamps, rugs, metals not meeting fineness standards), and S-corporation stock.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What assets are NOT allowed in a self-directed IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IRS prohibits three categories from IRAs: life insurance policies, collectibles (artwork, antiques, rugs, gems, stamps, most coins, alcoholic beverages), and S-corporation stock. Note that certain bullion coins and bars meeting specific fineness requirements ARE allowed despite the general collectibles prohibition. Everything else is technically permissible, subject to prohibited transaction rules.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can I buy real estate with my self-directed IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Your self-directed IRA can purchase residential rentals, commercial properties, raw land, farmland, and even foreign real estate. All income (rent) must flow back into the IRA, all expenses must be paid from IRA funds, and you cannot personally use the property or hire disqualified persons to manage it. If the IRA uses a mortgage to buy property, be aware of UDFI (Unrelated Debt-Financed Income) tax.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Is cryptocurrency allowed in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The IRS treats cryptocurrency as property, and it can be held in a self-directed IRA. Bitcoin, Ethereum, and other major cryptocurrencies are all eligible. You'll need a custodian that supports crypto (like Kingdom Trust or iTrust Capital). Gains within the IRA are tax-deferred (Traditional) or tax-free (Roth), which can be a major advantage given crypto's volatility and potential for large gains.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What are the tax benefits of holding alternative assets in an IRA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The key benefit is tax-sheltered growth. In a Traditional self-directed IRA, all gains (rental income, capital appreciation, dividends from private equity) grow tax-deferred until withdrawal. In a Roth self-directed IRA, all gains are completely tax-free. This means you can sell a property that's doubled in value, reinvest the full amount, and owe zero capital gains tax at the time of sale.",
                    },
                },
            ],
        },
    ],
};

export default function AlternativeAssetsPage() {
    return (
        <main className="min-h-screen bg-[#0C0D18]">
            <SchemaScript schema={schema} />
            <Navbar />

            {/* Header */}
            <header className="bg-[#0C0D18] py-20 relative overflow-hidden border-b border-[#2A2D42]">
                <Container className="relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-[rgba(220,38,38,0.1)] border border-[#B22234]/20 text-sm font-semibold text-[#D4A94E] mb-6">
                        Investment Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#F6F4EF]">
                        Alternative Assets for Self-Directed IRAs
                    </h1>
                    <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto leading-relaxed">
                        Stocks and bonds aren&apos;t your only options. A self-directed IRA lets you invest in real estate, gold, crypto, private equity, and more &mdash; all tax-advantaged.
                    </p>
                </Container>
            </header>

            <Container className="py-12">
                <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#F6F4EF] prose-p:text-[#D0CCC4] prose-strong:text-[#F6F4EF] prose-li:text-[#D0CCC4]">

                    {/* Answer First */}
                    <div className="not-prose mb-8">
                        <AnswerFirst
                            answer="A self-directed IRA can hold nearly any investment the IRS doesn't explicitly prohibit. Allowed alternative assets include real estate, precious metals (gold, silver, platinum, palladium), cryptocurrency, private equity, promissory notes, tax lien certificates, and LLCs. The only prohibited assets are life insurance, collectibles (art, antiques, gems, stamps), and S-corporation stock. Each asset type has specific IRS rules you must follow to avoid prohibited transaction penalties."
                            keyFacts={[
                                "Real estate is the most popular SDIRA alternative asset (36% of all SDIRA investments)",
                                "Precious metals must meet IRS fineness standards: 99.5% gold, 99.9% silver",
                                "Crypto gains inside a Roth SDIRA are completely tax-free",
                                "All income and expenses must flow through the IRA, not your personal accounts",
                            ]}
                        />
                    </div>

                    <p>
                        Most Americans have their retirement savings in stocks, bonds, and mutual funds &mdash; all paper assets controlled by Wall Street. A self-directed IRA breaks you out of that box. You choose what to invest in, and the IRS gives you a surprisingly long leash.
                    </p>
                    <p>
                        Here&apos;s every major alternative asset category, the IRS rules for each, and the real-world pros and cons you need to know.
                    </p>

                    {/* Asset Categories Overview Table */}
                    <h2>Alternative Asset Categories at a Glance</h2>

                    <div className="overflow-x-auto not-prose my-8">
                        <table className="w-full text-left border-collapse bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm text-sm">
                            <thead className="bg-[#0C0D18]">
                                <tr>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Asset Type</th>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Min. Investment</th>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Income Potential</th>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Complexity</th>
                                    <th className="p-4 border-b border-[#2A2D42] font-bold text-[#D4A94E]">Liquidity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2A2D42] text-[#D0CCC4]">
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">Real Estate</td>
                                    <td className="p-4">$25,000+</td>
                                    <td className="p-4 text-green-600 font-medium">High (rent + appreciation)</td>
                                    <td className="p-4 text-[#D4A94E]">High</td>
                                    <td className="p-4 text-red-500">Low</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">Precious Metals</td>
                                    <td className="p-4">$5,000+</td>
                                    <td className="p-4">Appreciation only</td>
                                    <td className="p-4 text-green-600">Low</td>
                                    <td className="p-4 text-green-600">High</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">Cryptocurrency</td>
                                    <td className="p-4">$1,000+</td>
                                    <td className="p-4">Appreciation + staking</td>
                                    <td className="p-4 text-[#D4A94E]">Medium</td>
                                    <td className="p-4 text-green-600">High</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">Private Equity</td>
                                    <td className="p-4">$25,000+</td>
                                    <td className="p-4 text-green-600 font-medium">High (if successful)</td>
                                    <td className="p-4 text-red-500">Very High</td>
                                    <td className="p-4 text-red-500">Very Low</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">Tax Liens</td>
                                    <td className="p-4">$500+</td>
                                    <td className="p-4 text-green-600 font-medium">8-36% interest</td>
                                    <td className="p-4 text-[#D4A94E]">Medium</td>
                                    <td className="p-4 text-[#D4A94E]">Medium</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">Promissory Notes</td>
                                    <td className="p-4">$5,000+</td>
                                    <td className="p-4">Interest income</td>
                                    <td className="p-4 text-[#D4A94E]">Medium</td>
                                    <td className="p-4 text-red-500">Low</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-[#F6F4EF]">IRA LLC</td>
                                    <td className="p-4">$15,000+ (setup)</td>
                                    <td className="p-4">Varies by investments</td>
                                    <td className="p-4 text-red-500">Very High</td>
                                    <td className="p-4 text-green-600">High (checkbook)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Real Estate */}
                    <h2 id="real-estate">
                        <span className="not-prose inline-flex items-center gap-2">
                            <Building2 className="w-7 h-7 text-[#D4A94E]" />
                            Real Estate
                        </span>
                    </h2>
                    <p>
                        Real estate is the most popular alternative asset in self-directed IRAs, and for good reason. Rental income flows tax-deferred (or tax-free in a Roth), and you keep 100% of the appreciation when you sell.
                    </p>
                    <p><strong>What you can buy:</strong> Residential rentals, commercial properties, raw land, farmland, mobile home parks, storage units, and even foreign real estate.</p>

                    <h3>IRS Rules for Real Estate in an IRA</h3>
                    <ul>
                        <li>All rental income must go directly into the IRA &mdash; not your personal bank account</li>
                        <li>All expenses (repairs, taxes, insurance, management) must be paid from IRA funds</li>
                        <li>You cannot live in the property or use it personally in any way</li>
                        <li>No &quot;sweat equity&quot; &mdash; you cannot do repairs or improvements yourself</li>
                        <li>No hiring disqualified persons (family) to manage or service the property</li>
                        <li>If using a mortgage, UDFI (Unrelated Debt-Financed Income) tax may apply to the leveraged portion</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                        <div className="p-5 rounded-xl bg-[rgba(46,139,87,0.08)] border border-green-100">
                            <h4 className="font-bold text-green-700 mb-2 text-sm uppercase">Pros</h4>
                            <ul className="space-y-1.5 text-sm text-green-600">
                                <li>&#8226; Steady rental income (tax-deferred or tax-free)</li>
                                <li>&#8226; Tangible asset with intrinsic value</li>
                                <li>&#8226; Potential for significant appreciation</li>
                                <li>&#8226; Inflation hedge (rents rise with prices)</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <h4 className="font-bold text-red-700 mb-2 text-sm uppercase">Cons</h4>
                            <ul className="space-y-1.5 text-sm text-red-600">
                                <li>&#8226; Illiquid (can&apos;t sell overnight)</li>
                                <li>&#8226; Management complexity within IRA rules</li>
                                <li>&#8226; Large capital required</li>
                                <li>&#8226; UDFI tax on leveraged purchases</li>
                            </ul>
                        </div>
                    </div>

                    {/* Precious Metals */}
                    <h2 id="precious-metals">
                        <span className="not-prose inline-flex items-center gap-2">
                            <Coins className="w-7 h-7 text-[#D4A94E]" />
                            Precious Metals
                        </span>
                    </h2>
                    <p>
                        Gold, silver, platinum, and palladium can all be held in a self-directed IRA &mdash; but only if they meet IRS fineness (purity) requirements. This is the simplest alternative asset to add to your IRA.
                    </p>

                    <h3>IRS Purity Requirements</h3>
                    <ul>
                        <li><strong>Gold:</strong> Must be 99.5% pure (American Eagle coins are the sole exception at 91.67%)</li>
                        <li><strong>Silver:</strong> Must be 99.9% pure</li>
                        <li><strong>Platinum:</strong> Must be 99.95% pure</li>
                        <li><strong>Palladium:</strong> Must be 99.95% pure</li>
                    </ul>
                    <p>
                        Metals must be stored in an IRS-approved depository &mdash; you cannot keep them at home or in a personal safe deposit box. Popular approved depositories include Delaware Depository, Brink&apos;s, and STRATA.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                        <div className="p-5 rounded-xl bg-[rgba(46,139,87,0.08)] border border-green-100">
                            <h4 className="font-bold text-green-700 mb-2 text-sm uppercase">Pros</h4>
                            <ul className="space-y-1.5 text-sm text-green-600">
                                <li>&#8226; Proven inflation hedge over millennia</li>
                                <li>&#8226; Low complexity &mdash; easy to set up</li>
                                <li>&#8226; Highly liquid (sell metals any time)</li>
                                <li>&#8226; No counterparty risk</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <h4 className="font-bold text-red-700 mb-2 text-sm uppercase">Cons</h4>
                            <ul className="space-y-1.5 text-sm text-red-600">
                                <li>&#8226; No income generation (no dividends/rent)</li>
                                <li>&#8226; Storage fees ($100-$300/year)</li>
                                <li>&#8226; Dealer premiums above spot price</li>
                                <li>&#8226; Short-term price volatility</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mid CTA */}
                    <div className="not-prose my-12">
                        <AugustaCTA
                            headline="Add Gold to Your IRA the Easy Way"
                            subheadline="Augusta Precious Metals handles everything: custodian setup, metal selection, and IRS-approved storage. One call, done."
                            trackSource="sdira-alternative-assets"
                        />
                    </div>

                    {/* Cryptocurrency */}
                    <h2 id="cryptocurrency">
                        <span className="not-prose inline-flex items-center gap-2">
                            <Bitcoin className="w-7 h-7 text-[#D4A94E]" />
                            Cryptocurrency
                        </span>
                    </h2>
                    <p>
                        The IRS treats cryptocurrency as property, making it eligible for self-directed IRAs. Bitcoin, Ethereum, and other major tokens can all be held inside your retirement account. The major advantage: crypto gains inside a Roth IRA are <strong>completely tax-free</strong>.
                    </p>

                    <h3>IRS Rules for Crypto in an IRA</h3>
                    <ul>
                        <li>Crypto is treated as property (not currency) by the IRS</li>
                        <li>Must be held through an IRS-approved custodian that supports crypto</li>
                        <li>Standard IRA contribution limits apply ($7,000/$8,000 for 2026)</li>
                        <li>No personal use or transfer of crypto outside the IRA</li>
                        <li>Staking rewards and airdrops may have tax implications &mdash; consult a tax professional</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                        <div className="p-5 rounded-xl bg-[rgba(46,139,87,0.08)] border border-green-100">
                            <h4 className="font-bold text-green-700 mb-2 text-sm uppercase">Pros</h4>
                            <ul className="space-y-1.5 text-sm text-green-600">
                                <li>&#8226; Tax-free gains in a Roth IRA</li>
                                <li>&#8226; High growth potential</li>
                                <li>&#8226; High liquidity (trade 24/7)</li>
                                <li>&#8226; Portfolio diversification</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-xl bg-[rgba(220,38,38,0.08)] border border-red-100">
                            <h4 className="font-bold text-red-700 mb-2 text-sm uppercase">Cons</h4>
                            <ul className="space-y-1.5 text-sm text-red-600">
                                <li>&#8226; Extreme volatility</li>
                                <li>&#8226; Regulatory uncertainty</li>
                                <li>&#8226; Limited custodian options</li>
                                <li>&#8226; Technology/security risks</li>
                            </ul>
                        </div>
                    </div>

                    {/* Private Equity */}
                    <h2 id="private-equity">
                        <span className="not-prose inline-flex items-center gap-2">
                            <Briefcase className="w-7 h-7 text-[#D4A94E]" />
                            Private Equity &amp; Venture Capital
                        </span>
                    </h2>
                    <p>
                        Your self-directed IRA can invest in private companies, startups, and venture funds. If you pick a winner, the returns can be extraordinary &mdash; all tax-sheltered. But the risks are equally large.
                    </p>
                    <ul>
                        <li>Can invest in LLCs, C-corporations, partnerships, and venture funds</li>
                        <li>Cannot invest in S-corporations (explicitly prohibited by the IRS)</li>
                        <li>Must avoid prohibited transactions with companies you or family members control</li>
                        <li>Typically requires accredited investor status ($200k+ income or $1M+ net worth)</li>
                        <li>Investments are highly illiquid &mdash; your money is locked up for years</li>
                    </ul>

                    {/* Tax Liens */}
                    <h2 id="tax-liens">
                        <span className="not-prose inline-flex items-center gap-2">
                            <Landmark className="w-7 h-7 text-[#D4A94E]" />
                            Tax Lien Certificates &amp; Tax Deeds
                        </span>
                    </h2>
                    <p>
                        When property owners don&apos;t pay their taxes, local governments issue tax lien certificates. Your IRA can buy these certificates and earn interest rates of 8-36% depending on the state. If the owner doesn&apos;t pay, your IRA may end up owning the property.
                    </p>
                    <ul>
                        <li>Interest rates set by state law (8-36% depending on jurisdiction)</li>
                        <li>Low minimum investment ($500+ at many auctions)</li>
                        <li>Must purchase through the IRA, not personally</li>
                        <li>If you foreclose, the IRA owns the property (IRA real estate rules apply)</li>
                        <li>Due diligence is critical &mdash; some liens are on worthless properties</li>
                    </ul>

                    {/* Promissory Notes */}
                    <h2 id="notes">
                        <span className="not-prose inline-flex items-center gap-2">
                            <FileText className="w-7 h-7 text-[#D4A94E]" />
                            Promissory Notes &amp; Private Lending
                        </span>
                    </h2>
                    <p>
                        Your IRA can become a private lender. You lend money to a borrower (secured by real estate or other collateral), and the interest payments flow into your IRA tax-deferred. It&apos;s like being the bank.
                    </p>
                    <ul>
                        <li>Typical returns: 8-15% interest secured by real estate</li>
                        <li><strong>Cannot lend to disqualified persons</strong> (yourself, family, entities you control)</li>
                        <li>All loan documents must be in the IRA&apos;s name, not yours</li>
                        <li>Payments must go directly into the IRA account</li>
                        <li>Default risk is real &mdash; perform due diligence on every borrower</li>
                    </ul>

                    <Callout type="warning" title="The #1 Rule for All Alternative Assets">
                        Every dollar in and every dollar out must go through the IRA. You cannot personally pay expenses, receive income, or touch the assets. The moment personal benefit enters the picture, you&apos;ve committed a <Link href="/self-directed-ira/prohibited-transactions">prohibited transaction</Link> &mdash; and the penalties can wipe out your entire account.
                    </Callout>

                    {/* What's Prohibited */}
                    <h2>What You CANNOT Hold in an IRA</h2>
                    <p>The IRS explicitly prohibits three categories of assets in any IRA:</p>
                    <ul>
                        <li><strong>Life insurance policies</strong> &mdash; Cannot be owned by an IRA</li>
                        <li><strong>Collectibles</strong> &mdash; Artwork, antiques, rugs, gems, stamps, rare coins (that don&apos;t meet fineness requirements), alcoholic beverages</li>
                        <li><strong>S-corporation stock</strong> &mdash; Due to S-corp shareholder restrictions</li>
                    </ul>
                    <p>
                        Everything else is fair game, as long as you follow the prohibited transaction rules and work with a qualified custodian.
                    </p>

                    {/* FAQs */}
                    <h2>Alternative Asset IRA FAQs</h2>

                    <div className="space-y-4 not-prose">
                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">What alternative assets can I hold in a self-directed IRA?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">Real estate, precious metals, cryptocurrency, private equity, promissory notes, tax lien certificates, LLCs, and many other non-traditional investments. The IRS only explicitly prohibits life insurance, collectibles (art, antiques, gems, stamps, rugs), and S-corporation stock.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">What assets are NOT allowed in a self-directed IRA?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">Life insurance policies, collectibles (artwork, antiques, rugs, gems, stamps, most coins, alcoholic beverages), and S-corporation stock. Certain bullion coins and bars meeting IRS fineness requirements ARE allowed despite the general collectibles ban.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">Can I buy real estate with my self-directed IRA?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">Yes. Your SDIRA can purchase residential rentals, commercial properties, raw land, farmland, and foreign real estate. All income goes into the IRA, all expenses are paid from IRA funds, and you cannot personally use the property. If using a mortgage, UDFI tax may apply to the leveraged portion.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">Is cryptocurrency allowed in an IRA?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">Yes. The IRS treats cryptocurrency as property, and it can be held in a self-directed IRA. You need a custodian that supports crypto (like Kingdom Trust or iTrust Capital). Gains within a Roth IRA are completely tax-free, making it a powerful vehicle for crypto investors.</p>
                        </details>

                        <details className="group bg-[#161828] rounded-xl border border-[#2A2D42] shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                                <h4 className="text-lg font-bold">What are the tax benefits of alternative assets in an IRA?</h4>
                                <span className="shrink-0 rounded-full bg-[rgba(220,38,38,0.1)] p-1.5 text-[#D4A94E] sm:p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-[#D0CCC4]">All gains grow tax-deferred (Traditional) or tax-free (Roth). You can sell a property that&apos;s doubled in value, reinvest the full amount, and owe zero capital gains tax. Rental income, interest, and dividends all accumulate without annual taxation.</p>
                        </details>
                    </div>

                    {/* Bottom CTA */}
                    <div className="not-prose my-12">
                        <AugustaCTA
                            headline="Start with the Easiest Alternative Asset"
                            subheadline="Precious metals are the simplest way to diversify your IRA beyond Wall Street. Augusta handles everything from custodian setup to metal storage."
                            trackSource="sdira-alternative-assets-bottom"
                        />
                    </div>

                    {/* Related */}
                    <div className="not-prose">
                        <RelatedContent
                            title="Related Self-Directed IRA Resources"
                            links={[
                                { title: "Prohibited Transactions to Avoid", href: "/self-directed-ira/prohibited-transactions", type: "guide" },
                                { title: "Best SDIRA Custodians Compared", href: "/self-directed-ira/custodian-comparison", type: "compare" },
                                { title: "SDIRA LLC Structure Explained", href: "/self-directed-ira/llc-structure", type: "guide" },
                                { title: "What Is a Gold IRA?", href: "/what-is-a-gold-ira", type: "learn" },
                                { title: "Gold IRA vs Physical Gold", href: "/compare/gold-ira-vs-physical-gold", type: "compare" },
                            ]}
                        />
                    </div>
                </article>
            </Container>

            <Footer />
        </main>
    );
}
