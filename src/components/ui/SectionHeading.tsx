import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { staggerParent, VIEWPORT } from "../../lib/motion";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  lead,
  tone = "light",
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerParent(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <SectionLabel tone={tone} align={align}>
        {label}
      </SectionLabel>
      <h2
        className={cn(
          "max-w-2xl font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance sm:text-5xl",
          tone === "light" ? "text-ink" : "text-paper"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ink/70" : "text-mist"
          )}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}
