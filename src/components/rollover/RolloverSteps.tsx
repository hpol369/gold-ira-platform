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
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="font-bold text-lg text-slate-900 mb-6">
        How to Roll Over Your {providerName} Account
      </h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1 pt-1">
              <p className="text-slate-700">{step}</p>
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
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Pro Tips
        </h3>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-green-800">
              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Warnings */}
      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Watch Out For
        </h3>
        <ul className="space-y-3">
          {warnings.map((warning, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-amber-800">
              <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
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
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
      <h3 className="font-bold text-slate-900 mb-4">Timeline & Process</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
          <div className="text-2xl font-bold text-slate-900">{timeline}</div>
          <div className="text-sm text-slate-500">Typical Processing</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
          <div className={cn(
            "text-2xl font-bold",
            directRollover ? "text-green-600" : "text-slate-400"
          )}>
            {directRollover ? "Yes" : "No"}
          </div>
          <div className="text-sm text-slate-500">Direct Rollover</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg border border-slate-100">
          <div className={cn(
            "text-2xl font-bold",
            onlineRollover ? "text-green-600" : "text-slate-400"
          )}>
            {onlineRollover ? "Yes" : "No"}
          </div>
          <div className="text-sm text-slate-500">Online Available</div>
        </div>
      </div>
    </div>
  );
}
