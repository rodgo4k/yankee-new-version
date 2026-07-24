import { cn } from "@/lib/utils";

export const yankeeBlockTones = [
  "folk-cta text-white",
  "bg-foreground text-background",
  "bg-[hsl(200_48%_36%)] text-white",
  "bg-[hsl(230_35%_24%)] text-white",
] as const;

export function blockTone(index: number) {
  return yankeeBlockTones[index % yankeeBlockTones.length];
}

export function blockCard(index: number, className?: string) {
  return cn(
    "yankee-block h-full rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-1.5",
    blockTone(index),
    className,
  );
}
