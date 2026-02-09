// src/app/silver-retirement/inheritance-planning/page.tsx
// Keywords: silver inheritance planning, silver in estate, leaving silver to children

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import LeadCaptureButton from "@/components/lp/LeadCaptureButton";
import {
  ArrowRight,
  FileText,
  Shield,
  Scale,
  Users,
  AlertTriangle,
  CheckCircle2,
  Home,
  Briefcase,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Silver Inheritance Planning | Leave Silver to Heirs Tax-Smart (2026)",
  description:
    "How to include silver in your estate plan. Learn about step-up in basis, trust options, IRA beneficiary rules, and tax-efficient ways to leave silver to children and grandchildren.",
  keywords: [
    "silver inheritance planning",
    "silver in estate",
    "leaving silver to children",
    "silver estate planning",
    "silver inheritance tax",
  ],
  openGraph: {
    title: "Silver Inheritance Planning | Estate Guide",
    description: "Tax-efficient ways to leave silver to your heirs.",
    url: "https://www.richdadretirement.com/silver-retirement/inheritance-planning",
    type: "article",
  },
};

const inheritanceOptions = [
  {
    method: "Direct Bequest in Will",
    description:
      "Leave silver directly to heirs through your will. Simplest approach but goes through probate and becomes public record.",
    stepUpBasis: true,
    avoidsProbate: false,
    complexity: "Low",
    control: "None after death",
    icon: FileText,
  },
  {
    method: "Revocable Living Trust",
    description:
      "Transfer silver to a trust during your lifetime. Avoids probate, maintains privacy, and allows you to change beneficiaries.",
    stepUpBasis: true,
    avoidsProbate: true,
    complexity: "Medium",
    control: "Full until death",
    icon: Shield,
  },
  {
    method: "Irrevocable Trust",
    description:
      "Permanently transfer silver out of your estate. Can reduce estate taxes for very large estates but you lose control.",
    stepUpBasis: false,
    avoidsProbate: true,
    complexity: "High",
    control: "None after transfer",
    icon: Briefcase,
  },
  {
    method: "IRA Beneficiary Designation",
    description:
      "Name beneficiaries on your Silver IRA. Passes directly outside of probate with clear tax rules for inherited IRAs.",
    stepUpBasis: false,
    avoidsProbate: true,
    complexity: "Low",
    control: "Can change anytime",
    icon: Users,
  },
  {
    method: "Joint Ownership (JTWROS)",
    description:
      "Add heirs as joint owners. Silver passes automatically at death but heirs have access while you're alive.",
    stepUpBasis: "Partial",
    avoidsProbate: true,
    complexity: "Low",
    control: "Shared with heir",
    icon: Home,
  },
];

const stepUpExplained = {
  example: {
    purchasePrice: 10000,
    valueAtDeath: 25000,
    capitalGain: 15000,
    taxIfSoldBeforeDeath: 4200, // 28% collectibles rate
    taxWithStepUp: 0,
  },
  explanation:
    "Step-up in basis means your heirs inherit silver at its fair market value on your date of death, not what you paid. If they sell immediately, they owe little to no capital gains tax. This can save thousands in taxes versus gifting silver while alive.",
};

const iraVsPhysical = [
  {
    aspect: "Step-Up in Basis",
    silverIra: "No - distributions taxed as ordinary income",
    physicalSilver: "Yes - heirs get FMV basis at death",
    winner: "Physical",
  },
  {
    aspect: "10-Year Rule (Non-Spouse)",
    silverIra: "Must empty IRA within 10 years",
    physicalSilver: "No time requirement",
    winner: "Physical",
  },
  {
    aspect: "Probate",
    silverIra: "Avoids probate with beneficiary designation",
    physicalSilver: "Goes through probate unless in trust",
    winner: "IRA",
  },
  {
    aspect: "Spouse Inheritance",
    silverIra: "Can roll into own IRA, defer taxes",
    physicalSilver: "Full step-up, can hold or sell",
    winner: "Tie",
  },
  {
    aspect: "Privacy",
    silverIra: "Private - not in probate records",
    physicalSilver: "Public if through probate",
    winner: "IRA",
  },
  {
    aspect: "Estate Tax",
    silverIra: "Included in estate value",
    physicalSilver: "Included in estate value",
    winner: "Tie",
  },
];

