import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LoaderCircle, RotateCcw, TriangleAlert } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useEnquiryMutation } from "./useEnquiryMutation";
import { validateEnquiry } from "./validation";
import type { EnquiryFormData, EnquiryFormErrors } from "../../types";
import { useFabricCategories } from "../content/useSiteContent";

const EMPTY_FORM: EnquiryFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  category: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-ink/15 bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-clay focus:bg-white focus:outline-none";

const labelClasses = "mb-1.5 block text-xs font-bold tracking-wide text-ink";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-clay-deep">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<EnquiryFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const mutation = useEnquiryMutation();
  const { data: fabricCategories } = useFabricCategories();

  const setField = (field: keyof EnquiryFormData) => (value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof EnquiryFormData) => () => {
    const fieldErrors = validateEnquiry(form);
    setErrors((previous) => ({ ...previous, [field]: fieldErrors[field] }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mutation.isPending) return;

    const nextErrors = validateEnquiry(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    mutation.mutate(form);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    mutation.reset();
  };

  if (mutation.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full min-h-[26rem] flex-col items-center justify-center rounded-xl border border-ink/10 bg-white p-10 text-center shadow-card"
      >
        <CheckCircle2 className="size-14 text-clay" strokeWidth={1.5} />
        <h3 className="mt-6 font-display text-3xl font-medium">Enquiry received.</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
          Thank you, {form.name.split(" ")[0] || "there"}. Our sourcing team will review
          your requirement and reply to <strong>{form.email}</strong> shortly.
        </p>
        <Button variant="outlineLight" className="mt-8" onClick={handleReset}>
          <RotateCcw className="size-3.5" strokeWidth={2.25} />
          Send Another Enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Fabric enquiry form"
      className="rounded-xl border border-ink/10 bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className={labelClasses}>
            Name <span aria-hidden="true" className="text-clay">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => setField("name")(event.target.value)}
            onBlur={handleBlur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
            placeholder="Your full name"
            className={inputClasses}
          />
          <FieldError id="enquiry-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="enquiry-company" className={labelClasses}>
            Company
          </label>
          <input
            id="enquiry-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => setField("company")(event.target.value)}
            placeholder="Company / brand"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="enquiry-email" className={labelClasses}>
            Email <span aria-hidden="true" className="text-clay">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => setField("email")(event.target.value)}
            onBlur={handleBlur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            placeholder="you@company.com"
            className={inputClasses}
          />
          <FieldError id="enquiry-email-error" message={errors.email} />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setField("phone")(event.target.value)}
            onBlur={handleBlur("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
            placeholder="+00 000 000 000"
            className={inputClasses}
          />
          <FieldError id="enquiry-phone-error" message={errors.phone} />
        </div>

        <div>
          <label htmlFor="enquiry-country" className={labelClasses}>
            Country
          </label>
          <input
            id="enquiry-country"
            name="country"
            type="text"
            autoComplete="country-name"
            value={form.country}
            onChange={(event) => setField("country")(event.target.value)}
            placeholder="Where should we ship?"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="enquiry-category" className={labelClasses}>
            Fabric Category <span aria-hidden="true" className="text-clay">*</span>
          </label>
          <select
            id="enquiry-category"
            name="category"
            required
            value={form.category}
            onChange={(event) => setField("category")(event.target.value)}
            onBlur={handleBlur("category")}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? "enquiry-category-error" : undefined}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%2323201a%22%20stroke-width%3D%222%22%20fill%3D%22none%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10 ${form.category ? "" : "text-ink/40"}`}
          >
            <option value="" disabled>
              Select a category
            </option>
            {fabricCategories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
            <option value="Other / Multiple">Other / Multiple</option>
          </select>
          <FieldError id="enquiry-category-error" message={errors.category} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-message" className={labelClasses}>
            Fabric Requirement <span aria-hidden="true" className="text-clay">*</span>
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) => setField("message")(event.target.value)}
            onBlur={handleBlur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "enquiry-message-error" : "enquiry-message-hint"
            }
            placeholder="Construction, composition, weight (GSM), width, quantity and target delivery window — as much detail as you have."
            className={`${inputClasses} resize-y`}
          />
          {!errors.message && (
            <p id="enquiry-message-hint" className="mt-1.5 text-xs text-ink/45">
              The more specific your brief, the faster our first proposal.
            </p>
          )}
          <FieldError id="enquiry-message-error" message={errors.message} />
        </div>
      </div>

      <AnimatePresence>
        {mutation.isError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-lg border border-clay/30 bg-clay/5 p-4"
            >
              <TriangleAlert className="mt-0.5 size-4 shrink-0 text-clay-deep" strokeWidth={2} />
              <p className="text-xs leading-relaxed text-clay-deep">
                Something went wrong while sending your enquiry. Please try again — or
                email us directly if the issue persists.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        className="mt-7 w-full sm:w-auto"
        disabled={mutation.isPending}
        ariaLabel="Submit fabric enquiry"
      >
        {mutation.isPending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" strokeWidth={2.25} />
            Sending…
          </>
        ) : (
          <>
            Submit Enquiry
            <ArrowRight className="size-4" strokeWidth={2.25} />
          </>
        )}
      </Button>
    </form>
  );
}
