/**
 * Trade data — buyers, sourcing, logistics, payments.
 * Everything here is editable in one place. Placeholders are marked
 * so the client can replace them when details arrive.
 */

export interface Buyer {
  name: string;
  market: string;
}

export const buyers: Buyer[] = [
  { name: "OVS", market: "Italy" },
  { name: "REDCATS (Full-Beauty Brands)", market: "USA" },
  { name: "M & S", market: "London" },
  { name: "KIK", market: "Germany" },
  { name: "LINDEX", market: "Sweden" },
  { name: "La Redoute", market: "France" },
  { name: "ELLOS", market: "Sweden" },
  { name: "EMPAIR STORE", market: "—" },
  { name: "A.M London", market: "London" },
  { name: "JD Williams", market: "London" },
];

/** Mill regions — client to confirm exact provinces. */
export const sourcingOrigins = {
  headline: "Fabric sourced from mill regions across China",
  note: "Exact provinces to be confirmed — placeholder, edit in src/data/trade.ts.",
  regions: ["Jiangsu", "Zhejiang", "Guangdong", "Shandong"],
  regionsPending: true,
};

/** HK logistics partner — intentionally minimal until client shares details. */
export const logisticsPartner = {
  headline: "Hong Kong logistics coordination",
  note: "Consolidation and shipment scheduling via our HK logistics partner. Details shared on request — limited info for now.",
};

export const paymentMethods = ["T/T", "L/C", "D/P"];

export const paymentTerms = [
  "90 days from date of B/L",
  "120 days from date of B/L",
];

export const paymentTermsNote =
  "Other structures (e.g. 30/70, advance with balance before shipment, Net 30 / Net 60) by programme agreement. Method and terms are agreed separately on every order.";

export const certifications = [
  "GOTS",
  "GRS",
  "RCS",
  "OCS",
  "OEKO-TEX®",
  "FSC",
  "Better Cotton",
  "bluesign®",
];
