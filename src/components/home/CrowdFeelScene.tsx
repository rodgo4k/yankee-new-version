import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Compass,
  Home,
  Lock,
  Mic,
  MicOff,
  MoreHorizontal,
  PhoneOff,
  Plus,
  Search,
  Send,
  Settings,
  Share2,
  SlidersHorizontal,
  Smile,
  User,
  Video,
  Volume2,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import liveThread from "@/assets/live-thread.png";
import cafeFriends from "@/assets/cafe-friends.jpg";
import harvardHall from "@/assets/harvard-hall.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "discover" | "chat" | "voice";

const phases: Phase[] = ["discover", "chat", "voice"];
const PHASE_HOLD_MS: Record<Phase, number> = {
  discover: 7200,
  chat: 6800,
  voice: 7800,
};

const phaseLabel: Record<Phase, string> = {
  discover: "explore crowds",
  chat: "channels + chat",
  voice: "join voice",
};

/* ─── shared chrome ─── */

const BottomNav = ({ active = "profile" }: { active?: "discover" | "messages" | "home" | "profile" | "ai" }) => {
  const items = [
    { id: "discover" as const, icon: <Compass size={16} /> },
    { id: "messages" as const, icon: <Send size={15} /> },
    { id: "home" as const, icon: <Home size={16} /> },
    { id: "profile" as const, icon: <User size={15} /> },
    { id: "ai" as const, icon: <span className="text-[11px] font-bold tracking-wide">AI</span> },
  ];
  return (
    <div className="absolute bottom-5 inset-x-3 z-30">
      <div className="rounded-full bg-[#1c1c1e]/95 border border-white/[0.06] px-2 py-1.5 flex items-center justify-between shadow-[0_8px_28px_-8px_rgba(0,0,0,0.7)]">
        {items.map((it) => {
          const on = it.id === active;
          return (
            <span
              key={it.id}
              className={`w-9 h-9 rounded-full flex items-center justify-center ${
                on ? "bg-white text-black" : "text-white/45"
              }`}
            >
              {it.icon}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const Avatar = ({
  letter,
  tint,
  size = 28,
  className = "",
}: {
  letter: string;
  tint: string;
  size?: number;
  className?: string;
}) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-full text-white/90 font-medium ${className}`}
    style={{
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      background: tint,
      fontSize: size * 0.36,
    }}
  >
    {letter}
  </span>
);

/* ─── 1. Discover crowds ─── */

const crowds = [
  {
    name: "Sunrise Runners",
    count: "465",
    img: hillsSunset,
    tags: ["#running", "#fitness", "#morningvibes"],
    pos: "50% 40%",
  },
  {
    name: "Late Night Producers",
    count: "879",
    img: liveThread,
    tags: ["#music", "#studio", "#latenight"],
    pos: "50% 30%",
  },
  {
    name: "Coffee Club",
    count: "1.2k",
    img: cafeFriends,
    tags: ["#coffee", "#slow", "#friends"],
    pos: "50% 45%",
  },
];

const DiscoverPhase = () => {
  const [slide, setSlide] = useState(0);
  const [privateOn, setPrivateOn] = useState(false);
  const [joinPulse, setJoinPulse] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setJoinPulse(true), 500),
      window.setTimeout(() => setPrivateOn(true), 1800),
      window.setTimeout(() => {
        setPrivateOn(false);
        setSlide(1);
      }, 3400),
      window.setTimeout(() => setSlide(2), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const c = crowds[slide];

  return (
    <motion.div
      key="discover"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 shrink-0 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35 shrink-0" />
          <p className="flex-1 text-[12px] text-white/35">Search crowds</p>
          <SlidersHorizontal size={13} className="text-white/35 shrink-0" />
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col px-3.5 pb-16">
        <div className="relative flex-1 min-h-0 rounded-[1.35rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 1.04, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -40 }}
              transition={{ duration: 0.5, ease }}
              className="absolute inset-0"
            >
              <img
                src={c.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: c.pos }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/65" />

              <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md px-2.5 py-1 max-w-[70%]">
                  <p className="text-[11px] font-medium text-white truncate">{c.name}</p>
                  <span
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: BLUE }}
                  >
                    <span className="w-1 h-1 rounded-full bg-white" />
                  </span>
                </div>
                <span className="rounded-full bg-black/45 backdrop-blur-md px-2 py-1 text-[10px] font-medium tabular-nums text-[#8ec5ff]">
                  {c.count}
                </span>
              </div>

              <AnimatePresence>
                {privateOn && slide === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-[3.25rem] inset-x-3 rounded-xl bg-[#5c1a1a]/92 border border-red-400/25 px-3 py-2.5 flex items-start gap-2"
                  >
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-red-500/30 flex items-center justify-center shrink-0">
                      <Lock size={9} className="text-red-200" />
                    </span>
                    <p className="text-[10px] text-white/85 leading-snug">
                      This crowd is private, but your access has been requested.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <motion.span
                  animate={
                    joinPulse
                      ? {
                          boxShadow: [
                            "0 0 0 0 rgba(47,107,255,0)",
                            "0 0 0 8px rgba(47,107,255,0.18)",
                            "0 0 0 0 rgba(47,107,255,0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="rounded-full border border-white/25 bg-black/35 backdrop-blur-xl px-7 py-2"
                >
                  <span className="text-[13px] font-semibold" style={{ color: BLUE }}>
                    Join
                  </span>
                </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-2.5 flex flex-wrap gap-1.5 justify-center">
          {c.tags.map((t, i) => (
            <motion.span
              key={`${c.name}-${t}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-2.5 py-1 text-[10px] text-white/55"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="mt-2.5 flex justify-center gap-1.5">
          {crowds.map((_, i) => (
            <motion.span
              key={i}
              animate={{
                width: i === slide ? 14 : 5,
                backgroundColor: i === slide ? "#fff" : "rgba(255,255,255,0.22)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
      </div>

      <BottomNav active="discover" />
    </motion.div>
  );
};

/* ─── 2. Chat + channel drawer ─── */

const chatMessages = [
  { from: "Diana", time: "17:30", text: "Hello Guys!", you: false, tint: "#6b5b95" },
  { from: "Diana", time: "17:30", text: "I was walking to class.", you: false, tint: "#6b5b95" },
  { from: "you", time: "17:31", text: "Wait…", you: true },
  { from: "you", time: "17:31", text: "same thing happened to me last week", you: true },
  {
    from: "Maya",
    time: "17:31",
    text: "Campus sidewalks are dangerous, honestly.",
    you: false,
    tint: "#8b5a7a",
  },
  {
    from: "you",
    time: "17:31",
    text: "Especially when you're late and not looking down.",
    you: true,
  },
  {
    from: "Maya",
    time: "17:31",
    text: "Speaking of campus look at this ↓",
    you: false,
    tint: "#8b5a7a",
    image: true,
  },
];

const textChannels = [
  { name: "# General", badge: 3, blue: true },
  { name: "# Announcements", badge: 0, blue: false },
  { name: "# Off-Topic", badge: 0, active: true },
  { name: "# Study-Group", badge: 0, blue: false },
];

const voiceChannels = [
  { name: "Study-Room", avatars: ["S", "E", "A", "J"], extra: "+5" },
  { name: "Announcements", avatars: [] as string[] },
  { name: "Off-Topic", avatars: ["M"] },
  { name: "Study-Group", avatars: [] as string[] },
];

const ChatPhase = () => {
  const [visible, setVisible] = useState(0);
  const [sheet, setSheet] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    chatMessages.forEach((_, i) => {
      timers.push(window.setTimeout(() => setVisible(i + 1), 280 + i * 320));
    });
    timers.push(window.setTimeout(() => setSheet(true), 280 + chatMessages.length * 320 + 500));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="chat"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 flex items-center gap-2 mb-2 shrink-0">
        <ArrowLeft size={16} className="text-white/55 shrink-0" strokeWidth={2.2} />
        <button
          type="button"
          className="flex-1 min-w-0 text-center"
          onClick={() => setSheet(true)}
        >
          <div className="inline-flex items-center gap-1 justify-center">
            <p className="text-[13px] font-semibold text-white"># Off-Topic</p>
            <ChevronDown size={12} className="text-white/40" />
          </div>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
            <p className="text-[10px] text-white/40 tabular-nums">1,219</p>
          </div>
        </button>
        <User size={15} className="text-white/40 shrink-0" />
      </div>

      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-14 flex flex-col gap-2">
        {chatMessages.map((m, i) => {
          if (visible <= i) return null;
          return (
            <motion.div
              key={`${m.from}-${i}`}
              initial={{ opacity: 0, y: 12, x: m.you ? 20 : -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.35, ease }}
              className={`flex ${m.you ? "justify-end" : "justify-start"} gap-1.5`}
            >
              {!m.you && (
                <Avatar letter={m.from[0]} tint={m.tint || "#555"} size={22} className="mt-1" />
              )}
              <div className={`max-w-[78%] flex flex-col ${m.you ? "items-end" : "items-start"}`}>
                {!m.you && (
                  <p className="text-[9px] text-white/35 mb-0.5 px-1">
                    {m.from} · {m.time}
                  </p>
                )}
                <div
                  className={`rounded-2xl px-2.5 py-1.5 text-[11px] leading-snug ${
                    m.you
                      ? "rounded-br-md text-white"
                      : "rounded-bl-md bg-[#1c1c1e] text-white/85 border border-white/[0.04]"
                  }`}
                  style={m.you ? { background: BLUE } : undefined}
                >
                  {m.text}
                </div>
                {m.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-1.5 w-[150px] rounded-xl overflow-hidden border border-white/[0.06]"
                  >
                    <img src={harvardHall} alt="" className="w-full h-[88px] object-cover" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-5 inset-x-3 z-20 flex items-center gap-1.5">
        <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/40">
          <Plus size={14} />
        </span>
        <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <p className="flex-1 text-[11px] text-white/30">Text Here</p>
          <Smile size={13} className="text-white/30" />
        </div>
        <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/40">
          <Mic size={13} />
        </span>
      </div>

      <AnimatePresence>
        {sheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-40 bg-black/55"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-x-0 bottom-0 top-8 z-50 rounded-t-[1.35rem] bg-[#121214] border border-white/[0.06] border-b-0 flex flex-col overflow-hidden"
            >
              <div className="px-4 pt-3.5 pb-2 flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: BLUE }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                <p className="text-[13px] font-semibold text-white flex-1 truncate">Harvard University</p>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
                  <span className="text-[10px] text-white/45 tabular-nums">4,763</span>
                </span>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-3 [scrollbar-width:none]">
                <p className="text-[10px] text-white/35 uppercase tracking-wide mt-2 mb-1.5">Text Channels</p>
                <div className="flex flex-col gap-0.5 mb-3">
                  {textChannels.map((ch, i) => (
                    <motion.div
                      key={ch.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.07 }}
                      className={`rounded-xl px-2.5 py-2 flex items-center gap-2 ${
                        ch.active ? "bg-white/[0.08]" : ""
                      }`}
                    >
                      <p className={`text-[12px] flex-1 ${ch.active ? "text-white font-medium" : "text-white/55"}`}>
                        {ch.name}
                      </p>
                      {ch.badge > 0 && (
                        <span
                          className="min-w-[16px] h-4 rounded-full px-1 text-[9px] font-bold text-white flex items-center justify-center"
                          style={{ background: BLUE }}
                        >
                          {ch.badge}
                        </span>
                      )}
                      {ch.badge === 0 && !ch.active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                      )}
                    </motion.div>
                  ))}
                </div>

                <p className="text-[10px] text-white/35 uppercase tracking-wide mb-1.5">Voice Channels</p>
                <div className="flex flex-col gap-0.5">
                  {voiceChannels.map((ch, i) => (
                    <motion.div
                      key={ch.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="rounded-xl px-2.5 py-2 flex items-center gap-2"
                    >
                      <Volume2 size={13} style={{ color: BLUE }} className="shrink-0" />
                      <p className="text-[12px] text-white/70 flex-1">{ch.name}</p>
                      {ch.avatars.length > 0 && (
                        <div className="flex items-center -space-x-1.5">
                          {ch.avatars.map((a, j) => (
                            <Avatar
                              key={a + j}
                              letter={a}
                              tint={["#4a6fa5", "#8b5a7a", "#2d8a6e", "#b07a4a"][j % 4]}
                              size={18}
                              className="border border-[#121214]"
                            />
                          ))}
                          {ch.extra && (
                            <span className="text-[9px] text-white/40 pl-1.5">{ch.extra}</span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="px-4 pb-4 flex justify-end">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-1.5 text-[10px] text-white/50">
                  <Settings size={11} />
                  Settings
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── 3. Voice room ─── */

const participants = [
  { name: "Sophia Carter", letter: "S", tint: "#4a6fa5" },
  { name: "Ethan Miller", letter: "E", tint: "#6b5b95" },
  { name: "Alyssa Johnson", letter: "A", tint: "#8b5a7a" },
  { name: "Emily Brooks", letter: "E", tint: "#2d8a6e", speaking: true },
  { name: "Alex Morgan", letter: "A", tint: "#b07a4a" },
  { name: "Jamie Collins", letter: "J", tint: "#3d7a9a" },
  { name: "Chris Parker", letter: "C", tint: "#5a6b5a" },
  { name: "Maya Reed", letter: "M", tint: "#9a5a6a" },
  { name: "Ryan Scott", letter: "R", tint: "#5a5a8a" },
];

const VoicePhase = () => {
  const [step, setStep] = useState(0);
  // 0 join card, 1 pip, 2 grid, 3 menu

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 1600),
      window.setTimeout(() => setStep(2), 3400),
      window.setTimeout(() => setStep(3), 5600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="voice"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="join"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex flex-col h-full"
          >
            <div className="px-3.5 flex items-center gap-2 mb-3">
              <ArrowLeft size={16} className="text-white/55" strokeWidth={2.2} />
              <p className="flex-1 text-center text-[13px] font-semibold text-white"># Off-Topic</p>
              <User size={15} className="text-white/40" />
            </div>
            <div className="px-3.5 flex-1">
              <p className="text-[10px] text-white/35 uppercase tracking-wide mb-1.5">Text Channels</p>
              {["# General", "# Announcements", "# Off-Topic"].map((ch) => (
                <div key={ch} className="rounded-xl px-2.5 py-2 text-[12px] text-white/50">
                  {ch}
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.45, ease }}
                className="mt-4 rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 size={14} style={{ color: BLUE }} />
                  <p className="text-[13px] font-semibold text-white">Study-Room</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {participants.slice(0, 8).map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="shrink-0"
                    >
                      <Avatar letter={p.letter} tint={p.tint} size={32} />
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  type="button"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(47,107,255,0)",
                      "0 0 0 7px rgba(47,107,255,0.2)",
                      "0 0 0 0 rgba(47,107,255,0)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-full rounded-full py-3 text-[12px] font-semibold text-white"
                  style={{ background: BLUE }}
                >
                  Join Voice
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="pip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full relative"
          >
            <div className="px-3.5 flex items-center gap-2 mb-2">
              <ArrowLeft size={16} className="text-white/55" strokeWidth={2.2} />
              <p className="flex-1 text-center text-[13px] font-semibold text-white"># Off-Topic</p>
              <User size={15} className="text-white/40" />
            </div>

            <motion.div
              layoutId="voice-pip"
              className="absolute top-12 right-3 z-20 rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/50 p-2 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.7)]"
            >
              <div className="grid grid-cols-3 gap-1">
                {participants.slice(0, 6).map((p) => (
                  <Avatar key={p.name} letter={p.letter} tint={p.tint} size={26} />
                ))}
              </div>
              <p className="text-[8px] text-white/40 text-center mt-1">Study-Room</p>
            </motion.div>

            <div className="px-3 flex-1 flex flex-col gap-2 pt-1 pb-14 overflow-hidden">
              {[
                { from: "Diana", text: "Hello Guys!", you: false },
                { from: "Maya", text: "Campus sidewalks are dangerous.", you: false },
                { from: "you", text: "same thing happened to me", you: true },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className={`flex ${m.you ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`rounded-2xl px-2.5 py-1.5 text-[11px] max-w-[75%] ${
                      m.you ? "text-white rounded-br-md" : "bg-[#1c1c1e] text-white/80 rounded-bl-md"
                    }`}
                    style={m.you ? { background: BLUE } : undefined}
                  >
                    {m.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-5 inset-x-3 flex items-center gap-1.5">
              <span className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/40">
                <Plus size={14} />
              </span>
              <div className="flex-1 rounded-full bg-[#1c1c1e] px-3 py-2 text-[11px] text-white/30">
                Text Here
              </div>
              <span className="w-8 h-8 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/40">
                <Mic size={13} />
              </span>
            </div>
          </motion.div>
        )}

        {(step === 2 || step === 3) && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col h-full"
          >
            <div className="px-3.5 flex items-center gap-2 mb-2">
              <Volume2 size={14} style={{ color: BLUE }} />
              <p className="flex-1 text-[13px] font-semibold text-white">Study-Room</p>
              <MoreHorizontal size={15} className="text-white/40" />
            </div>

            <div className="flex-1 px-2.5 grid grid-cols-3 gap-1.5 content-start pb-16 overflow-hidden">
              {participants.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 14, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.35, ease }}
                  className="relative rounded-xl overflow-hidden aspect-[3/4] flex flex-col"
                  style={{
                    background: `linear-gradient(160deg, ${p.tint}55, #1a1a1c)`,
                    boxShadow: p.speaking
                      ? `0 0 0 1.5px ${BLUE}, 0 0 12px -2px rgba(47,107,255,0.45)`
                      : "0 0 0 1px rgba(58,58,60,0.45)",
                  }}
                >
                  <div className="flex-1 flex items-center justify-center">
                    <Avatar letter={p.letter} tint={p.tint} size={36} />
                  </div>
                  <div className="px-1.5 pb-1.5 flex items-center gap-0.5">
                    <p className="text-[8px] text-white/80 truncate flex-1 leading-tight">{p.name.split(" ")[0]}</p>
                    {p.speaking && (
                      <motion.span
                        animate={{ opacity: [0.45, 1, 0.45], scaleY: [0.7, 1.1, 0.7] }}
                        transition={{ duration: 0.9, repeat: Infinity }}
                        className="w-1 h-2.5 rounded-full shrink-0"
                        style={{ background: BLUE }}
                      />
                    )}
                  </div>

                  {step === 3 && p.name === "Ethan Miller" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="absolute inset-x-1 top-1 z-10 rounded-lg bg-[#1c1c1e]/95 border border-[#3a3a3c]/60 overflow-hidden shadow-lg"
                    >
                      {["Follow", "Mute", "Kick", "Block"].map((action) => (
                        <p
                          key={action}
                          className={`px-2 py-1.5 text-[9px] border-b border-white/[0.04] last:border-0 ${
                            action === "Kick" || action === "Block" ? "text-red-400" : "text-white/80"
                          }`}
                        >
                          {action}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-5 inset-x-4 z-20">
              <div className="rounded-full bg-[#1c1c1e]/95 border border-white/[0.06] px-3 py-2 flex items-center justify-between">
                <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50">
                  <Share2 size={14} />
                </span>
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                  style={{ background: RED }}
                >
                  <MicOff size={14} />
                </span>
                <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50">
                  <Video size={14} />
                </span>
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                  style={{ background: RED }}
                >
                  <PhoneOff size={14} />
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── main scene ─── */

const CrowdFeelScene = ({ className = "" }: { className?: string }) => {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const phase = phases[phaseIndex];

  useEffect(() => {
    const id = window.setTimeout(() => {
      setPhaseIndex((i) => (i + 1) % phases.length);
    }, PHASE_HOLD_MS[phase]);
    return () => clearTimeout(id);
  }, [phase, phaseIndex]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1}>
        <div className="absolute top-11 right-4 z-30 flex gap-1">
          {phases.map((p, i) => (
            <motion.span
              key={p}
              animate={{
                width: i === phaseIndex ? 14 : 4,
                backgroundColor: i === phaseIndex ? BLUE : "rgba(255,255,255,0.18)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          {phase === "discover" && <DiscoverPhase key="discover" />}
          {phase === "chat" && <ChatPhase key="chat" />}
          {phase === "voice" && <VoicePhase key="voice" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {phaseLabel[phase]}
      </p>
    </div>
  );
};

export default CrowdFeelScene;
