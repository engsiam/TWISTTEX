import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "accent" | "ink" | "paper" | "outlineDark" | "outlineLight";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  accent: "bg-clay text-paper hover:bg-clay-deep",
  ink: "bg-ink text-paper hover:bg-night",
  paper: "bg-paper text-ink hover:bg-sand",
  outlineDark: "border border-paper/35 text-paper hover:border-paper/70 hover:bg-paper/10",
  outlineLight: "border border-ink/25 text-ink hover:border-ink/60",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-[10px] sm:px-6 sm:py-3 sm:text-[11px]",
  lg: "px-5 py-2.5 text-[10px] sm:px-7 sm:py-3.5 sm:text-xs",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "accent",
  size = "md",
  className,
  ariaLabel,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.14em]",
    "transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
