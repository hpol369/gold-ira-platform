"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { getQuizResult, type QuizState, type QuizResult } from "@/types/quiz";
import { Container } from "@/components/ui/Container";
import { getTrackedLink } from "@/config/affiliates";

// Updated for "Rich Dad" style scoring
const steps = [
    {
        id: "intro",
        title: "What is Your 'Rich Dad' Retirement Score?",
        subtitle: "Find out if your retirement is protected like the wealthy - or exposed like the middle class."
    },
    {
        id: "age",
        question: "What is your current age group?",
        options: [
            { value: "45-54", label: "45 - 54 (Accumulation Phase)" },
            { value: "55-64", label: "55 - 64 (Preservation Phase)" },
            { value: "65-74", label: "65 - 74 (Distribution Phase)" },
            { value: "75+", label: "75+ (Legacy Phase)" },
        ]
    },
    {
        id: "savings",
        question: "How much 'paper wealth' do you currently hold?",
        helper: "Include 401(k), IRA, and other currency-based accounts.",
        options: [
            { value: "<25k", label: "Less than $25,000" },
            { value: "25k-50k", label: "$25,000 – $50,000" },
            { value: "50k-100k", label: "$50,000 – $100,000" },
            { value: "100k-250k", label: "$100,000 – $250,000" },
            { value: "250k+", label: "Over $250,000" },
        ]
    },
    {
        id: "goal",
        question: "What do you want your assets to do?",
        options: [
            { value: "inflation", label: "Fight Inflation (Stop Losing Value)" },
            { value: "diversification", label: "True Diversification (Non-Correlated)" },
            { value: "economy", label: "Survive a Market Crash" },
            { value: "legacy", label: "Build Generational Wealth" },
        ]
    },
    {
        id: "timeline",
        question: "When do you want to secure your financial future?",
        options: [
            { value: "asap", label: "Immediately (Smart Money Moves Fast)" },
            { value: "3-months", label: "Within 3 months" },
            { value: "6-months", label: "Within 6 months" },
            { value: "research", label: "Just Browsing" },
        ]
    },
    {
        id: "analyzing",
        title: "Calculating your Wealth Score...",
    },
    {
        id: "results",
        title: "Your Retirement Score Analysis",
    }
];

export function QuizWizard() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState<Partial<QuizState>>({});
    const [result, setResult] = useState<QuizResult | null>(null);

    const currentStep = steps[currentStepIndex];
    const progress = ((currentStepIndex) / (steps.length - 1)) * 100;

    const handleOptionSelect = (key: keyof QuizState, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        const nextIndex = currentStepIndex + 1;

        if (steps[nextIndex].id === "analyzing") {
            setCurrentStepIndex(nextIndex);
            // Simulate analysis
            setTimeout(() => {
                setResult(getQuizResult({ ...answers, [key]: value }));
                setCurrentStepIndex(nextIndex + 1);
            }, 2000);
        } else {
            setCurrentStepIndex(nextIndex);
        }
    };

    const handleStart = () => {
        setCurrentStepIndex(1);
    };

    const handleBack = () => {
        if (currentStepIndex > 1 && currentStep.id !== "results") {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    // Render Functions
    const renderIntro = () => (
        <div className="text-center space-y-8 py-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-4">
                <AlertTriangle className="h-4 w-4" />
                Are You Exposed?
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{steps[0].title}</h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">{steps[0].subtitle}</p>

            <Button size="xl" variant="gold" onClick={handleStart} className="w-full sm:w-auto min-w-[240px] text-lg px-12 py-6 shadow-xl">
                Calculate My Score
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-slate-400">Takes less than 60 seconds. No SSN required.</p>
        </div>
    );

    const renderQuestion = () => (
        <div className="max-w-2xl mx-auto py-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center">
                {currentStep.question}
            </h2>
            {currentStep.helper && (
                <p className="text-center text-slate-400 mb-8 text-sm">{currentStep.helper}</p>
            )}

            <div className="grid grid-cols-1 gap-4 mt-8">
                {currentStep.options?.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => {
                            // Map step ID to state key
                            let key: keyof QuizState | null = null;
                            if (currentStep.id === "age") key = "ageRange";
                            if (currentStep.id === "savings") key = "savingsAmount";
                            if (currentStep.id === "goal") key = "investmentGoal";
                            if (currentStep.id === "timeline") key = "timeline";

                            if (key) handleOptionSelect(key, option.value);
                        }}
                        className="group relative flex items-center justify-between p-6 text-left rounded-xl border-2 border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-200 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="text-lg font-medium text-white group-hover:text-amber-400">
                            {option.label}
                        </span>
                        <div className="h-6 w-6 rounded-full border-2 border-white/20 group-hover:border-amber-500 flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderAnalyzing = () => (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin mb-8" />
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Analyzing your profile...</h3>
            <p className="text-slate-400">Comparing your portfolio against wealth protection strategies.</p>
        </div>
    );

    const renderResults = () => {
        if (!result) return null;
        return (
            <div className="max-w-3xl mx-auto py-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-8">
                    <CheckCircle2 className="h-4 w-4" />
                    Score Calculation Complete
                </div>

                <h2 className="text-3xl font-serif font-bold text-white mb-2">
                    Your Result: <span className="text-amber-400">{result.scoreLabel}</span>
                </h2>

                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                    Based on your answers, your retirement savings may be vulnerable to inflation. However, you are in a prime position to adopt the strategies used by the wealthy.
                </p>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8 text-left relative overflow-hidden">
                    {/* Top Banner */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600" />

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Score Circle */}
                        <div className="w-full md:w-auto flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl min-w-[150px] border border-white/10">
                            <span className="text-4xl font-bold text-white font-serif">
                                {result.score}<span className="text-lg text-slate-400">/100</span>
                            </span>
                            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 mt-1">Wealth Score</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 font-serif">Recommended Strategy: {result.match}</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">{result.description}</p>

                            <ul className="space-y-3 mb-8">
                                {result.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="xl" variant="gold" asChild className="w-full">
                                    <a href={getTrackedLink(result.affiliateLink, "quiz-result", result.partnerId)} target="_blank" rel="noopener noreferrer">
                                        Get Free "Rich Dad" Investment Kit
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <div className="text-center sm:text-left px-2">
                                    <p className="text-xs text-slate-400 mt-2">100% Free • No Obligation • Educational Only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-slate-400">
                    Top Recommendation based on your portfolio size: {result.match}.
                </p>
            </div>
        );
    };

    return (
        <Container className="max-w-4xl min-h-[600px] flex flex-col justify-center">
            {/* Progress Bar */}
            {currentStepIndex > 0 && currentStepIndex < steps.length - 1 && (
                <div className="w-full h-2 bg-slate-700 rounded-full mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-amber-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            )}

            {/* Back Button */}
            {currentStepIndex > 1 && currentStep.id !== "analyzing" && currentStep.id !== "results" && (
                <button
                    onClick={handleBack}
                    className="self-start flex items-center gap-1 text-sm text-slate-400 hover:text-white mb-4 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" /> Back
                </button>
            )}

            {/* Content Area */}
            <div className="w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currentStep.id === "intro" && renderIntro()}
                        {(currentStep.id === "age" || currentStep.id === "savings" || currentStep.id === "goal" || currentStep.id === "timeline") && renderQuestion()}
                        {currentStep.id === "analyzing" && renderAnalyzing()}
                        {currentStep.id === "results" && renderResults()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Container>
    );
}
