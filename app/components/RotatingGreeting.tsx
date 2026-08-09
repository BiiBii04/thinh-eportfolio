"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Xin chào",
  "Bonjour",
  "你好",
  "こんにちは",
  "Hallo",
];

export default function RotatingGreeting() {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    if (i === greetings.length - 1) {
      const t = setTimeout(() => setOpen(false), 650);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setI((n) => n + 1), 320);
    return () => clearTimeout(t);
  }, [i, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="greeting"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#b8b8b8] text-white"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[i]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="text-3xl md:text-5xl font-medium tracking-tight flex items-center gap-3"
            >
              <span className="inline-block size-2 rounded-full bg-accent" />
              {greetings[i]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
