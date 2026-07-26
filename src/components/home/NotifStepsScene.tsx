import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AtSign, Bell, Check, MessageSquare, Moon, Star } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const steps = [
  {
    n: "01",
    t: "pick what can ring",
    d: "dms, mentions, close friends and crowd roles. everything else starts silent.",
  },
  {
    n: "02",
    t: "set quiet hours",
    d: "choose when yankee holds non urgent updates for a single evening digest.",
  },
  {
    n: "03",
    t: "open when you want",
    d: "skim the inbox, mark what matters, close the app. no phone begging for attention.",
  },
] as const;

const ringItems = [
  { icon: MessageSquare, label: "dms", on: true },
  { icon: AtSign, label: "mentions", on: true },
  { icon: Star, label: "close friends", on: true },
  { icon: Bell, label: "crowd roles", on: true },
];

const NotifStepsScene = () => {
  const [active, setActive] = useState(0);
  const [toggles, setToggles] = useState([false, false, false, false]);
  const [quietOn, setQuietOn] = useState(false);
  const [digestReady, setDigestReady] = useState(false);
  const [skimmed, setSkimmed] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => setActive((n) => (n + 1) % steps.length), 5200);
    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setToggles([false, false, false, false]);
    setQuietOn(false);
    setDigestReady(false);
    setSkimmed(0);

    if (active === 0) {
      const timers = [
        window.setTimeout(() => setToggles([true, false, false, false]), 400),
        window.setTimeout(() => setToggles([true, true, false, false]), 900),
        window.setTimeout(() => setToggles([true, true, true, false]), 1400),
        window.setTimeout(() => setToggles([true, true, true, true]), 1900),
      ];
      return () => timers.forEach(clearTimeout);
    }

    if (active === 1) {
      const timers = [
        window.setTimeout(() => setQuietOn(true), 500),
        window.setTimeout(() => setDigestReady(true), 2200),
      ];
      return () => timers.forEach(clearTimeout);
    }

    const timers = [
      window.setTimeout(() => setSkimmed(1), 600),
      window.setTimeout(() => setSkimmed(2), 1400),
      window.setTimeout(() => setSkimmed(3), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div className="yankee-surface rounded-[1.75rem] md:rounded-[2rem] bg-card overflow-hidden">
      {}
      <div className="relative px-5 md:px-8 pt-6 md:pt-8 pb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] text-foreground/45 lowercase">your day · notifications</p>
          <p className="text-[11px] text-foreground/40 lowercase tabular-nums">8am → 10pm → 8am</p>
        </div>

        <div className="relative h-14 md:h-16 rounded-2xl bg-foreground/[0.04] border border-foreground/8 overflow-hidden">
          {}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-folk-surface-warm/80" />
          {}
          <motion.div
            className="absolute inset-y-0 right-0 flex items-center justify-center"
            animate={{
              width: quietOn || active >= 1 ? "45%" : "18%",
              backgroundColor:
                quietOn || active >= 1 ? "rgba(47,107,255,0.18)" : "rgba(0,0,0,0.06)",
            }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="flex items-center gap-1.5 px-3">
              <Moon size={13} className={quietOn || active >= 1 ? "text-[hsl(214_90%_45%)]" : "text-foreground/30"} />
              <span className="text-[11px] font-medium lowercase text-foreground/55">
                quiet hours
              </span>
            </div>
          </motion.div>

          {}
          <AnimatePresence>
            {digestReady && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/2 -translate-y-1/2 right-[38%] z-10"
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-2.5 py-1 text-[10px] font-semibold lowercase shadow-sm">
                  digest
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {}
      <div className="px-5 md:px-8 pb-6 md:pb-8 min-h-[240px] md:min-h-[260px]">
        <AnimatePresence mode="wait">
          {active === 0 && (
            <motion.div
              key="ring"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="font-serif-display italic text-[1.1rem] text-foreground/45 lowercase mb-4">
                what can ring
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {ringItems.map((item, i) => {
                  const Icon = item.icon;
                  const on = toggles[i];
                  return (
                    <motion.div
                      key={item.label}
                      animate={{
                        borderColor: on ? BLUE : "hsl(var(--foreground) / 0.1)",
                        backgroundColor: on ? "rgba(47,107,255,0.08)" : "hsl(var(--foreground) / 0.02)",
                      }}
                      className="rounded-[1.1rem] border px-3.5 py-3 flex items-center gap-2.5"
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: on ? BLUE : "hsl(var(--foreground) / 0.08)" }}
                      >
                        <Icon size={14} className={on ? "text-white" : "text-foreground/40"} />
                      </span>
                      <span className="text-[13px] font-medium lowercase flex-1">{item.label}</span>
                      {on && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <Check size={14} style={{ color: GREEN }} strokeWidth={2.8} />
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-3 text-[12px] text-foreground/45 lowercase">
                everything else starts silent
              </p>
            </motion.div>
          )}

          {active === 1 && (
            <motion.div
              key="quiet"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="flex flex-col gap-4"
            >
              <p className="font-serif-display italic text-[1.1rem] text-foreground/45 lowercase">
                hold until evening
              </p>
              <div className="rounded-[1.25rem] border border-foreground/10 bg-foreground/[0.03] p-4 md:p-5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Moon size={16} style={{ color: BLUE }} />
                    <p className="text-[14px] font-semibold lowercase">10:00 pm – 8:00 am</p>
                  </div>
                  <motion.span
                    animate={{ backgroundColor: quietOn ? GREEN : "hsl(var(--foreground) / 0.15)" }}
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold text-white lowercase"
                  >
                    {quietOn ? "on" : "…"}
                  </motion.span>
                </div>
                <p className="text-[13px] text-muted-foreground lowercase leading-relaxed">
                  non urgent updates wait here. one digest when quiet hours end.
                </p>
              </div>
              {digestReady && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="yankee-chat__bubble yankee-chat__bubble--them text-[13px]"
                >
                  digest scheduled · you&apos;ll see it once
                </motion.div>
              )}
            </motion.div>
          )}

          {active === 2 && (
            <motion.div
              key="open"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="font-serif-display italic text-[1.1rem] text-foreground/45 lowercase mb-4">
                evening skim
              </p>
              <div className="space-y-2">
                {[
                  "maya dm · saturday loft",
                  "chris mentioned you in runners",
                  "digest · 1 soft reply waiting",
                ].map((row, i) => {
                  const done = skimmed > i;
                  return (
                    <motion.div
                      key={row}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: skimmed > i ? 1 : 0.35, x: 0 }}
                      className="rounded-[1.1rem] border border-foreground/10 px-3.5 py-3 flex items-center gap-3"
                    >
                      <span className="text-[13px] lowercase flex-1">{row}</span>
                      {done && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ background: GREEN }}
                        >
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              {skimmed >= 3 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-[13px] text-foreground/50 lowercase"
                >
                  marked · closed. the phone stays quiet.
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {}
      <div className="border-t border-foreground/8 px-4 md:px-6 py-4 flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-stretch">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.n}
              type="button"
              onClick={() => setActive(i)}
              className={`relative flex-1 text-left rounded-[1.1rem] px-4 py-3 transition-colors ${
                on
                  ? "bg-foreground text-background"
                  : "bg-foreground/[0.03] text-foreground/55 hover:bg-foreground/[0.06]"
              }`}
            >
              <span className="font-serif-display italic text-[1rem] leading-none">{s.n}</span>
              <span className="ml-2 text-[12px] md:text-[13px] font-medium lowercase">{s.t}</span>
              {on && (
                <motion.div
                  key={`prog-${i}`}
                  className="absolute left-3 right-3 bottom-1.5 h-0.5 rounded-full bg-background/35 overflow-hidden"
                >
                  <motion.span
                    className="block h-full bg-background"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5.2, ease: "linear" }}
                  />
                </motion.div>
              )}
            </button>
          );
        })}
      </div>

      <div className="px-5 md:px-8 pb-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={steps[active].n}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[13px] text-muted-foreground leading-relaxed lowercase max-w-2xl"
          >
            {steps[active].d}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotifStepsScene;
