"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TLink } from "./Transition";

type Project = {
  slug: string;
  title: string;
  category: string;
  preview: string;
};

const projects: Project[] = [
  {
    slug: "scf",
    title: "SCF Protocol",
    category: "Blockchain · Fintech",
    preview: "/scf-preview.jpg",
  },
  {
    slug: "achievia",
    title: "Achievia",
    category: "AI · Pitch & Demo",
    preview: "/achievia-preview.png",
  },
  {
    slug: "wws",
    title: "WWS",
    category: "Accessibility · Design",
    preview: "/wws-preview.png",
  },
  {
    slug: "apec",
    title: "APEC Water",
    category: "Operations · Systems Design",
    preview: "/apec-preview.png",
  },
  {
    slug: "microloan",
    title: "Microloan default",
    category: "Machine Learning · Credit Risk",
    preview: "/microloan-preview.png",
  },
  {
    slug: "ups",
    title: "UPS location model",
    category: "Machine Learning · Supply Chain",
    preview: "/ups-preview.png",
  },
];

export default function RecentWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative bg-paper text-foreground py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-10 md:mb-14 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-neutral-400" />
          Selected projects
        </p>

        <ul
          className="border-t border-neutral-300/80"
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((p) => {
            const isActive = hovered === p.slug;
            const isDim = hovered !== null && !isActive;
            return (
              <li key={p.slug} className="border-b border-neutral-300/80">
                <TLink
                  href={`/work/${p.slug}`}
                  className="grid grid-cols-12 items-baseline py-8 md:py-12 gap-4 group"
                  onMouseEnter={() => setHovered(p.slug)}
                >
                  <span
                    className={`col-span-8 md:col-span-9 text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[-0.02em] transition-colors duration-300 ${
                      isDim ? "text-neutral-400" : "text-foreground"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span
                    className={`col-span-4 md:col-span-3 text-right text-sm md:text-base transition-colors duration-300 ${
                      isDim ? "text-neutral-400" : "text-neutral-700"
                    }`}
                  >
                    {p.category}
                  </span>
                </TLink>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-end">
          <TLink
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium border border-foreground/20 hover:border-accent hover:text-accent transition rounded-full px-5 py-2.5"
          >
            All nine projects <span aria-hidden>→</span>
          </TLink>
        </div>
      </div>

      <motion.div
        aria-hidden
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.85,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 left-0 z-30 w-[320px] md:w-[420px] aspect-[4/3] rounded-md overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] bg-neutral-200"
      >
        {projects.map((p) => (
          <Image
            key={p.slug}
            src={p.preview}
            alt=""
            fill
            sizes="420px"
            className={`object-cover transition-opacity duration-200 ${
              hovered === p.slug ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-16 md:size-20 rounded-full bg-accent text-white text-xs md:text-sm font-medium flex items-center justify-center tracking-tight">
            View
          </div>
        </div>
      </motion.div>
    </section>
  );
}
