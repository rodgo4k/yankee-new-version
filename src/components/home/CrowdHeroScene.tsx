import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import cafeFriends from "@/assets/cafe-friends.jpg";
import studentsHero from "@/assets/students-hero.jpg";
import heroParty from "@/assets/hero-party.jpg";
import stanfordHall from "@/assets/stanford-hall.png";
import harvardHall from "@/assets/harvard-hall.png";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import yankeeScene from "@/assets/yankee-scene.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const leftCrowds = [
  { letter: "H", name: "harvard", meta: "campus crowd", bg: harvardHall },
  { letter: "S", name: "stanford", meta: "alumni room", bg: stanfordHall },
  { letter: "R", name: "running club", meta: "routes & meetups", bg: yankeeScene },
  { letter: "F", name: "film · nyc", meta: "just split", bg: filmNight },
];

const featuredScenes = [
  {
    src: cafeFriends,
    title: "slow coffee club",
    badge: "1,219 online",
    note: "meetup saturday · 12 going",
  },
  {
    src: studentsHero,
    title: "film night backyard",
    badge: "84 going",
    note: "self moderated · capped",
  },
  {
    src: heroParty,
    title: "listening party",
    badge: "live now",
    note: "doors open · bring a friend",
  },
];

const rightThreads = [
  { name: "maya", text: "is the film crowd still open?" },
  { name: "leo", text: "photo walk saturday?" },
  { name: "jisoo", text: "book club moved to thursday" },
  { name: "andre", text: "new running route dropped" },
];

type Phase = "board" | "meetup" | "reply" | "swap" | "hold";

const CrowdHeroScene = () => {
  const [phase, setPhase] = useState<Phase>("board");
  const [leftIndex, setLeftIndex] = useState(1);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [threadIndex, setThreadIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPhase("board");

    const timers = [
      window.setTimeout(() => setPhase("meetup"), 2200),
      window.setTimeout(() => setPhase("reply"), 4200),
      window.setTimeout(() => setPhase("swap"), 6200),
      window.setTimeout(() => {
        setLeftIndex((i) => (i + 1) % leftCrowds.length);
        setFeatureIndex((i) => (i + 1) % featuredScenes.length);
        setThreadIndex((i) => (i + 1) % rightThreads.length);
      }, 6600),
      window.setTimeout(() => setPhase("hold"), 7800),
      window.setTimeout(() => setPhase("board"), 9200),
      window.setTimeout(() => setCycle((c) => c + 1), 10400),
    ];

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const left = leftCrowds[leftIndex];
  const featured = featuredScenes[featureIndex];
  const thread = rightThreads[threadIndex];
  const showMeetup = ["meetup", "reply", "swap", "hold"].includes(phase);
  const showReply = ["reply", "swap", "hold"].includes(phase);

  return (
    <div className="relative w-full max-w-[920px] mx-auto">
      <div className="grid grid-cols-12 gap-3 md:gap-4 min-h-[340px] md:min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.55, ease }}
          className="yankee-surface col-span-5 md:col-span-3 relative rounded-[1.35rem] overflow-hidden flex flex-col justify-between min-h-[160px] md:min-h-[220px] p-4 md:p-5"
        >
          {leftCrowds.map((crowd, i) => (
            <motion.img
              key={crowd.name}
              src={crowd.bg}
              alt=""
              initial={false}
              animate={{ opacity: i === leftIndex ? 1 : 0 }}
              transition={{ duration: 0.55, ease }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
          <div className="relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white/80 bg-black/30 backdrop-blur-sm flex items-center justify-center font-serif-display text-xl italic text-white">
            {left.letter}
          </div>
          <div className="relative z-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={left.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-[14px] md:text-[15px] font-semibold lowercase text-white">{left.name}</p>
                <p className="mt-1 text-[11px] md:text-[12px] text-white/70 lowercase">{left.meta}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          layout
          className="yankee-surface col-span-7 md:col-span-6 relative rounded-[1.35rem] overflow-hidden bg-card min-h-[160px] md:min-h-[280px]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={featured.src}
              src={featured.src}
              alt=""
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.55, ease }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={featured.title}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="font-serif-display italic text-[1.25rem] md:text-[1.55rem] text-white leading-none"
              >
                {featured.title}
              </motion.p>
            </AnimatePresence>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium text-foreground lowercase">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                {featured.badge}
              </span>
              <span className="text-[11px] text-white/75 lowercase">{featured.note}</span>
            </div>
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-3 flex md:flex-col gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="yankee-surface relative flex-1 rounded-[1.35rem] overflow-hidden flex flex-col justify-between min-h-[120px] p-4 text-white"
          >
            <img
              src={crowdsHome}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
            <div className="relative z-10 w-9 h-9 rounded-full border-2 border-white/50 bg-black/25 flex items-center justify-center">
              <ArrowRight size={15} />
            </div>
            <div className="relative z-10">
              <p className="text-[14px] md:text-[15px] font-semibold lowercase leading-snug">explore new crowds</p>
              <p className="mt-1 text-[11px] text-white/75 lowercase">find a room that fits</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="yankee-surface relative flex-1 rounded-[1.35rem] overflow-hidden min-h-[120px] p-4"
          >
            <img
              src={liveThread}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
            <div className="relative z-10">
              <p className="text-[11px] text-white/65 lowercase mb-2">live thread</p>
              <div className="relative h-[3.2rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${thread.name}-${cycle}`}
                    initial={{ y: 22, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="absolute inset-0 text-[13px] leading-snug lowercase text-white"
                  >
                    <span className="font-semibold">{thread.name}</span> {thread.text}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-white/70 lowercase">
                <span className="w-1.5 h-1.5 rounded-full bg-folk-success" />
                <Users size={11} /> active now
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-4 md:mt-5 flex flex-col gap-2.5 min-h-[96px]">
        <AnimatePresence>
          {showMeetup && (
            <motion.div
              key={`meetup-${cycle}`}
              initial={{ opacity: 0, y: 18, x: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.96 }}
              transition={{ duration: 0.45, ease }}
              className="self-start max-w-[90%] md:max-w-[70%]"
            >
              <div className="yankee-surface rounded-2xl rounded-bl-md bg-folk-bubble-soft px-4 py-3 text-[13px] md:text-[14px] leading-snug lowercase">
                who&apos;s in for saturday? photo walk, golden hour.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showReply && (
            <motion.div
              key={`reply-${cycle}`}
              initial={{ opacity: 0, y: 18, x: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.96 }}
              transition={{ duration: 0.45, ease }}
              className="self-end max-w-[90%] md:max-w-[70%]"
            >
              <div className="yankee-surface rounded-2xl rounded-br-md bg-folk-bubble px-4 py-3 text-[13px] md:text-[14px] leading-snug text-folk-bubble-foreground lowercase">
                count me in. 12 going · rsvp closes friday.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CrowdHeroScene;
