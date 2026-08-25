import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SwatchVisual } from "../ui/SwatchVisual";
import { fadeUp, VIEWPORT } from "../../lib/motion";
import { fabricCategories } from "../../data/products";
import { cn } from "../../lib/utils";

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
            Eight core categories, one standard. Every construction is developed and
            approved against a reference before bulk production begins.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-12 lg:gap-6">
          {fabricCategories.map((category) => (
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

              <div className="absolute top-4 right-4 flex size-10 translate-y-1 items-center justify-center rounded-full bg-paper/95 text-ink opacity-0 shadow-panel transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </div>

              <div className="relative flex h-full min-h-44 flex-col justify-end p-6 sm:p-7">
                <h3 className="font-display text-2xl font-medium text-paper sm:text-[1.65rem]">
                  {category.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/85 opacity-100 transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
