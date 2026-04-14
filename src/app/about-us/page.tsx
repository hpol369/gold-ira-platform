// src/app/about-us/page.tsx
// Team manifesto - anti-scammer, trust-building

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import {
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  Scale,
  CheckCircle2,
  XCircle,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Rich Dad Retirement | Our Mission & Team",
  description:
    "Rich Dad Retirement is the definitive IRA information hub helping 55+ Americans protect retirement savings through independent research, transparent reviews, and education — not sales pressure.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Rich Dad Retirement | Our Mission & Team",
    description:
      "Helping 55+ Americans protect retirement savings through independent research, transparent reviews, and education — not sales pressure.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Rich Dad Retirement" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Rich Dad Retirement",
      url: "https://richdadretirement.com",
      foundingDate: "2024",
      description:
        "Independent Gold IRA research and education. We investigate companies so you don't have to.",
      knowsAbout: [
        "Gold IRA",
        "Precious Metals Investing",
        "Retirement Planning",
        "401k Rollovers",
        "Wealth Management",
      ],
    },
    {
      "@type": "WebPage",
      name: "About Rich Dad Retirement",
      description: "Our mission, team, editorial standards, and how we make money.",
      url: "https://richdadretirement.com/about-us",
    },
  ],
};

const aboutArticle = articleSchema({
  title: "About Rich Dad Retirement | Our Mission & Team",
  description: "Rich Dad Retirement is the definitive IRA information hub helping 55+ Americans protect retirement savings through independent research and education.",
  slug: "/about-us",
  datePublished: "2024-06-01",
  dateModified: "2026-03-19",
});

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
]);

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <SchemaScript schema={aboutArticle} />
      <SchemaScript schema={breadcrumbs} />
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
                  DATA-DRIVEN RESEARCH
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                  We&apos;re the Rich Dad Retirement Editorial Team.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We got sick of watching scammers prey on retirees.
                  <span className="text-[#000080] font-semibold">
                    {" "}This site is our response.
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
                The Moment We Decided to Act
              </h2>

              <p className="text-lg">
                In 2022, a team member&apos;s 72-year-old father called in a panic. A
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
                Our team has decades of combined experience in wealth management. We knew how this
                industry worked. But when we saw it targeting real families, we
                knew we couldn&apos;t stay silent anymore.
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
                Neither extreme serves you. We built Rich Dad Retirement to be
                the <strong>middle path</strong>—honest education about when
                gold makes sense (and when it doesn&apos;t), plus ruthless
                investigation of the companies in this space.
              </p>

              <h2 className="text-2xl text-[#000080] flex items-center gap-3 not-prose mt-12 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>
                What We Actually Do
              </h2>

              <ul>
                <li>
                  <strong>We research Gold IRA companies</strong>—BBB records,
                  CFTC filings, customer complaints, fee disclosures. The stuff
                  most people don&apos;t have time to dig through.
                </li>
                <li>
                  <strong>We call out the bad actors</strong>—companies with
                  lawsuits, deceptive pricing, or aggressive sales tactics. See
                  our{" "}
                  <Link href="/investigative-hub" className="text-[#B22234]">
                    Investigative Hub
                  </Link>
                  .
                </li>
                <li>
                  <strong>We recommend the good ones</strong>—companies with
                  transparent pricing, education-first approaches, and clean
                  regulatory records.
                </li>
                <li>
                  <strong>We teach</strong>—through our{" "}
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
              Our Background
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#B22234] mb-2">350+</div>
                <div className="text-[#000080] font-semibold mb-1">
                  Articles Published
                </div>
                <p className="text-slate-500 text-sm">
                  Guides, reviews, analysis, and educational content
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
                  Education first. We&apos;ll tell you when gold ISN&apos;T
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
              How We Keep the Lights On
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <p className="text-slate-600 text-lg mb-6">
                Let us be direct: we earn referral fees when you request
                information from companies we recommend. That&apos;s how this
                site exists.
              </p>

              <p className="text-slate-600 text-lg mb-6">
                But here&apos;s our promise:{" "}
                <span className="text-[#000080] font-semibold">
                  We will never recommend a company we wouldn&apos;t trust with
                  our own family&apos;s retirement.
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
                    We publish negative reviews of companies with problems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">
                    We&apos;ll tell you when a Gold IRA isn&apos;t right for your
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

      {/* What We Stand Against */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#000080] text-center mb-8">
              What We Stand Against
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
                  See Our Top Picks
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <AugustaCTA />
      <Footer />
    </main>
  );
}
