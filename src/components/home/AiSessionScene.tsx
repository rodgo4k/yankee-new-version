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
  Search,
  Sparkles,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

const Face = ({
  src,
  letter,
  tint,
  size,
  online = false,
  onlineBorder = "#1c1c1e",
}: {
  src?: string;
  letter: string;
  tint: string;
  size: number;
  online?: boolean;
  onlineBorder?: string;
}) => (
  <span
    className="relative inline-flex shrink-0 items-center justify-center rounded-full text-white/85 font-medium"
    style={{
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      background: tint,
      fontSize: size * 0.38,
    }}
  >
    <span className="absolute inset-0 rounded-full overflow-hidden">
      {src ? (
        <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center">{letter}</span>
      )}
    </span>
    {online && (
      <span
        className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#34c759] z-[1]"
        style={{ border: `1.5px solid ${onlineBorder}` }}
      />
    )}
  </span>
);

type Phase = "choose" | "session" | "invite" | "permissions" | "contribute";

const phases: Phase[] = ["choose", "session", "invite", "permissions", "contribute"];

const PHASE_HOLD_MS: Record<Phase, number> = {
  choose: 5200,
  session: 5200,
  invite: 5000,
  permissions: 4800,
  contribute: 5600,
};

const VoiceCoil = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
    <path d="M10 3c0 0-3 2-3 5s3 5 3 5 3-2 3-5-3-5-3-5Z" strokeLinecap="round" />
    <path d="M10 8c0 0-2 1.2-2 3s2 3 2 3 2-1.2 2-3-2-3-2-3Z" strokeLinecap="round" opacity="0.7" />
  </svg>
);

