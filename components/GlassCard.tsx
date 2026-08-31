import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** px de blur del cristal antes de la distorsión. Default 18. */
  blur?: number;
}

/**
 * Tarjeta de vidrio líquido — backdrop-filter con blur + el filtro SVG
 * de GlassFilters (feDisplacementMap) para refractar el mesh de atrás
 * de verdad, no solo desenfocarlo. Requiere <GlassFilters /> montado
 * en algún punto superior del árbol.
 */
export function GlassCard({ blur = 18, className, style, children, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-cx-lg border p-6",
        className
      )}
      style={{
        borderColor: "var(--cx-border)",
        background: "var(--cx-surface)",
        backdropFilter: `blur(${blur}px) url(#cx-glass-distort)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.12), var(--cx-shadow)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
