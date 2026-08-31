export interface AvatarItem { initials: string; gradient?: string; }
export interface AvatarStackProps { items: AvatarItem[]; className?: string; }
const DEFAULT_GRADIENTS = [
  "linear-gradient(135deg,#9be7ff,#60a5fa)", "linear-gradient(135deg,#a78bfa,#f472b6)",
  "linear-gradient(135deg,#7CFFB2,#34d399)", "linear-gradient(135deg,#ff9d6b,#ff6b8a)",
];
export function AvatarStack({ items, className }: AvatarStackProps) {
  return (
    <div className={className ? `cr-avatars ${className}` : "cr-avatars"}>
      {items.map((item, i) => (
        <div key={item.initials + i} className="cr-avatar" style={{ background: item.gradient ?? DEFAULT_GRADIENTS[i % DEFAULT_GRADIENTS.length] }}>
          {item.initials}
        </div>
      ))}
    </div>
  );
}
