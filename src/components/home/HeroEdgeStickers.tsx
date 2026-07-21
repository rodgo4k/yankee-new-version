import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export type HeroSatellite = {
  id: string;
  filename: string;
  media: string;
  kind: "image" | "video-look";
  objectTop?: boolean;
  rotate: number;
  lgOnly?: boolean;
  /** collapsed sticker size — default md */
  size?: "sm" | "md" | "lg";
  /** expanded / always-open window width */
  windowSize?: "sm" | "md" | "lg" | "xl";
  /** start as an open mac-style window (heyclicky collage) */
  startOpen?: boolean;
  /** unique idle drift — seconds */
  floatDuration?: number;
  floatY?: number;
  className: string;
  origin: string;
};

const stickerSizes = {
  sm: {
    box: "w-11 h-11 md:w-12 md:h-12 rounded-[0.8rem]",
    img: "rounded-[0.4rem]",
    label: "max-w-[58px] text-[8px]",
  },
  md: {
    box: "w-14 h-14 md:w-16 md:h-16 rounded-[0.95rem]",
    img: "rounded-[0.55rem]",
    label: "max-w-[72px] text-[9px]",
  },
  lg: {
    box: "w-[4.5rem] h-[4.5rem] md:w-[5.25rem] md:h-[5.25rem] rounded-[1.05rem]",
    img: "rounded-[0.65rem]",
    label: "max-w-[84px] text-[9px]",
  },
} as const;

const windowWidths = {
  sm: "w-[140px] sm:w-[155px]",
  md: "w-[170px] sm:w-[190px] md:w-[205px]",
  lg: "w-[190px] sm:w-[215px] md:w-[235px]",
  xl: "w-[210px] sm:w-[240px] md:w-[270px]",
} as const;

const PreviewWindow = ({
  sat,
  onClose,
  showClose,
  hovered,
}: {
  sat: HeroSatellite;
  onClose?: () => void;
  showClose?: boolean;
  hovered?: boolean;
}) => (
  <div className="rounded-[1.1rem] border-2 border-foreground bg-card overflow-hidden shadow-[5px_5px_0_0_hsl(var(--foreground))]">
    <div className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 border-b-2 border-foreground bg-folk-panel">
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="w-2 h-2 rounded-full bg-[#FF6B6B] border border-foreground/40"
        />
        <span className="w-2 h-2 rounded-full bg-[#FFD166] border border-foreground/40" />
        <span className="w-2 h-2 rounded-full bg-folk-success border border-foreground/40" />
      </div>
      <p className="text-[9px] lowercase text-foreground/55 truncate font-medium">{sat.filename}</p>
      {showClose ? (
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="text-foreground/40 hover:text-foreground"
        >
          <X size={11} />
        </button>
      ) : (
        <span className="w-[11px]" />
      )}
    </div>
    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
      <motion.img
        src={sat.media}
        alt=""
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
        className={`w-full h-full object-cover ${sat.objectTop ? "object-top" : "object-center"}`}
      />
      {sat.kind === "video-look" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.span
            animate={
              hovered
                ? { scale: 1.15, opacity: 1 }
                : { scale: 1, opacity: 0.92 }
            }
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="w-8 h-8 rounded-full border-2 border-foreground bg-card/90 flex items-center justify-center shadow-[2px_2px_0_0_hsl(var(--foreground))]"
          >
            <span className="ml-0.5 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-foreground" />
          </motion.span>
        </div>
      )}
    </div>
  </div>
);

