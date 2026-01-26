"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Coins, Bitcoin, Building, Store, Briefcase, Key, Shield, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { cn } from "@/lib/utils";
import { QuizProgress } from "./QuizProgress";
import { ProductTypeStep } from "./steps/ProductTypeStep";
import { LoadingAnalysis } from "@/components/audit/LoadingAnalysis";
// Flow steps will be imported when available
// import { GoldFlowSteps } from "./steps/GoldFlowSteps";
// import { CryptoFlowSteps } from "./steps/CryptoFlowSteps";
// import { RobsFlowSteps } from "./steps/RobsFlowSteps";
// import { SdiraFlowSteps } from "./steps/SdiraFlowSteps";
// import { QuizResults } from "./QuizResults";
import { getTrackedLink, AFFILIATE_LINKS } from "@/config/affiliates";

// ============================================
// TYPE DEFINITIONS
// ============================================

type QuizStep = 'intro' | 'product-type' | 'questions' | 'analyzing' | 'results';

interface QuizState {
  step: QuizStep;
  productType: string | null;
  currentQuestionIndex: number;
  answers: Record<string, string>;
}

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: string;
  question: string;
  helper?: string;
  options: QuestionOption[];
}

// ============================================
// PRODUCT-SPECIFIC QUESTIONS
// ============================================

