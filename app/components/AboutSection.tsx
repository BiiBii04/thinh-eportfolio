"use client";

import { motion } from "framer-motion";
import { TLink } from "./Transition";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-paper text-foreground py-28 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8 max-w-3xl"
        >
          <h2 className="font-medium tracking-[-0.025em] leading-[1.08] text-[clamp(1.75rem,3.5vw,2.75rem)]">
            I help teams turn fuzzy ideas into something a real person can
            touch. Pitching first, learning to build with AI second. No
            abstraction without a shippable answer attached.
          </h2>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-700">
            I&rsquo;m the one who turns a room&rsquo;s vague idea into a pitch, a
            prototype, and a number someone can act on. Across four projects
            &mdash; a blockchain supply-chain-finance capstone (HD, top of
            course), an AI study-abroad tool (Top 20 of 200 at LotusHacks), an
            accessibility platform, and a digital-transformation blueprint
            &mdash; the job was the same: find the real user pain, frame it, and
            demo an answer that ships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 flex flex-col items-start md:items-end gap-10"
        >
          <p className="text-[15px] md:text-base leading-[1.65] text-neutral-700 max-w-xs md:text-right">
            Final-year Business &amp; Technology student at RMIT Vietnam,
            Blockchain-Enabled Business track. Based in Ho Chi Minh City. Open
            to internships.
          </p>

          <TLink
            href="/contact"
            className="group relative inline-flex items-center justify-center size-32 md:size-40 rounded-full bg-neutral-900 text-white text-sm tracking-tight hover:bg-accent transition-colors duration-300"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-1 rounded-full border border-white/10 pointer-events-none" />
          </TLink>
        </motion.div>
      </div>
    </section>
  );
}
