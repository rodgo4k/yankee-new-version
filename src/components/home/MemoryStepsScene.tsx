import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Lock, MessageCircle, Search, Sparkles, Tag } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const steps = [
  {
    n: "01",
    t: "text yankee",
    d: "yankee sits inside the threads you already use, ready to hold anything you toss its way.",
  },
  {
    n: "02",
    t: "save the moment",
    d: 'say "remember this" and yankee files it, encrypted, tagged and searchable.',
  },
  {
    n: "03",
    t: "recall it later",
    d: "ask in plain words, months later. yankee returns the exact quote, link or draft.",
  },
] as const;

const TextVisual = () => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShown(1), 400),
      window.setTimeout(() => setShown(2), 1200),
      window.setTimeout(() => setShown(3), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const bubbles = [
    { from: "them" as const, text: "hey, yankee is in this thread now" },
    { from: "you" as const, text: "nice. can it hold the loft notes?" },
    { from: "them" as const, text: "toss anything my way. i'll keep it." },
  ];

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: BLUE }}
        >
          <MessageCircle size={14} className="text-white" />
        </span>
        <div>
          <p className="text-[13px] font-semibold lowercase">boston loft crew</p>
          <p className="text-[11px] text-foreground/45 lowercase">yankee is listening</p>
        </div>
      </div>

      <div className="yankee-chat">
        {bubbles.map((b, i) => {
          if (shown <= i) return null;
          return (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease }}
              className={`flex ${b.from === "you" ? "justify-end" : "justify-start"}`}
            >
              <span
                className={`yankee-chat__bubble ${
                  b.from === "you" ? "yankee-chat__bubble--you" : "yankee-chat__bubble--them"
                }`}
              >
                {b.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const SaveVisual = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 500),
      window.setTimeout(() => setStep(2), 1600),
      window.setTimeout(() => setStep(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[1.25rem] bg-background/80 border border-foreground/10 px-4 py-3"
      >
        <p className="text-[11px] text-foreground/45 lowercase mb-1">you said</p>
        <p className="text-[14px] font-medium lowercase">
          remember this · saturday loft plan + film stills
        </p>
      </motion.div>

      {step >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[1.25rem] bg-background border border-foreground/10 p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} style={{ color: BLUE }} />
            <p className="text-[13px] font-semibold lowercase">filing memory</p>
          </div>

          <div className="space-y-2">
            {[
              { icon: Lock, label: "encrypted", done: step >= 2 },
              { icon: Tag, label: "tagged · loft · saturday", done: step >= 2 },
              { icon: Search, label: "searchable later", done: step >= 3 },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="flex items-center gap-2.5 rounded-xl bg-foreground/[0.04] px-3 py-2.5"
                >
                  <Icon size={14} className="text-foreground/45 shrink-0" />
                  <span className="text-[12px] lowercase flex-1">{row.label}</span>
                  {row.done ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: GREEN }}
                    >
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </motion.span>
                  ) : (
                    <span className="w-5 h-5 rounded-full border border-foreground/15" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {step >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="yankee-chat__bubble yankee-chat__bubble--them text-[13px]"
        >
          saved. ask me anytime.
        </motion.div>
      )}
    </div>
  );
};

const RecallVisual = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 400),
      window.setTimeout(() => setStep(2), 1400),
      window.setTimeout(() => setStep(3), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      {step >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <span className="yankee-chat__bubble yankee-chat__bubble--you">
            what was the loft plan from saturday?
          </span>
        </motion.div>
      )}

      {step >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease }}
          className="rounded-[1.25rem] border border-foreground/10 bg-background p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: BLUE }}
            >
              <Sparkles size={12} className="text-white" />
            </span>
            <div>
              <p className="text-[12px] font-semibold lowercase">saturday loft plan</p>
              <p className="text-[10px] text-foreground/40 lowercase">saved 3 months ago</p>
            </div>
          </div>
          <p className="text-[13px] text-foreground/70 leading-relaxed lowercase">
            bring the film stills, leave the noise. doors at 7. draft for alex still open.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["loft", "saturday", "film"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-foreground/[0.06] px-2.5 py-1 text-[10px] lowercase text-foreground/55"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {step >= 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-[1.25rem] folk-cta text-white px-5 py-3.5 text-center"
        >
          <p className="text-[14px] font-semibold lowercase">exact quote · exact link</p>
          <p className="mt-1 text-[12px] text-white/75 lowercase">months later, still yours</p>
        </motion.div>
      )}
    </div>
  );
};

const visuals = [TextVisual, SaveVisual, RecallVisual];

const MemoryStepsScene = () => {
  const [active, setActive] = useState(0);
  const Visual = visuals[active];

  useEffect(() => {
    const id = window.setTimeout(() => setActive((n) => (n + 1) % steps.length), 5200);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="yankee-surface rounded-[1.75rem] md:rounded-[2rem] bg-card overflow-hidden">
      <div className="grid lg:grid-cols-12 min-h-[420px] md:min-h-[460px]">
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-foreground/8 p-6 md:p-8 flex flex-col">
          <div className="flex lg:flex-col gap-2 lg:gap-1 mb-6 lg:mb-8 overflow-x-auto">
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 text-left rounded-full lg:rounded-[1.1rem] px-4 py-2.5 lg:px-4 lg:py-3 transition-colors ${
                    on
                      ? "bg-foreground text-background"
                      : "bg-foreground/[0.04] text-foreground/55 hover:bg-foreground/[0.07]"
                  }`}
                >
                  <span className="font-serif-display italic text-[1.05rem] leading-none">{s.n}</span>
                  <span className="ml-2 lg:ml-0 lg:mt-1 lg:block text-[12px] md:text-[13px] font-medium lowercase tracking-tight">
                    {s.t}
                  </span>
                  {on && (
                    <motion.span
                      layoutId="memory-step-glow"
                      className="absolute inset-0 rounded-full lg:rounded-[1.1rem] ring-2 ring-foreground/20 pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].n}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              className="mt-auto"
            >
              <p className="font-serif-display italic text-[1.15rem] text-foreground/45 lowercase leading-none">
                step {steps[active].n}
              </p>
              <h3 className="mt-3 text-[1.35rem] md:text-[1.55rem] font-semibold tracking-tight leading-[1.1] lowercase">
                {steps[active].t}
              </h3>
              <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase max-w-sm">
                {steps[active].d}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 h-1 rounded-full bg-foreground/8 overflow-hidden">
            <motion.div
              key={`bar-${active}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5.2, ease: "linear" }}
              className="h-full rounded-full folk-cta"
            />
          </div>
        </div>

        <div className="lg:col-span-7 p-6 md:p-8 bg-folk-panel/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4, ease }}
              className="h-full min-h-[280px]"
            >
              <Visual />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MemoryStepsScene;
