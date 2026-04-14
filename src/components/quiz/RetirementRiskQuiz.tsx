"use client";

// src/components/quiz/RetirementRiskQuiz.tsx
// Interactive step-by-step Retirement Risk Score quiz
// Uses data from src/data/retirement-risk-quiz.ts

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw, Shield, BookOpen, AlertTriangle, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  quizQuestions,
  calculateScore,
  getRiskCategory,
  type QuizQuestion,
  type RiskCategory,
} from "@/data/retirement-risk-quiz";
import { AugustaCTA } from "@/components/cta/AugustaCTA";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RetirementRiskQuizProps {
  onComplete?: (score: number, category: RiskCategory) => void;
}

type QuizState = "active" | "results";

// ---------------------------------------------------------------------------
// Color mapping
// ---------------------------------------------------------------------------

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-300",
    badge: "bg-green-100 text-green-800 border-green-300",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-800 border-amber-300",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-300",
    badge: "bg-orange-100 text-orange-800 border-orange-300",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-300",
    badge: "bg-red-100 text-red-800 border-red-300",
  },
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ---------------------------------------------------------------------------
// Progress Bar
// ---------------------------------------------------------------------------

function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-[#000080]">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <motion.div
          className="h-full bg-gradient-to-r from-[#000080] to-[#B22234] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Option Button
// ---------------------------------------------------------------------------

function OptionButton({
  option,
  isSelected,
  onSelect,
  index,
}: {
  option: QuizQuestion["options"][number];
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      onClick={onSelect}
      className={cn(
        "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200",
        "font-medium text-base",
        "focus:outline-none focus:ring-2 focus:ring-[#000080]/30 focus:ring-offset-2",
        isSelected
          ? "border-[#000080] bg-[#000080]/5 text-[#000080] shadow-md"
          : "border-slate-200 bg-white text-slate-700 hover:border-[#B22234]/40 hover:bg-slate-50 hover:shadow-sm"
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors",
            isSelected
              ? "border-[#000080] bg-[#000080] text-white"
              : "border-slate-300 text-slate-400"
          )}
        >
          {String.fromCharCode(65 + index)}
        </span>
        <span>{option.label}</span>
      </div>
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// Results Screen
// ---------------------------------------------------------------------------

function ResultsScreen({
  score,
  category,
  onRestart,
}: {
  score: number;
  category: RiskCategory;
  onRestart: () => void;
}) {
  const colors = colorMap[category.color] || colorMap.amber;

  const ctaIcon = {
    "gold-ira-guide": Shield,
    education: BookOpen,
    alternatives: AlertTriangle,
    foundations: GraduationCap,
  }[category.ctaType];

  const Icon = ctaIcon;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Score display */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-slate-200 bg-white shadow-lg mb-4">
          <div>
            <div className="text-4xl font-bold text-[#000080]">{score}</div>
            <div className="text-xs text-slate-500 font-medium">out of 30</div>
          </div>
        </div>
      </div>

      {/* Risk category badge */}
      <div className="mb-6">
        <span
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border",
            colors.badge
          )}
        >
          <Icon className="h-4 w-4" />
          {category.label}
        </span>
      </div>

      {/* Description */}
      <div className={cn("rounded-xl p-6 border mb-6 text-left", colors.bg, colors.border)}>
        <h3 className={cn("text-lg font-bold mb-3", colors.text)}>
          What This Means
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">{category.description}</p>
        <h4 className={cn("text-base font-bold mb-2", colors.text)}>
          Our Recommendation
        </h4>
        <p className="text-slate-700 leading-relaxed">{category.recommendation}</p>
      </div>

      {/* Route-specific CTA */}
      <div className="space-y-4">
        {category.ctaType === "gold-ira-guide" && (
          <>
            <Link
              href="/guide/gold-ira-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#000080] text-white font-bold rounded-xl hover:bg-[#000080]/90 transition-colors"
            >
              <Shield className="h-5 w-5" />
              Read Our Gold IRA Guide
            </Link>
            <div className="mt-6">
              <AugustaCTA
                variant="footer"
                headline="Ready to Take the Next Step?"
                subheadline="Your score suggests you are a strong candidate for a Gold IRA. Augusta Precious Metals offers a free, no-pressure educational web conference."
                trackSource="retirement-risk-quiz-low-risk"
              />
            </div>
          </>
        )}

        {category.ctaType === "education" && (
          <div className="space-y-3">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#000080] text-white font-bold rounded-xl hover:bg-[#000080]/90 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              Explore Our Learning Center
            </Link>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Link
                href="/guide/gold-ira-fees"
                className="text-sm text-[#B22234] font-medium hover:underline"
              >
                Gold IRA Fees Explained
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href="/compare"
                className="text-sm text-[#B22234] font-medium hover:underline"
              >
                Compare Gold IRA Companies
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href="/gold-ira-rules"
                className="text-sm text-[#B22234] font-medium hover:underline"
              >
                Gold IRA Rules
              </Link>
            </div>
          </div>
        )}

        {category.ctaType === "alternatives" && (
          <div className="space-y-3">
            <Link
              href="/when-not-to-open-gold-ira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#000080] text-white font-bold rounded-xl hover:bg-[#000080]/90 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              See Gold IRA Alternatives
            </Link>
            <p className="text-sm text-slate-500 mt-2">
              Learn about gold ETFs, mining stock funds, and I-Bonds as lower-cost options.
            </p>
          </div>
        )}

        {category.ctaType === "foundations" && (
          <div className="space-y-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
              <h4 className="font-bold text-[#000080] mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Build Your Foundation First
              </h4>
              <ol className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000080] text-white text-xs flex items-center justify-center font-bold mt-0.5">1</span>
                  Build a 3-month emergency fund
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000080] text-white text-xs flex items-center justify-center font-bold mt-0.5">2</span>
                  Pay down high-interest debt above 8% APR
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000080] text-white text-xs flex items-center justify-center font-bold mt-0.5">3</span>
                  Maximize your employer 401(k) match
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#000080] text-white text-xs flex items-center justify-center font-bold mt-0.5">4</span>
                  <span>
                    Learn the basics &mdash;{" "}
                    <Link href="/learn" className="text-[#B22234] font-medium hover:underline">
                      start here
                    </Link>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Restart button */}
      <button
        onClick={onRestart}
        className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#000080] transition-colors font-medium"
      >
        <RotateCcw className="h-4 w-4" />
        Retake Quiz
      </button>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main Quiz Component
