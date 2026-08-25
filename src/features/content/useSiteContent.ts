import { useQuery } from "@tanstack/react-query";
import {
  fetchFabricCategories,
  fetchGlobalReadiness,
  fetchProcessSteps,
  fetchQualityPractices,
  fetchShowcaseSwatches,
  fetchTrustPoints,
  fetchValues,
  fetchWhyPoints,
} from "../../lib/api";
import { fabricCategories, showcaseSwatches } from "../../data/products";
import {
  globalReadiness,
  qualityPractices,
  trustPoints,
  values,
  whyPoints,
} from "../../data/capabilities";
import { processSteps } from "../../data/process";

const CONTENT_STALE_TIME_MS = 60_000;

function contentQueryOptions<T>(key: readonly string[], seed: T, queryFn: () => Promise<T>) {
  return {
    queryKey: ["content", ...key],
    queryFn,
    initialData: seed,
    staleTime: CONTENT_STALE_TIME_MS,
  } as const;
}

export function useTrustPoints() {
  return useQuery(
    contentQueryOptions(["trust-points"], trustPoints, fetchTrustPoints)
  );
}

export function useFabricCategories() {
  return useQuery(
    contentQueryOptions(["fabric-categories"], fabricCategories, fetchFabricCategories)
  );
}

export function useShowcaseSwatches() {
  return useQuery(
    contentQueryOptions(["showcase-swatches"], showcaseSwatches, fetchShowcaseSwatches)
  );
}

export function useWhyPoints() {
  return useQuery(contentQueryOptions(["why-points"], whyPoints, fetchWhyPoints));
}

export function useProcessSteps() {
  return useQuery(contentQueryOptions(["process-steps"], processSteps, fetchProcessSteps));
}

export function useQualityPractices() {
  return useQuery(
    contentQueryOptions(["quality-practices"], qualityPractices, fetchQualityPractices)
  );
}

export function useGlobalReadiness() {
  return useQuery(
    contentQueryOptions(["global-readiness"], globalReadiness, fetchGlobalReadiness)
  );
}

export function useValues() {
  return useQuery(contentQueryOptions(["values"], values, fetchValues));
}
