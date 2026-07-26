import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mic,
  Phone,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { uniqueFacesFor } from "@/lib/crowdFaces";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const FeedPanel = () => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % 4), 900);
    return () => clearInterval(id);
  }, []);
  const posts = ["just now", "2m", "14m", "1h"];

  return (
    <div className="relative h-[120px] flex flex-col justify-center gap-1.5 px-1">
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
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: i === n ? BLUE : "rgba(0,0,0,0.2)" }}
          />
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

const ChatPanel = () => {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    const timers = [1, 2, 3].map((n, i) => window.setTimeout(() => setStep(n), 350 + i * 650));
    const next = window.setTimeout(() => setCycle((c) => c + 1), 3400);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(next);
    };
  }, [cycle]);

  return (
    <div className="relative h-[120px] flex flex-col justify-end gap-1.5 px-2 pb-1">
      {step >= 1 && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="self-start rounded-2xl rounded-bl-md bg-foreground/[0.08] px-2.5 py-1.5 text-[10px] text-foreground/60 max-w-[75%]"
        >
          you free later?
        </motion.span>
      )}
      {step >= 2 && (
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          className="self-end rounded-2xl rounded-br-md px-2.5 py-1.5 text-[10px] text-white max-w-[75%]"
          style={{ background: BLUE }}
        >
          yeah · same thread
        </motion.span>
      )}
      {step >= 3 && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="self-start rounded-2xl rounded-bl-md bg-foreground/[0.08] px-2.5 py-1.5 text-[10px] text-foreground/60 max-w-[75%]"
        >
          pick up where we left
        </motion.span>
      )}
    </div>
  );
};

const CallsPanel = () => {
  const [mode, setMode] = useState<"ring" | "live">("ring");
  useEffect(() => {
    const id = window.setInterval(() => setMode((m) => (m === "ring" ? "live" : "ring")), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <AnimatePresence mode="wait">
        {mode === "ring" ? (
          <motion.div
            key="ring"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.span
              animate={{ boxShadow: [`0 0 0 0 ${GREEN}00`, `0 0 0 12px ${GREEN}28`, `0 0 0 0 ${GREEN}00`] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white"
              style={{ background: GREEN }}
            >
              <Phone size={16} />
            </motion.span>
            <p className="text-[10px] text-foreground/40 lowercase">incoming</p>
          </motion.div>
        ) : (
          <motion.div
            key="live"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center text-white"
              style={{ background: BLUE }}
            >
              <Mic size={16} />
            </span>
            <p className="text-[10px] text-foreground/40 lowercase tabular-nums">00:42 · in app</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CrowdsPanel = () => {
  const faces = uniqueFacesFor(["Mia Taylor", "Ethan Carter", "Ava Nguyen", "Ryan Brooks"]);
  const [n, setN] = useState(12);
  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v >= 48 ? 12 : v + 4)), 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
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
      <div className="w-[60%] h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
        <motion.div
          animate={{ width: `${(n / 48) * 100}%` }}
          className="h-full rounded-full"
          style={{ background: BLUE }}
        />
      </div>
      <p className="text-[10px] text-foreground/40 lowercase tabular-nums flex items-center gap-1">
        <Users size={10} /> {n}/48 · capped
      </p>
    </div>
  );
};

const AiPanel = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setOn((v) => !v), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-2">
      <motion.span
        animate={{ scale: [1, 1.08, 1], rotate: on ? [0, -8, 8, 0] : 0 }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-11 h-11 rounded-full flex items-center justify-center text-white"
        style={{ background: BLUE }}
      >
        <Sparkles size={16} />
      </motion.span>
      <AnimatePresence mode="wait">
        <motion.p
          key={on ? "draft" : "idle"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-[10px] lowercase text-foreground/45"
        >
          {on ? "draft ready · private" : "ask once · stays on it"}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const SearchPanel = () => {
  const q = "maya";
  const [len, setLen] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setLen(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setLen(i);
      if (i >= q.length) clearInterval(id);
    }, 180);
    const next = window.setTimeout(() => setCycle((c) => c + 1), 3200);
    return () => {
      clearInterval(id);
      clearTimeout(next);
    };
  }, [cycle]);

  return (
    <div className="relative h-[120px] flex flex-col items-center justify-center gap-3 px-3">
      <div className="w-full max-w-[160px] rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-2 flex items-center gap-2">
        <Search size={12} className="text-foreground/35 shrink-0" />
        <p className="text-[11px] text-foreground/70 lowercase tabular-nums min-h-[1em]">
          {q.slice(0, len)}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-[1px] h-3 bg-foreground/50 ml-0.5 align-middle"
          />
        </p>
      </div>
      <p className="text-[10px] text-foreground/40 lowercase">people · posts · rooms</p>
    </div>
  );
};

const cards = [
  {
    title: "feed",
    text: "chronological, always. only people you follow.",
    Visual: FeedPanel,
  },
  {
    title: "chat",
    text: "threads that pick up exactly where you left them.",
    Visual: ChatPanel,
  },
  {
    title: "calls",
    text: "voice and video, right inside the same calm app.",
    Visual: CallsPanel,
  },
  {
    title: "crowds",
    text: "small rooms around what you actually care about.",
    Visual: CrowdsPanel,
  },
  {
    title: "yankee ai",
    text: "drafts, reminders and follow-ups that stay private.",
    Visual: AiPanel,
  },
  {
    title: "search",
    text: "find people, posts and rooms without the noise.",
    Visual: SearchPanel,
  },
];

export const FeaturesAlwaysScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map((card, i) => {
      const Visual = card.Visual;
      return (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease }}
          className={`${shell} p-5 flex flex-col`}
        >
          <Visual />
          <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">
            {card.title}
          </h3>
          <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed lowercase">
            {card.text}
          </p>
        </motion.div>
      );
    })}
  </div>
);
