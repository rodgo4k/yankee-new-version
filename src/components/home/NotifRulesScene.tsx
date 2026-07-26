import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AtSign,
  Bell,
  BellOff,
  Check,
  Filter,
  MessageSquare,
  Moon,
  Star,
  X,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "people" | "noise" | "quiet" | "rules";

const phases: Phase[] = ["people", "noise", "quiet", "rules"];
const HOLD: Record<Phase, number> = {
  people: 5600,
  noise: 5400,
  quiet: 5600,
  rules: 5600,
};
const labels: Record<Phase, string> = {
  people: "real people first",
  noise: "noise stays off",
  quiet: "quiet when you need it",
  rules: "you set the rules",
};

const Avatar = ({
  letter,
  tint,
  size = 34,
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

/* ─── 1. Real people first ─── */

const PeoplePhase = () => {
  const [count, setCount] = useState(0);
  const items = [
    {
      name: "Maya Reed",
      text: "dm · saturday loft?",
      time: "now",
      tint: "#8b5a7a",
      icon: MessageSquare,
    },
    {
      name: "Chris Parker",
      text: "replied to your post",
      time: "12s",
      tint: "#4a6fa5",
      icon: MessageSquare,
    },
    {
      name: "Boston Runners",
      text: "@you in the thread",
      time: "40s",
      tint: "#2d8a6e",
      icon: AtSign,
    },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setCount(1), 400),
      window.setTimeout(() => setCount(2), 1300),
      window.setTimeout(() => setCount(3), 2300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="people"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Bell size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Inbox</p>
        <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white" style={{ background: BLUE }}>
          live
        </span>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {items.map((n, i) => {
          if (count <= i) return null;
          const Icon = n.icon;
          return (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: -22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-2.5 flex gap-2.5"
            >
              <div className="relative shrink-0">
                <Avatar letter={n.name[0]} tint={n.tint} />
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#1c1c1e]"
                  style={{ background: RED }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[12px] font-semibold text-white truncate">{n.name}</p>
                  <span className="text-[9px] text-white/35 shrink-0">{n.time}</span>
                </div>
                <p className="text-[11px] text-white/50 mt-0.5 flex items-center gap-1">
                  <Icon size={10} className="text-white/35" />
                  {n.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {count >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 mb-1 text-center text-[10px] text-white/35"
        >
          dms · replies · mentions · always ring
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── 2. Noise stays off ─── */

const NoisePhase = () => {
  const [gone, setGone] = useState<number[]>([]);
  const noise = [
    { title: "streak reminder", sub: "come back for day 12" },
    { title: "re-engagement", sub: "people you may know" },
    { title: "empty nudge", sub: "post something today" },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setGone([0]), 1200),
      window.setTimeout(() => setGone([0, 1]), 2200),
      window.setTimeout(() => setGone([0, 1, 2]), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="noise"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Filter size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Noise</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">silent</span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <AnimatePresence>
          {noise.map((n, i) => {
            if (gone.includes(i)) return null;
            return (
              <motion.div
                key={n.title}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.55, y: 0 }}
                exit={{ opacity: 0, x: 40, scale: 0.92 }}
                transition={{ duration: 0.35, ease }}
                className="rounded-2xl bg-[#1c1c1e] border border-dashed border-white/20 p-3 flex items-center gap-2.5"
              >
                <span className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                  <BellOff size={13} className="text-white/40" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold text-white/70">{n.title}</p>
                  <p className="text-[10px] text-white/35 mt-0.5">{n.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {gone.length >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-auto mb-1 rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 flex items-center gap-2.5"
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: GREEN }}
            >
              <Check size={15} className="text-white" strokeWidth={2.8} />
            </span>
            <div>
              <p className="text-[12px] font-semibold text-white">noise stays off</p>
              <p className="text-[10px] text-white/40 mt-0.5">silent by default · always</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 3. Quiet hours ─── */

const QuietPhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 500),
      window.setTimeout(() => setStep(2), 1800),
      window.setTimeout(() => setStep(3), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="quiet"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Moon size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Quiet hours</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">10pm–8am</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 mb-3"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] font-semibold text-white">holding non-urgent</p>
          <span className="text-[10px] text-white/40">until digest</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: BLUE }}
            initial={{ width: "20%" }}
            animate={{ width: step >= 2 ? "100%" : "45%" }}
            transition={{ duration: 1.2, ease }}
          />
        </div>
        <p className="mt-2 text-[10px] text-white/40">2 soft replies · 1 crowd ping</p>
      </motion.div>

      {step >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 flex-1"
        >
          <p className="text-[10px] text-white/35 mb-2">Evening digest</p>
          <p className="text-[13px] font-semibold text-white">ready · skim in seconds</p>
          <div className="mt-3 space-y-2">
            {["maya liked your loft note", "leo mentioned you in runners"].map((row, i) => (
              <motion.div
                key={row}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: step >= 2 + Math.min(i, 1) ? 1 : 0.3, x: 0 }}
                className="rounded-xl bg-white/[0.04] px-3 py-2 text-[11px] text-white/55"
              >
                {row}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {step >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 mb-1 text-center text-[10px] text-white/35"
        >
          one digest · then close the phone
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── 4. You set the rules ─── */

const RulesPhase = () => {
  const [on, setOn] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setOn([true, false, false]), 600),
      window.setTimeout(() => setOn([true, true, false]), 1600),
      window.setTimeout(() => setOn([true, true, true]), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const rows = [
    { icon: Star, label: "star Maya", note: "always loud", allow: true },
    { icon: BellOff, label: "mute promo crowd", note: "feed stays, pings off", allow: false },
    { icon: Bell, label: "close friends", note: "ring on post", allow: true },
  ];

  return (
    <motion.div
      key="rules"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <BellOff size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Your rules</p>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {rows.map((r, i) => {
          const Icon = r.icon;
          const ready = on[i];
          return (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex items-center gap-2.5"
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: ready ? (r.allow ? "rgba(47,107,255,0.25)" : "rgba(255,69,58,0.2)") : "rgba(255,255,255,0.08)" }}
              >
                <Icon size={14} className="text-white" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-semibold text-white">{r.label}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{r.note}</p>
              </div>
              {ready && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: r.allow ? GREEN : "rgba(255,69,58,0.35)" }}
                >
                  {r.allow ? (
                    <Check size={12} className="text-white" strokeWidth={3} />
                  ) : (
                    <X size={12} className="text-white" strokeWidth={3} />
                  )}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      {on.every(Boolean) && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 mb-1 text-center text-[10px] text-white/35"
        >
          your signal list · your call
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── main ─── */

const NotifRulesScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={1.5}>
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
          {phase === "people" && <PeoplePhase key="people" />}
          {phase === "noise" && <NoisePhase key="noise" />}
          {phase === "quiet" && <QuietPhase key="quiet" />}
          {phase === "rules" && <RulesPhase key="rules" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default NotifRulesScene;
