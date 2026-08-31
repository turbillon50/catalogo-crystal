import type { CSSProperties } from "react";

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({ width = "100%", height = 12, className }: SkeletonProps) {
  const style: CSSProperties = { width, height };
  return <div className={className ? `cr-skel ${className}` : "cr-skel"} style={style} />;
}
