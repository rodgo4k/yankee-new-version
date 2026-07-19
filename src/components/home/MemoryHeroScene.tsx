import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Lock, Share2 } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const saves = [
  { kind: "private" as const, chip: "link · june", title: "the article maria sent", note: "slow web design · read later" },
  { kind: "shared" as const, chip: "playlist · shared", title: "kitchen dinner mix", note: "42 tracks · roommates" },
  { kind: "private" as const, chip: "draft · today", title: "reply to alex · berlin", note: "hotel still open" },
  { kind: "shared" as const, chip: "place · lisbon", title: "dessert spot in alfama", note: "pinned to trip" },
];

const recalls = [
  { q: "that cafe with the tiny blue door?", a: "manteigaria. saved july 14 · near the tram." },
  { q: "what did i draft for alex?", a: "berlin trip reply. hotel option still open." },
  { q: "kitchen playlist for saturday?", a: "shared with roommates · 42 tracks, auto updated." },
];

type Phase = "type" | "save" | "recall" | "answer" | "hold";

const MemoryHeroScene = () => {
  const [phase, setPhase] = useState<Phase>("type");
  const [saveIndex, setSaveIndex] = useState(0);
  const [recallIndex, setRecallIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [cycle, setCycle] = useState(0);

  const save = saves[saveIndex];
  const recall = recalls[recallIndex];
  const prompt = `remember: ${save.title}`;

  useEffect(() => {
    setPhase("type");
    setTyped("");

    const timers: number[] = [];
    let i = 0;

    const typeNext = () => {
      if (i <= prompt.length) {
        setTyped(prompt.slice(0, i));
        i += 1;
        timers.push(window.setTimeout(typeNext, 28));
      } else {
        timers.push(window.setTimeout(() => setPhase("save"), 400));
        timers.push(window.setTimeout(() => setPhase("recall"), 2200));
        timers.push(window.setTimeout(() => setPhase("answer"), 3600));
        timers.push(window.setTimeout(() => setPhase("hold"), 5600));
        timers.push(
          window.setTimeout(() => {
            setSaveIndex((n) => (n + 1) % saves.length);
            setRecallIndex((n) => (n + 1) % recalls.length);
            setCycle((c) => c + 1);
          }, 7200),
        );
      }
    };

    timers.push(window.setTimeout(typeNext, 350));
    return () => timers.forEach(clearTimeout);
  }, [cycle, prompt]);

  const showSave = ["save", "recall", "answer", "hold"].includes(phase);
  const showQ = ["recall", "answer", "hold"].includes(phase);
  const showA = ["answer", "hold"].includes(phase);

  return (
    <div className="relative w-full max-w-[880px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.6, ease }}
          className="md:col-span-5 relative rounded-[1.5rem] border-2 border-foreground bg-card overflow-hidden shadow-[5px_5px_0_0_hsl(var(--foreground))] min-h-[220px] p-5 flex flex-col"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] text-foreground/50 lowercase">your library</p>
            <span
              className={`inline-flex items-center gap-1 rounded-full border-2 border-foreground px-2 py-0.5 text-[10px] lowercase ${
                save.kind === "shared" ? "bg-[#5B9CFF] text-white" : "bg-card text-foreground"
              }`}
            >
              {save.kind === "shared" ? <Share2 size={10} /> : <Lock size={10} />}
              {save.kind}
            </span>
          </div>

          <div className="relative mt-6 flex-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={save.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease }}
                className="absolute inset-0"
              >
                <p className="text-[12px] text-foreground/45 lowercase">{save.chip}</p>
                <h3 className="mt-2 font-serif-display italic text-[1.45rem] md:text-[1.65rem] leading-[1.05] text-foreground lowercase">
                  {save.title}
                </h3>
                <p className="mt-3 text-[13px] text-muted-foreground lowercase leading-relaxed">{save.note}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showSave && (
              <motion.div
                key={`saved-${save.title}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-auto pt-4"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3DDC97] px-2.5 py-1 text-[11px] font-medium text-foreground lowercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  saved · encrypted
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="md:col-span-7 rounded-[1.5rem] border-2 border-foreground bg-card shadow-[5px_5px_0_0_hsl(var(--foreground))] min-h-[220px] p-5 md:p-6 flex flex-col"
        >
          <p className="text-[11px] text-foreground/50 lowercase mb-4">ask yankee</p>

          <div className="flex-1 flex flex-col gap-2.5 justify-end min-h-[120px]">
            <AnimatePresence>
              {showQ && (
                <motion.div
                  key={`q-${recall.q}-${cycle}`}
                  initial={{ opacity: 0, y: 14, x: 10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.4, ease }}
                  className="self-end max-w-[92%]"
                >
                  <div className="rounded-2xl rounded-br-md bg-[#5B9CFF] px-3.5 py-2.5 text-[13px] leading-snug text-white lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                    {recall.q}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showA && (
                <motion.div
                  key={`a-${recall.a}-${cycle}`}
                  initial={{ opacity: 0, y: 14, x: -10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease }}
                  className="self-start max-w-[92%]"
                >
                  <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-[#E8E6E1] px-3.5 py-2.5 text-[13px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                    {recall.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease }}
        className="mt-3 md:mt-4"
      >
        <div className="flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-2 py-2 shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          <span className="w-9 h-9 shrink-0 rounded-full border-2 border-foreground/30 bg-background flex items-center justify-center text-foreground/40 text-[18px]">
            +
          </span>
          <p className="flex-1 min-w-0 px-2 text-[13px] md:text-[14px] text-foreground lowercase truncate">
            {typed}
            <span className="inline-block w-[2px] h-[1em] align-[-0.1em] ml-0.5 bg-foreground/70 animate-pulse" />
          </p>
          <span className="w-9 h-9 shrink-0 rounded-full bg-[#5B9CFF] text-white flex items-center justify-center shadow-[2px_2px_0_0_hsl(var(--foreground))]">
            <ArrowUp size={15} />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default MemoryHeroScene;
