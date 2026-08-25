import { useId } from "react";
import type { SwatchPalette, WeavePattern } from "../../types";

interface SwatchVisualProps {
  pattern: WeavePattern;
  palette: SwatchPalette;
  className?: string;
}

function WeaveSurface({ pattern, warp, weft }: { pattern: WeavePattern; warp: string; weft: string }) {
  switch (pattern) {
    case "plain":
      return (
        <>
          <path
            d="M4 0V18M10 0V18M16 0V18"
            stroke={warp}
            strokeWidth="3"
            opacity="0.6"
          />
          <path
            d="M0 3H18M0 9H18M0 15H18"
            stroke={weft}
            strokeWidth="3"
            strokeDasharray="6 4"
            opacity="0.65"
          />
        </>
      );
    case "twill":
      return (
        <>
          <path d="M3 0V16M11 0V16" stroke={warp} strokeWidth="4.5" opacity="0.62" />
          <path d="M7.5 0V16M15.5 0V16" stroke={weft} strokeWidth="1.6" opacity="0.5" />
        </>
      );
    case "knit":
      return (
        <>
          <path
            d="M0 20C5 7 15 7 20 20"
            fill="none"
            stroke={warp}
            strokeWidth="3.4"
            strokeLinecap="round"
            opacity="0.66"
          />
          <path
            d="M-10 30C-5 17 5 17 10 30M10 30C15 17 25 17 30 30"
            fill="none"
            stroke={weft}
            strokeWidth="3.4"
            strokeLinecap="round"
            opacity="0.4"
          />
        </>
      );
    case "herringbone":
      return (
        <>
          <path
            d="M0 13L8 5L16 13L24 5L32 13"
            fill="none"
            stroke={warp}
            strokeWidth="3.2"
            strokeLinejoin="round"
            opacity="0.62"
          />
          <path
            d="M0 29L8 21L16 29L24 21L32 29"
            fill="none"
            stroke={weft}
            strokeWidth="3.2"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </>
      );
    case "basket":
      return (
        <>
          <rect width="8" height="8" fill={warp} opacity="0.62" />
          <rect x="8" y="8" width="8" height="8" fill={warp} opacity="0.62" />
          <rect x="8" width="8" height="8" fill={weft} opacity="0.5" />
          <rect y="8" width="8" height="8" fill={weft} opacity="0.5" />
        </>
      );
  }
}

const TILE_SIZE: Record<WeavePattern, number> = {
  plain: 18,
  twill: 16,
  knit: 20,
  herringbone: 32,
  basket: 16,
};

export function SwatchVisual({ pattern, palette, className }: SwatchVisualProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const weaveId = `weave-${uid}`;
  const sheenId = `sheen-${uid}`;
  const shadeId = `shade-${uid}`;
  const grainId = `grain-${uid}`;
  const tileSize = TILE_SIZE[pattern];

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={weaveId}
          width={tileSize}
          height={tileSize}
          patternUnits="userSpaceOnUse"
          {...(pattern === "twill" ? { patternTransform: "rotate(45)" } : {})}
        >
          <WeaveSurface pattern={pattern} warp={palette.warp} weft={palette.weft} />
        </pattern>
        <linearGradient id={sheenId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.26" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={shadeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.38" />
        </linearGradient>
        <filter id={grainId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.07 0"
          />
        </filter>
      </defs>

      <rect width="400" height="500" fill={palette.base} />
      <rect width="400" height="500" fill={`url(#${weaveId})`} />
      <rect width="400" height="500" fill={`url(#${sheenId})`} />
      <rect width="400" height="500" fill={`url(#${shadeId})`} />
      <rect width="400" height="500" filter={`url(#${grainId})`} />
    </svg>
  );
}
