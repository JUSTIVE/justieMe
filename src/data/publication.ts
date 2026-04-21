export type AcademicPaperKind =
  `${"Domestic" | "International"} ${"Journal" | "Conference"}`;

type Quote = "AMA" | "MLA" | "ISO690";

type PublicationType = {
  title: string;
  year: number;
};

export type AcademicPublication = {
  __typename: "AcademicPublication";
  title: string;
  author: string[];
  journal: string;
  doi: string;
  quote: Record<Quote, string>;
  kind: AcademicPaperKind;
} & PublicationType;

export type NormalPublication = {
  __typename: "NormalPublication";
  description: string;
  link?: string;
} & PublicationType;

export type PublicationSet = (AcademicPublication | NormalPublication)[];
