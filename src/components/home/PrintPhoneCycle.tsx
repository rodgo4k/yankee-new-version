import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;

export type PrintSlide = {
  src: string;
  label: string;
  holdMs?: number;
};

type PrintPhoneCycleProps = {
  slides: PrintSlide[];
  rotate?: number;
  className?: string;
};

const PrintPhoneCycle = ({ slides, rotate = -1.5, className = "" }: PrintPhoneCycleProps) => {
  const [i, setI] = useState(0);
  const slide = slides[i];

  useEffect(() => {
    if (slides.length < 2) return;
    const hold = slide.holdMs ?? 4200;
    const id = window.setTimeout(() => setI((n) => (n + 1) % slides.length), hold);
    return () => clearTimeout(id);
  }, [i, slide.holdMs, slides.length]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={rotate} bleed>
        {slides.length > 1 && (
          <div className="absolute top-11 right-4 z-30 flex gap-1">
            {slides.map((s, idx) => (
              <motion.span
                key={s.src + s.label}
                animate={{
                  width: idx === i ? 14 : 4,
                  backgroundColor: idx === i ? "#2f6bff" : "rgba(255,255,255,0.18)",
                }}
                className="h-1 rounded-full"
              />
            ))}
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.src + slide.label}
            src={slide.src}
            alt=""
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.4, ease }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {slide.label}
      </p>
    </div>
  );
};

export default PrintPhoneCycle;
