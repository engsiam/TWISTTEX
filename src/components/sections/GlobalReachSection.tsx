import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { useGlobalReadiness } from "../../features/content/useSiteContent";

function GlobeMark() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="h-64 w-64 text-paper/25 sm:h-72 sm:w-72"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="160" cy="160" r="128" opacity="0.7" />
      <ellipse cx="160" cy="160" rx="128" ry="52" opacity="0.5" />
      <ellipse cx="160" cy="160" rx="128" ry="96" opacity="0.35" />
      <ellipse cx="160" cy="160" rx="52" ry="128" opacity="0.5" />
      <ellipse cx="160" cy="160" rx="96" ry="128" opacity="0.35" />
      <line x1="32" y1="160" x2="288" y2="160" opacity="0.5" />
      <line x1="160" y1="32" x2="160" y2="288" opacity="0.5" />
      <circle cx="160" cy="160" r="3.5" fill="#D99267" stroke="none" />
      <path d="M160 32 A 180 180 0 0 1 262 90" stroke="#B0562F" strokeWidth="1.5" opacity="0.9" />
      <path d="M58 230 A 180 180 0 0 0 160 288" stroke="#B0562F" strokeWidth="1.5" opacity="0.9" />
    </svg>
  );
}

export function GlobalReachSection() {
  const { data: globalReadiness } = useGlobalReadiness();

  return (
    <section
      id="global"
      className="thread-grid bg-night py-24 text-paper sm:py-32"
      aria-labelledby="global-heading"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 flex justify-center lg:order-1 lg:col-span-5">
            <GlobeMark />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading
              tone="dark"
              label="Global Reach"
              title={
                <span id="global-heading">
                  Built for <span className="italic text-clay-soft">cross-border</span> business
                </span>
              }
              lead="International buyers need more than fabric — they need a supplier who understands documentation, logistics and distance. Our operation is structured for exactly that."
            />

            <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-3">
              {globalReadiness.map((point) => (
                <RevealItem key={point.id} className="border-t border-paper/15 pt-5">
                  <h3 className="text-sm font-bold tracking-wide">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{point.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealItem className="mt-10 max-w-xl">
              <p className="border-l-2 border-clay pl-5 text-sm leading-relaxed text-mist">
                Buyer programmes are active across established textile trade lanes. Ask us
                about current coverage for your market — we will give you a straight answer.
              </p>
            </RevealItem>
          </div>
        </div>
      </Container>
    </section>
  );
}
