import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  articleSchema,
  faqSchema,
  breadcrumbSchema,
  howToSchema,
} from "@/lib/schema";
import { AnswerFirst } from "@/components/seo/AnswerFirst";
import { FAQSection } from "@/components/seo/FAQSection";
import { AutoRelatedContent } from "@/components/content/RelatedContent";
import { SourcesSection } from "@/components/content/SourcesSection";
import { AugustaCTA } from "@/components/cta/AugustaCTA";
import { AuthorBox } from "@/components/guide/AuthorBox";
import { ArticleMeta } from "@/components/content/ArticleMeta";
import { InContentCTA } from "@/components/widgets/InContentCTA";
import { Callout } from "@/components/ui/Callout";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Coins,
  FileText,
  Users,
  Warehouse,
  Lock,
  DollarSign,
  Scale,
  Banknote,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = createPageMetadata({
  title:
    "How Does a Gold IRA Work? Simple Step-by-Step Explanation (2026)",
  description:
    "Learn exactly how a Gold IRA works in plain English. 5-step process from opening an account to storing your gold. Fees, players, distributions, and IRS rules explained for 2026.",
  url: "https://www.richdadretirement.com/how-does-a-gold-ira-work",
  type: "article",
});

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: "Can I hold the gold myself at home?",
    answer:
      "No. The IRS requires that Gold IRA metals be stored in an approved depository — not your home, not a safe deposit box, not a personal safe. If you take physical possession of IRA gold, the IRS considers it a distribution. That means income taxes plus a 10% early withdrawal penalty if you are under 59 and a half. The only legal way to hold your gold at home is to take a qualified distribution after reaching the required age.",
  },
  {
    question: "How long does it take to set up a Gold IRA?",
    answer:
      "Most Gold IRA accounts can be opened within one to three business days. The full process — including funding the account through a rollover and purchasing your metals — typically takes one to three weeks total. Your Gold IRA company handles most of the paperwork for you.",
  },
  {
    question: "What types of gold can I put in a Gold IRA?",
    answer:
      "The IRS requires gold to be at least 99.5% pure (fineness of .995). Popular approved products include American Gold Eagles, Canadian Gold Maple Leafs, Australian Gold Kangaroos, and gold bars from COMEX or LBMA approved refiners. Collectible or rare coins are not allowed.",
  },
  {
    question: "How much does a Gold IRA cost per year?",
    answer:
      "Annual costs typically range from $150 to $400 per year. This includes an annual custodian fee of $50 to $150 and a storage fee of $100 to $300 depending on whether you choose segregated or commingled storage. Some companies waive first-year fees for new accounts.",
  },
  {
    question: "Can I add more gold to my IRA later?",
    answer:
      "Yes. You can make annual contributions to your Gold IRA just like a regular IRA — up to $7,000 per year if you are under 50, or $8,000 if you are 50 or older (2026 limits). You can also do additional rollovers from other retirement accounts at any time. There is no limit on how many direct rollovers you can do per year.",
  },
  {
    question:
      "What happens to my Gold IRA if the custodian or depository goes out of business?",
    answer:
      "Your gold is your property, not the custodian's or the depository's. If a custodian closes, your account simply transfers to another custodian. If a depository closes, your metals are returned to your custodian for transfer to another approved facility. Depositories also carry full insurance coverage — typically through Lloyd's of London — so your metals are protected against theft, damage, or natural disaster.",
  },
  {
    question: "Is a Gold IRA a good idea for someone close to retirement?",
    answer:
      "Many financial professionals consider gold a smart addition for people within 10 years of retirement. Gold tends to hold its value during market downturns and periods of high inflation — exactly the risks that threaten retirement savings. Most advisors suggest allocating 5% to 25% of your retirement portfolio to precious metals depending on your risk tolerance and timeline.",
  },
];