const NavHeader = ({
  title,
  subtitle,
  centered = false,
  showMenu = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showMenu?: boolean;
}) => (
  <div className="relative flex items-center px-3.5 mb-3 min-h-[36px]">
    <ArrowLeft size={17} className="text-white/55 shrink-0 absolute left-3.5" strokeWidth={2.2} />
    <div className={`min-w-0 ${centered ? "mx-auto text-center px-8" : "ml-7 pr-8"}`}>
      <p className="text-[14px] font-semibold text-white leading-tight">{title}</p>
      {subtitle && <p className="text-[10px] text-white/40 leading-tight mt-0.5">{subtitle}</p>}
    </div>
    {showMenu && <MoreHorizontal size={16} className="text-white/40 shrink-0 absolute right-3.5" />}
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
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: 1,
      y: 0,
      boxShadow: pulse
        ? [
            "0 0 0 0 rgba(47,107,255,0)",
            "0 0 0 6px rgba(47,107,255,0.22)",
            "0 0 0 0 rgba(47,107,255,0)",
          ]
        : "none",
    }}
    transition={{
      opacity: { duration: 0.4, delay, ease },
      y: { duration: 0.4, delay, ease },
      boxShadow: pulse
        ? { duration: 1.5, delay: delay + 0.4, repeat: Infinity, ease: "easeInOut" }
        : undefined,
    }}
    className="w-full rounded-full py-3 text-[12px] font-semibold text-white"
    style={{ background: BLUE }}
  >
    {label}
  </motion.button>
);

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
      icon: <Pencil size={15} className="text-amber-300" />,
      iconBg: "bg-[#2a2a2e]",
      title: "Text",
      sub: "Messages, threads, files",
      from: -56,
    },
    {
      id: "voice",
      icon: <VoiceCoil className="w-4 h-4 text-emerald-300" />,
      iconBg: "bg-[#14352c]",
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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease }}
      className="flex flex-col h-full"
    >
      <NavHeader title="New channel" subtitle="Step 1 of 3" centered showMenu={false} />

      <div className="px-4 flex-1 flex flex-col min-h-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[11px] text-white/40 leading-relaxed"
        >
          AI channels require Owner permission and a Crowd-level toggle.
        </motion.p>

        <h3 className="mt-5 text-[24px] font-semibold text-white tracking-tight min-h-[30px] leading-none">
          {titleTyped}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-[2px] h-[1.05em] bg-white align-[-0.12em] ml-0.5"
            aria-hidden
          />
        </h3>
        <motion.p
          animate={{ opacity: titleTyped.length > 4 ? 1 : 0 }}
          className="mt-1.5 text-[12px] text-white/40"
        >
          How members will use this channel.
        </motion.p>

        <div className="mt-5 flex flex-col gap-2.5 pb-2">
          {cards.map((c, i) => {
            const show = visible > i;
            const active = c.id === "ai" && highlight;
            return (
              <div key={c.id} className="relative">
                <AnimatePresence>
                  {show && (
                    <motion.div
                      initial={{ opacity: 0, x: c.from }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        borderColor: active ? "rgba(47,107,255,0.55)" : "rgba(255,255,255,0.06)",
                        backgroundColor: active ? "rgba(47,107,255,0.1)" : "rgba(28,28,30,1)",
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="rounded-[16px] px-3.5 py-3.5 flex items-center gap-3 border box-border"
                    >
                      <motion.div
                        animate={
                          active
                            ? {
                                boxShadow: [
                                  "0 0 0 0 rgba(47,107,255,0)",
                                  "0 0 0 5px rgba(47,107,255,0.22)",
                                  "0 0 0 0 rgba(47,107,255,0)",
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 1.6, repeat: Infinity }}
                        className={`w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 ${c.iconBg}`}
                      >
                        {c.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[14px] font-semibold text-white">{c.title}</p>
                          {c.badge && (
                            <motion.span
                              animate={highlight ? { scale: [1, 1.06, 1] } : {}}
                              transition={{ duration: 1.2, repeat: Infinity }}
                              className="rounded-full px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-white uppercase"
                              style={{ background: BLUE }}
                            >
                              NEW
                            </motion.span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/40 mt-0.5">{c.sub}</p>
                      </div>
                      <ChevronRight size={15} className="text-white/25 shrink-0" />
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
      window.setTimeout(() => setSourcesOn(1), 600),
      window.setTimeout(() => setSourcesOn(2), 950),
      window.setTimeout(() => setSourcesOn(3), 1300),
      window.setTimeout(() => setSourcesOn(4), 1650),
      window.setTimeout(() => setWhoOn(true), 2000),
    ];

    return () => {
      window.clearInterval(typeId);
      timers.forEach(clearTimeout);
    };
  }, []);
  const sources = [
    { label: "Posts", onAt: 1, filled: false },
    { label: "Notions", onAt: 2, filled: false },
    { label: "Events", onAt: 3, filled: false },
    { label: "This Crowd only", onAt: 4, filled: true },
  ];

  return (
    <motion.div
      key="session"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease }}
      className="flex flex-col h-full"
    >
      <NavHeader title="New session" subtitle="ai-questions" />

      <div className="px-4 flex-1 flex flex-col gap-4 min-h-0">
        <div>
          <p className="text-[11px] text-white/45 mb-1.5">Goal</p>
          <div className="rounded-2xl bg-[#1c1c1e] px-3.5 py-3 min-h-[48px] border border-white/[0.06]">
            <p className="text-[12px] text-white/80 leading-snug">
              {typed || (
                <span className="text-white/25">e.g. recommend shoes for the Blue Hills trail…</span>
              )}
              {typed.length > 0 && typed.length < goalFull.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity }}
                  className="inline-block w-[1.5px] h-[12px] bg-[#2f6bff] align-middle ml-0.5"
                />
              )}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] text-white/45 mb-2">Sources the AI can read</p>
          <div className="flex flex-wrap gap-1.5">
            {sources.map((s) => {
              const on = sourcesOn >= s.onAt;
              const filled = on && s.filled;
              const outlined = on && !s.filled;
              return (
                <motion.span
                  key={s.label}
                  animate={{
                    backgroundColor: filled
                      ? "rgba(47,107,255,0.95)"
                      : outlined
                        ? "rgba(47,107,255,0.12)"
                        : "rgba(255,255,255,0.05)",
                    borderColor: on ? "rgba(47,107,255,0.65)" : "rgba(255,255,255,0.08)",
                    color: filled ? "#fff" : outlined ? "#9bb8ff" : "rgba(255,255,255,0.3)",
                    scale: on ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="inline-flex items-center rounded-full border px-2.5 py-1.5 text-[11px] font-medium"
                >
                  {s.label}
                </motion.span>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[11px] text-white/45 mb-2">Who sees the result</p>
          <div className="flex flex-wrap gap-1.5">
            <motion.span
              animate={{
                backgroundColor: whoOn ? "rgba(47,107,255,0.95)" : "rgba(255,255,255,0.05)",
                borderColor: whoOn ? "rgba(47,107,255,0.95)" : "rgba(255,255,255,0.08)",
                color: whoOn ? "#fff" : "rgba(255,255,255,0.35)",
              }}
              className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-[11px] font-medium"
            >
              {whoOn && <Check size={10} strokeWidth={2.5} />}
              Participants
            </motion.span>
            <span className="inline-flex items-center rounded-full border border-[#2f6bff]/55 bg-[#2f6bff]/10 px-2.5 py-1.5 text-[11px] font-medium text-[#9bb8ff]">
              Channel after publish
            </span>
          </div>
        </div>

        <div className="mt-auto pb-1">
          <BlueBtn label="Invite members" delay={2} pulse />
        </div>
      </div>
    </motion.div>
  );
};

const memberFaces = uniqueFacesFor([
  "Chris Parker",
  "Maya Reed",
  "Ryan Scott",
  "Tyler Shaw",
]);

const members = [
  {
    name: "Chris Parker",
    hint: "can add input",
    role: "contribute" as const,
    accent: BLUE,
    from: -56,
    tint: "#4a6fa5",
    invited: true,
    src: memberFaces[0],
  },
  {
    name: "Maya Reed",
    hint: "can add input",
    role: "contribute" as const,
    accent: BLUE,
    from: 56,
    tint: "#8b5a7a",
    invited: true,
    src: memberFaces[1],
  },
  {
    name: "Ryan Scott",
    hint: "reads only",
    role: "view" as const,
    accent: "rgba(255,255,255,0.45)",
    from: -56,
    tint: "#5a6b5a",
    invited: false,
    src: memberFaces[2],
  },
  {
    name: "Tyler Shaw",
    hint: "runs and publishes",
    role: "publish" as const,
    accent: GREEN,
    from: 56,
    tint: "#2d8a6e",
    invited: true,
    src: memberFaces[3],
  },
];

const InvitePhase = () => {
  const [visible, setVisible] = useState(0);
  const [rolesOn, setRolesOn] = useState(false);
  const [searchPulse, setSearchPulse] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setSearchPulse(true), 200),
      ...members.map((_, i) => window.setTimeout(() => setVisible(i + 1), 400 + i * 400)),
    ];
    timers.push(window.setTimeout(() => setRolesOn(true), 400 + members.length * 400 + 150));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="invite"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease }}
      className="flex flex-col h-full"
    >
      <NavHeader title="Invite members" subtitle="Everyone joins with a role" />

      <div className="px-4 flex-1 flex flex-col min-h-0">
        <motion.div
          animate={{
            borderColor: searchPulse ? "rgba(47,107,255,0.35)" : "rgba(255,255,255,0.06)",
          }}
          className="rounded-2xl bg-[#1c1c1e] border px-3 py-2.5 mb-3 flex items-center gap-2"
        >
          <Search size={13} className="text-white/30 shrink-0" />
          <p className="text-[12px] text-white/35">Search Crowd members</p>
        </motion.div>

        <div className="flex flex-col gap-2 flex-1 pb-1 overflow-hidden">
          {members.map((m, i) => {
            const show = visible > i;
            return (
              <div key={m.name} className="relative min-h-[56px]">
                <AnimatePresence>
                  {show && (
                    <motion.div
                      initial={{ opacity: 0, x: m.from }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="rounded-2xl bg-[#1c1c1e] px-3 py-2.5 flex items-center gap-2.5 border border-white/[0.06]"
                    >
                      <span className="relative shrink-0">
                        <Face src={m.src} letter={m.name[0]} tint={m.tint} size={36} />
                        {m.invited && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.25, type: "spring", stiffness: 400 }}
                            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2f6bff] border-2 border-[#1c1c1e] flex items-center justify-center"
                          >
                            <Check size={8} className="text-white" strokeWidth={3} />
                          </motion.span>
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] text-white font-medium truncate">{m.name}</p>
                        <p className="text-[10px] text-white/35 whitespace-nowrap truncate">{m.hint}</p>
                      </div>
                      <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={
                          rolesOn
                            ? { scale: [0.5, 1.1, 1], opacity: 1 }
                            : { scale: 0.5, opacity: 0 }
                        }
                        transition={{ duration: 0.4, delay: i * 0.06, ease }}
                        className="rounded-full px-2.5 py-1 text-[10px] font-semibold lowercase shrink-0 border bg-transparent"
                        style={{ borderColor: m.accent, color: m.accent }}
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
          <BlueBtn label="Invite 3 members" delay={1.9} pulse />
        </div>
      </div>
    </motion.div>
  );
};

const perms = [
  { title: "Use AI channel", desc: "Inherited from Crowd Owner", state: "inherit" as const },
  { title: "Start session", desc: "Owner, Admin or allowed Member", state: "allow" as const },
  { title: "Add members", desc: "Owner only", state: "deny" as const },
  { title: "Run prompt", desc: "Per-session permission", state: "allow" as const },
  { title: "Publish output", desc: "Per-session permission", state: "deny" as const },
];

const PermissionsPhase = () => {
  const [shown, setShown] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const timers = perms.map((_, i) =>
      window.setTimeout(() => setShown(i + 1), 280 + i * 240),
    );
    timers.push(window.setTimeout(() => setLocked(true), 280 + perms.length * 240 + 300));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="permissions"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease }}
      className="flex flex-col h-full"
    >
      <NavHeader title="Permissions" subtitle="ai-questions" />

      <div className="px-4 flex-1 flex flex-col min-h-0">
        <p className="text-[11px] text-white/40 leading-relaxed mb-3">
          Who can do what in this session. Inherits from the Crowd unless overridden.
        </p>

        <div className="flex flex-col gap-2 flex-1 overflow-hidden">
          {perms.map((p, i) => {
            if (shown <= i) return null;
            const inheritOn = locked && p.state === "inherit";
            const allowOn = locked && p.state === "allow";
            const denyOn = locked && p.state === "deny";
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-2xl bg-[#1c1c1e] border border-white/[0.06] px-3 py-2.5 flex items-center gap-2"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-white font-medium">{p.title}</p>
                  <p className="text-[10px] text-white/35 truncate">{p.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <motion.span
                    animate={
                      inheritOn
                        ? { scale: [1, 1.18, 1], backgroundColor: BLUE }
                        : { backgroundColor: "rgba(255,255,255,0.07)" }
                    }
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                  >
                    <RefreshCw
                      size={12}
                      className={inheritOn ? "text-white" : "text-white/30"}
                    />
                  </motion.span>
                  <motion.span
                    animate={
                      allowOn
                        ? { scale: [1, 1.18, 1], backgroundColor: GREEN }
                        : { backgroundColor: "rgba(255,255,255,0.07)" }
                    }
                    transition={{ duration: 0.35, delay: i * 0.04 + 0.05 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                  >
                    <Check
                      size={12}
                      className={allowOn ? "text-white" : "text-white/25"}
                      strokeWidth={2.5}
                    />
                  </motion.span>
                  <motion.span
                    animate={
                      denyOn
                        ? { scale: [1, 1.18, 1], backgroundColor: RED }
                        : { backgroundColor: "rgba(255,255,255,0.07)" }
                    }
                    transition={{ duration: 0.35, delay: i * 0.04 + 0.1 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                  >
                    <Ban size={12} className={denyOn ? "text-white" : "text-white/25"} />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-3 pb-1">
          <BlueBtn label="Done" delay={1.7} />
        </div>
      </div>
    </motion.div>
  );
};

const contribFaces = uniqueFacesFor(["Chris Parker", "Maya Reed"]);
const youFace = faceFor("Mia Taylor");
const sessionFaces = uniqueFacesFor(["Chris Parker", "Maya Reed", "Tyler Shaw"]);

const contribs = [
  {
    name: "Chris Parker",
    time: "4 min",
    role: "contribute",
    text: "Use the Blue Hills terrain notes and the $600 budget.",
    from: -56,
    tint: "#4a6fa5",
    src: contribFaces[0],
  },
  {
    name: "Maya Reed",
    time: "2 min",
    role: "contribute",
    text: "Pin the 2 Notions about waterproofing.",
    from: 56,
    tint: "#8b5a7a",
    src: contribFaces[1],
  },
];

const ContributePhase = ({ onSent }: { onSent?: () => void } = {}) => {
  const [cards, setCards] = useState(0);
  const draft = "Add the two trails we did in May and the group's average time";
  const [typed, setTyped] = useState("");
  const [ready, setReady] = useState(false);
  const [sent, setSent] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const [multiline, setMultiline] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const draftTextRef = useRef<HTMLParagraphElement>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  const sendContribution = () => {
    if (!ready || sent) return;
    setSent(true);
    setShowRun(true);
    setTyped("");
    setMultiline(false);
    onSent?.();
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
          setReady(true);
        }
      }, 52);
    }, 1200);
    timers.push(startType);
    return () => {
      timers.forEach(clearTimeout);
      if (typeId) window.clearInterval(typeId);
    };
  }, []);

  useEffect(() => {
    const el = draftTextRef.current;
    if (!el || sent || !typed) {
      setMultiline(false);
      return;
    }
    const lineHeight = Number.parseFloat(getComputedStyle(el).lineHeight) || 15;
    setMultiline(el.scrollHeight > lineHeight + 2);
  }, [typed, sent]);

  useEffect(() => {
    const id = window.setTimeout(scrollToBottom, 60);
    return () => window.clearTimeout(id);
  }, [cards, sent, showRun, typed, multiline]);

  const shownCount = cards + (sent ? 1 : 0);

  return (
    <motion.div
      key="contribute"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease }}
      className="flex flex-col h-full min-h-0"
    >
      <div className="flex items-center gap-2 px-3.5 mb-2 shrink-0">
        <ArrowLeft size={17} className="text-white/55 shrink-0" strokeWidth={2.2} />
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(45,212,168,0.35)]"
          style={{ background: "linear-gradient(135deg,#2dd4a8,#0f766e)" }}
        >
          <Sparkles size={12} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[13px] font-semibold text-white leading-none">ai-questions</p>
            <span className="rounded-[4px] border border-white/20 px-1 py-px text-[8px] font-bold text-white/70 uppercase">
              AI
            </span>
          </div>
          <p className="text-[9px] text-white/40 mt-0.5">Boston Runners · AI channel</p>
        </div>
        <MoreHorizontal size={16} className="text-white/40" />
      </div>

      <div className="flex items-center gap-2 px-3.5 mb-2.5 shrink-0">
        <div className="flex items-center -space-x-1.5">
          {sessionFaces.map((src, i) => (
            <span
              key={i}
              className="relative w-[22px] h-[22px] rounded-full border border-black overflow-hidden shrink-0"
              style={{ zIndex: 3 - i }}
            >
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#34c759]/18 px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] animate-pulse" />
          <span className="text-[10px] font-semibold" style={{ color: GREEN }}>
            Active
          </span>
        </span>
        <span className="text-[10px] text-white/40">3 in session</span>
      </div>

      <div className="px-3.5 mb-2.5 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[#1c1c1e] border border-white/5 px-3 py-2.5"
        >
          <p className="text-[10px] text-white/35 mb-1">Session goal</p>
          <p className="text-[12px] text-white/85 leading-snug">
            Summarize last week and recommend shoes for the Blue Hills trail.
          </p>
        </motion.div>
      </div>

      <div className="px-3.5 flex-1 flex flex-col min-h-0">
        <p className="text-[10px] text-white/35 mb-2 shrink-0">Contributions · {shownCount}</p>
        <div
          ref={scrollRef}
          className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto overflow-x-hidden pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {contribs.map((c, i) => {
            const show = cards > i;
            return (
              <div key={c.name} className="relative shrink-0">
                <AnimatePresence>
                  {show && (
                    <motion.div
                      initial={{ opacity: 0, x: c.from }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      onAnimationComplete={scrollToBottom}
                      className="rounded-2xl bg-[#1c1c1e] border border-white/5 p-2.5"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Face src={c.src} letter={c.name[0]} tint={c.tint} size={24} online />
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
                initial={{ opacity: 0, x: -56, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                onAnimationComplete={scrollToBottom}
                className="rounded-2xl bg-[#2f6bff]/12 border border-[#2f6bff]/35 p-2.5 shrink-0"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Face
                    src={youFace}
                    letter="Y"
                    tint="#2f6bff"
                    size={24}
                    online
                    onlineBorder="#0a0a0b"
                  />
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

        {showRun && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] text-white/30 text-center mt-1.5 shrink-0"
          >
            Hold your contribution to edit or remove it before running.
          </motion.p>
        )}

        <div className="shrink-0 pt-1">
          <AnimatePresence>
            {showRun && (
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 8, height: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                  boxShadow: [
                    "0 0 0 0 rgba(47,107,255,0)",
                    "0 0 0 6px rgba(47,107,255,0.22)",
                    "0 0 0 0 rgba(47,107,255,0)",
                  ],
                }}
                exit={{ opacity: 0, y: 8 }}
                transition={{
                  boxShadow: { duration: 1.5, repeat: Infinity, delay: 0.3 },
                }}
                className="mt-1.5 w-full rounded-full py-3 text-[12px] font-semibold text-white"
                style={{ background: BLUE }}
              >
                Run with {shownCount} contributions
              </motion.button>
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              borderColor: sent
                ? "rgba(255,255,255,0.08)"
                : ready
                  ? "rgba(47,107,255,0.85)"
                  : typed
                    ? "rgba(47,107,255,0.45)"
                    : "rgba(255,255,255,0.08)",
            }}
            className={`mt-2 mb-1 border bg-[#1c1c1e] px-3 flex gap-2 ${
              multiline
                ? "rounded-[22px] py-2.5 items-end"
                : "rounded-full py-2 items-center"
            }`}
          >
            <p
              ref={draftTextRef}
              className="flex-1 text-[11px] text-white/70 leading-[1.35] min-w-0"
              style={
                sent || !typed
                  ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }
                  : { whiteSpace: "pre-wrap", overflowWrap: "anywhere", wordBreak: "break-word" }
              }
            >
              {sent || !typed ? (
                <span className="text-white/35">Write another contribution…</span>
              ) : (
                <>
                  {typed}
                  {typed.length < draft.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.55, repeat: Infinity }}
                      className="inline-block w-[1.5px] h-[11px] bg-[#2f6bff] align-[-1px] ml-0.5"
                    />
                  )}
                </>
              )}
            </p>
            <motion.button
              type="button"
              aria-label="Send contribution"
              disabled={!ready || sent}
              onClick={sendContribution}
              initial={false}
              animate={
                ready && !sent
                  ? {
                      opacity: 1,
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(47,107,255,0)",
                        "0 0 0 5px rgba(47,107,255,0.28)",
                        "0 0 0 0 rgba(47,107,255,0)",
                      ],
                    }
                  : {
                      opacity: ready ? 1 : 0.35,
                      scale: 1,
                      boxShadow: "0 0 0 0 rgba(47,107,255,0)",
                    }
              }
              transition={
                ready && !sent
                  ? { duration: 1.25, repeat: Infinity, ease: "easeInOut", delay: 0.15 }
                  : { duration: 0.25, ease }
              }
              whileTap={ready && !sent ? { scale: 0.92 } : undefined}
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{ background: BLUE }}
            >
              <ArrowUp size={13} className="text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const phaseLabel: Record<Phase, string> = {
  choose: "choose type",
  session: "define session",
  invite: "invite + roles",
  permissions: "permissions",
  contribute: "contributions",
};

const AiSessionScene = ({ className = "" }: { className?: string }) => {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [contributeDone, setContributeDone] = useState(false);
  const phase = phases[phaseIndex];

  useEffect(() => {
    if (phase === "contribute" && !contributeDone) return;
    const hold = phase === "contribute" && contributeDone ? 2800 : PHASE_HOLD_MS[phase];
    const id = window.setTimeout(() => {
      setPhaseIndex((i) => (i + 1) % phases.length);
      setContributeDone(false);
    }, hold);
    return () => window.clearTimeout(id);
  }, [phase, phaseIndex, contributeDone]);

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
          {phase === "contribute" && (
            <ContributePhase key="contribute" onSent={() => setContributeDone(true)} />
          )}
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
