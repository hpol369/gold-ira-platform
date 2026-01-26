// src/components/rollover/RolloverSteps.tsx
// Step-by-step rollover process component

import { CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface RolloverStepsProps {
  steps: string[];
  providerName: string;
}

export function RolloverSteps({ steps, providerName }: RolloverStepsProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
      <h3 className="font-bold text-lg text-white mb-2">
        Step-by-Step: Rolling Over Your {providerName} Account
      </h3>
      <p className="text-slate-400 text-sm mb-6">
        Your Gold IRA company handles most of this. You just need to know what&apos;s happening.
      </p>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm border border-amber-500/30">
              {index + 1}
            </div>
            <div className="flex-1 pt-1">
              <p className="text-slate-300">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface TipsWarningsProps {
  tips: string[];
  warnings: string[];
}

export function TipsWarnings({ tips, warnings }: TipsWarningsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Tips */}
      <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
        <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          What Helps
        </h3>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-green-300">
              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Warnings */}
      <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
        <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Things to Avoid
        </h3>
        <ul className="space-y-3">
          {warnings.map((warning, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-amber-300">
              <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{warning}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface RolloverTimelineProps {
  timeline: string;
  directRollover: boolean;
  onlineRollover: boolean;
}

export function RolloverTimeline({ timeline, directRollover, onlineRollover }: RolloverTimelineProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <h3 className="font-bold text-white mb-2">How Long Does This Take?</h3>
      <p className="text-slate-400 text-sm mb-4">Here&apos;s what to expect once you start the process.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="text-2xl font-bold text-amber-400">{timeline}</div>
          <div className="text-sm text-slate-400">Start to Finish</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
          <div className={cn(
            "text-2xl font-bold",
            directRollover ? "text-green-400" : "text-slate-500"
          )}>
            {directRollover ? "Yes" : "No"}
          </div>
          <div className="text-sm text-slate-400">Direct Rollover</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
          <div className={cn(
            "text-2xl font-bold",
            onlineRollover ? "text-green-400" : "text-slate-500"
          )}>
            {onlineRollover ? "Yes" : "No"}
          </div>
          <div className="text-sm text-slate-400">Start Online</div>
        </div>
      </div>
    </div>
  );
}
