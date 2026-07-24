import { motion } from "framer-motion";
import RadialCardsSlider from "@/components/home/RadialCardsSlider";
import BeamIosCta from "@/components/home/BeamIosCta";

const ease = [0.25, 0.4, 0.25, 1] as const;

const HeroStage = () => (
  <motion.div
    className="relative w-full max-w-[1200px] mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.85, ease, delay: 0.2 }}
  >
    {}
    <div className="relative h-[320px] sm:h-[380px] md:h-[440px] overflow-visible">
      <div className="absolute inset-0 z-10">
        <RadialCardsSlider />
      </div>
    </div>

    <div className="relative z-20 mt-6 sm:mt-7 md:mt-4 flex flex-col items-center gap-3">
      <BeamIosCta />
      <p className="text-[12px] md:text-[13px] text-foreground/55 lowercase">
        chronological · free · no switching
      </p>
    </div>
  </motion.div>
);

export default HeroStage;
