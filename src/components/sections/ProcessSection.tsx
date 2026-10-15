import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { RevealItem } from "../ui/Reveal";
import { processSteps } from "../../data/process";
import { scrollToSection } from "../../lib/utils";

/**
 * Condensed to a single outline strip per client request —
 * the full six-stage flow lives in one line, not a whole page.
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-ink/10 bg-parchment py-10 sm:py-12"
      aria-labelledby="process-heading"
    >
      <Container>
        <RevealItem className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h2
            id="process-heading"
            className="shrink-0 font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            A process built for{" "}
            <span className="italic text-clay">certainty</span>
          </h2>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold text-ink/75">
            {processSteps.map((step, index) => (
              <li key={step.id} className="flex items-center gap-2">
                {index > 0 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 text-clay"
                    strokeWidth={2.25}
                  />
                )}
                <span title={step.description}>{step.title}</span>
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-clay transition-colors hover:text-clay-deep"
          >
            Start with a brief →
          </button>
        </RevealItem>
      </Container>
    </section>
  );
}
