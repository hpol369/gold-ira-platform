import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import {
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  TrendingDown,
  DollarSign,
  FileWarning,
  UserCheck,
  ExternalLink,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Disclaimer | Rich Dad Retirement",
  description:
    "Important disclaimers about the educational content on Rich Dad Retirement. Not financial advice. All investments carry risk including potential loss of principal.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Investment Disclaimer | Rich Dad Retirement",
    description:
      "Important disclaimers about the educational content on Rich Dad Retirement. Not financial advice.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Rich Dad Retirement",
      },
    ],
  },
};

const schema = articleSchema({
  title: "Investment Disclaimer",
  description:
    "Important disclaimers about the educational content on Rich Dad Retirement. Not financial advice.",
  slug: "/disclaimer",
  datePublished: "2024-06-01",
  dateModified: "2026-03-19",
});

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Disclaimer", url: "/disclaimer" },
]);

export default function DisclaimerPage() {
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
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-700">Disclaimer</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-6 border border-amber-200">
              <AlertTriangle className="h-4 w-4" />
              Important Notice
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#000080] mb-4 leading-tight">
              Investment Disclaimer
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Please read this disclaimer carefully before using
              richdadretirement.com. This page explains the limitations of our
              content and your responsibilities as a reader.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-12">
        <div className="max-w-3xl prose prose-lg prose-headings:font-serif prose-headings:text-[#000080] prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
          {/* Not Financial Advice */}
          <div className="not-prose flex items-center gap-3 mb-4">
            <ShieldAlert className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              Not Financial Advice
            </h2>
          </div>
          <p>
            The content on Rich Dad Retirement (richdadretirement.com) is for{" "}
            <strong>educational and informational purposes only</strong>. Nothing
            on this website constitutes personalized financial advice, investment
            advice, tax advice, or legal advice.
          </p>
          <p>
            Our articles, guides, calculators, and company reviews are designed
            to help you understand your options. They are not recommendations to
            buy, sell, or hold any specific investment, and they do not take into
            account your individual financial situation, goals, or risk
            tolerance.
          </p>

          {/* No Guarantee of Returns */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <TrendingDown className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              No Guarantee of Returns
            </h2>
          </div>
          <p>
            Past performance of gold, silver, or any other investment does not
            guarantee future results. The value of precious metals can fluctuate
            significantly. Historical data and price charts on this site
            illustrate past trends but should not be interpreted as predictions
            of future performance.
          </p>
          <div className="not-prose bg-amber-50 rounded-xl p-6 border border-amber-200 my-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 m-0">
                <strong>Important:</strong> All investments carry risk, including
                the potential loss of principal. You could lose money investing
                in gold, silver, or any other asset discussed on this site.
              </p>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <DollarSign className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              Affiliate Disclosure
            </h2>
          </div>
          <p>
            Rich Dad Retirement earns commissions from some of the companies
            featured on this website. When you click certain links and request
            information from or open an account with a recommended company, we
            may receive compensation.
          </p>
          <p>
            This compensation helps us maintain the site and produce free
            educational content. However, our editorial opinions and company
            rankings are based on independent research and are not influenced by
            compensation. We recommend companies we believe offer genuine value
            to retirees, regardless of whether we earn a commission.
          </p>
          <p>
            For full details on how we research and rank companies, see our{" "}
            <Link href="/editorial-standards">Editorial Standards</Link>.
          </p>

          {/* Accuracy */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <FileWarning className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              Accuracy of Information
            </h2>
          </div>
          <p>
            We make every effort to ensure the information on this site is
            accurate and up to date. Our content is reviewed regularly and
            updated when tax laws, contribution limits, company offerings, or
            market conditions change.
          </p>
          <p>
            However, we cannot guarantee that all information is current or
            error-free at the time you read it. Financial regulations, IRS
            rules, and company policies change frequently. Always verify
            critical details directly with the relevant institution (IRS, your
            custodian, or the company in question) before making financial
            decisions.
          </p>

          {/* Consult Professionals */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <UserCheck className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              Consult Qualified Professionals
            </h2>
          </div>
          <p>
            Before making any investment decision, we strongly recommend
            consulting with:
          </p>
          <ul>
            <li>
              A <strong>qualified financial advisor</strong> or Certified
              Financial Planner (CFP) who can assess your individual situation
            </li>
            <li>
              A <strong>tax professional</strong> (CPA or enrolled agent) for
              questions about IRA tax rules, rollovers, and Required Minimum
              Distributions
            </li>
            <li>
              An <strong>estate planning attorney</strong> for questions about
              beneficiary designations, trusts, and inheritance
            </li>
          </ul>
          <p>
            Your financial situation is unique. What works for one person may not
            be appropriate for another. A qualified professional can provide
            guidance tailored to your specific circumstances.
          </p>

          {/* Third-Party Links */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <ExternalLink className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              Third-Party Links
            </h2>
          </div>
          <p>
            This website contains links to third-party websites, including Gold
            IRA companies, government agencies, and financial information
            providers. These links are provided for your convenience and
            reference.
          </p>
          <p>
            Rich Dad Retirement does not control, endorse, or guarantee the
            accuracy of content on third-party sites. We are not responsible for
            the privacy practices, terms of service, or content of any external
            website. Visiting a third-party site is at your own risk.
          </p>

          {/* Risk Disclosure */}
          <div className="not-prose flex items-center gap-3 mb-4 mt-12">
            <Scale className="h-6 w-6 text-[#B22234]" />
            <h2 className="text-2xl font-serif font-bold text-[#000080] m-0">
              Risk Disclosure
            </h2>
          </div>
          <p>
            All investments carry risk. When considering precious metals or any
            alternative investment for your retirement portfolio, be aware of the
            following:
          </p>
          <ul>
            <li>
              Gold and silver prices can be volatile and may decline
              significantly in value
            </li>
            <li>
              Physical precious metals in an IRA involve custodian fees, storage
              fees, and potential dealer markups
            </li>
            <li>
              Early withdrawal from an IRA before age 59&frac12; may result in
              taxes and a 10% penalty
            </li>
            <li>
              Precious metals do not generate income (no dividends or interest)
            </li>
            <li>
              Concentrating your retirement savings in any single asset class
              increases risk
            </li>
            <li>
              Past performance of precious metals does not guarantee future
              results
            </li>
          </ul>

          {/* Contact & Last Updated */}
          <div className="not-prose mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">
              <strong>Last updated:</strong> March 19, 2026
            </p>
            <p className="text-sm text-slate-500">
              Questions about this disclaimer? Contact us at{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700"
              >
                our contact page
              </Link>{" "}
              or email{" "}
              <strong>legal@richdadretirement.com</strong>.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
