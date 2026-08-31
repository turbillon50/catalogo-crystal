export interface TabBarItem { value: string; icon: string; label: string; }
export interface TabBarProps { items: TabBarItem[]; value: string; onChange: (value: string) => void; className?: string; }
export function TabBar({ items, value, onChange, className }: TabBarProps) {
  return (
    <nav className={className ? `cr-tabbar ${className}` : "cr-tabbar"} data-glow="">
      {items.map((item) => (
        <button key={item.value} type="button" className="cr-tab" data-active={item.value === value ? "true" : "false"} onClick={() => onChange(item.value)}>
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
