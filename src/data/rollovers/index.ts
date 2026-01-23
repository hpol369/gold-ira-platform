// src/data/rollovers/index.ts
// Phase 2: Rollover provider and account type data

export interface RolloverProvider {
  id: string;
  name: string;
  slug: string;
  type: "brokerage" | "employer" | "government";

  // Account types they offer
  accountTypes: string[];

  // Rollover details
  rolloverProcess: string;
  typicalTimeline: string;
  directRollover: boolean;
  inServiceWithdrawal: boolean;
  inServiceAge?: number;

  // Contact/process info
  phone?: string;
  rolloverDepartment?: string;
  onlineRollover: boolean;

  // SEO
  searchVolume?: number;
  keywordDifficulty?: number;

  // Content
  description: string;
  rolloverSteps: string[];
  tips: string[];
  warnings: string[];
}

export interface AccountType {
  id: string;
  name: string;
  slug: string;
  fullName: string;

  // Details
  description: string;
  taxTreatment: "pre-tax" | "post-tax" | "both";
  contributionLimit2026: number;
  catchUpContribution?: number;
  catchUpAge: number;

  // Rollover rules
  canRolloverToGoldIRA: boolean;
  rolloverRestrictions: string[];
  requiredMinDistributionAge: number;

  // Target audience
  eligibility: string;
  typicalHolder: string;

  // SEO
  searchVolume?: number;
}

// ============================================
// ROLLOVER PROVIDERS
// ============================================

