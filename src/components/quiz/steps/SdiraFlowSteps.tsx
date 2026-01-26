"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Target, DollarSign, GraduationCap } from "lucide-react";

interface FlowStepsProps {
  onAnswer: (answers: SdiraFlowAnswers) => void;
  onBack: () => void;
}

export interface SdiraFlowAnswers {
  investmentFocus: "real-estate" | "private-lending" | "startups" | "alternative";
  budgetRange: "under-25k" | "25k-50k" | "50k-100k" | "100k-500k" | "500k-plus";
  experienceLevel: "first-time" | "some-experience" | "experienced";
}

type StepKey = keyof SdiraFlowAnswers;

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
    id: "investmentFocus",
    question: "What's your investment focus?",
    icon: <Target className="h-6 w-6" />,
    options: [
      { value: "real-estate", label: "Real Estate", description: "Rental properties, land, commercial" },
      { value: "private-lending", label: "Private Lending", description: "Promissory notes and loans" },
      { value: "startups", label: "Startups & Private Equity", description: "Early-stage companies" },
      { value: "alternative", label: "Alternative Assets", description: "Precious metals, crypto, tax liens" },
    ],
  },
  {
    id: "budgetRange",
    question: "What's your investment budget?",
    icon: <DollarSign className="h-6 w-6" />,
    options: [
      { value: "under-25k", label: "Under $25,000", description: "Getting started" },
      { value: "25k-50k", label: "$25,000 - $50,000", description: "Building foundation" },
      { value: "50k-100k", label: "$50,000 - $100,000", description: "Serious allocation" },
      { value: "100k-500k", label: "$100,000 - $500,000", description: "Significant position" },
      { value: "500k-plus", label: "$500,000+", description: "Major portfolio allocation" },
    ],
  },
  {
    id: "experienceLevel",
    question: "What's your experience level with self-directed investing?",
    icon: <GraduationCap className="h-6 w-6" />,
    options: [
      { value: "first-time", label: "First Time", description: "New to self-directed accounts" },
      { value: "some-experience", label: "Some Experience", description: "Made a few alternative investments" },
      { value: "experienced", label: "Experienced Investor", description: "Comfortable with due diligence" },
    ],
  },
];

export function SdiraFlowSteps({ onAnswer, onBack }: FlowStepsProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<SdiraFlowAnswers>>({});

  const currentStep = steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / steps.length) * 100;
  const isLastStep = currentStepIndex === steps.length - 1;

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep.id]: value };
    setAnswers(newAnswers);

    if (isLastStep) {
      onAnswer(newAnswers as SdiraFlowAnswers);
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
          className="h-full bg-emerald-500"
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
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
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
                className="group relative flex items-center justify-between p-6 text-left rounded-xl border-2 border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-200 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex-1">
                  <span className="block text-lg font-medium text-white group-hover:text-emerald-400">
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="block text-sm text-slate-400 mt-1">
                      {option.description}
                    </span>
                  )}
                </div>
                <div className="h-6 w-6 rounded-full border-2 border-white/20 group-hover:border-emerald-500 flex items-center justify-center flex-shrink-0 ml-4">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
