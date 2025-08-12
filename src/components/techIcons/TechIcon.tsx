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
import type { SVGProps } from "react";

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
  ...props
}: {
  stack: TechStackKind;
} & SVGProps<SVGSVGElement>) => {
  return match(stack)
    .with("React", () => <ReactIcon {...props} />)
    .with("TypeScript", () => <TypeScriptIcon {...props} />)
    .with("Next.js", () => <NextJsIcon {...props} />)
    .with("TailwindCSS", () => <TailwindCSSIcon {...props} />)
    .with("Relay", () => <RelayIcon {...props} />)
    .with("GraphQL", () => <GraphQLIcon {...props} />)
    .with("Rescript", () => <RescriptIcon {...props} />)
    .with("Bun", () => <BunIcon {...props} />)
    .with("Recoil", () => <RecoilIcon {...props} />)
    .with("Storybook", () => <StorybookIcon {...props} />)
    .with("TanStack", () => <TanStackIcon {...props} />)
    .with("Styled Components", () => <StyledComponentsIcon {...props} />)
    .otherwise(() => <></>);
};
