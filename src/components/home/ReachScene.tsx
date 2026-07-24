import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import { Heart } from "lucide-react";
import mockupScene from "@/assets/yankee-scene.jpg";
import { surface } from "@/lib/yankeeSurface";

const ease = [0.25, 0.4, 0.25, 1] as const;

const feedPhrases = [
  "chronological, always",
  "only people you follow",
  "no opaque ranking",
  "everyone who follows you",
];

type ThreadStep =
  | "image"
  | "shrink"
  | "comment"
  | "liked"
  | "typing"
  | "reply"
  | "typing2"
  | "reply2"
  | "hold";

export const FeedStatusPill = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % feedPhrases.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <SpeechBubble
      tail="none"
      size="sm"
      className={surface("sm", "mb-6 overflow-hidden !shadow-[0_8px_24px_-10px_rgba(0,0,0,0.12)]")}
    >
      <div className="flex items-center gap-2">
        <PillTag>the feed</PillTag>
        <div className="relative h-[1.25rem] min-w-[14rem] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={index}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="absolute inset-0 whitespace-nowrap lowercase"
            >
              {feedPhrases[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </SpeechBubble>
  );
};

const TypingDots = () => (
  <div className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-folk-bubble-soft">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-foreground/40"
        animate={{ y: [0, -3, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const LikeBurst = () => (
  <motion.div
    initial={{ scale: 0.4, opacity: 0 }}
    animate={{ scale: [0.4, 1.25, 1], opacity: [0, 1, 1] }}
    transition={{ duration: 0.55, ease }}
    className="absolute -bottom-2 -right-2 z-20 flex items-center justify-center"
  >
    <motion.div
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 0.45, delay: 0.15, ease }}
      className="w-7 h-7 rounded-full bg-[#FF5A6A] flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(255,90,106,0.7)]"
    >
      <Heart size={12} className="fill-white text-white" />
    </motion.div>
  </motion.div>
);

const ReachScene = () => {
  const [step, setStep] = useState<ThreadStep>("image");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep("image");

    const timers = [
      window.setTimeout(() => setStep("shrink"), 2200),
      window.setTimeout(() => setStep("comment"), 3200),
      window.setTimeout(() => setStep("liked"), 4800),
      window.setTimeout(() => setStep("typing"), 6000),
      window.setTimeout(() => setStep("reply"), 7600),
      window.setTimeout(() => setStep("typing2"), 9600),
      window.setTimeout(() => setStep("reply2"), 11200),
      window.setTimeout(() => setStep("hold"), 13200),
      window.setTimeout(() => setCycle((c) => c + 1), 15800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const shrunk = step !== "image";
  const showComment = ["comment", "liked", "typing", "reply", "typing2", "reply2", "hold"].includes(step);
  const showLike = ["liked", "typing", "reply", "typing2", "reply2", "hold"].includes(step);
  const showTyping = step === "typing";
  const showReply = ["reply", "typing2", "reply2", "hold"].includes(step);
  const showTyping2 = step === "typing2";
  const showReply2 = ["reply2", "hold"].includes(step);

  return (
    <div className="w-full max-w-[480px] mx-auto md:ml-auto">
      <div className={surface("lg", "overflow-hidden")}>
        <div className="relative flex flex-col h-[420px] sm:h-[460px] md:h-[500px] overflow-hidden bg-card p-3 md:p-4">
          <motion.div
            key={`img-${cycle}`}
            className="relative z-0 mx-auto overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem] bg-folk-panel shrink-0"
            initial={false}
            animate={
              shrunk
                ? { height: 268, width: "94%" }
                : { height: "100%", width: "100%" }
            }
            transition={{ duration: 0.8, ease }}
          >
            <img
              src={mockupScene}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-bottom"
              draggable={false}
            />
            <motion.div
              className="absolute top-3 left-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35, ease }}
            >
              <div className="inline-flex items-center rounded-full bg-black/70 px-3 py-1.5 text-white text-[12px] lowercase">
                just posted
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-3 left-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: shrunk ? 0 : 1, y: shrunk ? 6 : 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-white text-[12px] lowercase">
                <Heart size={11} className="fill-white" /> 812 friends
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10 flex flex-col justify-start gap-2.5 shrink-0 overflow-visible"
            initial={false}
            animate={{
              height: shrunk ? 168 : 0,
              opacity: shrunk ? 1 : 0,
              marginTop: shrunk ? 14 : 0,
            }}
            transition={{ duration: 0.55, ease }}
          >
            <AnimatePresence>
              {showComment && (
                <motion.div
                  key={`comment-${cycle}`}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.45, ease }}
                  className="relative self-start max-w-[88%] overflow-visible"
                >
                  <div className="px-3.5 py-2.5 text-[13px] md:text-[14px] leading-snug lowercase rounded-2xl rounded-bl-md bg-folk-bubble-soft text-foreground">
                    <span className="font-semibold">maya</span> these are unreal. everyone saw this?
                  </div>
                  {showLike && <LikeBurst />}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {showTyping && (
                <motion.div
                  key={`typing-${cycle}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.3, ease }}
                  className="self-start"
                >
                  <TypingDots />
                </motion.div>
              )}

              {showReply && (
                <motion.div
                  key={`reply-${cycle}`}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="self-end max-w-[88%]"
                >
                  <div className="px-3.5 py-2.5 text-[13px] md:text-[14px] leading-snug lowercase rounded-2xl rounded-br-md bg-folk-bubble text-folk-bubble-foreground">
                    yeah. every friend, in order. no ranking.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {showTyping2 && (
                <motion.div
                  key={`typing2-${cycle}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.3, ease }}
                  className="self-start"
                >
                  <TypingDots />
                </motion.div>
              )}

              {showReply2 && (
                <motion.div
                  key={`reply2-${cycle}`}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="self-start max-w-[88%]"
                >
                  <div className="px-3.5 py-2.5 text-[13px] md:text-[14px] leading-snug lowercase rounded-2xl rounded-bl-md bg-folk-bubble-soft text-foreground">
                    <span className="font-semibold">leo</span> finally. chronological forever.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReachScene;
