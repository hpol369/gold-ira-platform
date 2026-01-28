// src/app/about-us/page.tsx
// Thomas Richardson's manifesto - first-person, anti-scammer, trust-building

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  Scale,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Award,
  FileSearch,
  Users,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Thomas Richardson | Rich Dad Retirement",
  description:
    "I'm Thomas Richardson. After 20 years in wealth management, I got sick of watching scammers prey on retirees. This site is my response.",
  openGraph: {
    title: "About Thomas Richardson | Rich Dad Retirement",
    description:
      "After 20 years in wealth management, I got sick of watching scammers prey on retirees. This site is my response.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://richdadretirement.com/author/thomas-richardson",
      name: "Thomas Richardson",
      jobTitle: "Founder & Lead Researcher",
      description:
        "Former wealth management professional turned Gold IRA researcher. 20+ years in financial services.",
      worksFor: {
        "@type": "Organization",
        name: "Rich Dad Retirement",
      },
      knowsAbout: [
        "Gold IRA",
        "Precious Metals Investing",
        "Retirement Planning",
        "401k Rollovers",
        "Wealth Management",
      ],
    },
    {
      "@type": "Organization",
      name: "Rich Dad Retirement",
      url: "https://richdadretirement.com",
      founder: {
        "@type": "Person",
        name: "Thomas Richardson",
      },
      foundingDate: "2024",
      description:
        "Independent Gold IRA research and education. We investigate companies so you don't have to.",
    },
    {
      "@type": "WebPage",
      name: "About Thomas Richardson",
      description: "The story behind Rich Dad Retirement and our mission.",
      url: "https://richdadretirement.com/about-us",
    },
  ],
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero - The Manifesto */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B22234]/5 rounded-full blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl border-4 border-[#B22234]/30 shadow-2xl overflow-hidden flex-shrink-0 bg-slate-200">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  {/* Placeholder - replace with actual photo */}
                  <Users className="w-20 h-20 opacity-50" />
                </div>
              </div>

              {/* Intro */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B22234]/10 border border-[#B22234]/30 rounded-full text-[#B22234] text-xs font-semibold mb-4">
                  <Briefcase className="h-3 w-3" />
                  20+ YEARS IN FINANCE
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                  I&apos;m Thomas Richardson.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  I got sick of watching scammers prey on retirees.
                  <span className="text-[#000080] font-semibold">
                    {" "}This site is my response.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Story */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-slate prose-headings:font-bold prose-p:text-slate-600 prose-strong:text-[#000080] prose-li:text-slate-600 max-w-none">
              <h2 className="text-2xl text-[#000080] flex items-center gap-3 not-prose mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                The Moment I Snapped
              </h2>

              <p className="text-lg">
                In 2022, my 72-year-old father called me in a panic. A
                &quot;Gold IRA specialist&quot; had been calling him for weeks,
                telling him the dollar was about to collapse and he needed to
                move his <em>entire</em> IRA into gold coins—immediately.
              </p>

              <p>
                The coins they were pushing? Rare numismatic collectibles priced
                at <strong>40% above market value</strong>. They were using fear
                to steal from a retiree.
              </p>

              <p>
                I&apos;d spent 20 years in wealth management. I knew how this
                industry worked. But when I saw it targeting my own family, I
                realized I couldn&apos;t stay silent anymore.
              </p>

              <h2 className="text-2xl text-[#000080] flex items-center gap-3 not-prose mt-12 mb-6">
                <div className="p-2 bg-[#B22234]/10 rounded-lg">
                  <Scale className="h-5 w-5 text-[#B22234]" />
                </div>
                The Problem: Two Dangerous Extremes
              </h2>

              <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                    <XCircle className="h-5 w-5" />
                    The Gold Sharks
                  </div>
                  <p className="text-slate-500 text-sm m-0">
                    Use fear tactics. Push overpriced coins. Pressure seniors
                    into bad decisions. Give the whole industry a bad name.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                    <XCircle className="h-5 w-5" />
                    The Traditionalists
                  </div>
                  <p className="text-slate-500 text-sm m-0">
                    Dismiss gold entirely. Keep you 100% in stocks and bonds.
                    Leave you exposed when inflation spikes and markets crash.
                  </p>
                </div>
              </div>

              <p>
                Neither extreme serves you. I built Rich Dad Retirement to be
                the <strong>middle path</strong>—honest education about when
                gold makes sense (and when it doesn&apos;t), plus ruthless
                investigation of the companies in this space.
              </p>

              <h2 className="text-2xl text-[#000080] flex items-center gap-3 not-prose mt-12 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>
                What I Actually Do
              </h2>

              <ul>
                <li>
                  <strong>I research Gold IRA companies</strong>—BBB records,
                  CFTC filings, customer complaints, fee disclosures. The stuff
                  most people don&apos;t have time to dig through.
                </li>
                <li>
                  <strong>I call out the bad actors</strong>—companies with
                  lawsuits, deceptive pricing, or aggressive sales tactics. See
                  our{" "}
                  <Link href="/investigative-hub" className="text-[#B22234]">
                    Investigative Hub
                  </Link>
                  .
                </li>
                <li>
                  <strong>I recommend the good ones</strong>—companies with
                  transparent pricing, education-first approaches, and clean
                  regulatory records.
                </li>
                <li>
                  <strong>I teach</strong>—through our{" "}
                  <Link href="/academy" className="text-[#B22234]">
                    Gold IRA Academy
                  </Link>
                  , guides, and comparison tools. Free, no strings attached.
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* My Credentials */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
              My Background
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#B22234] mb-2">20+</div>
                <div className="text-[#000080] font-semibold mb-1">
                  Years in Finance
                </div>
                <p className="text-slate-500 text-sm">
                  Wealth management, retirement planning, portfolio construction
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#B22234] mb-2">15+</div>
                <div className="text-[#000080] font-semibold mb-1">
                  Companies Investigated
                </div>
                <p className="text-slate-500 text-sm">
                  Deep dives into fees, complaints, lawsuits, and business
                  practices
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#B22234] mb-2">0</div>
                <div className="text-[#000080] font-semibold mb-1">
                  Sales Pressure
                </div>
                <p className="text-slate-500 text-sm">
                  Education first. I&apos;ll tell you when gold ISN&apos;T
                  right for you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Make Money (Transparency) */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
              How I Keep the Lights On
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <p className="text-slate-600 text-lg mb-6">
                Let me be direct: I earn referral fees when you request
                information from companies I recommend. That&apos;s how this
                site exists.
              </p>

              <p className="text-slate-600 text-lg mb-6">
                But here&apos;s my promise:{" "}
                <span className="text-[#000080] font-semibold">
                  I will never recommend a company I wouldn&apos;t trust with my
                  own father&apos;s retirement.
                </span>
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">
                    Rankings are based on research, not who pays the most
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">
                    I publish negative reviews of companies with problems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">
                    I&apos;ll tell you when a Gold IRA isn&apos;t right for your
                    situation
                  </span>
                </div>
              </div>

              <p className="text-slate-500 mt-6">
                Read our full{" "}
                <Link href="/editorial-policy" className="text-[#B22234] hover:underline">
                  Editorial Policy
                </Link>{" "}
                for details on how we research and rate companies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What I Stand Against */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
              What I Stand Against
            </h2>

            <div className="space-y-4">
              {[
                "High-pressure sales tactics that prey on fear",
                "Rare coin schemes that charge 30-50% premiums",
                "'Home storage IRA' scams that trigger IRS penalties",
                "Hidden fees buried in fine print",
                "Companies that won't publish their pricing",
                "Salespeople who care more about commissions than clients",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-5 py-3"
                >
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 mt-8">
              If you&apos;ve experienced any of these, report it to our{" "}
              <Link href="/scams" className="text-[#B22234] hover:underline">
                Scam Protection Center
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#000080] mb-4">
              Ready to Do Your Own Research?
            </h2>
            <p className="text-slate-500 mb-8">
              Start with our guides. No sales pitch, no pressure—just the
              information you need to make an informed decision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link href="/academy">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Gold IRA Academy
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-[#000080] hover:bg-slate-50"
                asChild
              >
                <Link href="/best-gold-ira-companies">
                  <Award className="h-5 w-5 mr-2" />
                  See My Top Picks
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
