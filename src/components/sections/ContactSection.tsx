import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ContactForm } from "../../features/enquiry/ContactForm";
import { contact } from "../../data/company";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-paper py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              label="Contact"
              title={
                <span id="contact-heading">
                  Tell us what you <span className="italic text-clay">need</span>
                </span>
              }
              lead="Share your requirement and we will come back with options, lead times and honest guidance — no obligation."
            />

            <RevealGroup className="mt-10 space-y-6">
              <RevealItem>
                <a
                  href={`mailto:${contact.email}?subject=Fabric%20Enquiry`}
                  className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-clay/40"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-night text-paper">
                    <Mail className="size-4.5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
                      Email
                    </span>
                    <span className="text-sm font-semibold transition-colors group-hover:text-clay">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </RevealItem>

              {contact.whatsappUrl && (
                <RevealItem>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-clay/40"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-night text-paper">
                      <MessageCircle className="size-4.5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
                        WhatsApp
                      </span>
                      <span className="text-sm font-semibold transition-colors group-hover:text-clay">
                        Chat with our sourcing team
                      </span>
                    </span>
                  </a>
                </RevealItem>
              )}

              {contact.address && (
                <RevealItem>
                  <div className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-night text-paper">
                      <MapPin className="size-4.5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
                        Office
                      </span>
                      <span className="text-sm font-semibold">{contact.address}</span>
                    </span>
                  </div>
                </RevealItem>
              )}

              <RevealItem>
                <p className="border-l-2 border-clay pl-5 text-sm leading-relaxed text-ink/65">
                  We aim to respond to every serious enquiry within one business day —
                  with substance, not an auto-reply.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
