import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  liquid?: boolean;
  glow?: boolean;
}
export function GlassCard({ liquid = false, glow = true, className, children, ...rest }: GlassCardProps) {
  return (
    <div className={cn("cr-glass cr-card", liquid && "cr-glass--liquid", className)} data-glow={glow ? "" : undefined} {...rest}>
      {children}
    </div>
  );
}
