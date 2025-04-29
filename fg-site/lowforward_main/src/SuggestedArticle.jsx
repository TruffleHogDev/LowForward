// SuggestedArticle.jsx
import { useMemo } from "react";
import { Link } from "react-router-dom";

const suggestions = [
  {
    title: "Anti-Airs",
    page: "antiairs",
    messages: [
      "Struggling with jump-ins and divekicks?",
      "Keep the skies clear with anti-airs.",
      "Keep them grounded and control their movements.",
    ],
  },
  {
    title: "What combos should I learn?",
    page: "bnbs",
    messages: [
      "You have a character you want to try- what combos are important?",
      "Learn what to prioritize.",
      "Winning starts with consistent, meaningful damage.",
    ],
  },
  {
    title: "Using Pokes to Form a Gameplan",
    page: "pokes",
    messages: [
      "How do you use pokes well?",
      "How do you make your moves work together?",
      "Every move has a purpose.",
    ],
  },
];

export default function SuggestedArticle() {
  const random = useMemo(() => {
    const entry = suggestions[Math.floor(Math.random() * suggestions.length)];
    const message =
      entry.messages[Math.floor(Math.random() * entry.messages.length)];
    return { ...entry, message };
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-emerald-700 to-[#1f2022] text-white py-16 px-4 md:px-12">
      <div className="max-w-screen-md mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Suggested Reading</h2>
        <p className="text-lg text-slate-300">{random.message}</p>
        <Link
          to={random.page}
          className="inline-block mt-4 bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold py-2 px-6 rounded-lg transition duration-200"
        >
          Read: {random.title}
        </Link>
      </div>
    </section>
  );
}
