import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  wrapperClassName?: string;
}

export function Field({ icon = "⌕", wrapperClassName, className, ...rest }: FieldProps) {
  return (
    <label className={cn("cr-field", wrapperClassName)}>
      <span>{icon}</span>
      <input className={className} {...rest} />
    </label>
  );
}
