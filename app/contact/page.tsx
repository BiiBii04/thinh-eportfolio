import PageFade from "../components/PageFade";

const links = [
  { label: "Email", value: "ngophucthinh2004@gmail.com", href: "mailto:ngophucthinh2004@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/thinhngo0108", href: "https://linkedin.com/in/thinhngo0108" },
  { label: "GitHub", value: "github.com/BiiBii04", href: "https://github.com/BiiBii04" },
];

export default function Contact() {
  return (
    <PageFade>
      <section className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-10 flex flex-col">
        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neutral-400" />
            Get in touch
          </p>

          <h2 className="font-medium tracking-[-0.035em] leading-[0.9] text-[clamp(2.75rem,10vw,9rem)] max-w-4xl">
            Want to <span className="text-accent">work</span> together?
          </h2>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-neutral-700 leading-relaxed">
            I&rsquo;m a final-year RMIT student in Ho Chi Minh City, looking for business analyst work with a path toward product ownership, in enterprise software or emerging tech. Graduate intake or internship, either works. Reach out and I will reply.
          </p>

          <ul className="mt-16 md:mt-20 border-t border-neutral-300/80">
            {links.map((l) => (
              <li key={l.label} className="border-b border-neutral-300/80">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline justify-between py-6 md:py-8 hover:text-accent transition"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-accent transition w-32">
                    {l.label}
                  </span>
                  <span className="text-xl md:text-3xl font-medium tracking-[-0.01em] text-right">
                    {l.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-16 text-xs uppercase tracking-[0.18em] text-neutral-500">
            Based in Ho Chi Minh City · Open to remote and hybrid
          </p>
        </div>
      </section>
    </PageFade>
  );
}
