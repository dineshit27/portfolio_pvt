import type { IconBaseProps } from "react-icons";

// Simple CapCut-like glyph (rounded rectangle with crossing strokes)
export function CapCutIcon({ size = 50, color, className }: IconBaseProps) {
  const s = typeof size === "number" ? size : parseInt(String(size), 10) || 50;
  const stroke = color || "currentColor";
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CapCut"
    >
      {/* Outer rounded rectangle frame */}
      <rect x="6" y="10" width="52" height="44" rx="10" ry="10" stroke={stroke} strokeWidth={5} fill="none" />
      {/* Crossing ribbon strokes */}
      <path d="M18 22 L46 42" stroke={stroke} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 22 L18 42" stroke={stroke} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
      {/* Short top and bottom bars to emulate brand style */}
      <path d="M18 18 H46" stroke={stroke} strokeWidth={4} strokeLinecap="round" />
      <path d="M18 46 H46" stroke={stroke} strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}

export default CapCutIcon;