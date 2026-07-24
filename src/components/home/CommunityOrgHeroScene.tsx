import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Split, Users } from "lucide-react";
import cafeFriends from "@/assets/cafe-friends.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const CommunityOrgHeroScene = () => {
  const [going, setGoing] = useState(3);
  const [split, setSplit] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setGoing(3);
    setSplit(false);
    const timers: number[] = [];
    const targets = [5, 8, 12, 18];

    targets.forEach((n, i) => {
      timers.push(window.setTimeout(() => setGoing(n), 600 + i * 500));
    });
    timers.push(window.setTimeout(() => setSplit(true), 600 + targets.length * 500 + 400));
    timers.push(
      window.setTimeout(() => setCycle((c) => c + 1), 600 + targets.length * 500 + 2800),
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28, rotate: -2.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.7, ease }}
        className="yankee-surface yankee-surface--media relative rounded-[1.5rem] overflow-hidden aspect-[4/5]"
      >
        <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-white/70 bg-black/25 backdrop-blur-sm px-2.5 py-1 text-[11px] text-folk-bubble-foreground lowercase">
            <Users size={11} />
            film · nyc
          </span>
          <span className="rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium text-foreground lowercase">
            meetup live
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-serif-display italic text-[1.35rem] md:text-[1.5rem] text-white leading-tight lowercase">
            photo walk, golden hour
          </p>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1 text-[11px] lowercase">
              <MapPin size={11} />
              saturday · 5pm
            </span>
            <span className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1 text-[11px] lowercase tabular-nums">
              <Users size={11} />
              {going} going
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="absolute -right-2 md:-right-8 top-[14%] z-10 w-[55%]"
      >
        <div className="yankee-surface rounded-[1.15rem] bg-card p-3">
          <p className="text-[11px] text-foreground/50 lowercase mb-2">capacity</p>
          <div className="yankee-surface yankee-surface--control h-2 rounded-full overflow-hidden bg-background">
            <motion.div
              className="h-full bg-folk-bubble"
              initial={false}
              animate={{ width: `${Math.min(100, (going / 20) * 100)}%` }}
              transition={{ duration: 0.4, ease }}
            />
          </div>
          <p className="mt-2 text-[11px] lowercase text-foreground/60">
            {split ? "ready to split" : "filling up"}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: split ? 1 : 0, y: split ? 0 : 8 }}
        transition={{ duration: 0.35, ease }}
        className="absolute -left-2 md:-left-6 bottom-[18%] z-10 max-w-[70%]"
      >
        <div className="yankee-surface rounded-2xl rounded-bl-md bg-folk-bubble-soft px-3.5 py-2.5 text-[12px] leading-snug lowercase">
          <span className="inline-flex items-center gap-1.5 font-semibold">
            <Split size={12} />
            film · nyc
          </span>
          <span className="block mt-0.5 text-foreground/70">and film · london just opened</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityOrgHeroScene;
