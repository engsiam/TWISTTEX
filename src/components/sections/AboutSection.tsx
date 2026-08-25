import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { SwatchVisual } from "../ui/SwatchVisual";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { maskReveal, VIEWPORT } from "../../lib/motion";
import { scrollToSection } from "../../lib/utils";

const aboutPoints = [
  {
    id: "network",
    title: "A sourcing network built on standards",
    description:
      "Mills and suppliers are chosen against your construction, weight and finish targets — then held to them.",
  },
  {
    id: "development",
    title: "Development, not just procurement",
    description:
      "We translate references and tech packs into fabrics, managing sampling rounds until the standard is right.",
  },
  {
    id: "relationship",
    title: "Partnership over transactions",
    description:
      "Transparent costing and dependable timelines designed for buyers who reorder season after season.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32" aria-labelledby="about-heading">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                label="About Twisttex"
                title={
                  <span id="about-heading">
                    Fabric first.
                    <br />
                    <span className="italic text-clay">Partnership always.</span>
                  </span>
                }
                lead="Twisttex International exists to make fabric the strongest part of your product — not the riskiest. We work between buyers and mills with one accountability: what was approved is what ships."
              />
              <RevealGroup className="mt-9 space-y-6">
                {aboutPoints.map((point) => (
                  <RevealItem key={point.id} className="border-l-2 border-sand pl-5">
                    <h3 className="text-sm font-bold tracking-wide">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{point.description}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              variants={maskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative"
            >
              <figure className="overflow-hidden rounded-xl shadow-card">
                <SwatchVisual
                  pattern="plain"
                  palette={{ base: "#EAE2CF", warp: "#F6F1E3", weft: "#D9CDB2" }}
                  className="aspect-[4/3] w-full"
                />
              </figure>

              <motion.figure
                initial={false}
                className="absolute -bottom-10 -left-4 w-[42%] overflow-hidden rounded-lg shadow-panel ring-4 ring-paper sm:-left-10"
              >
                <SwatchVisual
                  pattern="twill"
                  palette={{ base: "#33475E", warp: "#42586F", weft: "#232F3E" }}
                  className="aspect-square w-full"
                />
              </motion.figure>

              <div className="absolute -top-5 right-4 rounded-full bg-night px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-paper shadow-panel sm:right-10">
                Sourcing-led quality control
              </div>
            </motion.div>

            <blockquote className="mt-20 max-w-lg border-l-2 border-clay pl-6 sm:ml-auto sm:pl-8">
              <p className="font-display text-2xl leading-snug font-medium text-balance italic sm:text-[1.7rem]">
                “We treat every metre of fabric as a promise made to our buyer.”
              </p>
            </blockquote>

            <button
              type="button"
              onClick={() => scrollToSection("fabrics")}
              className="group mt-10 inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.16em] text-clay transition-colors hover:text-clay-deep sm:ml-auto sm:flex"
            >
              See what we source
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
