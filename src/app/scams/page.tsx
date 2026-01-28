// src/app/scams/page.tsx
// Scam Shield Hub - Trust-building page for skeptical 60+ investors

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Search,
  Phone,
  FileText,
  Scale,
  Eye,
  ArrowRight,
  BadgeCheck,
  ShieldAlert,
  ShieldCheck,
  Landmark,
  UserX,
  DollarSign,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gold IRA Scam Protection Center | Verify Before You Invest",
  description:
    "Protect yourself from Gold IRA scams. Our research team investigates complaints, lawsuits, and red flags. Verify any company before investing your retirement savings.",
  openGraph: {
    title: "Gold IRA Scam Protection Center | Verify Before You Invest",
    description:
      "Protect yourself from Gold IRA scams. Verify any company before investing your retirement savings.",
  },
};

const scamTypes = [
  {
    icon: Building2,
    title: "Home Storage IRA Scam",
    description:
      "Companies claiming you can store IRA gold at home. This violates IRS rules and triggers immediate taxes + 10% penalty.",
    link: "/learn/home-storage-gold-ira",
    severity: "critical",
  },
  {
    icon: DollarSign,
    title: "Excessive Premium Scam",
    description:
      "Charging 15-50% over spot price for standard bullion. Legitimate premiums are 3-8% for coins.",
    link: "/learn/gold-ira-scams#excessive-premiums",
    severity: "high",
  },
  {
    icon: Phone,
    title: "High-Pressure Sales Tactics",
    description:
      "Aggressive salespeople pushing you to decide immediately. Legitimate companies educate first.",
    link: "/learn/gold-ira-scams#high-pressure",
    severity: "high",
  },
  {
    icon: UserX,
    title: "Numismatic Coin Upsell",
    description:
      "Pushing 'rare' collectible coins with 30-100% markups instead of standard IRA-eligible bullion.",
    link: "/learn/gold-ira-scams#numismatic-coins",
    severity: "medium",
  },
];

const verifiedCompanies = [
  {
    name: "Augusta Precious Metals",
    slug: "augusta-precious-metals",
    status: "verified",
    bbb: "A+",
    complaints: "Zero unresolved",
    lawsuits: "None found",
    highlight: "Our #1 Recommendation",
  },
  {
    name: "Goldco",
    slug: "goldco",
    status: "verified",
    bbb: "A+",
    complaints: "Low",
    lawsuits: "Minor (resolved)",
    highlight: "Established since 2006",
  },
  {
    name: "American Hartford Gold",
    slug: "american-hartford-gold",
    status: "verified",
    bbb: "A+",
    complaints: "Low",
    lawsuits: "None found",
    highlight: "Lower minimums",
  },
];

const investigatedCompanies = [
  {
    name: "Lear Capital",
    slug: "lear-capital-complaints",
    issue: "Class action settlement history",
  },
  {
    name: "Rosland Capital",
    slug: "rosland-capital-lawsuit",
    issue: "FTC settlement ($3.8M)",
  },
  {
    name: "Regal Assets",
    slug: "regal-assets-lawsuit",
    issue: "SEC action & complaints",
  },
  {
    name: "US Money Reserve",
    slug: "us-money-reserve-complaints",
    issue: "High complaint volume",
  },
  {
    name: "Advantage Gold",
    slug: "advantage-gold-complaints",
    issue: "Sales practice complaints",
  },
  {
    name: "Birch Gold",
    slug: "birch-gold-complaints",
    issue: "Documented complaints",
  },
];

const redFlags = [
  "Promises of guaranteed returns or 'risk-free' investing",
  "Pressure to decide today or miss a 'special offer'",
  "Refusing to provide fee schedules in writing",
  "Pushing collectible/numismatic coins over bullion",
  "Claims that you can store IRA gold at home",
  "No physical address or vague company information",
  "Unsolicited calls about 'urgent' gold opportunities",
  "Reluctance to provide BBB rating or references",
];

const greenFlags = [
  "Transparent fee schedules published online",
  "A+ BBB rating with few or no complaints",
  "Education-first approach (no pressure)",
  "Uses IRS-approved depositories only",
  "Clear buyback policies in writing",
  "Licensed and registered in your state",
  "Willing to provide client references",
  "Takes time to understand your goals",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Gold IRA Scam Protection Center",
      description:
        "Comprehensive resource for protecting yourself from Gold IRA scams and verifying companies before investing.",
      url: "https://richdadretirement.com/scams",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if a Gold IRA company is legitimate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check their BBB rating (should be A or higher), look for complaints on Consumer Affairs and Trustpilot, verify they use IRS-approved depositories, and confirm they provide transparent pricing. Legitimate companies educate first and never pressure you to decide immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common Gold IRA scam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 'home storage IRA' scam is the most dangerous. Companies claim you can store IRA gold in your home safe. This violates IRS rules and can result in the entire IRA being treated as a distribution, triggering income taxes plus a 10% early withdrawal penalty.",
          },
        },
        {
          "@type": "Question",
          name: "How do I report a Gold IRA scam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Report to the BBB (bbb.org), FTC (reportfraud.ftc.gov), your state attorney general, and the CFPB. Also leave honest reviews on Google and Trustpilot to warn other investors.",
          },
        },
      ],
    },
  ],
};

