import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, BellOff, Check } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const signals = [
  { kind: "allow" as const, who: "julia · dm", text: "still on for saturday?", when: "now" },
  { kind: "mute" as const, who: "nudge", text: "someone you might know posted", when: "1m" },
  { kind: "allow" as const, who: "book club · mention", text: "@you what did you think of ch. 4?", when: "12m" },
  { kind: "mute" as const, who: "streak", text: "don't lose your 14 day streak", when: "18m" },
  { kind: "allow" as const, who: "digest · 8pm", text: "2 messages · 1 mention · 0 nudges", when: "1h" },
];

type Phase = "idle" | "filter" | "quiet" | "hold";

const NotifHeroScene = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [visible, setVisible] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPhase("idle");
    setVisible(0);
    const timers: number[] = [];

    signals.forEach((_, i) => {
      timers.push(window.setTimeout(() => setVisible(i + 1), 400 + i * 480));
    });
    timers.push(window.setTimeout(() => setPhase("filter"), 400 + signals.length * 480 + 200));
    timers.push(window.setTimeout(() => setPhase("quiet"), 400 + signals.length * 480 + 1600));
    timers.push(window.setTimeout(() => setPhase("hold"), 400 + signals.length * 480 + 3200));
    timers.push(
      window.setTimeout(() => setCycle((c) => c + 1), 400 + signals.length * 480 + 4800),
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const filtering = ["filter", "quiet", "hold"].includes(phase);
  const quietOn = ["quiet", "hold"].includes(phase);
  const mutedCount = signals.filter((s) => s.kind === "mute").length;

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 1.5 }}
        transition={{ duration: 0.7, ease }}
        className="rounded-[1.75rem] border-2 border-foreground bg-card p-4 md:p-5 shadow-[6px_6px_0_0_hsl(var(--foreground))]"
      >
        <div className="flex items-center justify-between gap-3 px-1 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl border-2 border-foreground bg-primary text-primary-foreground flex items-center justify-center">
              {quietOn ? <BellOff size={16} /> : <Bell size={16} />}
            </span>
            <div>
              <p className="text-[13px] font-semibold lowercase leading-none">inbox</p>
              <p className="mt-1 text-[11px] text-foreground/50 lowercase">
                {quietOn ? "quiet mode on" : "only what you asked for"}
              </p>
            </div>
          </div>
          <AnimatePresence>
            {quietOn && (
              <motion.span
                key="quiet"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-full border-2 border-foreground bg-[#E8E6E1] px-2.5 py-1 text-[11px] lowercase"
              >
                quiet
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-2.5 min-h-[280px]">
          {signals.map((n, i) => {
            const shown = i < visible;
            const muted = filtering && n.kind === "mute";
            if (!shown) return <div key={`${n.who}-${cycle}`} className="h-[68px]" />;

            return (
              <motion.div
                key={`${n.who}-${cycle}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{
                  opacity: muted ? 0.35 : 1,
                  y: 0,
                  scale: muted ? 0.98 : 1,
                }}
                transition={{ duration: 0.35, ease }}
                className={`relative rounded-[1.1rem] border-2 border-foreground p-3.5 ${
                  muted
                    ? "bg-background"
                    : n.kind === "allow"
                      ? "bg-[#E8E6E1]"
                      : "bg-background"
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] lowercase">
                  <span className={muted ? "text-foreground/40 line-through" : "text-foreground/55"}>
                    {n.who}
                  </span>
                  <span className={muted ? "text-foreground/35" : "text-foreground/45"}>{n.when}</span>
                </div>
                <p
                  className={`mt-1.5 text-[13px] leading-snug lowercase ${
                    muted ? "text-foreground/40 line-through" : "text-foreground"
                  }`}
                >
                  {n.text}
                </p>
                {muted && (
                  <span className="absolute -top-2 -right-2 rounded-full border-2 border-foreground bg-card px-2 py-0.5 text-[10px] lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                    silenced
                  </span>
                )}
                {!muted && filtering && n.kind === "allow" && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-foreground bg-[#3DDC97] flex items-center justify-center shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                    <Check size={11} />
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {filtering && (
            <motion.div
              key={`silenced-${cycle}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-xl border-2 border-dashed border-foreground/30 px-3 py-2.5 text-center text-[12px] text-foreground/55 lowercase"
            >
              {mutedCount} noise pings kept out of your day
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="absolute -left-2 md:-left-6 top-[22%] z-10 max-w-[55%]"
      >
        <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-[#E8E6E1] px-3 py-2 text-[12px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
          dms & mentions always land
        </div>
      </motion.div>
    </div>
  );
};

export default NotifHeroScene;
