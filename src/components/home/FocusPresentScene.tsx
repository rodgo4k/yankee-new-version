import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Menu, Mic } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";

type Phase = "hello" | "chat" | "image";
const phases: Phase[] = ["hello", "chat", "image"];
const HOLD: Record<Phase, number> = { hello: 4200, chat: 5600, image: 5800 };

const Header = () => (
  <div className="flex items-center gap-2 px-3.5 mb-3 shrink-0">
    <ArrowLeft size={16} className="text-white/70" strokeWidth={2.2} />
    <p className="flex-1 text-center text-[14px] font-semibold text-white">Yankee AI</p>
    <Menu size={16} className="text-white/70" />
  </div>
);

const Composer = () => (
  <div className="absolute bottom-3 inset-x-3 flex items-center gap-2">
    <div className="flex-1 rounded-full bg-[#1c1c1e] border border-white/[0.06] px-4 py-2.5 text-[12px] text-white/35">
      Text Here
    </div>
    <span className="w-10 h-10 rounded-full bg-[#1c1c1e] border border-white/[0.06] flex items-center justify-center text-white/70">
      <Mic size={15} />
    </span>
  </div>
);

const HelloPhase = () => {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setPulse(true), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      key="hello"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <Header />
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <motion.p
          animate={pulse ? { scale: [1, 1.03, 1] } : {}}
          transition={{ duration: 1.6, repeat: Infinity, ease }}
          className="text-[22px] font-medium tracking-tight text-center"
        >
          <span style={{ color: BLUE }}>Hello</span>
          <span className="text-white">, ask something</span>
        </motion.p>
      </div>
      <Composer />
    </motion.div>
  );
};

const ChatPhase = ({ showImage }: { showImage: boolean }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 350),
      window.setTimeout(() => setStep(2), 900),
      window.setTimeout(() => setStep(3), 1500),
      window.setTimeout(() => setStep(4), 2100),
      window.setTimeout(() => setStep(5), 2700),
      window.setTimeout(() => setStep(6), 3400),
      window.setTimeout(() => setStep(7), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const lines: { side: "you" | "ai"; text: string; image?: boolean }[] = [
    { side: "you", text: "Hello" },
    { side: "ai", text: "Hello! How can I assist you today?" },
    { side: "you", text: "Please generate a image" },
    { side: "ai", text: "Of what? Please describe the image you would like to see." },
    { side: "you", text: "Any" },
    { side: "ai", text: "Here an image for you!" },
    { side: "ai", text: "", image: true },
  ];

  return (
    <motion.div
      key={showImage ? "image" : "chat"}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <Header />
      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-16 flex flex-col justify-end gap-2.5">
        {lines.map((line, i) => {
          if (step <= i) return null;
          if (line.image && !showImage && step < 7) return null;
          if (line.image) {
            return (
              <motion.div
                key="gen-img"
                initial={{ opacity: 0, y: 16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease }}
                className="relative self-start w-[72%] rounded-2xl overflow-hidden border border-white/[0.08]"
              >
                <img src={hillsSunset} alt="" className="w-full aspect-square object-cover" />
                <span className="absolute bottom-2 right-2 text-white/90 text-[12px]">✦</span>
              </motion.div>
            );
          }
          return (
            <motion.div
              key={`${line.text}-${i}`}
              initial={{ opacity: 0, y: 12, x: line.side === "you" ? 18 : -18 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.35, ease }}
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1 px-1">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                className="w-1.5 h-1.5 rounded-full bg-white/45"
              />
            ))}
          </motion.div>
        )}
      </div>
      <Composer />
    </motion.div>
  );
};

type YankeeAiPhoneProps = {
  className?: string;
  rotate?: number;
  labels?: Record<Phase, string>;
};

const defaultLabels: Record<Phase, string> = {
  hello: "01 · you ask once",
  chat: "02 · yankee stays on it",
  image: "03 · it actually lands",
};

export const YankeeAiPhone = ({
  className = "",
  rotate = 1.5,
  labels = defaultLabels,
}: YankeeAiPhoneProps) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={rotate}>
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
          {phase === "hello" && <HelloPhase key="hello" />}
          {phase === "chat" && <ChatPhase key="chat" showImage={false} />}
          {phase === "image" && <ChatPhase key="image" showImage />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

const FocusPresentScene = ({ className = "" }: { className?: string }) => (
  <YankeeAiPhone className={className} />
);

export default FocusPresentScene;
