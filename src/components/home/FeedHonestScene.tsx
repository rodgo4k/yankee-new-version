import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Clock,
  DollarSign,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  MoreVertical,
  Radio,
  Search,
  X,
} from "lucide-react";
import AiPhoneShell from "@/components/home/AiPhoneShell";
import YankeePhoneNav from "@/components/home/YankeePhoneNav";
import { faceFor, uniqueFacesFor } from "@/lib/crowdFaces";
import cafeFriends from "@/assets/cafe-friends.jpg";
import hillsSunset from "@/assets/hills-sunset.jpg";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import tripPhotos from "@/assets/trip-photos.png";
import studentsHero from "@/assets/students-hero.jpg";
import squadPhotos from "@/assets/squad-photos.png";
import stanfordHall from "@/assets/stanford-hall.png";
import heroParty from "@/assets/hero-party.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;
const BLUE = "#2f6bff";

type Phase = "home" | "search" | "typing";
const phases: Phase[] = ["home", "search", "typing"];
const HOLD: Record<Phase, number> = { home: 6400, search: 5600, typing: 5800 };
const labels: Record<Phase, string> = {
  home: "chronological, always",
  search: "discovery stays outside the feed",
  typing: "search when you want",
};

const Avatar = ({ src, size, badge }: { src: string; size: number; badge?: boolean }) => (
  <span
    className="relative inline-flex shrink-0 rounded-full overflow-hidden bg-[#2a2a2c]"
    style={{ width: size, height: size, minWidth: size }}
  >
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    {badge && (
      <span
        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black"
        style={{ background: BLUE }}
      />
    )}
  </span>
);

const HomePhase = () => {
  const paityn = faceFor("Paityn Franci");
  const emily = faceFor("Emily Carter");
  const self = faceFor("Mia Taylor");
  const viewers = uniqueFacesFor(["Maya Reed", "Chris Parker", "Leo Hart"]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [1, 2, 3, 4].map((n, i) => window.setTimeout(() => setStep(n), 220 + i * 420));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -14 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3.5 flex items-center gap-2.5 mb-3 shrink-0">
        <Globe size={15} className="text-white/70" />
        <Radio size={15} className="text-white/70" />
        <p className="flex-1 text-center font-serif-display italic text-[18px] text-white tracking-tight">
          Yankee
        </p>
        <Bell size={15} className="text-white/70" />
        <span className="relative">
          <Avatar src={self} size={26} />
          <span
            className="absolute -bottom-0.5 -left-0.5 min-w-[12px] h-[12px] rounded-full text-[7px] font-bold text-white flex items-center justify-center px-0.5"
            style={{ background: BLUE }}
          >
            1
          </span>
        </span>
      </div>

      <div className="px-3.5 flex-1 min-h-0 flex flex-col pb-16">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 mb-2.5 shrink-0"
          >
            <Avatar src={paityn} size={36} />
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white truncate">Paityn Franci</p>
              <p className="text-[10px] text-white/40">Posted 24 minutes ago.</p>
            </div>
            <Heart size={15} className="text-white/55" />
            <span className="w-6 h-6 rounded-full border border-white/25 flex items-center justify-center text-white/55">
              <DollarSign size={11} />
            </span>
            <MoreVertical size={14} className="text-white/45" />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease }}
            className="relative flex-1 min-h-[220px] rounded-[1.35rem] overflow-hidden"
          >
            <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />

            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm px-2 py-1 text-[9px] text-white/90">
                <MapPin size={10} style={{ color: BLUE }} />
                Massachusetts | Boston
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm pl-1 pr-2 py-1">
                <span className="flex -space-x-1.5">
                  {viewers.map((v) => (
                    <Avatar key={v} src={v} size={14} />
                  ))}
                </span>
                <span className="text-[9px] text-white/90 font-medium">5.300</span>
              </span>
            </div>

            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-2.5 left-2.5 right-2.5"
              >
                <p className="text-[11px] text-white leading-snug mb-0.5">
                  I never tire of admiring this view before going to work. What do you think guys?
                </p>
                <p className="text-[10px] text-white/55 mb-2">#let&apos;s go #excited</p>

                {step >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 px-2.5 py-2 flex items-center gap-2"
                  >
                    <Avatar src={emily} size={28} badge />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-white">Emily Carter</p>
                      <p className="text-[10px] text-white/65 truncate">This was smooth. Loved it.</p>
                    </div>
                    <MessageCircle size={14} className="text-white/55 shrink-0" />
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      <YankeePhoneNav active="create" />
    </motion.div>
  );
};

