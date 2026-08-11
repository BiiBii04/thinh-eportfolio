import { TLink as Link } from "../components/Transition";
import PageFade from "../components/PageFade";
import {
  CATEGORIES,
  COURSEWORK,
  COURSE_CROSSREFS,
  EDUCATION,
} from "../data/portfolio";

export const metadata = {
  title: "Coursework — Thinh Ngo",
  description:
    "Assessed coursework across a dual major in Business and Technology and Blockchain-enabled Business, with marks per assessment, what each deliverable was, and why it matters for the career direction.",
};

export default function CourseworkPage() {
  return (
    <PageFade>
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Coursework
          </p>

          <h2 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(2.5rem,8vw,7rem)] max-w-5xl mb-8">
            The record behind the work.
          </h2>

          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-700">
            {EDUCATION.majors}, {EDUCATION.org}, {EDUCATION.date}.{" "}
            {EDUCATION.availability}.
          </p>

          <p className="max-w-3xl text-[15px] md:text-base leading-relaxed text-neutral-600 mt-5">
            Marks are shown per assessment and normalised to a scale of 100, not
            at course level. Everything published here sits in the Distinction or
            High Distinction band, and I have left off assessments that do not
            show judgement, including my highest mark anywhere: 88 for a set of
            blockchain lab exercises. A mark for running a tool is not evidence I
            can decide anything. {EDUCATION.note}
          </p>

          <div className="mt-20 md:mt-28 space-y-20 md:space-y-28">
            {CATEGORIES.map((cat) => {
              const items = COURSEWORK.filter((c) => c.category === cat.id);
              if (items.length === 0) return null;
              return (
                <section key={cat.id}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-10">
                    <h3 className="text-2xl md:text-4xl font-medium tracking-[-0.02em]">
                      {cat.name}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-600 md:text-right md:max-w-md">
                      {cat.claim}
                    </p>
                  </div>

                  <ul className="border-t border-neutral-300/80">
                    {items.map((c) => (
                      <li
                        key={c.code + c.assessment}
                        className="border-b border-neutral-300/80 py-8 md:py-12"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs tracking-[0.16em] uppercase bg-foreground/[0.06] px-2.5 py-1 rounded-full text-neutral-700">
                            {c.band} {c.mark}
                          </span>
                          <span className="text-xs tracking-[0.16em] uppercase text-neutral-500">
                            {c.code} · {c.assessment} · {c.date}
                          </span>
                        </div>

                        <h4 className="text-2xl md:text-4xl font-medium tracking-[-0.02em] leading-[1.1] max-w-4xl">
                          {c.title}
                        </h4>
                        <p className="mt-2 text-neutral-600 md:text-lg">
                          {c.course}
                        </p>

                        <p className="mt-5 text-sm text-neutral-600 leading-relaxed max-w-3xl">
                          {c.author}
                        </p>
                        <p className="mt-3 text-[15px] md:text-base text-neutral-700 leading-relaxed max-w-3xl">
                          {c.summary}
                        </p>

                        <details className="mt-6 group max-w-3xl">
                          <summary className="cursor-pointer list-none text-xs tracking-[0.16em] uppercase text-neutral-500 hover:text-accent transition">
                            <span className="group-open:hidden">
                              What I did →
                            </span>
                            <span className="hidden group-open:inline">
                              Close ↑
                            </span>
                          </summary>
                          <ul className="mt-5 space-y-3">
                            {c.achievements.map((a) => (
                              <li
                                key={a}
                                className="text-[15px] md:text-base text-neutral-700 leading-relaxed pl-5 relative"
                              >
                                <span
                                  className="absolute left-0 top-[0.7em] size-1.5 rounded-full bg-neutral-400"
                                  aria-hidden
                                />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </details>

                        <p className="mt-6 text-[15px] md:text-base leading-relaxed max-w-3xl border-l-2 border-accent/60 pl-4">
                          <span className="uppercase tracking-[0.14em] text-[11px] text-neutral-500 mr-2">
                            Why it matters
                          </span>
                          {c.whyItMatters}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <section className="mt-24 md:mt-32">
            <h3 className="text-2xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              Courses whose work is on the projects page
            </h3>
            <p className="text-[15px] md:text-base text-neutral-600 leading-relaxed max-w-3xl mb-10">
              These five produced a project rather than a coursework entry, so
              they are listed once and captioned once. No marks here either, for
              the reason on the projects page.
            </p>
            <ul className="border-t border-neutral-300/80">
              {COURSE_CROSSREFS.map((c) => (
                <li key={c.code} className="border-b border-neutral-300/80">
                  <Link
                    href={`/work/${c.slug}`}
                    className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6 py-6 group"
                  >
                    <span className="text-lg md:text-2xl font-medium tracking-[-0.01em] group-hover:text-accent transition">
                      {c.code} {c.course}
                    </span>
                    <span className="text-sm text-neutral-600 md:text-right shrink-0 group-hover:text-accent transition">
                      {c.label} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </PageFade>
  );
}