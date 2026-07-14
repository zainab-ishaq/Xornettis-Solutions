import { BusinessReport } from "./reportGenerator";
import { LeadInformation } from "./types";
export interface CRMLead {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;

  businessType: string;
  industry: string;

  aiReadiness: string;
  maturity: string;

  leadScore: number;
  leadGrade: string;
  leadStatus: string;

  recommendedServices: string[];

  executiveSummary: string;

  createdAt: string;
}
export function formatCRMLead(
  lead: LeadInformation,
  report: BusinessReport
): CRMLead {
  
  return {
    name: lead.name ?? "",
    company: lead.company ?? "",
    email: lead.email ?? "",
    phone: lead.phone ?? "",
    country: lead.country ?? "",

    businessType: lead.businessType ?? "",
    industry: lead.industry ?? "",

    aiReadiness: report.analysis.aiReadiness,
    maturity: report.analysis.maturity,

    leadScore: report.leadScore.score,
    leadGrade: report.leadScore.grade,
    leadStatus: report.leadScore.status,

    recommendedServices:
      report.recommendations.map(service => service.title),

    executiveSummary:
      report.executiveSummary,

    createdAt:
      new Date().toISOString(),
  };
}