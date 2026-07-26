import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Ban, Bell, Check, Clock, Eye, Heart, Users } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import tripPhotos from "@/assets/trip-photos.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "every" | "shadow" | "order" | "alerts";

const phases: Phase[] = ["every", "shadow", "order", "alerts"];
const HOLD: Record<Phase, number> = {
  every: 5600,
  shadow: 5400,
  order: 5600,
  alerts: 5600,
};
const labels: Record<Phase, string> = {
  every: "every follower, every time",
  shadow: "no shadow bans",
  order: "in the order you posted",
  alerts: "alerts they asked for",
};

const Avatar = ({
  letter,
  tint,
  size = 28,
}: {
  letter: string;
  tint: string;
  size?: number;
}) => (
  <span
    className="inline-flex shrink-0 items-center justify-center rounded-full text-white/90 font-medium"
    style={{
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      background: tint,
      fontSize: size * 0.34,
    }}
  >
    {letter}
  </span>
);

/* ─── 1. Every follower ─── */

const EveryPhase = () => {
  const [count, setCount] = useState(0);
  const total = 248;

  useEffect(() => {
    let n = 0;
    const id = window.setInterval(() => {
      n += 16;
      if (n >= total) {
        setCount(total);
        window.clearInterval(id);
      } else {
        setCount(n);
      }
    }, 70);
    return () => clearInterval(id);
  }, []);

  const faces = [
    { l: "M", t: "#8b5a7a" },
    { l: "C", t: "#4a6fa5" },
    { l: "L", t: "#2d8a6e" },
    { l: "J", t: "#6b5b95" },
    { l: "A", t: "#b07a4a" },
  ];

  return (
    <motion.div
      key="every"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Eye size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Delivery</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">live</span>
      </div>

      <div className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 overflow-hidden flex-1 min-h-0 flex flex-col">
        <div className="relative h-[120px] shrink-0">
          <img src={hillsSunset} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] to-transparent" />
        </div>
        <div className="p-3.5 flex-1 flex flex-col">
          <p className="text-[12px] font-semibold text-white">trail dump · Blue Hills</p>
          <p className="mt-1 text-[10px] text-white/40">just posted · all followers</p>

          <div className="mt-4 flex items-center">
            <div className="flex -space-x-2">
              {faces.map((f) => (
                <Avatar key={f.l} letter={f.l} tint={f.t} size={26} />
              ))}
            </div>
            <span className="ml-2 text-[10px] text-white/40">+{Math.max(0, count - 5)}</span>
          </div>

          <div className="mt-auto pt-4">
            <div className="flex items-end justify-between mb-1.5">
              <p className="text-[22px] font-semibold text-white tabular-nums leading-none">{count}</p>
              <p className="text-[10px] text-white/40 lowercase">of {total} reached</p>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: BLUE }}
                animate={{ width: `${(count / total) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            {count >= total && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-[10px] text-white/45"
              >
                every follower · every time
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 2. No shadow bans ─── */

const ShadowPhase = () => {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setCleared(true), 1600);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      key="shadow"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Ban size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Reach rules</p>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        <AnimatePresence mode="wait">
          {!cleared ? (
            <motion.div
              key="ban"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -40, scale: 0.94 }}
              className="rounded-2xl bg-[#2a1818] border border-[#ff453a]/30 p-3.5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,69,58,0.25)" }}
                >
                  <Ban size={14} style={{ color: RED }} />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-white">shadow ban?</p>
                  <p className="text-[10px] text-white/40">engagement-based bury</p>
                </div>
              </div>
              <p className="text-[11px] text-white/50 leading-snug">
                other apps hide posts when likes are low. yankee never does.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="ok"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: GREEN }}
                >
                  <Check size={14} className="text-white" strokeWidth={2.8} />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-white">no shadow bans</p>
                  <p className="text-[10px] text-white/40">removed from the product</p>
                </div>
              </div>
              <p className="text-[11px] text-white/50 leading-snug">
                chronological means chronological. nothing buried for low engagement.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {cleared && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 overflow-hidden flex-1 min-h-0 flex flex-col"
          >
            <div className="relative flex-1 min-h-[100px]">
              <img src={tripPhotos} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-3 flex items-center gap-2">
              <Heart size={13} className="text-white/40" />
              <span className="text-[10px] text-white/40">12 likes</span>
              <span className="ml-auto text-[10px] font-semibold" style={{ color: GREEN }}>
                still fully delivered
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 3. Order you posted ─── */

const OrderPhase = () => {
  const [count, setCount] = useState(0);
  const posts = [
    { name: "you", time: "just now", caption: "blue hills at dusk", tint: "#4a6fa5" },
    { name: "you", time: "12m", caption: "coffee before the trail", tint: "#4a6fa5" },
    { name: "you", time: "1h", caption: "packing the film stills", tint: "#4a6fa5" },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setCount(1), 350),
      window.setTimeout(() => setCount(2), 1400),
      window.setTimeout(() => setCount(3), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="order"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Clock size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Their feed</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">as posted</span>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col gap-2.5">
        <AnimatePresence initial={false}>
          {posts.slice(0, count).map((p, i) => (
            <motion.div
              key={p.caption}
              layout
              initial={{ opacity: 0, y: -28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 shrink-0"
            >
              <div className="flex items-center gap-2 mb-2">
                <Avatar letter="Y" tint={p.tint} size={30} />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold text-white">{p.name}</p>
                  <p className="text-[10px] text-white/35">{p.time}</p>
                </div>
                <span className="text-[9px] text-white/30 tabular-nums">#{i + 1}</span>
              </div>
              <p className="text-[11px] text-white/60 leading-snug">{p.caption}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {count >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 mb-1 text-center text-[10px] text-white/35"
        >
          landed in order · nothing reshuffled
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── 4. Alerts they asked for ─── */

const AlertsPhase = () => {
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
    <motion.div
      key="alerts"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Bell size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Alerts</p>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex gap-2.5"
          >
            <Avatar letter="M" tint="#8b5a7a" size={36} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[12px] font-semibold text-white">Maya Reed</p>
                <span className="text-[9px] text-white/35">now</span>
              </div>
              <p className="text-[11px] text-white/45 mt-0.5">close friend · opted in</p>
              <p className="text-[11px] text-white/70 mt-1.5 leading-snug">
                just posted trail dump
              </p>
            </div>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="w-2 h-2 rounded-full shrink-0 mt-1.5"
              style={{ background: RED }}
            />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex items-center gap-2.5"
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(47,107,255,0.22)" }}
            >
              <Users size={15} style={{ color: BLUE }} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-white">everyone else</p>
              <p className="text-[10px] text-white/40 mt-0.5">finds it in the chronological feed</p>
            </div>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/45">silent</span>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-auto mb-1 rounded-2xl p-3.5 text-center"
            style={{
              background: "linear-gradient(160deg, rgba(47,107,255,0.22), rgba(28,28,30,0.95))",
              border: "1px solid rgba(47,107,255,0.3)",
            }}
          >
            <p className="text-[13px] font-semibold text-white">pings only when asked</p>
            <p className="mt-1 text-[10px] text-white/45">close friends · opted in · never spam</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── main ─── */

const ReachPromiseScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1.5}>
        <div className="absolute top-11 right-4 z-30 flex gap-1">
          {phases.map((p, idx) => (
            <motion.span
              key={p}
              animate={{
                width: idx === i ? 14 : 4,
                backgroundColor: idx === i ? BLUE : "rgba(255,255,255,0.18)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          {phase === "every" && <EveryPhase key="every" />}
          {phase === "shadow" && <ShadowPhase key="shadow" />}
          {phase === "order" && <OrderPhase key="order" />}
          {phase === "alerts" && <AlertsPhase key="alerts" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default ReachPromiseScene;
