"use client";
import type { CSSProperties } from "react";
export interface RangeSliderProps { value: number; min?: number; max?: number; onChange: (value: number) => void; className?: string; }
export function RangeSlider({ value, min = 0, max = 100, onChange, className }: RangeSliderProps) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <input type="range" className={className ? `cr-range ${className}` : "cr-range"} min={min} max={max} value={value}
      onChange={(e) => onChange(Number(e.target.value))} style={{ "--fill": `${fill}%` } as CSSProperties} />
  );
}
