import { TLink as Link } from "../components/Transition";
import PageFade from "../components/PageFade";
import DocLinks from "../components/DocLinks";
import { CATEGORIES, PROJECTS, CAREER_DIRECTION } from "../data/portfolio";

export const metadata = {
  title: "Work — Thinh Ngo",
  description:
    "Nine projects grouped by capability: design and build, technology and regulatory assessment, and analysis into decision. Every entry carries its title, author, date and why it matters for the career direction.",
};

export default function Work() {
  return (
    <PageFade>
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Selected work, 2024 to 2026
          </p>

          <h2 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(2.5rem,8vw,7rem)] max-w-5xl mb-8">
            Nine projects, one method.
          </h2>

          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-700 mb-20 md:mb-28">
            These are grouped by what they prove I can do, not by industry or by
            course. Read the three headings together and they describe one job:{" "}
            {CAREER_DIRECTION.toLowerCase()} Every entry carries who made it,
            when, and why it is here.
          </p>

          <div className="space-y-24 md:space-y-32">
            {CATEGORIES.map((cat) => {
              const items = PROJECTS.filter((p) => p.category === cat.id);
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

                  <ul className="divide-y divide-neutral-300/80 border-t border-b border-neutral-300/80">
                    {items.map((p) => {
                      const body = (
                        <>
                          <div className="md:grid md:grid-cols-12 md:gap-6 md:items-baseline">
                            <span className="block md:col-span-1 text-xs md:text-sm tabular-nums text-neutral-500">
                              {p.n}
                            </span>
                            <div className="md:col-span-7 mt-1 md:mt-0">
                              <h4
                                className={`text-3xl md:text-5xl font-medium tracking-[-0.02em] transition ${
                                  p.hasPage ? "group-hover:text-accent" : ""
                                }`}
                              >
                                {p.title}
                              </h4>
                              <p className="text-neutral-600 mt-1.5 md:mt-2 md:text-lg">
                                {p.kicker}
                              </p>
                            </div>
                            <div className="md:col-span-4 mt-3 md:mt-0 md:text-right text-xs tracking-[0.16em] uppercase text-neutral-500 leading-relaxed">
                              {p.date}
                              {p.outcome && (
                                <>
                                  <br />
                                  <span className="text-accent normal-case tracking-normal text-[13px]">
                                    {p.outcome}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 md:mt-6">
                            <p className="md:col-span-1" aria-hidden />
                            <div className="md:col-span-11 space-y-3">
                              <p className="text-sm text-neutral-600 leading-relaxed">
                                {p.author}
                              </p>
                              <p className="text-[15px] md:text-base text-neutral-700 leading-relaxed max-w-3xl">
                                {p.summary}
                              </p>
                              <p className="text-[15px] md:text-base leading-relaxed max-w-3xl border-l-2 border-accent/60 pl-4">
                                <span className="uppercase tracking-[0.14em] text-[11px] text-neutral-500 mr-2">
                                  Why it matters
                                </span>
                                {p.whyItMatters}
                              </p>
                              {p.hasPage && (
                                <p className="text-xs tracking-[0.16em] uppercase text-neutral-500 pt-1 group-hover:text-accent transition">
                                  Read the case study →
                                </p>
                              )}
                            </div>
                          </div>
                        </>
                      );

                      return (
                        <li key={p.slug} className="group">
                          {p.hasPage ? (
                            <Link
                              href={`/work/${p.slug}`}
                              className="block py-8 md:py-12 hover:bg-foreground/[0.02] transition px-2 -mx-2 rounded-sm"
                            >
                              {body}
                            </Link>
                          ) : (
                            <div className="py-8 md:py-12 px-2 -mx-2">
                              {body}
                              <div className="md:grid md:grid-cols-12 md:gap-6">
                                <p className="md:col-span-1" aria-hidden />
                                <div className="md:col-span-11 max-w-2xl">
                                  <DocLinks docs={p.docs} />
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>

          <p className="mt-20 text-sm text-neutral-500 max-w-3xl leading-relaxed">
            Six of these have a full case study. Three are assessed coursework
            documents you can open directly from the card. Marks are not shown on
            this page, because most of these projects draw on more than one
            assessment and a single mark would land on the wrong document. Marks
            appear on the{" "}
            <Link
              href="/coursework"
              className="underline underline-offset-4 hover:text-accent"
            >
              coursework page
            </Link>
            , where one entry maps to one assessment.
          </p>
        </div>
      </section>
    </PageFade>
  );
}