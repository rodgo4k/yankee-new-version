import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  FileText,
  MoreHorizontal,
  Play,
  Plus,
  Sparkles,
} from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const SAGE = "#5eead4";

const Diamond = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
    <path d="M8 1.5 14.5 8 8 14.5 1.5 8 8 1.5Z" />
  </svg>
);

const IterateIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <path d="M2 10c2-4 4-2 6 0s4 4 6 0" strokeLinecap="round" />
  </svg>
);

export const AiChannelHeader = ({
  iconTone = "green",
}: {
  iconTone?: "green" | "blue";
}) => (
  <div className="flex items-center gap-2 px-3.5 mb-2">
    <ArrowLeft size={17} className="text-white/55 shrink-0" strokeWidth={2.2} />
    <div
      className="w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(94,234,212,0.35)]"
      style={{
        background:
          iconTone === "blue"
            ? "linear-gradient(135deg,#2f6bff,#1a4fd6)"
            : "linear-gradient(135deg,#2dd4a8,#0f766e)",
      }}
    >
      <Sparkles size={12} className="text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-1.5">
        <p className="text-[13px] font-semibold text-white leading-none">ai-questions</p>
        <span className="rounded-[4px] border border-white/20 px-1 py-px text-[8px] font-bold text-white/70 uppercase tracking-wide">
          AI
        </span>
      </div>
      <p className="text-[9px] text-white/40 mt-0.5 leading-none">Boston Runners · AI channel</p>
    </div>
    <MoreHorizontal size={16} className="text-white/45 shrink-0" />
  </div>
);

