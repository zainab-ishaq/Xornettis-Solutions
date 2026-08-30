import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { ai } from "@/lib/gemini";
import { SYSTEM_PROMPT } from "@/lib/prompt";

import { getSession, updateSession } from "@/lib/sessionManager";

import {
  startConversation,
  getCurrentQuestion,
  advanceToNextMissingQuestion,
} from "@/lib/conversationManager";

import {
  extractFieldsFromMessage,
  isLeadComplete,
} from "@/lib/leadExtractor";

import { businessQuestions } from "@/lib/BusinessQuestions";
import { runConsultation } from "@/lib/consultationEngine";

const apiKey = process.env.RESEND_API_key;
const resend = apiKey ? new Resend(apiKey) : null;
const LEAD_EMAIL = "zainabmirza124@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId = "demo-user" } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please tell me a little about your business." },
        { status: 400 }
      );
    }

    let state = getSession(sessionId);

    // 1. Start conversation if not started
    if (!state.started) {
      state = startConversation(state);
    }

    // 2. Extract fields from user message (Bulk or Single)
    state.lead = extractFieldsFromMessage(message, state.lead);

    // 3. Sync answers map with extracted lead data so questions don't repeat
    for (const q of businessQuestions) {
      const val = state.lead[q.field as keyof typeof state.lead];
      if (val && typeof val === "string" && val.trim() !== "") {
        state.answers[q.field] = val;
      }
    }

    // 4. Always advance to the exact next missing question based on updated lead state
    state = advanceToNextMissingQuestion(state);
    updateSession(sessionId, state);

    // 5. Check if lead information is COMPLETE
    const leadComplete = isLeadComplete(state.lead);

    // 6. If Lead is Complete: Run Consultation, Send Email ONCE, and Exit
    if (leadComplete && !state.completed) {
      state.completed = true;
      updateSession(sessionId, state);

      const consultation = await runConsultation(state.lead);

      // Send email via Resend if not already sent
      if (!state.leadEmailSent && resend) {
        try {
          const { error } = await resend.emails.send({
            from: "Xornettis AI <onboarding@resend.dev>",
            to: LEAD_EMAIL,
            replyTo: state.lead.email || "support@xornettis.com",
            subject: `🔥 New Lead: ${state.lead.businessType || "Business"} - $${state.lead.budget || "N/A"}`,
            html: `
              <h2>🔥 New Xornettis AI Consultant Lead Captured</h2>
              <hr>
              <h3>Business Information</h3>
              <p><strong>Business Type:</strong> ${state.lead.businessType || "N/A"}</p>
              <p><strong>Challenge:</strong> ${state.lead.challenge || "N/A"}</p>
              <p><strong>Goal:</strong> ${state.lead.goal || "N/A"}</p>
              <p><strong>Website Status:</strong> ${state.lead.website || "N/A"}</p>
              <p><strong>Employees:</strong> ${state.lead.employees || "N/A"}</p>
              <p><strong>Budget:</strong> ${state.lead.budget || "N/A"}</p>
              <p><strong>Timeline:</strong> ${state.lead.timeline || "N/A"}</p>
              <hr>
              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${state.lead.name || "N/A"}</p>
              <p><strong>Email:</strong> ${state.lead.email || "N/A"}</p>
              <p><strong>Phone:</strong> ${state.lead.phone || "N/A"}</p>
              <hr>
              <h3>AI Consultation Report</h3>
              <p><strong>Lead Score:</strong> ${consultation?.leadScore?.score ?? "N/A"}</p>
              <p><strong>Grade:</strong> ${consultation?.leadScore?.grade ?? "N/A"}</p>
              <p><em>${consultation?.report || ""}</em></p>
            `,
          });

          if (!error) {
            state.leadEmailSent = true;
            updateSession(sessionId, state);
          }
        } catch (emailErr) {
          console.error("Email Error:", emailErr);
        }
      }

      return NextResponse.json({
        reply: "Thank you! Your details have been received successfully. Our team will review your requirements and contact you shortly.",
      });
    }

    // 7. If lead is already completed in past session
    if (state.completed) {
      return NextResponse.json({
        reply: "Thank you! We have already received your details. Our team will contact you soon.",
      });
    }

    // 8. Otherwise, return the exact next missing question
    const nextQuestion = getCurrentQuestion(state);
    if (nextQuestion && nextQuestion.question) {
      return NextResponse.json({
        reply: nextQuestion.question,
      });
    }

    // 9. Gemini Fallback
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${SYSTEM_PROMPT}\nUser Message: ${message}`,
      config: { temperature: 0.4, maxOutputTokens: 700 },
    });

    return NextResponse.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("CHAT API ERROR:", error);
    return NextResponse.json(
      { reply: "Sorry, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}