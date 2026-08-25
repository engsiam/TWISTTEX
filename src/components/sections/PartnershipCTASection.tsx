import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { fadeUp, VIEWPORT } from "../../lib/motion";
import { contact } from "../../data/company";
import { scrollToSection } from "../../lib/utils";

export function PartnershipCTASection() {
  return (
    <section
      className="relative overflow-hidden bg-clay py-24 text-paper sm:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 22px, rgba(247,244,237,0.6) 22px 23px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-4 hidden font-display text-[16rem] leading-none font-semibold italic text-paper/10 select-none lg:block"
      >
        TT
      </div>

      <Container className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h2
            id="cta-heading"
            className="font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Have a fabric requirement?{" "}
            <span className="italic">Let&rsquo;s build the right solution.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
            Send us your target construction, a reference swatch, or simply the problem
            you are trying to solve. A sourcing specialist will take it from there.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="paper" size="lg" onClick={() => scrollToSection("contact")}>
              Start an Enquiry
              <ArrowRight className="size-4" strokeWidth={2.25} />
            </Button>
            <Button
              variant="outlineDark"
              size="lg"
              href={`mailto:${contact.email}?subject=Fabric%20Enquiry`}
              className="border-paper/60"
            >
              <Mail className="size-4" strokeWidth={2} />
              Email Us Directly
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
