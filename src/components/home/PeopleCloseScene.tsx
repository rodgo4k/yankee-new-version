import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, Lock, Search, Users } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

type Phase = "chats" | "request" | "group";

const phases: Phase[] = ["chats", "request", "group"];
const HOLD: Record<Phase, number> = { chats: 5200, request: 5600, group: 5400 };
const labels: Record<Phase, string> = {
  chats: "your people",
  request: "needs your ok",
  group: "pulls them together",
};

const Avatar = ({
  letter,
  tint,
  size = 38,
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

const chatRows = [
  {
    name: "Maya Reed",
    preview: "we still on for saturday?",
    tint: "#8b5a7a",
    online: true,
    count: "+2",
  },
  {
    name: "Chris Parker",
    preview: "Sent you a voice note",
    tint: "#4a6fa5",
    online: true,
    count: "",
  },
  {
    name: "Ryan Scott",
    preview: "that hike photo hit different",
    tint: "#2d8a6e",
    online: false,
    count: "+1",
  },
  {
    name: "Tyler Shaw",
    preview: "pulling the group together…",
    tint: "#6b5b95",
    online: true,
    count: "",
  },
  {
    name: "Jordan Lee",
    preview: "miss this crew",
    tint: "#b07a4a",
    online: false,
    count: "",
  },
  {
    name: "Sam Brooks",
    preview: "coffee next week?",
    tint: "#3d7a9a",
    online: true,
    count: "+3",
  },
];

/* ─── 1. Chats list ─── */

const ChatsPhase = () => {
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const timers = chatRows.map((_, i) =>
      window.setTimeout(() => setRows(i + 1), 250 + i * 220),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="chats"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full"
    >
      <div className="px-3.5 flex items-center gap-2 mb-2.5">
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

      <div className="px-3.5 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/30" />
          <p className="text-[12px] text-white/30">Search people</p>
        </div>
      </div>

      <div className="flex-1 px-3.5 overflow-hidden flex flex-col gap-0.5">
        {chatRows.map((r, i) => {
          if (rows <= i) return null;
          return (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease }}
              className="flex items-center gap-2.5 py-2 border-b border-white/[0.04]"
            >
              <Avatar letter={r.name[0]} tint={r.tint} size={38} online={r.online} />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-white truncate">{r.name}</p>
                <p className="text-[11px] text-white/40 truncate">{r.preview}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {r.count && <span className="text-[10px] text-white/35">{r.count}</span>}
                <span className="w-2 h-2 rounded-full" style={{ background: BLUE }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ─── 2. Request needs your ok ─── */

const RequestPhase = () => {
  const [sheet, setSheet] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setSheet(true), 700),
      window.setTimeout(() => setOk(true), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="request"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Lock size={14} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Private by design</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 mb-3"
      >
        <p className="text-[11px] text-white/70 leading-snug">
          Yankee found a quiet moment to reconnect with Maya. nothing sends until you say ok.
        </p>
        <div className="mt-2.5 flex items-center gap-2">
          <Avatar letter="M" tint="#8b5a7a" size={28} online />
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-white">Maya Reed</p>
            <p className="text-[10px] text-white/35">last chat · 18 days ago</p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {sheet && (
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            exit={{ y: "110%" }}
            transition={{ duration: 0.45, ease }}
            className="mt-auto rounded-t-[1.4rem] bg-[#161618] border border-white/[0.06] border-b-0 px-4 pb-4 -mx-3.5"
          >
            <SheetHandle />
            <p className="mt-2 text-center text-[14px] font-semibold text-white">
              Reach out to Maya?
            </p>
            <p className="mt-1 text-center text-[11px] text-white/40 leading-snug">
              She only ever learns whether it got done. your data stays one-way.
            </p>
            <motion.button
              type="button"
              animate={
                ok
                  ? { backgroundColor: GREEN }
                  : {
                      backgroundColor: BLUE,
                      boxShadow: [
                        "0 0 0 0 rgba(47,107,255,0)",
                        "0 0 0 7px rgba(47,107,255,0.2)",
                        "0 0 0 0 rgba(47,107,255,0)",
                      ],
                    }
              }
              transition={{
                backgroundColor: { duration: 0.35 },
                boxShadow: { duration: 1.4, repeat: Infinity },
              }}
              className="mt-4 w-full rounded-full py-3 text-[13px] font-semibold text-white flex items-center justify-center gap-1.5"
            >
              {ok ? (
                <>
                  <Check size={14} strokeWidth={2.5} /> Sent with your ok
                </>
              ) : (
                "Approve request"
              )}
            </motion.button>
            <button
              type="button"
              className="mt-2.5 w-full rounded-full py-3 text-[13px] font-semibold text-white border border-white/12"
            >
              Not now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── 3. Pull the group together ─── */

const group = [
  { name: "Maya", tint: "#8b5a7a" },
  { name: "Chris", tint: "#4a6fa5" },
  { name: "Ryan", tint: "#2d8a6e" },
  { name: "Tyler", tint: "#6b5b95" },
];

const GroupPhase = () => {
  const [joined, setJoined] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = [
      ...group.map((_, i) => window.setTimeout(() => setJoined(i + 1), 400 + i * 450)),
      window.setTimeout(() => setDone(true), 400 + group.length * 450 + 400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="group"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Users size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Pull the group together</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 flex-1 flex flex-col"
      >
        <p className="text-[12px] font-semibold text-white">Saturday hang · thread</p>
        <p className="mt-1 text-[10px] text-white/40 leading-snug">
          Yankee finds the moment and opens the group chat. you stay in control.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {group.map((p, i) => {
            const on = joined > i;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={on ? { opacity: 1, scale: 1 } : { opacity: 0.25, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="flex items-center gap-1.5 rounded-full bg-black/30 border border-white/[0.06] pl-1 pr-2.5 py-1"
              >
                <Avatar letter={p.name[0]} tint={p.tint} size={24} />
                <span className="text-[10px] text-white/80">{p.name}</span>
                {on && (
                  <span
                    className="w-3.5 h-3.5 rounded-full flex items-center justify-center"
                    style={{ background: GREEN }}
                  >
                    <Check size={9} className="text-white" strokeWidth={3} />
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-auto pt-4">
          {done ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-dashed border-white/15 px-3 py-2.5 text-center"
            >
              <p className="text-[11px] font-semibold text-white">Group thread is live</p>
              <p className="text-[10px] text-white/40 mt-0.5">they only see that it got done</p>
            </motion.div>
          ) : (
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
              Open the thread
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── main ─── */

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
          {phase === "request" && <RequestPhase key="request" />}
          {phase === "group" && <GroupPhase key="group" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default PeopleCloseScene;