export const OnlinePresence = ({ right = "you can run" }: { right?: string }) => (
  <div className="flex items-center gap-2 px-3.5 mb-2.5">
    <div className="flex items-center -space-x-1.5">
      {["C", "M", "T"].map((letter, i) => (
        <span
          key={letter}
          className="relative w-[22px] h-[22px] rounded-full border border-black flex items-center justify-center text-[8px] text-white/85 font-medium"
          style={{
            background: ["#4a6fa5", "#8b5a7a", "#2d8a6e"][i],
            zIndex: 3 - i,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
    <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] shrink-0" />
    <span className="text-[10px] font-medium" style={{ color: GREEN }}>
      3 online
    </span>
    {right ? (
      <span className="ml-auto text-[10px] font-medium" style={{ color: GREEN }}>
        {right}
      </span>
    ) : null}
  </div>
);

const ChatMessage = ({
  name,
  time,
  text,
  initial,
  tint,
  delay = 0,
}: {
  name: string;
  time: string;
  text: string;
  initial: string;
  tint: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay, ease }}
    className="flex items-start gap-2 px-3.5 mb-3"
  >
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] text-white/85 font-medium shrink-0 mt-0.5"
      style={{ background: tint }}
    >
      {initial}
    </span>
    <div className="min-w-0">
      <div className="flex items-baseline gap-1.5 mb-0.5">
        <p className="text-[11px] font-semibold text-white">{name}</p>
        <p className="text-[9px] text-white/30">{time}</p>
      </div>
      <p className="text-[11px] text-white/80 leading-relaxed">{text}</p>
    </div>
  </motion.div>
);

const Composer = ({
  focused = false,
  value = "Message #ai-questions",
  showSlash = true,
}: {
  focused?: boolean;
  value?: string;
  showSlash?: boolean;
}) => (
  <motion.div
    animate={{
      borderColor: focused ? "rgba(47,107,255,0.85)" : "rgba(255,255,255,0.08)",
      boxShadow: focused
        ? [
            "0 0 0 0 rgba(47,107,255,0)",
            "0 0 0 3px rgba(47,107,255,0.18)",
            "0 0 0 0 rgba(47,107,255,0)",
          ]
        : "none",
    }}
    transition={{ duration: 1.6, repeat: focused ? Infinity : 0, ease: "easeInOut" }}
    className="mx-3.5 mb-1 flex items-center gap-2 rounded-full border bg-[#1c1c1e] pl-2 pr-1.5 py-1.5"
  >
    {showSlash && (
      <span className="w-7 h-7 rounded-[8px] bg-white/5 flex items-center justify-center text-[11px] font-semibold text-[#5eead4] shrink-0">
        /
      </span>
    )}
    <p className="flex-1 text-[10px] text-white/40 truncate">{value}</p>
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
      style={{ background: BLUE }}
    >
      <ArrowUp size={13} className="text-white" />
    </span>
  </motion.div>
);

/** Collaborative prompt card in the channel */
export const CollabPromptPhase = () => {
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 350),
      window.setTimeout(() => setStep(2), 900),
      window.setTimeout(() => setStep(3), 1450),
      window.setTimeout(() => setStep(4), 1950),
      window.setTimeout(() => setStep(5), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(scrollToBottom, 70);
    return () => window.clearTimeout(id);
  }, [step]);

  const inputs = [
    {
      who: "Chris",
      text: "Use the Blue Hills terrain notes and the $600 per-person budget.",
      from: -48,
      reaction: true,
    },
    {
      who: "Maya",
      text: "Pin the 2 Notions I added about waterproofing.",
      from: 48,
      reaction: false,
    },
  ];

  return (
    <motion.div
      key="collab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full min-h-0"
    >
      <div className="shrink-0">
        <AiChannelHeader iconTone="green" />
        <OnlinePresence />
      </div>

      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ChatMessage
          name="Maya Reed"
          time="9:32"
          text="let's lock the Blue Hills trail training for this weekend"
          initial="M"
          tint="#8b5a7a"
        />

        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease }}
              onAnimationComplete={scrollToBottom}
              className="mx-3 mb-2 rounded-2xl bg-[#16181d] border border-white/10 p-3 flex flex-col gap-2.5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="w-5 h-5 rounded-md bg-[#134e4a] flex items-center justify-center text-[#5eead4]">
                  <Diamond className="w-2.5 h-2.5" />
                </span>
                <p className="text-[11px] font-semibold text-white">Collaborative prompt</p>
                <motion.span
                  animate={{ opacity: [1, 0.55, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-semibold"
                  style={{ background: "rgba(52,199,89,0.18)", color: GREEN }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                  live
                </motion.span>
                <span className="ml-auto text-[9px] text-white/35">3 inputs</span>
              </div>

              <p className="text-[11px] text-white/90 leading-snug">
                Recommend trail shoes for wet Blue Hills and summarize the week.
              </p>

              <div className="flex flex-col gap-2">
                {inputs.map((inp, i) => {
                  if (step < i + 2) return null;
                  return (
                    <motion.div
                      key={inp.who}
                      initial={{ opacity: 0, x: inp.from }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, ease }}
                      onAnimationComplete={scrollToBottom}
                      className="rounded-xl bg-[#1c1c1e] px-2.5 py-2"
                    >
                      <p className="text-[9px] text-white/40 mb-0.5">{inp.who}</p>
                      <p className="text-[10px] text-white/75 leading-relaxed">{inp.text}</p>
                      {inp.reaction && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.25, type: "spring", stiffness: 400 }}
                          className="mt-1.5 inline-flex items-center gap-0.5 rounded-full bg-white/5 px-1.5 py-0.5 text-[9px]"
                        >
                          👍 2
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-dashed border-white/15 px-2.5 py-2 text-[10px] text-white/35 flex items-center gap-1.5"
                >
                  <Plus size={11} />
                  add your input
                </motion.div>
              )}

              {step >= 4 && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    boxShadow: [
                      "0 0 0 0 rgba(47,107,255,0)",
                      "0 0 0 6px rgba(47,107,255,0.2)",
                      "0 0 0 0 rgba(47,107,255,0)",
                    ],
                  }}
                  transition={{
                    opacity: { duration: 0.35 },
                    boxShadow: { duration: 1.6, repeat: Infinity, delay: 0.4 },
                  }}
                  className="w-full rounded-full py-2.5 text-[11px] font-semibold text-white"
                  style={{ background: BLUE }}
                >
                  Run prompt
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 px-3.5 mt-1 mb-1 flex items-center gap-2 min-h-[16px]">
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5"
            >
              <span className="w-4 h-4 rounded-full bg-[#8b5a7a] flex items-center justify-center text-[7px] text-white">
                M
              </span>
              <p className="text-[9px] text-white/40">Maya is typing…</p>
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-white/40"
              >
                ···
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0">
        <Composer showSlash />
      </div>
    </motion.div>
  );
};

/** Result after the crowd ran the prompt */
export const ResultPhase = () => {
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 250),
      window.setTimeout(() => setStep(2), 700),
      window.setTimeout(() => setStep(3), 1100),
      window.setTimeout(() => setStep(4), 1550),
      window.setTimeout(() => setStep(5), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = window.setTimeout(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(id);
  }, [step]);

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full min-h-0"
    >
      <div className="shrink-0">
        <AiChannelHeader iconTone="blue" />
        <OnlinePresence />
      </div>

      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2.5 rounded-full bg-[#1c1c1e] px-3 py-2 flex items-center justify-between"
            >
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-3.5 h-3.5 rounded-full bg-[#34c759]/25 flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                </motion.span>
                <p className="text-[10px] text-white/55">Prompt ran</p>
              </div>
              <p className="text-[9px] text-white/35">3 inputs · Chris, Maya, you</p>
            </motion.div>
          )}
        </AnimatePresence>

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 mb-2"
          >
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: BLUE }}
            >
              <Sparkles size={10} className="text-white" />
            </span>
            <p className="text-[10px] text-white/55">Yankee AI synthesized 3 inputs</p>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex flex-col gap-3"
          >
            <div>
              <p className="text-[8px] tracking-[0.14em] text-white/35 uppercase mb-1">Top pick</p>
              <div className="flex items-start justify-between gap-2">
                <p className="text-[14px] font-semibold text-white leading-tight">
                  Salomon Speedcross 6
                </p>
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                  style={{ background: BLUE }}
                >
                  $580
                </motion.span>
              </div>
              <p className="mt-1.5 text-[10px] text-white/55 leading-relaxed">
                Best grip on wet rock, fits the $600 budget, straight from Maya&apos;s Notions.
              </p>
            </div>

            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-[8px] tracking-[0.14em] text-white/35 uppercase mb-1">The week</p>
                <p className="text-[10px] text-white/55 leading-relaxed">
                  Technical trail focus, rain over the weekend, and a long debate about grip on wet
                  rock.
                </p>
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-1.5"
              >
                {[
                  { label: "Boston Runners chat", color: GREEN },
                  { label: "2 Notions", color: BLUE },
                  { label: "budget", color: SAGE },
                ].map((s, i) => (
                  <motion.span
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/8 px-2 py-0.5 text-[9px] text-white/55"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                    {s.label}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2.5 flex flex-col gap-2 pb-1"
          >
            <div className="flex items-center gap-1.5">
              {["🔥 3", "👥 2", "+"].map((r, i) => (
                <motion.span
                  key={r}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full bg-[#1c1c1e] px-2 py-1 text-[10px] text-white/70"
                >
                  {r}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-1.5">
              <span className="flex-1 text-center rounded-full bg-[#1c1c1e] py-2 text-[10px] text-white/70">
                Iterate
              </span>
              <span className="flex-1 text-center rounded-full bg-[#1c1c1e] py-2 text-[10px] text-white/70">
                Save
              </span>
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(47,107,255,0)",
                    "0 0 18px 2px rgba(34,211,238,0.35)",
                    "0 0 0 0 rgba(47,107,255,0)",
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="flex-[1.45] text-center rounded-full py-2 text-[10px] font-semibold text-white"
                style={{ background: "linear-gradient(90deg,#2f6bff,#22d3ee)" }}
              >
                Publish to feed
              </motion.span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="shrink-0 mt-1">
        <Composer showSlash />
      </div>
    </motion.div>
  );
};

/** Slash commands sheet — matches app COMMANDS menu */
export const CommandsPhase = () => {
  const [sheetIn, setSheetIn] = useState(false);
  const [active, setActive] = useState(0);
  const [typedSlash, setTypedSlash] = useState("");

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setSheetIn(true), 400),
      window.setTimeout(() => setTypedSlash("/"), 200),
    ];
    // highlight moves down then settles on /prompt
    [0, 1, 2, 3, 4, 0].forEach((idx, i) => {
      timers.push(window.setTimeout(() => setActive(idx), 700 + i * 420));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const commands = [
    {
      icon: <Diamond className="w-3 h-3 text-[#5eead4]" />,
      iconBg: "bg-[#134e4a]",
      cmd: "/prompt",
      desc: "Start a collaborative prompt",
    },
    {
      icon: <Play size={12} className="text-white/75 fill-white/75" />,
      iconBg: "bg-white/5",
      cmd: "/run",
      desc: "Run the current prompt",
    },
    {
      icon: <Plus size={13} className="text-white/75" />,
      iconBg: "bg-white/5",
      cmd: "/invite",
      desc: "Add people to the session",
    },
    {
      icon: <FileText size={12} className="text-white/75" />,
      iconBg: "bg-white/5",
      cmd: "/sources",
      desc: "Choose what the AI can read",
    },
    {
      icon: <IterateIcon className="w-3.5 h-3.5 text-white/75" />,
      iconBg: "bg-white/5",
      cmd: "/iterate",
      desc: "Branch the last result",
    },
  ];

  return (
    <motion.div
      key="commands"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full min-h-0 relative"
    >
      <div className="shrink-0">
        <AiChannelHeader iconTone="green" />
        <OnlinePresence />
      </div>

      <ChatMessage
        name="Maya Reed"
        time="9:32"
        text="let's lock the Blue Hills trail training for this weekend"
        initial="M"
        tint="#8b5a7a"
        delay={0.1}
      />

      <div className="flex-1 min-h-0 relative overflow-hidden">
        {/* dimmed chat backdrop */}
        <motion.div
          animate={{ opacity: sheetIn ? 0.45 : 0 }}
          className="absolute inset-0 bg-black/50 z-10 pointer-events-none"
        />

        <AnimatePresence>
          {sheetIn && (
            <motion.div
              initial={{ y: "110%", opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "110%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-2.5 bottom-0 top-2 z-20 rounded-2xl bg-[#1a1d23] border border-white/10 shadow-[0_-8px_40px_rgba(0,0,0,0.55)] flex flex-col overflow-hidden"
            >
              <div className="px-3 pt-3 pb-1.5">
                <p className="text-[9px] tracking-[0.16em] text-white/35 uppercase">Commands</p>
              </div>

              <div className="flex-1 px-1.5 pb-2 overflow-hidden">
                {commands.map((c, i) => {
                  const on = active === i;
                  return (
                    <motion.div
                      key={c.cmd}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        backgroundColor: on ? "rgba(19,78,74,0.55)" : "rgba(0,0,0,0)",
                      }}
                      transition={{
                        opacity: { delay: 0.15 + i * 0.05, duration: 0.3 },
                        x: { delay: 0.15 + i * 0.05, duration: 0.35, ease },
                        backgroundColor: { duration: 0.25 },
                      }}
                      className="rounded-xl px-2.5 py-2.5 flex items-center gap-2.5 mb-0.5"
                    >
                      <motion.span
                        animate={
                          on
                            ? {
                                boxShadow: [
                                  "0 0 0 0 rgba(94,234,212,0)",
                                  "0 0 0 4px rgba(94,234,212,0.2)",
                                  "0 0 0 0 rgba(94,234,212,0)",
                                ],
                              }
                            : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
                        }
                        transition={{ duration: 1.2, repeat: on ? Infinity : 0 }}
                        className={`w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0 ${c.iconBg}`}
                      >
                        {c.icon}
                      </motion.span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold text-white leading-none">{c.cmd}</p>
                        <p className="text-[10px] text-white/40 mt-1 leading-none truncate">
                          {c.desc}
                        </p>
                      </div>
                      {on && (
                        <motion.span
                          layoutId="cmd-check"
                          className="w-1.5 h-1.5 rounded-full bg-[#5eead4] shrink-0"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 mt-1 relative z-30">
        <Composer focused={sheetIn} value={typedSlash || "Message #ai-questions"} showSlash />
      </div>
    </motion.div>
  );
};
