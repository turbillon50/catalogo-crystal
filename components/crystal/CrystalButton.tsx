import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CrystalButtonVariant = "primary" | "ghost" | "cta" | "icon";

export interface CrystalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CrystalButtonVariant;
}

const variantClass: Record<CrystalButtonVariant, string> = {
  primary: "cr-btn",
  ghost: "cr-btn cr-btn--ghost",
  cta: "cr-btn cr-btn--cta",
  icon: "cr-btn cr-btn--icon",
};

export function CrystalButton({ variant = "primary", className, children, ...rest }: CrystalButtonProps) {
  return (
    <button className={cn(variantClass[variant], className)} {...rest}>
      {children}
    </button>
  );
}
