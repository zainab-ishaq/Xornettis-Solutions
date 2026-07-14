"use client";

interface Props {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function MessageInput({
  value,
  loading,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
          placeholder="Ask about your business..."
          className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}