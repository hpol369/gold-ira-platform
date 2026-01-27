"use client";

import { CheckCircle, Building2, Landmark, Users, Shield, Briefcase, PiggyBank } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccountType {
  name: string;
  description: string;
  icon: "building" | "landmark" | "users" | "shield" | "briefcase" | "piggybank";
}

interface LPAccountTypesProps {
  headline?: string;
  subheadline?: string;
  accounts?: AccountType[];
  className?: string;
}

const iconMap = {
  building: Building2,
  landmark: Landmark,
  users: Users,
  shield: Shield,
  briefcase: Briefcase,
  piggybank: PiggyBank,
};

const defaultAccounts: AccountType[] = [
  {
    name: "401(k)",
    description: "From previous employer",
    icon: "building",
  },
  {
    name: "Traditional IRA",
    description: "Any custodian",
    icon: "landmark",
  },
  {
    name: "403(b)",
    description: "Education & non-profit",
    icon: "users",
  },
  {
    name: "TSP",
    description: "Federal employees",
    icon: "shield",
  },
  {
    name: "457(b)",
    description: "State & local govt",
    icon: "briefcase",
  },
  {
    name: "SEP / SIMPLE IRA",
    description: "Self-employed",
    icon: "piggybank",
  },
];

export function LPAccountTypes({
  headline = "Which Accounts Qualify for Rollover?",
  subheadline = "You can roll over any of these account types to a Silver IRA - tax-free",
  accounts = defaultAccounts,
  className,
}: LPAccountTypesProps) {
  return (
    <section className={cn("bg-slate-900 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            {headline}
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {accounts.map((account) => {
            const Icon = iconMap[account.icon];
            return (
              <div
                key={account.name}
                className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-green-400/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="absolute top-3 right-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1">
                  {account.name}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm">{account.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tax-Free Callout */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 rounded-xl border border-green-400/20 bg-green-500/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-green-400 font-bold text-lg">Direct Rollover</div>
                <div className="text-slate-300 text-sm">Zero taxes, zero penalties</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="text-slate-300 text-sm max-w-xs">
              A direct rollover moves funds directly between custodians - never touches your hands, never triggers taxes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
