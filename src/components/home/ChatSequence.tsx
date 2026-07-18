import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rss } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const exitEase = [0.4, 0, 0.2, 1] as const;

const phrases = [
  "only people you follow",
  "no suggested posts",
  "chronological, always",
  "your friends first",
];

const TypingDots = () => (
  <div className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-card border border-border shadow-[0_8px_24px_-10px_rgba(0,0,0,0.12)]">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-foreground/35"
        animate={{ y: [0, -3, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const ChatSequence = () => {
  const [step, setStep] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    setPhraseIndex(0);

    const timers = [
      window.setTimeout(() => setStep(1), 250),
      window.setTimeout(() => setStep(2), 1400),
      window.setTimeout(() => setStep(3), 2400),
      window.setTimeout(() => setStep(4), 4400),
      window.setTimeout(() => setPhraseIndex(1), 6400),
      window.setTimeout(() => setPhraseIndex(2), 8400),
      window.setTimeout(() => setPhraseIndex(3), 10400),
      window.setTimeout(() => setStep(3), 12400),
      window.setTimeout(() => setStep(1), 13100),
      window.setTimeout(() => setStep(0), 13800),
      window.setTimeout(() => setCycle((c) => c + 1), 14400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3 min-h-[220px]">
      <AnimatePresence mode="popLayout">
        {step >= 1 && (
          <motion.div
            key={`me-${cycle}`}
            initial={{ opacity: 0, y: 18, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, x: 80, scale: 0.96 }}
            transition={{ duration: 0.5, ease }}
            className="flex justify-end"
          >
            <div className="max-w-[88%] px-4 py-3 text-[14px] leading-snug lowercase rounded-2xl rounded-br-md bg-accent text-accent-foreground shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.55)]">
              show me every post from friends. no suggested junk.
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key={`typing-${cycle}`}
            initial={{ opacity: 0, y: 12, scale: 0.94, x: -16 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, x: -60, scale: 0.96 }}
            transition={{ duration: 0.35, ease }}
            className="flex justify-start"
          >
            <TypingDots />
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            key={`them-${cycle}`}
            initial={{ opacity: 0, y: 16, scale: 0.94, x: -24 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, x: -80, scale: 0.96 }}
            transition={{ duration: 0.5, ease }}
            className="flex justify-start"
          >
            <div className="max-w-[88%] px-4 py-3 text-[14px] leading-snug lowercase rounded-2xl rounded-bl-md bg-card text-foreground border border-border shadow-[0_8px_24px_-10px_rgba(0,0,0,0.12)]">
              on it. chronological feed, always.
            </div>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div
            key={`card-${cycle}`}
            initial={{ opacity: 0, y: 22, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 36, x: 40, scale: 0.96 }}
            transition={{ duration: 0.45, ease: exitEase }}
            className="rounded-2xl bg-card border border-border shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)] p-4 flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
              <Rss size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-foreground lowercase">feed watch</p>
              <div className="mt-0.5 flex items-center gap-1.5 h-5 overflow-hidden">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0"
                  animate={{ scale: [1, 1.35, 1], opacity: [1, 0.55, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative h-5 flex-1 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={`${cycle}-${phraseIndex}`}
                      initial={{ y: 14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -14, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="absolute inset-0 text-[12px] text-muted-foreground lowercase truncate leading-5"
                    >
                      {phrases[phraseIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatSequence;
