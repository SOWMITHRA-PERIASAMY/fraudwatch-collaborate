export type BankId = "A" | "B" | "C" | "D";
export type RoleId = BankId | "ANALYST";
export type Verdict = "NORMAL" | "SUSPICIOUS";

export interface SimTransaction {
  id: string;
  amount: number;
  contextLabel: string;
  contextValue: string;
  description: string;
  time: string;
  correct: Verdict;
}

export interface BankConfig {
  id: BankId;
  name: string;
  focus: string;
  icon: "card" | "pin" | "clock" | "activity";
  tagline: string;
  insight: string;
  signalLabel: string;
  indicatorOptions: string[];
  correctIndicator: string;
  transactions: SimTransaction[];
}

export const BANKS: BankConfig[] = [
  {
    id: "A",
    name: "Bank A",
    focus: "Payment Monitoring",
    icon: "card",
    tagline: "Watches transaction amounts and merchant categories.",
    insight: "High-value transaction detected",
    signalLabel: "HIGH AMOUNT",
    indicatorOptions: [
      "Unusually high transaction amount",
      "Unusual merchant category",
      "Rapid transaction activity",
      "Unusual location",
    ],
    correctIndicator: "Unusually high transaction amount",
    transactions: [
      {
        id: "A1",
        amount: 850,
        contextLabel: "Merchant",
        contextValue: "Local Grocery",
        description: "Normal weekday purchase matching usual spending.",
        time: "Mon 10:12",
        correct: "NORMAL",
      },
      {
        id: "A2",
        amount: 1250,
        contextLabel: "Merchant",
        contextValue: "Fuel Station",
        description: "Normal amount and category.",
        time: "Mon 18:40",
        correct: "NORMAL",
      },
      {
        id: "A3",
        amount: 48900,
        contextLabel: "Merchant",
        contextValue: "Luxury Electronics",
        description: "Very high amount compared with normal purchases.",
        time: "Tue 23:07",
        correct: "SUSPICIOUS",
      },
      {
        id: "A4",
        amount: 2100,
        contextLabel: "Merchant",
        contextValue: "Restaurant",
        description: "Moderate amount and ordinary category.",
        time: "Wed 13:25",
        correct: "NORMAL",
      },
      {
        id: "A5",
        amount: 3400,
        contextLabel: "Merchant",
        contextValue: "Online Clothing",
        description: "Slightly higher than average but not extreme.",
        time: "Thu 20:02",
        correct: "NORMAL",
      },
    ],
  },
  {
    id: "B",
    name: "Bank B",
    focus: "Location Monitoring",
    icon: "pin",
    tagline: "Tracks where each payment is initiated from.",
    insight: "Unusual location detected",
    signalLabel: "UNUSUAL LOCATION",
    indicatorOptions: [
      "Unusual geographical location",
      "Unusually high transaction amount",
      "Rapid transaction activity",
      "Unusual merchant category",
    ],
    correctIndicator: "Unusual geographical location",
    transactions: [
      {
        id: "B1",
        amount: 1100,
        contextLabel: "Location",
        contextValue: "Chennai",
        description: "Usual transaction location.",
        time: "Mon 09:30",
        correct: "NORMAL",
      },
      {
        id: "B2",
        amount: 2300,
        contextLabel: "Location",
        contextValue: "Bengaluru",
        description: "Known travel location.",
        time: "Mon 19:15",
        correct: "NORMAL",
      },
      {
        id: "B3",
        amount: 46500,
        contextLabel: "Location",
        contextValue: "Dubai",
        description: "Unusual location immediately after a Chennai transaction.",
        time: "Tue 23:09",
        correct: "SUSPICIOUS",
      },
      {
        id: "B4",
        amount: 900,
        contextLabel: "Location",
        contextValue: "Chennai",
        description: "Usual location and normal amount.",
        time: "Wed 11:05",
        correct: "NORMAL",
      },
      {
        id: "B5",
        amount: 1750,
        contextLabel: "Location",
        contextValue: "Coimbatore",
        description: "Plausible domestic travel location.",
        time: "Thu 16:48",
        correct: "NORMAL",
      },
    ],
  },
  {
    id: "C",
    name: "Bank C",
    focus: "Transaction Velocity",
    icon: "clock",
    tagline: "Measures how many payments happen, how fast.",
    insight: "Rapid transaction activity detected",
    signalLabel: "RAPID ACTIVITY",
    indicatorOptions: [
      "Rapid transaction activity",
      "Unusual geographical location",
      "Abnormal customer behaviour",
      "Unusual merchant category",
    ],
    correctIndicator: "Rapid transaction activity",
    transactions: [
      {
        id: "C1",
        amount: 700,
        contextLabel: "Type",
        contextValue: "Online Utility Payment",
        description: "One normal transaction during the hour.",
        time: "Mon 08:55",
        correct: "NORMAL",
      },
      {
        id: "C2",
        amount: 950,
        contextLabel: "Type",
        contextValue: "Food Delivery",
        description: "Normal timing and frequency.",
        time: "Mon 21:20",
        correct: "NORMAL",
      },
      {
        id: "C3",
        amount: 12400,
        contextLabel: "Type",
        contextValue: "Online Store",
        description: "One transaction followed by four more attempts within two minutes.",
        time: "Tue 23:10",
        correct: "SUSPICIOUS",
      },
      {
        id: "C4",
        amount: 1300,
        contextLabel: "Type",
        contextValue: "Fuel",
        description: "Normal transaction frequency.",
        time: "Wed 08:12",
        correct: "NORMAL",
      },
      {
        id: "C5",
        amount: 2000,
        contextLabel: "Type",
        contextValue: "Restaurant",
        description: "Normal frequency.",
        time: "Thu 20:35",
        correct: "NORMAL",
      },
    ],
  },
  {
    id: "D",
    name: "Bank D",
    focus: "Customer Behaviour",
    icon: "activity",
    tagline: "Compares spending against the customer's own habits.",
    insight: "Abnormal spending behaviour detected",
    signalLabel: "ABNORMAL BEHAVIOUR",
    indicatorOptions: [
      "Abnormal customer behaviour",
      "Rapid transaction activity",
      "Unusual geographical location",
      "Unusually high transaction amount",
    ],
    correctIndicator: "Abnormal customer behaviour",
    transactions: [
      {
        id: "D1",
        amount: 1200,
        contextLabel: "Category",
        contextValue: "Groceries",
        description: "Matches regular customer behaviour.",
        time: "Mon 10:40",
        correct: "NORMAL",
      },
      {
        id: "D2",
        amount: 1600,
        contextLabel: "Category",
        contextValue: "Books",
        description: "Matches usual purchase category.",
        time: "Mon 17:22",
        correct: "NORMAL",
      },
      {
        id: "D3",
        amount: 45800,
        contextLabel: "Category",
        contextValue: "Luxury Electronics",
        description:
          "Customer normally makes small purchases; this is a major behaviour change.",
        time: "Tue 23:11",
        correct: "SUSPICIOUS",
      },
      {
        id: "D4",
        amount: 1100,
        contextLabel: "Category",
        contextValue: "Food",
        description: "Normal behaviour.",
        time: "Wed 12:50",
        correct: "NORMAL",
      },
      {
        id: "D5",
        amount: 2200,
        contextLabel: "Category",
        contextValue: "Transport",
        description: "Normal customer behaviour.",
        time: "Thu 09:05",
        correct: "NORMAL",
      },
    ],
  },
];

