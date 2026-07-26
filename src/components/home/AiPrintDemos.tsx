import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Menu, Mic } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import { AiModelsStrip } from "@/components/home/AiFeatureScenes";

export { AiModelsStrip };

const ease = [0.25, 0.4, 0.25, 1] as const;
const spring = { type: "spring" as const, stiffness: 380, damping: 28 };
const BLUE = "#2f6bff";

const Header = () => (
  <div className="flex items-center gap-2 px-3.5 mb-3 shrink-0">
    <ArrowLeft size={16} className="text-white/70" strokeWidth={2.2} />
    <p className="flex-1 text-center text-[14px] font-semibold text-white">Yankee AI</p>
    <Menu size={16} className="text-white/70" />
  </div>
);

const Composer = ({
  typed,
  focused = false,
}: {
  typed?: string;
  focused?: boolean;
}) => (
  <div className="absolute bottom-3 inset-x-3 flex items-center gap-2">
    <motion.div
      animate={focused ? { borderColor: "rgba(47,107,255,0.55)", scale: 1.01 } : {}}
      className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-4 py-2.5 text-[12px] text-white/35 min-h-[40px] flex items-center"
    >
      {typed ? (
        <span className="text-white/85">
          {typed}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="inline-block w-[1px] h-[12px] bg-white/80 ml-0.5 align-middle"
          />
        </span>
      ) : (
        "Text Here"
      )}
    </motion.div>
    <span className="w-10 h-10 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/70">
      <Mic size={15} />
    </span>
  </div>
);

const HelloScreen = ({
  mode = "pulse",
}: {
  mode?: "pulse" | "typewriter" | "glow";
}) => {
  const full = "Hello, ask something";
  const [typed, setTyped] = useState(mode === "typewriter" ? "" : full);
  const [ready, setReady] = useState(mode !== "typewriter");

  useEffect(() => {
    if (mode !== "typewriter") {
      const t = window.setTimeout(() => setReady(true), 400);
      return () => clearTimeout(t);
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setReady(true);
      }
    }, 55);
    return () => clearInterval(id);
  }, [mode]);

  const helloLen = Math.min(typed.length, 5);
  const rest = typed.slice(5);

  return (
    <div className="relative flex flex-col h-full min-h-0">
      <Header />
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <motion.p
          animate={
            mode === "glow" && ready
              ? {
                  textShadow: [
                    "0 0 0 rgba(47,107,255,0)",
                    "0 0 24px rgba(47,107,255,0.55)",
                    "0 0 0 rgba(47,107,255,0)",
                  ],
                }
              : mode === "pulse" && ready
                ? { scale: [1, 1.04, 1] }
                : {}
          }
          transition={{ duration: 1.8, repeat: Infinity, ease }}
          className="text-[22px] font-medium tracking-tight text-center"
        >
          <span style={{ color: BLUE }}>{typed.slice(0, helloLen)}</span>
          <span className="text-white">{rest}</span>
          {mode === "typewriter" && typed.length < full.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block w-[2px] h-[1em] bg-white/70 ml-0.5 align-[-0.1em]"
            />
          )}
        </motion.p>
      </div>
      <Composer />
    </div>
  );
};

const chatLines: { side: "you" | "ai"; text: string; image?: boolean }[] = [
  { side: "you", text: "Hello" },
  { side: "ai", text: "Hello! How can I assist you today?" },
  { side: "you", text: "Please generate a image" },
  { side: "ai", text: "Of what? Please describe the image you would like to see." },
  { side: "you", text: "Any" },
  { side: "ai", text: "Here an image for you!" },
  { side: "ai", text: "", image: true },
];

