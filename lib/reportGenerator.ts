import {
  BusinessProfile,
  AnalysisResult,
  LeadScore,
  Recommendation,
} from "./types";
export interface BusinessReport {
  executiveSummary: string;
  businessProfile: BusinessProfile;
  analysis: AnalysisResult;
  leadScore: LeadScore;
  recommendations: Recommendation[];
  roadmap: string[];
  nextSteps: string[];
}

export function generateBusinessReport(
  profile: BusinessProfile,
  analysis: AnalysisResult,
  leadScore: LeadScore,
  recommendations: Recommendation[]
): BusinessReport {

  const executiveSummary =
    `Based on the consultation, your business is classified as a ${analysis.maturity} organization with ${analysis.aiReadiness} AI readiness. Xornettis recommends focusing on digital transformation initiatives that deliver measurable business value and long-term scalability.`;

  const roadmap = [

    "Business Discovery & Requirement Analysis",

    "Solution Planning",

    "UI/UX Design",

    "Development & AI Integration",

    "Testing & Quality Assurance",

    "Deployment",

    "Training & Support",

    "Continuous Improvement"
  ];

  const nextSteps = [

    "Schedule a free consultation with Xornettis.",

    "Finalize project requirements.",

    "Receive a customized proposal.",

    "Approve project scope and timeline.",

    "Start implementation."
  ];

  return {
    executiveSummary,
    businessProfile: profile,
    analysis,
    leadScore,
    recommendations,
    roadmap,
    nextSteps,
  };
}