const howToSteps = [
  {
    name: "Choose a Gold IRA custodian",
    text: "Pick a self-directed IRA custodian that specializes in precious metals. Look for transparent fees, strong BBB ratings, and a track record of handling rollovers smoothly. Augusta Precious Metals is our top-rated choice for their education-first approach and zero complaints over a decade.",
  },
  {
    name: "Open your Gold IRA account",
    text: "Fill out a short application with your personal info, Social Security number, and beneficiary. Most companies handle this for you over the phone or online. Takes about 15 minutes.",
  },
  {
    name: "Fund your account through a rollover or contribution",
    text: "Move money from an existing 401k, IRA, TSP, 403b, or other retirement account into your new Gold IRA. A direct (trustee-to-trustee) rollover is tax-free and penalty-free. You can also make a cash contribution up to the annual IRA limit.",
  },
  {
    name: "Select your IRS-approved metals",
    text: "Work with your custodian or dealer to choose gold, silver, platinum, or palladium that meets IRS purity standards. Gold must be at least 99.5% pure. Your company will walk you through approved products and current pricing.",
  },
  {
    name: "Metals are purchased and shipped to an approved depository",
    text: "Your custodian purchases the metals on your behalf and ships them to a secure, IRS-approved depository like Delaware Depository or Brink's. Your gold is insured and stored in a vault — either segregated (your metals kept separate) or commingled (stored with other investors' metals).",
  },
];

