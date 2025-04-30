import { useEffect, useState } from "react";
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
      "You have a character you want to try—what combos are important?",
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

function getRandomPair() {
  const shuffled = [...suggestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2).map((entry) => ({
    ...entry,
    message: entry.messages[Math.floor(Math.random() * entry.messages.length)],
  }));
}

export default function SuggestedArticleDrawer() {
  const [open, setOpen] = useState(false);
  const [pair, setPair] = useState(getRandomPair());

  useEffect(() => {
    const interval = setInterval(() => {
      setPair(getRandomPair());
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-emerald-400 hover:bg-emerald-500 text-slate-900 p-3 rounded-full shadow-lg"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Suggested Articles"
      >
        <BookOpenIcon size={24} />
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 right-6 z-40 bg-gradient-to-b from-emerald-700 to-[#1f2022] text-white p-4 rounded-xl w-80 shadow-lg space-y-4"
          >
            <h3 className="text-lg font-bold">Suggested Articles</h3>
            <AnimatePresence mode="wait">
              {pair.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#1f2022] border border-emerald-500 p-3 rounded-lg space-y-2"
                >
                  <p className="italic text-slate-300">{item.message}</p>
                  <Link
                    to={item.page}
                    className="inline-block text-emerald-300 hover:underline font-semibold"
                  >
                    Read: {item.title}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
