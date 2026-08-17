import PageFade from "../components/PageFade";
import Reveal from "../components/Reveal";
import { SpanAxis, SpanBar } from "../components/Gauges";
import { LEADERSHIP, RECOGNITION, type Entry } from "../data/portfolio";

export const metadata = {
  title: "Leadership and awards · Thinh Ngo",
  description:
    "External relations, project leadership and volunteering across ENACTUS RMIT Vietnam and RMIT industry programmes, with the four signed certificates that document them.",
};

function EntryRow({ e }: { e: Entry }) {
  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-12">
      {/* Left rail: how long it ran, or who signed it. The anchor a mark would be. */}
      <div className="md:col-span-4 lg:col-span-3">
        <div className="md:sticky md:top-32">
          <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase leading-relaxed">
            {e.date}
          </p>
          {e.span && (
            <div className="mt-5">
              <SpanBar from={e.span.from} to={e.span.to} />
            </div>
          )}
          {e.signedBy && (
            <div className="mt-5">
              <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500">
                SIGNED BY
              </p>
              <p className="mt-1.5 text-[13px] text-neutral-700 leading-snug">
                {e.signedBy}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-8 lg:col-span-9">
        <h3 className="text-2xl md:text-[2.5rem] font-medium tracking-[-0.025em] leading-[1.08] max-w-3xl">
          {e.title}
        </h3>
        <p className="mt-3 text-neutral-500 md:text-lg leading-relaxed max-w-2xl">
          {e.org}
        </p>

        <p className="mt-6 text-[17px] md:text-lg text-neutral-800 leading-[1.6] max-w-2xl">
          {e.summary}
        </p>

        {e.points && (
          <ul className="mt-5 space-y-3.5 max-w-2xl">
            {e.points.map((p) => (
              <li
                key={p}
                className="text-[15px] md:text-base text-neutral-700 leading-relaxed pl-6 relative"
              >
                <span
                  className="absolute left-0 top-0 font-mono text-[10px] text-accent"
                  aria-hidden
                >
                  /
                </span>
                {p}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 text-[17px] md:text-lg leading-[1.6] max-w-2xl border-l-2 border-accent pl-5">
          <span className="block font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-1.5">
            WHY IT MATTERS
          </span>
          {e.whyItMatters}
        </p>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <PageFade>
      <section className="min-h-screen bg-paper pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Leadership, volunteering and awards
          </p>

          <h1 className="font-medium tracking-[-0.035em] leading-[0.9] text-[clamp(2.5rem,8vw,7rem)] max-w-4xl">
            The half a project
            <br />
            page cannot show.
          </h1>

          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12">
            <p className="md:col-span-7 text-lg md:text-xl leading-relaxed text-neutral-700">
              Analysis is one half of the job. The other half is getting people
              who do not report to you to agree on something, and there is no
              mark for that.
            </p>
            <p className="md:col-span-5 text-[15px] leading-relaxed text-neutral-600">
              So the measures here are the two that can be checked: how long each
              commitment actually ran, and who put their name to it. This is also
              the area I am weakest in, which is why it has its own page instead
              of a line on a resume.
            </p>
          </div>

          <section className="mt-24 md:mt-36">
            <Reveal>
              <div className="border-t border-foreground/25 pt-5 mb-14 md:mb-20 grid md:grid-cols-12 gap-4 md:gap-12">
                <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em]">
                  Roles
                </h2>
                <div className="md:col-span-6 md:col-start-7">
                  <SpanAxis />
                  <p className="text-[13px] text-neutral-500 leading-relaxed mt-2">
                    Every bar below is drawn against this axis, so the lengths are
                    comparable. The 26-month one is the longest thing I have done.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-20 md:space-y-28">
              {LEADERSHIP.map((e) => (
                <Reveal key={e.title + e.date}>
                  <EntryRow e={e} />
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-28 md:mt-40">
            <Reveal>
              <div className="border-t border-foreground/25 pt-5 mb-14 md:mb-20 grid md:grid-cols-12 gap-4 md:gap-12">
                <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                  Awards and certificates
                </h2>
                <p className="md:col-span-6 md:col-start-7 text-[15px] md:text-base text-neutral-600 leading-relaxed">
                  Four items, each with a signed certificate on file. These are
                  the artefacts where somebody who is not me made the judgement,
                  which is why the signatory is the first thing listed.
                </p>
              </div>
            </Reveal>

            <div className="space-y-20 md:space-y-28">
              {RECOGNITION.map((e) => (
                <Reveal key={e.title + e.date}>
                  <EntryRow e={e} />
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageFade>
  );
}
