"use client";

import { useEffect } from "react";
import type { ReactNode, MouseEvent } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className="cr-modal-backdrop" onClick={onClose}>
      <div className="cr-modal" data-glow="" onClick={stop}>
        {children}
      </div>
    </div>
  );
}
