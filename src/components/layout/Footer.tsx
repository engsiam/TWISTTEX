import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, company, navLinks } from "../../data/company";
import { scrollToSection } from "../../lib/utils";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/logo.png"
              alt="Twisttex International"
              className="h-12 w-auto brightness-0 invert sm:h-14"
              width={200}
              height={56}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              {company.positioning} We source, develop and inspect fabrics so apparel
              businesses can build collections with confidence.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-clay-soft">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-clay-soft">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-paper/80">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-paper"
                >
                  <Mail className="size-4 text-clay-soft" strokeWidth={1.75} />
                  {contact.email}
                </a>
              </li>
              {contact.phone && (
                <li className="inline-flex items-center gap-2.5">
                  <Phone className="size-4 text-clay-soft" strokeWidth={1.75} />
                  {contact.phone}
                </li>
              )}
              {contact.address && (
                <li className="inline-flex items-center gap-2.5">
                  <MapPin className="size-4 text-clay-soft" strokeWidth={1.75} />
                  {contact.address}
                </li>
              )}
            </ul>
            <a
              href={`mailto:${contact.email}?subject=Fabric%20Enquiry`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-paper/70 hover:bg-paper/10"
            >
              Request a Quote
              <ArrowUpRight className="size-3.5" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist">
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-mist">
            <a href="#top" className="transition-colors hover:text-paper">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-paper">
              Terms of Trade
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
