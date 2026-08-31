import type { CSSProperties } from "react";

export interface ProgressRingProps {
  /** 0-100 */
  value: number;
  size?: number;
  className?: string;
}

const CIRCUMFERENCE = 264; // 2 * PI * r42, del CSS del kit (cr-ring usa r=42)

export function ProgressRing({ value, size = 110, className }: ProgressRingProps) {
  const pct = Math.min(100, Math.max(0, value)) / 100;
  const offset = CIRCUMFERENCE * (1 - pct);
  const gradId = "ring-grad";
  return (
    <svg
      className={className ? `cr-ring ${className}` : "cr-ring"}
      width={size}
      height={size}
      viewBox="0 0 110 110"
    >
      <circle cx="55" cy="55" r="42" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="9" />
      <circle
        className="fill"
        cx="55"
        cy="55"
        r="42"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="9"
        style={{ "--ring-off": offset } as CSSProperties}
      />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9be7ff" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  );
}
