import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users } from "lucide-react";
import cafeFriends from "@/assets/cafe-friends.jpg";
import studentsHero from "@/assets/students-hero.jpg";
import dormLore from "@/assets/dorm-lore.png";
import heroParty from "@/assets/hero-party.jpg";
import stanfordHall from "@/assets/stanford-hall.png";
import harvardHall from "@/assets/harvard-hall.png";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import yankeeScene from "@/assets/yankee-scene.jpg";
import CrowdAppCard from "@/components/home/CrowdAppCard";

const ease = [0.25, 0.4, 0.25, 1] as const;

const leftCrowds = [
  {
    name: "Harvard University",
    count: "8.543",
    tags: ["#harvard", "#campus"],
    bg: harvardHall,
    pos: "50% 35%",
  },
  {
    name: "Stanford University",
    count: "6.210",
    tags: ["#stanford", "#campus"],
    bg: stanfordHall,
    pos: "50% 40%",
  },
  {
    name: "Running Club",
    count: "3.012",
    tags: ["#running", "#outdoors"],
    bg: yankeeScene,
    pos: "50% 30%",
  },
  {
    name: "Movie Dump",
    count: "3.891",
    tags: ["#movies", "#cinema"],
    bg: filmNight,
    pos: "50% 35%",
  },
];

const featuredScenes = [
  {
    src: cafeFriends,
    name: "Coffee Club",
    count: "2.104",
    tags: ["#coffee", "#friends"],
    pos: "50% 40%",
  },
  {
    src: dormLore,
    name: "Dorm Lore",
    count: "4.320",
    tags: ["#campus", "#students"],
    pos: "50% 45%",
  },
  {
    src: heroParty,
    name: "Link Up",
    count: "1.219",
    tags: ["#party", "#nightout"],
    pos: "50% 45%",
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
          className="col-span-5 md:col-span-3 relative min-h-[160px] md:min-h-[220px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={left.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="absolute inset-0"
            >
              <CrowdAppCard
                name={left.name}
                src={left.bg}
                count={left.count}
                tags={left.tags}
                pos={left.pos}
                className="rounded-[1.35rem]"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          layout
          className="col-span-7 md:col-span-6 relative min-h-[160px] md:min-h-[280px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.name}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-0"
            >
              <CrowdAppCard
                name={featured.name}
                src={featured.src}
                count={featured.count}
                tags={featured.tags}
                pos={featured.pos}
                wide
                className="rounded-[1.35rem]"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="col-span-12 md:col-span-3 flex md:flex-col gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="relative flex-1 min-h-[140px]"
          >
            <CrowdAppCard
              name="Explore Crowds"
              src={studentsHero}
              count="12.4k"
              tags={["#discover"]}
              pos="50% 30%"
              className="rounded-[1.35rem]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="relative flex-1 rounded-[1.35rem] overflow-hidden min-h-[120px] p-4"
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
              <div className="yankee-chat__bubble yankee-chat__bubble--them text-[13px] md:text-[14px]">
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
              <div className="yankee-chat__bubble yankee-chat__bubble--you text-[13px] md:text-[14px]">
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