const ChatScreen = ({
  maxStep = 7,
  enter = "slide",
  imagePop = true,
  startAt = 0,
}: {
  maxStep?: number;
  enter?: "slide" | "rise" | "fade" | "cascade";
  imagePop?: boolean;
  startAt?: number;
}) => {
  const [step, setStep] = useState(startAt);

  useEffect(() => {
    setStep(startAt);
    const timers: number[] = [];
    for (let n = startAt + 1; n <= maxStep; n++) {
      timers.push(window.setTimeout(() => setStep(n), (n - startAt) * 480));
    }
    return () => timers.forEach(clearTimeout);
  }, [maxStep, startAt]);

  const enterAnim = (side: "you" | "ai", i: number) => {
    if (enter === "rise") return { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } };
    if (enter === "fade") return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    if (enter === "cascade")
      return {
        initial: { opacity: 0, y: -18, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { ...spring, delay: i * 0.02 },
      };
    return {
      initial: { opacity: 0, y: 12, x: side === "you" ? 18 : -18 },
      animate: { opacity: 1, y: 0, x: 0 },
    };
  };

  return (
    <div className="relative flex flex-col h-full min-h-0">
      <Header />
      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-16 flex flex-col justify-end gap-2.5">
        {chatLines.map((line, i) => {
          if (step <= i) return null;
          if (line.image) {
            return (
              <motion.div
                key="gen-img"
                initial={imagePop ? { opacity: 0, scale: 0.86, y: 20 } : { opacity: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease }}
                className="relative self-start w-[72%] rounded-2xl overflow-hidden border border-white/[0.08]"
              >
                <img src={hillsSunset} alt="" className="w-full aspect-square object-cover" />
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 }}
                  className="absolute bottom-2 right-2 text-white/90 text-[12px]"
                >
                  ✦
                </motion.span>
              </motion.div>
            );
          }
          const anim = enterAnim(line.side, i);
          return (
            <motion.div
              key={`${line.text}-${i}`}
              initial={anim.initial}
              animate={anim.animate}
              transition={"transition" in anim ? anim.transition : { duration: 0.35, ease }}
              className={`flex ${line.side === "you" ? "justify-end" : "justify-start"}`}
            >
              {line.side === "you" ? (
                <span
                  className="max-w-[80%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] text-white leading-snug"
                  style={{ background: `linear-gradient(90deg, #4d8dff, ${BLUE})` }}
                >
                  {line.text}
                </span>
              ) : (
                <p className="max-w-[88%] text-[12px] text-white/90 leading-snug px-0.5">{line.text}</p>
              )}
            </motion.div>
          );
        })}
        {step >= 2 && step < 3 && (
          <div className="flex gap-1 px-1">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                className="w-1.5 h-1.5 rounded-full bg-white/45"
              />
            ))}
          </div>
        )}
      </div>
      <Composer />
    </div>
  );
};

const PhoneFrame = ({
  children,
  rotate = 0,
  label,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  label?: string;
  className?: string;
}) => (
  <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
    <AiPhoneShell className="!w-full !max-w-none" rotate={rotate}>
      {children}
    </AiPhoneShell>
    {label && (
      <p className="mt-3 text-center text-[12px] text-foreground/45 lowercase tracking-tight">{label}</p>
    )}
  </div>
);

export const AiChooseDemo = () => (
  <PhoneFrame rotate={2} label="hello · ask something">
    <HelloScreen mode="typewriter" />
  </PhoneFrame>
);

export const AiTrioScene = () => {
  const [active, setActive] = useState(0);
  const items = [
    { key: "hello", label: "start", rotate: -4 },
    { key: "chat", label: "ask", rotate: 0 },
    { key: "image", label: "land", rotate: 4 },
  ] as const;

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % 3), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      <div className="hidden md:flex items-end justify-center gap-3 lg:gap-5">
        {items.map((p, i) => (
          <motion.div
            key={p.key}
            animate={{
              y: active === i ? -14 : 8,
              scale: active === i ? 1.05 : 0.9,
              opacity: active === i ? 1 : 0.5,
              filter: active === i ? "blur(0px)" : "blur(1.5px)",
            }}
            transition={{ duration: 0.55, ease }}
            className="w-[200px] lg:w-[220px] shrink-0"
            style={{ zIndex: active === i ? 3 : 1 }}
          >
            <AiPhoneShell rotate={p.rotate} className="!w-full !max-w-none">
              {p.key === "hello" && <HelloScreen mode="pulse" />}
              {p.key === "chat" && <ChatScreen maxStep={4} enter="slide" />}
              {p.key === "image" && <ChatScreen maxStep={7} enter="rise" startAt={5} />}
            </AiPhoneShell>
            <p className="mt-3 text-center text-[11px] text-foreground/45 lowercase">{p.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden flex justify-center">
        <PhoneFrame label={items[active].label}>
          <AnimatePresence mode="wait">
            <motion.div
              key={items[active].key}
              initial={{ opacity: 0, rotateY: 18 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -18 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {items[active].key === "hello" && <HelloScreen mode="pulse" />}
              {items[active].key === "chat" && <ChatScreen maxStep={4} enter="slide" />}
              {items[active].key === "image" && <ChatScreen maxStep={7} enter="rise" startAt={5} />}
            </motion.div>
          </AnimatePresence>
        </PhoneFrame>
      </div>
    </div>
  );
};

export const AiInviteDemo = () => {
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState<"hello" | "chat">("hello");

  useEffect(() => {
    setPhase("hello");
    const t1 = window.setTimeout(() => setPhase("chat"), 3200);
    const t2 = window.setTimeout(() => setCycle((c) => c + 1), 8600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [cycle]);

  return (
    <PhoneFrame rotate={-2} label={phase === "hello" ? "ready to ask" : "conversation starts"}>
      <AnimatePresence mode="wait">
        {phase === "hello" ? (
          <motion.div key="h" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(8px)" }} className="h-full">
            <HelloScreen mode="glow" />
          </motion.div>
        ) : (
          <motion.div key="c" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="h-full">
            <ChatScreen maxStep={3} enter="fade" />
          </motion.div>
        )}
      </AnimatePresence>
    </PhoneFrame>
  );
};

export const AiContributeDemo = () => {
  const prompt = "Please generate a image";
  const [cycle, setCycle] = useState(0);
  const [typed, setTyped] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setTyped("");
    setSent(false);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(prompt.slice(0, i));
      if (i >= prompt.length) {
        clearInterval(id);
        window.setTimeout(() => setSent(true), 500);
      }
    }, 45);
    const reset = window.setTimeout(() => setCycle((c) => c + 1), 9200);
    return () => {
      clearInterval(id);
      clearTimeout(reset);
    };
  }, [cycle]);

  return (
    <PhoneFrame rotate={1.5} label={sent ? "prompt sent" : "typing the ask"}>
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.div key="compose" className="relative flex flex-col h-full min-h-0">
            <Header />
            <div className="flex-1 flex items-center justify-center px-6 pb-16">
              <p className="text-[18px] text-white/35 text-center lowercase">waiting for your ask…</p>
            </div>
            <Composer typed={typed} focused />
          </motion.div>
        ) : (
          <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
            <ChatScreen maxStep={5} enter="rise" />
          </motion.div>
        )}
      </AnimatePresence>
    </PhoneFrame>
  );
};