export const getBank = (id: BankId) => BANKS.find((b) => b.id === id)!;

export const SCORE_CRITERIA = [
  { key: "identify", label: "Correctly identifies suspicious activity", max: 3 },
  { key: "reason", label: "Gives valid reason", max: 2 },
  { key: "indicator", label: "Shares useful fraud indicator", max: 2 },
  { key: "collab", label: "Participates in collaboration", max: 1 },
  { key: "evidence", label: "Supports final decision with evidence", max: 2 },
] as const;

export type ScoreKey = (typeof SCORE_CRITERIA)[number]["key"];

export const HOW_IT_WORKS = [
  {
    step: "STEP 1",
    title: "Analyse Locally",
    body: "Each bank examines its own transaction data.",
  },
  {
    step: "STEP 2",
    title: "Detect Patterns",
    body: "Each bank identifies suspicious patterns.",
  },
  {
    step: "STEP 3",
    title: "Share Insights",
    body: "Banks share fraud indicators rather than raw customer records.",
  },
  {
    step: "STEP 4",
    title: "Collaborate",
    body: "The combined insights produce a stronger fraud alert.",
  },
];

export const VIVA_QA = [
  {
    q: "What is federated learning?",
    a: "It is a way of learning from data held in many places. Each participant trains on its own local data and shares only model updates or summary insights, not the raw records.",
  },
  {
    q: "Why is federated learning useful for banks?",
    a: "Banks hold sensitive customer data they cannot legally or safely share. Federated learning lets them benefit from each other's patterns while keeping raw data in-house.",
  },
  {
    q: "What is fraud detection?",
    a: "It is spotting transactions that do not fit a customer's normal pattern and are likely to be unauthorised or criminal.",
  },
  {
    q: "What fraud indicators were used?",
    a: "Unusually high transaction amount, unusual geographical location, rapid transaction activity and abnormal customer behaviour.",
  },
  {
    q: "Why shouldn't banks simply share all transaction data?",
    a: "Raw transaction data is private, regulated and valuable. Pooling it creates privacy risk, legal problems and a single point of failure.",
  },
  {
    q: "What does each bank contribute?",
    a: "Bank A contributes amount signals, Bank B location signals, Bank C velocity signals and Bank D behaviour signals — each a small, non-identifying piece of the picture.",
  },
  {
    q: "What is the advantage of combining indicators?",
    a: "One weak signal can be a false alarm. Four independent signals pointing at the same transaction give much higher confidence.",
  },
  {
    q: "What is the difference between centralized learning and federated learning?",
    a: "Centralized learning copies all raw data into one place and trains there. Federated learning keeps data where it is and only moves learning results.",
  },
  {
    q: "Is this a real federated-learning implementation?",
    a: "No. This is an educational classroom simulation of the idea. No real models, banks or customer data are involved.",
  },
  {
    q: "What is the main takeaway?",
    a: "Organisations can collaborate on detection without giving up privacy: local data, local analysis, shared insights, collaborative decision.",
  },
];

