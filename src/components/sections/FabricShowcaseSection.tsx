import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SwatchVisual } from "../ui/SwatchVisual";
import { fadeUp, staggerParent, VIEWPORT } from "../../lib/motion";
import { showcaseSwatches } from "../../data/products";
import { cn } from "../../lib/utils";

export function FabricShowcaseSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const progress = useMotionValue(0);
  const progressBarWidth = useTransform(progress, [0, 1], ["6%", "100%"]);

  const updateScrollUi = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    progress.set(max <= 0 ? 0 : Math.min(1, Math.max(0, el.scrollLeft / max)));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(max <= 0 || el.scrollLeft >= max - 4);
  }, [progress]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollUi();

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      isDown = true;
      startX = event.clientX;
      startScroll = el.scrollLeft;
      el.style.scrollSnapType = "none";
      setDragging(true);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDown) return;
      el.scrollLeft = startScroll - (event.clientX - startX);
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      setDragging(false);
      window.setTimeout(() => {
        el.style.scrollSnapType = "";
      }, 80);
    };

    const onWheel = (event: WheelEvent) => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        const next = el.scrollLeft + event.deltaY;
        const canConsume =
          (event.deltaY < 0 && el.scrollLeft > 0) ||
          (event.deltaY > 0 && next < max - 1);
        if (canConsume) {
          event.preventDefault();
          el.style.scrollSnapType = "none";
          el.scrollLeft = next;
          window.clearTimeout(el.dataset.wheelTimer as unknown as number);
          const timer = window.setTimeout(() => {
            el.style.scrollSnapType = "";
          }, 160);
          el.dataset.wheelTimer = String(timer);
        }
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        el.scrollBy({ left: 280, behavior: "smooth" });
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        el.scrollBy({ left: -280, behavior: "smooth" });
      }
    };

    el.addEventListener("scroll", updateScrollUi, { passive: true });
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", updateScrollUi);

    return () => {
      el.removeEventListener("scroll", updateScrollUi);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", updateScrollUi);
    };
  }, [updateScrollUi]);

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

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-full border border-paper/15 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-mist"
        >
          <MoveHorizontal className="size-4" strokeWidth={1.75} />
          {String(showcaseSwatches.length).padStart(2, "0")} materials — drag, scroll or
          swipe
        </motion.p>
      </Container>

      <div className="relative mt-12 sm:mt-14">
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-night to-transparent transition-opacity duration-400 sm:w-20",
            atStart ? "opacity-0" : "opacity-100"
          )}
        />
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-night to-transparent transition-opacity duration-400 sm:w-20",
            atEnd ? "opacity-0" : "opacity-100"
          )}
        />

        <motion.div
          ref={scrollerRef}
          role="region"
          aria-label="Fabric swatch gallery"
          tabIndex={0}
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className={cn(
            "no-scrollbar relative flex select-none snap-x gap-5 overflow-x-auto px-5 pb-3 outline-offset-[-3px] sm:gap-6 sm:px-8",
            dragging ? "cursor-grabbing" : "cursor-grab"
          )}
        >
          {showcaseSwatches.map((swatch, index) => (
            <motion.article
              key={swatch.id}
              variants={fadeUp}
              className={cn(
                "group w-[72vw] max-w-[320px] shrink-0 snap-start sm:w-[44vw] lg:w-[29vw] xl:w-[23vw]",
                index % 2 === 1 && "lg:translate-y-9"
              )}
            >
              <figure className="relative overflow-hidden rounded-xl shadow-panel ring-1 ring-paper/12 transition-all duration-500 group-hover:ring-paper/30">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SwatchVisual
                    pattern={swatch.pattern}
                    palette={swatch.palette}
                    className="h-full w-full transition-transform duration-[1400ms] ease-out motion-reduce:transition-none group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/5 to-night/25"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                    <span className="font-display text-sm italic tracking-wide text-paper/70">
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-paper/20 bg-night/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-paper/85 backdrop-blur-sm">
                      {swatch.weave}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-xl font-medium text-white sm:text-[1.35rem]">
                      {swatch.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-paper/75 transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-16 lg:group-hover:opacity-100">
                      {swatch.note}
                    </p>
                  </div>
                </div>
              </figure>
            </motion.article>
          ))}
        </motion.div>

        <Container>
          <div className="mt-8 flex items-center gap-6">
            <div aria-hidden="true" className="h-px flex-1 bg-paper/15">
              <motion.div
                className="h-full bg-clay"
                style={{ width: progressBarWidth }}
              />
            </div>
            <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.24em] text-mist">
              Material index
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
