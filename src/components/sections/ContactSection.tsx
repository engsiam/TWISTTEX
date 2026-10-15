import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { fadeUp, VIEWPORT } from "../../lib/motion";
import { ContactForm } from "../../features/enquiry/ContactForm";
import { contact } from "../../data/company";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-paper py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-12">
          {/* Intro — first on mobile, left (~40%) column on desktop */}
          <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <SectionLabel>FABRIC SOURCING · CONTACT</SectionLabel>
            <h2
              id="contact-heading"
              className="mt-5 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance text-ink sm:text-[2.75rem]"
            >
              Have a fabric requirement?{" "}
              <span className="italic font-light">
                Let&rsquo;s build the{" "}
                <span className="text-clay">right solution.</span>
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
              Share your target construction, reference swatch, or sourcing
              challenge. Our team will review your requirements and provide
              suitable options, lead times, and practical guidance.
            </p>
          </div>

          {/* Form — immediately after the intro on mobile, right (~60%) on desktop */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="min-w-0 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2"
          >
            <ContactForm />
          </motion.div>

          {/* Direct contact — below the form on mobile, beneath the intro on
              desktop with a fixed 48px (gap-y-12) separation. */}
          <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <RevealGroup className="space-y-5">
              <RevealItem>
                <a
                  href={`mailto:${contact.email}?subject=Fabric%20Enquiry`}
                  className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-white/70 p-5 transition-colors hover:border-clay/40"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-night text-paper"
                  >
                    <Mail className="size-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold tracking-[0.2em] text-ink/50 uppercase">
                      Email us
                    </span>
                    <span className="block text-sm font-semibold break-all transition-colors group-hover:text-clay">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </RevealItem>

              <RevealItem>
                <p className="border-l-2 border-clay pl-5 text-sm leading-relaxed text-ink/65">
                  We aim to respond to every serious enquiry within one
                  business day with practical guidance tailored to your
                  requirements.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
