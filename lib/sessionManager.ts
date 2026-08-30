import {
  ConversationState,
  createConversation,
} from "./conversationManager";

const sessions = new Map<string, ConversationState>();

export function getSession(sessionId: string): ConversationState {
  if (!sessionId || !sessions.has(sessionId)) {
    const newState = createConversation();
    if (sessionId) {
      sessions.set(sessionId, newState);
    }
    return newState;
  }

  return sessions.get(sessionId)!;
}

export function updateSession(
  sessionId: string,
  state: ConversationState
) {
  if (sessionId) {
    sessions.set(sessionId, state);
  }
}

export function clearSession(sessionId: string) {
  if (sessionId) {
    sessions.delete(sessionId);
  }
}