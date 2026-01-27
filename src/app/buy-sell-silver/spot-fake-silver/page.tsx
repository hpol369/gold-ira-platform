import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  Search,
  AlertTriangle,
  Eye,
  Scale,
  Magnet,
  Snowflake,
  FlaskConical,
  Music,
  CheckCircle2,
  XCircle,
  Shield,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "How to Spot Fake Silver: Visual Inspection & Testing Guide (2026)",
  description:
    "Learn how to spot fake silver coins and bars. Visual inspection tips, common counterfeits to watch for, and simple tests you can do at home.",
  url: "https://www.richdadretirement.com/buy-sell-silver/spot-fake-silver",
  imageAlt: "How to Spot Fake Silver - Rich Dad Retirement",
});

const visualChecks = [
  {
    check: "Weight & Size",
    icon: Scale,
    description: "Real silver has precise weight and dimensions. Fakes are often off by measurable amounts.",
    whatToLook: "Use a precision scale (0.1g accuracy) and calipers. American Eagle should be exactly 31.103g and 40.6mm diameter.",
    redFlag: "More than 0.5% variation in weight is suspicious",
  },
  {
    check: "Design Details",
    icon: Eye,
    description: "Genuine coins have sharp, crisp details. Counterfeits often have mushy or incorrect features.",
    whatToLook: "Compare to known genuine coin images. Look at fine details like hair strands, feathers, lettering.",
    redFlag: "Blurry text, missing details, or 'soft' appearance",
  },
  {
    check: "Edge Finish",
    icon: Search,
    description: "Edges should be clean and consistent. Many fakes have seams, rough spots, or incorrect reeding.",
    whatToLook: "Count the reeds (American Eagle has ~201). Check for casting seams or file marks.",
    redFlag: "Visible seam lines, uneven reeding, or smooth edges on reeded coins",
  },
  {
    check: "Color & Luster",
    icon: Snowflake,
    description: "Real silver has a distinctive white-gray color. Fakes may be too shiny, too dull, or have a wrong color tone.",
    whatToLook: "Compare to a known genuine piece. Silver should have a soft, warm luster, not chrome-like shine.",
    redFlag: "Yellowish tint (gold plating showing), gray-blue color (tungsten), or too-bright shine",
  },
];

const quickTests = [
  {
    name: "Magnet Test",
    icon: Magnet,
    difficulty: "Easy",
    reliability: "Good",
    description: "Silver is not magnetic. If a magnet sticks to your silver, it's fake (likely steel with silver plating).",
    howTo: [
      "Use a strong neodymium magnet",
      "Hold near the coin/bar",
      "If it sticks, it's fake",
      "If it slides slowly, it might be real (silver is slightly diamagnetic)",
    ],
    caution: "Some fakes use non-magnetic cores (copper, lead). Pass doesn't guarantee authentic.",
  },
  {
    name: "Ice Test",
    icon: Snowflake,
    difficulty: "Easy",
    reliability: "Moderate",
    description: "Silver has extremely high thermal conductivity. Ice melts very quickly on real silver.",
    howTo: [
      "Place a small ice cube on the silver",
      "Watch how fast it melts",
      "Real silver melts ice almost immediately",
      "Fakes take noticeably longer",
    ],
    caution: "Copper cores also conduct heat well. Works better for thick bars than thin coins.",
  },
  {
    name: "Ping/Ring Test",
    icon: Music,
    difficulty: "Moderate",
    reliability: "Good",
    description: "Real silver produces a distinctive high-pitched ring when tapped. Fakes sound dull.",
    howTo: [
      "Hold coin on fingertip or pencil eraser",
      "Tap with another coin or pencil",
      "Listen for a long, high-pitched ring",
      "Use a phone app to measure frequency (~6,145 Hz for 1 oz coin)",
    ],
    caution: "Requires practice. Works best with coins, not bars.",
  },
  {
    name: "Acid Test",
    icon: FlaskConical,
    difficulty: "Advanced",
    reliability: "Very Good",
    description: "Silver acid test kits produce specific color reactions with genuine silver.",
    howTo: [
      "File a small spot (less visible area)",
      "Apply drop of silver acid",
      "Observe color change",
      "Compare to included color chart",
    ],
    caution: "Permanent scratch required. Only test if you're willing to mark the piece.",
  },
];

