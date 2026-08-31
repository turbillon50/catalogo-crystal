import type { SVGProps } from "react";

type IP = SVGProps<SVGSVGElement> & { size?: number };

const b = (sz: number, p: IP) => ({
  width: sz,
  height: sz,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  ...p,
});

export const IconPlay = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)} fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const IconPause = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)} fill="currentColor">
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

export const IconSkipBack = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)} fill="currentColor">
    <path d="M6 5h2v14H6zM20 5v14l-11-7z" />
  </svg>
);

export const IconSkipForward = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)} fill="currentColor">
    <path d="M16 5h2v14h-2zM4 5v14l11-7z" />
  </svg>
);

export const IconWave = ({ size = 20, ...p }: IP) => (
  <svg {...b(size, p)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <line x1="4" y1="14" x2="4" y2="20" />
    <line x1="9" y1="9" x2="9" y2="20" />
    <line x1="14" y1="4" x2="14" y2="20" />
    <line x1="19" y1="11" x2="19" y2="20" />
  </svg>
);
