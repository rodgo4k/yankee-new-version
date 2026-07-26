import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Heart, MessageCircle, Sparkles, Users, X } from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import tripPhotos from "@/assets/trip-photos.png";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import squadPhotos from "@/assets/squad-photos.png";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";
const RED = "#ff453a";

type Phase = "chrono" | "follow" | "ending";

const phases: Phase[] = ["chrono", "follow", "ending"];
const HOLD: Record<Phase, number> = {
  chrono: 6200,
  follow: 5800,
  ending: 5600,
};
const labels: Record<Phase, string> = {
  chrono: "chronological, always",
  follow: "only who you follow",
  ending: "a real ending",
};

const Avatar = ({
  letter,
  tint,
  size = 32,
}: {
  letter: string;
  tint: string;
  size?: number;
}) => (
  <span
    className="inline-flex shrink-0 items-center justify-center rounded-full text-white/90 font-medium"
    style={{
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      background: tint,
      fontSize: size * 0.34,
    }}
  >
    {letter}
  </span>
);

type Post = {
  name: string;
  time: string;
  tint: string;
  img: string;
  caption: string;
  likes?: string;
};

const FeedPost = ({
  post,
  compact = false,
}: {
  post: Post;
  compact?: boolean;
}) => (
  <div className="rounded-[1.15rem] bg-[#1c1c1e] border border-[#3a3a3c]/45 overflow-hidden flex flex-col min-h-0">
    <div className="flex items-center gap-2.5 px-3 pt-3 pb-2 shrink-0">
      <Avatar letter={post.name[0]} tint={post.tint} size={compact ? 30 : 34} />
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-semibold text-white truncate">{post.name}</p>
        <p className="text-[10px] text-white/35">{post.time}</p>
      </div>
    </div>
    <div
      className={`relative mx-3 rounded-xl overflow-hidden ${compact ? "h-[118px]" : "flex-1 min-h-[160px]"}`}
    >
      <img src={post.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
    <div className="px-3 pt-2.5 pb-3 shrink-0">
      <div className="flex items-center gap-3 mb-1.5">
        <Heart size={14} className="text-white/45" />
        <MessageCircle size={14} className="text-white/45" />
        {post.likes && <span className="ml-auto text-[10px] text-white/35">{post.likes}</span>}
      </div>
      <p className="text-[11px] text-white/70 leading-snug">
        <span className="font-semibold text-white">{post.name.split(" ")[0].toLowerCase()}</span>{" "}
        {post.caption}
      </p>
    </div>
  </div>
);

/* ─── 1. Chronological ─── */

const ChronoPhase = () => {
  const [count, setCount] = useState(0);
  const posts: Post[] = [
    {
      name: "Maya Reed",
      time: "just now",
      tint: "#8b5a7a",
      img: hillsSunset,
      caption: "blue hills at golden hour",
      likes: "48 likes",
    },
    {
      name: "Chris Parker",
      time: "12m",
      tint: "#4a6fa5",
      img: cafeFriends,
      caption: "saturday coffee run",
      likes: "31 likes",
    },
    {
      name: "Leo Hart",
      time: "1h",
      tint: "#2d8a6e",
      img: tripPhotos,
      caption: "trail photos from the weekend",
      likes: "92 likes",
    },
  ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setCount(1), 280),
      window.setTimeout(() => setCount(2), 1600),
      window.setTimeout(() => setCount(3), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const visible = posts.slice(0, count);
  // scroll up as feed fills so newest stays visible at top
  const scrollY = count <= 1 ? 0 : count === 2 ? -8 : -118;

  return (
    <motion.div
      key="chrono"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3"
    >
      <div className="flex items-center gap-2 mb-2.5 shrink-0">
        <Clock size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Home</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">newest first</span>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden relative">
        <motion.div
          animate={{ y: scrollY }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col gap-3"
        >
          <AnimatePresence initial={false}>
            {visible.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: -36, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease }}
                className={i === 0 && count === 1 ? "h-[340px] flex flex-col" : undefined}
              >
                <FeedPost post={p} compact={!(i === 0 && count === 1)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {count >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 mb-0.5 text-center text-[10px] text-white/35 shrink-0"
        >
          no reshuffling · no resurfacing
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── 2. Only who you follow ─── */

const FollowPhase = () => {
  const [blocked, setBlocked] = useState(false);
  const friends: Post[] = [
    {
      name: "Maya Reed",
      time: "8m",
      tint: "#8b5a7a",
      img: filmNight,
      caption: "film night at the loft",
      likes: "64 likes",
    },
    {
      name: "Chris Parker",
      time: "40m",
      tint: "#4a6fa5",
      img: liveThread,
      caption: "notes from the run club",
      likes: "27 likes",
    },
  ];

  useEffect(() => {
    const id = window.setTimeout(() => setBlocked(true), 1800);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      key="follow"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3"
    >
      <div className="flex items-center gap-2 mb-2.5 shrink-0">
        <Users size={15} style={{ color: BLUE }} />
        <p className="text-[13px] font-semibold text-white flex-1">Home</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">following</span>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 min-h-0 flex flex-col"
        >
          <FeedPost post={friends[0]} />
        </motion.div>

        <AnimatePresence mode="wait">
          {!blocked ? (
            <motion.div
              key="suggest"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 48, scale: 0.94 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-[1.15rem] bg-[#1c1c1e] border border-dashed border-white/25 overflow-hidden shrink-0"
            >
              <div className="flex items-center gap-2.5 px-3 pt-3 pb-2">
                <Avatar letter="S" tint="#6b5b95" size={34} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[12px] font-semibold text-white">Suggested for you</p>
                    <Sparkles size={11} className="text-white/35" />
                  </div>
                  <p className="text-[10px] text-white/40">promo account · not following</p>
                </div>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/45">suggest</span>
              </div>
              <div className="relative mx-3 mb-3 h-[100px] rounded-xl overflow-hidden opacity-50">
                <img src={squadPhotos} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <span className="rounded-full bg-black/55 px-2.5 py-1 text-[10px] text-white/80">
                    not in your feed
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="friend2"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="shrink-0"
            >
              <div className="mb-2 rounded-xl border border-[#3a3a3c]/45 bg-[#1c1c1e] px-3 py-2 flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,69,58,0.2)" }}
                >
                  <X size={13} style={{ color: RED }} />
                </span>
                <p className="text-[10px] text-white/50 leading-snug">
                  suggested accounts never leak into your scroll
                </p>
              </div>
              <FeedPost post={friends[1]} compact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─── 3. A real ending ─── */

const EndingPhase = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 400),
      window.setTimeout(() => setStep(2), 2200),
      window.setTimeout(() => setStep(3), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const lastPost: Post = {
    name: "Leo Hart",
    time: "3h",
    tint: "#2d8a6e",
    img: tripPhotos,
    caption: "last one from the trail",
    likes: "41 likes",
  };

  return (
    <motion.div
      key="ending"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="flex flex-col h-full px-3"
    >
      <div className="flex items-center gap-2 mb-2.5 shrink-0">
        <Check size={15} style={{ color: GREEN }} />
        <p className="text-[13px] font-semibold text-white flex-1">Home</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/50">finite</span>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-3">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 min-h-0 flex flex-col"
          >
            <FeedPost post={lastPost} />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="rounded-[1.15rem] p-4 text-center shrink-0"
            style={{
              background: "linear-gradient(160deg, rgba(47,107,255,0.28), rgba(28,28,30,0.95))",
              border: "1px solid rgba(47,107,255,0.35)",
            }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="mx-auto mb-3 w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: GREEN }}
            >
              <Check size={20} className="text-white" strokeWidth={2.8} />
            </motion.span>
            <p className="text-[14px] font-semibold text-white">you&apos;re all caught up</p>
            <p className="mt-1.5 text-[11px] text-white/50 leading-snug">
              next new post in about 3h. yankee steps aside.
            </p>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[10px] text-white/35 shrink-0"
          >
            a real ending · close the app
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

/* ─── main ─── */

const FeedHonestScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1.5}>
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
          {phase === "chrono" && <ChronoPhase key="chrono" />}
          {phase === "follow" && <FollowPhase key="follow" />}
          {phase === "ending" && <EndingPhase key="ending" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default FeedHonestScene;
