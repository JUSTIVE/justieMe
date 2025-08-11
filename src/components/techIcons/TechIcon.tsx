import { match } from "ts-pattern";
import { ReactIcon } from "./ReactIcon";
import { TypeScriptIcon } from "./TypescriptIcon";
import { NextJsIcon } from "./NextJsIcon";
import { TailwindCSSIcon } from "./TailwindIcon";
import { RelayIcon } from "./RelayIcon";
import { GraphQLIcon } from "./GraphQLIcon";
import { RescriptIcon } from "./RescriptIcon";
import { BunIcon } from "./BunIcon";
import { RecoilIcon } from "./RecoilIcon";
import { StyledComponentsIcon } from "./StyledComponentIcon";
import { StorybookIcon } from "./StorybookIcon";
import { TanStackIcon } from "./TanStackIcon";

export type TechStackKind =
  | "React"
  | "TypeScript"
  | "Next.js"
  | "TailwindCSS"
  | "Relay"
  | "GraphQL"
  | "Rescript"
  | "Recoil"
  | "Styled Components"
  | "Storybook"
  | "TanStack"
  | "Bun";
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
    .with("TailwindCSS", () => <TailwindCSSIcon className={className} />)
    .with("Relay", () => <RelayIcon className={className} />)
    .with("GraphQL", () => <GraphQLIcon className={className} />)
    .with("Rescript", () => <RescriptIcon className={className} />)
    .with("Bun", () => <BunIcon className={className} />)
    .with("Recoil", () => <RecoilIcon className={className} />)
    .with("Storybook", () => <StorybookIcon className={className} />)
    .with("TanStack", () => <TanStackIcon className={className} />)
    .with("Styled Components", () => (
      <StyledComponentsIcon className={className} />
    ))
    .otherwise(() => <></>);
};
