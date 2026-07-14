"use client";

export default function TypingIndicator() {
  return (
    <div className="flex max-w-[85%] gap-2 rounded-2xl rounded-tl-md bg-blue-600 p-4">
      <span className="h-2 w-2 animate-bounce rounded-full bg-white"></span>
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-white"
        style={{ animationDelay: "0.15s" }}
      ></span>
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-white"
        style={{ animationDelay: "0.3s" }}
      ></span>
    </div>
  );
}