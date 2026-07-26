import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  Heart,
  Home,
  Image as ImageIcon,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Repeat2,
  Search,
  Send,
  User,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import hillsSunset from "@/assets/hills-sunset.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import filmNight from "@/assets/film-night.png";
import tripPhotos from "@/assets/trip-photos.png";
import heroParty from "@/assets/hero-party.jpg";
import studentsHero from "@/assets/students-hero.jpg";
import squadPhotos from "@/assets/squad-photos.png";
import familyField from "@/assets/family-field.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const GREEN = "#34c759";

const Avatar = ({
  letter,
  tint,
  size = 32,
  ring = false,
}: {
  letter: string;
  tint: string;
  size?: number;
  ring?: boolean;
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
      boxShadow: ring ? "0 0 0 2px #a855f7" : undefined,
    }}
  >
    {letter}
  </span>
);

const BottomNav = ({ active = "home" }: { active?: string }) => (
  <div className="absolute bottom-5 inset-x-3 z-30">
    <div className="rounded-full bg-[#1c1c1e]/95 border border-white/[0.06] px-2 py-1.5 flex items-center justify-between">
      {[
        { id: "crowd", icon: <User size={14} /> },
        { id: "dm", icon: <Send size={14} /> },
        { id: "home", icon: <Home size={14} /> },
        { id: "profile", icon: <Compass size={14} /> },
        { id: "ai", icon: <span className="text-[10px] font-bold">AI</span> },
      ].map((it) => (
        <span
          key={it.id}
          className={`w-9 h-9 rounded-full flex items-center justify-center ${
            it.id === active ? "bg-white text-black" : "text-white/40"
          }`}
        >
          {it.icon}
        </span>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════
   HOW IT WORKS · three steps
═══════════════════════════════════════ */

type StepPhase = "pick" | "threads" | "meetup";

const stepPhases: StepPhase[] = ["pick", "threads", "meetup"];
const STEP_HOLD: Record<StepPhase, number> = { pick: 5200, threads: 5600, meetup: 5400 };
const stepLabel: Record<StepPhase, string> = {
  pick: "01 · pick a crowd",
  threads: "02 · good threads",
  meetup: "03 · show up",
};

const StepPick = () => {
  const [slide, setSlide] = useState(0);
  const cards = [
    { name: "Sunrise Runners", count: "465", img: hillsSunset, tags: ["#running", "#boston"] },
    { name: "Coffee Club", count: "1.2k", img: cafeFriends, tags: ["#coffee", "#slow"] },
    { name: "Film Night", count: "892", img: filmNight, tags: ["#film", "#nyc"] },
  ];
  const c = cards[slide];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setSlide(1), 1800),
      window.setTimeout(() => setSlide(2), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="pick"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full"
    >
      <div className="px-3.5 mb-2">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/30" />
          <p className="text-[12px] text-white/30">Search by interest or city</p>
        </div>
      </div>
      <div className="flex-1 mx-3.5 mb-14 relative rounded-[1.35rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.4, ease }}
            className="absolute inset-0"
          >
            <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />
            <div className="absolute top-3 left-3 right-3 flex justify-between">
              <span className="rounded-full bg-black/45 backdrop-blur-md px-2.5 py-1 text-[11px] text-white font-medium">
                {c.name}
              </span>
              <span className="rounded-full bg-black/45 backdrop-blur-md px-2 py-1 text-[10px] text-[#8ec5ff]">
                {c.count}
              </span>
            </div>
            <div className="absolute bottom-4 inset-x-0 flex flex-col items-center gap-2">
              <div className="flex gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/40 backdrop-blur-md px-2 py-0.5 text-[9px] text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(47,107,255,0)",
                    "0 0 0 8px rgba(47,107,255,0.18)",
                    "0 0 0 0 rgba(47,107,255,0)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="rounded-full border border-white/25 bg-black/35 backdrop-blur-xl px-7 py-2 text-[13px] font-semibold"
                style={{ color: BLUE }}
              >
                Join
              </motion.span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-[4.25rem] inset-x-0 flex justify-center gap-1.5 z-20">
        {cards.map((_, i) => (
          <motion.span
            key={i}
            animate={{
              width: i === slide ? 12 : 5,
              backgroundColor: i === slide ? "#fff" : "rgba(255,255,255,0.25)",
            }}
            className="h-1 rounded-full"
          />
        ))}
      </div>
      <BottomNav active="crowd" />
    </motion.div>
  );
};

const threadPosts = [
  {
    name: "Maya Reed",
    handle: "@mayareed",
    text: "Blue Hills trail notes from Saturday. wet rock near the ridge.",
    tint: "#8b5a7a",
    img: hillsSunset,
  },
  {
    name: "Chris Parker",
    handle: "@chris_parker",
    text: "anyone still going to the sunrise run tomorrow?",
    tint: "#4a6fa5",
  },
  {
    name: "Ryan Scott",
    handle: "@ryanscott",
    text: "pinned the waterproofing notions. read before you buy shoes.",
    tint: "#2d8a6e",
    img: tripPhotos,
  },
];

const StepThreads = () => {
  const [shown, setShown] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = threadPosts.map((_, i) =>
      window.setTimeout(() => setShown(i + 1), 350 + i * 700),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown]);

  return (
    <motion.div
      key="threads"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full"
    >
      <div className="px-3.5 mb-2 flex items-center gap-2">
        <p className="text-[13px] font-semibold text-white flex-1">Boston Runners</p>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
          <span className="text-[10px] text-white/40">1.2k</span>
        </span>
      </div>
      <div className="px-3.5 mb-2 flex gap-3 text-[11px]">
        <span className="text-white font-semibold border-b border-white pb-0.5">Community</span>
        <span className="text-white/35">#Trending</span>
        <span className="text-white/35">Followers</span>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-3 pb-14 space-y-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {threadPosts.map((p, i) => {
          if (shown <= i) return null;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/40 p-2.5"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Avatar letter={p.name[0]} tint={p.tint} size={26} />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-white truncate">{p.name}</p>
                  <p className="text-[9px] text-white/35">{p.handle}</p>
                </div>
                <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold text-black">
                  Follow
                </span>
              </div>
              <p className="text-[11px] text-white/75 leading-snug mb-2">{p.text}</p>
              {p.img && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] relative">
                  <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              )}
              <div className="mt-2 flex items-center gap-3 text-white/35">
                <Heart size={12} />
                <MessageCircle size={12} />
                <Repeat2 size={12} />
              </div>
            </motion.div>
          );
        })}
      </div>
      <BottomNav />
    </motion.div>
  );
};

