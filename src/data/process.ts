import type { ProcessStepData } from "../types";

export const processSteps: ProcessStepData[] = [
  {
    id: "requirement",
    title: "Requirement discussion",
    description:
      "We capture your target fabrics, constructions, weights, quantities and timelines in a clear brief both sides sign off.",
  },
  {
    id: "sourcing",
    title: "Sourcing & development",
    description:
      "Options are sourced or developed to match the brief, with honest feedback on feasibility and lead times.",
  },
  {
    id: "sampling",
    title: "Sample & approval",
    description:
      "Swatches and counter-samples are submitted until the reference is exactly right. Approval sets the standard.",
  },
  {
    id: "quality-control",
    title: "Quality control",
    description:
      "Bulk goods are inspected roll by roll against the approved standard before anything moves forward.",
  },
  {
    id: "production",
    title: "Production coordination",
    description:
      "Schedules, dye lots and finishing are coordinated with the mill while you receive structured progress updates.",
  },
  {
    id: "delivery",
    title: "Delivery & shipment",
    description:
      "Goods are packed, documented and shipped with tracking — arriving as approved, on the agreed date.",
  },
];
