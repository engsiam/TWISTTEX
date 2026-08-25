import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { SwatchVisual } from "../ui/SwatchVisual";
import { Container } from "../ui/Container";
import { EASE_OUT_EXPO, staggerParent } from "../../lib/motion";
import { scrollToSection } from "../../lib/utils";

const heroProofs = [
  { title: "Woven & knit", caption: "Multi-category sourcing" },
  { title: "Quality-first", caption: "Inspection at every stage" },
  { title: "Buyer-aligned", caption: "Clear, responsive communication" },
  { title: "Export-ready", caption: "Documentation & logistics support" },
];

const heroSwatches = [
  {
    id: "hero-denim",
    pattern: "twill" as const,
    palette: { base: "#33475E", warp: "#42586F", weft: "#232F3E" },
    className: "left-0 top-6 w-[58%] rotate-[-5deg]",
  },
  {
    id: "hero-linen",
    pattern: "basket" as const,
    palette: { base: "#E0D2B4", warp: "#EEE2C8", weft: "#CDBA92" },
    className: "right-[2%] top-0 w-[52%] rotate-[3deg]",
  },
  {
    id: "hero-clay",
    pattern: "herringbone" as const,
    palette: { base: "#B0562F", warp: "#C26940", weft: "#8F4523" },
    className: "bottom-0 left-[16%] w-[56%] rotate-[-2deg]",
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 50]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="thread-grid relative overflow-hidden bg-night text-paper"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_20%,rgba(176,86,47,0.16),transparent_65%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 pb-16 pt-36 sm:pt-44 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-40">
          <motion.div
            style={{ y: contentY }}
            variants={staggerParent(0.11)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <SectionLabel tone="dark">Fabric Sourcing & Development</SectionLabel>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 34 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-7 font-display text-[2.85rem] leading-[1.04] font-medium tracking-tight text-balance sm:text-6xl xl:text-[4.6rem]"
            >
              Premium fabrics.
              <br />
              Reliable sourcing.
              <br />
              <span className="italic text-clay-soft">Global partnerships.</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            >
              Twisttex International sources, develops and inspects fabrics for apparel
              businesses that refuse to compromise on quality — from first swatch to
              final shipment.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: EASE_OUT_EXPO },
                },
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Start an Enquiry
              </Button>
              <Button size="lg" variant="outlineDark" onClick={() => scrollToSection("fabrics")}>
                Explore Fabrics
              </Button>
            </motion.div>

            <motion.dl
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.35 },
                },
              }}
              className="mt-16 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-paper/15 pt-8 md:grid-cols-4"
            >
              {heroProofs.map((proof) => (
                <div key={proof.title}>
                  <dt className="text-sm font-bold tracking-wide">{proof.title}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-mist">{proof.caption}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.25 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            {heroSwatches.map((swatch) => (
              <div
                key={swatch.id}
                className={`absolute overflow-hidden rounded-lg shadow-panel ring-1 ring-paper/15 ${swatch.className}`}
              >
                <SwatchVisual pattern={swatch.pattern} palette={swatch.palette} className="h-full w-full" />
              </div>
            ))}
            <div className="absolute -right-3 bottom-10 rounded-full bg-paper px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ink shadow-panel sm:-right-6">
              Cotton · Linen · Denim · Knits
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
