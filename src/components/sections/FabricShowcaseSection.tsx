import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SwatchVisual } from "../ui/SwatchVisual";
import { Button } from "../ui/Button";
import { EASE_OUT_EXPO, fadeUp, VIEWPORT } from "../../lib/motion";
import { showcaseSwatches } from "../../data/products";
import { cn, scrollToSection } from "../../lib/utils";

const AUTOPLAY_INTERVAL_MS = 5000;

export function FabricShowcaseSection() {
  const reducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(showcaseSwatches[0].id);
  const userLockedRef = useRef(false);
  const hoveredRef = useRef(false);

  const activeIndex = Math.max(
    0,
    showcaseSwatches.findIndex((swatch) => swatch.id === activeId)
  );
  const active = showcaseSwatches[activeIndex];

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      if (userLockedRef.current || hoveredRef.current) return;
      setActiveId((current) => {
        const currentIndex = showcaseSwatches.findIndex((swatch) => swatch.id === current);
        return showcaseSwatches[(currentIndex + 1) % showcaseSwatches.length].id;
      });
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const handleSelect = (id: string) => {
    userLockedRef.current = true;
    setActiveId(id);
  };

  return (
    <section
      className="relative overflow-hidden bg-night py-24 text-paper sm:py-32"
      aria-labelledby="showcase-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(176,86,47,0.13),transparent_65%)]"
      />

      <Container className="relative">
        <SectionHeading
          align="center"
          label="Fabric Showcase"
          title={
            <span id="showcase-heading" className="text-white">
              A closer look at the <span className="italic text-clay-soft">cloth</span>
            </span>
          }
          lead="Surface, construction and handfeel — studied before it ever reaches your lab-dip review."
        />

        <div
          className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14"
          onMouseEnter={() => {
            hoveredRef.current = true;
          }}
          onMouseLeave={() => {
            hoveredRef.current = false;
          }}
        >
          {/* Featured material stage */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:col-span-7"
          >
            <div
              role="tabpanel"
              aria-label={`Material study: ${active.title}`}
              className="relative h-[26rem] overflow-hidden rounded-xl shadow-panel ring-1 ring-paper/12 sm:h-[32rem] lg:h-full lg:min-h-[34rem]"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
                >
                  <SwatchVisual
                    pattern={active.pattern}
                    palette={active.palette}
                    className="h-full w-full"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-night/20"
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.id}-meta`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="absolute inset-x-0 bottom-0 p-6 sm:p-8"
                >
                  <p className="font-display text-sm italic tracking-wide text-clay-soft">
                    /{String(activeIndex + 1).padStart(2, "0")} — {active.weave}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-medium text-white sm:text-4xl">
                    {active.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/80">
                    {active.note}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute right-4 top-4 rounded-full border border-paper/20 bg-night/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-paper/85 backdrop-blur-sm">
                Material study
              </div>
            </div>
          </motion.div>

          {/* Material index */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: 0.12 }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-clay-soft">
              Material Index
            </p>

            <div role="tablist" aria-label="Select a material" className="flex flex-col">
              {showcaseSwatches.map((swatch, index) => {
                const isActive = swatch.id === active.id;
                return (
                  <button
                    key={swatch.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleSelect(swatch.id)}
                    className={cn(
                      "relative rounded-lg px-4 py-3.5 text-left transition-colors duration-300 sm:py-4",
                      isActive ? "text-white" : "text-paper/65 hover:text-paper"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="showcase-active-pill"
                        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                        className="absolute inset-0 rounded-lg bg-night-raised ring-1 ring-paper/10"
                        aria-hidden="true"
                      />
                    )}

                    <span className="relative z-10 flex items-center justify-between gap-4">
                      <span className="flex items-baseline gap-4">
                        <span className="text-[11px] font-bold tabular-nums tracking-widest text-clay-soft">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-medium sm:text-xl">
                          {swatch.title}
                        </span>
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className={cn(
                          "size-4 shrink-0 transition-all duration-300",
                          isActive ? "translate-x-0 text-clay-soft opacity-100" : "-translate-x-1 opacity-0"
                        )}
                        strokeWidth={2}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 border-t border-paper/10 pt-6">
              <p className="max-w-sm text-sm leading-relaxed text-mist">
                Need a construction you don&rsquo;t see here? We develop against your
                reference swatch, tech pack or target handfeel.
              </p>
              <Button
                variant="outlineDark"
                className="mt-5"
                onClick={() => scrollToSection("contact")}
              >
                Request Full Library
                <ArrowRight className="size-3.5" strokeWidth={2.25} />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
