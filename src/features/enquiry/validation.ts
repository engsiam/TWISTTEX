import type { EnquiryFormData, EnquiryFormErrors } from "../../types";

export const ENQUIRY_LIMITS = {
  name: { min: 2, max: 100 },
  company: { max: 120 },
  email: { max: 254 },
  phone: { max: 20 },
  country: { max: 56 },
  category: { max: 80 },
  message: { min: 20, max: 2000 },
} as const;

// Stricter than the previous /^\S+@\S+\.\S{2,}$/: rejects spaces,
// consecutive dots, and over-long local/domain parts. Server must
// re-validate — this is defense-in-depth for UX only.
const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_ALLOWED_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

export function validateEnquiry(data: EnquiryFormData): EnquiryFormErrors {
  const errors: EnquiryFormErrors = {};
  const name = data.name.trim();
  const company = data.company.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const country = data.country.trim();
  const category = data.category.trim();
  const message = data.message.trim();

  if (name.length < ENQUIRY_LIMITS.name.min) {
    errors.name = "Please enter your full name.";
  } else if (name.length > ENQUIRY_LIMITS.name.max) {
    errors.name = `Name must be ${ENQUIRY_LIMITS.name.max} characters or fewer.`;
  }

  if (
    email.length === 0 ||
    email.length > ENQUIRY_LIMITS.email.max ||
    !EMAIL_PATTERN.test(email) ||
    email.includes("..")
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (company.length > ENQUIRY_LIMITS.company.max) {
    errors.company = `Company must be ${ENQUIRY_LIMITS.company.max} characters or fewer.`;
  }

  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (
      phone.length > ENQUIRY_LIMITS.phone.max ||
      !PHONE_ALLOWED_PATTERN.test(phone) ||
      digits.length < 7 ||
      digits.length > 15
    ) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  if (country.length > ENQUIRY_LIMITS.country.max) {
    errors.country = `Country must be ${ENQUIRY_LIMITS.country.max} characters or fewer.`;
  }

  if (!category) {
    errors.category = "Select a fabric category.";
  } else if (category.length > ENQUIRY_LIMITS.category.max) {
    errors.category = "Invalid category selection.";
  }

  if (message.length < ENQUIRY_LIMITS.message.min) {
    errors.message = `Please describe your requirement in at least ${ENQUIRY_LIMITS.message.min} characters.`;
  } else if (message.length > ENQUIRY_LIMITS.message.max) {
    errors.message = `Requirement must be ${ENQUIRY_LIMITS.message.max} characters or fewer.`;
  }

  return errors;
}

/** Trim all fields before validation/submission so stored data is clean
 *  and size checks can't be bypassed with surrounding whitespace. */
export function sanitizeEnquiry(data: EnquiryFormData): EnquiryFormData {
  return {
    name: data.name.trim(),
    company: data.company.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    country: data.country.trim(),
    category: data.category.trim(),
    message: data.message.trim(),
  };
}

/** Truncate user-controlled strings before rendering to avoid layout
 *  breakage / long-string DoS in the success message. React already
 *  escapes HTML, this is purely a display-length guard. */
export function truncateForDisplay(value: string, max = 40): string {
  const trimmed = value.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max)}…` : trimmed;
}
