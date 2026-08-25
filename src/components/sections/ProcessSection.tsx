import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { processSteps } from "../../data/process";

export function ProcessSection() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.72", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section
      id="process"
      className="bg-parchment py-24 sm:py-32"
      aria-labelledby="process-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          label="Requirement to Delivery"
          title={
            <span id="process-heading">
              A process built for <span className="italic text-clay">certainty</span>
            </span>
          }
          lead="Six controlled stages between your first message and fabric on your floor — each one documented, each one signed off."
          className="mx-auto items-center"
        />

        <ol ref={timelineRef} className="relative mx-auto mt-16 max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-[1.375rem] w-px bg-ink/15"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : progress }}
            className="absolute top-1 bottom-1 left-[1.375rem] w-px origin-top bg-clay"
          />

          {processSteps.map((step, index) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex gap-6 pb-12 pl-16 last:pb-0 sm:gap-8 sm:pl-20"
            >
              <span className="absolute left-0 flex size-11 items-center justify-center rounded-full bg-night font-display text-sm font-semibold text-paper shadow-card">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-ink/65">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
