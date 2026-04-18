import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  Layers,
  ArrowRight,
  Scale,
  Coins,
  Building2,
  Landmark,
  BarChart3,
  CircleDollarSign,
  Package,
  Gem,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Products Guide: Bars, Coins & Bullion for Investors (2026)",
  description:
    "Complete guide to silver products for investors. Compare 1000 oz bars, Silver Krugerrands, constitutional silver, kilo bars, and more. Find the best silver for your portfolio.",
  url: "https://www.richdadretirement.com/silver-products",
  imageAlt: "Silver Products Guide - Rich Dad Retirement",
});

const silverProducts = [
  {
    slug: "1000-oz-bar",
    title: "1000 oz Silver Bar",
    description: "COMEX-deliverable institutional bars. The lowest premium option for serious investors.",
    icon: Layers,
    keywords: "1,300 monthly searches",
    highlight: true,
  },
  {
    slug: "krugerrand",
    title: "Silver Krugerrand",
    description: "South African sovereign coins with iconic Springbok design. Premium world bullion.",
    icon: Coins,
    keywords: "600 monthly searches",
    highlight: true,
  },
  {
    slug: "monster-box",
    title: "Monster Box Silver",
    description: "500 oz sealed boxes of sovereign coins. Bulk buying at lower premiums.",
    icon: Package,
    keywords: "New",
    highlight: true,
  },
  {
    slug: "constitutional-silver",
    title: "Constitutional Silver",
    description: "Pre-1965 US coins with 90% silver content. Highly recognizable and divisible.",
    icon: Landmark,
    keywords: "450 monthly searches",
    highlight: false,
  },
  {
    slug: "kilo-bar",
    title: "Silver Kilo Bar",
    description: "32.15 troy oz bars from premium mints. The sweet spot for serious stackers.",
    icon: Package,
    keywords: "200 monthly searches",
    highlight: false,
  },
  {
    slug: "90-percent-coins",
    title: "90% Silver Coins",
    description: "Mercury dimes, Washington quarters, Walking Liberty halves. Classic American silver.",
    icon: CircleDollarSign,
    keywords: "150 monthly searches",
    highlight: false,
  },
  {
    slug: "engelhard",
    title: "Engelhard Silver",
    description: "Highly collectible vintage bars and rounds from the legendary refiner.",
    icon: Gem,
    keywords: "New",
    highlight: true,
  },
  {
    slug: "sunshine-mint",
    title: "Sunshine Mint Silver",
    description: "Popular American refiner with MintMark SI security feature.",
    icon: Gem,
    keywords: "New",
    highlight: false,
  },
  {
    slug: "johnson-matthey",
    title: "Johnson Matthey Silver",
    description: "Collectible bars from one of the world's premier refiners.",
    icon: Layers,
    keywords: "New",
    highlight: false,
  },
  {
    slug: "pamp-suisse",
    title: "PAMP Suisse Silver",
    description: "Swiss-made premium bars with iconic Lady Fortuna design.",
    icon: Gem,
    keywords: "New",
    highlight: true,
  },
  {
    slug: "fractional",
    title: "Fractional Silver",
    description: "Half-ounce, quarter-ounce, and 1/10 oz silver for affordability.",
    icon: CircleDollarSign,
    keywords: "New",
    highlight: false,
  },
  {
    slug: "generic-rounds",
    title: "Generic Silver Rounds",
    description: "Private mint rounds with the lowest premiums over spot.",
    icon: Coins,
    keywords: "New",
    highlight: false,
  },
  {
    slug: "perth-mint",
    title: "Perth Mint Silver",
    description: "Australian sovereign bullion. Kangaroo coins, cast bars, and minted bars.",
    icon: Gem,
    keywords: "60 monthly searches",
    highlight: false,
  },
  {
    slug: "good-delivery",
    title: "Good Delivery Bars",
    description: "LBMA-certified 1000 oz bars meeting institutional standards.",
    icon: Building2,
    keywords: "$1.90 CPC",
    highlight: false,
  },
  {
    slug: "pslv-vs-slv",
    title: "PSLV vs SLV",
    description: "Sprott Physical Silver Trust vs iShares Silver Trust. Which ETF is better?",
    icon: BarChart3,
    keywords: "100 monthly searches",
    highlight: true,
  },
];