const StepMeetup = () => {
  const [rsvp, setRsvp] = useState(false);
  const [going, setGoing] = useState(11);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setRsvp(true), 1200),
      window.setTimeout(() => setGoing(12), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="meetup"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full px-3.5"
    >
      <p className="text-[13px] font-semibold text-white mb-3">Boston Runners</p>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="rounded-2xl overflow-hidden border border-[#3a3a3c]/45 bg-[#1c1c1e]"
      >
        <div className="relative h-[140px]">
          <img src={hillsSunset} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute top-2.5 left-2.5 rounded-full bg-black/50 backdrop-blur-md px-2 py-0.5 text-[9px] text-white/85">
            Sat · 7:00 AM
          </span>
        </div>
        <div className="p-3">
          <p className="text-[14px] font-semibold text-white">Sunrise run · Blue Hills</p>
          <p className="mt-1 text-[11px] text-white/45 leading-snug">
            Meet at the trailhead. Bring water. rain or shine.
          </p>
          <div className="mt-3 flex items-center -space-x-1.5">
            {["M", "C", "R", "T"].map((l, i) => (
              <Avatar
                key={l}
                letter={l}
                tint={["#8b5a7a", "#4a6fa5", "#2d8a6e", "#6b5b95"][i]}
                size={24}
              />
            ))}
            <span className="pl-3 text-[10px] text-white/40">{going} going</span>
          </div>
          <motion.button
            type="button"
            animate={
              rsvp
                ? {
                    backgroundColor: GREEN,
                    boxShadow: [
                      "0 0 0 0 rgba(52,199,89,0)",
                      "0 0 0 6px rgba(52,199,89,0.2)",
                      "0 0 0 0 rgba(52,199,89,0)",
                    ],
                  }
                : { backgroundColor: BLUE }
            }
            transition={{
              backgroundColor: { duration: 0.35 },
              boxShadow: { duration: 1.4, repeat: Infinity, delay: 0.2 },
            }}
            className="mt-3.5 w-full rounded-full py-2.5 text-[12px] font-semibold text-white"
          >
            {rsvp ? "You're going" : "RSVP"}
          </motion.button>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: rsvp ? 1 : 0 }}
        className="mt-3 text-center text-[10px] text-white/40"
      >
        reminder set · 1 hour before
      </motion.p>
      <BottomNav />
    </motion.div>
  );
};

