export interface SegmentedOption {
  value: string;
  label: string;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Segmented({ options, value, onChange, className }: SegmentedProps) {
  return (
    <div className={className ? `cr-seg ${className}` : "cr-seg"}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          data-active={opt.value === value ? "true" : "false"}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
