import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  DollarSign,
  Users,
  CheckCircle2,
  Search,
  Star,
  Building2,
  Warehouse,
  Coins,
  ArrowLeftRight,
  MessageSquare,
  XCircle,
} from "lucide-react";
import { isPublished } from "@/data/editorial-schedule";

export const revalidate = 86400; // Revalidate daily so pages go live on schedule

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "How to Compare Gold IRA Companies Without Getting Burned (2026)",
    description:
      "A practical 8-factor scoring framework for comparing gold IRA companies. Learn how to evaluate fees, spreads, custodians, buyback terms, and reputation.",
    url: "https://www.richdadretirement.com/learn/how-to-compare-gold-ira-companies",
    type: "article",
  }),
  robots: isPublished("how-to-compare-gold-ira-companies") ? { index: true, follow: true } : { index: false, follow: true },
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "Are online gold IRA rankings trustworthy?",
    answer:
      "Some are, but many are paid placements or affiliate pages. Always check whether rankings are editorial or paid, whether fees are compared side by side, and whether any criticism is included.",
  },
  {
    question: "What should I compare first when looking at gold IRA companies?",
    answer:
      "Start with total fees, spreads, and how the company handles buybacks. These three factors have the most direct impact on your investment returns.",
  },
  {
    question: "Why do dealer spreads matter so much?",
    answer:
      "Because a large markup means your investment starts at an immediate disadvantage. The wider the spread between what you pay and what you could sell for, the more gold has to rise before you break even.",
  },
  {
    question: "Is the custodian the same as the gold dealer?",
    answer:
      "Not always. Often they are separate parties, and both matter. The dealer sells you the metals, while the custodian holds the IRA account. Research both independently.",
  },
  {
    question: "What is the biggest red flag when evaluating gold IRA companies?",
    answer:
      "High-pressure sales tactics mixed with unclear pricing. A company that pushes you to act fast while avoiding detailed fee disclosures is not working in your interest.",
  },
];

const sources = [
  {
    name: "FTC Consumer Guidance",
    url: "https://www.ftc.gov/",
    accessDate: "March 2026",
  },
  {
    name: "SEC Investor.gov",
    url: "https://www.investor.gov/",
    accessDate: "March 2026",
  },
  {
    name: "FINRA Investor Resources",
    url: "https://www.finra.org/investors",
    accessDate: "March 2026",
  },
  {
    name: "Better Business Bureau",
    url: "https://www.bbb.org/",
    accessDate: "March 2026",
  },
  {
    name: "Business Consumer Alliance",
    url: "https://www.checkbca.org/",
    accessDate: "March 2026",
  },
];