const commonMistakes = [
  {
    mistake: "Not Updating Beneficiaries",
    consequence:
      "IRA goes to ex-spouse or deceased relative, creating legal battles and unintended outcomes.",
    solution: "Review beneficiary designations annually and after major life events.",
  },
  {
    mistake: "Keeping Silver Location Secret",
    consequence:
      "Heirs don't know silver exists or where it's stored. Coins sit forgotten in safe deposit boxes.",
    solution: "Document silver holdings and locations. Share with executor and trusted family member.",
  },
  {
    mistake: "Informal Promises",
    consequence:
      "Telling one grandchild 'this silver is yours' without legal documentation leads to disputes.",
    solution: "Put all specific bequests in writing through will or trust.",
  },
  {
    mistake: "Mixing IRA and Personal Silver",
    consequence:
      "Adding personal coins to IRA (prohibited) or losing track of which silver is which.",
    solution: "Maintain clear separation and records of IRA vs. personal holdings.",
  },
  {
    mistake: "Ignoring State Laws",
    consequence:
      "State inheritance taxes, community property rules, and probate requirements vary significantly.",
    solution: "Work with an estate attorney familiar with your state's laws.",
  },
];

const faqs = [
  {
    question: "Do my heirs pay capital gains tax on inherited silver?",
    answer:
      "For physical silver inherited through your estate (will or trust), heirs receive a 'step-up in basis' to the fair market value at your death. If they sell immediately, there's typically no capital gains tax. For inherited Silver IRAs, distributions are taxed as ordinary income with no step-up - non-spouse heirs must empty the IRA within 10 years.",
  },
  {
    question: "Should I keep silver in my IRA or take a distribution for inheritance purposes?",
    answer:
      "It depends on your tax situation and heirs' needs. Physical silver gets step-up basis (potentially tax-free to heirs), while IRA silver doesn't. However, taking a distribution means YOU pay taxes now. If you're in a high tax bracket and expect heirs to be lower, keeping it in IRA may still be beneficial. Consult a tax advisor for your specific situation.",
  },
  {
    question: "How do I leave specific silver coins to specific heirs?",
    answer:
      "Use a 'specific bequest' in your will or trust: 'I leave my collection of American Silver Eagles (approximately 100 coins) to my grandson John Smith.' Be specific but not so detailed that small changes invalidate the bequest. Consider a separate memorandum (allowed in many states) listing which items go to whom.",
  },
  {
    question: "Is silver included in my taxable estate?",
    answer:
      "Yes, all silver (IRA and physical) is included in your gross estate for federal estate tax purposes. However, the current federal exemption is $13.61 million (2026), so most people won't owe federal estate tax. Some states have lower thresholds or inheritance taxes - check your state's rules.",
  },
  {
    question: "Can I leave silver to charity?",
    answer:
      "Yes, and it can be tax-advantaged. You can leave silver directly to a charity in your will (no step-up needed since charities don't pay capital gains). For larger amounts, a Charitable Remainder Trust can provide income to heirs for a period, then silver goes to charity. Consult an estate attorney for complex strategies.",
  },
  {
    question: "What happens to my Silver IRA if I die without naming a beneficiary?",
    answer:
      "The IRA goes to your estate and is subject to probate. This is the worst outcome: no probate avoidance, potential delays in distribution, and the IRA may need to be liquidated faster for estate settlement. Always name primary AND contingent beneficiaries on your IRA accounts.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Silver Inheritance Planning: Estate Guide",
      "description": "How to include silver in your estate plan for tax-efficient inheritance.",
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
  ],
};