export const CrowdStepsScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = stepPhases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % stepPhases.length), STEP_HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={-1.5}>
        <div className="absolute top-11 right-4 z-30 flex gap-1">
          {stepPhases.map((p, idx) => (
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
          {phase === "pick" && <StepPick key="pick" />}
          {phase === "threads" && <StepThreads key="threads" />}
          {phase === "meetup" && <StepMeetup key="meetup" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {stepLabel[phase]}
      </p>
    </div>
  );
};

/* ═══════════════════════════════════════
   INSIDE A CROWD · feed
═══════════════════════════════════════ */

const stories = [
  { name: "You", letter: "+", tint: "#2a2a2e", add: true },
  { name: "Emily", letter: "E", tint: "#8b5a7a", ring: true },
  { name: "Kayan", letter: "K", tint: "#6b5b95", ring: true },
  { name: "Talan", letter: "T", tint: "#4a6fa5" },
  { name: "Paityn", letter: "P", tint: "#2d8a6e" },
];

const FeedPhase = () => {
  const [stage, setStage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 400),
      window.setTimeout(() => setStage(2), 1400),
      window.setTimeout(() => setStage(3), 2800),
      window.setTimeout(() => setStage(4), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || stage < 2) return;
    const id = window.setTimeout(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, 80);
    return () => clearTimeout(id);
  }, [stage]);

  return (
    <motion.div
      key="inside"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col h-full min-h-0"
    >
      {/* stories */}
      <div className="px-3 pt-0.5 mb-2 flex gap-2.5 overflow-hidden shrink-0">
        {stories.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center gap-1 shrink-0 w-[44px]"
          >
            {s.add ? (
              <span className="w-10 h-10 rounded-full border border-dashed border-white/25 flex items-center justify-center text-white/40">
                <Plus size={14} />
              </span>
            ) : (
              <Avatar letter={s.letter} tint={s.tint} size={40} ring={s.ring} />
            )}
            <p className="text-[8px] text-white/45 truncate w-full text-center">{s.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="px-3.5 mb-2 flex gap-3 text-[11px] shrink-0">
        <span className="text-white font-semibold">Community</span>
        <span className="text-white/35">#Trending</span>
        <span className="text-white/35">Followers</span>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-3 pb-14 space-y-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* composer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
          className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/40 p-2.5"
        >
          <div className="flex items-center gap-2 mb-2">
            <Avatar letter="Y" tint="#4a6fa5" size={24} />
            <p className="text-[11px] text-white/35">What&apos;s new?</p>
          </div>
          <div className="flex items-center justify-between">
            <ImageIcon size={14} className="text-white/30" />
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold text-white"
              style={{ background: BLUE }}
            >
              Post
            </span>
          </div>
        </motion.div>

        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={12} className="text-white/30" />
          <p className="text-[11px] text-white/30">Search</p>
        </div>

        {/* Jackson post with tight media grid */}
        {stage >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/40 p-2.5"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Avatar letter="J" tint="#6b5b95" size={26} />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-white">Jackson Lee</p>
                <p className="text-[9px] text-white/35">@jackson4change</p>
              </div>
              <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold text-black inline-flex items-center gap-0.5">
                <Plus size={9} /> Follow
              </span>
            </div>
            <p className="text-[11px] text-white/75 leading-snug mb-2">
              Volunteered at the shelter this morning. these pups made the whole week.
            </p>
            {/* tight collage: 1 tall + 2 stacked, gap-px only */}
            <div className="grid grid-cols-2 gap-px rounded-xl overflow-hidden aspect-[4/3]">
              <div className="relative row-span-2">
                <img src={squadPhotos} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="relative">
                <img src={familyField} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="relative">
                <img src={studentsHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-3 text-[10px] text-white/35">
              <span className="inline-flex items-center gap-1">
                <Heart size={11} /> 1k
              </span>
              <span className="inline-flex items-center gap-1">
                <MessageCircle size={11} /> 100
              </span>
              <Repeat2 size={11} />
              <span className="ml-auto">908</span>
              <MoreHorizontal size={12} />
            </div>
          </motion.div>
        )}

        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/40 p-2.5"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Avatar letter="L" tint="#b07a4a" size={26} />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-white">Liam Johnson</p>
                <p className="text-[9px] text-white/35">@liamj</p>
              </div>
              <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold text-black">
                Follow
              </span>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[16/10] relative">
              <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="mt-2 flex items-center gap-3 text-white/35">
              <Heart size={11} />
              <MessageCircle size={11} />
              <Repeat2 size={11} />
            </div>
          </motion.div>
        )}

        {stage >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#1c1c1e] border border-[#3a3a3c]/40 p-2.5"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Avatar letter="S" tint="#2d8a6e" size={26} />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-white">Sophia Carter</p>
                <p className="text-[9px] text-white/35">@sophiac</p>
              </div>
            </div>
            <p className="text-[11px] text-white/75 leading-snug mb-2">
              Photo walk this weekend · golden hour. 12 going.
            </p>
            <div className="rounded-xl overflow-hidden aspect-[16/10] relative">
              <img src={heroParty} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <motion.button
              type="button"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(47,107,255,0)",
                  "0 0 0 6px rgba(47,107,255,0.2)",
                  "0 0 0 0 rgba(47,107,255,0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2.5 w-full rounded-full py-2 text-[11px] font-semibold text-white"
              style={{ background: BLUE }}
            >
              RSVP
            </motion.button>
          </motion.div>
        )}
      </div>

      <BottomNav active="crowd" />
    </motion.div>
  );
};

export const CrowdInsideScene = ({ className = "" }: { className?: string }) => (
  <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
    <AiPhoneShell className="!w-full !max-w-none" rotate={1.5}>
      <FeedPhase />
    </AiPhoneShell>
    <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
      community feed
    </p>
  </div>
);
