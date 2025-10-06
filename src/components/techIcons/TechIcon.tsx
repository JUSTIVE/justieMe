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
import { JavascriptIcon } from "./JavascriptIcon";
import { VueIcon } from "./VueIcon";
import { ElectronIcon } from "./ElectronIcon";
import { FSharpIcon } from "./FsharpIcon";
import { ScalaIcon } from "./ScalaIcon";
import { CSharpIcon } from "./CSharpIcon";
import { UnityIcon } from "./UnityIcon";

export type TechStackKind =
  | "React"
  | "TypeScript"
  | "Javascript"
  | "Electron"
  | "F#"
  | "C#"
  | "Scala"
  | "Vue"
  | "Next.js"
  | "TailwindCSS"
  | "Relay"
  | "GraphQL"
  | "Rescript"
  | "Recoil"
  | "Styled Components"
  | "Storybook"
  | "TanStack"
  | "Unity"
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
    .with("Javascript", () => <JavascriptIcon {...props} />)
    .with("Vue", () => <VueIcon {...props} />)
    .with("Electron", () => <ElectronIcon {...props} />)
    .with("F#", () => <FSharpIcon {...props} />)
    .with("Scala", () => <ScalaIcon {...props} />)
    .with("C#", () => <CSharpIcon {...props} />)
    .with("Unity", () => <UnityIcon {...props} />)
    .otherwise(() => <>{}</>);
};
