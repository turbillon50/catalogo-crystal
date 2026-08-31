/**
 * Filtro SVG compartido para el vidrio líquido — feTurbulence + feDisplacementMap,
 * no un blur plano. `intensity` (0-100) controla cuánto se dobla la luz;
 * se referencia desde cualquier tarjeta con backdrop-filter: blur(Npx) url(#cx-glass-distort).
 * Móntalo UNA vez arriba del árbol (ej. en el layout o el showcase).
 */
export function GlassFilters({ intensity = 40 }: { intensity?: number }) {
  const scale = Math.round((Math.min(100, Math.max(0, intensity)) / 100) * 70);
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="cx-glass-distort" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves={2}
            seed={7}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
