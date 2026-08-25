import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, VIEWPORT } from "../../lib/motion";
import { useWhyPoints } from "../../features/content/useSiteContent";

export function WhyTwisttexSection() {
  const { data: whyPoints } = useWhyPoints();

  return (
    <section
      id="why-twisttex"
      className="bg-paper py-24 sm:py-32"
      aria-labelledby="why-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                label="Why Twisttex"
                title={
                  <span id="why-heading">
                    What buyers actually <span className="italic text-clay">feel</span> working
                    with us
                  </span>
                }
                lead="Capability only matters when it survives contact with a real season. These are the six commitments our buyers experience on every programme."
              />
            </div>
          </div>

          <ol className="lg:col-span-8">
            {whyPoints.map((point) => (
              <motion.li
                key={point.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="group grid gap-3 border-t border-ink/10 py-8 transition-colors duration-300 last:border-b hover:bg-parchment/50 sm:grid-cols-[5.5rem_1fr] sm:gap-6 sm:px-6 sm:py-9"
              >
                <span className="font-display text-lg italic text-thread transition-colors duration-300 group-hover:text-clay">
                  {point.index}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-[1.7rem]">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl leading-relaxed text-ink/65">
                    {point.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
