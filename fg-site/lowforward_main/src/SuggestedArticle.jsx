import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenIcon } from "lucide-react";

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

export default function SuggestedArticleDrawer() {
  const [open, setOpen] = useState(false);

  const random = useMemo(
    () => suggestions[Math.floor(Math.random() * suggestions.length)],
    [],
  );

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-emerald-400 hover:bg-emerald-500 text-slate-900 p-3 rounded-full shadow-lg"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Suggested Article"
      >
        <BookOpenIcon size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 right-6 z-40 bg-[#1f2022] text-white p-4 rounded-xl w-72 shadow-lg"
          >
            <h3 className="text-lg font-bold mb-2">Suggested Article</h3>
            <p className="text-slate-300 mb-3 italic">{random.message}</p>
            <Link
              to={random.page}
              className="inline-block bg-whitesmoke text-gray-800 font-bold py-2 px-4 rounded hover:bg-emerald-200 transition"
            >
              Read: {random.title}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
