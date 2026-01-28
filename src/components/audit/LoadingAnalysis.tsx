"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const analysisSteps = [
    "Connecting to Market Data API (Live Stick)...",
    "Analyzing Portfolio Inflation Exposure...",
    "Calculating 2030 Purchasing Power Projection...",
    "Scanning for Hedge Opportunities...",
    "Generating Sovereign Blueprint..."
];

export function LoadingAnalysis({ onComplete }: { onComplete: () => void }) {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep >= analysisSteps.length) {
            setTimeout(onComplete, 1000); // Final pause
            return;
        }

        const interval = setInterval(() => {
            setCurrentStep(prev => prev + 1);
        }, 1500); // 1.5s per step

        return () => clearInterval(interval);
    }, [currentStep, onComplete]);

    const progress = Math.min(((currentStep + 1) / analysisSteps.length) * 100, 100);

    return (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl min-h-[500px] text-center px-4 border border-slate-200 shadow-lg">
            {/* Radar Scan Effect */}
            <div className="relative w-32 h-32 mb-12">
                <div className="absolute inset-0 border-4 border-slate-200 rounded-full" />
                <div className="absolute inset-0 border-4 border-[#B22234]/50 rounded-full border-t-[#B22234] animate-spin" />
                <div className="absolute inset-4 bg-slate-50 rounded-full flex items-center justify-center">
                    <span className="text-[#B22234] font-bold font-mono text-xl">{Math.round(progress)}%</span>
                </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#000080] mb-4">
                Analyzing Your Wealth Profile
            </h2>

            <div className="h-8 mb-8">
                <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-600 font-mono text-sm md:text-base"
                >
                    {currentStep < analysisSteps.length ? (
                        <>
                            <span className="animate-pulse mr-2">➜</span>
                            {analysisSteps[currentStep]}
                        </>
                    ) : (
                        <span className="text-[#000080]">Analysis Complete. Loading Report...</span>
                    )}
                </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-sm h-1 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-[#B22234] to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
}
