import { Container } from "../ui/Container";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { useValues } from "../../features/content/useSiteContent";

export function ValuesSection() {
  const { data: values } = useValues();

  return (
    <section
      className="bg-parchment py-24 sm:py-32"
      aria-labelledby="values-heading"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <RevealItem>
            <SectionLabel align="center">The Way We Work</SectionLabel>
          </RevealItem>
          <RevealItem className="mt-6">
            <h2
              id="values-heading"
              className="font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl"
            >
              Sourcing is a relationship business.{" "}
              <span className="italic text-clay">We behave like it.</span>
            </h2>
          </RevealItem>
        </div>

        <RevealGroup className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-0">
          {values.map((value, index) => (
            <RevealItem
              key={value.id}
              className={
                index > 0 ? "sm:border-l sm:border-ink/10 sm:pl-10" : "sm:pr-10"
              }
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-clay tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium">{value.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-ink/65">{value.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
