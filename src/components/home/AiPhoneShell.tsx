import { ReactNode } from "react";
import { motion } from "framer-motion";

const ease = [0.25, 0.4, 0.25, 1] as const;

type AiPhoneShellProps = {
  children: ReactNode;
  className?: string;
  rotate?: number;
};

/** Dark iPhone-style frame matching Yankee AI app screenshots */
const AiPhoneShell = ({ children, className = "", rotate = -1.5 }: AiPhoneShellProps) => (
  <motion.div
    initial={{ opacity: 0, y: 28, rotate: rotate - 1 }}
    whileInView={{ opacity: 1, y: 0, rotate }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.75, ease }}
    className={`relative mx-auto w-[280px] sm:w-[300px] shrink-0 ${className}`}
  >
    <div
      className="rounded-[2rem] bg-[#1a1a1c] p-[6px]"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 28px 80px -28px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="relative aspect-[9/19.2] rounded-[1.55rem] bg-black overflow-hidden">
        {/* status bar */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 pt-2.5 pointer-events-none">
          <span className="text-[11px] font-semibold text-white tracking-tight">9:41</span>
          <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[72px] h-[22px] rounded-full bg-black border border-white/10" />
          <div className="flex items-center gap-1">
            <span className="w-[15px] h-[9px] rounded-[2px] border border-white/70 relative">
              <span className="absolute inset-[1.5px] right-[2.5px] rounded-[1px] bg-white/80" />
            </span>
          </div>
        </div>

        <div className="absolute inset-0 pt-11 pb-5 flex flex-col">{children}</div>

        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[34%] h-[4px] rounded-full bg-white/35 z-20" />
      </div>
    </div>
  </motion.div>
);

export default AiPhoneShell;
