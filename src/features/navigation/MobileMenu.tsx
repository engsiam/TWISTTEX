import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useAppStore } from "../../store/useAppStore";
import { contact, navLinks } from "../../data/company";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { cn, scrollToSection } from "../../lib/utils";

const menuSwatchChips = [
  {
    id: "chip-denim",
    pattern: "twill" as const,
    palette: { base: "#33475E", warp: "#42586F", weft: "#232F3E" },
  },
  {
    id: "chip-linen",
    pattern: "basket" as const,
    palette: { base: "#E0D2B4", warp: "#EEE2C8", weft: "#CDBA92" },
  },
  {
    id: "chip-cotton",
    pattern: "plain" as const,
    palette: { base: "#EAE2CF", warp: "#F6F1E3", weft: "#D9CDB2" },
  },
  {
    id: "chip-clay",
    pattern: "herringbone" as const,
    palette: { base: "#B0562F", warp: "#C26940", weft: "#8F4523" },
  },
];

const LINK_STAGGER = 0.06;
const LINK_BASE_DELAY = 0.18;

export function MobileMenu() {
  const open = useAppStore((state) => state.mobileNavOpen);
  const setMobileNavOpen = useAppStore((state) => state.setMobileNavOpen);
  const activeSection = useAppStore((state) => state.activeSection);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const overlay = overlayRef.current;
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    document.body.style.overflow = "hidden";
    main?.setAttribute("aria-hidden", "true");
    footer?.setAttribute("aria-hidden", "true");

    const getFocusable = (): HTMLElement[] => {
      const toggle = document.getElementById("mobile-nav-toggle");
      const inside = overlay
        ? Array.from(
            overlay.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
          )
        : [];
      return toggle ? [toggle, ...inside] : inside;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("aria-hidden");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      previouslyFocused?.focus();
    };
  }, [open, setMobileNavOpen]);

  const navigateTo = (id: string) => {
    setMobileNavOpen(false);
    window.setTimeout(() => scrollToSection(id), 340);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          id="mobile-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="thread-grid fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-night text-paper lg:hidden"
          initial={{ opacity: 0, y: "-2%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-2%" }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_0%,rgba(176,86,47,0.16),transparent_60%)]"
          />

          <nav
            aria-label="Mobile"
            className="relative flex flex-1 flex-col justify-center px-7 pt-[4.75rem] sm:px-10"
          >
            <motion.p
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-clay-soft"
            >
              Menu
            </motion.p>

            <ul className="flex flex-col">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="relative">
                    <div className="overflow-hidden">
                      <motion.button
                        type="button"
                        onClick={() => navigateTo(link.id)}
                        aria-current={isActive ? "true" : undefined}
                        className="group flex w-full items-baseline gap-5 py-4 text-left sm:py-5"
                        initial={{ y: "120%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.65,
                          ease: EASE_OUT_EXPO,
                          delay: LINK_BASE_DELAY + index * LINK_STAGGER,
                        }}
                      >
                        <span className="w-6 shrink-0 text-[11px] font-bold tabular-nums tracking-widest text-clay-soft/80">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-[2.1rem] leading-none font-medium tracking-tight transition-colors duration-300 sm:text-[2.75rem]",
                            isActive ? "italic text-clay-soft" : "text-paper"
                          )}
                        >
                          {link.label}
                        </span>
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="mt-1 size-1.5 shrink-0 rounded-full bg-clay-soft"
                          />
                        )}
                      </motion.button>
                    </div>
                    {index < navLinks.length - 1 && (
                      <motion.span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-px w-full origin-left bg-paper/12"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.7,
                          ease: EASE_OUT_EXPO,
                          delay: 0.28 + index * LINK_STAGGER,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="relative mt-auto px-7 pb-[max(2.25rem,env(safe-area-inset-bottom))] pt-8 sm:px-10"
          >
            <div className="flex items-end justify-between gap-6 border-t border-paper/10 pt-7">
              <div className="-space-x-2.5 flex">
                {menuSwatchChips.map((chip) => (
                  <span
                    key={chip.id}
                    className="block size-10 overflow-hidden rounded-lg shadow-panel ring-2 ring-night"
                  >
                    <SwatchChip pattern={chip.pattern} palette={chip.palette} />
                  </span>
                ))}
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-1.5 pb-1 text-xs font-semibold text-mist underline-offset-4 transition-colors hover:text-paper hover:underline"
              >
                {contact.email}
                <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </a>
            </div>

            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="mt-6 w-full rounded-full bg-clay py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-paper transition-colors duration-300 active:bg-clay-deep sm:py-4 sm:text-xs"
            >
              Start an Enquiry
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SwatchChip({
  pattern,
  palette,
}: {
  pattern: "twill" | "basket" | "plain" | "herringbone";
  palette: { base: string; warp: string; weft: string };
}) {
  return (
    <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="40" height="40" fill={palette.base} />
      {pattern === "twill" && (
        <path d="M-10 30L20 0M0 40L30 10M10 50L40 20" stroke={palette.warp} strokeWidth="4" opacity="0.55" />
      )}
      {pattern === "basket" && (
        <>
          <rect width="10" height="10" fill={palette.warp} opacity="0.6" />
          <rect x="10" y="10" width="10" height="10" fill={palette.warp} opacity="0.6" />
          <rect x="10" width="10" height="10" fill={palette.weft} opacity="0.45" />
          <rect y="10" width="10" height="10" fill={palette.weft} opacity="0.45" />
        </>
      )}
      {pattern === "plain" && (
        <>
          <path d="M8 0V40M20 0V40M32 0V40" stroke={palette.warp} strokeWidth="4" opacity="0.55" />
          <path d="M0 8H40M0 20H40M0 32H40" stroke={palette.weft} strokeWidth="4" opacity="0.5" />
        </>
      )}
      {pattern === "herringbone" && (
        <>
          <path d="M0 14L10 4L20 14L30 4L40 14" fill="none" stroke={palette.warp} strokeWidth="3.5" opacity="0.6" />
          <path d="M0 30L10 20L20 30L30 20L40 30" fill="none" stroke={palette.weft} strokeWidth="3.5" opacity="0.5" />
        </>
      )}
    </svg>
  );
}
