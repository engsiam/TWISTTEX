import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
}

export function SectionLabel({ children, tone = "light", align = "start" }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em]",
        tone === "light" ? "text-clay" : "text-clay-soft",
        align === "center" && "justify-center"
      )}
    >
      <span aria-hidden="true" className="h-px w-9 bg-current opacity-80" />
      {children}
      {align === "center" && (
        <span aria-hidden="true" className="h-px w-9 bg-current opacity-80" />
      )}
    </span>
  );
}
