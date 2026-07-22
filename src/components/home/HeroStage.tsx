import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RadialCardsSlider from "@/components/home/RadialCardsSlider";
import BeamIosCta from "@/components/home/BeamIosCta";

const ease = [0.25, 0.4, 0.25, 1] as const;

/**
 * Hero stage: radial cards arc + fixed CTA.
 *
 * HeroComposer (comments/posts card) lives at
 * `src/components/home/HeroComposer.tsx` for a future sequence
 * (composer → slide out → arc). Not mounted here on purpose.
 */
const HeroStage = () => {
  const [lift, setLift] = useState(-48);

  useEffect(() => {
    const sync = () => setLift(window.matchMedia("(max-width: 767px)").matches ? -80 : -48);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-[1200px] mx-auto"
      initial={{ opacity: 0, y: lift + 16 }}
      animate={{ opacity: 1, y: lift }}
      transition={{ duration: 0.85, ease, delay: 0.2 }}
    >
      <div className="relative h-[380px] sm:h-[410px] md:h-[440px]">
        <div className="absolute inset-0 z-20">
          <RadialCardsSlider />
        </div>
      </div>

      <div className="mt-2 md:mt-3 -translate-y-2 flex flex-col items-center gap-3">
        <BeamIosCta />
        <p className="text-[12px] md:text-[13px] text-foreground/55 lowercase">
          chronological · private · no algorithm
        </p>
      </div>
    </motion.div>
  );
};

export default HeroStage;
