"use client";

import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-110 hover:bg-blue-700"
    >
      <MessageCircle size={30} />
    </button>
  );
}