export const ACTIVITY_STEPS = [
  { title: "Introduction", minutes: 2, detail: "Introduce the scenario, the four banks and the roles." },
  { title: "Local Analysis", minutes: 3, detail: "Each bank reviews its own five transactions." },
  { title: "Share Insights", minutes: 4, detail: "Each bank announces only its fraud indicator." },
  { title: "Final Decision", minutes: 2, detail: "The room votes on the combined fraud signal." },
  { title: "Debrief", minutes: 2, detail: "Explain federated learning and the privacy takeaway." },
];

export const OPENING_SPEECH = `Good morning everyone. My VAC activity is called Fraud Alert Room, and it is a role simulation on collaborative fraud detection using federated learning.

Here is the situation. Imagine four different banks. Each one has its own customers, its own transactions and its own private database. A fraudster steals one customer's card details and starts using the card across several services. No single bank can see the whole story, because each bank only sees its own slice of activity.

In this room, four of you will act as those banks. Bank A monitors payment amounts and merchant categories. Bank B monitors the location of every transaction. Bank C monitors transaction velocity, which means how many payments happen and how quickly. Bank D monitors customer behaviour, comparing spending against that customer's normal habits. One more person will act as the Fraud Analyst, who coordinates the room.

Each bank will receive five transactions and will mark each one as normal or suspicious. You analyse only your own data. You do not show your transaction list to any other bank, and you do not read anyone else's list.

After the local analysis, something important happens. Instead of sending your raw transaction records to a central database, you will share only one thing: your fraud indicator. For example, "I detected an unusually high transaction amount." That single sentence carries the learning, but it does not expose your customer's data.

That is exactly the idea behind federated learning. In real federated learning, each organisation trains a model on its own local data and shares only model updates or aggregated information with a central coordinator. The raw data never leaves the organisation, yet everyone benefits from the combined intelligence.

At the end, the Fraud Analyst will combine all four indicators. You will see that one signal alone might be a false alarm, but four independent signals pointing at the same customer produce a very strong fraud alert.

Please remember that everything here is fictional and this is an educational simulation, not a real banking system. Let us begin.`;

export const CLOSING_SPEECH = `Let me close by summarising what we just demonstrated.

We started with four banks, four separate datasets and no shared database. Each bank analysed only its own five transactions. Bank A found an unusually high transaction amount. Bank B found an unusual geographical location. Bank C found rapid transaction activity within a two-minute window. Bank D found a major change in customer behaviour.

On its own, each of those findings is weak evidence. A large purchase can be genuine. Travel can explain a foreign location. A burst of retries can just be a bad internet connection. But the moment we placed the four indicators side by side, the picture became clear, and the room correctly reached a high-risk fraud alert.

Notice what we did not do. We never merged the four databases. No bank saw another bank's customer records. The only things that travelled between the banks were high-level fraud indicators. That is the core lesson of federated learning: move the learning, not the data.

This matters far beyond banking. Hospitals can improve diagnosis models without sharing patient files. Phone keyboards improve predictions without uploading everything you type. Any group of organisations that holds sensitive data can collaborate on a shared model while respecting privacy and regulation.

The takeaway I want you to carry from this activity is a single sentence: local data, local analysis, shared insights, collaborative detection.

Finally, a reminder that this was a classroom simulation with fictional banks and fictional transactions. It illustrates the concept; it is not a real fraud-detection system. Thank you for taking part and for making the Fraud Alert Room work.`;
