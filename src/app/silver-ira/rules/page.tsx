import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    AlertTriangle,
    Scale,
    Shield,
    Building2,
    Coins,
    XCircle,
    FileText,
    Calendar,
    DollarSign,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Silver IRA Rules: IRS Requirements for 2026",
    description:
        "Complete guide to Silver IRA rules. Learn IRS purity requirements, approved silver products, storage rules, contribution limits, and distribution requirements.",
    url: "https://www.richdadretirement.com/silver-ira/rules",
    imageAlt: "Silver IRA Rules - Rich Dad Retirement",
});

const purityRules = {
    requirement: ".999 Fine (99.9% Pure)",
    explanation: "The IRS requires all silver in an IRA to meet minimum purity standards. This ensures you're investing in quality bullion, not collectibles or numismatic items.",
    approved: [
        "American Silver Eagle (99.9%)",
        "Canadian Silver Maple Leaf (99.99%)",
        "Austrian Silver Philharmonic (99.9%)",
        "British Silver Britannia (99.9%)",
        "Australian Silver Kangaroo (99.9%)",
        "Silver bars from approved refiners (.999+)",
    ],
    notApproved: [
        "Pre-1965 US silver coins (90% silver)",
        "Silver jewelry or silverware",
        "Rare or collectible coins",
        "Proof coins (with some exceptions)",
        "Silver below .999 fineness",
    ],
};

const storageRules = [
    {
        rule: "IRS-Approved Depository Required",
        description: "All Silver IRA holdings must be stored in an IRS-approved depository, not at home or in a personal safe deposit box.",
        icon: Building2,
    },
    {
        rule: "Custodian Maintains Control",
        description: "A qualified custodian must maintain control of your silver. You cannot take physical possession until you take a distribution.",
        icon: Shield,
    },
    {
        rule: "Segregated or Non-Segregated",
        description: "You can choose segregated storage (your silver kept separate) or non-segregated (mixed with other investors' silver of same type).",
        icon: Coins,
    },
    {
        rule: "Insurance Required",
        description: "Approved depositories must carry adequate insurance. Verify coverage amounts with your custodian.",
        icon: FileText,
    },
];

const contributionLimits = {
    year: "2026",
    traditional: {
        under50: "$7,000",
        over50: "$8,000",
        note: "Catch-up contribution of $1,000 for those 50+",
    },
    rollover: {
        limit: "Unlimited",
        note: "No limit on rollover amounts from 401(k), IRA, etc.",
    },
};

const distributionRules = [
    {
        age: "Under 59.5",
        rule: "10% early withdrawal penalty applies (plus income taxes on Traditional IRA distributions)",
        exceptions: ["Disability", "First-time home purchase (up to $10,000)", "Qualified higher education expenses", "Certain medical expenses"],
    },
    {
        age: "59.5 to 73",
        rule: "Distributions allowed without penalty. Income taxes apply to Traditional IRA withdrawals.",
        exceptions: [],
    },
    {
        age: "73+",
        rule: "Required Minimum Distributions (RMDs) must begin. Failing to take RMDs results in 25% penalty.",
        exceptions: ["Roth IRAs have no RMDs during owner's lifetime"],
    },
];

const commonViolations = [
    {
        violation: "Home Storage",
        consequence: "IRS considers this a distribution - 10% penalty + income taxes + potential loss of tax-advantaged status",
        avoid: "Use only IRS-approved depositories through your custodian",
    },
    {
        violation: "Non-Approved Silver",
        consequence: "Disqualified investment - treated as distribution with taxes and penalties",
        avoid: "Verify all products meet .999 purity and are IRA-approved",
    },
    {
        violation: "Self-Dealing",
        consequence: "Prohibited transaction - possible disqualification of entire IRA",
        avoid: "Never buy silver from yourself or sell to yourself",
    },
    {
        violation: "Missed RMDs",
        consequence: "25% penalty on the amount that should have been distributed",
        avoid: "Work with custodian to calculate and take required distributions",
    },
];

