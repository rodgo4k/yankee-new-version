import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Link2,
  Mic,
  MoreVertical,
  Search,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import liveThread from "@/assets/live-thread.png";
import filmNight from "@/assets/film-night.png";
import tripPhotos from "@/assets/trip-photos.png";
import heroParty from "@/assets/hero-party.jpg";
import squadPhotos from "@/assets/squad-photos.png";
import studentsHero from "@/assets/students-hero.jpg";
import harvardHall from "@/assets/harvard-hall.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const RED = "#8b2e2e";

type Phase = "chats" | "profile" | "discover" | "voice";

const phases: Phase[] = ["chats", "profile", "discover", "voice"];
const PHASE_HOLD_MS: Record<Phase, number> = {
  chats: 6200,
  profile: 5800,
  discover: 5600,
  voice: 5600,
};

const phaseLabel: Record<Phase, string> = {
  chats: "voice reply",
  profile: "moderate posts",
  discover: "explore crowds",
  voice: "join voice",
};

const Avatar = ({
  letter,
  tint,
  size = 40,
  online = false,
}: {
  letter: string;
  tint: string;
  size?: number;
  online?: boolean;
}) => (
  <span
    className="relative inline-flex shrink-0 items-center justify-center rounded-full text-white/90 font-medium"
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
    {online && (
      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#34c759] border-2 border-black" />
    )}
  </span>
);

const SheetHandle = () => (
  <div className="flex justify-center pt-2 pb-1">
    <span className="w-9 h-1 rounded-full bg-white/20" />
  </div>
);

/* ─── Chats + voice reply ─── */

const chatRows = [
  {
    name: "Maya Reed",
    preview: "Yo, bestie, when are we hanging out?? We…",
    tint: "#8b5a7a",
    online: true,
    count: "+4",
  },
  {
    name: "Chris Parker",
    preview: "Sent you a post",
    tint: "#4a6fa5",
    online: true,
    count: "+2",
  },
  {
    name: "Ryan Scott",
    preview: "OMG STOP HAHA Literally jaw on the floor.",
    tint: "#2d8a6e",
    online: false,
    count: "",
  },
  {
    name: "Tyler Shaw",
    preview: "Tell me we weren't just talking about this??",
    tint: "#6b5b95",
    online: true,
    count: "+1",
  },
  {
    name: "Jordan Lee",
    preview: "Sent you a post",
    tint: "#b07a4a",
    online: false,
    count: "",
    link: true,
  },
  {
    name: "Sam Brooks",
    preview: "I saw this and it instantly made me think of you.",
    tint: "#3d7a9a",
    online: true,
    count: "",
  },
  {
    name: "Avery Quinn",
    preview: "Pls explain why this made me cackle at 2AM",
    tint: "#9a5a6a",
    online: false,
    count: "+3",
  },
];

