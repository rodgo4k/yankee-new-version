import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ImagePlus, Send, Users } from "lucide-react";
import studyHall from "@/assets/study-hall.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const steps = [
  {
    n: "01",
    t: "write the post",
    d: "open the composer, drop the photo, the caption, the clip. yankee holds the draft on your device.",
  },
  {
    n: "02",
    t: "pick who sees it",
    d: "all followers, a crowd, or close friends. one clear audience, no accidental leaks.",
  },
  {
    n: "03",
    t: "ship it",
    d: "it lands in every chosen feed in order. no algorithm deciding who is worthy of seeing you.",
  },
] as const;

const WriteMini = ({ active }: { active: boolean }) => {
  const [typed, setTyped] = useState("");
  const full = "blue hills at dusk · film stills";

  useEffect(() => {
    if (!active) {
      setTyped("");
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="yankee-surface rounded-[1.4rem] bg-card p-4 md:p-5 h-full">
      <div className="flex items-center gap-2 mb-3">
        <ImagePlus size={15} className="text-foreground/40" />
        <p className="text-[12px] text-foreground/45 lowercase">new post</p>
      </div>
      <div className="rounded-[1rem] overflow-hidden aspect-[16/9] bg-muted mb-3">
        <motion.img
          src={studyHall}
          alt=""
          className="w-full h-full object-cover"
          animate={{ opacity: active ? 1 : 0.45, scale: active ? 1 : 0.98 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-[14px] font-medium lowercase min-h-[1.4em]">
        {typed}
        {active && typed.length < full.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.55, repeat: Infinity }}
            className="inline-block w-[1.5px] h-[13px] bg-foreground align-middle ml-0.5"
          />
        )}
      </p>
    </div>
  );
};

const AudienceMini = ({ active }: { active: boolean }) => {
  const [picked, setPicked] = useState(0);
  const options = [
    { label: "all followers", meta: "248 people" },
    { label: "close friends", meta: "12 people" },
    { label: "boston runners", meta: "crowd" },
  ];

  useEffect(() => {
    if (!active) {
      setPicked(0);
      return;
    }
    const timers = [
      window.setTimeout(() => setPicked(1), 700),
      window.setTimeout(() => setPicked(2), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div className="yankee-surface rounded-[1.4rem] bg-card p-4 md:p-5 h-full flex flex-col gap-2.5">
      <div className="flex items-center gap-2 mb-1">
        <Users size={15} className="text-foreground/40" />
        <p className="text-[12px] text-foreground/45 lowercase">audience</p>
      </div>
      {options.map((o, i) => {
        const on = picked === i && active;
        return (
          <motion.div
            key={o.label}
            animate={{
              borderColor: on ? "hsl(var(--foreground))" : "hsl(var(--foreground) / 0.1)",
              backgroundColor: on ? "hsl(var(--foreground) / 0.04)" : "transparent",
            }}
            className="rounded-[1rem] border px-3.5 py-3 flex items-center gap-3"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold lowercase">{o.label}</p>
              <p className="text-[11px] text-foreground/45 lowercase">{o.meta}</p>
            </div>
            <AnimatePresence>
              {on && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: BLUE }}
                >
                  <Check size={12} className="text-white" strokeWidth={3} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

const ShipMini = ({ active }: { active: boolean }) => {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!active) {
      setSent(false);
      return;
    }
    const id = window.setTimeout(() => setSent(true), 900);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="yankee-surface rounded-[1.4rem] bg-card p-4 md:p-5 h-full flex flex-col justify-center gap-3">
      <motion.button
        type="button"
        animate={{
          scale: active && !sent ? [1, 1.02, 1] : 1,
          backgroundColor: sent ? GREEN : BLUE,
        }}
        transition={{ duration: 1.2, repeat: active && !sent ? Infinity : 0 }}
        className="w-full rounded-full py-3.5 text-[14px] font-semibold text-white lowercase flex items-center justify-center gap-2"
      >
        {sent ? (
          <>
            <Check size={16} strokeWidth={2.8} /> landed
          </>
        ) : (
          <>
            <Send size={15} /> ship it
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.1rem] bg-foreground/[0.04] border border-foreground/10 px-4 py-3"
          >
            <p className="text-[13px] font-semibold lowercase">248 feeds · in order</p>
            <p className="mt-1 text-[12px] text-foreground/50 lowercase">
              no algorithm picking who is worthy
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const minis = [WriteMini, AudienceMini, ShipMini];

const ReachStepsScene = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => setActive((n) => (n + 1) % steps.length), 4800);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="relative max-w-[920px] mx-auto">
      {}
      <div
        className="absolute left-5 md:left-1/2 top-3 bottom-3 w-px bg-foreground/10 md:-translate-x-px"
        aria-hidden
      />
      <motion.div
        className="absolute left-5 md:left-1/2 top-3 w-px folk-cta md:-translate-x-px origin-top"
        animate={{ height: `${((active + 1) / steps.length) * 92}%` }}
        transition={{ duration: 0.6, ease }}
        aria-hidden
      />

      <div className="space-y-10 md:space-y-14">
        {steps.map((s, i) => {
          const on = i === active;
          const Mini = minis[i];
          const flip = i % 2 === 1;

          return (
            <motion.div
              key={s.n}
              animate={{ opacity: on ? 1 : 0.45 }}
              transition={{ duration: 0.4 }}
              className="relative grid md:grid-cols-2 gap-5 md:gap-10 items-center pl-12 md:pl-0"
            >
              {}
              <button
                type="button"
                onClick={() => setActive(i)}
                className="absolute left-5 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10"
                aria-label={`step ${s.n}`}
              >
                <motion.span
                  animate={{
                    scale: on ? 1.15 : 1,
                    backgroundColor: on ? BLUE : "hsl(var(--background))",
                    borderColor: on ? BLUE : "hsl(var(--foreground) / 0.2)",
                  }}
                  className="flex h-4 w-4 items-center justify-center rounded-full border-2"
                >
                  {on && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </motion.span>
              </button>

              <div
                className={`${flip ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10 md:text-right"}`}
              >
                <button type="button" onClick={() => setActive(i)} className="text-left md:contents">
                  <p
                    className={`font-serif-display italic text-[2.5rem] md:text-[3.25rem] leading-none tracking-tight ${
                      on ? "text-foreground/25" : "text-foreground/10"
                    }`}
                  >
                    {s.n}
                  </p>
                  <h3 className="mt-2 text-[1.25rem] md:text-[1.45rem] font-semibold lowercase tracking-tight">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-[13px] md:text-[14px] text-muted-foreground leading-relaxed lowercase max-w-sm md:inline-block">
                    {s.d}
                  </p>
                </button>
              </div>

              <div className={`${flip ? "md:order-1 md:pr-10" : "md:order-2 md:pl-10"}`}>
                <motion.div
                  animate={{
                    y: on ? 0 : 6,
                    scale: on ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.45, ease }}
                >
                  <Mini active={on} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ReachStepsScene;
