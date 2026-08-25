import type {
  GlobalReadinessPoint,
  QualityPractice,
  TrustPoint,
  ValuePillar,
  WhyPoint,
} from "../types";

export const values: ValuePillar[] = [
  {
    id: "reliability",
    title: "Reliability",
    description:
      "Dates we commit to are dates we hold. When something changes, you hear it from us first — with a plan.",
  },
  {
    id: "transparency",
    title: "Transparency",
    description:
      "Clear costing, honest feasibility and documentation you can audit. No surprises buried in the invoice.",
  },
  {
    id: "long-term-value",
    title: "Long-term value",
    description:
      "We optimise for the tenth order, not the first. Standards held today protect your brand tomorrow.",
  },
];

export const trustPoints: TrustPoint[] = [
  {
    id: "categories",
    title: "Woven & knit",
    caption: "Multi-category fabric sourcing under one roof",
  },
  {
    id: "quality",
    title: "Quality-first",
    caption: "Inspection checkpoints at every stage",
  },
  {
    id: "communication",
    title: "Buyer-aligned",
    caption: "Clear, responsive communication",
  },
  {
    id: "export",
    title: "Export-ready",
    caption: "Documentation and logistics support",
  },
];

export const whyPoints: WhyPoint[] = [
  {
    id: "sourcing",
    index: "01",
    title: "Quality-conscious sourcing",
    description:
      "We select mills and suppliers against your construction, weight and finish targets — not whatever is easiest to ship.",
  },
  {
    id: "communication",
    index: "02",
    title: "Reliable communication",
    description:
      "One accountable point of contact, structured updates, and answers that arrive before you have to chase them.",
  },
  {
    id: "consistency",
    index: "03",
    title: "Consistent supply",
    description:
      "Approved references are locked and repeated. Re-orders match the sample you signed off on.",
  },
  {
    id: "development",
    index: "04",
    title: "Responsive development",
    description:
      "New constructions, matches-to-standard and counter-samples move quickly, with clear feedback at each round.",
  },
  {
    id: "flexibility",
    index: "05",
    title: "Flexible sourcing",
    description:
      "From focused category programmes to mixed-category requirements, we shape supply around the buyer — not the other way around.",
  },
  {
    id: "partnership",
    index: "06",
    title: "Long-term partnership",
    description:
      "We build for repeat business: transparent costing, dependable timelines and shared quality standards season after season.",
  },
];

export const qualityPractices: QualityPractice[] = [
  {
    id: "inspection",
    title: "Fabric inspection",
    description:
      "Roll-by-roll inspection against agreed standards before goods are released for production or shipment.",
  },
  {
    id: "testing",
    title: "Testing coordination",
    description:
      "Laboratory testing arranged against buyer requirements, with reports shared before approval milestones.",
  },
  {
    id: "standards",
    title: "Supplier standards",
    description:
      "Suppliers are evaluated on construction accuracy, shade continuity and delivery reliability.",
  },
  {
    id: "monitoring",
    title: "Production monitoring",
    description:
      "Status is tracked from yarn to finished rolls so issues surface early, not at shipment.",
  },
];

export const globalReadiness: GlobalReadinessPoint[] = [
  {
    id: "documentation",
    title: "Export-ready documentation",
    description:
      "Commercial documents prepared correctly the first time, aligned to your import requirements.",
  },
  {
    id: "logistics",
    title: "Coordinated logistics",
    description:
      "Consolidation and shipment scheduling managed alongside trusted forwarding partners.",
  },
  {
    id: "timezone",
    title: "Timezone-aligned communication",
    description:
      "Working hours structured around buyer markets, so decisions never wait a full day.",
  },
];
