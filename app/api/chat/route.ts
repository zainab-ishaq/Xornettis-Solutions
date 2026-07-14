import { NextRequest, NextResponse } from "next/server";

import { ai } from "@/lib/gemini";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { BUSINESS_KNOWLEDGE } from "@/lib/businessKnowledge";

import { getSession, updateSession } from "@/lib/sessionManager";
import {
  startConversation,
  saveAnswer,
  getCurrentQuestion,
} from "@/lib/conversationManager";

import { extractFieldsFromMessage } from "@/lib/leadExtractor";
import { runConsultation } from "@/lib/consultationEngine";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const sessionId = "demo-user";

    let state = getSession(sessionId);

    state.lead = extractFieldsFromMessage(
      message,
      state.lead
    );

    updateSession(sessionId, state);

    // Start conversation
    if (!state.started) {
      state = startConversation(state);

      updateSession(sessionId, state);

      return NextResponse.json({
        reply: getCurrentQuestion(state)?.question,
      });
    }

    // Continue questionnaire
    if (!state.completed) {
      state = saveAnswer(state, message);

      updateSession(sessionId, state);

      const nextQuestion = getCurrentQuestion(state);

      if (nextQuestion) {
        return NextResponse.json({
          reply: nextQuestion.question,
        });
      }
    }

    // Run business consultation
    const consultation = state.completed
      ? await runConsultation(state.lead)
      : null;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: `
${SYSTEM_PROMPT}

Company Knowledge:
${BUSINESS_KNOWLEDGE}

Business Report:
${consultation?.report ?? ""}

Recommendations:
${consultation?.recommendations.join("\n") ?? ""}

Lead Score:
${consultation?.leadScore.score ?? ""}

User Message:
${message}
`,

      config: {
        temperature: 0.4,
        maxOutputTokens: 700,
      },
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
      },
      { status: 500 }
    );
  }
}