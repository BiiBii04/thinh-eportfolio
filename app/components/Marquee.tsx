"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  separator?: string;
  durationSec?: number;
  className?: string;
};

export default function Marquee({
  text,
  separator = "✦",
  durationSec = 18,
  className = "",
}: Props) {
  const Segment = () => (
    <span className="inline-flex items-center shrink-0 whitespace-nowrap">
      <span>{text}</span>
      <span
        aria-hidden
        className="inline-block mx-[0.5em] align-middle text-accent text-[0.45em] translate-y-[-0.08em]"
      >
        {separator}
      </span>
    </span>
  );

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      aria-label={text}
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: durationSec,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Segment />
        <Segment />
        <Segment />
        <Segment />
        <Segment />
        <Segment />
      </motion.div>
    </div>
  );
}
