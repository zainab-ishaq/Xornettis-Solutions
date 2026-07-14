export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface BusinessProfile {
  // Lead Information
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;

  // Business Information
  businessName?: string;
  businessType?: string;
  industry?: string;
  website?: string;
  employees?: string;
  location?: string;

  // Consultation
  challenge?: string;
  goal?: string;
  budget?: string;
  timeline?: string;
}

export interface AnalysisResult {
  maturity: "Startup" | "Growing" | "Established";
  aiReadiness: "Low" | "Medium" | "High";
  priority: "Low" | "Medium" | "High";
  recommendations: string[];
}

export interface LeadScore {
  score: number;
  grade: "A" | "B" | "C";
  status: "Hot" | "Warm" | "Cold";
  reason: string;
}

export interface Recommendation {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  benefits?: string[];
}

export interface CRMLead {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;

  businessType?: string;
  industry?: string;
  challenge?: string;

  score: number;
  grade: "A" | "B" | "C";
  status: "Hot" | "Warm" | "Cold";
}

export interface AIResponse {
  reply: string;
}