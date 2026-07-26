import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  Ban,
  Check,
  ChevronRight,
  MoreHorizontal,
  Pencil,
  RefreshCw,
  Sparkles,
  Waves,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "choose" | "session" | "invite" | "permissions" | "contribute";

const phases: Phase[] = ["choose", "session", "invite", "permissions", "contribute"];

const PHASE_HOLD_MS: Record<Phase, number> = {
  choose: 4800,
  session: 4800,
  invite: 4600,
  permissions: 4400,
  contribute: 5200,
};

/* ─── shared bits ─── */

const Header = ({
  title,
  subtitle,
  showBack = true,
}: {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}) => (
  <div className="flex items-start justify-between px-4 mb-3">
    <div className="flex items-start gap-2 min-w-0">
      {showBack && <ArrowLeft size={16} className="text-white/55 mt-0.5 shrink-0" />}
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-white leading-tight">{title}</p>
        {subtitle && (
          <p className="text-[10px] text-white/40 leading-tight mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
    <MoreHorizontal size={16} className="text-white/40 shrink-0 mt-0.5" />
  </div>
);

const BlueBtn = ({
  label,
  delay = 0,
  pulse = false,
}: {
  label: string;
  delay?: number;
  pulse?: boolean;
}) => (
  <motion.button
    type="button"
    initial={{ opacity: 0, y: 10, scale: 0.97 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: pulse ? [1, 1.03, 1] : 1,
    }}
    transition={{
      opacity: { duration: 0.4, delay, ease },
      y: { duration: 0.4, delay, ease },
      scale: pulse
        ? { duration: 1.4, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }
        : { duration: 0.4, delay, ease },
    }}
    className="w-full rounded-full py-3 text-[12px] font-semibold text-white lowercase"
    style={{ background: BLUE }}
  >
    {label}
  </motion.button>
);

/* ─── 1. Choose type ─── */

const ChoosePhase = () => {
  const [visible, setVisible] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const titleFull = "Choose type";
  const [titleTyped, setTitleTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let typeId: number | undefined;
    let holdId: number | undefined;
    let eraseId: number | undefined;
    let cancelled = false;

    const startTyping = () => {
      if (cancelled) return;
      i = 0;
      setTitleTyped("");
      typeId = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setTitleTyped(titleFull.slice(0, i));
        if (i >= titleFull.length) {
          window.clearInterval(typeId);
          holdId = window.setTimeout(() => {
            if (cancelled) return;
            eraseId = window.setInterval(() => {
              if (cancelled) return;
              i -= 1;
              setTitleTyped(titleFull.slice(0, Math.max(0, i)));
              if (i <= 0) {
                window.clearInterval(eraseId);
                startTyping();
              }
            }, 35);
          }, 3000);
        }
      }, 95);
    };

    startTyping();

    const timers = [
      window.setTimeout(() => setVisible(1), 750),
      window.setTimeout(() => setVisible(2), 1150),
      window.setTimeout(() => setVisible(3), 1550),
      window.setTimeout(() => setHighlight(true), 2000),
    ];

    return () => {
      cancelled = true;
      if (typeId) window.clearInterval(typeId);
      if (holdId) window.clearTimeout(holdId);
      if (eraseId) window.clearInterval(eraseId);
      timers.forEach(clearTimeout);
    };
  }, []);

  const cards = [
    {
      id: "text",
      icon: <Pencil size={15} className="text-white/70" />,
      iconBg: "bg-white/8",
      title: "Text",
      sub: "Messages, threads, files",
      from: -56,
    },
    {
      id: "voice",
      icon: <Waves size={15} className="text-emerald-300/90" />,
      iconBg: "bg-emerald-500/15",
      title: "Voice",
      sub: "Drop-in voice, max 25",
      from: 56,
    },
    {
      id: "ai",
      icon: <Sparkles size={15} className="text-white" />,
      iconBg: "bg-[#2f6bff]",
      title: "AI prompt",
      sub: "Shared prompts with citations",
      badge: true,
      from: -56,
    },
  ];

  return (
    <motion.div
      key="choose"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full px-1"
    >
      <Header title="New channel" subtitle="Step 1 of 3" />
      <div className="px-4 flex-1 flex flex-col min-h-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
          className="text-[11px] text-white/40 leading-relaxed"
        >
          AI channels require Owner permission and a Crowd-level toggle.
        </motion.p>
        <h3 className="mt-4 text-[22px] font-semibold text-white tracking-tight min-h-[28px]">
          {titleTyped}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.55,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="inline-block w-[2px] h-[1.05em] bg-white align-[-0.12em] ml-0.5"
            aria-hidden
          />
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: titleTyped.length > 4 ? 1 : 0 }}
          className="mt-1 text-[11px] text-white/40"
        >
          How members will use this channel.
        </motion.p>

        <div className="mt-5 flex flex-col gap-2.5 pb-2">
          {cards.map((c, i) => {
            const show = visible > i;
            const active = c.id === "ai" && highlight;
            return (
              <div key={c.id} className="relative px-[2px] py-[2px]">
                <AnimatePresence>
                  {show && (
                    <motion.div
                      initial={{ opacity: 0, x: c.from }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        borderColor: active ? "rgba(47,107,255,0.75)" : "rgba(255,255,255,0)",
                        backgroundColor: active ? "rgba(47,107,255,0.14)" : "rgba(28,28,30,1)",
                        boxShadow: active
                          ? "0 0 0 1px rgba(47,107,255,0.35), 0 0 18px -2px rgba(47,107,255,0.45)"
                          : "0 0 0 0 rgba(47,107,255,0)",
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="rounded-[14px] px-3.5 py-3.5 flex items-center gap-3 border-2 box-border"
                    >
                      <motion.div
                        animate={
                          active
                            ? {
                                boxShadow: [
                                  "0 0 0 0 rgba(47,107,255,0)",
                                  "0 0 0 6px rgba(47,107,255,0.25)",
                                  "0 0 0 0 rgba(47,107,255,0)",
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 ${c.iconBg}`}
                      >
                        {c.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-semibold text-white">{c.title}</p>
                          {c.badge && (
                            <motion.span
                              animate={highlight ? { scale: [1, 1.08, 1] } : {}}
                              transition={{ duration: 1.2, repeat: Infinity }}
                              className="rounded-full px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-white uppercase"
                              style={{ background: BLUE }}
                            >
                              NEW
                            </motion.span>
                          )}
                        </div>
                        <p className="text-[10px] text-white/40 mt-0.5">{c.sub}</p>
                      </div>
                      <ChevronRight size={14} className="text-white/25 shrink-0" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 2. New session ─── */

const SessionPhase = () => {
  const goalFull = "recommend shoes for the Blue Hills trail…";
  const [typed, setTyped] = useState("");
  const [sourcesOn, setSourcesOn] = useState(0);
  const [whoOn, setWhoOn] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeId = window.setInterval(() => {
      i += 1;
      setTyped(goalFull.slice(0, i));
      if (i >= goalFull.length) window.clearInterval(typeId);
    }, 28);

    const timers = [
      window.setTimeout(() => setSourcesOn(1), 700),
      window.setTimeout(() => setSourcesOn(2), 1050),
      window.setTimeout(() => setSourcesOn(3), 1400),
      window.setTimeout(() => setWhoOn(true), 1800),
    ];

    return () => {
      window.clearInterval(typeId);
      timers.forEach(clearTimeout);
    };
  }, []);

  const sources = [
    { label: "Posts", onAt: 1 },
    { label: "Notions", onAt: 2 },
    { label: "This Crowd only", onAt: 3 },
    { label: "Events", onAt: 99 },
  ];

  return (
    <motion.div
      key="session"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full"
    >
      <Header title="New session" subtitle="ai-questions" />
      <div className="px-4 flex-1 flex flex-col gap-4">
        <div>
          <p className="text-[10px] text-white/40 mb-1.5">Goal</p>
          <div className="rounded-xl bg-[#1c1c1e] px-3 py-2.5 min-h-[40px]">
            <p className="text-[11px] text-white/80">
              {typed}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-[1.5px] h-[12px] bg-[#2f6bff] align-middle ml-0.5"
              />
            </p>
          </div>
        </div>

        <div>
          <p className="text-[10px] text-white/40 mb-1.5">Sources the AI can read</p>
          <div className="flex flex-wrap gap-1.5">
            {sources.map((s) => {
              const on = sourcesOn >= s.onAt;
              return (
                <motion.span
                  key={s.label}
                  animate={{
                    backgroundColor: on ? "rgba(47,107,255,0.28)" : "rgba(255,255,255,0.06)",
                    borderColor: on ? "rgba(47,107,255,0.45)" : "rgba(255,255,255,0.08)",
                    color: on ? "#9bb8ff" : "rgba(255,255,255,0.28)",
                    scale: on ? [1, 1.08, 1] : 1,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px]"
                >
                  {!on && s.label === "Events" && <Ban size={9} />}
                  {s.label}
                </motion.span>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[10px] text-white/40 mb-1.5">Who sees the result</p>
          <div className="flex flex-wrap gap-1.5">
            <motion.span
              animate={{
                backgroundColor: whoOn ? "rgba(47,107,255,0.28)" : "rgba(255,255,255,0.06)",
                borderColor: whoOn ? "rgba(47,107,255,0.45)" : "rgba(255,255,255,0.08)",
                color: whoOn ? "#9bb8ff" : "rgba(255,255,255,0.35)",
              }}
              className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px]"
            >
              {whoOn && <Check size={9} />}
              Participants
            </motion.span>
            <span className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.06] px-2.5 py-1 text-[10px] text-white/30">
              Channel after publish
            </span>
          </div>
        </div>

        <div className="mt-auto pb-1">
          <BlueBtn label="Invite members" delay={2.1} pulse />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 3. Invite members ─── */

const members = [
  { name: "Caio Pereira", hint: "writes", role: "contribute" as const, color: BLUE, from: -56 },
  { name: "Lia Almeida", hint: "writes", role: "contribute" as const, color: BLUE, from: 56 },
  { name: "Rafa Santos", hint: "reads only", role: "view" as const, color: "rgba(255,255,255,0.14)", from: -56 },
  { name: "Thiago Silva", hint: "publishes", role: "publish" as const, color: GREEN, from: 56 },
];

const InvitePhase = () => {
  const [visible, setVisible] = useState(0);
  const [rolesOn, setRolesOn] = useState(false);

  useEffect(() => {
    const timers = members.map((_, i) =>
      window.setTimeout(() => setVisible(i + 1), 300 + i * 400),
    );
    timers.push(window.setTimeout(() => setRolesOn(true), 300 + members.length * 400 + 150));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="invite"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full"
    >
      <Header title="Invite members" subtitle="Everyone joins with a role" />
      <div className="px-4 flex-1 flex flex-col min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-[#1c1c1e] px-3 py-2.5 mb-3"
        >
          <p className="text-[11px] text-white/35">Search Crowd members</p>
        </motion.div>

        <div className="flex flex-col gap-2 flex-1 pb-1">
          {members.map((m, i) => {
            const show = visible > i;
            return (
              <div key={m.name} className="relative px-[2px] min-h-[52px]">
                <AnimatePresence>
                  {show && (
                    <motion.div
                      initial={{ opacity: 0, x: m.from }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="rounded-xl bg-[#1c1c1e] px-3 py-2.5 flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-[11px] text-white/70 font-medium shrink-0">
                        {m.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] text-white font-medium truncate">{m.name}</p>
                        <p className="text-[9px] text-white/35 whitespace-nowrap truncate">{m.hint}</p>
                      </div>
                      <motion.span
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={
                          rolesOn
                            ? { scale: [0.6, 1.15, 1], opacity: 1 }
                            : { scale: 0.6, opacity: 0 }
                        }
                        transition={{ duration: 0.45, delay: i * 0.06, ease }}
                        className="rounded-full px-2.5 py-1 text-[9px] font-semibold text-white lowercase shrink-0"
                        style={{ background: m.color }}
                      >
                        {m.role}
                      </motion.span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-3 pb-1">
          <BlueBtn label="Invite 3 members" delay={1.8} />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 4. Permissions ─── */

const perms = [
  { title: "Use AI channel", desc: "Inherited from Crowd Owner", allow: true },
  { title: "Start session", desc: "Owner, Admin or allowed Member", allow: true },
  { title: "Add members", desc: "Owner only", allow: false },
  { title: "Run prompt", desc: "Per-session permission", allow: true },
  { title: "Publish output", desc: "Per-session permission", allow: false },
];

const PermissionsPhase = () => {
  const [shown, setShown] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const timers = perms.map((_, i) =>
      window.setTimeout(() => setShown(i + 1), 280 + i * 220),
    );
    timers.push(window.setTimeout(() => setLocked(true), 280 + perms.length * 220 + 350));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="permissions"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full"
    >
      <Header title="Permissions" subtitle="ai-questions" />
      <div className="px-4 flex-1 flex flex-col">
        <p className="text-[10px] text-white/40 leading-relaxed mb-3">
          Who can do what in this session, inherits from the Crowd unless overridden.
        </p>
        <div className="flex flex-col gap-2 flex-1 overflow-hidden">
          {perms.map((p, i) => {
            if (shown <= i) return null;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease }}
                className="rounded-xl bg-[#1c1c1e] px-3 py-2.5 flex items-center gap-2"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-white font-medium">{p.title}</p>
                  <p className="text-[9px] text-white/35 truncate">{p.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <RefreshCw size={11} className="text-white/25" />
                  <motion.span
                    animate={
                      locked && p.allow
                        ? { scale: [1, 1.25, 1], backgroundColor: GREEN }
                        : { backgroundColor: p.allow && locked ? GREEN : "rgba(255,255,255,0.08)" }
                    }
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    <Check size={10} className={locked && p.allow ? "text-white" : "text-white/25"} />
                  </motion.span>
                  <motion.span
                    animate={
                      locked && !p.allow
                        ? { scale: [1, 1.25, 1], backgroundColor: RED }
                        : {
                            backgroundColor:
                              !p.allow && locked ? RED : "rgba(255,255,255,0.08)",
                          }
                    }
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.05 }}
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    <Ban size={10} className={locked && !p.allow ? "text-white" : "text-white/25"} />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-3 pb-1">
          <BlueBtn label="Done" delay={1.8} />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 5. Contributions ─── */

const contribs = [
  {
    name: "Caio Pereira",
    time: "4 min",
    role: "contribute",
    text: "Use the Blue Hills terrain notes and the $600 budget.",
    from: -56,
  },
  {
    name: "Lia Almeida",
    time: "2 min",
    role: "contribute",
    text: "Pin the 2 Notions about waterproofing.",
    from: 56,
  },
];

const ContributePhase = () => {
  const [cards, setCards] = useState(0);
  const draft = "Add the two trails we did in May and the group's average time";
  const [typed, setTyped] = useState("");
  const [sent, setSent] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const timers: number[] = [
      window.setTimeout(() => setCards(1), 350),
      window.setTimeout(() => setCards(2), 750),
    ];
    let i = 0;
    let typeId: number | undefined;
    const startType = window.setTimeout(() => {
      typeId = window.setInterval(() => {
        i += 1;
        setTyped(draft.slice(0, i));
        if (i >= draft.length) {
          window.clearInterval(typeId);
          timers.push(
            window.setTimeout(() => {
              setSent(true);
              setShowRun(true);
            }, 450),
          );
        }
      }, 22);
    }, 1200);
    timers.push(startType);
    return () => {
      timers.forEach(clearTimeout);
      if (typeId) window.clearInterval(typeId);
    };
  }, []);

  useEffect(() => {
    const id = window.setTimeout(scrollToBottom, 60);
    return () => window.clearTimeout(id);
  }, [cards, sent, showRun, typed]);

  const shownCount = cards + (sent ? 1 : 0);

  return (
    <motion.div
      key="contribute"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full min-h-0"
    >
      <div className="flex items-center gap-2.5 px-4 mb-2">
        <ArrowLeft size={16} className="text-white/55 shrink-0" />
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg,#1a9b8e,#0d3d4a)" }}
        >
          <Sparkles size={13} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[13px] font-semibold text-white">ai-questions</p>
            <span
              className="rounded px-1 py-px text-[8px] font-bold text-white uppercase"
              style={{ background: BLUE }}
            >
              AI
            </span>
          </div>
          <p className="text-[9px] text-white/40">Boston Runners · AI channel</p>
        </div>
        <MoreHorizontal size={16} className="text-white/40" />
      </div>

      <div className="flex items-center gap-2 px-4 mb-2.5">
        <div className="flex items-center -space-x-1.5">
          {["C", "L", "T"].map((letter, i) => (
            <span
              key={letter}
              className="relative w-6 h-6 rounded-full border border-black flex items-center justify-center text-[9px] text-white/80 font-medium"
              style={{
                background: ["#4a6fa5", "#6b5b95", "#2d8a6e"][i],
                zIndex: 3 - i,
              }}
            >
              {letter}
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#34c759] border border-black" />
            </span>
          ))}
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] shrink-0" />
        <span className="text-[10px] font-medium" style={{ color: GREEN }}>
          Active
        </span>
        <span className="text-[10px] text-white/40">3 in session</span>
      </div>

      <div className="px-4 mb-2.5">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-[#1c1c1e] px-3 py-2.5"
        >
          <p className="text-[9px] text-white/35 mb-1">Session goal</p>
          <p className="text-[11px] text-white/80 leading-snug">
            Summarize last week and recommend shoes for the Blue Hills trail.
          </p>
        </motion.div>
      </div>

      <div className="px-4 flex-1 flex flex-col min-h-0">
        <p className="text-[10px] text-white/35 mb-2 shrink-0">Contributions · {shownCount}</p>
        <div
          ref={scrollRef}
          className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto overflow-x-hidden pb-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {contribs.map((c, i) => {
            const show = cards > i;
            return (
              <div key={c.name} className="relative px-[2px] shrink-0">
                <AnimatePresence>
                  {show && (
                    <motion.div
                      initial={{ opacity: 0, x: c.from }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      onAnimationComplete={scrollToBottom}
                      className="rounded-2xl bg-[#1c1c1e] p-2.5"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="relative w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/60">
                          {c.name[0]}
                          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#34c759] border border-[#1c1c1e]" />
                        </span>
                        <p className="text-[11px] text-white font-medium truncate flex-1">{c.name}</p>
                        <span
                          className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold text-white lowercase"
                          style={{ background: BLUE }}
                        >
                          {c.role}
                        </span>
                        <span className="text-[9px] text-white/30">{c.time}</span>
                      </div>
                      <p className="text-[11px] text-white/75 leading-relaxed">{c.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, x: -56 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                onAnimationComplete={scrollToBottom}
                className="rounded-2xl bg-[#2f6bff]/15 border border-[#2f6bff]/25 p-2.5 mx-[2px] shrink-0"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative w-6 h-6 rounded-full bg-[#2f6bff]/30 flex items-center justify-center text-[10px] text-white">
                    Y
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#34c759] border border-[#0a0a0b]" />
                  </span>
                  <p className="text-[11px] text-white font-medium flex-1">You</p>
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold text-white lowercase"
                    style={{ background: GREEN }}
                  >
                    publish
                  </span>
                  <span className="text-[9px] text-white/30">now</span>
                </div>
                <p className="text-[11px] text-white/85 leading-relaxed">{draft}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="shrink-0">
        {showRun && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 w-full rounded-full py-2.5 text-[11px] font-semibold text-white lowercase"
            style={{ background: BLUE }}
          >
            Run with {shownCount} contributions
          </motion.button>
        )}

        <motion.div
          animate={{
            borderColor: sent ? "rgba(47,107,255,0.2)" : "rgba(47,107,255,0.7)",
          }}
          className="mt-2 mb-1 rounded-full border bg-[#1c1c1e] px-3 py-2 flex items-center gap-2"
        >
          <p className="flex-1 text-[10px] text-white/70 truncate min-h-[14px]">
            {sent ? "Write another contribution…" : typed}
            {!sent && typed.length < draft.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity }}
                className="inline-block w-[1.5px] h-[11px] bg-[#2f6bff] align-middle ml-0.5"
              />
            )}
          </p>
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{ background: BLUE }}
          >
            <ArrowUp size={13} className="text-white" />
          </span>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── main cycling scene ─── */

const phaseLabel: Record<Phase, string> = {
  choose: "choose type",
  session: "define session",
  invite: "invite + roles",
  permissions: "permissions",
  contribute: "contributions",
};

const AiSessionScene = ({ className = "" }: { className?: string }) => {
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
      <AiPhoneShell className="!w-full !max-w-none">
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
          {phase === "choose" && <ChoosePhase key="choose" />}
          {phase === "session" && <SessionPhase key="session" />}
          {phase === "invite" && <InvitePhase key="invite" />}
          {phase === "permissions" && <PermissionsPhase key="permissions" />}
          {phase === "contribute" && <ContributePhase key="contribute" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {phaseLabel[phase]}
      </p>
    </div>
  );
};

export default AiSessionScene;
export { ChoosePhase, SessionPhase, InvitePhase, PermissionsPhase, ContributePhase };
