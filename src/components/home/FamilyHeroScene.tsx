import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Phone } from "lucide-react";
import familyField from "@/assets/family-field.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const messages = [
  { from: "mom", text: "saved the hike photos to the family album" },
  { from: "dad", text: "left a voice note · 0:44" },
  { from: "you", text: "cousins call at 7?" },
  { from: "sam", text: "i'm in. bring the pizza story." },
];

const FamilyHeroScene = () => {
  const [visible, setVisible] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [quiet, setQuiet] = useState(false);

  useEffect(() => {
    setVisible(0);
    setQuiet(false);
    const timers: number[] = [];

    messages.forEach((_, i) => {
      timers.push(window.setTimeout(() => setVisible(i + 1), 450 + i * 550));
    });
    timers.push(window.setTimeout(() => setQuiet(true), 450 + messages.length * 550 + 400));
    timers.push(
      window.setTimeout(() => setCycle((c) => c + 1), 450 + messages.length * 550 + 2800),
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28, rotate: -2.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.7, ease }}
        className="relative rounded-[1.5rem] border-2 border-foreground overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))] aspect-[4/5]"
      >
        <img src={familyField} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-white/70 bg-black/25 backdrop-blur-sm px-2.5 py-1 text-[11px] text-folk-bubble-foreground lowercase">
            <Heart size={11} />
            family circle
          </span>
          <motion.span
            initial={false}
            animate={{ opacity: quiet ? 1 : 0 }}
            className="rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium text-foreground lowercase"
          >
            quiet hours on
          </motion.span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 min-h-[9.5rem] justify-end">
          {messages.map((m, i) => {
            if (i >= visible) return null;
            const isYou = m.from === "you";
            return (
              <motion.div
                key={`${m.from}-${m.text}-${cycle}`}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease }}
                className={`flex ${isYou ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] px-3 py-2 text-[12px] md:text-[13px] leading-snug lowercase rounded-2xl shadow-[3px_3px_0_0_hsl(var(--foreground))] ${
                    isYou
                      ? "bg-folk-bubble text-white rounded-br-md"
                      : "bg-folk-bubble-soft text-foreground border-2 border-foreground rounded-bl-md"
                  }`}
                >
                  {!isYou && <span className="font-semibold">{m.from} · </span>}
                  {m.text}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="absolute -right-2 md:-right-6 top-[18%] z-10"
      >
        <div className="rounded-[1.15rem] border-2 border-foreground bg-card px-3.5 py-3 shadow-[4px_4px_0_0_hsl(var(--foreground))] flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full border-2 border-foreground bg-folk-bubble text-white flex items-center justify-center">
            <Phone size={15} />
          </span>
          <div>
            <p className="text-[12px] font-semibold lowercase leading-none">group call</p>
            <p className="mt-1 text-[11px] text-foreground/50 lowercase">cousins · tonight 7pm</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FamilyHeroScene;
