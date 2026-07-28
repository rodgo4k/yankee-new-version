import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  Send,
  StickyNote,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import cafeFriends from "@/assets/cafe-friends.jpg";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import tripPhotos from "@/assets/trip-photos.png";
import studentsHero from "@/assets/students-hero.jpg";
import hillsSunset from "@/assets/hills-sunset.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";
const RED = "#ff453a";

type Phase = "boot" | "compose" | "publish" | "engage" | "tabs";
const phases: Phase[] = ["boot", "compose", "publish", "engage", "tabs"];
const HOLD: Record<Phase, number> = {
  boot: 3400,
  compose: 5600,
  publish: 5000,
  engage: 5400,
  tabs: 4400,
};

const COPY =
  "Spent the day volunteering at the animal shelter today. It's lowkey exhausting BUT seeing all those happy wagging tails made it 1000% worth it! Can't wait to go back and see them.";

const Avatar = ({ src, size, className = "" }: { src: string; size: number; className?: string }) => (
  <span
    className={`relative inline-flex shrink-0 rounded-full overflow-hidden bg-[#2a2a2c] ${className}`}
    style={{ width: size, height: size, minWidth: size }}
  >
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
  </span>
);

const HeartBurst = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: [0.2, 1.25, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 0.85, ease }}
        >
          <Heart size={52} fill={RED} style={{ color: RED }} />
        </motion.div>
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: Math.cos((i / 8) * Math.PI * 2) * 48,
              y: Math.sin((i / 8) * Math.PI * 2) * 48,
              scale: 0.3,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute w-2 h-2 rounded-full"
            style={{ background: i % 2 ? RED : "#ff8a80" }}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

