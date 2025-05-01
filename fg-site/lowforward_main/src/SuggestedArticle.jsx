import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      "Learn what combos to prioritize.",
      "Winning starts with consistent, meaningful damage.",
    ],
  },
  {
    title: "Meaties and Hit Confirms",
    page: "meaties_and_confirms",
    messages: [
      "How do I do strong blockstrings?",
      "Want to stop mashers easily?",
      "How do I start my offense?",
    ],
  },
  {
    title: "Strike/Throw Offense",
    page: "strikethrow",
    messages: [
      "How do I open up people who turtle?",
      "What do I do when I get a knockdown?",
      "How do I know when to throw them?",
    ],
  },
  {
    title: "Playing Around Reversals",
    page: "reversals",
    messages: [
      "When do I respect their wakeup?",
      "Sometimes you can run offense and beat invincible moves.",
      "Sometimes, getting hit by a wakeup super is fine- here's why.",
    ],
  },
  {
    title: "Defensive Options",
    page: "defense",
    messages: [
      "Make the most of the game's defensive mechanics.",
      "Is it ever a bad idea to block?",
      "Give yourself as many chances to win as you can.",
    ],
  },
  {
    title: "Low-Commitment Neutral",
    page: "low_commitment_neutral",
    messages: [
      "Win more by NOT pressing buttons!",
      "How high-level players learn habits quickly.",
      "Force respect (and mistakes) from your opponents.",
    ],
  },
  {
    title: "Space Control",
    page: "space_control",
    messages: [
      "How do I stop getting cornered?",
      "Do everything with intent.",
      "The real secrets to controlling the screen.",
    ],
  },
  {
    title: "Using Pokes to Form a Gameplan",
    page: "pokes",
    messages: [
      "How do I use pokes well?",
      "How do I make your moves work together?",
      "Every move has a purpose.",
    ],
  },
  {
    title: "Make Labbing Fun!",
    page: "new_tech",
    messages: [
      "Get the most out of your lab time.",
      "Try the cool things you see!",
      '"Impractical" things are still worth doing.',
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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const ToggleIcon = open ? ChevronRight : ChevronLeft;

  return (
    <>
      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40 bg-gradient-to-b from-emerald-700 to-[#1f2022] text-white p-3 md:p-4 rounded-xl w-64 md:w-80 max-h-[60vh] md:max-h-[80vh] overflow-y-auto shadow-lg space-y-4"
          >
            <h3 className="text-base md:text-lg font-bold">
              Suggested Articles
            </h3>
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
                  <p className="italic text-slate-300 text-sm md:text-base">
                    {item.message}
                  </p>
                  <Link
                    to={item.page}
                    className="inline-block text-emerald-300 hover:underline font-semibold text-sm md:text-base"
                  >
                    Read: {item.title}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button (on top) */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-emerald-400 hover:bg-emerald-500 text-slate-900 p-3 rounded-full shadow-lg"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle Suggested Articles"
      >
        <ToggleIcon size={24} />
      </button>
    </>
  );
}
