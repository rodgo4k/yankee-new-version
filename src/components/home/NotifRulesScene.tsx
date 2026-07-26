import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  MessageSquare,
  Mic,
  Phone,
  PhoneOff,
  Play,
  Search,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import harvardHall from "@/assets/harvard-hall.png";

const ease = [0.22, 1, 0.36, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "banners" | "thread" | "ring";
const phases: Phase[] = ["banners", "thread", "ring"];
const HOLD: Record<Phase, number> = { banners: 6400, thread: 6800, ring: 5200 };
const labels: Record<Phase, string> = {
  banners: "real people first",
  thread: "replies that actually matter",
  ring: "only the alerts you asked for",
};

const Avatar = ({
  src,
  size,
  online,
}: {
  src: string;
  size: number;
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

const bannerCast = [
  { name: "Mia Taylor", preview: "Yo, bestieee, when are we hanging out??", unread: "+4", online: true },
  { name: "Ethan Carter", preview: "Sent you a post", unread: "+2", online: true },
  { name: "Bella Rodriguez", preview: "OMG STOP HAHA Literally jaw on the floor rn.", unread: "+2", online: false },
  { name: "Ryan Brooks", preview: "Tell me we weren't just talking about this??", unread: "+1", online: false },
] as const;

const BannersPhase = () => {
  const faces = uniqueFacesFor(bannerCast.map((b) => b.name));
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 350),
      window.setTimeout(() => setStage(2), 1100),
      window.setTimeout(() => setStage(3), 1850),
      window.setTimeout(() => setStage(4), 2600),
      window.setTimeout(() => setStage(5), 3400),
      window.setTimeout(() => setStage(6), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const showBanners = stage >= 1 && stage < 5;
  const showList = stage >= 5;

  return (
    <motion.div
      key="banners"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(6px)" }}
      transition={{ duration: 0.35 }}
      className="relative flex flex-col h-full min-h-0 overflow-hidden"
    >
      {}
      <div className={`px-3.5 flex items-center gap-2 mb-2 shrink-0 transition-opacity duration-500 ${showList ? "opacity-100" : "opacity-40"}`}>
        <ArrowLeft size={15} className="text-white/55" />
        <div className="flex-1 flex justify-center">
          <div className="inline-flex rounded-full bg-[#1c1c1e] p-0.5 border border-white/[0.06]">
            <span className="rounded-full bg-white text-black px-3 py-1 text-[10px] font-semibold">Chats</span>
            <span className="rounded-full px-3 py-1 text-[10px] text-white/40">Request</span>
            <span className="rounded-full px-3 py-1 text-[10px] text-white/40">Spin</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showBanners && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-10 bottom-0 z-20 px-3 pt-2"
          >
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px]" />
            <div className="relative space-y-2">
              {bannerCast.map((b, i) => {
                if (stage < i + 1) return null;
                return (
                  <motion.div
                    key={b.name}
                    layoutId={`notif-${b.name}`}
                    initial={{ opacity: 0, y: -48, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="rounded-[1.15rem] bg-[#2c2c2e]/95 border border-white/10 px-3 py-2.5 flex items-center gap-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)]"
                  >
                    <Avatar src={faces[i]} size={36} online={b.online} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[12px] font-semibold text-white truncate">{b.name}</p>
                        <span className="text-[9px] text-white/35">now</span>
                      </div>
                      <p className="text-[11px] text-white/55 truncate">{b.preview}</p>
                    </div>
                    <span className="text-[10px] font-medium tabular-nums" style={{ color: BLUE }}>
                      {b.unread}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: stage >= 3 ? 1 : 0 }}
              className="relative mt-4 text-center text-[10px] text-white/40 lowercase"
            >
              only people you talk to · noise stays off
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {showList && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 min-h-0 flex flex-col px-3.5"
        >
          <div className="mb-2 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2 shrink-0">
            <Search size={13} className="text-white/35" />
            <p className="text-[12px] text-white/35">Search peoples</p>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden space-y-0.5">
            {bannerCast.map((b, i) => (
              <motion.div
                key={b.name}
                layoutId={`notif-${b.name}`}
                className="flex items-center gap-2.5 py-2"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              >
                <Avatar src={faces[i]} size={40} online={b.online} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-white truncate">{b.name}</p>
                  <p className="text-[11px] text-white/40 truncate">{b.preview}</p>
                </div>
                <span className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-white/70">{b.unread}</span>
                  <motion.span
                    animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12 }}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: BLUE }}
                  />
                </span>
              </motion.div>
            ))}
            {stage >= 6 &&
              [
                { name: "Logan Harris", preview: "Sent you a post" },
                { name: "Ava Nguyen", preview: "I saw this and it instantly made me think of you." },
                { name: "Zoe Martinez", preview: "Pls explain why this made me cackle at 2AM" },
                { name: "Jake Miller", preview: "Dropped a message" },
              ].map((r, i) => {
                const src = faceFor(r.name);
                return (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-2.5 py-2"
                  >
                    <Avatar src={src} size={40} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-white truncate">{r.name}</p>
                      <p className="text-[11px] text-white/40 truncate">{r.preview}</p>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ThreadPhase = () => {
  const maya = faceFor("Maya Reed");
  const diana = faceFor("Diana");
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [1, 2, 3, 4, 5, 6].map((n, i) => window.setTimeout(() => setStep(n), 220 + i * 480));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="thread"
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease }}
      className="relative flex flex-col h-full min-h-0 px-3 pb-3"
    >
      <div className="flex items-center gap-2 mb-3 shrink-0">
        <ArrowLeft size={15} className="text-white/55" />
        <div className="flex-1 flex items-center justify-center gap-1.5">
          <span className="flex -space-x-1.5">
            <Avatar src={maya} size={22} />
            <Avatar src={diana} size={22} />
          </span>
          <p className="text-[13px] font-semibold text-white">Maya, Diana</p>
        </div>
      </div>

      {}
      <AnimatePresence>
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-2 rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10"
            style={{ background: "rgba(47,107,255,0.18)" }}
          >
            <MessageSquare size={12} style={{ color: BLUE }} />
            <p className="text-[10px] text-white/80">new reply in this thread</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-end gap-2.5">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end"
          >
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 items-end">
            <Avatar src={maya} size={24} />
            <div>
              <span className="inline-block max-w-[82%] rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85 leading-snug">
                Campus sidewalks are dangerous, honestly.
              </span>
              <p className="text-[9px] text-white/35 mt-0.5">Maya · 17:31</p>
            </div>
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="self-end">
            <span
              className="inline-block max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug"
              style={{ background: BLUE }}
            >
              Especially when you&apos;re late and not looking down.
            </span>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex gap-2 items-end"
          >
            <Avatar src={maya} size={24} />
            <div className="max-w-[78%]">
              <span className="inline-block rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85 mb-1.5">
                Speaking of campus look at this ↓
              </span>
              <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                <img src={harvardHall} alt="" className="w-full h-[100px] object-cover" />
              </div>
              <div className="mt-1.5 flex gap-1.5">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="rounded-full bg-[#1c1c1e] px-2 py-0.5 text-[11px]"
                >
                  👀
                </motion.span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-full bg-[#1c1c1e] px-2 py-0.5 text-[11px]"
                >
                  😇
                </motion.span>
              </div>
              <p className="text-[9px] text-white/35 mt-0.5">Maya</p>
            </div>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 items-center">
            <Avatar src={maya} size={24} />
            <div className="flex-1 rounded-2xl bg-[#1c1c1e] px-2 py-2 flex items-center gap-2 max-w-[78%]">
              <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: BLUE }}>
                <Play size={11} className="text-white fill-white" />
              </span>
              <div className="flex-1 flex items-center gap-[2px] h-5">
                {Array.from({ length: 26 }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: ["28%", "95%", "38%"] }}
                    transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.028 }}
                    className="w-[2px] rounded-full bg-white/55"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 items-end">
            <Avatar src={diana} size={24} />
            <div>
              <span className="inline-block rounded-2xl rounded-bl-md bg-[#1c1c1e] px-3 py-2 text-[12px] text-white/85">
                Okay but this looks unreal 🍂
              </span>
              <p className="text-[9px] text-white/35 mt-0.5">Diana · 17:30</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const RingPhase = () => {
  const mia = faceFor("Mia Taylor");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      key="ring"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col h-full min-h-0 px-3.5 overflow-hidden"
    >
      <div className="flex items-center mb-4">
        <ArrowLeft size={16} className="text-white/60" />
        <motion.p
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex-1 text-center text-[13px] text-white/80"
        >
          Contacting you...
        </motion.p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center pb-24">
        <div className="relative flex items-center justify-center">
          {[0, 1, 2].map((w) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0.35, 0], scale: [0.85, 1.55] }}
              transition={{ duration: 2.1, repeat: Infinity, delay: w * 0.55, ease: "easeOut" }}
              className="absolute rounded-full border"
              style={{
                width: 112 + w * 28,
                height: 112 + w * 28,
                borderColor: BLUE,
              }}
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Avatar src={mia} size={112} />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 8 }}
          className="mt-5 text-[18px] font-semibold text-white"
        >
          Mia Taylor
        </motion.p>
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
        <span className="w-14 h-14 rounded-full flex items-center justify-center text-white" style={{ background: RED }}>
          <PhoneOff size={22} />
        </span>
      </div>
    </motion.div>
  );
};

const NotifRulesScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={1.5}>
        {}
        <div className="absolute top-14 left-2 z-30 flex flex-col gap-1.5">
          {phases.map((p, idx) => (
            <motion.span
              key={p}
              animate={{
                height: idx === i ? 16 : 4,
                backgroundColor: idx === i ? BLUE : "rgba(255,255,255,0.18)",
              }}
              className="w-1 rounded-full"
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          {phase === "banners" && <BannersPhase key="banners" />}
          {phase === "thread" && <ThreadPhase key="thread" />}
          {phase === "ring" && <RingPhase key="ring" />}
        </AnimatePresence>
      </AiPhoneShell>
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight"
        >
          {labels[phase]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default NotifRulesScene;