const ChatsPhase = () => {
  const [rows, setRows] = useState(0);
  const [sheet, setSheet] = useState(false);
  const [sendPulse, setSendPulse] = useState(false);
  const [micOn, setMicOn] = useState(false);

  useEffect(() => {
    const timers = [
      ...chatRows.map((_, i) => window.setTimeout(() => setRows(i + 1), 200 + i * 180)),
      window.setTimeout(() => setMicOn(true), 900),
      window.setTimeout(() => setSheet(true), 2200),
      window.setTimeout(() => setSendPulse(true), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="chats"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 flex items-center gap-2 mb-2.5 shrink-0">
        <ArrowLeft size={16} className="text-white/55 shrink-0" strokeWidth={2.2} />
        <div className="flex-1 flex justify-center">
          <div className="inline-flex rounded-full bg-[#1c1c1e] border border-white/[0.06] p-0.5">
            {["Chats", "Request", "Spin"].map((tab, i) => (
              <span
                key={tab}
                className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                  i === 0 ? "bg-white text-black" : "text-white/50"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <span className="w-4 shrink-0" />
      </div>

      <div className="px-3.5 mb-2.5 shrink-0">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/30" />
          <p className="text-[12px] text-white/30">Search peoples</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-16 flex flex-col gap-0.5">
        {chatRows.map((r, i) => {
          if (rows <= i) return null;
          return (
            <motion.div
              key={r.name + i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease }}
              className="flex items-center gap-2.5 py-2 border-b border-white/[0.04]"
            >
              <Avatar letter={r.name[0]} tint={r.tint} size={38} online={r.online} />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-white truncate">{r.name}</p>
                <p className="text-[11px] text-white/40 truncate flex items-center gap-1">
                  {r.link && <Link2 size={10} className="shrink-0 text-white/30" />}
                  {r.preview}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {r.count && <span className="text-[10px] text-white/35">{r.count}</span>}
                <span className="w-2 h-2 rounded-full" style={{ background: BLUE }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        animate={
          micOn
            ? {
                boxShadow: [
                  "0 0 0 0 rgba(47,107,255,0)",
                  "0 0 0 10px rgba(47,107,255,0.2)",
                  "0 0 0 0 rgba(47,107,255,0)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-[5.5rem] right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${BLUE}, #1a3a8a)`,
          border: "2px solid rgba(255,255,255,0.35)",
        }}
      >
        <Mic size={18} className="text-white" />
      </motion.div>

      <AnimatePresence>
        {sheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-black/50"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-x-0 bottom-0 z-40 rounded-t-[1.4rem] bg-[#161618] border border-white/[0.06] border-b-0 px-4 pb-5"
            >
              <SheetHandle />
              <p className="mt-2 text-center text-[15px] font-semibold text-white">Reply to Chris?</p>
              <p className="mt-1 text-center text-[11px] text-white/40">
                Send a 0:08 voice reply to Chris Parker.
              </p>
              <motion.button
                type="button"
                animate={
                  sendPulse
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(47,107,255,0)",
                          "0 0 0 7px rgba(47,107,255,0.22)",
                          "0 0 0 0 rgba(47,107,255,0)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1.4, repeat: Infinity }}
                className="mt-4 w-full rounded-full py-3 text-[13px] font-semibold text-white"
                style={{ background: BLUE }}
              >
                Send Reply
              </motion.button>
              <button
                type="button"
                className="mt-2.5 w-full rounded-full py-3 text-[13px] font-semibold text-white border border-white/15 bg-transparent"
              >
                Cancel
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Profile + delete post ─── */

const gridImgs = [
  studentsHero,
  filmNight,
  cafeFriends,
  tripPhotos,
  hillsSunset,
  heroParty,
  squadPhotos,
  harvardHall,
  liveThread,
];

const ProfilePhase = () => {
  const [sheet, setSheet] = useState(false);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setHighlight(true), 700),
      window.setTimeout(() => setSheet(true), 1600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 flex items-center gap-2 mb-2 shrink-0 relative z-10">
        <ArrowLeft size={16} className="text-white/55" strokeWidth={2.2} />
        <p className="flex-1 text-center text-[13px] font-semibold text-white">@chris_parker</p>
        <MoreVertical size={15} className="text-white/40" />
      </div>

      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div className="grid grid-cols-3 gap-px content-start">
          {gridImgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                outline:
                  highlight && i === 4 ? `1.5px solid ${BLUE}` : "1.5px solid transparent",
                outlineOffset: "-1.5px",
              }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="relative aspect-square overflow-hidden bg-[#1c1c1e] z-[1]"
              style={{ zIndex: highlight && i === 4 ? 2 : 1 }}
            >
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="absolute top-2.5 left-2 right-2 z-10 flex items-center gap-1.5 pointer-events-none">
          <span className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-[10px] text-white/85 font-medium border border-white/10 overflow-hidden">
            +198
          </span>
          <Avatar letter="C" tint="#4a6fa5" size={40} />
          <span className="rounded-full bg-black/50 backdrop-blur-md px-2.5 py-1.5 text-[10px] text-white/85 font-medium border border-white/10">
            237k
          </span>
          <span
            className="ml-auto rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm"
            style={{ background: BLUE }}
          >
            Edit
          </span>
        </div>
      </div>

      <AnimatePresence>
        {sheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-30 bg-black/55"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-x-0 bottom-0 z-40 rounded-t-[1.4rem] bg-[#161618] border border-[#3a3a3c]/50 border-b-0 px-4 pb-5"
            >
              <SheetHandle />
              <p className="mt-2 text-center text-[15px] font-semibold text-white">Delete this post?</p>
              <p className="mt-1.5 text-center text-[11px] text-white/40 leading-relaxed px-1">
                &ldquo;Bridge run Sunday 7am&rdquo; · 1.2k hearts from Maya, Ryan, Tyler +18 others
              </p>
              <motion.button
                type="button"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(139,46,46,0)",
                    "0 0 0 6px rgba(139,46,46,0.25)",
                    "0 0 0 0 rgba(139,46,46,0)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                className="mt-4 w-full rounded-2xl py-3.5 text-[13px] font-semibold text-white"
                style={{ background: RED }}
              >
                Delete Post
              </motion.button>
              <button
                type="button"
                className="mt-2.5 w-full rounded-2xl py-3.5 text-[13px] font-semibold text-white border border-white/12 bg-[#1c1c1e]"
              >
                Cancel
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Discover (from previous prints) ─── */

const DiscoverMini = () => {
  const [privateOn, setPrivateOn] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setPrivateOn(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      key="discover"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full"
    >
      <div className="px-3.5 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/30" />
          <p className="text-[12px] text-white/30">Search crowds</p>
        </div>
      </div>
      <div className="flex-1 mx-3.5 mb-3 relative rounded-[1.35rem] overflow-hidden">
        <img src={hillsSunset} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="rounded-full bg-black/45 backdrop-blur-md px-2.5 py-1 text-[11px] text-white font-medium">
            Sunrise Runners
          </span>
          <span className="rounded-full bg-black/45 backdrop-blur-md px-2 py-1 text-[10px] text-[#8ec5ff]">
            465
          </span>
        </div>
        <AnimatePresence>
          {privateOn && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-12 inset-x-3 rounded-xl bg-[#5c1a1a]/92 border border-red-400/20 px-2.5 py-2 text-[10px] text-white/85 leading-snug"
            >
              This crowd is private, but your access has been requested.
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute bottom-4 inset-x-0 flex justify-center">
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(47,107,255,0)",
                "0 0 0 8px rgba(47,107,255,0.18)",
                "0 0 0 0 rgba(47,107,255,0)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="rounded-full border border-white/25 bg-black/35 backdrop-blur-xl px-7 py-2 text-[13px] font-semibold"
            style={{ color: BLUE }}
          >
            Join
          </motion.span>
        </div>
      </div>
      <div className="px-3.5 pb-2 flex flex-wrap gap-1.5 justify-center">
        {["#running", "#fitness", "#morningvibes"].map((t) => (
          <span
            key={t}
            className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-2.5 py-1 text-[10px] text-white/50"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Voice join mini ─── */

const voicePeople = [
  { l: "S", t: "#4a6fa5" },
  { l: "E", t: "#6b5b95" },
  { l: "A", t: "#8b5a7a" },
  { l: "M", t: "#2d8a6e" },
  { l: "J", t: "#b07a4a" },
  { l: "C", t: "#3d7a9a" },
];

const VoiceMini = () => {
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setJoined(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      key="voice"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <ArrowLeft size={16} className="text-white/55" strokeWidth={2.2} />
        <p className="flex-1 text-center text-[13px] font-semibold text-white"># Off-Topic</p>
        <span className="w-4" />
      </div>

      <AnimatePresence mode="wait">
        {!joined ? (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5"
          >
            <p className="text-[13px] font-semibold text-white mb-3">Study-Room</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {voicePeople.map((p, i) => (
                <motion.div
                  key={p.l + i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, type: "spring" }}
                  className="shrink-0"
                >
                  <Avatar letter={p.l} tint={p.t} size={30} />
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
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-3 gap-1.5 flex-1 content-start pt-2"
          >
            {voicePeople.concat(voicePeople.slice(0, 3)).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl aspect-[3/4] flex flex-col items-center justify-end pb-2"
                style={{
                  background: `linear-gradient(160deg, ${p.t}55, #1a1a1c)`,
                  boxShadow:
                    i === 3
                      ? `0 0 0 1.5px ${BLUE}`
                      : "0 0 0 1px rgba(58,58,60,0.4)",
                }}
              >
                <Avatar letter={p.l} tint={p.t} size={32} />
                <p className="mt-1.5 text-[8px] text-white/70">
                  {["Sophia", "Ethan", "Alyssa", "Emily", "Alex", "Jamie", "Chris", "Maya", "Ryan"][i]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── main ─── */

const CrowdIdeaScene = ({ className = "" }: { className?: string }) => {
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
      <AiPhoneShell className="!w-full !max-w-none" rotate={1.5}>
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
          {phase === "chats" && <ChatsPhase key="chats" />}
          {phase === "profile" && <ProfilePhase key="profile" />}
          {phase === "discover" && <DiscoverMini key="discover" />}
          {phase === "voice" && <VoiceMini key="voice" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {phaseLabel[phase]}
      </p>
    </div>
  );
};

export default CrowdIdeaScene;
