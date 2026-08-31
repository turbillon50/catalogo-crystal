export interface ToastProps {
  icon?: string;
  variant?: "ok" | "info";
  title: string;
  description?: string;
  className?: string;
}

export function Toast({ icon, variant = "ok", title, description, className }: ToastProps) {
  return (
    <div className={className ? `cr-toast ${className}` : "cr-toast"} data-glow="">
      <div className={`cr-toast-icon cr-toast-icon--${variant}`}>{icon ?? (variant === "ok" ? "✓" : "i")}</div>
      <div>
        <b>{title}</b>
        {description && (
          <>
            <br />
            <small>{description}</small>
          </>
        )}
      </div>
    </div>
  );
}
