type PublicationKind =
  `${"Domestic" | "International"} ${"Journal" | "Conference"}`;

type Quote = "AMA" | "MLA" | "ISO690";

export type PublicationType = {
  title: string;
  author: string[];
  journal: string;
  doi: string;
  type: PublicationKind;
  quote: Record<Quote, string>;
};
