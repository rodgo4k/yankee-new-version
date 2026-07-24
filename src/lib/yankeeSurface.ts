import { cn } from "@/lib/utils";

/**
 * Yankee surface language — soft paper lift (not Folk hard offset shadow).
 * Reuse these class helpers site-wide as pages migrate off Folk chrome.
 */
export const yankeeSurface = {
  /** Default card / panel */
  base: "yankee-surface bg-card text-card-foreground",
  /** Compact chip, avatar ring, small control */
  sm: "yankee-surface yankee-surface--sm bg-card text-card-foreground",
  /** Large media / hero panels */
  lg: "yankee-surface yankee-surface--lg bg-card text-card-foreground",
  /** Phone / screenshot frames */
  media: "yankee-surface yankee-surface--media bg-card overflow-hidden",
  /** Soft hover lift */
  interactive:
    "yankee-surface yankee-surface--interactive bg-card text-card-foreground",
  /** Icon well inside a card */
  icon: "yankee-surface yankee-surface--icon inline-flex items-center justify-center",
  /** Soft secondary button / outline control */
  control:
    "yankee-surface yankee-surface--control inline-flex items-center justify-center transition-[transform,box-shadow,border-color,background-color]",
} as const;

export function surface(
  ...parts: Array<keyof typeof yankeeSurface | string | false | null | undefined>
) {
  return cn(
    ...parts.map((p) =>
      p && p in yankeeSurface ? yankeeSurface[p as keyof typeof yankeeSurface] : p,
    ),
  );
}
