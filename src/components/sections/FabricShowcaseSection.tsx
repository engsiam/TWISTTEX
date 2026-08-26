import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionLabel } from "../ui/SectionLabel";
import { SwatchVisual } from "../ui/SwatchVisual";
import { Button } from "../ui/Button";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { showcaseSwatches } from "../../data/products";
import { scrollToSection } from "../../lib/utils";
import type { ShowcaseSwatch } from "../../types";

/* Leading inset that aligns the rail with the page container. */
const STAGE_INSET = "pl-[max(1.25rem,calc((100vw-76rem)/2+2rem))]";

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

/* Ghost numerals must stay legible on every weave — pick ink or paper
   based on the swatch's base luminance. */
function isLightHex(hex: string): boolean {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;
}

/* ── Card — one panel on the horizontal rail ───────────────────────── */

function ShowcaseCard({
  swatch,
  index,
}: {
  swatch: ShowcaseSwatch;
  index: number;
}) {
  return (
    <article className="group relative h-[26rem] w-[20rem] shrink-0 overflow-hidden rounded-xl border border-paper/10 bg-night-raised shadow-panel transition-transform duration-300 hover:-translate-y-1.5 sm:h-[28rem] sm:w-[23rem]">
      {/* Procedural weave visual */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <SwatchVisual
          pattern={swatch.pattern}
          palette={swatch.palette}
          className="h-full w-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(176,86,47,0.14),transparent_55%)]"
        />
      </div>

      {/* Ghost numeral — contrast-aware so it reads on every palette */}
      <span
        aria-hidden="true"
        className={
          "pointer-events-none absolute right-3 top-14 select-none font-display text-[7.5rem] font-bold leading-none sm:text-[9rem] " +
          (isLightHex(swatch.palette.base)
            ? "text-ink/[0.12]"
            : "text-paper/[0.14]")
        }
      >
        {pad(index + 1)}
      </span>

      {/* Readability scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent"
      />

      {/* Counter */}
      <span className="absolute right-4 top-4 rounded-full border border-paper/15 bg-night/50 px-3 py-1 font-display text-[0.65rem] font-bold tabular-nums tracking-[0.22em] text-mist backdrop-blur-sm">
        {pad(index + 1)} / {pad(showcaseSwatches.length)}
      </span>

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-clay-soft">
          {swatch.weave}
        </p>
        <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-white">
          {swatch.title}
        </h3>
        <p className="mt-1.5 font-display text-sm italic text-clay-soft/90">
          {swatch.note}
        </p>

        <span className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mist/80 transition-colors duration-300 group-hover:text-clay-soft">
          Swatch details
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </article>
  );
}

/* ── Progress rail: index left · line centre · total right ─────────── */

function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  const fillWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  const markerLeft = useTransform(
    progress,
    [0, 1],
    ["0%", "calc(100% - 1.5rem)"]
  );
  const chapter = useTransform(progress, (value: number) =>
    pad(
      Math.min(
        showcaseSwatches.length,
        Math.max(1, Math.round(value * (showcaseSwatches.length - 1)) + 1)
      )
    )
  );

  return (
    <div className="flex items-center gap-5">
      <div className="w-10 font-display text-sm font-bold tabular-nums text-clay-soft">
        <motion.span>{chapter}</motion.span>
      </div>
      <div className="relative h-px flex-1 bg-paper/12">
        <motion.div
          style={{ width: fillWidth }}
          className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-clay to-clay-soft"
        />
        <motion.span
          style={{ left: markerLeft }}
          aria-hidden="true"
          className="absolute -top-2 text-clay-soft"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </div>
      <div className="text-sm font-semibold tabular-nums text-mist">
        {pad(showcaseSwatches.length)}
      </div>
    </div>
  );
}

/* ── Section: vertical page scroll → horizontal card translate ─────── */

