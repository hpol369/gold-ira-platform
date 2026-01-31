// src/components/rollover/ProviderCard.tsx
// Provider card for rollover hub page

import Link from "next/link";
import { RolloverProvider } from "@/data/rollovers";
import { ArrowRight, Building2, Clock, Phone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProviderCardProps {
  provider: RolloverProvider;
  variant?: "default" | "compact";
}

export function ProviderCard({ provider, variant = "default" }: ProviderCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/rollover/${provider.slug}`}
        className="group flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-amber-500/20 transition-colors border border-white/10">
            <Building2 className="h-5 w-5 text-slate-400 group-hover:text-amber-700" />
          </div>
          <div>
            <div className="font-semibold text-white group-hover:text-amber-700 transition-colors">
              {provider.name}
            </div>
            <div className="text-xs text-slate-500">{provider.typicalTimeline}</div>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
      </Link>
    );
  }

  return (
    <Link
      href={`/rollover/${provider.slug}`}
      className="group block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/10 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-700 rounded-xl group-hover:bg-amber-500/20 transition-colors border border-white/10">
            <Building2 className="h-6 w-6 text-slate-400 group-hover:text-amber-700" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white group-hover:text-amber-700 transition-colors">
              {provider.name}
            </h3>
            <span className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full border",
              provider.type === "brokerage" && "bg-blue-500/20 text-blue-700 border-blue-500/30",
              provider.type === "employer" && "bg-green-500/20 text-green-700 border-green-500/30",
              provider.type === "government" && "bg-purple-500/20 text-purple-700 border-purple-500/30"
            )}>
              {provider.type === "brokerage" ? "Brokerage" :
               provider.type === "employer" ? "Employer Plan" : "Government"}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
        {provider.description}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {provider.typicalTimeline}
        </div>
        {provider.phone && (
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            {provider.phone}
          </div>
        )}
        {provider.onlineRollover && (
          <div className="flex items-center gap-1">
            <Globe className="h-4 w-4 text-green-700" />
            Online Available
          </div>
        )}
      </div>

      <div className="flex items-center text-amber-700 font-semibold text-sm group-hover:gap-2 transition-all">
        View Rollover Guide
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

// Account Type Card
interface AccountTypeCardProps {
  accountType: {
    name: string;
    slug: string;
    fullName: string;
    description: string;
    taxTreatment: string;
    contributionLimit2026: number;
  };
}

export function AccountTypeCard({ accountType }: AccountTypeCardProps) {
  return (
    <Link
      href={`/rollover/${accountType.slug}-to-gold-ira`}
      className="group block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/10 transition-all"
    >
      <h3 className="font-bold text-lg text-white group-hover:text-amber-700 transition-colors mb-2">
        {accountType.name} to Gold IRA
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        {accountType.description}
      </p>
      <div className="flex items-center justify-between">
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full border",
          accountType.taxTreatment === "pre-tax" && "bg-blue-500/20 text-blue-700 border-blue-500/30",
          accountType.taxTreatment === "post-tax" && "bg-green-500/20 text-green-700 border-green-500/30",
          accountType.taxTreatment === "both" && "bg-purple-500/20 text-purple-700 border-purple-500/30"
        )}>
          {accountType.taxTreatment === "pre-tax" ? "Pre-Tax" :
           accountType.taxTreatment === "post-tax" ? "Post-Tax (Roth)" : "Both Options"}
        </span>
        <span className="text-amber-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
