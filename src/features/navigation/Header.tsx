import { cn, scrollToSection } from "../../lib/utils";
import { useScrolled } from "../../hooks/useScrolled";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useAppStore } from "../../store/useAppStore";
import { navLinks } from "../../data/company";
import { Logo } from "../../components/ui/Logo";

export function Header() {
  const scrolled = useScrolled(24);
  const mobileNavOpen = useAppStore((state) => state.mobileNavOpen);
  const setMobileNavOpen = useAppStore((state) => state.setMobileNavOpen);
  const activeSection = useAppStore((state) => state.activeSection);
  useActiveSection(navLinks);

  const solid = scrolled && !mobileNavOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ease-out",
        solid
          ? "border-b border-ink/10 bg-paper/90 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-paper"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[76rem] items-center justify-between px-5 sm:h-24 sm:px-8">
        <Logo tone={solid ? "dark" : "light"} />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "relative text-[13px] font-semibold tracking-wide transition-colors",
                solid ? "hover:text-clay" : "hover:text-clay-soft",
                activeSection === link.id && (solid ? "text-clay" : "text-clay-soft")
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
                    solid ? "bg-clay" : "bg-clay-soft"
                  )}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            tabIndex={mobileNavOpen ? -1 : undefined}
            className={cn(
              "rounded-full bg-clay px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper transition-all duration-300 hover:bg-clay-deep md:inline-flex",
              mobileNavOpen ? "pointer-events-none opacity-0" : "opacity-100"
            )}
          >
            Start an Enquiry
          </button>

          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav-overlay"
            aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            className={cn(
              "relative z-[90] flex size-9 items-center justify-center rounded-lg border transition-colors duration-300 sm:size-10 sm:rounded-xl lg:hidden",
              mobileNavOpen
                ? "border-paper/25 bg-paper/10 text-paper backdrop-blur-sm"
                : solid
                  ? "border-ink/20 text-ink"
                  : "border-paper/25 text-paper"
            )}
          >
            <span aria-hidden="true" className="relative block h-[10px] w-[22px]">
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                  mobileNavOpen ? "top-[4px] rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                  mobileNavOpen ? "bottom-[4px] -rotate-45" : "bottom-0"
                )}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
