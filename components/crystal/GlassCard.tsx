import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** true = distorsión real (feDisplacementMap, corre en Chromium). false = blur normal. */
  liquid?: boolean;
  /** Luz especular que sigue el cursor + aberración cromática (requiere <CrystalEngine />). */
  glow?: boolean;
}

export function GlassCard({ liquid = false, glow = true, className, children, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn("cr-glass cr-card", liquid && "cr-glass--liquid", className)}
      data-glow={glow ? "" : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
