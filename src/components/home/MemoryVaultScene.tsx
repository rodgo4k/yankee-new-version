import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, KeyRound, Lock, Shield, Trash2 } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "seal" | "keys" | "block" | "erase";
const phases: Phase[] = ["seal", "keys", "block", "erase"];
const HOLD: Record<Phase, number> = { seal: 5800, keys: 5600, block: 5400, erase: 5600 };
const labels: Record<Phase, string> = {
  seal: "private by default",
  keys: "your keys, not ours",
  block: "never trained on",
  erase: "erase anything, anytime",
};

const fragments = [
  { id: "draft", label: "draft", angle: -38, radius: 118 },
  { id: "link", label: "link", angle: 28, radius: 128 },
  { id: "voice", label: "voice", angle: 112, radius: 112 },
  { id: "plan", label: "plan", angle: 198, radius: 122 },
  { id: "note", label: "note", angle: 252, radius: 108 },
];

const hex = ["a8f3", "9c21", "e4b0", "7d12", "3f91", "c06e"];

const polar = (angleDeg: number, radius: number) => {
  const r = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(r) * radius, y: Math.sin(r) * radius };
};

const MemoryVaultScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  useEffect(() => {
    setTick(0);
    const timers = [1, 2, 3, 4].map((n, idx) => window.setTimeout(() => setTick(n), 280 + idx * 420));
    return () => timers.forEach(clearTimeout);
  }, [phase, i]);

  const ring = useMemo(
    () => Array.from({ length: 24 }, (_, n) => ({ n, a: (n / 24) * 360 })),
    [],
  );

  return (
    <div className={`relative w-full max-w-[420px] mx-auto ${className}`}>
      <div className="relative aspect-square w-full max-w-[400px] mx-auto">
        <motion.div
          animate={{
            opacity: phase === "erase" ? [0.35, 0.15, 0.35] : [0.45, 0.7, 0.45],
            scale: phase === "block" ? [1, 1.04, 1] : [1, 1.06, 1],
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[8%] rounded-full"
          style={{
            background:
              phase === "erase"
                ? `radial-gradient(circle, ${RED}22 0%, transparent 68%)`
                : phase === "block"
                  ? `radial-gradient(circle, ${RED}18 0%, ${BLUE}10 45%, transparent 70%)`
                  : `radial-gradient(circle, ${BLUE}28 0%, transparent 68%)`,
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[6%] rounded-full border border-dashed border-foreground/15"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[14%] rounded-full border border-foreground/[0.07]"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {ring.map((t) => {
            const p = polar(t.a, 148);
            return (
              <motion.span
                key={t.n}
                animate={{
                  opacity: phase === "keys" ? [0.2, 0.9, 0.2] : 0.25,
                  height: phase === "keys" && t.n % 3 === 0 ? 10 : 5,
                }}
                transition={{ duration: 1.6, repeat: Infinity, delay: t.n * 0.04 }}
                className="absolute w-[1.5px] rounded-full bg-foreground/40 origin-bottom"
                style={{
                  transform: `translate(${p.x}px, ${p.y}px) rotate(${t.a + 90}deg)`,
                }}
              />
            );
          })}
        </div>
        <AnimatePresence mode="sync">
          {fragments.map((f, fi) => {
            const sealed = phase === "seal" && tick >= 2;
            const erased = phase === "erase" && tick >= 2;
            const p = polar(f.angle + (phase === "seal" ? tick * 8 : 0), sealed ? 0 : f.radius);
            if (erased && tick >= 3) return null;
            return (
              <motion.div
                key={`${f.id}-${phase}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: erased ? 0 : 1,
                  scale: erased ? 0.4 : 1,
                  x: p.x,
                  y: p.y,
                }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{ duration: 0.7, ease, delay: fi * 0.05 }}
                className="absolute left-1/2 top-1/2 -ml-[34px] -mt-[16px]"
              >
                <motion.span
                  animate={{
                    y: sealed ? 0 : [0, -4, 0],
                    backgroundColor:
                      phase === "keys" ? "rgba(47,107,255,0.18)" : "rgba(255,255,255,0.72)",
                  }}
                  transition={{ duration: 2.4 + fi * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] lowercase tracking-tight text-foreground/80 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: sealed || phase === "keys" ? BLUE : "currentColor" }}
                  />
                  {phase === "keys" && tick >= 2 ? hex[fi % hex.length] : f.label}
                </motion.span>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: phase === "erase" && tick >= 3 ? [1, 0.92, 1.05, 0.88] : [1, 1.03, 1],
              boxShadow:
                phase === "block"
                  ? [`0 0 0 0 ${RED}00`, `0 0 0 18px ${RED}18`, `0 0 0 0 ${RED}00`]
                  : [`0 0 0 0 ${BLUE}00`, `0 0 40px 8px ${BLUE}22`, `0 0 0 0 ${BLUE}00`],
            }}
            transition={{ duration: phase === "erase" ? 1.2 : 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[132px] h-[132px] rounded-full bg-card border border-foreground/10 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              animate={{ rotate: phase === "keys" ? 360 : 0 }}
              transition={{ duration: 8, repeat: phase === "keys" ? Infinity : 0, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-dashed border-foreground/10"
            />

            <AnimatePresence mode="wait">
              {phase === "seal" && (
                <motion.div
                  key="seal"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white"
                    style={{ background: BLUE }}
                  >
                    <Lock size={18} />
                  </span>
                  <p className="text-[10px] lowercase text-foreground/55">on device</p>
                </motion.div>
              )}
              {phase === "keys" && (
                <motion.div
                  key="keys"
                  initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white"
                    style={{ background: BLUE }}
                  >
                    <KeyRound size={18} />
                  </span>
                  <p className="text-[10px] lowercase text-foreground/55">your keys</p>
                </motion.div>
              )}
              {phase === "block" && (
                <motion.div
                  key="block"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span className="relative">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(255,69,58,0.15)", color: RED }}
                    >
                      <Brain size={18} />
                    </span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[2px] origin-center rounded-full"
                      style={{ background: RED, rotate: -28 }}
                    />
                  </span>
                  <p className="text-[10px] lowercase text-foreground/55">not for training</p>
                </motion.div>
              )}
              {phase === "erase" && (
                <motion.div
                  key="erase"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <motion.span
                    animate={tick >= 3 ? { scale: [1, 1.15, 1], backgroundColor: GREEN } : { backgroundColor: RED }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white"
                  >
                    {tick >= 3 ? <Shield size={18} /> : <Trash2 size={18} />}
                  </motion.span>
                  <p className="text-[10px] lowercase text-foreground/55">
                    {tick >= 3 ? "wiped" : "erasing"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {phase === "seal" && tick >= 2 && (
              <>
                {[0, 1].map((r) => (
                  <motion.span
                    key={r}
                    initial={{ opacity: 0.5, scale: 0.85 }}
                    animate={{ opacity: 0, scale: 1.55 }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: r * 0.55, ease }}
                    className="absolute inset-0 rounded-full border"
                    style={{ borderColor: BLUE }}
                  />
                ))}
              </>
            )}
          </motion.div>
        </div>
        {phase === "keys" &&
          hex.slice(0, 4).map((h, hi) => {
            const p = polar(60 + hi * 75, 168);
            return (
              <motion.span
                key={h}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: [0, 1, 0], y: [8, -6, -14] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: hi * 0.35 }}
                className="absolute left-1/2 top-1/2 text-[9px] font-mono text-foreground/40"
                style={{ transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))` }}
              >
                {h}
              </motion.span>
            );
          })}
        {phase === "erase" && tick >= 2 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {Array.from({ length: 14 }).map((_, n) => {
              const p = polar(n * 25.7, 40 + (n % 3) * 28);
              return (
                <motion.span
                  key={n}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  animate={{ opacity: 0, x: p.x, y: p.y, scale: 0.2 }}
                  transition={{ duration: 0.9, ease, delay: n * 0.03 }}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{ background: n % 2 ? BLUE : RED }}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-center gap-1.5">
        {phases.map((p, idx) => (
          <motion.span
            key={p}
            animate={{
              width: idx === i ? 16 : 5,
              backgroundColor: idx === i ? BLUE : "rgba(0,0,0,0.18)",
            }}
            className="h-1 rounded-full"
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="mt-3 text-center text-[12px] text-foreground/45 lowercase tracking-tight"
        >
          {labels[phase]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default MemoryVaultScene;
