import PageFade from "../components/PageFade";
import { SKILLS } from "../data/portfolio";

export const metadata = {
  title: "Resume · Thinh Ngo",
  description:
    "Ngo Phuc Thinh. RMIT University Vietnam, dual major in Business and Technology plus Blockchain-enabled Business. Business Analyst moving toward Product Owner.",
};

const metrics = [
  { v: "Industry panel", k: "SCF Protocol capstone pitched live, May 2026" },
  { v: "Top 20 / 200", k: "LotusHacks 2026, Achievia" },
  { v: "Top 12", k: "RMIT Accessibility Design Competition 2025, WWS" },
  { v: "26 months", k: "ENACTUS External Relations, Mar 2024 to May 2026" },
  { v: "1,000+", k: "Student inquiries resolved at RMIT Student Connect" },
  { v: "300+", k: "English-language calls handled" },
  { v: "~10", k: "External guest speakers I was point of contact for" },
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
                Resume · Updated August 2026
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
              title="Bachelor of Business, RMIT University Vietnam"
              sub="Dual major: Business and Technology, plus Blockchain-enabled Business (renamed Digital Economy by RMIT)"
              date="October 2022 to April 2027 (expected)"
            >
              <ul className="space-y-2">
                <li>
                  Coursework complete September 2026, graduating April 2027.
                </li>
                <li>
                  Two full majors rather than one plus a track, which is what
                  the interdisciplinary claim on this site rests on.
                </li>
                <li>
                  Assessed work across both majors is on the{" "}
                  <a
                    href="/coursework"
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    coursework page
                  </a>
                  , with marks per assessment.
                </li>
              </ul>
            </Entry>
          </Section>

          <Section label="Work experience">
            <Entry
              title="External Relations Member, ENACTUS RMIT Vietnam"
              sub="Student-led social enterprise organisation"
              date="March 2024 to May 2026"
            >
              <ul className="space-y-2">
                <li>
                  Named point of contact for roughly ten external guest speakers
                  across two years and two months, and invited them
                  successfully.
                </li>
                <li>
                  Documented by the Event Scale 3 certificate, Ink Your Mark,
                  Semester 1 2025.
                </li>
                <li>
                  My longest-running commitment of any kind, and the clearest
                  evidence I have of building networks outside the university.
                </li>
              </ul>
            </Entry>

            <Entry
              title="Student Support Officer, RMIT University Vietnam"
              sub="RMIT Student Connect, Ho Chi Minh City campus"
              date="February 2025 to August 2025"
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
              title="Fundraising Sales, ENACTUS RMIT SGS"
              sub="Student-led social enterprise"
              date="July 2024 to January 2025"
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
              title="SCF Protocol, blockchain supply chain finance"
              sub="RMIT capstone (ECON1598) · pitched live to an industry panel"
              date="May 2026"
              href="/work/scf"
            >
              <p>
                Designed the Verifiable Payables Token layer of a four-layer protocol on W3C Verifiable Credentials that lets banks cryptographically verify supply-chain payment obligations. Ran anchor-buyer interviews and led the ethics synthesis. The panel called the stack over-engineered; I cut twelve components to five and documented where my reasoning still differed from theirs.
              </p>
            </Entry>

            <Entry
              title="Achievia, AI study-abroad guidance"
              sub="LotusHacks 2026 · Top 20 of 200"
              date="2026"
              href="/work/achievia"
            >
              <p>
                Led market research, customer framing, and the live pitch for an AI platform unifying IELTS/SAT prep, university matching, and scholarship discovery for Vietnamese students. Built in 36 hours with ElevenLabs, Bright Data, and Manus AI.
              </p>
            </Entry>

            <Entry
              title="WWS, a web-based workplace simulation"
              sub="RMIT Accessibility Design Competition 2025 · Top 12 Semifinalist"
              date="2025"
              href="/work/wws"
            >
              <p>
                Led interface design, solution development, and cost structure for a two-sided platform connecting HR professionals with neurodivergent and visually impaired job-seekers. Worked alongside professional mentors to redesign the distribution strategy from standalone product to plug-in extension.
              </p>
            </Entry>
          </Section>

          <Section label="Skills, and where each one is evidenced">
            <p className="text-[15px] text-neutral-600 leading-relaxed max-w-2xl">
              A skill on its own is a claim. Each line below names the artefact
              on this site that shows me using it, so none of them has to be
              taken on trust.
            </p>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6">
              {SKILLS.map((s) => (
                <li key={s.skill}>
                  <p className="text-[17px] leading-snug">{s.skill}</p>
                  <a
                    href={s.href}
                    className="mt-1.5 inline-block text-[13px] text-neutral-500 hover:text-accent transition underline underline-offset-4 decoration-neutral-300"
                  >
                    {s.evidence} <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <div className="mt-20 pt-10 border-t border-neutral-300/80 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-neutral-600 max-w-lg">
              Looking for business analyst work with a path toward product
              ownership, in enterprise software or emerging tech. Graduate intake
              or internship. The fastest path is email.
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
