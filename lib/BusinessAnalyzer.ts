import { BusinessProfile } from "./types";

export interface AnalysisResult {
  maturity: "Startup" | "Growing" | "Established";
  aiReadiness: "Low" | "Medium" | "High";
  priority: "Low" | "Medium" | "High";
  recommendations: string[];
}

export function analyzeBusiness(
  profile: BusinessProfile
): AnalysisResult {

  let maturity: AnalysisResult["maturity"] = "Startup";
  let aiReadiness: AnalysisResult["aiReadiness"] = "Low";
  let priority: AnalysisResult["priority"] = "Medium";

  const recommendations: string[] = [];

  // Business Maturity
  if (
    profile.businessType === "Enterprise" ||
    profile.businessType === "Manufacturing"
  ) {
    maturity = "Established";
  } else if (
    profile.businessType === "Small Business" ||
    profile.businessType === "E-commerce"
  ) {
    maturity = "Growing";
  }

  // AI Readiness
  if (profile.website === "Yes") {
    aiReadiness = "Medium";
  }

  if (
    profile.challenge?.toLowerCase().includes("automation") ||
    profile.challenge?.toLowerCase().includes("ai")
  ) {
    aiReadiness = "High";
  }

  // Priority
  if (profile.timeline === "Immediately") {
    priority = "High";
  }

  // Recommendations
  if (profile.website === "No") {
    recommendations.push("Business Website");
  }

  if (
    profile.challenge?.toLowerCase().includes("sales")
  ) {
    recommendations.push("SEO & Digital Marketing");
  }

  if (
    profile.challenge?.toLowerCase().includes("customer")
  ) {
    recommendations.push("AI Chatbot");
  }

  if (
    profile.challenge?.toLowerCase().includes("manual")
  ) {
    recommendations.push("Business Automation");
  }

  if (
    profile.challenge?.toLowerCase().includes("data")
  ) {
    recommendations.push("Dashboard & Analytics");
  }

  if (recommendations.length === 0) {
    recommendations.push("Free AI Business Consultation");
  }

  return {
    maturity,
    aiReadiness,
    priority,
    recommendations,
  };
}