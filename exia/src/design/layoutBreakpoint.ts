import { LayoutBreakpointConstraint } from './layoutBreakpoint';
export type LayoutBreakpointType = 
  "desktop"
  | "laptop"
  | "landscape
  | "phablet"
  | "phone"

export type LayoutBreakpointConstraintType = "min"|"max"

export type LayoutBreakpointConstraint = {
  type: LayoutBreakpointConstraintType
  value: number
}