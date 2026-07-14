import { businessQuestions } from "./BusinessQuestions";
import { BusinessProfile } from "./types";

export interface ConversationState {
  currentStep: number;
  completed: boolean;
  started: boolean;
  answers: Record<string, string>;
  lead: BusinessProfile;
}

export function createConversation(): ConversationState {
  return {
    currentStep: 0,
    completed: false,
    started: false,
    answers: {},
    lead: {},
  };
}

export function getCurrentQuestion(state: ConversationState) {
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

  return {
    ...state,

    currentStep: state.currentStep + 1,

    completed:
      state.currentStep + 1 >= businessQuestions.length,

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

export function getProgress(
  state: ConversationState
): number {
  return Math.round(
    (state.currentStep / businessQuestions.length) * 100
  );
}