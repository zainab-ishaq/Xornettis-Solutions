import { AnalysisResult, Recommendation } from "./types";

export function generateRecommendations(
  analysis: AnalysisResult
): Recommendation[] {

  const services: Recommendation[] = [];

  // Core recommendations from analysis
  analysis.recommendations.forEach((service) => {

    switch (service) {

      case "Business Website":
        services.push({
          title: "Business Website",
          description:
            "A modern, responsive website to establish your online presence and generate leads.",
          priority: "High",
        });
        break;

      case "AI Chatbot":
        services.push({
          title: "AI Business Chatbot",
          description:
            "Automate customer support, lead qualification, and frequently asked questions.",
          priority: "High",
        });
        break;

      case "Business Automation":
        services.push({
          title: "Business Process Automation",
          description:
            "Reduce manual work using AI workflows, automation, and integrations.",
          priority: "High",
        });
        break;

      case "SEO & Digital Marketing":
        services.push({
          title: "SEO & Digital Marketing",
          description:
            "Improve search rankings, increase traffic, and generate qualified leads.",
          priority: "Medium",
        });
        break;

      case "Dashboard & Analytics":
        services.push({
          title: "Business Dashboard & Analytics",
          description:
            "Monitor KPIs, sales, and operations through real-time dashboards.",
          priority: "Medium",
        });
        break;

      case "Free AI Business Consultation":
        services.push({
          title: "Free AI Business Consultation",
          description:
            "Receive a personalized consultation to identify AI opportunities for your business.",
          priority: "Low",
        });
        break;
    }
  });

  // Intelligent upsell recommendations
  if (analysis.aiReadiness === "High") {
    services.push({
      title: "Custom AI Agent",
      description:
        "Deploy an AI agent capable of handling customer interactions and business workflows.",
      priority: "High",
    });
  }

  if (analysis.maturity === "Established") {
    services.push({
      title: "Enterprise Digital Transformation",
      description:
        "Modernize operations with scalable enterprise AI and digital solutions.",
      priority: "High",
    });
  }

  if (analysis.priority === "High") {
    services.push({
      title: "Priority Project Delivery",
      description:
        "Fast-track implementation with dedicated project planning and execution.",
      priority: "High",
    });
  }

  return services;
}