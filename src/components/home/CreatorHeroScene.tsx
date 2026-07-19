import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileView from "@/assets/yankee/profile-view.png";

const ease = [0.25, 0.4, 0.25, 1] as const;

const stats = [
  { label: "reached", end: 98, suffix: "%" },
  { label: "opened", end: 61, suffix: "%" },
  { label: "replies", end: 24, suffix: "" },
];

const CreatorHeroScene = () => {
  const [values, setValues] = useState(stats.map(() => 0));
  const [cycle, setCycle] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setValues(stats.map(() => 0));
    setDone(false);

    let raf = 0;
    let startTimer = 0;
    let loopTimer = 0;
    let start = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1600);
      const eased = 1 - Math.pow(1 - t, 3);
      setValues(stats.map((s) => Math.round(s.end * eased)));
      if (t < 1) {
        raf = window.requestAnimationFrame(tick);
      } else {
        setDone(true);
        loopTimer = window.setTimeout(() => setCycle((c) => c + 1), 3200);
      }
    };

    startTimer = window.setTimeout(() => {
      start = performance.now();
      raf = window.requestAnimationFrame(tick);
    }, 500);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(loopTimer);
      window.cancelAnimationFrame(raf);
    };
  }, [cycle]);

  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.75, ease }}
        className="relative z-10 rounded-[1.75rem] border-2 border-foreground bg-card p-3 shadow-[6px_6px_0_0_hsl(var(--foreground))] overflow-hidden aspect-[9/17]"
      >
        <img
          src={profileView}
          alt="Yankee creator profile"
          className="w-full h-full object-cover object-top rounded-[1.25rem]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute -left-3 md:-left-8 top-[16%] z-20 w-[58%]"
      >
        <div className="rounded-[1.15rem] border-2 border-foreground bg-card p-3 shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          <p className="text-[11px] text-foreground/50 lowercase mb-2">last drop</p>
          <div className="flex flex-col gap-2">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center justify-between gap-2">
                <span className="text-[12px] lowercase text-foreground/70">{s.label}</span>
                <span className="text-[13px] font-semibold tabular-nums lowercase">
                  {values[i]}
                  {s.suffix}
                </span>
              </div>
            ))}
          </div>
          <motion.p
            initial={false}
            animate={{ opacity: done ? 1 : 0 }}
            className="mt-2.5 text-[11px] text-[#2563EB] lowercase"
          >
            no ranking · every follower
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="absolute -right-2 bottom-[20%] z-20 max-w-[70%]"
      >
        <div className="rounded-2xl rounded-br-md bg-[#5B9CFF] px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-white lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
          your people actually saw it
        </div>
      </motion.div>
    </div>
  );
};

export default CreatorHeroScene;
