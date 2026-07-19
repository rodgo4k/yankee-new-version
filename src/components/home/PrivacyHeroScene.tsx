import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { KeyRound, Lock, Server } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const samples = [
  { plain: "still on for saturday?", cipher: "a8f3 · 9c21 · e4b0 · …" },
  { plain: "hotel option still open", cipher: "7d12 · b90e · 44af · …" },
  { plain: "save the alfama pin", cipher: "c1e9 · 02dd · 88f1 · …" },
];

type Phase = "plain" | "lock" | "cloud" | "hold";

const PrivacyHeroScene = () => {
  const [phase, setPhase] = useState<Phase>("plain");
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  const locked = phase !== "plain";
  const onCloud = phase === "cloud" || phase === "hold";
  const showHold = phase === "hold";

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase("lock"), 1400),
      window.setTimeout(() => setPhase("cloud"), 2800),
      window.setTimeout(() => setPhase("hold"), 4400),
      window.setTimeout(() => {
        setIndex((n) => (n + 1) % samples.length);
        setPhase("plain");
        setCycle((c) => c + 1);
      }, 6800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="relative w-full max-w-[860px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.65, ease }}
          className="rounded-[1.5rem] border-2 border-foreground bg-card p-5 md:p-6 shadow-[5px_5px_0_0_hsl(var(--foreground))] min-h-[240px] flex flex-col"
        >
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl border-2 border-foreground bg-primary text-primary-foreground flex items-center justify-center">
              <KeyRound size={15} />
            </span>
            <div>
              <p className="text-[13px] font-semibold lowercase leading-none">your device</p>
              <p className="mt-1 text-[11px] text-foreground/50 lowercase">keys live here</p>
            </div>
          </div>

          <div className="relative mt-6 flex-1 min-h-[5.5rem]">
            <p className="text-[11px] text-foreground/45 lowercase mb-2">readable only here</p>
            <div className="relative h-[3.4rem]">
              {samples.map((s, i) => (
                <motion.p
                  key={s.plain}
                  initial={false}
                  animate={{
                    opacity: i === index ? (locked ? 0 : 1) : 0,
                    y: i === index ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute inset-0 font-serif-display italic text-[1.35rem] md:text-[1.5rem] leading-[1.15] lowercase text-foreground"
                >
                  {s.plain}
                </motion.p>
              ))}
              <motion.p
                initial={false}
                animate={{ opacity: locked ? 1 : 0, y: locked ? 0 : 6 }}
                transition={{ duration: 0.35, ease }}
                className="absolute inset-0 font-serif-display italic text-[1.35rem] md:text-[1.5rem] leading-[1.15] lowercase text-foreground/35"
              >
                ••••••••••••••••
              </motion.p>
            </div>
          </div>

          <div className="mt-4 h-8 flex items-center">
            <motion.span
              initial={false}
              animate={{ opacity: locked ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-[#E8E6E1] px-2.5 py-1 text-[11px] lowercase"
            >
              <Lock size={11} />
              encrypted on device
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="rounded-[1.5rem] border-2 border-foreground bg-card p-5 md:p-6 shadow-[5px_5px_0_0_hsl(var(--foreground))] min-h-[240px] flex flex-col"
        >
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl border-2 border-foreground bg-background flex items-center justify-center">
              <Server size={15} />
            </span>
            <div>
              <p className="text-[13px] font-semibold lowercase leading-none">yankee servers</p>
              <p className="mt-1 text-[11px] text-foreground/50 lowercase">ciphertext only</p>
            </div>
          </div>

          <div className="relative mt-6 flex-1 min-h-[5.5rem]">
            <p className="text-[11px] text-foreground/45 lowercase mb-2">
              {onCloud ? "what we can store" : "waiting for sync"}
            </p>
            <div className="relative h-[3.4rem]">
              <motion.p
                initial={false}
                animate={{ opacity: onCloud ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 font-mono text-[1.05rem] md:text-[1.15rem] leading-relaxed tracking-wide text-foreground/25"
              >
                — — — —
              </motion.p>
              {samples.map((s, i) => (
                <motion.p
                  key={s.cipher}
                  initial={false}
                  animate={{
                    opacity: i === index && onCloud ? 1 : 0,
                    y: i === index && onCloud ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="absolute inset-0 font-mono text-[1.05rem] md:text-[1.15rem] leading-relaxed tracking-wide text-foreground"
                >
                  {s.cipher}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="mt-4 h-8 flex items-center">
            <motion.span
              initial={false}
              animate={{ opacity: onCloud ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#5B9CFF] px-2.5 py-1 text-[11px] font-medium text-white lowercase"
            >
              we cannot read this
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="mt-3 md:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 min-h-[52px]">
        <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-[#E8E6E1] px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] self-start max-w-[100%] sm:max-w-[95%]">
          subpoena? we hand over blobs. not your words.
        </div>
        <motion.div
          initial={false}
          animate={{ opacity: showHold ? 1 : 0, x: showHold ? 0 : 8 }}
          transition={{ duration: 0.35, ease }}
          className="rounded-2xl rounded-br-md bg-[#5B9CFF] px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-white lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] self-end max-w-[100%] sm:max-w-[95%] sm:justify-self-end"
        >
          keys stay with you. always.
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyHeroScene;
