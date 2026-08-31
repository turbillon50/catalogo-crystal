"use client";
import { useState } from "react";
export interface CommandItem { icon: string; label: string; kbd?: string; }
export interface CommandPaletteProps { items: CommandItem[]; placeholder?: string; className?: string; }
export function CommandPalette({ items, placeholder = "Escribe un comando…", className }: CommandPaletteProps) {
  const [active, setActive] = useState(0);
  return (
    <div className={className ? `cr-cmdk ${className}` : "cr-cmdk"} data-glow="">
      <div className="cr-cmdk-head">
        <span>⌕</span>
        <input placeholder={placeholder} />
        <span className="cr-kbd">esc</span>
      </div>
      <div className="cr-cmdk-list">
        {items.map((item, i) => (
          <div key={item.label} className="cr-cmdk-row" data-active={i === active ? "true" : "false"} onMouseEnter={() => setActive(i)}>
            <span>{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.kbd && <span className="cr-kbd">{item.kbd}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
