import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  Sparkles,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Ban,
  Droplet,
  Brush,
  Shield,
  DollarSign,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Cleaning Silver Coins: When It's OK & Safe Methods (2026)",
  description:
    "Should you clean silver coins? Learn when cleaning is acceptable, when it destroys value, and safe cleaning methods. Protect your investment.",
  url: "https://www.richdadretirement.com/buy-sell-silver/cleaning-coins",
  imageAlt: "Cleaning Silver Coins Guide - Rich Dad Retirement",
});

const neverClean = [
  {
    type: "Rare/Key Date Coins",
    reason: "Numismatic value depends on original surfaces",
    impact: "Cleaning can reduce value by 50-90%",
  },
  {
    type: "Proof Coins",
    reason: "Mirror finishes are easily damaged",
    impact: "Any cleaning destroys the proof surface",
  },
  {
    type: "Graded Coins (NGC/PCGS)",
    reason: "Breaking the slab and cleaning removes the grade",
    impact: "Coin becomes ungraded and devalued",
  },
  {
    type: "Antique/Historical Coins",
    reason: "Patina is part of the coin's history",
    impact: "Collectors pay premiums for original toning",
  },
  {
    type: "Error Coins",
    reason: "Rarity comes from originality",
    impact: "Cleaning destroys collectibility",
  },
];

const okToClean = [
  {
    type: "Generic Silver Rounds",
    reason: "Sold strictly by weight, no collector premium",
    method: "Any safe method works",
  },
  {
    type: "Heavily Damaged Bullion",
    reason: "Already devalued from damage",
    method: "Gentle cleaning won't hurt further",
  },
  {
    type: "Personal Keepsakes",
    reason: "Sentimental value, not planning to sell",
    method: "Use gentle methods only",
  },
  {
    type: "Modern Bullion for Personal Display",
    reason: "Not for resale, you just want it to look nice",
    method: "Gentle rinse, no abrasives",
  },
];

const cleaningMethods = [
  {
    name: "Warm Water Rinse",
    safety: "Safest",
    safetyColor: "text-green-400",
    description: "Simply rinse with warm distilled water and pat dry with soft cloth.",
    bestFor: "Removing loose dirt and fingerprints",
    caution: "Don't rub - pat gently to avoid scratches",
  },
  {
    name: "Mild Soap Bath",
    safety: "Safe",
    safetyColor: "text-green-400",
    description: "Soak in warm water with tiny amount of dish soap. Rinse thoroughly.",
    bestFor: "Slightly dirtier coins that need more than water",
    caution: "Rinse completely - soap residue can cause spots",
  },
  {
    name: "Baking Soda Paste",
    safety: "Moderate Risk",
    safetyColor: "text-[#B22234]",
    description: "Make paste with water, apply gently with soft brush.",
    bestFor: "Stubborn tarnish on bullion rounds only",
    caution: "Mildly abrasive - can create hairline scratches",
  },
  {
    name: "Aluminum Foil Method",
    safety: "Moderate Risk",
    safetyColor: "text-[#B22234]",
    description: "Line bowl with foil, add hot water, baking soda, and salt. Chemical reaction removes tarnish.",
    bestFor: "Heavy tarnish on bullion",
    caution: "Can create uneven appearance, may damage some finishes",
  },
  {
    name: "Commercial Silver Dip",
    safety: "High Risk",
    safetyColor: "text-red-400",
    description: "Chemical solutions that strip tarnish quickly.",
    bestFor: "Never use on collectible coins",
    caution: "Removes patina completely, creates artificial shine buyers hate",
  },
  {
    name: "Polishing/Rubbing",
    safety: "Dangerous",
    safetyColor: "text-red-400",
    description: "Using any abrasive cloth or compound.",
    bestFor: "Absolutely nothing - never do this",
    caution: "Creates hairline scratches visible under magnification, permanently destroys surfaces",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Cleaning Silver Coins: When It's OK & Safe Methods",
      "description": "Should you clean silver coins? Learn when cleaning is acceptable, when it destroys value, and safe cleaning methods.",
      "author": {
        "@type": "Person",
        "name": "Thomas Richardson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
      },
      "datePublished": "2026-01-25",
      "dateModified": "2026-01-27"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Should you clean silver coins before selling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, NO. For collectible or numismatic coins, cleaning destroys value - often reducing worth by 50% or more. Dealers prefer original, uncleaned coins with natural patina. For bullion sold strictly by weight (generic rounds), cleaning doesn't affect price since you're paid for silver content, but it's usually unnecessary."
          }
        },
        {
          "@type": "Question",
          "name": "Why does cleaning silver coins reduce value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cleaning removes the natural patina (toning) that develops over time, which collectors value. It also creates microscopic scratches visible under magnification, affecting the coin's grade. Cleaned coins are easy for dealers to spot - they have an unnatural, 'flat' appearance. A cleaned coin may grade several points lower than an uncleaned equivalent."
          }
        },
        {
          "@type": "Question",
          "name": "How can you tell if a silver coin has been cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs of cleaning include: unnatural luster or shine, hairline scratches visible under light, lack of toning in recessed areas, 'washed out' appearance, and chemical residue. Professional graders at PCGS and NGC can easily identify cleaned coins and will mark them as such, significantly reducing value."
          }
        },
        {
          "@type": "Question",
          "name": "What is the safest way to clean silver coins if I must?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you must clean (only for generic bullion or personal keepsakes, never collectibles): 1) Rinse with warm distilled water only, 2) If needed, soak briefly in warm water with tiny amount of dish soap, 3) Rinse thoroughly, 4) Pat (don't rub) dry with soft, lint-free cloth. Never use abrasives, polishes, or commercial dips on any coin you might sell."
          }
        },
        {
          "@type": "Question",
          "name": "Does tarnish on silver reduce its value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For bullion sold by weight: No, tarnish doesn't affect value - you're paid for silver content. For collectible coins: Natural toning often INCREASES value. Collectors pay premiums for attractively toned coins. The 'rainbow toning' on some silver dollars can add hundreds to their value. Only heavy, unattractive corrosion negatively impacts collectible value."
          }
        }
      ]
    }
  ]
};

