import type { FabricCategory, ShowcaseSwatch } from "../types";

/**
 * Simplified buyer-facing sourcing index (per PDF 1):
 * 8 top-level cards with one-line tag outlines — not a textile textbook.
 * Wool / animal fibres are marked as future capability, not current offer.
 */

export const fabricCategories: FabricCategory[] = [
  {
    id: "woven",
    title: "01 — Woven",
    description:
      "Shirtings, bottom-weights and structured wovens developed to spec — construction, weight, finish and colour held to reference.",
    pattern: "plain",
    palette: { base: "#EAE2CF", warp: "#F6F1E3", weft: "#D9CDB2" },
    span: "sm:col-span-2 lg:col-span-7",
    aspect: "aspect-[16/10]",
    tags: [
      "Cotton",
      "Linen",
      "Denim",
      "Polyester",
      "Viscose",
      "Nylon",
      "Blends",
      "Fancy Wovens",
    ],
    futureTags: ["Wool"],
  },
  {
    id: "knit",
    title: "02 — Knit",
    description:
      "Jersey to performance knits, balanced for shrinkage, spirality and GSM consistency across re-orders.",
    pattern: "knit",
    palette: { base: "#C6C0B2", warp: "#D6D1C4", weft: "#ABA393" },
    span: "sm:col-span-2 lg:col-span-5 lg:-mt-10",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-full",
    tags: [
      "Jersey",
      "Rib",
      "Interlock",
      "Piqué",
      "Fleece",
      "French Terry",
      "Mesh",
      "Jacquard",
      "Performance",
    ],
  },
  {
    id: "denim",
    title: "03 — Denim",
    description:
      "Rigid to stretch denims from lightweight shirting to heavyweight bottoms, with wash and finish guidance.",
    pattern: "twill",
    palette: { base: "#33475E", warp: "#42586F", weft: "#232F3E" },
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-full",
    tags: [
      "Rigid",
      "Stretch",
      "Recycled",
      "Cotton",
      "Tencel™",
      "Colored",
      "Raw",
      "Washed",
    ],
  },
  {
    id: "natural",
    title: "04 — Natural Fibres",
    description:
      "Cotton, linen, hemp and bast fibres with natural handfeel — breathable, traceable, developed to reference.",
    pattern: "basket",
    palette: { base: "#E0D2B4", warp: "#EEE2C8", weft: "#CDBA92" },
    span: "sm:col-span-2 lg:col-span-7",
    aspect: "aspect-[16/10]",
    tags: ["Cotton", "Linen", "Hemp", "Ramie"],
    futureTags: ["Wool", "Silk"],
  },
  {
    id: "manmade",
    title: "05 — Man-made & Blended",
    description:
      "Polyester, nylon and regenerated cellulosics plus blends — for drape, durability and price engineering.",
    pattern: "herringbone",
    palette: { base: "#B4A384", warp: "#C7B89B", weft: "#9C8B6C" },
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
    tags: [
      "Polyester",
      "Nylon",
      "Viscose",
      "Modal",
      "Lyocell",
      "Acrylic",
      "Blends",
    ],
  },
  {
    id: "sustainable",
    title: "06 — Sustainable",
    description:
      "Preferred-material options with chain-of-custody documentation. Certificates and test reports shared per programme.",
    pattern: "plain",
    palette: { base: "#A9B298", warp: "#BCC4AC", weft: "#8E987C" },
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
    tags: ["Organic", "Recycled", "Regenerated", "Low-impact", "Certified"],
    badge: "Certified",
    certifications: [
      "GOTS",
      "GRS",
      "RCS",
      "OCS",
      "OEKO-TEX®",
      "FSC",
      "Better Cotton",
      "bluesign®",
    ],
  },
  {
    id: "technical",
    title: "07 — Technical & Performance",
    description:
      "Functional finishes and constructions for moisture, weather and wear — developed against the end use.",
    pattern: "twill",
    palette: { base: "#5E6B77", warp: "#71808D", weft: "#48545F" },
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
    tags: [
      "Waterproof",
      "Breathable",
      "Wicking",
      "Stretch",
      "UV",
      "Antibacterial",
      "FR",
      "Outdoor",
    ],
    badge: "We also do",
  },
  {
    id: "custom",
    title: "08 — Custom Development",
    description:
      "Custom composition · Custom GSM · Custom construction · Custom finish · Custom colour — send a swatch or tech pack and we build to it.",
    pattern: "herringbone",
    palette: { base: "#B0562F", warp: "#C26940", weft: "#8F4523" },
    span: "lg:col-span-12",
    aspect: "lg:min-h-[12rem]",
    tags: [],
    badge: "One line",
  },
];

/**
 * Fabric showcase — EDITABLE.
 * Drop real photos into /public/images/ and set `image` below.
 * When `image` is missing or fails to load, the weave pattern renders instead.
 */
export const showcaseSwatches: ShowcaseSwatch[] = [
  {
    id: "sw-cotton-poplin",
    title: "Cotton Poplin",
    note: "Crisp, smooth, shirting-grade",
    weave: "Plain weave",
    pattern: "plain",
    palette: { base: "#EDE7D6", warp: "#F8F3E6", weft: "#DCD2BA" },
    image: "/images/showcase-cotton-poplin.jpg",
  },
  {
    id: "sw-indigo-twill",
    title: "Indigo Twill",
    note: "Deep cast, clean surface",
    weave: "3/1 twill",
    pattern: "twill",
    palette: { base: "#2C3E52", warp: "#3B5168", weft: "#1E2B3A" },
    image: "/images/showcase-indigo-twill.jpg",
  },
  {
    id: "sw-linen-basket",
    title: "Flax Linen",
    note: "Open, dry, textured",
    weave: "Basket weave",
    pattern: "basket",
    palette: { base: "#DFD0AF", warp: "#EDDFC0", weft: "#CBB78D" },
    image: "/images/showcase-flax-linen.jpg",
  },
  {
    id: "sw-jersey",
    title: "Compact Jersey",
    note: "Stable, soft, uniform",
    weave: "Single knit",
    pattern: "knit",
    palette: { base: "#BFB9AA", warp: "#D0CBBD", weft: "#A49C8B" },
    image: "/images/showcase-compact-jersey.jpg",
  },
  {
    id: "sw-herringbone",
    title: "Wool-Blend Herringbone",
    note: "Structured tailoring face · future capability",
    weave: "Herringbone",
    pattern: "herringbone",
    palette: { base: "#8E8474", warp: "#A29784", weft: "#776D5D" },
    image: "/images/showcase-herringbone.jpg",
  },
  {
    id: "sw-sage-plain",
    title: "Recycled Blend",
    note: "Melange hand, matte finish",
    weave: "Plain weave",
    pattern: "plain",
    palette: { base: "#A3AD93", warp: "#B7BFa6", weft: "#8B957A" },
    image: "/images/showcase-recycled-blend.jpg",
  },
];
