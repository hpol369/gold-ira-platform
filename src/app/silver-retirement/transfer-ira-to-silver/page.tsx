// src/app/silver-retirement/transfer-ira-to-silver/page.tsx
// HIGH VALUE PAGE: $15.00 CPC - Transfer IRA to Silver Guide

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  AlertTriangle,
  FileText,
  Building2,
  Coins,
  Phone,
  Star,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transfer IRA to Silver | Step-by-Step Silver IRA Rollover Guide (2026)",
  description:
    "Learn how to transfer your IRA to silver. Step-by-step guide covering 401(k), Traditional IRA, and Roth IRA transfers to physical silver. Tax-free rollover process explained.",
  keywords: [
    "transfer ira to silver",
    "silver ira rollover",
    "401k to silver",
    "convert ira to silver",
    "silver ira transfer",
  ],
  openGraph: {
    title: "Transfer IRA to Silver | Complete Rollover Guide",
    description: "Step-by-step guide to transferring your IRA or 401(k) to physical silver.",
    url: "https://www.richdadretirement.com/silver-retirement/transfer-ira-to-silver",
    type: "article",
  },
};

const transferSteps = [
  {
    step: 1,
    title: "Choose a Silver IRA Custodian",
    description:
      "Select an IRS-approved self-directed IRA custodian that allows precious metals. Look for established companies with strong BBB ratings and transparent fees.",
    details: [
      "Research custodians with precious metals experience",
      "Compare setup fees and annual storage costs",
      "Verify IRS-approved depository partnerships",
      "Read customer reviews and complaints",
    ],
    icon: Building2,
  },
  {
    step: 2,
    title: "Open Your Silver IRA Account",
    description:
      "Complete the application process with your chosen custodian. This typically takes 15-30 minutes and requires basic personal and financial information.",
    details: [
      "Provide identification documents",
      "Designate beneficiaries",
      "Select Traditional or Roth IRA type",
      "Sign custodian agreement",
    ],
    icon: FileText,
  },
  {
    step: 3,
    title: "Initiate the Transfer",
    description:
      "Request a direct trustee-to-trustee transfer from your existing IRA or 401(k). This is tax-free and avoids the 60-day rollover deadline.",
    details: [
      "Complete transfer authorization form",
      "Provide existing account details",
      "Choose full or partial transfer amount",
      "Direct transfer avoids tax withholding",
    ],
    icon: ArrowRight,
  },
  {
    step: 4,
    title: "Select Your Silver Products",
    description:
      "Work with your custodian to choose IRS-approved silver bars and coins. All silver must be 99.9% pure and come from approved refiners.",
    details: [
      "American Silver Eagles (most popular)",
      "Canadian Silver Maple Leafs",
      "PAMP Suisse silver bars",
      "Other .999 fine silver products",
    ],
    icon: Coins,
  },
  {
    step: 5,
    title: "Secure Depository Storage",
    description:
      "Your silver is shipped to an IRS-approved depository and stored in your name. You can choose segregated or non-segregated storage.",
    details: [
      "Delaware Depository (most common)",
      "Brink's Global Services",
      "Segregated storage available",
      "Full insurance coverage",
    ],
    icon: Shield,
  },
];

const iraTypes = [
  {
    type: "Traditional IRA",
    canTransfer: true,
    taxImplications: "No taxes due on transfer. Distributions taxed as ordinary income.",
    notes: "Most common transfer type. Full account value can be moved to silver.",
  },
  {
    type: "Roth IRA",
    canTransfer: true,
    taxImplications: "No taxes on transfer or qualified distributions. Tax-free growth.",
    notes: "Ideal for those expecting higher future tax rates. No RMDs during lifetime.",
  },
  {
    type: "401(k) - Current Employer",
    canTransfer: false,
    taxImplications: "Must leave employer or reach age 59.5 for in-service distribution.",
    notes: "Check your plan's in-service distribution rules. Some plans allow partial transfers.",
  },
  {
    type: "401(k) - Former Employer",
    canTransfer: true,
    taxImplications: "No taxes on direct rollover to Silver IRA.",
    notes: "Can transfer full balance. Consider fees comparison before moving.",
  },
  {
    type: "403(b) / TSP",
    canTransfer: true,
    taxImplications: "Same rules as 401(k). No taxes on direct transfer.",
    notes: "Government and nonprofit employees can transfer after separation.",
  },
  {
    type: "SEP IRA / SIMPLE IRA",
    canTransfer: true,
    taxImplications: "SIMPLE IRA requires 2-year holding period before transfer.",
    notes: "Self-employed individuals can diversify into silver.",
  },
];