export const SatelliteSticker = ({
  sat,
  open,
  onOpen,
  onClose,
}: {
  sat: HeroSatellite;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const sz = stickerSizes[sat.size ?? "md"];
  const winW = windowWidths[sat.windowSize ?? (sat.startOpen ? "lg" : "md")];
  const floatY = sat.floatY ?? (sat.startOpen ? 10 : 7);
  const floatDuration = sat.floatDuration ?? 4.2;
  const isExpanded = sat.startOpen || open;

  return (
    <motion.div
      className="relative"
      style={{ zIndex: hovered ? 70 : isExpanded ? 50 : 30 }}
      animate={{ y: [0, -floatY, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDuration * 0.15,
      }}
      onMouseEnter={() => {
        setHovered(true);
        if (!sat.startOpen) onOpen();
      }}
      onMouseLeave={() => {
        setHovered(false);
        if (!sat.startOpen) onClose();
      }}
    >
      {sat.startOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: sat.rotate }}
          animate={{
            opacity: 1,
            scale: hovered ? 1.08 : 1,
            rotate: hovered ? sat.rotate * 0.2 : sat.rotate,
            y: hovered ? -12 : 0,
          }}
          transition={
            hovered
              ? { type: "spring", stiffness: 380, damping: 22 }
              : { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }
          }
          className={`${winW} cursor-pointer`}
        >
          <motion.div
            animate={{
              filter: hovered
                ? "drop-shadow(0 12px 24px rgba(0,0,0,0.35))"
                : "drop-shadow(0 0 0 rgba(0,0,0,0))",
            }}
            transition={{ duration: 0.3 }}
            className="rounded-[1.1rem]"
          >
            <PreviewWindow sat={sat} hovered={hovered} />
          </motion.div>
          <motion.p
            animate={{ opacity: hovered ? 0.9 : 0.45, y: hovered ? 2 : 0 }}
            className="mt-1.5 text-center text-[10px] text-foreground lowercase tracking-tight"
          >
            {sat.filename}
          </motion.p>
        </motion.div>
      ) : (
        <>
          <motion.div
            animate={{
              opacity: open ? 0 : 1,
              scale: open ? 0.85 : hovered ? 1.06 : 1,
              rotate: open ? 0 : sat.rotate,
            }}
            transition={{ duration: 0.2 }}
            className={`flex flex-col items-center gap-1 ${open ? "pointer-events-none" : ""}`}
          >
            <span
              className={`${sz.box} border-2 border-foreground bg-card p-1 shadow-[3px_3px_0_0_hsl(var(--foreground))] overflow-hidden`}
            >
              <img
                src={sat.media}
                alt=""
                className={`w-full h-full object-cover ${sz.img} ${sat.objectTop ? "object-top" : "object-center"}`}
              />
            </span>
            <span
              className={`${sz.label} truncate rounded-full border border-foreground/30 bg-card/90 px-1.5 py-0.5 lowercase text-foreground/55`}
            >
              {sat.filename}
            </span>
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                key={`${sat.id}-open`}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.45 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                style={{ transformOrigin: sat.origin }}
                className={`absolute ${winW} ${
                  sat.origin.includes("right") ? "top-0 right-0" : "top-0 left-0"
                } ${sat.origin.includes("bottom") ? "!top-auto bottom-0" : ""}`}
              >
                <PreviewWindow sat={sat} onClose={onClose} showClose hovered={hovered} />
                <p className="mt-1 text-center text-[10px] text-foreground/40 lowercase">{sat.filename}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
};

type FloatNote = {
  id: string;
  text: string;
  className: string;
  rotate?: number;
  delay?: number;
};

type HeroEdgeStickersProps = {
  satellites: HeroSatellite[];
  notes?: FloatNote[];
};

/** Floating collage around a hero — heyclicky-inspired. Hidden below md. */
const HeroEdgeStickers = ({ satellites, notes = [] }: HeroEdgeStickersProps) => {
  const [openSat, setOpenSat] = useState<string | null>(null);

  return (
    <div className="hidden md:block absolute inset-0 z-30 pointer-events-none">
      {notes.map((note) => (
        <motion.p
          key={note.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: note.delay ?? 0.4, duration: 0.6 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: note.delay ?? 0.4 },
          }}
          className={`absolute font-serif-display italic text-[12px] md:text-[13px] text-foreground lowercase pointer-events-none select-none ${note.className}`}
          style={{ rotate: note.rotate ?? 0 }}
        >
          {note.text}
        </motion.p>
      ))}

      {satellites.map((sat) => (
        <div
          key={sat.id}
          className={`pointer-events-auto absolute ${sat.lgOnly ? "hidden lg:block" : ""} ${sat.className}`}
        >
          <SatelliteSticker
            sat={sat}
            open={openSat === sat.id}
            onOpen={() => setOpenSat(sat.id)}
            onClose={() => setOpenSat((cur) => (cur === sat.id ? null : cur))}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroEdgeStickers;
