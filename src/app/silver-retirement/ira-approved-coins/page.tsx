// src/app/silver-retirement/ira-approved-coins/page.tsx
// Keywords: ira approved silver coins - 20 vol, $4.00 CPC

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
  Star,
  Coins,
  Globe,
  Shield,
  Award,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRA-Approved Silver Coins | American Eagles, Maple Leafs & More (2026)",
  description:
    "Complete list of IRA-approved silver coins including American Silver Eagles, Canadian Maple Leafs, and more. Learn which coins qualify and what's NOT allowed in your Silver IRA.",
  keywords: [
    "ira approved silver coins",
    "silver coins for ira",
    "american silver eagle ira",
    "silver maple leaf ira",
    "irs approved silver coins",
  ],
  openGraph: {
    title: "IRA-Approved Silver Coins | Complete 2026 List",
    description: "Which silver coins can go in your IRA? Eagles, Maple Leafs, and more.",
    url: "https://www.richdadretirement.com/silver-retirement/ira-approved-coins",
    type: "article",
  },
};

const approvedCoins = [
  {
    name: "American Silver Eagle",
    country: "United States",
    mint: "U.S. Mint",
    purity: ".999 fine",
    weight: "1 troy oz",
    premium: "Moderate-High",
    popularity: 5,
    notes: "Most popular IRA silver coin. Features Walking Liberty design. Highly liquid with strong resale.",
    recommended: true,
  },
  {
    name: "Canadian Silver Maple Leaf",
    country: "Canada",
    mint: "Royal Canadian Mint",
    purity: ".9999 fine",
    weight: "1 troy oz",
    premium: "Moderate",
    popularity: 5,
    notes: "Higher purity than Eagles. Features micro-engraved security mark. Excellent for IRAs.",
    recommended: true,
  },
  {
    name: "Austrian Silver Philharmonic",
    country: "Austria",
    mint: "Austrian Mint",
    purity: ".999 fine",
    weight: "1 troy oz",
    premium: "Low-Moderate",
    popularity: 4,
    notes: "Europe's best-selling silver coin. Features Vienna Philharmonic orchestra instruments.",
    recommended: true,
  },
  {
    name: "Australian Silver Kangaroo",
    country: "Australia",
    mint: "Perth Mint",
    purity: ".9999 fine",
    weight: "1 troy oz",
    premium: "Moderate",
    popularity: 4,
    notes: "Changes design annually. Government-backed with high purity. Popular among collectors.",
    recommended: true,
  },
  {
    name: "British Silver Britannia",
    country: "United Kingdom",
    mint: "Royal Mint",
    purity: ".999 fine",
    weight: "1 troy oz",
    premium: "Moderate",
    popularity: 4,
    notes: "Features iconic Britannia design. Multiple security features added in recent years.",
    recommended: true,
  },
  {
    name: "Mexican Silver Libertad",
    country: "Mexico",
    mint: "Casa de Moneda de Mexico",
    purity: ".999 fine",
    weight: "1 troy oz (various)",
    premium: "Moderate-High",
    popularity: 3,
    notes: "Limited mintage creates collector premium. Features Winged Victory (Angel of Independence).",
    recommended: false,
  },
  {
    name: "South African Silver Krugerrand",
    country: "South Africa",
    mint: "South African Mint",
    purity: ".999 fine",
    weight: "1 troy oz",
    premium: "Low-Moderate",
    popularity: 3,
    notes: "Silver version of the famous gold coin. Introduced in 2017. Good value option.",
    recommended: true,
  },
  {
    name: "Chinese Silver Panda",
    country: "China",
    mint: "People's Bank of China",
    purity: ".999 fine",
    weight: "30g (varies)",
    premium: "High",
    popularity: 3,
    notes: "Design changes annually. Collector premium. Weight changed from oz to grams in 2016.",
    recommended: false,
  },
];

const notApprovedCoins = [
  {
    name: "Pre-1965 U.S. Silver Coins (Junk Silver)",
    reason: "Only 90% silver - below .999 purity requirement",
  },
  {
    name: "Morgan Silver Dollars",
    reason: "90% silver, does not meet purity standard",
  },
  {
    name: "Peace Silver Dollars",
    reason: "90% silver, below IRS minimum",
  },
  {
    name: "Proof/Collectible Coins (most)",
    reason: "Numismatic premium, not investment-grade",
  },
  {
    name: "Privately Minted 'Rounds'",
    reason: "Not government-minted coins (rounds are bullion, not coins)",
  },
  {
    name: "Commemorative Coins",
    reason: "Usually don't meet purity or are numismatic",
  },
];

