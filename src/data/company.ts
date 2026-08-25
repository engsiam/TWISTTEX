import type { NavLink } from "../types";

export const siteUrl = "https://www.twisttexinternational.com";

export const company = {
  name: "Twisttex International",
  shortName: "Twisttex",
  descriptor: "Fabric Sourcing & Development",
  positioning:
    "A quality-driven fabric sourcing and development partner for global apparel businesses.",
  statement:
    "We source, develop and inspect fabrics so apparel brands can build collections with confidence.",
};

export const contact = {
  email: "info@twisttexinternational.com",
  phone: "",
  whatsappUrl: "",
  address: "",
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "fabrics", label: "Fabrics" },
  { id: "process", label: "Process" },
  { id: "quality", label: "Quality" },
  { id: "global", label: "Global" },
  { id: "contact", label: "Contact" },
];
