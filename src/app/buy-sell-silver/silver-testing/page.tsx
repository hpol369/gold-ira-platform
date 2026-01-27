import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { createPageMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  FlaskConical,
  Magnet,
  Snowflake,
  Music,
  Scale,
  Droplet,
  Ruler,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Star,
  Zap,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: "Silver Testing Methods: Complete Guide (Magnet, Acid, Ping Test) 2026",
  description:
    "Learn all silver testing methods: magnet test, ice test, ping test, acid test, and specific gravity. Complete guide to verifying authentic silver.",
  url: "https://www.richdadretirement.com/buy-sell-silver/silver-testing",
  imageAlt: "Silver Testing Methods Guide - Rich Dad Retirement",
});

const testingMethods = [
  {
    name: "Magnet Test",
    icon: Magnet,
    difficulty: "Beginner",
    equipment: "Strong neodymium magnet ($5-10)",
    reliability: 3,
    destructive: false,
    description: "Silver is non-magnetic. If a magnet sticks, the item is fake (likely steel). Real silver may show slight diamagnetic repulsion.",
    howTo: [
      "Obtain a strong neodymium magnet",
      "Hold it near (not touching) the silver",
      "If it sticks firmly, the item is fake",
      "Real silver may push away slightly or slide slowly when tilted",
    ],
    whatItDetects: "Steel, iron, nickel-plated fakes",
    limitations: "Does NOT detect copper, lead, or tungsten fakes",
    passResult: "No attraction (or slight repulsion)",
    failResult: "Strong magnetic attraction",
  },
  {
    name: "Ice Test",
    icon: Snowflake,
    difficulty: "Beginner",
    equipment: "Ice cube",
    reliability: 2,
    destructive: false,
    description: "Silver has the highest thermal conductivity of any metal. Ice melts rapidly on real silver.",
    howTo: [
      "Place silver on a flat, room temperature surface",
      "Put a small ice cube on top",
      "Observe melting speed",
      "Real silver melts ice almost instantly",
    ],
    whatItDetects: "Low-conductivity fakes like lead or tungsten",
    limitations: "Copper cores also melt ice quickly; less reliable for thin coins",
    passResult: "Ice melts very rapidly (seconds)",
    failResult: "Ice melts slowly (minutes)",
  },
  {
    name: "Ping Test (Ring Test)",
    icon: Music,
    difficulty: "Intermediate",
    equipment: "Another coin or phone app (~$0)",
    reliability: 4,
    destructive: false,
    description: "Real silver produces a distinctive, sustained high-pitched ring when struck. Fakes sound dull or thud.",
    howTo: [
      "Balance coin on fingertip or pencil eraser",
      "Tap gently with another coin",
      "Listen for a clear, ringing tone that lasts 1-2 seconds",
      "Use Bullion Test app to measure frequency (~6,145 Hz for 1 oz silver coin)",
    ],
    whatItDetects: "Most fakes including copper and lead cores",
    limitations: "Requires practice; bars don't ring as well as coins",
    passResult: "High-pitched, sustained ring (1-2 seconds)",
    failResult: "Dull thud or short, flat tone",
  },
  {
    name: "Weight & Dimension Test",
    icon: Scale,
    difficulty: "Intermediate",
    equipment: "Precision scale ($20-50) & calipers ($15-30)",
    reliability: 4,
    destructive: false,
    description: "Real coins have precise specifications. Any deviation suggests a fake or counterfeit.",
    howTo: [
      "Weigh coin on precision scale (0.01g accuracy)",
      "Measure diameter and thickness with calipers",
      "Compare to published specifications",
      "Deviation over 0.5% is suspicious",
    ],
    whatItDetects: "Most counterfeits (weight/size are hard to fake together)",
    limitations: "Sophisticated fakes may match specs; requires reference data",
    passResult: "Weight/dimensions within 0.5% of specification",
    failResult: "Any significant deviation from specs",
  },
  {
    name: "Specific Gravity Test",
    icon: Droplet,
    difficulty: "Advanced",
    equipment: "Precision scale, water, calculator",
    reliability: 5,
    destructive: false,
    description: "Measures density using water displacement. Silver has specific gravity of 10.49. Very difficult to fake.",
    howTo: [
      "Weigh coin in air (W-air)",
      "Suspend coin in water, weigh again (W-water)",
      "Calculate: SG = W-air / (W-air - W-water)",
      "Result should be ~10.49 for pure silver",
    ],
    whatItDetects: "Nearly all fakes including tungsten (SG 19.3) and lead (SG 11.3)",
    limitations: "Requires precision; alloys will have different SG; math involved",
    passResult: "Specific gravity of 10.3-10.6 for .999 silver",
    failResult: "SG outside expected range",
  },
  {
    name: "Acid Test",
    icon: FlaskConical,
    difficulty: "Advanced",
    equipment: "Silver acid test kit ($15-25)",
    reliability: 5,
    destructive: true,
    description: "Chemical reaction produces specific colors with different metals. Definitive test for silver purity.",
    howTo: [
      "File a small, inconspicuous spot on the item",
      "Apply a drop of silver testing acid",
      "Observe the color change",
      "Compare to included color chart",
    ],
    whatItDetects: "Distinguishes silver from base metals and verifies purity",
    limitations: "Permanent mark required; can damage collectible value",
    passResult: "Creamy white/light gray color indicates silver",
    failResult: "Green (copper), blue (nickel), brown (brass), no reaction (stainless steel)",
  },
];