export const providers: Record<string, RolloverProvider> = {
  "fidelity": {
    id: "fidelity",
    name: "Fidelity",
    slug: "fidelity",
    type: "brokerage",
    accountTypes: ["401(k)", "Traditional IRA", "Roth IRA", "SEP IRA", "SIMPLE IRA", "403(b)"],
    rolloverProcess: "Fidelity offers both online and phone-based rollover initiation. For outgoing rollovers to a Gold IRA, you'll need to request a direct rollover check made payable to your new custodian.",
    typicalTimeline: "5-7 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-343-3548",
    rolloverDepartment: "Retirement Services",
    onlineRollover: true,
    searchVolume: 2400,
    keywordDifficulty: 15,
    description: "Fidelity Investments is one of the largest retirement plan administrators in the United States, managing over $11 trillion in assets. Rolling over a Fidelity 401(k) or IRA to a Gold IRA is a straightforward process.",
    rolloverSteps: [
      "Open a Gold IRA account with your chosen custodian",
      "Request a direct rollover from Fidelity (call 800-343-3548)",
      "Provide your new Gold IRA account details to Fidelity",
      "Fidelity sends funds directly to your Gold IRA custodian",
      "Purchase precious metals once funds arrive"
    ],
    tips: [
      "Always choose direct rollover to avoid the 60-day deadline",
      "Fidelity's online portal can initiate some rollovers electronically",
      "Keep copies of all rollover paperwork for tax records",
      "Fidelity may charge a $50 account closure fee"
    ],
    warnings: [
      "Indirect rollovers trigger 20% mandatory withholding",
      "In-service withdrawals may not be available before age 59½",
      "Some employer plans have restrictions on rollover frequency"
    ]
  },

  "vanguard": {
    id: "vanguard",
    name: "Vanguard",
    slug: "vanguard",
    type: "brokerage",
    accountTypes: ["401(k)", "Traditional IRA", "Roth IRA", "SEP IRA", "SIMPLE IRA"],
    rolloverProcess: "Vanguard requires written authorization for outgoing rollovers. You can initiate online but will need to print, sign, and mail forms for Gold IRA transfers.",
    typicalTimeline: "7-10 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-523-1188",
    rolloverDepartment: "Retirement Plan Services",
    onlineRollover: false,
    searchVolume: 1900,
    keywordDifficulty: 12,
    description: "Vanguard is known for low-cost index funds and manages retirement accounts for millions of Americans. Their rollover process requires some paperwork but is well-documented.",
    rolloverSteps: [
      "Set up your Gold IRA account first",
      "Log into Vanguard and download rollover forms",
      "Complete the direct rollover request form",
      "Include your Gold IRA custodian's information",
      "Mail signed forms to Vanguard",
      "Vanguard processes and sends funds within 7-10 days"
    ],
    tips: [
      "Download forms from Vanguard's website to save time",
      "Your Gold IRA company can often help with Vanguard paperwork",
      "Vanguard's phone reps are helpful for rollover questions",
      "Consider timing your rollover to avoid market volatility"
    ],
    warnings: [
      "Vanguard doesn't support electronic transfers to Gold IRAs",
      "Processing can take longer during peak tax season",
      "Ensure your signature matches Vanguard's records exactly"
    ]
  },

  "charles-schwab": {
    id: "schwab",
    name: "Charles Schwab",
    slug: "charles-schwab",
    type: "brokerage",
    accountTypes: ["401(k)", "Traditional IRA", "Roth IRA", "SEP IRA", "SIMPLE IRA", "Rollover IRA"],
    rolloverProcess: "Schwab offers a streamlined rollover process with online initiation. They can send funds via check or wire transfer to your Gold IRA custodian.",
    typicalTimeline: "3-5 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-435-4000",
    rolloverDepartment: "Retirement Services",
    onlineRollover: true,
    searchVolume: 1600,
    keywordDifficulty: 14,
    description: "Charles Schwab merged with TD Ameritrade and now serves millions of retirement account holders. They offer one of the faster rollover processes in the industry.",
    rolloverSteps: [
      "Open your Gold IRA with a qualified custodian",
      "Call Schwab at 800-435-4000 or log in online",
      "Request a direct rollover to your Gold IRA",
      "Provide custodian name, address, and account number",
      "Choose check or wire transfer (wire is faster)",
      "Funds typically arrive within 3-5 business days"
    ],
    tips: [
      "Wire transfers cost $25 but arrive in 1-2 days",
      "Schwab's mobile app can track rollover status",
      "Request a Medallion Signature Guarantee if required",
      "Schwab offers free notary services at branches"
    ],
    warnings: [
      "TD Ameritrade accounts are transitioning to Schwab",
      "Some legacy TD Ameritrade 401(k)s have different procedures",
      "Verify your Gold IRA custodian accepts wire transfers"
    ]
  },

  "tiaa": {
    id: "tiaa",
    name: "TIAA",
    slug: "tiaa",
    type: "employer",
    accountTypes: ["403(b)", "401(k)", "457(b)", "Traditional IRA", "Roth IRA"],
    rolloverProcess: "TIAA serves educators and non-profit employees. Rollover rules vary by employer plan, and some TIAA accounts have surrender charges or restrictions.",
    typicalTimeline: "10-15 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-842-2252",
    rolloverDepartment: "Participant Services",
    onlineRollover: false,
    searchVolume: 1200,
    keywordDifficulty: 8,
    description: "TIAA (Teachers Insurance and Annuity Association) primarily serves educators, healthcare workers, and non-profit employees. Their rollover process can be more complex due to annuity products.",
    rolloverSteps: [
      "Review your TIAA account for any surrender charges",
      "Set up your Gold IRA account",
      "Call TIAA at 800-842-2252 to discuss rollover options",
      "Request the Transfer/Rollover form",
      "Complete and submit with Gold IRA custodian details",
      "TIAA processes the rollover (may take 10-15 days)"
    ],
    tips: [
      "Check for surrender charges on annuity contracts",
      "Some TIAA plans have 10-year surrender periods",
      "403(b) rollovers may have different rules than 401(k)s",
      "Your HR department can clarify plan-specific restrictions"
    ],
    warnings: [
      "TIAA Traditional annuities may have withdrawal restrictions",
      "Some employer plans don't allow in-service rollovers",
      "Surrender charges can be 5-10% in early years"
    ]
  },

  "tsp": {
    id: "tsp",
    name: "Thrift Savings Plan (TSP)",
    slug: "tsp",
    type: "government",
    accountTypes: ["TSP Traditional", "TSP Roth"],
    rolloverProcess: "The TSP serves federal employees and military members. Rollovers require Form TSP-70 (for separated employees) or TSP-75 (for age-based withdrawals).",
    typicalTimeline: "7-10 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "877-968-3778",
    rolloverDepartment: "ThriftLine",
    onlineRollover: true,
    searchVolume: 2100,
    keywordDifficulty: 10,
    description: "The Thrift Savings Plan is the retirement savings plan for federal employees and members of the uniformed services. It offers some of the lowest fees in the industry but limited investment options.",
    rolloverSteps: [
      "Verify eligibility (separated or age 59½+)",
      "Open a Gold IRA account",
      "Log into tsp.gov and download Form TSP-70 or TSP-75",
      "Complete the form with Gold IRA custodian details",
      "Submit online or mail to TSP",
      "TSP sends direct rollover check to your custodian"
    ],
    tips: [
      "TSP has extremely low fees - consider partial rollover",
      "You can roll over TSP while still employed after age 59½",
      "The TSP website allows online rollover initiation",
      "Military members have additional rollover options"
    ],
    warnings: [
      "Cannot roll over TSP while employed (under 59½)",
      "TSP Roth must go to Roth Gold IRA to stay tax-free",
      "Once funds leave TSP, they cannot return"
    ]
  },

  "principal": {
    id: "principal",
    name: "Principal Financial",
    slug: "principal",
    type: "employer",
    accountTypes: ["401(k)", "403(b)", "457(b)", "Pension"],
    rolloverProcess: "Principal Financial serves many employer-sponsored plans. Rollover procedures depend on your specific employer's plan document.",
    typicalTimeline: "7-14 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-547-7754",
    rolloverDepartment: "Retirement Services",
    onlineRollover: true,
    searchVolume: 880,
    keywordDifficulty: 6,
    description: "Principal Financial Group administers retirement plans for thousands of employers. Their rollover process varies by plan but generally follows standard procedures.",
    rolloverSteps: [
      "Log into Principal.com to review your plan's rollover rules",
      "Open a Gold IRA account",
      "Call Principal at 800-547-7754 for rollover instructions",
      "Complete the distribution/rollover form",
      "Specify direct rollover to avoid tax withholding",
      "Principal sends funds to your Gold IRA custodian"
    ],
    tips: [
      "Each employer plan has unique rollover rules",
      "Principal's online portal shows available options",
      "Your HR department can provide plan-specific details",
      "Consider rolling over when changing jobs"
    ],
    warnings: [
      "Some plans restrict rollover amounts or frequency",
      "In-service withdrawals may be limited by employer",
      "Check for any vesting requirements on employer match"
    ]
  },

  "empower": {
    id: "empower",
    name: "Empower Retirement",
    slug: "empower",
    type: "employer",
    accountTypes: ["401(k)", "403(b)", "457(b)", "Pension"],
    rolloverProcess: "Empower (formerly MassMutual and Great-West) is one of the largest retirement plan providers. They offer online rollover initiation for many plans.",
    typicalTimeline: "5-10 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-701-8255",
    rolloverDepartment: "Participant Services",
    onlineRollover: true,
    searchVolume: 720,
    keywordDifficulty: 5,
    description: "Empower Retirement serves over 17 million participants across employer-sponsored plans. They've consolidated several major recordkeepers including MassMutual and Great-West.",
    rolloverSteps: [
      "Log into your Empower account",
      "Navigate to 'Withdrawals' or 'Distributions'",
      "Select 'Rollover to another institution'",
      "Enter your Gold IRA custodian details",
      "Choose direct rollover option",
      "Submit electronically or download forms to mail"
    ],
    tips: [
      "Empower's online system is user-friendly for rollovers",
      "Former MassMutual accounts now use Empower branding",
      "Check your plan's specific distribution options",
      "Empower can do wire transfers for faster processing"
    ],
    warnings: [
      "Plan rules are set by your employer, not Empower",
      "Some legacy plans have different procedures",
      "Verify your account has been migrated to Empower systems"
    ]
  },

  "john-hancock": {
    id: "john-hancock",
    name: "John Hancock",
    slug: "john-hancock",
    type: "employer",
    accountTypes: ["401(k)", "403(b)", "457(b)"],
    rolloverProcess: "John Hancock requires paper forms for most Gold IRA rollovers. Processing times can vary based on plan administrator responsiveness.",
    typicalTimeline: "10-14 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "800-395-1113",
    rolloverDepartment: "Retirement Plan Services",
    onlineRollover: false,
    searchVolume: 590,
    keywordDifficulty: 4,
    description: "John Hancock is a major provider of employer-sponsored retirement plans, particularly in the small to mid-size business market.",
    rolloverSteps: [
      "Contact John Hancock at 800-395-1113",
      "Request the rollover distribution form",
      "Set up your Gold IRA account",
      "Complete the form with custodian information",
      "Select 'Direct Rollover' option",
      "Mail or fax completed forms to John Hancock"
    ],
    tips: [
      "Request forms early - John Hancock can be slower",
      "Your Gold IRA company may have pre-filled forms",
      "Follow up after 5 business days if no confirmation",
      "Keep copies of all submitted paperwork"
    ],
    warnings: [
      "Phone wait times can be long during peak periods",
      "Paper forms are required for most Gold IRA transfers",
      "Plan administrator approval may be required"
    ]
  },

  "merrill-lynch": {
    id: "merrill-lynch",
    name: "Merrill Lynch",
    slug: "merrill-lynch",
    type: "brokerage",
    accountTypes: ["401(k)", "Traditional IRA", "Roth IRA", "SEP IRA"],
    rolloverProcess: "Merrill Lynch (Bank of America) offers both advisor-assisted and self-service rollover options. Processing is typically efficient.",
    typicalTimeline: "5-7 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "888-637-3343",
    rolloverDepartment: "Retirement Services",
    onlineRollover: true,
    searchVolume: 480,
    keywordDifficulty: 7,
    description: "Merrill Lynch, now part of Bank of America, provides retirement services for both individual and employer-sponsored accounts.",
    rolloverSteps: [
      "Open your Gold IRA account",
      "Log into Merrill Edge or call 888-637-3343",
      "Request a direct rollover distribution",
      "Provide Gold IRA custodian details",
      "Complete any required authorization forms",
      "Merrill sends funds via check or wire"
    ],
    tips: [
      "Bank of America customers may have expedited processing",
      "Merrill Edge self-directed accounts are easier to roll over",
      "Financial advisors can assist with the process",
      "Wire transfers available for faster delivery"
    ],
    warnings: [
      "401(k) plans through employers may have different rules",
      "Advisory accounts may require advisor approval",
      "Verify there are no early termination fees"
    ]
  },

  "prudential": {
    id: "prudential",
    name: "Prudential",
    slug: "prudential",
    type: "employer",
    accountTypes: ["401(k)", "403(b)", "Pension", "Annuities"],
    rolloverProcess: "Prudential serves many large employer plans. Their rollover process depends on whether you have a 401(k), pension, or annuity product.",
    typicalTimeline: "7-14 business days",
    directRollover: true,
    inServiceWithdrawal: true,
    inServiceAge: 59,
    phone: "877-778-2100",
    rolloverDepartment: "Retirement Services",
    onlineRollover: true,
    searchVolume: 420,
    keywordDifficulty: 5,
    description: "Prudential Financial manages retirement plans for many Fortune 500 companies and offers individual annuity products as well.",
    rolloverSteps: [
      "Determine your account type (401k, pension, annuity)",
      "Log into Prudential.com or call 877-778-2100",
      "Request rollover distribution forms",
      "Set up Gold IRA account",
      "Complete forms with direct rollover to Gold IRA",
      "Submit and track online"
    ],
    tips: [
      "Prudential's online portal is comprehensive",
      "Pension rollovers have different rules than 401(k)s",
      "Check for any guaranteed minimum benefits before rolling",
      "Annuities may have surrender charges"
    ],
    warnings: [
      "Pension benefits may be better left in place",
      "Annuity surrenders can trigger significant charges",
      "Consult a financial advisor for pension decisions"
    ]
  }
};

