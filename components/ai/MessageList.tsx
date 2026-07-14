"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubbles";
import SuggestionButtons from "./SuggestionButtons";
import TypingIndicator from "./TypingIndicator";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface Props {
  messages: Message[];
  loading: boolean;
  onSuggestion: (text: string) => void;
}

export default function MessageList({
  messages,
  loading,
  onSuggestion,
}: Props) {

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-5">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}
      </div>

      {messages.length === 1 && (
        <div className="mt-5">
          <SuggestionButtons onSelect={onSuggestion} />
        </div>
      )}

      {loading && (
        <div className="mt-5">
          <TypingIndicator />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}