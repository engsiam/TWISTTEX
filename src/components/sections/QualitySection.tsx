import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { qualityPractices } from "../../data/capabilities";

const inspectionChecklist = [
  "Construction & weight vs. approved standard",
  "Shade continuity across rolls and lots",
  "Weaving / knitting defects, 4-point method",
  "Width, handfeel and finish conformity",
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="bg-paper py-24 sm:py-32"
      aria-labelledby="quality-heading"
    >
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              label="Quality & Compliance"
              title={
                <span id="quality-heading">
                  Trust is a <span className="italic text-clay">procedure</span>, not a promise
                </span>
              }
              lead="Buyer uncertainty is reduced by evidence. Every stage of our supply chain carries defined checkpoints — and the documentation to prove them."
            />

            <RevealGroup className="mt-10 space-y-7">
              {qualityPractices.map((practice) => (
                <RevealItem key={practice.id} className="flex gap-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-clay/10">
                    <Check className="size-4 text-clay" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide">{practice.title}</h3>
                    <p className="mt-1 max-w-md leading-relaxed text-ink/65">
                      {practice.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealItem className="mt-10 inline-flex items-center gap-3 rounded-full border border-dashed border-clay/50 bg-clay/5 px-5 py-2.5">
              <span className="text-xs font-semibold tracking-wide text-clay-deep">
                Certification & test documentation — available on request per programme.
              </span>
            </RevealItem>
          </div>

          <div className="lg:col-span-6">
            <RevealGroup className="relative lg:pl-8">
              <RevealItem className="overflow-hidden rounded-xl shadow-card">
                <figure>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-night-raised">
                    <div
                      aria-hidden="true"
                      className="thread-grid absolute inset-0 opacity-60"
                    />
                    <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                      <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-clay-soft">
                        Pre-shipment Inspection
                      </p>
                      <p className="font-display text-2xl leading-snug font-medium text-balance text-paper sm:text-[1.75rem]">
                        No roll leaves without passing the standard you approved.
                      </p>
                    </div>
                  </div>
                </figure>
              </RevealItem>

              <RevealItem className="relative z-10 -mt-14 ml-auto w-[88%] sm:w-[78%]">
                <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-panel sm:p-7">
                  <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
                      Inspection Checklist
                    </p>
                    <span className="rounded-full bg-parchment px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-clay-deep">
                      Sample
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3.5">
                    {inspectionChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-night text-paper">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between border-t border-dashed border-ink/15 pt-4">
                    <p className="text-xs font-semibold text-ink/60">
                      Result recorded before release
                    </p>
                    <p className="font-display text-lg italic text-clay">Pass</p>
                  </div>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