// ============================================
// ACCOUNT TYPES
// ============================================

export const accountTypes: Record<string, AccountType> = {
  "401k": {
    id: "401k",
    name: "401(k)",
    slug: "401k",
    fullName: "401(k) Retirement Plan",
    description: "The most common employer-sponsored retirement plan, allowing pre-tax contributions with employer matching.",
    taxTreatment: "pre-tax",
    contributionLimit2026: 23500,
    catchUpContribution: 7500,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Must be separated from employer OR age 59½ for in-service withdrawal",
      "Some plans allow hardship withdrawals but these cannot be rolled over",
      "Employer match may have vesting requirements"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Employees of companies offering 401(k) plans",
    typicalHolder: "Private sector employees",
    searchVolume: 8100
  },

  "traditional-ira": {
    id: "traditional-ira",
    name: "Traditional IRA",
    slug: "traditional-ira",
    fullName: "Traditional Individual Retirement Account",
    description: "A personal retirement account with tax-deductible contributions and tax-deferred growth.",
    taxTreatment: "pre-tax",
    contributionLimit2026: 7000,
    catchUpContribution: 1000,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "No age or employment restrictions for rollover",
      "One rollover per 12-month period (per account)",
      "60-day deadline for indirect rollovers"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Anyone with earned income",
    typicalHolder: "Self-employed, employees without 401(k), IRA holders",
    searchVolume: 5400
  },

  "roth-ira": {
    id: "roth-ira",
    name: "Roth IRA",
    slug: "roth-ira",
    fullName: "Roth Individual Retirement Account",
    description: "A personal retirement account with after-tax contributions and tax-free qualified withdrawals.",
    taxTreatment: "post-tax",
    contributionLimit2026: 7000,
    catchUpContribution: 1000,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Must roll to Roth Gold IRA to maintain tax-free status",
      "Income limits apply for contributions but not rollovers",
      "No RMDs during owner's lifetime"
    ],
    requiredMinDistributionAge: 0, // No RMDs for Roth
    eligibility: "Anyone with earned income below income limits",
    typicalHolder: "Higher earners, those expecting higher future tax rates",
    searchVolume: 4200
  },

  "403b": {
    id: "403b",
    name: "403(b)",
    slug: "403b",
    fullName: "403(b) Tax-Sheltered Annuity Plan",
    description: "Retirement plan for public school employees, non-profit workers, and certain ministers.",
    taxTreatment: "both",
    contributionLimit2026: 23500,
    catchUpContribution: 7500,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Same rules as 401(k) for most purposes",
      "Some older 403(b) annuities have surrender charges",
      "Employer must allow distributions"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Public school employees, non-profit workers, ministers",
    typicalHolder: "Teachers, hospital workers, non-profit employees",
    searchVolume: 2400
  },

  "tsp": {
    id: "tsp",
    name: "TSP",
    slug: "tsp",
    fullName: "Thrift Savings Plan",
    description: "Retirement savings plan for federal employees and uniformed services members.",
    taxTreatment: "both",
    contributionLimit2026: 23500,
    catchUpContribution: 7500,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Must be separated from federal service OR age 59½",
      "TSP Roth contributions must go to Roth Gold IRA",
      "Cannot return funds to TSP once withdrawn"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Federal employees, uniformed services members",
    typicalHolder: "Government workers, military personnel",
    searchVolume: 3100
  },

  "sep-ira": {
    id: "sep-ira",
    name: "SEP IRA",
    slug: "sep-ira",
    fullName: "Simplified Employee Pension IRA",
    description: "Retirement plan for self-employed individuals and small business owners with high contribution limits.",
    taxTreatment: "pre-tax",
    contributionLimit2026: 69000,
    catchUpContribution: 0,
    catchUpAge: 0,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Can roll over at any time",
      "No early withdrawal penalty for SEP contributions",
      "Employer contributions are immediately vested"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Self-employed, small business owners",
    typicalHolder: "Freelancers, consultants, small business owners",
    searchVolume: 1800
  },

  "457b": {
    id: "457b",
    name: "457(b)",
    slug: "457b",
    fullName: "457(b) Deferred Compensation Plan",
    description: "Retirement plan for state and local government employees and some non-profit workers.",
    taxTreatment: "pre-tax",
    contributionLimit2026: 23500,
    catchUpContribution: 7500,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "No 10% early withdrawal penalty (unlike 401k/403b)",
      "Can contribute to both 457(b) and 401(k)/403(b)",
      "Governmental 457(b) plans are more flexible"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "State/local government employees, some non-profits",
    typicalHolder: "Government workers, firefighters, police",
    searchVolume: 1200
  },

  "simple-ira": {
    id: "simple-ira",
    name: "SIMPLE IRA",
    slug: "simple-ira",
    fullName: "Savings Incentive Match Plan for Employees IRA",
    description: "Retirement plan for small businesses with 100 or fewer employees.",
    taxTreatment: "pre-tax",
    contributionLimit2026: 16500,
    catchUpContribution: 3500,
    catchUpAge: 50,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Must wait 2 years from first contribution to roll over",
      "25% penalty for early withdrawal in first 2 years",
      "After 2 years, standard rollover rules apply"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Employees of small businesses offering SIMPLE plans",
    typicalHolder: "Small business employees",
    searchVolume: 880
  },

  "pension": {
    id: "pension",
    name: "Pension",
    slug: "pension",
    fullName: "Defined Benefit Pension Plan",
    description: "Traditional pension plan providing guaranteed retirement income based on salary and years of service.",
    taxTreatment: "pre-tax",
    contributionLimit2026: 0, // Employer funded
    catchUpContribution: 0,
    catchUpAge: 0,
    canRolloverToGoldIRA: true,
    rolloverRestrictions: [
      "Can only roll over lump-sum distribution option",
      "May forfeit guaranteed lifetime income",
      "Requires careful analysis of pension value vs. lump sum"
    ],
    requiredMinDistributionAge: 73,
    eligibility: "Employees of companies with pension plans",
    typicalHolder: "Long-term employees, union workers, government employees",
    searchVolume: 720
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getProviderBySlug(slug: string): RolloverProvider | undefined {
  return providers[slug];
}

export function getAllProviders(): RolloverProvider[] {
  return Object.values(providers).sort((a, b) => (b.searchVolume || 0) - (a.searchVolume || 0));
}

export function getProvidersByType(type: RolloverProvider["type"]): RolloverProvider[] {
  return Object.values(providers).filter(p => p.type === type);
}

export function getAccountTypeBySlug(slug: string): AccountType | undefined {
  return accountTypes[slug];
}

export function getAllAccountTypes(): AccountType[] {
  return Object.values(accountTypes).sort((a, b) => (b.searchVolume || 0) - (a.searchVolume || 0));
}

export function getProviderSlugs(): string[] {
  return Object.keys(providers);
}

export function getAccountTypeSlugs(): string[] {
  return Object.keys(accountTypes);
}
