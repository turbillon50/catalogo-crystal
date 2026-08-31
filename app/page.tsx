"use client";

import { useState } from "react";
import { CrystalMesh } from "@/components/CrystalMesh";
import { GlassFilters } from "@/components/GlassFilters";
import { GlassCard } from "@/components/GlassCard";
import { PlayerCard } from "@/components/PlayerCard";
import { MetricCard } from "@/components/MetricCard";

export default function CrystalShowcase() {
  const [intensity, setIntensity] = useState(95);

  return (
    <div className="relative min-h-screen">
      <CrystalMesh />
      <GlassFilters intensity={intensity} />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[var(--cx-fg-muted)]">
              02 · Catálogo Crystal
            </p>
            <h1 className="text-3xl font-semibold text-[var(--cx-fg)]">
              Cards de cristal · Distorsión real
            </h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-[var(--cx-fg-muted)]">
            <span>meshIntensity</span>
            <input
              type="range"
              min={0}
              max={100}
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-32 accent-[var(--cx-accent)]"
            />
            <span className="w-9 text-right text-[var(--cx-fg)]">{intensity}%</span>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <GlassCard>
            <span className="mb-4 inline-block rounded-full bg-[var(--cx-teal)]/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[var(--cx-teal)]">
              Liquid glass
            </span>
            <h2 className="mb-2 text-xl font-semibold text-[var(--cx-fg)]">Distorsión SVG real</h2>
            <p className="text-sm leading-relaxed text-[var(--cx-fg-muted)]">
              Este vidrio refracta el mesh de fondo con feDisplacementMap — no es un blur
              plano, dobla la luz de verdad.
            </p>
          </GlassCard>

          <PlayerCard title="Midnight Drive" subtitle="Neon Palms" progress={45} />

          <MetricCard
            label="Ingresos MRR"
            value="$48,290"
            delta="+18.4%"
            bars={[30, 45, 35, 55, 40, 60, 90]}
            className="md:col-span-2"
          />
        </div>
      </main>
    </div>
  );
}
