import Link from "next/link";
import {
  BookOpen,
  Calculator,
  HelpCircle,
  FileText,
  ArrowRight,
  GraduationCap,
  Scale,
} from "lucide-react";
import { getRelatedLinks } from "@/data/internal-links";

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
  type?: "guide" | "tool" | "faq" | "article" | "compare" | "learn";
}

interface RelatedContentProps {
  title?: string;
  links: RelatedLink[];
  variant?: "cards" | "list" | "inline";
  className?: string;
}

const typeIcons = {
  guide: FileText,
  tool: Calculator,
  faq: HelpCircle,
  article: BookOpen,
  compare: Scale,
  learn: GraduationCap,
};

const typeLabels = {
  guide: "Guide",
  tool: "Tool",
  faq: "FAQ",
  article: "Article",
  compare: "Compare",
  learn: "Learn",
};

export function RelatedContent({
  title = "Related Resources",
  links,
  variant = "cards",
  className = "",
}: RelatedContentProps) {
  if (links.length === 0) return null;

  // Card variant - prominent display
  if (variant === "cards") {
    return (
      <div className={`bg-[#0C0D18] rounded-2xl p-6 md:p-8 ${className}`}>
        <h3 className="text-lg font-bold text-[#F6F4EF] mb-6">{title}</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, index) => {
            const Icon = typeIcons[link.type || "article"] || BookOpen;
            return (
              <Link
                key={index}
                href={link.href}
                className="group bg-[#161828] border border-[#2A2D42] rounded-xl p-4 hover:bg-[#121423] hover:border-[rgba(197,149,46,0.45)] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[rgba(220,38,38,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#D4A94E]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    {link.type && (
                      <span className="text-[#D4A94E] text-xs font-medium uppercase">
                        {typeLabels[link.type]}
                      </span>
                    )}
                    <h4 className="text-[#F6F4EF] font-semibold group-hover:text-[#D4A94E] transition-colors line-clamp-2">
                      {link.title}
                    </h4>
                    {link.description && (
                      <p className="text-[#A8A39A] text-sm mt-1 line-clamp-2">
                        {link.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // List variant - compact sidebar style
  if (variant === "list") {
    return (
      <div className={`bg-[#0C0D18] border border-[#2A2D42] rounded-xl p-5 ${className}`}>
        <h3 className="text-[#F6F4EF] font-semibold mb-4">{title}</h3>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-[#A8A39A] hover:text-[#D4A94E] transition-colors group"
              >
                <ArrowRight className="h-4 w-4 text-[#A8A39A] group-hover:text-[#D4A94E] transition-colors" />
                <span className="text-sm">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Inline variant - simple links for within content
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="px-3 py-1.5 bg-[#0C0D18] border border-[#2A2D42] rounded-full text-[#A8A39A] text-sm hover:bg-[#1E2134] hover:text-[#D4A94E] hover:border-[rgba(197,149,46,0.45)] transition-all"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

/**
 * Auto-resolving related content using hub-and-spoke internal linking data.
 * Renders dark-themed links for learn/guide pages.
 */
interface AutoRelatedContentProps {
  currentUrl: string;
  title?: string;
  maxLinks?: number;
  className?: string;
}

export function AutoRelatedContent({
  currentUrl,
  title = "Related Articles",
  maxLinks = 5,
  className = "",
}: AutoRelatedContentProps) {
  const links = getRelatedLinks(currentUrl, maxLinks);

  if (links.length === 0) return null;

  return (
    <section className={`mt-12 pt-8 border-t border-white/10 ${className}`}>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="grid gap-2">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            <span className="text-[#3F4460] group-hover:text-amber-400 font-medium transition-colors">
              {link.title}
            </span>
            <ArrowRight className="h-4 w-4 text-[#A8A39A] group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}

// Pre-built related content groups for common use cases
export const relatedContentGroups = {
  gettingStarted: [
    { title: "What is a Gold IRA?", href: "/what-is-a-gold-ira", type: "learn" as const },
    { title: "Gold IRA Rules", href: "/gold-ira-rules", type: "guide" as const },
    { title: "Complete Guide", href: "/guide/gold-ira-guide", type: "guide" as const },
    { title: "Best Companies", href: "/best-gold-ira-companies", type: "compare" as const },
  ],
  rollovers: [
    { title: "401k Rollover", href: "/rollover/401k", type: "guide" as const },
    { title: "TSP Rollover", href: "/rollover/tsp", type: "guide" as const },
    { title: "IRA Transfer", href: "/rollover", type: "guide" as const },
    { title: "Roth Conversion", href: "/rollover/roth-ira-to-gold-ira", type: "guide" as const },
  ],
  taxes: [
    { title: "Tax Rules", href: "/learn/gold-ira-tax-rules", type: "learn" as const },
    { title: "RMD Calculator", href: "/tools/rmd-calculator", type: "tool" as const },
    { title: "Gold IRA Rules", href: "/gold-ira-rules", type: "guide" as const },
  ],
  tools: [
    { title: "Crash Simulator", href: "/tools/crash-simulator", type: "tool" as const },
    { title: "RMD Calculator", href: "/tools/rmd-calculator", type: "tool" as const },
    { title: "Fees Comparison", href: "/tools/fees-comparison", type: "tool" as const },
  ],
  education: [
    { title: "Gold IRA Academy", href: "/academy", type: "learn" as const },
    { title: "FAQ Hub", href: "/faq", type: "faq" as const },
    { title: "Glossary", href: "/glossary", type: "learn" as const },
    { title: "Scams to Avoid", href: "/learn/gold-ira-scams", type: "learn" as const },
  ],
};
