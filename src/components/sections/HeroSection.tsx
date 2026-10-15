import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { EditableImage } from "../ui/EditableImage";
import { Container } from "../ui/Container";
import { EASE_OUT_EXPO, staggerParent } from "../../lib/motion";
import { scrollToSection } from "../../lib/utils";

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
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.25 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            {/* Layered fabric collage — each slot loads a real photo when
                /public/images/hero-*.jpg exists, weave fallback otherwise */}
            <div className="absolute left-0 top-6 w-[58%] rotate-[-5deg] overflow-hidden rounded-lg shadow-panel ring-1 ring-paper/15">
              <EditableImage
                src="/images/hero-denim.jpg"
                alt="Denim fabric close-up"
                pattern="twill"
                palette={{ base: "#33475E", warp: "#42586F", weft: "#232F3E" }}
                eager
                className="aspect-[3/4] w-full"
              />
            </div>
            <div className="absolute right-[2%] top-0 w-[52%] rotate-[3deg] overflow-hidden rounded-lg shadow-panel ring-1 ring-paper/15">
              <EditableImage
                src="/images/hero-linen.jpg"
                alt="Linen fabric texture"
                pattern="basket"
                palette={{ base: "#E0D2B4", warp: "#EEE2C8", weft: "#CDBA92" }}
                eager
                className="aspect-[3/4] w-full"
              />
            </div>
            <div className="absolute bottom-0 left-[16%] w-[56%] rotate-[-2deg] overflow-hidden rounded-lg shadow-panel ring-1 ring-paper/15">
              <EditableImage
                src="/images/hero-fabric.jpg"
                alt="Close-up of sourced fabric"
                pattern="herringbone"
                palette={{ base: "#B0562F", warp: "#C26940", weft: "#8F4523" }}
                eager
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="absolute -right-3 bottom-10 rounded-full bg-paper px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-ink shadow-panel sm:-right-6">
              Cotton · Linen · Denim · Knits
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
