import { Apple } from "lucide-react";
import { BorderBeam } from "border-beam";
import { APP_STORE_URL } from "@/lib/appStore";

type BeamIosCtaProps = {
  href?: string;
  className?: string;
  label?: string;
};

const BeamIosCta = ({
  href = APP_STORE_URL,
  className = "",
  label = "download for iOS",
}: BeamIosCtaProps) => (
  <BorderBeam
    size="sm"
    colorVariant="ocean"
    theme="light"
    strength={0.85}
    brightness={1.8}
    saturation={1.4}
    duration={2.4}
    borderRadius={999}
    className={className}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center gap-2.5 h-[3.15rem] md:h-[3.35rem] px-8 md:px-9 rounded-full text-[14px] md:text-[15px] font-semibold tracking-tight text-white folk-cta shadow-[0_16px_40px_-12px_rgba(37,99,235,0.7),inset_0_1px_0_rgba(255,255,255,0.45)] hover:brightness-110 active:scale-[0.985] transition-[filter,transform]"
      style={{ borderRadius: 999 }}
    >
      <span
        className="pointer-events-none absolute inset-x-4 top-[4px] h-[11px] rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-90"
        aria-hidden
      />
      <Apple size={17} className="relative shrink-0 -mt-px drop-shadow-sm" strokeWidth={2.4} />
      <span className="relative drop-shadow-sm">{label}</span>
    </a>
  </BorderBeam>
);

export default BeamIosCta;
