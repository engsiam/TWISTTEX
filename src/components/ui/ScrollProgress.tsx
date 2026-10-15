import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin scroll progress bar pinned to the very top of the viewport. */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[85] h-[3px] origin-left bg-gradient-to-r from-clay via-clay to-clay-soft"
    />
  );
}
