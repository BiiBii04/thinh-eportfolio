import { TLink as Link } from "./components/Transition";
import PageFade from "./components/PageFade";

export default function NotFound() {
  return (
    <PageFade>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-4">
          404
        </p>
        <h1 className="font-medium tracking-[-0.035em] leading-[0.92] text-[clamp(3rem,12vw,9rem)]">
          Nothing <span className="text-accent">here</span>.
        </h1>
        <p className="mt-8 text-neutral-600 max-w-md">
          The page either moved or never existed. Either way, the rest of the site is one click away.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium border border-foreground/20 hover:border-accent hover:text-accent transition rounded-full px-5 py-2.5"
        >
          Back home <span aria-hidden>→</span>
        </Link>
      </section>
    </PageFade>
  );
}
