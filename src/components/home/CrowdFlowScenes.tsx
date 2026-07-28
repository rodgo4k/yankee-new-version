import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Compass,
  Mic,
  MicOff,
  PhoneOff,
  Plus,
  Search,
  SlidersHorizontal,
  Volume2,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import YankeePhoneNav from "@/components/home/YankeePhoneNav";
import { faceByGender, uniqueFacesFor } from "@/lib/crowdFaces";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import liveThread from "@/assets/live-thread.png";
import harvardHall from "@/assets/harvard-hall.png";
import stanfordHall from "@/assets/stanford-hall.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const Avatar = ({
  letter,
  tint,
  size = 32,
  ring = false,
  src,
}: {
  letter: string;
  tint: string;
  size?: number;
  ring?: boolean;
  src?: string;
}) => (
  <span
    className="relative inline-flex shrink-0 items-center justify-center rounded-full text-white/90 font-medium overflow-hidden"
    style={{
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      background: tint,
      fontSize: size * 0.34,
      boxShadow: ring ? "0 0 0 2px #a855f7" : undefined,
    }}
  >
    {src ? <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" /> : letter}
  </span>
);

const HomePhase = () => {
  const [ready, setReady] = useState(0);
  const cards = [
    { name: "Sunrise Runners", count: "1,219", img: hillsSunset, badge: null as string | null },
    { name: "Late Night Producers", count: "5,879", img: liveThread, badge: "3" },
    { name: "Harvard University", count: "4,763", img: harvardHall, badge: null },
    { name: "Stanford University", count: "3,102", img: stanfordHall, badge: null },
    { name: "Coffee Club", count: "2,441", img: cafeFriends, badge: "+9" },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setReady(1), 300),
      window.setTimeout(() => setReady(2), 700),
      window.setTimeout(() => setReady(3), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 shrink-0 mb-2.5">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35" />
          <p className="flex-1 text-[12px] text-white/35">Search</p>
          <SlidersHorizontal size={13} className="text-white/35" />
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-16">
        <p className="text-[13px] font-semibold text-white mb-2">Crowds Connected</p>
        <div className="grid grid-cols-2 gap-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: ready >= 1 ? 1 : 0, y: ready >= 1 ? 0 : 12 }}
              transition={{ delay: i * 0.06 }}
              className="relative aspect-[4/5] rounded-[1rem] overflow-hidden"
            >
              <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              {c.badge && (
                <span
                  className="absolute top-1.5 left-1.5 min-w-[18px] h-[18px] rounded-full text-[9px] font-bold text-white flex items-center justify-center px-1"
                  style={{ background: BLUE }}
                >
                  {c.badge}
                </span>
              )}
              <span className="absolute top-1.5 right-1.5 rounded-full bg-black/55 px-1.5 py-0.5 text-[9px] text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
                {c.count}
              </span>
              <div className="absolute bottom-0 inset-x-0 p-2 flex items-center gap-1">
                <p className="text-[10px] font-semibold text-white truncate flex-1">{c.name}</p>
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: BLUE }}
                >
                  <Check size={9} className="text-white" strokeWidth={3} />
                </span>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: ready >= 2 ? 1 : 0 }}
            className="aspect-[4/5] rounded-[1rem] bg-[#1c1c1e] border border-white/[0.06] flex flex-col items-center justify-center gap-2"
          >
            <Compass size={22} style={{ color: BLUE }} />
            <p className="text-[10px] text-white/55 text-center px-2 leading-snug">Explore new Crowds</p>
          </motion.div>
        </div>

        {ready >= 3 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
            <p className="text-[13px] font-semibold text-white mb-2">My Crowds</p>
            <div className="w-[48%] aspect-[4/5] rounded-[1rem] bg-[#1c1c1e] border border-white/[0.06] flex flex-col items-center justify-center gap-2">
              <Plus size={22} style={{ color: BLUE }} />
              <p className="text-[10px] text-white/55 text-center px-2">Create Your Crowd</p>
            </div>
          </motion.div>
        )}
      </div>
      <YankeePhoneNav active="crowd" />
    </motion.div>
  );
};

