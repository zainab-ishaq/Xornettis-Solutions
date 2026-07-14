import {
  ConversationState,
  createConversation,
} from "./conversationManager";

const sessions = new Map<string, ConversationState>();

export function getSession(sessionId: string): ConversationState {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, createConversation());
  }

  return sessions.get(sessionId)!;
}

export function updateSession(
  sessionId: string,
  state: ConversationState
) {
  sessions.set(sessionId, state);
}

export function clearSession(sessionId: string) {
  sessions.delete(sessionId);
}