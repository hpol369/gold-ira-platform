import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { ShieldCheck, CheckCircle2, FileText, BookOpen, Scale, Clock, ChevronRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Board — Rich Dad Retirement",
  description: "Our Editorial Board reviews all content for accuracy, verifying facts against IRS, SSA, and other primary sources. Learn about our review process and standards.",
  alternates: {
    canonical: "/editorial-board",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rich Dad Retirement Editorial Board",
  "url": "https://www.richdadretirement.com/editorial-board",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Rich Dad Retirement",
    "url": "https://www.richdadretirement.com"
  },
  "description": "Our editorial board reviews all content for accuracy, verifying facts against IRS, SSA, and other primary sources.",
  "publishingPrinciples": "https://www.richdadretirement.com/editorial-standards"
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Editorial Board", url: "/editorial-board" },
]);

const primarySources = [
  { name: "IRS.gov", desc: "Tax rules, IRA regulations, Publication 590", url: "https://www.irs.gov" },
  { name: "SSA.gov", desc: "Social Security benefits, eligibility, COLAs", url: "https://www.ssa.gov" },
  { name: "OPM.gov", desc: "Federal employee retirement (FERS, CSRS)", url: "https://www.opm.gov" },
  { name: "TSP.gov", desc: "Thrift Savings Plan fund data and rules", url: "https://www.tsp.gov" },
  { name: "BLS.gov", desc: "Consumer Price Index, inflation data", url: "https://www.bls.gov" },
  { name: "World Gold Council", desc: "Gold performance, demand statistics", url: "https://www.gold.org" },
  { name: "BBB.org", desc: "Company ratings, complaint histories", url: "https://www.bbb.org" },
  { name: "Census Bureau", desc: "Retirement demographics, savings statistics", url: "https://www.census.gov" },
];

const reviewChecklist = [
  "All IRS rules and regulations verified against current IRS.gov publications",
  "Company fee data confirmed directly with company representatives",
  "BBB ratings cross-referenced with BBB.org within the last 90 days",
  "Statistics include named sources and specific dates",
  "Gold/silver performance data verified against World Gold Council or Kitco",
  "Social Security figures confirmed against latest SSA.gov data",
  "No unsubstantiated claims or misleading projections",
  "Affiliate relationships clearly disclosed",
];

export default function EditorialBoardPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={orgSchema} />
      <SchemaScript schema={breadcrumbs} />

      {/* Header */}
      <header className="bg-[#0C0D18] py-20 border-b border-[#2A2D42]">
        <Container>
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#D0CCC4]">Editorial Board</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700 mb-6 border border-green-200">
              <ShieldCheck className="h-4 w-4" />
              Trust &amp; Transparency
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
              Rich Dad Retirement Editorial Board
            </h1>
            <p className="text-lg text-[#D0CCC4] leading-relaxed">
              Every piece of content on Rich Dad Retirement is reviewed for accuracy before publication. Our editorial board ensures all facts, statistics, and recommendations meet the highest standards of financial journalism.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-12">
        <div className="max-w-4xl">
          {/* Who We Are */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">Who We Are</h2>
            <p className="text-[#D0CCC4] leading-relaxed mb-4">
              The Rich Dad Retirement Editorial Board is responsible for maintaining the accuracy and integrity of all content published on this site. We review guides, reviews, calculators, and educational articles to ensure they reflect current regulations, accurate data, and honest assessments.
            </p>
            <p className="text-[#D0CCC4] leading-relaxed">
              Our team brings deep expertise in retirement planning, IRS regulations, precious metals markets, and financial product analysis. Every article is the product of data-driven research and editorial review.
            </p>
          </section>

          {/* Review Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">Our Review Process</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                <FileText className="h-6 w-6 text-[#D4A94E] mb-3" />
                <h3 className="font-bold text-[#F6F4EF] mb-2">1. Research &amp; Draft</h3>
                <p className="text-sm text-[#D0CCC4]">Content is researched using primary sources (IRS.gov, SSA.gov, OPM.gov, BLS.gov) and verified against company disclosures.</p>
              </div>
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                <Scale className="h-6 w-6 text-[#D4A94E] mb-3" />
                <h3 className="font-bold text-[#F6F4EF] mb-2">2. Fact-Check</h3>
                <p className="text-sm text-[#D0CCC4]">Every claim, statistic, and regulation is verified against the original source. Fee data is confirmed directly with companies.</p>
              </div>
              <div className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
                <ShieldCheck className="h-6 w-6 text-[#D4A94E] mb-3" />
                <h3 className="font-bold text-[#F6F4EF] mb-2">3. Editorial Review</h3>
                <p className="text-sm text-[#D0CCC4]">The editorial board reviews for accuracy, completeness, and compliance with our editorial standards before publication.</p>
              </div>
            </div>
          </section>

          {/* What We Check */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">What We Verify</h2>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <ul className="space-y-3">
                {reviewChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#D0CCC4]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Primary Sources */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">Primary Sources We Consult</h2>
            <p className="text-[#D0CCC4] mb-4">We verify all content against authoritative government and industry sources:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {primarySources.map((source) => (
                <a key={source.name} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-[#0C0D18] rounded-lg p-4 border border-[#2A2D42] hover:border-blue-300 transition-colors group">
                  <ExternalLink className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-[#F6F4EF] group-hover:text-blue-600">{source.name}</p>
                    <p className="text-xs text-[#A8A39A]">{source.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Update Cycle */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#F6F4EF] mb-4">Content Update Cycle</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#A8A39A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F6F4EF]">Quarterly reviews</p>
                  <p className="text-sm text-[#D0CCC4]">All company reviews and fee data are re-verified every 90 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#A8A39A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F6F4EF]">Regulatory updates</p>
                  <p className="text-sm text-[#D0CCC4]">When the IRS or SSA updates regulations (contribution limits, RMD tables, etc.), affected content is updated within 48 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#A8A39A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F6F4EF]">Annual comprehensive review</p>
                  <p className="text-sm text-[#D0CCC4]">Every article undergoes a full review once per year, regardless of regulatory changes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section className="bg-[#0C0D18] rounded-xl p-6 border border-[#2A2D42]">
            <h3 className="font-bold text-[#F6F4EF] mb-4">Related Pages</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/editorial-standards" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <BookOpen className="h-4 w-4" /> Editorial Standards
              </Link>
              <Link href="/editorial-policy" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <FileText className="h-4 w-4" /> Editorial Policy
              </Link>
              <Link href="/about-us" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <BookOpen className="h-4 w-4" /> About Us
              </Link>
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
