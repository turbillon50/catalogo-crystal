"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

export type ComposerVariant =
  | "grafito"
  | "obsidiana"
  | "porcelana"
  | "crystal"
  | "editorial"
  | "terminal"
  | "aurora";

export interface ComposerProps {
  variant: ComposerVariant;
  placeholder?: string;
  onSend?: (text: string) => void;
  className?: string;
}

/**
 * Barra de compose (input de chat IA) — 7 pieles del kit "Composers".
 * Send muerto hasta que hay texto, Enter envía, Shift+Enter salto de línea
 * (regla del manifiesto del kit). Terminal y Editorial tienen su propia
 * barra (fkey/exec y "Escribir" respectivamente); el resto comparte
 * ícono+pill+send.
 */
export function Composer({ variant, placeholder = "Pregunta lo que quieras", onSend, className }: ComposerProps) {
  const [draft, setDraft] = useState("");
  const ready = draft.trim().length > 0;

  const send = () => {
    if (!ready) return;
    onSend?.(draft);
    setDraft("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const body = (
    <div className={cn("cmp", `cmp--${variant}`, className)}>
      <textarea
        rows={variant === "editorial" ? 3 : 2}
        placeholder={placeholder}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {variant === "terminal" ? (
        <div className="cmp-bar">
          <button type="button" className="cmp-btn--fkey">F1 ayuda</button>
          <button type="button" className="cmp-btn--fkey">F2 clear</button>
          <div className="grow" />
          <button type="button" className="cmp-btn--exec" data-ready={ready ? "true" : "false"} onClick={send}>
            EXEC ↵
          </button>
        </div>
      ) : variant === "editorial" ? (
        <div className="cmp-bar">
          <div className="grow" />
          <button type="button" className="cmp-btn--tinta" data-ready={ready ? "true" : "false"} onClick={send}>
            Escribir
          </button>
        </div>
      ) : (
        <div className="cmp-bar">
          <button type="button" className="cmp-icon" aria-label="Adjuntar">＋</button>
          <button type="button" className="cmp-pill">⚙ Herramientas</button>
          <div className="grow" />
          <button
            type="button"
            className="cmp-send"
            data-ready={ready ? "true" : "false"}
            onClick={send}
            aria-label="Enviar"
          >
            ↑
          </button>
        </div>
      )}
    </div>
  );

  // Obsidiana necesita el anillo degradado envolviendo — aparece al foco.
  if (variant === "obsidiana") {
    return <div className="cmp-ring">{body}</div>;
  }
  return body;
}
