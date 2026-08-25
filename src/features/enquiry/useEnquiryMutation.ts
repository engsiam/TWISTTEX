import { useMutation } from "@tanstack/react-query";
import { submitEnquiry } from "../../lib/api";

export function useEnquiryMutation() {
  return useMutation({
    mutationFn: submitEnquiry,
  });
}
