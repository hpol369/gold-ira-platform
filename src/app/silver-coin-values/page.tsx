import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  Coins,
  ArrowRight,
  Calculator,
  TrendingUp,
  History,
  Shield,
  CircleDollarSign,
  Star,
  Scale,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Coin Values: Complete Price Guide for Collectors (2026)",
  description:
    "Discover the real value of your silver coins. Morgan dollars, Walking Liberty halves, Peace dollars, silver dimes & quarters. Free melt value calculator included.",
  url: "https://www.richdadretirement.com/silver-coin-values",
  imageAlt: "Silver Coin Values Guide - Rich Dad Retirement",
});

const silverCoinPages = [
  {
    slug: "morgan-dollar",
    title: "Morgan Silver Dollar Value",
    description: "1878-1921 Morgan dollars: The most collected silver coin in America. Value charts by year, mint mark, and condition.",
    icon: Star,
    volume: "6,800",
    difficulty: 9,
    highlight: true,
  },
  {
    slug: "walking-liberty-half",
    title: "Walking Liberty Half Dollar Value",
    description: "1916-1947 Walking Liberty halves: America's most beautiful coin design. Complete value guide by year and condition.",
    icon: History,
    volume: "2,200",
    difficulty: 2,
    highlight: true,
  },
  {
    slug: "melt-value-calculator",
    title: "Silver Melt Value Calculator",
    description: "Calculate the silver melt value of any coin instantly. Input quantity, coin type, and get real-time values.",
    icon: Calculator,
    volume: "1,200",
    difficulty: 11,
    highlight: true,
  },
  {
    slug: "silver-dimes",
    title: "Silver Dimes Value",
    description: "Roosevelt, Mercury, and Barber dimes: Pre-1965 dimes with 90% silver content. What are your dimes worth?",
    icon: Coins,
    volume: "1,000",
    difficulty: 3,
    highlight: false,
  },
  {
    slug: "peace-dollar",
    title: "Peace Silver Dollar Value",
    description: "1921-1935 Peace dollars: The last circulating silver dollar. Key dates, values, and grading guide.",
    icon: Shield,
    volume: "900",
    difficulty: 0,
    highlight: true,
  },
  {
    slug: "silver-quarters",
    title: "Silver Quarters Value",
    description: "Washington, Standing Liberty, and Barber quarters: Pre-1965 silver quarters worth more than face value.",
    icon: CircleDollarSign,
    volume: "900",
    difficulty: 0,
    highlight: true,
  },
  {
    slug: "war-nickels",
    title: "Silver War Nickels Value",
    description: "1942-1945 war nickels: The only US nickels containing silver (35%). How to identify and value them.",
    icon: History,
    volume: "700",
    difficulty: 1,
    highlight: false,
  },
  {
    slug: "junk-silver",
    title: "Junk Silver Value",
    description: "What is junk silver? Constitutional silver coins valued for their metal content, not numismatic value.",
    icon: Scale,
    volume: "200",
    difficulty: 13,
    highlight: false,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Silver Coin Values Guide",
      "description": "Complete guide to silver coin values including Morgan dollars, Walking Liberty halves, Peace dollars, and more.",
      "url": "https://www.richdadretirement.com/silver-coin-values",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": silverCoinPages.map((page, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": page.title,
          "url": `https://www.richdadretirement.com/silver-coin-values/${page.slug}`,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I determine the value of my silver coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver coin values depend on three factors: (1) Silver melt value - the intrinsic metal content based on current spot prices, (2) Numismatic value - collector premium based on rarity, condition, and demand, and (3) Condition/Grade - coins in better condition command higher premiums. Common date coins in circulated condition typically sell close to melt value, while key dates and high-grade specimens can be worth many times more."
          }
        },
        {
          "@type": "Question",
          "name": "What is silver melt value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver melt value is the intrinsic worth of a coin based purely on its silver content. For example, a pre-1965 US quarter contains 0.1808 troy ounces of pure silver. If silver is trading at $25/oz, the melt value would be $4.52. This represents the floor value - what a coin would be worth if melted down. Most circulated common-date coins trade slightly above melt value."
          }
        },
        {
          "@type": "Question",
          "name": "Which silver coins are worth the most?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most valuable silver coins combine rarity, historical significance, and condition. Key examples include the 1893-S Morgan dollar ($5,000+), 1916-D Walking Liberty half ($1,000+), 1921 Peace dollar High Relief ($500+), and 1916 Mercury dime ($1,000+ in good condition). However, even common silver coins are worth far more than their face value due to silver content."
          }
        },
        {
          "@type": "Question",
          "name": "Are silver coins a good investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver coins offer tangible asset ownership outside the banking system - what Robert Kiyosaki calls 'real money vs paper promises.' Unlike paper currency, silver has maintained purchasing power for thousands of years. For investment purposes, many experts recommend 90% constitutional silver (junk silver) for its low premiums and recognizability, or IRA-eligible bullion coins for tax-advantaged retirement accounts."
          }
        },
        {
          "@type": "Question",
          "name": "What year quarters are silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "US quarters minted in 1964 and earlier contain 90% silver. From 1965-present, quarters are made of copper-nickel clad (no silver). A few exceptions: 1976-S Bicentennial quarters (40% silver proofs) and special collector issues. The easiest way to identify silver quarters is by the date - 1964 or earlier means silver."
          }
        }
      ]
    }
  ]
};

