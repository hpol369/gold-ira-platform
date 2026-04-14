import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { ShieldCheck, CheckCircle2, ChevronRight, AlertTriangle, FileText, RefreshCw, Users, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Standards — Rich Dad Retirement",
  description: "How Rich Dad Retirement researches, writes, fact-checks, and updates content. Our editorial standards, corrections policy, and affiliate disclosure.",
  alternates: {
    canonical: "/editorial-standards",
  },
};

const schema = articleSchema({
  title: "Editorial Standards",
  description: "How Rich Dad Retirement researches, writes, fact-checks, and updates content.",
  slug: "/editorial-standards",
  datePublished: "2026-01-15",
  dateModified: "2026-03-20",
});

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Editorial Standards", url: "/editorial-standards" },
]);

export default function EditorialStandardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchemaScript schema={schema} />
      <SchemaScript schema={breadcrumbs} />

      {/* Header */}
      <header className="bg-slate-50 py-20 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-700">Editorial Standards</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6 border border-blue-200">
              <Scale className="h-4 w-4" />
              Trust &amp; Integrity
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#000080] mb-4 leading-tight">
              Editorial Standards
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Rich Dad Retirement publishes content that directly affects people&apos;s retirement savings. We take that responsibility seriously. This page explains exactly how we research, write, fact-check, and update our content.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-12">
        <div className="max-w-3xl prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">

          {/* How We Research */}
          <div className="not-prose flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">How We Research</h2>
          </div>
          <p>
            Every article on Rich Dad Retirement begins with primary source research. We don&apos;t rely on other blogs or aggregator sites. Our research starts with:
          </p>
          <ul>
            <li><strong>Government sources:</strong> IRS.gov (tax rules, contribution limits, Publication 590), SSA.gov (Social Security), OPM.gov (federal retirement), TSP.gov (Thrift Savings Plan), BLS.gov (inflation data).</li>
            <li><strong>Industry data:</strong> World Gold Council (gold performance), LBMA (precious metals pricing), Kitco (spot prices).</li>
            <li><strong>Company verification:</strong> BBB.org (ratings, complaints), company press releases, SEC filings where applicable.</li>
            <li><strong>Academic research:</strong> Employee Benefit Research Institute, Federal Reserve reports, Census Bureau retirement data.</li>
          </ul>
          <p>
            When we cite a statistic (for example, &ldquo;gold has returned 8.1% annually since 2000&rdquo;), we verify it against the original data source and include the source in our references section.
          </p>

          {/* How We Write */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Users className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">How We Write</h2>
          </div>
          <p>
            Our content is written by <Link href="/author/thomas-richardson">Thomas Richardson</Link>, Senior Editor &amp; Founder, with deep expertise in retirement planning and precious metals research. We write for real people &mdash; factory workers, nurses, teachers, government employees, truckers &mdash; not Wall Street insiders.
          </p>
          <p>Our writing standards:</p>
          <ul>
            <li><strong>Plain English:</strong> No jargon. If a concept requires a technical term, we explain it.</li>
            <li><strong>Answer first:</strong> Every article leads with the direct answer to the question. Context and detail follow.</li>
            <li><strong>No scare tactics:</strong> We present facts and let readers draw their own conclusions. We never use doom-and-gloom language to pressure decisions.</li>
            <li><strong>Job-specific examples:</strong> We use real-world scenarios relevant to our readers (pension rollovers, TSP to Gold IRA, Social Security timing).</li>
          </ul>

          {/* How We Fact-Check */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <ShieldCheck className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">How We Fact-Check</h2>
          </div>
          <p>
            All content is reviewed by our <Link href="/editorial-board">Editorial Board</Link> before publication. The fact-checking process includes:
          </p>
          <div className="not-prose bg-green-50 rounded-xl p-6 border border-green-200 my-6">
            <ul className="space-y-3">
              {[
                "IRS rules verified against current publications (not outdated sources)",
                "Company ratings confirmed on BBB.org within 90 days",
                "Fee structures verified directly with company representatives",
                "Gold/silver performance claims verified against World Gold Council data",
                "Social Security figures confirmed against latest SSA.gov publications",
                "All statistics include named sources with specific dates",
                "No projections presented as guarantees",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Update */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <RefreshCw className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">How We Update Content</h2>
          </div>
          <p>Financial regulations and company offerings change. Our update policy:</p>
          <ul>
            <li><strong>Regulatory changes:</strong> When the IRS, SSA, or other agencies update rules (e.g., new contribution limits, RMD table changes), we update affected articles within 48 hours.</li>
            <li><strong>Quarterly reviews:</strong> All company reviews and fee comparisons are re-verified every 90 days.</li>
            <li><strong>Annual audit:</strong> Every article undergoes a comprehensive review once per year.</li>
            <li><strong>Update timestamps:</strong> Every article displays its last updated date. We never change a date without making substantive changes to the content.</li>
          </ul>

          {/* Corrections Policy */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">Corrections Policy</h2>
          </div>
          <p>
            We take errors seriously. If we discover or are informed of an inaccuracy:
          </p>
          <ul>
            <li><strong>Immediate fix:</strong> Factual errors are corrected as soon as they&apos;re identified.</li>
            <li><strong>Transparency:</strong> Significant corrections include a note at the top of the article explaining what was changed and when.</li>
            <li><strong>No silent edits:</strong> We don&apos;t quietly change ratings, recommendations, or key facts. Material changes are disclosed.</li>
          </ul>
          <p>
            Found an error? Email us at <strong>corrections@richdadretirement.com</strong> or use our <Link href="/contact">contact page</Link>.
          </p>

          {/* Affiliate Disclosure */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Scale className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">Affiliate Disclosure</h2>
          </div>
          <p>
            Rich Dad Retirement earns commissions from some of the companies we recommend. Here&apos;s how that works:
          </p>
          <ul>
            <li><strong>Commissions never influence ratings.</strong> Our ratings are based on our independent evaluation of fees, service, reputation, and suitability. A company that pays us more does not get a higher rating.</li>
            <li><strong>We recommend companies we don&apos;t earn from.</strong> Some of our recommended companies have no affiliate relationship with us. We include them because they&apos;re good for our readers.</li>
            <li><strong>Disclosure on every page.</strong> Pages that contain affiliate links clearly disclose this relationship.</li>
            <li><strong>No paid placements.</strong> Companies cannot pay for a positive review or placement in our rankings.</li>
          </ul>

          {/* Author Qualifications */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Users className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">Author Qualifications</h2>
          </div>
          <p>
            All content on Rich Dad Retirement is written and reviewed by individuals with direct experience in retirement planning and financial services:
          </p>
          <ul>
            <li><strong>Thomas Richardson, Senior Editor &amp; Founder</strong> &mdash; Data-driven research across retirement planning, IRS regulations, and precious metals markets. <Link href="/author/thomas-richardson">Read bio</Link>.</li>
            <li><strong>Editorial Board</strong> &mdash; Our board reviews all content for accuracy and compliance with these standards. <Link href="/editorial-board">Learn more</Link>.</li>
          </ul>

          {/* Links */}
          <div className="not-prose mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Related Pages</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/editorial-board" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <ShieldCheck className="h-4 w-4" /> Editorial Board
              </Link>
              <Link href="/editorial-policy" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <FileText className="h-4 w-4" /> Editorial Policy
              </Link>
              <Link href="/author/thomas-richardson" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                <Users className="h-4 w-4" /> About Thomas Richardson
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
