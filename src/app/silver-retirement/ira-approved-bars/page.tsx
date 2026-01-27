// src/app/silver-retirement/ira-approved-bars/page.tsx
// Keywords: ira approved silver bars - 30 vol, $7.00 CPC

import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { AFFILIATE_LINKS, getTrackedLink } from "@/config/affiliates";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Shield,
  Award,
  Gem,
  Scale,
  BarChart3,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRA-Approved Silver Bars | Complete List for 2026 Silver IRAs",
  description:
    "Complete list of IRS-approved silver bars for retirement accounts. Learn purity requirements (99.9%), top brands like PAMP Suisse and RCM, and what's NOT allowed in your Silver IRA.",
  keywords: [
    "ira approved silver bars",
    "silver bars for ira",
    "irs approved silver bars",
    "silver ira eligible bars",
    "pamp suisse ira",
  ],
  openGraph: {
    title: "IRA-Approved Silver Bars | Complete 2026 List",
    description: "Which silver bars can go in your IRA? Complete list with purity requirements.",
    url: "https://www.richdadretirement.com/silver-retirement/ira-approved-bars",
    type: "article",
  },
};

const approvedBars = [
  {
    name: "PAMP Suisse Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz", "1 kg"],
    purity: ".999 fine",
    origin: "Switzerland",
    premium: "Moderate",
    notes: "Most recognized brand worldwide. Comes with assay certificate. Popular for larger investments.",
    recommended: true,
  },
  {
    name: "Royal Canadian Mint (RCM) Bars",
    weights: ["10 oz", "100 oz"],
    purity: ".9999 fine",
    origin: "Canada",
    premium: "Moderate",
    notes: "Government-minted with higher .9999 purity. Excellent liquidity and resale value.",
    recommended: true,
  },
  {
    name: "Johnson Matthey Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz"],
    purity: ".999 fine",
    origin: "USA/UK",
    premium: "Low-Moderate",
    notes: "Historic refiner (now owned by Asahi). Bars still widely available and highly trusted.",
    recommended: true,
  },
  {
    name: "Engelhard Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz"],
    purity: ".999 fine",
    origin: "USA",
    premium: "Moderate-High",
    notes: "No longer produced but vintage bars are IRA-eligible. Collector premium applies.",
    recommended: false,
  },
  {
    name: "Asahi Silver Bars",
    weights: ["1 oz", "10 oz"],
    purity: ".999 fine",
    origin: "USA/Japan",
    premium: "Low",
    notes: "Newer refiner with excellent quality. Acquired Johnson Matthey operations. Great value.",
    recommended: true,
  },
  {
    name: "Sunshine Minting Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz"],
    purity: ".999 fine",
    origin: "USA",
    premium: "Low",
    notes: "Features MintMark SI security feature. Excellent for cost-conscious investors.",
    recommended: true,
  },
  {
    name: "Valcambi Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz", "1 kg"],
    purity: ".999 fine",
    origin: "Switzerland",
    premium: "Moderate",
    notes: "Swiss quality with assay certificate. CombiBar option allows smaller denominations.",
    recommended: true,
  },
  {
    name: "Perth Mint Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz", "1 kg"],
    purity: ".999 fine",
    origin: "Australia",
    premium: "Moderate",
    notes: "Government-backed mint. Certificate of authenticity included.",
    recommended: true,
  },
  {
    name: "Credit Suisse Silver Bars",
    weights: ["1 oz", "10 oz", "100 oz"],
    purity: ".999 fine",
    origin: "Switzerland",
    premium: "Moderate",
    notes: "Well-known banking name. Excellent resale liquidity.",
    recommended: false,
  },
  {
    name: "Ohio Precious Metals (OPM) Bars",
    weights: ["1 oz", "10 oz", "100 oz"],
    purity: ".999 fine",
    origin: "USA",
    premium: "Low",
    notes: "COMEX-approved refinery. Excellent value for larger purchases.",
    recommended: true,
  },
];

