import { useState } from "react";
import { SwatchVisual } from "./SwatchVisual";
import type { SwatchPalette, WeavePattern } from "../../types";
import { cn } from "../../lib/utils";

interface EditableImageProps {
  /** Real photo path, e.g. "/images/hero-fabric.jpg". Omit to render the pattern. */
  src?: string;
  alt: string;
  pattern: WeavePattern;
  palette: SwatchPalette;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/**
 * Real-photo slot with procedural fallback.
 * Client workflow: drop a JPG into /public/images/ with the expected
 * filename (see public/images/README.md) — no code change needed.
 */
export function EditableImage({
  src,
  alt,
  pattern,
  palette,
  className,
  imgClassName,
  eager = false,
}: EditableImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={cn("relative overflow-hidden bg-night-raised", className)}>
      {/* Fallback weave always rendered underneath to avoid layout shift */}
      <SwatchVisual
        pattern={pattern}
        palette={palette}
        className="absolute inset-0 h-full w-full"
      />
      {showImage && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