const faqs = [
    {
        question: "What purity does silver need to be for an IRA?",
        answer: "Silver must be at least .999 fine (99.9% pure) to qualify for an IRA. This excludes junk silver, sterling silver (92.5%), and most collectible coins. Popular choices include American Silver Eagles, Canadian Maple Leafs, and silver bars from approved refiners."
    },
    {
        question: "Can I store Silver IRA metals at home?",
        answer: "No. The IRS requires precious metals in an IRA to be held by a qualified custodian at an approved depository. 'Home storage IRA' schemes are not IRS-approved and can result in your entire IRA being treated as a distribution, with taxes and penalties."
    },
    {
        question: "What are the contribution limits for a Silver IRA?",
        answer: "For 2026, you can contribute up to $7,000 to a Silver IRA ($8,000 if you're 50 or older). However, there's no limit on rollover amounts from 401(k)s, other IRAs, or eligible retirement plans."
    },
    {
        question: "When can I take distributions from my Silver IRA?",
        answer: "You can take penalty-free distributions starting at age 59.5. Earlier withdrawals incur a 10% penalty plus applicable income taxes (for Traditional IRAs). Required Minimum Distributions must begin at age 73."
    },
    {
        question: "Can I have silver from different mints in the same IRA?",
        answer: "Yes, you can hold silver from multiple mints (American Eagles, Canadian Maple Leafs, Austrian Philharmonics, etc.) in the same IRA, as long as each product meets IRS purity requirements."
    },
    {
        question: "Is 90% 'junk silver' allowed in an IRA?",
        answer: "No. Pre-1965 US coins (often called 'junk silver' or 'constitutional silver') are only 90% silver, which doesn't meet the IRS .999 purity requirement. These coins cannot be held in an IRA."
    },
    {
        question: "What happens to my Silver IRA when I die?",
        answer: "Your Silver IRA passes to your named beneficiary. Inherited IRA rules apply - spouses have more flexibility, while non-spouse beneficiaries generally must distribute the account within 10 years under current rules."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver IRA Rules: IRS Requirements for 2026",
    "description": "Complete guide to Silver IRA rules including purity requirements, approved products, storage rules, and contribution limits.",
    "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-27"
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function SilverIraRulesPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px]" />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B22234]/10 border border-slate-300 rounded-full text-slate-600 font-semibold text-sm mb-6">
                            <Scale className="h-4 w-4" />
                            IRS REGULATIONS
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Silver IRA Rules: Everything the IRS Requires
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Understanding IRS rules is essential for a compliant Silver IRA. Learn about purity requirements, approved products, storage regulations, and how to avoid costly mistakes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                <Link href="/quiz">
                                    Start Your Silver IRA <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Quick Summary */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Silver IRA Rules at a Glance</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                                <Coins className="h-10 w-10 text-slate-600 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 text-xl mb-2">.999 Purity</h3>
                                <p className="text-sm text-slate-600">Minimum silver fineness required by IRS</p>
                            </div>
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                                <Building2 className="h-10 w-10 text-slate-600 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 text-xl mb-2">Approved Depository</h3>
                                <p className="text-sm text-slate-600">Must be stored in IRS-approved facility</p>
                            </div>
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center">
                                <DollarSign className="h-10 w-10 text-slate-600 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 text-xl mb-2">$7,000 / $8,000</h3>
                                <p className="text-sm text-slate-600">Annual contribution limits (under/over 50)</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Purity Requirements */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Silver Purity Requirements</h2>

                        <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#B22234]/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#B22234]">.999</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Minimum Purity: {purityRules.requirement}</h3>
                                    <p className="text-slate-600">{purityRules.explanation}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5" /> IRS-Approved Silver Products
                                </h3>
                                <ul className="space-y-2">
                                    {purityRules.approved.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                                            <CheckCircle2 className="h-4 w-4 text-green-700 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                                    <XCircle className="h-5 w-5" /> NOT Approved for IRAs
                                </h3>
                                <ul className="space-y-2">
                                    {purityRules.notApproved.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                                            <XCircle className="h-4 w-4 text-red-700 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Storage Rules */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Storage Requirements</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {storageRules.map((rule, index) => {
                                const Icon = rule.icon;
                                return (
                                    <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-slate-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-2">{rule.rule}</h3>
                                                <p className="text-sm text-slate-600">{rule.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-red-700 mb-2">Warning: "Home Storage IRA" Schemes</h4>
                                    <p className="text-slate-600">
                                        Some promoters advertise "home storage" or "checkbook IRA" schemes for precious metals.
                                        These are not approved by the IRS and can result in your entire IRA being treated as
                                        a distribution, triggering immediate taxes and penalties. Always use an IRS-approved custodian and depository.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contribution Limits */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">2026 Contribution Limits</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Calendar className="h-5 w-5 text-slate-600" />
                                    <h3 className="font-bold text-slate-900">Annual Contributions</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Under 50</span>
                                        <span className="text-2xl font-bold text-[#B22234]">{contributionLimits.traditional.under50}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">50 and Over</span>
                                        <span className="text-2xl font-bold text-[#B22234]">{contributionLimits.traditional.over50}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 pt-2 border-t border-slate-200">
                                        {contributionLimits.traditional.note}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <DollarSign className="h-5 w-5 text-green-700" />
                                    <h3 className="font-bold text-slate-900">Rollover Amounts</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-green-700">{contributionLimits.rollover.limit}</span>
                                        <p className="text-slate-600 mt-2">No limit on rollover amounts</p>
                                    </div>
                                    <p className="text-sm text-slate-600 pt-2 border-t border-slate-200">
                                        {contributionLimits.rollover.note}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Distribution Rules */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Distribution Rules by Age</h2>

                        <div className="space-y-6">
                            {distributionRules.map((rule, index) => (
                                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg font-bold text-slate-900">{rule.age}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-slate-600 mb-3">{rule.rule}</p>
                                            {rule.exceptions.length > 0 && (
                                                <div className="bg-slate-50 rounded-lg p-4">
                                                    <h4 className="text-sm font-semibold text-[#B22234] mb-2">Exceptions:</h4>
                                                    <ul className="space-y-1">
                                                        {rule.exceptions.map((exception, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                                <CheckCircle2 className="h-3 w-3 text-green-700" />
                                                                {exception}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Common Violations */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Violations to Avoid</h2>

                        <div className="space-y-4">
                            {commonViolations.map((item, index) => (
                                <div key={index} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-slate-900 mb-2">{item.violation}</h3>
                                            <p className="text-red-800 text-sm mb-3">
                                                <strong>Consequence:</strong> {item.consequence}
                                            </p>
                                            <p className="text-green-700 text-sm">
                                                <strong>How to avoid:</strong> {item.avoid}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mid-page CTA */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help Navigating Silver IRA Rules?</h2>
                        <p className="text-slate-600 mb-6">
                            A reputable Silver IRA company handles compliance for you. Take our quiz to find a provider that ensures your account stays IRS-compliant.
                        </p>
                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                            <Link href="/quiz">
                                Find a Compliant Provider <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Silver IRA Rules FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl"
                                >
                                    <summary className="cursor-pointer p-6 font-semibold text-slate-900 flex justify-between items-center list-none">
                                        {faq.question}
                                        <span className="text-[#B22234] group-open:rotate-180 transition-transform">&#9660;</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Related Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/silver-ira/approved-coins" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">IRA Approved Silver Coins</h3>
                            <p className="text-sm text-slate-600">Complete list of silver coins and bars that meet IRS requirements.</p>
                        </Link>
                        <Link href="/silver-ira/custodian" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Custodians</h3>
                            <p className="text-sm text-slate-600">Learn about approved custodians and their role in your Silver IRA.</p>
                        </Link>
                        <Link href="/silver-ira/rollover" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rollover</h3>
                            <p className="text-sm text-slate-600">How to transfer existing retirement funds into a Silver IRA.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Open a Fully Compliant Silver IRA"
                        subheadline="Augusta Precious Metals ensures your Silver IRA meets all IRS requirements. Their education-first approach helps you understand the rules before investing."
                        trackSource="silver-ira-rules"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
