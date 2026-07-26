import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Bell,
  DollarSign,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  MoreVertical,
  Radio,
  Search,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import YankeePhoneNav from "@/components/home/YankeePhoneNav";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import cafeFriends from "@/assets/cafe-friends.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

type Phase = "home" | "chats" | "profiles";
const phases: Phase[] = ["home", "chats", "profiles"];
const HOLD: Record<Phase, number> = { home: 6000, chats: 5600, profiles: 5600 };
const labels: Record<Phase, string> = {
  home: "surfaces the right posts",
  chats: "keeps people close to the feed",
  profiles: "discovery stays outside the scroll",
};

const Avatar = ({
  src,
  size,
  online,
  badge,
}: {
  src: string;
  size: number;
  online?: boolean;
  badge?: boolean;
}) => (
  <span
    className="relative inline-flex shrink-0 rounded-full overflow-hidden bg-[#2a2a2c]"
    style={{ width: size, height: size, minWidth: size }}
  >
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    {online && (
      <span
        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black"
        style={{ background: GREEN }}
      />
    )}
    {badge && (
      <span
        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black"
        style={{ background: BLUE }}
      />
    )}
  </span>
);

const HomePhase = () => {
  const paityn = faceFor("Paityn Franci");
  const emily = faceFor("Emily Carter");
  const self = faceFor("Mia Taylor");
  const viewers = uniqueFacesFor(["Maya Reed", "Chris Parker", "Leo Hart"]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [1, 2, 3, 4].map((n, i) => window.setTimeout(() => setStep(n), 220 + i * 400));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -14 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 flex items-center gap-2.5 mb-3 shrink-0">
        <Globe size={15} className="text-white/70" />
        <Radio size={15} className="text-white/70" />
        <p className="flex-1 text-center font-serif-display italic text-[18px] text-white tracking-tight">
          Yankee
        </p>
        <Bell size={15} className="text-white/70" />
        <span className="relative">
          <Avatar src={self} size={26} />
          <span
            className="absolute -bottom-0.5 -left-0.5 min-w-[12px] h-[12px] rounded-full text-[7px] font-bold text-white flex items-center justify-center px-0.5"
            style={{ background: BLUE }}
          >
            1
          </span>
        </span>
      </div>

      <div className="px-3.5 flex-1 min-h-0 flex flex-col pb-16">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 mb-2.5 shrink-0"
          >
            <Avatar src={paityn} size={36} />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white truncate">Paityn Franci</p>
              <p className="text-[10px] text-white/40">Posted 24 minutes ago.</p>
            </div>
            <Heart size={15} className="text-white/55" />
            <span className="w-6 h-6 rounded-full border border-white/25 flex items-center justify-center text-white/55">
              <DollarSign size={11} />
            </span>
            <MoreVertical size={14} className="text-white/45" />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease }}
            className="relative flex-1 min-h-[220px] rounded-[1.35rem] overflow-hidden"
          >
            <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm px-2 py-1 text-[9px] text-white/90">
                <MapPin size={10} style={{ color: BLUE }} />
                Massachusetts | Boston
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm pl-1 pr-2 py-1">
                <span className="flex -space-x-1.5">
                  {viewers.map((v) => (
                    <Avatar key={v} src={v} size={14} />
                  ))}
                </span>
                <span className="text-[9px] text-white/90 font-medium">5.300</span>
              </span>
            </div>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-2.5 left-2.5 right-2.5"
              >
                <p className="text-[11px] text-white leading-snug mb-0.5">
                  I never tire of admiring this view before going to work. What do you think guys?
                </p>
                <p className="text-[10px] text-white/55 mb-2">#let&apos;s go #excited</p>
                {step >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 px-2.5 py-2 flex items-center gap-2"
                  >
                    <Avatar src={emily} size={28} badge />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-white">Emily Carter</p>
                      <p className="text-[10px] text-white/65 truncate">This was smooth. Loved it.</p>
                    </div>
                    <MessageCircle size={14} className="text-white/55 shrink-0" />
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
      <YankeePhoneNav active="create" />
    </motion.div>
  );
};

const chatNames = [
  "Mia Taylor",
  "Ethan Carter",
  "Bella Rodriguez",
  "Ryan Brooks",
  "Logan Harris",
  "Ava Nguyen",
  "Zoe Martinez",
  "Jake Miller",
] as const;