const testComparison = [
  { test: "Magnet", cost: "$5-10", time: "10 sec", skill: "Easy", reliability: "Fair", destructive: "No" },
  { test: "Ice", cost: "Free", time: "30 sec", skill: "Easy", reliability: "Fair", destructive: "No" },
  { test: "Ping", cost: "Free", time: "10 sec", skill: "Medium", reliability: "Good", destructive: "No" },
  { test: "Weight/Size", cost: "$35-80", time: "2 min", skill: "Medium", reliability: "Good", destructive: "No" },
  { test: "Specific Gravity", cost: "$50+", time: "5 min", skill: "Advanced", reliability: "Excellent", destructive: "No" },
  { test: "Acid", cost: "$15-25", time: "2 min", skill: "Medium", reliability: "Excellent", destructive: "Yes" },
];

const testSequence = [
  {
    step: 1,
    test: "Visual Inspection",
    description: "Look for obvious signs: wrong color, mushy details, visible seams, incorrect markings.",
    action: "If suspicious, continue testing. If obviously fake, reject.",
  },
  {
    step: 2,
    test: "Magnet Test",
    description: "Quick test to eliminate obvious steel fakes.",
    action: "Magnetic = Fake. Non-magnetic = Continue testing.",
  },
  {
    step: 3,
    test: "Weight & Dimensions",
    description: "Verify the coin matches published specifications.",
    action: "Off-spec = Likely fake. On-spec = Continue testing.",
  },
  {
    step: 4,
    test: "Ping Test",
    description: "Listen for the characteristic silver ring.",
    action: "Dull thud = Likely fake. Clear ring = Likely real.",
  },
  {
    step: 5,
    test: "Specific Gravity (Optional)",
    description: "Definitive test for serious verification.",
    action: "Correct SG = Authentic. Wrong SG = Fake.",
  },
  {
    step: 6,
    test: "Acid Test (Last Resort)",
    description: "Only if other tests are inconclusive and you're willing to mark the piece.",
    action: "Correct color = Authentic. Wrong color = Fake.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "How to Test Silver Authenticity",
      "description": "Complete guide to testing silver using magnet, ice, ping, weight, specific gravity, and acid tests",
      "step": testingMethods.map((method, index) => ({
        "@type": "HowToStep",
        "name": method.name,
        "text": method.description,
        "position": index + 1,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most reliable silver test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The specific gravity test and acid test are the most reliable, both achieving near-100% accuracy. Specific gravity is non-destructive and measures the coin's density, which is very difficult to fake. The acid test is destructive (requires scratching) but provides definitive purity verification. For best results, combine multiple tests."
          }
        },
        {
          "@type": "Question",
          "name": "How does the silver magnet test work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver is not magnetic - it's actually slightly diamagnetic (repels magnets weakly). If a magnet sticks to your silver, the item contains magnetic metals like steel or iron, indicating a fake. However, passing the magnet test doesn't guarantee authenticity since fakes can use non-magnetic metals like copper, lead, or tungsten."
          }
        },
        {
          "@type": "Question",
          "name": "What is the ping test for silver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ping test exploits silver's unique acoustic properties. When struck, real silver produces a distinctive, high-pitched ring that sustains for 1-2 seconds. Fakes typically produce a dull thud or short, flat tone. You can use phone apps like Bullion Test to measure the exact frequency - genuine 1 oz silver coins ring at approximately 6,145 Hz."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the silver acid test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The silver acid test is highly accurate for verifying silver content and purity. Different purities produce different color reactions: .999 fine silver shows creamy white, while lower purities show darker shades. The test can also identify base metals - copper shows green, nickel shows blue. The downside is it requires scratching the item, which can affect collector value."
          }
        },
        {
          "@type": "Question",
          "name": "Can tungsten pass silver tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tungsten is difficult to detect because it's non-magnetic and can be weighted to match silver. However, tungsten fails the specific gravity test (19.3 vs 10.49), the ping test (different acoustic properties), and the acid test (no reaction). The ice test may also reveal tungsten since it conducts heat differently than silver. Sophisticated testing is required for tungsten detection."
          }
        }
      ]
    }
  ]
};

