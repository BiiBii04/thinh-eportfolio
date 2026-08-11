"use client";

import { motion } from "framer-motion";
import { BANDS, SCALE_MAX, SCALE_MIN, TIMELINE } from "../data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const pct = (v: number, min: number, max: number) =>
  ((v - min) / (max - min)) * 100;

/**
 * The mark, over the RMIT band scale it sits in.
 *
 * The number alone says nothing about where it lands: 70 reads as low until you
 * can see it is exactly the Distinction floor, and 81.7 reads as unremarkable
 * until you can see it crossed into High Distinction. The scale starts at the
 * pass mark rather than at zero, because that is the range a mark can occupy.
 */
export function MarkScale({ mark, band }: { mark: number; band: string }) {
  const x = pct(mark, SCALE_MIN, SCALE_MAX);

  return (
    <div className="w-full max-w-[15rem]">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-4xl md:text-5xl tracking-[-0.04em] tabular-nums leading-none">
          {mark}
        </span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-accent leading-none">
          {band}
        </span>
      </div>

      <div className="relative mt-4 h-px bg-neutral-400/60" aria-hidden>
        {BANDS.map((b) => (
          <span
            key={b.code}
            className="absolute top-0 h-1.5 w-px bg-neutral-400/70"
            style={{ left: `${pct(b.floor, SCALE_MIN, SCALE_MAX)}%` }}
          />
        ))}

        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
          className="absolute -top-[3px] size-[7px] rounded-full bg-accent ring-2 ring-paper"
          style={{ left: `${x}%`, translateX: "-50%" }}
        />
      </div>

      <div className="relative mt-1.5 h-3" aria-hidden>
        {BANDS.map((b) => (
          <span
            key={b.code}
            className={`absolute font-mono text-[9px] tracking-[0.14em] ${
              b.code === band ? "text-accent" : "text-neutral-400"
            }`}
            style={{ left: `${pct(b.floor, SCALE_MIN, SCALE_MAX)}%` }}
          >
            {b.code}
          </span>
        ))}
      </div>

      <p className="sr-only">
        {mark} out of 100, which is the {band} band on RMIT&rsquo;s scale.
      </p>
    </div>
  );
}

const monthIndex = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  const [fy, fm] = TIMELINE.from.split("-").map(Number);
  return (y - fy) * 12 + (m - fm);
};
const TOTAL = monthIndex(TIMELINE.to);

/**
 * How long a commitment actually ran, drawn against one shared axis so lengths
 * are comparable between entries. A 26-month role and a two-day workshop look
 * nothing alike here, which is the honest result.
 */
export function SpanBar({ from, to }: { from: string; to?: string }) {
  const start = monthIndex(from);
  const end = to ? monthIndex(to) : start;
  const months = Math.max(end - start, 0);
  const isPoint = !to;

  const left = (start / TOTAL) * 100;
  const width = isPoint ? 0 : (months / TOTAL) * 100;

  return (
    <div className="w-full">
      <div className="relative h-4" aria-hidden>
        <span className="absolute top-1/2 inset-x-0 h-px bg-neutral-300" />
        {isPoint ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            className="absolute top-1/2 -translate-y-1/2 size-[7px] rounded-full bg-accent"
            style={{ left: `${left}%`, translateX: "-50%" }}
          />
        ) : (
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-accent origin-left"
            style={{ left: `${left}%`, width: `${width}%` }}
          />
        )}
      </div>
      <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-neutral-500">
        {isPoint ? "SINGLE EVENT" : `${months} MONTHS`}
      </p>
    </div>
  );
}

/** The axis the span bars share, rendered once at the top of the list. */
export function SpanAxis() {
  const years = [2023, 2024, 2025, 2026];
  return (
    <div className="relative h-4 mb-2" aria-hidden>
      <span className="absolute top-1/2 inset-x-0 h-px bg-neutral-300" />
      {years.map((y) => (
        <span
          key={y}
          className="absolute top-0 font-mono text-[10px] tracking-[0.14em] text-neutral-400"
          style={{ left: `${(monthIndex(`${y}-01`) / TOTAL) * 100}%` }}
        >
          {y}
        </span>
      ))}
    </div>
  );
}
