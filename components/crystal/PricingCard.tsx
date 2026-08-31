import type { ReactNode } from "react";
export interface PricingCardProps { children: ReactNode; className?: string; }
export function PricingCard({ children, className }: PricingCardProps) {
  return (
    <div className={className ? `cr-border-spin ${className}` : "cr-border-spin"}>
      <div className="cr-glass-dark" data-glow="" style={{ padding: 28 }}>{children}</div>
    </div>
  );
}
