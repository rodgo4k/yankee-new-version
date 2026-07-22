import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroComposer from "@/components/home/HeroComposer";
import RadialCardsSlider from "@/components/home/RadialCardsSlider";

const ease = [0.25, 0.4, 0.25, 1] as const;

/**
 * Runs the hero composer sequence once, then slides it aside
 * and reveals the GSAP radial cards slider in the same footprint.
 * When the arc appears, the stage + CTA ease upward together.
 */
const HeroStage = () => {
  const [showRadial, setShowRadial] = useState(false);
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
      animate={{ y: showRadial ? lift : 0 }}
      transition={{ duration: 0.9, ease, delay: showRadial ? 0.05 : 0 }}
    >
      <div className="relative h-[380px] sm:h-[410px] md:h-[440px]">
        <AnimatePresence mode="sync">
          {!showRadial && (
            <motion.div
              key="composer"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
              exit={{
                x: "115%",
                rotate: 8,
                scale: 0.88,
                opacity: 0.35,
                transition: { duration: 0.85, ease },
              }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="absolute inset-0 z-10 flex items-start justify-center"
            >
              <div className="w-full max-w-[560px]">
                <HeroComposer
                  loop={false}
                  hideCta
                  onSequenceComplete={() => setShowRadial(true)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showRadial && (
            <motion.div
              key="radial"
              initial={{ opacity: 0, x: -48, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.1 }}
              className="absolute inset-0 z-20"
            >
              <RadialCardsSlider />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-2 md:mt-3 flex flex-col items-center gap-3"
        animate={{ y: showRadial ? -8 : 0 }}
        transition={{ duration: 0.9, ease, delay: showRadial ? 0.12 : 0 }}
      >
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 rounded-full text-[15px] md:text-[16px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta
            shadow-[0_14px_40px_-10px_rgba(37,99,235,0.65),inset_0_1px_0_rgba(255,255,255,0.35)]
            hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
        >
          get yankee, free forever
        </Link>
        <p className="text-[12px] md:text-[13px] text-foreground/55 lowercase">
          free forever. no card needed.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroStage;
