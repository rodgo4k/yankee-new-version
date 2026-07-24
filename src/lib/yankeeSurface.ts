import { cn } from "@/lib/utils";

export const yankeeSurface = {
  base: "yankee-surface bg-card text-card-foreground",
  sm: "yankee-surface yankee-surface--sm bg-card text-card-foreground",
  lg: "yankee-surface yankee-surface--lg bg-card text-card-foreground",
  media: "yankee-surface yankee-surface--media bg-card overflow-hidden",
  interactive:
    "yankee-surface yankee-surface--interactive bg-card text-card-foreground",
  icon: "yankee-surface yankee-surface--icon inline-flex items-center justify-center",
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
