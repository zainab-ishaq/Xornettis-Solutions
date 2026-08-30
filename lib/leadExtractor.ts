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

// STRICT CHECK: Lead tabhi complete hogi jab Business info + Contact Info dono proper tareeqay se mojood hon
export function isLeadComplete(lead: BusinessProfile): boolean {
  const hasBusinessType = Boolean(lead.businessType && lead.businessType.trim() !== "");
  const hasChallenge = Boolean(lead.challenge && lead.challenge.trim() !== "");
  const hasBudget = Boolean(lead.budget && lead.budget.trim() !== "");
  // Note: Agar aapne abhi contact info (Name/Email/Phone) questionnaire mein add nahi ki, 
  // toh lead complete hone ke liye sirf business fields check honi chahiye. 
  // Filhal aapke code ke mutabiq ye fields check ho rahi hain:
  const hasName = Boolean(lead.name && lead.name.trim() !== "");
  const hasEmail = Boolean(lead.email && lead.email.trim() !== "");
  const hasPhone = Boolean(lead.phone && lead.phone.trim() !== "");

  return hasBusinessType && hasChallenge && hasBudget && hasName && hasEmail && hasPhone;
}

export function extractFieldsFromMessage(
  message: string,
  current: BusinessProfile
): BusinessProfile {
  const lead: BusinessProfile = { ...current };
  const text = message.trim();
  const lowerText = text.toLowerCase();

  const isGreetingOnly = ["hi", "hello", "hey", "salam", "hi there", "hello there"].includes(lowerText);
  if (isGreetingOnly) {
    return lead;
  }

  // 1. CONTACT & PERSONAL INFO EXTRACTION
  const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch && !lead.email) {
    lead.email = emailMatch[0].trim();
  }

  const phoneMatch = text.match(/(?:\+92|0092|0)?[\s-]?3\d{2}[\s-]?\d{3}[\s-]?\d{4}/);
  if (phoneMatch && !lead.phone) {
    lead.phone = phoneMatch[0].replace(/[\s-]/g, "");
  }

  const nameMatch = text.match(/(?:my name is|i am|name is)\s+([a-zA-Z\s]+)/i);
  if (nameMatch && !lead.name) {
    lead.name = nameMatch[1].trim();
  } else if (!lead.name && current.budget && current.challenge && text.split(" ").length <= 3 && !emailMatch && !phoneMatch) {
    lead.name = text;
  }

  // 2. BUSINESS TYPE
  if (!lead.businessType) {
    if (
      lowerText.includes("school") ||
      lowerText.includes("education") ||
      lowerText.includes("academy") ||
      lowerText.includes("college") ||
      lowerText.includes("institute")
    ) {
      lead.businessType = "Education";
      lead.industry = "Education";
    } else if (
      lowerText.includes("restaurant") ||
      lowerText.includes("cafe") ||
      lowerText.includes("food")
    ) {
      lead.businessType = "Restaurant";
      lead.industry = "Restaurant";
    } else if (
      lowerText.includes("hospital") ||
      lowerText.includes("healthcare") ||
      lowerText.includes("clinic")
    ) {
      lead.businessType = "Healthcare";
      lead.industry = "Healthcare";
    } else if (
      lowerText.includes("e-commerce") ||
      lowerText.includes("ecommerce") ||
      lowerText.includes("online store")
    ) {
      lead.businessType = "E-commerce";
      lead.industry = "E-commerce";
    } else {
      // Fallback: Agar upar wale keywords match na hon toh user ke text ko hi business type maan lein
      lead.businessType = text;
      lead.industry = text;
    }
  }

  // 3. WEBSITE
  if (!lead.website) {
    if (
      lowerText.includes("no website") ||
      lowerText.includes("don't have") ||
      lowerText.includes("do not have") ||
      lowerText.includes("no") ||
      lowerText.includes("nahi")
    ) {
      lead.website = "No";
      if (!lead.challenge) {
        lead.challenge = "Website Development";
      }
    } else if (lowerText.includes("yes") || lowerText.includes("have a website")) {
      lead.website = "Yes";
    } else {
      lead.website = text;
    }
  }

  // 4. CHALLENGE
  if (!lead.challenge) {
    if (lowerText.includes("website") || lowerText.includes("web")) {
      lead.challenge = "Website Development";
    } else if (lowerText.includes("automation") || lowerText.includes("automate")) {
      lead.challenge = "Business Automation";
    } else {
      lead.challenge = text;
    }
  }

  // 5. GOAL
  if (!lead.goal) {
    lead.goal = text;
  }

  // 6. BUDGET
  if (!lead.budget) {
    const budgetMatch = text.match(
      /(?:budget|cost|spend|invest(?:ment)?|\$|usd|pkr|rs\.?)\s*(?:is|of|:|-)?\s*(?:rs\.?|pkr|usd|\$)?\s*([\d,]+(?:\.\d+)?)\s*(k|thousand|million|m)?/i
    );
    if (budgetMatch) {
      const amount = budgetMatch[1].replace(/,/g, "");
      const unit = budgetMatch[2];
      let multiplier = 1;
      if (unit?.toLowerCase() === "k" || unit?.toLowerCase() === "thousand") {
        multiplier = 1000;
      }
      const numericAmount = Number(amount) * multiplier;
      const currency = lowerText.includes("$") || lowerText.includes("usd") ? "USD" : "PKR";
      lead.budget = `${currency} ${numericAmount}`;
    } else {
      lead.budget = text;
    }
  }

  // 7. EMPLOYEES
  if (!lead.employees) {
    const empMatch = text.match(/(\d+)/);
    if (empMatch) {
      lead.employees = empMatch[1];
    } else {
      lead.employees = text;
    }
  }

  // 8. TIMELINE (FIXED FOR "today", "now", etc.)
  if (!lead.timeline) {
    if (
      lowerText.includes("now") || 
      lowerText.includes("today") || 
      lowerText.includes("immediately") || 
      lowerText.includes("asap") ||
      lowerText.includes("soon")
    ) {
      lead.timeline = text;
    } else {
      lead.timeline = text;
    }
  }

  return lead;
}