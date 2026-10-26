import type { EnquiryFormData } from "../types";
import { sanitizeEnquiry } from "../features/enquiry/validation";

const REQUEST_TIMEOUT_MS = 10_000;
const MAX_PAYLOAD_BYTES = 20_000;

function resolveEndpoint(): string {
  const raw = (import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined)?.trim();

  if (!raw) {
    throw new Error(
      "Enquiry service is not configured. Please email us directly."
    );
  }

  let url: URL;
  try {
    url = new URL(raw, window.location.origin);
  } catch {
    throw new Error("Enquiry service URL is invalid.");
  }

  const isLocalHost =
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "[::1]";

  if (url.protocol !== "https:" && !isLocalHost) {
    throw new Error("Enquiry service must use HTTPS.");
  }

  return url.toString();
}

export async function submitEnquiry(payload: EnquiryFormData): Promise<void> {
  const endpoint = resolveEndpoint();
  const clean = sanitizeEnquiry(payload);
  const body = JSON.stringify(clean);

  if (new TextEncoder().encode(body).length > MAX_PAYLOAD_BYTES) {
    throw new Error("Enquiry payload is too large.");
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "omit",
      referrerPolicy: "strict-origin-when-cross-origin",
      body,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Enquiry submission failed with status ${response.status}`);
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Enquiry request timed out. Please try again.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
