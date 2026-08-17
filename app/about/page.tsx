import { TLink as Link } from "../components/Transition";
import PageFade from "../components/PageFade";
import Reveal from "../components/Reveal";
import {
  CAPABILITIES,
  CAREER_DIRECTION,
  CREDENTIALS,
  EDUCATION,
  SKILLS,
} from "../data/portfolio";

export const metadata = {
  title: "About · Thinh Ngo",
  description:
    "Thinh Ngo, Business Analyst moving toward Product Owner. The method behind the portfolio, and an honest reading of RMIT's Graduate Capability Framework: two capabilities I lead with, one I am still building.",
};

export default function AboutPage() {
  return (
    <PageFade>
      <section className="min-h-screen bg-paper pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            About
          </p>

          <h1 className="font-medium tracking-[-0.035em] leading-[0.9] text-[clamp(2.5rem,8vw,7rem)] max-w-4xl">
            Usually the answer
            <br />
            is no.
          </h1>

          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed text-neutral-800">
              <p>
                I work out why a market is stuck, then decide whether a technology
                actually fixes it. Most of the time it does not, and saying so
                early is worth more than a proposal nobody can build.
              </p>
              <p>
                Supply chain finance, warehouse handling, energy trading,
                ride-hailing, agricultural supply chains, microfinance lending.
                Six markets, and I diagnosed every one the same way: find who
                knows something the other side does not, price what that costs
                them, then test a technology against that diagnosis instead of
                assuming it in. Every one of the six is on this site with the
                assessed document attached.
              </p>
              <p>
                The clearest example is my capstone. An industry panel told me the
                design was over-engineered. I cut it from twelve components to
                five, and I wrote down where I still disagreed with them and why
                the enforcement layer had to stay. That argument is in the
                assessed report, not just in my memory.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <div className="border-t border-foreground/25 pt-5 space-y-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-2">
                    AIMING AT
                  </p>
                  <p className="text-[15px] leading-relaxed text-neutral-800">
                    {CAREER_DIRECTION}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-2">
                    STUDYING
                  </p>
                  <p className="text-[15px] leading-relaxed text-neutral-800">
                    {EDUCATION.degree}, {EDUCATION.org}. {EDUCATION.majors}.{" "}
                    {EDUCATION.note}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-2">
                    AVAILABLE
                  </p>
                  <p className="text-[15px] leading-relaxed text-neutral-800">
                    {EDUCATION.availability}. Based in Ho Chi Minh City.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills first, capabilities second, because the section below argues
              that the second is what you do with the first. Every skill links to
              the artefact that evidences it. Data lives in portfolio.ts. */}
          <Reveal>
            <section className="mt-28 md:mt-40">
              <div className="border-t border-foreground/25 pt-5 mb-14 md:mb-20 grid md:grid-cols-12 gap-4 md:gap-12">
                <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                  The skills, and where each one is evidenced
                </h2>
                <p className="md:col-span-6 md:col-start-7 text-[15px] md:text-base text-neutral-600 leading-relaxed">
                  A list of skills is a list of claims. Each line here names the
                  artefact on this site that shows me using it, so none of them
                  has to be taken on trust. Then the section below is about what I
                  did with them, which is the part that is harder to list.
                </p>
              </div>

              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {SKILLS.map((s) => (
                  <li key={s.skill}>
                    <p className="text-[17px] md:text-lg leading-snug text-neutral-800">
                      {s.skill}
                    </p>
                    <Link
                      href={s.href}
                      className="mt-2 inline-block text-[13px] text-neutral-500 hover:text-accent transition"
                    >
                      Evidenced by: {s.evidence}{" "}
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Graduate Capability Framework. The subordinate capability gets the same
              space as the dominant two, because naming it is the point of the model. */}
          <section className="mt-28 md:mt-40">
            <Reveal>
              <div className="border-t border-foreground/25 pt-5 mb-14 md:mb-20 grid md:grid-cols-12 gap-4 md:gap-12">
                <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                  What RMIT calls capabilities
                </h2>
                <div className="md:col-span-6 md:col-start-7 space-y-4 text-[15px] md:text-base text-neutral-600 leading-relaxed">
                  <p>
                    RMIT names six graduate capabilities. They are not skills. A
                    skill is a noun on a CV, and a capability is the judgement
                    wrapped around it: knowing BPMN notation is the skill, mapping
                    a real company&rsquo;s process to find where it breaks is the
                    capability.
                  </p>
                  <p>
                    Two of the six are where my evidence actually is. One is not,
                    and the framework asks you to say which, so that is on this
                    page at the same size as the other two.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-16 md:space-y-24">
              {CAPABILITIES.map((c) => (
                <Reveal key={c.name}>
                  <article className="grid md:grid-cols-12 gap-8 md:gap-12">
                    <div className="md:col-span-4 lg:col-span-3">
                      <div className="md:sticky md:top-32">
                        <p
                          className={`font-mono text-[10px] tracking-[0.18em] ${
                            c.weight === "Dominant"
                              ? "text-accent"
                              : "text-neutral-500"
                          }`}
                        >
                          {c.weight.toUpperCase()}
                        </p>
                        <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-tight">
                          {c.name}
                        </h3>
                        <p className="mt-4 text-[13px] text-neutral-600 leading-relaxed border-l border-neutral-400 pl-3">
                          RMIT&rsquo;s wording: {c.rmitWording}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-8 lg:col-span-9">
                      <p className="text-[17px] md:text-lg text-neutral-800 leading-[1.6] max-w-2xl">
                        {c.myReading}
                      </p>

                      <p className="mt-7 font-mono text-[10px] tracking-[0.18em] text-neutral-500">
                        WHERE IT SHOWS UP
                      </p>
                      <ul className="mt-2 border-t border-neutral-300/80 max-w-2xl">
                        {c.evidence.map((ev) => (
                          <li
                            key={ev.label}
                            className="border-b border-neutral-300/80"
                          >
                            {ev.href ? (
                              <Link
                                href={ev.href}
                                className="group flex items-baseline justify-between gap-4 py-3.5"
                              >
                                <span className="text-[15px] md:text-base group-hover:text-accent transition">
                                  {ev.label}
                                </span>
                                <span
                                  className="text-neutral-400 group-hover:text-accent transition shrink-0"
                                  aria-hidden
                                >
                                  →
                                </span>
                              </Link>
                            ) : (
                              <p className="py-3.5 text-[15px] md:text-base text-neutral-700">
                                {ev.label}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal>
            <section className="mt-28 md:mt-40 border-t border-foreground/25 pt-5">
              <div className="grid md:grid-cols-12 gap-4 md:gap-12">
                <h2 className="md:col-span-5 text-2xl md:text-3xl font-medium tracking-[-0.02em]">
                  Credentials
                </h2>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-[15px] text-neutral-600 leading-relaxed">
                    {CREDENTIALS.note}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {CREDENTIALS.items.map((i) => (
                      <li
                        key={i}
                        className="text-[15px] text-neutral-700 leading-relaxed pl-6 relative"
                      >
                        <span
                          className="absolute left-0 top-0 font-mono text-[10px] text-neutral-400"
                          aria-hidden
                        >
                          /
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[13px] text-neutral-500 leading-relaxed">
                    Worth being straight about: the GDPR item is a twelve-minute
                    course. My real data-regulation evidence is a marked legal
                    analysis on the{" "}
                    <Link
                      href="/coursework"
                      className="underline underline-offset-4 hover:text-accent"
                    >
                      coursework page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </PageFade>
  );
}
