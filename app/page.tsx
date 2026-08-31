"use client";

import { useState } from "react";
import { CrystalBackground } from "@/components/crystal/CrystalBackground";
import { CrystalButton } from "@/components/crystal/CrystalButton";
import { GlassCard } from "@/components/crystal/GlassCard";
import { Toggle } from "@/components/crystal/Toggle";
import { Segmented } from "@/components/crystal/Segmented";
import { Chip } from "@/components/crystal/Chip";
import { Field } from "@/components/crystal/Field";
import { RangeSlider } from "@/components/crystal/RangeSlider";
import { TabBar } from "@/components/crystal/TabBar";
import { Toast } from "@/components/crystal/Toast";
import { CommandPalette } from "@/components/crystal/CommandPalette";
import { Modal } from "@/components/crystal/Modal";
import { Skeleton } from "@/components/crystal/Skeleton";
import { ProgressBar } from "@/components/crystal/ProgressBar";
import { ProgressRing } from "@/components/crystal/ProgressRing";
import { PricingCard } from "@/components/crystal/PricingCard";
import { AvatarStack } from "@/components/crystal/AvatarStack";
import { GooeyBlobs } from "@/components/crystal/GooeyBlobs";
import { Composer } from "@/components/crystal/Composer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16" data-reveal>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--cr-text-dim)" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CrystalShowcase() {
  const [toggleOn, setToggleOn] = useState(true);
  const [period, setPeriod] = useState("week");
  const [chip, setChip] = useState(true);
  const [range, setRange] = useState(64);
  const [tab, setTab] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <CrystalBackground />

      <main className="mx-auto max-w-4xl px-6 py-20" style={{ position: "relative" }}>
        <header className="mb-16" data-reveal>
          <p className="cr-display mb-2 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--cr-accent)" }}>
            Catálogo Crystal
          </p>
          <h1 className="cr-display text-4xl font-bold" style={{ color: "var(--cr-text)" }}>
            Liquid glass premium
          </h1>
          <p className="mt-2 max-w-lg" style={{ color: "var(--cr-text-dim)" }}>
            Vidrio con distorsión SVG real, mesh vivo que respira, háptica y luz que sigue el
            cursor. Todo el kit que armaste, ya como componentes React.
          </p>
        </header>

        <Section title="Botones">
          <div className="flex flex-wrap items-center gap-3">
            <CrystalButton>Acción primaria</CrystalButton>
            <CrystalButton variant="ghost">Secundario</CrystalButton>
            <CrystalButton variant="cta">Gradient CTA</CrystalButton>
            <CrystalButton variant="icon">♡</CrystalButton>
          </div>
        </Section>

        <Section title="Vidrio líquido">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <GlassCard>
              <p className="cr-display mb-1 text-lg font-semibold" style={{ color: "var(--cr-text)" }}>
                Blur normal
              </p>
              <p style={{ color: "var(--cr-text-dim)" }}>backdrop-filter: blur + saturate.</p>
            </GlassCard>
            <GlassCard liquid>
              <p className="cr-display mb-1 text-lg font-semibold" style={{ color: "var(--cr-text)" }}>
                Distorsión real
              </p>
              <p style={{ color: "var(--cr-text-dim)" }}>
                url(#lg-dist) — dobla la luz de verdad, corre en Chromium.
              </p>
            </GlassCard>
          </div>
        </Section>

        <Section title="Toggle, Segmented, Chip">
          <div className="flex flex-wrap items-center gap-8">
            <Toggle on={toggleOn} onChange={setToggleOn} />
            <Segmented
              value={period}
              onChange={setPeriod}
              options={[
                { value: "day", label: "Día" },
                { value: "week", label: "Semana" },
              ]}
            />
            <Chip active={chip} onClick={() => setChip((c) => !c)}>
              Glass
            </Chip>
          </div>
        </Section>

        <Section title="Input, Slider">
          <div className="flex max-w-sm flex-col gap-5">
            <Field placeholder="Buscar…" />
            <RangeSlider value={range} onChange={setRange} />
          </div>
        </Section>

        <Section title="Tab bar (PWA)">
          <TabBar
            value={tab}
            onChange={setTab}
            items={[
              { value: "home", icon: "◈", label: "Inicio" },
              { value: "search", icon: "⌕", label: "Buscar" },
              { value: "profile", icon: "◐", label: "Perfil" },
            ]}
          />
        </Section>

        <Section title="Toast">
          <div className="flex max-w-sm flex-col gap-3">
            <Toast variant="ok" title="Pago confirmado" description="$1,240.00 MXN" />
            <Toast variant="info" title="Sincronizando" description="Puede tardar unos segundos" />
          </div>
        </Section>

        <Section title="Skeleton, Progress">
          <div className="flex max-w-sm flex-col gap-4">
            <Skeleton height={12} width="60%" />
            <ProgressBar value={71} />
            <ProgressRing value={71} size={90} />
          </div>
        </Section>

        <Section title="Command palette">
          <CommandPalette
            items={[
              { icon: "◈", label: "Nuevo componente", kbd: "⌘N" },
              { icon: "⌕", label: "Buscar en el catálogo", kbd: "⌘K" },
              { icon: "◐", label: "Cambiar de preset" },
            ]}
          />
        </Section>

        <Section title="Pricing (borde vivo)">
          <PricingCard className="max-w-xs">
            <p className="cr-display text-sm font-bold" style={{ color: "var(--cr-accent)" }}>
              PRO
            </p>
            <p className="cr-num cr-display my-2 text-3xl font-bold" style={{ color: "var(--cr-text)" }}>
              $499<span className="text-sm font-normal">/mes</span>
            </p>
            <p className="mb-4 text-sm" style={{ color: "var(--cr-text-dim)" }}>
              Todo el kit, uso ilimitado.
            </p>
            <CrystalButton variant="cta" style={{ width: "100%" }}>
              Elegir plan
            </CrystalButton>
          </PricingCard>
        </Section>

        <Section title="Avatar stack">
          <AvatarStack items={[{ initials: "LD" }, { initials: "MV" }, { initials: "AR" }, { initials: "+8" }]} />
        </Section>

        <Section title="Gooey (estilo Telegram)">
          <p className="mb-3 text-sm" style={{ color: "var(--cr-text-dim)" }}>
            Mueve el mouse — los blobs se funden al acercarse.
          </p>
          <GooeyBlobs className="max-w-sm" />
        </Section>

        <Section title="Composers — 7 pieles para IA">
          <p className="mb-5 max-w-lg text-sm" style={{ color: "var(--cr-text-dim)" }}>
            Misma barra de compose, misma lógica (send muerto sin texto, Enter envía,
            Shift+Enter salta línea) — 7 pieles distintas para 7 tipos de producto.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl p-6" style={{ background: "#0a0a0c" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">Grafito</p>
              <Composer variant="grafito" />
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#0a0a0c" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">Obsidiana</p>
              <Composer variant="obsidiana" />
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#f7f7f8" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/50">Porcelana</p>
              <Composer variant="porcelana" />
            </div>
            <div className="rounded-2xl p-6" style={{ position: "relative", overflow: "hidden" }}>
              <p className="relative z-10 mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
                Crystal
              </p>
              <div className="relative z-10">
                <Composer variant="crystal" />
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#f4efe6" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/45">Editorial</p>
              <Composer variant="editorial" />
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#050805" }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(74,222,128,.6)" }}>
                Terminal
              </p>
              <Composer variant="terminal" />
            </div>
            <div className="aurora-bg rounded-2xl p-6 md:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/45">Aurora</p>
              <Composer variant="aurora" />
            </div>
          </div>
        </Section>

        <Section title="Modal">
          <CrystalButton variant="ghost" onClick={() => setModalOpen(true)}>
            Abrir modal
          </CrystalButton>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <p className="cr-display mb-2 text-lg font-semibold" style={{ color: "var(--cr-text)" }}>
              ¿Confirmar?
            </p>
            <p className="mb-5 text-sm" style={{ color: "var(--cr-text-dim)" }}>
              Cierra con tap fuera o Escape.
            </p>
            <div className="flex justify-end gap-2">
              <CrystalButton variant="ghost" onClick={() => setModalOpen(false)}>
                Cancelar
              </CrystalButton>
              <CrystalButton variant="cta" onClick={() => setModalOpen(false)}>
                Confirmar
              </CrystalButton>
            </div>
          </Modal>
        </Section>
      </main>
    </div>
  );
}
