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
            I work out why a market is stuck, then decide whether a technology
            actually fixes it. Usually the honest answer is no, and saying so is
            the job.
          </h2>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-neutral-700">
            Construction contracts, warehouse handling, energy trading,
            ride-hailing, supply chain finance, real estate. Six industries, and
            I diagnosed every one the same way: find who knows something the
            other side does not, price what that costs them, then test a
            technology against that diagnosis instead of assuming it in. That is
            the thread through everything on this site, and it is why the work is
            grouped by what it proves rather than by industry.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-700">
            The clearest example is my capstone. An industry panel told me the
            design was over-engineered, I cut it from twelve components to five,
            and I wrote down exactly where I still disagreed with them and why
            the enforcement layer had to stay. That argument is in the assessed
            report, not just in my memory.
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
            RMIT University Vietnam, Bachelor of Business. Dual major in Business
            and Technology plus Blockchain-enabled Business, which RMIT has since
            renamed Digital Economy. Coursework complete September 2026,
            graduating April 2027. Based in Ho Chi Minh City.
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
