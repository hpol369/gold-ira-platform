"use client";

import { Sun, Car, Smartphone, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemandDriver {
  icon: React.ElementType;
  stat: string;
  label: string;
  detail: string;
}

const demandDrivers: DemandDriver[] = [
  {
    icon: Sun,
    stat: "600M oz",
    label: "Silver for solar by 2030",
    detail: "Every panel needs silver",
  },
  {
    icon: Car,
    stat: "1-2 oz",
    label: "Per electric vehicle",
    detail: "EV production doubling",
  },
  {
    icon: Smartphone,
    stat: "50%+",
    label: "Industrial demand",
    detail: "Phones, tablets, 5G towers",
  },
  {
    icon: Activity,
    stat: "Growing",
    label: "Medical applications",
    detail: "Antibacterial properties",
  },
];

interface LPSilverDemandProps {
  className?: string;
}

export function LPSilverDemand({ className }: LPSilverDemandProps) {
  return (
    <section className={cn("bg-slate-800/50 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why Silver Demand is Growing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Unlike gold that sits in vaults, silver powers modern life.
            Over half of all silver goes to industry each year.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {demandDrivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative p-5 md:p-6 rounded-xl text-center",
                  "bg-white/5 backdrop-blur-sm border border-white/10",
                  "hover:border-sky-400/30 hover:bg-white/[0.07]",
                  "transition-all duration-300"
                )}
              >
                <div className="h-12 w-12 rounded-lg bg-sky-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-sky-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {driver.stat}
                </div>
                <div className="text-sm md:text-base font-medium text-slate-300 mb-1">
                  {driver.label}
                </div>
                <div className="text-xs md:text-sm text-slate-500">
                  {driver.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple callout for 55+ audience */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
            <span className="text-white font-medium">Your grandkids&apos; phones, your neighbor&apos;s solar panels, the electric cars on your street</span>
            {" "}&mdash; they all need silver. And unlike gold, silver gets used up.
          </p>
        </div>
      </div>
    </section>
  );
}
