import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  MessageSquare,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Play,
  Search,
  Video,
  Volume2,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import harvardHall from "@/assets/harvard-hall.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "chats" | "contacting" | "call" | "thread";
const phases: Phase[] = ["chats", "contacting", "call", "thread"];
const HOLD: Record<Phase, number> = { chats: 5200, contacting: 4800, call: 5200, thread: 5800 };
const labels: Record<Phase, string> = {
  chats: "your people",
  contacting: "needs your ok",
  call: "right inside the app",
  thread: "pulls them together",
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
const chatFaces = uniqueFacesFor([...chatNames]);

const chatRows = [
  { name: "Mia Taylor", preview: "Yo, bestieee, when are we hanging out??", unread: "+4", online: true, src: chatFaces[0] },
  { name: "Ethan Carter", preview: "Sent you a post", unread: "+2", online: true, src: chatFaces[1] },
  { name: "Bella Rodriguez", preview: "OMG STOP HAHA Literally jaw on the floor rn.", unread: "+2", online: false, src: chatFaces[2] },
  { name: "Ryan Brooks", preview: "Tell me we weren't just talking about this??", unread: "+1", online: false, src: chatFaces[3] },
  { name: "Logan Harris", preview: "Sent you a post", unread: null as string | null, online: false, src: chatFaces[4] },
  { name: "Ava Nguyen", preview: "I saw this and it instantly made me think of you.", unread: null, online: false, src: chatFaces[5] },
  { name: "Zoe Martinez", preview: "Pls explain why this made me cackle at 2AM", unread: null, online: false, src: chatFaces[6] },
  { name: "Jake Miller", preview: "Dropped a message", unread: null, online: false, src: chatFaces[7] },
];

const Avatar = ({
  src,
  letter,
  size = 40,
  online = false,
}: {
  src?: string;
  letter: string;
  size?: number;
  online?: boolean;
}) => (
  <span
    className="relative inline-flex shrink-0 items-center justify-center rounded-full overflow-hidden bg-[#2a2a2c] text-white/80 font-medium"
    style={{ width: size, height: size, minWidth: size, fontSize: size * 0.34 }}
  >
    {src ? <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" /> : letter}
    {online && (
      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black" style={{ background: GREEN }} />
    )}
  </span>
);

const ChatsPhase = () => {
  const [ready, setReady] = useState(0);
  useEffect(() => {
    const timers = chatRows.map((_, i) => window.setTimeout(() => setReady(i + 1), 200 + i * 90));
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
        {chatRows.map((r, i) => {
          if (ready <= i) return null;
          return (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease }}
              className="flex items-center gap-2.5 py-2"
            >
              <Avatar letter={r.name[0]} src={r.src} size={40} online={r.online} />
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

const ContactingPhase = () => (
  <motion.div
    key="contacting"
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    className="relative flex flex-col h-full min-h-0 px-3.5"
  >
    <div className="flex items-center mb-6">
      <ArrowLeft size={16} className="text-white/60" />
      <p className="flex-1 text-center text-[13px] text-white/80">Contacting you...</p>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center pb-20">
      <motion.div
        animate={{ boxShadow: ["0 0 0 0 rgba(47,107,255,0)", "0 0 0 14px rgba(47,107,255,0.18)", "0 0 0 0 rgba(47,107,255,0)"] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="rounded-full"
      >
        <Avatar letter="M" src={faceFor("Mia Taylor")} size={112} />
      </motion.div>
      <p className="mt-4 text-[18px] font-semibold text-white">Mia Taylor</p>
      <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-white/70">
        <Mic size={12} style={{ color: BLUE }} /> Voice call
      </p>
    </div>
    <div className="absolute bottom-8 inset-x-0 flex items-end justify-center gap-7">
      <span className="w-14 h-14 rounded-full flex items-center justify-center text-white" style={{ background: GREEN }}>
        <Phone size={22} />
      </span>
      <span className="w-12 h-12 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70 mb-1">
        <MessageSquare size={18} />
      </span>
      <span className="w-14 h-14 rounded-full flex items-center justify-center text-white" style={{ background: RED }}>
        <PhoneOff size={22} />
      </span>
    </div>
  </motion.div>
);

const CallPhase = () => {
  const [sec, setSec] = useState(21);
  useEffect(() => {
    const id = window.setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <motion.div
      key="call"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0 px-3.5"
    >
      <div className="flex items-center mb-2">
        <ArrowLeft size={16} className="text-white/60" />
        <p className="flex-1 text-center text-[12px] text-white/55 tabular-nums">
          {mm}:{ss}
        </p>
        <MessageSquare size={15} className="text-white/50" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center pb-16">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease }}
        >
          <Avatar letter="M" src={faceFor("Mia Taylor")} size={120} />
        </motion.div>
        <p className="mt-4 text-[18px] font-semibold text-white">Mia Taylor</p>
        <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-white/70">
          <Mic size={12} style={{ color: BLUE }} /> Voice call
        </p>
      </div>
      <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-5">
        <span className="w-11 h-11 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70">
          <Volume2 size={16} />
        </span>
        <span className="w-11 h-11 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70">
          <Video size={16} />
        </span>
        <span className="w-11 h-11 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70">
          <MicOff size={16} />
        </span>
        <span className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: RED }}>
          <PhoneOff size={18} />
        </span>
      </div>
    </motion.div>
  );
};

const ThreadPhase = () => {
  const [step, setStep] = useState(0);
  const maya = faceFor("Maya Reed");
  const diana = faceFor("Diana");

  useEffect(() => {
    const timers = [1, 2, 3, 4, 5, 6].map((n, i) => window.setTimeout(() => setStep(n), 280 + i * 420));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="thread"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full min-h-0 px-3 pb-3"
    >
      <div className="flex items-center gap-2 mb-3 shrink-0 px-0.5">
        <ArrowLeft size={15} className="text-white/55" />
        <p className="flex-1 text-center text-[13px] font-semibold text-white">Maya, Diana</p>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-end gap-2.5">
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="self-end">
            <span className="inline-block max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug" style={{ background: BLUE }}>
              Wait… same thing happened to me last week
            </span>
            <p className="text-[9px] text-white/30 text-right mt-0.5">17:31</p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-end">
            <Avatar letter="M" src={maya} size={24} />
            <div>
              <p className="text-[9px] text-white/35 mb-0.5">Maya · 17:31</p>
              <span className="inline-block max-w-[82%] rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85 leading-snug">
                Campus sidewalks are dangerous, honestly.
              </span>
            </div>
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="self-end">
            <span className="inline-block max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug" style={{ background: BLUE }}>
              Especially when you&apos;re late and not looking down.
            </span>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 items-end">
            <Avatar letter="M" src={maya} size={24} />
            <div className="max-w-[78%]">
              <p className="text-[9px] text-white/35 mb-0.5">Maya</p>
              <span className="inline-block rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85 mb-1.5">
                Speaking of campus look at this ↓
              </span>
              <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                <img src={harvardHall} alt="" className="w-full h-[110px] object-cover" />
              </div>
              <div className="mt-1.5 flex gap-1.5">
                <span className="rounded-full bg-[#1c1c1e] px-2 py-0.5 text-[11px]">👀</span>
                <span className="rounded-full bg-[#1c1c1e] px-2 py-0.5 text-[11px]">😅</span>
              </div>
            </div>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-center">
            <Avatar letter="M" src={maya} size={24} />
            <div className="flex-1 rounded-2xl bg-[#1c1c1e] px-2 py-2 flex items-center gap-2 max-w-[78%]">
              <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: BLUE }}>
                <Play size={11} className="text-white fill-white" />
              </span>
              <div className="flex-1 flex items-center gap-[2px] h-5">
                {Array.from({ length: 28 }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: ["30%", "90%", "40%"] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.03 }}
                    className="w-[2px] rounded-full bg-white/55"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-end">
            <Avatar letter="D" src={diana} size={24} />
            <div>
              <p className="text-[9px] text-white/35 mb-0.5">Diana · 17:30</p>
              <span className="inline-block rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85">
                Okay but this looks unreal 🍂
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const PeopleCloseScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "contacting" && <ContactingPhase key="contacting" />}
          {phase === "call" && <CallPhase key="call" />}
          {phase === "thread" && <ThreadPhase key="thread" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default PeopleCloseScene;
