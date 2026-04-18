"use client";
import Link from "next/link";

const GROUPS = [
  {
    title: "Reviews",
    links: [
      { label: "Augusta Precious Metals", href: "/reviews/augusta" },
      { label: "Goldco", href: "/reviews/goldco" },
      { label: "Noble Gold", href: "/reviews/noble-gold" },
      { label: "American Hartford Gold", href: "/reviews/american-hartford" },
      { label: "All reviews", href: "/reviews" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Head-to-head matrix", href: "/compare" },
      { label: "Fees comparison", href: "/compare/fees" },
      { label: "Storage options", href: "/compare/storage" },
      { label: "Minimums", href: "/compare/minimums" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Gold IRA calculator", href: "/tools" },
      { label: "FIRE calculator", href: "/tools/fire" },
      { label: "Rollover estimator", href: "/tools/rollover" },
      { label: "Pension vs lump sum", href: "/tools/pension" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "401(k) rollover guide", href: "/guide/401k-rollover" },
      { label: "Silver IRA explained", href: "/buy-sell-silver" },
      { label: "IRS rules (Pub 590-A)", href: "/guide/irs-rules" },
      { label: "Tax implications", href: "/guide/tax" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Contact", href: "/get-started" },
      { label: "Privacy & terms", href: "/privacy-policy" },
    ],
  },
];

export function FooterV2() {
  return (
    <footer className="relative border-t border-[#2A2D42] bg-[#0C0D18]">
      <div className="container-x mx-auto py-16 md:py-20">
        {/* Top row: brand + manifesto */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] mb-14">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(197,149,46,0.35)] bg-[rgba(197,149,46,0.08)]">
                <span className="font-serif text-xl text-[#D4A94E]">R</span>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-lg text-[#F6F4EF]">
                  Rich Dad Retirement
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#A8A39A]">
                  Gold &amp; Silver IRA Guidance
                </div>
              </div>
            </Link>
            <p className="font-serif italic text-[#D0CCC4] text-[17px] leading-[1.55] max-w-[380px]">
              &ldquo;The difference between the rich and the poor is the rich
              invest their money and spend what's left — the poor spend their
              money and invest what's left.&rdquo;
            </p>
            <p className="text-[12px] text-[#7E7A72] mt-2">— Rich Dad philosophy</p>

            <div className="mt-8 flex items-center gap-4 text-sm text-[#A8A39A]">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2E8B57]" />
                Gold <span className="tactical text-[#D4A94E]">$2,348.12</span>
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                Silver <span className="tactical text-[#F6F4EF]">$28.41</span>
              </span>
            </div>
          </div>

          {/* Link grid */}
          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h4 className="font-serif text-[15px] text-[#F6F4EF] mb-4 tracking-[-0.01em]">
                  {g.title}
                </h4>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-[#A8A39A] hover:text-[#D4A94E] transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A2D42] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-[12px] text-[#7E7A72]">
          <div className="max-w-[760px] leading-[1.65]">
            © 2026 Rich Dad Retirement. Affiliate disclosure: This site may receive
            compensation from featured custodians at no cost to readers. Rankings and
            reviews remain editorially independent. Not investment advice. Consult a
            qualified fiduciary before any rollover decision. IRS rules (Pub 590-A)
            apply to all gold IRA rollovers.
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/sitemap.xml" className="hover:text-[#D4A94E] transition-colors">
              Sitemap
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#D4A94E] transition-colors">
              Privacy
            </Link>
            <Link href="/editorial-policy" className="hover:text-[#D4A94E] transition-colors">
              Editorial policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
