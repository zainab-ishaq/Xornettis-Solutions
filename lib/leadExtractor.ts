import { BusinessProfile } from "./types";

export function extractLead(
  answers: Record<string, string>
): BusinessProfile {
  return {
    name: answers.name,
    company: answers.company,
    email: answers.email,
    phone: answers.phone,
    website: answers.website,
    country: answers.country,

    businessName: answers.businessName,
    businessType: answers.businessType,
    industry: answers.industry,
    employees: answers.employees,
    location: answers.location,

    challenge: answers.challenge,
    goal: answers.goal,
    budget: answers.budget,
    timeline: answers.timeline,
  };
}

export function isLeadComplete(
  lead: BusinessProfile
): boolean {
  return Boolean(
    lead.name &&
      lead.company &&
      lead.email &&
      lead.businessType &&
      lead.challenge
  );
}

export function extractFieldsFromMessage(
  message: string,
  current: BusinessProfile
): BusinessProfile {
  const lead = { ...current };

  const text = message.toLowerCase();

  // Industry / Business Type
  if (text.includes("restaurant")) {
    lead.businessType = "Restaurant";
    lead.industry = "Restaurant";
  }

  if (text.includes("hospital")) {
    lead.businessType = "Healthcare";
    lead.industry = "Healthcare";
  }

  if (text.includes("school")) {
    lead.businessType = "Education";
    lead.industry = "Education";
  }

  if (text.includes("e-commerce")) {
    lead.businessType = "E-commerce";
    lead.industry = "E-commerce";
  }

  // Website
  if (
    text.includes("website") ||
    text.includes("have a website")
  ) {
    lead.website = "Yes";
  }

  if (
    text.includes("no website") ||
    text.includes("don't have a website")
  ) {
    lead.website = "No";
  }

  // Challenges
  if (text.includes("automation")) {
    lead.challenge = "Automation";
  }

  if (text.includes("manual")) {
    lead.challenge = "Manual Processes";
  }

  if (text.includes("customer")) {
    lead.challenge = "Customer Support";
  }

  return lead;
}