const SearchPhase = () => {
  const [ready, setReady] = useState(0);
  const tiles = [
    hillsSunset,
    filmNight,
    liveThread,
    tripPhotos,
    studentsHero,
    squadPhotos,
    stanfordHall,
    heroParty,
    cafeFriends,
  ];

  useEffect(() => {
    const timers = tiles.map((_, i) => window.setTimeout(() => setReady(i + 1), 120 + i * 70));
    return () => timers.forEach(clearTimeout);
  }, []);

  const filters = ["Posts", "Profiles", "Notions", "Crowds"] as const;

  return (
    <motion.div
      key="search"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="px-3 flex items-center gap-1.5 mb-3 shrink-0 overflow-hidden">
        <span className="w-8 h-8 rounded-full bg-[#1c1c1e] border border-white/[0.08] flex items-center justify-center shrink-0">
          <Search size={13} className="text-white/70" />
        </span>
        {filters.map((f) => (
          <span
            key={f}
            className="rounded-full px-2.5 py-1.5 text-[10px] shrink-0"
            style={{
              background: f === "Profiles" ? "rgba(255, 180, 90, 0.22)" : "#1c1c1e",
              color: f === "Profiles" ? "#ffc078" : "rgba(255,255,255,0.7)",
              boxShadow: f === "Profiles" ? "0 0 12px rgba(255,180,90,0.25)" : undefined,
            }}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-hidden px-2.5 pb-16">
        <div className="grid grid-cols-3 gap-1.5">
          {tiles.map((src, i) => {
            if (ready <= i) return null;
            return (
              <motion.div
                key={`${src}-${i}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease }}
                className={`rounded-xl overflow-hidden ${i % 5 === 0 ? "row-span-2 min-h-[120px]" : "min-h-[72px]"}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <YankeePhoneNav active="dm" />
    </motion.div>
  );
};

const TypingPhase = () => {
  const [query, setQuery] = useState("");
  const full = "Asthetic Photos";
  const recent = ["Kayan Lopes", "Bruno Lipe", "Talan Lubin", "Kayan Lopes", "Bruno Lipe", "Talan Lubin"];

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setQuery(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  const bg = [filmNight, liveThread, tripPhotos, studentsHero, squadPhotos, hillsSunset];

  return (
    <motion.div
      key="typing"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="relative flex flex-col h-full min-h-0"
    >
      <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1.5 opacity-40">
        {bg.map((src) => (
          <img key={src} src={src} alt="" className="w-full h-full object-cover rounded-xl min-h-[90px]" />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

      <div className="relative z-10 px-3 pt-1 flex flex-col h-full">
        <div className="rounded-2xl bg-[#2c2c2e]/90 border border-white/10 backdrop-blur-xl px-3 py-2.5 flex items-center gap-2">
          <Search size={14} className="text-white/55" />
          <p className="text-[13px] text-white flex-1">
            {query}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="inline-block w-[1px] h-[13px] bg-white/80 ml-0.5 align-middle"
            />
          </p>
        </div>

        <div className="mt-2.5 rounded-2xl bg-[#1c1c1e]/92 border border-white/10 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5">
            <p className="text-[11px] text-white/80">Recent search</p>
            <p className="text-[11px] text-red-400/80">Delete all</p>
          </div>
          <div className="pb-1">
            {recent.map((name, i) => (
              <motion.div
                key={`${name}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i }}
                className="flex items-center gap-2.5 px-3 py-2"
              >
                <Clock size={12} className="text-white/35" />
                <p className="flex-1 text-[12px] text-white/85">{name}</p>
                <X size={12} className="text-white/35" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-auto mb-1 rounded-t-xl bg-[#1c1c1e] border border-white/[0.08] px-1.5 pt-1.5 pb-2">
          <div className="flex justify-around mb-1.5 text-[10px] text-white/45 px-1">
            <span>&quot;ios&quot;</span>
            <span>iOS</span>
            <span>Ions</span>
          </div>
          <div className="flex flex-col gap-[3px]">
            {[
              "qwertyuiop".split(""),
              "asdfghjkl".split(""),
              "zxcvbnm".split(""),
            ].map((row, ri) => (
              <div key={ri} className={`flex gap-[3px] ${ri === 1 ? "px-[3%]" : ri === 2 ? "px-0" : ""}`}>
                {ri === 2 && (
                  <span className="w-[12%] rounded-[5px] bg-[#2a2a2c] flex items-center justify-center text-[9px] text-white/70 shrink-0 py-[7px]">
                    ⇧
                  </span>
                )}
                {row.map((k) => (
                  <span
                    key={k}
                    className="flex-1 rounded-[5px] bg-[#3a3a3c] text-center text-[11px] text-white/90 py-[7px] capitalize leading-none"
                  >
                    {k}
                  </span>
                ))}
                {ri === 2 && (
                  <span className="w-[12%] rounded-[5px] bg-[#2a2a2c] flex items-center justify-center text-[10px] text-white/70 shrink-0 py-[7px]">
                    ⌫
                  </span>
                )}
              </div>
            ))}
            <div className="flex gap-[3px] mt-[1px]">
              <span className="w-[18%] rounded-[5px] bg-[#2a2a2c] text-center text-[10px] text-white/70 py-[7px]">123</span>
              <span className="flex-1 rounded-[5px] bg-[#3a3a3c] text-center text-[10px] text-white/50 py-[7px]">space</span>
              <span className="w-[22%] rounded-[5px] bg-[#2a2a2c] flex items-center justify-center text-white/85 py-[7px]">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" aria-hidden>
                  <path
                    d="M12.5 1.5v5.2H3.2M5.2 4.2 2.5 6.7l2.7 2.5"
                    stroke="currentColor"
                    strokeWidth="1.45"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
          {phase === "home" && <HomePhase key="home" />}
          {phase === "search" && <SearchPhase key="search" />}
          {phase === "typing" && <TypingPhase key="typing" />}
        </AnimatePresence>
      </AiPhoneShell>
      <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase tracking-tight">
        {labels[phase]}
      </p>
    </div>
  );
};

export default FeedHonestScene;
