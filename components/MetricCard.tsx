"use client";

import { GlassCard } from "@/components/GlassCard";
import { cn } from "@/lib/cn";

export interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
  bars?: number[];
  className?: string;
}

/** Tarjeta de métrica tipo "Ingresos MRR" — vidrio líquido + mini barra de historial. */
export function MetricCard({ label, value, delta, bars = [30, 45, 35, 55, 40, 60, 90], className }: MetricCardProps) {
  const max = Math.max(...bars);
  return (
    <GlassCard className={className}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-[var(--cx-fg-muted)]">{label}</p>
        {delta && (
          <span className="rounded-full bg-[var(--cx-green-soft)] px-2.5 py-1 text-xs font-medium text-[var(--cx-green)]">
            {delta}
          </span>
        )}
      </div>
      <p className="mb-6 text-4xl font-semibold tracking-tight text-[var(--cx-fg)]">{value}</p>
      <div className="flex h-16 items-end gap-1.5">
        {bars.map((b, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-t-sm transition-all",
              i === bars.length - 1
                ? "bg-gradient-to-t from-[var(--cx-accent)] to-[var(--cx-teal)]"
                : "bg-white/[0.12]"
            )}
            style={{ height: `${Math.max(8, (b / max) * 100)}%` }}
          />
        ))}
      </div>
    </GlassCard>
  );
}
