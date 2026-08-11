import { TLink as Link } from "../components/Transition";
import PageFade from "../components/PageFade";
import Reveal from "../components/Reveal";
import DocLinks from "../components/DocLinks";
import { MarkScale } from "../components/Gauges";
import {
  CATEGORIES,
  COURSEWORK,
  COURSE_CROSSREFS,
  EDUCATION,
} from "../data/portfolio";

export const metadata = {
  title: "Coursework — Thinh Ngo",
  description:
    "Assessed coursework across a dual major in Business and Technology and Blockchain-enabled Business. Every entry shows the mark on RMIT's band scale, what the deliverable was, and the document itself.",
};

export default function CourseworkPage() {
  return (
    <PageFade>
      <section className="min-h-screen bg-paper pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Coursework
          </p>

          <h1 className="font-medium tracking-[-0.035em] leading-[0.9] text-[clamp(2.5rem,8vw,7rem)] max-w-4xl">
            Marked work,
            <br />
            marks and all.
          </h1>

          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12">
            <p className="md:col-span-7 text-lg md:text-xl leading-relaxed text-neutral-700">
              {EDUCATION.majors}. {EDUCATION.org}, {EDUCATION.date}.{" "}
              {EDUCATION.availability}.
            </p>
            <div className="md:col-span-5 space-y-4 text-[15px] leading-relaxed text-neutral-600">
              <p>
                Marks are per assessment and normalised to a scale of 100. There
                are no course-level grades here, because a course average hides
                which piece of work earned what.
              </p>
              <p>
                I have left off my highest mark anywhere, 88 for a set of
                blockchain lab exercises, because a mark for operating a tool is
                not evidence that I can decide anything. Every document is
                downloadable.
              </p>
            </div>
          </div>

          <div className="mt-24 md:mt-36 space-y-24 md:space-y-32">
            {CATEGORIES.map((cat) => {
              const items = COURSEWORK.filter((c) => c.category === cat.id);
              if (items.length === 0) return null;
              return (
                <section key={cat.id}>
                  <Reveal>
                    <div className="border-t border-foreground/25 pt-5 mb-14 md:mb-20 grid md:grid-cols-12 gap-4 md:gap-12">
                      <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                        {cat.name}
                      </h2>
                      <p className="md:col-span-6 md:col-start-7 text-[15px] md:text-base text-neutral-600 leading-relaxed">
                        {cat.claim}
                      </p>
                    </div>
                  </Reveal>

                  <div className="space-y-20 md:space-y-28">
                    {items.map((c) => (
                      <Reveal key={c.code + c.assessment}>
                        <article className="grid md:grid-cols-12 gap-8 md:gap-12">
                          {/* Left rail: the record. Course code, when, and where the mark lands. */}
                          <div className="md:col-span-4 lg:col-span-3">
                            <div className="md:sticky md:top-32">
                              <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 leading-relaxed">
                                {c.code}
                                <br />
                                {c.assessment.toUpperCase()}
                                <br />
                                {c.date.toUpperCase()}
                              </p>
                              <div className="mt-6">
                                <MarkScale mark={c.mark} band={c.band} />
                              </div>
                            </div>
                          </div>

                          {/* Right: the work. */}
                          <div className="md:col-span-8 lg:col-span-9">
                            <h3 className="text-2xl md:text-[2.5rem] font-medium tracking-[-0.025em] leading-[1.08] max-w-3xl">
                              {c.title}
                            </h3>
                            <p className="mt-3 text-neutral-500 md:text-lg">
                              {c.course}
                            </p>

                            <p className="mt-6 text-[15px] text-neutral-600 leading-relaxed max-w-2xl">
                              {c.author}
                            </p>
                            <p className="mt-4 text-[17px] md:text-lg text-neutral-800 leading-[1.6] max-w-2xl">
                              {c.summary}
                            </p>

                            <details className="mt-7 group max-w-2xl">
                              <summary className="cursor-pointer list-none font-mono text-[10px] tracking-[0.18em] text-neutral-500 hover:text-accent transition inline-flex items-center gap-2">
                                <span className="inline-block w-5 h-px bg-current" />
                                <span className="group-open:hidden">
                                  WHAT I ACTUALLY DID
                                </span>
                                <span className="hidden group-open:inline">
                                  CLOSE
                                </span>
                              </summary>
                              <ul className="mt-5 space-y-3.5">
                                {c.achievements.map((a) => (
                                  <li
                                    key={a}
                                    className="text-[15px] md:text-base text-neutral-700 leading-relaxed pl-6 relative"
                                  >
                                    <span
                                      className="absolute left-0 top-0 font-mono text-[10px] text-accent"
                                      aria-hidden
                                    >
                                      /
                                    </span>
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </details>

                            <div className="max-w-2xl">
                              <DocLinks docs={c.docs} />
                            </div>

                            <p className="mt-8 text-[17px] md:text-lg leading-[1.6] max-w-2xl border-l-2 border-accent pl-5">
                              <span className="block font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-1.5">
                                WHY IT MATTERS
                              </span>
                              {c.whyItMatters}
                            </p>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <Reveal>
            <section className="mt-28 md:mt-40 border-t border-foreground/25 pt-5">
              <div className="grid md:grid-cols-12 gap-4 md:gap-12 mb-12">
                <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                  Courses that produced a project
                </h2>
                <p className="md:col-span-6 md:col-start-7 text-[15px] md:text-base text-neutral-600 leading-relaxed">
                  These five have their work on the projects page instead, so
                  they are captioned once rather than twice. No marks here
                  either: most of these projects draw on more than one
                  assessment, and a single mark would land on the wrong document.
                </p>
              </div>

              <ul className="border-t border-neutral-300/80">
                {COURSE_CROSSREFS.map((c) => (
                  <li key={c.code} className="border-b border-neutral-300/80">
                    <Link
                      href={`/work/${c.slug}`}
                      className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 py-6"
                    >
                      <span className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 w-24 shrink-0 group-hover:text-accent transition">
                        {c.code}
                      </span>
                      <span className="flex-1 text-lg md:text-2xl font-medium tracking-[-0.01em] group-hover:text-accent transition">
                        {c.course}
                      </span>
                      <span className="text-sm text-neutral-500 md:text-right shrink-0 group-hover:text-accent transition">
                        {c.label} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </section>
    </PageFade>
  );
}
