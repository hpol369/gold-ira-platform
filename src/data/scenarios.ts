// src/data/scenarios.ts
// Crisis scenario content for fear-based SEO pages

export interface Scenario {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  threatLevel: "high" | "critical" | "extreme";
  probability: string;
  timeframe: string;
  sections: {
    title: string;
    content: string;
    bullets?: string[];
  }[];
  warningSignals: string[];
  protectionSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  goldBenefit: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedScenarios: string[];
}

export const scenarios: Scenario[] = [
  {
    slug: "dollar-collapse",
    title: "Dollar Collapse: What It Means for Your 401(k)",
    subtitle: "You've spent 30 years building your nest egg. Here's the straight talk on what happens if the dollar tanks - and what working Americans are doing about it.",
    metaTitle: "Dollar Collapse Survival Guide: Protect Your 401(k) | 2025",
    metaDescription: "Dollar collapse guide. What it means for your 401(k) and how working Americans are protecting their retirement savings.",
    threatLevel: "critical",
    probability: "Growing risk",
    timeframe: "5-15 years",
    sections: [
      {
        title: "Let's Be Straight About What This Means",
        content: "You've got $500,000, $600,000, maybe more in your 401(k). You earned every dollar of that working the line, driving the truck, taking the night shifts. A dollar collapse means that money buys less - a lot less. This isn't fear-mongering. It's happened to every paper currency in history. The Roman denarius, German mark, Venezuelan bolivar - same pattern every time. The question isn't if it can happen here. It's whether you'll be ready.",
        bullets: [
          "Since 2020, the government printed 80% of all dollars that have ever existed",
          "The national debt is now $34 trillion - that's $34,000,000,000,000",
          "China and other countries are actively moving away from the dollar",
          "Your grocery bill tells you what's already happening to the dollar's value",
        ],
      },
      {
        title: "Why Your Retirement Is at Risk Right Now",
        content: "Here's what your broker won't tell you: everything in your 401(k) is priced in dollars. Stocks, bonds, that target-date fund - all of it. If the dollar loses half its value, your $600,000 becomes $300,000 in real purchasing power. You remember 2008 when your account dropped 40%? This could be worse, because the losses would be permanent - not something the market 'recovers' from.",
        bullets: [
          "China and Russia are trading oil without dollars for the first time in 50 years",
          "Central banks worldwide bought more gold in 2023 than any year since 1967",
          "The dollar has already lost 96% of its value since 1913",
          "When confidence breaks, it breaks fast - ask anyone who lived through 2008",
        ],
      },
      {
        title: "What This Would Actually Look Like",
        content: "Talk to anyone who lived through it in other countries. First, prices start climbing faster - you're already seeing that at the grocery store. Then it accelerates. Gas doubles. Food costs spike. That $600,000 in your 401(k) doesn't go as far. And unlike a stock market crash, there's no 'recovery' - the dollar stays weak. Retirees in Argentina, Venezuela, Germany - they all tell the same story. The ones who protected themselves did it before the collapse, not after.",
      },
    ],
    warningSignals: [
      "Rapid increase in gold and commodity prices",
      "Foreign central banks selling US Treasuries",
      "Major nations announcing non-dollar trade agreements",
      "Failed or weak Treasury bond auctions",
      "Accelerating inflation despite Fed rate hikes",
      "Capital controls or bank withdrawal limits",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Understand What You Actually Own",
        description: "That $600,000 in your 401(k)? It's all promises to pay you in dollars. Stocks, bonds, your target-date fund - every bit of it depends on the dollar keeping its value. A steelworker from Pittsburgh told us: 'I didn't realize my whole retirement was one big bet on the dollar until it was almost too late.'",
      },
      {
        step: 2,
        title: "Move Some Savings to Physical Gold",
        description: "Gold has kept its value through every currency collapse in history - 5,000 years and counting. A Gold IRA lets you move part of your 401(k) into physical gold without paying taxes or penalties. It's legal, it's simple, and it puts real metal in a vault with your name on it.",
      },
      {
        step: 3,
        title: "Pay Down Your Debts",
        description: "When currencies collapse, debts become a nightmare. That adjustable-rate mortgage? It could double. A retired trucker from Kansas said it best: 'I'm glad I paid off the house before all this started. One less thing to worry about.'",
      },
      {
        step: 4,
        title: "Keep Cash and Gold Outside the Bank",
        description: "When things get bad, banks limit withdrawals. Happened in Cyprus, happened in Greece. Keep 2-3 months of expenses in cash at home, and consider some physical gold you can actually hold. Just in case.",
      },
    ],
    goldBenefit: "Here's why gold works when dollars fail: gold doesn't need anyone's permission to be valuable. It's not a promise - it's actual metal you can hold. When Germany's currency collapsed in 1923, one ounce of gold went from 170 marks to 87 trillion marks. The gold didn't change - the paper money became worthless. People who owned gold kept their purchasing power. People who trusted the currency lost everything.",
    stats: [
      { label: "Dollar Purchasing Power Lost", value: "96%", subtext: "Since 1913" },
      { label: "US National Debt", value: "$34T+", subtext: "And growing" },
      { label: "Gold's Track Record", value: "5,000 yrs", subtext: "As money" },
      { label: "Fiat Currencies Failed", value: "100%", subtext: "Eventually" },
    ],
    faqs: [
      {
        question: "Could this really happen in America?",
        answer: "Look, nobody has a crystal ball. But the same people who said '2008 can't happen' were wrong. The conditions for a dollar problem are all there: the highest debt in history, trillions in new money printed since 2020, and countries like China actively moving away from the dollar. You don't have to believe it's coming tomorrow to take some precautions today.",
      },
      {
        question: "What would set it off?",
        answer: "It could be a lot of things: China or Saudi Arabia dumping their dollars, a failed Treasury auction where nobody wants to buy our debt, another banking crisis, or just continued money printing until people lose confidence. The point is, you won't get a warning. 2008 came out of nowhere for most folks.",
      },
      {
        question: "How much of my retirement should be in gold?",
        answer: "Most people we talk to - teachers, nurses, factory workers - put 10-25% of their retirement into gold. That's enough to make a real difference if things go bad, but not so much that you're putting all your eggs in one basket. The key is having some protection before you need it.",
      },
    ],
    relatedScenarios: ["hyperinflation", "bank-failure", "stock-market-crash"],
  },
  {
    slug: "hyperinflation",
    title: "Hyperinflation: When Your Dollars Buy Nothing",
    subtitle: "You've already noticed groceries cost more. Here's the truth about what could happen to your retirement if inflation gets out of control - and what folks who lived through it wish they'd done.",
    metaTitle: "Hyperinflation Protection: Save Your 401(k) from Runaway Inflation",
    metaDescription: "Hyperinflation protection guide. What happens to your 401(k) if inflation spirals and how to protect your retirement savings.",
    threatLevel: "high",
    probability: "Moderate risk",
    timeframe: "Economic dependent",
    sections: [
      {
        title: "You're Already Seeing It at the Grocery Store",
        content: "You don't need an economics degree to know something's wrong. The grocery bill that used to be $150 is now $250. Gas prices swing wildly. That steak you used to buy every week? Now it's a special occasion. This is inflation - and it's already eating into your retirement. Now imagine it getting 10 times worse. That's hyperinflation, and it's happened 57 times in the last century to countries that thought it couldn't happen to them.",
        bullets: [
          "Zimbabwe 2008: A loaf of bread cost 35 million dollars",
          "Venezuela 2018: Doctors and teachers became street vendors overnight",
          "Germany 1923: Workers got paid twice a day so they could spend it before it lost value",
          "Each time, the people who lost the most were the ones who trusted paper money",
        ],
      },
      {
        title: "Here's Why You Should Be Concerned",
        content: "Between 2020 and 2022, the government printed 40% more dollars than existed in all of American history before that. Think about that. And where did all that money go? Into the economy - which is why everything costs more now. We haven't hit hyperinflation yet, but the conditions are all there. One bad event - another banking crisis, a debt ceiling disaster, a loss of confidence - and it could spiral fast.",
        bullets: [
          "The government printed more money in 2 years than in the previous 200",
          "Real inflation is probably 10-15% - not the 3% they tell you",
          "Social Security and Medicare have $175 trillion in unfunded promises",
          "When you worked at the plant in 1990, $50,000 was a good salary. Now it's barely enough.",
        ],
      },
      {
        title: "What This Means for People Like You",
        content: "Let me be straight with you. In hyperinflation, that $600,000 in your 401(k) could become worth $60,000 in real purchasing power - or less. It's not that the number changes. It's that the dollars don't buy anything anymore. In Venezuela, people with $500,000 in savings became poor in months. The middle class gets wiped out first, every time. The people who survived? The ones who owned things that hold value - like gold.",
      },
    ],
    warningSignals: [
      "Official inflation consistently above 10%",
      "Government denying or manipulating inflation statistics",
      "Wage-price spirals beginning",
      "Currency rapidly weakening against gold",
      "Price controls being implemented",
      "Bank runs or withdrawal limits",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Move Some of Your 401(k) to Physical Gold",
        description: "A Gold IRA lets you roll over part of your retirement into actual gold bars and coins - without paying taxes or penalties. It's the same thing central banks do when they're worried about their currency. If it's good enough for the Federal Reserve, it's good enough for a retired steelworker from Ohio.",
      },
      {
        step: 2,
        title: "Don't Let Cash Sit Around",
        description: "In hyperinflation, cash loses value by the week - sometimes by the day. That savings account earning 0.5% is actually losing money when inflation is 8-10%. Keep what you need for bills, but put the rest somewhere inflation can't eat it.",
      },
      {
        step: 3,
        title: "Own Real Things, Not Paper Promises",
        description: "Your 401(k) is full of promises - promises to pay you dollars, promises that stocks will recover, promises that bonds will pay interest. In hyperinflation, promises break. Physical gold is real. You can hold it. Nobody can print more of it. That's the difference.",
      },
      {
        step: 4,
        title: "Get Your House in Order",
        description: "Pay down that mortgage if you can. Stock up on essentials - not doomsday prepper stuff, just practical reserves. A retired teacher from Florida told us: 'When the supply chains went crazy during COVID, I was glad I had a few months of basics stored up.'",
      },
    ],
    goldBenefit: "Let me tell you what happened in Germany in 1923. At the start of the hyperinflation, one ounce of gold cost 170 marks. By the end, that same ounce cost 87 trillion marks. The gold didn't change - it still bought the same amount of goods it always did. One ounce could buy a nice house when the crisis peaked. The people who held marks lost everything. The people who held gold kept their wealth. Same story in Venezuela, Zimbabwe, Argentina. Every time.",
    stats: [
      { label: "Hyperinflations Since 1900", value: "57", subtext: "And counting" },
      { label: "US Money Printed 2020-22", value: "80%", subtext: "Of all dollars ever" },
      { label: "Gold Performance in Crises", value: "+500%", subtext: "Average gain" },
      { label: "Average Fiat Currency Lifespan", value: "27 yrs", subtext: "Dollar is 53" },
    ],
    faqs: [
      {
        question: "Could hyperinflation really happen here?",
        answer: "The same thing was said in Germany, the most advanced economy in the world in 1920. And in Venezuela, the richest country in Latin America in 2000. Both had stable currencies, educated populations, and people who thought it couldn't happen to them. Then it did. We're not saying it will happen here. But the conditions are there, and pretending it can't happen is exactly what people in those countries did.",
      },
      {
        question: "How fast could things go bad?",
        answer: "Once confidence breaks, things move fast. In most historical cases, the worst damage happened in 12-24 months. One day prices are high but manageable. Six months later, your life savings doesn't cover a month's groceries. That's why you protect yourself before it starts, not after.",
      },
      {
        question: "What actually works to protect retirement savings?",
        answer: "In every hyperinflation in history, the people who came out okay owned physical things - gold, silver, real estate, productive land. Paper promises (stocks, bonds, savings accounts) got wiped out. A Gold IRA lets you put real gold in a vault with your name on it. It's what the wealthy have always done, and now regular folks can do it too.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "bank-failure", "cbdc-control"],
  },
  {
    slug: "bank-failure",
    title: "Bank Failures: Is Your Money Actually Safe?",
    subtitle: "Remember when they said 'too big to fail'? Three major banks collapsed in one week in 2023. Here's what you need to know about where your money really is.",
    metaTitle: "Bank Failure Guide: Is Your Money Safe? What FDIC Won't Tell You",
    metaDescription: "Bank failure guide. What FDIC won't tell you about protection limits and how to keep your savings safe when banks collapse.",
    threatLevel: "high",
    probability: "Recurring risk",
    timeframe: "Unpredictable",
    sections: [
      {
        title: "This Isn't Theory - It Happened Last Year",
        content: "In March 2023, three banks collapsed in a single week. Silicon Valley Bank went from 'perfectly healthy' to seized by regulators in 48 hours. That's faster than you could withdraw your money even if you tried. This wasn't some small-town bank - it was the 16th largest in America. If you think your money is always safe because it's in a bank, you need to hear this.",
        bullets: [
          "Silicon Valley Bank: $209 billion in assets - gone in 48 hours",
          "Signature Bank: $110 billion - seized by regulators the same week",
          "First Republic: $229 billion - emergency sale to JPMorgan",
          "Combined, bigger than the 2008 bank failures",
        ],
      },
      {
        title: "The Truth About FDIC Insurance",
        content: "You've heard that FDIC covers $250,000 per depositor. That's true - in normal times. But here's what they don't advertise: the entire FDIC fund has $128 billion to cover over $10 trillion in insured deposits. That's about 1.3 cents for every dollar they promise to protect. In a real crisis, when multiple banks fail at once? They'd have to get bailed out by the same government that's $34 trillion in debt.",
        bullets: [
          "The FDIC fund: $128 billion total",
          "Deposits they're supposed to cover: $10+ trillion",
          "That's 1.3% coverage - not even close to enough",
          "In 2008, they needed a $700 billion bailout to stay afloat",
        ],
      },
      {
        title: "What Happens When Your Bank Goes Under",
        content: "Let's say your bank fails tomorrow. Your accounts get frozen immediately. That direct deposit from your pension? Frozen. That money you need for groceries? Frozen. The mortgage payment due next week? Still due, but your money is locked up. Eventually - maybe days, maybe weeks - FDIC gets you your money. But in between? A retired nurse from Michigan told us about 2008: 'For two weeks, I couldn't access a dime. My husband was in the hospital and I had to borrow money for the copays.'",
      },
    ],
    warningSignals: [
      "Bank stock price dropping rapidly",
      "News of large deposit outflows",
      "Downgrade by rating agencies",
      "Executive departures or insider selling",
      "Rising interest rates stressing bank portfolios",
      "Concentrated exposure to struggling sectors",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Don't Put All Your Eggs in One Bank",
        description: "If you've got more than $250,000 saved up - and a lot of folks reading this do after 30 years of work - spread it across different banks. The FDIC only covers $250,000 per bank. A retired electrician from Chicago told us: 'I had everything at one bank. After 2008, I split it up. Sleep better now.'",
      },
      {
        step: 2,
        title: "Keep Some Savings Outside the Banking System",
        description: "Here's the thing about gold in a depository: it's not in any bank. The bank can't fail and take your gold with it. It's sitting in a vault with your name on it. When a retired teacher from Texas moved part of her savings to a Gold IRA, she said: 'For the first time, I have something that doesn't depend on anyone else staying solvent.'",
      },
      {
        step: 3,
        title: "Keep Cash at Home",
        description: "Have 2-3 weeks of expenses in physical cash, somewhere safe at home. When banks fail, ATMs stop working. Cards get declined. A retired trucker told us: 'During the 2008 mess, I couldn't get cash for three days. Had to borrow money for gas. Never again.'",
      },
      {
        step: 4,
        title: "Pay Attention to Warning Signs",
        description: "Silicon Valley Bank's stock dropped 60% in one day before it collapsed. People who were paying attention got their money out. Most people weren't watching. If your bank's stock starts tanking or you see news about problems, don't wait to find out if it's serious.",
      },
    ],
    goldBenefit: "Here's why the Federal Reserve, the Chinese government, and every central bank in the world holds gold: because when the banking system has problems, gold doesn't care. Your gold doesn't depend on any bank staying solvent. It's not a promise that someone will pay you - it's actual metal in a vault. When three banks collapsed in 2023, people with gold in a depository weren't worried. Their wealth wasn't in the system that was failing.",
    stats: [
      { label: "Banks Failed 2023", value: "5", subtext: "Including 3 of top 30" },
      { label: "FDIC Reserve Ratio", value: "1.3%", subtext: "Of insured deposits" },
      { label: "SVB Collapse Time", value: "48 hrs", subtext: "From stable to seized" },
      { label: "Uninsured Deposits US", value: "$7T+", subtext: "At risk" },
    ],
    faqs: [
      {
        question: "Is my money really safe in the bank?",
        answer: "Up to $250,000 is covered by FDIC insurance - in normal times. But here's what they don't tell you: if enough banks fail at once, the FDIC doesn't have enough money to cover everyone. They'd need a government bailout. And during a failure, even insured money can be frozen for days or weeks while they sort things out. Ask anyone who went through 2008 how fun that was.",
      },
      {
        question: "How do I know if my bank is in trouble?",
        answer: "Watch the bank's stock price - it often tells you before the news does. Look for credit rating downgrades, news about executives leaving, or stories about deposit outflows. Silicon Valley Bank's stock crashed the day before they failed. The people paying attention got out. Most didn't.",
      },
      {
        question: "What's the safest place for savings outside the bank?",
        answer: "Physical gold in a secure depository doesn't depend on any bank staying in business. It's not a digital entry somewhere - it's actual metal with your name on it. When banks have problems, your gold just sits there in the vault, not caring. That's why we call it 'no counterparty risk' - there's nobody who has to stay solvent for you to keep your wealth.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "hyperinflation", "stock-market-crash"],
  },
  {
    slug: "stock-market-crash",
    title: "Stock Market Crash: What Happens to Your 401(k)",
    subtitle: "You remember 2008. Your 401(k) dropped 40%, and you wondered if you'd ever get it back. Here's the truth about crashes and what you can do before the next one hits.",
    metaTitle: "Stock Market Crash Protection: Save Your 401(k) Before It's Too Late",
    metaDescription: "Stock market crash protection guide. How to protect your 401(k) before the next crash based on 2008 lessons.",
    threatLevel: "high",
    probability: "Cyclical certainty",
    timeframe: "Overdue",
    sections: [
      {
        title: "You've Seen This Movie Before",
        content: "Let me guess - you remember exactly where you were in 2008 when you opened that 401(k) statement. Maybe you were at the kitchen table, feeling sick to your stomach. That $500,000 was suddenly $300,000. Thirty years of early mornings, overtime, saying no to vacations - and it vanished on a screen. Here's the thing: crashes happen roughly once a decade. 1987, 2000, 2008, 2020. We're overdue for the next one.",
        bullets: [
          "2008 crash: Your 401(k) dropped 40-50%. Recovery took 5 years.",
          "2000 dot-com: Some folks waited 13 years to break even.",
          "The average crash takes 7 years to recover from.",
          "If you're 60, you don't have 7 years to wait.",
        ],
      },
      {
        title: "Your 401(k) Has a Big Problem",
        content: "Pull up your 401(k) options right now. You've got stock funds, bond funds, maybe a money market. That's it. There's no gold option. When the market crashes, you've got nowhere to hide. You can move to bonds, but in 2022, bonds crashed too - the 60/40 portfolio that your advisor recommended lost 17%. The truth is, your 401(k) is designed to keep you in the market no matter what.",
        bullets: [
          "The 'safe' 60/40 portfolio lost 17% in 2022",
          "Bonds and stocks crashed together - no protection",
          "Most 401(k)s don't offer gold or precious metals",
          "Target-date funds just shift the same risky assets around",
        ],
      },
      {
        title: "The Real Danger If You're Close to Retirement",
        content: "Here's what nobody tells you: if the market crashes when you're 62, you might never recover. A 50% loss means you need a 100% gain just to break even. But you can't wait for that gain - you need to pay bills, so you're selling stocks at the bottom just to survive. A retired union electrician from Detroit told us: 'I was going to retire in 2009. The crash pushed it to 2014. Five more years of climbing ladders with bad knees because Wall Street blew up.'",
      },
    ],
    warningSignals: [
      "Price-to-earnings ratios at historic extremes",
      "Yield curve inversion (recession indicator)",
      "Record margin debt and speculation",
      "Retail investor euphoria (meme stocks, crypto mania)",
      "Fed tightening into economic weakness",
      "Corporate earnings declining while stocks rise",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Move Some Money to a Self-Directed IRA",
        description: "Your 401(k) keeps you trapped in stocks and bonds. But you can roll over part of it to a self-directed IRA that lets you own actual gold. It's legal, there's no tax penalty, and suddenly you have options you didn't have before. A factory supervisor from Ohio told us: 'Wish I'd known about this before 2008.'",
      },
      {
        step: 2,
        title: "Put Some of Your Retirement in Gold",
        description: "Here's what happened in 2008: stocks dropped 57%, but gold went UP 25%. They move in opposite directions. So when your stocks are crashing, your gold is rising. That's not a guarantee - nothing is - but it's what the historical record shows, over and over again.",
      },
      {
        step: 3,
        title: "Reduce Risk as You Get Older",
        description: "If you're 40 and the market crashes, you've got time to recover. If you're 60, you might not. The closer you are to retirement, the more you need to protect what you've built. A retired nurse from Pennsylvania said: 'At 58, I moved 30% to gold. When COVID hit the markets, I didn't panic. That gold held me steady.'",
      },
      {
        step: 4,
        title: "Have a Plan Before the Panic",
        description: "When the market crashes, everyone panics. They sell at the bottom, locking in losses. The people who come out okay are the ones who had a plan before it happened. Know what percentage you want in gold, what percentage in stocks. Write it down. When the chaos hits, follow the plan.",
      },
    ],
    goldBenefit: "Let me give you the numbers that matter. In 2008, the S&P 500 lost 57%. Gold gained 25%. In 2020, when COVID crashed the markets, gold hit all-time highs. When stocks go down, gold tends to go up. That's not magic - it's because scared money runs to gold. It's been that way for thousands of years. Having gold in your retirement isn't gambling. It's insurance for the crash you know is coming.",
    stats: [
      { label: "Average Crash Decline", value: "-50%", subtext: "Major corrections" },
      { label: "Average Recovery Time", value: "7 yrs", subtext: "To break even" },
      { label: "Gold in 2008 Crisis", value: "+25%", subtext: "While stocks -57%" },
      { label: "Years Since Last Crash", value: "4+", subtext: "Overdue by history" },
    ],
    faqs: [
      {
        question: "Should I sell my stocks before the next crash?",
        answer: "Here's the honest truth: nobody can time the market perfectly. Not your advisor, not the talking heads on TV, not us. What you CAN do is always have some protection in place. If 20% of your retirement is in gold, you don't have to predict when the crash comes. You're already covered. A retired foreman from Michigan told us: 'I stopped trying to time it. I just keep 25% in gold, always. Sleep better that way.'",
      },
      {
        question: "Why doesn't my 401(k) let me buy gold?",
        answer: "Your 401(k) administrator makes money managing stock and bond funds. They have no incentive to let you buy gold - they can't charge you fees on it the same way. The solution is rolling over to a self-directed IRA where YOU decide what to own, not some Wall Street firm.",
      },
      {
        question: "How much of my retirement should be in gold?",
        answer: "Most folks we talk to - teachers, nurses, factory workers - put between 15% and 30% in gold. Enough to make a real difference when stocks crash, but not so much that you're giving up growth entirely. A retired truck driver told us: 'I went with 20%. When COVID hit, that 20% went up while everything else dropped. Balanced out the pain.'",
      },
    ],
    relatedScenarios: ["dollar-collapse", "hyperinflation", "bank-failure"],
  },
  {
    slug: "cbdc-control",
    title: "Digital Dollars: When the Government Controls Your Money",
    subtitle: "China already tracks every purchase its citizens make with digital currency. The US is building the same system. Here's what that means for your freedom.",
    metaTitle: "CBDC Explained: How Digital Dollars Threaten Your Financial Freedom",
    metaDescription: "CBDC guide. How digital dollars threaten financial freedom and what you can do to protect your privacy.",
    threatLevel: "extreme",
    probability: "In development",
    timeframe: "2-5 years",
    sections: [
      {
        title: "This Isn't Science Fiction - It's Already Happening in China",
        content: "Let me tell you what's happening right now in China. 260 million people use the digital yuan. The government knows every purchase they make. They can program the money to expire - spend it by Friday or it disappears. They can block you from buying certain things. And if they don't like what you said online? They freeze your account with one click. No court, no appeal. Now here's the thing: the Federal Reserve is building the same system for America.",
        bullets: [
          "130+ countries are developing government digital currencies",
          "China's digital yuan already has 260 million users",
          "The Fed launched FedNow in 2023 - the infrastructure for digital dollars",
          "Once cash is gone, you'll have no alternative",
        ],
      },
      {
        title: "Here's What They Can Do With Digital Dollars",
        content: "This isn't like the money in your bank account now. Digital dollars can be programmed. The government could set your money to expire - use it in 30 days or lose it. They could block purchases of things they don't approve of - maybe guns, maybe gold, maybe meat if they decide it's bad for the climate. They could take money directly from your account to pay taxes or fines. And they can see every single thing you buy. Every dollar you spend. Every donation you make.",
        bullets: [
          "Your money could expire if you don't spend it fast enough",
          "They could block you from buying things they disapprove of",
          "Your account could be frozen instantly - no court order needed",
          "Every purchase tracked: what you buy, where, when",
        ],
      },
      {
        title: "They're Already Killing Cash to Make This Happen",
        content: "Before they can force everyone onto digital dollars, they need to kill cash. Look around - it's already happening. Banks closing branches. More businesses going 'cashless.' In Europe, they've capped cash payments at 10,000 euros. India banned large bills overnight in 2016 - people woke up and their money wasn't legal anymore. Once cash is gone, digital currency isn't optional. It's the only option.",
      },
    ],
    warningSignals: [
      "Increasing restrictions on cash transactions",
      "Banks reducing branch networks and ATMs",
      "Government incentives for digital payments",
      "CBDC pilot programs launching",
      "Proposals to eliminate large denomination bills",
      "Social credit systems being implemented",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Own Something They Can't Control",
        description: "Physical gold sitting in a vault doesn't care about digital systems. The government can't program it to expire. They can't see when you bought it. They can't freeze it with a keystroke. A retired factory worker from Indiana told us: 'I've got some gold now. Nobody's tracking that. Nobody's telling me what I can spend it on.'",
      },
      {
        step: 2,
        title: "Keep Cash While You Still Can",
        description: "Once digital currency is mandatory, cash becomes illegal. We're not there yet, but we're heading there. Keep a reasonable amount of cash - a few thousand dollars - while it's still an option. When the ATMs go away, you'll be glad you did.",
      },
      {
        step: 3,
        title: "Don't Put Everything in One Basket",
        description: "Some folks keep some assets overseas. Different countries will roll out digital currencies at different speeds. If America goes full surveillance currency but other places don't, having options matters.",
      },
      {
        step: 4,
        title: "Move Retirement Savings to Physical Gold",
        description: "Your 401(k) is already digital - just entries in a computer somewhere. A Gold IRA puts actual gold bars and coins in a vault with your name on it. It's real wealth, not digital promises. And when they try to program your dollars, your gold doesn't care.",
      },
    ],
    goldBenefit: "Here's the thing about gold that matters in a digital currency world: gold is the opposite of programmable money. No government can set an expiration date on your gold. No algorithm decides what you can buy with it. No bureaucrat can freeze it with a mouse click. Gold has meant financial freedom for 5,000 years. As they build systems to control every dollar you spend, gold becomes more important than ever. It's wealth they can't touch.",
    stats: [
      { label: "Countries Developing CBDCs", value: "130+", subtext: "Including USA" },
      { label: "China Digital Yuan Users", value: "260M", subtext: "And growing" },
      { label: "Cash Transactions Declining", value: "70%", subtext: "In past decade" },
      { label: "Gold: Government Control", value: "0%", subtext: "Unseizable" },
    ],
    faqs: [
      {
        question: "Is the US really building this?",
        answer: "The Fed launched FedNow in July 2023 - that's the payment infrastructure that makes digital dollars possible. There are bills in Congress about it right now. Whether it happens in 2 years or 5 years, the direction is clear. They're building the system. The only question is whether you'll have alternatives when they flip the switch.",
      },
      {
        question: "Could they ban gold?",
        answer: "In 1933, FDR made it illegal for citizens to own gold. It happened before, it could happen again. But here's the thing: a lot of people held onto their gold anyway, and enforcement was difficult. The key is having gold before any restrictions, not trying to get it after. Once they announce a ban, it's too late.",
      },
      {
        question: "How does owning gold protect me from digital dollars?",
        answer: "Gold exists outside the digital system entirely. It's sitting in a vault, physical and real. No government can program your gold to expire. No bureaucrat can see what you do with it. No algorithm can freeze it. It's wealth that exists in the real world, not in a government computer. That's the whole point.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "hyperinflation", "bank-failure"],
  },
  {
    slug: "pension-crisis",
    title: "The Pension Crisis: Is Your Retirement at Risk?",
    subtitle: "You worked 30 years because they promised you a pension. But what if they can't pay it? Here's the truth about America's $8 trillion pension hole.",
    metaTitle: "Pension Crisis: Is Your Retirement at Risk?",
    metaDescription: "Pension crisis guide. America's $8 trillion pension shortfall and what it means for your retirement benefits.",
    threatLevel: "critical",
    probability: "Structural certainty",
    timeframe: "Ongoing",
    sections: [
      {
        title: "They Promised You a Pension. Can They Pay It?",
        content: "Here's the number that should keep you up at night: American pensions are $8 trillion short. That's not a typo. Eight trillion dollars that was promised to workers like you - but the money isn't there. State and local government pensions are $4-5 trillion short. Corporate pensions another $3+ trillion. This is money that was supposed to be set aside for your retirement. They spent it. Now what?",
        bullets: [
          "State and local pension shortfall: $4-5 trillion",
          "Corporate pension shortfall: $3+ trillion",
          "Social Security trust fund: Runs dry by 2034",
          "The federal pension insurer (PBGC): Already in the red",
        ],
      },
      {
        title: "Some Pensions Are in Worse Shape Than Others",
        content: "If you're a teacher in Illinois, a city worker in Chicago, or a state employee in New Jersey, you need to pay attention. These pensions have less than half the money they need to pay what they promised. Illinois teachers? 42% funded. Chicago municipal? 23% funded - they have less than a quarter of what they owe. Corporate pensions in manufacturing, airlines, retail? Many have already been cut or dumped.",
        bullets: [
          "Illinois teachers pension: Only 42% funded",
          "New Jersey state pension: Only 50% funded",
          "Chicago city workers: Only 23% funded",
          "If you worked in manufacturing, your company pension might already be gone",
        ],
      },
      {
        title: "What Happens When They Can't Pay",
        content: "Ask the retirees from Detroit. When the city went bankrupt, they lost 4.5% of their pension plus all cost-of-living increases forever. The Teamsters Central States pension proposed 60% cuts - working people who earned $3,000 a month would get $1,200. The federal backup (PBGC) is supposed to help, but it's underfunded too, and it caps what it pays way below what most people were promised. There's no cavalry coming.",
      },
    ],
    warningSignals: [
      "Your pension fund below 80% funded ratio",
      "State or company facing financial distress",
      "Proposals to change benefit formulas",
      "Increased required contributions from workers",
      "Movement toward hybrid or 401(k) plans",
      "Offers of lump-sum buyouts",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Find Out How Bad Your Pension Really Is",
        description: "Request your pension fund's annual report - you have the right to see it. Look for the 'funded ratio.' If it's below 80%, you've got a problem. If it's below 60%, you've got a big problem. A retired teacher from New Jersey told us: 'I wish I'd looked at those numbers ten years ago instead of just trusting the union said it was fine.'",
      },
      {
        step: 2,
        title: "Build a Backup Plan You Control",
        description: "Your pension is a promise from someone else. A Gold IRA is actual gold with your name on it. Nobody can underfund it. Nobody can cut it. A retired firefighter from Ohio said: 'My pension is only 50% funded. So I put 20% of my savings into gold. If the pension gets cut, I've got something to fall back on.'",
      },
      {
        step: 3,
        title: "Think Hard About Any Lump-Sum Offer",
        description: "Some pensions offer you a lump sum to leave. Take a hard look at that offer. If your pension is in trouble, getting your money out now - even at a discount - might be better than watching it get cut later. A retired autoworker from Michigan took the buyout in 2015: 'Best decision I ever made. Two years later they cut benefits 30%.'",
      },
      {
        step: 4,
        title: "Don't Put All Your Eggs in One Basket",
        description: "Have multiple income sources: pension, Social Security, personal savings, and some hard assets like gold. If one leg of the stool breaks, you don't fall down. A retired mail carrier told us: 'I've got my pension, my TSP, and some gold. If any one of them has problems, I'm still okay.'",
      },
    ],
    goldBenefit: "Here's the difference between your pension and gold: your pension is a promise from an institution that might not be able to keep it. Gold is actual metal in a vault with your name on it. Nobody can underfund it. No politician can cut it. No bankruptcy can wipe it out. It's yours - real wealth you control - not a promise that depends on someone else staying solvent for the next 30 years.",
    stats: [
      { label: "Total Pension Shortfall", value: "$8T+", subtext: "And growing" },
      { label: "Underfunded State Plans", value: "40+", subtext: "Below 80% funded" },
      { label: "Social Security Depletion", value: "2034", subtext: "Trust fund empty" },
      { label: "Gold Default Risk", value: "0%", subtext: "No counterparty" },
    ],
    faqs: [
      {
        question: "Can they really cut my pension after I've earned it?",
        answer: "They already have. Detroit retirees had their benefits cut in bankruptcy. The law changed in 2014 to let troubled private pensions cut benefits even to people already retired. Public pensions are harder to cut legally - but 'harder' doesn't mean impossible. Illinois and New Jersey are both trying. If you think your pension is untouchable, ask the Teamsters who got hit with 60% cuts.",
      },
      {
        question: "What about PBGC - doesn't that protect me?",
        answer: "The Pension Benefit Guaranty Corporation is the federal backstop for private pensions. But it caps what it pays. If your pension was $5,000 a month, PBGC might only guarantee $1,200. And here's the thing - PBGC itself is running in the red. It's like insurance from a company that's also broke.",
      },
      {
        question: "Should I take the lump-sum buyout if they offer one?",
        answer: "That depends on how your pension is doing. If it's well-funded (80%+) and you're confident it'll last, the monthly check might be better. But if your pension is shaky? Taking the lump sum gets your money out before potential cuts. A retired steel worker told us: 'I took the buyout and rolled it into gold and CDs. My buddies who didn't got their benefits cut two years later.' Analyze your specific situation carefully.",
      },
    ],
    relatedScenarios: ["stock-market-crash", "dollar-collapse", "bank-failure"],
  },
  {
    slug: "silver-shortage",
    title: "Silver Shortage: Why Supply Is Running Out",
    subtitle: "Every solar panel needs silver. Every electric car. Every smartphone. But they can't mine enough. Here's what that means for silver prices - and your retirement.",
    metaTitle: "Silver Shortage 2026: Is the World Running Out of Silver?",
    metaDescription: "Silver shortage explained. Why supply is running out and how the deficit affects silver prices and your investments.",
    threatLevel: "high",
    probability: "Structural deficit",
    timeframe: "Accelerating",
    sections: [
      {
        title: "They're Using More Silver Than They Can Mine",
        content: "Here's something most people don't know: for four years straight, the world has used more silver than it produced. Every year, the shortage gets worse. Unlike gold, which mostly sits in vaults, silver gets used up - in solar panels, electronics, medical equipment. Once it's in a solar panel, that silver is gone. And we're running through the stockpiles that used to make up the difference.",
        bullets: [
          "Four straight years of silver deficit",
          "Above-ground stockpiles down 50% since 2020",
          "Mine production has been flat for a decade",
          "Most silver comes as a byproduct of mining other metals",
        ],
      },
      {
        title: "Solar Panels and Electric Cars Are Eating All the Silver",
        content: "Every solar panel on every roof needs silver. Every electric car uses twice as much silver as a regular car. Every 5G tower, every smartphone, every hospital machine. The green energy push they keep talking about? It runs on silver. By 2030, just solar panels alone could use 20-30% of all the silver mined in the world. Add EVs and electronics, and the math doesn't work.",
        bullets: [
          "Every solar panel: 20+ grams of silver",
          "Solar demand expected to triple by 2030",
          "Electric cars use 2x the silver of regular cars",
          "5G, smartphones, medical equipment - all need silver",
        ],
      },
      {
        title: "Why They Can't Just Mine More",
        content: "Here's the problem: you can't just decide to mine more silver. Most silver comes out of the ground as a byproduct of copper and zinc mining. There aren't many mines that focus on silver alone. When the economy slows down and copper mining drops, silver production drops too - even if silver prices are high. And opening a new mine? That takes 10-15 years. The shortage is here now.",
      },
    ],
    warningSignals: [
      "COMEX silver inventories declining",
      "Premiums on physical silver rising",
      "Industrial users reporting difficulty sourcing",
      "Silver ETF outflows (physical being pulled from market)",
      "Longer delivery times from mints and dealers",
      "Miners unable to replace depleted reserves",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Get Some Silver While You Still Can",
        description: "In a real shortage, you can't buy silver at any price - there just isn't any. A retired electrician from Texas told us: 'I tried to buy silver eagles during COVID. Sold out everywhere. Dealers had waiting lists. That's when I realized you need to own it before everyone else wants it.'",
      },
      {
        step: 2,
        title: "Buy Recognizable Products",
        description: "Stick with American Silver Eagles, Canadian Maple Leafs, or bars from major refiners. When it's time to sell or trade, everyone recognizes these. Some off-brand coin from who-knows-where? Harder to move. A pawn shop owner told us: 'Eagles I buy all day. Random stuff, I gotta test it, discount it, hassle with it.'",
      },
      {
        step: 3,
        title: "Consider Silver as Part of Your Precious Metals",
        description: "Most folks we talk to put 20-30% of their precious metals in silver, the rest in gold. Silver gives you the same protection as gold, plus it could really move if the shortage gets worse. A retired factory worker from Pennsylvania said: 'Gold is my safety. Silver is my upside. I've got both.'",
      },
      {
        step: 4,
        title: "This Is a Long-Term Play",
        description: "The shortage isn't getting fixed next year. Opening a new mine takes a decade or more. This is a structural problem that could take years to play out. Don't buy silver hoping to flip it next month. Buy it because the math says there won't be enough for the next 10-20 years.",
      },
    ],
    goldBenefit: "Silver is like gold's younger brother - it protects wealth the same way, but it also has this massive industrial demand pulling on it. When solar panels and electric cars need silver and there isn't enough to go around, the price has to rise. The silver-to-gold ratio right now suggests silver is cheap historically. Some folks think if silver just got back to its historical ratio with gold, it could double or triple. That's the upside. The downside protection? Same as gold - it's real metal you own.",
    stats: [
      { label: "Years of Deficit", value: "4+", subtext: "Consecutive" },
      { label: "Solar Silver Demand Growth", value: "300%", subtext: "By 2030" },
      { label: "Silver-to-Gold Ratio", value: "80:1+", subtext: "Historically high" },
      { label: "Above-Ground Stock Decline", value: "50%", subtext: "Since 2020" },
    ],
    faqs: [
      {
        question: "Is the silver shortage actually real?",
        answer: "It's not speculation - it's documented. The Silver Institute (the industry's own research group) confirms four straight years of deficits. COMEX inventories are at multi-decade lows. The London Bullion Market Association has reported tight supply. You can look this up yourself. The numbers are public.",
      },
      {
        question: "Why can't they just mine more silver?",
        answer: "Most silver is a byproduct of copper and zinc mining. There are very few mines that dig for silver specifically. And opening a new mine? That takes 10-15 years of permits, construction, and development. The shortage is happening now. The solution is a decade away. That's why prices have to rise - to make people use less.",
      },
      {
        question: "What happens to silver prices if the shortage gets worse?",
        answer: "Look at history. In the 1970s, silver went from $6 to $50 - more than 8x. In 2011, it hit $50 again. Those were investment-driven spikes. This time, you've got real industrial demand that can't substitute anything else. Solar panels need silver. There's no alternative. If manufacturers are competing for a shrinking supply, prices could go a lot higher than $50.",
      },
    ],
    relatedScenarios: ["silver-squeeze", "dollar-collapse", "hyperinflation"],
  },
  {
    slug: "silver-squeeze",
    title: "Silver Squeeze: What Happens When Everyone Wants Silver at Once",
    subtitle: "In 2021, Reddit almost broke the silver market. The supply was that tight. Now imagine what happens when solar panel makers, EV factories, and investors all compete for the same shrinking supply.",
    metaTitle: "Silver Squeeze 2026: Understanding the Physical Silver Squeeze",
    metaDescription: "Silver squeeze guide. Why the physical silver market is tight and how to position before it happens.",
    threatLevel: "high",
    probability: "Building pressure",
    timeframe: "Trigger dependent",
    sections: [
      {
        title: "Remember What Almost Happened in 2021?",
        content: "In early 2021, people on Reddit tried to squeeze the silver market. Within days, physical silver sold out everywhere. Dealers had waiting lists. Premiums spiked 50-100% above the 'spot' price. And here's the thing - they didn't even succeed. The supply was so tight that just a bunch of retail investors almost broke the market. Now imagine what happens when the shortage gets worse.",
        bullets: [
          "1980: Silver went from $6 to $50 - the Hunt Brothers squeeze",
          "2011: Silver hit $50 again on investment demand",
          "2021: Reddit squeeze exposed how tight physical supply really is",
          "Today: Industrial demand is permanent and growing",
        ],
      },
      {
        title: "Paper Silver vs. Real Silver",
        content: "Here's something Wall Street doesn't want you to know: the futures market trades 100 times more 'paper silver' than actual physical silver exists. That only works as long as most people don't ask for the real metal. But more and more folks are demanding physical delivery. And when you need silver for a solar panel factory, paper silver doesn't help you. The gap between paper prices and what you actually pay for physical metal can get huge when supply is tight.",
        bullets: [
          "Paper silver traded: 100x more than physical supply",
          "More people demanding actual metal delivery",
          "Physical premiums have spiked 50-100% above 'spot' price",
          "Factories need real silver - paper doesn't make solar panels",
        ],
      },
      {
        title: "This Time Is Different - And Not in a Good Way",
        content: "The 1980 squeeze was about investors trying to corner the market. The 2011 spike was investment demand. But now? You've got permanent industrial demand that didn't exist before. Solar panels need silver. Electric cars need silver. 5G needs silver. These industries can't substitute. They HAVE to have silver. So when supply gets tight, they'll pay whatever it takes. Add investment demand on top of that, and you've got a recipe for a real squeeze.",
      },
    ],
    warningSignals: [
      "COMEX registered silver inventory declining",
      "Dealer premiums rising sharply",
      "Delivery delays from mints",
      "Industrial users stockpiling",
      "ETF silver being withdrawn for physical delivery",
      "Backwardation in silver futures",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Own Real Silver, Not Paper Promises",
        description: "When the squeeze hits, paper silver (ETFs, futures) might not track real prices. A Silver IRA puts actual physical bars and coins in a vault with your name on it. You own the metal, not a promise. A retired machinist from Cleveland told us: 'I had a silver ETF. During the 2021 squeeze, it barely moved while physical premiums went crazy. Never again.'",
      },
      {
        step: 2,
        title: "Buy Before Everyone Else Tries To",
        description: "In 2021, dealers had waiting lists. Premiums hit 50-100%. That's if you could find any at all. The time to buy silver is before the squeeze, not during. Once it starts, you're competing with millions of other people and industrial buyers who need it more than you.",
      },
      {
        step: 3,
        title: "Get Different Types of Silver",
        description: "Own some coins (Eagles, Maple Leafs), some bars. During the 2021 squeeze, different products had different availability. One dealer was out of Eagles but had bars. Another had rounds but no bars. Having variety gives you options.",
      },
      {
        step: 4,
        title: "Think Years, Not Weeks",
        description: "Squeezes can be volatile - big spikes, then pullbacks. Don't panic sell on a dip. The underlying shortage isn't going away. A retired postal worker told us: 'I bought silver in 2019. It bounced around. I just held on. Now I'm up 60%. Patience paid off.'",
      },
    ],
    goldBenefit: "Physical silver in an IRA gives you two things: protection when markets go crazy, and upside if the squeeze plays out. Unlike paper silver or mining stocks, actual physical silver can't be diluted, defaulted on, or played with by Wall Street. It sits in a vault with your name on it. When the squeeze comes, you're not hoping someone honors their promise. You own the metal.",
    stats: [
      { label: "1980 Silver Spike", value: "733%", subtext: "$6 to $50" },
      { label: "Paper vs Physical", value: "100:1", subtext: "Leverage" },
      { label: "Physical Premium Range", value: "50-100%", subtext: "In tight markets" },
      { label: "2021 Reddit Squeeze", value: "#1", subtext: "WallStreetBets trend" },
    ],
    faqs: [
      {
        question: "Could a silver squeeze actually happen?",
        answer: "It's already happened - multiple times. 1980, 2011, 2021. Each time, prices spiked and physical silver became hard to find. The difference now is you've got permanent industrial demand on top of investment demand. Solar panels, EVs, electronics - they all need silver and can't substitute. The conditions are better than ever for a squeeze. It's not if, it's when.",
      },
      {
        question: "Why didn't the Reddit squeeze work in 2021?",
        answer: "Actually, it partially did. Physical silver sold out everywhere. Premiums spiked 50-100%. Dealers had waiting lists. What didn't break was the paper market - the futures and ETFs. That's because most of that is just paper promises, not real metal. But the 2021 squeeze showed just how tight the physical market really is. A little bit of demand overwhelmed supply. Imagine what happens when industrial demand keeps growing.",
      },
      {
        question: "What would trigger a full squeeze?",
        answer: "Could be a lot of things. A big industrial user panics and starts stockpiling. A currency crisis sends everyone running to precious metals. Someone calls the bluff on COMEX and demands actual delivery. A major investment fund decides to take physical instead of cash settlement. Any of these could start a squeeze that feeds on itself - higher prices, more buyers, even higher prices.",
      },
    ],
    relatedScenarios: ["silver-shortage", "dollar-collapse", "stock-market-crash"],
  },
  {
    slug: "great-depression-2",
    title: "Great Depression 2.0: Could It Happen Again?",
    subtitle: "Your grandparents told you about the Depression. Banks closed. Life savings gone. People who had everything suddenly had nothing. The conditions that caused it? They're back.",
    metaTitle: "Great Depression 2.0: Is Another Economic Collapse Coming? 2026",
    metaDescription: "Great Depression 2.0 guide. Warning signs, historical parallels, and how to protect your retirement savings.",
    threatLevel: "critical",
    probability: "Growing concern",
    timeframe: "Unknown",
    sections: [
      {
        title: "The Same Warning Signs Are Flashing",
        content: "You've probably heard people at work, at church, at the union hall talking about it. Something feels wrong. Prices are crazy. Banks are failing. The stock market seems disconnected from reality. You're not imagining it. The conditions that led to the Great Depression in 1929 - record debt, wild speculation, wealth concentrated at the top - they're all back. And the last time this happened, ordinary working people lost everything.",
        bullets: [
          "Wealth inequality hasn't been this bad since 1929",
          "Government debt is the highest in history",
          "Banks started failing again in 2023",
          "The money printing since 2020 has been unprecedented",
          "Regular people can't afford housing while billionaires multiply",
        ],
      },
      {
        title: "History Doesn't Repeat, But It Rhymes",
        content: "The 1920s had the stock market boom. We've had the tech boom. Back then, people borrowed money to buy stocks, convinced prices could only go up. Today, margin debt is at record levels. Back then, the Fed raised interest rates into a weakening economy. Sound familiar? The details are different, but the pattern is the same.",
        bullets: [
          "The Roaring 20s stock bubble - tech stocks today",
          "Massive borrowing to speculate - same now with margin debt",
          "Wealth concentrated at the very top - check",
          "Banks overextended and fragile - 2023 bank failures proved it",
          "Fed tightening into weakness - happening right now",
        ],
      },
      {
        title: "What Would a Modern Depression Look Like?",
        content: "A Depression today would spread faster than 1929. Back then, news traveled slowly. Today, a bank run starts with a tweet. Silicon Valley Bank went from 'healthy' to closed in 48 hours. Supply chains would break - we saw a taste of that during COVID. And the government response? Print more money, debasing whatever you have left in savings. The people who got wiped out last time were the ones who thought 'it can't happen here.'",
        bullets: [
          "Bank runs spread in hours via social media, not weeks",
          "Supply chains would collapse - empty shelves like COVID, but worse",
          "Your digital money could be frozen or controlled",
          "Government bailouts would destroy the dollar's value",
          "The working class would be hit hardest, like always",
        ],
      },
    ],
    warningSignals: [
      "Inverted yield curve (has predicted every recession since 1955)",
      "Banking sector stress and failures",
      "Widening credit spreads",
      "Declining consumer confidence",
      "Corporate earnings contraction",
      "Rising unemployment claims",
      "Flight to safety (gold, treasuries rising)",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Don't Trust All Your Money to the Banks",
        description: "During the Depression, 9,000 banks failed. People who had their life savings in one bank lost everything. Today's FDIC covers up to $250,000 - but as we covered, their fund is only 1.3% of what they insure. Spread your money around. Keep some outside the banking system entirely.",
      },
      {
        step: 2,
        title: "Own Things That Hold Value When Paper Doesn't",
        description: "In the 1930s, stocks lost 89% of their value. Gold held steady - and actually went up when FDR revalued it. The people who came through the Depression with their wealth intact owned real things: gold, land, property. A retired ironworker told us: 'My grandfather had gold coins during the Depression. Sold one to buy groceries for a year. That's what real money looks like.'",
      },
      {
        step: 3,
        title: "Get Out of Debt",
        description: "During the Depression, people who owed money got crushed. Dollars became scarce. Debts couldn't be paid. Farms and homes were lost. If you've got a mortgage, car payment, credit cards - pay them down. A retired teacher said: 'First thing I did when I got worried was pay off the house. Now whatever happens, I've got somewhere to live.'",
      },
      {
        step: 4,
        title: "Have Skills and Side Income",
        description: "Jobs disappeared overnight in the Depression. 25% unemployment. The people who survived had multiple skills, side businesses, ways to make money outside their main job. Think about what you can do if your job disappears tomorrow.",
      },
    ],
    goldBenefit: "Here's what happened to gold during the Great Depression: while stocks crashed 89%, gold held its value. Then FDR revalued it from $20.67 to $35 - a 69% gain. Gold mining stocks were some of the only investments that went UP during the Depression. Why? Because when paper money fails, people run to real money. That's what gold is. It's what it's always been.",
    stats: [
      { label: "1929 Stock Crash", value: "-89%", subtext: "Dow Jones peak to trough" },
      { label: "Bank Failures 1930-33", value: "9,000+", subtext: "Taking deposits with them" },
      { label: "Unemployment Peak", value: "25%", subtext: "1933" },
      { label: "Gold Performance", value: "+69%", subtext: "Revalued 1933-34" },
    ],
    faqs: [
      {
        question: "Could another Great Depression really happen?",
        answer: "The people who said '2008 can't happen' were wrong. The conditions today look a lot like 1929: record debt, extreme wealth inequality, fragile banks, wild speculation. The difference is governments now try to print their way out of problems - which creates its own disaster (inflation and currency collapse). Bottom line: it's possible, and pretending it isn't is what people did in 1928.",
      },
      {
        question: "Didn't we already survive 2008? Aren't we safer now?",
        answer: "2008 was saved by trillions in bailouts, zero interest rates, and massive money printing. That didn't fix the problems - it postponed them and created new ones. Debt is higher now than in 2008. Banks are still fragile - three big ones failed in 2023. And the Fed has less room to cut rates because they never got them back to normal. We're not safer. We're more fragile.",
      },
      {
        question: "What can I actually do to protect my retirement?",
        answer: "Own real things, not just paper promises. Gold and silver held value during the Depression when stocks lost 89%. Pay down your debt - people with mortgages got crushed in the 1930s. Keep money in multiple banks, and keep some outside the banking system in a Gold IRA. Don't put all your eggs in one basket. The people who survived the Depression were the ones who prepared before it hit.",
      },
    ],
    relatedScenarios: ["dollar-collapse", "bank-failure", "stock-market-crash"],
  },
  {
    slug: "is-vanguard-safe",
    title: "Is Vanguard Safe? What Happens If Your Brokerage Fails",
    subtitle: "You've got $500,000 at Vanguard or Fidelity. You assume it's safe. But what if the brokerage fails? Here's what you need to know - and what they don't tell you.",
    metaTitle: "Is Vanguard Safe? Brokerage Failure Risks Explained 2026",
    metaDescription: "Is Vanguard safe? Brokerage failure risks, SIPC limits, and how to protect your retirement savings.",
    threatLevel: "high",
    probability: "Low but possible",
    timeframe: "Unpredictable",
    sections: [
      {
        title: "Is Your Money Really Safe at Vanguard?",
        content: "You've probably got $300,000, $500,000, maybe more at Vanguard, Fidelity, or Schwab. You assume it's completely safe because they're big names. And most of the time, it probably is. But there are risks that most people never think about - and your broker isn't going to bring them up.",
        bullets: [
          "SIPC insurance covers up to $500,000 - not unlimited",
          "Cash is only covered up to $250,000",
          "Your stocks and funds are held in your name, which helps",
          "But complex products (options, futures, foreign stuff) may not be protected",
          "In a real crisis, the protection system could get overwhelmed",
        ],
      },
      {
        title: "SIPC Is Not the Same as FDIC",
        content: "A lot of people think SIPC is like FDIC - insurance that makes you whole if things go bad. It's similar, but there are important differences. SIPC covers up to $500,000 total, with only $250,000 for cash. And here's the key thing: it doesn't protect you from investment losses. If your stocks drop 50%, that's on you. SIPC only kicks in if the brokerage itself fails.",
        bullets: [
          "Total coverage: $500,000 per customer",
          "Cash portion: Only $250,000",
          "Does NOT protect you if your stocks go down",
          "Does NOT cover commodities, forex, or some complex products",
          "Getting your money back could take months if a brokerage fails",
        ],
      },
      {
        title: "It's Happened Before",
        content: "Think big brokerages can't fail? MF Global went under in 2011 - $1.6 billion in customer money went missing. Lehman Brothers was the largest bankruptcy in US history. Bear Stearns had to be sold in an emergency weekend deal. Eventually, in most cases, customers got their money back. But it took months. And there were a lot of sleepless nights.",
        bullets: [
          "MF Global (2011): $1.6 billion in customer funds just... gone",
          "Lehman Brothers (2008): The biggest bankruptcy ever",
          "Bear Stearns (2008): Emergency sale to prevent total collapse",
          "Customers eventually got most money back - but it took months of waiting",
        ],
      },
    ],
    warningSignals: [
      "Brokerage stock price dropping significantly",
      "Credit rating downgrades",
      "Executive departures or insider selling",
      "Regulatory actions or investigations",
      "Significant litigation or settlement announcements",
      "Difficulty reaching customer service or accessing accounts",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Don't Keep Everything at One Brokerage",
        description: "If you've got $600,000, split it up. Some at Vanguard, some at Fidelity, some at Schwab. If one has problems, you've still got the others. A retired factory supervisor from Michigan told us: 'I had everything at one place until 2008 scared me. Now I've got three accounts at three different firms. Sleep better.'",
      },
      {
        step: 2,
        title: "Know What's Actually Protected",
        description: "SIPC covers up to $500,000 per customer. If you've got more than that at one brokerage, you're over the limit. And only $250,000 of that can be cash. Know your numbers. A lot of folks find out the limits only after something goes wrong.",
      },
      {
        step: 3,
        title: "Keep Some Wealth Outside the Brokerage System",
        description: "Physical gold in a depository isn't at Vanguard or Fidelity. It's actual metal in a vault with your name on it. If every brokerage in America had problems tomorrow, your gold would still be sitting there. A retired teacher told us: 'Part of my retirement is at Vanguard. Part is in gold in a depository. I don't have to worry if either one has problems.'",
      },
      {
        step: 4,
        title: "Keep Your Own Records",
        description: "Print out your statements. Download them. Keep copies. If a brokerage fails and everything goes digital chaos, you want proof of what you owned. A retired postal worker learned this the hard way: 'After 2008, I started printing every statement. Never know when you'll need to prove something.'",
      },
    ],
    goldBenefit: "Here's the thing about physical gold in a Gold IRA: it's not on Vanguard's books. It's not at Fidelity. It's actual metal in a secure depository with your name on it. Vanguard could go bankrupt tomorrow and your gold wouldn't care - it's not theirs, it's yours. That's different from stocks and funds, which only exist as entries in their computer system. Gold exists in the real world.",
    stats: [
      { label: "SIPC Coverage Maximum", value: "$500K", subtext: "Per customer" },
      { label: "SIPC Cash Maximum", value: "$250K", subtext: "Portion for cash" },
      { label: "MF Global Missing", value: "$1.6B", subtext: "Customer funds (2011)" },
      { label: "Physical Gold Risk", value: "0", subtext: "No counterparty" },
    ],
    faqs: [
      {
        question: "Is Vanguard actually likely to fail?",
        answer: "Probably not. Vanguard is huge - over $7 trillion in assets. It has a unique structure where it's owned by its own funds, which reduces some risks. But 'probably not' isn't the same as 'definitely not.' Lehman Brothers was huge too. The point isn't to panic about Vanguard specifically. It's to not put all your eggs in any one basket - even a basket that looks really safe.",
      },
      {
        question: "What happens to my index funds if Vanguard did fail?",
        answer: "Your shares are technically held in your name, separate from Vanguard's own assets. In a failure, they'd probably get transferred to another company. But here's the thing - that process takes time. Could be weeks, could be months. During that time, you can't access your money, you can't trade, you can't do anything. You just wait and hope it gets sorted out.",
      },
      {
        question: "Should I move my money out of Vanguard?",
        answer: "There's no need to panic and move everything out of Vanguard. But there's also no reason to have 100% of your retirement at any single institution. Split it up. Keep some at Vanguard, some at Fidelity, some in a Gold IRA with physical metal. Then you're not depending on any one company staying healthy. That's just common sense.",
      },
    ],
    relatedScenarios: ["bank-failure", "stock-market-crash", "dollar-collapse"],
  },
  {
    slug: "banks-freeze-account",
    title: "Can Banks Freeze Your Account? It Happens More Than You Think",
    subtitle: "One day you have $500,000 in the bank. The next day, you can't access a dime. It happens to regular people all the time. Here's what you need to know.",
    metaTitle: "Can Banks Freeze Your Account? What You Need to Know 2026",
    metaDescription: "Can banks freeze your account? Yes. Learn why it happens, how long money stays locked, and how to protect yourself.",
    threatLevel: "high",
    probability: "Common occurrence",
    timeframe: "Immediate risk",
    sections: [
      {
        title: "Yes, Your Bank Can Lock You Out of Your Own Money",
        content: "You assume the money in your bank is always available. It's yours, right? Not exactly. Banks can freeze your account without asking you first. One day you go to pay a bill or withdraw cash, and your card is declined. Your checks bounce. Your direct deposit sits there but you can't touch it. It happens to regular people every day - and it can take weeks or months to fix.",
        bullets: [
          "Banks can freeze your account for 'suspicious activity' - even if you did nothing wrong",
          "The IRS can freeze your account without warning if they think you owe taxes",
          "A court order from a lawsuit can lock your account instantly",
          "Joint accounts can be frozen because of the OTHER person's problems",
          "Getting unfrozen can take days, weeks, or even months",
        ],
      },
      {
        title: "This Happens More Than You'd Think",
        content: "Most people assume account freezes only happen to criminals or tax cheats. Wrong. A large cash deposit looks suspicious. A wire transfer to help your kid buy a house triggers an alert. You forget about an old debt and someone gets a court judgment. Suddenly your account is frozen and you're scrambling to prove you're not a criminal just to access your own money.",
        bullets: [
          "Large or unusual deposits can trigger a fraud alert",
          "IRS can freeze accounts for taxes they think you owe",
          "Old debts or lawsuits can result in garnishment freezes",
          "Back child support can lock your account",
          "Even banks 'investigating identity theft' can freeze you out",
          "Being flagged for 'suspicious activity' - even mistakenly",
        ],
      },
      {
        title: "When Governments Freeze Everyone's Accounts",
        content: "Think it can't happen here? Look around the world. In Cyprus in 2013, the government closed all banks for two weeks. When they reopened, you could only take out 100 euros a day - from your own account. Greece did the same thing in 2015. Lebanon froze dollar withdrawals for years. India banned 86% of its currency overnight. Argentina converted everyone's dollar savings to worthless pesos. These weren't third-world countries. They were normal places where normal people woke up one day and couldn't access their money.",
        bullets: [
          "Cyprus 2013: Banks closed 2 weeks. Limit 100 euros/day after.",
          "Greece 2015: Banks closed 3 weeks. ATMs limited to 60 euros/day.",
          "Lebanon 2019-now: Dollar accounts frozen. Currency lost 90%+.",
          "India 2016: 86% of currency banned overnight.",
          "Argentina 2001: Dollar savings forcibly converted to collapsed peso.",
        ],
      },
    ],
    warningSignals: [
      "Receiving notifications about suspicious activity",
      "Letters from IRS or state tax agency about debt",
      "Legal notices about lawsuits or judgments",
      "Bank asking for additional identity verification",
      "Large or unusual transactions being questioned",
      "Economic or banking sector instability in the news",
    ],
    protectionSteps: [
      {
        step: 1,
        title: "Keep Money at Multiple Banks",
        description: "If one account gets frozen, you need access to another one. Don't put your whole $600,000 in one place. A retired trucker told us: 'My main bank froze my account over some paperwork mix-up. Took three weeks to fix. Good thing I had my other account at the credit union or I couldn't have paid my bills.'",
      },
      {
        step: 2,
        title: "Keep Cash at Home",
        description: "Have 2-4 weeks of living expenses in physical cash, somewhere safe. When your account is frozen or the banks close, cash is king. You can pay for groceries, gas, prescriptions. A retired nurse said: 'I keep $3,000 in cash at home. Sounds old-fashioned but when everything went crazy in 2008, I was the only one on my block who could buy groceries.'",
      },
      {
        step: 3,
        title: "Keep Some Wealth Outside the Banking System Entirely",
        description: "Physical gold in a depository isn't at any bank. It can't be frozen by a bank because it's not in the banking system. It's actual metal in a vault with your name on it. A retired factory worker put it simply: 'My gold doesn't care what's happening at Chase or Bank of America. It's mine, and nobody can push a button and lock me out.'",
      },
      {
        step: 4,
        title: "Stay Current on Taxes and Obligations",
        description: "A lot of freezes happen because of old taxes, judgments, or child support arrears. If you owe the IRS, work out a payment plan. Deal with that old judgment before it becomes a freeze. Prevention is a lot easier than trying to unfreeze an account.",
      },
    ],
    goldBenefit: "Physical gold in a private depository doesn't exist in the banking system. The bank can't freeze it because the bank doesn't have it. It's sitting in a vault with your name on it, segregated and allocated. While your bank account can be locked with one keystroke from a government agency, your gold is outside their reach. That's the whole point - wealth that exists in the real world, not in someone else's computer system.",
    stats: [
      { label: "Cyprus Bank Holiday", value: "14 days", subtext: "Banks closed (2013)" },
      { label: "Greece ATM Limit", value: "€60/day", subtext: "For weeks (2015)" },
      { label: "Lebanon Currency Loss", value: "-90%", subtext: "While frozen" },
      { label: "Gold Freeze Risk", value: "0", subtext: "Not in banking system" },
    ],
    faqs: [
      {
        question: "Can they really freeze my account without telling me first?",
        answer: "Absolutely. The IRS can issue a tax levy and freeze your account without any warning. You find out when your debit card gets declined at the grocery store. Court orders work the same way. Banks can freeze you for 'suspicious activity' while they investigate. In all these cases, you're frozen first, questions later.",
      },
      {
        question: "How long can they keep my money locked up?",
        answer: "Depends on why they froze it. A fraud investigation might be a few days. An IRS tax levy? Until you work out a deal with them, which could take months. A court judgment from a lawsuit? Until the legal case is resolved - could be years. The whole time, your money just sits there and you can't touch it.",
      },
      {
        question: "Could what happened in Cyprus happen here in America?",
        answer: "People in Cyprus, Greece, and Argentina all said 'it can't happen here' right before it happened there. When financial systems get stressed, governments prioritize 'system stability' over your ability to access your own money. Bank holidays, withdrawal limits, capital controls - these have happened throughout history whenever systems get stressed. No reason to think America is immune.",
      },
    ],
    relatedScenarios: ["bank-failure", "dollar-collapse", "cbdc-control"],
  },
];

export function getScenarioBySlug(slug: string): Scenario | undefined {
  return scenarios.find((s) => s.slug === slug);
}

export function getAllScenarioSlugs(): string[] {
  return scenarios.map((s) => s.slug);
}

export function getRelatedScenarios(currentSlug: string): Scenario[] {
  const current = getScenarioBySlug(currentSlug);
  if (!current) return [];

  return current.relatedScenarios
    .map((slug) => getScenarioBySlug(slug))
    .filter((s): s is Scenario => s !== undefined);
}
