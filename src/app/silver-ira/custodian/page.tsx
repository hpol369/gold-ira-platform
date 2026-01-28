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
    Shield,
    Building2,
    FileText,
    Users,
    DollarSign,
    Star,
    Clock,
    Phone,
} from "lucide-react";

export const metadata = createPageMetadata({
    title: "Silver IRA Custodian: How to Choose the Right One (2026)",
    description:
        "Complete guide to Silver IRA custodians. Learn what custodians do, how to choose the right one, and compare top custodians for your precious metals IRA.",
    url: "https://www.richdadretirement.com/silver-ira/custodian",
    imageAlt: "Silver IRA Custodian Guide - Rich Dad Retirement",
});

const custodianRoles = [
    {
        role: "Account Administration",
        description: "Handles all paperwork, account setup, and maintains records of your Silver IRA holdings.",
        icon: FileText,
    },
    {
        role: "IRS Compliance",
        description: "Ensures your account follows all IRS rules, files required tax forms, and maintains regulatory compliance.",
        icon: Shield,
    },
    {
        role: "Transaction Processing",
        description: "Facilitates purchases and sales of silver, processes rollovers, and handles distributions.",
        icon: DollarSign,
    },
    {
        role: "Depository Coordination",
        description: "Works with IRS-approved depositories to store your physical silver securely.",
        icon: Building2,
    },
];

const topCustodians = [
    {
        name: "Equity Trust Company",
        established: "1974",
        specialty: "Full-service self-directed IRA custodian",
        assetsUnderCustody: "$39+ Billion",
        strengths: [
            "50+ years of experience",
            "Excellent online platform",
            "Handles multiple asset types",
            "Strong customer support"
        ],
        fees: "Account setup: $50-80, Annual: $225-325",
        rating: 4.8,
    },
    {
        name: "STRATA Trust Company",
        established: "2008",
        specialty: "Self-directed IRA and alternative investments",
        assetsUnderCustody: "$2+ Billion",
        strengths: [
            "Competitive fee structure",
            "Focus on alternative assets",
            "Fast processing times",
            "Dedicated account representatives"
        ],
        fees: "Account setup: $50, Annual: $95-295",
        rating: 4.6,
    },
    {
        name: "Goldstar Trust Company",
        established: "1989",
        specialty: "Precious metals specialist",
        assetsUnderCustody: "$1+ Billion",
        strengths: [
            "Specializes in precious metals",
            "Transparent fee structure",
            "Strong industry relationships",
            "Educational resources"
        ],
        fees: "Account setup: $50, Annual: $100-175",
        rating: 4.5,
    },
    {
        name: "Madison Trust Company",
        established: "2014",
        specialty: "Self-directed IRAs with online focus",
        assetsUnderCustody: "Growing",
        strengths: [
            "Modern technology platform",
            "Competitive pricing",
            "User-friendly interface",
            "Quick account setup"
        ],
        fees: "Account setup: $50, Annual: $195",
        rating: 4.4,
    },
];

const selectionCriteria = [
    {
        criterion: "Experience with Precious Metals",
        description: "Choose a custodian with specific experience handling silver and gold IRAs. Generic custodians may lack the expertise for precious metals transactions.",
        importance: "Critical",
    },
    {
        criterion: "Fee Transparency",
        description: "Look for custodians with clear, published fee schedules. Hidden fees can significantly erode your returns over time.",
        importance: "High",
    },
    {
        criterion: "Customer Service Quality",
        description: "Your custodian should be responsive and knowledgeable. Test their support before committing by calling with questions.",
        importance: "High",
    },
    {
        criterion: "Depository Partnerships",
        description: "Verify they work with reputable, IRS-approved depositories. Ask about segregated storage options and insurance coverage.",
        importance: "Critical",
    },
    {
        criterion: "Technology & Reporting",
        description: "A good online platform makes it easy to track your holdings, view statements, and manage your account.",
        importance: "Medium",
    },
    {
        criterion: "Regulatory Standing",
        description: "Confirm the custodian is properly licensed and has no significant regulatory issues. Check with state banking regulators.",
        importance: "Critical",
    },
];

