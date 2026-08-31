"use client";
import { useEffect } from "react";
import { initCrystal } from "@/lib/crystal-ui";

export function CrystalEngine() {
  useEffect(() => {
    const cleanup = initCrystal();
    return cleanup;
  }, []);
  return null;
}
