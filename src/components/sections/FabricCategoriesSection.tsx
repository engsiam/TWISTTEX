import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SwatchVisual } from "../ui/SwatchVisual";
import { fadeUp, VIEWPORT } from "../../lib/motion";
import { fabricCategories } from "../../data/products";
import { cn } from "../../lib/utils";

function Tag({ label, soon }: { label: string; soon?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide",
        soon
          ? "border border-dashed border-paper/40 text-paper/70"
          : "bg-paper/15 text-paper backdrop-blur-sm"
      )}
    >
      {label}
      {soon && (
        <span className="rounded-full bg-paper/20 px-1.5 py-px text-[9px] font-bold uppercase tracking-widest">
          Soon
        </span>
      )}
    </span>
  );
}

export function FabricCategoriesSection() {
  return (
    <section
      id="fabrics"
      className="bg-parchment py-24 sm:py-32"
      aria-labelledby="fabrics-heading"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="Fabric Categories"
            title={
              <span id="fabrics-heading">
                Explore the <span className="italic text-clay">materials</span> we source
              </span>
            }
            className="max-w-2xl"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-sm text-sm leading-relaxed text-ink/65 lg:pb-2 lg:text-right"
          >
            Eight sourcing lines, one standard. Every construction is developed and
            approved against a reference before bulk production begins.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-12 lg:gap-6">
          {fabricCategories.map((category) => {
            const isCompact = category.id === "custom";
            return (
              <motion.article
                key={category.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className={cn(
                  "group relative overflow-hidden rounded-xl shadow-card",
                  category.span,
                  category.aspect
                )}
              >
                <SwatchVisual
                  pattern={category.pattern}
                  palette={category.palette}
                  className="absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />

                {category.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-paper/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-panel">
                    {category.badge}
                  </span>
                )}

                <div className="absolute top-4 right-4 flex size-10 translate-y-1 items-center justify-center rounded-full bg-paper/95 text-ink opacity-0 shadow-panel transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </div>

                <div
                  className={cn(
                    "relative flex h-full flex-col justify-end p-6 sm:p-7",
                    isCompact ? "min-h-44" : "min-h-44"
                  )}
                >
                  <h3 className="font-display text-2xl font-medium text-paper sm:text-[1.65rem]">
                    {category.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper/85">
                    {category.description}
                  </p>
                  {(category.tags.length > 0 ||
                    (category.futureTags ?? []).length > 0) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                      {(category.futureTags ?? []).map((tag) => (
                        <Tag key={tag} label={tag} soon />
                      ))}
                    </div>
                  )}
                  {category.certifications && (
                    <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Certifications supported">
                      {category.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="rounded border border-paper/30 bg-night/40 px-2 py-0.5 text-[10px] font-bold tracking-wider text-paper/90 backdrop-blur-sm"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
