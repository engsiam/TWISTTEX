import { getLenis } from "./smoothScroll";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.4 });
    return;
  }

  el.scrollIntoView({ behavior: "smooth" });
}
