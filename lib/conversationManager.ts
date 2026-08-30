import { businessQuestions } from "./BusinessQuestions";
import { BusinessProfile } from "./types";

export interface ConversationState {
  currentStep: number;
  completed: boolean;
  started: boolean;
  answers: Record<string, string>;
  lead: BusinessProfile;
  leadEmailSent: boolean;
}

export function createConversation(): ConversationState {
  return {
    currentStep: 0,
    completed: false,
    started: false,
    answers: {},
    lead: {},
    leadEmailSent: false,
  };
}

export function getCurrentQuestion(
  state: ConversationState
) {
  if (state.currentStep >= businessQuestions.length) {
    return null;
  }

  return businessQuestions[state.currentStep];
}

export function saveAnswer(
  state: ConversationState,
  answer: string
): ConversationState {
  const question = businessQuestions[state.currentStep];

  if (!question) {
    return {
      ...state,
      completed: true,
    };
  }

  const nextStep = state.currentStep + 1;

  return {
    ...state,

    currentStep: nextStep,

    completed:
      nextStep >= businessQuestions.length,

    answers: {
      ...state.answers,
      [question.field]: answer,
    },

    lead: {
      ...state.lead,
      [question.field]: answer,
    },
  };
}

export function startConversation(
  state: ConversationState
): ConversationState {
  return {
    ...state,
    started: true,
  };
}

export function advanceToNextMissingQuestion(
  state: ConversationState
): ConversationState {
  let nextStep = state.currentStep;

  while (nextStep < businessQuestions.length) {
    const question = businessQuestions[nextStep];

    const value =
      state.lead[
        question.field as keyof BusinessProfile
      ];

    if (
      typeof value !== "string" ||
      !value.trim()
    ) {
      break;
    }

    nextStep++;
  }

  return {
    ...state,

    currentStep: nextStep,

    completed:
      nextStep >= businessQuestions.length,
  };
}

export function getProgress(
  state: ConversationState
): number {
  if (businessQuestions.length === 0) {
    return 100;
  }

  return Math.round(
    (state.currentStep / businessQuestions.length) * 100
  );
}