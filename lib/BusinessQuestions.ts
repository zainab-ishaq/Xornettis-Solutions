export interface BusinessQuestion {
  id: string;
  question: string;
  field: string;
  options?: string[];
}

export const businessQuestions: BusinessQuestion[] = [
  {
    id: "businessType",
    field: "businessType",
    question: "What type of business do you have?",
    options: [
      "Startup",
      "Small Business",
      "Enterprise",
      "E-commerce",
      "Healthcare",
      "Education",
      "Real Estate",
      "Manufacturing",
      "Other",
    ],
  },

  {
    id: "industry",
    field: "industry",
    question: "Which industry are you in?",
  },

  {
    id: "challenge",
    field: "challenge",
    question: "What is your biggest business challenge right now?",
  },

  {
    id: "goal",
    field: "goal",
    question: "What would you like to achieve in the next 6–12 months?",
  },

  {
    id: "website",
    field: "website",
    question: "Do you currently have a website?",
    options: ["Yes", "No"],
  },

  {
    id: "employees",
    field: "employees",
    question: "Approximately how many employees do you have?",
  },

  {
    id: "budget",
    field: "budget",
    question: "What is your estimated budget for this project?",
  },

  {
    id: "timeline",
    field: "timeline",
    question: "When would you like to start?",
    options: [
      "Immediately",
      "Within 1 Month",
      "Within 3 Months",
      "Just Exploring",
    ],
  },
];