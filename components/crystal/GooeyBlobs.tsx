"use client";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
export function GooeyBlobs({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 70, y: 90 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div ref={ref} onMouseMove={onMove} className={className} style={{ position: "relative", height: 220, overflow: "hidden" }}>
      <div className="cr-goo" style={{ position: "absolute", inset: 0 }}>
        <div className="cr-goo-blob" style={{ width: 90, height: 90, left: 90, top: 65, transform: "translate(0,0)" }} />
        <div className="cr-goo-blob" style={{ width: 70, height: 70, left: 0, top: 0, transform: `translate(${pos.x - 35}px, ${pos.y - 35}px)` }} />
      </div>
    </div>
  );
}
