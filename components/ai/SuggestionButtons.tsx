"use client";

interface Props {
  onSelect: (text: string) => void;
}

const suggestions = [
  "🤖 AI Solution",
  "🌐 Business Website",
  "⚙️ Automation",
  "📱 Mobile App",
  "💰 Cost Estimate",
];


export default function SuggestionButtons({ onSelect }: Props) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {suggestions.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"        >
          {item}
        </button>
      ))}
    </div>
  );
}