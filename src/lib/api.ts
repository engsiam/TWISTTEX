import type {
  EnquiryFormData,
  FabricCategory,
  GlobalReadinessPoint,
  ProcessStepData,
  QualityPractice,
  ShowcaseSwatch,
  TrustPoint,
  ValuePillar,
  WhyPoint,
} from "../types";
import {
  fabricCategories as fabricCategoriesSeed,
  showcaseSwatches as showcaseSwatchesSeed,
} from "../data/products";
import {
  globalReadiness as globalReadinessSeed,
  qualityPractices as qualityPracticesSeed,
  trustPoints as trustPointsSeed,
  values as valuesSeed,
  whyPoints as whyPointsSeed,
} from "../data/capabilities";
import { processSteps as processStepsSeed } from "../data/process";

const CONTENT_LATENCY_MS = 120;

function resolveContent<T>(content: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(content), CONTENT_LATENCY_MS));
}

export function fetchTrustPoints(): Promise<TrustPoint[]> {
  return resolveContent(trustPointsSeed);
}

export function fetchFabricCategories(): Promise<FabricCategory[]> {
  return resolveContent(fabricCategoriesSeed);
}

export function fetchShowcaseSwatches(): Promise<ShowcaseSwatch[]> {
  return resolveContent(showcaseSwatchesSeed);
}

export function fetchWhyPoints(): Promise<WhyPoint[]> {
  return resolveContent(whyPointsSeed);
}

export function fetchProcessSteps(): Promise<ProcessStepData[]> {
  return resolveContent(processStepsSeed);
}

export function fetchQualityPractices(): Promise<QualityPractice[]> {
  return resolveContent(qualityPracticesSeed);
}

export function fetchGlobalReadiness(): Promise<GlobalReadinessPoint[]> {
  return resolveContent(globalReadinessSeed);
}

export function fetchValues(): Promise<ValuePillar[]> {
  return resolveContent(valuesSeed);
}

export async function submitEnquiry(payload: EnquiryFormData): Promise<void> {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Enquiry submission failed with status ${response.status}`);
    }

    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));
}
