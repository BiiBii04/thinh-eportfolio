"use client";

import { usePathname } from "next/navigation";
import { TLink } from "./Transition";

const links = [
  { href: "/work", label: "Work" },
  { href: "/coursework", label: "Coursework" },
  { href: "/leadership", label: "Leadership" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 pt-6 flex items-start justify-between gap-4 text-[12px] md:text-[13px] tracking-tight text-white mix-blend-difference">
      <TLink href="/" className="font-medium shrink-0 hover:opacity-60 transition">
        <span className="md:hidden">© Thinh Ngo</span>
        <span className="hidden md:inline">© Thinh Ngo, 2026</span>
      </TLink>
      <nav className="flex flex-wrap justify-end gap-x-3 gap-y-1 md:gap-x-7">
        {links.map((l) => {
          const active =
            l.href === "/"
              ? pathname === "/"
              : pathname.startsWith(l.href);
          return (
            <TLink
              key={l.href}
              href={l.href}
              className="relative flex items-center gap-1.5 md:gap-2 hover:opacity-60 transition"
            >
              <span
                className={`hidden md:inline-block size-1.5 rounded-full transition ${
                  active ? "bg-accent" : "bg-transparent"
                }`}
                aria-hidden
              />
              <span className={active ? "font-medium" : undefined}>
                {l.label}
              </span>
            </TLink>
          );
        })}
      </nav>
    </header>
  );
}