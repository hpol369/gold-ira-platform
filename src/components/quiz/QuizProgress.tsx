"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
  className?: string;
}

export function QuizProgress({
  currentStep,
  totalSteps,
  labels,
  className
}: QuizProgressProps) {
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className={cn("w-full", className)}>
      {/* Step Counter */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-400">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-amber-400">
          {Math.round(progress)}% Complete
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      </div>

      {/* Optional Step Labels */}
      {labels && labels.length > 0 && (
        <div className="flex justify-between mt-3">
          {labels.map((label, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isFuture = stepNumber > currentStep;

            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center transition-all duration-300",
                  isFuture && "opacity-40"
                )}
              >
                {/* Step Indicator Dot */}
                <div
                  className={cn(
                    "w-3 h-3 rounded-full mb-1 transition-all duration-300",
                    isCompleted && "bg-amber-500",
                    isCurrent && "bg-amber-400 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-slate-900",
                    isFuture && "bg-slate-600"
                  )}
                />
                {/* Step Label */}
                <span
                  className={cn(
                    "text-xs font-medium transition-colors duration-300 text-center max-w-[80px]",
                    isCompleted && "text-amber-400",
                    isCurrent && "text-white",
                    isFuture && "text-slate-500"
                  )}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Simplified version without labels for compact display
export function QuizProgressBar({
  progress,
  className
}: {
  progress: number;
  className?: string;
}) {
  return (
    <div className={cn("w-full h-2 bg-slate-700/50 rounded-full overflow-hidden", className)}>
      <motion.div
        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      />
    </div>
  );
}
