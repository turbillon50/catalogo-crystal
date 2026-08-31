"use client";

import { useEffect } from "react";
import { initCrystal } from "@/lib/crystal-ui";

/**
 * Monta el motor JS (háptica, luz-cursor, vidrio que respira, reveal en
 * scroll). Un solo <CrystalEngine /> por página, no renderiza nada.
 */
export function CrystalEngine() {
  useEffect(() => {
    const cleanup = initCrystal();
    return cleanup;
  }, []);
  return null;
}
