type PublicationKind =
  `${"Domestic" | "International"} ${"Journal" | "Conference"}`;

type Quote = "AMA" | "MLA" | "ISO690";

export type PublicationType = {
  title: string;
  author: string[];
  journal: string;
  doi: string;
  quote: Record<Quote, string>;
};

export type PublicationSet = Record<PublicationKind, PublicationType[]>;
