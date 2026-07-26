import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Link2,
  Mic,
  MicOff,
  MoreVertical,
  PhoneOff,
  Search,
  Video,
  Volume2,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import YankeePhoneNav from "@/components/home/YankeePhoneNav";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import liveThread from "@/assets/live-thread.png";
import filmNight from "@/assets/film-night.png";
import tripPhotos from "@/assets/trip-photos.png";
import studentsHero from "@/assets/students-hero.jpg";
import squadPhotos from "@/assets/squad-photos.png";
import harvardHall from "@/assets/harvard-hall.png";
import studyHall from "@/assets/study-hall.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#8b2e2e";

type Phase = "chats" | "profile" | "explore" | "voice";

const phases: Phase[] = ["chats", "profile", "explore", "voice"];
const HOLD: Record<Phase, number> = {
  chats: 6200,
  profile: 5800,
  explore: 5600,
  voice: 6200,
};
const labels: Record<Phase, string> = {
  chats: "voice reply",
  profile: "moderate posts",
  explore: "explore crowds",
  voice: "join voice",
};

const Avatar = ({
  letter,
  tint,
  size = 40,
  online = false,
  src,
}: {
  letter: string;
  tint: string;
  size?: number;
  online?: boolean;
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
    }}
  >
    {src ? <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" /> : letter}
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

const chatRowNames = ["Maya Reed", "Chris Parker", "Leo Hart", "Jamie Collins", "Alex Morgan"] as const;
const chatRowFaces = uniqueFacesFor([...chatRowNames]);

const chatRows = [
  { name: "Maya Reed", preview: "Yo, when are we hanging out??", unread: "+4", tint: "#8b5a7a", online: true, src: chatRowFaces[0] },
  { name: "Chris Parker", preview: "Sent you a post", unread: "+2", tint: "#4a6fa5", online: true, src: chatRowFaces[1] },
  { name: "Leo Hart", preview: "OMG stop haha literally jaw on the floor", unread: "+2", tint: "#2d8a6e", online: false, src: chatRowFaces[2] },
  { name: "Jamie Collins", preview: "Tell me we weren't just talking about this??", unread: "+1", tint: "#6b5b95", online: false, src: chatRowFaces[3] },
  { name: "Alex Morgan", preview: "Sent you a post", unread: null as string | null, tint: "#b07a4a", online: true, src: chatRowFaces[4], link: true },
];

const ChatsPhase = () => {
  const [sheet, setSheet] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setSheet(true), 1600);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      key="chats"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full"
    >
      <div className="flex items-center gap-2 px-3.5 mb-2">
        <ArrowLeft size={16} className="text-white/50" />
        <div className="flex-1 flex justify-center">
          <div className="inline-flex rounded-full bg-[#1c1c1e] p-0.5 border border-white/[0.06]">
            <span className="rounded-full bg-white text-black px-3 py-1 text-[10px] font-semibold">Chats</span>
            <span className="rounded-full px-3 py-1 text-[10px] text-white/40">Request</span>
            <span className="rounded-full px-3 py-1 text-[10px] text-white/40">Spin</span>
          </div>
        </div>
      </div>

      <div className="px-3.5 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35" />
          <p className="text-[12px] text-white/35">Search peoples</p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3.5 pb-20 space-y-0.5">
        {chatRows.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2.5 py-2"
          >
            <Avatar letter={r.name[0]} tint={r.tint} size={40} online={r.online} src={r.src} />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-white truncate">{r.name}</p>
              <p className="text-[10px] text-white/40 truncate flex items-center gap-1">
                {r.link && <Link2 size={10} className="shrink-0" />}
                {r.preview}
              </p>
            </div>
            {r.unread && (
              <span
                className="rounded-full px-1.5 min-w-[20px] h-5 text-[9px] font-bold text-white flex items-center justify-center"
                style={{ background: BLUE }}
              >
                {r.unread}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.span
        animate={{ scale: sheet ? 1 : [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: sheet ? 0 : Infinity }}
        className="absolute bottom-[4.5rem] right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_0_3px_rgba(47,107,255,0.35)]"
        style={{ background: BLUE }}
      >
        <Mic size={18} className="text-white" />
      </motion.span>

      <AnimatePresence>
        {sheet && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease }}
            className="absolute inset-x-0 bottom-0 z-30 rounded-t-[1.5rem] bg-[#1c1c1e] border-t border-white/10 px-4 pb-6"
          >
            <SheetHandle />
            <p className="text-[15px] font-semibold text-white text-center mt-2">Reply to Chris?</p>
            <p className="text-[12px] text-white/45 text-center mt-1 mb-4">
              Send a 0:08 voice reply to Chris Parker.
            </p>
            <button
              type="button"
              className="w-full rounded-full py-3 text-[13px] font-semibold text-white mb-2"
              style={{ background: BLUE }}
            >
              Send Reply
            </button>
            <button
              type="button"
              className="w-full rounded-full py-3 text-[13px] font-semibold text-white border border-white/15"
            >
              Cancel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <YankeePhoneNav active="dm" />
    </motion.div>
  );
};

const gridImgs = [
  filmNight,
  hillsSunset,
  cafeFriends,
  tripPhotos,
  studentsHero,
  squadPhotos,
  liveThread,
  harvardHall,
  studyHall,
];

const ProfilePhase = () => {
  const [sheet, setSheet] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setSheet(true), 1400);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="flex items-center gap-2 px-3.5 mb-2 shrink-0">
        <ArrowLeft size={16} className="text-white/50" />
        <p className="flex-1 text-center text-[13px] font-semibold text-white">@chrisparker</p>
        <MoreVertical size={16} className="text-white/50" />
      </div>

      <div className="mx-3.5 mb-2 rounded-2xl bg-black/40 border border-white/10 px-3 py-2 flex items-center gap-2 shrink-0">
        <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/70">+198</span>
        <Avatar letter="C" tint="#4a6fa5" size={28} src={faceFor("Chris Parker")} />
        <span className="text-[10px] text-white/50">237k</span>
        <span className="ml-auto rounded-full px-3 py-1 text-[10px] font-semibold text-white" style={{ background: BLUE }}>
          Edit
        </span>
      </div>

      <div
        className={`grid grid-cols-3 grid-rows-3 gap-[2px] flex-1 min-h-0 w-full ${sheet ? "opacity-40" : ""}`}
      >
        {gridImgs.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.04 }}
            className="min-h-0 min-w-0 overflow-hidden bg-[#1c1c1e]"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {sheet && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease }}
            className="absolute inset-x-0 bottom-0 z-30 rounded-t-[1.5rem] bg-[#1c1c1e] border-t border-white/10 px-4 pb-6"
          >
            <SheetHandle />
            <p className="text-[15px] font-semibold text-white text-center mt-2">Delete this post?</p>
            <p className="text-[11px] text-white/45 text-center mt-1.5 mb-4 leading-snug">
              &quot;Bridge run Sunday 7am&quot; — 1.2k hearts from Maya, Chris, Leo + 18 others
            </p>
            <button
              type="button"
              className="w-full rounded-full py-3 text-[13px] font-semibold text-white mb-2"
              style={{ background: RED }}
            >
              Delete Post
            </button>
            <button
              type="button"
              className="w-full rounded-full py-3 text-[13px] font-semibold text-white bg-white/10"
            >
              Cancel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ExplorePhase = () => {
  const [slide, setSlide] = useState(0);
  const crowds = [
    { name: "Sunrise Runners", count: "465,870", img: hillsSunset, tags: ["#running", "#fitness", "#morningvibes"] },
    { name: "Late Night Producers", count: "5,768", img: liveThread, tags: ["#music", "#producers", "#latenight"] },
    { name: "Coffee Club", count: "5,768", img: cafeFriends, tags: ["#coffee", "#club", "#coffeelife"] },
  ];
  const c = crowds[slide];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setSlide(1), 2200),
      window.setTimeout(() => setSlide(2), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="explore"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full"
    >
      <div className="px-3.5 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35" />
          <p className="flex-1 text-[12px] text-white/35">Search</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 px-3.5 pb-16 flex flex-col">
        <div className="relative flex-1 rounded-[1.35rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="absolute inset-0"
            >
              <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
              <div className="absolute top-3 inset-x-3 flex justify-between items-start">
                <div className="flex items-center gap-1.5">
                  <p className="text-[14px] font-semibold text-white">{c.name}</p>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: BLUE }}>
                    <Check size={9} className="text-white" strokeWidth={3} />
                  </span>
                </div>
                <p className="text-[13px] font-semibold" style={{ color: BLUE }}>{c.count}</p>
              </div>
              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <span className="rounded-full bg-black/55 border border-white/15 px-8 py-2 text-[13px] font-semibold" style={{ color: BLUE }}>
                  Join
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
          {c.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/70">{t}</span>
          ))}
        </div>
      </div>
      <YankeePhoneNav active="crowd" />
    </motion.div>
  );
};

