import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, EyeOff, Lock, Shield, Trash2 } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#8b2e2e";

type Phase = "alone" | "encrypt" | "wipe";

const phases: Phase[] = ["alone", "encrypt", "wipe"];
const HOLD: Record<Phase, number> = { alone: 5200, encrypt: 5600, wipe: 5600 };
const labels: Record<Phase, string> = {
  alone: "yours alone",
  encrypt: "private + encrypted",
  wipe: "gone in seconds",
};

/* ─── 1. Yours alone ─── */

const AlonePhase = () => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setShown(1), 400),
      window.setTimeout(() => setShown(2), 1200),
      window.setTimeout(() => setShown(3), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const items = [
    { title: "Never sold", sub: "your data is not a product" },
    { title: "Never trains AI", sub: "models never see your posts" },
    { title: "Yours alone", sub: "private by design, always" },
  ];

  return (
    <motion.div
      key="alone"
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
          <Shield size={13} className="text-white" />
        </span>
        <p className="text-[13px] font-semibold text-white">Privacy</p>
      </div>

      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => {
          if (shown <= i) return null;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex items-center gap-2.5"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: GREEN }}
              >
                <Check size={14} className="text-white" strokeWidth={2.5} />
              </motion.span>
              <div>
                <p className="text-[12px] font-semibold text-white">{item.title}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {shown >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto mb-1 text-center text-[10px] text-white/35"
        >
          never sold · never used to train AI · ever
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── 2. Private + encrypted ─── */

const EncryptPhase = () => {
  const plain = "still on for saturday?";
  const cipher = "a8f3 · 9c21 · e4b0 · 7d12";
  const [locked, setLocked] = useState(false);
  const [backed, setBacked] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setLocked(true), 1200),
      window.setTimeout(() => setBacked(true), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="encrypt"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <EyeOff size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white">Encrypted</p>
      </div>

      <div className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 mb-3">
        <p className="text-[10px] text-white/35 mb-2">On your device</p>
        <div className="relative min-h-[40px]">
          <motion.p
            animate={{ opacity: locked ? 0 : 1, y: locked ? -6 : 0 }}
            className="text-[14px] font-medium text-white absolute inset-x-0"
          >
            {plain}
          </motion.p>
          <motion.p
            animate={{ opacity: locked ? 1 : 0, y: locked ? 0 : 6 }}
            className="text-[13px] text-white/45 tracking-wide absolute inset-x-0"
          >
            {cipher}
          </motion.p>
        </div>
        <motion.div
          animate={{
            backgroundColor: locked ? BLUE : "rgba(255,255,255,0.08)",
          }}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
        >
          <Lock size={11} className="text-white" />
          <span className="text-[10px] font-semibold text-white">
            {locked ? "Locked end to end" : "Readable here"}
          </span>
        </motion.div>
      </div>

      <AnimatePresence>
        {backed && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3"
          >
            <p className="text-[10px] text-white/35 mb-1.5">Backup space</p>
            <p className="text-[11px] text-white/55 leading-snug">
              Feed, memory and DMs stay in your space. encrypted where backups live.
            </p>
            <div className="mt-2.5 flex gap-1.5">
              {["feed", "memory", "dms"].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full bg-white/5 border border-white/[0.06] px-2 py-0.5 text-[9px] text-white/50"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── 3. Gone in seconds ─── */

const WipePhase = () => {
  const [confirm, setConfirm] = useState(false);
  const [wiping, setWiping] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setConfirm(true), 600),
      window.setTimeout(() => setWiping(true), 2200),
      window.setTimeout(() => setGone(true), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const rows = ["Memory", "Messages", "History", "Drafts"];

  return (
    <motion.div
      key="wipe"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Trash2 size={15} className="text-red-400" />
        <p className="text-[13px] font-semibold text-white">Delete account</p>
      </div>

      <div className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 mb-3">
        <p className="text-[11px] text-white/55 leading-snug mb-2.5">
          Wipe everything in seconds. nothing left to sell or recover.
        </p>
        <div className="flex flex-col gap-1.5">
          {rows.map((r, i) => (
            <motion.div
              key={r}
              animate={{
                opacity: gone || (wiping && i <= 3) ? (gone ? 0.25 : 0.55) : 1,
                x: wiping && !gone ? [0, -2, 2, 0] : 0,
              }}
              transition={{
                x: wiping && !gone ? { duration: 0.35, delay: i * 0.08 } : undefined,
              }}
              className="flex items-center justify-between rounded-xl bg-black/25 px-2.5 py-1.5"
            >
              <span className="text-[11px] text-white/70">{r}</span>
              {(wiping || gone) && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-[9px] font-semibold"
                  style={{ color: gone ? RED : "#f59e0b" }}
                >
                  {gone ? "destroyed" : "wiping…"}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {confirm && !gone && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-auto rounded-2xl bg-[#161618] border border-[#3a3a3c]/50 p-3"
          >
            <p className="text-[12px] font-semibold text-white text-center">Delete everything?</p>
            <p className="mt-1 text-[10px] text-white/40 text-center">
              Memory, messages and history are destroyed for good.
            </p>
            <motion.button
              type="button"
              animate={
                wiping
                  ? {}
                  : {
                      boxShadow: [
                        "0 0 0 0 rgba(139,46,46,0)",
                        "0 0 0 6px rgba(139,46,46,0.25)",
                        "0 0 0 0 rgba(139,46,46,0)",
                      ],
                    }
              }
              transition={{ duration: 1.4, repeat: Infinity }}
              className="mt-3 w-full rounded-2xl py-3 text-[12px] font-semibold text-white"
              style={{ background: RED }}
            >
              {wiping ? "Deleting…" : "Delete account"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {gone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-auto rounded-2xl border border-dashed border-white/15 px-3 py-4 text-center"
        >
          <Check size={18} className="text-white/50 mx-auto mb-1.5" />
          <p className="text-[12px] font-semibold text-white">Gone in seconds</p>
          <p className="text-[10px] text-white/40 mt-0.5">destroyed for good</p>
        </motion.div>
      )}
    </motion.div>
  );
};

/* ─── main ─── */

const PrivacyStayYoursScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "alone" && <AlonePhase key="alone" />}
          {phase === "encrypt" && <EncryptPhase key="encrypt" />}
          {phase === "wipe" && <WipePhase key="wipe" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default PrivacyStayYoursScene;