const productCategories = [
  {
    name: "Large Bars",
    description: "For institutional investors and serious stackers",
    icon: Scale,
    products: ["1000-oz-bar", "good-delivery", "kilo-bar", "monster-box"],
  },
  {
    name: "Premium Refiners",
    description: "Top-quality bars from legendary mints",
    icon: Gem,
    products: ["engelhard", "johnson-matthey", "pamp-suisse", "sunshine-mint"],
  },
  {
    name: "Sovereign Coins",
    description: "Government-minted bullion with legal tender status",
    icon: Coins,
    products: ["krugerrand", "perth-mint"],
  },
  {
    name: "US Junk Silver",
    description: "Pre-1965 American coins with 90% silver content",
    icon: Landmark,
    products: ["constitutional-silver", "90-percent-coins"],
  },
  {
    name: "Budget Options",
    description: "Lower premiums for stacking on a budget",
    icon: CircleDollarSign,
    products: ["generic-rounds", "fractional"],
  },
  {
    name: "Silver ETFs",
    description: "Paper silver for portfolio exposure",
    icon: BarChart3,
    products: ["pslv-vs-slv"],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Silver Products Guide",
      "description": "Complete guide to silver products for investors including bars, coins, and ETFs.",
      "url": "https://www.richdadretirement.com/silver-products",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": silverProducts.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": product.title,
          "url": `https://www.richdadretirement.com/silver-products/${product.slug}`,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best silver product for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For beginners, 1 oz silver rounds or American Silver Eagles are the best starting point. They have reasonable premiums, are highly liquid, and easy to store. Constitutional silver (junk silver) is also excellent for beginners due to its recognizability and divisibility."
          }
        },
        {
          "@type": "Question",
          "name": "What silver products have the lowest premiums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1000 oz silver bars have the lowest premiums over spot price, typically 1-3%. However, they require significant capital ($25,000+) and specialized storage. For most investors, kilo bars or 10 oz bars offer a good balance of low premiums and practicality."
          }
        },
        {
          "@type": "Question",
          "name": "Is silver IRA eligible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, certain silver products are IRA-eligible. They must meet IRS purity requirements of .999 fine silver. Eligible products include American Silver Eagles, Canadian Silver Maple Leafs, and approved silver bars from recognized refiners. Constitutional silver (90% coins) is NOT IRA-eligible."
          }
        }
      ]
    }
  ]
};