const ChatsPhase = () => {
  const faces = uniqueFacesFor([...chatNames]);
  const rows = [
    { name: "Mia Taylor", preview: "Yo, bestieee, when are we hanging out??", unread: "+4", online: true },
    { name: "Ethan Carter", preview: "Sent you a post", unread: "+2", online: true },
    { name: "Bella Rodriguez", preview: "OMG STOP HAHA Literally jaw on the floor rn.", unread: "+2", online: false },
    { name: "Ryan Brooks", preview: "Tell me we weren't just talking about this??", unread: "+1", online: false },
    { name: "Logan Harris", preview: "Sent you a post", unread: null as string | null, online: false },
    { name: "Ava Nguyen", preview: "I saw this and it instantly made me think of you.", unread: null, online: false },
    { name: "Zoe Martinez", preview: "Pls explain why this made me cackle at 2AM", unread: null, online: false },
    { name: "Jake Miller", preview: "Dropped a message", unread: null, online: false },
  ];
  const [ready, setReady] = useState(0);

  useEffect(() => {
    const timers = rows.map((_, i) => window.setTimeout(() => setReady(i + 1), 180 + i * 85));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="chats"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 flex items-center gap-2 mb-2.5 shrink-0">
        <ArrowLeft size={16} className="text-white/60" />
        <div className="flex-1 flex justify-center">
          <div className="inline-flex rounded-full bg-[#1c1c1e] p-0.5 border border-white/[0.06]">
            <span className="rounded-full bg-white text-black px-3 py-1 text-[10px] font-semibold">Chats</span>
            <span className="rounded-full px-3 py-1 text-[10px] text-white/40">Request</span>
            <span className="rounded-full px-3 py-1 text-[10px] text-white/40">Spin</span>
          </div>
        </div>
      </div>
      <div className="px-3.5 mb-2 shrink-0">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35" />
          <p className="text-[12px] text-white/35">Search peoples</p>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden px-3.5 space-y-0.5">
        {rows.map((r, i) => {
          if (ready <= i) return null;
          return (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5 py-2"
            >
              <Avatar src={faces[i]} size={40} online={r.online} />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-white truncate">{r.name}</p>
                <p className="text-[11px] text-white/40 truncate">{r.preview}</p>
              </div>
              {r.unread && (
                <span className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-white/70">{r.unread}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const ProfilesPhase = () => {
  const names = [
    "Naomi Cruz",
    "Amelia Green",
    "Maisy Clark",
    "Layla Woods",
    "Freya Hall",
    "Sophia Carter",
    "Emily Brooks",
    "Maya Reed",
  ];
  const faces = uniqueFacesFor(names);
  const handles = [
    "@naomicreates",
    "@ameliapaints",
    "@maisydesigns",
    "@laylawrites",
    "@freyaplans",
    "@sophiakind",
    "@emilybrooks",
    "@mayareed",
  ];
  const [ready, setReady] = useState(0);

  useEffect(() => {
    const timers = names.map((_, i) => window.setTimeout(() => setReady(i + 1), 140 + i * 90));
    return () => timers.forEach(clearTimeout);
  }, []);

  const filters = ["Posts", "Profiles", "Notions", "Crowds"] as const;
  const layout = [
    { top: "2%", left: "8%", size: 72 },
    { top: "0%", left: "58%", size: 68 },
    { top: "22%", left: "62%", size: 76 },
    { top: "28%", left: "6%", size: 64 },
    { top: "42%", left: "34%", size: 80 },
    { top: "58%", left: "62%", size: 70 },
    { top: "68%", left: "10%", size: 74 },
    { top: "78%", left: "42%", size: 66 },
  ];

  return (
    <motion.div
      key="profiles"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3 flex items-center gap-1.5 mb-2 shrink-0 overflow-hidden">
        <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.08] flex items-center justify-center shrink-0">
          <Search size={13} className="text-white/70" />
        </span>
        {filters.map((f) => (
          <span
            key={f}
            className="rounded-full px-2.5 py-1.5 text-[10px] shrink-0"
            style={{
              background: f === "Profiles" ? "#2a2a2c" : "#1c1c1e",
              color: f === "Profiles" ? "#fff" : "rgba(255,255,255,0.55)",
              border: f === "Profiles" ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="relative flex-1 min-h-0 overflow-hidden pb-16">
        {names.map((name, i) => {
          if (ready <= i) return null;
          const pos = layout[i];
          return (
            <motion.div
              key={name + i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease }}
              className="absolute flex flex-col items-center text-center"
              style={{ top: pos.top, left: pos.left, width: pos.size + 28 }}
            >
              <Avatar src={faces[i]} size={pos.size} />
              <p className="mt-1.5 text-[10px] font-semibold text-white leading-tight">{name}</p>
              <p className="text-[8px] text-white/40">{handles[i]}</p>
            </motion.div>
          );
        })}
      </div>
      <YankeePhoneNav active="dm" />
    </motion.div>
  );
};

const FeedDoesScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "home" && <HomePhase key="home" />}
          {phase === "chats" && <ChatsPhase key="chats" />}
          {phase === "profiles" && <ProfilesPhase key="profiles" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default FeedDoesScene;