export default function SilverInheritancePlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-4 bg-orange-500/20 px-4 py-2 rounded-full border border-orange-500/30">
              <FileText className="h-4 w-4" />
              ESTATE PLANNING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              Silver{" "}
              <span className="text-orange-400">Inheritance Planning</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Leave silver to your children and grandchildren tax-efficiently.
              Step-up in basis, trust strategies, and IRA beneficiary rules explained.
            </p>

            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-inheritance-hero"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-8"
            >
              Build Your Silver Legacy <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* Step-Up in Basis Section */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
              The Power of Step-Up in Basis
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-8">
              This tax rule can save your heirs thousands of dollars - but it only
              applies to physical silver, not Silver IRAs.
            </p>

            <div className="bg-slate-50 border border-orange-500/30 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Example: $10,000 Silver Investment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-3">If Gifted While Alive</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>You paid: $10,000</li>
                    <li>Value when gifted: $25,000</li>
                    <li>Heir's basis: $10,000 (your cost)</li>
                    <li>If heir sells at $25,000: <span className="text-red-400 font-bold">$4,200 tax</span></li>
                    <li className="text-xs text-slate-600">(28% collectibles rate on $15,000 gain)</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-3">If Inherited at Death</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>You paid: $10,000</li>
                    <li>Value at death: $25,000</li>
                    <li>Heir's basis: $25,000 (stepped up!)</li>
                    <li>If heir sells at $25,000: <span className="text-green-400 font-bold">$0 tax</span></li>
                    <li className="text-xs text-slate-600">(No gain = no tax)</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4 text-center">
                <strong className="text-slate-900">Savings: $4,200</strong> in this example.
                With larger silver holdings, the savings can be substantial.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Inheritance Methods */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            Ways to Leave Silver to Heirs
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Different methods offer different benefits. Here's how they compare.
          </p>

          <div className="space-y-4 max-w-5xl mx-auto">
            {inheritanceOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg self-start">
                      <Icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-2">{option.method}</h3>
                      <p className="text-sm text-slate-600 mb-4">{option.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="text-slate-600">
                          <strong>Step-Up:</strong>{" "}
                          {option.stepUpBasis === true
                            ? "Yes"
                            : option.stepUpBasis === false
                            ? "No"
                            : option.stepUpBasis}
                        </span>
                        <span className="text-slate-600">
                          <strong>Avoids Probate:</strong>{" "}
                          {option.avoidsProbate ? "Yes" : "No"}
                        </span>
                        <span className="text-slate-600">
                          <strong>Complexity:</strong> {option.complexity}
                        </span>
                        <span className="text-slate-600">
                          <strong>Control:</strong> {option.control}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* IRA vs Physical Comparison */}
      <section className="py-16 bg-slate-100">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Silver IRA vs Physical Silver for Inheritance
          </h2>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Aspect</th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Silver IRA</th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Physical Silver</th>
                  <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {iraVsPhysical.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : "bg-slate-100"}>
                    <td className="p-4 font-semibold text-slate-900">{row.aspect}</td>
                    <td className="p-4 text-slate-600">{row.silverIra}</td>
                    <td className="p-4 text-slate-600">{row.physicalSilver}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          row.winner === "Physical"
                            ? "bg-slate-200 text-slate-700"
                            : row.winner === "IRA"
                            ? "bg-blue-500/20 text-blue-600"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {row.winner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Planning Your Silver Legacy?
            </h3>
            <p className="text-slate-600 mb-6">
              Augusta Precious Metals can help you understand the inheritance
              implications of different silver investment strategies. Free
              consultation with no pressure.
            </p>
            <LeadCaptureButton
              variant="silver"
              source="silver-retirement-inheritance-mid"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#B22234] hover:bg-[#8b1c2a] text-white h-11 px-8"
            >
              Get Expert Guidance <ArrowRight className="ml-2 h-4 w-4" />
            </LeadCaptureButton>
          </div>
        </Container>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8 flex items-center justify-center gap-3">
            <AlertTriangle className="h-6 w-6 text-[#B22234]" />
            Common Silver Inheritance Mistakes
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commonMistakes.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-red-400 mb-2">{item.mistake}</h3>
                <p className="text-sm text-slate-600 mb-3">{item.consequence}</p>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Planning Checklist */}
      <section className="py-16 bg-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              Silver Inheritance Planning Checklist
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <ul className="space-y-4">
                {[
                  "Inventory all silver holdings (IRA and physical)",
                  "Review and update IRA beneficiary designations",
                  "Document location of physical silver",
                  "Decide: will, trust, or both?",
                  "Consider step-up basis advantages for physical silver",
                  "Consult estate attorney for your state's rules",
                  "Inform executor where silver is stored",
                  "Review plan annually",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-400">{index + 1}</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            Silver Inheritance FAQs
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
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/silver-for-grandchildren"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Silver for Grandchildren</h3>
              <p className="text-sm text-slate-600">Gift strategies while alive</p>
            </Link>
            <Link
              href="/silver-retirement/rmd-rules"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Silver IRA RMD Rules</h3>
              <p className="text-sm text-slate-600">Distribution requirements</p>
            </Link>
            <Link
              href="/silver-retirement/transfer-ira-to-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Transfer IRA to Silver</h3>
              <p className="text-sm text-slate-600">Build your silver holdings</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Build a Silver Legacy for Your Family"
            subheadline="Augusta Precious Metals helps you understand how silver fits into your estate plan. Learn about IRA vs. physical silver for inheritance and make informed decisions for your heirs."
            trackSource="inheritance-planning-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