const NotionsInner = ({ phase }: { phase: Phase }) => {
  const me = faceFor("Sophie Carter");
  const jackson = faceFor("Jackson Lee");
  const faces = uniqueFacesFor([
    "Emily Clark",
    "Kayan Lopes",
    "Talan Lubin",
    "Paityn Culhane",
  ]);

  const [storiesReady, setStoriesReady] = useState(0);
  const [storyDrift, setStoryDrift] = useState(0);
  const [tab, setTab] = useState<"Community" | "#Trending" | "Followers">("Community");
  const [typed, setTyped] = useState("");
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState(false);
  const [imgReveal, setImgReveal] = useState(0);
  const [followed, setFollowed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);
  const [feedY, setFeedY] = useState(0);

  const stories = [
    { label: "Add", src: null as string | null },
    { label: "Emily Clark", src: faces[0] },
    { label: "Kayan-lopes", src: faces[1] },
    { label: "Talan Lubin", src: faces[2] },
    { label: "Paityn Culhane", src: faces[3] },
  ];

  useEffect(() => {
    setStoriesReady(0);
    setStoryDrift(0);
    setTab("Community");
    setTyped("");
    setPosting(false);
    setPosted(phase === "engage" || phase === "tabs" || phase === "publish");
    setImgReveal(phase === "engage" || phase === "tabs" ? 3 : 0);
    setFollowed(false);
    setLiked(false);
    setBurst(false);
    setFeedY(0);

    const timers: number[] = [];

    if (phase === "boot") {
      [1, 2, 3, 4, 5].forEach((n, i) => {
        timers.push(window.setTimeout(() => setStoriesReady(n), 160 + i * 150));
      });
      timers.push(window.setTimeout(() => setStoryDrift(-22), 1700));
      timers.push(window.setTimeout(() => setStoryDrift(0), 2800));
    }

    if (phase === "compose") {
      setStoriesReady(5);
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        setTyped(COPY.slice(0, i));
        if (i >= COPY.length) window.clearInterval(id);
      }, 14);
      timers.push(id);
    }

    if (phase === "publish") {
      setStoriesReady(5);
      setTyped(COPY);
      timers.push(
        window.setTimeout(() => setPosting(true), 180),
        window.setTimeout(() => {
          setPosting(false);
          setPosted(true);
        }, 650),
        window.setTimeout(() => setImgReveal(1), 1050),
        window.setTimeout(() => setImgReveal(2), 1400),
        window.setTimeout(() => setImgReveal(3), 1750),
      );
    }

    if (phase === "engage") {
      setStoriesReady(5);
      setPosted(true);
      setImgReveal(3);
      timers.push(
        window.setTimeout(() => setFollowed(true), 550),
        window.setTimeout(() => {
          setBurst(true);
          setLiked(true);
        }, 1500),
        window.setTimeout(() => setBurst(false), 2400),
        window.setTimeout(() => setFeedY(-30), 3100),
      );
    }

    if (phase === "tabs") {
      setStoriesReady(5);
      setPosted(true);
      setImgReveal(3);
      setLiked(true);
      setFollowed(true);
      timers.push(
        window.setTimeout(() => setTab("#Trending"), 650),
        window.setTimeout(() => setTab("Followers"), 1750),
        window.setTimeout(() => setTab("Community"), 2900),
      );
    }

    return () => timers.forEach((t) => {
      window.clearTimeout(t);
      window.clearInterval(t);
    });
  }, [phase]);

  const showComposer = phase === "boot" || phase === "compose" || phase === "publish";

  return (
    <motion.div
      key={phase}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col h-full min-h-0 bg-black overflow-hidden"
    >
      {/* Header: Notions pill + globe — matches app print */}
      <div className="px-3 flex items-center justify-center gap-2 mb-2.5 shrink-0">
        <div className="inline-flex items-center rounded-full bg-[#1c1c1e] border border-white/[0.08] p-0.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-white text-black px-2.5 py-1 text-[10px] font-semibold">
            <StickyNote size={11} strokeWidth={2.2} />
            Notions
          </span>
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white/45">
            <MapPin size={12} />
          </span>
        </div>
      </div>

      {/* Stories row */}
      <div className="relative overflow-hidden shrink-0 mb-2.5">
        <motion.div animate={{ x: storyDrift }} transition={{ duration: 2.6, ease: "easeInOut" }} className="flex gap-2.5 px-3">
          {stories.map((s, i) => {
            if (i >= (phase === "boot" ? storiesReady : 5)) {
              return <div key={s.label} className="w-[52px] shrink-0" />;
            }
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14, scale: 0.82 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22, delay: phase === "boot" ? i * 0.05 : 0 }}
                className="flex flex-col items-center gap-1 w-[52px] shrink-0"
              >
                {s.src ? (
                  <Avatar src={s.src} size={43} className="border border-white/10" />
                ) : (
                  <span className="w-[43px] h-[43px] rounded-full bg-[#1c1c1e] border border-white/15 flex items-center justify-center text-white/75">
                    <Plus size={15} />
                  </span>
                )}
                <p className="text-[8px] text-white/50 truncate w-full text-center leading-tight">{s.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="px-3.5 flex items-center gap-3 mb-2 shrink-0">
        {(["Community", "#Trending", "Followers"] as const).map((t) => (
          <span
            key={t}
            className={`text-[12px] tracking-tight ${
              tab === t ? "text-white font-semibold" : "text-white/35 font-medium"
            }`}
          >
            {t}
          </span>
        ))}
        <span className="ml-auto text-white/35">
          <StickyNote size={13} />
        </span>
      </div>

      {/* Composer */}
      {showComposer && (
        <motion.div
          className="px-3.5 mb-2 shrink-0"
          animate={posting ? { scale: 0.96, opacity: 0.5, y: 14 } : { scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
        >
          <div className="rounded-2xl bg-[#1c1c1e] border border-white/[0.06] px-2.5 py-2.5">
            <div className="flex items-start gap-2">
              <Avatar src={me} size={28} />
              <div className="flex-1 min-w-0 pt-0.5">
                <p className="text-[12px] text-white/35 mb-1">What&apos;s new?</p>
                <p className="text-[11px] text-white/90 leading-snug min-h-[40px]">
                  {typed}
                  {phase === "compose" && typed.length < COPY.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.65 }}
                      className="inline-block w-[1.5px] h-[12px] bg-white/80 ml-0.5 align-middle"
                    />
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-end gap-2">
              <ImageIcon size={15} className="text-white/40" />
              <motion.span
                animate={
                  posting
                    ? { scale: [1, 0.88, 1.06], background: BLUE }
                    : {
                        background: typed.length > 12 ? BLUE : "rgba(255,255,255,0.08)",
                        scale: typed.length > 12 ? [1, 1.045, 1] : 1,
                      }
                }
                transition={
                  posting
                    ? { duration: 0.4 }
                    : typed.length > 12
                      ? { repeat: Infinity, duration: 1.35 }
                      : { duration: 0.25 }
                }
                className="rounded-full px-3.5 py-1 text-[11px] font-semibold text-white"
              >
                Post
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Search */}
      <div className="px-3.5 mb-2 shrink-0">
        <div className="rounded-full bg-[#1c1c1e] border border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <Search size={13} className="text-white/35" />
          <p className="text-[12px] text-white/35">Search</p>
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 min-h-0 overflow-hidden px-3.5 pb-3">
        <motion.div animate={{ y: feedY }} transition={{ duration: 0.55, ease }} className="space-y-2.5">
          <AnimatePresence mode="popLayout">
            {posted && (
              <motion.article
                layout
                initial={{ opacity: 0, y: -44, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="relative rounded-2xl bg-[#141416] border border-white/[0.06] p-2.5 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Avatar src={jackson} size={32} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-white truncate">Jackson Lee</p>
                    <p className="text-[10px] text-white/40">@jackson4change</p>
                  </div>
                  <motion.span
                    animate={
                      followed
                        ? {
                            background: "rgba(255,255,255,0.12)",
                            color: "rgba(255,255,255,0.55)",
                            scale: [1, 1.08, 1],
                          }
                        : { background: "transparent", color: "rgba(255,255,255,0.85)" }
                    }
                    className="rounded-full border border-white/20 px-2 py-0.5 text-[9px] font-semibold"
                  >
                    {followed ? "Following" : "Follow +"}
                  </motion.span>
                </div>

                <p className="text-[11px] text-white/85 leading-snug mb-2.5">{COPY}</p>

                {/* L-grid like app: tall left + two stacked right */}
                <div className="grid grid-cols-2 grid-rows-2 gap-1 rounded-xl overflow-hidden h-[132px] relative mb-1">
                  <div className="row-span-2 relative overflow-hidden rounded-l-lg bg-[#1c1c1e]">
                    {imgReveal >= 1 && (
                      <motion.img
                        src={liveThread}
                        alt=""
                        initial={{ opacity: 0, scale: 1.12 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="relative overflow-hidden bg-[#1c1c1e]">
                    {imgReveal >= 2 && (
                      <motion.img
                        src={cafeFriends}
                        alt=""
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="relative overflow-hidden rounded-br-lg bg-[#1c1c1e]">
                    {imgReveal >= 3 && (
                      <motion.img
                        src={filmNight}
                        alt=""
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <HeartBurst show={burst} />
                </div>

                <div className="flex items-center gap-3.5 text-white/45 pt-1">
                  <motion.span
                    animate={liked ? { scale: [1, 1.3, 1], color: RED } : {}}
                    className="inline-flex items-center gap-1 text-[10px]"
                  >
                    <Heart size={13} fill={liked ? RED : "transparent"} />
                    {liked ? "1.2k" : "248"}
                  </motion.span>
                  <span className="inline-flex items-center gap-1 text-[10px]">
                    <MessageCircle size={13} /> 36
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] ml-auto">
                    <Send size={12} />
                  </span>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          {phase === "tabs" && tab !== "Community" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-[#141416] border border-white/[0.06] p-3"
            >
              <p className="text-[11px] text-white/50">
                {tab === "#Trending"
                  ? "Trending notions near Boston · last hour"
                  : "People you follow posted 4 notions today"}
              </p>
              <div className="mt-2 flex gap-2">
                {[tripPhotos, hillsSunset, studentsHero].map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt=""
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.08 * i }}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

    </motion.div>
  );
};

const NotionsScene = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const phase = phases[i];

  useEffect(() => {
    const id = window.setTimeout(() => setI((n) => (n + 1) % phases.length), HOLD[phase]);
    return () => clearTimeout(id);
  }, [phase, i]);

  const labels: Record<Phase, string> = {
    boot: "stories warm up",
    compose: "write a notion",
    publish: "post lands in community",
    engage: "follow · double tap",
    tabs: "community · trending · followers",
  };

  return (
    <div className={`w-[280px] sm:w-[300px] shrink-0 ${className}`}>
      <AiPhoneShell className="!w-full !max-w-none" rotate={1.5}>
        <AnimatePresence mode="wait">
          <NotionsInner key={phase} phase={phase} />
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default NotionsScene;
