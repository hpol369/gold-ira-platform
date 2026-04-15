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
  Coins,
  Scale,
  Warehouse,
  ShieldCheck,
  AlertTriangle,
  Users,
  CheckCircle2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title: "Gold IRA vs. Silver IRA for Retirement: Which Is More Appropriate? (2026)",
  description:
    "Compare gold and silver IRAs for retirement. Learn about volatility, IRS purity rules, storage costs, and which precious metal fits most retirees better.",
  url: "https://www.richdadretirement.com/learn/gold-ira-vs-silver-ira-for-retirement",
  type: "article",
});

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "Is silver riskier than gold in an IRA?",
    answer:
      "Usually yes. Silver prices tend to move more sharply up and down than gold, making it more volatile for retirement accounts.",
  },
  {
    question: "Does silver have better upside?",
    answer:
      "It can in some bull markets, but that extra upside often comes with larger losses too. Silver is more speculative than gold.",
  },
  {
    question: "What purity is required for IRA metals?",
    answer:
      "Gold generally must be 99.5% pure, and silver generally must be 99.9% pure, according to IRS rules under IRC Section 408(m).",
  },
  {
    question: "Can I keep IRA gold or silver at home?",
    answer:
      "No. IRA precious metals generally must be held by an approved custodian in an approved depository. Taking personal possession triggers taxes and penalties.",
  },
  {
    question: "Should retirees own both gold and silver?",
    answer:
      "Some do, but many retirees use gold as the main holding and keep silver smaller because it is more speculative and volatile.",
  },
];

