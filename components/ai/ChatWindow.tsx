"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface ChatWindowProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function ChatWindow({ open, onClose }: ChatWindowProps) {
  // Generate a unique session ID once per chat session
  const [sessionId] = useState(
    () => "user-" + Math.random().toString(36).substring(2, 9)
  );

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Welcome to Xornettis Solutions!\n\nI'm your AI Business Consultant.\n\nTell me about your business and I'll recommend the best AI & Digital Solutions for you.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function sendMessage(text?: string) {
    const message = text ?? input;

    if (!message.trim()) return;

    // Add user message to UI immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          sessionId, // Passing the unique session ID
        }),
      });

      const data = await res.json();

      // Add assistant response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't connect to the AI service.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
      <ChatHeader onClose={onClose} />

      <MessageList
        messages={messages}
        loading={loading}
        onSuggestion={(text) => sendMessage(text)}
      />

      <MessageInput
        value={input}
        loading={loading}
        onChange={setInput}
        onSend={() => sendMessage()}
      />
    </div>
  );
}