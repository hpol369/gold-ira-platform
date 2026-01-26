"use client";

import { motion } from "framer-motion";
import { Coins, Bitcoin, Building, Store, Briefcase, Key, type LucideIcon } from "lucide-react";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

interface ProductTypeStepProps {
  onSelect: (productType: string) => void;
}

interface ProductOption {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

const productOptions: ProductOption[] = [
  {
    id: "precious-metals-ira",
    icon: Coins,
    label: "Precious Metals IRA",
    description: "Protect savings with physical gold & silver",
  },
  {
    id: "crypto-ira",
    icon: Bitcoin,
    label: "Crypto IRA",
    description: "Tax-advantaged Bitcoin & crypto investing",
  },
  {
    id: "real-estate-ira",
    icon: Building,
    label: "Real Estate IRA",
    description: "Invest in property with retirement funds",
  },
  {
    id: "robs-401k",
    icon: Store,
    label: "ROBS 401k",
    description: "Use retirement funds to start a business",
  },
  {
    id: "solo-401k",
    icon: Briefcase,
    label: "Solo 401k",
    description: "Self-employed retirement with high limits",
  },
  {
    id: "self-directed-ira",
    icon: Key,
    label: "Self-Directed IRA",
    description: "Full control over your investments",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1] as const, // easeOut cubic bezier
    },
  },
};

export function ProductTypeStep({ onSelect }: ProductTypeStepProps) {
  return (
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12
                    shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
      {/* FloatingOrbs decoration */}
      <FloatingOrbs variant="section" />

      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3
                         [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]">
            What type of retirement account interests you?
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Select the investment vehicle that best fits your goals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {productOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <motion.button
                key={option.id}
                variants={cardVariants}
                onClick={() => onSelect(option.id)}
                className="group relative flex items-start gap-4 p-6 text-left rounded-xl
                           bg-white/5 backdrop-blur-xl border border-white/10
                           hover:bg-white/[0.1] hover:-translate-y-2 hover:scale-[1.02]
                           hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(212,175,55,0.15)]
                           hover:border-amber-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500/10
                                flex items-center justify-center
                                group-hover:bg-amber-500/20 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
                                transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-amber-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-400
                                 transition-colors duration-300 mb-1">
                    {option.label}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0
                                group-hover:opacity-100 transition-all duration-300">
                  <div className="w-6 h-6 rounded-full border-2 border-amber-500
                                  flex items-center justify-center
                                  shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
