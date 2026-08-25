import type { EnquiryFormData } from "../types";

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
  }
}
