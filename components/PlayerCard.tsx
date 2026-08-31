"use client";

import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { IconPause, IconPlay, IconSkipBack, IconSkipForward, IconWave } from "@/components/CrystalIcons";

export interface PlayerCardProps {
  title: string;
  subtitle: string;
  progress?: number;
  className?: string;
}

/** Tarjeta de reproductor tipo "Midnight Drive" — vidrio líquido + controles reales. */
export function PlayerCard({ title, subtitle, progress = 45, className }: PlayerCardProps) {
  const [playing, setPlaying] = useState(true);

  return (
    <GlassCard className={className}>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-cx bg-gradient-to-br from-[var(--cx-teal)] via-[var(--cx-accent)] to-[var(--cx-green)]" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-[var(--cx-fg)]">{title}</p>
          <p className="truncate text-sm text-[var(--cx-fg-muted)]">{subtitle}</p>
        </div>
        <IconWave size={18} className="shrink-0 text-[var(--cx-teal)]" />
      </div>

      <div className="mb-5 h-1 overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--cx-teal)] to-[var(--cx-accent)] transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-center gap-6">
        <button type="button" aria-label="Anterior" className="text-white/70 hover:text-white">
          <IconSkipBack size={20} />
        </button>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cx-accent)] text-white shadow-[0_8px_24px_-4px_var(--cx-accent)] transition-transform active:scale-95"
        >
          {playing ? <IconPause size={18} /> : <IconPlay size={18} />}
        </button>
        <button type="button" aria-label="Siguiente" className="text-white/70 hover:text-white">
          <IconSkipForward size={20} />
        </button>
      </div>
    </GlassCard>
  );
}
