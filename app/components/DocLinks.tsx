import type { Doc } from "../data/portfolio";

/**
 * The assessed document itself. Describing work without letting a reader open it
 * puts the whole weight of the claim on the caption, so every entry that has a
 * file shows it, with the file type and size cues before the click.
 */
export default function DocLinks({
  docs,
  label = "The document",
}: {
  docs?: Doc[];
  label?: string;
}) {
  if (!docs || docs.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500 mb-2">
        {label.toUpperCase()}
      </p>
      <ul className="border-t border-neutral-300/80">
        {docs.map((d) => (
          <li key={d.href} className="border-b border-neutral-300/80">
            <a
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-4 py-3"
            >
              <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-500 w-[5.5rem] shrink-0 group-hover:text-accent transition">
                {d.kind.toUpperCase()}
              </span>
              <span className="flex-1 min-w-0">
                <span className="text-[15px] md:text-base group-hover:text-accent transition">
                  {d.label}
                </span>
                {d.note && (
                  <span className="block text-[13px] text-neutral-500 leading-snug mt-0.5">
                    {d.note}
                  </span>
                )}
              </span>
              <span
                className="text-neutral-400 group-hover:text-accent transition shrink-0"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
