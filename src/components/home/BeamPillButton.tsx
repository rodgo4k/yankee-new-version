import type { ButtonHTMLAttributes, ReactNode } from "react";
import { BorderBeam } from "border-beam";

type BeamPillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** Pill with label, or round icon control */
  shape?: "pill" | "round";
  /** solid = hero CTA fill; glass = translucent overlay controls */
  tone?: "solid" | "glass";
  className?: string;
};

/**
 * Shared glossy folk-cta + border-beam control (same family as BeamIosCta).
 */
const BeamPillButton = ({
  children,
  shape = "pill",
  tone = "solid",
  className = "",
  type = "button",
  ...props
}: BeamPillButtonProps) => {
  const isRound = shape === "round";
  const isGlass = tone === "glass";

  return (
    <BorderBeam
      size="sm"
      colorVariant="ocean"
      theme="light"
      strength={isGlass ? 0.55 : 0.85}
      brightness={isGlass ? 1.4 : 1.8}
      saturation={isGlass ? 1.2 : 1.4}
      duration={2.4}
      borderRadius={999}
      className={className}
    >
      <button
        type={type}
        {...props}
        className={`group relative inline-flex items-center justify-center rounded-full
          text-white font-semibold tracking-tight
          hover:brightness-110 active:scale-[0.985] transition-[filter,transform]
          ${
            isGlass
              ? "bg-[hsl(var(--folk-cta-mid)/0.42)] backdrop-blur-md border border-white/35 shadow-[0_10px_28px_-10px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.4)]"
              : "folk-cta shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7),inset_0_1px_0_rgba(255,255,255,0.45)]"
          }
          ${isRound ? "w-14 h-14 md:w-16 md:h-16" : "gap-2.5 h-11 md:h-12 pl-4 pr-5 md:pl-5 md:pr-6 text-[14px] md:text-[15px]"}`}
        style={{ borderRadius: 999 }}
      >
        <span
          className={`pointer-events-none absolute rounded-full bg-gradient-to-b from-white/50 to-transparent ${
            isGlass ? "opacity-60" : "opacity-90"
          } ${isRound ? "inset-x-3 top-[4px] h-2.5" : "inset-x-3 top-[3px] h-2.5"}`}
          aria-hidden
        />
        <span className="relative inline-flex items-center justify-center gap-2.5 drop-shadow-sm">{children}</span>
      </button>
    </BorderBeam>
  );
};

export default BeamPillButton;
