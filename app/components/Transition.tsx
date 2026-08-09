"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Ctx = { navigate: (href: string) => void; isTransitioning: boolean };
const TransitionCtx = createContext<Ctx>({
  navigate: () => {},
  isTransitioning: false,
});

export const useTransition = () => useContext(TransitionCtx);

const COVER_MS = 550;
const REVEAL_DELAY_MS = 80;

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [covering, setCovering] = useState(false);
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    if (pendingHref.current && pendingHref.current === pathname) {
      pendingHref.current = null;
      const t = setTimeout(() => setCovering(false), REVEAL_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (!href || href === pathname || covering) return;
      pendingHref.current = href;
      setCovering(true);
      window.setTimeout(() => router.push(href), COVER_MS);
    },
    [pathname, router, covering]
  );

  return (
    <TransitionCtx.Provider value={{ navigate, isTransitioning: covering }}>
      {children}
      <AnimatePresence>
        {covering && (
          <motion.div
            key="curtain"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: COVER_MS / 1000,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[100] bg-neutral-900 pointer-events-none flex items-end p-8"
          >
            <span className="text-white/60 text-[11px] tracking-[0.22em] uppercase">
              <span className="inline-block size-1.5 rounded-full bg-accent mr-2 align-middle" />
              Thinh Ngo
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionCtx.Provider>
  );
}

export function TLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { navigate } = useTransition();
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#");

  if (isExternal) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}