const notApproved = [
  "Collectible or numismatic silver bars",
  "Silver bars below .999 fineness",
  "Generic bars without refiner hallmark",
  "Bars from non-COMEX approved refiners",
  "Damaged or tampered bars",
  "Silver-plated items",
];

const purityRequirements = {
  minimum: ".999 fine (99.9% pure)",
  preferred: ".9999 fine (99.99% pure) for RCM products",
  rejected: "Sterling silver (.925), coin silver (.900), or lower purity",
};

const faqs = [
  {
    question: "What is the minimum purity for IRA-approved silver bars?",
    answer:
      "The IRS requires silver bars to be at least .999 fine (99.9% pure) to qualify for a precious metals IRA. Some bars, like those from the Royal Canadian Mint, exceed this at .9999 fine (99.99% pure). Sterling silver (.925) and coin silver (.900) do NOT qualify.",
  },
  {
    question: "Do silver bars need to come with an assay certificate?",
    answer:
      "While not strictly required by the IRS, most IRA custodians prefer or require bars with assay certificates for verification purposes. Bars from major refiners like PAMP Suisse and Valcambi typically include assay cards. This also helps with future resale value.",
  },
  {
    question: "What size silver bars are best for an IRA?",
    answer:
      "10 oz and 100 oz bars are most popular for Silver IRAs due to their lower premiums per ounce compared to 1 oz bars. However, 1 oz bars offer more flexibility for partial liquidation. Consider 100 oz bars if you're investing $10,000+ in silver, or 10 oz bars for smaller amounts.",
  },
  {
    question: "Are hand-poured silver bars IRA-eligible?",
    answer:
      "It depends. Hand-poured bars must still meet the .999 purity requirement and come from an approved refiner. Many generic hand-poured bars don't qualify because they lack proper refiner hallmarks or assay certificates. Stick to bars from major refiners for IRA purposes.",
  },
  {
    question: "Can I add silver bars I already own to my IRA?",
    answer:
      "No. IRS rules prohibit contributing personally-held precious metals to an IRA. All silver bars must be purchased new through your IRA custodian and shipped directly to an approved depository. You cannot transfer bars from your home safe into your Silver IRA.",
  },
  {
    question: "What's the difference between COMEX-approved and IRA-approved bars?",
    answer:
      "COMEX approval means bars meet futures exchange standards for delivery (typically 1000 oz bars). IRA approval requires .999 purity and proper refiner certification. Most COMEX-approved refiners produce IRA-eligible bars, but COMEX bars themselves are too large for typical IRAs.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "IRA-Approved Silver Bars: Complete List for 2026",
      "description": "Complete list of IRS-approved silver bars for retirement accounts.",
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

export default function IraApprovedBarsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium mb-4 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
              <Gem className="h-4 w-4" />
              IRS-APPROVED LIST
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              IRA-Approved{" "}
              <span className="text-blue-400">Silver Bars</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Complete guide to silver bars that qualify for your retirement account.
              Learn purity requirements, top brands, and what's NOT allowed.
            </p>

            <Button variant="gold" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "ira-approved-bars-hero", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop IRA Silver Bars <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Purity Requirements */}
      <section className="py-12 bg-slate-800/30 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
              IRS Purity Requirements for Silver Bars
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Minimum Requirement</h3>
                <p className="text-2xl font-bold text-green-400 mb-2">.999 Fine</p>
                <p className="text-sm text-slate-400">99.9% pure silver</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                <Award className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Premium Option</h3>
                <p className="text-2xl font-bold text-blue-400 mb-2">.9999 Fine</p>
                <p className="text-sm text-slate-400">99.99% pure (RCM bars)</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <XCircle className="h-8 w-8 text-red-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">NOT Allowed</h3>
                <p className="text-2xl font-bold text-red-400 mb-2">&lt;.999</p>
                <p className="text-sm text-slate-400">Sterling, coin silver</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approved Bars List */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-4">
            IRS-Approved Silver Bars for IRAs
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            These silver bars from major refiners meet IRS requirements for precious
            metals IRAs. All feature proper hallmarks and come with authenticity
            guarantees.
          </p>

          <div className="space-y-4 max-w-5xl mx-auto">
            {approvedBars.map((bar, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 ${
                  bar.recommended
                    ? "border-green-500/30"
                    : "border-white/10"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{bar.name}</h3>
                      {bar.recommended && (
                        <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-2 py-1 rounded">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{bar.notes}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-slate-300">
                        <strong className="text-white">Purity:</strong> {bar.purity}
                      </span>
                      <span className="text-slate-300">
                        <strong className="text-white">Origin:</strong> {bar.origin}
                      </span>
                      <span className="text-slate-300">
                        <strong className="text-white">Premium:</strong> {bar.premium}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bar.weights.map((weight, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
                      >
                        {weight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-amber-900/20 to-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing Silver Bars?
            </h3>
            <p className="text-slate-300 mb-6">
              Augusta's precious metals specialists can help you select the right
              silver bars based on your investment amount and goals. Free consultation,
              no pressure.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "ira-approved-bars-mid", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Expert Guidance <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* NOT Approved Section */}
      <section className="py-16 bg-slate-800/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <XCircle className="h-6 w-6 text-red-400" />
              What's NOT Allowed in a Silver IRA
            </h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <ul className="space-y-3">
                {notApproved.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-slate-900/50 rounded-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-400">
                  <strong className="text-white">Important:</strong> You cannot
                  contribute silver bars you already own to your IRA. All purchases
                  must go through your IRA custodian and ship directly to an approved
                  depository.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bar Size Comparison */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
            Which Bar Size Is Right for You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-slate-400" />
                <h3 className="font-bold text-white">1 oz Bars</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li>+ Maximum flexibility</li>
                <li>+ Easy partial liquidation</li>
                <li>- Higher premium per oz</li>
              </ul>
              <p className="text-xs text-slate-500">Best for: Small investments under $5,000</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-amber-400" />
                <h3 className="font-bold text-white">10 oz Bars</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li>+ Good balance of premium/flexibility</li>
                <li>+ Lower premium than 1 oz</li>
                <li>+ Easy to store and handle</li>
              </ul>
              <p className="text-xs text-amber-400 font-semibold">MOST POPULAR CHOICE</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-slate-400" />
                <h3 className="font-bold text-white">100 oz Bars</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li>+ Lowest premium per oz</li>
                <li>+ Best for large investments</li>
                <li>- Less flexibility for partial sales</li>
              </ul>
              <p className="text-xs text-slate-500">Best for: Investments $25,000+</p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-800/30 border-y border-white/10">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
            IRA Silver Bar FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-white font-semibold list-none">
                  {faq.question}
                  <span className="text-amber-400 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-4 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Pages */}
      <section className="py-12">
        <Container>
          <h2 className="text-xl font-bold text-white text-center mb-6">
            Related Silver IRA Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/ira-approved-coins"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">IRA-Approved Silver Coins</h3>
              <p className="text-sm text-slate-400">Eagles, Maple Leafs & more</p>
            </Link>
            <Link
              href="/silver-retirement/transfer-ira-to-silver"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">Transfer IRA to Silver</h3>
              <p className="text-sm text-slate-400">Step-by-step transfer guide</p>
            </Link>
            <Link
              href="/silver-retirement/how-much-silver"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">How Much Silver?</h3>
              <p className="text-sm text-slate-400">Portfolio allocation guide</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-white/10">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Shop IRA-Approved Silver Bars"
            subheadline="Augusta Precious Metals offers a curated selection of IRA-eligible silver bars from top refiners. Get competitive pricing and expert guidance on building your Silver IRA."
            trackSource="ira-approved-bars-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