const sources = [
  {
    name: "IRS Publication 590-A and IRA Guidance",
    url: "https://www.irs.gov/publications/p590a",
    accessDate: "March 2026",
  },
  {
    name: "U.S. Mint, Bullion Coin Specifications",
    url: "https://www.usmint.gov/",
    accessDate: "March 2026",
  },
  {
    name: "The Silver Institute, Silver Demand Data",
    url: "https://www.silverinstitute.org/",
    accessDate: "March 2026",
  },
  {
    name: "World Gold Council, Gold Market Data",
    url: "https://www.gold.org/",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function GoldIraVsSilverIraPage() {
  return (
    <>
      <Navbar />

      <SchemaScript
        schema={articleSchema({
          title: "Gold IRA vs. Silver IRA for Retirement: Which Is More Appropriate?",
          description:
            "Compare gold and silver IRAs for retirement. Learn about volatility, IRS purity rules, storage costs, and which precious metal fits most retirees better.",
          slug: "/learn/gold-ira-vs-silver-ira-for-retirement",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Learn", url: "/learn" },
          { name: "Gold IRA vs Silver IRA", url: "/learn/gold-ira-vs-silver-ira-for-retirement" },
        ])}
      />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#B22234] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-[#B22234] transition-colors">Learn</Link>
              <span>/</span>
              <span className="text-[#000080] font-medium">Gold IRA vs Silver IRA</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] mb-4 leading-tight">
                Gold IRA vs. Silver IRA for Retirement: Which Is More Appropriate for Most Retirees?
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Both metals can be held in a self-directed IRA. But they behave differently, cost differently, and fit different kinds of retirees. Here is the honest comparison.
              </p>
              <ArticleMeta
                publishDate="2026-04-15"
                updateDate="2026-04-15"
                readTime="8 min"
              />
            </div>
          </Container>
        </section>

        {/* Content */}
        <Container className="py-12 md:py-16">
          <article className="max-w-3xl mx-auto">
            <AnswerFirst
              answer="Gold and silver IRAs can serve different roles, but they are not equally suitable for every retiree. Gold is often viewed as the steadier precious-metals option, while silver may bring more price volatility and different industrial-demand dynamics."
              keyFacts={[
                "Silver has historically shown higher volatility than gold. Source: World Gold Council / market data",
                "Precious metals can behave differently under inflation, recession, and industrial demand cycles. Source: CME / World Gold Council",
                "Suitability should reflect risk tolerance and time horizon. Source: SEC Investor.gov",
              ]}
              className="mb-10"
            />

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              If you&apos;re thinking about putting part of your retirement savings into physical precious metals, one of the first questions is simple: gold or silver? For most retirees, this is not an all-or-nothing choice. It&apos;s about understanding what each metal does well, where the risks are, and how much portfolio space it really deserves.
            </p>

            {/* Section: Not the same investment */}
            <section id="different-investments" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-700">
                  <Coins className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                  Gold and Silver Are Not the Same Kind of Investment
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                Gold is mainly a monetary metal. People buy it as a store of value, a hedge against financial stress, and a diversifier when they don&apos;t fully trust stocks, bonds, or paper currency.
              </p>
              <p className="text-slate-600 mb-4">
                Silver has some of that same monetary appeal, but it also has major industrial demand. The Silver Institute says silver is used in electronics, solar panels, automotive applications, brazing alloys, and many other industrial products. That means silver prices are influenced not just by investor fear or inflation expectations, but also by the health of manufacturing and industry.
              </p>
              <p className="text-slate-600">
                Gold often acts more like a defensive asset. Silver often acts like a more volatile hybrid: part precious metal, part industrial commodity. In plain English, that usually means silver can move harder in both directions. If you want to understand more about <Link href="/learn/is-silver-a-good-investment" className="text-[#B22234] font-medium hover:underline">whether silver is a good investment</Link>, that is worth reading alongside this article.
              </p>
            </section>

            {/* Section: Volatility */}
            <section id="volatility" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-red-100 rounded-lg text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                  Volatility: Silver Usually Swings More Than Gold
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                If you want stability relative to other precious metals, gold usually wins. Silver has a long record of sharper booms and busts. That does not automatically make silver bad. It just means it may be more speculative, especially for retirees who cannot afford big swings late in life.
              </p>
              <p className="text-slate-600 mb-4">
                A retiree taking required withdrawals may not want to sell after a steep drop. That is one reason many conservative investors use gold first and treat silver, if they buy it at all, as a smaller side position.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#000080] mb-3">Think of It This Way</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Gold:</strong> Generally steadier, still volatile, but often less extreme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                    <span><strong>Silver:</strong> Usually cheaper per ounce, but price moves can be much wilder</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-600">
                If your goal is to sleep better at night, gold tends to fit better. If your goal is bigger upside and you accept bigger downside, silver may appeal more. Understanding <Link href="/learn/how-much-gold-in-retirement-portfolio" className="text-[#B22234] font-medium hover:underline">how much gold to hold in a retirement portfolio</Link> is the next step.
              </p>
            </section>

            <InContentCTA trackSource="learn-gold-vs-silver-ira" />

            {/* Section: IRA Rules */}
            <section id="ira-rules" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-100 rounded-lg text-blue-700">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                  IRA Rules: Purity Standards Are Slightly Different
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                The IRS has specific fineness requirements for precious metals held in an IRA. According to IRS Publication 590-A and industry guidance based on IRC rules:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-amber-700 mb-1">99.5%</p>
                  <p className="text-sm text-slate-600 font-medium">Gold Purity Requirement</p>
                </div>
                <div className="bg-slate-100 border border-slate-300 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-slate-700 mb-1">99.9%</p>
                  <p className="text-sm text-slate-600 font-medium">Silver Purity Requirement</p>
                </div>
              </div>
              <p className="text-slate-600">
                That often surprises people because many shoppers assume gold has the stricter standard. In a precious metals IRA, silver actually requires the higher fineness threshold. Not every coin or bar qualifies. Some popular collectibles and numismatic coins are not IRA-eligible even if they contain precious metal. It is important to verify eligibility with the custodian before you buy anything.
              </p>
            </section>

            {/* Section: Storage */}
            <section id="storage" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-purple-100 rounded-lg text-purple-700">
                  <Warehouse className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                  Storage and Practicality: Silver Takes Up a Lot More Space
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                One issue retirees often overlook is bulk. Gold is dense and expensive per ounce. A relatively small amount of gold can represent a sizable dollar value. Silver is much cheaper per ounce, so the same dollar investment in silver usually requires far more ounces and much more storage space.
              </p>
              <p className="text-slate-600 mb-4">
                That matters because IRA metals must be stored in an approved depository, not in your house. More bulk can mean more handling issues and sometimes different storage economics depending on the custodian and depository pricing model.
              </p>
              <p className="text-slate-600">
                For example, a $100,000 allocation to gold might be a manageable stack of coins or bars. A $100,000 allocation to silver is physically much larger and heavier. That does not make silver wrong. It just makes it less efficient from a storage standpoint. Before opening any precious metals IRA, review the <Link href="/gold-ira-industry-report-2026" className="text-[#B22234] font-medium hover:underline">2026 Gold IRA Industry Report</Link> for an overview of the market.
              </p>
            </section>

            {/* Section: Who is this for */}
            <section id="who-is-this-for" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-100 rounded-lg text-green-700">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080]">
                  Who This Is For, and Who It Is Not For
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">This May Be for You If:</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You want a modest hedge outside stocks and bonds</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You understand IRA storage and custodian rules</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You prefer gold for stability or silver for a smaller speculative slice</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> You are diversifying, not betting the farm</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">This May Not Be for You If:</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You need income from your retirement assets</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You are highly fee-sensitive</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You panic when prices drop</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> You want something simple and low-cost like an index fund</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                If a gold IRA does not seem right, read our guide on <Link href="/when-not-to-open-gold-ira" className="text-[#B22234] font-medium hover:underline">when not to open a gold IRA</Link> for a full breakdown.
              </p>
            </section>

            {/* Section: Blue-collar example */}
            <section id="example" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                A Blue-Collar Example: Mike the Retired Mechanic
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="text-slate-600 mb-4">
                  Mike is 63 and retired after 32 years as a diesel mechanic. He has a 401(k), a small pension, and Social Security. He does not trust the market completely, but he also knows he still needs growth.
                </p>
                <p className="text-slate-600 mb-4">
                  He looks at putting $40,000 into a metals IRA. At first, silver seems more exciting because he can buy more ounces. But after learning how much more silver can swing and how much bulk it adds, he decides to put $30,000 in gold and $10,000 in silver.
                </p>
                <p className="text-slate-600">
                  That mix gives him some inflation and crisis exposure without turning his retirement into a speculative metals bet.
                </p>
              </div>
            </section>

            {/* Section: Bottom line */}
            <section id="bottom-line" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                Bottom Line: Gold Usually Fits Retirees Better Than Silver
              </h2>
              <p className="text-slate-600 mb-4">
                For retirement savers, gold is usually the more practical core holding. It tends to be less volatile than silver, is more compact to store, and behaves more like a defensive asset.
              </p>
              <p className="text-slate-600 mb-4">
                Silver can still have a place, but for many retirees it makes more sense as a smaller satellite position, not the centerpiece. Its industrial demand can help in some environments, but it can also make silver act more like a cyclical commodity than a pure safe haven.
              </p>
              <p className="text-slate-600">
                If you are choosing just one for a retirement IRA, gold is usually the more conservative choice. For a deeper dive, check our <Link href="/reviews/augusta-precious-metals" className="text-[#B22234] font-medium hover:underline">Augusta Precious Metals review</Link> to see how top providers handle both metals.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                      <h3 className="text-lg font-bold">{faq.question}</h3>
                      <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-[#B22234] sm:p-3">
                        <ShieldCheck className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <SourcesSection sources={sources} lastVerified="April 2026" />

            <AutoRelatedContent currentUrl="/learn/gold-ira-vs-silver-ira-for-retirement" />

            <AuthorBox />
          </article>
        </Container>

        {/* Footer CTA */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <Container>
            <AugustaCTA variant="footer" trackSource="learn-gold-vs-silver-ira" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
