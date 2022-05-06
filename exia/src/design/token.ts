import { LayoutBreakpoint, LayoutBreakpointConstraint } from './layoutBreakpoint';

export type color = string;

export type DesignToken = {
  layoutBreakpoint : Record<LayoutBreakpoint,LayoutBreakpointConstraint>
}