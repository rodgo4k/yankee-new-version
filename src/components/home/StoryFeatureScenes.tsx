import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Clock, Eye, Lock, Users } from "lucide-react";
import { uniqueFacesFor } from "@/lib/crowdFaces";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const ChronoPanel = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % 4), 900);
    return () => clearInterval(id);
  }, []);
  const posts = ["just now", "2m", "14m", "1h"];

  return (
    <div className="relative h-[110px] flex flex-col justify-center gap-1.5 px-1">
      {posts.map((t, i) => (
        <motion.div
          key={t}
          animate={{
            opacity: i === n ? 1 : 0.25,
            x: i === n ? 0 : -4,
            scale: i === n ? 1 : 0.98,
          }}
          className="flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1.5"
        >
          <Clock size={11} style={{ color: i === n ? BLUE : "rgba(0,0,0,0.3)" }} />
          <p className="text-[10px] lowercase text-foreground/65 flex-1">post · {t}</p>
          {i === n && (
            <span className="text-[9px] font-medium lowercase" style={{ color: BLUE }}>
              top
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const ReachPanel = () => {
  const [pct, setPct] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPct(0);
    let v = 0;
    const id = window.setInterval(() => {
      v += 5;
      if (v >= 100) {
        setPct(100);
        clearInterval(id);
      } else setPct(v);
    }, 35);
    const next = window.setTimeout(() => setCycle((c) => c + 1), 4000);
    return () => {
      clearInterval(id);
      clearTimeout(next);
    };
  }, [cycle]);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Eye size={16} />
      </motion.span>
      <p className="text-[18px] font-semibold tabular-nums text-foreground">{pct}%</p>
      <p className="text-[10px] text-foreground/40 lowercase">followers reached</p>
    </div>
  );
};

const CrowdsPanel = () => {
  const faces = uniqueFacesFor(["Mia Taylor", "Ethan Carter", "Ava Nguyen", "Ryan Brooks"]);
  const [full, setFull] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setFull((v) => !v), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <div className="flex -space-x-2">
        {faces.map((src, i) => (
          <motion.span
            key={src}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-card bg-[#2a2a2c]"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </motion.span>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={full ? "cap" : "ok"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-[10px] lowercase text-foreground/45"
        >
          {full ? "cap hit · ready to split" : "small on purpose"}
        </motion.p>
      </AnimatePresence>
      <Users size={12} className="text-foreground/30" />
    </div>
  );
};

const MemoryPanel = () => (
  <div className="relative h-[110px] flex items-center justify-center overflow-hidden">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ x: [40, 72], opacity: [0.45, 0], scale: [1, 0.55] }}
        transition={{ duration: 2.1, repeat: Infinity, delay: i * 0.4 }}
        className="absolute right-6 w-2 h-2 rounded-full bg-foreground/25"
      />
    ))}
    <motion.div
      animate={{ scale: [1, 1.08, 1], opacity: [0.28, 0.5, 0.28] }}
      transition={{ duration: 2.8, repeat: Infinity }}
      className="absolute w-20 h-20 rounded-full"
      style={{ background: `radial-gradient(circle, ${BLUE}33, transparent 70%)` }}
    />
    <span
      className="relative w-11 h-11 rounded-full flex items-center justify-center text-white"
      style={{ background: BLUE }}
    >
      <Lock size={16} />
    </span>
  </div>
);

const NotifPanel = () => {
  const [allow, setAllow] = useState(true);
  useEffect(() => {
    const id = window.setInterval(() => setAllow((v) => !v), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{
          rotate: allow ? [0, -12, 12, 0] : 0,
          scale: allow ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="w-11 h-11 rounded-full flex items-center justify-center"
        style={{
          background: allow ? BLUE : "rgba(0,0,0,0.1)",
          color: allow ? "#fff" : "rgba(0,0,0,0.4)",
        }}
      >
        <Bell size={16} />
      </motion.span>
      <AnimatePresence mode="wait">
        <motion.p
          key={allow ? "on" : "off"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-[10px] lowercase text-foreground/45"
        >
          {allow ? "friend ping · ok" : "streak bait · blocked"}
        </motion.p>
      </AnimatePresence>
      {!allow && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-3 right-8 w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px]"
          style={{ background: GREEN }}
        >
          ✓
        </motion.span>
      )}
    </div>
  );
};

const items = [
  {
    bubble: "newest first, always",
    title: "your feed, in order",
    desc: "chronological by default. no hidden reshuffling, no surprise resurfacing.",
    Visual: ChronoPanel,
  },
  {
    bubble: "no shadow banning",
    title: "every post reaches everyone",
    desc: "when you follow someone, you see every post. the follow button actually means something.",
    Visual: ReachPanel,
  },
  {
    bubble: "capped by design",
    title: "crowds stay small",
    desc: "groups have a ceiling. when they get too big, they split before they become forums.",
    Visual: CrowdsPanel,
  },
  {
    bubble: "encrypted, yours alone",
    title: "memory is private",
    desc: "your saved posts, notes and preferences are encrypted and never used to train models.",
    Visual: MemoryPanel,
  },
  {
    bubble: "only pings you asked for",
    title: "notifications you control",
    desc: "no bait, no streaks, no alerts designed to pull you back in.",
    Visual: NotifPanel,
  },
];

export const StoryPrinciplesScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
    {items.map((item, i) => {
      const Visual = item.Visual;
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease }}
          className={`${shell} p-5 flex flex-col ${i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"}`}
        >
          <span className="inline-flex self-start max-w-[95%] px-3 py-1.5 text-[12px] leading-snug lowercase rounded-2xl rounded-bl-md bg-foreground/[0.05] text-foreground/60 border border-foreground/[0.06]">
            {item.bubble}
          </span>
          <div className="mt-3">
            <Visual />
          </div>
          <h3 className="mt-2 text-[15px] font-semibold lowercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.desc}</p>
        </motion.div>
      );
    })}
  </div>
);
