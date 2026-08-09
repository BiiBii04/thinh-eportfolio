"use client";

import { motion } from "framer-motion";

export default function LocationPill() {
  return (
    <div className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-neutral-900 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
      <span className="text-[13px] leading-tight tracking-tight">
        Located in
        <br />
        Vietnam
      </span>
      <motion.span
        aria-hidden
        className="inline-flex items-center justify-center size-9 rounded-full bg-neutral-700/70"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      >
        <Globe />
      </motion.span>
    </div>
  );
}

function Globe() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
