import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SwatchVisual } from "../ui/SwatchVisual";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { useShowcaseSwatches } from "../../features/content/useSiteContent";

export function FabricShowcaseSection() {
  const { data: showcaseSwatches } = useShowcaseSwatches();

  return (
    <section
      className="overflow-hidden bg-night py-24 text-paper sm:py-32"
      aria-labelledby="showcase-heading"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Fabric Showcase"
            title={
              <span id="showcase-heading">
                A closer look at the <span className="italic text-clay-soft">cloth</span>
              </span>
            }
            lead="Surface, construction and handfeel — studied before it ever reaches your lab-dip review."
          />
          <p className="hidden shrink-0 text-[11px] font-bold uppercase tracking-[0.26em] text-mist md:block">
            Scroll sideways →
          </p>
        </div>
      </Container>

      <RevealGroup
        stagger={0.07}
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 no-scrollbar sm:px-8"
      >
        {showcaseSwatches.map((swatch) => (
          <RevealItem
            key={swatch.id}
            className="w-[74vw] max-w-[320px] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[23vw]"
          >
            <figure className="group overflow-hidden rounded-xl ring-1 ring-paper/15">
              <div className="relative aspect-[3/4] overflow-hidden">
                <SwatchVisual
                  pattern={swatch.pattern}
                  palette={swatch.palette}
                  className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <figcaption className="bg-night-raised p-5">
                <p className="font-display text-lg font-medium">{swatch.title}</p>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <p className="text-xs text-mist">{swatch.note}</p>
                  <span className="shrink-0 rounded-full border border-paper/20 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-paper/80">
                    {swatch.weave}
                  </span>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>

      <Container>
        <p className="mt-8 text-sm leading-relaxed text-mist md:hidden">
          Swipe to browse swatches.
        </p>
      </Container>
    </section>
  );
}
