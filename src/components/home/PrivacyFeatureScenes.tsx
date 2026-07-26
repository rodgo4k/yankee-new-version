import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  EyeOff,
  KeyRound,
  Lock,
  MapPin,
  Shield,
  Trash2,
  X,
} from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

const shell =
  "yankee-surface rounded-[1.5rem] bg-card border border-foreground/[0.06] overflow-hidden";

const AlonePanel = () => (
  <div className="relative h-[120px] flex items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute w-24 h-24 rounded-full"
      style={{ background: `radial-gradient(circle, ${BLUE}33, transparent 70%)` }}
    />
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ x: [40 + i * 8, 70], opacity: [0.5, 0], scale: [1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.45 }}
        className="absolute right-6 w-2 h-2 rounded-full bg-foreground/30"
      />
    ))}
    <span
      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0_12px_28px_-10px_rgba(47,107,255,0.55)]"
      style={{ background: BLUE }}
    >
      <Lock size={18} />
    </span>
  </div>
);

const EncryptedPanel = () => (
  <div className="relative h-[120px] flex items-center justify-center font-mono text-[10px] text-foreground/40">
    <motion.div
      animate={{ y: [0, -28] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-x-4 top-2 space-y-1.5 opacity-70"
    >
      {["a8f3 9c21 e4b0", "7d12 3f91 c06e", "b2aa 11fe 90cd", "a8f3 9c21 e4b0"].map((line, i) => (
        <p key={`${line}-${i}`}>{line}</p>
      ))}
    </motion.div>
    <span className="relative z-10 w-12 h-12 rounded-full bg-card border border-foreground/10 flex items-center justify-center text-foreground/70 shadow-sm">
      <EyeOff size={18} />
    </span>
  </div>
);

const KeysPanel = () => (
  <div className="relative h-[120px] flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      className="absolute w-20 h-20 rounded-full border border-dashed border-foreground/20"
    />
    <motion.span
      animate={{ rotate: [-12, 12, -12] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white"
      style={{ background: BLUE }}
    >
      <KeyRound size={18} />
    </motion.span>
  </div>
);

const WipePanel = () => {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const loop = () => {
      setGone(false);
      const t = window.setTimeout(() => setGone(true), 1800);
      return t;
    };
    let t = loop();
    const id = window.setInterval(() => {
      clearTimeout(t);
      t = loop();
    }, 3600);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative h-[120px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!gone ? (
          <motion.div
            key="full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
            className="flex gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-8 h-10 rounded-lg bg-foreground/[0.08] border border-foreground/10" />
            ))}
          </motion.div>
        ) : (
          <motion.span
            key="empty"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{ background: GREEN }}
          >
            <Trash2 size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const stanceItems = [
  {
    title: "yours alone",
    text: "never sold, never used to train ai. your writing stays your writing.",
    Visual: AlonePanel,
  },
  {
    title: "private + encrypted",
    text: "feed, memory and dms live encrypted. plaintext stays on your devices.",
    Visual: EncryptedPanel,
  },
  {
    title: "your keys, not ours",
    text: "decryption keys live with you. even we only hold ciphertext blobs.",
    Visual: KeysPanel,
  },
  {
    title: "gone when you say so",
    text: "you can delete your account any time. memory, messages and history get wiped.",
    Visual: WipePanel,
  },
];

export const PrivacyStanceScene = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stanceItems.map((item, i) => {
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
          <h3 className="mt-2 text-[15px] font-semibold lowercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{item.text}</p>
        </motion.div>
      );
    })}
  </div>
);

type MeansPhase = "e2e" | "trackers" | "local";
const meansPhases: MeansPhase[] = ["e2e", "trackers", "local"];
const MEANS_HOLD: Record<MeansPhase, number> = { e2e: 5600, trackers: 5400, local: 5600 };

const meansCopy: Record<
  MeansPhase,
  { kicker: string; title: ReactNode; body: string }
> = {
  e2e: {
    kicker: "end to end",
    title: (
      <>
        scrambled on your phone.{" "}
        <span className="font-serif-display italic font-medium">readable only there.</span>
      </>
    ),
    body: "messages and calls are encrypted on your device and only decrypted on the recipient's. yankee cannot read them, even if asked.",
  },
  trackers: {
    kicker: "zero trackers",
    title: (
      <>
        no ad sdks. <span className="font-serif-display italic font-medium">no session replay.</span>
      </>
    ),
    body: "if we do not ship a tracker, we cannot leak it. yankee is funded by people, not by selling attention.",
  },
  local: {
    kicker: "local first",
    title: (
      <>
        your device holds the <span className="font-serif-display italic font-medium">primary copy.</span>
      </>
    ),
    body: "the cloud is an encrypted backup you can pause or turn off. nothing trains a model on your posts.",
  },
};

