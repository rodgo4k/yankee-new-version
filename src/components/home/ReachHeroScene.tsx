import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import yankeeScene from "@/assets/yankee-scene.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import studentsHero from "@/assets/students-hero.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const posts = [
  {
    src: yankeeScene,
    caption: "trail photos · golden hour",
    when: "just now",
  },
  {
    src: cafeFriends,
    caption: "slow coffee club · saturday",
    when: "2m ago",
  },
  {
    src: studentsHero,
    caption: "campus walk · spring light",
    when: "5m ago",
  },
];

const recipients = [
  { name: "maya", initial: "M", tint: "bg-folk-surface-warm" },
  { name: "leo", initial: "L", tint: "bg-folk-surface-cool" },
  { name: "jisoo", initial: "J", tint: "bg-folk-surface-mint" },
  { name: "andre", initial: "A", tint: "bg-folk-panel" },
  { name: "kayla", initial: "K", tint: "bg-muted" },
  { name: "sam", initial: "S", tint: "bg-card" },
];

const ReachHeroScene = () => {
  const [postIndex, setPostIndex] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [cycle, setCycle] = useState(0);

  const post = posts[postIndex];

  useEffect(() => {
    setDelivered(0);
    const timers: number[] = [];

    recipients.forEach((_, i) => {
      timers.push(window.setTimeout(() => setDelivered(i + 1), 500 + i * 420));
    });

    timers.push(
      window.setTimeout(() => {
        setPostIndex((n) => (n + 1) % posts.length);
        setCycle((c) => c + 1);
      }, 500 + recipients.length * 420 + 2200),
    );

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const allDone = delivered >= recipients.length;

  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none">
      <div className="grid grid-cols-12 gap-3 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -2.5 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.7, ease }}
          className="yankee-surface col-span-7 relative rounded-[1.5rem] overflow-hidden min-h-[300px] md:min-h-[380px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={post.src}
              src={post.src}
              alt=""
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="rounded-full border-2 border-white/80 bg-black/25 backdrop-blur-sm px-2.5 py-1 text-[11px] text-folk-bubble-foreground lowercase">
              your post
            </span>
            <AnimatePresence>
              {allDone && (
                <motion.span
                  key="badge"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium text-foreground lowercase"
                >
                  100% delivered
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={post.caption}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif-display italic text-[1.2rem] md:text-[1.4rem] text-white leading-tight lowercase">
                  {post.caption}
                </p>
                <p className="mt-1.5 text-[11px] text-white/70 lowercase">{post.when}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="yankee-surface col-span-5 rounded-[1.5rem] bg-card p-3 md:p-4 flex flex-col"
        >
          <p className="text-[11px] text-foreground/50 lowercase px-1 mb-3">delivery</p>
          <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            {recipients.map((r, i) => {
              const on = i < delivered;
              return (
                <motion.div
                  key={`${r.name}-${cycle}`}
                  initial={false}
                  animate={{
                    opacity: on ? 1 : 0.35,
                    x: on ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className={`yankee-surface flex items-center gap-2 rounded-xl px-2 py-1.5 md:px-2.5 md:py-2 ${ on ? "bg-folk-bubble text-folk-bubble-foreground" : "bg-background" }`}
                >
                  <span
                    className={`yankee-surface yankee-surface--control w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full flex items-center justify-center text-[11px] font-semibold lowercase ${ on ? "bg-background text-foreground" : r.tint }`}
                  >
                    {r.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] md:text-[13px] font-semibold lowercase truncate">{r.name}</p>
                    <p className={`text-[10px] lowercase ${on ? "text-folk-bubble-foreground/80" : "text-foreground/45"}`}>
                      {on ? "in feed" : "waiting"}
                    </p>
                  </div>
                  {on ? (
                    <span className="w-5 h-5 shrink-0 rounded-full bg-folk-bubble-foreground/25 flex items-center justify-center">
                      <Check size={11} />
                    </span>
                  ) : (
                    <span className="yankee-surface yankee-surface--control w-5 h-5 shrink-0 rounded-full" />
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-border/10 px-1">
            <p className="text-[11px] lowercase text-foreground/55">
              {allDone ? "every follower got it" : `${delivered} of ${recipients.length} reached`}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 flex justify-end"
      >
        <div className="yankee-surface rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-folk-bubble-foreground lowercase max-w-[85%]">
          no ranking. every friend got it.
        </div>
      </motion.div>
    </div>
  );
};

export default ReachHeroScene;