export const AiCollabDemo = () => (
  <PhoneFrame rotate={-1.5} label="replies land in order">
    <ChatScreen maxStep={7} enter="cascade" />
  </PhoneFrame>
);

export const AiResultDemo = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <PhoneFrame rotate={2} label="it actually lands">
      <AnimatePresence mode="wait">
        {!show ? (
          <motion.div key="wait" className="relative flex flex-col h-full min-h-0">
            <Header />
            <div className="flex-1 flex items-center justify-center pb-16">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    animate={{ opacity: [0.25, 1, 0.25], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.18 }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: BLUE }}
                  />
                ))}
              </div>
            </div>
            <Composer />
          </motion.div>
        ) : (
          <motion.div key="img" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="h-full">
            <ChatScreen maxStep={7} enter="rise" startAt={5} imagePop />
          </motion.div>
        )}
      </AnimatePresence>
    </PhoneFrame>
  );
};

export const AiCommandsDemo = () => {
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setPhase(0);
    const timers = [
      window.setTimeout(() => setPhase(1), 2800),
      window.setTimeout(() => setPhase(2), 5600),
      window.setTimeout(() => setCycle((c) => c + 1), 9800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <PhoneFrame
      rotate={-2}
      label={phase === 0 ? "voice or text" : phase === 1 ? "ask in the thread" : "image ready"}
    >
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -12 }} className="h-full">
            <div className="relative flex flex-col h-full min-h-0">
              <HelloScreen mode="pulse" />
              <motion.span
                animate={{ scale: [1, 1.15, 1], boxShadow: [`0 0 0 0 ${BLUE}00`, `0 0 0 10px ${BLUE}33`, `0 0 0 0 ${BLUE}00`] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full pointer-events-none"
                style={{ border: `2px solid ${BLUE}` }}
              />
            </div>
          </motion.div>
        )}
        {phase === 1 && (
          <motion.div key="1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="h-full">
            <ChatScreen maxStep={4} enter="slide" />
          </motion.div>
        )}
        {phase === 2 && (
          <motion.div key="2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="h-full">
            <ChatScreen maxStep={7} enter="rise" startAt={5} />
          </motion.div>
        )}
      </AnimatePresence>
    </PhoneFrame>
  );
};

export const AiSessionScene = () => {
  const phases = ["hello", "chat", "image"] as const;
  const labels = {
    hello: "01 · you ask once",
    chat: "02 · yankee stays on it",
    image: "03 · it actually lands",
  };
  const HOLD = { hello: 4000, chat: 5200, image: 5600 };
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <PhoneFrame rotate={1.5} label={labels[phase]}>
      <div className="absolute top-14 left-2 z-30 flex flex-col gap-1.5">
        {phases.map((p, idx) => (
          <motion.span
            key={p}
            animate={{
              height: idx === i ? 16 : 4,
              backgroundColor: idx === i ? BLUE : "rgba(255,255,255,0.18)",
            }}
            className="w-1 rounded-full"
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {phase === "hello" && (
          <motion.div key="hello" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(6px)" }} className="h-full">
            <HelloScreen mode="typewriter" />
          </motion.div>
        )}
        {phase === "chat" && (
          <motion.div key="chat" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="h-full">
            <ChatScreen maxStep={5} enter="slide" />
          </motion.div>
        )}
        {phase === "image" && (
          <motion.div key="image" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="h-full">
            <ChatScreen maxStep={7} enter="rise" />
          </motion.div>
        )}
      </AnimatePresence>
    </PhoneFrame>
  );
};