export default function SilverProductsHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(220,38,38,0.1)] border border-[#3F4460] rounded-full text-[#D0CCC4] font-semibold text-sm mb-6">
              <Layers className="h-4 w-4" />
              SILVER BUYER&apos;S GUIDE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F6F4EF] mb-6">
              Silver Products Guide
            </h1>
            <p className="text-xl text-[#D0CCC4] max-w-2xl mx-auto mb-8">
              From 1000 oz institutional bars to constitutional junk silver,
              understand every type of silver product before you invest.
              Compare premiums, liquidity, and storage requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#D0CCC4]">
              <span className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-[#D0CCC4]" />
                15 Product Types Covered
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-[#D0CCC4]" />
                Premium Comparisons
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#D0CCC4]" />
                IRA Eligibility Info
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-12">
              Silver Products by Category
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {productCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={category.name}
                    className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-lg flex items-center justify-center">
                        <CategoryIcon className="h-5 w-5 text-[#D0CCC4]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F6F4EF]">{category.name}</h3>
                        <p className="text-sm text-[#D0CCC4]">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {category.products.map((slug) => {
                        const product = silverProducts.find((p) => p.slug === slug);
                        if (!product) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/silver-products/${slug}`}
                            className="flex items-center justify-between p-3 bg-[#0C0D18] rounded-lg hover:bg-[#1E2134] transition-colors group"
                          >
                            <span className="text-[#D0CCC4] group-hover:text-[#F6F4EF] transition-colors">
                              {product.title}
                            </span>
                            <ArrowRight className="h-4 w-4 text-[#D0CCC4] group-hover:text-[#F6F4EF] transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* All Products Grid */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-4">
              All Silver Products
            </h2>
            <p className="text-[#D0CCC4] text-center mb-12 max-w-2xl mx-auto">
              Explore our complete guides to every major silver product type.
              Each guide includes specifications, premium analysis, and buying recommendations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {silverProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.slug}
                    href={`/silver-products/${product.slug}`}
                    className={`group bg-[#0C0D18] backdrop-blur-sm border rounded-xl p-6 hover:bg-[#1E2134] transition-all ${
                      product.highlight
                        ? "border-[#3F4460] hover:border-[#3F4460]/50"
                        : "border-[#2A2D42] hover:border-[#3F4460]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        product.highlight
                          ? "bg-[rgba(220,38,38,0.1)]"
                          : "bg-[#121423]"
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          product.highlight ? "text-[#D0CCC4]" : "text-[#D0CCC4]"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-[#F6F4EF] group-hover:text-[#F6F4EF] transition-colors">
                            {product.title}
                          </h3>
                          {product.highlight && (
                            <span className="text-xs bg-[rgba(220,38,38,0.1)] text-[#D0CCC4] px-2 py-0.5 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[#D0CCC4] text-sm mb-2">
                          {product.description}
                        </p>
                        <span className="text-xs text-[#D0CCC4]">
                          {product.keywords}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-[#D0CCC4] group-hover:text-[#F6F4EF] transition-colors text-sm">
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Comparison Quick Reference */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">
              Silver Premium Quick Reference
            </h2>
            <div className="bg-[#0C0D18] backdrop-blur-sm border border-[#2A2D42] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#0C0D18]">
                  <tr>
                    <th className="text-left p-4 text-[#F6F4EF] font-bold">Product Type</th>
                    <th className="text-center p-4 text-[#F6F4EF] font-bold">Typical Premium</th>
                    <th className="text-center p-4 text-[#F6F4EF] font-bold">Min. Investment</th>
                    <th className="text-center p-4 text-[#F6F4EF] font-bold">IRA Eligible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2D42]">
                  <tr>
                    <td className="p-4 text-[#D0CCC4]">1000 oz Bar</td>
                    <td className="p-4 text-center text-green-400">1-3%</td>
                    <td className="p-4 text-center text-[#D0CCC4]">$25,000+</td>
                    <td className="p-4 text-center text-green-400">Yes*</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#D0CCC4]">Kilo Bar</td>
                    <td className="p-4 text-center text-green-400">3-5%</td>
                    <td className="p-4 text-center text-[#D0CCC4]">$800+</td>
                    <td className="p-4 text-center text-green-400">Yes*</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#D0CCC4]">Silver Krugerrand</td>
                    <td className="p-4 text-center text-[#D4A94E]">8-12%</td>
                    <td className="p-4 text-center text-[#D0CCC4]">$30+</td>
                    <td className="p-4 text-center text-green-400">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#D0CCC4]">Perth Mint</td>
                    <td className="p-4 text-center text-[#D4A94E]">6-10%</td>
                    <td className="p-4 text-center text-[#D0CCC4]">$30+</td>
                    <td className="p-4 text-center text-green-400">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#D0CCC4]">Constitutional Silver</td>
                    <td className="p-4 text-center text-[#D4A94E]">5-15%</td>
                    <td className="p-4 text-center text-[#D0CCC4]">$20+</td>
                    <td className="p-4 text-center text-red-400">No</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[#D0CCC4]">PSLV / SLV</td>
                    <td className="p-4 text-center text-green-400">0% (expense ratio)</td>
                    <td className="p-4 text-center text-[#D0CCC4]">$10+</td>
                    <td className="p-4 text-center text-[#D4A94E]">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#D0CCC4] mt-4 text-center">
              *Must meet .999 purity and be from approved refiner. Premiums vary by market conditions.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0C0D18]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F6F4EF] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {(schema["@graph"][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#0C0D18] backdrop-blur-sm rounded-xl border border-[#2A2D42] p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[#F6F4EF]">
                    <h3 className="text-lg font-bold">{faq.name}</h3>
                    <span className="shrink-0 rounded-full bg-[#121423] p-1.5 text-[#D0CCC4]">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#D0CCC4]">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Ready to Add Silver to Your IRA?"
            subheadline="Augusta Precious Metals offers IRA-eligible silver products with transparent pricing. Get a free consultation to learn which silver products fit your retirement goals."
            linkContext="silver"
            trackSource="silver-products-hub"
          />
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <AutoRelatedContent currentUrl="/silver-products" />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
