import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2", className)}
      aria-label="Twisttex International — back to top"
    >
      <img
        src="/logo.png"
        alt="Twisttex International"
        className={cn(
          "h-14 w-auto sm:h-16 lg:h-20",
          tone === "light" ? "brightness-0 invert" : ""
        )}
        width={280}
        height={80}
      />
    </Link>
  );
}
