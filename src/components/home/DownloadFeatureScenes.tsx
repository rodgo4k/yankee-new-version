import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Sparkles, WifiOff } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const PrivatePanel = () => (
  <div className="relative h-[110px] flex items-center justify-center overflow-hidden">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ x: [42, 74], opacity: [0.45, 0], scale: [1, 0.55] }}
        transition={{ duration: 2.1, repeat: Infinity, delay: i * 0.4 }}
        className="absolute right-6 w-2 h-2 rounded-full bg-foreground/25"
      />
    ))}
    <motion.div
      animate={{ scale: [1, 1.08, 1], opacity: [0.28, 0.5, 0.28] }}
      transition={{ duration: 2.8, repeat: Infinity }}
      className="absolute w-20 h-20 rounded-full"
      style={{ background: `radial-gradient(circle, ${BLUE}33, transparent 70%)` }}
    />
    <span
      className="relative w-11 h-11 rounded-full flex items-center justify-center text-white"
      style={{ background: BLUE }}
    >
      <Shield size={16} />
    </span>
  </div>
);

const OfflinePanel = () => {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = window.setInterval(() => setOn((v) => !v), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[110px] flex flex-col items-center justify-center gap-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={on ? "off" : "on"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: on ? BLUE : "rgba(0,0,0,0.1)",
              color: on ? "#fff" : "rgba(0,0,0,0.4)",
            }}
          >
            <WifiOff size={16} />
          </span>
          <p className="text-[10px] lowercase text-foreground/45">
            {on ? "offline · still readable" : "signal back"}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AdsPanel = () => {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const loop = () => {
      setGone(false);
      return window.setTimeout(() => setGone(true), 1600);
    };
    let t = loop();
    const id = window.setInterval(() => {
      clearTimeout(t);
      t = loop();
    }, 3400);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative h-[110px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!gone ? (
          <motion.div
            key="ad"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-20 h-10 rounded-lg border border-dashed border-foreground/20 bg-foreground/[0.04] flex items-center justify-center">
              <p className="text-[9px] text-foreground/35 lowercase">ad slot</p>
            </div>
            <p className="text-[10px] text-foreground/40 lowercase">not here</p>
          </motion.div>
        ) : (
          <motion.span
            key="ok"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{ background: GREEN }}
          >
            <Sparkles size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const reasons = [
  {
    title: "private by default",
    desc: "your messages and memory stay encrypted on your device.",
    Visual: PrivatePanel,
  },
  {
    title: "works offline",
    desc: "you can read your feed and drafts even when the signal drops.",
    Visual: OfflinePanel,
  },
  {
    title: "no ads, ever",
    desc: "we won't sell attention. the app is the product.",
    Visual: AdsPanel,
  },
];

export const DownloadReasonsScene = () => (
  <div className="grid sm:grid-cols-3 gap-4">
    {reasons.map((item, i) => {
      const Visual = item.Visual;
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease }}
          className={`${shell} p-5 flex flex-col`}
        >
          <Visual />
          <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.desc}</p>
        </motion.div>
      );
    })}
  </div>
);