export function FabricShowcaseSection() {
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const queryList = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(queryList.matches);
    update();
    queryList.addEventListener("change", update);
    return () => queryList.removeEventListener("change", update);
  }, []);

  const horizontalEnabled = isDesktop && !reduceMotion;

  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  /* Measure the real travel distance so no card is ever cut off:
     translateX final = -(scrollWidth - viewportWidth). */
  useLayoutEffect(() => {
    if (!horizontalEnabled) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(
        Math.max(0, Math.round(track.scrollWidth - window.innerWidth))
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [horizontalEnabled]);

  /* Vertical scroll progress drives horizontal translate. */
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });
  const x = useTransform(smoothProgress, [0, 1], [0, -distance]);
  const ghostX = useTransform(scrollYProgress, [0, 1], [60, -60]);

  if (horizontalEnabled) {
    return (
      /* NOTE: no `overflow-hidden` on the section itself — it would break
         position: sticky and collapse the pinned stage. */
      <section id="showcase" className="relative bg-night">
        <div
          ref={pinRef}
          style={{ height: `calc(100vh + ${distance}px)` }}
          className="relative"
        >
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            {/* Decorative layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="thread-grid absolute inset-0 opacity-60" />
              <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(55%_55%_at_50%_0%,rgba(176,86,47,0.16),transparent_70%)]" />
              <motion.div
                style={{ x: ghostX }}
                className="absolute left-0 top-10 whitespace-nowrap font-display text-[11vw] font-semibold italic leading-none tracking-tight text-paper/[0.03]"
              >
                Woven · Finished · Inspected
              </motion.div>
            </div>

            {/* Stage header */}
            <div
              className={`relative mb-9 flex items-end justify-between gap-8 ${STAGE_INSET} pr-8 [@media(max-height:800px)]:mb-5`}
            >
              <div>
                <SectionLabel tone="dark">Fabric Showcase</SectionLabel>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.06] tracking-tight text-white lg:text-5xl">
                  A closer look at the{" "}
                  <span className="italic text-clay-soft">cloth.</span>
                </h2>
              </div>
              <p className="hidden max-w-[14rem] pb-1 text-right text-sm leading-relaxed text-mist xl:block">
                Keep scrolling — the library moves sideways.
                <span className="mt-2 block font-display text-xs font-bold uppercase tracking-[0.18em] text-mist/70">
                  {showcaseSwatches.length} materials · one standard
                </span>
              </p>
            </div>

            {/* Horizontal rail — vertical scroll translates it left */}
            <motion.div
              ref={trackRef}
              style={{ x }}
              className={`flex w-max items-stretch gap-6 will-change-transform ${STAGE_INSET}`}
            >
              {showcaseSwatches.map((swatch, index) => (
                <ShowcaseCard
                  key={swatch.id}
                  swatch={swatch}
                  index={index}
                />
              ))}
              {/* Exit spacer so the final card clears the right edge */}
              <div className="w-24 shrink-0" />
            </motion.div>

            {/* Progress rail — 01 ·——· 06 */}
            <div
              className={`relative mt-10 max-w-3xl ${STAGE_INSET} pr-8 [@media(max-height:800px)]:mt-6`}
            >
              <ProgressRail progress={smoothProgress} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Mobile / tablet / reduced-motion: stacked grid fallback ── */
  return (
    <section
      id="showcase"
      className="relative bg-night py-20 text-paper sm:py-28"
      aria-labelledby="showcase-heading-mobile"
    >
      <Container>
        <SectionHeading
          align="center"
          label="Fabric Showcase"
          title={
            <span id="showcase-heading-mobile" className="text-white">
              A closer look at the{" "}
              <span className="italic text-clay-soft">cloth.</span>
            </span>
          }
          lead="Surface, construction and handfeel — studied before it ever reaches your lab-dip review."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {showcaseSwatches.map((swatch, index) => (
            <motion.article
              key={swatch.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                ease: EASE_OUT_EXPO,
                delay: (index % 2) * 0.09,
              }}
              className="relative h-80 overflow-hidden rounded-xl border border-paper/10 bg-night-raised shadow-panel"
            >
              <SwatchVisual
                pattern={swatch.pattern}
                palette={swatch.palette}
                className="absolute inset-0 h-full w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent"
              />
              <span className="absolute right-4 top-4 rounded-full border border-paper/15 bg-night/50 px-3 py-1 font-display text-[0.65rem] font-bold tabular-nums tracking-[0.22em] text-mist backdrop-blur-sm">
                {pad(index + 1)} / {pad(showcaseSwatches.length)}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.28em] text-clay-soft">
                  {swatch.weave}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-medium text-white">
                  {swatch.title}
                </h3>
                <p className="mt-1 text-sm italic text-clay-soft/90">
                  {swatch.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outlineDark"
            onClick={() => scrollToSection("contact")}
          >
            Request Full Library
            <ArrowRight className="size-3.5" strokeWidth={2.25} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
