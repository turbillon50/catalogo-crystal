export interface ProgressBarProps { value: number; max?: number; className?: string; }
export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={className ? `cr-progress ${className}` : "cr-progress"}>
      <div style={{ width: `${pct}%` }} />
    </div>
  );
}