const commonFakes = [
  {
    type: "Chinese Counterfeit Coins",
    description: "Mass-produced fakes of American Eagles, Maple Leafs, and other popular coins.",
    howToSpot: "Wrong weight, poor details, magnetic, wrong dimensions, crude edge lettering",
    prevalence: "Very Common",
  },
  {
    type: "Silver-Plated Copper",
    description: "Copper core with thin silver coating. Common in bars and rounds.",
    howToSpot: "Wrong weight (copper is lighter), ping test fails, specific gravity test fails",
    prevalence: "Common",
  },
  {
    type: "Tungsten Core Bars",
    description: "Tungsten has nearly identical density to silver. Very sophisticated fake.",
    howToSpot: "Drill test, ultrasonic testing, or XRF analysis required",
    prevalence: "Rare but Serious",
  },
  {
    type: "Lead Core Coins",
    description: "Lead core with silver plating. Weight can be close but dimensions differ.",
    howToSpot: "Wrong dimensions, fails specific gravity test, soft/scratches easily",
    prevalence: "Occasional",
  },
  {
    type: "'Silver' Jewelry Coins",
    description: "Decorative pieces sold as bullion. Often marked '.999' falsely.",
    howToSpot: "No legitimate mint markings, too light, wrong dimensions, suspicious source",
    prevalence: "Common Online",
  },
];

const buyingTips = [
  "Buy only from reputable dealers with return policies",
  "If a deal seems too good to be true, it is",
  "Avoid eBay and private sellers unless experienced",
  "Check dealer reviews and BBB ratings",
  "Request certificates of authenticity for large purchases",
  "Consider only purchasing graded/slabbed coins",
  "Test any silver from unknown sources before trusting it",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Spot Fake Silver: Visual Inspection & Testing Guide",
      "description": "Learn how to spot fake silver coins and bars. Visual inspection tips, common counterfeits to watch for, and simple tests.",
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
          "name": "What is the easiest way to test if silver is real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The magnet test is the easiest. Real silver is not magnetic - if a magnet sticks to your silver, it's fake (steel with silver plating). However, passing the magnet test doesn't guarantee authenticity since some fakes use non-magnetic metals. For better verification, combine with the ping test and weight/dimension check."
          }
        },
        {
          "@type": "Question",
          "name": "How common are fake silver coins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fake silver coins are increasingly common, especially in online marketplaces and from unofficial sellers. Chinese counterfeit operations produce millions of fake American Eagles, Maple Leafs, and other popular coins. Buying from reputable dealers virtually eliminates this risk. If buying secondary market, always test before trusting."
          }
        },
        {
          "@type": "Question",
          "name": "Can fake silver pass the magnet test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, sophisticated fakes using non-magnetic metals (copper, lead, or tungsten cores) will pass the magnet test. That's why you should never rely on a single test. Combine the magnet test with weight/dimension verification, the ping test, and visual inspection for better confidence. For high-value items, consider professional testing."
          }
        },
        {
          "@type": "Question",
          "name": "What does fake silver look like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fake silver often has: 1) Mushy or 'soft' design details lacking the crispness of genuine coins, 2) Wrong color - too shiny (chrome-like), yellowish tint, or gray-blue tone, 3) Poor edge finish with visible seams or incorrect reeding, 4) Wrong weight or dimensions, 5) Spelling errors or incorrect design elements."
          }
        },
        {
          "@type": "Question",
          "name": "Where do most fake silver coins come from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vast majority of counterfeit silver coins come from China, where industrial-scale counterfeiting operations produce millions of fakes annually. They're sold through online marketplaces (AliExpress, eBay), at coin shows by unscrupulous dealers, and increasingly through social media. Always buy from established, reputable dealers."
          }
        }
      ]
    }
  ]
};

