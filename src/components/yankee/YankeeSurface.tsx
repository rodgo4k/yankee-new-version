import { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { yankeeSurface } from "@/lib/yankeeSurface";

type SurfaceSize = "base" | "sm" | "lg" | "media" | "icon" | "control";

type YankeeSurfaceProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: SurfaceSize;
  interactive?: boolean;
  children?: ReactNode;
};

/**
 * Soft paper surface for Yankee UI.
 * Prefer this over Folk `border-2` + hard offset shadows.
 */
const YankeeSurface = ({
  as: Comp = "div",
  size = "base",
  interactive = false,
  className,
  children,
  ...rest
}: YankeeSurfaceProps) => (
  <Comp
    className={cn(
      yankeeSurface[size],
      interactive && size !== "control" && "yankee-surface--interactive",
      className,
    )}
    {...rest}
  >
    {children}
  </Comp>
);

export default YankeeSurface;
