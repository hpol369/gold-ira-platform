import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  CircleDollarSign,
  ArrowRight,
  Scale,
  Calculator,
  CheckCircle,
  XCircle,
  DollarSign,
  Info,
  History,
  Star,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "90 Percent Silver Coins Guide: Mercury Dimes, Quarters & Half Dollars (2026)",
  description:
    "Complete guide to 90% silver coins. Learn about Mercury dimes, Washington quarters, Walking Liberty halves. Silver content calculations and where to buy pre-1965 US coins.",
  url: "https://www.richdadretirement.com/silver-products/90-percent-coins",
  imageAlt: "90 Percent Silver Coins Guide - Rich Dad Retirement",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "90% Silver Coins: Complete Guide to Pre-1965 US Coinage",
      "description": "Everything you need to know about 90% silver coins including Mercury dimes, Washington quarters, Walking Liberty halves, and silver content calculations.",
      "author": {
        "@type": "Organization",
        "name": "Rich Dad Retirement"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rich Dad Retirement",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.richdadretirement.com/logo.png"
        }
      },
      "datePublished": "2026-01-27",
      "dateModified": "2026-01-27"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much silver is in a 90% silver dime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 90% silver dime (Roosevelt or Mercury) contains 0.0715 troy ounces of pure silver. At $25/oz spot, that's about $1.79 worth of silver. Pre-1965 dimes weigh 2.5 grams total, with 2.25 grams being silver."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between Mercury dimes and Roosevelt dimes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mercury dimes (1916-1945) feature a Liberty head design often mistaken for Mercury, the Roman god. Roosevelt dimes (1946-1964 in silver) honor FDR. Both contain the same silver (0.0715 oz), but Mercury dimes often carry a small premium for their classic design."
          }
        },
        {
          "@type": "Question",
          "name": "Are Walking Liberty half dollars more valuable than silver content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Walking Liberty half dollars (1916-1947) are considered one of the most beautiful US coin designs. Common dates trade near silver value (0.3575 oz per coin), but key dates and high-grade specimens can command significant numismatic premiums above melt value."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate the value of 90% silver coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multiply face value by 0.715 to get troy ounces of silver, then multiply by spot price. Example: $10 face value = 7.15 oz silver. At $25 spot = $178.75 melt value. Add the current premium (typically 5-15%) to get the actual purchase price."
          }
        },
        {
          "@type": "Question",
          "name": "What 90% silver coins are best for investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For pure silver value: Roosevelt dimes and Washington quarters (most common, lowest premiums). For collector potential: Mercury dimes and Walking Liberty halves. For barter/SHTF scenarios: Mix of dimes and quarters for divisibility."
          }
        }
      ]
    }
  ]
};

const coinTypes = [
  {
    name: "Mercury Dime",
    years: "1916-1945",
    silverOz: "0.0715",
    popularity: 5,
    notes: "Classic design, often mistaken for Roman god Mercury (actually Lady Liberty)",
    highlight: true,
  },
  {
    name: "Roosevelt Dime",
    years: "1946-1964",
    silverOz: "0.0715",
    popularity: 4,
    notes: "Most common 90% dime, honors FDR",
    highlight: false,
  },
  {
    name: "Barber Dime",
    years: "1892-1916",
    silverOz: "0.0715",
    popularity: 3,
    notes: "Older design, often heavily worn",
    highlight: false,
  },
  {
    name: "Washington Quarter",
    years: "1932-1964",
    silverOz: "0.1788",
    popularity: 5,
    notes: "Most recognizable, excellent for barter",
    highlight: false,
  },
  {
    name: "Standing Liberty Quarter",
    years: "1916-1930",
    silverOz: "0.1788",
    popularity: 4,
    notes: "Beautiful design, dates often worn",
    highlight: true,
  },
  {
    name: "Walking Liberty Half",
    years: "1916-1947",
    silverOz: "0.3575",
    popularity: 5,
    notes: "Considered most beautiful US coin design",
    highlight: true,
  },
  {
    name: "Franklin Half",
    years: "1948-1963",
    silverOz: "0.3575",
    popularity: 4,
    notes: "Ben Franklin portrait, Liberty Bell reverse",
    highlight: false,
  },
  {
    name: "Kennedy Half (1964)",
    years: "1964 only",
    silverOz: "0.3575",
    popularity: 4,
    notes: "Only year at 90% (1965-70 are 40%)",
    highlight: false,
  },
];