const warningSignsToAvoid = [
    {
        sign: "Pressure to Buy Specific Products",
        explanation: "Custodians should be neutral. If they're pushing you toward certain silver products, they may have conflicts of interest."
    },
    {
        sign: "Vague or Hidden Fees",
        explanation: "Reputable custodians publish their fees upfront. Beware of 'we'll discuss fees later' responses."
    },
    {
        sign: "Home Storage Promises",
        explanation: "Any custodian claiming you can store IRA metals at home is not following IRS rules and should be avoided."
    },
    {
        sign: "No Physical Address or Limited Contact",
        explanation: "Legitimate custodians have established offices and multiple ways to contact them."
    },
    {
        sign: "Unusually Low Fees",
        explanation: "If fees seem too good to be true, investigate further. They may charge hidden fees or cut corners on service."
    },
];

const faqs = [
    {
        question: "What is a Silver IRA custodian?",
        answer: "A Silver IRA custodian is a financial institution approved by the IRS to hold and administer self-directed IRAs containing precious metals. They handle account paperwork, ensure IRS compliance, process transactions, and coordinate with depositories to store your physical silver. The IRS requires all IRAs to have a custodian - you cannot self-custody IRA assets."
    },
    {
        question: "How do I choose a Silver IRA custodian?",
        answer: "Key factors include: experience with precious metals, transparent fee structure, quality customer service, partnerships with reputable depositories, good technology for account management, and clean regulatory standing. Most investors let their precious metals company recommend a custodian they work with regularly."
    },
    {
        question: "Can I use any custodian for a Silver IRA?",
        answer: "No. The custodian must be an IRS-approved institution that accepts precious metals. Most major custodians like Fidelity or Vanguard don't offer precious metals IRAs. You need a specialized self-directed IRA custodian that works with physical silver."
    },
    {
        question: "What fees do Silver IRA custodians charge?",
        answer: "Typical fees include: account setup ($50-150 one-time), annual administration ($100-300/year), and sometimes transaction fees. Storage fees (charged by the depository, not the custodian) are additional. Total annual costs typically range from $200-400 depending on account size and custodian."
    },
    {
        question: "Is the custodian the same as my precious metals company?",
        answer: "No, they are different entities. The precious metals company (like Augusta or Goldco) sells you the silver and provides investment guidance. The custodian is the administrative entity that holds your IRA and ensures IRS compliance. However, they work together - your precious metals company typically recommends and coordinates with specific custodians."
    },
    {
        question: "Can I change my Silver IRA custodian?",
        answer: "Yes, you can transfer your Silver IRA to a different custodian. This is called a trustee-to-trustee transfer and is tax-free. However, there may be transfer fees, and the process takes 2-4 weeks. Some investors change custodians to get better fees or service."
    },
    {
        question: "What happens if my custodian goes out of business?",
        answer: "Your silver is held at a separate depository, not at the custodian's location, so it's protected. If a custodian closes, your account and assets would typically transfer to another custodian. Choose custodians with strong financial backing and long track records to minimize this risk."
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Silver IRA Custodian: How to Choose the Right One (2026)",
    "description": "Complete guide to Silver IRA custodians. Learn what they do, how to choose one, and compare top custodians.",
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

export default function SilverIraCustodianPage() {
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
                            <Shield className="h-4 w-4" />
                            CUSTODIAN GUIDE
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Silver IRA Custodian: Your Essential Guide
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Every Silver IRA needs a custodian to handle administration and ensure IRS compliance. Learn what custodians do, how to choose the right one, and which custodians specialize in precious metals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                                <Link href="/quiz">
                                    Get Matched With a Provider <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* What Does a Custodian Do */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">What Does a Silver IRA Custodian Do?</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            A custodian is the IRS-required administrator that holds your IRA and ensures regulatory compliance.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {custodianRoles.map((role, index) => {
                                const Icon = role.icon;
                                return (
                                    <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-slate-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-2">{role.role}</h3>
                                                <p className="text-sm text-slate-600">{role.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Users className="h-6 w-6 text-[#B22234] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#B22234] mb-2">Custodian vs. Precious Metals Company</h4>
                                    <p className="text-slate-600">
                                        The custodian handles administration; the precious metals company helps you buy silver.
                                        When you work with Augusta, Goldco, or similar companies, they coordinate with a custodian on your behalf.
                                        You typically don't need to find a custodian yourself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Top Custodians */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Top Silver IRA Custodians</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            These custodians specialize in self-directed IRAs and have experience with precious metals.
                        </p>

                        <div className="space-y-6">
                            {topCustodians.map((custodian, index) => (
                                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden">
                                    <div className="bg-slate-50 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{custodian.name}</h3>
                                            <p className="text-sm text-slate-600">Est. {custodian.established} | {custodian.specialty}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`h-4 w-4 ${star <= Math.floor(custodian.rating) ? 'text-[#B22234] fill-[#B22234]' : 'text-slate-600'}`}
                                                />
                                            ))}
                                            <span className="text-slate-900 font-semibold ml-1">{custodian.rating}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-green-400" /> Strengths
                                                </h4>
                                                <ul className="space-y-2">
                                                    {custodian.strengths.map((strength, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                            <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
                                                            {strength}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="mb-4">
                                                    <h4 className="font-semibold text-slate-900 mb-2">Assets Under Custody</h4>
                                                    <p className="text-[#B22234] font-bold">{custodian.assetsUnderCustody}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 mb-2">Typical Fees</h4>
                                                    <p className="text-sm text-slate-600">{custodian.fees}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Selection Criteria */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">How to Choose a Silver IRA Custodian</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Key factors to evaluate when selecting a custodian for your precious metals IRA.
                        </p>

                        <div className="space-y-4">
                            {selectionCriteria.map((item, index) => (
                                <div key={index} className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-slate-900">{item.criterion}</h3>
                                                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                                    item.importance === 'Critical' ? 'bg-red-500/20 text-red-400' :
                                                    item.importance === 'High' ? 'bg-[#B22234]/20 text-[#B22234]' :
                                                    'bg-[#B22234]/10 text-slate-600'
                                                }`}>
                                                    {item.importance}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Warning Signs */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Red Flags to Avoid</h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Watch out for these warning signs when evaluating Silver IRA custodians.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {warningSignsToAvoid.map((item, index) => (
                                <div key={index} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-red-400 mb-2">{item.sign}</h3>
                                            <p className="text-sm text-slate-600">{item.explanation}</p>
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
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Let Experts Handle the Custodian Coordination</h2>
                        <p className="text-slate-600 mb-6">
                            Top Silver IRA companies work with trusted custodians and handle all the coordination for you.
                            Take our quiz to find the right precious metals company for your needs.
                        </p>
                        <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
                            <Link href="/quiz">
                                Find My Silver IRA Company <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Silver IRA Custodian FAQs</h2>
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
                        <Link href="/silver-ira/rules" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rules</h3>
                            <p className="text-sm text-slate-600">Understand all IRS requirements for Silver IRAs.</p>
                        </Link>
                        <Link href="/silver-ira/companies" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Companies</h3>
                            <p className="text-sm text-slate-600">Compare top precious metals companies that work with custodians.</p>
                        </Link>
                        <Link href="/silver-ira/rollover" className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234] transition-colors">Silver IRA Rollover</h3>
                            <p className="text-sm text-slate-600">Learn how to transfer funds to your new Silver IRA.</p>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-white">
                <Container>
                    <AugustaCTA
                        variant="footer"
                        headline="Work With a Company That Handles Everything"
                        subheadline="Augusta Precious Metals coordinates with trusted custodians on your behalf. Focus on your investment strategy while they handle the administrative details."
                        trackSource="silver-ira-custodian"
                        linkContext="silver"
                    />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
