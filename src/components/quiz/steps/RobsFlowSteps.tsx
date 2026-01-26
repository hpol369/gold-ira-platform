"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Building2, DollarSign, Rocket } from "lucide-react";

interface FlowStepsProps {
  onAnswer: (answers: RobsFlowAnswers) => void;
  onBack: () => void;
}

export interface RobsFlowAnswers {
  businessType: "franchise" | "buy-existing" | "startup";
  fundingNeeded: "under-50k" | "50k-100k" | "100k-250k" | "250k-plus";
  timelineToLaunch: "asap" | "3-6months" | "6-12months" | "exploring";
}

type StepKey = keyof RobsFlowAnswers;

interface Option {
  value: string;
  label: string;
  description?: string;
}

interface Step {
  id: StepKey;
  question: string;
  icon: React.ReactNode;
  options: Option[];
}

const steps: Step[] = [
  {
    id: "businessType",
    question: "What type of business are you planning?",
    icon: <Building2 className="h-6 w-6" />,
    options: [
      { value: "franchise", label: "Franchise", description: "Established brand and systems" },
      { value: "buy-existing", label: "Buy Existing Business", description: "Acquire a running operation" },
      { value: "startup", label: "New Startup", description: "Build from the ground up" },
    ],
  },
  {
    id: "fundingNeeded",
    question: "How much funding do you need?",
    icon: <DollarSign className="h-6 w-6" />,
    options: [
      { value: "under-50k", label: "Under $50,000", description: "Small business or side venture" },
      { value: "50k-100k", label: "$50,000 - $100,000", description: "Modest business launch" },
      { value: "100k-250k", label: "$100,000 - $250,000", description: "Significant investment" },
      { value: "250k-plus", label: "$250,000+", description: "Major business acquisition" },
    ],
  },
  {
    id: "timelineToLaunch",
    question: "What's your timeline to launch?",
    icon: <Rocket className="h-6 w-6" />,
    options: [
      { value: "asap", label: "ASAP", description: "Ready to move immediately" },
      { value: "3-6months", label: "3 - 6 Months", description: "Active planning phase" },
      { value: "6-12months", label: "6 - 12 Months", description: "Longer planning horizon" },
      { value: "exploring", label: "Just Exploring", description: "Researching options" },
    ],
  },
];

export function RobsFlowSteps({ onAnswer, onBack }: FlowStepsProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<RobsFlowAnswers>>({});

  const currentStep = steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / steps.length) * 100;
  const isLastStep = currentStepIndex === steps.length - 1;

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep.id]: value };
    setAnswers(newAnswers);

    if (isLastStep) {
      onAnswer(newAnswers as RobsFlowAnswers);
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-700 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-orange-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Step Counter */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <span className="text-sm text-slate-400">
          Step {currentStepIndex + 1} of {steps.length}
        </span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
              {currentStep.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              {currentStep.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-4">
            {currentStep.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className="group relative flex items-center justify-between p-6 text-left rounded-xl border-2 border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-200 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex-1">
                  <span className="block text-lg font-medium text-white group-hover:text-orange-400">
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="block text-sm text-slate-400 mt-1">
                      {option.description}
                    </span>
                  )}
                </div>
                <div className="h-6 w-6 rounded-full border-2 border-white/20 group-hover:border-orange-500 flex items-center justify-center flex-shrink-0 ml-4">
                  <div className="h-3 w-3 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
