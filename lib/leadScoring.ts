import { BusinessProfile, AnalysisResult, LeadScore } from "./types";

export function calculateLeadScore(
  profile: BusinessProfile,
  analysis: AnalysisResult
): LeadScore {

  let score = 0;

  // Business Size
  switch (profile.businessType) {
    case "Enterprise":
      score += 30;
      break;

    case "Manufacturing":
      score += 25;
      break;

    case "E-commerce":
      score += 20;
      break;

    case "Small Business":
      score += 15;
      break;

    case "Startup":
      score += 10;
      break;
  }

  // Website
  if (profile.website === "Yes") {
    score += 10;
  }

  // AI Readiness
  switch (analysis.aiReadiness) {
    case "High":
      score += 25;
      break;

    case "Medium":
      score += 15;
      break;

    case "Low":
      score += 5;
      break;
  }

  // Timeline
  if (profile.timeline === "Immediately") {
    score += 20;
  } else if (profile.timeline === "Within 1 Month") {
    score += 10;
  }

  // Budget
  if (profile.budget) {
    score += 15;
  }

  if (score > 100) {
    score = 100;
  }

  let grade: "A" | "B" | "C";
  let status: "Hot" | "Warm" | "Cold";

  if (score >= 80) {
    grade = "A";
    status = "Hot";
  } else if (score >= 60) {
    grade = "B";
    status = "Warm";
  } else {
    grade = "C";
    status = "Cold";
  }
return {
  score,
  grade,
  status,
  reason: `${status} lead with score ${score}/100`,
};
}