const scoringFactors = [
  {
    number: 1,
    title: "Fee Transparency",
    icon: DollarSign,
    iconColor: "bg-green-100 text-green-700",
    description: "Do they clearly disclose setup fee, annual custodian fee, storage fee, insurance fee, wire or transaction fees? If pricing is vague, move on.",
  },
  {
    number: 2,
    title: "Dealer Spread and Markup",
    icon: ArrowLeftRight,
    iconColor: "bg-amber-100 text-amber-700",
    description: "Ask what you are paying above the spot price and what buyback terms look like. A bad spread can put you in a hole on day one.",
  },
  {
    number: 3,
    title: "Custodian Quality",
    icon: Building2,
    iconColor: "bg-blue-100 text-blue-700",
    description: "The dealer and the custodian are not always the same company. Look at the custodian's track record, experience with self-directed IRAs, and complaint history.",
  },
  {
    number: 4,
    title: "Depository Options",
    icon: Warehouse,
    iconColor: "bg-purple-100 text-purple-700",
    description: "Where are the metals stored? Is the depository approved, insured, and reputable? Can you choose segregated or non-segregated storage?",
  },
  {
    number: 5,
    title: "Product Lineup and IRA Eligibility",
    icon: Coins,
    iconColor: "bg-amber-100 text-amber-700",
    description: "Do they push only high-markup collectible coins, or do they offer straightforward IRA-eligible bullion products too?",
  },
  {
    number: 6,
    title: "Buyback Process",
    icon: ArrowLeftRight,
    iconColor: "bg-teal-100 text-teal-700",
    description: "How easy is it to sell? Do they have a written buyback policy? At what type of discount to market pricing?",
  },
  {
    number: 7,
    title: "Reputation and Complaints",
    icon: Star,
    iconColor: "bg-yellow-100 text-yellow-700",
    description: "Check Better Business Bureau, Business Consumer Alliance, Trustpilot, and public complaint patterns. No firm is perfect, but repeated complaints about bait-and-switch tactics matter.",
  },
  {
    number: 8,
    title: "Sales Behavior",
    icon: MessageSquare,
    iconColor: "bg-red-100 text-red-700",
    description: "Do they educate or pressure? A good company answers questions clearly. A bad one tries to scare you into wiring money fast.",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function HowToCompareGoldIraCompaniesPage() {
  return (
    <>
      <Navbar />

      <SchemaScript
        schema={articleSchema({
          title: "How to Compare Gold IRA Companies Without Getting Burned",
          description:
            "A practical 8-factor scoring framework for comparing gold IRA companies. Learn how to evaluate fees, spreads, custodians, buyback terms, and reputation.",
          slug: "/learn/how-to-compare-gold-ira-companies",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Learn", url: "/learn" },
          { name: "How to Compare Gold IRA Companies", url: "/learn/how-to-compare-gold-ira-companies" },
        ])}
      />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-[#0C0D18] border-b border-[#2A2D42] pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-[#A8A39A] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#D4A94E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-[#D4A94E] transition-colors">Learn</Link>
              <span>/</span>
              <span className="text-[#F6F4EF] font-medium">How to Compare Gold IRA Companies</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F6F4EF] mb-4 leading-tight">
                How to Compare Gold IRA Companies Without Getting Burned
              </h1>
              <p className="text-lg md:text-xl text-[#D0CCC4] leading-relaxed mb-6">
                Shopping for a gold IRA company can feel like walking into a used car lot where everybody says they&apos;re &quot;the most trusted.&quot; Here is how to score them on what actually matters.
              </p>
              <ArticleMeta
                publishDate="2026-04-15"
                updateDate="2026-04-15"
                readTime="10 min"
              />
            </div>
          </Container>
        </section>

        {/* Content */}
        <Container className="py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="The best way to compare Gold IRA companies is to focus on verifiable factors: fee clarity, custodian setup, storage options, buyback terms, complaint patterns, and how the company explains risks. A polished sales pitch is not the same as a retiree-friendly provider."
              keyFacts={[
                "Transparent pricing is a major indicator of consumer-friendly financial products. Source: FTC / SEC",
                "Complaint patterns can reveal recurring service issues, but should be interpreted in context. Source: BBB / Consumer Affairs methodology caveats",
                "Investors should understand both the dealer and custodian roles before opening an account. Source: IRS / SEC",
              ]}
              className="mb-10"
            />

            <p className="text-[#D0CCC4] text-lg leading-relaxed mb-8">
              Many retirees start with online &quot;best gold IRA companies&quot; lists. But a lot of those rankings are really paid placements or lead-generation pages, not independent research. The company at the top may simply be the one paying the most. So how do you compare companies the right way? You ignore the hype and score them on the things that actually matter. For our own in-depth evaluation, see our <Link href="/reviews/augusta-precious-metals" className="text-[#D4A94E] font-medium hover:underline">Augusta Precious Metals review</Link>.
            </p>

            {/* Section: Understand the sales game */}
            <section id="sales-game" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-red-100 rounded-lg text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  First, Understand the Sales Game
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                Gold IRA marketing often leans hard on fear: inflation panic, dollar collapse warnings, bank failure headlines, and &quot;act now&quot; pressure. That does not mean every company is dishonest. But it does mean you need to separate salesmanship from facts.
              </p>
              <p className="text-[#D0CCC4] mb-4">
                The Federal Trade Commission, SEC, and FINRA all regularly warn investors to be cautious with high-pressure pitches, alternative assets, and products with hard-to-understand fees. If a company wants you to move your retirement money before you understand the details, that is a red flag.
              </p>
              <p className="text-[#D0CCC4]">
                For more on this topic, read our guide on <Link href="/learn/signs-gold-ira-company-not-reputable" className="text-[#D4A94E] font-medium hover:underline">signs a gold IRA company is not reputable</Link>.
              </p>
            </section>

            {/* Section: 8 factors */}
            <section id="eight-factors" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-100 rounded-lg text-blue-700">
                  <Search className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  The 8 Factors That Matter Most
                </h2>
              </div>
              <div className="space-y-6">
                {scoringFactors.map((factor) => {
                  const IconComponent = factor.icon;
                  return (
                    <div key={factor.number} className="bg-[#161828] border border-[#2A2D42] rounded-xl p-6 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className={`p-2.5 rounded-lg ${factor.iconColor} shrink-0`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#F6F4EF] text-lg mb-2">
                            {factor.number}. {factor.title}
                          </h3>
                          <p className="text-[#D0CCC4]">{factor.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <InContentCTA trackSource="learn-compare-gold-ira-companies" />

            {/* Section: Scoring framework */}
            <section id="scoring-framework" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">
                A Simple Scoring Framework You Can Use
              </h2>
              <p className="text-[#D0CCC4] mb-6">
                Score each of the 8 categories from 1 to 5. That gives you a possible total of 40 points.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-green-700 mb-1">34 - 40</p>
                  <p className="text-sm text-[#D0CCC4] font-medium">Strong Candidate</p>
                </div>
                <div className="bg-[#161828] border border-[rgba(197,149,46,0.32)] rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-amber-700 mb-1">28 - 33</p>
                  <p className="text-sm text-[#D0CCC4] font-medium">Worth Further Review</p>
                </div>
                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-red-700 mb-1">Under 28</p>
                  <p className="text-sm text-[#D0CCC4] font-medium">Proceed Carefully or Skip</p>
                </div>
              </div>
              <p className="text-[#D0CCC4]">
                This will not make the decision for you, but it forces you to compare real factors instead of TV ads and celebrity endorsements. For the latest data on the gold IRA industry, review our <Link href="/gold-ira-industry-report-2026" className="text-[#D4A94E] font-medium hover:underline">2026 Gold IRA Industry Report</Link>.
              </p>
            </section>

            {/* Section: Who is this for */}
            <section id="who-is-this-for" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-100 rounded-lg text-green-700">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Who This Is For, and Who It Is Not For
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[rgba(46,139,87,0.08)] border border-[rgba(46,139,87,0.32)] rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This Is for You If:</h3>
                  <ul className="space-y-2 text-[#D0CCC4] text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You are comparing multiple gold IRA providers</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You want to avoid overpaying on fees or markups</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You prefer facts over promotions</li>
                  </ul>
                </div>
                <div className="bg-[rgba(220,38,38,0.08)] border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This Is Not for You If:</h3>
                  <ul className="space-y-2 text-[#D0CCC4] text-sm">
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You have already decided based purely on advertising</li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You are looking for speculative coin collecting</li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You are unwilling to read fee disclosures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: Blue-collar example */}
            <section id="example" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                A Blue-Collar Example: Rick the Retired Pipefitter
              </h2>
              <div className="bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-6">
                <p className="text-[#D0CCC4] mb-4">
                  Rick is 66, a retired pipefitter. He sees three gold IRA companies online, all calling themselves &quot;#1.&quot; Instead of trusting the rankings, he makes a simple scorecard.
                </p>
                <p className="text-[#D0CCC4] mb-4">
                  One company has strong reviews but will not explain spreads. Another has transparent fees but aggressive sales calls. The third clearly lists costs, uses a known custodian, offers standard bullion products, and explains the buyback process in writing.
                </p>
                <p className="text-[#D0CCC4]">
                  Rick picks the third, not because it had the flashiest ad, but because it scored best where it counted.
                </p>
              </div>
            </section>

            {/* Section: Best-of lists warning */}
            <section id="best-of-lists" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF]">
                  Most &quot;Best-Of&quot; Lists Are Not Really Best-Of Lists
                </h2>
              </div>
              <p className="text-[#D0CCC4] mb-4">
                This is worth saying plainly: many comparison pages in the gold IRA world make money when you click or submit your contact information. That creates a conflict of interest. So when you see a company ranked number one, ask: Is this ranking editorial or paid? Are fees compared side by side? Are markups discussed? Are complaint records mentioned? Is there any criticism at all?
              </p>
              <p className="text-[#D0CCC4]">
                If every company on the page looks perfect, the page probably is not there to protect you. For honest cost breakdowns, read <Link href="/learn/gold-ira-fees-explained" className="text-[#D4A94E] font-medium hover:underline">Gold IRA Fees Explained</Link>. And for red flags to watch for, see <Link href="/when-not-to-open-gold-ira" className="text-[#D4A94E] font-medium hover:underline">when not to open a gold IRA</Link>.
              </p>
            </section>

            {/* Bottom line */}
            <section id="bottom-line" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-4">
                The Bottom Line
              </h2>
              <p className="text-[#D0CCC4] mb-4">
                A gold IRA company should be judged the same way you would judge a contractor working on your roof: clear pricing, solid reputation, no pressure, and no funny business.
              </p>
              <p className="text-[#D0CCC4]">
                Use a scorecard. Ask direct questions. Read the fine print. And do not trust &quot;best company&quot; lists unless you know how they get paid. That will not guarantee a perfect outcome, but it can dramatically lower your odds of getting burned.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F6F4EF] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-[#0C0D18] rounded-xl border border-[#2A2D42] p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#F6F4EF]">
                      <h3 className="text-lg font-bold">{faq.question}</h3>
                      <span className="shrink-0 rounded-full bg-[#121423] p-1.5 text-[#D4A94E] sm:p-3">
                        <ShieldCheck className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-[#D0CCC4]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <SourcesSection sources={sources} lastVerified="April 2026" />

            <AutoRelatedContent currentUrl="/learn/how-to-compare-gold-ira-companies" />

            <AuthorBox />
          </article>
        </Container>

        {/* Footer CTA */}
        <section className="py-16 bg-[#0C0D18] border-t border-[#2A2D42]">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-compare-gold-ira-companies" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
