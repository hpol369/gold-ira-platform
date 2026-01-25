export interface ExpertQuote {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization?: string;
  source?: string;
  year?: number;
  category: "wealth" | "inflation" | "crisis" | "diversification" | "general";
  featured?: boolean;
}

export const expertQuotes: ExpertQuote[] = [
  // WEALTH PRESERVATION
  {
    id: "buffett-gold-1",
    quote:
      "Gold gets dug out of the ground in Africa, or someplace. Then we melt it down, dig another hole, bury it again and pay people to stand around guarding it.",
    author: "Warren Buffett",
    title: "CEO",
    organization: "Berkshire Hathaway",
    category: "general",
    year: 1998,
  },
  {
    id: "dalio-gold",
    quote:
      "If you don't own gold, you know neither history nor economics.",
    author: "Ray Dalio",
    title: "Founder",
    organization: "Bridgewater Associates",
    category: "general",
    featured: true,
  },
  {
    id: "greenspan-gold",
    quote:
      "Gold still represents the ultimate form of payment in the world. Fiat money in extremis is accepted by nobody. Gold is always accepted.",
    author: "Alan Greenspan",
    title: "Former Chairman",
    organization: "Federal Reserve",
    category: "crisis",
    featured: true,
  },
  {
    id: "kiyosaki-gold",
    quote:
      "Gold and silver are God's money. Paper money is man's money. I always keep gold and silver in my portfolio for insurance.",
    author: "Robert Kiyosaki",
    title: "Author",
    organization: "Rich Dad Poor Dad",
    category: "wealth",
    featured: true,
  },
  {
    id: "schiff-gold",
    quote:
      "Gold is money. Everything else is credit.",
    author: "J.P. Morgan",
    title: "Financier & Banker",
    year: 1912,
    category: "general",
    featured: true,
  },
  {
    id: "paul-gold",
    quote:
      "Gold is honest money. It's the only money that has survived 5,000 years of human history because it cannot be printed by politicians.",
    author: "Ron Paul",
    title: "Former Congressman",
    organization: "U.S. House of Representatives",
    category: "inflation",
  },
  {
    id: "volcker-gold",
    quote:
      "Gold was the basis of value, the measure of wealth, and the foundation of the international monetary system for centuries.",
    author: "Paul Volcker",
    title: "Former Chairman",
    organization: "Federal Reserve",
    category: "wealth",
  },

  // INFLATION PROTECTION
  {
    id: "rogers-gold",
    quote:
      "Gold is the only real money. If you're worried about inflation, gold is the place to be.",
    author: "Jim Rogers",
    title: "Co-founder",
    organization: "Quantum Fund",
    category: "inflation",
  },
  {
    id: "faber-gold",
    quote:
      "The honest money is gold. It cannot be printed. It has proven its store of value over thousands of years.",
    author: "Marc Faber",
    title: "Publisher",
    organization: "Gloom, Boom & Doom Report",
    category: "inflation",
  },
  {
    id: "maloney-gold",
    quote:
      "Gold and silver are not investments. They are savings. They are the only financial assets that are not simultaneously someone else's liability.",
    author: "Mike Maloney",
    title: "Author",
    organization: "Guide to Investing in Gold & Silver",
    category: "wealth",
    featured: true,
  },

  // CRISIS PROTECTION
  {
    id: "soros-gold",
    quote:
      "Gold is the ultimate bubble. But it's not going to burst until things get better.",
    author: "George Soros",
    title: "Founder",
    organization: "Soros Fund Management",
    category: "crisis",
  },
  {
    id: "druckenmiller-gold",
    quote:
      "I own gold. I've been long gold for a long time. If I had to guess, I think gold goes up.",
    author: "Stanley Druckenmiller",
    title: "Former Fund Manager",
    organization: "Quantum Fund",
    category: "general",
  },
  {
    id: "gundlach-gold",
    quote:
      "Gold will be very much in focus during the crisis. It's a good time to own gold.",
    author: "Jeffrey Gundlach",
    title: "CEO",
    organization: "DoubleLine Capital",
    category: "crisis",
  },

  // DIVERSIFICATION
  {
    id: "browne-gold",
    quote:
      "Gold is a hedge against government mismanagement. The more governments spend, the more valuable gold becomes.",
    author: "Harry Browne",
    title: "Investment Advisor & Author",
    category: "diversification",
  },
  {
    id: "rickards-gold",
    quote:
      "Gold is not an investment, it's money. And money is the only asset that has zero counterparty risk.",
    author: "Jim Rickards",
    title: "Author",
    organization: "Currency Wars",
    category: "diversification",
  },
  {
    id: "schiff-peter",
    quote:
      "Buy gold and sit on it. That's how to preserve wealth. Paper money is designed to steal from savers.",
    author: "Peter Schiff",
    title: "CEO",
    organization: "Euro Pacific Capital",
    category: "inflation",
  },

  // CENTRAL BANKS
  {
    id: "central-banks",
    quote:
      "Central banks are buying gold at the highest rate since 1967. They're preparing for something.",
    author: "World Gold Council",
    title: "Industry Research",
    year: 2024,
    category: "crisis",
  },
];

export function getQuotesByCategory(category: ExpertQuote["category"]): ExpertQuote[] {
  return expertQuotes.filter((q) => q.category === category);
}

export function getFeaturedQuotes(): ExpertQuote[] {
  return expertQuotes.filter((q) => q.featured);
}

export function getRandomQuotes(count: number = 3): ExpertQuote[] {
  const shuffled = [...expertQuotes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
