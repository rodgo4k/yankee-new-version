import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AtSign,
  Bell,
  Filter,
  Heart,
  Radio,
  SlidersHorizontal,
  UserMinus,
  X,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import studentsHero from "@/assets/students-hero.jpg";
import filmNight from "@/assets/film-night.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "alerts" | "cleanup" | "rules" | "signals";

const phases: Phase[] = ["alerts", "cleanup", "rules", "signals"];
const HOLD: Record<Phase, number> = {
  alerts: 5200,
  cleanup: 5400,
  rules: 5200,
  signals: 5400,
};
const labels: Record<Phase, string> = {
  alerts: "instant alerts",
  cleanup: "follow cleanup",
  rules: "feed rules",
  signals: "signals & mentions",
};

const Avatar = ({
  letter,
  tint,
  size = 36,
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

/* ─── 1. Instant post alerts ─── */

const AlertsPhase = () => {
  const [notifs, setNotifs] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setNotifs(1), 400),
      window.setTimeout(() => setNotifs(2), 1200),
      window.setTimeout(() => setNotifs(3), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const items = [
    {
      name: "Maya Reed",
      text: "just posted a photo",
      time: "now",
      tint: "#8b5a7a",
      img: hillsSunset,
    },
    {
      name: "Chris Parker",
      text: "shared a new Notion",
      time: "12s",
      tint: "#4a6fa5",
      img: cafeFriends,
    },
    {
      name: "Boston Runners",
      text: "new post in your crowd",
      time: "48s",
      tint: "#2d8a6e",
      img: studentsHero,
    },
  ];

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
        <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white" style={{ background: BLUE }}>
          Live
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {items.map((n, i) => {
          if (notifs <= i) return null;
          return (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: -24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-2.5 flex gap-2.5"
            >
              <div className="relative shrink-0">
                <Avatar letter={n.name[0]} tint={n.tint} size={36} />
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#1c1c1e]"
                  style={{ background: RED }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[12px] font-semibold text-white truncate">{n.name}</p>
                  <span className="text-[9px] text-white/35 shrink-0">{n.time}</span>
                </div>
                <p className="text-[11px] text-white/45 mt-0.5">{n.text}</p>
                <div className="mt-1.5 h-10 rounded-lg overflow-hidden relative">
                  <img src={n.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ─── 2. Follow cleanup ─── */

const CleanupPhase = () => {
  const [gone, setGone] = useState<number[]>([]);
  const accounts = [
    { name: "brand_noise", days: "142 days quiet", tint: "#6b5b95" },
    { name: "ad_stream_99", days: "89 days quiet", tint: "#b07a4a" },
    { name: "promo_daily", days: "210 days quiet", tint: "#5a6b5a" },
    { name: "cold_follow", days: "67 days quiet", tint: "#3d7a9a" },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setGone([0]), 1400),
      window.setTimeout(() => setGone([0, 2]), 2800),
      window.setTimeout(() => setGone([0, 2, 1]), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="cleanup"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-1">
        <Filter size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Follow cleanup</p>
      </div>
      <p className="text-[10px] text-white/40 mb-3">accounts you never engage with</p>

      <div className="flex flex-col gap-2 flex-1">
        {accounts.map((a, i) => {
          const removed = gone.includes(i);
          return (
            <AnimatePresence key={a.name}>
              {!removed && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 px-3 py-2.5 flex items-center gap-2.5 overflow-hidden"
                >
                  <Avatar letter={a.name[0].toUpperCase()} tint={a.tint} size={32} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-white truncate">@{a.name}</p>
                    <p className="text-[10px] text-white/35">{a.days}</p>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white shrink-0"
                    style={{ background: RED }}
                  >
                    <UserMinus size={11} />
                    Unfollow
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}

        {gone.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[10px] text-white/40 mt-2"
          >
            {gone.length} quiet follow{gone.length > 1 ? "s" : ""} cleaned up
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 3. Feeds that talk back ─── */

const RulesPhase = () => {
  const [ruleOn, setRuleOn] = useState(false);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setRuleOn(true), 900),
      window.setTimeout(() => setFiltered(true), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="rules"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <SlidersHorizontal size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Feed rules</p>
      </div>

      <motion.div
        animate={{
          borderColor: ruleOn ? "rgba(47,107,255,0.55)" : "rgba(58,58,60,0.45)",
          backgroundColor: ruleOn ? "rgba(47,107,255,0.12)" : "rgba(28,28,30,1)",
        }}
        className="rounded-2xl border px-3 py-2.5 mb-3 flex items-center gap-2.5"
      >
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold text-white">Mute reposts</p>
          <p className="text-[10px] text-white/40">keep the feed chronological and original</p>
        </div>
        <motion.span
          animate={{
            backgroundColor: ruleOn ? BLUE : "rgba(255,255,255,0.15)",
          }}
          className="w-10 h-6 rounded-full relative shrink-0"
        >
          <motion.span
            animate={{ x: ruleOn ? 18 : 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute top-1 w-4 h-4 rounded-full bg-white"
          />
        </motion.span>
      </motion.div>

      <div className="flex flex-col gap-2 flex-1 relative">
        {[
          { name: "Ryan Scott", text: "Blue Hills before work.", img: hillsSunset, keep: true },
          {
            name: "brand_noise",
            text: "Reposted from promo_daily",
            img: filmNight,
            keep: false,
          },
          { name: "Tyler Shaw", text: "Coffee Club Saturday.", img: cafeFriends, keep: true },
        ].map((p, i) => {
          const hide = filtered && !p.keep;
          return (
            <AnimatePresence key={p.name}>
              {!hide && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, height: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/40 overflow-hidden"
                >
                  <div className="px-2.5 pt-2 flex items-center gap-2">
                    <Avatar letter={p.name[0]} tint={p.keep ? "#4a6fa5" : "#666"} size={22} />
                    <p className="text-[11px] font-semibold text-white flex-1 truncate">{p.name}</p>
                    {!p.keep && (
                      <span className="text-[8px] uppercase tracking-wide text-white/35">repost</span>
                    )}
                  </div>
                  <p className="px-2.5 py-1 text-[10px] text-white/55">{p.text}</p>
                  <div className="relative h-[72px]">
                    <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}

        {filtered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-dashed border-white/15 px-3 py-2 flex items-center gap-2 text-[10px] text-white/40"
          >
            <X size={12} />1 repost muted by your rule
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 4. Signals & mentions ─── */

const SignalsPhase = () => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShown(1), 350),
      window.setTimeout(() => setShown(2), 1100),
      window.setTimeout(() => setShown(3), 1900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const signals = [
    {
      icon: <AtSign size={12} className="text-white" />,
      title: "Mentioned you",
      body: "Maya tagged you in Boston Runners",
      color: BLUE,
    },
    {
      icon: <Radio size={12} className="text-white" />,
      title: "Crowd signal",
      body: "Coffee Club · 3 new replies on your thread",
      color: GREEN,
    },
    {
      icon: <Heart size={12} className="text-white" />,
      title: "Your work showed up",
      body: "Chris reshared your Blue Hills post",
      color: "#e85d75",
    },
  ];

  return (
    <motion.div
      key="signals"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Radio size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Signals</p>
      </div>

      <div className="flex flex-col gap-2.5">
        {signals.map((s, i) => {
          if (shown <= i) return null;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.45, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex gap-2.5"
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: s.color }}
              >
                {s.icon}
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-white">{s.title}</p>
                <p className="text-[11px] text-white/45 leading-snug mt-0.5">{s.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {shown >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto mb-1 text-center text-[10px] text-white/35"
        >
          live pings · only what matters
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── main ─── */

const FeedGuardsScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "alerts" && <AlertsPhase key="alerts" />}
          {phase === "cleanup" && <CleanupPhase key="cleanup" />}
          {phase === "rules" && <RulesPhase key="rules" />}
          {phase === "signals" && <SignalsPhase key="signals" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default FeedGuardsScene;
