export interface ToggleProps {
  on: boolean;
  onChange: (on: boolean) => void;
  className?: string;
}

export function Toggle({ on, onChange, className }: ToggleProps) {
  return (
    <div
      className={className ? `cr-toggle ${className}` : "cr-toggle"}
      data-on={on ? "true" : "false"}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onClick={() => onChange(!on)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!on);
        }
      }}
    >
      <div className="cr-toggle-knob" />
    </div>
  );
}
