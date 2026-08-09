import PageFade from "../components/PageFade";

export const metadata = {
  title: "Resume — Thinh Ngo",
  description:
    "Final-year Business & Technology student at RMIT Vietnam. Open to internships in product, technology, and business roles.",
};

const metrics = [
  { v: "HD", k: "Top project in course — SCF capstone (RMIT)" },
  { v: "Top 20 / 200", k: "LotusHacks 2026 — Achievia" },
  { v: "Top 12", k: "RMIT ADC 2025 Semifinalist — WWS" },
  { v: "Distinction", k: "Digital Business Design — APEC Water" },
  { v: "1,000+", k: "Student inquiries resolved (Concierge, RMIT)" },
  { v: "300+", k: "English-language calls handled" },
  { v: "150+", k: "Individuals reached via ENACTUS fundraising" },
  { v: "100%", k: "Transaction accuracy in fundraising sales" },
];

export default function Resume() {
  return (
    <PageFade>
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-3 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-neutral-400" />
                Resume · Updated June 2026
              </p>
              <h1 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(2.5rem,8vw,6rem)]">
                Ngo Phuc Thinh
              </h1>
              <p className="mt-4 text-neutral-600 text-lg">
                Ho Chi Minh City, Vietnam ·{" "}
                <a
                  href="mailto:ngophucthinh2004@gmail.com"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  ngophucthinh2004@gmail.com
                </a>{" "}
                ·{" "}
                <a
                  href="https://linkedin.com/in/thinhngo0108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  linkedin.com/in/thinhngo0108
                </a>
              </p>
            </div>
          </div>

          <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-y border-neutral-300/80 py-10">
            {metrics.map((m) => (
              <li key={m.k}>
                <p className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
                  {m.v}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-neutral-500 leading-snug">
                  {m.k}
                </p>
              </li>
            ))}
          </ul>

          <Section label="Education">
            <Entry
              title="Bachelor of Business — RMIT University (Vietnam)"
              sub="Major: Business & Technology · Track: Blockchain-Enabled Business"
              date="October 2022 — Present"
            >
              <ul className="space-y-2">
                <li>
                  Researched AI applications across cybersecurity, retail, and edtech; earned a High Distinction for the report.
                </li>
                <li>
                  Presented findings to a 30-person cohort.
                </li>
              </ul>
            </Entry>
          </Section>

          <Section label="Experience">
            <Entry
              title="Concierge Officer — RMIT Vietnam University"
              sub="Ho Chi Minh City"
              date="Feb 2025 — Aug 2025"
            >
              <ul className="space-y-2">
                <li>
                  Resolved 1,000+ student inquiries in person and by phone across English and Vietnamese, including 300+ calls handled fully in English.
                </li>
                <li>
                  Guided students through university platforms, self-service tools, and academic systems, translating official resources into clear next steps at first contact.
                </li>
              </ul>
            </Entry>

            <Entry
              title="Fundraising Sales — ENACTUS RMIT SGS"
              sub="Student-led social enterprise"
              date="Jul 2024 — Jan 2025"
            >
              <ul className="space-y-2">
                <li>
                  Sold to 50+ students per shift while maintaining a 100% accuracy record across all transactions and customer data entries.
                </li>
                <li>
                  Generated fundraising revenue that financed a charity trip benefiting 150+ individuals.
                </li>
              </ul>
            </Entry>
          </Section>

          <Section label="Selected projects">
            <Entry
              title="SCF Protocol — blockchain supply chain finance"
              sub="RMIT capstone · HD, top project in the course"
              date="2026"
              href="/work/scf"
            >
              <p>
                Designed the Verifiable Payables Token layer of a four-layer protocol on W3C Verifiable Credentials that lets banks cryptographically verify supply-chain payment obligations. Ran anchor-buyer interviews and led the ethics synthesis. Graded HD and ranked top project in the course.
              </p>
            </Entry>

            <Entry
              title="Achievia — AI study-abroad guidance"
              sub="LotusHacks 2026 · Top 20 of 200"
              date="2026"
              href="/work/achievia"
            >
              <p>
                Led market research, customer framing, and the live pitch for an AI platform unifying IELTS/SAT prep, university matching, and scholarship discovery for Vietnamese students. Built in 36 hours with ElevenLabs, Bright Data, and Manus AI.
              </p>
            </Entry>

            <Entry
              title="WWS — Web-based Workplace Simulation"
              sub="RMIT Accessibility Design Competition 2025 · Top 12 Semifinalist"
              date="2025"
              href="/work/wws"
            >
              <p>
                Led interface design, solution development, and cost structure for a two-sided platform connecting HR professionals with neurodivergent and visually impaired job-seekers. Worked alongside professional mentors to redesign the distribution strategy from standalone product to plug-in extension.
              </p>
            </Entry>
          </Section>

          <Section label="What I bring">
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-[17px] leading-relaxed">
              <li>Translating between technical work and non-technical stakeholders</li>
              <li>Market research that grounds product decisions in real user pain</li>
              <li>Pitching, live demos, and presenting under judging conditions</li>
              <li>Using AI as a builder&rsquo;s tool — shipping interfaces and small apps solo</li>
              <li>Cost-structure and business-model thinking on early-stage prototypes</li>
              <li>Finishing what I start, even when the easier move is to drop it</li>
            </ul>
          </Section>

          <div className="mt-20 pt-10 border-t border-neutral-300/80 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-neutral-600 max-w-lg">
              Looking for an internship in product, technology, or anywhere business meets building. The fastest path is email.
            </p>
            <a
              href="mailto:ngophucthinh2004@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium border border-foreground/20 hover:border-accent hover:text-accent transition rounded-full px-5 py-2.5"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </PageFade>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 md:mt-20">
      <h2 className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-8 flex items-center gap-3">
        <span className="inline-block w-8 h-px bg-neutral-400" />
        {label}
      </h2>
      <div className="space-y-10">{children}</div>
    </section>
  );
}

function Entry({
  title,
  sub,
  date,
  href,
  children,
}: {
  title: string;
  sub: string;
  date: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="grid md:grid-cols-12 gap-4 md:gap-8">
      <div className="md:col-span-4">
        {href ? (
          <a
            href={href}
            className="text-xl md:text-2xl font-medium tracking-[-0.01em] hover:text-accent transition"
          >
            {title} <span aria-hidden>→</span>
          </a>
        ) : (
          <h3 className="text-xl md:text-2xl font-medium tracking-[-0.01em]">
            {title}
          </h3>
        )}
        <p className="text-sm text-neutral-600 mt-1">{sub}</p>
        <p className="text-xs uppercase tracking-[0.14em] text-neutral-500 mt-2">
          {date}
        </p>
      </div>
      <div className="md:col-span-8 text-[16px] md:text-[17px] leading-[1.65] text-neutral-800">
        {children}
      </div>
    </article>
  );
}