export default function SilverTestingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <SchemaScript schema={schema} />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px]" />
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
              <FlaskConical className="h-4 w-4" />
              300 MONTHLY SEARCHES - DIFF 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Silver Testing Methods
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              From the simple magnet test to advanced specific gravity measurements,
              learn every method for verifying silver authenticity. Protect your investment
              with knowledge.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-8 bg-slate-800/50 border-y border-white/10">
        <Container>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="text-left p-4 text-white font-bold">Test</th>
                  <th className="text-center p-4 text-white font-bold">Cost</th>
                  <th className="text-center p-4 text-white font-bold">Time</th>
                  <th className="text-center p-4 text-white font-bold">Skill</th>
                  <th className="text-center p-4 text-white font-bold">Reliability</th>
                  <th className="text-center p-4 text-white font-bold">Destructive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {testComparison.map((row, index) => (
                  <tr key={index}>
                    <td className="p-4 text-slate-300 font-semibold">{row.test}</td>
                    <td className="p-4 text-center text-green-400">{row.cost}</td>
                    <td className="p-4 text-center text-slate-400">{row.time}</td>
                    <td className="p-4 text-center text-slate-400">{row.skill}</td>
                    <td className="p-4 text-center">
                      <span className={`font-semibold ${
                        row.reliability === "Excellent" ? "text-green-400" :
                        row.reliability === "Good" ? "text-blue-400" : "text-amber-400"
                      }`}>
                        {row.reliability}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      {row.destructive === "Yes" ? (
                        <span className="text-red-400">Yes</span>
                      ) : (
                        <span className="text-green-400">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Detailed Testing Methods */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Complete Testing Guide
            </h2>
            <div className="space-y-8">
              {testingMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          method.destructive ? "bg-red-500/20" : "bg-blue-500/20"
                        }`}>
                          <Icon className={`h-7 w-7 ${
                            method.destructive ? "text-red-400" : "text-blue-400"
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{method.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                              {method.difficulty}
                            </span>
                            <span className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-3 w-3 ${
                                    star <= method.reliability ? "text-amber-400 fill-current" : "text-slate-600"
                                  }`}
                                />
                              ))}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-300 mb-4">{method.description}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Equipment Needed:</h4>
                            <p className="text-slate-400 text-sm">{method.equipment}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Detects:</h4>
                            <p className="text-slate-400 text-sm">{method.whatItDetects}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">How To:</h4>
                          <ol className="space-y-1">
                            {method.howTo.map((step, i) => (
                              <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="text-blue-400">{i + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                            <h4 className="text-sm font-semibold text-green-400 mb-1 flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3" /> Pass
                            </h4>
                            <p className="text-slate-300 text-sm">{method.passResult}</p>
                          </div>
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                            <h4 className="text-sm font-semibold text-red-400 mb-1 flex items-center gap-1">
                              <XCircle className="h-3 w-3" /> Fail
                            </h4>
                            <p className="text-slate-300 text-sm">{method.failResult}</p>
                          </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-amber-400 mb-1 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" /> Limitations
                          </h4>
                          <p className="text-slate-300 text-sm">{method.limitations}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended Testing Sequence */}
      <section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-amber-400" />
              Recommended Testing Sequence
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Follow this order for efficient and thorough verification.
            </p>
            <div className="space-y-4">
              {testSequence.map((item) => (
                <div key={item.step} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-amber-400">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.test}</h3>
                      <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                      <p className="text-sm">
                        <span className="text-green-400 font-semibold">Action: </span>
                        <span className="text-slate-300">{item.action}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
            <Link href="/buy-sell-silver/spot-fake-silver" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Spot Fake Silver</h3>
              <p className="text-sm text-slate-400">Visual inspection guide</p>
            </Link>
            <Link href="/buy-sell-silver/best-coins-to-buy" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Best Coins to Buy</h3>
              <p className="text-sm text-slate-400">Stick to reputable sources</p>
            </Link>
            <Link href="/buy-sell-silver/best-place-to-sell" className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400">Best Place to Sell</h3>
              <p className="text-sm text-slate-400">Dealers test for you</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <Container>
          <AugustaCTA
            variant="footer"
            headline="Skip the Testing - Buy Guaranteed Silver"
            subheadline="When you purchase through Augusta Precious Metals, every piece is professionally verified and guaranteed authentic. All silver meets IRA purity requirements with full documentation."
            linkContext="silver"
            trackSource="silver-testing"
          />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
