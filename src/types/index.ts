export interface NavLink {
  id: string;
  label: string;
}

export type WeavePattern = "plain" | "twill" | "knit" | "herringbone" | "basket";

export interface SwatchPalette {
  base: string;
  warp: string;
  weft: string;
}

export interface FabricCategory {
  id: string;
  title: string;
  description: string;
  pattern: WeavePattern;
  palette: SwatchPalette;
  span: string;
  aspect: string;
}

export interface ShowcaseSwatch {
  id: string;
  title: string;
  note: string;
  weave: string;
  pattern: WeavePattern;
  palette: SwatchPalette;
}

export interface TrustPoint {
  id: string;
  title: string;
  caption: string;
}

export interface WhyPoint {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface ProcessStepData {
  id: string;
  title: string;
  description: string;
}

export interface QualityPractice {
  id: string;
  title: string;
  description: string;
}

export interface GlobalReadinessPoint {
  id: string;
  title: string;
  description: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  category: string;
  message: string;
}

export type EnquiryFormErrors = Partial<Record<keyof EnquiryFormData, string>>;
