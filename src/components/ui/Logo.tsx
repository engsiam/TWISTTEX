import { cn } from "../../lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label="Twisttex International — back to top"
    >
      <span
        className={cn(
          "font-display text-[1.35rem] font-semibold tracking-[0.08em]",
          tone === "light" ? "text-paper" : "text-ink"
        )}
      >
        TWISTTEX
      </span>
      <span
        className={cn(
          "mt-1 text-[9px] font-bold uppercase tracking-[0.42em]",
          tone === "light" ? "text-mist" : "text-clay"
        )}
      >
        International
      </span>
    </a>
  );
}