export default function SpotFakeSilverPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-400/5 rounded-full blur-[150px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/buy-sell-silver"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Buy &amp; Sell Silver Guide
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold text-sm mb-6">
              <Search className="h-4 w-4" />
              110 MONTHLY SEARCHES - DIFF 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Spot Fake Silver
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Counterfeit silver coins and bars are more common than ever. Chinese counterfeiting
              operations produce millions of fakes annually. Learn to protect yourself with visual
              inspection and simple tests.
            </p>
          </div>
        </Container>
      </section>

      {/* Warning */}
      <section className="py-8 bg-amber-500/10 border-y border-amber-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              The Best Protection
            </h2>
            <p className="text-slate-300">
              <strong className="text-white">Buy from reputable dealers only.</strong>
              {" "}No test is 100% reliable. The best protection is buying from established dealers
              with buyback policies and positive reviews. Only test when buying secondary market silver.
            </p>
          </div>
        </Container>
      </section>

      {/* Visual Checks */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
              <Eye className="h-6 w-6 text-blue-400" />
              Visual Inspection
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Before any tests, a careful visual inspection can reveal many fakes.
              Look for these key indicators.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {visualChecks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.check}</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                    <div className="space-y-3">
                      <div>
                        <span className="text-green-400 font-semibold text-sm">What to Look For: </span>
                        <span className="text-slate-300 text-sm">{item.whatToLook}</span>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <span className="text-red-400 font-semibold text-sm">Red Flag: </span>
                        <span className="text-slate-300 text-sm">{item.redFlag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Tests */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Simple Tests You Can Do at Home
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              These tests can help identify fakes, but none are 100% conclusive.
              Use multiple tests for better confidence.
            </p>
            <div className="space-y-6">
              {quickTests.map((test, index) => {
                const Icon = test.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                        <div className="w-12 h-12 bg-slate-400/20 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-slate-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{test.name}</h3>
                          <div className="flex gap-2 text-xs">
                            <span className="text-green-400">{test.difficulty}</span>
                            <span className="text-slate-500">|</span>
                            <span className="text-blue-400">{test.reliability}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-300 mb-4">{test.description}</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">How To:</h4>
                            <ul className="space-y-1">
                              {test.howTo.map((step, i) => (
                                <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                  <span className="text-blue-400">{i + 1}.</span>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              Caution
                            </h4>
                            <p className="text-slate-300 text-sm">{test.caution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
              For the most comprehensive testing, see our <Link href="/buy-sell-silver/silver-testing" className="text-amber-400 hover:underline">Complete Silver Testing Guide</Link>.
            </p>
          </div>
        </Container>
      </section>

      {/* Common Fakes */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              Common Types of Fake Silver
            </h2>
            <div className="space-y-4">
              {commonFakes.map((fake, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{fake.type}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          fake.prevalence === "Very Common" ? "bg-red-500/20 text-red-400" :
                          fake.prevalence === "Common" || fake.prevalence === "Common Online" ? "bg-amber-500/20 text-amber-400" :
                          "bg-blue-500/20 text-blue-400"
                        }`}>
                          {fake.prevalence}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{fake.description}</p>
                      <div>
                        <span className="text-green-400 font-semibold text-sm">How to Spot: </span>
                        <span className="text-slate-300 text-sm">{fake.howToSpot}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Buying Tips */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-green-400" />
              Smart Buying Tips
            </h2>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {buyingTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
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

      {/* Related Guides */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/buy-sell-silver/silver-testing" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Silver Testing Methods</h3>
              <p className="text-sm text-slate-400">Complete testing guide with all methods</p>
            </Link>
            <Link href="/buy-sell-silver/best-coins-to-buy" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Best Coins to Buy</h3>
              <p className="text-sm text-slate-400">Stick to reputable coins from trusted sources</p>
            </Link>
            <Link href="/buy-sell-silver/best-place-to-sell" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Best Place to Sell</h3>
              <p className="text-sm text-slate-400">Reputable dealers test for you</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Buy Guaranteed Authentic Silver"
            subheadline="When you purchase silver through Augusta Precious Metals, every coin and bar is guaranteed authentic and meets IRA purity requirements. No testing needed - professional verification included."
            linkContext="silver"
            trackSource="spot-fake-silver"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
