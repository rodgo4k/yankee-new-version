import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Link2, Sparkles, UserRound } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";

const steps = [
  {
    n: "01",
    t: "connect your accounts",
    d: "link yankee to the feeds you already have. read only, no reposting.",
  },
  {
    n: "02",
    t: "yankee sorts the noise",
    d: "it clears dead accounts and keeps only the people you actually follow.",
  },
  {
    n: "03",
    t: "open, scroll, close",
    d: "chronological, finite and honest. when it ends, yankee tells you and lets you go.",
  },
] as const;

const accounts = [
  { label: "instagram", tint: "#c13584" },
  { label: "x", tint: "#1a1a1a" },
  { label: "threads", tint: "#4a6fa5" },
];

const people = [
  { name: "Maya", tint: "#8b5a7a" },
  { name: "Chris", tint: "#4a6fa5" },
  { name: "Leo", tint: "#2d8a6e" },
  { name: "noise", tint: "#6b6b6b", dead: true },
  { name: "cold", tint: "#8a7a5a", dead: true },
];

const ConnectVisual = () => {
  const [linked, setLinked] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setLinked(1), 400),
      window.setTimeout(() => setLinked(2), 1100),
      window.setTimeout(() => setLinked(3), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      {accounts.map((a, i) => {
        const on = linked > i;
        return (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-[1.1rem] bg-background/80 border border-foreground/10 px-4 py-3"
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-semibold uppercase"
              style={{ background: a.tint }}
            >
              {a.label[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold lowercase">{a.label}</p>
              <p className="text-[11px] text-foreground/45 lowercase">
                {on ? "connected · read only" : "waiting…"}
              </p>
            </div>
            <motion.span
              animate={{
                backgroundColor: on ? BLUE : "transparent",
                borderColor: on ? BLUE : "rgba(0,0,0,0.15)",
              }}
              className="w-8 h-8 rounded-full border flex items-center justify-center"
            >
              {on ? (
                <Check size={14} className="text-white" strokeWidth={2.8} />
              ) : (
                <Link2 size={13} className="text-foreground/35" />
              )}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};

const SortVisual = () => {
  const [cleared, setCleared] = useState<string[]>([]);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setCleared(["noise"]), 900),
      window.setTimeout(() => setCleared(["noise", "cold"]), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      <p className="text-[12px] text-foreground/45 lowercase mb-1">your follows</p>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {people.map((p) => {
            if (cleared.includes(p.name)) return null;
            return (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 ${
                  p.dead
                    ? "border-foreground/15 bg-foreground/[0.04] opacity-55"
                    : "border-foreground/12 bg-background"
                }`}
              >
                <span
                  className="w-7 h-7 rounded-full inline-flex items-center justify-center text-white text-[11px] font-medium"
                  style={{
                    background: p.tint,
                    minWidth: 28,
                    minHeight: 28,
                  }}
                >
                  {p.name[0]}
                </span>
                <span className="text-[12px] font-medium lowercase">{p.name}</span>
                {p.dead && (
                  <span className="text-[10px] text-foreground/40 lowercase">quiet</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {cleared.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 yankee-chat__bubble yankee-chat__bubble--them text-[13px]"
        >
          kept 3 people you actually talk to. noise is gone.
        </motion.div>
      )}
    </div>
  );
};

const ScrollVisual = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase(1), 500),
      window.setTimeout(() => setPhase(2), 1600),
      window.setTimeout(() => setPhase(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      {[
        { t: "maya posted trail photos", s: "just now" },
        { t: "chris shared the cafe run", s: "12m" },
        { t: "leo dropped weekend film", s: "1h" },
      ].map((row, i) => (
        <motion.div
          key={row.t}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: phase > i ? 1 : 0.25, y: phase > i ? 0 : 6 }}
          className="flex items-center gap-3 rounded-[1.1rem] bg-background/80 border border-foreground/10 px-4 py-3"
        >
          <UserRound size={16} className="text-foreground/40 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium lowercase truncate">{row.t}</p>
          </div>
          <span className="text-[11px] text-foreground/40 lowercase shrink-0">{row.s}</span>
        </motion.div>
      ))}

      {phase >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mt-1 rounded-[1.25rem] folk-cta text-white px-5 py-4 text-center"
        >
          <Sparkles size={16} className="mx-auto mb-2 opacity-80" />
          <p className="text-[15px] font-semibold lowercase">you&apos;re all caught up</p>
          <p className="mt-1 text-[12px] text-white/75 lowercase">
            yankee steps aside. close the app.
          </p>
        </motion.div>
      )}
    </div>
  );
};

const visuals = [ConnectVisual, SortVisual, ScrollVisual];

const FeedStepsScene = () => {
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
                    on ? "bg-foreground text-background" : "bg-foreground/[0.04] text-foreground/55 hover:bg-foreground/[0.07]"
                  }`}
                >
                  <span className="font-serif-display italic text-[1.05rem] leading-none">{s.n}</span>
                  <span className="ml-2 lg:ml-0 lg:mt-1 lg:block text-[12px] md:text-[13px] font-medium lowercase tracking-tight">
                    {s.t}
                  </span>
                  {on && (
                    <motion.span
                      layoutId="feed-step-glow"
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

export default FeedStepsScene;
export { steps as feedHowSteps };
