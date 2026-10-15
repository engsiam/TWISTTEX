import { Building2, Container as ContainerIcon, CreditCard, Factory } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import {
  buyers,
  logisticsPartner,
  paymentMethods,
  paymentTerms,
  paymentTermsNote,
  sourcingOrigins,
} from "../../data/trade";

export function TradeSection() {
  return (
    <section
      id="trade"
      className="bg-paper py-24 sm:py-32"
      aria-labelledby="trade-heading"
    >
      <Container>
        <SectionHeading
          label="Buyers & Trade"
          title={
            <span id="trade-heading">
              Trusted lanes, <span className="italic text-clay">clear terms</span>
            </span>
          }
          lead="Who we serve, where we source, and how payment works — stated plainly so there are no surprises later."
          className="max-w-2xl"
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Buyers */}
          <RevealItem className="rounded-xl border border-ink/10 bg-white p-7 shadow-card sm:p-8">
            <span className="flex size-10 items-center justify-center rounded-full bg-night text-paper">
              <Building2 className="size-4.5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
              Buyer programmes
            </h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
              New & current buyers
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {buyers.map((buyer) => (
                <li
                  key={buyer.name}
                  title={buyer.market}
                  className="rounded-full border border-ink/10 bg-parchment px-3.5 py-1.5 text-xs font-semibold text-ink/80"
                >
                  {buyer.name}
                  <span className="ml-1.5 font-normal text-ink/50">{buyer.market}</span>
                </li>
              ))}
            </ul>
          </RevealItem>

          {/* Sourcing + logistics */}
          <RevealItem className="rounded-xl border border-ink/10 bg-white p-7 shadow-card sm:p-8">
            <span className="flex size-10 items-center justify-center rounded-full bg-night text-paper">
              <Factory className="size-4.5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
              {sourcingOrigins.headline}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {sourcingOrigins.regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full bg-night px-3.5 py-1.5 text-xs font-semibold text-paper"
                >
                  {region}
                </span>
              ))}
            </div>
            {sourcingOrigins.regionsPending && (
              <p className="mt-3 text-xs leading-relaxed text-ink/50">
                {sourcingOrigins.note}
              </p>
            )}
            <div className="mt-6 flex items-start gap-3 border-t border-dashed border-ink/15 pt-5">
              <ContainerIcon className="mt-0.5 size-4 shrink-0 text-clay" strokeWidth={2} />
              <p className="text-sm leading-relaxed text-ink/70">
                <strong className="font-bold text-ink">{logisticsPartner.headline}.</strong>{" "}
                {logisticsPartner.note}
              </p>
            </div>
          </RevealItem>

          {/* Payments — method vs terms kept separate */}
          <RevealItem className="rounded-xl border border-ink/10 bg-night p-7 text-paper shadow-card sm:p-8 md:col-span-2">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <div className="md:max-w-xs">
                <span className="flex size-10 items-center justify-center rounded-full bg-paper/10 text-clay-soft">
                  <CreditCard className="size-4.5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
                  Payment, stated clearly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Method and terms are agreed separately on every order.
                </p>
              </div>
              <div className="grid flex-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-clay-soft">
                    Payment methods
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {paymentMethods.map((method) => (
                      <li
                        key={method}
                        className="rounded-full border border-paper/20 bg-paper/10 px-4 py-1.5 text-sm font-bold"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed text-mist/70">
                    Instruments / channels — T/T, L/C and D/P.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-clay-soft">
                    Payment terms
                  </p>
                  <ul className="mt-3 space-y-2">
                    {paymentTerms.map((term) => (
                      <li
                        key={term}
                        className="rounded-lg border border-paper/20 bg-paper/10 px-4 py-2 text-sm font-semibold"
                      >
                        {term}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed text-mist/70">
                    {paymentTermsNote}
                  </p>
                </div>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