export default function ScamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#B22234]/5 rounded-full blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full text-red-600 font-semibold text-sm mb-6">
              <ShieldAlert className="h-4 w-4" />
              SCAM PROTECTION CENTER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#000080] mb-6">
              Verify Before You Invest
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              The Gold IRA industry has its share of bad actors. Our research
              team investigates complaints, lawsuits, and red flags so you
              don&apos;t become a victim.
            </p>

            {/* Trust Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200">
                <Search className="h-5 w-5 text-[#B22234]" />
                <span className="text-[#000080] font-semibold">15+ Companies Investigated</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200">
                <FileText className="h-5 w-5 text-[#B22234]" />
                <span className="text-[#000080] font-semibold">Court Records Reviewed</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200">
                <Eye className="h-5 w-5 text-[#B22234]" />
                <span className="text-[#000080] font-semibold">Monthly Updates</span>
              </div>
            </div>

            <Link
              href="#verified"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-xl hover:bg-green-700 transition-all"
            >
              <ShieldCheck className="h-5 w-5" />
              See Verified Companies
            </Link>
          </div>
        </Container>
      </section>

      {/* Scam Types */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-100 rounded-lg border border-red-200">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#000080]">
                  Common Gold IRA Scams
                </h2>
                <p className="text-slate-500">
                  Know what to watch for before you invest
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {scamTypes.map((scam) => (
                <Link
                  key={scam.title}
                  href={scam.link}
                  className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-red-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        scam.severity === "critical"
                          ? "bg-red-100 text-red-600"
                          : scam.severity === "high"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      <scam.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-[#000080] group-hover:text-red-600 transition-colors">
                          {scam.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            scam.severity === "critical"
                              ? "bg-red-100 text-red-600"
                              : scam.severity === "high"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {scam.severity}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm">{scam.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-red-600 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/learn/gold-ira-scams"
                className="inline-flex items-center gap-2 text-[#B22234] font-medium hover:text-[#8B1A28]"
              >
                Read our complete scam guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Red Flags vs Green Flags */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-12">
              Red Flags vs. Green Flags
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Red Flags */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-600">
                    Warning Signs
                  </h3>
                </div>
                <ul className="space-y-3">
                  {redFlags.map((flag, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Green Flags */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-600">
                    Trust Signals
                  </h3>
                </div>
                <ul className="space-y-3">
                  {greenFlags.map((flag, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Companies */}
      <section id="verified" className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-100 rounded-lg border border-green-200">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#000080]">
                  Verified Safe Companies
                </h2>
                <p className="text-slate-500">
                  These companies passed our background checks
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {verifiedCompanies.map((company, index) => (
                <div
                  key={company.slug}
                  className={`bg-slate-50 border rounded-xl p-6 ${
                    index === 0
                      ? "border-green-300 bg-green-50/50"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <BadgeCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#000080] text-lg">
                            {company.name}
                          </h3>
                          {index === 0 && (
                            <span className="text-xs px-2 py-0.5 bg-[#B22234]/10 text-[#B22234] rounded-full">
                              {company.highlight}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-1 text-sm">
                          <span className="text-slate-500">
                            BBB: <span className="text-green-600">{company.bbb}</span>
                          </span>
                          <span className="text-slate-500">
                            Complaints: <span className="text-green-600">{company.complaints}</span>
                          </span>
                          <span className="text-slate-500">
                            Lawsuits: <span className="text-green-600">{company.lawsuits}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/reviews/${company.slug}`}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                        index === 0
                          ? "bg-[#B22234] text-white hover:bg-[#8B1A28]"
                          : "bg-slate-200 text-[#000080] hover:bg-slate-300"
                      }`}
                    >
                      View Full Review
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/best-gold-ira-companies"
                className="inline-flex items-center gap-2 text-[#B22234] font-medium hover:text-[#8B1A28]"
              >
                See all company rankings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Investigated Companies */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-100 rounded-lg border border-orange-200">
                <Scale className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#000080]">
                  Investigated Companies
                </h2>
                <p className="text-slate-500">
                  Companies with documented issues you should research
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {investigatedCompanies.map((company) => (
                <Link
                  key={company.slug}
                  href={`/reviews/${company.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-[#000080] group-hover:text-orange-600 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-orange-600 text-sm mt-1">
                        {company.issue}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-orange-600 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/investigative-hub"
                className="inline-flex items-center gap-2 text-[#B22234] font-medium hover:text-[#8B1A28]"
              >
                View our full investigative research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Verify */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-12">
              How We Verify Companies
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "BBB Check",
                  desc: "We verify ratings and review all complaints",
                },
                {
                  step: 2,
                  title: "Court Records",
                  desc: "We search for lawsuits and regulatory actions",
                },
                {
                  step: 3,
                  title: "Mystery Shop",
                  desc: "We contact companies as potential customers",
                },
                {
                  step: 4,
                  title: "Client Feedback",
                  desc: "We gather real customer experiences",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#B22234]/10 text-[#B22234] flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-[#B22234]/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#000080] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#000080] mb-2">
                  How do I know if a Gold IRA company is legitimate?
                </h3>
                <p className="text-slate-500">
                  Check their BBB rating (should be A or higher), look for complaints on Consumer Affairs and Trustpilot, verify they use IRS-approved depositories, and confirm they provide transparent pricing. Legitimate companies educate first and never pressure you to decide immediately.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#000080] mb-2">
                  What is the most common Gold IRA scam?
                </h3>
                <p className="text-slate-500">
                  The &quot;home storage IRA&quot; scam is the most dangerous. Companies claim you can store IRA gold in your home safe. This violates IRS rules and can result in the entire IRA being treated as a distribution, triggering income taxes plus a 10% early withdrawal penalty.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-[#000080] mb-2">
                  How do I report a Gold IRA scam?
                </h3>
                <p className="text-slate-500">
                  Report to the BBB (bbb.org), FTC (reportfraud.ftc.gov), your state attorney general, and the CFPB. Also leave honest reviews on Google and Trustpilot to warn other investors.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Want Personalized Guidance from a Verified Company?"
            subheadline="Augusta Precious Metals offers free, no-pressure consultations. Get expert advice on protecting your retirement—with zero obligation."
            trackSource="scams-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