// ---------------------------------------------------------------------------

export function RetirementRiskQuiz({ onComplete }: RetirementRiskQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [quizState, setQuizState] = useState<QuizState>("active");
  const [direction, setDirection] = useState(1);

  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQuestion];
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const hasAnswered = answers[question.id] !== undefined;

  const handleSelect = useCallback(
    (questionId: number, points: number) => {
      setAnswers((prev) => ({ ...prev, [questionId]: points }));
    },
    []
  );

  const handleNext = useCallback(() => {
    if (!hasAnswered) return;

    if (isLastQuestion) {
      // Calculate and show results
      const score = calculateScore(answers);
      const category = getRiskCategory(score);
      setQuizState("results");
      onComplete?.(score, category);
    } else {
      setDirection(1);
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [hasAnswered, isLastQuestion, answers, onComplete]);

  const handleBack = useCallback(() => {
    if (isFirstQuestion) return;
    setDirection(-1);
    setCurrentQuestion((prev) => prev - 1);
  }, [isFirstQuestion]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizState("active");
    setDirection(-1);
  }, []);

  // Results screen
  if (quizState === "results") {
    const score = calculateScore(answers);
    const category = getRiskCategory(score);

    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 md:p-10 max-w-2xl mx-auto">
        <ResultsScreen
          score={score}
          category={category}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Active quiz screen
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 md:p-10 max-w-2xl mx-auto">
      <ProgressBar current={currentQuestion} total={totalQuestions} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentQuestion}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Question */}
          <h2 className="text-xl md:text-2xl font-bold text-[#000080] mb-6 leading-snug">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <OptionButton
                key={option.value}
                option={option}
                isSelected={answers[question.id] === option.points}
                onSelect={() => handleSelect(question.id, option.points)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <button
          onClick={handleBack}
          disabled={isFirstQuestion}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            isFirstQuestion
              ? "text-slate-300 cursor-not-allowed"
              : "text-slate-600 hover:bg-slate-50 hover:text-[#000080]"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={!hasAnswered}
          className={cn(
            "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200",
            hasAnswered
              ? "bg-[#B22234] text-white hover:bg-[#B22234]/90 shadow-md hover:shadow-lg"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          )}
        >
          {isLastQuestion ? "See My Score" : "Next"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