export default function CleaningCoinsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/buy-sell-silver"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Buy &amp; Sell Silver Guide
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              390 MONTHLY SEARCHES - DIFF 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Cleaning Silver Coins
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              One of the most common mistakes new collectors make is cleaning their coins.
              In most cases, you&apos;re destroying value, not adding it. Learn when cleaning
              is acceptable and how to do it safely.
            </p>
          </div>
        </Container>
      </section>

      {/* Critical Warning */}
      <section className="py-8 bg-red-500/10 border-y border-red-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Critical Warning
            </h2>
            <p className="text-slate-600">
              <strong className="text-slate-900">Cleaning collectible coins can reduce their value by 50% or more.</strong>
              {" "}Dealers can instantly spot cleaned coins. Natural toning is valued by collectors.
              When in doubt, <strong className="text-slate-900">do not clean</strong>.
            </p>
          </div>
        </Container>
      </section>

      {/* Never Clean Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-red-400 text-center mb-8 flex items-center justify-center gap-2">
              <Ban className="h-6 w-6" />
              Never Clean These Coins
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {neverClean.map((item, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.type}</h3>
                      <p className="text-slate-600 text-sm mb-2">{item.reason}</p>
                      <p className="text-red-400 text-sm font-semibold">{item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* OK to Clean Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-green-400 text-center mb-8 flex items-center justify-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              When Cleaning May Be Acceptable
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {okToClean.map((item, index) => (
                <div key={index} className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.type}</h3>
                      <p className="text-slate-600 text-sm mb-2">{item.reason}</p>
                      <p className="text-green-400 text-sm font-semibold">{item.method}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm mt-6">
              Even in these cases, ask yourself: &quot;Do I really need to clean this?&quot;
            </p>
          </div>
        </Container>
      </section>

      {/* Cleaning Methods */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4 flex items-center justify-center gap-2">
              <Droplet className="h-6 w-6 text-blue-400" />
              Cleaning Methods: From Safest to Most Dangerous
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              If you must clean generic bullion or personal keepsakes, use the safest method possible.
              For collectible coins, skip this section entirely.
            </p>
            <div className="space-y-4">
              {cleaningMethods.map((method, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 backdrop-blur-sm border rounded-xl p-6 ${
                    method.safety === "Dangerous" || method.safety === "High Risk"
                      ? "border-red-500/30"
                      : method.safety === "Moderate Risk"
                      ? "border-[#B22234]/30"
                      : "border-green-500/30"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${
                        method.safety === "Dangerous" || method.safety === "High Risk"
                          ? "bg-red-400"
                          : method.safety === "Moderate Risk"
                          ? "bg-amber-400"
                          : "bg-green-400"
                      }`} />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{method.name}</h3>
                        <span className={`text-sm font-semibold ${method.safetyColor}`}>
                          {method.safety}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 mb-3">{method.description}</p>
                      <div className="flex flex-col md:flex-row gap-4 text-sm">
                        <div>
                          <span className="text-green-400 font-semibold">Best For: </span>
                          <span className="text-slate-600">{method.bestFor}</span>
                        </div>
                        <div>
                          <span className="text-[#B22234] font-semibold">Caution: </span>
                          <span className="text-slate-600">{method.caution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Signs of Cleaned Coins */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              How Dealers Spot Cleaned Coins
            </h2>
            <div className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Signs of Cleaning
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">1.</span>
                      Unnatural, &quot;flat&quot; or overly bright luster
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">2.</span>
                      Hairline scratches visible under magnification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">3.</span>
                      No toning in recessed areas (letters, dates)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">4.</span>
                      Chemical residue or uneven coloring
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">5.</span>
                      &quot;Washed out&quot; appearance lacking depth
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    What Dealers Value
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">1.</span>
                      Natural, original surfaces
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">2.</span>
                      Appropriate patina for age
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">3.</span>
                      Consistent toning across the coin
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">4.</span>
                      &quot;Cartwheel&quot; luster on uncirculated coins
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">5.</span>
                      Original mint luster (even if toned)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-slate-600 text-center">
                  Professional grading services (PCGS, NGC) will mark cleaned coins as &quot;Details&quot; grades,
                  which trade at significant discounts to problem-free coins.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-600">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/buy-sell-silver/how-to-sell-coins" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">How to Sell Silver Coins</h3>
              <p className="text-sm text-slate-600">Step-by-step selling guide</p>
            </Link>
            <Link href="/buy-sell-silver/best-place-to-sell" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Best Place to Sell</h3>
              <p className="text-sm text-slate-600">Compare selling options</p>
            </Link>
            <Link href="/buy-sell-silver/spot-fake-silver" className="group bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#B22234]">Spot Fake Silver</h3>
              <p className="text-sm text-slate-600">Identify counterfeits</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Protect Your Silver Investment"
            subheadline="Whether you're buying or holding silver, Augusta Precious Metals offers IRA-eligible coins stored in professional facilities. No cleaning or maintenance worries - let the experts handle your precious metals."
            linkContext="silver"
            trackSource="cleaning-coins"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