const MeansVisual = ({ phase }: { phase: MeansPhase }) => {
  if (phase === "e2e") {
    return (
      <div className="relative h-full min-h-[220px] flex items-center justify-center gap-8">
        <motion.div
          animate={{ boxShadow: [`0 0 0 0 ${BLUE}00`, `0 0 0 12px ${BLUE}22`, `0 0 0 0 ${BLUE}00`] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-14 h-14 rounded-2xl bg-foreground/[0.06] border border-foreground/10 flex items-center justify-center"
        >
          <Lock size={20} className="text-foreground/70" />
        </motion.div>
        <div className="flex flex-col gap-1.5 items-center w-24">
          {["···", "a8f3", "9c21", "···"].map((h, i) => (
            <motion.span
              key={h + i}
              animate={{ x: [-18, 18], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
              className="text-[10px] font-mono text-foreground/45"
            >
              {h}
            </motion.span>
          ))}
        </div>
        <motion.div
          animate={{ boxShadow: [`0 0 0 0 ${GREEN}00`, `0 0 0 12px ${GREEN}22`, `0 0 0 0 ${GREEN}00`] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          className="w-14 h-14 rounded-2xl bg-foreground/[0.06] border border-foreground/10 flex items-center justify-center"
        >
          <KeyRound size={20} className="text-foreground/70" />
        </motion.div>
      </div>
    );
  }

  if (phase === "trackers") {
    const trackers = ["ad sdk", "replay", "broker", "pixel"];
    return (
      <div className="relative h-full min-h-[220px] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3">
          {trackers.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0.35 }}
              animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.03, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
              className="relative rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-[12px] lowercase text-foreground/60"
            >
              {t}
              <motion.span
                animate={{ scaleX: [0, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.4, delay: 0.3 + i * 0.15 }}
                className="absolute left-2 right-2 top-1/2 h-[2px] origin-left rounded-full"
                style={{ background: RED, rotate: -18 }}
              />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-card border border-foreground/10 flex items-center justify-center">
                <X size={10} style={{ color: RED }} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[220px] flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative z-10 w-28 h-44 rounded-[1.4rem] border border-foreground/15 bg-card shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] flex flex-col items-center justify-center gap-2"
      >
        <Lock size={22} style={{ color: BLUE }} />
        <p className="text-[10px] lowercase text-foreground/50">on device</p>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.92, 1, 0.92] }}
        transition={{ duration: 3.2, repeat: Infinity }}
        className="absolute w-36 h-24 rounded-2xl border border-dashed border-foreground/20 bg-foreground/[0.03] flex items-center justify-center"
        style={{ right: "12%", top: "28%" }}
      >
        <p className="text-[10px] font-mono text-foreground/40">backup · ciphertext</p>
      </motion.div>
    </div>
  );
};

export const PrivacyMeansScene = () => {
  const [i, setI] = useState(0);
  const phase = meansPhases[i];
  const copy = meansCopy[phase];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % meansPhases.length), MEANS_HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`${shell} grid lg:grid-cols-12 overflow-hidden`}>
      <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-foreground/[0.06]">
        <div className="flex gap-1.5 mb-5">
          {meansPhases.map((p, idx) => (
            <motion.span
              key={p}
              animate={{
                width: idx === i ? 18 : 6,
                backgroundColor: idx === i ? BLUE : "rgba(0,0,0,0.14)",
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
          >
            <p className="font-serif-display italic text-[1.1rem] text-foreground/50 lowercase leading-none">
              {copy.kicker}
            </p>
            <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold leading-[1.08] tracking-tight lowercase text-foreground">
              {copy.title}
            </h3>
            <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed lowercase">{copy.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="lg:col-span-7 p-4 md:p-6 bg-foreground/[0.02]">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MeansVisual phase={phase} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const glossaryVisual: Record<string, ReactNode> = {
  "end to end encryption": (
    <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-foreground/55">
      <Lock size={18} />
    </motion.div>
  ),
  "zero trackers": (
    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ color: RED }}>
      <X size={18} />
    </motion.div>
  ),
  "data minimization": (
    <motion.div animate={{ scaleX: [1, 0.55, 1] }} transition={{ duration: 2.6, repeat: Infinity }} className="w-8 h-2 rounded-full bg-foreground/25 origin-left" />
  ),
  "local first sync": (
    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="text-foreground/55">
      <Shield size={18} />
    </motion.div>
  ),
  "right to deletion": (
    <motion.div animate={{ rotate: [0, -15, 0] }} transition={{ duration: 2.4, repeat: Infinity }} className="text-foreground/55">
      <Trash2 size={18} />
    </motion.div>
  ),
  "region pinning": (
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-foreground/55">
      <MapPin size={18} />
    </motion.div>
  ),
  "quiet permissions": (
    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }} className="text-foreground/55">
      <EyeOff size={18} />
    </motion.div>
  ),
  "transparency report": (
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="text-foreground/55">
      <KeyRound size={18} />
    </motion.div>
  ),
};

export const PrivacyGlossaryScene = ({
  items,
}: {
  items: { term: string; def: string }[];
}) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((item, i) => (
      <motion.div
        key={item.term}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.45, delay: i * 0.05, ease }}
        className={`${shell} p-5 md:p-6 flex flex-col`}
      >
        <div className="w-10 h-10 rounded-full bg-foreground/[0.05] flex items-center justify-center mb-4">
          {glossaryVisual[item.term] ?? <Shield size={16} className="text-foreground/50" />}
        </div>
        <h3 className="text-[15px] font-semibold lowercase tracking-tight leading-snug text-foreground">
          {item.term}
        </h3>
        <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed lowercase flex-1">{item.def}</p>
      </motion.div>
    ))}
  </div>
);