export default function SilverCoinValuesHubPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-500/30 rounded-full text-slate-300 font-semibold text-sm mb-6">
              <Coins className="h-4 w-4" />
              SILVER COIN PRICE GUIDE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Silver Coin Values
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Discover what your silver coins are really worth. From Morgan dollars to junk silver,
              we reveal the values the banks and coin dealers hope you never learn.
              <span className="text-amber-400 font-semibold"> Real money vs paper promises.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                13,900+ Monthly Searches
              </span>
              <span className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-blue-400" />
                Free Melt Calculator
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                8 Coin Types Covered
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Silver Coins Matter */}
      <section className="py-12 bg-slate-900 border-y border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 rounded-r-xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                What the Banks Don&apos;t Want You to Know About Silver
              </h2>
              <p className="text-slate-300">
                While the Federal Reserve prints trillions in paper currency, old silver coins hold their
                purchasing power. A silver quarter from 1964 had 25 cents of buying power then - today,
                its silver content is worth over <span className="text-amber-400 font-semibold">$4.50</span>.
                That&apos;s not the coin increasing in value - it&apos;s the dollar losing 95% of its purchasing power.
                Understanding silver coin values is the first step to protecting your wealth with real assets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Pages */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Silver Coin Value Guides
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Each guide includes value charts by year and condition, grading tips,
              key dates to look for, and current market prices.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {silverCoinPages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.slug}
                    href={`/silver-coin-values/${page.slug}`}
                    className={`group bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all ${
                      page.highlight
                        ? "border-amber-500/30 hover:border-amber-500/50"
                        : "border-white/10 hover:border-slate-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        page.highlight
                          ? "bg-amber-500/20"
                          : "bg-white/10"
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          page.highlight ? "text-amber-400" : "text-slate-400"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                            {page.title}
                          </h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">
                          {page.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-slate-500">
                            {page.volume} searches/mo
                          </span>
                          {page.difficulty <= 3 && (
                            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                              Low Competition
                            </span>
                          )}
                          {page.highlight && (
                            <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-slate-400 group-hover:text-amber-400 transition-colors text-sm">
                      View Price Guide
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Reference Table */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Silver Coin Quick Value Reference
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left p-4 text-white font-bold">Coin Type</th>
                    <th className="text-center p-4 text-white font-bold">Years</th>
                    <th className="text-center p-4 text-white font-bold">Silver Content</th>
                    <th className="text-center p-4 text-white font-bold">Melt Value*</th>
                    <th className="text-center p-4 text-white font-bold">Typical Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4 text-slate-300 font-medium">Morgan Dollar</td>
                    <td className="p-4 text-center text-slate-400">1878-1921</td>
                    <td className="p-4 text-center text-slate-400">0.7734 oz</td>
                    <td className="p-4 text-center text-green-400">$19.34</td>
                    <td className="p-4 text-center text-amber-400">50-200%+</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300 font-medium">Peace Dollar</td>
                    <td className="p-4 text-center text-slate-400">1921-1935</td>
                    <td className="p-4 text-center text-slate-400">0.7734 oz</td>
                    <td className="p-4 text-center text-green-400">$19.34</td>
                    <td className="p-4 text-center text-amber-400">30-100%+</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300 font-medium">Walking Liberty Half</td>
                    <td className="p-4 text-center text-slate-400">1916-1947</td>
                    <td className="p-4 text-center text-slate-400">0.3617 oz</td>
                    <td className="p-4 text-center text-green-400">$9.04</td>
                    <td className="p-4 text-center text-amber-400">10-50%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300 font-medium">Silver Quarter</td>
                    <td className="p-4 text-center text-slate-400">1932-1964</td>
                    <td className="p-4 text-center text-slate-400">0.1808 oz</td>
                    <td className="p-4 text-center text-green-400">$4.52</td>
                    <td className="p-4 text-center text-amber-400">5-15%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300 font-medium">Silver Dime</td>
                    <td className="p-4 text-center text-slate-400">1946-1964</td>
                    <td className="p-4 text-center text-slate-400">0.0723 oz</td>
                    <td className="p-4 text-center text-green-400">$1.81</td>
                    <td className="p-4 text-center text-amber-400">5-15%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300 font-medium">War Nickel</td>
                    <td className="p-4 text-center text-slate-400">1942-1945</td>
                    <td className="p-4 text-center text-slate-400">0.0563 oz</td>
                    <td className="p-4 text-center text-green-400">$1.41</td>
                    <td className="p-4 text-center text-amber-400">5-20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              *Melt values based on $25/oz silver spot price. Actual values fluctuate with market prices.
              Premium percentages vary by condition, date, and market demand.
            </p>
          </div>
        </Container>
      </section>

      {/* Grading Quick Guide */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Coin Grading Quick Guide
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { grade: "G (Good)", value: "4-6", desc: "Heavily worn, outline visible" },
                { grade: "VG (Very Good)", value: "8-10", desc: "Design clear, major detail worn" },
                { grade: "F (Fine)", value: "12-15", desc: "Moderate wear, all lettering sharp" },
                { grade: "VF (Very Fine)", value: "20-35", desc: "Light wear on high points" },
                { grade: "XF (Extremely Fine)", value: "40-45", desc: "Slight wear, sharp details" },
                { grade: "AU (About Uncirculated)", value: "50-58", desc: "Trace wear, most luster" },
                { grade: "MS (Mint State)", value: "60-70", desc: "No wear, full luster" },
                { grade: "PR (Proof)", value: "60-70", desc: "Special strike, mirror finish" },
              ].map((item) => (
                <div
                  key={item.grade}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold">{item.grade}</span>
                    <span className="text-amber-400 text-sm">{item.value}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 text-center mt-6">
              Higher grades command exponentially higher premiums. A Morgan dollar in MS-65 condition
              can be worth 10x or more than the same coin in VF-20.
            </p>
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
            headline="Turn Your Silver Knowledge Into Retirement Security"
            subheadline="Understanding silver coin values is just the beginning. Augusta Precious Metals can help you leverage physical silver in a tax-advantaged IRA. Get a free consultation and learn how real money can protect your retirement."
            linkContext="silver"
            trackSource="silver-coin-values-hub"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
