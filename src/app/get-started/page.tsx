"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, Phone, Mail, User, ArrowRight, CheckCircle2, Loader2, Star } from "lucide-react";

type Step = 1 | 2 | 3 | "success";

type VariantConfig = {
    headline: string;
    subtext: string;
    benefits: string[];
};

const variants: Record<string, VariantConfig> = {
    fees: {
        headline: "Get Your Free Fee Breakdown",
        subtext: "See exactly what Gold IRAs cost — no hidden fees",
        benefits: [
            "Full fee transparency — no surprises",
            "Compare costs across top providers",
            "Understand setup, storage & annual fees",
        ],
    },
    compare: {
        headline: "Get Your Comparison Guide",
        subtext: "See how top Gold IRA companies stack up",
        benefits: [
            "Side-by-side company comparisons",
            "Ratings, fees & minimums explained",
            "Find the best fit for your situation",
        ],
    },
    silver: {
        headline: "Get Your Silver IRA Kit",
        subtext: "Discover how to protect wealth with silver",
        benefits: [
            "Learn why silver outperforms in downturns",
            "IRS-approved silver options explained",
            "Diversify beyond just gold",
        ],
    },
    "silver-fees": {
        headline: "Get Your Silver IRA Fee Guide",
        subtext: "See what Silver IRAs really cost",
        benefits: [
            "Silver-specific fee breakdown",
            "Storage cost comparisons",
            "No hidden charges explained",
        ],
    },
    "401k": {
        headline: "Start Your 401k Rollover",
        subtext: "Move your 401k to gold — tax-free",
        benefits: [
            "Tax-free rollover process explained",
            "Keep your retirement tax-advantaged",
            "Step-by-step guidance provided",
        ],
    },
    seniors: {
        headline: "Get Your Retirement Protection Guide",
        subtext: "Secure your retirement with precious metals",
        benefits: [
            "Protect savings from market volatility",
            "Inflation-proof your retirement",
            "No minimum age requirements",
        ],
    },
    protect: {
        headline: "Protect Your Retirement Savings",
        subtext: "See how gold shields your wealth",
        benefits: [
            "Hedge against economic uncertainty",
            "Preserve purchasing power",
            "Physical assets you can trust",
        ],
    },
    default: {
        headline: "Get Your Free Consultation",
        subtext: "Speak with a Gold IRA specialist",
        benefits: [
            "No-obligation consultation",
            "Expert answers to your questions",
            "Personalized retirement guidance",
        ],
    },
};

function GetStartedContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || "default";
    const variant = variants[type] || variants.default;

    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleNext = () => {
        if (step === 1 && formData.firstName.trim()) {
            setStep(2);
        } else if (step === 2 && formData.email.includes("@")) {
            setStep(3);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (step === 3) {
                handleSubmit();
            } else {
                handleNext();
            }
        }
    };

    const handleSubmit = async () => {
        if (!formData.phone.trim()) return;

        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("/api/submit-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: "", // Not collecting separately
                    email: formData.email,
                    phone: formData.phone,
                    source: `get-started-${type}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStep("success");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Success state
    if (step === "success") {
        return (
            <div className="min-h-screen bg-[#000080] flex items-center justify-center p-4">
                <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">
                        You&apos;re All Set, {formData.firstName}!
                    </h1>
                    <p className="text-lg text-slate-600 mb-6">
                        We&apos;ve locked in a spot for you today. <strong>This will not be a sales call</strong> — a specialist from Augusta will reach out to answer your questions and see if a Gold IRA is right for you.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                        <p className="text-amber-800 font-semibold text-lg">
                            Expect a call within 24 hours
                        </p>
                        <p className="text-amber-700 text-sm mt-2">
                            Have questions ready — the team is happy to answer all of them. No pressure, just answers.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                        <ShieldCheck className="h-4 w-4" />
                        Your information is secure and will never be shared
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#000080] flex flex-col">
            {/* Header */}
            <header className="py-4 px-4">
                <div className="max-w-lg mx-auto flex items-center justify-between">
                    <span className="text-white text-lg font-bold">Rich Dad Retirement</span>
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="hidden sm:inline">Secure</span>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-lg">
                    {/* Progress bar */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-white/60 text-sm">Step {step} of 3</span>
                            <span className="text-white/60 text-sm">30 seconds</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-amber-400 transition-all duration-500 ease-out"
                                style={{ width: `${(step as number / 3) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Form card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                        {/* Step 1: Name */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                                        {variant.headline}
                                    </h1>
                                    <p className="text-slate-500">
                                        {variant.subtext}
                                    </p>
                                </div>

                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                                    <input
                                        type="text"
                                        autoFocus
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        onKeyDown={handleKeyDown}
                                        className="w-full pl-14 pr-4 py-4 text-xl border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#000080] focus:border-[#000080] outline-none transition-all"
                                        placeholder="Your first name"
                                    />
                                </div>

                                <button
                                    onClick={handleNext}
                                    disabled={!formData.firstName.trim()}
                                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Continue
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        )}

                        {/* Step 2: Email */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                                        Hi {formData.firstName}!
                                    </h1>
                                    <p className="text-slate-500">
                                        Where should we send your Gold IRA info?
                                    </p>
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                                    <input
                                        type="email"
                                        autoFocus
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        onKeyDown={handleKeyDown}
                                        className="w-full pl-14 pr-4 py-4 text-xl border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#000080] focus:border-[#000080] outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <button
                                    onClick={handleNext}
                                    disabled={!formData.email.includes("@")}
                                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Continue
                                    <ArrowRight className="h-5 w-5" />
                                </button>

                                <button
                                    onClick={() => setStep(1)}
                                    className="w-full text-slate-400 hover:text-slate-600 text-sm py-2"
                                >
                                    Go back
                                </button>
                            </div>
                        )}

                        {/* Step 3: Phone */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                                        Last step, {formData.firstName}!
                                    </h1>
                                    <p className="text-slate-500">
                                        What&apos;s the best number to reach you?
                                    </p>
                                </div>

                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                                    <input
                                        type="tel"
                                        autoFocus
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        onKeyDown={handleKeyDown}
                                        className="w-full pl-14 pr-4 py-4 text-xl border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#000080] focus:border-[#000080] outline-none transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}

                                <button
                                    onClick={handleSubmit}
                                    disabled={!formData.phone.trim() || isSubmitting}
                                    className="w-full bg-[#B22234] hover:bg-[#8b1c2a] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Connecting you...
                                        </>
                                    ) : (
                                        <>
                                            Get My Free Consultation
                                            <ArrowRight className="h-5 w-5" />
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full text-slate-400 hover:text-slate-600 text-sm py-2"
                                >
                                    Go back
                                </button>

                                <p className="text-center text-xs text-slate-400">
                                    By clicking above, you agree to be contacted by Augusta Precious Metals.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Trust signals - variant-specific benefits */}
                    <div className="mt-8">
                        <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400" />
                            ))}
                        </div>
                        <div className="space-y-2">
                            {variant.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-white/80 text-sm justify-center"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom trust badges */}
                    <div className="mt-8 flex items-center justify-center gap-6 text-white/50 text-xs">
                        <span className="flex items-center gap-1">
                            <ShieldCheck className="h-4 w-4" />
                            256-bit SSL
                        </span>
                        <span>•</span>
                        <span>Zero BBB Complaints</span>
                        <span>•</span>
                        <span>A+ Rating</span>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-4 text-center text-white/30 text-xs">
                <p>&copy; 2026 Rich Dad Retirement. Not financial advice.</p>
            </footer>
        </div>
    );
}

function LoadingFallback() {
    return (
        <div className="min-h-screen bg-[#000080] flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
    );
}

export default function GetStartedPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <GetStartedContent />
        </Suspense>
    );
}
