import type { FabricCategory, ShowcaseSwatch } from "../types";

export const fabricCategories: FabricCategory[] = [
  {
    id: "cotton",
    title: "Cotton",
    description:
      "Combed, carded and organic-count cottons in plains, poplins, twills and canvases â€” engineered for comfort and repeatable handfeel.",
    pattern: "plain",
    palette: { base: "#EAE2CF", warp: "#F6F1E3", weft: "#D9CDB2" },
    span: "sm:col-span-2 lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    id: "linen",
    title: "Linen",
    description:
      "European-flax-inspired linens and blends with natural slub, breathability and an unmistakable drape.",
    pattern: "basket",
    palette: { base: "#E0D2B4", warp: "#EEE2C8", weft: "#CDBA92" },
    span: "sm:col-span-2 lg:col-span-5 lg:-mt-10",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-full",
  },
  {
    id: "denim",
    title: "Denim",
    description:
      "Rigid to stretch denims from lightweight shirting to heavyweight bottoms, with wash and finish guidance.",
    pattern: "twill",
    palette: { base: "#33475E", warp: "#42586F", weft: "#232F3E" },
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-full",
  },
  {
    id: "woven",
    title: "Woven Fabrics",
    description:
      "Shirtings, bottom-weights, outerwear constructions and yarn-dyed structures developed to spec.",
    pattern: "herringbone",
    palette: { base: "#B4A384", warp: "#C7B89B", weft: "#9C8B6C" },
    span: "sm:col-span-2 lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    id: "knit",
    title: "Knit Fabrics",
    description:
      "Single jersey, interlock, rib, fleece and piques â€” balanced for shrinkage, spirality and GSM consistency.",
    pattern: "knit",
    palette: { base: "#C6C0B2", warp: "#D6D1C4", weft: "#ABA393" },
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
  },
  {
    id: "sustainable",
    title: "Sustainable Fabrics",
    description:
      "Preferred-material options including recycled blends and responsibly grown fibres, documented on request.",
    pattern: "plain",
    palette: { base: "#A9B298", warp: "#BCC4AC", weft: "#8E987C" },
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
  },
  {
    id: "technical",
    title: "Technical Fabrics",
    description:
      "Performance constructions for stretch, moisture management and durability in demanding applications.",
    pattern: "twill",
    palette: { base: "#5E6B77", warp: "#71808D", weft: "#48545F" },
    span: "lg:col-span-4",
    aspect: "aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
  },
  {
    id: "custom",
    title: "Custom Development",
    description:
      "Have a swatch, tech pack or target handfeel? We develop against your reference â€” construction, weight, finish and colour â€” then hold that standard across repeat orders.",
    pattern: "herringbone",
    palette: { base: "#B0562F", warp: "#C26940", weft: "#8F4523" },
    span: "lg:col-span-12",
    aspect: "aspect-[16/9] lg:aspect-auto lg:min-h-[19rem]",
  },
];

export const showcaseSwatches: ShowcaseSwatch[] = [
  {
    id: "sw-cotton-poplin",
    title: "Cotton Poplin",
    note: "Crisp, smooth, shirting-grade",
    weave: "Plain weave",
    pattern: "plain",
    palette: { base: "#EDE7D6", warp: "#F8F3E6", weft: "#DCD2BA" },
  },
  {
    id: "sw-indigo-twill",
    title: "Indigo Twill",
    note: "Deep cast, clean surface",
    weave: "3/1 twill",
    pattern: "twill",
    palette: { base: "#2C3E52", warp: "#3B5168", weft: "#1E2B3A" },
  },
  {
    id: "sw-linen-basket",
    title: "Flax Linen",
    note: "Open, dry, textured",
    weave: "Basket weave",
    pattern: "basket",
    palette: { base: "#DFD0AF", warp: "#EDDFC0", weft: "#CBB78D" },
  },
  {
    id: "sw-jersey",
    title: "Compact Jersey",
    note: "Stable, soft, uniform",
    weave: "Single knit",
    pattern: "knit",
    palette: { base: "#BFB9AA", warp: "#D0CBBD", weft: "#A49C8B" },
  },
  {
    id: "sw-herringbone",
    title: "Wool-Blend Herringbone",
    note: "Structured tailoring face",
    weave: "Herringbone",
    pattern: "herringbone",
    palette: { base: "#8E8474", warp: "#A29784", weft: "#776D5D" },
  },
  {
    id: "sw-sage-plain",
    title: "Recycled Blend",
    note: "Melange hand, matte finish",
    weave: "Plain weave",
    pattern: "plain",
    palette: { base: "#A3AD93", warp: "#B7BFa6", weft: "#8B957A" },
  },
];