const faqs = [
  {
    question: "What is the difference between silver coins and silver rounds?",
    answer:
      "Silver coins are minted by government mints (U.S. Mint, Royal Canadian Mint, etc.) and have legal tender status. Silver rounds are privately minted bullion discs that look like coins but have no face value. For IRAs, only government-minted coins meeting .999 purity qualify - rounds do NOT qualify.",
  },
  {
    question: "Are American Silver Eagles the best choice for an IRA?",
    answer:
      "American Silver Eagles are the most popular choice due to their recognition, liquidity, and U.S. government backing. However, Canadian Silver Maple Leafs offer higher purity (.9999 vs .999) at similar or lower premiums. Both are excellent choices for Silver IRAs.",
  },
  {
    question: "Can I put collectible or proof silver coins in my IRA?",
    answer:
      "Generally no. The IRS prohibits 'collectibles' in IRAs, which includes most proof coins and numismatic pieces. However, American Silver Eagle proof coins are an exception - they ARE allowed in IRAs despite their proof status. Regular bullion coins are the safest choice.",
  },
  {
    question: "Why aren't Morgan or Peace dollars allowed in IRAs?",
    answer:
      "Morgan and Peace dollars are only 90% silver (.900 fine), which is below the IRS minimum requirement of .999 fineness. Despite being classic American silver coins, they don't qualify for precious metals IRAs. Only modern bullion coins meeting purity standards are eligible.",
  },
  {
    question: "Do silver coins have higher premiums than silver bars?",
    answer:
      "Yes, silver coins typically carry higher premiums than bars due to minting costs, design, and legal tender status. American Eagles have the highest premiums, followed by Maple Leafs and Philharmonics. For lowest premiums, consider silver bars. Coins offer better recognition and easier resale.",
  },
  {
    question: "Can I take physical possession of my IRA silver coins?",
    answer:
      "Not while they're in your IRA. Taking possession is considered a distribution and triggers taxes and potential penalties. Your coins must remain in an IRS-approved depository. You can take possession at retirement through an 'in-kind' distribution, but you'll owe taxes on the value.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "IRA-Approved Silver Coins: Complete List for 2026",
      "description": "Complete list of IRS-approved silver coins for retirement accounts including American Eagles and Maple Leafs.",
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

export default function IraApprovedCoinsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/silver-retirement"
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Retirement Hub
            </Link>
            <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-4 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
              <Coins className="h-4 w-4" />
              GOVERNMENT-MINTED COINS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000080] mb-6">
              IRA-Approved{" "}
              <span className="text-green-400">Silver Coins</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              American Eagles, Canadian Maple Leafs, and other government-minted
              silver coins that qualify for your retirement account.
            </p>

            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "ira-approved-coins-hero", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse IRA Silver Coins <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Key Requirements */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
              IRA Silver Coin Requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Government Minted</h3>
                <p className="text-sm text-slate-600">
                  Must be struck by a national mint (U.S. Mint, Royal Canadian Mint, etc.)
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">.999+ Purity</h3>
                <p className="text-sm text-slate-600">
                  Minimum 99.9% pure silver. Some coins like Maple Leafs are .9999
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Legal Tender</h3>
                <p className="text-sm text-slate-600">
                  Must have legal tender status in country of origin
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approved Coins List */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-4">
            IRS-Approved Silver Coins for IRAs
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            These government-minted silver coins meet IRS requirements for precious
            metals IRAs. All feature proper purity and legal tender status.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {approvedCoins.map((coin, index) => (
              <div
                key={index}
                className={`bg-slate-50 backdrop-blur-sm border rounded-xl p-6 ${
                  coin.recommended
                    ? "border-green-500/30"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900">{coin.name}</h3>
                      {coin.recommended && (
                        <Award className="h-4 w-4 text-green-400" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{coin.country} - {coin.mint}</p>
                  </div>
                  <div className="flex text-[#B22234]">
                    {[...Array(coin.popularity)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4">{coin.notes}</p>

                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-600 block">Purity</span>
                    <span className="text-slate-900 font-semibold">{coin.purity}</span>
                  </div>
                  <div>
                    <span className="text-slate-600 block">Weight</span>
                    <span className="text-slate-900 font-semibold">{coin.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-600 block">Premium</span>
                    <span className="text-slate-900 font-semibold">{coin.premium}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-100 via-[#B22234]/10 to-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Add Silver Coins to Your IRA?
            </h3>
            <p className="text-slate-600 mb-6">
              Augusta Precious Metals offers competitive pricing on all major
              IRA-approved silver coins. Get expert guidance on building your
              Silver IRA with the right coin selection.
            </p>
            <Button className="bg-[#B22234] hover:bg-[#8b1c2a] text-white" size="lg" asChild>
              <a
                href={getTrackedLink(AFFILIATE_LINKS.augustaSilver, "ira-approved-coins-mid", "augusta")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Silver Coin Guide <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* NOT Approved Section */}
      <section className="py-16 bg-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8 flex items-center justify-center gap-3">
              <XCircle className="h-6 w-6 text-red-400" />
              Silver Coins NOT Allowed in IRAs
            </h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="space-y-4">
                {notApprovedCoins.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-slate-900 font-semibold">{item.name}</span>
                      <p className="text-sm text-slate-600">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-[#B22234]/10 border border-[#B22234]/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#B22234] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    The "Junk Silver" Misconception
                  </h4>
                  <p className="text-sm text-slate-600">
                    Many retirees ask about adding their pre-1965 U.S. silver coins
                    (often called "junk silver") to their IRA. Unfortunately, these
                    historic coins are only 90% silver and do NOT qualify. The IRS
                    requires .999 (99.9%) purity minimum for IRA eligibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison: Eagles vs Maple Leafs */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            American Eagles vs Canadian Maple Leafs
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-slate-50 backdrop-blur-sm rounded-xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Feature</th>
                    <th className="p-4 border-b border-slate-200 font-bold text-slate-900">American Eagle</th>
                    <th className="p-4 border-b border-slate-200 font-bold text-slate-900">Maple Leaf</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Purity</td>
                    <td className="p-4 text-slate-600">.999 fine (99.9%)</td>
                    <td className="p-4 text-green-400 font-semibold">.9999 fine (99.99%)</td>
                  </tr>
                  <tr className="bg-slate-100">
                    <td className="p-4 font-semibold text-slate-900">Premium</td>
                    <td className="p-4 text-slate-600">Higher (~$3-5 over spot)</td>
                    <td className="p-4 text-green-400 font-semibold">Lower (~$2-4 over spot)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Liquidity</td>
                    <td className="p-4 text-green-400 font-semibold">Highest - Most recognized</td>
                    <td className="p-4 text-slate-600">Very High</td>
                  </tr>
                  <tr className="bg-slate-100">
                    <td className="p-4 font-semibold text-slate-900">Security Features</td>
                    <td className="p-4 text-slate-600">Limited</td>
                    <td className="p-4 text-green-400 font-semibold">Micro-engraved maple leaf</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Face Value</td>
                    <td className="p-4 text-slate-600">$1 USD</td>
                    <td className="p-4 text-slate-600">$5 CAD</td>
                  </tr>
                  <tr className="bg-slate-100">
                    <td className="p-4 font-semibold text-slate-900">Best For</td>
                    <td className="p-4 text-slate-600">Maximum liquidity, patriotic appeal</td>
                    <td className="p-4 text-slate-600">Best value, highest purity</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 text-center mt-4">
              Both coins are excellent choices for Silver IRAs. Most investors choose
              based on premium (Maple Leafs) or recognition (Eagles).
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <Container>
          <h2 className="text-2xl font-serif font-bold text-[#000080] text-center mb-8">
            IRA Silver Coin FAQs
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
      <section className="py-12">
        <Container>
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Related Silver IRA Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/silver-retirement/ira-approved-bars"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">IRA-Approved Silver Bars</h3>
              <p className="text-sm text-slate-600">PAMP, RCM & more</p>
            </Link>
            <Link
              href="/silver-retirement/transfer-ira-to-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">Transfer IRA to Silver</h3>
              <p className="text-sm text-slate-600">Step-by-step guide</p>
            </Link>
            <Link
              href="/silver-retirement/how-much-silver"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">How Much Silver?</h3>
              <p className="text-sm text-slate-600">Portfolio allocation</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Shop IRA-Approved Silver Coins"
            subheadline="Augusta Precious Metals offers competitive pricing on American Eagles, Maple Leafs, and other IRA-eligible silver coins. Get expert guidance and transparent pricing."
            trackSource="ira-approved-coins-footer"
            linkContext="silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
