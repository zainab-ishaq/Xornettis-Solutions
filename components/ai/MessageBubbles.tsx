"use client";

interface Props {
  role: "assistant" | "user";
  content: string;
}

export default function MessageBubble({
  role,
  content,
}: Props) {
  return (
    <div
      className={`max-w-[85%] whitespace-pre-line rounded-2xl p-4 ${
        role === "assistant"
          ? "rounded-tl-md bg-blue-600 text-white"
          : "ml-auto rounded-tr-md border bg-white"
      }`}
    >
      {content}
    </div>
  );
}