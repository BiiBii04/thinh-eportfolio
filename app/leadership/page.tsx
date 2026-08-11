import PageFade from "../components/PageFade";
import { LEADERSHIP, RECOGNITION } from "../data/portfolio";

export const metadata = {
  title: "Leadership and recognition — Thinh Ngo",
  description:
    "External relations, project leadership and volunteering across ENACTUS RMIT Vietnam and RMIT industry programmes, with the certificates that document them.",
};

function EntryList({ entries }: { entries: typeof LEADERSHIP }) {
  return (
    <ul className="border-t border-neutral-300/80">
      {entries.map((e) => (
        <li
          key={e.title + e.date}
          className="border-b border-neutral-300/80 py-8 md:py-12"
        >
          <div className="md:grid md:grid-cols-12 md:gap-6 md:items-baseline">
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-4xl font-medium tracking-[-0.02em] leading-[1.1]">
                {e.title}
              </h3>
              <p className="mt-2 text-neutral-600 md:text-lg leading-relaxed">
                {e.org}
              </p>
            </div>
            <p className="md:col-span-4 mt-3 md:mt-0 md:text-right text-xs tracking-[0.16em] uppercase text-neutral-500">
              {e.date}
            </p>
          </div>

          <p className="mt-5 text-[15px] md:text-base text-neutral-700 leading-relaxed max-w-3xl">
            {e.summary}
          </p>

          {e.points && (
            <ul className="mt-4 space-y-2.5 max-w-3xl">
              {e.points.map((p) => (
                <li
                  key={p}
                  className="text-[15px] md:text-base text-neutral-700 leading-relaxed pl-5 relative"
                >
                  <span
                    className="absolute left-0 top-[0.7em] size-1.5 rounded-full bg-neutral-400"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-[15px] md:text-base leading-relaxed max-w-3xl border-l-2 border-accent/60 pl-4">
            <span className="uppercase tracking-[0.14em] text-[11px] text-neutral-500 mr-2">
              Why it matters
            </span>
            {e.whyItMatters}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function LeadershipPage() {
  return (
    <PageFade>
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Leadership and recognition
          </p>

          <h2 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(2.5rem,8vw,7rem)] max-w-5xl mb-8">
            The part a project page cannot show.
          </h2>

          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-700 mb-20 md:mb-28">
            Analysis is one half of the job. The other half is getting people who
            do not report to you to agree on something. This is where that
            evidence lives, and it is also where I am weakest, which is why it
            has its own page rather than a line on a resume.
          </p>

          <section>
            <h3 className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-8">
              Roles
            </h3>
            <EntryList entries={LEADERSHIP} />
          </section>

          <section className="mt-24 md:mt-32">
            <h3 className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-8">
              Certificates and recognition
            </h3>
            <p className="max-w-3xl text-[15px] md:text-base text-neutral-600 leading-relaxed mb-10">
              Four items, each with a signed certificate on file. These are the
              artefacts where somebody who is not me made the judgement, which is
              why they are listed separately from the work they attach to.
            </p>
            <EntryList entries={RECOGNITION} />
          </section>
        </div>
      </section>
    </PageFade>
  );
}