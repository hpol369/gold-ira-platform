import {
  FileText,
  Scale,
  ShieldCheck,
  Heart,
  HeartPulse,
  Building2,
  DollarSign,
  ShieldAlert,
  AlertTriangle,
  Bell,
  Landmark,
  Calculator,
  Umbrella,
  BadgeCheck,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { getAdjacentResources } from "@/data/adjacent-resources";
import type { AdjacentResource } from "@/data/adjacent-resources";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Scale,
  ShieldCheck,
  Heart,
  HeartPulse,
  Building2,
  DollarSign,
  ShieldAlert,
  AlertTriangle,
  Bell,
  Landmark,
  Calculator,
  Umbrella,
  BadgeCheck,
};

const categoryLabels: Record<AdjacentResource["category"], string> = {
  "estate-planning": "Estate Planning",
  medicare: "Medicare",
  "long-term-care": "Long-Term Care",
  insurance: "Insurance",
  "tax-planning": "Tax Planning",
  "elder-protection": "Elder Protection",
};

interface AdjacentResourcesProps {
  pageSlug: string;
  maxItems?: number;
}

export function AdjacentResources({
  pageSlug,
  maxItems = 6,
}: AdjacentResourcesProps) {
  const resources = getAdjacentResources(pageSlug, maxItems);

  if (resources.length === 0) return null;

  return (
    <section className="bg-slate-50 rounded-2xl p-6 md:p-8">
      <h3 className="text-lg font-bold text-[#000080] mb-1">
        Related Retirement Resources
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Trusted government and nonprofit sources for your retirement planning.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {resources.map((resource) => {
          const Icon = iconMap[resource.icon] ?? FileText;

          return (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-[#B22234]/30 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#B22234]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-[#B22234]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#B22234] text-xs font-medium uppercase tracking-wide">
                    {categoryLabels[resource.category]}
                  </span>
                  <h4 className="text-[#000080] font-semibold group-hover:text-[#B22234] transition-colors leading-snug flex items-center gap-1.5">
                    {resource.name}
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#B22234] flex-shrink-0 transition-colors" />
                  </h4>
                  <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
