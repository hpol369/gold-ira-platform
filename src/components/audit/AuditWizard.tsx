"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LoadingAnalysis } from "./LoadingAnalysis";
import { AuditResults } from "./AuditResults";

type Step = "intro" | "fear" | "amount" | "timeline" | "analyzing" | "results";

interface AuditState {
    fear: string; // inflation, crash, cbdc
    amount: string; // 50k, 100k, 500k
    timeline: string; // 5y, 10y, 20y
}

export function AuditWizard() {
    const [step, setStep] = useState<Step>("intro");
    const [data, setData] = useState<AuditState>({ fear: "", amount: "", timeline: "" });

    // Calculated Risk Score based on inputs
    const calculateRisk = () => {
        let score = 50; // Base risk

        // Fear Multiplier
        if (data.fear === 'inflation') score += 20; // High urgency
        if (data.fear === 'crash') score += 15;

        // Amount Multiplier (Higher wealth = Higher nominal risk)
        if (data.amount === '500k+') score += 10;
        if (data.amount === '100k-500k') score += 5;

        // Timeline (Short timeline = Less recovery time = Higher Risk)
        if (data.timeline === '0-5y') score += 15;

        return Math.min(score, 95); // Cap at 95
    };

    const riskScore = calculateRisk();
    const riskLabel = riskScore > 80 ? "Critical Exposure" : riskScore > 60 ? "High Vulnerability" : "Moderate Risk";
    const projectedLoss = data.amount === '500k+' ? "$140,000+" : data.amount === '100k-500k' ? "$45,000+" : "$12,000";

    const handleNext = (key: keyof AuditState, value: string) => {
        setData(prev => ({ ...prev, [key]: value }));

        if (step === "intro") setStep("fear");
        else if (step === "fear") setStep("amount");
        else if (step === "amount") setStep("timeline");
        else if (step === "timeline") setStep("analyzing");
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {step === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="text-center py-20"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-mono text-sm mb-6 border border-amber-500/20">
                            FREE PORTFOLIO DIAGNOSTIC
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Is Your Retrieval <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Sovereign or Exposed?</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Inflation has eroded 25% of the dollar's value since 2020.
                            Take this 60-second audit to calculate your <strong>Inflation Exposure Score</strong> and generate a custom protection blueprint.
                        </p>
                        <Button size="xl" variant="gold" onClick={() => setStep("fear")} className="px-12 py-8 text-xl shadow-[0_0_40px_-5px_rgba(245,158,11,0.3)]">
                            Start Brief Audit <ArrowRight className="ml-3 w-6 h-6" />
                        </Button>
                        <p className="mt-6 text-sm text-slate-500">
                            Private • No SSN Required • Instant Analysis
                        </p>
                    </motion.div>
                )}

                {step === "fear" && (
                    <WizardStep
                        key="fear"
                        question="What is your primary financial concern right now?"
                        options={[
                            { label: "Inflation / Cost of Living", value: "inflation", icon: "💸" },
                            { label: "Stock Market Crash", value: "crash", icon: "📉" },
                            { label: "Government Control / CBDCs", value: "cbdc", icon: "👁️" },
                        ]}
                        onSelect={(val: string) => handleNext("fear", val)}
                        onBack={() => setStep("intro")}
                        stepIdx={1}
                    />
                )}

                {step === "amount" && (
                    <WizardStep
                        key="amount"
                        question="What is the approximate value of your retirement savings?"
                        helper="Include 401(k), IRA, TSP, and other tax-advantaged accounts."
                        options={[
                            { label: "$50,000 - $100,000", value: "50k-100k", icon: "🥉" },
                            { label: "$100,000 - $500,000", value: "100k-500k", icon: "🥈" },
                            { label: "$500,000+", value: "500k+", icon: "🥇" },
                        ]}
                        onSelect={(val: string) => handleNext("amount", val)}
                        onBack={() => setStep("fear")}
                        stepIdx={2}
                    />
                )}

                {step === "timeline" && (
                    <WizardStep
                        key="timeline"
                        question="How soon are you planning to retire (or access funds)?"
                        options={[
                            { label: "0 - 5 Years (Urgent)", value: "0-5y", icon: "⏳" },
                            { label: "5 - 10 Years", value: "5-10y", icon: "📅" },
                            { label: "10+ Years", value: "10y+", icon: "🌱" },
                        ]}
                        onSelect={(val: string) => handleNext("timeline", val)}
                        onBack={() => setStep("amount")}
                        stepIdx={3}
                    />
                )}

                {step === "analyzing" && (
                    <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <LoadingAnalysis onComplete={() => setStep("results")} />
                    </motion.div>
                )}

                {step === "results" && (
                    <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <AuditResults
                            score={riskScore}
                            riskLabel={riskLabel}
                            projectedLoss={projectedLoss}
                            primaryFear={data.fear === 'cbdc' ? "Government Overreach" : data.fear === 'crash' ? "Market Volatility" : "Hyper-Inflation"}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Sub-component for Question Steps
function WizardStep({ question, helper, options, onSelect, onBack, stepIdx }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="max-w-2xl mx-auto py-12"
        >
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8 justify-center">
                {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-1.5 w-12 rounded-full transition-colors ${i <= stepIdx ? 'bg-amber-500' : 'bg-slate-700'}`} />
                ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-4">
                {question}
            </h2>
            {helper && <p className="text-slate-400 text-center mb-8">{helper}</p>}

            <div className="space-y-4">
                {options.map((opt: any) => (
                    <button
                        key={opt.value}
                        onClick={() => onSelect(opt.value)}
                        className="w-full text-left p-6 bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-amber-500 rounded-xl transition-all group flex items-center justify-between"
                    >
                        <span className="text-xl font-medium text-slate-200 group-hover:text-white flex items-center gap-4">
                            <span className="text-2xl">{opt.icon}</span>
                            {opt.label}
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-amber-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </button>
                ))}
            </div>

            <button onClick={onBack} className="mt-8 flex items-center gap-2 text-slate-500 hover:text-white transition-colors mx-auto">
                <ArrowLeft className="w-4 h-4" /> Back
            </button>
        </motion.div>
    );
}
