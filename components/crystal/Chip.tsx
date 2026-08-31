import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> { active?: boolean; }
export function Chip({ active = false, className, children, ...rest }: ChipProps) {
  return <button type="button" className={cn("cr-chip", className)} data-active={active ? "true" : "false"} {...rest}>{children}</button>;
}
