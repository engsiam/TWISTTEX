import type { EnquiryFormData, EnquiryFormErrors } from "../../types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,16}$/;

export function validateEnquiry(data: EnquiryFormData): EnquiryFormErrors {
  const errors: EnquiryFormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone.trim() && !PHONE_PATTERN.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.category) {
    errors.category = "Select a fabric category.";
  }
  if (data.message.trim().length < 20) {
    errors.message = "Please describe your requirement in at least 20 characters.";
  }

  return errors;
}
