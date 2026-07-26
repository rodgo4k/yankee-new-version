import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  FileText,
  List,
  MoreHorizontal,
  Play,
  Sparkles,
  UserPlus,
  Waves,
} from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

export const AiChannelHeader = ({
  rightLabel,
}: {
  rightLabel?: string;
}) => (
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
    {rightLabel ? (
      <span className="text-[9px] font-medium shrink-0" style={{ color: GREEN }}>
        {rightLabel}
      </span>
    ) : null}
    <MoreHorizontal size={16} className="text-white/40 shrink-0" />
  </div>
);

export const OnlinePresence = ({
  label = "Active",
  detail = "3 in session",
  right,
}: {
  label?: string;
  detail?: string;
  right?: string;
}) => (
  <div className="flex items-center gap-2 px-4 mb-2.5">
    <div className="flex items-center -space-x-1.5">
      {["C", "M", "T"].map((letter, i) => (
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
      {label}
    </span>
    <span className="text-[10px] text-white/40">{detail}</span>
    {right ? (
      <span className="ml-auto text-[10px] font-medium" style={{ color: GREEN }}>
        {right}
      </span>
    ) : null}
  </div>
);

/** Collaborative prompt card in the channel (live crowd inputs) */
export const CollabPromptPhase = () => {
  const [showInputs, setShowInputs] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShowInputs(1), 400),
      window.setTimeout(() => setShowInputs(2), 900),
      window.setTimeout(() => setTyping(true), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(scrollToBottom, 60);
    return () => window.clearTimeout(id);
  }, [showInputs, typing]);

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
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full min-h-0"
    >
      <div className="shrink-0">
        <AiChannelHeader />
        <OnlinePresence label="3 online" detail="" />
      </div>

      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="px-4 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] px-3 py-2.5"
          >
            <p className="text-[11px] text-white/80 leading-relaxed">
              let&apos;s lock the Blue Hills trail training for this weekend
            </p>
            <p className="mt-1 text-[9px] text-white/30">Maya Reed · 9:32</p>
          </motion.div>
        </div>

        <div className="px-3 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease }}
            className="rounded-2xl bg-[#141416] border border-white/8 p-3 flex flex-col gap-2.5"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-5 h-5 rounded-md bg-[#1a9b8e]/30 flex items-center justify-center">
                <Sparkles size={11} className="text-[#5eead4]" />
              </span>
              <p className="text-[11px] font-semibold text-white">Collaborative prompt</p>
              <span
                className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-semibold"
                style={{ background: "rgba(52,199,89,0.2)", color: GREEN }}
              >
                <span className="w-1 h-1 rounded-full bg-[#34c759]" />
                live
              </span>
              <span className="ml-auto text-[9px] text-white/35">3 inputs</span>
            </div>

            <p className="text-[11px] text-white/85 leading-snug">
              Recommend trail shoes for wet Blue Hills and summarize the week.
            </p>

            <div className="flex flex-col gap-2">
              {inputs.map((inp, i) => {
                if (showInputs <= i) return null;
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
                      <span className="mt-1.5 inline-flex items-center gap-0.5 rounded-full bg-white/5 px-1.5 py-0.5 text-[9px]">
                        👍 2
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-xl border border-dashed border-white/15 px-2.5 py-2 text-[10px] text-white/35">
              + add your input
            </div>

            <button
              type="button"
              className="w-full rounded-full py-2.5 text-[11px] font-semibold text-white lowercase"
              style={{ background: BLUE }}
            >
              Run prompt
            </button>
          </motion.div>
        </div>
      </div>

      <div className="shrink-0 px-4 mt-2 mb-1 flex items-center gap-2">
        <AnimatePresence>
          {typing && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[9px] text-white/35"
            >
              Maya is typing…
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 px-4 mb-1 flex items-center gap-2 rounded-full bg-[#1c1c1e] px-3 py-2 mx-0">
        <p className="flex-1 text-[10px] text-white/35 truncate">Message #ai-questions</p>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: BLUE }}
        >
          <ArrowUp size={13} className="text-white" />
        </span>
      </div>
    </motion.div>
  );
};

/** Result card after the crowd ran the prompt */
export const ResultPhase = () => {
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setReveal(1), 300),
      window.setTimeout(() => setReveal(2), 700),
      window.setTimeout(() => setReveal(3), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full"
    >
      <AiChannelHeader rightLabel="you can run" />
      <OnlinePresence label="3 online" detail="" right="" />

      <div className="px-4 flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded-full bg-[#34c759]/25 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
          </span>
          <p className="text-[10px] text-white/50">Prompt ran</p>
        </div>
        <p className="text-[9px] text-white/35">3 inputs · Chris, Maya, you</p>
      </div>

      <div className="px-3 flex-1 min-h-0 overflow-hidden">
        <AnimatePresence>
          {reveal >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, ease }}
              className="rounded-2xl bg-[#1c1c1e] p-3 flex flex-col gap-3"
            >
              <div>
                <p className="text-[9px] tracking-wider text-white/35 uppercase mb-1">Top pick</p>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[14px] font-semibold text-white leading-tight">
                    Salomon Speedcross 6
                  </p>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                    style={{ background: BLUE }}
                  >
                    $580
                  </span>
                </div>
                <p className="mt-1.5 text-[10px] text-white/55 leading-relaxed">
                  Best grip on wet rock, fits the $600 budget, straight from Maya&apos;s Notions.
                </p>
              </div>

              {reveal >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-[9px] tracking-wider text-white/35 uppercase mb-1">The week</p>
                  <p className="text-[10px] text-white/55 leading-relaxed">
                    Technical trail focus, rain over the weekend, and a long debate about grip on
                    wet rock.
                  </p>
                </motion.div>
              )}

              {reveal >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-1.5"
                >
                  {["Boston Runners chat", "2 Notions", "budget"].map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/8 px-2 py-0.5 text-[9px] text-white/55"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                      {s}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {reveal >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-2.5 flex flex-col gap-2"
          >
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-[#1c1c1e] px-2 py-1 text-[10px]">🔥 3</span>
              <span className="rounded-full bg-[#1c1c1e] px-2 py-1 text-[10px]">👥 2</span>
              <span className="rounded-full bg-[#1c1c1e] px-2 py-1 text-[10px] text-white/40">+</span>
            </div>
            <div className="flex gap-1.5">
              <span className="flex-1 text-center rounded-full bg-[#1c1c1e] py-2 text-[10px] text-white/70">
                Iterate
              </span>
              <span className="flex-1 text-center rounded-full bg-[#1c1c1e] py-2 text-[10px] text-white/70">
                Save
              </span>
              <span
                className="flex-[1.4] text-center rounded-full py-2 text-[10px] font-semibold text-white"
                style={{ background: "linear-gradient(90deg,#2f6bff,#22d3ee)" }}
              >
                Publish to feed
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-4 mb-1 mt-auto flex items-center gap-2 rounded-full bg-[#1c1c1e] px-3 py-2">
        <p className="flex-1 text-[10px] text-white/35 truncate">Message #ai-questions</p>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: BLUE }}
        >
          <ArrowUp size={13} className="text-white" />
        </span>
      </div>
    </motion.div>
  );
};

/** Slash commands for AI in a crowd channel */
export const CommandsPhase = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timers = [0, 1, 2, 3, 4].map((i) =>
      window.setTimeout(() => setActive(i), 350 + i * 380),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const commands = [
    {
      icon: <Sparkles size={12} className="text-[#5eead4]" />,
      cmd: "/prompt",
      desc: "Start a collaborative prompt",
    },
    {
      icon: <Play size={12} className="text-white/70" />,
      cmd: "/run",
      desc: "Run the current prompt",
    },
    {
      icon: <UserPlus size={12} className="text-white/70" />,
      cmd: "/invite",
      desc: "Add people to the session",
    },
    {
      icon: <FileText size={12} className="text-white/70" />,
      cmd: "/sources",
      desc: "Choose what the AI can read",
    },
    {
      icon: <Waves size={12} className="text-white/70" />,
      cmd: "/iterate",
      desc: "Branch the last result",
    },
  ];

  return (
    <motion.div
      key="commands"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease }}
      className="flex flex-col h-full"
    >
      <AiChannelHeader rightLabel="you can run" />
      <OnlinePresence label="3 online" detail="" />

      <div className="px-4 mb-2">
        <div className="rounded-2xl bg-[#1c1c1e] px-3 py-2.5">
          <p className="text-[11px] text-white/80 leading-relaxed">
            let&apos;s lock the Blue Hills trail training for this weekend
          </p>
          <p className="mt-1 text-[9px] text-white/30">Maya Reed · 9:32</p>
        </div>
      </div>

      <div className="px-3 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[#141416] border border-white/8 p-2.5"
        >
          <p className="text-[9px] tracking-wider text-white/35 uppercase px-1.5 mb-2">
            Commands
          </p>
          <div className="flex flex-col gap-0.5">
            {commands.map((c, i) => {
              const on = active === i;
              const shown = active >= i;
              if (!shown) return <div key={c.cmd} className="h-[44px]" />;
              return (
                <motion.div
                  key={c.cmd}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    backgroundColor: on ? "rgba(26,155,142,0.18)" : "transparent",
                  }}
                  transition={{ duration: 0.4, ease }}
                  className="rounded-xl px-2 py-2 flex items-center gap-2.5"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold text-white">{c.cmd}</p>
                    <p className="text-[9px] text-white/40 truncate">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="px-4 mb-1 mt-2 flex items-center gap-2 rounded-full bg-[#1c1c1e] px-3 py-2">
        <List size={12} className="text-white/30" />
        <p className="flex-1 text-[12px] text-white/80">/</p>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: BLUE }}
        >
          <ArrowUp size={13} className="text-white" />
        </span>
      </div>
    </motion.div>
  );
};