const faqs = [
  {
    question: "How long does it take to transfer an IRA to silver?",
    answer:
      "A typical Silver IRA transfer takes 1-3 weeks to complete. Opening the new account takes 1-2 days, the transfer request processing takes 5-10 business days depending on your current custodian, and purchasing silver takes 1-3 days. Augusta Precious Metals typically completes the entire process faster due to their established custodian relationships.",
  },
  {
    question: "Are there taxes when transferring an IRA to silver?",
    answer:
      "No, a direct trustee-to-trustee transfer is completely tax-free. Your existing IRA funds move directly to your new Silver IRA without you ever taking possession. This avoids the 60-day rollover deadline and the 20% mandatory withholding that applies to indirect rollovers.",
  },
  {
    question: "Can I transfer my 401(k) to silver while still employed?",
    answer:
      "It depends on your plan's rules. Some 401(k) plans allow 'in-service distributions' after age 59.5 or for hardship. However, most plans require you to leave your employer before you can roll over to a Silver IRA. Check your plan documents or call your HR department to confirm your options.",
  },
  {
    question: "What is the minimum amount to transfer to a Silver IRA?",
    answer:
      "Minimums vary by custodian. Augusta Precious Metals requires a $50,000 minimum investment, while some custodians like Noble Gold accept as little as $2,000. Higher minimums often come with better service and more competitive pricing on silver products.",
  },
  {
    question: "Can I transfer only part of my IRA to silver?",
    answer:
      "Yes, partial transfers are allowed. You can move any portion of your existing IRA to silver while keeping the rest in traditional investments. Many retirees transfer 5-15% of their portfolio to precious metals for diversification while maintaining their existing stock and bond allocations.",
  },
  {
    question: "What happens if I miss the 60-day rollover deadline?",
    answer:
      "If you take a distribution (indirect rollover) and don't deposit it into a new IRA within 60 days, the entire amount becomes taxable income plus a 10% early withdrawal penalty if under 59.5. This is why we strongly recommend a direct trustee-to-trustee transfer which has no deadline risk.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "How to Transfer Your IRA to Silver",
      "description": "Step-by-step guide to transferring an IRA or 401(k) to a Silver IRA.",
      "step": transferSteps.map((step) => ({
        "@type": "HowToStep",
        "position": step.step,
        "name": step.title,
        "text": step.description,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "Transfer IRA to Silver: Complete Rollover Guide",
      "description": "Learn how to transfer your IRA to silver with this comprehensive guide.",
      "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-27",
    },
  ],
};

export default function TransferIraToSilverPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-[#B22234] text-sm font-medium mb-4 bg-[#B22234]/20 px-4 py-2 rounded-full border border-[#B22234]/30">
              <Clock className="h-4 w-4" />
              STEP-BY-STEP GUIDE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              Transfer Your IRA to{" "}
              <span className="text-[#B22234]">Silver</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Move your retirement funds to physical silver without taxes or penalties.
              This guide covers Traditional IRAs, Roth IRAs, 401(k)s, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <LeadCaptureButton
                variant="silver"
                source="silver-retirement-transfer-hero"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-8"
              >
                Start Your Silver Transfer <ArrowRight className="ml-2 h-4 w-4" />
              </LeadCaptureButton>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-slate-300 text-slate-900 hover:bg-slate-100"
              >
                <a href="#steps">See the Steps</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Urgency Banner */}
      <section className="py-4 bg-gradient-to-r from-amber-600/20 via-amber-500/20 to-[#8b1c2a]/20 border-y border-[#B22234]/30">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <AlertTriangle className="h-5 w-5 text-[#B22234]" />
            <p className="text-slate-900">
              <strong className="text-[#B22234]">Market Alert:</strong> With inflation
              concerns and economic uncertainty, more retirees are moving to physical
              silver. Don't let paper assets erode your purchasing power.
            </p>
          </div>
        </Container>
      </section>

      {/* Transfer Steps */}
      <section id="steps" className="py-16 scroll-mt-16">
        <Container>
          <h2 className="text-3xl font-serif font-bold text-[#000080] text-center mb-4">
            5 Steps to Transfer Your IRA to Silver
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            The entire process typically takes 1-3 weeks. Here's exactly what to expect.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {transferSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#B22234]/20 rounded-full flex items-center justify-center border border-[#B22234]/30">
                        <span className="text-2xl font-bold text-[#B22234]">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="h-5 w-5 text-[#B22234]" />
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center bg-slate-50 backdrop-blur-sm border border-[#B22234]/30 rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 text-[#B22234] text-sm font-semibold mb-4">
              <Award className="h-4 w-4" />
              OUR #1 RECOMMENDATION
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Augusta Precious Metals Makes Transfers Easy
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Augusta handles the entire transfer process for you. Their dedicated team
              contacts your existing custodian, manages all paperwork, and ensures a
              smooth, tax-free rollover to your new Silver IRA.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="h-4 w-4 text-green-400" />
                Zero BBB Complaints
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Star className="h-4 w-4 text-[#B22234]" />
                4.9/5 Rating
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4 text-blue-400" />
                Lifetime Support
              </div>
            </div>
            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-transfer-mid"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-8"
            >
              Get Your Free Silver IRA Kit <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* IRA Types Table */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            Which Accounts Can Transfer to Silver?
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
            Most retirement accounts can be transferred to a Silver IRA. Here's a
            breakdown of transfer eligibility and tax implications.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">
                    Account Type
                  </th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900 text-center">
                    Can Transfer?
                  </th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">
                    Tax Implications
                  </th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {iraTypes.map((ira, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : "bg-slate-100"}>
                    <td className="p-4 font-semibold text-slate-900">{ira.type}</td>
                    <td className="p-4 text-center">
                      {ira.canTransfer ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-[#B22234] text-xs font-semibold">
                          CONDITIONAL
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-600">{ira.taxImplications}</td>
                    <td className="p-4 text-slate-600">{ira.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              Tax Advantages of Direct Transfers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Direct Transfer (Recommended)
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                    100% of funds transfer to silver
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                    No 60-day deadline pressure
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                    No mandatory 20% withholding
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                    Unlimited transfers per year
                  </li>
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Indirect Rollover (Riskier)
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                    20% withheld from 401(k) distributions
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                    Must complete within 60 days
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                    Miss deadline = taxable income + penalties
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                    Only one rollover per 12 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            IRA to Silver Transfer FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900 font-semibold list-none">
                  {faq.question}
                  <span className="text-[#B22234] group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-slate-100">
        <Container>
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Continue Your Silver IRA Research
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/ira-approved-bars"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">IRA-Approved Silver Bars</h3>
              <p className="text-sm text-slate-600">Which bars qualify for your IRA</p>
            </Link>
            <Link
              href="/silver-retirement/ira-approved-coins"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">IRA-Approved Silver Coins</h3>
              <p className="text-sm text-slate-600">Eagles, Maple Leafs & more</p>
            </Link>
            <Link
              href="/silver-retirement/rmd-rules"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Silver IRA RMD Rules</h3>
              <p className="text-sm text-slate-600">Distribution requirements explained</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Transfer Your IRA to Silver?"
            subheadline="Augusta Precious Metals has helped thousands of retirees transfer their IRAs to physical silver. Their team handles all the paperwork and ensures a smooth, tax-free transition. Get started with a free consultation today."
            trackSource="transfer-ira-to-silver-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