const VoicePhase = () => {
  const [step, setStep] = useState(0);
  const voiceNames = [
    "Sophia Carter",
    "Ethan Miller",
    "Emily Brooks",
    "Alex Morgan",
    "Jamie Collins",
    "Chris Parker",
  ];
  const voiceFaces = uniqueFacesFor(voiceNames);
  const people = [
    { name: "Sophia Carter", tint: "#8b5a7a", src: voiceFaces[0] },
    { name: "Ethan Miller", tint: "#4a6fa5", src: voiceFaces[1] },
    { name: "Emily Brooks", tint: "#2d8a6e", src: voiceFaces[2], speaking: true },
    { name: "Alex Morgan", tint: "#6b5b95", src: voiceFaces[3] },
    { name: "Jamie Collins", tint: "#b07a4a", src: voiceFaces[4] },
    { name: "Chris Parker", tint: "#3d7a9a", src: voiceFaces[5] },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 1600),
      window.setTimeout(() => setStep(2), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="voice"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full"
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="join"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full px-3.5"
          >
            <div className="opacity-40 pointer-events-none space-y-2 mb-3">
              {["# General", "# Announcements", "# Off-Topic", "# Study-Group"].map((ch) => (
                <div key={ch} className="rounded-xl bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/50">
                  {ch}
                </div>
              ))}
            </div>
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              className="mt-auto rounded-t-[1.35rem] bg-[#1c1c1e] border border-white/10 p-4 mb-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <ArrowLeft size={14} className="text-white/50" />
                <p className="text-[14px] font-semibold text-white">Study-Room</p>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {people.map((p) => (
                  <div key={p.name} className="flex flex-col items-center gap-1">
                    <Avatar letter={p.name[0]} tint={p.tint} size={40} src={p.src} />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="w-full rounded-full py-3 text-[13px] font-semibold text-white"
                style={{ background: BLUE }}
              >
                Join Voice
              </button>
            </motion.div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="pip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col h-full min-h-0"
          >
            <div className="flex items-center gap-2 px-3.5 mb-2 shrink-0">
              <ArrowLeft size={15} className="text-white/50" />
              <span className="flex-1 text-center rounded-full bg-[#1c1c1e] border border-white/10 px-3 py-1.5 text-[12px] font-semibold text-white">
                # Off-Topic <span className="inline-block w-1.5 h-1.5 rounded-full ml-1 align-middle" style={{ background: GREEN }} />{" "}
                <span className="text-white/55 font-medium">1,219</span>
              </span>
              <MoreVertical size={15} className="text-white/45" />
            </div>

            <div className="relative flex-1 min-h-0 flex flex-col justify-end gap-2.5 px-3 pb-14 overflow-hidden">
              <div className="flex gap-2 items-end">
                <Avatar letter="M" tint="#8b5a7a" size={28} src={faceFor("Maya Reed")} />
                <div className="rounded-2xl rounded-tl-md bg-[#1c1c1e] px-3 py-2 text-[12px] leading-snug text-white/85 max-w-[78%]">
                  campus sidewalks are dangerous, honestly.
                </div>
              </div>
              <div className="flex justify-end">
                <div
                  className="rounded-2xl rounded-tr-md px-3 py-2 text-[12px] leading-snug text-white max-w-[78%]"
                  style={{ background: BLUE }}
                >
                  same thing happened to me last week
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <Avatar letter="M" tint="#8b5a7a" size={28} src={faceFor("Maya Reed")} />
                <div className="rounded-2xl rounded-tl-md bg-[#1c1c1e] px-3 py-2 text-[12px] leading-snug text-white/85 max-w-[78%]">
                  Especially when you&apos;re late and not looking down.
                </div>
              </div>
              <div className="flex justify-end">
                <div
                  className="rounded-2xl rounded-tr-md px-3 py-2 text-[12px] leading-snug text-white max-w-[78%]"
                  style={{ background: BLUE }}
                >
                  Wait… speaking of campus look at this
                </div>
              </div>
              <div className="flex gap-2 items-end">
                <Avatar letter="D" tint="#6b5b95" size={28} src={faceFor("Diana")} />
                <div className="rounded-2xl rounded-tl-md overflow-hidden max-w-[70%] border border-white/[0.06]">
                  <img src={harvardHall} alt="" className="w-full h-[92px] object-cover" />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-12 right-3 z-20 w-[96px] rounded-xl bg-[#1c1c1e] border border-white/15 p-1.5 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-0.5 mb-1">
                {people.slice(0, 4).map((p) => (
                  <Avatar key={p.name} letter={p.name[0]} tint={p.tint} size={40} src={p.src} />
                ))}
              </div>
              <div className="flex items-center justify-between px-0.5">
                <span className="text-[8px] text-white/50">+4</span>
                <span className="w-5 h-5 rounded-full bg-[#ff453a] flex items-center justify-center">
                  <PhoneOff size={10} className="text-white" />
                </span>
              </div>
            </motion.div>

            <div className="absolute bottom-3 inset-x-3 z-10 flex items-center gap-1.5">
              <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/40">
                <Link2 size={13} />
              </span>
              <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 text-[11px] text-white/30">
                Text Here
              </div>
              <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/40">
                <Mic size={13} />
              </span>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col h-full min-h-0"
          >
            <div className="flex items-center gap-2 px-3.5 mb-2 shrink-0">
              <ArrowLeft size={15} className="text-white/50" />
              <p className="flex-1 text-center text-[13px] font-semibold text-white flex items-center justify-center gap-1.5">
                <Volume2 size={13} /> Study-Room
              </p>
              <MoreVertical size={15} className="text-white/45" />
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2 flex-1 min-h-0 px-3 pb-2">
              {people.map((p) => (
                <div key={p.name} className="flex flex-col items-center justify-center gap-1.5 min-h-0">
                  <span
                    className="rounded-full overflow-hidden shrink-0"
                    style={{
                      boxShadow: p.speaking ? `0 0 0 2.5px ${BLUE}` : undefined,
                    }}
                  >
                    <Avatar letter={p.name[0]} tint={p.tint} size={64} src={p.src} />
                  </span>
                  <p className="text-[10px] text-white/65 truncate w-full text-center">{p.name.split(" ")[0]}</p>
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
              <span className="w-11 h-11 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70">
                <Video size={16} />
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

const CrowdIdeaScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "chats" && <ChatsPhase key="chats" />}
          {phase === "profile" && <ProfilePhase key="profile" />}
          {phase === "explore" && <ExplorePhase key="explore" />}
          {phase === "voice" && <VoicePhase key="voice" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default CrowdIdeaScene;
