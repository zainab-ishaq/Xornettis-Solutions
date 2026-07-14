"use client";

import { Minus, X } from "lucide-react";

interface Props {
  onMinimize?: () => void;
  onClose?: () => void;
}

export default function ChatHeader({
  onMinimize,
  onClose,
}: Props) {
  return (
    <div className="flex items-center justify-between bg-blue-600 p-5 text-white">

      <div>
        <h2 className="text-xl font-bold">
          Xornettis AI
        </h2>

        <p className="text-sm text-blue-100">
          AI Business Consultant
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={onMinimize}
          className="rounded-lg p-2 transition hover:bg-blue-700"
        >
          <Minus size={18} />
        </button>

        <button
          onClick={onClose}
          className="rounded-lg p-2 transition hover:bg-red-500"
        >
          <X size={18} />
        </button>

      </div>

    </div>
  );
}