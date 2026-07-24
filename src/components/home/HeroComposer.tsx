import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Mic, Plus } from "lucide-react";
import tripPhoto from "@/assets/trip-photos.png";

type Phase = "messages" | "expand" | "photo" | "scroll";

const messages = [
  { id: "trip", side: "right" as const, text: "just posted the trip photos" },
  { id: "seen", side: "left" as const, text: "seen by all 812 friends" },
  { id: "algo", side: "right" as const, text: "no algorithm. finally." },
];

const comments = [
  { name: "maya", text: "these are unreal ?" },
  { name: "leo", text: "when are we going back?" },
  { name: "jisoo", text: "best trip of the year" },
  { name: "andre", text: "the vibes are insane" },
  { name: "nina", text: "send the spot please" },
  { name: "sam", text: "looks like a movie" },
  { name: "priya", text: "missing this already" },
];

const ease = [0.25, 0.4, 0.25, 1] as const;
const swipeEase = [0.32, 0.72, 0.2, 1] as const;

const layerFix = {
  backfaceVisibility: "hidden" as const,
  WebkitBackfaceVisibility: "hidden" as const,
};

type HeroComposerProps = {
  /** When false, plays the sequence once then calls onSequenceComplete. Default true. */
  loop?: boolean;
  onSequenceComplete?: () => void;
  /** Hide the CTA block when a parent (e.g. HeroStage) renders it in a fixed slot. */
  hideCta?: boolean;
};

const HeroComposer = ({ loop = true, onSequenceComplete, hideCta = false }: HeroComposerProps) => {
  const [phase, setPhase] = useState<Phase>("messages");
  const [visibleCount, setVisibleCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const onCompleteRef = useRef(onSequenceComplete);
  onCompleteRef.current = onSequenceComplete;

  useEffect(() => {
    setPhase("messages");
    setVisibleCount(0);

    const timers = [
      window.setTimeout(() => setVisibleCount(1), 400),
      window.setTimeout(() => setVisibleCount(2), 1600),
      window.setTimeout(() => setVisibleCount(3), 2800),
      window.setTimeout(() => setPhase("expand"), 5200),
      window.setTimeout(() => setPhase("photo"), 8200),
      window.setTimeout(() => setPhase("scroll"), 11000),
    ];

    if (loop) {
      timers.push(window.setTimeout(() => setCycle((c) => c + 1), 17500));
    } else {
      timers.push(window.setTimeout(() => onCompleteRef.current?.(), 14500));
    }

    return () => timers.forEach(clearTimeout);
  }, [cycle, loop]);

  const showFeed = phase === "photo" || phase === "scroll";

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="yankee-surface yankee-surface--lg rounded-[2rem] md:rounded-[2.5rem] bg-card overflow-hidden">
        <div className="relative h-[300px] sm:h-[320px] md:h-[340px] overflow-hidden bg-card">
          <motion.div
            key={cycle}
            className="absolute top-0 left-0 h-full w-[200%] flex"
            initial={false}
            animate={{ x: showFeed ? "-50%" : "0%" }}
            transition={{ duration: 0.75, ease: swipeEase }}
            style={layerFix}
          >
            <div className="relative w-1/2 h-full shrink-0 overflow-hidden bg-card" style={layerFix}>
              <div className="absolute inset-0 px-4 md:px-6 pt-6 pb-4 flex flex-col justify-end gap-2.5">
                {messages.map((b, i) => {
                  const shown = i < visibleCount;
                  const isTrip = b.id === "trip";
                  const expanding = phase === "expand" && isTrip;
                  const fading = phase === "expand" && !isTrip;

                  if (expanding) {
                    return <div key={b.id} className="h-[42px]" aria-hidden />;
                  }

                  return (
                    <motion.div
                      key={`${b.id}-${cycle}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={
                        fading
                          ? { opacity: 0, y: 8 }
                          : shown
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 16 }
                      }
                      transition={{ duration: fading ? 0.35 : 0.5, ease }}
                      className={`flex ${b.side === "right" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`px-4 py-2.5 text-[14px] md:text-[15px] leading-snug lowercase rounded-[1.25rem] max-w-[85%] ${ b.side === "right" ? "bg-folk-bubble text-folk-bubble-foreground rounded-br-md" : "bg-folk-bubble-soft text-foreground rounded-bl-md" }`}
                      >
                        {b.text}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {phase === "expand" && (
                <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none bg-card/0">
                  <motion.div
                    initial={{ scale: 0.78, y: 100, x: 40 }}
                    animate={{ scale: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.85, ease }}
                    className="px-6 py-4 text-[16px] md:text-[19px] leading-snug lowercase rounded-[1.6rem] text-center max-w-[90%] bg-folk-bubble text-folk-bubble-foreground"
                    style={layerFix}
                  >
                    just posted the trip photos
                  </motion.div>
                </div>
              )}
            </div>

            <div className="relative w-1/2 h-full shrink-0 overflow-hidden bg-card" style={layerFix}>
              <motion.div
                className="absolute inset-x-0 top-0 w-full bg-card"
                initial={false}
                animate={{ y: phase === "scroll" ? -200 : 0 }}
                transition={{ duration: 1.1, ease }}
                style={layerFix}
              >
                <div className="relative mx-3 mt-3 md:mx-4 md:mt-4 h-[274px] sm:h-[294px] md:h-[314px] rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden bg-[#d9d5ce]">
                  <img
                    src={tripPhoto}
                    alt=""
                    className="block w-full h-full object-cover object-center"
                    draggable={false}
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-white text-[12px] lowercase">
                      <Heart size={11} className="fill-white" /> 128
                    </div>
                    <div className="inline-flex items-center rounded-full bg-black/70 px-3 py-1.5 text-white text-[12px] lowercase">
                      trip photos, just now
                    </div>
                  </div>
                </div>

                <div className="bg-card px-4 md:px-5 pt-3 pb-6 flex flex-col gap-2 min-h-[240px]">
                  {comments.map((c, i) => (
                    <div
                      key={c.text}
                      className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[88%] px-3.5 py-2 text-[12.5px] md:text-[13px] leading-snug lowercase rounded-2xl ${ i % 2 === 0 ? "bg-folk-bubble-soft text-foreground rounded-bl-md" : "bg-folk-bubble text-folk-bubble-foreground rounded-br-md" }`}
                      >
                        <span className="font-semibold">{c.name}</span> {c.text}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="px-3 pb-3 md:px-4 md:pb-4 relative z-10 bg-card">
          <div className="flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-2 py-1.5">
            <div className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center shrink-0">
              <Plus size={16} />
            </div>
            <div className="flex-1 text-[13px] md:text-[14px] text-muted-foreground lowercase truncate px-1">
              share something with everyone
            </div>
            <div className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center shrink-0">
              <Mic size={15} />
            </div>
          </div>
        </div>
      </div>

      {!hideCta && (
        <div className="mt-5 md:mt-6 flex flex-col items-center gap-3">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 rounded-full text-[15px] md:text-[16px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.65),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
          >
            get yankee
          </Link>
          <p className="text-[12px] md:text-[13px] text-foreground/55 lowercase">chronological � free � no switching</p>
        </div>
      )}
    </div>
  );
};

export default HeroComposer;
