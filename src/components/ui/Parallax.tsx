import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total drift in px across the viewport pass (split ±half). */
  distance?: number;
}

/** Gentle scroll-linked vertical drift. Disabled under reduced motion. */
export function Parallax({ children, className, distance = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduceMotion ? undefined : { y }} className="h-full">
        {children}
      </motion.div>
    </div>
  );
}
