import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, VIEWPORT } from "../../lib/motion";
import { processSteps } from "../../data/process";
import { scrollToSection } from "../../lib/utils";

const TOTAL = processSteps.length;

/** Timeline node dot — fills clay as scroll progress passes its threshold. */
function StepDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const threshold = TOTAL === 1 ? 1 : index / (TOTAL - 1);
  const backgroundColor = useTransform(
    progress,
    [Math.max(0, threshold - 0.12), threshold],
    ["#DCD2BA", "#B0562F"]
  );
  const scale = useTransform(
    progress,
    [Math.max(0, threshold - 0.12), threshold],
    [0.75, 1]
  );
  return (
    <motion.span
      style={{ backgroundColor, scale }}
      className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-paper shadow-card"
    >
      {String(index + 1).padStart(2, "0")}
    </motion.span>
  );
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section
      ref={sectionRef}
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

        {/* ── Desktop: horizontal timeline ── */}
        <div className="relative mt-16 hidden lg:block">
          {/* Track + animated fill */}
          <div
            aria-hidden="true"
            className="absolute top-[1.375rem] right-[8%] left-[8%] h-px bg-ink/15"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleX: reduceMotion ? 1 : progress }}
            className="absolute top-[1.375rem] right-[8%] left-[8%] h-[2px] origin-left bg-clay"
          />
          <ol className="relative grid grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                transition={{ delay: index * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <StepDot index={index} progress={progress} />
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* ── Mobile / tablet: vertical timeline ── */}
        <ol className="relative mx-auto mt-14 max-w-2xl lg:hidden">
          <div
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-[1.375rem] w-px bg-ink/15"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : progress }}
            className="absolute top-1 bottom-1 left-[1.375rem] w-[2px] origin-top bg-clay"
          />
          {processSteps.map((step, index) => (
            <motion.li
              key={step.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: index * 0.04 }}
              className="relative flex gap-6 pb-10 pl-16 last:pb-0 sm:gap-8 sm:pl-20"
            >
              <span className="absolute left-0 flex size-11 items-center justify-center rounded-full bg-night font-display text-sm font-semibold text-paper shadow-card">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/65">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-xs font-bold uppercase tracking-[0.18em] text-clay transition-colors hover:text-clay-deep"
          >
            Start with a brief →
          </button>
        </div>
      </Container>
    </section>
  );
}
