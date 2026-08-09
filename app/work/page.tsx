import { TLink as Link } from "../components/Transition";
import PageFade from "../components/PageFade";

const projects = [
  {
    n: "01",
    slug: "scf",
    title: "SCF Protocol",
    sub: "Blockchain-based supply chain finance for Vietnam's export suppliers",
    meta: "RMIT Capstone · HD, top of course",
    role: "Payables Token design, anchor-buyer interviews, ethics synthesis",
    year: "2026",
  },
  {
    n: "02",
    slug: "achievia",
    title: "Achievia",
    sub: "AI study-abroad guidance for Vietnamese students",
    meta: "LotusHacks 2026 · Top 20 of 200",
    role: "Pitch lead, market research, live demo",
    year: "2026",
  },
  {
    n: "03",
    slug: "wws",
    title: "WWS",
    sub: "Web-based workplace simulation for HR and people with disabilities",
    meta: "RMIT ADC 2025 · Top 12 Semifinalist",
    role: "Interface design, solution development, cost structure",
    year: "2025",
  },
  {
    n: "04",
    slug: "apec",
    title: "APEC Water",
    sub: "Digital-transformation blueprint for a water-filtration company's operations",
    meta: "RMIT ISYS2128 · Distinction",
    role: "System architecture, network topology, solution development",
    year: "2024",
  },
  {
    n: "05",
    slug: "microloan",
    title: "Microloan Default",
    sub: "ML credit-risk model for a Vietnamese microloan lender",
    meta: "RMIT ECON1612 · Individual",
    role: "Full ML pipeline, modelling, SHAP, screening rule",
    year: "2025",
  },
  {
    n: "06",
    slug: "ups",
    title: "UPS Location Model",
    sub: "ML expansion lead-list for a parcel network's drop-box footprint",
    meta: "RMIT ECON1612 · Team",
    role: "Analytical lead, variable selection & EDA, business implications",
    year: "2025",
  },
];

export default function Work() {
  return (
    <PageFade>
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Selected work, 2025 — 2026
          </p>

          <h2 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(2.5rem,8vw,7rem)] max-w-5xl mb-16 md:mb-24">
            Things I helped ship.
          </h2>

          <ul className="divide-y divide-neutral-300/80 border-t border-b border-neutral-300/80">
            {projects.map((p) => (
              <li key={p.slug} className="group">
                <Link
                  href={`/work/${p.slug}`}
                  className="block md:grid md:grid-cols-12 md:gap-4 py-7 md:py-10 md:items-baseline hover:bg-foreground/[0.02] transition px-2 -mx-2 rounded-sm"
                >
                  <span className="block md:col-span-1 text-xs md:text-sm tabular-nums text-neutral-500">
                    {p.n}
                  </span>
                  <div className="md:col-span-5 mt-1 md:mt-0">
                    <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] group-hover:text-accent transition">
                      {p.title}
                    </h3>
                    <p className="text-neutral-600 mt-1.5 md:mt-2 md:text-lg">{p.sub}</p>
                  </div>
                  <p className="md:col-span-4 mt-3 md:mt-0 text-sm text-neutral-700 leading-relaxed">
                    {p.role}
                  </p>
                  <div className="md:col-span-2 mt-2 md:mt-0 md:text-right text-xs tracking-[0.16em] uppercase text-neutral-500">
                    {p.meta}
                    <span className="md:hidden"> · </span>
                    <br className="hidden md:block" />
                    {p.year}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm text-neutral-500">
            More writing and side projects coming. In the meantime, the{" "}
            <Link href="/contact" className="underline underline-offset-4 hover:text-accent">
              contact page
            </Link>{" "}
            is the fastest path.
          </p>
        </div>
      </section>
    </PageFade>
  );
}