const layerSteps = [
  {
    n: "01",
    t: "encrypt on device",
    d: "drafts, dms and memory are locked before they leave your phone.",
    color: BLUE,
  },
  {
    n: "02",
    t: "store only ciphertext",
    d: "if you enable backup, yankee servers hold blobs we cannot read.",
    color: "#1c1c1e",
  },
  {
    n: "03",
    t: "delete for real",
    d: "when you wipe an account, plaintext and backups expire. no hidden copies.",
    color: GREEN,
  },
];

export const PrivacyLayersScene = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % layerSteps.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5 relative h-[280px] flex items-center justify-center">
        {layerSteps.map((s, i) => {
          const offset = (i - active + layerSteps.length) % layerSteps.length;
          return (
            <motion.div
              key={s.n}
              animate={{
                y: offset * 18,
                scale: 1 - offset * 0.06,
                opacity: offset > 2 ? 0 : 1 - offset * 0.25,
                zIndex: 10 - offset,
              }}
              transition={{ duration: 0.55, ease }}
              className="absolute w-[78%] max-w-[260px] rounded-[1.35rem] border border-foreground/10 bg-card p-5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.45)]"
            >
              <span
                className="inline-flex w-8 h-8 rounded-full items-center justify-center text-white text-[11px] font-semibold"
                style={{ background: s.color === "#1c1c1e" ? "#2a2a2c" : s.color }}
              >
                {s.n}
              </span>
              <p className="mt-3 text-[14px] font-semibold lowercase text-foreground">{s.t}</p>
              <div className="mt-3 h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
                <motion.div
                  animate={{ width: offset === 0 ? "100%" : "0%" }}
                  transition={{ duration: 2.8, ease: "linear" }}
                  className="h-full rounded-full"
                  style={{ background: s.color === "#1c1c1e" ? BLUE : s.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="md:col-span-7 space-y-3">
        {layerSteps.map((s, i) => (
          <motion.button
            key={s.n}
            type="button"
            onClick={() => setActive(i)}
            animate={{
              borderColor: i === active ? "rgba(47,107,255,0.35)" : "rgba(0,0,0,0.06)",
              backgroundColor: i === active ? "rgba(47,107,255,0.04)" : "rgba(255,255,255,1)",
            }}
            className={`${shell} w-full text-left p-5 transition-colors`}
          >
            <p className="font-serif-display italic text-[1.15rem] text-foreground/45 leading-none">{s.n}</p>
            <h3 className="mt-2 text-[16px] font-semibold lowercase tracking-tight text-foreground">{s.t}</h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed lowercase">{s.d}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
