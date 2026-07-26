import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Calendar, Check, PenLine, Sparkles } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

type Phase = "ask" | "nudge" | "done";

const phases: Phase[] = ["ask", "nudge", "done"];
const HOLD: Record<Phase, number> = { ask: 5600, nudge: 5200, done: 5200 };
const labels: Record<Phase, string> = {
  ask: "01 · you ask once",
  nudge: "02 · yankee stays on it",
  done: "03 · it actually lands",
};

/* ─── 01 ask once ─── */

const AskPhase = () => {
  const full = "finish the caption for saturday's photo walk…";
  const [typed, setTyped] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeId = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        window.clearInterval(typeId);
        window.setTimeout(() => setSent(true), 450);
      }
    }, 28);
    return () => window.clearInterval(typeId);
  }, []);

  return (
    <motion.div
      key="ask"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: BLUE }}
        >
          <Sparkles size={13} className="text-white" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-white">Yankee AI</p>
          <p className="text-[9px] text-white/40">ask once · it stays on it</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2.5 min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="self-start max-w-[85%] rounded-2xl rounded-bl-md bg-[#1c1c1e] border border-[#3a3a3c]/45 px-3 py-2"
        >
          <p className="text-[11px] text-white/70 leading-snug">
            what should I keep warm for you?
          </p>
        </motion.div>

        {(typed || sent) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end max-w-[88%] rounded-2xl rounded-br-md px-3 py-2"
            style={{ background: BLUE }}
          >
            <p className="text-[11px] text-white leading-snug">
              {sent ? full : typed}
              {!sent && typed.length < full.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity }}
                  className="inline-block w-[1.5px] h-[11px] bg-white align-middle ml-0.5"
                />
              )}
            </p>
          </motion.div>
        )}

        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 mt-1"
          >
            <div className="flex items-center gap-2 mb-2">
              <PenLine size={13} style={{ color: BLUE }} />
              <p className="text-[11px] font-semibold text-white">Draft kept warm</p>
              <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">
                said once
              </span>
            </div>
            <p className="text-[10px] text-white/45 leading-snug">
              Caption for Saturday photo walk · reminder set for Friday 6pm
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 02 follows up ─── */

const NudgePhase = () => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShow(1), 400),
      window.setTimeout(() => setShow(2), 1400),
      window.setTimeout(() => setShow(3), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="nudge"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Bell size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Nudges</p>
        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">
          follows up
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {show >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3"
          >
            <p className="text-[10px] text-white/35 mb-1">Friday · 6:02 pm</p>
            <p className="text-[12px] font-semibold text-white">Caption still waiting</p>
            <p className="mt-1 text-[11px] text-white/50 leading-snug">
              Saturday photo walk draft is warm. finish it before the meetup?
            </p>
            <div className="mt-2.5 flex gap-2">
              <span
                className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-white"
                style={{ background: BLUE }}
              >
                Open draft
              </span>
              <span className="rounded-full border border-white/12 px-3 py-1.5 text-[10px] text-white/50">
                Snooze
              </span>
            </div>
          </motion.div>
        )}

        {show >= 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex gap-2.5"
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: BLUE }}
            >
              <Bell size={13} className="text-white" />
            </span>
            <div>
              <p className="text-[12px] font-semibold text-white">Quiet nudge</p>
              <p className="text-[10px] text-white/45 mt-0.5 leading-snug">
                Reminder about Saturday · without taking over your day
              </p>
            </div>
          </motion.div>
        )}

        {show >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[10px] text-white/35 mt-2"
          >
            yankee stays on it until you act
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 03 done ─── */

const DonePhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 500),
      window.setTimeout(() => setStep(2), 1600),
      window.setTimeout(() => setStep(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const items = [
    { icon: PenLine, label: "Caption posted", sub: "Saturday photo walk · live" },
    { icon: Calendar, label: "Plan confirmed", sub: "12 going · meetup tomorrow" },
    { icon: Check, label: "Thread answered", sub: "Maya got your reply" },
  ];

  return (
    <motion.div
      key="done"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: GREEN }}
        >
          <Check size={14} className="text-white" strokeWidth={2.5} />
        </span>
        <p className="text-[13px] font-semibold text-white flex-1">It landed</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">done</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => {
          if (step <= i) return null;
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex items-center gap-2.5"
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: i === 2 ? GREEN : "rgba(47,107,255,0.25)" }}
              >
                <Icon size={15} className="text-white" />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-white">{item.label}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{item.sub}</p>
              </div>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15 }}
                className="ml-auto w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: GREEN }}
              >
                <Check size={11} className="text-white" strokeWidth={3} />
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {step >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto mb-1 text-center text-[10px] text-white/35"
        >
          the post went out · the plan happened
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── main ─── */

const FocusPresentScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "ask" && <AskPhase key="ask" />}
          {phase === "nudge" && <NudgePhase key="nudge" />}
          {phase === "done" && <DonePhase key="done" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default FocusPresentScene;