const sources = [
  {
    name: "IRS Publication 590-A: Contributions to Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590a",
    accessDate: "March 2026",
  },
  {
    name: "IRS Publication 590-B: Distributions from Individual Retirement Arrangements",
    url: "https://www.irs.gov/publications/p590b",
    accessDate: "March 2026",
  },
  {
    name: "IRS Precious Metals IRA Requirements (IRC Section 408(m))",
    url: "https://www.irs.gov/retirement-plans/investments-in-collectibles-in-individually-directed-qualified-plan-accounts",
    accessDate: "March 2026",
  },
  {
    name: "IRS Topic No. 413 — Rollovers from Retirement Plans",
    url: "https://www.irs.gov/taxtopics/tc413",
    accessDate: "March 2026",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function HowDoesAGoldIRAWorkPage() {
  return (
    <>
      <Navbar />

      {/* Schema Markup */}
      <SchemaScript
        schema={articleSchema({
          title:
            "How Does a Gold IRA Work? Simple Step-by-Step Explanation (2026)",
          description:
            "Learn exactly how a Gold IRA works — the 3 key players, 5-step setup process, fees, storage, and distributions explained in plain English.",
          slug: "/how-does-a-gold-ira-work",
          datePublished: "2026-03-22",
          dateModified: "2026-03-22",
        })}
      />
      <SchemaScript
        schema={howToSchema({
          name: "How to Set Up a Gold IRA",
          description:
            "Step-by-step process to open and fund a Gold IRA, choose IRS-approved metals, and store them in a secure depository.",
          totalTime: "P21D",
          steps: howToSteps,
        })}
      />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "How Does a Gold IRA Work?", url: "/how-does-a-gold-ira-work" },
        ])}
      />

      <main className="bg-white min-h-screen">
        {/* ---------------------------------------------------------------- */}
        {/* Hero */}
        {/* ---------------------------------------------------------------- */}
        <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-slate-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#B22234] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#000080] font-medium">
                How Does a Gold IRA Work?
              </span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000080] mb-4 leading-tight">
                How Does a Gold IRA Work?
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                A plain-English explanation of the entire process — from
                opening your account to storing physical gold in a secure
                vault. No jargon, no Wall Street double-talk.
              </p>

              <ArticleMeta
                publishDate="2026-03-22"
                updateDate="2026-03-22"
                readTime="10 min read"
              />
            </div>
          </Container>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Content */}
        {/* ---------------------------------------------------------------- */}
        <Container className="py-12 md:py-16">
          <div className="flex gap-10">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl mx-auto">
              {/* Answer-First Block */}
              <AnswerFirst
                answer="A Gold IRA works just like a regular IRA, except it holds physical gold (and other approved metals) instead of stocks or mutual funds. You open a self-directed IRA with a specialized custodian, fund it through a rollover or contribution, choose your metals, and they get shipped to a secure depository vault. Your gold grows tax-deferred — or tax-free if it is a Roth — until you take distributions in retirement."
                keyFacts={[
                  "It is a self-directed IRA — you control what goes in it",
                  "Three key players: you, a custodian, and a depository",
                  "Funded through rollovers (401k, IRA, TSP) or annual contributions",
                  "IRS requires gold to be at least 99.5% pure",
                  "Your metals are insured and stored in an IRS-approved vault",
                ]}
                className="mb-10"
              />

              {/* ---------------------------------------------------------- */}
              {/* The 3 Key Players */}
              {/* ---------------------------------------------------------- */}
              <section id="three-key-players" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  The 3 Key Players in a Gold IRA
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  A regular IRA only needs you and a brokerage. A Gold IRA
                  adds two more parties because the IRS will not let you
                  store retirement gold in your sock drawer. Here is who
                  does what:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Player 1: You */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                    <div className="w-14 h-14 bg-[#000080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-7 w-7 text-[#000080]" />
                    </div>
                    <h3 className="font-bold text-[#000080] text-lg mb-2">
                      You (The Account Owner)
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      You decide how much to invest, which metals to buy,
                      and when to take distributions. You own everything in
                      the account. Nobody makes decisions for you.
                    </p>
                  </div>

                  {/* Player 2: Custodian */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                    <div className="w-14 h-14 bg-[#B22234]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-7 w-7 text-[#B22234]" />
                    </div>
                    <h3 className="font-bold text-[#000080] text-lg mb-2">
                      The Custodian
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      An IRS-approved financial institution that holds your
                      account, handles paperwork, processes transactions,
                      and reports to the IRS on your behalf. Think of them
                      as the account administrator.
                    </p>
                  </div>

                  {/* Player 3: Depository */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Warehouse className="h-7 w-7 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-[#000080] text-lg mb-2">
                      The Depository
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      A secure, IRS-approved vault (like Delaware Depository
                      or Brink&apos;s) where your physical gold is stored and
                      insured. They handle receiving, inventorying, and
                      safeguarding your metals.
                    </p>
                  </div>
                </div>

                <Callout type="info" title="Why Can't I Just Store It Myself?">
                  <p>
                    The IRS is very clear on this: Gold IRA metals must be
                    held by an approved depository. If you take personal
                    possession of IRA gold, the IRS treats it as a
                    distribution — meaning you owe income taxes and
                    potentially a 10% early withdrawal penalty. The
                    depository requirement exists to prevent fraud and
                    ensure accountability.
                  </p>
                </Callout>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* How It Works: 5 Steps */}
              {/* ---------------------------------------------------------- */}
              <section id="how-it-works-5-steps" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  How It Works: 5 Steps From Start to Finish
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Setting up a Gold IRA is not complicated. Most companies
                  handle the heavy lifting for you. Here is the entire
                  process broken down:
                </p>

                <div className="space-y-6">
                  {howToSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-6"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#000080] text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#000080] text-lg mb-2">
                          Step {index + 1}: {step.name}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
                  <h3 className="font-bold text-[#000080] mb-3 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-amber-500" />
                    Real-World Example
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Linda, 58, worked as a nurse for 30 years and has
                    $220,000 in her 403(b). She picks Augusta Precious
                    Metals as her Gold IRA company. Augusta opens a
                    self-directed IRA for her, contacts her 403(b)
                    administrator, and arranges a direct rollover of
                    $55,000. Two weeks later the money arrives, and Linda
                    uses it to buy American Gold Eagles and gold bars. Her
                    metals ship to Delaware Depository, where they sit in a
                    segregated vault insured by Lloyd&apos;s of London. The
                    remaining $165,000 stays in her 403(b). No taxes. No
                    penalties. Total time: about three weeks.
                  </p>
                </div>

                <Callout type="tip" title="Pro Tip: Always Choose a Direct Rollover">
                  <p>
                    A direct rollover (trustee-to-trustee transfer) means
                    the money goes straight from your old account to your
                    new Gold IRA. You never touch it, so there is zero risk
                    of owing taxes or missing a deadline. An indirect
                    rollover, where you receive a check and must redeposit
                    within 60 days, is riskier and unnecessary. Stick with
                    direct.
                  </p>
                </Callout>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Mid-Article CTA */}
              {/* ---------------------------------------------------------- */}
              <InContentCTA
                variant="emphasized"
                trackSource="how-does-gold-ira-work-mid"
              />

              {/* ---------------------------------------------------------- */}
              {/* What Happens to Your Gold */}
              {/* ---------------------------------------------------------- */}
              <section id="what-happens-to-your-gold" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  What Happens to Your Gold After You Buy It
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Once you select your metals and the purchase is made, your
                  gold does not show up at your front door. Here is exactly
                  where it goes and how it is protected:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Warehouse className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#000080] mb-1">
                        Shipped to an IRS-Approved Depository
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Your custodian arranges secure shipment to a
                        facility like Delaware Depository, Brink&apos;s, or
                        International Depository Services. These vaults meet
                        strict IRS requirements and undergo regular audits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="w-10 h-10 bg-[#000080]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lock className="h-5 w-5 text-[#000080]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#000080] mb-1">
                        Segregated vs. Commingled Storage
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        <strong>Segregated storage</strong> means your gold
                        is kept in its own space, separate from every other
                        investor&apos;s metals. When you take a distribution,
                        you get the exact same coins and bars you bought.
                        <strong> Commingled storage</strong> pools your
                        metals with other investors&apos; holdings — you are
                        still entitled to the same quantity and quality, but
                        not necessarily the identical pieces. Segregated
                        costs more ($50 to $150 extra per year) but gives
                        you peace of mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#000080] mb-1">
                        Fully Insured
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Approved depositories carry comprehensive insurance
                        — typically through Lloyd&apos;s of London — that
                        covers theft, damage, and natural disasters. Your
                        gold is protected 24/7 with armed security, biometric
                        access, seismic sensors, and 24-hour surveillance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Fees You'll Pay */}
              {/* ---------------------------------------------------------- */}
              <section id="fees" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  Fees You&apos;ll Pay With a Gold IRA
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Gold IRAs cost more than a basic stock-market IRA because
                  there are real metals to store and insure. Here is a
                  straightforward breakdown of every fee you might see:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#000080] text-white">
                        <th className="text-left px-4 py-3 font-semibold">
                          Fee Type
                        </th>
                        <th className="text-left px-4 py-3 font-semibold">
                          Typical Cost
                        </th>
                        <th className="text-left px-4 py-3 font-semibold">
                          When Charged
                        </th>
                        <th className="text-left px-4 py-3 font-semibold">
                          What It Covers
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Setup / Account Opening
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          $0 &ndash; $50
                        </td>
                        <td className="px-4 py-3 text-slate-600">One-time</td>
                        <td className="px-4 py-3 text-slate-600">
                          Opening your new self-directed IRA (many companies
                          waive this)
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Annual Custodian Fee
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          $50 &ndash; $150/year
                        </td>
                        <td className="px-4 py-3 text-slate-600">Annually</td>
                        <td className="px-4 py-3 text-slate-600">
                          Account administration, IRS reporting, statements
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Storage Fee
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          $100 &ndash; $300/year
                        </td>
                        <td className="px-4 py-3 text-slate-600">Annually</td>
                        <td className="px-4 py-3 text-slate-600">
                          Vault storage and insurance; segregated costs more
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Transaction / Dealer Spread
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          3% &ndash; 5% over spot
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Per purchase or sale
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          The markup on gold products — shop around for the
                          best price
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Wire Transfer Fee
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          $25 &ndash; $30
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Per transfer
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Wiring funds between financial institutions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Callout type="info" title="What It Really Costs Per Month">
                  <p>
                    For a Gold IRA with $50,000 to $100,000 in metals,
                    expect total annual fees of roughly $150 to $400. That
                    works out to about $12 to $33 per month — less than most
                    streaming subscriptions. Some companies waive the first
                    year of fees entirely.
                  </p>
                </Callout>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Taking Distributions */}
              {/* ---------------------------------------------------------- */}
              <section id="taking-distributions" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  Taking Distributions: How You Get Your Gold (or Cash)
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  When it is time to tap into your Gold IRA — typically in
                  retirement — you have two options for receiving your
                  assets:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Coins className="h-6 w-6 text-amber-600" />
                      <h3 className="font-bold text-amber-900 text-lg">
                        Take Physical Gold
                      </h3>
                    </div>
                    <p className="text-amber-800 text-sm leading-relaxed mb-3">
                      Your custodian ships the actual gold coins or bars
                      directly to you. You hold them, sell them privately,
                      or store them however you want.
                    </p>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        You get the exact metals you purchased (segregated)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        Full physical control of your asset
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        Taxed as ordinary income (traditional IRA)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Banknote className="h-6 w-6 text-green-600" />
                      <h3 className="font-bold text-green-900 text-lg">
                        Cash Out
                      </h3>
                    </div>
                    <p className="text-green-800 text-sm leading-relaxed mb-3">
                      Your custodian sells the gold at current market
                      prices and deposits the cash proceeds into your bank
                      account or another IRA.
                    </p>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        Simple and fast — no shipping involved
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        Proceeds based on current spot price
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        Taxed as ordinary income (traditional IRA)
                      </li>
                    </ul>
                  </div>
                </div>

                <Callout type="warning" title="Required Minimum Distributions (RMDs)">
                  <p>
                    If you have a traditional Gold IRA, the IRS requires
                    you to start taking minimum distributions at age 73
                    (as of 2026). You cannot just let the gold sit forever.
                    You can satisfy your RMD by selling enough gold to
                    cover the required amount, or by taking an in-kind
                    distribution of the physical metals. Roth Gold IRAs
                    have no RMDs during your lifetime.
                  </p>
                </Callout>

                <p className="text-slate-700 leading-relaxed mt-4">
                  <strong>Early withdrawals:</strong> If you take a
                  distribution before age 59&frac12;, you will owe a 10%
                  early withdrawal penalty on top of regular income taxes
                  (traditional IRA). This applies whether you take gold or
                  cash. A few exceptions exist — disability, first-time
                  home purchase (up to $10,000), and substantially equal
                  periodic payments (SEPP/72t).
                </p>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Gold IRA vs Regular IRA */}
              {/* ---------------------------------------------------------- */}
              <section id="gold-ira-vs-regular-ira" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  Gold IRA vs. Regular IRA: Quick Comparison
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Wondering how a Gold IRA stacks up against the IRA your
                  employer or bank set up for you? Here is a side-by-side
                  look:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#000080] text-white">
                        <th className="text-left px-4 py-3 font-semibold">
                          Feature
                        </th>
                        <th className="text-left px-4 py-3 font-semibold">
                          Gold IRA
                        </th>
                        <th className="text-left px-4 py-3 font-semibold">
                          Regular IRA
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          What it holds
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Physical gold, silver, platinum, palladium
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Stocks, bonds, mutual funds, ETFs
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Custodian type
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Self-directed IRA custodian
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Bank, brokerage, or robo-advisor
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Storage
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          IRS-approved depository vault
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Electronic (digital account)
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Annual fees
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          $150 &ndash; $400/year
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          $0 &ndash; $75/year
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Tax advantages
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Same (tax-deferred or tax-free for Roth)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Same (tax-deferred or tax-free for Roth)
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Contribution limits
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Same ($7,000 or $8,000 if 50+)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Same ($7,000 or $8,000 if 50+)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Inflation protection
                        </td>
                        <td className="px-4 py-3 text-green-600 font-semibold">
                          Strong — gold historically rises with inflation
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Depends on holdings
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Market crash protection
                        </td>
                        <td className="px-4 py-3 text-green-600 font-semibold">
                          Strong — gold often rises when stocks fall
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Exposed to market volatility
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-100 transition-colors">
                        <td className="px-4 py-3 font-semibold text-[#000080]">
                          Liquidity
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Sell through custodian (1-3 business days)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Sell instantly online
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-500 text-sm mt-3 italic">
                  Note: Many investors hold both a Gold IRA and a regular
                  IRA. The goal is not to replace one with the other but to
                  diversify your retirement portfolio across different asset
                  classes.
                </p>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Cross-Links */}
              {/* ---------------------------------------------------------- */}
              <section id="related-guides" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                  Learn More About Gold IRAs
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Dive deeper into specific topics related to Gold IRAs:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "What Is a Gold IRA?",
                      href: "/what-is-a-gold-ira",
                      desc: "The complete definition and overview",
                      icon: FileText,
                    },
                    {
                      title: "Gold IRA Rollover Guide",
                      href: "/gold-ira-rollover",
                      desc: "Step-by-step rollover process and tax rules",
                      icon: DollarSign,
                    },
                    {
                      title: "Gold IRA Rules & IRS Regulations",
                      href: "/gold-ira-rules",
                      desc: "Contribution limits, approved metals, and penalties",
                      icon: Scale,
                    },
                    {
                      title: "Best Gold IRA Companies (2026)",
                      href: "/reviews",
                      desc: "Independent company ratings and comparisons",
                      icon: Building2,
                    },
                  ].map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-[#B22234]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#B22234]/10 rounded-lg flex items-center justify-center shrink-0">
                          <guide.icon className="h-5 w-5 text-[#B22234]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#000080] group-hover:text-[#B22234] transition-colors">
                            {guide.title}
                          </h3>
                          <p className="text-slate-500 text-sm mt-1">
                            {guide.desc}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-3">
                        <span className="text-[#B22234] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Guide{" "}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* ---------------------------------------------------------- */}
              {/* FAQ Section */}
              {/* ---------------------------------------------------------- */}
              <section id="faq" className="mb-12 scroll-mt-24">
                <FAQSection
                  faqs={faqs}
                  title="Gold IRA: Frequently Asked Questions"
                  includeSchema={false}
                />
              </section>

              {/* ---------------------------------------------------------- */}
              {/* Sources */}
              {/* ---------------------------------------------------------- */}
              <SourcesSection
                sources={sources}
                lastVerified="March 22, 2026"
              />

              {/* ---------------------------------------------------------- */}
              {/* Author Box */}
              {/* ---------------------------------------------------------- */}
              <div className="bg-slate-900 rounded-2xl p-2 mt-12">
                <AuthorBox />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Footer CTA */}
              {/* ---------------------------------------------------------- */}
              <div className="mt-12">
                <AugustaCTA
                  variant="footer"
                  headline="Ready to See How a Gold IRA Works for You?"
                  subheadline="Request a free information kit from Augusta Precious Metals — our #1 rated Gold IRA company. No sales pressure, just education."
                  trackSource="how-does-gold-ira-work-footer"
                />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Related Content */}
              {/* ---------------------------------------------------------- */}
              <div className="bg-slate-900 rounded-2xl p-6 mt-12">
                <AutoRelatedContent
                  currentUrl="/how-does-a-gold-ira-work"
                  title="Keep Reading"
                  maxLinks={6}
                />
              </div>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
