import { Container } from "../ui/Container";
import { useTrustPoints } from "../../features/content/useSiteContent";

export function TrustStripSection() {
  const { data: trustPoints } = useTrustPoints();

  return (
    <section aria-label="Capability highlights" className="border-b border-ink/10 bg-paper">
      <Container className="py-14 sm:py-16">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {trustPoints.map((point, index) => (
            <div
              key={point.id}
              className="flex flex-col gap-1.5 lg:border-l lg:border-ink/10 lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-clay tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="font-display text-xl font-medium">{point.title}</dt>
              <dd className="text-sm leading-relaxed text-ink/65">{point.caption}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
