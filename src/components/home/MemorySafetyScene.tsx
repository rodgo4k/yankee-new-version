import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Check, KeyRound, Lock, Shield, Trash2, X } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "private" | "keys" | "train" | "erase";

const phases: Phase[] = ["private", "keys", "train", "erase"];
const HOLD: Record<Phase, number> = {
  private: 5600,
  keys: 5600,
  train: 5400,
  erase: 5600,
};
const labels: Record<Phase, string> = {
  private: "private by default",
  keys: "your keys, not ours",
  train: "never trained on",
  erase: "erase anything, anytime",
};

/* ─── 1. Private by default ─── */

const PrivatePhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 500),
      window.setTimeout(() => setStep(2), 1600),
      window.setTimeout(() => setStep(3), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="private"
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
          <Lock size={13} className="text-white" />
        </span>
        <p className="text-[13px] font-semibold text-white flex-1">Memory</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">on device</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 mb-3 flex-1 min-h-0 flex flex-col"
      >
        <p className="text-[10px] text-white/35 mb-2">Saved on your phone</p>
        <p className="text-[14px] font-medium text-white leading-snug">
          draft for alex · saturday loft plan
        </p>
        <p className="mt-2 text-[11px] text-white/45 leading-snug flex-1">
          bring the film stills, leave the noise. keep this private until you share it.
        </p>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1"
            style={{ background: "rgba(47,107,255,0.25)" }}
          >
            <Shield size={11} className="text-white" />
            <span className="text-[10px] font-semibold text-white">stays on device first</span>
          </motion.div>
        )}
      </motion.div>

      {step >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3"
        >
          <p className="text-[10px] text-white/35 mb-1.5">Cloud backup</p>
          <motion.p
            animate={{ opacity: 1 }}
            className="text-[12px] text-white/55 tracking-wide font-mono"
          >
            a8f3 · 9c21 · e4b0 · 7d12
          </motion.p>
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-[10px] text-white/40"
            >
              backed up as ciphertext only
            </motion.p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

/* ─── 2. Your keys ─── */

const KeysPhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 600),
      window.setTimeout(() => setStep(2), 1800),
      window.setTimeout(() => setStep(3), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="keys"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <KeyRound size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Keys</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">device only</span>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: GREEN }}
              >
                <KeyRound size={14} className="text-white" />
              </span>
              <div>
                <p className="text-[12px] font-semibold text-white">Your device</p>
                <p className="text-[10px] text-white/40">holds the decryption key</p>
              </div>
            </div>
            <div className="rounded-xl bg-black/35 px-3 py-2.5 font-mono text-[11px] text-white/70 tracking-wider">
              •••••• · •••••• · ••••••
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Lock size={14} className="text-white/70" />
              </span>
              <div>
                <p className="text-[12px] font-semibold text-white">Yankee servers</p>
                <p className="text-[10px] text-white/40">encrypted blobs only</p>
              </div>
            </div>
            <p className="text-[11px] text-white/45 leading-snug">
              we never hold the key that opens your memory.
            </p>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-auto mb-1 rounded-2xl border border-[#3a3a3c]/45 bg-[#1c1c1e] p-3 flex items-center gap-2.5"
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: GREEN }}
            >
              <Check size={14} className="text-white" strokeWidth={2.8} />
            </span>
            <p className="text-[11px] text-white/60 leading-snug">
              your keys, not ours · always
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 3. Never trained on ─── */

const TrainPhase = () => {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setBlocked(true), 1600);
    return () => clearTimeout(id);
  }, []);

  const items = [
    { label: "your writing", sub: "drafts · captions · notes" },
    { label: "your saves", sub: "bookmarks · voice notes" },
    { label: "your memory", sub: "private tags · recall" },
  ];

  return (
    <motion.div
      key="train"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Brain size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Training</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">off</span>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3 flex items-center gap-2.5"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-white">{item.label}</p>
              <p className="text-[10px] text-white/40 mt-0.5">{item.sub}</p>
            </div>
            <AnimatePresence mode="wait">
              {!blocked ? (
                <motion.span
                  key="pending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[9px] text-white/35 lowercase"
                >
                  …
                </motion.span>
              ) : (
                <motion.span
                  key="blocked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,69,58,0.2)" }}
                >
                  <X size={13} style={{ color: RED }} strokeWidth={2.8} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {blocked && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-auto mb-1 rounded-2xl p-3.5 text-center"
            style={{
              background: "linear-gradient(160deg, rgba(47,107,255,0.22), rgba(28,28,30,0.95))",
              border: "1px solid rgba(47,107,255,0.3)",
            }}
          >
            <p className="text-[13px] font-semibold text-white">never used to train a model</p>
            <p className="mt-1 text-[10px] text-white/45">not ours · not anyone else&apos;s</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

/* ─── 4. Erase anytime ─── */

const ErasePhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 500),
      window.setTimeout(() => setStep(2), 1600),
      window.setTimeout(() => setStep(3), 2800),
      window.setTimeout(() => setStep(4), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="erase"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3.5"
    >
      <div className="flex items-center gap-2 mb-3">
        <Trash2 size={15} style={{ color: RED }} />
        <p className="text-[13px] font-semibold text-white flex-1">Delete</p>
      </div>

      <AnimatePresence mode="wait">
        {step < 3 ? (
          <motion.div
            key="memory"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -12 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-3.5 mb-3"
          >
            <p className="text-[10px] text-white/35 mb-1.5">Memory</p>
            <p className="text-[14px] font-medium text-white">saturday loft plan</p>
            <p className="mt-1 text-[11px] text-white/45">draft · private · on device</p>

            {step >= 1 && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 w-full rounded-full py-2.5 text-[12px] font-semibold text-white"
                style={{ background: RED }}
                type="button"
              >
                {step >= 2 ? "wiping…" : "erase this memory"}
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="gone"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/45 p-5 mb-3 flex flex-col items-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
              style={{ background: GREEN }}
            >
              <Check size={22} className="text-white" strokeWidth={2.8} />
            </motion.span>
            <p className="text-[14px] font-semibold text-white">memory erased</p>
            <p className="mt-1.5 text-[11px] text-white/45 leading-snug">
              wiped from your device now. backups clear within 30 days.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {step >= 2 && step < 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2"
        >
          {["device", "backup"].map((place, i) => (
            <div
              key={place}
              className="rounded-xl bg-[#1c1c1e] border border-[#3a3a3c]/45 px-3 py-2.5 flex items-center gap-2"
            >
              <span className="text-[11px] text-white/50 lowercase flex-1">{place}</span>
              {step >= 3 || (step >= 2 && i === 0) ? (
                <span className="text-[10px] font-semibold lowercase" style={{ color: GREEN }}>
                  wiped
                </span>
              ) : (
                <span className="text-[10px] text-white/35 lowercase">pending</span>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {step >= 4 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto mb-1 text-center text-[10px] text-white/35"
        >
          erase anything · anytime
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── main ─── */

const MemorySafetyScene = ({ className = "" }: { className?: string }) => {
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
          {phase === "private" && <PrivatePhase key="private" />}
          {phase === "keys" && <KeysPhase key="keys" />}
          {phase === "train" && <TrainPhase key="train" />}
          {phase === "erase" && <ErasePhase key="erase" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default MemorySafetyScene;