export default function NinetyPercentCoinsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/silver-products"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Silver Products
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-500/30 rounded-full text-slate-300 font-semibold text-sm mb-6">
              <CircleDollarSign className="h-4 w-4" />
              150 MONTHLY SEARCHES - DIFFICULTY 2
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              90% Silver Coins: America&apos;s Pre-1965 Treasure
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Mercury dimes. Walking Liberty halves. Washington quarters. These aren&apos;t just coins—
              they&apos;re pieces of American history that happen to contain real silver. Here&apos;s
              everything you need to know about collecting and investing in 90% silver.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Highly Recognizable
              </span>
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                Divisible Denominations
              </span>
              <span className="flex items-center gap-2 text-red-400">
                <XCircle className="h-4 w-4" />
                NOT IRA Eligible
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Reference */}
      <section className="py-12 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Scale className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-sm text-slate-400">Silver Content</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <Calculator className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">0.715 oz</div>
                <div className="text-sm text-slate-400">Per $1 Face</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <History className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1892-1964</div>
                <div className="text-sm text-slate-400">Era of 90% Silver</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5-15%</div>
                <div className="text-sm text-slate-400">Typical Premium</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300 max-w-none">

              {/* Coin Types Grid */}
              <h2 className="flex items-center gap-3">
                <CircleDollarSign className="h-6 w-6 text-slate-400" />
                Types of 90% Silver Coins
              </h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
                {coinTypes.map((coin) => (
                  <div
                    key={coin.name}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-5 ${
                      coin.highlight ? "border-amber-500/30" : "border-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{coin.name}</h3>
                      {coin.highlight && (
                        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                          Collector Favorite
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 text-sm mb-2">
                      <span className="text-slate-400">Years: <span className="text-slate-300">{coin.years}</span></span>
                      <span className="text-slate-400">Silver: <span className="text-amber-400">{coin.silverOz} oz</span></span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{coin.notes}</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3 w-3 ${
                            star <= coin.popularity ? "text-amber-400 fill-amber-400" : "text-slate-600"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-slate-500 ml-1">Popularity</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Silver Content Table */}
              <h2 className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-green-400" />
                Silver Content by Coin Type
              </h2>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Coin</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Face Value</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Silver (oz)</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Melt Value*</th>
                      <th className="p-4 border-b border-white/10 font-bold text-white">Per $1 Face</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    <tr>
                      <td className="p-4 font-semibold text-white">Dime</td>
                      <td className="p-4 text-slate-300">$0.10</td>
                      <td className="p-4 text-amber-400">0.0715 oz</td>
                      <td className="p-4 text-slate-300">$1.79</td>
                      <td className="p-4 text-slate-400">10 coins</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Quarter</td>
                      <td className="p-4 text-slate-300">$0.25</td>
                      <td className="p-4 text-amber-400">0.1788 oz</td>
                      <td className="p-4 text-slate-300">$4.47</td>
                      <td className="p-4 text-slate-400">4 coins</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Half Dollar</td>
                      <td className="p-4 text-slate-300">$0.50</td>
                      <td className="p-4 text-amber-400">0.3575 oz</td>
                      <td className="p-4 text-slate-300">$8.94</td>
                      <td className="p-4 text-slate-400">2 coins</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Silver Dollar</td>
                      <td className="p-4 text-slate-300">$1.00</td>
                      <td className="p-4 text-amber-400">0.7734 oz</td>
                      <td className="p-4 text-slate-300">$19.34</td>
                      <td className="p-4 text-slate-400">1 coin</td>
                    </tr>
                    <tr className="bg-green-500/10">
                      <td className="p-4 font-semibold text-white">$1 Face Mixed</td>
                      <td className="p-4 text-slate-300">$1.00</td>
                      <td className="p-4 text-green-400 font-bold">0.715 oz</td>
                      <td className="p-4 text-slate-300">$17.88</td>
                      <td className="p-4 text-slate-400">Any combo</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-slate-500 mt-2">*Melt value at $25/oz spot. Silver dollars (Morgan/Peace) are slightly different.</p>
              </div>

              <h2 className="flex items-center gap-3">
                <Star className="h-6 w-6 text-amber-400" />
                Featured Coins: The Classics
              </h2>

              {/* Mercury Dime */}
              <div className="not-prose bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-4">Mercury Dime (1916-1945)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-300 mb-4">
                      Despite its name, the coin actually depicts Lady Liberty wearing a winged cap
                      symbolizing freedom of thought—not the Roman god Mercury. Designer Adolph Weinman
                      created what many consider the most beautiful dime ever minted.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Silver content: 0.0715 oz
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Weight: 2.5 grams
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Diameter: 17.9 mm
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-400 mb-2">Key Dates</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>1916-D: Most valuable ($1,000+)</li>
                      <li>1921, 1921-D: Low mintage</li>
                      <li>1942/41: Overdate error</li>
                    </ul>
                    <p className="text-slate-400 text-sm mt-3">
                      Common dates (1940s) trade at slight premiums over melt. Key dates
                      command significant collector premiums.
                    </p>
                  </div>
                </div>
              </div>

              {/* Walking Liberty Half */}
              <div className="not-prose bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-4">Walking Liberty Half Dollar (1916-1947)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-300 mb-4">
                      Often called the most beautiful US coin ever made. The design shows Lady Liberty
                      striding toward the rising sun, draped in an American flag. So beloved that it
                      was revived for the American Silver Eagle in 1986.
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Silver content: 0.3575 oz
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Weight: 12.5 grams
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Diameter: 30.6 mm
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-400 mb-2">Key Dates</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>1916-S, 1921-S, 1921-D: Rare</li>
                      <li>1938-D: Low mintage</li>
                      <li>1919-D: Scarce in high grades</li>
                    </ul>
                    <p className="text-slate-400 text-sm mt-3">
                      Common dates (1940s) trade 10-20% above melt for their beauty.
                      High-grade specimens are highly sought after.
                    </p>
                  </div>
                </div>
              </div>

              <div className="not-prose bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-red-400 mb-2">NOT IRA Eligible</h4>
                    <p className="text-slate-300">
                      90% silver coins do NOT qualify for Precious Metals IRAs. The IRS requires
                      .999 fine silver for IRA holdings. If you want silver in your retirement account,
                      consider American Silver Eagles or .999 fine bars instead.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Where to Buy 90% Silver Coins</h2>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">For Bulk (Face Value)</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>SD Bullion</strong> - Best prices on bags</li>
                    <li><strong>JM Bullion</strong> - Good selection</li>
                    <li><strong>APMEX</strong> - Premium options</li>
                    <li><strong>Monument Metals</strong> - Competitive</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">For Specific Dates</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>Local coin shops</strong> - Browse inventory</li>
                    <li><strong>eBay</strong> - Key dates (verify seller)</li>
                    <li><strong>Heritage Auctions</strong> - High-grade coins</li>
                    <li><strong>Coin shows</strong> - Best for negotiation</li>
                  </ul>
                </div>
              </div>

              <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-2">Buying Tip</h4>
                    <p className="text-slate-300">
                      If you&apos;re buying for silver value (not collecting), stick to &quot;junk&quot; bags of
                      common dates. Mercury dimes and Walking Liberties in bags trade near melt value—
                      you get beautiful historic coins without paying collector premiums.
                    </p>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-slate-400">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Want IRA-Eligible Silver Instead?"
            subheadline="90% silver coins aren't IRA-eligible, but Augusta Precious Metals offers American Silver Eagles and .999 fine bars that qualify. Get a free consultation to explore tax-advantaged silver options."
            linkContext="silver"
            trackSource="silver-90-percent"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
