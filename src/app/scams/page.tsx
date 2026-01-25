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
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-semibold text-sm mb-6">
              <ShieldAlert className="h-4 w-4" />
              SCAM PROTECTION CENTER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Verify Before You Invest
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              The Gold IRA industry has its share of bad actors. Our research
              team investigates complaints, lawsuits, and red flags so you
              don&apos;t become a victim.
            </p>

            {/* Trust Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                <Search className="h-5 w-5 text-amber-400" />
                <span className="text-white font-semibold">15+ Companies Investigated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                <FileText className="h-5 w-5 text-amber-400" />
                <span className="text-white font-semibold">Court Records Reviewed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                <Eye className="h-5 w-5 text-amber-400" />
                <span className="text-white font-semibold">Monthly Updates</span>
              </div>
            </div>

            <Link
              href="#verified"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
            >
              <ShieldCheck className="h-5 w-5" />
              See Verified Companies
            </Link>
          </div>
        </Container>
      </section>

      {/* Scam Types */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500/20 rounded-lg border border-red-500/30">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Common Gold IRA Scams
                </h2>
                <p className="text-slate-400">
                  Know what to watch for before you invest
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {scamTypes.map((scam) => (
                <Link
                  key={scam.title}
                  href={scam.link}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        scam.severity === "critical"
                          ? "bg-red-500/20 text-red-400"
                          : scam.severity === "high"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      <scam.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">
                          {scam.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            scam.severity === "critical"
                              ? "bg-red-500/20 text-red-400"
                              : scam.severity === "high"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {scam.severity}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{scam.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-red-400 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/learn/gold-ira-scams"
                className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300"
              >
                Read our complete scam guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Red Flags vs Green Flags */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Red Flags vs. Green Flags
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Red Flags */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-6 w-6 text-red-400" />
                  <h3 className="text-xl font-bold text-red-400">
                    Warning Signs
                  </h3>
                </div>
                <ul className="space-y-3">
                  {redFlags.map((flag, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Green Flags */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">
                    Trust Signals
                  </h3>
                </div>
                <ul className="space-y-3">
                  {greenFlags.map((flag, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Companies */}
      <section id="verified" className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <ShieldCheck className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Verified Safe Companies
                </h2>
                <p className="text-slate-400">
                  These companies passed our background checks
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {verifiedCompanies.map((company, index) => (
                <div
                  key={company.slug}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 ${
                    index === 0
                      ? "border-green-500/30 bg-green-500/5"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <BadgeCheck className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white text-lg">
                            {company.name}
                          </h3>
                          {index === 0 && (
                            <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full">
                              {company.highlight}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-1 text-sm">
                          <span className="text-slate-400">
                            BBB: <span className="text-green-400">{company.bbb}</span>
                          </span>
                          <span className="text-slate-400">
                            Complaints: <span className="text-green-400">{company.complaints}</span>
                          </span>
                          <span className="text-slate-400">
                            Lawsuits: <span className="text-green-400">{company.lawsuits}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/reviews/${company.slug}`}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                        index === 0
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-600 hover:to-amber-700"
                          : "bg-white/10 text-white hover:bg-white/20"
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
                className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300"
              >
                See all company rankings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Investigated Companies */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <Scale className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Investigated Companies
                </h2>
                <p className="text-slate-400">
                  Companies with documented issues you should research
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {investigatedCompanies.map((company) => (
                <Link
                  key={company.slug}
                  href={`/reviews/${company.slug}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-orange-400 text-sm mt-1">
                        {company.issue}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-orange-400 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/investigative-hub"
                className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300"
              >
                View our full investigative research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Verify */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
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
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-amber-500/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-2">
                  How do I know if a Gold IRA company is legitimate?
                </h3>
                <p className="text-slate-400">
                  Check their BBB rating (should be A or higher), look for complaints on Consumer Affairs and Trustpilot, verify they use IRS-approved depositories, and confirm they provide transparent pricing. Legitimate companies educate first and never pressure you to decide immediately.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-2">
                  What is the most common Gold IRA scam?
                </h3>
                <p className="text-slate-400">
                  The &quot;home storage IRA&quot; scam is the most dangerous. Companies claim you can store IRA gold in your home safe. This violates IRS rules and can result in the entire IRA being treated as a distribution, triggering income taxes plus a 10% early withdrawal penalty.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-2">
                  How do I report a Gold IRA scam?
                </h3>
                <p className="text-slate-400">
                  Report to the BBB (bbb.org), FTC (reportfraud.ftc.gov), your state attorney general, and the CFPB. Also leave honest reviews on Google and Trustpilot to warn other investors.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Want Personalized Guidance from a Verified Company?"
            subheadline="Augusta Precious Metals offers free, no-pressure consultations. Get expert advice on protecting your retirement—with zero obligation."
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
