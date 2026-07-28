import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

const BLUE = "#2f6bff";

const principles = [
  {
    n: "01",
    title: "your feed, in order",
    desc: "chronological by default. no hidden reshuffling, no surprise resurfacing.",
  },
  {
    n: "02",
    title: "every post reaches everyone",
    desc: "when you follow someone, you see every post. the follow button actually means something.",
  },
  {
    n: "03",
    title: "crowds stay small",
    desc: "groups have a ceiling. when they get too big, they split before they become forums.",
  },
  {
    n: "04",
    title: "memory is private",
    desc: "your saved posts, notes and preferences are encrypted and never used to train models.",
  },
  {
    n: "05",
    title: "notifications you control",
    desc: "no bait, no streaks, no alerts designed to pull you back in.",
  },
];

const TimelineItem = ({
  item,
  index,
  active,
  progress,
}: {
  item: (typeof principles)[number];
  index: number;
  active: boolean;
  progress: MotionValue<number>;
}) => {
  const start = index / principles.length;
  const end = (index + 1) / principles.length;
  const mid = (start + end) / 2;

  const itemOpacity = useTransform(progress, [start - 0.08, mid, end + 0.08], [0.35, 1, 0.45]);
  const titleX = useTransform(progress, [start - 0.05, mid, end + 0.05], [14, 0, 6]);
  const descOpacity = useTransform(progress, [start, mid, end], [0.25, 1, 0.4]);
  const nodeScale = useTransform(progress, [start - 0.04, mid, end + 0.04], [0.88, 1.12, 0.92]);
  const nodeBorder = useTransform(
    progress,
    [start, mid, end],
    ["rgba(0,0,0,0.08)", "rgba(47,107,255,0.55)", "rgba(0,0,0,0.1)"],
  );
  const nodeGlow = useTransform(progress, [start, mid, end], [0, 1, 0.15]);

  return (
    <motion.li style={{ opacity: itemOpacity }} className="relative flex gap-5 md:gap-7 pb-12 last:pb-0">
      <motion.span
        style={{ scale: nodeScale, borderColor: nodeBorder }}
        className="relative z-10 flex h-9 w-9 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full bg-background border-2"
      >
        <motion.span
          style={{ opacity: nodeGlow }}
          className="absolute inset-[-2px] rounded-full pointer-events-none"
          animate={
            active
              ? {
                  boxShadow: [
                    `0 0 0 0 ${BLUE}00`,
                    `0 0 18px 2px ${BLUE}33`,
                    `0 0 0 0 ${BLUE}00`,
                  ],
                }
              : { boxShadow: `0 0 0 0 ${BLUE}00` }
          }
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          className="relative font-serif-display italic text-[13px] md:text-[15px] transition-colors duration-300"
          style={{ color: active ? BLUE : "rgba(0,0,0,0.45)" }}
        >
          {item.n}
        </span>
      </motion.span>

      <div className="pt-1.5 md:pt-2 min-w-0 overflow-hidden">
        <motion.h3
          style={{ x: titleX }}
          className={`text-[17px] md:text-[19px] font-semibold lowercase tracking-tight leading-snug transition-colors duration-300 ${
            active ? "text-foreground" : "text-foreground/70"
          }`}
        >
          {item.title}
        </motion.h3>
        <motion.p
          style={{ opacity: descOpacity }}
          className="mt-2 text-[14px] md:text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md"
        >
          {item.desc}
        </motion.p>
      </div>
    </motion.li>
  );
};

/** Scroll-driven manifesto timeline for the story page. */
const StoryManifesto = () => {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.35"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });

  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);
  const orbTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const orbOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0.6]);

  useMotionValueEvent(progress, "change", (v) => {
    const idx = Math.min(principles.length - 1, Math.max(0, Math.floor(v * principles.length)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  return (
    <ol ref={ref} className="relative mx-auto max-w-2xl">
      <div
        aria-hidden
        className="absolute left-[1.15rem] top-3 bottom-3 z-0 w-px bg-foreground/10 md:left-[1.35rem]"
      />

      <motion.div
        aria-hidden
        style={{ height: fillHeight }}
        className="absolute left-[1.15rem] top-3 z-0 w-px md:left-[1.35rem] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${BLUE} 0%, ${BLUE}99 55%, ${BLUE}33 100%)`,
          }}
        />
      </motion.div>

      <motion.span
        aria-hidden
        style={{ top: orbTop, opacity: orbOpacity }}
        className="absolute left-[1.15rem] md:left-[1.35rem] z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <motion.span
          animate={{ scale: [1, 1.45, 1], opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-7px] rounded-full"
          style={{ background: `${BLUE}40` }}
        />
        <span
          className="relative block h-2.5 w-2.5 rounded-full"
          style={{ background: BLUE, boxShadow: `0 0 14px ${BLUE}` }}
        />
      </motion.span>

      {principles.map((p, i) => (
        <TimelineItem key={p.n} item={p} index={i} active={active === i} progress={progress} />
      ))}
    </ol>
  );
};

export default StoryManifesto;
