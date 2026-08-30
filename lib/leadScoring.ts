import { BusinessProfile, AnalysisResult, LeadScore } from "./types";

export function calculateLeadScore(
  profile: BusinessProfile,
  analysis?: AnalysisResult
): LeadScore {
  let score = 0;

  // 1. Business Type Score
  switch (profile?.businessType) {
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
    case "Restaurant":
    case "Education":
      score += 15;
      break;
    case "Startup":
    default:
      score += 10;
      break;
  }

  // 2. Website Status Score
  if (profile?.website === "Yes" || profile?.website === "No") {
    score += 10;
  }

  // 3. AI Readiness Score (Safe check if analysis exists)
  const readiness = analysis?.aiReadiness;
  if (readiness === "High") {
    score += 25;
  } else if (readiness === "Medium") {
    score += 15;
  } else {
    score += 5; // Default/Low
  }

  // 4. Timeline Score
  if (profile?.timeline === "Immediately" || profile?.timeline?.toLowerCase().includes("now")) {
    score += 20;
  } else if (profile?.timeline?.includes("1 Month") || profile?.timeline?.includes("month")) {
    score += 10;
  }

  // 5. Budget Score
  if (profile?.budget) {
    score += 15;
  }

  // Cap score to 100 max
  if (score > 100) {
    score = 100;
  }

  let grade: "A" | "B" | "C" = "C";
  let status: "Hot" | "Warm" | "Cold" = "Cold";

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