const goldFlowQuestions: Question[] = [
  {
    id: "primary-concern",
    question: "What is your primary concern with your retirement savings?",
    options: [
      { value: "inflation", label: "Inflation eroding my purchasing power" },
      { value: "market-crash", label: "Stock market crash wiping out my savings" },
      { value: "diversification", label: "Portfolio is too concentrated in paper assets" },
      { value: "legacy", label: "Leaving something tangible to my heirs" },
    ],
  },
  {
    id: "metal-preference",
    question: "Which precious metals interest you most?",
    options: [
      { value: "gold", label: "Gold - The ultimate store of value" },
      { value: "silver", label: "Silver - More affordable, high growth potential" },
      { value: "both", label: "Both Gold and Silver - Maximum diversification" },
    ],
  },
  {
    id: "budget",
    question: "How much are you considering for your precious metals IRA?",
    helper: "This helps us match you with the right company",
    options: [
      { value: "under-25k", label: "Under $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k-100k", label: "$50,000 - $100,000" },
      { value: "100k-500k", label: "$100,000 - $500,000" },
      { value: "500k-plus", label: "Over $500,000" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    options: [
      { value: "immediately", label: "As soon as possible" },
      { value: "1-3-months", label: "Within 1-3 months" },
      { value: "3-6-months", label: "Within 3-6 months" },
      { value: "researching", label: "Just researching for now" },
    ],
  },
];

const cryptoFlowQuestions: Question[] = [
  {
    id: "crypto-experience",
    question: "What is your experience with cryptocurrency?",
    options: [
      { value: "beginner", label: "New to crypto - need guidance" },
      { value: "intermediate", label: "Some experience - understand the basics" },
      { value: "advanced", label: "Experienced - actively trade crypto" },
    ],
  },
  {
    id: "crypto-preference",
    question: "What type of crypto investments interest you?",
    options: [
      { value: "btc-only", label: "Bitcoin only - stick to the leader" },
      { value: "btc-eth", label: "Bitcoin and Ethereum - top 2 coins" },
      { value: "altcoins", label: "Altcoins included - diversified portfolio" },
    ],
  },
  {
    id: "budget",
    question: "How much are you considering for your Crypto IRA?",
    options: [
      { value: "under-25k", label: "Under $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k-100k", label: "$50,000 - $100,000" },
      { value: "100k-plus", label: "Over $100,000" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    options: [
      { value: "immediately", label: "As soon as possible" },
      { value: "1-3-months", label: "Within 1-3 months" },
      { value: "researching", label: "Just researching for now" },
    ],
  },
];

const robsFlowQuestions: Question[] = [
  {
    id: "business-type",
    question: "What type of business are you looking to fund?",
    options: [
      { value: "franchise", label: "Franchise - proven business model" },
      { value: "existing", label: "Buy an existing business" },
      { value: "startup", label: "Start a new business from scratch" },
    ],
  },
  {
    id: "funding-amount",
    question: "How much funding do you need for your business?",
    options: [
      { value: "under-50k", label: "Under $50,000" },
      { value: "50k-100k", label: "$50,000 - $100,000" },
      { value: "100k-250k", label: "$100,000 - $250,000" },
      { value: "250k-plus", label: "Over $250,000" },
    ],
  },
  {
    id: "timeline",
    question: "When do you want to launch your business?",
    options: [
      { value: "immediately", label: "Within 30 days" },
      { value: "1-3-months", label: "Within 1-3 months" },
      { value: "3-6-months", label: "Within 3-6 months" },
      { value: "researching", label: "Still researching options" },
    ],
  },
];

const sdiraFlowQuestions: Question[] = [
  {
    id: "investment-type",
    question: "What alternative investments interest you most?",
    options: [
      { value: "real-estate", label: "Real Estate - rental properties, REITs" },
      { value: "private-lending", label: "Private Lending - notes, mortgages" },
      { value: "private-equity", label: "Private Equity - startups, LLCs" },
      { value: "multiple", label: "Multiple types - maximum flexibility" },
    ],
  },
  {
    id: "experience",
    question: "What is your experience with alternative investments?",
    options: [
      { value: "beginner", label: "New - need guidance and support" },
      { value: "intermediate", label: "Some experience - know the basics" },
      { value: "advanced", label: "Experienced - ready to self-direct" },
    ],
  },
  {
    id: "budget",
    question: "How much are you looking to invest in alternatives?",
    options: [
      { value: "under-50k", label: "Under $50,000" },
      { value: "50k-100k", label: "$50,000 - $100,000" },
      { value: "100k-plus", label: "Over $100,000" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    options: [
      { value: "immediately", label: "As soon as possible" },
      { value: "1-3-months", label: "Within 1-3 months" },
      { value: "researching", label: "Just researching for now" },
    ],
  },
];

// ============================================
// INTRO SCREEN OPTIONS
// ============================================

const introOptions = [
  { icon: Coins, label: "Gold IRA", color: "text-amber-400" },
  { icon: Bitcoin, label: "Crypto IRA", color: "text-blue-400" },
  { icon: Building, label: "Real Estate", color: "text-teal-400" },
  { icon: Store, label: "ROBS 401k", color: "text-orange-400" },
  { icon: Briefcase, label: "Solo 401k", color: "text-purple-400" },
];

// ============================================
// ROUTING LOGIC
// ============================================

function getQuestionsForProductType(productType: string | null): Question[] {
  switch (productType) {
    case "precious-metals-ira":
    case "gold-ira":
    case "silver-ira":
      return goldFlowQuestions;
    case "crypto-ira":
      return cryptoFlowQuestions;
    case "robs-401k":
      return robsFlowQuestions;
    case "real-estate-ira":
    case "solo-401k":
    case "self-directed-ira":
    default:
      return sdiraFlowQuestions;
  }
}

interface RecommendedCompany {
  id: string;
  name: string;
  headline: string;
  description: string;
  affiliateKey: keyof typeof AFFILIATE_LINKS;
  minInvestment: string;
  benefits: string[];
}

function getRecommendedCompany(
  productType: string | null,
  answers: Record<string, string>
): RecommendedCompany {
  const budget = answers["budget"] || answers["funding-amount"] || "under-25k";

  // Gold/Silver IRA routing
  if (productType === "precious-metals-ira" || productType === "gold-ira" || productType === "silver-ira") {
    if (budget === "500k-plus" || budget === "100k-500k") {
      return {
        id: "augusta",
        name: "Augusta Precious Metals",
        headline: "Best for High-Net-Worth Investors",
        description: "Augusta offers a VIP experience with 1-on-1 education from Harvard-trained economists. The top choice for investors who want premium service and protection.",
        affiliateKey: "augusta",
        minInvestment: "$50,000",
        benefits: [
          "1-on-1 Education Web Conference",
          "Zero Fees for up to 10 Years",
          "Account Lifetime Support",
          "BBB A+ Rating",
        ],
      };
    }
    if (budget === "50k-100k") {
      return {
        id: "goldco",
        name: "Goldco",
        headline: "Best for Mid-Range Investors",
        description: "Goldco has helped thousands of Americans protect their retirement with precious metals. Excellent reputation and competitive pricing.",
        affiliateKey: "goldco",
        minInvestment: "$25,000",
        benefits: [
          "Free Gold IRA Guide",
          "Price Match Guarantee",
          "White Glove Service",
          "A+ BBB Rating",
        ],
      };
    }
    if (budget === "25k-50k") {
      return {
        id: "american-hartford",
        name: "American Hartford Gold",
        headline: "Best Value for Growing Portfolios",
        description: "American Hartford Gold offers competitive pricing and excellent customer service for investors looking to build their precious metals position.",
        affiliateKey: "americanHartford",
        minInvestment: "$10,000",
        benefits: [
          "No Fee for First 3 Years",
          "Free Silver on Qualifying Orders",
          "Price Protection Policy",
          "A+ BBB Rating",
        ],
      };
    }
    // Under $25k
    return {
      id: "noble-gold",
      name: "Noble Gold Investments",
      headline: "Best for New Investors",
      description: "Noble Gold has one of the lowest minimums in the industry, making it perfect for getting started with precious metals.",
      affiliateKey: "noble",
      minInvestment: "$2,000",
      benefits: [
        "Low $2,000 Minimum",
        "Simple 3-Step Process",
        "Excellent Customer Service",
        "Free Investment Guide",
      ],
    };
  }

  // Crypto IRA routing
  if (productType === "crypto-ira") {
    return {
      id: "itrustcapital",
      name: "iTrustCapital",
      headline: "Best Crypto IRA Platform",
      description: "iTrustCapital offers the lowest fees in the crypto IRA industry with 24/7 trading and no monthly fees.",
      affiliateKey: "itrustcapital",
      minInvestment: "$1,000",
      benefits: [
        "No Monthly Fees",
        "24/7 Trading",
        "30+ Cryptocurrencies",
        "Gold & Silver Also Available",
      ],
    };
  }

  // ROBS 401k routing
  if (productType === "robs-401k") {
    if (budget === "100k-250k" || budget === "250k-plus") {
      return {
        id: "guidant-financial",
        name: "Guidant Financial",
        headline: "America's Leading ROBS Provider",
        description: "Guidant has helped over 30,000 entrepreneurs fund their businesses using retirement savings. Full compliance and support.",
        affiliateKey: "guidantFinancial",
        minInvestment: "$50,000",
        benefits: [
          "IRS Compliant Structure",
          "Full Business Consulting",
          "Legal & Tax Support",
          "Over 30,000 Clients Served",
        ],
      };
    }
    return {
      id: "benetrends",
      name: "Benetrends",
      headline: "Trusted ROBS Provider",
      description: "Benetrends pioneered the ROBS structure and offers competitive pricing for business funding.",
      affiliateKey: "benetrends",
      minInvestment: "$25,000",
      benefits: [
        "ROBS Pioneers Since 1983",
        "Tax-Free Funding",
        "Ongoing Compliance Support",
        "Franchise Expertise",
      ],
    };
  }

  // Self-Directed IRA / Real Estate IRA / Solo 401k routing
  return {
    id: "rocket-dollar",
    name: "Rocket Dollar",
    headline: "Best Self-Directed Retirement Platform",
    description: "Rocket Dollar provides true self-direction with checkbook control. Invest in real estate, startups, crypto, and more.",
    affiliateKey: "rocketDollar",
    minInvestment: "$0",
    benefits: [
      "Checkbook Control",
      "Invest in Anything IRS Allows",
      "Flat Monthly Fee",
      "Real Estate Ready",
    ],
  };
}

// ============================================
// ANIMATION VARIANTS
// ============================================

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const, // easeInOut cubic bezier
};

// ============================================
// MAIN COMPONENT
// ============================================

export function UniversalQuiz() {
  const [state, setState] = useState<QuizState>({
    step: 'intro',
    productType: null,
    currentQuestionIndex: 0,
    answers: {},
  });

  // UTM parameter tracking
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  // Extract UTM parameters on mount
  useEffect(() => {
    const params: Record<string, string> = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        params[key] = value;
      }
    });

    // Also capture referrer if available
    if (typeof document !== 'undefined' && document.referrer) {
      params['referrer'] = document.referrer;
    }

    if (Object.keys(params).length > 0) {
      setUtmParams(params);
    }
  }, [searchParams]);

  const questions = getQuestionsForProductType(state.productType);
  const totalQuestionSteps = questions.length;

  // Calculate progress
  const getProgress = () => {
    switch (state.step) {
      case 'intro':
        return { current: 0, total: totalQuestionSteps + 2 };
      case 'product-type':
        return { current: 1, total: totalQuestionSteps + 2 };
      case 'questions':
        return { current: state.currentQuestionIndex + 2, total: totalQuestionSteps + 2 };
      case 'analyzing':
      case 'results':
        return { current: totalQuestionSteps + 2, total: totalQuestionSteps + 2 };
      default:
        return { current: 0, total: 1 };
    }
  };

  const progress = getProgress();

  // Handlers
  const handleStart = useCallback(() => {
    setState(prev => ({ ...prev, step: 'product-type' }));
  }, []);

  const handleProductTypeSelect = useCallback((productType: string) => {
    setState(prev => ({
      ...prev,
      step: 'questions',
      productType,
      currentQuestionIndex: 0,
      answers: {},
    }));
  }, []);

  const handleQuestionAnswer = useCallback((questionId: string, value: string) => {
    setState(prev => {
      const newAnswers = { ...prev.answers, [questionId]: value };
      const questionsForType = getQuestionsForProductType(prev.productType);
      const isLastQuestion = prev.currentQuestionIndex >= questionsForType.length - 1;

      if (isLastQuestion) {
        // Move to analyzing step
        return {
          ...prev,
          answers: newAnswers,
          step: 'analyzing',
        };
      }

      // Move to next question
      return {
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, []);

  const handleAnalysisComplete = useCallback(async () => {
    // Save the lead when analysis completes
    try {
      const recommendedCompany = getRecommendedCompany(state.productType, state.answers);
      const budget = state.answers["budget"] || state.answers["funding-amount"] || "unknown";

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: state.productType,
          budget: budget,
          answers: state.answers,
          recommendedCompany: recommendedCompany.name,
          utmParams: Object.keys(utmParams).length > 0 ? utmParams : undefined,
        }),
      });
    } catch (error) {
      // Don't block quiz completion if lead save fails
      console.error('Failed to save lead:', error);
    }

    setState(prev => ({ ...prev, step: 'results' }));
  }, [state.productType, state.answers, utmParams]);

  const handleBack = useCallback(() => {
    setState(prev => {
      if (prev.step === 'product-type') {
        return { ...prev, step: 'intro' };
      }
      if (prev.step === 'questions') {
        if (prev.currentQuestionIndex === 0) {
          return { ...prev, step: 'product-type', productType: null };
        }
        return { ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 };
      }
      return prev;
    });
  }, []);

  const handleRestart = useCallback(() => {
    setState({
      step: 'intro',
      productType: null,
      currentQuestionIndex: 0,
      answers: {},
    });
  }, []);

  // Get current question
  const currentQuestion = questions[state.currentQuestionIndex];

  // Get recommended company for results
  const recommendedCompany = getRecommendedCompany(state.productType, state.answers);

  // ============================================
  // RENDER FUNCTIONS
  // ============================================

  const renderIntro = () => (
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12
                    shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
      {/* FloatingOrbs decoration */}
      <FloatingOrbs variant="section" />

      <div className="relative text-center space-y-8 py-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-4
                     border border-amber-400/20 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <Shield className="h-4 w-4" />
          Free 60-Second Assessment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight
                     [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]"
        >
          Find Your Perfect<br />
          <span className="text-amber-400 [text-shadow:_0_2px_30px_rgba(212,175,55,0.3)]">Retirement Account</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed"
        >
          Answer 4 quick questions to get a personalized recommendation
        </motion.p>

        {/* Options Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 max-w-md mx-auto"
        >
          {introOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10
                           hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <IconComponent className={cn("h-4 w-4", option.color)} />
                <span className="text-sm text-slate-300">{option.label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="xl"
            variant="gold"
            onClick={handleStart}
            className="w-full sm:w-auto min-w-[280px] text-lg px-12 py-6
                       shadow-[0_8px_30px_rgba(212,175,55,0.3),0_0_60px_rgba(212,175,55,0.15)]
                       hover:shadow-[0_12px_40px_rgba(212,175,55,0.4),0_0_80px_rgba(212,175,55,0.2)]
                       transition-shadow duration-300"
          >
            Start Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-slate-400 mt-4">
            No email required. Get instant results.
          </p>
        </motion.div>
      </div>
    </div>
  );

  const renderQuestions = () => {
    if (!currentQuestion) return null;

    return (
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12
                      shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
        {/* FloatingOrbs decoration */}
        <FloatingOrbs variant="minimal" />

        <div className="relative max-w-2xl mx-auto py-4">
          <motion.h2
            key={`question-title-${currentQuestion.id}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center
                       [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {currentQuestion.question}
          </motion.h2>

          {currentQuestion.helper && (
            <p className="text-center text-slate-400 mb-8 text-sm">
              {currentQuestion.helper}
            </p>
          )}

          <motion.div
            key={`question-options-${currentQuestion.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 gap-4 mt-8"
          >
            {currentQuestion.options.map((option, index) => {
              const isSelected = state.answers[currentQuestion.id] === option.value;
              return (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleQuestionAnswer(currentQuestion.id, option.value)}
                  className={cn(
                    "group relative flex items-center justify-between p-6 text-left rounded-xl",
                    "bg-white/5 backdrop-blur-xl border border-white/10",
                    "hover:bg-white/[0.1] hover:-translate-y-2 hover:scale-[1.02]",
                    "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.15)]",
                    "hover:border-amber-400/40 transition-all duration-300 cursor-pointer",
                    isSelected && "bg-amber-500/10 border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                  )}
                >
                  <span className={cn(
                    "text-lg font-medium text-white group-hover:text-amber-400 transition-colors",
                    isSelected && "text-amber-400"
                  )}>
                    {option.label}
                  </span>
                  <div className={cn(
                    "h-6 w-6 rounded-full border-2 border-white/20 group-hover:border-amber-500",
                    "flex items-center justify-center transition-all duration-300",
                    isSelected && "border-amber-500 bg-amber-500/20"
                  )}>
                    <div className={cn(
                      "h-3 w-3 rounded-full bg-amber-500 transition-all duration-300",
                      isSelected ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                    )} />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const affiliateLink = getTrackedLink(
      AFFILIATE_LINKS[recommendedCompany.affiliateKey],
      "universal-quiz-result",
      recommendedCompany.id
    );

    return (
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12
                      shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
        {/* FloatingOrbs decoration */}
        <FloatingOrbs variant="section" />

        {/* Gold celebration glow pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 via-transparent to-amber-400/10 pointer-events-none"
        />

        {/* Sparkle particles animation */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: `${20 + (i * 15)}%`,
                y: "100%"
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [100, -20],
                x: `${20 + (i * 15) + Math.sin(i) * 10}%`
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut"
              }}
              className="absolute"
            >
              <Sparkles className="h-4 w-4 text-amber-400/60" />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-6
                         border border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              <Shield className="h-4 w-4" />
              Your Personalized Match
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4
                           [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]">
              We Recommend: <span className="text-amber-400 [text-shadow:_0_2px_30px_rgba(212,175,55,0.3)]">{recommendedCompany.name}</span>
            </h2>
            <p className="text-slate-400 text-lg">{recommendedCompany.headline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 relative overflow-hidden
                       shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            {/* Top accent with glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400
                            shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              {recommendedCompany.description}
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Why {recommendedCompany.name}?
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {recommendedCompany.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0
                                    shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="gold"
                asChild
                className="flex-1 shadow-[0_8px_30px_rgba(212,175,55,0.3),0_0_60px_rgba(212,175,55,0.15)]
                           hover:shadow-[0_12px_40px_rgba(212,175,55,0.4),0_0_80px_rgba(212,175,55,0.2)]
                           transition-shadow duration-300"
              >
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  Get Free Investment Kit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleRestart}
                className="text-slate-300 border-white/20 hover:bg-white/10
                           hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
                           transition-all duration-300"
              >
                Start Over
              </Button>
            </div>

            <p className="text-center text-xs text-slate-500 mt-4">
              Minimum Investment: {recommendedCompany.minInvestment}
            </p>
          </motion.div>
        </div>
      </div>
    );
  };

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <Container className="max-w-4xl min-h-[600px] flex flex-col justify-center">
      {/* Progress Bar - Show during questions */}
      {(state.step === 'product-type' || state.step === 'questions') && (
        <div className="mb-8">
          <QuizProgress
            currentStep={progress.current}
            totalSteps={progress.total}
          />
        </div>
      )}

      {/* Back Button - Premium styled */}
      {(state.step === 'product-type' || (state.step === 'questions')) && (
        <button
          onClick={handleBack}
          className="self-start flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-4
                     px-3 py-1.5 rounded-lg bg-white/5 border border-white/10
                     hover:bg-white/10 hover:border-white/20
                     hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]
                     transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      )}

      {/* Content Area with Animations */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {state.step === 'intro' && (
            <motion.div
              key="intro"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              {renderIntro()}
            </motion.div>
          )}

          {state.step === 'product-type' && (
            <motion.div
              key="product-type"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ProductTypeStep onSelect={handleProductTypeSelect} />
            </motion.div>
          )}

          {state.step === 'questions' && (
            <motion.div
              key={`questions-${state.currentQuestionIndex}`}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              {renderQuestions()}
            </motion.div>
          )}

          {state.step === 'analyzing' && (
            <motion.div
              key="analyzing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <LoadingAnalysis onComplete={handleAnalysisComplete} />
            </motion.div>
          )}

          {state.step === 'results' && (
            <motion.div
              key="results"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              {renderResults()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
