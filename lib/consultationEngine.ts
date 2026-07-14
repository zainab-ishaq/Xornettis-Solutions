import { BusinessProfile } from "./types";

import { analyzeBusiness } from "./BusinessAnalyzer";
import { calculateLeadScore } from "./leadScoring";
import { generateRecommendations } from "./recommendationEngine";
import { generateBusinessReport } from "./reportGenerator";
import { formatCRMLead } from "./crmFormatter";

export async function runConsultation(
  lead: BusinessProfile // Changed from 'profile' to 'lead'
) {
  const analysis = analyzeBusiness(lead);

  const leadScore = calculateLeadScore(
    lead,
    analysis
  );

  const recommendations =
    generateRecommendations(analysis);

  const report = generateBusinessReport(
    lead,
    analysis,
    leadScore,
    recommendations
  );

  const crmLead = formatCRMLead(
    lead,
    report
  );

  return {
    analysis,
    leadScore,
    recommendations,
    report,
    crmLead,
  };
}