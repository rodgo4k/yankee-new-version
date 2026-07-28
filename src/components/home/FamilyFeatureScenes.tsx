import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  MessageSquare,
  Mic,
  MicOff,
  Moon,
  Phone,
  PhoneOff,
  Play,
  Search,
  Shield,
  Users,
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

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const PrivatePanel = () => (
  <div className="relative h-[120px] flex items-center justify-center overflow-hidden">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ x: [48, 78], opacity: [0.45, 0], scale: [1, 0.55] }}
        transition={{ duration: 2.1, repeat: Infinity, delay: i * 0.4 }}
        className="absolute right-5 w-2 h-2 rounded-full bg-foreground/25"
      />
    ))}
    <motion.div
      animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 2.8, repeat: Infinity }}
      className="absolute w-24 h-24 rounded-full"
      style={{ background: `radial-gradient(circle, ${BLUE}33, transparent 70%)` }}
    />
    <span
      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0_12px_28px_-10px_rgba(47,107,255,0.55)]"
      style={{ background: BLUE }}
    >
      <Shield size={18} />
    </span>
  </div>
);

const PeoplePanel = () => {
  const faces = uniqueFacesFor(["Mia Taylor", "Ethan Carter", "Ava Nguyen"]);
  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <motion.span
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2.6, repeat: Infinity }}
        className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white z-10"
        style={{ background: BLUE }}
      >
        <Heart size={16} />
      </motion.span>
      {faces.map((src, i) => {
        const angle = -50 + i * 50;
        const x = Math.cos((angle * Math.PI) / 180) * 42;
        const y = Math.sin((angle * Math.PI) / 180) * 28;
        return (
          <span
            key={src}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
              className="block w-9 h-9 rounded-full overflow-hidden border-2 border-card bg-[#2a2a2c]"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

const ChatCallPanel = () => {
  const [mode, setMode] = useState<"chat" | "call">("chat");
  useEffect(() => {
    const id = window.setInterval(() => setMode((m) => (m === "chat" ? "call" : "chat")), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {mode === "chat" ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex flex-col gap-1.5 w-[70%]"
          >
            <span className="self-start rounded-2xl rounded-bl-md bg-foreground/[0.08] px-2.5 py-1.5 text-[10px] text-foreground/60">
              cousins at 7?
            </span>
            <span
              className="self-end rounded-2xl rounded-br-md px-2.5 py-1.5 text-[10px] text-white"
              style={{ background: BLUE }}
            >
              i'm in
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="call"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.span
              animate={{ boxShadow: [`0 0 0 0 ${GREEN}00`, `0 0 0 12px ${GREEN}28`, `0 0 0 0 ${GREEN}00`] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white"
              style={{ background: GREEN }}
            >
              <Phone size={18} />
            </motion.span>
            <p className="text-[10px] text-foreground/40 lowercase">voice · in app</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QuietPanel = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = window.setInterval(() => setOn((v) => !v), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <motion.span
        animate={{ rotate: on ? [-8, 8, -8] : 0, scale: on ? [1, 1.06, 1] : 1 }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white"
        style={{ background: on ? BLUE : "rgba(0,0,0,0.12)", color: on ? "#fff" : "rgba(0,0,0,0.45)" }}
      >
        <Moon size={18} />
      </motion.span>
      <AnimatePresence>
        {on && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-3 text-[10px] text-foreground/45 lowercase"
          >
            only family rings
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const ideaItems = [
  {
    title: "private by default",
    text: "profiles start closed. every follow and invite is approved by you. no strangers, no discovery feed.",
    Visual: PrivatePanel,
  },
  {
    title: "only your people",
    text: "no public metrics, no like counts, no pressure to perform. just the people you actually love.",
    Visual: PeoplePanel,
  },
  {
    title: "chat and calls together",
    text: "threads, albums, voice and video in one calm place. stop jumping between five apps.",
    Visual: ChatCallPanel,
  },
  {
    title: "quiet when you are",
    text: "quiet hours on by default. family can still reach you. everything else waits until morning.",
    Visual: QuietPanel,
  },
];

export const FamilyIdeaScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {ideaItems.map((item, i) => {
      const Visual = item.Visual;
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease }}
          className={`${shell} p-5 flex flex-col`}
        >
          <Visual />
          <h3 className="mt-2 text-[15px] font-semibold lowercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.text}</p>
        </motion.div>
      );
    })}
  </div>
);

type MeansPhase = "circle" | "talk" | "quiet";
const meansPhases: MeansPhase[] = ["circle", "talk", "quiet"];
const MEANS_HOLD: Record<MeansPhase, number> = { circle: 6200, talk: 7200, quiet: 5600 };

const meansCopy: Record<MeansPhase, { kicker: string; title: ReactNode; body: string }> = {
  circle: {
    kicker: "only who you chose",
    title: (
      <>
        a private space for <span className="font-serif-display italic font-medium">your people</span>
      </>
    ),
    body: "no public feeds, no suggested accounts, no ads. every circle stays closed to everyone else.",
  },
  talk: {
    kicker: "real conversations",
    title: (
      <>
        groups and calls, <span className="font-serif-display italic font-medium">no performance</span>
      </>
    ),
    body: "one thread for each side of the family. voice and video built in. no streaks, no pressure to post.",
  },
  quiet: {
    kicker: "quiet by design",
    title: (
      <>
        notifications that <span className="font-serif-display italic font-medium">know their place</span>
      </>
    ),
    body: "important people can still reach you. the rest waits for the morning digest.",
  },
};

const Avatar = ({
  src,
  size = 40,
  online = false,
}: {
  src: string;
  size?: number;
  online?: boolean;
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
  </span>
);

const familyRows = [
  { name: "Mia Taylor", preview: "Yo, bestieee, when are we hanging out??", unread: "+4", online: true, family: true },
  { name: "Ethan Carter", preview: "Sent you a post", unread: "+2", online: true, family: true },
  { name: "Bella Rodriguez", preview: "OMG STOP HAHA Literally jaw on the floor rn.", unread: "+2", online: false, family: false },
  { name: "Ryan Brooks", preview: "Tell me we weren't just talking about this??", unread: "+1", online: false, family: false },
  { name: "Logan Harris", preview: "Sent you a post", unread: null as string | null, online: false, family: false },
  { name: "Ava Nguyen", preview: "I saw this and it instantly made me think of you.", unread: null, online: false, family: true },
] as const;

const ChatsPhase = () => {
  const faces = uniqueFacesFor(familyRows.map((r) => r.name));
  const [ready, setReady] = useState(0);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const timers = [
      ...familyRows.map((_, i) => window.setTimeout(() => setReady(i + 1), 180 + i * 95)),
      window.setTimeout(() => setFocus(true), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="chats"
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
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
      <AnimatePresence>
        {focus && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="px-3.5 mb-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-[10px] text-white/80">
              <Users size={10} style={{ color: BLUE }} />
              your people · closed circle
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex-1 min-h-0 overflow-hidden px-3.5 space-y-0.5">
        {familyRows.map((r, i) => {
          if (ready <= i) return null;
          return (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{
                opacity: focus && !r.family ? 0.28 : 1,
                x: 0,
                scale: focus && r.family ? 1.01 : 1,
              }}
              transition={{ duration: 0.3, ease }}
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

const ThreadPhase = () => {
  const [step, setStep] = useState(0);
  const maya = faceFor("Maya Reed");
  const diana = faceFor("Diana");

  useEffect(() => {
    const timers = [1, 2, 3, 4, 5, 6, 7].map((n, i) =>
      window.setTimeout(() => setStep(n), 220 + i * 380),
    );
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
        {step >= 7 && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white"
            style={{ background: GREEN }}
          >
            <Phone size={12} />
          </motion.span>
        )}
      </div>
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-end gap-2.5">
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="self-end">
            <span
              className="inline-block max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug"
              style={{ background: BLUE }}
            >
              Wait… same thing happened to me last week
            </span>
            <p className="text-[9px] text-white/30 text-right mt-0.5">17:31</p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-end">
            <Avatar src={maya} size={24} />
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
            <span
              className="inline-block max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug"
              style={{ background: BLUE }}
            >
              Especially when you&apos;re late and not looking down.
            </span>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 items-end">
            <Avatar src={maya} size={24} />
            <div className="max-w-[78%]">
              <p className="text-[9px] text-white/35 mb-0.5">Maya</p>
              <span className="inline-block rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85 mb-1.5">
                Speaking of campus look at this ↓
              </span>
              <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                <img src={harvardHall} alt="" className="w-full h-[100px] object-cover" />
              </div>
            </div>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 items-center">
            <Avatar src={maya} size={24} />
            <div className="flex-1 rounded-2xl bg-[#1c1c1e] px-2 py-2 flex items-center gap-2 max-w-[78%]">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: BLUE }}
              >
                <Play size={11} className="text-white fill-white" />
              </span>
              <div className="flex-1 flex items-center gap-[2px] h-5">
                {Array.from({ length: 24 }).map((_, i) => (
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
            <Avatar src={diana} size={24} />
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

const CallPhase = () => {
  const [live, setLive] = useState(false);
  const [sec, setSec] = useState(21);
  const mia = faceFor("Mia Taylor");

  useEffect(() => {
    const t = window.setTimeout(() => setLive(true), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!live) return;
    const id = window.setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [live]);

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <AnimatePresence mode="wait">
      {!live ? (
        <motion.div
          key="ring"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          className="relative flex flex-col h-full min-h-0 px-3.5"
        >
          <div className="flex items-center mb-6">
            <ArrowLeft size={16} className="text-white/60" />
            <p className="flex-1 text-center text-[13px] text-white/80">Contacting you...</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center pb-20">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full border border-white/15"
                style={{ width: 112 + i * 36, height: 112 + i * 36 }}
                animate={{ opacity: [0.35, 0], scale: [0.92, 1.12] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35 }}
              />
            ))}
            <Avatar src={mia} size={112} />
            <p className="mt-4 text-[18px] font-semibold text-white">Mia Taylor</p>
            <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-white/70">
              <Mic size={12} style={{ color: BLUE }} /> Voice call
            </p>
          </div>
          <div className="absolute bottom-8 inset-x-0 flex items-end justify-center gap-7">
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-14 h-14 rounded-full flex items-center justify-center text-white"
              style={{ background: GREEN }}
            >
              <Phone size={22} />
            </motion.span>
            <span className="w-12 h-12 rounded-full bg-[#1c1c1e] flex items-center justify-center text-white/70 mb-1">
              <MessageSquare size={18} />
            </span>
            <span
              className="w-14 h-14 rounded-full flex items-center justify-center text-white"
              style={{ background: RED }}
            >
              <PhoneOff size={22} />
            </span>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="live"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
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
            <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease }}>
              <Avatar src={mia} size={120} />
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
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center text-white"
              style={{ background: RED }}
            >
              <PhoneOff size={18} />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const QuietPhase = () => {
  const faces = uniqueFacesFor(familyRows.slice(0, 4).map((r) => r.name));
  const [on, setOn] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      key="quiet"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col h-full min-h-0"
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
      <div className="flex-1 min-h-0 overflow-hidden px-3.5 space-y-0.5">
        {familyRows.slice(0, 4).map((r, i) => (
          <motion.div
            key={r.name}
            animate={{ opacity: on && !r.family ? 0.22 : 1, filter: on && !r.family ? "blur(1.5px)" : "blur(0px)" }}
            className="flex items-center gap-2.5 py-2"
          >
            <Avatar src={faces[i]} size={40} online={r.online} />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white truncate">{r.name}</p>
              <p className="text-[11px] text-white/40 truncate">{r.preview}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {on && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-3 bottom-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-3 flex items-center gap-3"
          >
            <motion.span
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
              style={{ background: BLUE }}
            >
              <Moon size={16} />
            </motion.span>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-white">Quiet hours on</p>
              <p className="text-[10px] text-white/55">Only family calls ring. The rest waits.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type PhonePhase = "chats" | "thread" | "call" | "quiet";

const phoneForMeans = (means: MeansPhase): PhonePhase[] => {
  if (means === "circle") return ["chats"];
  if (means === "talk") return ["thread", "call"];
  return ["quiet"];
};

const FamilyCirclePhone = ({ means }: { means: MeansPhase }) => {
  const sequence = phoneForMeans(means);
  const [pi, setPi] = useState(0);
  const phase = sequence[pi] ?? sequence[0];

  useEffect(() => {
    setPi(0);
  }, [means]);

  useEffect(() => {
    if (sequence.length < 2) return;
    const hold = phase === "thread" ? 3800 : 3200;
    const id = window.setTimeout(() => setPi((n) => (n + 1) % sequence.length), hold);
    return () => clearTimeout(id);
  }, [phase, means, sequence.length]);

  const label: Record<PhonePhase, string> = {
    chats: "only your people",
    thread: "one calm thread",
    call: "calls inside the chat",
    quiet: "family still gets through",
  };

  return (
    <div className="w-[280px] sm:w-[300px] shrink-0">
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1.5}>
        <AnimatePresence mode="wait">
          {phase === "chats" && <ChatsPhase key="chats" />}
          {phase === "thread" && <ThreadPhase key="thread" />}
          {phase === "call" && <CallPhase key="call" />}
          {phase === "quiet" && <QuietPhase key="quiet" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {label[phase]}
      </p>
    </div>
  );
};

export const FamilyMeansScene = () => {
  const [i, setI] = useState(0);
  const phase = meansPhases[i];
  const copy = meansCopy[phase];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % meansPhases.length), MEANS_HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
        <FamilyCirclePhone means={phase} />
      </div>
      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="flex gap-1.5 mb-5">
          {meansPhases.map((p, idx) => (
            <motion.span
              key={p}
              animate={{
                width: idx === i ? 18 : 6,
                backgroundColor: idx === i ? BLUE : "rgba(0,0,0,0.14)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
          >
            <p className="font-serif-display italic text-[1.15rem] text-foreground/50 lowercase leading-none">
              {copy.kicker}
            </p>
            <h3 className="mt-3 text-[26px] md:text-[32px] font-semibold leading-[1.05] tracking-tight lowercase text-foreground max-w-[16ch]">
              {copy.title}
            </h3>
            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              {copy.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const layerSteps = [
  {
    n: "01",
    t: "create your circle",
    d: "start a private group for your family, your closest friends, or both. no one else can find it.",
  },
  {
    n: "02",
    t: "invite your people",
    d: "send a simple link. they join with their phone number. no public profile needed.",
  },
  {
    n: "03",
    t: "chat, share, call",
    d: "post updates, share albums, start a group call. everything stays inside your circle.",
  },
];

export const FamilyStepsScene = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % layerSteps.length), 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5 relative h-[280px] flex items-center justify-center">
        {layerSteps.map((s, i) => {
          const offset = (i - active + layerSteps.length) % layerSteps.length;
          return (
            <motion.div
              key={s.n}
              animate={{
                y: offset * 18,
                scale: 1 - offset * 0.06,
                opacity: offset > 2 ? 0 : 1 - offset * 0.25,
                zIndex: 10 - offset,
              }}
              transition={{ duration: 0.55, ease }}
              className="absolute w-[78%] max-w-[260px] rounded-[1.35rem] border border-foreground/10 bg-card p-5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.45)]"
            >
              <span
                className="inline-flex w-8 h-8 rounded-full items-center justify-center text-white text-[11px] font-semibold"
                style={{ background: BLUE }}
              >
                {s.n}
              </span>
              <p className="mt-3 text-[14px] font-semibold lowercase text-foreground">{s.t}</p>
              <div className="mt-3 h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
                <motion.div
                  animate={{ width: offset === 0 ? "100%" : "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full rounded-full"
                  style={{ background: BLUE }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="md:col-span-7 space-y-3">
        {layerSteps.map((s, i) => (
          <motion.button
            key={s.n}
            type="button"
            onClick={() => setActive(i)}
            animate={{
              borderColor: i === active ? "rgba(47,107,255,0.35)" : "rgba(0,0,0,0.06)",
              backgroundColor: i === active ? "rgba(47,107,255,0.04)" : "rgba(255,255,255,1)",
            }}
            className={`${shell} w-full text-left p-5 transition-colors`}
          >
            <p className="font-serif-display italic text-[1.15rem] text-foreground/45 leading-none">{s.n}</p>
            <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">{s.t}</h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed lowercase">{s.d}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
