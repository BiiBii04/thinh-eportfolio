import { TLink as Link } from "./Transition";
import PageFade from "./PageFade";
import { PROJECTS } from "../data/portfolio";

type Fact = { label: string; value: string };
type Block = { heading: string; body: React.ReactNode };
type Artifact = { label: string; href?: string; note?: string };

type Props = {
  /** Matches a slug in PROJECTS. Drives the closing band, so it is written once. */
  slug: string;
  n: string;
  title: string;
  tagline: string;
  facts: Fact[];
  tldr: string;
  blocks: Block[];
  artifacts?: Artifact[];
  next?: { href: string; label: string };
};

export default function CaseStudy({
  slug,
  n,
  title,
  tagline,
  facts,
  tldr,
  blocks,
  artifacts,
  next,
}: Props) {
  const project = PROJECTS.find((p) => p.slug === slug);
  return (
    <PageFade>
      <article className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="text-xs tracking-[0.18em] uppercase text-neutral-500 hover:text-accent transition"
          >
            ← All projects
          </Link>

          <div className="mt-8 flex items-baseline gap-6">
            <span className="text-sm tabular-nums text-neutral-500">{n}</span>
            <h1 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(2.5rem,9vw,7rem)]">
              {title}
            </h1>
          </div>

          <p className="mt-6 text-xl md:text-2xl text-neutral-700 max-w-3xl leading-snug">
            {tagline}
          </p>

          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-t border-b border-neutral-300/80 py-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[11px] tracking-[0.18em] uppercase text-neutral-500 mb-2">
                  {f.label}
                </dt>
                <dd className="text-sm leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-14 grid md:grid-cols-12 gap-8 md:gap-12">
            <p className="md:col-span-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
              TL;DR
            </p>
            <p className="md:col-span-9 text-lg md:text-xl leading-relaxed">
              {tldr}
            </p>
          </section>

          <div className="mt-20 space-y-16">
            {blocks.map((b) => (
              <section key={b.heading} className="grid md:grid-cols-12 gap-8 md:gap-12">
                <h3 className="md:col-span-3 text-sm uppercase tracking-[0.16em] text-neutral-500">
                  {b.heading}
                </h3>
                <div className="md:col-span-9 text-[17px] md:text-lg leading-[1.7] text-neutral-800 space-y-5">
                  {b.body}
                </div>
              </section>
            ))}
          </div>

          {artifacts && artifacts.length > 0 && (
            <section className="mt-20 grid md:grid-cols-12 gap-8 md:gap-12">
              <h3 className="md:col-span-3 text-sm uppercase tracking-[0.16em] text-neutral-500">
                Artifacts
              </h3>
              <ul className="md:col-span-9 border-t border-neutral-300/80">
                {artifacts.map((a) => {
                  const isExternal = a.href?.startsWith("http");
                  const content = (
                    <span className="flex items-baseline justify-between py-5 group">
                      <span className="text-lg md:text-2xl font-medium tracking-[-0.01em] group-hover:text-accent transition">
                        {a.label}
                      </span>
                      <span className="text-xs uppercase tracking-[0.16em] text-neutral-500 group-hover:text-accent transition ml-6 shrink-0">
                        {a.href ? (isExternal ? "Open ↗" : "Download ↓") : a.note ?? "On request"}
                      </span>
                    </span>
                  );
                  return (
                    <li
                      key={a.label}
                      className="border-b border-neutral-300/80"
                    >
                      {a.href ? (
                        <a
                          href={a.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="opacity-80">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* The closing band. Written once in portfolio.ts and repeated on every
              case study, because a reader who clicks in should not lose the
              caption they clicked from. */}
          {project && (
            <section className="mt-20 border-t border-foreground/25 pt-10 grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-3">
                <h3 className="text-sm uppercase tracking-[0.16em] text-neutral-500">
                  What it built
                </h3>
                {project.capabilities && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.capabilities.map((c) => (
                      <li key={c}>
                        <Link
                          href="/about"
                          className="inline-block text-[12px] tracking-[0.04em] border border-foreground/20 rounded-full px-3 py-1.5 hover:border-accent hover:text-accent transition"
                        >
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-3 text-[12px] text-neutral-500 leading-relaxed">
                  RMIT graduate capabilities. The wording and the rest of my
                  evidence are on the about page.
                </p>
              </div>

              <div className="md:col-span-9 space-y-8">
                {project.taught && (
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-2">
                      WHAT IT TAUGHT ME
                    </p>
                    <p className="text-[17px] md:text-lg leading-[1.6] text-neutral-800 max-w-2xl">
                      {project.taught}
                    </p>
                  </div>
                )}
                <div className="border-l-2 border-accent pl-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-2">
                    WHY IT MATTERS FOR WHERE I AM HEADED
                  </p>
                  <p className="text-[17px] md:text-lg leading-[1.6] text-neutral-800 max-w-2xl">
                    {project.whyItMatters}
                  </p>
                </div>
              </div>
            </section>
          )}

          {next && (
            <div className="mt-24 pt-10 border-t border-neutral-300/80">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-3">
                Next project
              </p>
              <Link
                href={next.href}
                className="text-3xl md:text-5xl font-medium tracking-[-0.02em] hover:text-accent transition"
              >
                {next.label} →
              </Link>
            </div>
          )}
        </div>
      </article>
    </PageFade>
  );
}
