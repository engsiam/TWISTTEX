import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, VIEWPORT } from "../../lib/motion";

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function RevealGroup({ children, className, stagger = 0.09 }: RevealGroupProps) {
  return (
    <motion.div
      variants={staggerParent(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