const ExplorePhase = () => {
  const [slide, setSlide] = useState(0);
  const [privateOn, setPrivateOn] = useState(false);
  const crowds = [
    {
      name: "Sunrise Runners",
      count: "465,870",
      img: hillsSunset,
      tags: ["#running", "#fitness", "#morningvibes"],
    },
    {
      name: "Late Night Producers",
      count: "5,768",
      img: liveThread,
      tags: ["#music", "#producers", "#latenight"],
    },
    {
      name: "Coffee Club",
      count: "5,768",
      img: cafeFriends,
      tags: ["#coffee", "#club", "#coffeelife"],
    },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPrivateOn(true), 1400),
      window.setTimeout(() => {
        setPrivateOn(false);
        setSlide(1);
      }, 3000),
      window.setTimeout(() => setSlide(2), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const c = crowds[slide];

  return (
    <motion.div
      key="explore"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 shrink-0 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35" />
          <p className="flex-1 text-[12px] text-white/35">Search</p>
          <SlidersHorizontal size={13} className="text-white/35" />
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col px-3.5 pb-16">
        <div className="relative flex-1 min-h-0 rounded-[1.35rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              className="absolute inset-0"
            >
              <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/35" />
              <div className="absolute top-3 inset-x-3 flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <p className="text-[14px] font-semibold text-white truncate">{c.name}</p>
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: BLUE }}
                  >
                    <Check size={9} className="text-white" strokeWidth={3} />
                  </span>
                </div>
                <p className="text-[13px] font-semibold tabular-nums" style={{ color: BLUE }}>
                  {c.count}
                </p>
              </div>
              <AnimatePresence>
                {privateOn && slide === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-12 inset-x-3 rounded-xl bg-[#8b2e2e] px-3 py-2 text-[10px] text-white/95 leading-snug"
                  >
                    This crowd is private, but your access has been requested.
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <span className="rounded-full bg-black/55 border border-white/15 px-8 py-2 text-[13px] font-semibold" style={{ color: BLUE }}>
                  Join
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5 justify-center">
          {c.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/70">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-1.5">
          {crowds.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === slide ? 14 : 4,
                background: i === slide ? BLUE : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      </div>
      <YankeePhoneNav active="crowd" />
    </motion.div>
  );
};

type InsideStage = "chat" | "channels" | "join" | "pip" | "grid";

const voiceNames = [
  "Sophia Carter",
  "Ethan Miller",
  "Emily Brooks",
  "Alex Morgan",
  "Jamie Collins",
  "Chris Parker",
] as const;
const voiceFaces = uniqueFacesFor([...voiceNames]);
const voicePeople = [
  { name: "Sophia Carter", letter: "S", tint: "#8b5a7a", src: voiceFaces[0] },
  { name: "Ethan Miller", letter: "E", tint: "#4a6fa5", src: voiceFaces[1] },
  { name: "Emily Brooks", letter: "E", tint: "#2d8a6e", speaking: true, src: voiceFaces[2] },
  { name: "Alex Morgan", letter: "A", tint: "#6b5b95", src: voiceFaces[3] },
  { name: "Jamie Collins", letter: "J", tint: "#b07a4a", src: voiceFaces[4] },
  { name: "Chris Parker", letter: "C", tint: "#3d7a9a", src: voiceFaces[5] },
];

const InsidePhase = () => {
  const [stage, setStage] = useState<InsideStage>("chat");
  const [visible, setVisible] = useState(0);
  const chatNames = ["Diana", "Maya"] as const;
  const chatFaces = uniqueFacesFor([...chatNames]);

  const messages = [
    { from: "Diana", time: "17:30", text: "Hello Guys!", you: false, tint: "#6b5b95", src: chatFaces[0] },
    { from: "Diana", time: "17:30", text: "I was walking to class.", you: false, tint: "#6b5b95", src: chatFaces[0] },
    { from: "you", time: "17:31", text: "same thing happened to me last week", you: true },
    {
      from: "Maya",
      time: "17:31",
      text: "Campus sidewalks are dangerous, honestly.",
      you: false,
      tint: "#8b5a7a",
      src: chatFaces[1],
    },
  ];

  const textChannels = [
    { name: "# General", badge: 3, active: false },
    { name: "# Announcements", badge: 0, active: false },
    { name: "# Off-Topic", badge: 0, active: true },
    { name: "# Study-Group", badge: 0, active: false },
  ];

  const voiceChannels = [
    { name: "Study-Room", avatars: ["f", "m", "f", "m"] as ("f" | "m")[], extra: "+5" },
    { name: "Announcements", avatars: [] as ("f" | "m")[] },
    { name: "Off-Topic", avatars: ["f"] as ("f" | "m")[] },
  ];

  useEffect(() => {
    const timers: number[] = [];
    messages.forEach((_, i) => {
      timers.push(window.setTimeout(() => setVisible(i + 1), 220 + i * 280));
    });
    const afterChat = 220 + messages.length * 280 + 500;
    timers.push(window.setTimeout(() => setStage("channels"), afterChat));
    timers.push(window.setTimeout(() => setStage("join"), afterChat + 2000));
    timers.push(window.setTimeout(() => setStage("pip"), afterChat + 3800));
    timers.push(window.setTimeout(() => setStage("grid"), afterChat + 5600));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="inside"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <AnimatePresence mode="wait">
        {(stage === "chat" || stage === "channels") && (
          <motion.div
            key="chat-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -12 }}
            className="relative flex flex-col h-full min-h-0"
          >
            <div className="px-3.5 flex items-center gap-2 mb-2 shrink-0">
              <span className="text-white/55 text-[16px] leading-none">‹</span>
              <div className="flex-1 min-w-0 text-center">
                <div className="inline-flex items-center gap-1 justify-center">
                  <p className="text-[13px] font-semibold text-white"># Off-Topic</p>
                  <span className="text-white/35 text-[10px]">▾</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
                  <p className="text-[10px] text-white/40 tabular-nums">1,219</p>
                </div>
              </div>
              <span className="w-4 h-4 rounded-full bg-white/15" />
            </div>

            <div className="flex-1 min-h-0 overflow-hidden px-3 pb-16 flex flex-col justify-end gap-2.5">
              {messages.map((m, i) => {
                if (visible <= i) return null;
                return (
                  <motion.div
                    key={`${m.from}-${i}`}
                    initial={{ opacity: 0, y: 12, x: m.you ? 16 : -16 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.32, ease }}
                    className={`flex ${m.you ? "justify-end" : "justify-start"} gap-1.5`}
                  >
                    {!m.you && (
                      <Avatar letter={m.from[0]} tint={m.tint || "#555"} size={24} src={m.src} />
                    )}
                    <div className={`max-w-[82%] flex flex-col ${m.you ? "items-end" : "items-start"}`}>
                      {!m.you && (
                        <p className="text-[9px] text-white/35 mb-0.5 px-1">
                          {m.from} · {m.time}
                        </p>
                      )}
                      <div
                        className={`rounded-2xl px-3 py-2 text-[12px] leading-snug ${
                          m.you
                            ? "rounded-br-md text-white"
                            : "rounded-bl-md bg-[#1c1c1e] text-white/85 border border-white/[0.04]"
                        }`}
                        style={m.you ? { background: BLUE } : undefined}
                      >
                        {m.text}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="absolute bottom-3 inset-x-3 z-20 flex items-center gap-1.5">
              <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/40">
                <Plus size={14} />
              </span>
              <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 text-[11px] text-white/30">
                Text Here
              </div>
              <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/40">
                <Mic size={13} />
              </span>
            </div>

            <AnimatePresence>
              {stage === "channels" && (
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
                    transition={{ duration: 0.4, ease }}
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
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.08 + i * 0.05 }}
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
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-[10px] text-white/35 uppercase tracking-wide mb-1.5">Voice Channels</p>
                      <div className="flex flex-col gap-0.5">
                        {voiceChannels.map((ch, i) => (
                          <motion.div
                            key={ch.name}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.28 + i * 0.06 }}
                            className={`rounded-xl px-2.5 py-2 flex items-center gap-2 ${
                              ch.name === "Study-Room" ? "bg-white/[0.06]" : ""
                            }`}
                          >
                            <Volume2 size={13} style={{ color: BLUE }} className="shrink-0" />
                            <p className="text-[12px] text-white/70 flex-1">{ch.name}</p>
                            {ch.avatars.length > 0 && (
                              <div className="flex items-center -space-x-1.5">
                                {ch.avatars.map((a, j) => (
                                  <Avatar
                                    key={`${ch.name}-${j}`}
                                    letter="U"
                                    tint={["#4a6fa5", "#8b5a7a", "#2d8a6e", "#b07a4a"][j % 4]}
                                    size={18}
                                    src={faceByGender(a, j)}
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
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {stage === "join" && (
          <motion.div
            key="join"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            className="flex flex-col h-full min-h-0 px-3.5"
          >
            <div className="flex items-center gap-2 mb-3 shrink-0">
              <span className="text-white/55 text-[16px] leading-none">‹</span>
              <p className="flex-1 text-center text-[13px] font-semibold text-white"># Off-Topic</p>
              <span className="w-4 h-4 rounded-full bg-white/15" />
            </div>
            <div className="opacity-40 pointer-events-none space-y-1 mb-3">
              {["# General", "# Announcements", "# Off-Topic"].map((ch) => (
                <div key={ch} className="rounded-xl bg-[#1c1c1e] px-2.5 py-2 text-[12px] text-white/50">
                  {ch}
                </div>
              ))}
            </div>
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease }}
              className="mt-auto mb-2 rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Volume2 size={14} style={{ color: BLUE }} />
                <p className="text-[13px] font-semibold text-white">Study-Room</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {voicePeople.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.12 + i * 0.05 }}
                  >
                    <Avatar letter={p.letter} tint={p.tint} size={32} src={p.src} />
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
          </motion.div>
        )}

        {stage === "pip" && (
          <motion.div
            key="pip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col h-full min-h-0"
          >
            <div className="px-3.5 flex items-center gap-2 mb-2 shrink-0">
              <span className="text-white/55 text-[16px] leading-none">‹</span>
              <p className="flex-1 text-center text-[13px] font-semibold text-white"># Off-Topic</p>
              <span className="w-4 h-4 rounded-full bg-white/15" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-12 right-3 z-20 w-[100px] rounded-xl bg-[#1c1c1e] border border-white/15 p-1.5 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-0.5 mb-1">
                {voicePeople.slice(0, 4).map((p) => (
                  <Avatar key={p.name} letter={p.letter} tint={p.tint} size={40} src={p.src} />
                ))}
              </div>
              <div className="flex items-center justify-between px-0.5">
                <span className="text-[8px] text-white/50">+2</span>
                <span className="w-5 h-5 rounded-full bg-[#ff453a] flex items-center justify-center">
                  <PhoneOff size={10} className="text-white" />
                </span>
              </div>
            </motion.div>

            <div className="flex-1 min-h-0 px-3 pb-16 flex flex-col justify-end gap-2.5 overflow-hidden">
              {messages.slice(0, 3).map((m, i) => (
                <div
                  key={`pip-${i}`}
                  className={`flex ${m.you ? "justify-end" : "justify-start"} gap-1.5`}
                >
                  {!m.you && (
                    <Avatar letter={m.from[0]} tint={m.tint || "#555"} size={24} src={m.src} />
                  )}
                  <div
                    className={`rounded-2xl px-3 py-2 text-[12px] leading-snug max-w-[78%] ${
                      m.you
                        ? "rounded-br-md text-white"
                        : "rounded-bl-md bg-[#1c1c1e] text-white/85"
                    }`}
                    style={m.you ? { background: BLUE } : undefined}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-3 inset-x-3 z-10 flex items-center gap-1.5">
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

        {stage === "grid" && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col h-full min-h-0"
          >
            <div className="flex items-center gap-2 px-3.5 mb-2 shrink-0">
              <Volume2 size={14} style={{ color: BLUE }} />
              <p className="flex-1 text-[13px] font-semibold text-white">Study-Room</p>
              <span className="text-white/40 text-[14px]">···</span>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2 flex-1 min-h-0 px-3 pb-2">
              {voicePeople.map((p) => (
                <div key={p.name} className="flex flex-col items-center justify-center gap-1.5 min-h-0">
                  <span
                    className="rounded-full overflow-hidden shrink-0"
                    style={{
                      boxShadow: p.speaking ? `0 0 0 2.5px ${BLUE}` : undefined,
                    }}
                  >
                    <Avatar letter={p.letter} tint={p.tint} size={58} src={p.src} />
                  </span>
                  <p className="text-[10px] text-white/65 truncate w-full text-center">
                    {p.name.split(" ")[0]}
                  </p>
                </div>
              ))}
            </div>
            <div className="shrink-0 mb-3 flex items-center justify-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70">
                <Volume2 size={16} />
              </span>
              <span className="w-11 h-11 rounded-full bg-[#ff453a]/25 flex items-center justify-center">
                <MicOff size={16} className="text-[#ff453a]" />
              </span>
              <span className="w-11 h-11 rounded-full bg-[#ff453a] flex items-center justify-center">
                <PhoneOff size={16} className="text-white" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type StepPhase = "home" | "explore" | "inside";
const stepPhases: StepPhase[] = ["home", "explore", "inside"];
const STEP_HOLD: Record<StepPhase, number> = { home: 5600, explore: 6200, inside: 11800 };
const stepLabels: Record<StepPhase, string> = {
  home: "01 · find a crowd",
  explore: "02 · peek & join",
  inside: "03 · open the room",
};

export const CrowdStepsScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = stepPhases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % stepPhases.length), STEP_HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1.5}>
        <AnimatePresence mode="wait">
          {phase === "home" && <HomePhase key="home" />}
          {phase === "explore" && <ExplorePhase key="explore" />}
          {phase === "inside" && <InsidePhase key="inside" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {stepLabels[phase]}
      </p>
    </div>
  );
};

export const CrowdInsideScene = ({ className = "" }: { className?: string }) => (
  <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
    <AiPhoneShell className="!w-full !max-w-none" rotate={1.5}>
      <InsidePhase />
    </AiPhoneShell>
    <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
      channels + voice
    </p>
  </div>
);
