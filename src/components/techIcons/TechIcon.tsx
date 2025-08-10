import { match } from "ts-pattern";
import { ReactIcon } from "./React";
import { TypeScriptIcon } from "./Typescript";
import { NextJsIcon } from "./NextJs";

export type TechStackKind =
  | "React"
  | "TypeScript"
  | "Next.js"
  | "TailwindCSS"
  | "Relay"
  | "GraphQL";
export const TechIcon = ({
  stack,
  className,
}: {
  stack: TechStackKind;
  className?: string;
}) => {
  return match(stack)
    .with("React", () => <ReactIcon className={className} />)
    .with("TypeScript", () => <TypeScriptIcon className={className} />)
    .with("Next.js", () => <NextJsIcon className={className} />)
    .otherwise(() => <></>);
};
